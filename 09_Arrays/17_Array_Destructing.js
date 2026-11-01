let [first, second, third] = [1, 2, 3];
console.log(first); //1
console.log(second); //2 
console.log(third); //3

let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); //10
console.log(b); //20
console.log(rest); //[30, 40, 50]

let [ , , thirdonly] = [20, 67, 56];
console.log(thirdonly); //56 
