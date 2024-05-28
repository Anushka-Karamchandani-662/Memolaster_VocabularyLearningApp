import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./GetWords.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

function GetIntermediateWords() {
  const navigate = useNavigate();

  const [idata, setData] = useState([]);
  console.log(idata, "8");

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get-intermediate")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddToCart = (productId) => {
    const _productId = productId;
    const userId = localStorage.getItem("userId");

    console.log({ productId: _productId, userId });
    const _data = { productId: _productId, userId };
    axios
      .post("http://localhost:3001/add-to-intermediate", _data)
      .then((res) => {
        console.log(res.data, "49");
        if (res.data.code == 200) {
          setRefresh(!refresh);

          const notification = document.createElement("div");
          notification.classList.add("notification");
          notification.textContent = "Added Succesfully";
          document.body.appendChild(notification);

          // Remove pop-up notification after 2 seconds
          setTimeout(() => {
            notification.remove();
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err, "30");
      });
  };

  return (
    <div>
      <br />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              backgroundColor: "orange",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              textDecoration: "none",
              marginTop: "200px",
            }}
            onClick={() => {
              navigate("/user/intermediate");
            }}
          >
            Review Words
          </button>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div class="table-container">
        <div style={{ textAlign: "center" }}>
          <h1>Revise?</h1>
        </div>
      </div>

      {idata &&
        idata.length >= 0 &&
        idata.map((item, index) => {
          return (
            /*<div style={{
                            margin:'10px',
                            background:'pink'
                        }}>
                            Word: {item.Word}
                            <br />
                            Meaning: {item.Meaning}
                            <br />
                            Usage: {item.Usage}
                            <br />
                            <button onClick={()=>{
                                handleAddToCart(item._id)
                            }}>Add to cart</button>
                        </div>*/

            <div class="table-container">
              <div class="table-row header">
                <div class="table-cell">Word</div>
                <div class="table-cell">Meaning</div>
                <div class="table-cell">Usage</div>
                <div class="table-cell">Part of Speech</div>
                <div class="table-cell">Synonyms</div>
                <div class="table-cell">Mneumonics</div>
                <div class="table-cell">Action</div>
              </div>

              <div class="table-row">
                <div class="table-cell">{item.Word}</div>
                <div class="table-cell">{item.Meaning}</div>
                <div class="table-cell">{item.Usage}</div>
                <div class="table-cell">{item["Parts of Speech"]}</div>
                <div class="table-cell">{item.Synonyms}</div>
                <div class="table-cell">{item.Mneumonics}</div>
                <div class="table-cell">
                  <button
                    class="add-to-cart-btn"
                    onClick={() => {
                      handleAddToCart(item._id);
                    }}
                  >
                    Add to Revise Later
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            backgroundColor: "#3939e0",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
          onClick={() => {
            window.location.reload();
          }}
        >
          Next
        </button>
      </div>
      <Link to={"/get/words"}>beginner</Link>
      <Link to={"/get/advance"}>Advanced</Link>
    </div>
  );
}

export default GetIntermediateWords;

/*   return (
                        <div style={{
                            display: 'table',
                            borderCollapse: 'collapse',
                            width: '100%',
                        }}>
                            <div style={{
                                display: 'table-row',
                                backgroundColor: '#f2f2f2',
                                fontWeight: 'bold',
                            }}>
                                <div style={{
                                    display: 'table-cell',
                                    padding: '8px',
                                    border: '1px solid #dddddd',
                                }}>Word</div>
                                <div style={{
                                    display: 'table-cell',
                                    padding: '8px',
                                    border: '1px solid #dddddd',
                                }}>Meaning</div>
                                <div style={{
                                    display: 'table-cell',
                                    padding: '8px',
                                    border: '1px solid #dddddd',
                                }}>Usage</div>
                            </div>
                            <div style={{
                                display: 'table-row',
                                borderBottom: '1px solid #dddddd',
                            }}>
                                <div style={{
                                    display: 'table-cell',
                                    padding: '8px',
                                    border: '1px solid #dddddd',
                                }}>{item.Word}</div>
                                <div style={{
                                    display: 'table-cell',
                                    padding: '8px',
                                    border: '1px solid #dddddd',
                                }}>{item.Meaning}</div>
                                <div style={{
                                    display: 'table-cell',
                                    padding: '8px',
                                    border: '1px solid #dddddd',
                                }}>{item.Usage}</div>
                            </div>
                        </div>
                    )
                    */
