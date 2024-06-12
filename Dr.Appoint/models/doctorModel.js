const mongoose = require('mongoose');
const doctor= mongoose.Schema({
    dname:{type: 'string', required: true},
    demail:{type: 'string', required: true},
    dphone:{type: 'number', required: true},
    daddress:{type: 'string', required: true},
    dpassword:{type: 'string', required: true},
    dspecialist:{type: 'string', required: true}
})

module.exports = mongoose.model('doctor',doctor);   