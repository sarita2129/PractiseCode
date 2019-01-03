$(document).ready(function(){
  $('input[type="button"]').click(function(){
    $("#myTable").find("tr:gt(0)").remove();
    console.log("Value :" + $('#ddid :selected').val());
    console.log("Text :" + $('#ddid :selected').text());
    $('.disabledCheckboxes').removeAttr('disabled');


  });
  console.log($("p").outerWidth());

  console.log($('#ddid')[0].className);
});
