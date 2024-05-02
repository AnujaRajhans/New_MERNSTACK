const express= require('express');
const bodyparser= require('body-parser');
const app = express();
PORT= 4000;
path=require('path');
var urlencodedparser= bodyparser.urlencoded({extended:false});
app.use(urlencodedparser);
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
})
// app.get('/registration', function(req, res){
//     response={
//         firstname:req.query.Fname,
//         lastname:req.query.Lname,
//         dateofbirth:req.query.Dob,
//         address:req.query.Address,
//         email:req.query.Email
//     }
//     console.log(response)
//     res.end(JSON.stringify(response));
// })
    app.post('/registration', function(req, res){
        response={
            firstname:req.body.Fname,
            lastname:req.body.Lname,
            dateofbirth:req.body.Dob,
            address:req.body.Address,
            email:req.body.Email
        }
        console.log(response)
        res.end(JSON.stringify(response));
    })