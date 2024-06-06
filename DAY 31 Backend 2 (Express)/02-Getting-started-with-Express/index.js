const express = require('express');
const app = express();

// console.dir(app);
let port = 300;

app.listen(port, () => {
    console.log(`app is listening to the port ${port}`);
})