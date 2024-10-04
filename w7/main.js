import { renderTbl } from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts} from "./carbonFootprint.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

function addCfpData(first, last, houseHoldMembers, houseSize,) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total
  });
}

  
  // function displayOutObj(obj) {
  //   console.log(obj);
  //   const output = document.getElementById("output");
  //   const newH2 = document.createElement("h2");
  //   newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
  //   output.appendChild(newH2);
  //   const newH3 = document.createElement("h3");
  //   newH3.textContent = `Based on number in and size of home`;
  //   output.appendChild(newH3);
  //   const newP = document.createElement("p");
  //   newP.textContent = `This number is based on the number of people in the house ${obj.houseM} with a score of ${obj.houseMPTS}, and the house size ${obj.houseS} with a score of ${obj.houseSPTS}.`;
  //   output.appendChild(newP);
  // }
  
  
  FORM.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houses.value;
    addCfpData(firstName, lastName, houseMembers, houseSize);
    OUTPUT.innerHTML = "";
    //displayOutput();
    renderTbl(getCfpData());
    FORM.reset();
  })

// The apartment score is not correct because on the main.js, "apartment" is "apt" and on the index we have it as "apartment".
// We are doing all of this work in the form because the people who are using it might not give good data.

// Coding Challenge: Code Along - HTML Tabular Data
// I tried to create two functions to render the table.I did renderTblHeading to generate the table header. The renderTbl was the main table element.

// Coding Challenge: Code Along - coding TBL body and modules
// I attempted to create a table by initializing the table body and a row with predefined data (`trTextArr`). I also aimed to append the table to the DOM, but couldn't figure out handling the "Edit" and "Del" buttons.
// We got the error when we tried to appendChild because the `td` variable is not properly defined outside the loop. Since `td` is only scoped to the loop that creates table cells, it's undefined outside the loop.
// If I was looking at (data) inside the render function it would be the data that is intended to be used to populate the table.
// What criteria should we use to determine which functions or variables should be exported from each module?