let score = 70;

if(score < 0 || score > 100){
    console.log("Invalid input score")
}else{
    if(score >= 91){
        console.log("Grade A - Excellent");
    }else if(score >= 81 && score <= 90){
        console.log("Grade B - Very Good");
    }else if(score >= 71 && score <= 80){
        console.log("Grade C - Good");
    }else if(score >= 61 && score <= 70){
        console.log("Grade D - Average");
    }else if(score >= 50 && score <= 60){
        console.log("Grade E - Needs Improvement");
    }else{
        console.log("Grade F - Fail");
    }
}