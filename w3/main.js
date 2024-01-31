// If you live alone, then add 14 points to your carbon footprint.
// If you share a house or apartment with 1 other person, then add 12 points.
// If you share a house or apartment with 2 other people, then add 10 points.
// If you share a house or apartment with 3 other people, then add 8 points.
// If you share a house or apartment with 4 other people, then add 6 points.
// If you share a house or apartment with 5 other people, then add 4 points.
// If you share a house or apartment with more than 5 other people, then add 2 points.

//setting value in function() is considered parameters. note! arguments get passed into parameters
function determineHouseHoldPts(numberInHousehold) {
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
//const numberInHousehold = 3;
//setting value in (), makes it into an argument
determineHouseHoldPts(3);
determineHouseHoldPts(4);
//=============================================================================================

let wrongAnswer = "";
function pointsforHouseSize (houseSize){
    switch(houseSize){
        case "large":
            houseSize = 10;
            houseInfo.textContent = `Carbon Footprint is ${houseSize} pts.`;
            break;
        case "medium":
            houseSize = 7;
            houseInfo.textContent = `Your carbon Footprint is ${houseSize} pts.`;
            break;
        case "small":
            houseSize = 4;
            houseInfo.textContent = `Your carbon Footprint is ${houseSize} pts.`;
        case "apartment":
            houseSize = 2;
            houseInfo.textContent = `Your Carbon Footprint is ${houseSize}pts.`;
            break;
        default:
            wrongAnswer = window.prompt("Sorry no nintendo!");
            console.log(houseSize)
            break;
    }
}


let yourName = window.prompt("What is your name?");
//.getElementById gets  div greeting in HTML, its required to display in document
let greetingElement = document.getElementById("greeting");

//.textContent allows to display text on documnent.
greetingElement.textContent = `Hey ${yourName}`;

let houseSize = window.prompt(
  "And what is your house size? Choose a number. Large is 10, medium is 7, small is 4, apartment is 2."
);
let houseInfo = document.getElementById("house");

//convert into an Integer
//houseSize = parseInt(houseSize);

pointsforHouseSize(houseSize)

/* rules for setting up text from javaScript to HTML document
1. setup link with "document.getElementById(id selector or class from html)"
2. use variable.textContent = "and whatever you wanna ouput" */



