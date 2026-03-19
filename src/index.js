const PORT = 3000;
const express = require('express');
const db = require('./models/db.js');
const app = express();

app.get("/", (req, res) => {
    res.send("WOW");
});

app.listen(3000, () => console.log(`Listening on port ${PORT}`));