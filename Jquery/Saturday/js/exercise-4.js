$(document).ready(function(){
  var arrSOPrecords = [
      { User: "Cesar", SOP: "training 1" },
      { User: "Cesar", SOP: "training 2" },
      { User: "Jon", SOP: "training 1" },
      { User: "Jon", SOP: "training 2" },
      { User: "Ana", SOP: "training 1" },
      { User: "Ana", SOP: "training 2" },
      { User: "Victor", SOP: "training 2" }

  ];

  var outputdata = [
      { User: "Cesar", SOP: "training 1" },
      { User: "Cesar", SOP: "training 2" },
      { User: "Ana", SOP: "training 1" },
      { User: "Jon", SOP: "training 1" },
      { User: "Ammy", SOP: "training 1" }

  ];

  var filtered = arrSOPrecords.filter(function(r) {
      // return !outputdata.some(function(t) {
      //     return r.User === t.User && r.SOP === t.SOP;
      // });
      return outputdata.some(function(t){
        return r.User === t.User && r.SOP === t.SOP;
      });
  });

  const filtered2 = arrSOPrecords.filter(r =>(outputdata.some(t => r.User === t.User && r.SOP === t.SOP)));
  console.log(filtered2);
  var values = $("input[id='task']")
              .map(function(){return $(this).val();}).get();
  console.log(values);
});
