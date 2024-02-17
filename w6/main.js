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

function start(numberInHousehold, houseSize) {
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

function displayObjectOutput(objectC) {
  const output = document.getElementById("output"); // Move this outside the loop

  for (let arr = 0; arr < objectCollector.length; arr++) {
    const newHr = document.createElement("hr");

    const newP = document.createElement("p");
    newP.textContent = `House hold size is: ${objectC[arr].numberNHouse}`; // Access elements of objectCollector
    output.appendChild(newP);

    const newP1 = document.createElement("p");
    newP1.textContent = `The size of my home is: ${objectC[arr].houseS}`;
    output.appendChild(newP1);

    const newP2 = document.createElement("p");
    newP2.textContent = `Carbon Footprint total is: ${objectC[arr].totalP}`;
    output.appendChild(newP2);
    output.appendChild(newHr);
  }
}

// objectCollector = [];
// objectCollector.push(start(1, "large"));
// objectCollector.push(start(2, "medium"));
// objectCollector.push(start(3, "small"));
// console.log("test array:", objectCollector);
//displayObjectOutput(objectCollector);

//addEventListener is a call back function, it is also asynchronous
/*Asynchronous: of or requiring a form of computer control timing protocol in which a specific operation begins upon receipt
of an indication (signal) that the preceding operation has been completed 
1. Not happening at the same time
2. Something must happen to activate it */

//Put FORM in front because that tells you what your looking into, listening for
//this code only runs if something happens
FORM.addEventListener("submit",function(e){// pass e function within "function()""
  e.preventDefault(); //e stands for the event. preventDefault stops it from going to default activity
  // console.log("I'm inside the callback function")
  // console.log(e)
  const firstName = FORM.firstname.value;//recording values into firstName from input box first name.
  const lastName = FORM.lastname.value;

  const hMembers = parseInt(FORM.hmembers.value);
  const hSize = FORM.hsize.value;
  objectCollector = [];
  objectCollector.push(start(hMembers, hSize));
  displayObjectOutput(objectCollector);
  FORM.reset();
})



//======ASSIGNMENTS===RENDERING OUTPUT TO DOM=====================================================================================================================
//Is the apartment score correct? If not why not?
/* [my answer:] apartment score works fine at my end. However, at your end I presume maybe a bad if statement within the functions that display size for home is faulty.*/

//Why are we doing all this work in the form to make sure the user gives us good data?
/*[my answer:] because if you put false data it will render useless data in return making it confusing to understand.
Therefore setting these boundaries are like safety rails as it guides the user to correct input data to utilize.   */