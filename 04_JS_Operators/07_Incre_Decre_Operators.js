/* 7. Increment and Decrement Operators
    The increment (++) and decrement (--) operators are used to increase or decrease the value of a variable by 1.
    These operators can be used as prefix or postfix operators.
    Prefix: ++variable
    Postfix: variable++
*/
//post Increment Operator (variable++): The postfix increment operator increases the value of a variable by 1, but returns the original value before the increment. It is used after the variable.

let x = 5; // Assigns the value 5 to the variable x
console.log("x before increment: ", x); // Output: x before increment:  5

let p = x++; // Increments the value of x by 1
console.log("a after post-increment: ", p); // Output: a after post-increment:  5
console.log("x after post-increment: ", x); // Output: x after post-increment:  6

//post Decrement Operator (variable--): The postfix decrement operator decreases the value of a variable by 1, but returns the original value before the decrement. It is used after the variable.

let y = 10; // Assigns the value 10 to the variable y
console.log("y before decrement: ", y); // Output: y before decrement:  10

let b = y--; // Decrements the value of y by 1
console.log("b after post-decrement: ", b); // Output: b after post-decrement:  10
console.log("y after post-decrement: ", y); // Output: y after post-decrement:  9


//pre Increment Operator (++variable): The prefix increment operator increases the value of a variable by 1, and returns the new value after the increment. It is used before the variable.

let m = 15; // Assigns the value 15 to the variable m
console.log("m before increment: ", m); // Output: m before increment:  15

let c = ++m; // Increments the value of m by 1
console.log("c after pre-increment: ", c); // Output: c after pre-increment:  16
console.log("m after pre-increment: ", m); // Output: m after pre-increment:  16

//pre Decrement Operator (--variable): The prefix decrement operator decreases the value of a variable by 1, and returns the new value after the decrement. It is used before the variable.

let n = 20; // Assigns the value 20 to the variable n
console.log("n before decrement: ", n); // Output: n before decrement:  20

let d = --n; // Decrements the value of n by 1
console.log("d after pre-decrement: ", d); // Output: d after pre-decrement:  19
console.log("n after pre-decrement: ", n); // Output: n after pre-decrement:  19

//example of using increment and decrement operators
let i = 0;
console.log(++i + i); // ((1) + 1 )= 2
console.log(i) // Output: 1
console.log(i++ + i); // ((1) + 2 )= 3
console.log(i) // Output: 2

let j = 10;
console.log(j++ + j + ++j); // ((10) + 11 +12) = 33
console.log(j); // Output: 12


/* IQ */
1. 
let a = 100;
console.log(a++ + ++a +a++ + ++a); // 100+102+102+104 =408
console.log(a);//104

2.
let l = 37;
console.log(--l + l--);//36 + 36 = 72
console.log(l);//35

3.
let e = 5; 
let f = e-- - --e; //5 - 3 = 2
console.log(f, e);//2, 3

4.
let s = 1; 
let r = s++ > 1 ? s++ : ++s; //1 > 1 ? 2 : 3 
console.log(r, s);// 3, 3




