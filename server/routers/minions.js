const express = require("express");
const minionsRouter = express.Router();
//connect db.js
const db = require("../db");

//Get all minions route
minionsRouter.get("/", (req, res) => {
  const minions = db.getAllFromDatabase("minions");
  res.send(minions);
});

module.exports = minionsRouter;
