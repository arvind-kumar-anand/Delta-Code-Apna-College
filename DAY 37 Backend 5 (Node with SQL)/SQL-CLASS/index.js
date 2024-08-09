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

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'app',
    password: "mysql@123"
});

let toGetRandomUser = () => {
    return [
        faker.string.uuid(),
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


app.get("/home", (req, res) => {
    let q = 'select count(*) from user';
    try {
        // connection.query(q, users, (err, result) => {
        // connection.query(q, [users], (err, result) => {
        connection.query(q, (err, result) => { //100 FAKE RANDOM USER by FAKER is passed
            if (err) throw err;
            console.log(result);
            // console.log(result.length);
            // console.log(result[0]);
            // console.log(result[1]);
            res.send(result);
        });
    } catch (err) {
        console.log(err);
        res.send("some error in database");
    }
    // res.send("welcome to home page");
});

app.listen("8080", () => {
    console.log("server is listening to port 8080");
})