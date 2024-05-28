import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserWords.css";
import "./GetWords.css";

function UserWords() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = { userId: localStorage.getItem("userId") };
    const headers = { Authorization: localStorage.getItem("token") };
    axios
      .post("http://localhost:3001/get-user-cart", data, { headers })
      .then((res) => {
        console.log(res.data, "15");
        setData(res.data.data.cart);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <br />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="buttonrevise"
            onClick={() => {
              navigate("/get/words");
            }}
          >
            Add more words
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
      <div style={{ textAlign: "center" }}>
        <h1 className="h1words h1revise">Words To Review</h1>
      </div>
      <div class="table-container1 revise1">
        <div class="table-row1 header1">
          <div class="table-cell1 head1">Word</div>
          <div class="table-cell1 head2">Meaning</div>
          <div class="table-cell1 head3">Usage</div>
          <div class="table-cell1 head4">Part of Speech</div>
        </div>
      </div>

      {data.map((item, index) => {
        return (
          /* <div style={{
                    margin:'10px',
                    background:'blue'
                }}>
                    {item.Word}
                    <br />
                    {item.Meaning}
                    <br />
                    {item.Usage}
                </div>*/

          <div class="table-container1">
            <div class="table-row1">
              <div class="table-cell1 item1">{item.Word}</div>
              <div class="table-cell1 item2">{item.Meaning}</div>
              <div class="table-cell1 item3">{item.Usage}</div>
              <div class="table-cell1 item4">{item["Part of Speech"]}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UserWords;

/*
   <button onClick={()=>{
            localStorage.clear()
            navigate('/login')
        }}>
            Logout
        </button>
*/

/*
 <div style={{ marginRight: '3px' }}>
                <h1>Word</h1>
            </div>
            <div style={{ marginLeft: '3px' }}>
                <h1>Meaning</h1>
            </div>
            <div style={{ marginLeft: '3px' }}>
                <h1>Usage</h1>
            </div>
*/
