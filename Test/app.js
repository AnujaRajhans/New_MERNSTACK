const express= require('express');
const mongoose= require('mongoose');
const bodyparser= require('body-parser');
const api= require('./routes/api');
PORT= 5000;

const app= express();

app.use(bodyparser.json());
app.use(express.json());
app.use('/api', api);

mongoose.connect("mongodb://0.0.0.0:27017/event");

mongoose.connection.once("open",()=>{
    console.log("Connected to MongoDB");
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});