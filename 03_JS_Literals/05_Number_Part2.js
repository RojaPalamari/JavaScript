// --------------------------------------------------------
// 3. NUMERIC SEPARATORS (ES2021+)
// --------------------------------------------------------
// Numeric separators allow you to use underscores (_) to make large numbers more readable.
let largeNumber = 1_000_000;    
let creditCardNumber = 1234_5678_9012_3456;
let binaryNumber = 0b1010_1010;
let hexNumber = 0xDEAD_BEEF;

// --------------------------------------------------------
// 4. BIGINT - For arbitrarily large integers
// --------------------------------------------------------

let bigInt = 1234567890123456789012345678901234567890n; // BigInt literal
console.log("BigInt:", bigInt); // 1234567890123456789012345678901234567890n
console.log("Type of BigInt:", typeof bigInt); // "bigint"

let anotherBigInt = BigInt("1234567890123456789012345678901234567890"); // BigInt from string
console.log("Another BigInt:", anotherBigInt); // 1234567890123456789012345678901234567890n

let bigFromNumber = BigInt(123); // BigInt from number
console.log("BigInt from Number:", bigFromNumber); // 123n
