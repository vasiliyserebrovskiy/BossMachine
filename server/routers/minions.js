const express = require("express");
const minionsRouter = express.Router();
//connect db.js
const db = require("../db");

//Route for minion works
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
  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ error: "Error adding minion to the database" });
  }
});

// GET /api/minions/:minionId to get a single minion by id.
minionsRouter.get("/:minionId", (req, res) => {
  const minionId = req.params.minionId;
  const result = db.getFromDatabaseById("minions", minionId);

  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ error: "Error: Wrong minion id." });
  }
});

// PUT /api/minions/:minionId to update a single minion by id.
minionsRouter.put("/:minionId", (req, res) => {
  const salary = Number(req.body.salary);

  const updatedMinion = {
    id: req.params.minionId,
    name: req.body.name,
    title: req.body.title,
    weaknesses: req.body.weaknesses,
    salary: salary,
  };

  const result = db.updateInstanceInDatabase("minions", updatedMinion);

  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ error: "Error updating minion in the database" });
  }
});

// DELETE /api/minions/:minionId to delete a single minion by id.
minionsRouter.delete("/:minionId", (req, res) => {
  const minionId = req.params.minionId;

  const result = db.deleteFromDatabasebyId("minions", minionId);

  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ error: "Wrong id, minion can not be deleted." });
  }
});

module.exports = minionsRouter;
