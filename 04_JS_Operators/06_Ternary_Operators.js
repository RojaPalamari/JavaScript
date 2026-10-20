/* 6. Ternary Operator
    The ternary operator is a shorthand way to write an if-else statement in JavaScript. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.
    condition ? valueIfTrue : valueIfFalse;
*/

let age = 20; // Assigns the value 20 to the variable age
let isAdult = age >= 18 ? "yes" : "no"; // Output: yes
console.log("is the person an adult? ", isAdult); // Output: is the person an adult?  yes

let num1 = 10; // Assigns the value 10 to the variable num1
let num2 = 5; // Assigns the value 5 to the variable num2
let max = num1 > num2 ? num1 : num2; // Output: 10
console.log("The maximum number is: ",max); // Output: The maximum number is:  10

let actualStatusCode = 200; // Assigns the value 200 to the variable actualStatusCode
let expectedStatusCode = 200; // Assigns the value 200 to the variable expectedStatusCode
let statusMessage = actualStatusCode === expectedStatusCode ? "Success" : "Error"; // Output: Success
console.log("The status message is : ", statusMessage); // Output: The status message is :  Success

// Nested Ternary Operator: The ternary operator can also be nested, allowing for multiple conditions to be evaluated in a single expression. However, it is important to use nested ternary operators judiciously, as they can make the code harder to read and understand.

let score = 85; // Assigns the value 85 to the variable score
let grade = 
    score >= 90 ? "A" : 
        score > 80 ? "B" : 
            score > 70 ? "C" : 
                score > 60 ? "D" : "F"; // Output: B
console.log("The grade is: ",grade); // Output: The grade is:  B

let age1 = 25; // Assigns the value 25 to the variable age1
let enjoy = age1 > 18 ? (age1 > 25 ? "Goa and drinks" : "Only goa, no drinks") : "No goa and no drinks"; // Output: Only goa, no drinks
console.log("The enjoy is: ", enjoy); // Output: The enjoy is:  Only goa, no drinks

let temp = 35;
let weather = 
    temp > 30 ? "Hot" :
        temp > 20 ? "Warm" :
            temp > 10 ? "Cool" : "Cold";
console.log("The weather is: ", weather); // Output: The weather is:  Hot