const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const wordController = require("./controllers/wordController");
const userController = require("./controllers/userController");
const wordIntermediateController = require("./controllers/wordIntermediateController");
const wordAdvance = require("./controllers/wordAdvance");
const WordFinderModel = require("./models/WordFinder");
const recommendController = require("./controllers/recommendController");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/VocabularyLearning", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/get-words", wordController.getWords);
app.post("/signup", userController.signUp);
app.post("/login", userController.login);
app.post("/add-to-cart", userController.addToCart);
app.post("/get-user-cart", userController.getCart);
app.post("/add-to-intermediate", userController.addToIntermediate);
app.post("/get-intermediate-words", userController.getIntermediate);
app.get("/get-intermediate", wordIntermediateController.getWordss);
app.post("/add-to-advance", userController.addToAdvance);
app.post("/get-advance-words", userController.getAdvance);
app.get("/get-advance", wordAdvance.getWordsss);

app.get("/WordFinder", (req, res) => {
  WordFinderModel.find({}, { Word: 1, Meaning: 1, _id: 0 })
    .then((words) => res.json(words))
    .catch((err) => res.json(err));
});

app.get("/recommend-word", recommendController.recommendWords);

app.listen(3001, () => {
  console.log("server is running");
});
