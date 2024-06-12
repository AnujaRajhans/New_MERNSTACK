
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiroute = require('./routes/api');
PORT = 3000;
connectDB = async()=> {
    try{
        await mongoose.connect('mongodb+srv://rajhansanuja3:8VwHSiYhNfvSAUk8@cluster0.c5b4zav.mongodb.net/');
        console.log('connected to db');
    }
    catch(err){
        console.log('Mongodb connection error:',err);
    }
};
connectDB();

app.get('/',(req,res)=>{
    res.send('hello world');
});
app.use(express.json());
app.use('/api', apiroute)
app.listen(PORT);