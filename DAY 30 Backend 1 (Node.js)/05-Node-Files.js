// let n = 5;
// for (let i = 0; i < n; i++) {
//     console.log("number is :" + i);
// }

// console.log("Arvind");
console.log(process.argv);

let args = process.argv;
// for (let i = 2; i < args.length; i++) {
//     console.log("Hello : " + args[i]);
// }

for (let i = 0; i < args.length; i++) {
    console.log("Hello : " + args[i]);
}