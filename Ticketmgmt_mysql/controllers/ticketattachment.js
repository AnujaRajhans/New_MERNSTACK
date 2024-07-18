const db= require('../config/db');
function addticketattachment(req,res){
    const { tacreatedby,tamodified } = req.body;
    console.log(tacreatedby,tamodified);
    const query = "INSERT INTO ticketattachment (tacreatedby,tamodified) VALUES (?,?)";
    db.query(query, [tacreatedby,tamodified], (err,result) => {
      if ((err)) {
        throw err;
      }
      res.send(result);
    });
}

function getticketattachment(req,res){
    const query = "SELECT * FROM ticketattachment";
    db.query(query, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
}

function updateticketattachment(req,res){
    try {
        const {
            tacreatedby,tamodified,taid
        } = req.body;
    
        if (!taid) {
            return res.status(400).send("TicketAttachment ID is required for updating");
        }
    
        const query = 'UPDATE ticketattachment SET tacreatedby =?, tamodified =? WHERE taid =?';
    
    
        db.query(query, [tacreatedby,tamodified,taid], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.error("Error updating TicketAttchment:", error);
        res.status(500).send("An error occurred while updating the TicketAttchment.");
    }
}

function deleteticketattachment(){
    try {
        const {
            tacreatedby,tamodified,taid
        } = req.body;
        if (!taid) {
            return res.status(400).send("TicketAttachment ID is required for deleting");
        }
        const query = 'DELETE FROM ticketattachment WHERE taid =?';
        db.query(query, [ taid,tacreatedby,tamodified], (err, result) =>{
    
            if (err) throw err;
            res.send(result);
        });
            } catch (error) {
                console.error("Error deleting TicketAttachment:", error);
                res.status(500).send("An error occurred while deleting the TIcketAttachment.");
            }
}
module.exports ={
    addticketattachment,
    updateticketattachment,
    getticketattachment,
    deleteticketattachment
}