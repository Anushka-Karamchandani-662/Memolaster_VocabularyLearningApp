const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  password: String,
  age: String,
  exam: String,
  cart: [{ type: Schema.Types.ObjectId, ref: "beginnerss" }],
  cartTwo: [{ type: Schema.Types.ObjectId, ref: "intermediate" }],
  cartThree: [{ type: Schema.Types.ObjectId, ref: "advanced" }],
});

module.exports = mongoose.model("users", userSchema);
