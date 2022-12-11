const express = require("express");
const workController = require("../controllers/work");
const router = express.Router();

router.get("/update_imtv/work", workController.getWork);
router.get("/update_imtv/workForm", workController.getWorkForm);
router.post("/update_imtv/workForm", workController.postWorkForm);

router.post("/update_imtv/updateWorkForm", workController.getUpdateWorkForm);
router.post(
  "/update_imtv/postUpdateWorkForm",
  workController.postUpdateWorkForm
);
router.post("/update_imtv/deleteWorkForm", workController.deleteWorkForm);

router.get("/update_imtv/resetWorkOrder", workController.resetWorkOrder);
router.get("/update_imtv/workListUpdate", workController.workListUpdate);
router.get("/update_imtv/workFileError", workController.workFileError);
router.post("/update_imtv/workDirectionUp", workController.workDirectionUp);
router.post("/update_imtv/workDirectionDown", workController.workDirectionDown);

module.exports = router;
