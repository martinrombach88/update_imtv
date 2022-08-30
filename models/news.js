const express = require("express");
const http = require("http");
const superagent = require("superagent");

exports.getNews = async () => {
  try {
    let newsList = [];
    const res = await superagent.get("https://imtv-api.herokuapp.com/getnews/");
    const text = JSON.parse(res.text);
    if (text.newsItems) {
      for (let item of text.newsItems) {
        let newItem = {
          id: item.id,
          bodyKR1: item.bodyKR1 ? item.bodyKR1 : "",
          bodyKR2: item.bodyKR2 ? item.bodyKR2 : "",
          bodyKR3: item.bodyKR3 ? item.bodyKR3 : "",
          bodyKR4: item.bodyKR4 ? item.bodyKR4 : "",
          bodyKR5: item.bodyKR5 ? item.bodyKR5 : "",
          bodyKR6: item.bodyKR6 ? item.bodyKR6 : "",
          bodyKR7: item.bodyKR7 ? item.bodyKR7 : "",
          bodyENG1: item.bodyENG1 ? item.bodyENG1 : "",
          bodyENG2: item.bodyENG2 ? item.bodyENG2 : "",
          bodyENG3: item.bodyENG3 ? item.bodyENG3 : "",
          bodyENG4: item.bodyENG4 ? item.bodyENG4 : "",
          bodyENG5: item.bodyENG5 ? item.bodyENG5 : "",
          bodyENG6: item.bodyENG6 ? item.bodyENG6 : "",
          bodyENG7: item.bodyENG7 ? item.bodyENG7 : "",
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

exports.getNewsItem = async (id) => {
  try {
    let newsItem = null;
    const res = await superagent.get(
      "https://imtv-api.herokuapp.com/getnewsitem/" + id
    );
    const text = JSON.parse(res.text);
    if (text.newsItem) {
      newsItem = {
        id: text.newsItem[0].id,
        bodyKR1: text.newsItem[0].bodyKR1,
        bodyKR2: text.newsItem[0].bodyKR2,
        bodyKR3: text.newsItem[0].bodyKR3,
        bodyKR4: text.newsItem[0].bodyKR4,
        bodyKR5: text.newsItem[0].bodyKR5,
        bodyKR6: text.newsItem[0].bodyKR6,
        bodyKR7: text.newsItem[0].bodyKR7,
        bodyENG1: text.newsItem[0].bodyENG1,
        bodyENG2: text.newsItem[0].bodyENG2,
        bodyENG3: text.newsItem[0].bodyENG3,
        bodyENG4: text.newsItem[0].bodyENG4,
        bodyENG5: text.newsItem[0].bodyENG5,
        bodyENG6: text.newsItem[0].bodyENG6,
        bodyENG7: text.newsItem[0].bodyENG7,
        dateENG: text.newsItem[0].dateENG,
        dateKR: text.newsItem[0].dateKR,
        image: text.newsItem[0].image,
        imageLarge: text.newsItem[0].imageLarge,
        titleENG: text.newsItem[0].titleENG,
        titleKR: text.newsItem[0].titleKR,
      };
      return newsItem;
    } else {
      newsItem = null;
    }
  } catch {
    (err) => console.log(err);
  }
};

exports.sendNews = async (req, res, url, format) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  let dateENG = dd + "/" + mm + "/" + +yyyy;
  let dateKR = yyyy + " " + mm + "월 " + dd + "일";
  let newsObject = {};
  let newsBodyKR = [];
  let newsBodyENG = [];

  if (format === "update") {
    newsObject.id = req.body.id;
    newsObject.titleKR = req.body.titleKR;
    newsObject.titleENG = req.body.titleENG;
    newsObject.dateKR = dateKR;
    newsObject.dateENG = dateENG;
    for (let i = 1; i <= 14; i++) {
      i <= 7 ? (newsObject[i] = req.body[i]) : (newsObject[i] = req.body[i]);
    }
    req.body.inProduction
      ? (newsObject.inProduction = req.body.inProduction)
      : (newsObject.inProduction = "0");
  } else if (format === "add") {
    newsObject.titleKR = req.body.titleKR;
    newsObject.titleENG = req.body.titleENG;
    newsObject.dateKR = dateKR;
    newsObject.dateENG = dateENG;
    for (let i = 1; i <= 14; i++) {
      i <= 7 ? (newsObject[i] = req.body[i]) : (newsObject[i] = req.body[i]);
    }
    req.files.imageLarge
      ? (newsObject.imageLarge = req.files.imageLarge[0].link)
      : "''";
    req.files.image ? (newsObject.image = req.files.image[0].link) : "''";
    req.body.inProduction
      ? (newsObject.inProduction = req.body.inProduction)
      : (newsObject.inProduction = "0");
  } else {
    newsObject = null;
  }

  if (newsObject) {
    const res = await superagent
      .post(url)
      .send(newsObject)
      .set("accept", "json")
      .end();
  }
};

exports.deleteNews = async (id) => {
  let idObject = {};
  id ? (idObject.id = id) : (idObject.id = null);
  if (idObject.id) {
    const res = await superagent
      .post("https://imtv-api.herokuapp.com/deletenews/")
      .send(idObject)
      .set("accept", "json")
      .end();
  }
};
