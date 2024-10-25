import { renderTbl } from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts} from "./carbonFootprint.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js"
import {saveLS, cfpData} from "./storage.js"
import { FP } from "./fp.js"

const start = (first, last, houseHoldMembers, houseSize) => {
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
    foodChoice: foodChoice,
    cfpTotal: total,
  });
}


  renderTbl(cfpData);

  // Function to validate a single field
  const validateField = event => {
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
  FNAME.addEventListener('blur', validateField);
  LNAME.addEventListener('blur', validateField);


  FORM.addEventListener('submit', e => {
    e.preventDefault();
    if (FNAME.value !== '' && LNAME.value !== '') {
      SUBMIT.textContent = '';
      const houseMembers = parseInt(FORM.housem.value);
      const houseSize = FORM.houses.value;
      const foodChoice = FORM.diet.value;
      const fpObj = new FP(FNAME.value, LNAME.value, houseMembers, houseSize, foodChoice);
      //start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
      // const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
      // fpObj.houseHoldPoints();
      // fpObj.houseSizePoints();
      cfpData.push(fpObj)
      saveLS(cfpData);
      renderTbl(cfpData);
      FORM.reset();
    } else {
      SUBMIT.textContent = "Form requires first name and last name";
    }
  });

// const me = {
//   name: "Jorge",
//   hairColor: "Black",
//   location: "Home",
//   sleepScore: 95,
//   introduce: function() {
//     console.log(this)
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now!`)
//   }
// }

// const you = {
//   name: "Jan",
//   hairColor: "Brown",
//   location: "School",
//   sleepScore: 55,
//   introduce: function() {
//     console.log(this)
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now!`)
//   }
// }

// me.introduce();
// you.introduce();


// class Human {
//   constructor(name, hairColor, location, sleepScore){
//   this.name = name
//   this.hairColor = hairColor
//   this.location = location
//   this.sleepScore = sleepScore
//   }
//   introduce() {
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} and had a sleepScore of ${this.sleepScore}!`)
//   }
// }

// const jorge = new Human("Jorge", "Black", "home", 95);
// const jan = new Human("Jan", "Brown", "school", 55);
// jorge.introduce();
// jan.introduce();
// jorge.hrv = 50;



// // rest operator
// // const add2 = function(...a) {
// //   return 2 + a[3];
// // }

// // const result = add2(1, 2, 3, 4);

// // arrow function

// const add2 = a => 2 + a;


// const result = add2(100);

// // (a = 10) default value

// // IIFE

// const a = 3;

// (function(a){
//   console.log("inside IIFE");
//   console.log(a);
// })(a);

