var heart = document.getElementsByClassName('heart');
var cart = document.querySelector('.shopping-cart');
Array.from(heart).forEach(function(item){
  item.addEventListener('click',function(){
    item.children[0].classList.toggle("red");
  })
});
var row = document.getElementsByClassName('row');
var plus = document.getElementsByClassName('plus');
var minus = document.getElementsByClassName('minus');
var close1 = document.getElementsByClassName('close1')
var tot1 = $('.tot-price1').html();
var tot2 = $('.tot-price2').html();
var tot3 = $('.tot-price3').html();
var regex = /\d+/g ;
var total1 = parseInt(tot1.match(regex)[0]);
var total2 = parseInt(tot2.match(regex)[0]);
var total3 = parseInt(tot3.match(regex)[0]);

  cart.addEventListener('click',function(e){
     if(e.target.className === "fa fa-close"){
     console.log(e.target.parentNode.parentNode);
     cart.removeChild(e.target.parentNode.parentNode);
     }
  })
