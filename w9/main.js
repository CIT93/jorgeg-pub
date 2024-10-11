import { renderTbl } from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts} from "./carbonFootprint.js";
import {FORM} from "./global.js"
import {saveLS, cfpData} from "./storage.js"

function validateField(fieldId, fieldValue) {
    const fieldError = document.getElementById(`${fieldId}Error`);
    
    if (fieldValue === '') {
      fieldError.textContent = `${fieldId} is required`;
      return false;
  } else {
      fieldError.textContent = '';
      return true;
  }
}

FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;

  const firstNameIsValid = validateField('firstName', firstName);
  const lastNameIsValid = validateField('lastName', lastName);

  if (firstNameIsValid && lastNameIsValid) {
    const houseHoldPTS = determineHouseHoldPts(houseMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;
  
  
    cfpData.push({
      firstName: firstName,
      lastName: lastName,
      houseM: houseMembers,
      houseS: houseSize,
      houseMPTS: houseHoldPTS,
      houseSPTS: houseSizePTS,
      cfpTotal: total,
    });

    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  }
});


// import { renderTbl } from "./render.js";
// import {determineHouseHoldPts, determineHouseSizePts} from "./carbonFootprint.js";
// import {FORM} from "./global.js"
// import {saveLS, cfpData} from "./storage.js"

// function start(first, last, houseHoldMembers, houseSize,) {
//   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//   const houseSizePTS = determineHouseSizePts(houseSize);
//   const total = houseHoldPTS + houseSizePTS;
//   cfpData.push({
//     firstName: first,
//     lastName: last,
//     houseM: houseHoldMembers,
//     houseS: houseSize,
//     houseMPTS: houseHoldPTS,
//     houseSPTS: houseSizePTS,
//     cfpTotal: total,
//   });
// }

//   renderTbl(cfpData);

//   FORM.addEventListener('submit', function(e){
//     e.preventDefault();
//     const firstName = FORM.firstname.value;
//     const lastName = FORM.lastname.value;
//     const houseMembers = parseInt(FORM.housem.value);
//     const houseSize = FORM.houses.value;
//     start(firstName, lastName, houseMembers, houseSize);
//     saveLS(cfpData);
//     renderTbl(cfpData, FORM);
//     FORM.reset();
//   });

  
