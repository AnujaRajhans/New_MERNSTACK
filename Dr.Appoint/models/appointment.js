const mongoose = require('mongoose');

const appointment = mongoose.Schema({
    did:{type:mongoose.Schema.Types.ObjectId,ref:"doctor",required:true},
    pid:{type:mongoose.Schema.Types.ObjectId,ref:"patientSchema",required:true},
    date:{type:Date,required:true},
    status:{
        type:String,
        enum:['Pending','Accepted','Rejected'],
        default:'Pending'
    }
})


module.exports = mongoose.model('Appointment',appointment);