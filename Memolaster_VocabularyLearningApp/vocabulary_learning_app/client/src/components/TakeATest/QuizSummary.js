import React, { useEffect, useState } from "react";
import "./QuizSummary.css";
import "./TakeATest.css";
import { useLocation, Link } from "react-router-dom";

function QuizSummary() {
  const location = useLocation();
  const [quizSummary, setQuizSummary] = useState({
    score: 0,
    numberofQuestion: 0,
    numberofAnsweredQuestion: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  useEffect(() => {
    console.log(location.search);

    if (location && location.search) {
      const queryParams = new URLSearchParams(location.search);

      const score = queryParams.get("score");
      const numberofQuestions = queryParams.get("numberofQuestions");
      const numberofAnsweredQuestions = queryParams.get(
        "numberofAnsweredQuestions"
      );
      const correctAnswers = queryParams.get("correctAnswers");
      const wrongAnswers = queryParams.get("wrongAnswers");

      console.log({
        score,
        numberofQuestions,
        numberofAnsweredQuestions,
        correctAnswers,
        wrongAnswers,
      });

      setQuizSummary({
        score: Math.round((score / numberofQuestions) * 100),
        numberofQuestion: numberofQuestions,
        numberofAnsweredQuestion: numberofAnsweredQuestions,
        correctAnswers: correctAnswers,
        wrongAnswers: wrongAnswers,
      });
    }
  }, [location]);

  return (
    <div className="instruction">
      <h1 className="h1test">Quiz has Ended</h1>
      <br></br>
      <h3 className="h3score">Your Score: {quizSummary.score}%</h3>
      <br></br>
      <p className="psum">Total Questions: {quizSummary.numberofQuestion}</p>
      <p className="psum">
        Answered Questions: {quizSummary.numberofAnsweredQuestion}
      </p>
      <p className="psum correct">
        Correct Answers: {quizSummary.correctAnswers}
      </p>
      <p className="psum wrong">Wrong Answers: {quizSummary.wrongAnswers}</p>

      {/* Conditional rendering based on the score */}
      {quizSummary.score <= 35 ? (
        <p className="show h3score1">Practice Beginner Level Words</p>
      ) : quizSummary.score <= 75 ? (
        <p className="show h3score1">
          Good effort, but try more intermediate level words
        </p>
      ) : (
        <p className="show h3score1">
          You'r doing great! Practice advance levels words
        </p>
      )}

      <div>
        <span className="l Quizleft">
          <Link to="/" className="linkquiz1">
            Back to Home
          </Link>
        </span>
      </div>
    </div>
  );
}

export default QuizSummary;
