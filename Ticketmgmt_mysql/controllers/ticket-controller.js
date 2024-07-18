const db= require('../config/db');
function addticket(req,res){
    const { tickettype,tstatus,ttitle,tdiscription,tattachment,tallocatedid,tremarks,tcreatedby,tmodifiedby } = req.body;
  console.log(tickettype,tstatus,ttitle,tdiscription,tattachment,tallocatedid,tremarks,tcreatedby,tmodifiedby);
  const query = "INSERT INTO ticket (tickettype,tstatus,ttitle,tdiscription,tattachment,tallocatedid,tremarks,tcreatedby,tmodifiedby) VALUES (?,?,?,?,?,?,?,?,?)";
  db.query(query, [tickettype,tstatus,ttitle,tdiscription,tattachment,tallocatedid,tremarks,tcreatedby,tmodifiedby], (err,result) => {
    if ((err)) {
      throw err;
    }
    res.send(result);
  });
}

function getticket(req,res){
    const query = "SELECT * FROM ticket";
    db.query(query, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
}

function updateticket(req,res){
    try {
        const {
            tickettype,tstatus,ttitle,tdiscription,tattachment,tallocatedid,tremarks,tcreatedby,tmodifiedby ,ticketid
        } = req.body;
    
        if (!ticketid) {
            return res.status(400).send("Ticket ID is required for updating");
        }
    
        const query = 'UPDATE ticket SET tickettype =?, tstatus =?, ttitle =?, tdiscription =?, tattachment =?, tallocatedid =?, tremarks =?, tcreatedby =?, tmodifiedby =? WHERE ticketid =?';
    
    
        db.query(query, [tickettype,tstatus,ttitle,tdiscription,tattachment,tallocatedid,tremarks,tcreatedby,tmodifiedby ,ticketid], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).send("An error occurred while updating the Ticket.");
    }
}

function deleteticket(req,res){
    try {
        const {
            tickettype,tstatus,ttitle,tdiscription,tattachment,tallocatedid,tremarks,tcreatedby,tmodifiedby ,ticketid
        } = req.body;
        if (!ticketid) {
            return res.status(400).send("Ticket ID is required for deleting");
        }
        const query = 'DELETE FROM user WHERE uid =?';
        db.query(query, [ticketid,tickettype,tstatus,ttitle,tdiscription,tattachment,tallocatedid,tremarks,tcreatedby,tmodifiedby], (err, result) =>{
    
            if (err) throw err;
            res.send(result);
        });
            } catch (error) {
                console.error("Error deleting Ticket:", error);
                res.status(500).send("An error occurred while deleting the Ticket.");
            }
}
module.exports ={
    addticket,
    updateticket,
    getticket,
    deleteticket
}