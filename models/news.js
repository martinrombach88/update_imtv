const express = require("express");
const http = require("http");
const superagent = require("superagent");
const alert = require("node-popup");

exports.getNews = async () => {
  try {
    let newsList = [];
    const res = await superagent.get("http://localhost:8080/getnews/");
    const text = JSON.parse(res.text);
    if (text.newsItems) {
      for (let item of text.newsItems) {
        let newItem = {
          id: item.id,
          bodyKR: item.bodyKR.split("~"),
          bodyENG: item.bodyENG.split("~"),
          dateENG: item.dateENG,
          dateKR: item.dateKR,
          image: item.image,
          imageLarge: item.imageLarge,
          titleENG: item.titleENG,
          titleKR: item.titleKR,
        };
        newsList.unshift(newItem);
      }
    } else {
      newsList = null;
    }
    return newsList;
  } catch {
    (err) => console.log(err);
  }
};

exports.postNews = async (req, res) => {
  console.log(req.body.titleKR);
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  let dateENG = dd + "/" + mm + "/" + +yyyy;
  let dateKR = yyyy + " " + mm + "월 " + dd + "일";
  let newsObject = {};
  let newsBodyKR = [];
  let newsBodyENG = [];

  newsObject.titleKR = req.body.titleKR;
  newsObject.titleENG = req.body.titleENG;
  newsObject.dateKR = dateKR;
  newsObject.dateENG = dateENG;
  for (let i = 1; i <= 14; i++) {
    i <= 7
      ? newsBodyKR.push("~" + req.body[i])
      : newsBodyENG.push("~" + req.body[i]);
  }
  newsObject.bodyKR = newsBodyKR.join();
  newsObject.bodyENG = newsBodyENG.join();
  req.files.imageLarge
    ? (newsObject.imageLarge =
        req.files.imageLarge[0].destination.slice(7) +
        "/" +
        req.files.imageLarge[0].originalname)
    : (newsObject = null);
  req.files.image
    ? (newsObject.image =
        req.files.image[0].destination.slice(7) +
        "/" +
        req.files.image[0].originalname)
    : (newsObject = null);
  if (newsObject) {
    const res = await superagent
      .post("http://localhost:8080/postnews/")
      .send(newsObject)
      .set("accept", "json")
      .end((err) => console.log(err));
  } else {
    (err) => console.log(err);
  }
};
