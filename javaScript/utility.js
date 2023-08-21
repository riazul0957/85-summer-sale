


let total = 0;
function addToCart(target){



    const selectedItemContainer = document.getElementById('selected-items');
    const cardTitleElement = target.querySelector('.card-title');
    const cardTitleInnerText = cardTitleElement.innerText;
    console.log(cardTitleInnerText);
    const li = document.createElement("li");
    li.innerText = cardTitleInnerText;
    selectedItemContainer.appendChild(li);
    
    const spanElement = target.querySelector('.card-title + p span');
    const spanInnerTextString = spanElement.innerText;
    const spanAmount = parseFloat(spanInnerTextString);
    total = parseFloat(total) + spanAmount;
    console.log(total);
    
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = total;
    const applyButton = document.getElementById('btn-apply');
    if(total > 200){
        applyButton.removeAttribute('disabled');
    }
}




document.getElementById('btn-apply').addEventListener('click',function(){
    const cuponField = document.getElementById('cupon-field');
    const cuponText = cuponField.value ;
    const discountPrice = document.getElementById('discount');
    const discountTotal = (20 / 100) * total;
    if(cuponText === 'SELL200'){
    discountPrice.innerText = discountTotal ;
    }
    else{
        alert('you dont have any cupon');
    }



    const finalTotal = document.getElementById('total-ground');
    const youwillpay = total - discountTotal ;
    finalTotal.innerText = youwillpay;
})