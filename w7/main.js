import {renderTbl} from "/render";


const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const TBL =  document.getElementById("tab-data");
const cfpData = [];

function determineHouseSizePts(size) {
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
    houseHoldPoints = 12;
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

function displayOutput(){
    const output = document.getElementById("output");
    for (obj of cfpData) {
    const newH2 = document.createElement("h2");
    newH2.textContent = 'Carbon Footprint ${"obj.cfpTo}'
    const newH3 = document.createElement ("h3");
    newH3.textContent = 'Based on points of the house';
    const newP = document.createElement("obj");
    newP.textContent = 'this number is based on the number of people in the house of ${obj.householdNum} (score: ${obj. housePoints})';
    newP.textContent += 'and a ${obj} size of home (score:${arr[2]}).';
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP);
    }
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
}
function renderTblHeading () {
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tr = document.createElement("tr");
        const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
        headingTextArr.forEach(function(text){
            const th = document.createElement("th");
            th.textContent = text;
            tr.appendChild(th);
        });
        thead.appendChild(tr);
        table.appendChild(thead);
        return table
}

function renderTbl(data){
    const table = renderTblHeading();
    const tbody = document.createEkement("tbody");
    const tr = document.createElement("tr");
    const trTextArr = ("Bryza", 3, "Medium", 20);
    trTextArr.forEach(function(text){
        const td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
    })
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);
    TBL.appendChild(table);
    TBL.appendChild(table);
}

FORM.addEventListener ('submit', function(e){
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const numberInHousehold = parseInt(FORM.householdNum.value);
    const houseSize = FORM.house.value;
    start(numberInHousehold, houseSize);
    OUTPUT.innerHTML = "";
    //displayOutput();
    renderTbl();
    FORM.reset();
})

//the apartment code does not return.
//my add event listener gives me a error
// to make sure the user give me good answers gi
//im getting an error in my index on line 1 and 6