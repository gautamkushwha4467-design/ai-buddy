const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  skills: [String],
  interests: [String],
  academicScore: Number,

  role: {
    type: String,
    enum: ["student", "mentor", "company"],
    default: "student"
  }
});

module.exports = mongoose.model("User", userSchema);
