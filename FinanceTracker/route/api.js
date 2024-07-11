const userController = require('../controllers/userController');
const express = require('express');
const router= express.Router();

router.post('/registeruser',userController.registeruser);
router.post('/loginuser',userController.loginuser);
module.exports = router;
