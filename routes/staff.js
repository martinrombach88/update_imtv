const express = require("express");

const staffController = require("../controllers/staff");
const router = express.Router();

router.get("/staff", staffController.getStaff);
module.exports = router;
