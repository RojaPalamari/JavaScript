let arr = [20, 67, 89, 45, 12, 34, 56, 78, 90, 11];
//find the largest number in the array
let largest = arr[0]; // Assume the first element is the largest
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i]; // Update largest if current element is greater
    }
}
console.log("The largest number in the array is:", largest);

//using Math.max() with spread operator
let largestUsingMathMax = Math.max(...arr);
console.log("The largest number in the array using Math.max is:", largestUsingMathMax);