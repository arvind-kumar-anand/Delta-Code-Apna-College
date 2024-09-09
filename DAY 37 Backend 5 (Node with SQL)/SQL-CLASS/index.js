// let createRandomUser = () => {
//     return {
//         userId: faker.string.uuid(),
//         username: faker.internet.userName(),
//         email: faker.internet.email(),
//         avatar: faker.image.avatar(),
//         password: faker.internet.password(),
//         birthdate: faker.date.birthdate(),
//         registeredAt: faker.date.past(),
//     };
// }
// console.log(createRandomUser());

const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'app',
    password: "mysql@123"
});

let toGetRandomUser = () => {
    return [
        faker.datatype.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ];
}
// console.log(toGetRandomUser());

// let q = "SHOW TABLES";
//INSERTING NEW DATA
// let q = "INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)";
// let q = "INSERT INTO user (id,username,email,password) VALUES (?)";
// let data = [];
// for (let i = 0; i = 100; i++) {
//     // console.log(toGetRandomUser());
//     data.push(toGetRandomUser()); //100 FAKE RANDOM USER by FAKER
// }
// let user1 = ['1', 'john_doe', 'john.doe@example.com', 'password123']
// let user2 = ['2', 'jane_smith', 'jane.smith@example.com', 'password456'];
//BOTH USERS In one array
// let users = [
//     ['1', 'john_doe', 'john.doe@example.com', 'password123']
//     , ['2', 'jane_smith', 'jane.smith@example.com', 'password456']
// ]


// try {
//     // connection.query(q, users, (err, result) => {
//     // connection.query(q, [users], (err, result) => {
//     connection.query(q, [data], (err, result) => { //100 FAKE RANDOM USER by FAKER is passed
//         if (err) throw err;
//         console.log(result);
//         // console.log(result.length);
//         // console.log(result[0]);
//         // console.log(result[1]);
//     });
// } catch (err) {
//     console.log(err);
// }
// connection.end();

//HOME ROUTE
app.get("/home", (req, res) => {
    let q = `select count(*) from user`;
    try {
        // connection.query(q, users, (err, result) => {
        // connection.query(q, [users], (err, result) => {
        connection.query(q, (err, result) => { //100 FAKE RANDOM USER by FAKER is passed
            if (err) throw err;
            let count = result[0]["count(*)"];
            // console.log(result.length);
            // console.log(result[0]);
            // console.log(result[1]);
            // res.send(result);
            // res.send("success");
            res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in database");

    }
    // res.send("welcome to home page");
});

//SHOW ROUTE
app.get("/user", (req, res) => {
    let q = `select * from user`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            // res.send(users);
            res.render("showusers.ejs", { users });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in database");

    }
});

//EDIT ROUTE
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `select * from user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            // res.send(users);
            res.render("edit.ejs", { user });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in database");

    }
});

//UPDATE (DATABASE) ROUTE
app.patch("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let { password: formPass, username: NewUsername } = req.body;
    let q = `select * from user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass != user.password) {
                res.send("Wrong Password");
            } else {
                let q2 = `UPDATE user SET username='${NewUsername}' WHERE id='${id}'`
                connection.query(q, (err, result) => {
                    if (err) throw err;
                    // res.send(result);
                    res.redirect("/user");
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.send("some error in database");

    }
});



app.listen("8080", () => {
    console.log("server is listening to port 8080");
})