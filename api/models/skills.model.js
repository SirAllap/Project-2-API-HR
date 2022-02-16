const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
  skills: {
    type: String,
    required: [true, "Skill is required"],
    unique: [true, "This skill already exists"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const SkillsModel = mongoose.model("skills", skillsSchema);
module.exports = SkillsModel;
