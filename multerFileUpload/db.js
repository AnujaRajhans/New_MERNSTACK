const mongoose= require('mongoose');
const mongourl= 'mongodb+srv://rajhansanuja3:8VwHSiYhNfvSAUk8@cluster0.c5b4zav.mongodb.net/taskmgmt';
mongoose.connect(mongourl);
const db= mongoose.connection;
db.on("error",(err)=>{
    console.log(err);
});
db.once("open",()=>{
    console.log("mongoDb connected");
})
module.exports= db;
