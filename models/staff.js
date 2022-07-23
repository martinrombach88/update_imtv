const express = require("express");
const http = require("http");
const superagent = require("superagent");

exports.getStaff = async () => {
  try {
    const res = await superagent.get("http://localhost:8080/getstaff/");
    const text = JSON.parse(res.text);
    return text.staffItems;
  } catch {
    (err) => console.log(err);
  }
};

exports.postStaffForm = async () => {
  try {
    const res = await superagent.get("http://localhost:8080/getstaff/");
    const text = JSON.parse(res.text);
    return text.staffItems;
  } catch {
    (err) => console.log(err);
  }
};
