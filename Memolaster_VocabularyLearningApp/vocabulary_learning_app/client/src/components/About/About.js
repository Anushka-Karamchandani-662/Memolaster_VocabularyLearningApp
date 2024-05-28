import React from "react";
import "./About.css";
import Aboutimage1 from "../images/Aboutpage1.png";
import Aboutimage2 from "../images/AboutPage2.png";
import Aboutimage3 from "../images/Aboutpage3.png";
import Aboutimage4 from "../images/Aboutpage4.png";
import Aboutimage5 from "../images/Aboutpage5.png";
import Aboutimage6 from "../images/Aboutpage6.png";
import Aboutimage7 from "../images/Aboutpage7.png";
function About() {
  return (
    <div>
      <div className="image-container">
        <img src={Aboutimage1} alt="About" className="Aboutimage1" />
      </div>
      <div className="image-container1">
        <img src={Aboutimage2} alt="About" className="Aboutimage2" />
      </div>
      <div className="breaker"></div>
      <div className="image-container1">
        <img src={Aboutimage3} alt="About" className="Aboutimage3" />
      </div>
      <div className="breaker"></div>
      <div className="image-container1">
        <img src={Aboutimage4} alt="About" className="Aboutimage3" />
      </div>
      <div className="breaker"></div>
      <div className="image-container1">
        <img src={Aboutimage5} alt="About" className="Aboutimage3" />
      </div>
      <div className="breaker"></div>
      <div className="image-container1">
        <img src={Aboutimage6} alt="About" className="Aboutimage3" />
      </div>
      <div className="breaker"></div>
      <div className="image-container1">
        <img src={Aboutimage7} alt="About" className="Aboutimage3" />
      </div>
      <footer className="footer">
        <p>
          <span className="left">Memolaster</span>
          <span className="right">By: Team AVST</span>
        </p>
      </footer>
    </div>
  );
}

export default About;
