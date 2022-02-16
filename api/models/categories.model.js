const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "Category is required"],
    unique: [true, "This category already exists"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const CategoriesModel = mongoose.model("categories", categoriesSchema);
module.exports = CategoriesModel;
