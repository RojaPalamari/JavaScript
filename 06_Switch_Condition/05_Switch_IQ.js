let score = 50;

switch(true){
    case (score >= 90):
        console.log("Outstanding - Top performer");
        break;
    case (score >= 80):
        console.log("Excellent - Above Expectation");
        break;
    case (score >= 70):
        console.log("Good - Meets Expectation");
        break;
    case (score >= 60):
        console.log("Needs Improvement");
        break;
    case (score >= 50):
        console.log("Average");
        break;
    default:
        console.log("Unsatisfactory need training")
}