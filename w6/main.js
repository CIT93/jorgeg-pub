const FORM = document.getElementById("form")

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
  let wrongAnswer = "";
  switch (houseSize) {
    case "large":
      houseSize = 10;
      break;
    case "medium":
      houseSize = 7;
      break;
    case "small":
      houseSize = 4;
      break;
    case "apartment":
      houseSize = 2;

      break;
    default:
      const output = document.getElementById("output");
      houseInfo.textContent = `I do not understand!`;
      break;
  }

  return houseSize;
}

function start(numberInHousehold, houseSize, firstName, lastName) {
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
    firstN: firstName,
    lastN: lastName
  };

  return dataObject; // returns dataObject which I can now push into objectCollector data it returns.
}

function displayObjectOutput(objectC) {
  const output = document.getElementById("output"); // Move this outside the loop

  for (let arr = 0; arr < objectCollector.length; arr++) {
    const newHr = document.createElement("hr");

    const newP = document.createElement("p");
    newP.textContent = ` ${objectC[arr].firstN} ${objectC[arr].lastN} Carbon Footprint is:`;
    output.appendChild(newP);

    const newP1 = document.createElement("p");
    newP1.textContent = `House hold size is: ${objectC[arr].numberNHouse}`; // Access elements of objectCollector
    output.appendChild(newP1);

    const newP2 = document.createElement("p");
    newP2.textContent = `The size of my home is: ${objectC[arr].houseS}`;
    output.appendChild(newP2);

    const newP3 = document.createElement("p");
    newP3.textContent = `Carbon Footprint total is: ${objectC[arr].totalP}`;
    output.appendChild(newP3);
    output.appendChild(newHr);
  }
}

//Put FORM in front because that tells you what your looking into, listening for
//this code only runs if something happens
FORM.addEventListener("submit",function(e){
  e.preventDefault(); 
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;

  const hMembers = parseInt(FORM.hmembers.value);
  const hSize = FORM.hsize.value;
  objectCollector = [];
  objectCollector.push(start(hMembers, hSize,firstName,lastName));
  displayObjectOutput(objectCollector);
  FORM.reset();
})



//======ASSIGNMENTS===W6 - ADD FIRST AND LAST NAME - PUBLIC=====================================================================================================================
