const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ticketmgmt',
    insecureAuthent :true
});

db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('database connected');
    }
})
module.exports= db;