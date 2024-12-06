### Sleep Tracker App

## Description

The Sleep Tracker app allows users to log and monitor their nightly sleep hours. It provides feedback based on the user's input, indicating whether they are within the recommended sleep range of 7 to 9 hours. The app includes validation for reasonable sleep hour entries, provides helpful sleep tips, and stores all data in the browser's local storage, allowing users to retain their sleep records between sessions.



# Features



- **Input and Track Sleep**: Users can enter their name, the day, and the hours they slept each night to track their sleep patterns.

- **Sleep Status Feedback**: Provides immediate feedback on sleep adequacy based on each entry, advising if the user is meeting, exceeding, or falling short of the recommended sleep range.

- **Sleep Tips**: Displays tips for improving sleep habits based on sleep duration.

- **Local Storage Persistence**: Saves all entries in the browser so that sleep data is retained between sessions.

- **Edit and Delete**: Fully implemented edit and delete functionality, allowing users to update or remove individual entries directly from the table.



# Modules and Key Functions



**global.js**

- **Global Element References**: Holds references to global elements, such as the form, table, and feedback message area, keeping global variables minimal.

**storage.js**

- **saveLS(data)**: Saves the sleepData array to local storage.

- **getLS()**: Retrieves and parses sleepData from local storage or initializes it as an empty array if none exists.

**render.js**

- **renderTbl(data)**: Renders a table of sleep entries, including each entry’s first name, last name, day, sleep hours, status, and action buttons for editing and deleting.

- **deleteEntry(index)**: Deletes an entry from sleepData, updates local storage, and re-renders the table.

- **editEntry(entry, index)**: Populates the form with the selected entry’s data for editing and updates tips dynamically.

**sleep.js**

- **calculateSleepStatus(sleepScore)**: Determines the sleep status based on the entered sleep hours:
  - Below 7 hours: "Below Average Sleep"
  - 7 to 9 hours: "Optimal Sleep"
  - 10 to 14 hours: "Excessive Sleep"
  - More than 14 hours: "Very Excessive Sleep"

- **calculateSleepTip(sleepScore)**: Provides tips to improve or maintain sleep habits based on the sleep score.

**main.js**

- **start(firstName, lastName, sleepScore, day)**: Processes and stores each user entry, checking if it exists before adding or updating, then updating local storage and rendering the table.

- **Form Submission Handler**: Listens for form submissions, validates entries, processes data, updates the table, and dynamically displays sleep tips.



# Validation



- **Sleep Hours Validation**: Ensures sleep hours are within a reasonable range of less than 15 before allowing submission.

- **Feedback Messages**:
  - 7 to 9 hours: "Optimal Sleep"
  - Less than 7 hours: "Below Average Sleep"
  - 10 to 14 hours: "Excessive Sleep"
  - More than 14 hours: "Very Excessive Sleep"



# Variables



- **sleepData**: An array that stores all user entries with their name, day, sleep hours, status, and tips.

- **FORM and TBL**: References to the form and table elements for user interaction and display.



# Usage



1. **Add an Entry**: Enter your first name, last name, day, and sleep hours, then submit. The entry will appear in the table with feedback on your sleep status and corresponding tips.

2. **Edit an Entry**: Click "Edit" next to an entry to load its data into the form, make changes, and submit to update.

3. **Delete an Entry**: Click "Delete" to remove an entry from the table and local storage.

4. **Data Persistence**: All entries are saved in local storage, allowing them to persist between sessions.

5. **View Sleep Tips**: Tips are dynamically displayed below the table based on the most recent entry or edit, providing actionable advice for improving sleep.


