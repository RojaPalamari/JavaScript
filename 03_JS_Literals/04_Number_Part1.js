// ============================================================
// Topic: All Number Types in JavaScript
// ============================================================
/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
*/

// --------------------------------------------------------
// 1. INTEGER LITERALS
// --------------------------------------------------------
// Integer literals are whole numbers without a decimal point. They can be positive or negative.
let count = 42; // integer
let negativeCount = -42; // negative integer
let zero = 0; // zero       

//demonstrating different bases for integer literals
//decimal (base 10)
let decimal = 42; // decimal (base 10)
console.log("Decimal:", decimal); // 42

// hexadecimal (base 16)
let hexadecimal = 0x2A; // hexadecimal (42 in decimal)
console.log("Hexadecimal:", hexadecimal); // 42

// binary (base 2)
let binary = 0b101010; // binary (42 in decimal)
console.log("Binary:", binary); // 42

// octal (base 8)
let octal = 0o52; // octal (42 in decimal)
console.log("Octal:", octal); // 42

// --------------------------------------------------------
// 2. FLOATING-POINT LITERALS
// --------------------------------------------------------
// Floating-point literals are numbers with a decimal point or in scientific notation.

let floatingPoint = 3.14; // floating-point number
console.log("Floating Point:", floatingPoint); // 3.14
let negativeFloatingPoint = -3.14; // negative floating-point number
console.log("Negative Floating Point:", negativeFloatingPoint); // -3.14

let float2 = .5; // floating-point number without leading digit
console.log("Floating Point without leading digit:", float2); // 0.5
let float3 = 5.; // floating-point number without trailing digit
console.log("Floating Point without trailing digit:", float3); // 5

// Exponential notation (scientific notation)
let million = 1e6; // 1 * 10^6 = 1,000,000
console.log("Scientific Notation (1e6):", million); 
let tiny = 1e-6; // 1 * 10^-6 = 0.000001
console.log("Scientific Notation (1e-6):", tiny);
let large = 2.5e3; // 2.5 * 10^3 = 2500
console.log("Scientific Notation (2.5e3):", large); 
let small = 3.1e-4; // 3.1 * 10^-4 = 0.00031
console.log("Scientific Notation (3.1e-4):", small);

