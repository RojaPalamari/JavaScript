//Function as expression

function greet(name){
    return `Hello, ${name}`;
}

const greetExpression = function(name){
    return `Hello, ${name}`;
}

let result = greet("common function");
console.log(result);

let result1 = greetExpression("function expression");
console.log(result1);