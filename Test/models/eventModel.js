const mongoose= require('mongoose');
const eventSchema = new mongoose.Schema({
    createdby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, },
    title: {
        type: String, 
        required: true},
    description: {
        type: String, 
        required: true
    },
    invites:[{type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true}],
    rsvp:[
        {
        user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            status:{
                type: String,
                enum : ['Attending','Maybe']
            }
    }
    ]
});

module.exports = mongoose.model('Event', eventSchema);