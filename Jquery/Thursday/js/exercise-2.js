$(document).ready(function(){
  $('#myForm').submit(function() {
  var values = $(this).serialize();
  alert(values);
});
$('#myForm1').submit(function() {
  var left_position = $("#name2").offset().left - $(document).scrollTop();
  alert('Left: '+left_position);

  var top_position = $("#name2").offset().top - $(document).scrollTop();
  alert('Right: '+top_position);
});
var element = $('<h1>',{
    text : "jQuery",
    class : "test"
});
$('#nam12').on('input', function() {
alert('New First name added');
});
$('input[type="submit"]').prop('value','Action');
console.log($('#output').text( element.get(0).outerHTML));
const myOptions = {
    val1 : 'Blue',
    val2 : 'Orange'
};
$.each(myOptions , function(key, value){
  $('#myColors').append($("<option/>" ,{id:key,text:value}));
});
});
