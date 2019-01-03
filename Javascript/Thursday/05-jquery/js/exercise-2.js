

$(function() {

  // $('button').on('mouseover', function(){
  //   $(this).css('background-color','red');
  // });
  // $('#name').on('keyup', function(){
  //   const name = $(this).val();
  //   //console.log(name);
  // }).on('focus', function(){
  //   $('header').addClass('active');
  // }).on('blur', function(){
  //   $('header').removeClass('active');
  //
  // });
const randomColor = function(){
  return Math.random() * 255;
}
$(window).on('mousemove', function(event){
  //console.log('test');
  const bgColor = `rgb(${randomColor()},${randomColor()},${randomColor()})` ;
  //$('body').css('background-color',bgColor);
  $('img').css('opacity',`${opacity(event)}`);
});
const opacity = function(event){
  const opa = (window.innerHeight - event.clientY)/100;
  console.log(opa)
  return opa;
}
});
