const btnCart = document.querySelector('#show-or-hide');
const btnMinus = document.querySelector('#btn-minus');
const btnPlus = document.querySelector('#btn-plus');
const btnAdd = document.querySelector('#add-item');
const quantityProduct = document.querySelector('#quantity-input');

btnMinus.addEventListener('click', removeItem);
btnPlus.addEventListener('click', adicionaItem);

btnAdd.addEventListener("click", addCarrinho);

function addCarrinho() {
    localStorage.clear();
    if (quantityProduct.value > 0) {
        const produto = {
            nome: "Fall Limited Edition Sneakers",
            preco: 125.00,
            img: "../assets/images/image-product-1-thumbnail.jpg",
            qtd: quantityProduct.value,
            precoTotal: 125.00 * quantityProduct.value
        }

        localStorage.setItem("produto", JSON.stringify(produto));
    }
    const produto1 = JSON.parse(localStorage.getItem("produto"));
    console.log(produto1.nome);

}

function adicionaItem() {
    quantityProduct.value = parseInt(quantityProduct.value) + 1;
}

function removeItem() {
    if (quantityProduct.value > 0) {
        quantityProduct.value = parseInt(quantityProduct.value) - 1;
    }

}




