# Solução de produto de comércio eletrônico

## Índice

- [Visão geral](#visão geral)
  - [O desafio](#o-desafio)
  - [Captura de tela](#captura de tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído com)
  - [O que aprendi](#o-que-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento contínuo)
-   [Author](#author)
 
## Visão geral

### O desafio

Os usuários devem ser capazes de:

- [x] Veja os estados de foco para todos os elementos interativos na página
- [x] Adicionar itens ao carrinho
- [x] Visualize o carrinho e remova itens dele
- [ ] Abra uma galeria lightbox clicando na imagem grande do produto
- [ ] Mude a imagem grande do produto clicando nas pequenas imagens em miniatura
- [ ] Veja o layout ideal para o site, dependendo do tamanho da tela do dispositivo

### Captura de tela

![](/screenshot-desktop.PNG)

### Links

- [Solução](https://edilanesilva.github.io/ecommerce-product-page-main/)


## Meu processo

### Construído com

- HTML5 
- CSS
- Flexbox
- Grade CSS
- JavaScript vanilla

### O que aprendi <br>
 
> CSS -> esconde o contador do input number  
```css
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
```

> JS -> Manipução de objeto
```js

let shoppingCart = []; 
 
const product = {
            name: "Fall Limited Edition Sneakers",
            price: 125,
            img: "assets/images/image-product-1-thumbnail.jpg",
            }
            shoppingCart.push(product) 
```

```js
productName.innerHTML = shoppingCart[0].name;
```
### Continued development

- Usar funções, passando parâmetros e argumentos
- Máscara e validação de input em formulários 
- Usar estruturas de repetição e laços ('while', 'for')

## Author
[Edilane Silva](https://www.linkedin.com/in/edilane-silva/)
