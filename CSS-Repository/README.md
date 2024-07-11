### Aula: CSS Flexbox e Grid

---

#### Parte 1: CSS Flexbox

**Objetivo:**
Entender o conceito de Flexbox e como utilizá-lo para criar layouts flexíveis e responsivos.

##### 1. Introdução ao Flexbox

Flexbox é um módulo de layout do CSS que facilita o design de layouts complexos e responsivos. Ele foi criado para distribuir espaço entre itens em um contêiner e oferecer poderosas capacidades de alinhamento.

##### 2. Conceitos Básicos

- **Flex Container:** O elemento pai que utiliza a propriedade `display: flex`.
- **Flex Items:** Os elementos filhos diretos do Flex Container.

##### 3. Propriedades do Flex Container

- `display: flex`: Define um contêiner flexível.
- `flex-direction`: Define a direção dos itens no contêiner (`row`, `row-reverse`, `column`, `column-reverse`).
- `justify-content`: Alinha os itens ao longo do eixo principal (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`).
- `align-items`: Alinha os itens ao longo do eixo cruzado (`flex-start`, `flex-end`, `center`, `baseline`, `stretch`).
- `flex-wrap`: Define se os itens devem ou não quebrar linha (`nowrap`, `wrap`, `wrap-reverse`).

##### 4. Propriedades dos Flex Items

- `order`: Define a ordem dos itens.
- `flex-grow`: Define a capacidade de um item crescer.
- `flex-shrink`: Define a capacidade de um item encolher.
- `flex-basis`: Define o tamanho inicial de um item.
- `align-self`: Alinha um item individual ao longo do eixo cruzado.

##### 5. Exemplos Práticos

**Exemplo 1: Layout Básico com Flexbox**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      display: flex;
      background-color: #f0f0f0;
      height: 100vh;
    }
    .item {
      background-color: #00BFA6;
      color: white;
      padding: 20px;
      margin: 10px;
    }
  </style>
  <title>Flexbox Example</title>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>
```

**Exemplo 2: Distribuindo Espaço entre Itens**

```html
<style>
  .container {
    display: flex;
    justify-content: space-between;
  }
</style>
```

**Exemplo 3: Flex Direction e Wrap**

```html
<style>
  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 200px;
  }
</style>
```

**Exemplo 4: Flex Grow, Shrink e Basis**

```html
<style>
  .item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100px;
  }
</style>
```

---

#### Parte 2: CSS Grid

**Objetivo:**
Entender o conceito de Grid e como utilizá-lo para criar layouts de grade complexos e responsivos.

##### 1. Introdução ao Grid

CSS Grid é um módulo de layout que permite criar layouts de grade bidimensionais, ou seja, você pode trabalhar tanto com linhas quanto com colunas simultaneamente.

##### 2. Conceitos Básicos

- **Grid Container:** O elemento pai que utiliza a propriedade `display: grid`.
- **Grid Items:** Os elementos filhos diretos do Grid Container.

##### 3. Propriedades do Grid Container

- `display: grid`: Define um contêiner de grade.
- `grid-template-columns`: Define o número e tamanho das colunas.
- `grid-template-rows`: Define o número e tamanho das linhas.
- `gap`: Define o espaço entre os itens da grade (`row-gap` e `column-gap`).

##### 4. Propriedades dos Grid Items

- `grid-column`: Define a posição e a largura de uma coluna.
- `grid-row`: Define a posição e a altura de uma linha.
- `grid-area`: Define uma área de grade.

##### 5. Exemplos Práticos

**Exemplo 1: Layout Básico com Grid**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      gap: 10px;
      background-color: #f0f0f0;
      padding: 10px;
    }
    .item {
      background-color: #00BFA6;
      color: white;
      padding: 20px;
    }
  </style>
  <title>Grid Example</title>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <div class="item">Item 4</div>
    <div class="item">Item 5</div>
    <div class="item">Item 6</div>
  </div>
</body>
</html>
```

**Exemplo 2: Áreas de Grade**

```html
<style>
  .container {
    display: grid;
    grid-template-areas: 
      "header header header"
      "sidebar main main"
      "footer footer footer";
    gap: 10px;
  }
  .header { grid-area: header; }
  .sidebar { grid-area: sidebar; }
  .main { grid-area: main; }
  .footer { grid-area: footer; }
</style>
```

**Exemplo 3: Linhas e Colunas com Tamanhos Variáveis**

```html
<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 100px auto;
    gap: 10px;
  }
</style>
```

**Exemplo 4: Usando grid-column e grid-row**

```html
<style>
  .item1 {
    grid-column: 1 / 3;
    grid-row: 1;
  }
  .item2 {
    grid-column: 2 / 4;
    grid-row: 2;
  }
</style>
```

---

#### Atividade Prática

**Desafio Flexbox:**
Crie um layout com um cabeçalho, um conteúdo principal com duas colunas (conteúdo e barra lateral) e um rodapé utilizando Flexbox.

**Desafio Grid:**
Crie um layout de página com cabeçalho, barra lateral, conteúdo principal e rodapé utilizando Grid. O conteúdo principal deve ter uma grade de 3 colunas e 2 linhas para organizar os artigos.

---

### Conclusão

Nesta aula, aprendemos sobre Flexbox e Grid, dois poderosos sistemas de layout do CSS. Vimos conceitos teóricos e exemplos práticos que ajudam a entender como cada um deles funciona. Com esses conhecimentos, você estará pronto para criar layouts flexíveis e complexos para seus projetos web.
