import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { renderTbl } from "./render.js";
import { saveLS, sleepData } from "./storage.js";
import { createSleepEntry, calculateSleepTip } from "./sleep.js";

renderTbl(sleepData);

FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = FNAME.value;
  const lastName = LNAME.value;
  const day = FORM.day.value;
  const sleepScore = parseInt(FORM.sleepHours.value, 10);

  if (firstName && lastName && sleepScore <= 14) {
    const sleepEntry = createSleepEntry(day, sleepScore);

    sleepData.push({
      firstName,
      lastName,
      day: sleepEntry.day,
      sleepScore: sleepEntry.sleepScore,
      status: sleepEntry.status,
    });

    saveLS(sleepData);
    renderTbl(sleepData);

    const sleepTip = calculateSleepTip(sleepScore);
    document.getElementById("tip-message").innerHTML = sleepTip;

    FORM.reset();
    SUBMIT.textContent = "";
  } else {
    SUBMIT.textContent = "Please fill out all fields correctly.";
  }
});
