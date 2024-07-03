const mongoose = require('mongoose');
const patientSchema = require('../models/patientModel');
async function addPatient(req,res){
  console.log(req.body);
  try{
     const newPatient = new patientSchema(req.body);
     const result =  await newPatient.save();
     res.status(200).json(result);
  }
  catch(err){
    res.status(500).json(err);
  }
}
async function loginPatient(req,res){
  try{
    const{email,password} = req.body;
    const user = await patientSchema.findOne({ email});
    if(!user || !(await user.comparePassword(password))){
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ user,"message":"patient login function"});
  }
  catch(err){
    res.status(500).send({ message: err.message});
  }
}
    async function getAllPatients(req, res){
    try{
      const result = await patientSchema.find();
      res.status(200).json(result);
    }
    catch(err){
        res.status(500).json(err);
    }
  }

module.exports ={
    addPatient,
    loginPatient,
    getAllPatients
} 