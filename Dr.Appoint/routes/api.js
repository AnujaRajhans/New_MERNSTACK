const express = require('express');
const router = express.Router();
const doctorModel =require('../controllers/doctorController');
const patientModel= require('../controllers/patientController');
const appointment = require('../controllers/appointmentcontroller');


router.post('/addPatient',patientModel.addPatient);
router.get('/getAllPatient',patientModel.getAllPatients);
router.post('/loginp',patientModel.loginPatient);

router.post('/addappointment',appointment.addappointment);
router.get('/getappointment',appointment.getappointment);
router.get('getappointmentbypatientid',appointment.getappointmentbypatientid);

router.put('/updateAppointmentbydoctor/:id',appointment.updateAppointmentbydoctor);
router.delete('/deleteAppointmentbypatient/:id',appointment.deleteAppointmentbypatient);

router.post('/adddoctor',doctorModel.addDoctor);
router.get('/getAllDoctor',doctorModel.getAllDoctor);
router.post('/login',doctorModel.loginDoctor);
module.exports = router;


