let tests = ["login", "checkout", "search"];

console.log("-------------For-----------------");
for(let i=0; i<tests.length; i++){
    console.log(i,tests[i]);
}

console.log("------------for of--------------");
for(let test of tests){
    console.log(test);
}
// entries() — index + value
for(let[i, test] of tests.entries()){
    console.log(i, test);
}

console.log("------------for each-------------");
tests.forEach((test, index) => {
    console.log(`${index}:${test}`)
});

console.log("------------for in ---------------");
for(let test in tests){
    console.log(test," -> ", tests[test]);
}
