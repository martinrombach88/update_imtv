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
  staffModel.postStaff(req);
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

  if (req.body.downMaxId) {
    idObject = {
      id: req.body.id,
      orderID: req.body.downMaxId,
    };
    staffModel.downMax(response, idObject);
  }

  if (req.body.upOneId) {
    idObject = {
      id: req.body.id,
      orderID: req.body.upOneId,
    };
    staffModel.upOne(response, idObject);
  }

  if (req.body.upMaxId) {
    idObject = {
      id: req.body.id,
      orderID: req.body.upMaxId,
    };
    staffModel.upMax(response, idObject);
  }

  res.redirect("/staff");
};

exports.staffDownMax = async (req, res) => {
  const response = await staffModel.getStaff();
  let idObject = null;
  if (req.body.downMaxId) {
    idObject = {
      id: req.body.id,
      orderID: req.body.downMaxId,
    };
    staffModel.downMax(response, idObject);
  }

  res.redirect("/staff");
};
