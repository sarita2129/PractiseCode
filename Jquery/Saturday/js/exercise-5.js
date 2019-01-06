$(document).ready(function(){
  const id = $("input[type='checkbox']").map(function(){
    return $(this).val();
  });
  console.log(id);
  $("input[type='checkbox']").click(function(){
    const checked = $("input[type='checkbox']").filter(function(){
       if($(this).is(':checked'))
       return $(this).val();
    });
    console.log(checked[0].defaultValue);
  });

});
