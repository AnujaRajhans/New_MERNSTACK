const mysql= require('mysql2');
const connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'file_upload_multer'
});
connection.connect((err) => {
    if(err){
        console.error('Error connecting to the database: ', err);
    }
    else{
        console.log('Connected to the MySQL database.');
    }
});
module.exports = connection;