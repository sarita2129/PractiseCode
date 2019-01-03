$(document).ready(function(){
  const blink_text = function(){
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);

  };
setInterval(blink_text,1000);
$("tr:odd").addClass("zebra");
$("a.printPage").click(function(){
  window.print();
  return false;
});
$('textarea').keyup(function(){
  const maxlength = 15;
  const textcount = maxlength - $(this).val().length;
  $('#rchars').text(textcount);
});
colors = { "color1": "Red", "color2": "Green", 'color3': "Blue" };

// $.each(colors, function(key, value) {
//     $('#divSelect').append($("<option/>", {
//         value: key,
//         text: value
//     }));
// });
$.each(colors, function(key, value) {
    $('#divSelect').append($("<input/>", {
        type:'checkbox',
        id: key,
        name: key//,
        // text:value
    }));
    $('<label />', { 'for': key, text: value }).appendTo('#divSelect');

});

$('input[type=button]').click(function(){
  $('p').removeClass();
  $.each($('#divSelect :checked'), function(key, value) {
    alert($(this));
      console.log("Value :" + $(this)[key].id);
      console.log("Text :" + $(this)[key].labels[0].textContent);

  });
});
$(document).click(function(){
  alert("Its a left click");
});
$(document).contextmenu(function(){
  alert("Its a right click");
  // return false;
});
var obj1 = { what: "A regular JS object" },
obj2 = $('body');

if ( obj1.jquery )
{
     console.log('obj1 is a jQuery object.');
}

if (obj2.jquery )
{
      console.log('obj2 is a jQuery object.');
}
$(document).keypress(function(e) {
    if(e.which == 13) {
        console.log('You pressed enter!');
    }
});
});
