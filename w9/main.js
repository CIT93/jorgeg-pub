import { renderTbl } from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts} from "./carbonFootprint.js";
import {FORM} from "./global.js"
import {saveLS, cfpData} from "./storage.js"

const firstNameEl = document.getElementById('firstName');
const lastNameE1 = document.getElementById('lastName');
const submitEl = document.getElementById("submitError");

function start(first, last, houseHoldMembers, houseSize,) {
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
    cfpTotal: total,
  });
}

  renderTbl(cfpData);

  // Function to validate a single field
  function validateField(event) {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);

    if (field === '') {
        fieldError.textContent = `${fieldId} is required`;
        event.target.classList.add('invalid');
    } else {
        fieldError.textContent = '';
        event.target.classList.remove('invalid');
    }
  };

  // Attach blur event listeners
  firstNameEl.addEventListener('blur', validateField);
  lastNameE1.addEventListener('blur', validateField);


  FORM.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const firstNameIsValid = firstNameEl.value !== '';
    const lastNameIsValid = lastNameE1.value !== '';
    if (firstNameIsValid && lastNameIsValid) {
      submitEl.textContent = '';
      const houseMembers = parseInt(FORM.housem.value);
      const houseSize = FORM.houses.value;
      start(firstName, lastName, houseMembers, houseSize);
      saveLS(cfpData);
      renderTbl(cfpData);
      FORM.reset();
    } else {
      submitEl.textContent = "Form requires first name and last name";
    }

  });

  
