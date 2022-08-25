const express = require("express");
const homeController = require("../controllers/home");
const router = express.Router();

router.get("/", homeController.getHome);

router.get("/changeDelete", homeController.changeDelete);
router.get("/changeEdit", homeController.changeEdit);
router.get("/hub", homeController.hub);
router.post("/login", homeController.login);

module.exports = router;
