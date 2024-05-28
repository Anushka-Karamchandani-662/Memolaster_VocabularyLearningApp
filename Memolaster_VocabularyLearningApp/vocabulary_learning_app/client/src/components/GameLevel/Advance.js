import React from "react";
import { Link } from "react-router-dom";
import one from "./A1.png";
import two from "./A2.png";
import three from "./A3.png";

import "./GameLevel.css";

function Advance() {
  return (
    <div className="images-container">
      <div className="image">
        <img src={one} alt="About" className="Gameimage1" />
        <Link to="/WordFinder" className="image-button">
          Play
        </Link>
      </div>
      <div className="image">
        <img src={two} alt="About" className="Gameimage1" />
        <Link to="/WordScramble" className="image-button">
          Play
        </Link>
      </div>
      <div className="image">
        <img src={three} alt="About" className="Gameimage1" />
        <Link to="/get/advance" className="image-button">
          Learn
        </Link>
      </div>
    </div>
  );
}

export default Advance;
