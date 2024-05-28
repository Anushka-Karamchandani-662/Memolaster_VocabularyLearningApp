import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Recommend() {
  const navigate = useNavigate();
  const [idata, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/recommend-word")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const shuffleArray = (array) => {
    if (!array || array.length === 0) return [];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <style>{`
        .container1 {
          max-width: 100%;
          margin: 0 auto;
          padding: 20px;
          position: fixed;
          top: 112px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #DDECED;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          z-index: 1000; /* Ensure it's above other content */
          width: 100%;
          text-align: center;
        }

        .container2 {
          max-width: 100%;
          margin: 0 auto;
          padding: 20px;
          position: fixed;
          top: 112px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #DDECED;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          width: 100%;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .list {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        .list th, .list td {
          padding: 10px;
          border-bottom: 1px solid #ccc;
          text-align: left;
        }

        .list th {
          background-color: #3939e0;
          color: white;
        }

        .buttonre {
          background-color:  #DDECED;
          color: black;
          padding: 10px 20px;
          border: 3px solid #59A4AD;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          text-decoration: none;
          margin-right: 10px;
          margin-top:-10px;
        }

        .text-center {
          text-align: center;
        }

        .word {
          font-size: 24px; /* Change the font size as needed */
          font-style: italic; /* Make the text italic */
          padding: 10px 20px; 
          margin-left:-10px;
        }
        .word1 {
          font-size: 24px; /* Change the font size as needed */
          font-style: italic; /* Make the text italic */
          padding: 10px 20px; 
        }
      `}</style>

      <div className="container2">
        {idata.length > 0 && (
          <>
            <p className="word1">Recommendated Word for GRE:</p>
            {shuffleArray(idata).map((item, index) => (
              <p key={index} className="word">
                {item.Words}
              </p>
            ))}
            <button
              className="buttonre"
              onClick={() => window.location.reload()}
            >
              Next
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Recommend;
