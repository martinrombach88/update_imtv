const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const productionObject = require("./production");
const workObject = require("./work");
const newsObject = require("./news");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.render("home", {
    path: "/",
    pageTitle: "Update IMTV",
  });
});

app.get("/hub", (req, res, next) => {
  res.render("hub", {
    path: "/hub",
    pageTitle: "Update IMTV",
  });
});

app.get("/production", (req, res, next) => {
  res.render("production", {
    path: "/production",
    pageTitle: "Update In Production",
    object: productionObject,
  });
});

app.get("/prodForm", (req, res, next) => {
  res.render("prodForm", {
    path: "/prodForm",
    pageTitle: "Update In Production",
    object: productionObject,
  });
});

app.get("/work", (req, res, next) => {
  res.render("work", {
    path: "/work",
    pageTitle: "Update Work",
    object: workObject,
  });
});

app.get("/workForm", (req, res, next) => {
  res.render("workForm", {
    path: "/workForm",
    pageTitle: "Update Work",
    object: workObject,
  });
});

app.get("/news", (req, res, next) => {
  res.render("news", {
    path: "/news",
    pageTitle: "Update News",
    object: newsObject,
  });
});

app.get("/newsForm", (req, res, next) => {
  res.render("newsForm", {
    path: "/newsForm",
    pageTitle: "Update News",
    object: newsObject,
  });
});

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
