const TBL = document.getElementById("tab-data");

function renderTblHeading () {
  TBL.innerHTML = "";
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

  function renderTblBtn(index, data, form){
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click', function(e){
      console.log('Hello from inside the delete button');
      console.log(e);
      data.splice(index, 1);
      renderTbl(data);
    });
    btnEdit.addEventListener('click', function(e){
        const obj = data[index]; 
        form.firstname.value = obj.firstName; 
        form.lastname.value = obj.lastName;
        form.housem.value = obj.houseM; 
        form.houses.value = obj.houseS; 

    });
    return td;
  }

  function renderTblBody(data, form){
    const tbody = document.createElement("tbody");
    data.forEach(function (obj, index) {
      const tr = document.createElement("tr");
      for (const [key, value] of Object.entries(obj)) {
        if (key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS"){
          const td = document.createElement("td");
          td.textContent = value;
          tr.appendChild(td);
        } 
      }
      const td = renderTblBtn(index, data, form);
      tr.appendChild(td);
      tbody.appendChild(tr);
    });
    return tbody;
  };

  function renderTbl(data, form) {
    TBL.innerHTML = "";
    const table = renderTblHeading();
    const tbody = renderTblBody(data, form);
    table.appendChild(tbody);
    TBL.appendChild(table);
    };
  

export {renderTbl};



// Code Along - Conditional DOM render (Coding Challenge)
// I used if statements to check if each property firstName, houseMembers, houseSize, and cfpTotal exists in the object (`obj`). 
// If the property is present, I created a new TD element, set its text content to the property's value, and appended it to the corresponding table row (tr).
// Code Along - Challenge 2
// I attempted to create a new table data element for every key-value pair and appended it to the current row (tr), as well as append the row to the table body (tbody). 

// Code Along - Rendering and code action buttons
// I tried to use createRow to generate a row for each object in the data array and then append the generated rows to the table body (<tbody>).

// Code Challenge 2 
// I used data.splice(index, 1); to delete the entry at the given index. After removing the item, I called the renderTbl(data); function to re-render the table and update the displayed data accordingly.
