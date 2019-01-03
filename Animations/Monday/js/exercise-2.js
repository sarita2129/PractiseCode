$(document).ready(function(){
  $('#btn1').click(function(){
    $('#box').animate({width: 300},1200);
    $('#box').animate({height: 300},1200);
    $('#box').animate({width: 200},1200);
    $('#box').animate({height: 200},1200);
    $('#box').animate({width: 100},1200);
    $('#box').animate({height: 100},1200);
    $('#box').animate({width: 500},1200);
    $('#box').animate({height: 500},1200);
    // $("div").animate({height: 250}, 1200);
        // $("div").animate({width: 250}, 1200);
  });
  $('#btn2').click(function(){
    $('#box').clearQueue();
  });
});
