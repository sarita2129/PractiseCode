$(document).ready(function(){
  $('button').click(function(){
    $('p').show(1000);
  });
  $('.btn1').click(function(){
    $('div').slideDown();
  });
  $('.btn2').click(function(){
    $('div').slideUp();
  });
});
