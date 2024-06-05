function one() {
    return 1;
}
function two() {
    return one() + one();
}
function three() {
    console.log(two() + one());
}
three(); 