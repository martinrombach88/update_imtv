const newsModel = require("../models/news.js");
const path = require("path");
const fs = require("fs");

exports.getNews = async (req, res) => {
  const response = await newsModel.getNews();
  res.render("news", {
    path: "/news",
    pageTitle: "Update News",
    object: response,
  });
};
