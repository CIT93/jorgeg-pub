// How to Calculate Your Carbon Footprint - https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// Method 1

// 1. Members of household
const garciaResidence = 22;
// 2. Size of home
const sizeMatters = 7;
// 3. Food choices
const eatBetter = 14;
// 4. Water consumption
const wasteWater = 1;
// 5. Household purchases each year
const buyThings = 2;
// 6. Waste production
const theTrash = 20;
// 7. Recycled waste
const notWasteful = 16;
// 8. Annual transportation scores.
const carOnly = 6;
// 9. Total
const cfpTotal = garciaResidence + sizeMatters + eatBetter + wasteWater + buyThings + theTrash + notWasteful + carOnly;
// 10. Write JS to update the rendered html (index.html) with total footprint
function updateTotalFootprint() {
    document.getElementById('total-value').innerText = cfpTotal;
}
updateTotalFootprint();