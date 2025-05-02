const express = require("express");
const ideasRouter = express.Router();
//connect db.js
const db = require("../db");

//GET /api/ideas to get an array of all ideas.
ideasRouter.get("/", (req, res) => {
  const ideas = db.getAllFromDatabase("ideas");
  //   console.log("GET RESULT = ", ideas);
  if (ideas) {
    res.send(ideas);
  }
});

// POST /api/ideas to create a new idea and save it to the database.
ideasRouter.post("/", (req, res) => {
  const newIdee = {
    name: req.body.name,
    description: req.body.description,
    numWeeks: Number(req.body.numWeeks),
    weeklyRevenue: Number(req.body.weeklyRevenue),
  };

  const result = db.addToDatabase("ideas", newIdee);

  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ error: "Error adding new idee to the database." });
  }
});

// GET /api/ideas/:ideaId to get a single idea by id.
ideasRouter.get("/:ideaId", (req, res) => {
  const result = db.getFromDatabaseById("ideas", req.params.ideaId);

  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ error: "Error: Wrong idea id." });
  }
});

// PUT /api/ideas/:ideaId to update a single idea by id.
ideasRouter.put("/:ideaId", (req, res) => {
  const updateIdee = {
    id: req.params.ideaId,
    name: req.body.name,
    description: req.body.description,
    numWeeks: Number(req.body.numWeeks),
    weeklyRevenue: Number(req.body.weeklyRevenue),
  };

  const result = db.updateInstanceInDatabase("ideas", updateIdee);

  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ error: "Error updating idea in database." });
  }
});

// DELETE /api/ideas/:ideaId to delete a single idea by id.
ideasRouter.delete("/:ideaId", (req, res) => {
  const result = db.deleteFromDatabasebyId("ideas", req.params.ideaId);

  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ error: "Wrong id, idea can not be deleted." });
  }
});

module.exports = ideasRouter;
