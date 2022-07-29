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

exports.staffDirection = async (req, res) => {
  const response = await staffModel.getStaff();
  let idObject = null;
  if (req.body.downOneId) {
    idObject = {
      id: req.body.id,
      orderID: req.body.downOneId,
    };
    staffModel.downOne(response, idObject);
  }
  if (req.body.upOneId) {
    idObject = {
      id: req.body.id,
      orderID: req.body.upOneId,
    };
    staffModel.upOne(response, idObject);
  }

  res.redirect("/staff");
};
