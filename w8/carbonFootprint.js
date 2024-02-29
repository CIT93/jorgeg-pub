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

  export{determineHouseHoldPts, pointsforHouseSize};