const mongoose = require("mongoose");
const { Schema } = mongoose;

const wordSchema = new Schema({
  Word: String,
  Meaning: String,
  Usage: String,
  Part: String,
});

module.exports = mongoose.model("beginnerss", wordSchema);
