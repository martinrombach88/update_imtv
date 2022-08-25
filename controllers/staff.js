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
  res.redirect("/staffListUpdate");
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
  res.redirect("/staffListUpdate");
};

exports.deleteStaff = async (req, res) => {
  staffModel.deleteStaff(req.body.id);
  res.redirect("/staffListUpdate");
};

exports.staffListUpdate = async (req, res) => {
  res.render("staffListUpdate", {
    path: "/staffListUpdate",
    pageTitle: "Staff Updated",
  });
};
