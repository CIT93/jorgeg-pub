document.addEventListener('DOMContentLoaded', () => {
    const FORM = document.getElementById("form");
    const startExercise = (exerciseType, reps, time) => {
        const output = document.getElementById("output");
        output.textContent = `Starting ${exerciseType} with ${reps} reps for ${time} minutes.`;
        setTimeout(() => {
            output.textContent = "Workout Complete";
        }, time * 5000); 
    };

    FORM.addEventListener("submit", (e) => {
        e.preventDefault();

        const exerciseType = FORM.exerciseType.value;
        const reps = FORM.Repsnumber.value;
        const time = FORM.Time.value;

        startExercise(exerciseType, reps, time);

        FORM.reset(); 
    });
});

