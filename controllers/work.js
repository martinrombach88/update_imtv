const workModel = require("../models/work.js");
const multer = require("multer");
const ImgurStorage = require("multer-storage-imgur");

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

const upload = multer({
  storage: ImgurStorage({ clientId: "d8cadc7650a9991" }),
  fileFilter: fileFilter,
}).fields([{ name: "imageTall" }, { name: "image" }]);

exports.getWork = async (req, res) => {
  const response = await workModel.getWork();
  res.render("work", {
    path: "/update_imtv/work",
    pageTitle: "Work",
    object: response,
  });
};

exports.getWorkForm = (req, res) => {
  res.render("workForm", {
    path: "/update_imtv/workForm",
    pageTitle: "Work",
  });
};

exports.postWorkForm = async (req, res) => {
  const list = await workModel.getWork();
  const id = list.length + 1;
  upload(req, res, function (err) {
    if (err) {
      res.render(JSON.stringify(err));
    } else {
      workModel.postWork(
        req,
        res,
        "https://imtv-api.herokuapp.com/postwork",
        // "http://localhost:8080/postwork",
        "add",
        id
      );
      res.redirect("/update_imtv/workListUpdate");
    }
  });
};
exports.resetWorkOrder = (req, res) => {
  workModel.resetWorkOrder();
  res.redirect("/update_imtv/workListUpdate");
};

exports.getUpdateWorkForm = async (req, res) => {
  const response = await workModel.getWorkItem(req.body.id);
  res.render("updateWorkForm", {
    path: "/update_imtv/updateWorkForm",
    pageTitle: "Update Work Form",
    object: response,
  });
};

exports.workListUpdate = async (req, res) => {
  res.render("workListUpdate", {
    path: "/update_imtv/workListUpdate",
    pageTitle: "List Updated",
  });
};

exports.postUpdateWorkForm = async (req, res) => {
  workModel.postWork(
    req,
    res,
    "http://imtv-api.herokuapp.com/updatework/",
    "update"
  );
  res.redirect("/update_imtv/workListUpdate");
};

exports.deleteWorkForm = async (req, res) => {
  workModel.deleteWork(req.body.id);
  res.redirect("/update_imtv/workListUpdate");
};

exports.workDirectionUp = async (req, res) => {
  const response = await workModel.getWork();
  workModel.workDirection(
    req.body,
    response,
    "https://imtv-api.herokuapp.com/workdirectionup/"
    // "http://localhost:8080/workdirectionup/"
  );
  res.redirect("/update_imtv/workListUpdate");
};

exports.workDirectionDown = async (req, res) => {
  const response = await workModel.getWork();
  workModel.workDirection(
    req.body,
    response,
    "https://imtv-api.herokuapp.com/workdirectiondown/"
    // "http://localhost:8080/workdirectiondown/"
  );
  res.redirect("/update_imtv/workListUpdate");
};
