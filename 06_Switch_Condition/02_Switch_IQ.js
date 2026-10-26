let day = 5;

switch(day){
    case 1:
        console.log("Sunday");
    case 2:
        console.log("Monday");
    case 3:
        console.log("Tuesday");
    case 4:
        console.log("Wednesday");
    case 5:
        console.log("Thursday");
    case 6:
        console.log("Friday");
    case 7:
        console.log("Saturday");
    default:
        console.log("Invalid day");
}

// if there is no break statement in a switch, the execution continues into the next cases. This is called fall-through.