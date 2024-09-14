const mongoose = require('mongoose');
const chat = require("./models/chat.js");

main().
    then(() => {
        console.log("Connection Successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

const chatData = [
    { from: 'arvind', to: 'kitty', msg: 'Hey Kitty!', created_at: new Date() },
    { from: 'kitty', to: 'arvind', msg: 'Hello Arvind!', created_at: new Date() },
    { from: 'raghu', to: 'pk singh', msg: 'Hi PK!', created_at: new Date() },
    { from: 'pk singh', to: 'raghu', msg: 'Hey Raghu!', created_at: new Date() }
];

chat.insertMany(chatData)
    .then((res) => {
        console.log(res);
    })