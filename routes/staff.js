const express = require("express");

const staffController = require("../controllers/staff");
const router = express.Router();

router.get("/staff", staffController.getStaff);
router.get("/staffForm", staffController.getStaffForm);
router.post("/staffForm", staffController.postStaff);
router.post("/updateStaffForm", staffController.getUpdateStaffForm);
router.post("/postUpdateStaffForm", staffController.postUpdateStaffForm);
router.post("/deleteStaffForm", staffController.deleteStaff);
router.post("/staffDirection", staffController.staffDirection);

module.exports = router;
