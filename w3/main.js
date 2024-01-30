// If you live alone, then add 14 points to your carbon footprint.
// If you share a house or apartment with 1 other person, then add 12 points.
// If you share a house or apartment with 2 other people, then add 10 points.
// If you share a house or apartment with 3 other people, then add 8 points.
// If you share a house or apartment with 4 other people, then add 6 points.
// If you share a house or apartment with 5 other people, then add 4 points.
// If you share a house or apartment with more than 5 other people, then add 2 points.

//setting value in function() is considered parameters. note! arguments get passed into parameters
function determineHouseHoldPts() {
  console.log("Insided the Function");
  if (numberInHousehold === 0) {
    carbonFootprintPoints += 14;
  } else if (numberInHousehold === 1) {
    carbonFootprintPoints += 12;
  } else if (numberInHousehold === 2) {
    carbonFootprintPoints += 10;
  } else if (numberInHousehold === 3) {
    carbonFootprintPoints += 8;
  } else if (numberInHousehold === 4) {
    carbonFootprintPoints += 6;
  } else if (numberInHousehold === 5) {
    carbonFootprintPoints += 4;
  } else if (numberInHousehold > 2) {
    carbonFootprintPoints += 2;
  } else {
    console.log("no update to points");
  }
  console.log(`your carbon footprint is: ${carbonFootprintPoints}`);
}

let carbonFootprintPoints = 0;
const numberInHousehold = 3;
//setting value in (), makes it into an argument
determineHouseHoldPts(3);
determineHouseHoldPts(4);
