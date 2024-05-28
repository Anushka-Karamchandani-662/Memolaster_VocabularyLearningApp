import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import quoteImage from "../images/homepage2.png";
import sampleVideo from "../images/homepagevideo5.mp4";
function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Redirect to the login page
    navigate("/login");
  };
  return (
    // <div>
    //   <img src={quoteImage} alt="Quote Vocab" className="quoteImage" />
    // </div>
    <div>
      <div className="image-container">
        <img src={quoteImage} alt="Vocab Quote" className="background-image" />
        <button className="overlay-button" onClick={handleButtonClick}>
          Start Learning
        </button>
      </div>
      <div className="breaker"></div>
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
export default Home;
//#DBF2F4
//#00E5F4
