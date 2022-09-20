const newsModel = require("../models/news.js");
const multer = require("multer");
const ImgurStorage = require("multer-storage-imgur");

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    return cb(new Error("Only jpg files are allowed"));
  }
};

const upload = multer({
  storage: ImgurStorage({ clientId: "d8cadc7650a9991" }),
  fileFilter: fileFilter,
}).fields([{ name: "imageLarge" }, { name: "image" }]);

exports.getNews = async (req, res) => {
  const response = await newsModel.getNews();
  res.render("news", {
    path: "/update_imtv/news",
    pageTitle: "News",
    object: response,
  });
};

exports.getNewsForm = (req, res) => {
  res.render("newsForm", {
    path: "/update_imtv/newsForm",
    pageTitle: "Add News",
  });
};

exports.getUpdateNewsForm = async (req, res) => {
  const response = await newsModel.getNewsItem(req.body.id);
  res.render("updateNewsForm", {
    path: "/update_imtv/updateNewsForm",
    pageTitle: "Edit News",
    object: response,
  });
};

exports.postUpdateNewsForm = async (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      res.render(JSON.stringify(err));
    } else {
      newsModel.sendNews(
        req,
        res,
        "https://imtv-api.herokuapp.com/updatenews/",
        // "http://localhost:8080/updatenews",
        "update"
      );
      res.redirect("/update_imtv/newsListUpdate");
    }
  });
};

exports.addNewsForm = async (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      res.render(JSON.stringify(err));
    } else {
      newsModel.sendNews(
        req,
        res,
        "https://imtv-api.herokuapp.com/addnews/",
        // "http://localhost:8080/addnews",
        "add"
      );
      res.redirect("/update_imtv/newsListUpdate");
    }
  });
};

exports.get400 = (req, res, next) => {
  res.render("get400", {
    path: "/update_imtv/get400",
    pageTitle: "Image Upload Failed",
  });
};

exports.deleteNewsForm = async (req, res) => {
  newsModel.deleteNews(req.body.id);
  res.redirect("/update_imtv/newsListUpdate");
};

exports.newsListUpdate = async (req, res) => {
  res.render("newsListUpdate", {
    path: "/update_imtv/newsListUpdate",
    pageTitle: "List Updated",
  });
};
