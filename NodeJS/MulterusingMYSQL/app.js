const express= require('express');
const multer= require('multer');
const db= require('./db');

const app= express();
PORT= 7001;

const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({storage});
    app.post('/uploads',upload.single('file'),(req,res)=>{
        console.log(req.file);
        const {filename,path,originalname,mimetype,size} = req.file;
        const query = 'INSERT INTO file_upload(filename,path,originalname,mimetype,size) VALUES (?,?,?,?,?)';
        db.query(query,[filename,path,originalname,mimetype,size],(err,result)=>{
            if(err){
               return res.status(500).send(err);
            }
            res.status(201).send(`file uploaded: ${filename}`);
        })
    })
app.get('/download/:filename',(req,res)=>{
    const sql = "SELECT *from file_upload WHERE filename=? "
    db.query(sql,[req.params.filename],(err,result)=>{
        if(err){
            return res.status(500).send(err);
        }
        if(result.length===0){
            return res.status(404).send('file not found');
        }
        const file= result[0];
        res.download(file.path,file.originalname);
    });
})

 app.post('/uploadmultiple', upload.array('files', 10), (req, res) => { // 'files' is the field name for multiple files, and 10 is the max count
        if (!req.files || req.files.length === 0) {
          return res.status(400).send('No files uploaded.');
        }
      
        const files = req.files;
        let query = 'INSERT INTO file_upload (filename, path, originalname, mimetype, size) VALUES ';
        const queryValues = [];
      
        files.forEach((file, index) => {
          const { filename, path, originalname, mimetype, size } = file;
          query += '(?, ?, ?, ?, ?)';
          if (index < files.length - 1) {
            query += ', ';
          }
          queryValues.push(filename, path, originalname, mimetype, size);
        });
      
        db.query(query, queryValues, (err, result) => {
          if (err) {
            console.error('Database query error:', err);
            return res.status(500).send('Failed to upload file information.');
          }
          res.status(201).send('files uploaded successfully');
        });
      });
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});