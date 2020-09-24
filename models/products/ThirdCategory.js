const mongoose = require("mongoose");
const { Schema } = mongoose;

const ThirdCategorySchema = new Schema({
  ThirdCategory: {
    type: String,
    required: true,
    trim: true,
  },
  ID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ThirdCategory", ThirdCategorySchema);