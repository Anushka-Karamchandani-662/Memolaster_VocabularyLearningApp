import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [exam, setExam] = useState("");

  const handleSignup = () => {
    console.log(userName, password, age, exam);

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const data = { name: userName, password: password, age: age, exam: exam };
    axios
      .post("http://localhost:3001/signup", data)
      .then((res) => {
        console.log(res.data.token, 17);
        if (res.data.code == 200) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err, 20);
      });
  };

  return (
    /*<div>
            <h1>Signup Page</h1>
            Username -
            <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
            <br /><br />
            Password -
            <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <br /><br />
            <button onClick={handleSignup}>Submit</button>
        </div>
        */

    <div style={styles.container}>
      <h1 style={styles.heading}>SignUp</h1>
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
      <p style={styles.label}>Confirm Password -</p>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
        style={styles.input}
      />
      <br />
      <br />
      <p style={styles.label}>Age -</p>
      <input
        type="number"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
        style={styles.input}
      />
      <br />
      <br />
      <p style={styles.label}>Are you taking any exam?</p>
      <select
        value={exam}
        onChange={(e) => setExam(e.target.value)}
        style={styles.input1}
      >
        <option value="">Select</option>
        <option value="GRE">GRE</option>
        <option value="TOEFL">TOEFL</option>
        <option value="No">No</option>
      </select>
      <br />
      <br />
      <button onClick={handleSignup} style={styles.button}>
        Submit
      </button>
      <br />
      <br />
      <Link to={"/login"} style={styles.link}>
        Already have an account? Login here
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
    top: "68%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#59a4ad",
  },
  heading: {
    marginTop: "-10px",
    textAlign: "center",
    color: "#013900",
    // textShadow:
    // "0 0 5px #038600, 0 0 10px #038600, 0 0 15px #038600, 0 0 20px rgba(3, 134, 0, 0.7), 0 0 25px rgba(3, 134, 0, 0.7), 0 0 30px rgba(3, 134, 0, 0.7), 0 0 35px rgba(3, 134, 0, 0.7)",
    fontSize: "50px",
    textDecoration: "underline",
  },

  label: {
    fontSize: "20px",
    color: "#000000", // Light blue color
    fontStyle: "italic",
    padding: "5px",
    textDecoration: "underline",
  },
  input: {
    width: "calc(100% - 40px)",
    padding: "10px",
    marginBottom: "10px",
    border: "3px solid  #038600",
    borderRadius: "10px",
    textAlign: "center", // Center align the text
    marginLeft: "20px",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: "20px",
  },
  input1: {
    width: "calc(100% - 40px)",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid  #038600",
    borderRadius: "10px",
    textAlign: "center", // Center align the text
    marginLeft: "20px",

    fontWeight: "bold",
    fontSize: "20px",
    backgroundColor: "#FFB000",
  },
  button: {
    backgroundColor: "#db3434",
    color: "#fff",
    cursor: "pointer",
    width: "calc(100% - 40px)",
    padding: "15px",
    marginBottom: "10px",
    border: "1px solid  #038600",
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

export default Signup;

//<Link to={"/home"}>Go to home</Link>
