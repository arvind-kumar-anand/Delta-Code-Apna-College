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

const User = mongoose.model('User', userSchema);



