const express = require("express");
const http = require("http");
const superagent = require("superagent");

exports.getWork = async () => {
  try {
    const res = await superagent.get("http://localhost:8080/getwork/");
    const text = JSON.parse(res.text);
    return text.workItems;
  } catch {
    (err) => console.log(err);
  }
};

exports.postWork = async (req, res) => {
  let workObject = {};
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
  req.body.fontColor
    ? (workObject.fontColor = req.body.fontColor)
    : (workObject.fontColor = "");
  req.body.backgroundColor
    ? (workObject.backgroundColor = req.body.backgroundColor)
    : (workObject.backgroundColor = "");
  req.files.imageTall
    ? (workObject.imageTall =
        req.files.imageTall[0].destination.slice(7) +
        "/" +
        req.files.imageTall[0].originalname)
    : (workObject = null);
  req.files.image
    ? (workObject.image =
        req.files.image[0].destination.slice(7) +
        "/" +
        req.files.image[0].originalname)
    : (workObject = null);
  if (workObject) {
    const res = await superagent
      .post("http://localhost:8080/postWork/")
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
      .post("http://localhost:8080/deletework/")
      .send(idObject)
      .set("accept", "json")
      .end();
  }
};
