### Propriedades do Contêiner Grid

1. **display: grid;**
   - Define um contêiner de grade. Os elementos filhos desse contêiner se tornam grid items.

2. **grid-template-columns**
   - Define o número e o tamanho das colunas.
   - Exemplo: `grid-template-columns: 100px 200px;` cria duas colunas, a primeira com 100px e a segunda com 200px.
   - Valores podem incluir `px`, `%`, `fr` (fração do espaço disponível), `auto`, etc.

3. **grid-template-rows**
   - Define o número e o tamanho das linhas.
   - Exemplo: `grid-template-rows: 100px 200px;` cria duas linhas, a primeira com 100px e a segunda com 200px.

4. **grid-template-areas**
   - Define áreas nomeadas para o layout da grade.
   - Exemplo:
     ```css
     grid-template-areas:
       "header header"
       "sidebar content"
       "footer footer";
     ```

5. **grid-template**
   - É uma abreviação para as propriedades `grid-template-rows`, `grid-template-columns`, e `grid-template-areas`.
   - Exemplo:
     ```css
     grid-template:
       "header header" 50px
       "sidebar content" 1fr
       "footer footer" 30px
       / 1fr 3fr;
     ```

6. **grid-column-gap** (ou **column-gap**)
   - Define o espaço entre as colunas.
   - Exemplo: `column-gap: 20px;`

7. **grid-row-gap** (ou **row-gap**)
   - Define o espaço entre as linhas.
   - Exemplo: `row-gap: 20px;`

8. **grid-gap** (ou **gap**)
   - Define o espaço entre linhas e colunas.
   - Exemplo: `gap: 20px;` ou `grid-gap: 10px 20px;` (linha e coluna).

9. **justify-items**
   - Alinha os itens dentro de suas áreas de grade ao longo do eixo horizontal.
   - Valores: `start`, `end`, `center`, `stretch` (padrão).

10. **align-items**
    - Alinha os itens dentro de suas áreas de grade ao longo do eixo vertical.
    - Valores: `start`, `end`, `center`, `stretch` (padrão).

11. **justify-content**
    - Alinha o contêiner de grade no eixo horizontal.
    - Valores: `start`, `end`, `center`, `stretch`, `space-between`, `space-around`, `space-evenly`.

12. **align-content**
    - Alinha o contêiner de grade no eixo vertical.
    - Valores: `start`, `end`, `center`, `stretch`, `space-between`, `space-around`, `space-evenly`.

13. **grid-auto-columns**
    - Define o tamanho das colunas criadas automaticamente.
    - Exemplo: `grid-auto-columns: 100px;`

14. **grid-auto-rows**
    - Define o tamanho das linhas criadas automaticamente.
    - Exemplo: `grid-auto-rows: 100px;`

15. **grid-auto-flow**
    - Controla como os itens são colocados automaticamente na grade.
    - Valores: `row` (padrão), `column`, `dense`, `row dense`, `column dense`.

### Propriedades dos Itens de Grid

1. **grid-column-start**
   - Define a linha de início de uma coluna.
   - Exemplo: `grid-column-start: 2;`

2. **grid-column-end**
   - Define a linha de fim de uma coluna.
   - Exemplo: `grid-column-end: 4;`

3. **grid-column**
   - É uma abreviação para `grid-column-start` e `grid-column-end`.
   - Exemplo: `grid-column: 2 / 4;`

4. **grid-row-start**
   - Define a linha de início de uma linha.
   - Exemplo: `grid-row-start: 2;`

5. **grid-row-end**
   - Define a linha de fim de uma linha.
   - Exemplo: `grid-row-end: 4;`

6. **grid-row**
   - É uma abreviação para `grid-row-start` e `grid-row-end`.
   - Exemplo: `grid-row: 2 / 4;`

7. **grid-area**
   - Define uma área de grid ou uma posição no grid.
   - Exemplo: `grid-area: header;` (com `grid-template-areas` definido) ou `grid-area: 1 / 1 / 2 / 3;` (linha início / coluna início / linha fim / coluna fim).

8. **justify-self**
   - Alinha um item dentro de sua área de grade no eixo horizontal.
   - Valores: `start`, `end`, `center`, `stretch`.

9. **align-self**
   - Alinha um item dentro de sua área de grade no eixo vertical.
   - Valores: `start`, `end`, `center`, `stretch`.

### Exemplo Prático de Uso do Grid

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px auto 100px;
  gap: 10px;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.header {
  grid-area: header;
  background: lightblue;
}

.sidebar {
  grid-area: sidebar;
  background: lightcoral;
}

.content {
  grid-area: content;
  background: lightgreen;
}

.footer {
  grid-area: footer;
  background: lightgoldenrodyellow;
}
```
