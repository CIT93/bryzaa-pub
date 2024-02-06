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

function start(numberInHousehold, size) {
const houseHoldPoints = determineHouseHoldPts(numberInHousehold);
const sizeOfHousePoints = determineHouseSizePts(size);
const total = houseHoldPoints + sizeOfHousePoints;
cfpData.push([numberInHousehold, size, houseHoldPoints, sizeOfHousePoints, total]);
}

function displayOutput(){
    for (arr of cfpData){
        const output = document.getElementById("output");
        const newH2 = document.createElement("H2");
        newH2.textContent = 'Carbon Footprint ${arr[4]}';
        const newH3 = document.createElement ("h3");
        newH3.textContent = 'Based on number in and size of home';
        const newP = document.createElement("p");
        newP.textContent = 'this number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}';
        newP.textContent += 'and a ${arr[1]} size of home (score:${arr[2]}).';
        output.appendChild(newH2);
        output.appendChild(newH3);
        output.appendChild(newP);

    }
}
start(5, "apartments");
start(4, "large");
start(3, "medium");

displayOutput()