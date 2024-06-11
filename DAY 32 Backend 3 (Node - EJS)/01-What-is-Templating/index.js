const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
// app.use(express.static("public"));
//TO RUN THE WEBSITE FROM ANYWHERE FROM THE DIRECTORY
app.use(express.static(path.join(__dirname, "/public")));
//if we make js file and css file also in the public folder then we can also serve multiple file as shown below
// app.use(express.static(path.join(__dirname, "/public/js")));
// app.use(express.static(path.join(__dirname, "/public/css")));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get('/', (req, res) => {
    // res.render("home");
    //OR
    res.render("home.ejs");
    // res.send("This is home");
});

// app.get('/rollDice', (req, res) => {
//     let diceVal = Math.floor(Math.random() * 6 + 1);
//     // res.render("rollDice.ejs", { num: diceVal });
//     res.render("rollDice.ejs", { diceVal });
// });

// app.get("/ig/:username", (req, res) => {
//     let { username } = req.params;
//     // console.log(username);
//     res.render("instagram.ejs", { username });
// });

// app.get("/ig/:username", (req, res) => {
//     const followers = ["arvind", "kityy", "raghu"];
//     let { username } = req.params;
//     // console.log(username);
//     res.render("instagram.ejs", { username, followers });
// });

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    // console.log(data);
    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.render("error.ejs");
    }
});

// app.get('/hello', (req, res) => {
//     res.send("This is hello");
// });

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})