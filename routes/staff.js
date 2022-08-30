const express = require("express");

const staffController = require("../controllers/staff");
const router = express.Router();

router.get("/update_imtv/staff", staffController.getStaff);
router.get("/update_imtv/staffForm", staffController.getStaffForm);
router.get("/update_imtv/staffListUpdate", staffController.staffListUpdate);

router.post("/update_imtv/staffForm", staffController.postStaff);
router.post("/update_imtv/updateStaffForm", staffController.getUpdateStaffForm);
router.post(
  "/update_imtv/postUpdateStaffForm",
  staffController.postUpdateStaffForm
);
router.post("/update_imtv/deleteStaffForm", staffController.deleteStaff);

module.exports = router;
