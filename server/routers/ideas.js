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
// GET /api/ideas/:ideaId to get a single idea by id.
// PUT /api/ideas/:ideaId to update a single idea by id.
// DELETE /api/ideas/:ideaId to delete a single idea by id.

module.exports = ideasRouter;
