const express = require("express");
const newsController = require("../controllers/news");
const router = express.Router();
const newsJSON = require("../data/news.json");
const path = require("path");

router.get("/news", newsController.getNews);
router.get("/newsForm", newsController.getNewsForm);
router.post("/newsForm", newsController.postNewsForm);

module.exports = router;
