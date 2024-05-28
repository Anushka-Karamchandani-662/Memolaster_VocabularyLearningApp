import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar/navbar";
import TakeaTest from "./components/TakeATest/TakeATest";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Login from "./components/login";
import GetWords from "./components/GetWords";
import Signup from "./components/Signup";
import UserWords from "./components/UserWords";
import WordFinder from "./components/games/WordFinder";
import Play from "./components/TakeATest/playss/Play";
import QuizSummary from "./components/TakeATest/QuizSummary";
import GameLevel from "./components/GameLevel/GameLevel";
import WordScramble from "./components/games/WordScramble";
import Begin from "./components/GameLevel/Begin";
import Intermediate from "./components/GameLevel/Intermediate";
import Advance from "./components/GameLevel/Advance";
import CustomDict from "./components/CustomDictionary/CustomDict";
import GetIntermediateWords from "./components/GetIntermediateWords";
import UserIntermediate from "./components/UserIntermediate";
import GetAdvanceWord from "./components/GetAdvanceWord";
import UserAdvance from "./components/UserAdvance";
import Recommend from "./components/Recommend";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/takeatest" element={<TakeaTest />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/WordFinder" element={<WordFinder />} />
          <Route path="/Play" element={<Play />} />
          <Route path="/QuizSummary" element={<QuizSummary />} />
          <Route path="/GameLevel" element={<GameLevel />} />
          <Route path="/WordScramble" element={<WordScramble />} />
          <Route path="/Begin" element={<Begin />} />
          <Route path="/Intermediate" element={<Intermediate />} />
          <Route path="/Advance" element={<Advance />} />
          <Route path="/get/words" element={<GetWords />} />
          <Route path="/get/cart" element={<UserWords />} />
          <Route path="/get/intermediate" element={<GetIntermediateWords />} />
          <Route path="/customdict" element={<CustomDict />} />
          <Route path="/" element={<Home />} />
          <Route path="/get/intermediate" element={<GetIntermediateWords />} />
          <Route path="/user/intermediate" element={<UserIntermediate />} />
          <Route path="/get/advance" element={<GetAdvanceWord />} />
          <Route path="/user/advance" element={<UserAdvance />} />
          <Route path="/recommend" element={<Recommend />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
