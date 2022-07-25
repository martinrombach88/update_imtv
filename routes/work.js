const express = require("express");
const workController = require("../controllers/work");
const router = express.Router();

router.get("/work", workController.getWork);
router.get("/workForm", workController.getWorkForm);
router.post("/workForm", workController.postWorkForm);
router.post("/deleteWorkForm", workController.deleteWorkForm);

module.exports = router;
