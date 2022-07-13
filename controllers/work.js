const workModel = require("../models/work.js");
const path = require("path");
const fs = require("fs");

exports.getWork = async (req, res) => {
  const response = await workModel.getWork();
  res.render("work", {
    path: "/work",
    pageTitle: "Update Work",
    object: response,
  });
};
