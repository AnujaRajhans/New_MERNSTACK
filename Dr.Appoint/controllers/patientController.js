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
    getAllPatients
} 