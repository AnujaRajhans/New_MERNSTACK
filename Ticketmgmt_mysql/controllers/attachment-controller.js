const db= require('../config/db');
function addattachment(req,res){
    const { afilename,atype,acreatedby,amodifiedby } = req.body;
    console.log(afilename,atype,acreatedby,amodifiedby);
    const query = "INSERT INTO attachment (afilename,atype,acreatedby,amodifiedby) VALUES (?,?,?,?)";
    db.query(query, [afilename,atype,acreatedby,amodifiedby], (err,result) => {
      if ((err)) {
        throw err;
      }
      res.send(result);
    });
}

function getattachment(req,res){
    const query = "SELECT * FROM attachment";
    db.query(query, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
}

function updateattachment(){
    try {
        const {
            afilename,atype,acreatedby,amodifiedby,aid
        } = req.body;
    
        if (!aid) {
            return res.status(400).send("Remark ID is required for updating");
        }
    
        const query = 'UPDATE attachment SET afilename =?, atype =?, acreatedby =?, amodifiedby =? WHERE aid =?';
    
    
        db.query(query, [afilename,atype,acreatedby,amodifiedby,aid], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.error("Error updating Attchment:", error);
        res.status(500).send("An error occurred while updating the Attchment.");
    }
}

function deleteattachment(){
    try {
        const {
            afilename,atype,acreatedby,amodifiedby,aid
        } = req.body;
        if (!rid) {
            return res.status(400).send("Remark ID is required for deleting");
        }
        const query = 'DELETE FROM attachment WHERE aid =?';
        db.query(query, [ aid,afilename,atype,acreatedby,amodifiedby], (err, result) =>{
    
            if (err) throw err;
            res.send(result);
        });
            } catch (error) {
                console.error("Error deleting Remark:", error);
                res.status(500).send("An error occurred while deleting the Remark.");
            }
}
module.exports ={
    addattachment,
    updateattachment,
    getattachment,
    deleteattachment
}