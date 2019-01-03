// $('h2').funText(33, 'candy');
// const links = $('a');
// $('a').each(function() {
//         const videourl = $(this).attr('href');
//         const thumbnailurl = youtube.generateThumbnailUrl(videourl);
//         console.log(`${thumbnailurl}`);
//         const $thum = $('<img>').attr('src',thumbnailurl);
//         $(this).append($thum);
//         //$('img').attr('src',)
//     });
// for(let i = 0; i<= links.length-1; i++)
// {
//   //const videourl = links[i].getAttribute("href");
//   //const thumbnailurl = youtube.generateThumbnailUrl(videourl);
//
//   /*
//   let img = document.createElement('img');
//   img.setAttribute('src', thumbnailurl);
//
//   links[i].appendChild(img);
//   console.log(`${thumbnailurl}`);
//   */
// }

// const a2 = [
//   a : {name : 'Josh',eyes :'brown', height: false},
//   b :{title: 'TA - Totally Awesome', cost:50.00 ,instock: false},
//   c :{first:1, second:2 ,third:[1,2,3]},
//   getname : function(){
//     console.log('hi');
//   }
// ];
const a2 = {
  a :{
      name : 'Josh',
      eyes :'brown',
      height: false ,
      getname : function(){
        // return `${this.name} ${this.eyes}`;
        let result='';
        for (let [key, value] of Object.entries(this))
        {
          if(key !== 'getname')
          result += `${key} : ${value} \n`;
        }
        return result;
      }
  },
  b :{
    title: 'TA - Totally Awesome',
    cost:50.00 ,
    instock: false,
    getcost: function(){
      // return `${this.title} ${this.cost}`;
      let result='';
      for (let [key, value] of Object.entries(this))
      {
        if(key !== 'getcost')
        result += `${key} : ${value} \n`;
      }
      // console.log(this);
      // for( let i=0; i<this.length; i++){
      // for(let key in this[i]){
      // console.log( key, this[i][key] );
      // }
      return result;
    }
    },
  c :{
    first:1,
    second:2 ,
    third:[1,2,3],
    getvalue: function(){
      let result = '';
    //   for(var key in this) {
    //     if (this.hasOwnProperty(key)) {
    //       const val = $`this.${key}`;
    //         result += ` ${key} : ${val}`;
    //     }
    // }
      //alert(key);
      for (let [key, value] of Object.entries(this))
      {
        if(key !== 'getvalue')
        result += `${key} : ${value} \n`;
      }
      return result ;//`${this.first} ${this.second} ${this.third}`;
    }
  },

};
let html = '';
const aname = a2["a"].getname();
const bval = a2["b"].getcost();
const cval = a2["c"].getvalue();
// const retrn = a2.getAllkeyvalues(a2);
console.log(aname);
console.log(bval);
console.log(cval);
// console.log(retrn);
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
