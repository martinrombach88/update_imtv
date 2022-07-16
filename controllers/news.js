const newsModel = require("../models/news.js");
const path = require("path");
const fs = require("fs");
const setFilePath = (folder, filename) => {
  return path.join("assets", "images", folder, filename);
};

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
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    let dateENG = dd + "/" + mm + "/" + +yyyy;
    let dateKR = yyyy + " " + mm + "월 " + dd;
    let newsObject = {};
    let newsBodyKR = [];
    let newsBodyENG = [];
    newsObject.titleKR = req.body.titleKR;
    newsObject.titleENG = req.body.titleENG;
    newsObject.dateKR = dateKR;
    newsObject.dateENG = dateENG;
    console.log(req.body);
    for (let i = 1; i <= 14; i++) {
      i <= 7
        ? newsBodyKR.push("~" + req.body[i])
        : newsBodyENG.push("~" + req.body[i]);
    }

    newsObject.bodyKR = newsBodyKR.join();
    newsObject.bodyENG = newsBodyENG.join();
    newsModel.postNews(newsObject);
    // res.redirect("/news");
  });
