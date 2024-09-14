const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

////WE CAN USE THIS ALTERNATIVELY
main().
    then(() => {
        console.log("Connection Successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon'); //amazon IS DATABASE NAME

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: 1
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    },
    genre: [String],
});

const book = new mongoose.model('book', bookSchema);

const book1 = new book({
    title: "Math",
    author: "RD Sharma",
    price: 200
});
// book1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// _message: 'book validation failed'
const book2 = new book({
    title: "Math", // Without this (_message: 'book validation failed')
    author: "RD Sharma",
    price: 200,
    // price: "abcd" // _message: 'book validation failed'
    // price: "200" //CORRECT

});
// book2.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

book.findByIdAndUpdate("66e5d0d89342b4470bb3db15", { price: -500 }, { runValidators: true })
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })