const express = require("express");

const staffController = require("../controllers/staff");
const router = express.Router();

router.get("/staff", staffController.getStaff);
router.get("/staffForm", staffController.getStaffForm);
router.get("/staffForm", staffController.postStaffForm);
module.exports = router;

/* const infoStringKR = staffItem.infoKR.join();
const infoStringENG = staffItem.infoENG.join();

const string =
  (staffItem.titleKR ? "'" + staffItem.titleKR + "'" : "''") +
  ", " +
  (staffItem.titleENG ? "'" + staffItem.titleENG + "'" : "''") +
  ", " +
  (staffItem.nameKR ? "'" + staffItem.nameKR + "'" : "''") +
  ", " +
  (staffItem.nameENG ? "'" + staffItem.nameENG + "'" : "''") +
  ", " +
  (staffItem.infoKR ? "'" + infoStringKR + "'" : "''") +
  ", " +
  (staffItem.infoENG ? "'" + infoStringENG + "'" : "''");

  */
