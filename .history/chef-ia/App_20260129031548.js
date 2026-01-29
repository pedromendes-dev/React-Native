import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import axios from 'axios';
import { GROQ_API_KEY } from '@env';

// ===== COMPONENTES REACT NATIVE =====
// View = div do html | Contêiner que agrupa outros elementos
// Text = p do html | Exibe textos (TUDO que é texto precisa estar aqui)
// StyleSheet = CSS do react native | API para criar estilos otimizados
// TouchableOpacity = button do html | Botão do react native (melhor que Button para estilizar)
// TextInput = input do html | Campo de entrada de texto
// StatusBar = barra de status do celular | Onde fica hora, bateria, wifi, etc

// =====  PROPRIEDADES IMPORTANTES DOS COMPONENTES =====
// multiline = permite que o input tenha várias linhas e pular linhas
// placeholder = texto que aparece dentro do input quando ele está vazio
// placeholderTextColor = cor do texto placeholder do input
// style = aplica estilos do StyleSheet ao componente
// value = {} | Armazena o valor atual digitado no TextInput (state controlado)
// onChangeText = {} | Função que executa toda vez que o usuário digita (atualiza o value)
// onPress = onClick | Função que executa quando o usuário clica no botão (TouchableOpacity)

// ===== ESTRUTURA DA TELA =====
// Container = recipiente principal que ocupa toda a tela (flex: 1)
// Header = cabeçalho do app com logo, título e descrição
// Input = campo para usuário digitar ingredientes (multiline)
// Button = botão para gerar receita (TouchableOpacity)
// Recipe View = área que exibe a receita gerada


export default function App() {
  /* 
   Pegar as informações do input (ingredientes)
   Enviar para a API (quando o botão for clicado)
   Receber a receita da API
   Exibir a receita na tela

 ---------------------------------------

   useState()  /  estado
   Estado = Variável Especial que você guarda dados e que
   toda vez que altera esses dados, o react te avisa
   */ 

   const [ingredientes, setIngredientes] = useState('')  // Estado para armazenar os ingredientes digitados pelo usuário
   const [receita, setReceita] = useState('')    // Estado para armazenar a receita gerada pela IA
   const [carregando, setCarregando] = useState(false)  // Estado para controlar o carregamento

  const api = axios.create({    // Criando uma instância do axios com a URL base da API
    baseURL: 'https://api.groq.com/openai/v1',
    headers: {  // headers = configurações adicionais da requisição HTTP
      'Content-Type': 'application/json',   // Tipo de conteúdo da requisição em json
      'Authorization': `Bearer ${GROQ_API_KEY}`,  // Cabeçalho de autorização com a chave da API
    },

  })

   // Função que será chamada quando o botão for clicado
    async function gerarReceita() {
      try {
        setCarregando(true)
        if (!ingredientes.trim()) {
          Alert.alert('Atenção', 'Por favor, digite os ingredientes!');
          setCarregando(false)
          return;
        }

        console.log('Gerando receita...');
        
        const resposta = await api.post('/chat/completions', {
          model: 'llama-3.3-70b-versatile',  
          temperature: 0.7,
          max_tokens: 1024,   
          messages: [ 
            {
              role: 'system',
              content: `Você é um chef criativo. Crie receitas simples e deliciosas com os ingredientes fornecidos. Responda em português do Brasil.
          
                Use este formato:
                🍳 [NOME DA RECEITA EM MAIÚSCULO]
                ✨
                ⏱️ Tempo: [tempo de preparo]
                🍽️ Porções: [quantidade]
                ♨️ Dificuldade: [fácil, médio, difícil]
                📋 INGREDIENTES:
                * [ingrediente 1]
                * [ingrediente 2]
                * [etc]

                🥘 MODO DE PREPARO:
                1. [passo 1]
                2. [passo 2]
                3. [etc]

                💡 DICA: [uma dica especial sobre a receita]`
            },
            {
              role: 'user',
              content: `Crie uma receita com os seguintes ingredientes: ${ingredientes}`
            }
          ]
        });

        setReceita(resposta.data.choices[0].message.content)
        console.log('Receita gerada com sucesso!')
      } catch (erro) {
        console.error('Erro ao gerar receita:', erro)
        Alert.alert('Erro', 'Não consegui gerar a receita. Tente novamente!')
      } finally {
        setCarregando(false)
      }
    }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>👨‍🍳</Text>
          <Text style={styles.titulo}>Chef IA</Text>
          <Text style={styles.subtitulo}>Gerador de Receitas com Inteligência Artificial</Text>
          <Text style={styles.descricao}>Digite seus ingredientes e descubra receitas deliciosas!</Text>
        </View>

        {/* Input de Ingredientes */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ingredientes que você tem:</Text>
          <TextInput
            style={styles.input}
            multiline
            placeholder="Ex: frango, cebola, alho, tomate..."
            placeholderTextColor="#999"
            value={ingredientes}
            onChangeText={setIngredientes}
            editable={!carregando}
          />
        </View>

        {/* Botão de Gerar Receita */}
        <TouchableOpacity 
          style={[styles.botao, carregando && styles.botaoDisabled]}
          onPress={gerarReceita}
          disabled={carregando}
        >
          <Text style={styles.textoBotao}>
            {carregando ? '⏳ Gerando...' : '✨ Gerar Receita'}
          </Text>
        </TouchableOpacity>

        {/* Exibição da Receita */}
        {receita && (
          <View style={styles.receitaContainer}>
            <Text style={styles.receitaTexto}>{receita}</Text>
          </View>
        )}

        {!receita && !carregando && ingredientes && (
          <View style={styles.mensagemContainer}>
            <Text style={styles.mensagem}>👆 Clique em "Gerar Receita" para começar!</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ff6b35',
  },
  logo: {
    fontSize: 60,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff6b35',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#e8e8e8',
    marginBottom: 8,
    fontWeight: '600',
  },
  descricao: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  inputContainer: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e8e8e8',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#2a2a2a',
    borderWidth: 2,
    borderColor: '#ff6b35',
    borderRadius: 10,
    padding: 15,
    color: '#fff',
    fontSize: 16,
    minHeight: 120,
    textAlignVertical: 'top',
  },
  botao: {
    backgroundColor: '#ff6b35',
    marginHorizontal: 20,
    marginVertical: 15,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#ff6b35',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  botaoDisabled: {
    opacity: 0.6,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  receitaContainer: {
    backgroundColor: '#2a2a2a',
    marginHorizontal: 20,
    marginVertical: 15,
    padding: 20,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#ff6b35',
  },
  receitaTexto: {
    color: '#e8e8e8',
    fontSize: 16,
    lineHeight: 24,
  },
  mensagemContainer: {
    backgroundColor: '#2a2a2a',
    marginHorizontal: 20,
    marginVertical: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  mensagem: {
    color: '#ff6b35',
    fontSize: 16,
    fontWeight: '600',
  },
});
