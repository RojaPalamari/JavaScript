console.log("Enter the number!");
const data = require('fs').readFileSync(0, 'utf8');
console.log("Hi", data);


/* 
In the terminal:
Type 15
Press Enter
Press Ctrl+D */

/* How it works
1. console.log() displays the message.
2. require('fs') imports Node.js's built-in File System module.
3. readFileSync(0, 'utf8') reads standard input (keyboard input) until the input stream ends.
4. console.log("Hi", data) prints the captured input.

What does 0 mean?
0 is the file descriptor for standard input (stdin). It allows readFileSync() to read data entered in the terminal. */