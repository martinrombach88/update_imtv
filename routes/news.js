const express = require("express");
const newsController = require("../controllers/news");
const router = express.Router();

router.get("/news", newsController.getNews);
router.get("/newsForm", newsController.getNewsForm);
router.post("/newsForm", newsController.addNewsForm);
router.post("/updateNewsForm", newsController.getUpdateNewsForm);
router.post("/postUpdateNewsForm", newsController.postUpdateNewsForm);
router.post("/deleteNewsForm", newsController.deleteNewsForm);
module.exports = router;
