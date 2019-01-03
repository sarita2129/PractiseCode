
const a2 = {
  a :{
      name : 'Josh',
      eyes :'brown',
      height: '6 ft'

  },
  b :{
    title: 'TA - Totally Awesome',
    cost:50.00 ,
    instock: false

    },
  c :{
    first:1,
    second:2 ,
    third:[1,2,3]
  },
  getAllkeyvalues : function(a2){
    let result = '';
    // alert((...this).length);
//     for(let key in this.students){
//   if(this.students[key] > 2){
//   this.shortlist.push(key);
// }
    for( let i=0; i<Object.entries(this).length-1; i++){
      // console.log(Object.entries(this)[i] + i);
        for(let key in Object.entries(this)[i]){
          // alert(key);
          // result += `${key} : ${a2[i][key]} \n`;
          // console.log( key, Object.entries(this)[i][key]["name"] );
        // console.log( key, Object.entries(this)[i][key] );
        for(let key1 in Object.entries(this)[i][key]){
          if(key1 !== "0")
          result += `${key1} : ${Object.entries(this)[i][key][key1]} \n`;//key1, Object.entries(this)[i][key][key1] );
          }
        }
      }
  return result;
}
};
let html = '';
// const aname = a2["a"].getname();
// const bval = a2["b"].getcost();
// const cval = a2["c"].getvalue();
const retrn = a2.getAllkeyvalues(a2);
// console.log(aname);
// console.log(bval);
// console.log(cval);
console.log(retrn);
// $.each(a2, function( key, value ) {
//   console.log('Name: ' + value.name + ' Eyes: ' + value.eyes +' height :' + value.height);
//   console.log('Title: ' + value.title + ' Cost: ' + value.cost +' instock :' + value.instock);
//   console.log('First ' + value.first + ' Second: ' + value.second +' Third :' + value.third);
//   // $.each(a2[2].third,  function( key, value ) {
//   //   console.log('
//   // };
// //alert(key.value);
//   //let html = '<li><p>Title: ' + value.name + ' | Author: ' + value.eyes +' height :' + value.height + '</p></li>';
//   //$("body").append('<li><p>Title: ' + value.name + ' | Author: ' + value.eyes +' height :' + value.height + '</p></li>');
//   //console.log( key.value + ' | Author: ' + value.eyes +' ' + value.height);
//   //  console.log('Name: ' + value.name + ' Eyes: ' + value.eyes +' height :' + value.height);
//   // $.each(a2[], function( key, value ) {
//   //   console.log('Title: ' + value.title + ' | Author: ' + value.cost +' height :' + value.instock);
//   //
//   // };
//   // $.each(a2[0], function( key, value ) {
//   //
//   // };
//   //  console.log('Title: ' + value.first + ' | Author: ' + value.second +' height :' );
//
// //console.log(a2[0]);
//
//
// });
// wdi = {
//        class: 25,
//        startDate: "15/05/2017",
//        instructors: ["Luke Hammer", "Michelle Lo"],
//        students: {
//             enrolled: ["Shibanee", "Alex", "Sam", "Malcolm in the Middle", "Steven"],
//             notEnrolled: ["Rick and Morty", "Bill Gates"]
//       },
//       enjoymentLevel: ">9000",
//       movestudent : function(name){
//         wdi.students.enrolled.splice(wdi.students.enrolled.indexOf(name),1);
//         wdi.instructors.push(name);
//       }
// }
// wdi.movestudent("Sam");
// console.log(`${wdi.instructors[0]}`);
// a3.splice(a3.indexOf("2"),1);
// const movestudent = function(name){
//   wdi.students.enrolled.splice(wdi.students.enrolled.indexOf(name),1);
//   wdi.instructors.push(name);
// }
// const returnfactorlist = function(max,factor){
//   let arr = [];

//   for(let i = 1; i <= max; i++)
//   {
//     if(factor % i === 0)
//     {
//       arr.push(i);
//     }
//   }
//   return arr;
// };

//console.log(`${returnfactorlist(10,50)}`);
