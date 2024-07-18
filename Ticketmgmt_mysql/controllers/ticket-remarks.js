const db= require('../config/db');
function addticketremarks(req,res){
    const { trcreatedby,trmodifiedby } = req.body;
    console.log(trcreatedby,trmodifiedby);
    const query = "INSERT INTO ticketremarks (trcreatedby,trmodifiedby) VALUES (?,?)";
    db.query(query, [trcreatedby,trmodifiedby], (err,result) => {
      if ((err)) {
        throw err;
      }
      res.send(result);
    });
}

function getticketremarks(req,res){
    const query = "SELECT * FROM ticketremarks";
    db.query(query, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
}

function updateticketremarks(req,res){
    try {
        const {
            trcreatedby,trmodifiedby,trid
        } = req.body;
    
        if (!trid) {
            return res.status(400).send("TicketRemark ID is required for updating");
        }
    
        const query = 'UPDATE ticketremarks SET trcreatedby =?, trmodifiedby =? WHERE trid =?';
    
    
        db.query(query, [ trcreatedby,trmodifiedby,trid], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.error("Error updating TicketRemark:", error);
        res.status(500).send("An error occurred while updating the TicketRemark.");
    }
}

function deleteticketremarks(req,res){
    try {
        const {
            trcreatedby,trmodifiedby,trid
        } = req.body;
        if (!trid) {
            return res.status(400).send("Ticketremark ID is required for deleting");
        }
        const query = 'DELETE FROM ticketremarks WHERE trid =?';
        db.query(query, [  trid,trcreatedby,trmodifiedby], (err, result) =>{
    
            if (err) throw err;
            res.send(result);
        });
            } catch (error) {
                console.error("Error deleting Ticketremark:", error);
                res.status(500).send("An error occurred while deleting the Ticketremark.");
            }
}
module.exports ={
    addticketremarks,
    updateticketremarks,
    getticketremarks,
    deleteticketremarks
}