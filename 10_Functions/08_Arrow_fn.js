function greet(name){
    return `Hello, ${name}`;
}

const greetArrow = (name) => `Hello, ${name}`;

console.log(greet("common function"));
console.log(greetArrow("arrow function"));

//Arraow multiple lines
const getResult = (score) => {
    if(score >70) 
    return "pass";
    return "fail";
}

console.log(getResult(90));// pass
console.log(getResult(40)); //fail


const double = (num) => num*2;

console.log(double(10)); // 20