console.log((3 < 1) && (1 < 5)); //FALSE
console.log(3 > 1 || 1 < 5); //TRUE
//ISKO AISE V LIKH SAKTE HAI
console.log((3 > 1) || (1 < 5)); //TRUE
console.log(!true);
console.log(!false);
console.log(1 > 3 || 3 < 5);
let age = 1000;
// let age = 10;

if (age >= 18 && age <= 120) { //ASSUMING PEOPLE WILL ALIVE MAXIMUM 120 YEARS
    console.log("you can vote");
}
else if (age < 18 && age > 0) {
    console.log("you can not vote");
}
else if (age < 0) {
    console.log("you are not born yet");
}
else {
    console.log("age is invalid!");
}


let marks = 80;

if (marks >= 33 && marks >= 90 && marks <= 100)
    console.log("Pass: Grade - O");
else if (marks >= 33 && marks >= 80 && marks <= 100) {
    console.log("Pass: Grade is - A+");
}
else if (marks >= 33 && marks >= 70 && marks <= 100) {
    console.log("Pass: Grade is - A");
}
else if (marks >= 33 && marks >= 60 && marks <= 100) {
    console.log("Pass: Grade is - B+");
}
else if (marks >= 33 && marks >= 50 && marks <= 100) {
    console.log("Pass: Grade is - B");
}
else if (marks < 33) {
    console.log("better luck next time");
}
else {
    console.log("Marks Invalid!");
}