$(document).ready(function(){
  $('#hidebutton').click(function(){
    $('p:first').delay(1500).hide(500);
    $('p:last').delay(2500).hide(500);
  });
  // jQuery.fx.interval = 200;
  $("#framebtn").click(function() {
    $( "div" ).toggle(3000);
  });
  $("#enable").click(function() {
    jQuery.fx.off = false;
  });
  $("#disable").click(function() {
    jQuery.fx.off = true;
  });
  $("#toggle").click(function() {
    $("div").toggle(3000);
  });
});
