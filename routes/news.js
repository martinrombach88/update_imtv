const express = require("express");
const newsController = require("../controllers/news");
const router = express.Router();
const newsJSON = require("../data/news.json");
const path = require("path");
let currentNews = null;

router.get("/news", newsController.getNews);

module.exports = router;
