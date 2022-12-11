const express = require("express");
const http = require("http");
const superagent = require("superagent");

exports.getLogin = async () => {
  try {
    let login = null;
    const res = await superagent.get(
      // "https://imtv-api.herokuapp.com/getlogin/"
      "http://localhost:8080/getlogin/"
    );
    const text = JSON.parse(res.text);

    return text;
  } catch {
    (err) => res.redirect("/update_imtv/404");
  }
};
