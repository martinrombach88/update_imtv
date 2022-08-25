const express = require("express");
const http = require("http");
const superagent = require("superagent");

exports.getLogin = async () => {
  try {
    let login = null;
    const res = await superagent.get("http://localhost:8080/getlogin/");
    const text = JSON.parse(res.text);

    return text;
  } catch {
    (err) => console.log(err);
  }
};
