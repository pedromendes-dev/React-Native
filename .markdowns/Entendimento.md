# StyleSheet - React Native

## O que é?

O `StyleSheet` é uma **API para criar estilos no React Native**. É como o CSS, mas em JavaScript.

## Onde funciona?

| Plataforma | Suporta? | Como? |
|-----------|---------|-------|
| 🎯 React Native (mobile) | ✅ Sim | `StyleSheet.create()` |
| ❌ React Web | ✗ Não | Usa CSS, Styled Components, etc |

### Alternativas no React Web:
- CSS tradicional (`.css`)
- CSS Modules
- Styled Components
- Tailwind CSS
- CSS-in-JS (Emotion, etc.)

---

## Principais Métodos

- **`StyleSheet.create()`** - Cria um objeto com estilos *(mais usado)*
- **`StyleSheet.flatten()`** - Combina múltiplos estilos
- **`StyleSheet.absoluteFill`** - Preenche todo o container

---

## Exemplo de Uso

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  }
});
```

---

## Diferenças do CSS

| Aspecto | CSS | StyleSheet |
|--------|-----|-----------|
| Propriedades | `background-color` | `backgroundColor` (camelCase) |
| Valores numéricos | `20px` | `20` (sem unidade = dp) |
| Cascata | ✅ Herança automática | ❌ Não existe |
| Strings | Raro | `'10px'`, `'#fff'` |

---

## Benefícios

- ✅ Validação de erros em tempo de desenvolvimento
- ✅ Melhor performance (estilos criados uma única vez)
- ✅ Autocomplete no editor VS Code
- ✅ Type safety com TypeScript



----------------


📏  Diferença: Padding vs Margin

| Conceito | Onde?	Para quê? |                              |
|----------|------------------|------------------------------|
| Padding |	Espaçamento INTERNO |	Afasta o conteúdo da borda |
| Margin | Espaçamento EXTERNO | Afasta o elemento de outros |


🎨 Visual:

        ↕ MARGIN (externo)
┌─────────────────────────────┐
│       ↕ PADDING (interno)   │
│    ┌─────────────────────┐  │
│    │                     │  │
│    │     CONTEÚDO        │  │
│    │                     │  │
│    └─────────────────────┘  │
│       ↕ PADDING             │
└─────────────────────────────┘
        ↕ MARGIN


📦 Exemplo Prático:

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'blue',
    
    // PADDING - Espaço DENTRO (entre borda e conteúdo)
    padding: 20,           // Todos os lados
    paddingTop: 10,        // Só em cima
    paddingHorizontal: 15, // Esquerda + Direita
    
    // MARGIN - Espaço FORA (entre este e outros elementos)
    margin: 10,            // Todos os lados
    marginBottom: 20,      // Só embaixo
    marginVertical: 15,    // Cima + Baixo
  }
});


🔍 Quando usar cada um?
Use	Quando quiser...
Padding	Dar "respiro" ao conteúdo DENTRO da caixa
Margin	Separar ENTRE elementos diferentes

Resumo:
Padding = Espaço para dentro (conteúdo → borda)
Margin = Espaço para fora (elemento → outros elementos)