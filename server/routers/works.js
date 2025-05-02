const express = require("express");
const worksRouter = express.Router({ mergeParams: true });

//connect db.js
const db = require("../db");

// GET /api/minions/:minionId/work to get an array of all work for the specified minion.
worksRouter.get("/", (req, res) => {
  const minionId = req.params.minionId;
  const works = db
    .getAllFromDatabase("work")
    .filter((work) => work.minionId === minionId);

  if (works) {
    res.send(works);
  } else {
    res.status(404).send({ error: "No works found" });
  }
});

// POST /api/minions/:minionId/work to create a new work object and save it to the database.
worksRouter.post("/", (req, res) => {
  const minionId = req.params.minionId;
  const hours = Number(req.body.hours);
  const newWork = {
    title: req.body.title,
    description: req.body.description,
    hours: hours,
    minionId: minionId,
  };

  const result = db.addToDatabase("work", newWork);

  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ error: "Error adding new work to the database." });
  }
});
// PUT /api/minions/:minionId/work/:workId to update a single work by id.
worksRouter.put("/:workId", (req, res) => {
  const minionId = req.params.minionId;
  const hours = Number(req.body.hours);
  const updatedWork = {
    id: req.params.workId,
    title: req.body.title,
    description: req.body.description,
    hours: hours,
    minionId: minionId,
  };

  const result = db.updateInstanceInDatabase("work", updatedWork);

  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ error: "Error updating work in the database." });
  }
});
// DELETE /api/minions/:minionId/work/:workId to delete a single work by id.
worksRouter.delete("/:workId", (req, res) => {
  const result = db.deleteFromDatabasebyId("work", req.params.workId);

  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ error: "Wrong id, work can not be deleted." });
  }
});

module.exports = worksRouter;
