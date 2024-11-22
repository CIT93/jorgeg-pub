import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

const calculateAverageFootprint = (data) => {
  if (data.length === 0) return 0; 
  const total = data.reduce((sum, item) => sum + item.cfpTotal, 0); 
  return total / data.length; 
};


const renderTblHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  const headingTextArr = [
    "Name",
    "Household",
    "HouseSize",
    "Food Choice",
    "Footprint",
    "Actions",
  ];

  headingTextArr.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);

  return table;
};

const onUpdate = (index, data) => {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);
};

const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");

  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");

  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";

  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener("click", (e) => {
    onUpdate(index, data);
  });

  btnEdit.addEventListener("click", (e) => {
    FORM.firstName.value = obj.first;
    FORM.lastName.value = obj.last;
    FORM.housem.value = obj.houseMembers;
    FORM.houses.value = obj.houseSize;
    FORM.food.value = obj.foodChoice;
    onUpdate(index, data);
  });

  return td;
};

const renderTblBody = (data) => {
  const tbody = document.createElement("tbody");

  data.forEach((obj, index) => {
    const tr = document.createElement("tr");

    const keys = ["first", "houseMembers", "houseSize", "foodChoice", "total"];

    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = obj[key];
      tr.appendChild(td);
    });

    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);

    tbody.appendChild(tr);
  });

  return tbody;
};

const addAverageRow = (table, data) => {
  const newRow = table.insertRow(); 
  const labelCell = newRow.insertCell(0); 
  labelCell.textContent = "Average Footprint:";
  labelCell.colSpan = 5; // Specifies how many columns a single table cell should span across.

  const avgCell = newRow.insertCell(1); 
  avgCell.textContent = calculateAverageFootprint(data); 
};

const renderTbl = (data) => {
  TBL.innerHTML = ""; 

  if (data.length !== 0) {
    const table = renderTblHeading(); 
    const tbody = renderTblBody(data); 
    table.appendChild(tbody); 

    addAverageRow(table, data); 

    TBL.appendChild(table); 
  }
};

export { renderTbl };
