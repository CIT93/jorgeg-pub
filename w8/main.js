import { renderTblBody } from "./render.js";
import { determineHouseHoldPts, pointsforHouseSize } from "./carbonFootprint.js";

const FORM = document.getElementById("form");
const output = document.getElementById("output");

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



FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;

  const hMembers = parseInt(FORM.hmembers.value);
  const hSize = FORM.hsize.value;

  objectCollector.push(start(hMembers, hSize, firstName, lastName));
  output.innerHTML = "";
  renderTblBody(objectCollector);
  console.log("this is objectCollector", objectCollector);
  
  FORM.reset();
});

