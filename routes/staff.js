const express = require("express");

const staffController = require("../controllers/staff");
const router = express.Router();

router.get("/staff", staffController.getStaff);
router.get("/staffForm", staffController.getStaffForm);
router.post("/staffForm", staffController.postStaffForm);
router.post("/deleteStaffForm", staffController.deleteStaffForm);

module.exports = router;
