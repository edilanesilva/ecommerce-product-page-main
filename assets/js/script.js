const btnCart = document.querySelector('#show-or-hide');
const shoppingCart = document.querySelector('#header-card');
const btnMinus = document.querySelector('#btn-minus');
const btnPlus = document.querySelector('#btn-plus');


/* mostra e esconde o cart */
btnCart.addEventListener('click', function() {
    if(shoppingCart.style.display === 'block'){
        shoppingCart.style.display = 'none'
    }
    else{
        shoppingCart.style.display = 'block'
    }
    
});

function addItemCart(){
    const quantInput= document.querySelector('#quantity-input').value;
    if(quantInput !== 0){
        

    }


}
