### Propriedades do Contêiner Flex

1. **display: flex;**
   - Define um contêiner flexível. Os elementos filhos desse contêiner se tornam flex items.

2. **flex-direction**
   - Define a direção dos itens dentro do contêiner.
   - Valores:
     - `row` (padrão): os itens são posicionados na horizontal, da esquerda para a direita.
     - `row-reverse`: os itens são posicionados na horizontal, da direita para a esquerda.
     - `column`: os itens são posicionados na vertical, de cima para baixo.
     - `column-reverse`: os itens são posicionados na vertical, de baixo para cima.

3. **flex-wrap**
   - Define se os itens devem quebrar para a próxima linha/coluna se não houver espaço suficiente.
   - Valores:
     - `nowrap` (padrão): todos os itens permanecem em uma única linha/coluna.
     - `wrap`: os itens quebram para a próxima linha/coluna.
     - `wrap-reverse`: os itens quebram para a próxima linha/coluna na direção inversa.

4. **flex-flow**
   - É uma abreviação para as propriedades `flex-direction` e `flex-wrap`.
   - Exemplo: `flex-flow: row wrap;`

5. **justify-content**
   - Alinha os itens ao longo do eixo principal.
   - Valores:
     - `flex-start` (padrão): itens alinhados ao início do contêiner.
     - `flex-end`: itens alinhados ao final do contêiner.
     - `center`: itens centralizados.
     - `space-between`: espaço igual entre os itens.
     - `space-around`: espaço igual ao redor dos itens.
     - `space-evenly`: espaço igual entre os itens e nas extremidades.

6. **align-items**
   - Alinha os itens ao longo do eixo transversal (perpendicular ao eixo principal).
   - Valores:
     - `stretch` (padrão): itens são esticados para preencher o contêiner.
     - `flex-start`: itens alinhados ao início do eixo transversal.
     - `flex-end`: itens alinhados ao final do eixo transversal.
     - `center`: itens centralizados no eixo transversal.
     - `baseline`: itens alinhados pela linha base do texto.

7. **align-content**
   - Alinha as linhas do contêiner flexível quando há espaço extra no eixo transversal.
   - Valores:
     - `stretch` (padrão): linhas esticadas para preencher o contêiner.
     - `flex-start`: linhas alinhadas ao início do contêiner.
     - `flex-end`: linhas alinhadas ao final do contêiner.
     - `center`: linhas centralizadas no contêiner.
     - `space-between`: espaço igual entre as linhas.
     - `space-around`: espaço igual ao redor das linhas.
     - `space-evenly`: espaço igual entre as linhas e nas extremidades.

### Propriedades dos Itens Flexíveis

1. **order**
   - Define a ordem dos itens dentro do contêiner.
   - Valor padrão: `0`. Itens com valores menores aparecem primeiro.

2. **flex-grow**
   - Define a capacidade de um item crescer em relação aos outros itens no contêiner.
   - Valor padrão: `0` (não cresce). Um valor maior permite que o item cresça mais.

3. **flex-shrink**
   - Define a capacidade de um item encolher em relação aos outros itens no contêiner.
   - Valor padrão: `1`. Um valor `0` impede o item de encolher.

4. **flex-basis**
   - Define o tamanho inicial de um item antes de qualquer espaço extra ser distribuído.
   - Valor padrão: `auto`. Pode ser definido em unidades de comprimento (px, %, em, etc.).

5. **flex**
   - É uma abreviação para as propriedades `flex-grow`, `flex-shrink` e `flex-basis`.
   - Exemplo: `flex: 1 0 auto;`

6. **align-self**
   - Permite que um item seja alinhado de maneira diferente dos outros itens ao longo do eixo transversal.
   - Valores: `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.

Aqui está um exemplo prático de uso do Flexbox:

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
}

.item {
  flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  order: 2;
  align-self: flex-end;
}
```

Esse exemplo define um contêiner flexível onde os itens são distribuídos em uma linha que pode quebrar e são justificados com espaço igual entre eles, centralizados no eixo transversal, e as linhas são alinhadas ao início do contêiner. Cada item pode crescer para preencher o espaço disponível e está alinhado ao final do eixo transversal.