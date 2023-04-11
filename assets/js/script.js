const btnCart = document.querySelector('#show-or-hide');
const btnMinus = document.querySelector('#btn-minus');
const btnPlus = document.querySelector('#btn-plus');
const btnAdd = document.querySelector('#add-item');
const quantityProduct = document.querySelector('#quantity-input');
const cartContent = document.querySelector('#header-card');
const productName = document.querySelector('#name-produto');
const productPrice = document.querySelector('#preco');
const productImage = document.querySelector('#image');
const productQtd = document.querySelector('#qtd');
const productTotalPrice = document.querySelector('#preco-final');
const btnDelete = document.querySelector('#btn-delete');
const emptyCart = document.querySelector('#empty-cart');
const btnCheckout = document.querySelector("#btn-checkout");
const qtdCart = document.querySelector('#qtd-cart')

btnMinus.addEventListener('click', removeQtd);
btnPlus.addEventListener('click', addQtd);
btnAdd.addEventListener("click", addCart);
btnDelete.addEventListener('click', removeCart)
/* mostra e esconde o carrinho */
btnCart.addEventListener('click', () => {
    cartContent.classList.toggle('esconder');
    cartContent.classList.toggle('mostrar');
});

/* adiciona carrinho */
let shoppingCart = [];   
function addCart() {
    if(shoppingCart.length > 0) {
        shoppingCart.splice(0, 1);
    }
   
    if (quantityProduct.value > 0) {
        const product = {
            name: "Fall Limited Edition Sneakers",
            price: 125,
            img: "assets/images/image-product-1-thumbnail.jpg",
            qtd: quantityProduct.value,
            totalPrice: 125 * quantityProduct.value,
            delete: "assets/images/icon-delete.svg"
        }

        shoppingCart.push(product)
        
        if (!productImage.classList.contains("cart-img")) {
            productImage.classList.add('cart-img');
        } 

        qtdCart.innerHTML = shoppingCart[0].qtd;
        productName.innerHTML = shoppingCart[0].name;
        productPrice.innerHTML = "$" + shoppingCart[0].price.toFixed(2);
        productImage.setAttribute('src', shoppingCart[0].img);
        productQtd.innerHTML = " * " + shoppingCart[0].qtd  
        productTotalPrice.innerHTML = "$" + shoppingCart[0].totalPrice.toFixed(2);
        btnDelete.setAttribute('src', shoppingCart[0].delete)
        emptyCart.style.display = "none"
        btnCheckout.style.display = "block"
        qtdCart.style.display = "block"
        
        console.log(shoppingCart)
               
    } else {
        alert("You cant Buy 0 Products")
    }
}

/* remove item do carrinho */

function removeCart() {

    productImage.classList.remove("cart-img");
    productName.innerHTML = '';
    productPrice.innerHTML = '';
    productImage.removeAttribute('src');
    productQtd.innerHTML = '';
    productTotalPrice.innerHTML = '';
    btnDelete.removeAttribute('src')
    qtdCart.style.display="none"
    emptyCart.style.display = "block"
    btnCheckout.style.display = "none" 

}

function addQtd() {
    quantityProduct.value = parseInt(quantityProduct.value) + 1;
}

function removeQtd() {
    if (quantityProduct.value > 0) {
        quantityProduct.value = parseInt(quantityProduct.value) - 1;
    }
   
}




