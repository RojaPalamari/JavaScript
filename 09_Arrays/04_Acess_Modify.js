let test = ["pass", "fail", "skip"];

console.log(test.length);//3

console.log(test[0]);//pass
console.log(test[2]); //skip

console.log(test.at(-1)); //skip
console.log(test.at(-2)); //fail

//Modify
test[1] = "blocked"
console.log(test); //[ 'pass', 'blocked', 'skip' ]
console.log(test.length); //3