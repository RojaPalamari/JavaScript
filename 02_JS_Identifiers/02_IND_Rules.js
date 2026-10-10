let a = 10;
console.log(a); // 10

/* Rules for Identifiers in JavaScript */
// ========================================

// 1. An identifier must start with a letter, underscore (_), or dollar sign ($)
let _name = "John";
console.log(_name); // John

let $age = 25;
console.log($age); // 25    

let Name = "Alice";
console.log(Name); // Alice

// 2. Can contain letters, numbers, underscores, and dollar signs
let userName = "Bob123"; //letter
console.log(userName); // Bob123

let user_name = "Charlie"; //underscore
console.log(user_name); // Charlie      

let user$age = 30; //doller sign
console.log(user$age); // 30

let user1 = "David"; //number
console.log(user1); // David

// 3. An identifier cannot start with a number

//let 1stName = "Eve"; // This will throw an error
//console.log(1stName); // This will throw an error

// 4. An identifier cannot contain spaces or special characters (except _ and $)

//let first name = "Frank"; // This will throw an error

// let first-name = "Grace"; // This will throw an error

// let first@name = "Hannah"; // This will throw an error
      

// 5. An identifier is case-sensitive
let myVariable = "I am a variable";
console.log(myVariable); // I am a variable

let MyVariable = "I am another variable";
console.log(MyVariable); // I am another variable

let myvariable = "I am yet another variable";
console.log(myvariable); // I am yet another variable

let MYVARIABLE = "I am a different variable";
console.log(MYVARIABLE); // I am a different variable

// 6. An identifier cannot be a reserved keyword in JavaScript

// let let = "This will throw an error"; // This will throw an error  

// let const = "This will throw an error"; // This will throw an error    

// let var = "This will throw an error"; // This will throw an error

// let function = "This will throw an error"; // This will throw an error

