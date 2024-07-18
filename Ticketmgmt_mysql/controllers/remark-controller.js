const db= require('../config/db');
function addremark(req,res){
    const { rtext,rcreatedby,rmodified } = req.body;
    console.log(rtext,rcreatedby,rmodified);
    const query = "INSERT INTO remarks (rtext,rcreatedby,rmodified) VALUES (?,?,?)";
    db.query(query, [rtext,rcreatedby,rmodified], (err,result) => {
      if ((err)) {
        throw err;
      }
      res.send(result);
    });
}

function getremark(req,res){
    const query = "SELECT * FROM remarks";
    db.query(query, (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    });
}

function updateremark(req,res){
    try {
        const {
            rtext,rcreatedby,rmodified,rid
        } = req.body;
    
        if (!rid) {
            return res.status(400).send("Remark ID is required for updating");
        }
    
        const query = 'UPDATE remarks SET rtext =?, rcreatedby =?, rmodified =? WHERE rid =?';
    
    
        db.query(query, [rtext,rcreatedby,rmodified,rid], (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.error("Error updating remark:", error);
        res.status(500).send("An error occurred while updating the Remark.");
    }
}

function deleteremark(req,res){
    try {
        const {
            rtext,rcreatedby,rmodified,rid
        } = req.body;
        if (!rid) {
            return res.status(400).send("Remark ID is required for deleting");
        }
        const query = 'DELETE FROM remarks WHERE rid =?';
        db.query(query, [ rid,rtext,rcreatedby,rmodified], (err, result) =>{
    
            if (err) throw err;
            res.send(result);
        });
            } catch (error) {
                console.error("Error deleting Remark:", error);
                res.status(500).send("An error occurred while deleting the Remark.");
            }
}
module.exports ={
    addremark,
    updateremark,
    getremark,
   deleteremark
}