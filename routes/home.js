const express = require("express");
const homeController = require("../controllers/home");
const router = express.Router();

router.get("/update_imtv/", homeController.getHome);

router.get("/update_imtv/changeDelete", homeController.changeDelete);
router.get("/update_imtv/changeEdit", homeController.changeEdit);
router.get("/update_imtv/hub", homeController.hub);
router.post("/update_imtv/login", homeController.login);
router.get("/update_imtv/storageErrors");

module.exports = router;
