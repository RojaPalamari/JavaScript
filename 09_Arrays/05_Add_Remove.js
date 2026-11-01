let arr = [1, 2, 3];
console.log(arr); //[ 1, 2, 3 ]

//Add to END
arr.push(4);
console.log(arr); //[ 1, 2, 3, 4 ]

arr.push(5, 6);
console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]

//Remove from END
arr.pop()
console.log(arr); //[ 1, 2, 3, 4, 5 ]

//Add to BEGINNING
arr.unshift(0);
console.log(arr); //[ 0, 1, 2, 3, 4, 5 ]

//Remove from BEGINNING
arr.shift()
console.log(arr); //[ 1, 2, 3, 4, 5 

//splice
arr.splice(2,1);
console.log(arr); //[ 1, 2, 4, 5 ]

arr.splice(2,0,99);
console.log(arr); //[ 1, 2, 99, 4, 5 ]

arr.splice(4,1, 100);
console.log(arr); //[ 1, 2, 99, 4, 100 ]

arr.splice(3, 2, 80, 90);
console.log(arr); //[ 1, 2, 99, 80, 90 ]

let changed = arr.splice(0, 2, 60, 70);
console.log(arr); //[ 60, 70, 99, 80, 90 ]
console.log(changed); //[ 1, 2 ]