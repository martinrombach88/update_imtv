const express = require("express");
const superagent = require("superagent");

const updateStaffOrder = async (array) => {
  if (array) {
    const res = await superagent
      .post("http://localhost:8080/updatestafforder/")
      .send(array)
      .set("accept", "json")
      .end();
  }
};

exports.getStaff = async () => {
  try {
    const res = await superagent.get("http://localhost:8080/getstaff/");
    const text = JSON.parse(res.text);
    return text.staffItems;
  } catch {
    (err) => console.log(err);
  }
};

exports.getStaffItem = async (id) => {
  try {
    let staffItem = null;
    const res = await superagent.get(
      "http://localhost:8080/getstaffitem/" + id
    );
    const text = JSON.parse(res.text);
    if (text.staffItem) {
      staffItem = {
        id: text.staffItem[0].id,
        orderID: text.staffItem[0].id,
        titleKR: text.staffItem[0].titleKR,
        titleENG: text.staffItem[0].titleENG,
        nameKR: text.staffItem[0].nameKR,
        nameENG: text.staffItem[0].nameENG,
        infoKR: text.staffItem[0].infoKR.split("~"),
        infoENG: text.staffItem[0].infoENG.split("~"),
      };
      console.log(staffItem);
      return staffItem;
    } else {
      staffItem = null;
    }
  } catch {
    (err) => console.log(err);
  }
};

exports.postStaff = async (req, res, url, format) => {
  let staffObject = {};
  let staffInfoKR = [];
  let staffInfoENG = [];

  if (format === "update") {
    staffObject.id = req.body.id;
    staffObject.titleKR = req.body.titleKR;
    staffObject.titleENG = req.body.titleENG;
    staffObject.nameKR = req.body.nameKR;
    staffObject.nameENG = req.body.nameENG;

    for (let i = 1; i <= 20; i++) {
      i <= 10
        ? staffInfoKR.push("~" + req.body[i])
        : staffInfoENG.push("~" + req.body[i]);
    }

    staffObject.infoKR = staffInfoKR.join();
    staffObject.infoENG = staffInfoENG.join();
  } else if (format === "post") {
    staffObject.titleKR = req.body.titleKR;
    staffObject.titleENG = req.body.titleENG;
    staffObject.nameKR = req.body.nameKR;
    staffObject.nameENG = req.body.nameENG;

    for (let i = 1; i <= 20; i++) {
      i <= 10
        ? staffInfoKR.push("~" + req.body[i])
        : staffInfoENG.push("~" + req.body[i]);
    }
    staffObject.infoKR = staffInfoKR.join();
    staffObject.infoENG = staffInfoENG.join();
  }
  if (staffObject) {
    const res = await superagent
      .post(url)
      .send(staffObject)
      .set("accept", "json")
      .end();
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
      .end();
  }
};

exports.upOne = (array, object) => {
  let id = parseInt(object.id);
  for (let num in array) {
    if (array[num].id === id) {
      array[num].orderID--;
    }
    if (array[num].id === id + 1) {
      array[num].orderID++;
    }
  }
  updateStaffOrder(array);
};

exports.downOne = (array, object) => {
  let targetID = parseInt(object.orderID);
  for (let num in array) {
    if (array[num].orderID === targetID) {
      array[num].orderID++;
    }
    if (array[num].orderID === targetID - 1) {
      array[num].orderID--;
    }
  }
  updateStaffOrder(array);
};

exports.upMax = (array, object) => {
  let id = parseInt(object.id);
  for (let num in array) {
    if (array[num].id === id) {
      array[num].orderID = 1;
    } else if (array[num].orderID === 1) {
      array[num].orderID = 2;
    } else if (array[num].orderID > 1) {
      array[num].orderID = array[num].orderID + 1;
    }
  }
  updateStaffOrder(array);
};

exports.downMax = (array, object) => {
  let id = parseInt(object.id);
  for (let num in array) {
    if (array[num].id === id) {
      array[num].orderID = 14;
    } else if (array[num].orderID === 14) {
      array[num].orderID = 13;
    } else if (array[num].orderID < 14) {
      array[num].orderID = array[num].orderID - 1;
    }
  }
  updateStaffOrder(array);
};
