$(document).ready(function(){
  $('button').click(function(){
    $('#div1').delay(800).fadeToggle(500);
    $('#div2').delay(1200).fadeToggle(500);
    $('#div3').delay(1900).fadeToggle(500);

  });
  $('#start').click(function(){
    $('div').animate({width:'+=300px',height:'+=500px'},1000);
  });
  $('#finish').click(function(){
    $('div').finish();
  });
});
