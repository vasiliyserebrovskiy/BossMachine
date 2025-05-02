const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;

  // Check if weeks and revenue is aNumbers
  const weeks = Number(numWeeks);
  const revenue = Number(weeklyRevenue);

  if (!weeks || !revenue || isNaN(weeks) || isNaN(revenue)) {
    return res.status(400).send("Invalid input for numWeeks or weeklyRevenue");
  }

  const value = weeks * revenue;

  if (value >= 1000000) {
    next();
  } else {
    res.status(400).send("Idea is not worth at least one million dollars!");
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
