const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const productionObject = require("./production");

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

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
