//const cfpData = [];
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
  //console.log("this is numberInHousehold:",numberInHousehold)

  const casaPoints = determineHouseHoldPts(numberInHousehold);
  const CasaSizePoints = pointsforHouseSize(houseSize);
  console.log("this is determine in function:", CasaSizePoints);
  totalPoints = casaPoints + CasaSizePoints;
  console.log(`Total carbon points is: ${totalPoints}`);

  const dataObject = {
    numberNHouse: numberInHousehold,
    houseS: houseSize,
    housePTS: casaPoints,
    houseSP: CasaSizePoints,
    totalP: totalPoints,
  };

  return dataObject; // returns dataObject which I can now push into objectCollector data it returns.
}


objectCollector = [];
objectCollector.push(start(1, "large"));
objectCollector.push(start(2, "medium"));
objectCollector.push(start(3, "small"));
console.log("test array:", objectCollector);

displayObjectOutput(objectCollector);
function displayObjectOutput(objectCollector) {
  const output = document.getElementById("output"); // Move this outside the loop

  for (let arr = 0; arr < objectCollector.length; arr++) {
    // Correct loop condition to objectCollector.length
    const newHr = document.createElement("hr");

    const newP = document.createElement("p");
    newP.textContent = `House hold size is: ${objectCollector[arr].numberNHouse}`; // Access elements of objectCollector
    output.appendChild(newP);

    const newP1 = document.createElement("p");
    newP1.textContent = `The size of my home is: ${objectCollector[arr].houseS}`;
    output.appendChild(newP1);

    const newP2 = document.createElement("p");
    newP2.textContent = `Carbon Footprint total is: ${objectCollector[arr].totalP}`;
    output.appendChild(newP2);
    output.appendChild(newHr);
  }
}

