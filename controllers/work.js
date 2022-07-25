const workModel = require("../models/work.js");
const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/images/work");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    return cb(new Error("Only images files are allowed"));
  }
};

const upload = multer({ storage: fileStorage, fileFilter: fileFilter }).fields([
  { name: "imageTall" },
  { name: "image" },
]);

exports.getWork = async (req, res) => {
  const response = await workModel.getWork();
  res.render("work", {
    path: "/work",
    pageTitle: "Update Work",
    object: response,
  });
};

exports.getWorkForm = (req, res) => {
  res.render("workForm", {
    path: "/workForm",
    pageTitle: "Update Work",
  });
};

exports.postWorkForm = async (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      res.render(JSON.stringify(err));
      // return res.render("storageErrors", {
      //   pageTitle: "Error",
      //   err: err,
      // });
    } else {
      workModel.postWork(req);
      res.redirect("/work");
    }
  });
};

exports.deleteWorkForm = async (req, res) => {
  workModel.deleteWork(req.body.id);
  res.redirect("/work");
};
