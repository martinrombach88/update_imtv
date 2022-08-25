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
    pageTitle: "Work",
    object: response,
  });
};

exports.getWorkForm = (req, res) => {
  res.render("workForm", {
    path: "/workForm",
    pageTitle: "Work",
  });
};

exports.postWorkForm = async (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      res.render(JSON.stringify(err));
    } else {
      workModel.postWork(req, res, "http://localhost:8080/postWork/", "add");
      res.redirect("/workListUpdate");
    }
  });
};
exports.resetWorkOrder = (req, res) => {
  workModel.resetWorkOrder();
  res.redirect("/workListUpdate");
};

exports.getUpdateWorkForm = async (req, res) => {
  const response = await workModel.getWorkItem(req.body.id);
  res.render("updateWorkForm", {
    path: "/updateWorkForm",
    pageTitle: "Update Work Form",
    object: response,
  });
};

exports.workListUpdate = async (req, res) => {
  res.render("workListUpdate", {
    path: "/workListUpdate",
    pageTitle: "List Updated",
  });
};

exports.postUpdateWorkForm = async (req, res) => {
  workModel.postWork(req, res, "http://localhost:8080/updatework/", "update");
  res.redirect("/workListUpdate");
};

exports.deleteWorkForm = async (req, res) => {
  workModel.deleteWork(req.body.id);
  res.redirect("/workListUpdate");
};

exports.workDirectionUp = async (req, res) => {
  workModel.workDirection(req.body, "http://localhost:8080/workdirectionup/");
  res.redirect("/workListUpdate");
};

exports.workDirectionDown = async (req, res) => {
  workModel.workDirection(req.body, "http://localhost:8080/workdirectiondown/");
  res.redirect("/workListUpdate");
};
