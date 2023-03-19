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


btnMinus.addEventListener('click', removeQtd);
btnPlus.addEventListener('click', addQtd);
btnAdd.addEventListener("click", addCart);
btnDelete.addEventListener('click', removeCart)
btnCart.addEventListener('click', () => {
    cartContent.classList.toggle('esconder');
    cartContent.classList.toggle('mostrar');
});

let shoppingCart = [];
function addCart() {
   
    if (quantityProduct.value > 0) {
        const product = {
            name: "Fall Limited Edition Sneakers",
            price: 125,
            img: "assets/images/image-product-1-thumbnail.jpg",
            qtd: quantityProduct.value,
            totalPrice: 125 * quantityProduct.value,
            delete : "assets/images/icon-delete.svg" 
        }

        shoppingCart.push(product)
        console.log(shoppingCart)
        if (!productImage.classList.contains("cart-img")) {
            productImage.classList.add('cart-img');
        }

        productName.innerHTML = shoppingCart[0].name;
        productPrice.innerHTML = "$" + shoppingCart[0].price.toFixed(2);
        productImage.setAttribute('src', shoppingCart[0].img);
        productQtd.innerHTML = " * " + shoppingCart[0].qtd;
        productTotalPrice.innerHTML = "$" + shoppingCart[0].totalPrice.toFixed(2);
        btnDelete.setAttribute('src', shoppingCart[0].delete)
        emptyCart.style.display = "none"
        btnCheckout.style.display ="block"

        console.log(shoppingCart)
        
    }
}

function removeCart() {
    shoppingCart.splice(0, 1);
    productImage.classList.remove("cart-img");
    productName.innerHTML = '';
    productPrice.innerHTML = '';
    productImage.setAttribute('src', "");
    productQtd.innerHTML = '';
    productTotalPrice.innerHTML = '';
    btnDelete.setAttribute('src', "")
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




