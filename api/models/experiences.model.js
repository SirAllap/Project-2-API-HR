const mongoose = require("mongoose");

const experience = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  company: {
    type: String,
    required: [true, "Company is required"],
  },
  duration: {
    type: String,
    required: [true, "Duration is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
});

const language = new mongoose.Schema({
  language: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "languages",
  },
  level: {
    type: String,
    enum: ["Basic", "Intermediate", "Native"],
  },
});

const experienceSchema = new mongoose.Schema({
  userCand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  skills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "skills",
    },
  ],
  experience: [experience],
  other: {
    drivingLicense: {
      type: String,
      enum: ["A1", "A2", "A", "B"],
    },
    ownCar: {
      type: String,
      enum: ["Yes", "No"],
    },
  },
  languages: [language],
  nationality: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "nationalities",
    },
  ],
});

const ExperienceModel = mongoose.model("experience", experienceSchema);
module.exports = ExperienceModel;
