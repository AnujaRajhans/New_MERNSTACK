const usercontroller= require('../controllers/userController');
const eventcontroller = require('../controllers/eventController');
const express = require('express');
const router= express.Router();

router.post('/registeruser',usercontroller.registeruser);
router.post('/loginuser',usercontroller.loginuser);

router.post('/addevent',eventcontroller.createevent);
router.get('/getallevents',eventcontroller.getAllEvents);
router.get('/geteventbyid/:id',eventcontroller.singleEvent);
router.put('/updateevent/:id',eventcontroller.updateevent);
router.delete('/deleteevent/:id',eventcontroller.deleteevent);

module.exports=router;