const express = require("express");
const meetingsRouter = express.Router();
//connect db.js
const db = require("../db");

//GET /api/meetings to get an array of all meetings.
meetingsRouter.get("/", (req, res) => {
  const meetings = db.getAllFromDatabase("meetings");
//   console.log("GET RESULT = ", meetings);
  if (meetings) {
    res.send(meetings);
  }
});

// POST /api/meetings to create a new meeting and save it to the database.
// DELETE /api/meetings to delete all meetings from the database.

module.exports = meetingsRouter;
