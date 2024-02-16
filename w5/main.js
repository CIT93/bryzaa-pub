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

function displayOutObj(){
    console.log(obj);
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = 'Carbon Footprint ${"obj.cfpTo"}; 
    const newH3 = document.createElement ("h3");
    newH3.textContent = 'Based on points of the house';
    const newP = document.createElement("obj");
    newP.textContent = 'this number is based on the number of people in the house of ${obj[0]} (score: ${obj[3]}';
    newP.textContent += 'and a ${obj} size of home (score:${arr[2]}).';
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
}

function start(numberInHousehold, size) {
const houseHoldPoints = determineHouseHoldPts(numberInHousehold);
const sizeOfHousePoints = determineHouseSizePts(size);
const total = houseHoldPoints + sizeOfHousePoints;
cfpData.push([numberInHousehold, size, houseHoldPoints, sizeOfHousePoints, total]);
cfpData.push({
    householdNum: numberInHousehold,
    houseSize: size,
    housePoints: houseHoldPoints,
    houseSizePoints: sizeOfHousePoints,
    cfpTotal: total
});
cfpData.push(cfpObj);



function displayOutput(){
    for (obj of cfpData){
    console.log(obj)
        const output = document.getElementById("output");
        const newH2 = document.createElement("H2");
        newH2.textContent = 'Carbon Footprint ${obj.cfpTotal}';
        const newH3 = document.createElement ("H3");
        newH3.textContent = 'obj of arr ';
        const newP = document.createElement("p");
        newP.textContent = 'Obj ${arr[0]} (score: ${arr[3]}';
        newP.textContent += 'and a ${arr[1]} obj(score:${arr[2]}).';
        output.appendChild(newH2);
        output.appendChild(newH3);
        output.appendChild(newP);

   }
}




//function displayOutput(){
    //for (arr i = 0; i < cfpData.length; i++){
        //console.log(i)
        //const output = document.getElementById("output");
        //const newH2 = document.createElement("h2");
        //newH2.textContent = 'Carbon Footprint ${cfpData[i][4]}';
        //const newH3 = document.createElement ("h3");
        //newH3.textContent = 'Based on number in and size of home';
        //const newP = document.createElement("p");
        //newP.textContent = 'this number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}';
        //newP.textContent += 'and a ${arr[1]} size of home (score:${arr[2]}).';
        output.appendChild(newH2);
        //output.appendChild(newH3);
        //output.appendChild(newP);

//    }
//}



start(5, "apartments");
start(4, "large");
start(3, "medium");
start(2, "small");

console.log(cfpData)

//const cfpData = [{
//
//}, {
//
//}]

displayOutput();

//Intro to Objects

const myArr = [];
const myObj = {
    cfpTotal: 18,
    size: "small",
    displayOut: function output(){
        console.log("this is a method call")
        console.log(this.size);
        //console.log(myObj.cfpTotal);
    }
};
console.log(myObj.cfpTotal);
console.log(myObj ["size"]);
myObj.displayOut()


// for (initialization; condition; afterthought)
// statment

for (let i = 0; i < 5; i++) {
    // black scope
    console.log(i);
}
// count backwards?
for (let i =6; i < 0; i--){
    //block scope
    console.log(i);
}
// standard for loop






//how would we modify this code to count from 1 to 15

//counting down for loop

//refactor for of loop above into standard for loop


//return values
//how to use devTools
//min global vars

//const result = 0;

function addTwo(num) {
    return num + 2;

}

function timesTwo(num) {
    return num * 2;
}

function start {
    const myResult = addTwo(105);
    const mySecondResult = timesTwo(myResult);
    console.log(result);
}
 start();
