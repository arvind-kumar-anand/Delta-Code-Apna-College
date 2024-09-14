const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const chat = require("./models/chat.js");

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));


let port = 8080;

main().
    then(() => {
        console.log("Connection Successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}


const chat1 = new chat({
    from: "Kitty",
    to: "Arvind",
    msg: "Hey whassapp!",
    created_at: new Date(),
});

chat1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})



app.listen(port, () => {
    console.log(`app is listening to the port ${port}`);
})


app.get("/", (req, res) => {
    console.log("you contacted the root path");
    res.send("you are on the HOME path");
})




