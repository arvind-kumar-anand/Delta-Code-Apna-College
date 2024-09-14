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
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
});

const book = new mongoose.model('book', bookSchema);

const book1 = new book({
    title: "Math",
    author: "RD Sharma",
    price: 200
});
book1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

// _message: 'book validation failed'
const book2 = new book({
    author: "RD Sharma",
    price: 200
});
book2.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

const book3 = new book({
    title: "Math",
    author: "RD Sharma",
    price: "abcd"
});
book3.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

