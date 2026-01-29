# 👨‍🍳 Chef IA - Gerador de Receitas com Inteligência Artificial

Um aplicativo React Native que gera receitas personalizadas usando IA, baseado nos ingredientes que você tem em casa!

## 📱 Sobre o Projeto

O Chef IA é um aplicativo mobile desenvolvido com React Native e Expo que utiliza a API Groq (modelo Llama 3.3) para criar receitas deliciosas e criativas a partir dos ingredientes fornecidos pelo usuário.

## ✨ Funcionalidades

- 🔍 Interface intuitiva e moderna
- 🤖 Geração de receitas usando IA (Groq API)
- 📝 Receitas formatadas com tempo, porções e dificuldade
- 🎨 Design responsivo e elegante
- 🔒 Variáveis de ambiente seguras com .env

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para React Native
- **Axios** - Cliente HTTP para requisições
- **Groq API** - API de IA para geração de receitas
- **React Native Dotenv** - Gerenciamento de variáveis de ambiente

## 📦 Como Construir o Projeto

### 1. Criar o projeto (se ainda não existir)
```bash
npx create-expo-app --template blank chef-ia
```

### 2. Entrar na pasta do projeto
```bash
cd chef-ia
```

### 3. Instalar as dependências
```bash
npm install axios react-native-dotenv
```

### 4. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:
```env
GROQ_API_KEY=sua_chave_da_api_aqui
```

> **Importante:** Obtenha sua chave da API em [Groq Console](https://console.groq.com/)

### 5. Iniciar o aplicativo
```bash
npm start
```

## 📱 Como Usar

1. Digite os ingredientes que você tem disponível
2. Clique em "Gerar Receita"
3. Aguarde a IA processar
4. Veja sua receita personalizada com:
   - Nome da receita
   - Tempo de preparo
   - Número de porções
   - Nível de dificuldade
   - Lista de ingredientes
   - Modo de preparo detalhado
   - Dica especial

## 📂 Estrutura do Projeto

```
chef-ia/
├── assets/              # Recursos do app (imagens, fontes)
├── App.js              # Componente principal
├── .env                # Variáveis de ambiente (não versionar!)
├── .env.example        # Exemplo de variáveis (versionar)
├── babel.config.js     # Configuração do Babel
├── package.json        # Dependências do projeto
└── README.md          # Documentação
```

## 🔐 Segurança

- A chave da API está protegida em arquivo `.env`
- O arquivo `.env` está no `.gitignore` (não é enviado ao GitHub)
- Use `.env.example` como referência para outras pessoas

## 🎨 Cores do Tema

- Background: `#1a1a2e` (Azul escuro)
- Containers: `#2d2d44` (Cinza escuro)
- Botão: `#e17055` (Laranja coral)
- Texto: `#fff` (Branco)

## 📝 Package.json

Para mais informações sobre scripts e dependências, consulte o arquivo `package.json` do projeto.

## 🤝 Contribuindo

Sinta-se à vontade para contribuir com melhorias!

## 📄 Licença

Projeto desenvolvido para fins educacionais.

---

Desenvolvido com ❤️ usando React Native + Expo + Groq AI
```