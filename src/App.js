import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Number from "./components/Number"
import Word from "./components/Word"
import WordColorBackground from "./components/WordColorBackground"
import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {useParams} from "react-router";

function App() {
  return (
        <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/text/:word" element={<Word/>}></Route>
          <Route path="/:number" element={<Number/>}></Route>
          <Route path="/:word/:color1/:backgroundColor1" element={<WordColorBackground/>}></Route>
        </Routes>
        <Link to={"/about"}>Go to about</Link>

      </header>
    </div>
        </BrowserRouter>
  );
}

export default App;
