const express = require("express");
const workController = require("../controllers/work");
const router = express.Router();

router.get("/work", workController.getWork);
router.get("/workForm", workController.getWorkForm);
router.post("/workForm", workController.postWorkForm);

router.post("/updateWorkForm", workController.getUpdateWorkForm);
router.post("/postUpdateWorkForm", workController.postUpdateWorkForm);
router.post("/deleteWorkForm", workController.deleteWorkForm);

router.get("/resetWorkPage", workController.resetWorkPage);
router.get("/workChangePage", workController.workChangePage);
router.get("/resetWorkOrder", workController.resetWorkOrder);
router.post("/workDirectionUp", workController.workDirectionUp);
router.post("/workDirectionDown", workController.workDirectionDown);

module.exports = router;
