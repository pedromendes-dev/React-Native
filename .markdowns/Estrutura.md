Termos em inglês:

Header = Cabeçalho/Topo
Footer = Rodapé (parte de baixo)
Body = Corpo (conteúdo principal)


Estrutura comum de um app:

┌─────────────────┐
│   HEADER        │ ← Topo (logo, título)
├─────────────────┤
│                 │
│   BODY          │ ← Conteúdo principal
│                 │
├─────────────────┤
│   FOOTER        │ ← Rodapé (opcional)
└─────────────────┘

----------

Container = Recipiente/Contêiner que envolve outros elementos!

É uma <View> que funciona como uma "caixa" que agrupa e organiza os outros componentes dentro dela.

🎯 Analogia simples:
Pense numa caixa de papelão:

A caixa = Container
Os objetos dentro = Componentes (Text, TextInput, Button, etc)

No seu código:
<View style={styles.container}>   ← Container principal (caixa grande)
  <StatusBar />
  
  <View>                          ← Container do header (caixa menor)
    <Text>👨‍🍳</Text>
    <Text>Chef IA</Text>
  </View>
  
  <TextInput />                   ← Componente filho
  <TouchableOpacity />            ← Componente filho
</View>


📦 Estrutura visual:
┌─────────────────────────────────┐
│  CONTAINER PRINCIPAL            │ ← View (container)
│  ┌─────────────────────────┐   │
│  │ CONTAINER HEADER        │   │ ← View (header)
│  │  👨‍🍳                     │   │
│  │  Chef IA                │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ Input                   │   │ ← TextInput
│  └─────────────────────────┘   │
└─────────────────────────────────┘

🎨 Para que serve?

✅ Organizar elementos
✅ Aplicar estilos gerais (cor de fundo, padding, etc)
✅ Controlar layout (flexbox)