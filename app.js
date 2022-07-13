const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");
const workRoutes = require("./routes/work");
const homeRoutes = require("./routes/home");
const newsRoutes = require("./routes/news");
const staffRoutes = require("./routes/staff");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoutes);
app.use(workRoutes);
app.use(newsRoutes);
app.use(staffRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
