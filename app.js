const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");
const staffJSON = require("./data/staff.json");
const workRoutes = require("./routes/work");
const homeRoutes = require("./routes/home");
const newsRoutes = require("./routes/news");

let currentNews = null;
let currentWork = null;

const getListFromFile = (jsonFile) => {
  const jsonPath = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    jsonFile
  );
  const file = fs.readFileSync(jsonPath);
  return JSON.parse(file);
};

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

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/staff", (req, res) => {
  res.render("staff", {
    path: "/staff",
    pageTitle: "Update Staff",
    object: staffJSON,
  });
});

app.use(homeRoutes);
app.use(workRoutes);
app.use(newsRoutes);
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
