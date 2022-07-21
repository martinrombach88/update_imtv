const newsModel = require("../models/news.js");
const path = require("path");
const fs = require("fs");
const setFilePath = (folder, filename) => {
  return path.join("assets", "images", folder, filename);
};
const multer = require("multer");
let imageLarge = null;
let image = null;

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
      console.log(JSON.stringify(err));
      res.status(400).send("Failed to upload image.");
    } else {
      imageLarge = req.files.imageLarge;
      newsModel.postNews(req);
    }
  });
  res.redirect("/news");
};
