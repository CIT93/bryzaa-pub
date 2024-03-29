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

export {renderTbl, renderTblHeading};