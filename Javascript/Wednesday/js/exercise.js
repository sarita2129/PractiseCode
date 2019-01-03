
const secondhand = document.querySelector('.second-hand');
const setDate = function(){
  const today = new Date()
  const second = today.getSeconds();
  console.log(second);
  const secondDegree = ((second / 60 ) * 360) + 90;
  document.querySelector('.second-hand').style.transform = `rotate(${secondDegree}deg)`;
  const minutes = today.getMinutes();
  const mindegree = ((minutes / 60 ) * 360) + 90;
  document.querySelector('.min-hand').style.transform = `rotate(${mindegree}deg)`;
  const hourdegree = ((minutes / 12 ) * 360) + 90;
  document.querySelector('.hour-hand').style.transform = `rotate(${hourdegree}deg)`;
  //console.log(today);

}

setInterval(setDate,1000);
