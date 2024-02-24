function renderTblHeading() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
  //here you are sending to document. here table is being appended to table for display 
    table.appendChild(thead);
    thead.appendChild(tr);
    
    const headingTextArr = [
      "Name",
      "HouseHold",
      "HouseSize",
      "Footprint",
      "Actions",
    ];
    //syntax: .forEach(item, index, array)<--- in that order
    headingTextArr.forEach(function (text) {
      //anonymous function, createas function on the fly
      const th = document.createElement("th");
      th.textContent = text;
      console.log("this is text:", th);
      tr.appendChild(th);
    });
    
    return table; //return as table because table ultimately holds it all
  }
  
  function renderTblBody(data) {
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    
  
    // Loop through the data array: remember function(item, index, array) in that order!!!
    data.forEach(function (item) {
      console.log(data);
  
      // Create cells for each property in the item
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
      actionsCell.appendChild(btnEdit); // Append the buttons to the actionsCell
      actionsCell.appendChild(btnDelete);
      tr.appendChild(actionsCell);
  
      // Append the row to the tbody. tbody is what holds the tr, and td's. Like a parent and tr and td's are the childeren
      tbody.appendChild(tr);
    });

    return tbody;
  }
  
  export{renderTblBody, renderTblHeading};