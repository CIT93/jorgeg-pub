I found the review of functions really helpful. I already understood the basic concepts, like how to declare a function and the difference between parameters and arguments. However, hearing more about block scope and how variables work within a function clarified some things for me. The explanation about return values was particularly useful. I now see how important it is to capture the returned value in a variable to use it later, which I wasn't fully aware of before. 



Summary of Concepts Learned

1. The rest operator allows a function to accept an indefinite number of arguments as an array. In the example with (add2), the function uses the rest operator to collect all provided arguments into an array (a). This enables the function to handle multiple inputs flexibly. 

2. JavaScript supports default parameter values in functions. With what we had at the bottom of the main.js, if a function parameter is not provided during the call, it defaults to a specified value. This simplifies function calls by eliminating the need for conditional checks to assign a value.

3. An IIFE is a function that is executed immediately after its creation. In the example we did, the IIFE takes the variable (a), logs a message, and outputs the value of (a). This pattern is useful for encapsulating code within a local scope, preventing variable conflicts in the global scope, and maintaining clean and organized code.

