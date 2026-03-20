const PORT = 3000;
const express = require('express');
const app = express();
const path = __dirname + '/views/';

// Database
const db = require('./models/db.js');

// Routes
const index = require('./routes/index.js')
const sharks = require('./routes/sharks.js')

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path);

// Middleware Functions
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));

app.use('/', index);
app.use('/sharks', sharks);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));