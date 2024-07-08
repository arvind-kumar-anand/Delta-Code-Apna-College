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

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'app',
    password: "mysql@123"
});

// let q = "SHOW TABLES";
let q = "INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)";
let users = [
    ['1', 'john_doe', 'john.doe@example.com', 'password123']
    , ['2', 'jane_smith', 'jane.smith@example.com', 'password456']
]
try {
    connection.query(q, users, (err, results) => {
        if (err) throw err;
        console.log(results);
        // console.log(results.length);
        // console.log(results[0]);
        // console.log(results[1]);
    });
} catch (err) {
    console.log(err);
}
connection.end();

let toGetRandomUser = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
}
// console.log(toGetRandomUser());