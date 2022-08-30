const express = require("express");
const http = require("http");
const superagent = require("superagent");

exports.getWork = async () => {
  try {
    const res = await superagent.get("https://imtv-api.herokuapp.com/getwork/");
    const text = JSON.parse(res.text);
    return text.workItems;
  } catch {
    (err) => console.log(err);
  }
};

exports.getWorkItem = async (id) => {
  try {
    let workItem = null;
    const res = await superagent.get(
      "https://imtv-api.herokuapp.com/getworkitem/" + id
    );
    const text = JSON.parse(res.text);
    if (text.workItem) {
      workItem = {
        id: text.workItem[0].id,
        titleKR: text.workItem[0].titleKR,
        titleENG: text.workItem[0].titleENG,
        image: text.workItem[0].image,
        imageTall: text.workItem[0].imageTall,
        clipVid: text.workItem[0].clipVid,
        fullVid: text.workItem[0].fullVid,
        channels: text.workItem[0].channels,
        releaseDate: text.workItem[0].releaseDate,
        producerKR: text.workItem[0].producerKR,
        writerKR: text.workItem[0].writerKR,
        starringKR: text.workItem[0].starringKR,
        descriptionKR: text.workItem[0].descriptionKR,
        producerENG: text.workItem[0].producerENG,
        writerENG: text.workItem[0].writerENG,
        starringENG: text.workItem[0].starringENG,
        descriptionENG: text.workItem[0].descriptionENG,
        subTitleKR: text.workItem[0].subTitleKR,
        subTitleENG: text.workItem[0].subTitleENG,
        color: text.workItem[0].color,
        backgroundColor: text.workItem[0].backgroundColor,
        inProduction: text.workItem[0].inProduction,
        orderID: text.workItem[0].orderID,
      };

      return workItem;
    } else {
      workItem = null;
    }
  } catch {
    (err) => console.log(err);
  }
};

exports.postWork = async (req, res, url, format) => {
  let workObject = {};

  if (format === "add") {
    workObject.titleKR = req.body.titleKR;
    workObject.descriptionKR = req.body.descriptionKR;
    workObject.channels = req.body.channels;
    workObject.releaseDate = req.body.releaseDate;
    workObject.producerKR = req.body.producerKR;
    workObject.writerKR = req.body.writerKR;
    workObject.starringKR = req.body.starringKR;
    workObject.titleENG = req.body.titleENG;
    workObject.descriptionENG = req.body.descriptionENG;
    workObject.producerENG = req.body.producerENG;
    workObject.writerENG = req.body.writerENG;
    workObject.starringENG = req.body.starringENG;
    workObject.fullVid = req.body.fullVid;
    workObject.clipVid = req.body.clipVid;
    req.body.inProduction === "1"
      ? (workObject.inProduction = "1")
      : (workObject.inProduction = "0");
    req.body.subTitleKR
      ? (workObject.subTitleKR = req.body.subTitleKR)
      : (workObject.subTitleKR = "");
    req.body.subTitleENG
      ? (workObject.subTitleENG = req.body.subTitleENG)
      : (workObject.subTitleENG = "");
    req.body.color
      ? (workObject.color = req.body.color)
      : (workObject.color = "");
    req.body.backgroundColor
      ? (workObject.backgroundColor = req.body.backgroundColor)
      : (workObject.backgroundColor = "");
    req.files.imageTall
      ? (workObject.imageTall = req.files.imageTall[0].link)
      : null;
    req.files.image ? (workObject.image = req.files.image[0].link) : null;
  } else if (format === "update") {
    workObject.id = req.body.id;
    workObject.titleKR = req.body.titleKR;
    workObject.descriptionKR = req.body.descriptionKR;
    workObject.channels = req.body.channels;
    workObject.releaseDate = req.body.releaseDate;
    workObject.producerKR = req.body.producerKR;
    workObject.writerKR = req.body.writerKR;
    workObject.starringKR = req.body.starringKR;
    workObject.titleENG = req.body.titleENG;
    workObject.descriptionENG = req.body.descriptionENG;
    workObject.producerENG = req.body.producerENG;
    workObject.writerENG = req.body.writerENG;
    workObject.starringENG = req.body.starringENG;
    workObject.fullVid = req.body.fullVid;
    workObject.clipVid = req.body.clipVid;
    req.body.inProduction === "1"
      ? (workObject.inProduction = "1")
      : (workObject.inProduction = "0");
    req.body.subTitleKR
      ? (workObject.subTitleKR = req.body.subTitleKR)
      : (workObject.subTitleKR = "");
    req.body.subTitleENG
      ? (workObject.subTitleENG = req.body.subTitleENG)
      : (workObject.subTitleENG = "");
    req.body.color
      ? (workObject.color = req.body.color)
      : (workObject.color = "");
    req.body.backgroundColor
      ? (workObject.backgroundColor = req.body.backgroundColor)
      : (workObject.backgroundColor = "");
    req.body.orderID
      ? (workObject.orderID = req.body.orderID)
      : (workObject.orderID = "");
  }
  if (workObject) {
    const res = await superagent
      .post(url)
      .send(workObject)
      .set("accept", "json")
      .end();
  }
};

exports.deleteWork = async (id) => {
  let idObject = {};
  id ? (idObject.id = id) : (idObject.id = null);
  if (idObject.id) {
    const res = await superagent
      .post("https://imtv-api.herokuapp.com/deletework/")
      .send(idObject)
      .set("accept", "json")
      .end();
  }
};

exports.workDirection = async (idObject, fullObject, url) => {
  if ((idObject, fullObject)) {
    let object = {
      idObject: idObject,
      fullObject: fullObject,
    };

    const res = await superagent
      .post(url)
      .send(object)
      .set("accept", "json")
      .end();
  }
};

exports.resetWorkOrder = async () => {
  await superagent.get("https://imtv-api.herokuapp.com/resetworkorder/");
};
