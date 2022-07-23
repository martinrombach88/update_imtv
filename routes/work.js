const express = require("express");
const workController = require("../controllers/work");
const router = express.Router();

router.get("/work", workController.getWork);
router.get("/workForm", workController.getWorkForm);
router.post("/workForm", workController.postWorkForm);

module.exports = router;
