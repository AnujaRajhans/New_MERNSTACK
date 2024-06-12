const mongoose = require('mongoose');
const doctorModel = require('../models/doctorModel');
async function addDoctor(req,res){
    try{
        const newDoctor = new doctorModel(req.body);
        const result = await newDoctor.save();
        res.status(200).json(result);
    }
    catch(err){
        res.status(500).json(err);
    }
}
async function loginDoctor(req,res){
   console.log(req.body);
   try{
    const result = await doctorModel.findOne({demail:req.body.demail,dpassword:req.body.dpassword});
    if(!newDoctor){
        res.status(201).send({message:'doctor not found',success:false});
    }
    const isMatch= await doctorModel.findOne({dpassword:req.body.dpassword});
    if(!isMatch){
        res.status(201).send({message:'wrong password',success:false});
    }
    else{
        result= {"message":"login successful", success:true}
        console.log(result);
        res.status(201).send(result);
    }
   }  
   catch(err){
     res.status(500).send(err);
   } 
}
async function getAllDoctor(req,res){
    try{
        const result = await doctorModel.find();
        res.status(200).json(result);
    }
    catch(err){
        res.status(500).send(err);
    }
}
module.exports ={
    addDoctor,
    loginDoctor,
    getAllDoctor
}