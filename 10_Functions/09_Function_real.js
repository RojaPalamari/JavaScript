function validateStatusCode(status){
    if(status >= 200 && status < 300){
        return "Success";
    }
    return "Failure";
}

const validateStatusCode_Exp = function(status){
    if(status >=200 && status < 300){
        return "Success";
    }
    return "Failure";
}

const validateStatusCode_Arrow = (status) => {
    if(status >=200 && status <300){
        return "Success";
    }
    return "Failure";
}

console.log(validateStatusCode(300));
console.log(validateStatusCode_Exp(200));
console.log(validateStatusCode_Arrow(404));