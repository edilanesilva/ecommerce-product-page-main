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


btnMinus.addEventListener('click', removeQtd);
btnPlus.addEventListener('click', addQtd);
btnAdd.addEventListener("click", addCart);
btnDelete.addEventListener('click', removeCart)
btnCart.addEventListener('click', () => {
    cartContent.classList.toggle('esconder');
    cartContent.classList.toggle('mostrar');
});

let carrinho=[];
function addCart() {
   
    if (quantityProduct.value > 0) {
        const produto = {
            name: "Fall Limited Edition Sneakers",
            price: 125.00,
            img: "assets/images/image-product-1-thumbnail.jpg",
            qtd: quantityProduct.value,
            totalPrice: 125 * quantityProduct.value,
            delete : "assets/images/icon-delete.svg" 
        }

        carrinho.push(produto)
        console.log(carrinho)
        if (!productImage.classList.contains("cart-img")) {
            productImage.classList.add('cart-img');
        }

        productName.innerHTML = carrinho[0].name;
        productPrice.innerHTML = carrinho[0].price;
        productImage.setAttribute('src', carrinho[0].img);
        productQtd.innerHTML = carrinho[0].qtd;
        productTotalPrice.innerHTML = carrinho[0].totalPrice;
        btnDelete.setAttribute('src', carrinho[0].delete)
    }
}

function removeCart() {
    carrinho.splice(0, 1);
    productImage.classList.remove("cart-img");
    productName.innerHTML = '';
    productPrice.innerHTML = '';
    productImage.setAttribute('src', "");
    productQtd.innerHTML = '';
    productTotalPrice.innerHTML = '';
    btnDelete.setAttribute('src', "")
}

function addQtd() {
    quantityProduct.value = parseInt(quantityProduct.value) + 1;
}

function removeQtd() {
    if (quantityProduct.value > 0) {
        quantityProduct.value = parseInt(quantityProduct.value) - 1;
    }

}




