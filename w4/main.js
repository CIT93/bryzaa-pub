const cfpData = [];

console.log("top of file")
function determineHouseSizePts(size) {
    console.log("inside black scope");
    let sizeOfHousePoints = 0;
if(size === "large") {
    let sizeOfHousePoints = 10;
} else if (size === "medium") {
    let sizeOfHousePoints = 7;
} else if (size === "small") {
    let sizeOfHousePoints = 4; 
} else if (size === "apartment") {
    let sizeOfHousePoints = 2;
}

return sizeOfHousePoints;
}

function determineHouseHoldPts(numberInHousehold){
    console.log("Inside the function");
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14
} else if (numberInHousehold === 2) {
    houseHoldPoints = 10;
} else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
} else if (numberInHousehold === 4) {
    houseHoldPoints = 8;  
} else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
} else if (numberInHousehold === 6) {
    houseHoldPoints = 4; 
}else if (numberInHousehold > 6){
    houseHoldPoints = 2;
}
return houseHoldPoints
}

function start(inputs) {
const houseHoldPoints = determineHouseHoldPts(inputs[0]);
const sizeOfHousePoints = determineHouseSizePts(inputs[1]);
const total = houseHoldPoints + houseHoldPoints;
cfpData.push([houseHoldMembers, houseSize, houseHoldPoints, HouseSizePts, total]);
}

function displayOutput(){
    
}
start(5, "apartments");
start(4, "large");
start(3, "medium");

displayOutput()