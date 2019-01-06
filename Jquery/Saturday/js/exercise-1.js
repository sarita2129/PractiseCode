$(document).ready(function(){
  var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];
var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];
const off = officers.map(function(officer){
  return officer.id;
});
const offlambda = officers.map(officer => officer.id);
console.log(off);
console.log(offlambda);


const off_filter = officers.filter(function(officer){
  return officer.id < 50;
});
const off_filterlambda = officers.filter(officer => officer.id < 50);
console.log(off_filter);
console.log(off_filterlambda);

const off_reduce = officers.reduce(function(acc,officer){
  return acc += officer.id;
},0);

const off_reducelambda = officers.reduce((acc,officer) => acc + officer.id,0);
console.log(off_reduce);
console.log(off_reducelambda);

const oldestpilot = pilots.reduce(function(olderage,youngerage){
  return (olderage.years) > youngerage.years ? olderage : youngerage;
},{});

const oldestpilot_reduce = pilots.reduce((oldest,youngest) => (oldest.years > youngest.years) ? oldest : youngest);
console.log(oldestpilot);
console.log(oldestpilot_reduce);

const forceuser = personnel.filter(function(person){
  return person.isForceUser = true
});
console.log(forceuser);

const mappersonnel = personnel.map(function(person){
  return person.pilotingScore + person.shootingScore;
});
console.log(mappersonnel);

const totalscore = mappersonnel.reduce(function(acc,score){
  return acc + score;
});
console.log(totalscore);
const test = personnel.filter(function(person){
  return person.isForceUser
}).map(function(person){
  return person.pilotingScore + person.shootingScore;
}).reduce(function(acc,score){
  return acc + score;
});
console.log(test);
const forceuser_lambda = personnel.filter(person => person.isForceUser);
const mappersonnel_lambda = personnel.map(person => person.pilotingScore + person.shootingScore);
const totalscore_lambda = mappersonnel_lambda.reduce((acc,score) => acc + score ,0);
const test1 = personnel.filter(person => person.isForceUser)
              .map(person => person.pilotingScore + person.shootingScore)
              .reduce((acc,score) => acc + score,0);
console.log(forceuser_lambda);
console.log(mappersonnel_lambda);
console.log(totalscore_lambda);
console.log(test1);
});
