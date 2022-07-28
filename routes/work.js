const express = require("express");
const workController = require("../controllers/work");
const router = express.Router();

router.get("/work", workController.getWork);
router.get("/workForm", workController.getWorkForm);
router.post("/workForm", workController.postWorkForm);
router.post("/updateWorkForm", workController.getUpdateWorkForm);
router.post("/postUpdateWorkForm", workController.postUpdateWorkForm);
router.post("/deleteWorkForm", workController.deleteWorkForm);
router.post("/workDirection", workController.workDirection);
module.exports = router;
