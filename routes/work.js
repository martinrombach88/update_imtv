const express = require("express");

const workController = require("../controllers/work");
const router = express.Router();

router.get("/work", workController.getWork);
module.exports = router;
