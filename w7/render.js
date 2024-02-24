function renderTblHeading() {
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

function renderTblBody(data) {
  //const table = document.createElement("table")
  const tbody = document.createElement("tbody");
  
  console.log("this is data:",data)

  data.forEach(function (item) {
    console.log("inside for data loop:",data);
    const tr = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    tr.appendChild(nameCell);

    const householdCell = document.createElement("td");
    householdCell.textContent = item.houseHold;
    tr.appendChild(householdCell);

    const houseSizeCell = document.createElement("td");
    houseSizeCell.textContent = item.houseSize;
    tr.appendChild(houseSizeCell);

    const footprintCell = document.createElement("td");
    footprintCell.textContent = item.footprint;
    tr.appendChild(footprintCell);

    const actionsCell = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDelete = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDelete.textContent = "Del";
    actionsCell.appendChild(btnEdit);
    actionsCell.appendChild(btnDelete);
    tr.appendChild(actionsCell);

    tbody.appendChild(tr);
  });
  //table.appendChild(tbody)
  return tbody;
}

export { renderTblBody, renderTblHeading };
