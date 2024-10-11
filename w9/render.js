import {FORM, TBL} from "./global.js"
import { saveLS } from "./storage.js";

function renderTblHeading () {
  //TBL.innerHTML = "";
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

  function onUpdate(index, data) {
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
  }

  function renderTblBtn(obj, index, data){
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    btnDel.addEventListener('click', function(e){
      onUpdate(index, data);
    })
    btnEdit.addEventListener('click', function(e){
      FORM[1].value = obj.firstName;
      FORM[2].value = obj.lastName;
      FORM[3].value = obj.houseM;
      FORM[4].value = obj.houseS;
      onUpdate(index, data);
    })
    return td;
  }

  function renderTblBody(data){
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
      const td = renderTblBtn(obj, index, data);
      tr.appendChild(td);
      tbody.appendChild(tr);
    });
    return tbody;
  }

  function renderTbl(data){
    TBL.innerHTML = "";
    if (data.length !== 0) {
      const table = renderTblHeading();
      const tbody = renderTblBody(data);
      table.appendChild(tbody);
      TBL.appendChild(table);
    }
  
  }
  

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

// Code Along - create global.js and implement local storage
// I added a call to the renderTbl(cfpData) function immediately after the cfpData array is initialized in the main script. 
// This ensures that when the page is loaded or refreshed, the table will display any data that has been stored in localStorage.

// I updated the event listeners for both the edit and delete buttons. After either editing or deleting an entry, the updated cfpData array is saved back to localStorage using the saveLS() function. 
// This ensures that any changes made through these buttons persist in localStorage and are reflected in the table.