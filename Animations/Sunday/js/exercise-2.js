$(function(){
  $('h1').click(function(){
    const animationend = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd mskitAnimationEnd';
    $('.txt').addClass("animated shake red").one(animationend,
    function(){
      $(this).removeClass("animated shake red");
    });
  });
});
