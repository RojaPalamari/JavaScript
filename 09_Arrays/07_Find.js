let nums = [10, 25, 30, 45];
let result = nums.find(temp => temp>20);
console.log(result); // 25

//find Index
let index = nums.findIndex(n => n>20);
console.log(index); //1

let lastNum = nums.findLast(n => n>20);
console.log(lastNum);//45
