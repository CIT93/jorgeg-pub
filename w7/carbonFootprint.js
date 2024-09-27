const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if(size === 'large') {
    houseSizePoints = 10;
  } else if(size === 'medium') {
    houseSizePoints = 7;
  } else if(size === 'small') {
    houseSizePoints = 4;
  } else if(size === 'apt') {
    houseSizePoints = 2;
  }
  return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
      houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
      houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
      houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
      houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
      houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
      houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
      houseHoldPoints = 2;
    }
    return houseHoldPoints;
  }

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

  function getCfpData() {
    return cfpData;
  }

export {determineHouseSizePts, determineHouseHoldPts, addCfpData, getCfpData};