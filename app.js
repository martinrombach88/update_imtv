const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");
const productionJSON = require("./data/production.json");
const workJSON = require("./data/work.json");
const newsJSON = require("./data/news.json");
const alert = require("alert");

const getListFromFile = (jsonFile) => {
  const jsonPath = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    jsonFile
  );
  const file = fs.readFileSync(jsonPath);
  return JSON.parse(file);
};

//Note: You are currently making changes synchronously.
//You will probably need asynchronous code later on.

const writeToList = (jsonFile, object) => {
  const jsonPath = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    jsonFile
  );
  let updatedArray = [];
  const originalArray = getListFromFile(jsonFile);
  updatedArray = JSON.stringify([object, ...originalArray], null, 2);
  //Stringify arguments:
  //1 A spread array
  //2 A replacer operator (which could change the format, if used) set to null
  //3 A space argument of 2, which creates white space and indentation for readability
  fs.writeFileSync(jsonPath, updatedArray);
};

const overwriteFile = (jsonFile, object) => {
  const jsonPath = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    jsonFile
  );
  updatedArray = JSON.stringify(object, null, 2);
  fs.writeFileSync(jsonPath, updatedArray);
};

const setFilePath = (folder, filename) => {
  return path.join("assets", "images", folder, filename);
};

const newsList = getListFromFile("news.json");
const workList = getListFromFile("work.json");
const productionList = getListFromFile("production.json");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home", {
    path: "/",
    pageTitle: "Update IMTV",
  });
});

app.get("/deleted", (req, res, next) => {
  res.render("deleted", {
    path: "/deleted",
    pageTitle: "Content Deleted",
  });
});

app.get("/hub", (req, res) => {
  res.render("hub", {
    path: "/hub",
    pageTitle: "Update IMTV",
  });
});

app.get("/production", (req, res) => {
  res.render("production", {
    path: "/production",
    pageTitle: "Update In Production",
    object: productionList,
  });
});

app.get("/prodForm", (req, res) => {
  res.render("prodForm", {
    path: "/prodForm",
    pageTitle: "Update In Production",
    object: productionList,
  });
});

app.post("/prodForm", (req, res) => {
  let prodObject = {};
  prodObject.mainTitleKR = req.body.mainTitleKR;
  prodObject.subTitleKR = req.body.subTitleKR;
  prodObject.smallTitleKR = req.body.smallTitleKR;
  prodObject.mainTitleENG = req.body.mainTitleENG;
  prodObject.subTitleENG = req.body.subTitleENG;
  prodObject.fontColor = req.body.fontColor;
  prodObject.backgroundColor = req.body.backgroundColor;
  prodObject.image = setFilePath("home", req.body.image);
  prodObject.imageWide = setFilePath("home", req.body.imageWide);
  overwriteFile("production.json", prodObject);
  res.redirect("/production");
});

app.get("/work", (req, res) => {
  res.render("work", {
    path: "/work",
    pageTitle: "Update Work",
    object: workList,
  });
});

app.get("/workForm", (req, res) => {
  res.render("workForm", {
    path: "/workForm",
    pageTitle: "Add New Work",
    object: workList,
  });
});

app.post("/workForm", (req, res) => {
  let workObject = {};
  workObject.id = workList[0].id + 1;
  workObject.titleKR = req.body.titleKR;
  workObject.titleENG = req.body.titleENG;
  workObject.workImg = setFilePath("work", req.body.workImg);
  workObject.workImgTall = setFilePath("work", req.body.workImgTall);
  workObject.fullVid = req.body.fullVid;
  workObject.clipVid = req.body.clipVid;
  workObject.channels = req.body.channels;
  workObject.date = req.body.date;
  workObject.directorKR = req.body.directorKR;
  workObject.writerKR = req.body.writerKR;
  workObject.starringKR = req.body.starringKR;
  workObject.descriptionKR = req.body.descriptionKR;
  workObject.directorENG = req.body.directorENG;
  workObject.writerENG = req.body.writerENG;
  workObject.starringENG = req.body.starringENG;
  workObject.descriptionENG = req.body.descriptionENG;
  writeToList("work.json", workObject);
  res.redirect("/work");
});

app.post("/deleteWorkForm", (req, res) => {
  let id = req.body.id;
  let workObject = workJSON;
  let target = workObject.length - id;
  for (let i = 0; i <= workObject.length; i++) {
    if (i === target) {
      workObject.splice(i, 1);
    }
  }
  overwriteFile("work.json", workObject);
  res.redirect("/work");
});

app.get("/news", (req, res) => {
  res.render("news", {
    path: "/news",
    pageTitle: "Update News",
    object: newsList,
  });
});

app.get("/newsForm", (req, res) => {
  res.render("newsForm", {
    path: "/newsForm",
    pageTitle: "Update News",
    object: newsList,
  });
});

app.post("/newsForm", (req, res) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  let dateENG = dd + "/" + mm + "/" + +yyyy;
  let dateKR = yyyy + " " + mm + "월 " + dd;
  let newsObject = {};
  let newsBodyKR = [];
  let newsBodyENG = [];
  newsObject.id = newsList[0].id + 1;
  newsObject.titleKR = req.body.titleKR;
  newsObject.titleENG = req.body.titleENG;
  newsObject.dateKR = dateKR;
  newsObject.dateENG = dateENG;
  for (let i = 1; i <= 14; i++) {
    i <= 7 ? newsBodyKR.push(req.body[i]) : newsBodyENG.push(req.body[i]);
  }
  newsObject.bodyKR = newsBodyKR;
  newsObject.bodyENG = newsBodyENG;
  newsObject.image = setFilePath("news", req.body.image);
  newsObject.imageLarge = setFilePath("news", req.body.imageLarge);
  writeToList("news.json", newsObject);
  res.redirect("/news");
});

app.post("/deleteNewsForm", (req, res) => {
  let id = req.body.id;
  let newsObject = newsJSON;
  let target = newsObject.length - id;
  for (let i = 0; i <= newsObject.length; i++) {
    if (i === target) {
      newsObject.splice(i, 1);
    }
  }
  overwriteFile("news.json", newsObject);
  res.redirect("/deleted");
});

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
