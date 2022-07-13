const express = require("express");
const workController = require("../controllers/work");
const router = express.Router();

// router.get("/getwork", workController.test);
// router.get("/addwork", workController.addWork);

router.get("/", (req, res) => {
  res.render("home", {
    path: "/",
    pageTitle: "Update IMTV",
  });
});

router.get("/changeDelete", (req, res, next) => {
  res.render("change", {
    path: "/change",
    pageTitle: "Content Deleted",
  });
});

router.get("/changeEdit", (req, res, next) => {
  res.render("change", {
    path: "/change",
    pageTitle: "Content Edited",
  });
});

router.get("/hub", (req, res) => {
  res.render("hub", {
    path: "/hub",
    pageTitle: "Update IMTV",
  });
});

module.exports = router;
