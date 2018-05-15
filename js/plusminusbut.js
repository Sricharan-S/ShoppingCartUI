var value1 = parseInt($('#qty').val());
$('.plus1').on('click',function(e){
  if (value1 < 100) {
      value1++;
  }
  else {
      value1 = 100;
  }

 $('#qty').val(value1);
   $('.tot-price1').text("$"+total1 * value1);
})

var value2 = parseInt($('#qty1').val());
$('.plus2').on('click',function(e){
  if (value2 < 100) {
      value2++;
  }
  else {
      value2 = 100;
  }
 $('#qty1').val(value2);
 $('.tot-price2').text("$"+ total2 * value2);
})

var value3 = parseInt($('#qty3').val());
$('.plus3').on('click',function(e){
  if (value3 < 100) {
      value3++;
  }
  else {
      value3 = 100;
  }
 $('#qty3').val(value3);
 $('.tot-price3').text("$"+ total3 * value3);
})


$('.minus1').on('click',function(e){
  if (value1 > 1) {
      value1--;
  }
  else {
      value1 = 0;
  }
 $('#qty').val(value1);
    $('.tot-price1').text("$" + total1 * value1);
})

$('.minus2').on('click',function(e){
  if (value2 > 1) {
      value2--;
  }
  else {
      value2 = 0;
  }
 $('#qty1').val(value2);
 $('.tot-price2').text("$"+ total2 * value2);
})

$('.minus3').on('click',function(e){
  if (value3 > 1) {
      value3--;
  }
  else {
      value3 = 0;
  }
 $('#qty3').val(value3);
  $('.tot-price3').text("$"+ total3 * value3);
})
