const mongoose = require("mongoose");
const WordFinderSchema = new mongoose.Schema({
  word: String,
  description: String,
});
const WordFinderModel = mongoose.model("beginners", WordFinderSchema); //table, schema name
module.exports = WordFinderModel;
