function determineHouseHoldPts(numberInHousehold) {
    console.log("Inside the function");
    if (numberInHousehold === 1) {
      carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if (numberInHousehold === 2) {
      carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if (numberInHousehold === 3) {
      carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (numberInHousehold === 4) {
      carbonFootprintPoints = carbonFootprintPoints + 8;
    } else if (numberInHousehold === 5) {
      carbonFootprintPoints = carbonFootprintPoints + 6;
    } else if (numberInHousehold === 6) {
      carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (numberInHousehold > 6) {
      carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`Based on the number of memebers of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`);
  }
  
  let carbonFootprintPoints = 0;
  // const numberInHousehold = 3;
  
  // global scope
  
  determineHouseHoldPts(3)
  determineHouseHoldPts(4)


function determineHomeSizePts(homeSize) {
    let HomeSizePoints = 0;

    if (homeSize === "large") {
        homeSizePoints = 10;
    } else if (homeSize === "medium") {
        homeSizePoints = 7;
    } else if (homeSize === "small") {
        homeSizePoints = 4;
    } else if (homeSize === "apartment") {
        homeSizePoints = 2;
    } else {
        console.log("Invalid home size");
        
    }

    console.log(`Based on the home size ${homeSize} the points would be ${homeSizePoints}.`);
}

let homeSizePoints = "medium";
