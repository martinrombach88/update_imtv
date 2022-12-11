const express = require("express");
const superagent = require("superagent");

exports.getStaff = async () => {
  try {
    const res = await superagent.get(
      "http://localhost:8080/getstaff/"
      // "https://imtv-api.herokuapp.com/getstaff/"
    );
    const text = JSON.parse(res.text);
    return text.staffItems;
  } catch {
    (err) => res.redirect("/update_imtv/404");
  }
};

exports.getStaffItem = async (id) => {
  try {
    let staffItem = null;
    const res = await superagent.get(
      "http://localhost:8080/getstaffitem/" + id
      // "https://imtv-api.herokuapp.com/getstaffitem/" + id
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
        infoKR1: text.staffItem[0].infoKR1,
        infoKR2: text.staffItem[0].infoKR2,
        infoKR3: text.staffItem[0].infoKR3,
        infoKR4: text.staffItem[0].infoKR4,
        infoKR5: text.staffItem[0].infoKR5,
        infoKR6: text.staffItem[0].infoKR6,
        infoKR7: text.staffItem[0].infoKR7,
        infoKR8: text.staffItem[0].infoKR8,
        infoKR9: text.staffItem[0].infoKR9,
        infoKR10: text.staffItem[0].infoKR10,
        infoENG1: text.staffItem[0].infoENG1,
        infoENG2: text.staffItem[0].infoENG2,
        infoENG3: text.staffItem[0].infoENG3,
        infoENG4: text.staffItem[0].infoENG4,
        infoENG5: text.staffItem[0].infoENG5,
        infoENG6: text.staffItem[0].infoENG6,
        infoENG7: text.staffItem[0].infoENG7,
        infoENG8: text.staffItem[0].infoENG8,
        infoENG9: text.staffItem[0].infoENG9,
        infoENG10: text.staffItem[0].infoENG10,
      };
      return staffItem;
    } else {
      staffItem = null;
    }
  } catch {
    (err) => res.redirect("/update_imtv/404");
  }
};

exports.postStaff = async (req, res, url, format) => {
  let staffObject = {};

  if (format === "update") {
    staffObject.id = req.body.id;
    staffObject.titleKR = req.body.titleKR;
    staffObject.titleENG = req.body.titleENG;
    staffObject.nameKR = req.body.nameKR;
    staffObject.nameENG = req.body.nameENG;

    for (let i = 1; i <= 20; i++) {
      staffObject[i] = req.body[i];
    }
  } else if (format === "post") {
    staffObject.titleKR = req.body.titleKR;
    staffObject.titleENG = req.body.titleENG;
    staffObject.nameKR = req.body.nameKR;
    staffObject.nameENG = req.body.nameENG;

    for (let i = 1; i <= 20; i++) {
      staffObject[i] = req.body[i];
    }
  }
  if (staffObject) {
    const res = await superagent
      .post(url)
      .send(staffObject)
      .set("accept", "json")
      .end();
  }
};

exports.deleteStaff = async (id) => {
  let idObject = {};
  id ? (idObject.id = id) : (idObject.id = null);
  if (idObject.id) {
    const res = await superagent
      .post("http://localhost:8080/deletestaff/")
      // .post("https://imtv-api.herokuapp.com/deletestaff/")
      .send(idObject)
      .set("accept", "json")
      .end();
  }
};
