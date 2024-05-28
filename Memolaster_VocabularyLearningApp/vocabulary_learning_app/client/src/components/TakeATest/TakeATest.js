import React, { Fragment } from "react";
import "./TakeATest.css";
import { Link } from "react-router-dom";

const TakeATest = () => (
  <Fragment>
    <div className="instruction">
      <h1 className="h1test">Quiz Instructions</h1>
      <ol>
        <li>You will be asked 30 questions one after the another.</li>
        <li>1 points is awarded for the correct answer</li>
        <li>Each question has four options. You can choose only one option.</li>

        <li>The result will be decleared at the end of the quiz.</li>
      </ol>
      <div>
        <span className="Quizleft">
          <Link to="/" className="linkquiz1">
            No Take Me Back
          </Link>
        </span>
        <span className="Quizright">
          <Link to="/Play" className="linkquiz2">
            Okay, Let's do this!
          </Link>
        </span>
      </div>
    </div>
  </Fragment>
);

export default TakeATest;
