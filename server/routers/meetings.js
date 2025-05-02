const express = require("express");
const meetingsRouter = express.Router();
//connect db.js
const db = require("../db");

//Get all meetings
meetingsRouter.get("/", (req, res) => {
  const meetings = db.getAllFromDatabase("meetings");
//   console.log("GET RESULT = ", meetings);
  if (meetings) {
    res.send(meetings);
  }
});

module.exports = meetingsRouter;
