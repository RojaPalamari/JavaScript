/* 3. Comparison Operators
    comparison operators are used to compare values and return a boolean result (true or false). The most common comparison operators are equal (==), not equal (!=), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=).
*/

let num1 = 10; // Assigns the value 10 to the variable num1
let num2 = 20; // Assigns the value 20 to the variable num2

console.log("Is num1 equal to num2?", num1 == num2); // Output: Is num1 equal to num2? false
console.log("Is num1 not equal to num2?", num1 != num2); // Output: Is num1 not equal to num2? true
console.log("Is num1 greater than num2?", num1 > num2); // Output: Is num1 greater than num2? false     
console.log("Is num1 less than num2?", num1 < num2); // Output: Is num1 less than num2? true
console.log("Is num1 greater than or equal to num2?", num1 >= num2); // Output: Is num1 greater than or equal to num2? false
console.log("Is num1 less than or equal to num2?", num1 <= num2); // Output: Is num1 less than or equal to num2? true       

console.log("Is 5 loosely equal to '5'?", 5 == "5"); // Output: Is 5 loosely equal to '5'? true
console.log("Is 5 strictly equal to '5'?", 5 === "5"); // Output: Is 5  strictly equal to '5'? false

console.log("Is 5 loosely not equal to '5'?", 5 != "5"); // Output: Is 5 loosely not equal to '5'? false
console.log("Is 5 strictly not equal to '5'?", 5 !== "5"); // Output: Is 5 strictly not equal to '5'? true

console.log(0 == ""); // Output: true (loose equality, type coercion occurs)
console.log(0 === ""); // Output: false (strict equality, no type coercion)

console.log(null == undefined); // Output: true (loose equality, both represent absence of value)
console.log(null === undefined); // Output: false (strict equality, different types)    

console.log(NaN == NaN); // Output: false (NaN is not equal to anything, including itself)  
console.log(NaN === NaN); // Output: false (strict equality, NaN is not equal to anything, including itself)

