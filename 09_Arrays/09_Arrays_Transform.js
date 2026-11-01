let scores = [30, 67, 54, 89, 70, 50 ,40];

//map 
let grades = scores.map(i => i > 40 ? "pass" : "fail");
console.log(grades);

//filter
let passing = scores.filter(s => s>=60);
console.log(passing);