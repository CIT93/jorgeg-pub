const TBL = document.getElementById("tab-data");
const FORM = document.getElementById("form");

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

function renderTblButton(index, data) {
  console.log("this is index in renderTblButton:", index);
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
    if (index !== 0 || data.lenght !==1) {
      console.log("this is index in btnDelete:", index);
      console.log("this is data before splice:", data);
      data.splice(index, 1); // hack noted
      console.log("this is data.length after spliced:", data.length);
      renderTblHeading(data);
      renderTblBody(data);
    } else {
      console.log("inside else statement")
      console.log("data.length:", data.length)
      if (index === 0 && data.length === 1) {
        data.splice(0, data.length); //erase all data in rows/ this one is dangerous
        TBL.innerHTML = "";
        console.log("this is data.length:", data.length)
        console.log(index !== 0);
      }}
      data.splice(index, 1);
      //renderTblBody(data)
  });

  /*btnEdit.addEventListener("click", function(e){
      data.splice(0, data.length);
      FORM.addEventListener("submit", function (e) {
        e.preventDefault();
        const firstName = FORM.firstname.value;
        const lastName = FORM.lastname.value;
      
        const hMembers = parseInt(FORM.hmembers.value);
        const hSize = FORM.hsize.value;

        
        FORM.reset();
      });
        renderTblBody(data);
      
  })*/

  return actionsCell;
}

function renderingTheCells(data) {
  TBL.innerHTML = ""; // TAKES ALL TOYS/data OFF THE TABLE
  const tbody = document.createElement("tbody");

  data.forEach(function (item, index) {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(item)) {
      console.log(`key ${key}, value ${value}`);

      if (key !== "lastN" && key !== "actions") {
        console.log("build it");

        const createCells = document.createElement("td");
        createCells.textContent = value;
        console.log("this is something:", createCells);
        tr.appendChild(createCells);
        tbody.appendChild(tr);
      }
    }
    console.log("this is data.length in renderingTheCells:", data.length, "data:", data);
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
