let original = [1,2,3];
let copy1 = [...original];
copy1.push(98);
console.log(copy1); //[ 1, 2, 3, 98 ]
console.log(original); //[ 1, 2, 3 ]


let copy2 = original.slice();
copy2.push(99);
console.log(copy2); //[ 1, 2, 3, 99 ]
console.log(original); //[ 1, 2, 3 ]

// Deep copy
let deep_copy_array = original;
deep_copy_array.push(91);
console.log(deep_copy_array); //[ 1, 2, 3, 91 ]
console.log(original); //[ 1, 2, 3, 91 ]
