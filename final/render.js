import { TBL, FORM } from "./global.js";
import { saveLS, sleepData } from "./storage.js";
import { calculateSleepTip } from "./sleep.js";

const renderTblHeading = (...headings) => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  headings.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
};

const renderTblBtn = (entry, index) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnEdit.addEventListener("click", () => editEntry(entry, index));

  const btnDel = document.createElement("button");
  btnDel.textContent = "Delete";
  btnDel.addEventListener("click", () => deleteEntry(index));

  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  return td;
};

const renderTblBody = (data) => {
  const tbody = document.createElement("tbody");

  data.forEach((entry, index) => {
    const tr = document.createElement("tr");

    ["firstName", "lastName", "day", "sleepScore", "status"].forEach((key) => {
      const td = document.createElement("td");
      td.textContent = entry[key];
      tr.appendChild(td);
    });

    const actionTd = renderTblBtn(entry, index);
    tr.appendChild(actionTd);
    tbody.appendChild(tr);
  });

  return tbody;
};

const renderTbl = (data) => {
  TBL.innerHTML = "";

  if (data.length !== 0) {
    const table = renderTblHeading(
      "First Name",
      "Last Name",
      "Day",
      "Sleep Hours",
      "Sleep Status",
      "Actions"
    );
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
};

const deleteEntry = (index) => {
  sleepData.splice(index, 1);
  saveLS(sleepData);
  renderTbl(sleepData);
};

const editEntry = (entry, index) => {
  FORM.firstName.value = entry.firstName;
  FORM.lastName.value = entry.lastName;
  FORM.sleepHours.value = entry.sleepScore;
  FORM.day.value = entry.day;

  sleepData.splice(index, 1);
  saveLS(sleepData);
  renderTbl(sleepData);

  const sleepTip = calculateSleepTip(entry.sleepScore);
  document.getElementById("tip-message").innerHTML = sleepTip;
};

export { renderTbl };
