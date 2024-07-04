const express= require('express');
const multer= require('multer');
const File= require('./fileModel');
port = 3001;
const db= require('./db');
const app = express();
app.use(express.json());


const storage= multer.diskStorage({
    destination : './uploads',
    filename: (req,file,cb)=>{
        cb(null,`${file.originalname}`);
    },
});
const upload = multer({storage});
app.post('/uploads', upload.single('file'),async(req,res)=>{
    const {filename, path, originalname,mimetype,size}= req.file;
    const newFile= newFile({filename, path, originalname,mimetype,size});
    try{
        await newFile.save();
        res.status(201).send(`file uplaod successfully: ${req.file.filename}`);
    }
    catch(err){
        res.status(500).send(err);
    }
});
    app.get('/download/:filename', async (req, res)=>{
        console.log(req.params);
        try{
        const file = await File.findOne({filename: req.params.filename});
            if(!file){
                return res.status(404).send('File not found');
            }
            res.download(file.path, file.orignalname)
        }
        catch(err){
            res.status(500).send(err);
        }
    });

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

