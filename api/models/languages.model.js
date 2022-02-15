const mongoose = require("mongoose");

const languagesSchema = new mongoose.Schema({
  language: {
    type: String,
    required: [true, "Language is required"],
    unique: [true, "This Language already exists"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const LanguagesModel = mongoose.model("languages", languagesSchema);
module.exports = LanguagesModel;
