const cfpData = [];
function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPts = 0;
  if (numberInHousehold === 0) {
    houseHoldPts = 14;
  } else if (numberInHousehold === 1) {
    houseHoldPts = 12;
  } else if (numberInHousehold === 2) {
    houseHoldPts = 10;
  } else if (numberInHousehold === 3) {
    houseHoldPts = 8;
  } else if (numberInHousehold === 4) {
    houseHoldPts = 6;
  } else if (numberInHousehold === 5) {
    houseHoldPts = 4;
  } else if (numberInHousehold > 2) {
    houseHoldPts = 2;
  } else {
    console.log("no update to points");
  }
  
  return houseHoldPts;

}



function pointsforHouseSize(houseSize) {
  //let houseInfo = document.getElementById("house");
  let wrongAnswer = "";
  switch (houseSize) {
    case "large":
      houseSize = 10;
      //houseInfo.textContent = `Carbon Footprint is ${houseSize} pts.`;
      break;
    case "medium":
      houseSize = 7;
      //houseInfo.textContent = `Your carbon Footprint is ${houseSize} pts.`;
      break;
    case "small":
      houseSize = 4;
      //houseInfo.textContent = `Your carbon Footprint is ${houseSize} pts.`;
      break;
    case "apartment":
      houseSize = 2;
      //houseInfo.textContent = `Your Carbon Footprint is ${houseSize}pts.`;
      break;
    default:
      //wrongAnswer = window.prompt("Sorry no nintendo!");
      break;
  }
  
  return houseSize;
}

function start(numberInHousehold, houseSize) {

  const casaPoints = determineHouseHoldPts(numberInHousehold);
  const CasaSizePoints = pointsforHouseSize(houseSize);
  totalPoints = casaPoints + CasaSizePoints;
  console.log(`Total carbon points is: ${totalPoints}`);
  cfpData.push([numberInHousehold,houseSize,casaPoints, CasaSizePoints, totalPoints])

}

//arr is new variable just like "i" in c++. 
function displayOutput() {
  for (arr of cfpData){
    console.log(arr)
    const output = document.getElementById("output")
    const newHr = document.createElement("hr")
    

    const newP = document.createElement("p")
    newP.textContent = `House hold size is: ${arr[0]}`;
    output.appendChild(newP)
    

    const newP1 = document.createElement("p")
    newP1.textContent = `The size of my home is: ${arr[1]}`;
    output.appendChild(newP1)
    
    const newP2 = document.createElement("p")
    newP2.textContent = `Carbon Footprint total is: ${arr[4]}`;
    output.appendChild(newP2)
    output.appendChild(newHr)
  }
}

start(1,"large");
start(2,"medium")
start(3,"small")
start(4,"apartment")
start(5,"")

displayOutput()