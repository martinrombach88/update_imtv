const express = require("express");
const newsController = require("../controllers/news");
const router = express.Router();
const newsJSON = require("../data/news.json");
const path = require("path");
let currentNews = null;
const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/images/news");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

router.get("/news", newsController.getNews);
router.get("/newsForm", newsController.getNewsForm);
router.post(
  "/newsForm",
  multer({ storage: fileStorage, fileFilter: fileFilter }).fields([
    { name: "imageLarge" },
    { name: "image" },
  ]),
  newsController.postNewsForm
);

module.exports = router;
