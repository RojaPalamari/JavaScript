let arr = [1, 6, 1, 3, 6, 3, 2, 2, 6, 2];
//find the frequency of each element in the array

let frequency = {};
for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    frequency[element] = (frequency[element] || 0) + 1;
}
console.log("Frequency of each element:", frequency);   