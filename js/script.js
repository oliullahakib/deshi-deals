let coupon = "akib20"; 
document.getElementById('coupon-btn').addEventListener("click", function () {
    
    if (coupon === 'use') {
        alert('this coupon is already used');
        return
    }
    let couponInput  = document.getElementById("coupon-input").value;
   
    if(couponInput!==coupon){
        alert('Invalid Coupon')
        return
    }
    let rendomAmount = Math.floor(Math.random()*100);
    document.getElementById('discount').innerText = rendomAmount;
    document.getElementById("coupon-input").value = ' '
    coupon = 'use'
})

document.getElementById("product").addEventListener("click", function (e) {

    if (e.target.className.includes("btn")) {
        let cardButton = e.target;
        let cardTitle = cardButton.parentNode.querySelector('.card-title').innerText;
        let cardPrice = cardButton.parentNode.querySelector('p span').innerText;
        let cardImg = cardButton.parentNode.parentNode.querySelector('figure img').src;

        let cartContainer = document.getElementById("cart-container");
        
        let div = document.createElement('div');
        div.innerHTML = `
    <div id="cart" class="cart flex justify-between items-center p-3 mb-3 rounded-lg bg-gray-200">
                    <div class="w-12"><img src="${cardImg}" alt=""></div>
                    <div>
                        <h4 id="cart-title" class="text-lg font-semibold">${cardTitle}</h4>
                        <p class="text-gray-500"><span id="cart-price">${cardPrice}</span>TK</p>
                    </div>
                </div>
    `
        cartContainer.prepend(div);
        let totalPrice = document.getElementById('total-price').innerText;
        let discount = document.getElementById('discount').innerText;
        document.getElementById('total-price').innerText = Number(totalPrice) + Number(cardPrice);
        let totalAmount = Number(totalPrice) + Number(cardPrice) - Number(discount);
        document.getElementById('total').innerText = totalAmount;

    };
    
});

document.getElementById("delete-btn").addEventListener("click",function (){
  document.getElementById("cart-container").innerHTML = " ";
  document.getElementById('total-price').innerText = 0
  document.getElementById('total').innerText = 0

})


