// --------------------------------------------------------
// 5. SPECIAL NUMERIC VALUES
// --------------------------------------------------------

// JavaScript has special numeric values that represent infinity, negative infinity, and "Not-a-Number" (NaN).
// Infinity represents a value that is greater than any finite number.
let positiveInfinity = Infinity;
console.log("Positive Infinity:", positiveInfinity); // Infinity
console.log("Type of Positive Infinity:", typeof positiveInfinity); // "number"

console.log("1/0:", 1/0); // Infinity
console.log("-1/0:", -1/0); // -Infinity

// Negative Infinity represents a value that is less than any finite number.
let negativeInfinity = -Infinity;
console.log("Negative Infinity:", negativeInfinity); // -Infinity

// NaN (Not-a-Number) represents a value that is not a legal number.
let notANumber = NaN;
console.log("NaN:", notANumber); // NaN 
console.log("Type of NaN:", typeof notANumber); // "number"

console.log("0/0:", 0/0); // NaN
console.log("Math.sqrt(-1):", Math.sqrt(-1)); // NaN
console.log("'Hello' * 10:", 'Hello' * 10); // NaN


