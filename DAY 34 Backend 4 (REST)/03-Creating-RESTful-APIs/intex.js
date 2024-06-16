const express = require('express');
const app = express();
let port = 8080;
const path = require("path");
//TO GIVE A UNIQUE NEW ID TO THE POST 
const { v4: uuidv4 } = require('uuid');

//METHOD OVERRIDE PACKAGE REQUIRING AND USING IT
var methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

let posts = [
    {
        // id: "1a",
        id: uuidv4(),
        username: "arvindkumaranand",
        content: "I am a Coder!"
    },
    {
        // id: "2b",
        id: uuidv4(),
        username: "kitty",
        content: "I am a businessWomen!"
    },
    {
        // id: "3c",
        id: uuidv4(),
        username: "raghu",
        content: "I am a salesMan!"
    },
]
app.get("/posts", (req, res) => {
    // console.log("you contacted the root path");
    // res.send("Server is in ongoing mode");
    res.render("index.ejs", { posts });
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})
//CREATING A NEW POST
app.post("/posts", (req, res) => {
    // console.log(req.body);
    let { username, content } = req.body; // CREATING NEW OBJECT
    //CREATING NEW ID
    const newID = uuidv4();
    posts.push({ id: newID, username, content }); //PUSHING NEW OBJECT
    // res.send("post request working");
    res.redirect("/posts");
})

//POST WITH GIVEN ID
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    // console.log(id);
    // res.send("request is sending");
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    res.render("show.ejs", { post });
})

//PATCH REQUEST
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    // console.log(newContent);
    // res.send("patch request is working");
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    // console.log(post);
    res.redirect("/posts");
})

//GET REQUEST NOT FOR EDIT THE POST (OPTIONAL)
app.get("/posts/:id/edit", (req, res) => {
    const { id } = req.params;
    const post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

//DELETE ROUTE TO DELETE THE POST
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`app is listening to the port ${port}`);
})