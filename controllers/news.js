const newsModel = require("../models/news.js");
const path = require("path");
const fs = require("fs");
const setFilePath = (folder, filename) => {
  return path.join("assets", "images", folder, filename);
};
// const multer = require("multer");

// const fileStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/assets/images/news");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };
// const upload = multer({ storage: fileStorage, fileFilter: fileFilter }).fields([
//   { name: "imageLarge" },
//   { name: "image" },
// ]);

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

exports.postNewsForm =
  ("/newsForm",
  (req, res) => {
    newsModel.postNews(req);
    res.redirect("/news");
  });
