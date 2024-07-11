const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');
async function registeruser(req, res) {
   try{
    const user = new userModel(req.body);
    console.log(user);
    await user.save();
    res.status(201).send({message:"User added successfully",user});
   }
   catch(err){
    return res.status(400).send(err);
   }
}
async function loginuser(req, res) {
    try{
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        if(!user || !(await user.comparePassword(password))){
            return res.status(400).send({message: "user not found"});
        }
        const token= jwt.sign({_id:user._id},"secretkey",{expiresIn: '1h'});
        res.status(200).send({user,token});
    }
    catch(err){
        res.status(400).send(err);
        console.log(err);
    }
}

module.exports = {
    registeruser,
    loginuser
}