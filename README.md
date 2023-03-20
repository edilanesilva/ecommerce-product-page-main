# Ecommerce-product solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
 
## Overview

### The challenge

Users should be able to:

- [x] See hover states for all interactive elements on the page
- [x] Add items to the cart
- [x] View the cart and remove items from it
- [ ] Open a lightbox gallery by clicking on the large product image
- [ ] Switch the large product image by clicking on the small thumbnail images
- [ ] View the optimal layout for the site depending on their device's screen size

### Screenshot

![](/screenshot-desktop.PNG)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript vanilla

### What I learned <br>
 
>  esconde o contador do input number 
```css
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
```

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


