### My Solution for Water Consumption Calculation


# 1. Modify the Form
Add fields to the HTML form for:
- Dropdowns to check if the user has a dishwasher and/or washing machine.
- Input fields for specifying the weekly usage of these appliances


# 2. Add Dynamic Behavior
- Dynamically show or hide the usage input fields based on the user's response to whether they own a dishwasher or washing machine.
- In the main.js file, as it already handles dynamic behavior for form inputs. Add a new event listener for the dropdowns to toggle visibility of the usage input fields.


# 3. Add Calculation Logic
Create a function to:
1. Take the number of times the appliances are used per week.
2. Assign points based on the conditions:
   - More than 9 times: 3 points.
   - 4 to 9 times: 2 points.
   - 1 to 3 times: 1 point.
   - 0 times: 0 points.
3. Sum the points for both appliances (if applicable).  
- Add the calculation logic to the FP class in fp.js, as it already calculates various footprint points like household size and food choices. 


# 4. Update Table Rendering
- Ensure the table properly displays the water consumption points as part of the total carbon footprint. 
- Update the renderTbl function in render.js to include water consumption points in the data displayed in the table.


