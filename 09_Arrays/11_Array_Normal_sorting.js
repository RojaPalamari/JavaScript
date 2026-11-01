let nums = [10,2,22,1,4];
nums.sort((a,b) => a-b);
console.log(nums); //[ 1, 2, 4, 10, 22 ]

nums.sort((a,b) => b-a);
console.log(nums); //[ 22, 10, 4, 2, 1 ]

let fruits = ["banana", "cherry", "apple"];
fruits.sort((a,b) => a.localeCompare(b));
console.log(fruits);