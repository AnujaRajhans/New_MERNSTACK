const express = require('express');
const router = express.Router();
const doctorModel =require('../controllers/doctorController');

router.post('/adddoctor',doctorModel.addDoctor);
router.get('/getAllDoctor',doctorModel.getAllDoctor);
router.post('/login',doctorModel.loginDoctor);
module.exports = router;