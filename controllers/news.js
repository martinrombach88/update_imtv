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

exports.postNewsForm = async (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      res.render(JSON.stringify(err));
      // return res.render("storageErrors", {
      //   pageTitle: "Error",
      //   err: err,
      // });
    } else {
      newsModel.postNews(req);
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
