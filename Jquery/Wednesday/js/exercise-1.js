$(document).ready(function(){
  //$(document).bind("contextmenu",function(e){
  //return false;
  //  });
  $('p').bind('click' ,function(){
    $("<div>This is a click event</div>").appendTo('body');
  });
  $('p').bind('dblclick' ,function(){
    $("<div>This is a double click event</div>").appendTo('body');
  });
  // $('p').dblclick(function(){
  //   alert('1');
  // })
  $('a').click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  $('input[type=checkbox]').change(function(){
    if($(this).is(':checked'))
    $('button').removeAttr("disabled");
    else
    $('button').attr("disabled","disabled");

  });
});
