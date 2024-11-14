const FORM = document.getElementById("form");
const OUT = document.getElementById("output");

function updateDOM(message, el = "h3") {
  const newEl = document.createElement(el);
  newEl.textContent = message;
  OUT.appendChild(newEl);
}

const startWorkout = (type, reps, time, fn) => {
  fn(`Start ${type} <> Goal reps is ${reps} <> complete in ${time} min!`, "p");

  return new Promise((resolve, reject) => {
    if (time === 0) {
      reject("Error: Time must be greater than 0.");
    } else {
      setTimeout(() => {
        fn(`It should take ${time} Minutes`, "p");
        resolve();
      }, time * 1000);
    }
  })
    .then(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            fn(`Stop ${type}!`, "p");
            console.log(`Success: ${type} workout completed`);
            resolve();
          }, time * 5000);
        })
    )
    .catch((error) => {
      fn(`Error: ${error}`, "p");
      console.error("Could not load workout:", error);
    });
};

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const type = e.target.exerciseType.value;
  const reps = parseFloat(e.target.Repsnumber.value);
  const time = parseFloat(e.target.Time.value);
  startWorkout(type, reps, time, updateDOM);
  FORM.reset();
});








// const FORM = document.getElementById("form");
// const OUT = document.getElementById("output");

// const updateDOM = (message, el = "h3") => {
//   const newEl = document.createElement(el);
//   newEl.textContent = message;
//   OUT.appendChild(newEl);
// };

// const startWorkout = (type, reps, time, fn) => {
//     fn(`Start ${type} <> Goal reps is ${reps} <> complete in ${time} min!`, "p");
//     return new Promise((resolve, reject) => {
//         if(time === 0) {
//             reject(`Error on Time selection`);
//         } else {
//             setTimeout(() => {
//                 resolve(`Stop ${type}`);
//             }, time * 1000);
//         }
//     });
// };

// const onError = (error) => {
//     updateDOM(error, "h2")
// }

// FORM.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const type = e.target.exerciseType.value;
//   const reps = parseFloat(e.target.Repsnumber.value);
//   const time = parseFloat(e.target.Time.value);
//   startWorkout(type, reps, time, updateDOM);
//     .then(updateDOM)
//     .catch(onError);
//   FORM.reset();
// });








// The DOMContentLoaded event listener ensures that this code executes only once the entire DOM is fully loaded, preventing any errors if elements like form or output are not yet available when the script runs. Although, from the Week 13 Attendance I now know this isn't necessary. It just becomes expensive.
// document.addEventListener('DOMContentLoaded', () => {
//     const FORM = document.getElementById("form");
//     const startExercise = (exerciseType, reps, time) => {
//         const output = document.getElementById("output");
//         output.textContent = `Starting ${exerciseType} with ${reps} reps for ${time} minutes.`;
//         setTimeout(() => {
//             output.textContent = "Workout Complete";
//         }, time * 5000);
//     };
//     FORM.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const exerciseType = FORM.exerciseType.value;
//         const reps = FORM.Repsnumber.value;
//         const time = FORM.Time.value;

//         startExercise(exerciseType, reps, time);

//         FORM.reset();
//     });

// });
