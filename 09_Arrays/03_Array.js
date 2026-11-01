let score = new Array(3); //creates array with 3 index
score[0] = 10;
console.log(score);

let number = new Array(10, 20, 30, 40);
console.log(number.length);
console.log(number);//[ 10, 20, 30, 40 ]

let test = Array.of(100, 200, 300, 400, 500);
console.log(test.length);
console.log(test);//[ 100, 200, 300, 400, 500 ]

let chars = Array.from("hello");
console.log(chars); //[ 'h', 'e', 'l', 'l', 'o' ]
console.log(chars.length);