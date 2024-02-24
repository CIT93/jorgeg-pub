import { renderTblBody,renderTblHeading } from "./render.js";

const FORM = document.getElementById("form");
const TBL = document.getElementById("tab-data");
const output = document.getElementById("output");

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
  //let wrongAnswer = "";
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
      //const output = document.getElementById("output");
      const wrongAnswer = document.createElement("p")
      wrongAnswer.textContent = `I do not understand!`;
      output.appendChild(wrongAnswer)
      break;
  }

  return houseSize;
}

function start(numberInHousehold, houseSize, firstName, lastName) {
  const casaPoints = determineHouseHoldPts(numberInHousehold);
  const CasaSizePoints = pointsforHouseSize(houseSize);
  //console.log("this is determine in function:", CasaSizePoints);
  const totalPoints = casaPoints + CasaSizePoints;
  //console.log(`Total carbon points is: ${totalPoints}`);

  const dataObject = {
    name: firstName,
    lastN: lastName,
    houseHold: numberInHousehold,
    houseSize: houseSize,
    footprint: totalPoints,
    actions: "Edit" + " Del", // or any default action
  };
  console.log("this is data:", dataObject)
  return dataObject;
}

function displayObjectOutput(objectC) {
  //output.innerHTML = ''; /* This will clear out any existing content, refresh data on page everytime data is entered*/
  const newHr = document.createElement("hr");
  for (let arr = 0; arr < objectC.length; arr++) {
    

    const newP = document.createElement("p");
    newP.textContent = ` ${objectC[arr].name} ${objectC[arr].lastN} Carbon Footprint`;
    output.appendChild(newP);

    const newP1 = document.createElement("p");
    newP1.textContent = `House hold size is: ${objectC[arr].houseHold}`; // Access elements of objectCollector
    output.appendChild(newP1);

    const newP2 = document.createElement("p");
    newP2.textContent = `The size of my home is: ${objectC[arr].houseSize}`;
    output.appendChild(newP2);

    const newP3 = document.createElement("p");
    newP3.textContent = `Carbon Footprint total is: ${objectC[arr].footprint}`;
    output.appendChild(newP3);
    
  }

  //TBL.innerHTML = ''; //JUST CLEARING OUT EXISTING DATA IN TBL
  const table = renderTblHeading();
  const tbody = renderTblBody(objectC); // pass the data array to renderTblBody
  //originally it was tbl.appendChild(table). This was stacking tables on top of one another, which I didn't like
  //and not stacking with displayObjectOutput. just replace output with TBL to go back to stacking

  output.appendChild(table); //add heading for table and send to dom
  table.appendChild(tbody); //append/addon "table body" to heading
  output.appendChild(newHr);
}



FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;

  const hMembers = parseInt(FORM.hmembers.value);
  const hSize = FORM.hsize.value;
  const objectCollector = [];
  objectCollector.push(start(hMembers, hSize, firstName, lastName));
  displayObjectOutput(objectCollector);
  //renderTbl(objectCollector);
  console.log("this is objectCollector", objectCollector)
  FORM.reset(); //resets page to allow new data to be inserted for addEventListener
});

//======ASSIGNMENTS===W7 - Solution to tbl body coding challenge - PRIVATE===================================================================================================
/*Answer: In your case you got an ReferenceError which means what is says: td is not defined
that is because theire is no td variable. I mean their is but its inside trTextArr for loop. 
You have think fixing the issue is taking out the td variable out of for loop should fix this issue.
*/

/* for module discussion: modules is good in the sense that it allows break your code into pieces, segments
per say. For the time being we have one here made for table and in table it makes table head and table body.
difinelty clears up your main making it read more manageable, however I can see that in big programs probably 
becomes very complex making it overwhelming eventually. Nevertheless my code looks easier to read don't got to be 
scrolling all the time as I can have this in it's own special area/file.*/ 
