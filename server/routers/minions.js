const express = require("express");
const minionsRouter = express.Router();
//connect db.js
const db = require("../db");

//Get all minions
minionsRouter.get("/", (req, res) => {
  const minions = db.getAllFromDatabase("minions");
  // console.log("GET RESULT = ", minions);
  if (minions) {
    res.send(minions);
  }
});

//Post request
minionsRouter.post("/", (req, res) => {
  const salary = Number(req.body.salary);
  const newMinion = {
    name: req.body.name,
    title: req.body.title,
    weaknesses: req.body.weaknesses,
    salary: salary,
  };

  const result = db.addToDatabase("minions", newMinion);
  console.log("newMinion = ", result);
});

module.exports = minionsRouter;
