/*
Geometry Function Lab
Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};
Part 2, Triangle
Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
*/
function myArraySort(arr,arg) {
	if(arg === 'asc')
    return arr.sort(function(a, b){return a-b});
    else
    return arr.sort(function(a, b){return b-a});
};
const rectangleA = {
  length: 4,
  width: 4,
	isSquare : function(){
		let result = false;
		if(this.length === this.width)
	  result = true;
		return result;
	},
	area : function(){
		let result = this.length * this.width;
		return result;
	},
	perimeter : function(){
		let result = 2 * this.length * this.width;
		return result;
	}
};

const triangleA = {
  sideA: 12,
  sideB: 3,
  sideC: 10,
	isEquilateral : function(){
		let result = false;
	  if((this.sideA === this.sideB) && this.sideB == this.sideC)
	  {
	    result = true;
	  }
	  return result;
	},
	isIsosceles : function(){
		let result = false;

	  if((this.sideA === this.sideB) || (this.sideB === this.sideC) || (this.sideA === this.sideC))
	  {
	    result = true;
	  }
	  return result;
	},
	isObtuse : function(){
		let result = false;
	  const arr = [this.sideA,this.sideB,this.sideC];
	  const hyp = myArraySort(arr,'dsc');
	  sideA = hyp[1];
	  sideB = hyp[2]
	  if((hyp[0] * hyp[0]) > (sideA * sideA) + (sideB * sideB))
	  {
	    result = true;
	  }
	  return result;
	},
	areaOfTriangle : function(){
		let result = '';
	  let perimeter = (this.sideA + this.sideB + this.sideC) / 2;
	  result = Math.sqrt(perimeter * (perimeter - this.sideA) * (perimeter - this.sideB) * (perimeter - this.sideC));
	  return result;
	}
};

// const isSquare = function(rectangleA){
//   let result = 'Its a Rectangle';
//   if(rectangleA.length === rectangleA.width)
//   result = 'Rectangle is a square';
//   return result;
// };

// const area = function(rectangleA){
//   let result = rectangleA.length * rectangleA.width;
//   return `The area is ${result}`;
// };
//
// const perimeter = function(rectangleA){
//   let result = 2 * rectangleA.length * rectangleA.width;
//   return `The perimeter is ${result}`;
// };

// const isEquilateral = function(triangleA){
//   let result = '';
//   if((triangleA.sideA === triangleA.sideB) && triangleA.sideB == triangleA.sideC)
//   {
//     result = `The triangle is an equilateral.`;
//   }
//   else
//   {
//     result = `The triangle is not equilateral.`;
//   }
//   return result;
// };
// const isIsosceles = function(triangleA){
//   let result = '';
//
//   if((triangleA.sideA === triangleA.sideB) || (triangleA.sideB === triangleA.sideC) || (triangleA.sideA === triangleA.sideC))
//   {
//     result = `The triangle is isosceles.`;
//   }
//   else {
//     result = `The triangle is not isosceles.`;
//   }
//   return result;
// };
//
// const isObtuse = function(triangleA){
//   let result = '';
//   const arr = [triangleA.sideA,triangleA.sideB,triangleA.sideC];
//   const hyp = myArraySort(arr,'dsc');
//   sideA = hyp[1];
//   sideB = hyp[2]
//   if((hyp[0] * hyp[0]) > (sideA * sideA) + (sideB * sideB))
//   {
//     result = `The triangle is Obtuse.`;
//   }
//   else {
//     result = `The triangle is not Obtuse.`;
//   }
//   return result;
// };
//
// const areaOfTriangle = function(triangleA){
//   let result = '';
//   let perimeter = (triangleA.sideA + triangleA.sideB + triangleA.sideC) / 2;
//   result = Math.sqrt(perimeter * (perimeter - triangleA.sideA) * (perimeter - triangleA.sideB) * (perimeter - triangleA.sideC));
//   return `The area of the triangle is ${result}`;
// };

const callAllfunc = function(){
// console.log(`${isEquilateral(triangleA)}`);
// console.log(`${isIsosceles(triangleA)}`);
// console.log(`${areaOfTriangle(triangleA)}`);

// console.log(`${perimeter(rectangleA)}`);
// console.log(`${isSquare(rectangleA)}`);
// console.log(`${isObtuse(triangleA)}`);
console.log(`${rectangleA.area()}`);
console.log(`${rectangleA.perimeter()}`);
console.log(`${rectangleA.isSquare()}`);
console.log(`${triangleA.isEquilateral()}`);
console.log(`${triangleA.isIsosceles()}`);
console.log(`${triangleA.isObtuse()}`);
console.log(`${triangleA.areaOfTriangle()}`);


};
callAllfunc();
