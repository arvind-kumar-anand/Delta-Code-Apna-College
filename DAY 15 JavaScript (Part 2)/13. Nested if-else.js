let marks = 70;

if (marks >= 33) {
    console.log("pass");
    if (marks >= 90) {
        console.log("Grade is: O");
    }
    else if (marks >= 80) {
        console.log("Grade is: A+");
    }
    else if (marks >= 70) {
        console.log("Grade is: A");
    }
    else if (marks >= 60) {
        console.log("Grade is: B+");
    }
    else if (marks >= 50) {
        console.log("Grade is: B");
    }
}
else if (marks < 33) {
    console.log("better luck next time");
}
