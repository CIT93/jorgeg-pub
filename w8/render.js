const TBL = document.getElementById("tab-data");
const FORM = document.getElementById("form");

function renderTblHeading(data) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  table.appendChild(thead);
  thead.appendChild(tr);

  const headingTextArr = [
    "Name",
    "HouseHold",
    "HouseSize",
    "Footprint",
    "Actions",
  ];

  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    //console.log("this is text:", th);
    tr.appendChild(th);
  });

  return table;
}

function renderTblButton(index, data) {

  const tr = document.createElement("tr");
  const actionsCell = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDelete = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDelete.textContent = "Del";
  actionsCell.appendChild(btnEdit);
  actionsCell.appendChild(btnDelete);
  tr.appendChild(actionsCell);

  btnDelete.addEventListener("click", function (e) {
    data.splice(index, 1);
    if (data.length === 0) {
      // If there are no rows left, remove the entire table
      TBL.innerHTML = "";
    } else {
      // Otherwise, re-render the table body
      renderTblBody(data);
    }
  });

  btnEdit.addEventListener("click", function (e) {
    const obj = data[index];
    FORM[1].value = obj.name;
    FORM[2].value = obj.lastN;
    FORM[3].value = obj.houseHold;
    FORM[4].value = obj.houseSize;
    data.splice(index, 1);
    renderTblBody(data);
  });

  return actionsCell;
}

function renderingTheCells(data) {
  TBL.innerHTML = ""; // TAKES ALL TOYS/data OFF THE TABLE
  const tbody = document.createElement("tbody");

  data.forEach(function (item, index) {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(item)) {
      if (key !== "lastN" && key !== "actions") {
        const createCells = document.createElement("td");
        createCells.textContent = value;
        console.log("this is createCells:", createCells);
        tr.appendChild(createCells);
        tbody.appendChild(tr);
      }
    }

    const td = renderTblButton(index, data);
    tr.appendChild(td);
    tbody.appendChild(tr); // Append the newly created table row to the tbody
  });
  return tbody;
}

function renderTblBody(data) {
  const table = renderTblHeading();
  const tbody = renderingTheCells(data);
  table.appendChild(tbody);
  TBL.appendChild(table);

  //return tbody;
}

export { renderTblBody };
