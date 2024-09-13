const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if(size === 'large') {
    houseSizePoints = 10;
  } else if(size === 'medium') {
    houseSizePoints = 7;
  } else if(size === 'small') {
    houseSizePoints = 4;
  } else if(size === 'apt') {
    houseSizePoints = 2;
  }
  return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
    
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
      houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
      houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
      houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
      houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
      houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
      houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
      houseHoldPoints = 2;
    }
    return houseHoldPoints
  }
  
  function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total]);
  }

  function displayOutput() {
    for (arr of cfpData){
      console.log(arr);
      const output = document.getElementById("output");
      const newP = document.createElement("p");
      newP.textContent = `The Carbon Footprint total is ${arr[4]}, if the number of household members is ${arr[0]}, adding ${arr[2]} and the house size is ${arr[1]}, adding ${arr[3]}.`;
      output.appendChild(newP);
    }
  }


  start(5, "apt");
  start(4, "large");
  start(3, "medium");
  start(2, "small");

  start(4, "apt");
  start(3, "large");
  start(2, "medium");
  start(1, "small");

  start(3, "apt");
  start(2, "large");
  start(1, "medium");
  start(5, "small");

  start(2, "apt");
  start(1, "large");
  start(5, "medium");
  start(4, "small");

  start(1, "apt");
  start(5, "large");
  start(4, "medium");
  start(3, "small");

  start(6, "apt");
  start(6, "large");
  start(6, "medium");
  start(6, "small");

  displayOutput()

function displayOutput(){
  for (arr of cfpData) {
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${arr[4]}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home`
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}),`;
    newP.textContent = `and a ${arr[1]} size of home (score:${arr[2]}).`;
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
  }
}



