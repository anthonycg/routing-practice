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
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <p>
          <Link to="/home"></Link>
          <Link to="/number"></Link>
          <Link to="/word"></Link>
          <Link to="/Word/Color/BackgroundColor"></Link>
        </p>
        <Route exact path ="/home" component={Home}/>
          <Home />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
