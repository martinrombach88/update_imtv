const express = require("express");

const staffController = require("../controllers/staff");
const router = express.Router();

router.get("/staff", staffController.getStaff);
router.get("/staffForm", staffController.getStaffForm);
router.post("/staffForm", staffController.postStaff);

router.post("/updateStaffForm", staffController.getUpdateStaffForm);
router.post("/postUpdateStaffForm", staffController.postUpdateStaffForm);
router.post("/deleteStaffForm", staffController.deleteStaff);

router.get("/resetStaffPage", staffController.resetStaffPage);
router.get("/staffChangePage", staffController.staffChangePage);
router.get("/resetStaffOrder", staffController.resetStaffOrder);
router.post("/staffDirectionUp", staffController.staffDirectionUp);
router.post("/staffDirectionDown", staffController.staffDirectionDown);

module.exports = router;
