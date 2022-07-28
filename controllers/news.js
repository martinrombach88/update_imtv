const newsModel = require("../models/news.js");
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
    return cb(new Error("Only images files are allowed"));
  }
};

const upload = multer({ storage: fileStorage, fileFilter: fileFilter }).fields([
  { name: "imageLarge" },
  { name: "image" },
]);

exports.getNews = async (req, res) => {
  const response = await newsModel.getNews();
  res.render("news", {
    path: "/news",
    pageTitle: "Update News",
    object: response,
  });
};

exports.getNewsForm = (req, res) => {
  res.render("newsForm", {
    path: "/newsForm",
    pageTitle: "Update News",
  });
};

exports.getUpdateNewsForm = async (req, res) => {
  const response = await newsModel.getNewsItem(req.body.id);
  res.render("updateNewsForm", {
    path: "/updateNewsForm",
    pageTitle: "Update News Form",
    object: response,
  });
};

exports.postUpdateNewsForm = async (req, res) => {
  newsModel.sendNews(req, res, "http://localhost:8080/updatenews/", "update");
  res.redirect("/news");
};

exports.addNewsForm = async (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      res.render(JSON.stringify(err));
    } else {
      newsModel.sendNews(req, res, "http://localhost:8080/addnews/", "add");
      res.redirect("/news");
    }
  });
};

exports.get400 = (req, res, next) => {
  res.render("get400", {
    path: "/get400",
    pageTitle: "Image Upload Failed",
  });
};

exports.deleteNewsForm = async (req, res) => {
  newsModel.deleteNews(req.body.id);
  res.redirect("/news");
};
