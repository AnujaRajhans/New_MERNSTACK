const userModel= require('../model/userModel');
const jwt= require('jsonwebtoken');
async function registerUser(req,res){
    try{
        const user = new userModel(req.body);
        await user.save();
        res.status(201).send(user);
    }
    catch(error){
        console.log(error);
        res.status(500).send("not registered");
    }
}
async function loginUser(req,res){
    try{
        const {email,password}= req.body;
        const user = await userModel.findOne({email});
        if(!user ||!(await user.comparePassword(password))){
            return res.status(401).send("Invalid email or password");
        }
        const token = jwt.sign({_id:user._id}, "anuja", {expiresIn: '1h'});
        res.status(200).send({token,user});
    }
    catch(error){
        res.status(400).send({message: error.message});
        console.log(error);
    }
}
module.exports = {
    registerUser,
    loginUser
}