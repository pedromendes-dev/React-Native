## Explicações ....


Flexbox = Sistema de layout
display: flex = Propriedade que ativa o Flexbox


🔗 Relação:
┌─────────────────────────────────┐
│  FLEXBOX (Sistema de layout)    │
│                                 │
│  Propriedades:                  │
│  • display: flex                │ ← Ativa o Flexbox
│  • flex-direction               │
│  • justify-content              │
│  • align-items                  │
│  • flex-wrap                    │
│  etc...                         │
└─────────────────────────────────┘



HTML/CSS (Web):

// Para ativar Flexbox no CSS:
.container {
  display: flex;  ← Ativa o Flexbox
  flex-direction: row;
  justify-content: center;
}


React Native:

// React Native já tem Flexbox ativado por padrão!
// Você não precisa de "display: flex"
// Use diretamente as propriedades:

const styles = StyleSheet.create({
  container: {
    flex: 1,              // Equivalente a display: flex
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});


Resumo:
| Conceito | O quê? |
|----------|--------|
| Flexbox | Sistema inteiro de layout |
| display: flex | Propriedade que ativa o Flexbox (CSS web) |
| flex: 1 | Equivalente no React Native |