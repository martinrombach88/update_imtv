const staffModel = require("../models/staff.js");
const path = require("path");
const fs = require("fs");

exports.getStaff = async (req, res) => {
  const response = await staffModel.getStaff();
  res.render("staff", {
    path: "/staff",
    pageTitle: "Update Staff",
    object: response,
  });
};

exports.getStaffForm = (req, res) => {
  res.render("staffForm", {
    path: "/staffForm",
    pageTitle: "Update Staff",
  });
};

exports.postStaff = async (req, res) => {
  staffModel.postStaff(req, res, "http://localhost:8080/poststaff/", "post");
  res.redirect("/staff");
};

exports.getUpdateStaffForm = async (req, res) => {
  const response = await staffModel.getStaffItem(req.body.id);

  res.render("updateStaffForm", {
    path: "/updateStaffForm",
    pageTitle: "Update Staff Form",
    object: response,
  });
};

exports.postUpdateStaffForm = async (req, res) => {
  staffModel.postStaff(
    req,
    res,
    "http://localhost:8080/updatestaff/",
    "update"
  );
  res.redirect("/staff");
};

exports.deleteStaff = async (req, res) => {
  staffModel.sendId(req.body.id, "http://localhost:8080/deletestaff/");
  res.redirect("/staff");
};

exports.resetStaffOrder = (req, res) => {
  staffModel.resetStaffOrder();
  res.redirect("/resetStaffPage");
};

exports.resetStaffPage = async (req, res) => {
  res.render("resetStaffPage", {
    path: "/resetStaffPage",
    pageTitle: "Staff Reset",
  });
};

exports.staffChangePage = async (req, res) => {
  res.render("staffChangePage", {
    path: "/staffChangePage",
    pageTitle: "Staff Changed",
  });
};
exports.staffDirectionUp = async (req, res) => {
  console.log(req.body.id);
  staffModel.staffDirection(
    req.body,
    "http://localhost:8080/staffdirectionup/"
  );
  res.redirect("/staffChangePage");
};

exports.staffDirectionDown = async (req, res) => {
  staffModel.staffDirection(
    req.body,
    "http://localhost:8080/staffdirectiondown/"
  );
  res.redirect("/staffChangePage");
};
