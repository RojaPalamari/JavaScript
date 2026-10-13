/* 8. Nullish Coalescing Operator (??)
    The nullish coalescing operator (??) is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined.
    It is different from the logical OR operator (||), which returns the right-hand side operand when the left-hand side operand is falsy.
 */
let a = null;
let b = undefined;
let c = 0;
let d = "";
let e = false;

console.log(a ?? "default"); // Output: default
console.log(b ?? "default"); // Output: default
console.log(c ?? "default"); // Output: 0
console.log(d ?? "default"); // Output: ""
console.log(e ?? "default"); // Output: false

let userName = null;
let result = userName ?? "Guest";
console.log(result);

console.log(a || "default"); // Output: default
console.log(b || "default"); // Output: default
console.log(c || "default"); // Output: default
console.log(d || "default"); // Output: default
console.log(e || "default"); // Output: default


