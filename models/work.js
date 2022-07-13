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
