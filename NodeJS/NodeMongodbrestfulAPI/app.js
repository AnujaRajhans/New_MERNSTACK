const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./route/route.js');
PORT = 6000;


mongoose.connect('mongodb://localhost/Practiceab22',{
});

const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error:'));

database.once('open', function() {
    console.log('Connected to database');
});

app.listen(PORT,function(req,res) {
    console.log("Server is running on port 6000");
});

app.use(express.json());
app.use('/api',router);