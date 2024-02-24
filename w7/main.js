import { renderTblBody, renderTblHeading } from "./render.js";
import { determineHouseHoldPts, pointsforHouseSize } from "./carbonFootprint.js";

const FORM = document.getElementById("form");
const TBL = document.getElementById("tab-data");
//const output = document.getElementById("output");

const objectCollector = [];

function start(numberInHousehold, houseSize, firstName, lastName) {
  const casaPoints = determineHouseHoldPts(numberInHousehold);
  const CasaSizePoints = pointsforHouseSize(houseSize);
  const totalPoints = casaPoints + CasaSizePoints;

  const dataObject = {
    name: firstName,
    lastN: lastName,
    houseHold: numberInHousehold,
    houseSize: houseSize,
    footprint: totalPoints,
    actions: "Edit" + " Del", // or any default action
  };
  console.log("this is data:", dataObject);
  return dataObject;
}

function renderTbl(objectC) {
  if (objectC.length === 1){
  const table = renderTblHeading();
  const tbody = renderTblBody(objectC);
  TBL.appendChild(table);
  table.appendChild(tbody);
  }
  else{
  
  const latestData = objectC[objectC.length -1]; //javascript doesn't accept negative indexing like python, or c++. this is one way of getting by 
  const table = document.createElement("table")
  const tbody = renderTblBody([latestData]);//expects an array of data objects, not a single object. wrapping it ensures it recieves data objects as expected.
  TBL.appendChild(table);
  table.appendChild(tbody);
  }
}

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;

  const hMembers = parseInt(FORM.hmembers.value);
  const hSize = FORM.hsize.value;

  objectCollector.push(start(hMembers, hSize, firstName, lastName));
  renderTbl(objectCollector);
  console.log("this is objectCollector", objectCollector);
  FORM.reset();
});

//======ASSIGNMENTS===W7 - :Update render and create new module - PUBLIC ===================================================================================================
