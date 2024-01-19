const houseHold = 4;
const apartment = 2;
const meatBalance = 10+6;
const midWasher = 4;
const needyFam = 8;
const cleanHouse = 40;
const semiRecycler = 24 - 12
const uberPlus = 12
// don't take transportation or flights.
// Only persoanl vehicle usage was added
const carbonTotal = houseHold + apartment + meatBalance + midWasher + needyFam + cleanHouse + semiRecycler + uberPlus

//only way I can change. it worked. However does this make myChange a string or int?
const myChange = document.querySelector("h4");
myChange.textContent = carbonTotal