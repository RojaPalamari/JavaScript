const prompt = require("prompt-sync")();

let name = prompt("Enter you name: ");
let age = Number(prompt("Enter your Age: "));
let salary = Number(prompt("Enter your salary: "));

console.log("Name: ",name);
console.log("Age: ",age);
console.log("Salary: ",salary);

