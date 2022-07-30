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
    } else {
      workModel.postWork(req, res, "http://localhost:8080/postWork/", "add");
      res.redirect("/work");
    }
  });
};

exports.getUpdateWorkForm = async (req, res) => {
  const response = await workModel.getWorkItem(req.body.id);
  res.render("updateWorkForm", {
    path: "/updateWorkForm",
    pageTitle: "Update Work Form",
    object: response,
  });
};

exports.resetWorkPage = async (req, res) => {
  res.render("resetWorkPage", {
    path: "/resetWorkPage",
    pageTitle: "Work Reset",
  });
};

exports.workChangePage = async (req, res) => {
  res.render("workChangePage", {
    path: "/workChangePage",
    pageTitle: "Work Order Changed",
  });
};

exports.postUpdateWorkForm = async (req, res) => {
  workModel.postWork(req, res, "http://localhost:8080/updatework/", "update");
  res.redirect("/work");
};

exports.deleteWorkForm = async (req, res) => {
  workModel.deleteWork(req.body.id);
  res.redirect("/work");
};

exports.resetWorkOrder = (req, res) => {
  workModel.resetWorkOrder();
  res.redirect("/resetWorkPage");
};

exports.workDirectionUp = async (req, res) => {
  workModel.workDirection(req.body, "http://localhost:8080/workdirectionup/");
  res.redirect("/workChangePage");
};

exports.workDirectionDown = async (req, res) => {
  workModel.workDirection(req.body, "http://localhost:8080/workdirectiondown/");
  res.redirect("/workChangePage");
};
