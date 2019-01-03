$(document).ready(function(){
  $('#btn1').click(function(){
    $('#div1').delay(1500).fadeIn();
    $('#div2').delay(2500).fadeIn();
    $('#div3').delay(3500).fadeIn();

  });
  $('#btn2').click(function(){
    $('#div1').delay(3500).fadeOut();
    $('#div2').delay(2500).fadeOut();
    $('#div3').delay(1500).fadeOut();
  });
  $('#btnstart').click(function(){
    for(let i = 1; i <= 7; i++)
    {
      // alert(i);
      const w = 140 * i;
      const t = 3000 / i
      $('div').animate({left:`+=${w}px`},t).queue(function(){
        $(this).toggleClass("new").dequeue();
        // $( this ).toggleClass( "new" ).dequeue();
      }).animate({left:`-=${w}px`},t);
    }
    // $('div').animate({left:'+=200px'},2000).queue(function(){
    //   $(this).toggleClass("new").dequeue();
    //   // $( this ).toggleClass( "new" ).dequeue();
    // }).animate({left:'-=200px'},2000);
  });
});
