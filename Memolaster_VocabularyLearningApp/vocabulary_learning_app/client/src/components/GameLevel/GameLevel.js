import React from "react";
import { Link } from "react-router-dom";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import "./GameLevel.css";

function GameLevel() {
  return (
    <div className="images-container">
      <div className="image">
        <img src={one} alt="About" className="Gameimage1" />
        <Link to="/Begin" className="image-button">
          Beginner
        </Link>
      </div>
      <div className="image">
        <img src={two} alt="About" className="Gameimage1" />
        <Link to="/Intermediate" className="image-button">
          Intermediate
        </Link>
      </div>
      <div className="image">
        <img src={three} alt="About" className="Gameimage1" />
        <Link to="/Advance" className="image-button">
          Advanced
        </Link>
      </div>
      <div className="image">
        <img src={four} alt="About" className="Gameimage1" />
        <Link to="/customdict" className="image-button">
          Custom DataSet
        </Link>
      </div>
    </div>
  );
}

export default GameLevel;
