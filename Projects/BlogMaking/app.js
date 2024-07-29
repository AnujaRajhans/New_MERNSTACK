const express= require('express');
const mongoose= require('mongoose');
const bodyparser= require('body-parser');
PORT= 5002;
const app= express();
app.use(bodyparser.json());
app.use(express.json());
const api= require('./routes/api');
app.use('/api', api);
mongoose.connect("mongodb://0.0.0.0:27017/blog");
mongoose.connection.once("open",()=>{
    console.log("Connected to MongoDB");
})
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});