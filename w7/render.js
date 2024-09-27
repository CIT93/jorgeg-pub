const TBL = document.getElementById("tab-data");
let tableRendered = false;

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
    return table;
  }

  function renderTbl(data){
  if (tableRendered === false) {
    const table = renderTblHeading();
    const tbody = document.createElement("tbody");
    data.forEach(function(obj) {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = obj.Name;
    tr.appendChild(tdName);

    const tdHouseHold = document.createElement("td");
    tdHouseHold.textContent = obj.houseM;
    tr.appendChild(tdHouseHold);

    const tdHouseSize = document.createElement("td");
    tdHouseSize.textContent = obj.houseS;
    tr.appendChild(tdHouseSize);

    const tdFootprint = document.createElement("td");
    tdFootprint.textContent = obj.cfpTotal;
    tr.appendChild(tdFootprint);

    // const trTextArr = ["Jorge", 3, "Large", 20, "Edit", "Del"];
    // trTextArr.forEach(function(text){

      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
    });
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

    tableRendered = true;
  }
  }
export {renderTbl, renderTblHeading};
