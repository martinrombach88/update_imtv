const express = require("express");

const staffController = require("../controllers/staff");
const router = express.Router();

router.get("/staff", staffController.getStaff);
router.get("/staffForm", staffController.getStaffForm);
router.post("/staffForm", staffController.postStaff);
router.post("/deleteStaffForm", staffController.deleteStaff);
router.post("/staffDownMax", staffController.staffDownMax);

module.exports = router;
