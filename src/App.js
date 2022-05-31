import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Number from "./components/Number"
import Word from "./components/Word"
import WordColorNumber from "./components/WordColorBackground"
import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

function App() {
  return (
        <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Link to={"/:word"}>Go to about</Link>
        {/* <p>
          <Link to="/home"></Link>
          <Link to="/number"></Link>
          <Link to="/word"></Link>
          <Link to="/Word/Color/BackgroundColor"></Link>
        </p>
        <Routes>
        <Route exact path ="/" component={<Home />}/>
          <Home />
        </Routes> */}
      </header>
    </div>
        </BrowserRouter>
  );
}

export default App;
