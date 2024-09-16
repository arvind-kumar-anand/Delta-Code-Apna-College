const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const chat = require("./models/chat.js");
const methodOverride = require("method-override");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))


let port = 8080;

main().
    then(() => {
        console.log("Connection Successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

// const chat1 = new chat({
//     from: "Kitty",
//     to: "Arvind",
//     msg: "Hey whassapp!",
//     created_at: new Date(),
// });

// chat1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })


app.listen(port, () => {
    console.log(`app is listening to the port ${port}`);
})

app.get("/", (req, res) => {
    console.log("you contacted the root path");
    res.send("you are on the HOME page");
})

//INDEX ROUTE
app.get("/chats", async (req, res) => {
    let chats = await chat.find();
    console.log(chats);
    res.render("index.ejs", { chats });
})

//NEW ROUTE
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

//CREATE ROUTE
app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    newChat
        .save()
        .then((res) => {
            console.log("chat was saved");
        }).catch((err) => {
            console.log(err);
        })
    res.redirect("/chats")
})

// EDIT ROUTE
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chatMessage = await chat.findById(id); // Renamed from `chat` to `chatMessage`
    res.render("edit.ejs", { chat: chatMessage });
});

// UPDATE ROUTE
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newmsg } = req.body;
    let updatedmsg = await chat.findByIdAndUpdate(
        id,
        { msg: newmsg },
        { runValidators: true }
    );
    console.log(updatedmsg);
    res.redirect("/chats")
});

//DESTROY ROUTE
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat = await chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});
