$(document).ready(function(){
  $('#btn2').click(function(){
    // alert($('div'));
    $('div').fadeIn(3000);
  });
  $('#btn1').click(function(){
    // alert($('div'));
    $('div').fadeOut(3000);
  });
  // $('p').click(function(){
  //   $('p').fadeOut({opacity:'-=0.5'},500)
  // });
  $('p:last').click(function(){
    let opacity = 1;
    if($(this).css('opacity') == 1)
    opacity = 0.5;
    $(this).fadeTo(500,`${opacity}`);
  });
});
