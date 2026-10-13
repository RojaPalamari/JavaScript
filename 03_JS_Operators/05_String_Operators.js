/* 5. String Operators
    String operators are used to manipulate strings in JavaScript. The most common string operator is the concatenation operator (+), which combines two or more strings into a single string.
*/
// 1. concatentation operator (+): The concatenation operator (+) is used to combine two or more strings into a single string. It can also be used to concatenate strings with other data types, such as numbers or variables.

let str1 = "Hello, "; // Assigns the value "Hello, " to the variable str1
let str2 = "World!"; // Assigns the value "World!" to the variable str2

console.log("Concatenated string: ", str1 + str2); // Concatenates str1 and str2 

let num = 5; // Assigns the value 5 to the variable num
console.log("concatenated string with number: ", str1 + num); // Output: String concatenation with a number: Hello, 5

let str3 = "Hello"; // Assigns the value "Hello" to the variable str3
console.log("concatenated string with another string: ", str3 + " World!"); // Output: String concatenation with another string: Hello World!

let str4 = "javascript"; // Assigns the value "javascript" to the variable str4
let str5 = "is"; // Assigns the value "is" to the variable str5
console.log("concatenated string with multiple strings: ", str4 + " " + str5 + " fun!"); // Output: String concatenation with multiple strings: javascript is fun!

console.log(1, 2, 3, "Hello" + true + null + undefined); // Output: 1 2 3 Hello truenullundefined
// 2. Concatenation Assignment Operator (+=): The concatenation assignment operator (+=) is used to append a string to an existing string variable. It combines the current value of the variable with the new string and assigns the result back to the variable. 

let str6 = "Hello"; // Assigns the value "Hello" to the variable str6
str6 += " world!"; // Appends " world!" to the existing value of str6
console.log("Concatenated string using += operator: ", str6); // Output: Concatenated string using += operator: Hello world!

let str7 = "Javascript"; // Assigns the value "Javascript" to the variable str7
str7 += " is fun!"; // Appends " is fun!" to the existing value of str7
console.log("Concatenated string using += operator: ", str7); // Output: Concatenated string using += operator: Javascript is fun!

// 3. Template Literals: Template literals are a way to create strings in JavaScript that allow for easier string interpolation and multi-line strings. They are enclosed in backticks (`) instead of single or double quotes. Template literals can include placeholders for variables or expressions, which are denoted by ${}.

let name1 = "Roja"; // Assigns the value "Roja" to the variable name
let age = 26; // Assigns the value 26 to the variable age
console.log(`My name is ${name1} and I am ${age} years old.`); // Output: My name is Roja and I am 26 years old.

let str8 = "QA"; // Assigns the value "QA" to the variable str8
let str9 = "Engineer"; // Assigns the value "Engineer" to the variable str9
console.log(`I am a ${str8} ${str9}.`); // Output: I am a QA Engineer.