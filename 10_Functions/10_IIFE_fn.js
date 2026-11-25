//Immediately Invoked Function Expression (IIFE)
(function(name){
    console.log(name);
})("IIFE function");


(function(){
    console.log("Anonymous IIFE function");
})();

(() => {
    console.log("Arrow IIFE function");
})();