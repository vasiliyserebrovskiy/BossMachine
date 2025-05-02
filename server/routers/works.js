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
// PUT /api/minions/:minionId/work/:workId to update a single work by id.
// DELETE /api/minions/:minionId/work/:workId to delete a single work by id.

module.exports = worksRouter;
