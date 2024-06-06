const express = require('express');
const app = express();

// console.dir(app);
let port = 3000;

app.listen(port, () => {
    console.log(`app is listening to the port ${port}`);
})

// app.use((req, res) => {
//     // console.log("request received");
//     // console.dir(req);
//     // res.send("This is the basic response send");
//     // res.send({
//     //     name: "apple",
//     //     color: "red"
//     // });
//     let HTMLcode = "<h1>Hello Sir</h1>";
//     res.send(HTMLcode);
// })




// app.get("/", (req, res) => {
//     console.log("you contacted the root path");
//     res.send("you contacted the HOME path");
// })

// app.get("/apple", (req, res) => {
//     console.log("you contacted the apple path");
//     res.send("you contacted the apple path");
// })

// app.get("/orange", (req, res) => {
//     console.log("you contacted the orange path");
//     res.send("you contacted the orange path");
// })

// app.get("*", (req, res) => {
//     res.send("this path is not exist");
// })

// app.post("/", (req, res) => {
//     res.send("you sent a post request");
// })




// app.get("/", (req, res) => {
//     console.log("you contacted the root path");
//     res.send("hello i am root");
// })

// app.get("/apple", (req, res) => {
//     console.log("you contacted the apple path");
//     res.send("hello i am apple path");
// })

// app.get("/orange", (req, res) => {
//     console.log("you contacted the orange path");
//     res.send("hello i am orange path");
// })

// app.get("*", (req, res) => {
//     res.send("this path is not exist");
// })




// app.get("/", (req, res) => {
//     console.log("you contacted the root path");
//     res.send("hello i am root");
// })
// app.get("/:username", (req, res) => {
//     // console.log(req.params);
//     let { username } = req.params;
//     //CURLY BRACKET BECAUSE THIS IS AN OBJECT
//     res.send(`welcome to the page of @${username}`);
// })



app.get("/", (req, res) => {
    console.log("you contacted the root path");
    res.send("hello i am root");
})
app.get("/search", (req, res) => {
    // console.log(req.query);
    let { q } = req.query;
    res.send(`query result for the search is: ${q}`);
})
app.get("/:username", (req, res) => {
    // console.log(req.params);
    let { username } = req.params;
    //CURLY BRACKET BECAUSE THIS IS AN OBJECT
    res.send(`welcome to the page of @${username}`);
})
