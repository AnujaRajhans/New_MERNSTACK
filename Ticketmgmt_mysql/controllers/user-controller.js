const db= require('../config/db');
async function adduser(req, res) {
  const { uname,uemail,umobile,ugender,uage,udesignation,utype,upassword,uisdeleted,ucreatedby,umodifiedby } = req.body;
  console.log(uname,uemail,umobile,ugender,uage,udesignation,utype,upassword,uisdeleted,ucreatedby,umodifiedby);
  const query = "INSERT INTO user (uname,uemail,umobile,ugender,uage,udesignation,utype,upassword,uisdeleted,ucreatedby,umodifiedby) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
  await db.query(query, [uname,uemail,umobile,ugender,uage,udesignation,utype,upassword,uisdeleted,ucreatedby,umodifiedby], (err,result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
}
function getuser(){

}
function updateuser(){

}
function deleteuser(){
    
}
module.exports ={
  adduser,
  updateuser,
  getuser,
  deleteuser
}