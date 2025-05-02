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
meetingsRouter.post("/", (req, res) => {
  const newMeeting = db.createMeeting();
  const result = db.addToDatabase("meetings", newMeeting);
  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ error: "New meeting did not created." });
  }
});
// DELETE /api/meetings to delete all meetings from the database.
meetingsRouter.delete("/", (req, res) => {
  const result = db.deleteAllFromDatabase("meetings");
  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ error: "Can not delete all meetings." });
  }
});

module.exports = meetingsRouter;
