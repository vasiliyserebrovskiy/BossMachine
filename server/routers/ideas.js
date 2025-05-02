const express = require("express");
const ideasRouter = express.Router();
//connect db.js
const db = require("../db");

//Get all ideas
ideasRouter.get("/", (req, res) => {
  const ideas = db.getAllFromDatabase("ideas");
//   console.log("GET RESULT = ", ideas);
  if (ideas) {
    res.send(ideas);
  }
});

module.exports = ideasRouter;
