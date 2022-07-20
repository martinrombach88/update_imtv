const express = require("express");
const http = require("http");
const superagent = require("superagent");

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

exports.postNews = (req) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  let dateENG = dd + "/" + mm + "/" + +yyyy;
  let dateKR = yyyy + " " + mm + "월 " + dd;
  let newsObject = {};
  let newsBodyKR = [];
  let newsBodyENG = [];
  newsObject.image = "image";
  newsObject.imageLarge = "imageLarge";
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
  superagent
    .post("http://localhost:8080/postnews/")
    .send(newsObject)
    .set("accept", "json")
    .end((err) => console.log(err));
};
