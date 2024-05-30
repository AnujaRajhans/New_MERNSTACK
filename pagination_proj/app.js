const express = require('express');
const app = express();
const mysql= require('mysql');
const path= require('path');
const bodyparser= require('body-parser');
PORT = 7000;
app.use(bodyparser.urlencoded({extended: true}));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})
const createConnection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '123',
        database: 'demo'
    }
)
