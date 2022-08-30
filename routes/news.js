const express = require("express");
const newsController = require("../controllers/news");
const router = express.Router();

router.get("/update_imtv/news", newsController.getNews);
router.get("/update_imtv/newsForm", newsController.getNewsForm);
router.get("/update_imtv/newsListUpdate", newsController.newsListUpdate);
router.post("/update_imtv/newsForm", newsController.addNewsForm);
router.post("/update_imtv/updateNewsForm", newsController.getUpdateNewsForm);
router.post(
  "/update_imtv/postUpdateNewsForm",
  newsController.postUpdateNewsForm
);
router.post("/update_imtv/deleteNewsForm", newsController.deleteNewsForm);
module.exports = router;
