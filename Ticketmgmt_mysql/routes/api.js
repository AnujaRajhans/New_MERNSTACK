const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");
const ticketremarks = require("../controllers/ticket-remarks");
const ticketController = require("../controllers/ticket-controller");
const attachmentController = require("../controllers/attachment-controller");
const remarkController = require("../controllers/remark-controller");
const ticketAttachment = require("../controllers/ticketattachment");

router.post("/adduser", userController.adduser);
router.get("/getuser", userController.getuser);
router.put("/updateuser", userController.updateuser);
router.delete("/deleteuser", userController.deleteuser);

router.post("/addticket", ticketController.addticket);
router.get("/getticket", ticketController.getticket);
router.put("/updateticket", ticketController.updateticket);
router.delete("/deletticket", ticketController.deleteticket);

router.post("/addattachment", attachmentController.addattachment);
router.get("/getattachment", attachmentController.getattachment);
router.put("/updateattachment", attachmentController.updateattachment);
router.delete("/deletattachment", attachmentController.deleteattachment);

router.post("/addremark", remarkController.addremark);
router.get("/getremark", remarkController.getremark);
router.put("/updateremark", remarkController.updateremark);
router.delete("/deletremark", remarkController.deleteremark);

router.post("/addticketattachment",ticketAttachment.addticketattachment);
router.get("/getticketattachment",ticketAttachment.getticketattachment);
router.put("/updateticketattachment",ticketAttachment.updateticketattachment);
router.delete("/deleteticketattachment",ticketAttachment.deleteticketattachment);

router.post("/addticketremark", ticketremarks.addticketremarks);
router.get("/getticketremark", ticketremarks.getticketremarks);
router.put("/updateticketremark", ticketremarks.updateticketremarks);
router.delete("/deleteticketremark", ticketremarks.deleteticketremarks);

module.exports = router;