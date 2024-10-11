renderTbl is imported to handle rendering a table dynamically, based on data.

determineHouseHoldPts and determineHouseSizePts are crucial for calculating points based on the number of household members and the size of the house, respectively.

FORM is a global reference used to capture the input from the form fields (first name, last name, household members, and house size).

OUTPUT is a placeholder where the calculated results, carbon footprint data, will be displayed.

start function calculates the household and house size points, sums them up, and stores the results in the cfpData array.

The event listener attached to the form submission captures the input, processes it through the start function, clears any prior output, renders the new table, and resets the form for new input.

determineHouseSizePts and determineHouseHoldPts functions apply point-based logic for different house sizes and numbers of household members.

renderTblHeading constructs the header for the table, while renderTbl iterates over the data and adds rows to the table, displaying the user’s name and the total calculated carbon footprint.

This was helpful. Getting rid of comments helped improve the readability of the code.



My comment for how we handle the edit

I feel like after the user makes changes and submits the form, you would need to update the data array with the new values and use the splice method again to replace the old entry. Then I think you would need to call renderTbl(data) again to refresh the table and display the updated values.



localStorage - My Understanding

localStorage in allows you to store data that persists across browser sessions. localStorage retains information even after the browser is closed and reopened. This is useful when you need to store user input or preferences that must be retained over time.

Data stored in localStorage must be in string format. When working with objects, you need to convert them into strings using JSON.stringify(). This is because localStorage only supports key-value pairs where both keys and values are strings. 

Once stored, these objects can be retrieved and converted back into their original form using JSON.parse(). This conversion process is crucial when dealing with complex data structures in JavaScript, ensuring the data remains usable within the application.

localStorage is part of the web's built-in APIs, and it's synchronous, meaning operations like setting and retrieving items block further code execution until they complete. While this isn't an issue for small amounts of data, it can lead to performance problems if used excessively. 
