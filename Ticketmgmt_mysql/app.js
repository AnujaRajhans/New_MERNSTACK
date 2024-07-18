const express = require('express');
const app = express();
const mysql = require('mysql');
const path= require('path');
const api= require('./routes/api');
port = 5000;
app.use(express.json());
app.use('/api',api);

app.listen(port, () => {
    console.log(`server running on port:${port}`);
});

