const express = require("express");
const minionsRouter = express.Router();
//connect db.js
const db = require("../db");

//Route for minions works
const worksRouter = require("./works");

minionsRouter.use("/:minionId/work", worksRouter);

//GET /api/minions to get an array of all minions.
minionsRouter.get("/", (req, res) => {
  const minions = db.getAllFromDatabase("minions");
  if (minions) {
    res.send(minions);
  } else {
    res.status(404).send({ error: "No minions found" });
  }
});

//POST /api/minions to create a new minion and save it to the database.
minionsRouter.post("/", (req, res) => {
  const salary = Number(req.body.salary);

  const newMinion = {
    name: req.body.name,
    title: req.body.title,
    weaknesses: req.body.weaknesses,
    salary: salary,
  };

  const result = db.addToDatabase("minions", newMinion);
  res.send(result);
});

// GET /api/minions/:minionId to get a single minion by id.
minionsRouter.get("/:minionId", (req, res) => {
  console.log("id = ", req.params.minionId);
  const minionId = req.params.minionId;
  const result = db.getFromDatabaseById("minions", minionId);
  console.log("Minion: ", result);
  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ error: "Wrong minionId" });
  }
});

// PUT /api/minions/:minionId to update a single minion by id.
// DELETE /api/minions/:minionId to delete a single minion by id.

module.exports = minionsRouter;
