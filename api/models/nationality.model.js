const mongoose = require("mongoose");

const nationalitySchema = new mongoose.Schema({
  nationality: {
    type: String,
    required: [true, "Nationality is required"],
    unique: [true, "This nationality already exist"],
  },
});

const NationalitiesModel = mongoose.model("nationalities", nationalitySchema);
module.exports = NationalitiesModel;
