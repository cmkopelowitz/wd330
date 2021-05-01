
function fun(){
  const aNumber = document.getElementById("input").value;
  
  var finalNumber = 0;
  for (let i = 0; i <= aNumber; i++) {
    finalNumber += i;
  }

  document.getElementById("output").innerHTML = finalNumber;
  return;
}

function add(){
  const aNumber = document.getElementById("input-a").value;
  const bNumber = document.getElementById("input-b").value;

  document.getElementById("output").innerHTML = parseInt(aNumber) + parseInt(bNumber);
}

function mult(){
  const aNumber = document.getElementById("input-a").value;
  const bNumber = document.getElementById("input-b").value;

  document.getElementById("output").innerHTML = parseInt(aNumber) * parseInt(bNumber);
}