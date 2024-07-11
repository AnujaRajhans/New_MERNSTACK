const express= require('express');
const app = express();
const mongoose = require('mongoose');
const path= require('path');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const api= require('./route/api');
PORT= 6001;
app.use(express.json());
app.use('/api', api);
mongoose.connect("mongodb://0.0.0.0:27017/FinanceTracker");
mongoose.connection.once("open",()=>{
    console.log("Connected to MongoDB");
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});