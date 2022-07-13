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
        newsList.push(newItem);
      }
    } else {
      newsList = null;
    }
    return newsList;
  } catch {
    (err) => console.log(err);
  }
};
