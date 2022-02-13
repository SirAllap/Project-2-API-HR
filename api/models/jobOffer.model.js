const mongoose = require("mongoose");

const language = new mongoose.Schema({
  language: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "languages",
  },
  level: {
    type: String,
    enum: ["Basic", "Intermediate", "Native"],
    required: [true, "Level of the language is required"]
  },
});

const jobOfferSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  company: {
    type: String,
    required: [true, "Company is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  skills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "skills",
      required: [true, "Skills are required"],
    },
  ],
  languages: [language],
  requisitions: {
    type: String,
  },
  workModel: {
    type: String,
    enum: ["Remote", "Hybrid", "Office"],
    required: [true, "Work model is required"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  salary: {
    type: String,
    required: [true, "Salary is required"],
  },
  // Category: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "categories",
  //     required: [true, "Categories are required"],
  //   },
  // ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    immutable: true,
  },
  postCreatedDate: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
});

const JobOfferModel = mongoose.model("jobOffer", jobOfferSchema);
module.exports = JobOfferModel;
