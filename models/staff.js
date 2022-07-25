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

exports.sendId = async (id, url, secondId) => {
  let idObject = {};
  id ? (idObject.id = id) : (idObject.id = null);
  secondId ? (idObject.secondId = secondId) : (idObject.secondId = null);
  if (idObject.id) {
    const res = await superagent
      .post(url)
      .send(idObject)
      .set("accept", "json")
      .end((err) => console.log(err));
  }
};

exports.downMax = async (array, object) => {
  for (let num in array) {
    if (array[num].orderID === 14) {
      array[num].orderID = array[num].orderID - 1;
    } else if (array[num].orderID > object.id) {
      array[num].orderID = array[num].orderID - 1;
    }
    array[object.id - 1].orderID = 14;
  }

  if (array) {
    const res = await superagent
      .post("http://localhost:8080/staffdownmax/")
      .send(array)
      .set("accept", "json")
      .end((err) => console.log(err));
  }
};
