import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(userName, password);

    const data = { name: userName, password: password };
    axios
      .post("http://localhost:3001/login", data)
      .then((res) => {
        console.log(res.data.token, 17);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userId", res.data.userId);
          navigate("/Gamelevel");
        }
      })
      .catch((err) => {
        console.log(err, 20);
      });
  };

  return (
    /*
        <div>
            <h1>Login Page</h1>
            Username -
            <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
            <br /><br />
            Password -
            <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <br /><br />
            <button onClick={handleLogin}>Submit</button>
        </div>  //first proper working without css
        */

    <div style={styles.container}>
      <h1 style={styles.heading}>Login</h1>
      <p style={styles.label}>Username -</p>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        style={styles.input}
      />
      <br />
      <br />
      <p style={styles.label}>Password -</p>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        style={styles.input}
      />
      <br />
      <br />
      <button onClick={handleLogin} style={styles.button}>
        Submit
      </button>
      <br />
      <br />
      <Link to={"/signUp"} style={styles.link}>
        Don't have an account? Sign Up
      </Link>
    </div>
  );
}

const styles = {
  container: {
    width: "800px",
    margin: "90px auto", // Center the container horizontally and set top and bottom margins to 100px
    padding: "35px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    position: "absolute",
    top: "43%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#59a4ad",
  },
  heading: {
    marginTop: "0px",
    textAlign: "center",
    color: "#FFE88A",
    // textShadow:
    //   "0 0 5px #FFD21C, 0 0 10px #FFD21C, 0 0 15px #FFD21C, 0 0 20px rgba(255, 210, 28, 0.7), 0 0 25px rgba(255, 210, 28, 0.7), 0 0 30px rgba(255, 210, 28, 0.7), 0 0 35px rgba(255, 210, 28, 0.7)",
    fontSize: "60px",
    textDecoration: "underline",
  },

  label: {
    fontSize: "25px",
    color: "#000000", // Light blue color
    fontStyle: "italic",
    padding: "5px",
    textDecoration: "underline",
  },

  input: {
    width: "calc(100% - 40px)",
    padding: "10px",
    marginBottom: "10px",
    border: "4px solid #FFD21C",
    borderRadius: "10px",
    textAlign: "center", // Center align the text
    marginLeft: "20px",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: "20px",
    backgroundColor: "#00000",
  },
  button: {
    backgroundColor: "#db3434",
    color: "#fff",
    cursor: "pointer",
    width: "calc(100% - 40px)",
    padding: "15px",
    marginBottom: "10px",
    border: "1px solid #FFD21C",
    borderRadius: "10px",
    textAlign: "center", // Center align the text
    marginLeft: "20px",
    fontSize: "20px",

    fontWeight: "bold",
  },
  link: {
    textDecoration: "none",
    color: "#db3434",
    fontSize: "20px",
    fontWeight: "bold", // Make the text bold
    textAlign: "center", // Center align the text
    marginLeft: "220px",
  },
};

export default Login;

//<Link to={"/home"}>Go to home</Link>
