const mongoose = require("mongoose");

const roadmapSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  career: String,
  steps: [String],
  resources: [String]
});

module.exports = mongoose.model("Roadmap", roadmapSchema);
