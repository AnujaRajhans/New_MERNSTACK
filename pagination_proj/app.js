const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser'); // Corrected the module name to 'body-parser'
const PORT = 5011;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve your static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'demo'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('database connected');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


