const express = require("express");

const staffController = require("../controllers/staff");
const router = express.Router();

router.get("/staff", staffController.getStaff);
router.get("/staffForm", staffController.getStaffForm);
router.get("/staffListUpdate", staffController.staffListUpdate);

router.post("/staffForm", staffController.postStaff);
router.post("/updateStaffForm", staffController.getUpdateStaffForm);
router.post("/postUpdateStaffForm", staffController.postUpdateStaffForm);
router.post("/deleteStaffForm", staffController.deleteStaff);

module.exports = router;
