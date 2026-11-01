let arr = [20,89,67,45,89];

// every — ALL must pass
console.log(arr.every(i => i>=20)); //true
console.log(arr.every(i => i>70)); //false

// some — AT LEAST ONE must pass
console.log(arr.some(s => s>90));//false
console.log(arr.some(s => s>=40));//true