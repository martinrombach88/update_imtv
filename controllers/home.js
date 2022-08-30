const homeModel = require("../models/home.js");
const bcrypt = require("bcrypt");

exports.getHome = (req, res) => {
  res.render("home", {
    path: "/update_imtv",
    pageTitle: "Update IMTV",
  });
};

exports.login = async (req, res) => {
  const response = await homeModel.getLogin();
  let username = response.login[0].username;
  let password = response.login[0].password;

  //Use code below to set password.
  // bcrypt.hash("hello", 10, function (err, hash) {
  //   console.log(hash);
  // });

  if (req.body.username === username) {
    const match = await bcrypt.compare(req.body.password, password);
    if (match) {
      res.redirect("/update_imtv/hub");
    }
  } else {
    res.redirect("/update_imtv/");
  }
};

exports.changeDelete = (req, res, next) => {
  res.render("change", {
    path: "/update_imtv/change",
    pageTitle: "Content Deleted",
  });
};

exports.changeEdit = (req, res, next) => {
  res.render("change", {
    path: "/update_imtv/change",
    pageTitle: "Content Edited",
  });
};

exports.hub = async (req, res) => {
  res.render("hub", {
    path: "/update_imtv/hub",
    pageTitle: "Update IMTV",
  });
};
