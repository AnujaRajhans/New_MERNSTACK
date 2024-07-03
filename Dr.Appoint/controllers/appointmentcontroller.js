const mongoose = require('mongoose');
const appointments = require('../models/appointment');

async function addappointment(req,res){
    try{
        const newappointment = new appointments(req.body);
        await newappointment.save();
        res.status(201).send(newappointment);
    }
    catch(err){
        res.status(500).send(err);
    }
}

async function getappointment(req,res){
    try{
        const newappointment = await appointments.find();
        return res.send(newappointment);
        return res.status(200).send(newappointment);
    }
    catch(err){
        return res.status(500).send(err);
    }
}


async function getappointmentbypatientid(req, res) {
    try {
        pid = req.query.pid;
        const appointments = await appointments.find({ pid},{__v:0});
        res.status(200).send(appointments);
    } catch(err) {
        res.status(500).send(err);
    }
}

async function getappointmentbydoctorid(req, res) {
    try{
        did = req.query.did;
        const appointments = await appointments.find({ did },{__v:0});
        res.status(200).send(appointments);
    }
    catch(err){
        res.status(500).send(err);
    }
}
async function updateAppointmentbydoctor(req, res) {
        try {
            const {id} = req.params;
            const {status} = req.body;
    
            if(!['Pending','Accepted','Rejected'].includes(status)){
                res.status(400).json({message: 'Invalid status'});
            }
            const updateAppointment = await appointments.findByIdAndUpdate(id,{status},{new:true});
            if(!updateAppointment){
                res.status(404).json({message: 'Appointment not found'});
            }
            res.status(200).send(updateAppointment);
        } catch(err) {
            console.error('Error while updating appointment:', err);
            if(err instanceof mongoose.Error.ValidationError) {
                res.status(400).json({message: 'Validation error', error: err.message});
            }
            else if(err instanceof mongoose.Error.CastError) {
                res.status(400).json({message: 'Invalid appointment id', error: err.message});
            }
            else{
                res.status(500).json({message: 'Internal server error', error: err.message});
            }
        }
    }
    async function deleteAppointmentbypatient(req, res){
        try{
            const appointmentid = req.params.id;
            const deleteappointment = await appointments.findByIdAndDelete(appointmentid);
            if(!deleteappointment){
            res.status(404).json({message: 'Appointment not found'});
            }
            res.status(200).json({message: 'Appointment deleted'});
        }
        catch(err){
            console.error('Error deleting appointment',err);
            res.status(500).json({message: 'Internal server error', error: err.message});
        }
    }

module.exports = {
    addappointment,
    getappointment,
    getappointmentbypatientid,
    getappointmentbydoctorid,
    updateAppointmentbydoctor,
    deleteAppointmentbypatient
}
