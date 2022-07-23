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

exports.postStaffForm = (req, res) => {
  res.render("staffForm", {
    path: "/staffForm",
    pageTitle: "Update Staff",
  });
};
