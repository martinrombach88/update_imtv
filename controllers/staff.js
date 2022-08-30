const staffModel = require("../models/staff.js");
const path = require("path");
const fs = require("fs");

exports.getStaff = async (req, res) => {
  const response = await staffModel.getStaff();
  res.render("staff", {
    path: "/update_imtv/staff",
    pageTitle: "Update Staff",
    object: response,
  });
};

exports.getStaffForm = (req, res) => {
  res.render("staffForm", {
    path: "/update_imtv/staffForm",
    pageTitle: "Update Staff",
  });
};

exports.postStaff = async (req, res) => {
  staffModel.postStaff(
    req,
    res,
    "https://imtv-api.herokuapp.com/poststaff/",
    "post"
  );
  res.redirect("/update_imtv/staffListUpdate");
};

exports.getUpdateStaffForm = async (req, res) => {
  const response = await staffModel.getStaffItem(req.body.id);

  res.render("updateStaffForm", {
    path: "/update_imtv/updateStaffForm",
    pageTitle: "Update Staff Form",
    object: response,
  });
};

exports.postUpdateStaffForm = async (req, res) => {
  staffModel.postStaff(
    req,
    res,
    "https://imtv-api.herokuapp.com/updatestaff/",
    "update"
  );
  res.redirect("/update_imtv/staffListUpdate");
};

exports.deleteStaff = async (req, res) => {
  staffModel.deleteStaff(req.body.id);
  res.redirect("/update_imtv/staffListUpdate");
};

exports.staffListUpdate = async (req, res) => {
  res.render("staffListUpdate", {
    path: "/update_imtv/staffListUpdate",
    pageTitle: "Staff Updated",
  });
};
