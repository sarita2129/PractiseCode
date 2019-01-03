$(document).ready(function(){
  $('.content-div').click(
    function(){
      $('.content-div').animate({
        width:'800px',
        height:'700px',
      }, 1000);
      $('.content-data').show().animate({opacity:'1'},5000);
    });

    $("#btn").click(function(){
      $('.content-data').show().animate({opacity:'0'},5000);
    });
});
