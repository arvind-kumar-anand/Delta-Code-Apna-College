const express = require("express");
const app = express();
const port = 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    // console.log("standard GET response");
    let { user, password } = req.query;
    res.send(`standa rd GET response. Welcome ${user}`);
})

app.post("/register", (req, res) => {
    // console.log("standard GET response");
    console.log(req.body);
    res.send(`standard POST response.`);
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});