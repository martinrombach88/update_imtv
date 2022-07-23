const express = require("express");
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

exports.postStaff = async (req, res) => {
  let staffObject = {};
  let staffInfoKR = [];
  let staffInfoENG = [];

  staffObject.titleKR = req.body.titleKR;
  staffObject.titleENG = req.body.titleENG;
  staffObject.nameKR = req.body.nameKR;
  staffObject.nameENG = req.body.nameENG;

  for (let i = 1; i <= 20; i++) {
    i <= 10
      ? staffInfoKR.push("-" + req.body[i])
      : staffInfoENG.push("-" + req.body[i]);
  }
  staffObject.infoKR = staffInfoKR.join();
  staffObject.infoENG = staffInfoENG.join();

  if (staffObject) {
    const res = await superagent
      .post("http://localhost:8080/poststaff/")
      .send(staffObject)
      .set("accept", "json")
      .end((err) => console.log(err));
  }
};

exports.deleteStaff = async () => {
  try {
    const res = await superagent.get("http://localhost:8080/getstaff/");
    const text = JSON.parse(res.text);
    return text.staffItems;
  } catch {
    (err) => console.log(err);
  }
};
