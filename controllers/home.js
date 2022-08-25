const homeModel = require("../models/home.js");
const bcrypt = require("bcrypt");

exports.getHome = (req, res) => {
  res.render("home", {
    path: "/",
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
      res.redirect("/hub");
    }
  } else {
    res.redirect("/");
  }
};

exports.changeDelete = (req, res, next) => {
  res.render("change", {
    path: "/change",
    pageTitle: "Content Deleted",
  });
};

exports.changeEdit = (req, res, next) => {
  res.render("change", {
    path: "/change",
    pageTitle: "Content Edited",
  });
};

exports.hub = (req, res) => {
  res.render("hub", {
    path: "/hub",
    pageTitle: "Update IMTV",
  });
};
