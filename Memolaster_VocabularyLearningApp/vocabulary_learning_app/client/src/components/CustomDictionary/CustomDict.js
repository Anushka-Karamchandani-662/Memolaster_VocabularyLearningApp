// import axios from "axios";
// import { useState } from "react";
// import ListDetails from "../ListDetails";
// import "./styles.css";

// //get css from description
// //install axios

// export default function App() {
//   const [keyWord, setKeyWord] = useState("");

//   const [result, setResult] = useState(null);

//   const api = "https://api.dictionaryapi.dev/api/v2/entries/en";

//   async function handleSearch() {
//     try {
//       const res = await axios.get(`${api}/${keyWord}`);
//       console.log(res, "res");
//       setResult(res.data[0]);
//     } catch (e) {
//       console.log({ e });
//     }
//   }

//   function handleClear() {
//     setKeyWord("");
//     setResult(null);
//   }
//   return (
//     <div>
//       {" "}
//       <h1 className="customh1">Custom Dataset</h1>
//       <div className="App">
//         <input
//           value={keyWord}
//           onChange={(e) => setKeyWord(e.target.value)}
//           className="input1"
//         />
//         <div className="customcont">
//           <button className="button" type="submit" onClick={handleSearch}>
//             Search
//           </button>
//           <button
//             disabled={!result}
//             className="buttoncust"
//             type="submit"
//             onClick={handleClear}
//           >
//             Clear
//           </button>
//           <button className="button">Add to Revision</button>
//         </div>

//         {result && <ListDetails {...{ result }} />}
//       </div>
//     </div>
//   );
// }
import axios from "axios";
import { useState } from "react";
import ListDetails from "../ListDetails";
import Recommend from "../Recommend"; // Import the Recommend component
import "./styles.css";

//get css from description
//install axios

export default function App() {
  const [keyWord, setKeyWord] = useState("");

  const [result, setResult] = useState(null);

  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";

  async function handleSearch() {
    try {
      const res = await axios.get(`${api}/${keyWord}`);
      console.log(res, "res");
      setResult(res.data[0]);
    } catch (e) {
      console.log({ e });
    }
  }

  function handleClear() {
    setKeyWord("");
    setResult(null);
  }
  return (
    <div>
      <Recommend />
      <h1 className="customh1">Custom Dataset</h1>

      <div className="App">
        <input
          value={keyWord}
          onChange={(e) => setKeyWord(e.target.value)}
          className="input1"
        />
        <div className="customcont">
          <button className="button" type="submit" onClick={handleSearch}>
            Search
          </button>
          <button
            disabled={!result}
            className="buttoncust"
            type="submit"
            onClick={handleClear}
          >
            Clear
          </button>
          <button className="button">Add to Revision</button>
        </div>
        {result && <ListDetails {...{ result }} />}
        {/* Include the Recommend component here */}
      </div>
    </div>
  );
}
