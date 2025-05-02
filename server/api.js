const express = require("express");
const apiRouter = express.Router();
// Use morgan for logging
const morgan = require("morgan");

apiRouter.use(morgan("dev"));

//import main routers files for minions, ideas and meetings entity
const minionsRouter = require("./routers/minions");
const ideasRouter = require("./routers/ideas");
const meetingsRouter = require("./routers/meetings");
// const worksRouter = require("./routers/works");

//use our routers
apiRouter.use("/minions", minionsRouter);
apiRouter.use("/ideas", ideasRouter);
apiRouter.use("/meetings", meetingsRouter);
// apiRouter.use("/minions/:minionId/work", worksRouter);

module.exports = apiRouter;
