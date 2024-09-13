const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

////WE CAN USE THIS ALTERNATIVELY
main().
    then(() => {
        console.log("Connection Successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test'); //test IS DATABASE NAME

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model('User', userSchema);
// const Employee = mongoose.model('Employee', userSchema);


// LECTURE NO - 04.Models
// const user1 = new User({
//     name: "arvind",
//     email: "arvind@gmail.com",
//     age: 23
// });

// const user2 = new User({
//     name: "kitty",
//     email: "kitty@gmail.com",
//     age: 25
// });


// user2.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })



// LECTURE NO 05. Insert in Mongoose
// const user1 = new User({
//     name: "arvind",
//     email: "arvind@gmail.com",
//     age: 23
// });

// const user2 = new User({
//     name: "kitty",
//     email: "kitty@gmail.com",
//     age: 23
// });

// user1.save();



// LECTURE NO 06. Insert Multiple
// User.insertMany([
//     { name: 'arvind', age: 23,  email: "kitty@gmail.com" },
//     { name: 'kitty', age: 23,  email: "kitty@gmail.com" },
//     { name: 'raghu', age: 29,  email: "kitty@gmail.com" },
//     { name: 'pk singh', age: 25,  email: "kitty@gmail.com" },
// ]).then((res) => {
//     console.log(res);
// })



// LECTURE NO 07. Find in Mongoose
// User.find({ age: { $gte: 25 } })
//     .then((res) => {
//         // console.log(res);
//         // console.log(res[0]);
//         console.log(res[0].name);
//     }).catch((err) => {
//         console.log(err);
//     })

// User.findOne({ age: { $gte: 25 } })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })

// User.findById("66e43d8795a05b8d6c2f58cf")
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })



// LECTURE NO 08. Update in Mongoose
// User.updateOne({ name: "raghu" }, { email: "raghu@gmail.com" })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });
// User.updateOne({ name: "pk singh" }, { email: "pksingh@gmail.com" })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });
// User.updateOne({ name: "arvind" }, { email: "arvind@gmail.com" })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// User.updateMany({ age: { $gte: 29 } }, { email: "raghusingh@gmail.com" })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });



// LECTURE NO 09. FindAndUpdate
// User.findOneAndUpdate({ name: "raghu" }, { email: "raghu@gmail.com" }), { new: true }
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });



// LECTURE NO 10. Delete in Mongoose
// User.deleteOne({ name: "pk singh" })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// User.findByIdAndDelete("66e4468da60a9bf6533bb49f")
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });