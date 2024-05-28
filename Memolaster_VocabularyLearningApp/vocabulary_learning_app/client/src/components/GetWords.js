import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./GetWords.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

function GetWords() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  console.log(data, "8");

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get-words")
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
      .post("http://localhost:3001/add-to-cart", _data)
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
        <div style={{ display: "flex", gap: "14px" }}>
          <button
            className="buttonrevise"
            onClick={() => {
              navigate("/get/cart");
            }}
          >
            Review Words
          </button>
          <button
            className="buttonlogout"
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
          <h1 className="h1words">WordBank</h1>
        </div>
      </div>

      {data &&
        data.length >= 0 &&
        data.map((item, index) => {
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

            <div class="table-container1">
              <div class="table-row1 header">
                <div class="table-cell1 head1">Word</div>
                <div class="table-cell1 head2">Meaning</div>
                <div class="table-cell1 head3">Usage</div>
                <div class="table-cell1 head4">Part of Speech</div>
                <div class="table-cell1 head5">Action</div>
              </div>

              <div class="table-row">
                <div class="table-cell1 item1">{item.Word}</div>
                <div class="table-cell1 item2">{item.Meaning}</div>
                <div class="table-cell1 item3">{item.Usage}</div>
                <div class="table-cell1 item4">{item["Part of Speech"]}</div>
                <div class="table-cell1 item5">
                  <button
                    class="add-to-cart-btn1"
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
          className="nextbutton"
          onClick={() => {
            window.location.reload();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default GetWords;
