let value1 = ""; // this type of empty string has TRUE value in JS
let value2 = " "; // this type of empty string has FALSY value in JS
// if (true) {    //TRUTHY
// if (fasle) {    //FALSY
// if (0) {   //FALSY
// if ("") {    //FALSY
// if (" ") {     //TRUTHY
// if ("A") {   //TRUTHY

if (value1) {
    console.log("this has TRUE value")
}
else {
    console.log("this has FASLE value")
}
//MORE
if (value2) {
    console.log("this has TRUE value")
}
else {
    console.log("this has FASLE value")
}
//MORE
if (true) {
    console.log("this has TRUE value")
}
else {
    console.log("this has FASLE value")
}
//MORE
if (false) {
    console.log("this has TRUE value")
}
else {
    console.log("this has FASLE value")
}