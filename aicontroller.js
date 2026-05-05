const Roadmap = require("../models/Roadmap");

exports.predictCareer = async (req, res) => {
  const { skills, interests } = req.body;

  let career = "Software Developer";

  if (skills.includes("design")) career = "UI/UX Designer";
  if (skills.includes("data")) career = "Data Scientist";

  res.json({ career });
};
