const express = require("express");
const http = require("http");
const superagent = require("superagent");

exports.getNews = async () => {
  try {
    const res = await superagent.get("http://localhost:8080/getnews/");
    const text = JSON.parse(res.text);
    return text.newsItems;
  } catch {
    (err) => console.log(err);
  }
};
