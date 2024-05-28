import React, { useState, useEffect, useRef } from "react";
import "./wordscramble.css";

const WordScramble = () => {
  const initialWords = [
    { word: "aboveboard", synonym: "straightforward" },
    { word: "abysmal", synonym: "awful" },
    { word: "acme", synonym: "apex" },
    { word: "balk", synonym: "hesitate" },
    { word: "catalyst", synonym: "stimulus" },
    { word: "diligent", synonym: "hardworking" },
    { word: "euphoria", synonym: "happiness" },
    { word: "foolhardy", synonym: "bold" },
    { word: "glean", synonym: "gather" },
    { word: "hound", synonym: "chase" },
    { word: "impeccable", synonym: "flawless" },
    { word: "jocular", synonym: "humorous" },
    { word: "melancholy", synonym: "depression" },
    { word: "obstinate", synonym: "stubborn" },
    { word: "paradoxical", synonym: "self-contradictory" },
    { word: "quandary", synonym: "dilemma" },
    { word: "remiss", synonym: "neglectful" },
    { word: "serene", synonym: "calm" },
    { word: "telltale", synonym: "revealing" },
    { word: "uncanny", synonym: "weird" },
    { word: "vanquish", synonym: "conquer" },
    { word: "wax", synonym: "rise" },
    { word: "whimsical", synonym: "impulsive" },
    { word: "zenith", synonym: "top/high-point" },
    { word: "muted", synonym: "toned down" },
  ];

  const [words, setWords] = useState(initialWords);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [scrambledWord, setScrambledWord] = useState([]);
  const [hint, setHint] = useState([]);
  const [guess, setGuess] = useState(
    Array(initialWords[0].word.length).fill("")
  );
  const [message, setMessage] = useState("");
  const inputRefs = useRef([]);

  useEffect(() => {
    // Set up the initial state
    const initialScramble = scrambleWord(words[currentWordIndex].word);
    setScrambledWord(initialScramble.split(""));
    setHint(Array(initialScramble.length).fill(""));
  }, [currentWordIndex, words]);

  useEffect(() => {
    // Focus on the next input when a letter is entered
    const nextIndex = guess.findIndex(
      (letter, index) => !letter && scrambledWord[index]
    );
    if (nextIndex !== -1 && inputRefs.current[nextIndex]) {
      inputRefs.current[nextIndex].focus();
    }
  }, [guess, scrambledWord]);

  const scrambleWord = (word) => {
    // Simple word scrambling logic (you can customize this further)
    const array = word.split("");
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
  };

  const handleGuessChange = (index, event) => {
    const newGuess = [...guess];
    newGuess[index] = event.target.value;
    setGuess(newGuess);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();

    const userGuess = guess.join("").toLowerCase();
    if (userGuess === words[currentWordIndex].word) {
      setMessage("That's correct!");
      // Optionally, you can handle end of the game logic here
    } else {
      setMessage("Try again!");
    }
  };

  const handleHintClick = () => {
    const currentWord = words[currentWordIndex].word;
    const hintIndex = hint.findIndex((block) => block === "");

    if (hintIndex !== -1) {
      setHint((prevHint) => {
        const newHint = [...prevHint];
        newHint[hintIndex] = currentWord[hintIndex];
        return newHint;
      });
    }
  };

  const handleNextWord = () => {
    // Reset state for the next word
    setGuess(Array(scrambledWord.length).fill(""));
    setHint(Array(scrambledWord.length).fill(""));
    setMessage("");
    setCurrentWordIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousWord = () => {
    // Reset state for the previous word
    setGuess(Array(scrambledWord.length).fill(""));
    setHint(Array(scrambledWord.length).fill(""));
    setMessage("");
    setCurrentWordIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="wordscramblebody">
      <div className="word-scramble-container">
        <h1 className="wordscrambleh1">Word Unscramble</h1>
        <div className="word-scramble-card">
          <p className="wordscramblep">
            Synonym: {words[currentWordIndex].synonym}
          </p>
          <p className="wordscramblep">
            Scrambled Word: {scrambledWord.join(" ")}
          </p>
          {scrambledWord.map((letter, index) => (
            <input
              key={index}
              ref={(input) => (inputRefs.current[index] = input)}
              type="text"
              value={guess[index] || ""}
              onChange={(event) => handleGuessChange(index, event)}
              placeholder="_"
              className="wordscrambleinput"
            />
          ))}
          <p>{hint.join("")}</p>

          {message && <p className="message">{message}</p>}
          <div className="button-container">
            <button
              onClick={handleHintClick}
              className="wordscramblehint wordscramblebutton"
            >
              Hint
            </button>
            <br />
            <br />
            <button
              onClick={handlePreviousWord}
              className="navigation prev wordscramblebutton"
            >
              Previous Word
            </button>
            <button
              onClick={handleNextWord}
              className="navigation next wordscramblebutton"
            >
              Next Word
            </button>
          </div>
          <form onSubmit={handleGuessSubmit}>
            <button type="submit" className="submit wordscramblebutton">
              Submit Guess
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WordScramble;
