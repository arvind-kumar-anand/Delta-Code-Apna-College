// // ANSWER:1
// let number = 20;
// if (number % 10 == 0) {
//     console.log("Good");
// }
// else {
//     console.log("Bad");
// }

// // ANSWER:2
// let typeName = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// alert(`${typeName} is ${age} years old`);

// ANSWER:3
// let quarter = "quarter3"
// switch (quarter) {
//     case "quarter1":
//         console.log("January,February and March");
//         break;
//     case "quarter2":
//         console.log("April,May and June");
//         break;
//     case "quarter3":
//         console.log("July,August and September");
//         break;
//     case "quarter2":
//         console.log("October,November and December");
//         break;
// }

// ANSWER:4
let stringIs = "Arvind"
if ((stringIs[0] == "A" || stringIs[0] == "a") && (stringIs.length > 5)) {
    console.log("Golden String");
}
else {
    console.log("No Golden String");
}

// ANSWER:5
let a = 6;
let b = 5;
let c = 3;
if (a > b && a > c) {
    console.log("a is Largest amonth three");
    // if (a > c) {
    //     console.log("a is Largest among three");
    // }
} else if (b > a && b > c) {
    console.log("b is Largest among three");
    // if (b > c) {
    //     console.log("b is Largest among three");
    // }
}
else {
    console.log("c is Largest among three");
}

// ANSWER:6
let firstNumber = "32";
let secondNumber = "47852";
if (firstNumber[firstNumber.length - 1] == secondNumber[secondNumber.length - 1]) {
    console.log("Yes, both have same last digits");
} else {
    console.log("No, both have not same last digits");
}