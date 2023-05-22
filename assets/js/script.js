/* const btnCart = document.querySelector('#show-or-hide');
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


let amountValue = 0;

/* adiciona carrinho 
let shoppingCart = [];
function addCart() {
    if (shoppingCart.length > 0) {
        shoppingCart.splice(0, 1);
    }

    if (amountValue > 0) {
        const product = {
            name: "Fall Limited Edition Sneakers",
            price: 125,
            img: "assets/images/image-product-1-thumbnail.jpg",
            qtd: quantityProduct.innerText,
            totalPrice: 125 * amountValue,
            delete: "assets/images/icon-delete.svg"
        }
        console.log(product)
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

/* remove item do carrinho 

function removeCart() {

    productImage.classList.remove("cart-img");
    productName.innerHTML = '';
    productPrice.innerHTML = '';
    productImage.removeAttribute('src');
    productQtd.innerHTML = '';
    productTotalPrice.innerHTML = '';
    btnDelete.removeAttribute('src')
    qtdCart.style.display = "none"
    emptyCart.style.display = "block"
    btnCheckout.style.display = "none"

}

function addQtd() {

    amountValue++;
    quantityProduct.innerText = amountValue
}

function removeQtd() {
    if (amountValue > 0) {
        amountValue--

    }
    quantityProduct.innerText = amountValue
}
btnMinus.addEventListener('click', removeQtd);
btnPlus.addEventListener('click', addQtd);
btnAdd.addEventListener("click", addCart);
btnDelete.addEventListener('click', removeCart)
/* mostra e esconde o carrinho 
btnCart.addEventListener('click', () => {
    cartContent.classList.toggle('esconder');
    cartContent.classList.toggle('mostrar');
});

 */

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
const qtdCart = document.querySelector('#qtd-cart');

let amountValue = 0;
let shoppingCart = [];

/* Adiciona produto ao carrinho */
function addProductToCart() {
    if (shoppingCart.length > 0) {
        shoppingCart.splice(0, 1);
    }

    if (amountValue > 0) {
        const product = {
            name: "Fall Limited Edition Sneakers",
            price: 125,
            img: "assets/images/image-product-1-thumbnail.jpg",
            qtd: quantityProduct.innerText,
            totalPrice: 125 * amountValue,
            delete: "assets/images/icon-delete.svg"
        };

        shoppingCart.push(product);

        if (!productImage.classList.contains("cart-img")) {
            productImage.classList.add('cart-img');
        }

        qtdCart.innerHTML = shoppingCart[0].qtd;
        productName.innerHTML = shoppingCart[0].name;
        productPrice.innerHTML = "$" + shoppingCart[0].price.toFixed(2);
        productImage.setAttribute('src', shoppingCart[0].img);
        productQtd.innerHTML = " * " + shoppingCart[0].qtd;
        productTotalPrice.innerHTML = "$" + shoppingCart[0].totalPrice.toFixed(2);
        btnDelete.setAttribute('src', shoppingCart[0].delete);
        emptyCart.style.display = "none";
        btnCheckout.style.display = "block";
        qtdCart.style.display = "block";
    } else {
        alert("You can't buy 0 products");
    }
}

/* Remove produto do carrinho */
function removeProductFromCart() {
    productImage.classList.remove("cart-img");
    productName.innerHTML = '';
    productPrice.innerHTML = '';
    productImage.removeAttribute('src');
    productQtd.innerHTML = '';
    productTotalPrice.innerHTML = '';
    btnDelete.removeAttribute('src');
    qtdCart.style.display = "none";
    emptyCart.style.display = "block";
    btnCheckout.style.display = "none";
}

function increaseQuantity() {
    amountValue++;
    quantityProduct.innerText = amountValue;
}

function decreaseQuantity() {
    if (amountValue > 0) {
        amountValue--;
    }
    quantityProduct.innerText = amountValue;
}

function toggleCart() {
    cartContent.classList.toggle('esconder');
    cartContent.classList.toggle('mostrar');
}

btnMinus.addEventListener('click', decreaseQuantity);
btnPlus.addEventListener('click', increaseQuantity);
btnAdd.addEventListener("click", addProductToCart);
btnDelete.addEventListener('click', removeProductFromCart);
btnCart.addEventListener('click', toggleCart);

/* Lightbox */

let currentImg = 1;

const mainThumbnail = document.querySelector(".main-thumbnail");
const mainThumbnailLightbox = document.querySelector(".lightbox-container .main-thumbnail");
const images = document.querySelectorAll(".preview img");
const closeLightboxBtn = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");

function nextImage() {
    if (currentImg === 4) {
        currentImg = 1;
    } else {
        currentImg++;
    }
    thumbMob.src = `./images/image-product-${currentImg}.jpg`;
}

function prevImage() {
    if (currentImg === 1) {
        currentImg = 4;
    } else {
        currentImg--;
    }
    thumbMob.src = `./images/image-product-${currentImg}.jpg`;
}

function closeLightbox() {
    lightbox.classList.add("invisible");
}

function openLightbox() {
    lightbox.classList.remove("invisible");
}

images.forEach((image) => {
    image.addEventListener("click", () => {
        const lastImg = document.querySelector(".selected");
        if (lastImg) {
            lastImg.classList.remove("selected");
        }
        image.classList.add("selected");
        const selectedImgSrc = image.getAttribute("src");
        mainThumbnail.src = selectedImgSrc.replace("-thumbnail", "");
        mainThumbnailLightbox.src = selectedImgSrc.replace("-thumbnail", "");
    });
});

closeLightboxBtn.addEventListener("click", closeLightbox);
mainThumbnail.addEventListener("click", openLightbox);
