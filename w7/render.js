const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  table.appendChild(thead);
  thead.appendChild(tr);

  const headingTextArr = [
    "Name",
    //"HouseHold",
    //"HouseSize",
    "Footprint",
    //"Actions",
  ];

  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    //console.log("this is text:", th);
    tr.appendChild(th);
  });

  return table;
}

function renderTblBody(data) {
  TBL.innerHTML = "";
  const tbody = document.createElement("tbody");
  const table = renderTblHeading();
  data.forEach(function (item) {
    const tr = document.createElement("tr"); // Create a new table row for each data entry

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    tr.appendChild(nameCell);
    console.log("this is nameCell:", nameCell);

    // const householdCell = document.createElement("td");
    // householdCell.textContent = item.houseHold;
    // tr.appendChild(householdCell);

    // const houseSizeCell = document.createElement("td");
    // houseSizeCell.textContent = item.houseSize;
    // tr.appendChild(houseSizeCell);

    const footprintCell = document.createElement("td");
    footprintCell.textContent = item.footprint;
    tr.appendChild(footprintCell);

    // const actionsCell = document.createElement("td");
    // const btnEdit = document.createElement("button");
    // const btnDelete = document.createElement("button");
    // btnEdit.textContent = "Edit";
    // btnDelete.textContent = "Del";
    // actionsCell.appendChild(btnEdit);
    // actionsCell.appendChild(btnDelete);
    // tr.appendChild(actionsCell);

    tbody.appendChild(tr); // Append the newly created table row to the tbody
  });
  table.appendChild(tbody);
  TBL.appendChild(table);
  return tbody;
}

export { renderTblBody }; // we only need renderTblBody but I leave others just as reminder for me, other 2 are not required as export.
