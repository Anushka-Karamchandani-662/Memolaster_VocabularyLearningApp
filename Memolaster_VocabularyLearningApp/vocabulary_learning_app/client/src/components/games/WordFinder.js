import React, { useState, useEffect, useCallback } from "react";
import "./wordfinder.css";

const WordFinder = () => {
  const [wordData, setWordData] = useState(null);
  const [msg, setMsg] = useState("");
  const [chosenLetters, setChosenLetters] = useState([]);
  const [hints, setHints] = useState(3);
  const [displayWord, setDisplayWord] = useState(false);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  console.log(wordData, chosenLetters, displayWord, wrongGuesses);
  const fetchWordData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3001/WordFinder");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const filteredData = data.filter((wordObject) => {
        return wordObject.Word && wordObject.Meaning;
      });
      //console.log(data);
      if (Array.isArray(filteredData) && filteredData.length > 0) {
        let abc = Math.floor(Math.random() * filteredData.length);
        setWordData({ ...data[abc], Word: data[abc].Word.toLowerCase() });
      } else {
        setWordData(null);
      }
    } catch (error) {
      console.error("Error fetching word data:", error);
      setWordData(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const restartGameFunction = useCallback(() => {
    fetchWordData();
    setMsg("");
    setChosenLetters([]);
    setHints(3);
    setDisplayWord(false);
    setWrongGuesses(0);
  }, [fetchWordData]);

  useEffect(() => {
    fetchWordData();
  }, [fetchWordData]);

  useEffect(() => {
    if (wrongGuesses >= 3) {
      window.alert("Game Over! You made too many wrong guesses.");
      restartGameFunction();
    }
  }, [wrongGuesses, restartGameFunction]);

  const letterSelectFunction = (letter) => {
    if (!chosenLetters.includes(letter)) {
      setChosenLetters([...chosenLetters, letter]);
      if (wordData && wordData.Word && !wordData.Word.includes(letter)) {
        setWrongGuesses(wrongGuesses + 1);
      }
    }
  };

  const hintFunction = () => {
    if (hints > 0 && wordData && wordData.Word) {
      const hiddenLetterIndex = wordData.Word.split("").findIndex(
        (letter) => !chosenLetters.includes(letter)
      );
      setChosenLetters([...chosenLetters, wordData.Word[hiddenLetterIndex]]);
      setHints(hints - 1);
    }
  };

  const removeCharacterFunction = () => {
    setChosenLetters(chosenLetters.slice(0, -1));
  };

  const displayLettersFunction = () => {
    const letters = "abcdefghijklmnopqrstuvwxyz";

    return Array.from(letters).map((letter, index) => (
      <button
        key={index}
        onClick={() => letterSelectFunction(letter)}
        disabled={chosenLetters.includes(letter)}
        className={`letter-button ${
          chosenLetters.includes(letter) ? "selected" : ""
        }`}
      >
        {letter.toUpperCase()}
      </button>
    ));
  };

  const checkWordGuessedFunction = () => {
    return (
      wordData &&
      wordData.Word &&
      wordData.Word.split("").every((letter) => chosenLetters.includes(letter))
    );
  };

  const guessFunction = () => {
    if (checkWordGuessedFunction()) {
      setMsg("Congratulations! You have guessed the word correctly!");
    } else {
      setMsg("You made a wrong guess. Try again!");
      setDisplayWord(true);
    }
  };

  return (
    <div className="super">
      <div className="container">
        {isLoading ? (
          <p>Loading...</p>
        ) : wordData && wordData.Word ? (
          <div>
            <div className="word-container">
              {Array.from(wordData.Word).map((letter, index) => (
                <div
                  key={index}
                  className={`letter ${
                    chosenLetters.includes(letter) ? "visible" : ""
                  }`}
                >
                  {chosenLetters.includes(letter) ? letter.toUpperCase() : ""}
                </div>
              ))}
            </div>
            <p className="word-description">Meaning: {wordData.Meaning}</p>
            {msg && (
              <div className="message">
                <p>{msg}</p>
                {displayWord && <p>Correct word was: {wordData.Word}</p>}
              </div>
            )}
            <div className="button-section">
              <div className="guess-section">
                <button
                  onClick={restartGameFunction}
                  className="restart-button"
                >
                  Restart
                </button>
                <button
                  onClick={removeCharacterFunction}
                  disabled={!chosenLetters.length}
                  className="remove-button"
                >
                  Remove Letter
                </button>
              </div>
              <div className="letter-selection">{displayLettersFunction()}</div>
              <div className="hints">
                Hints Remaining: {hints}{" "}
                <button
                  onClick={hintFunction}
                  disabled={hints === 0}
                  className="hint-button"
                >
                  Get Hint
                </button>
              </div>
              {!msg && (
                <button
                  onClick={guessFunction}
                  disabled={!chosenLetters.length}
                  className="guess-button"
                >
                  Guess
                </button>
              )}
            </div>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default WordFinder;
