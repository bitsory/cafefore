import place_order from "./place_order.js";

console.log("shop.js");

const $place_order_btn = document.querySelector('.place_order_btn');
const $resultElement = document.getElementById('q_result'); 

var $q_plus = document.querySelector('.q_plus_btn');
var $q_minus = document.querySelector('.q_minus_btn');



$place_order_btn.addEventListener('click', ()=> {
    
    var order = parseInt($resultElement.innerText);
    console.log(`order count = ${parseInt($resultElement.innerText)}`);
    const placeOrder = new place_order(order);
    
    document.querySelector(".online_order").innerHTML = placeOrder.getHtml();
    placeOrder.proceedSelector();
    placeOrder.proceedEventListener();

});

$q_plus.addEventListener('click', ()=> {
    
    
    let number = $resultElement.innerText;
    number = parseInt(number) + 1;
    $resultElement.innerText = number;
});

$q_minus.addEventListener('click', ()=> {
    
    
    
   
    let number = $resultElement.innerText;
    if (parseInt(number)>0) number = parseInt(number) - 1;
    $resultElement.innerText = number;
});

