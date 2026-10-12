// ============================================================
// Topic: null vs undefined in JavaScript
// ============================================================

//1. undefined
// undefined is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.
let x;
console.log(x); // undefined
console.log(typeof x); // undefined

function greet(){
    //no return statement, so the function returns undefined
}
console.log(greet()); // undefined

//2. null
// null is a primitive value that represents the intentional absence of any object value.
let y = null;
console.log(y); // null
console.log(typeof y); // object

//difference between null and undefined
// 1. undefined is a type itself (undefined), while null is an object.
// 2. undefined means a variable has been declared but has not yet been assigned a value, while null is an assignment value that represents no value or no object.
// 3. undefined is the default value for uninitialized variables, while null must be explicitly assigned to a variable.