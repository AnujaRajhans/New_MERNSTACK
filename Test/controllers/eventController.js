const eventModel= require('../models/eventModel');
async function getAllEvents(req, res) {
    try {
        const events = await eventModel.find();
        res.send(events);
    } catch (err) {
        res.status(500).send(err);
    }
}
async function singleEvent(req, res) {
    try {
        const event = await eventModel.findById(req.params.id);
        if (!event) 
            {return res.status(404).send({ message: 'Event not found' });
    } 
    res.send(event);
    }
    catch (err) {
        res.status(500).send(err);
    }
}
async function createevent(req,res){
    try {
        const event = new event({title,description, date,time,createdBy,invites});
        await event.save();
        res.status(201).send({Message:"Event saved successfully",event});
    } catch (err) {
        res.status(400).send(err);
    }
}
async function updateevent(req, res){
    try {
        const updateevent = await eventModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updateevent)
            {return res.status(404).send({ message: 'Event not found' });
    }
        res.send(updateevent);
    } 
    catch (err) {
        res.status(400).send(err);
    }
}

async function deleteevent(req, res){
    try {
        const deletedEvent = await eventModel.findByIdAndDelete(req.params.id);
        if (!deletedEvent)
            {return res.status(404).send({ message: 'Event not found' });
        }
        res.send({message : "event deleted succesfully",deletedEvent});
      } 
    catch (err) {
        res.status(500).send(err);
    }
 
}
module.exports = {singleEvent,
    getAllEvents,
    updateevent,
    deleteevent,
    createevent
};