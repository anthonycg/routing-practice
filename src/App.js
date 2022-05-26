import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Number from "./components/Number"
import Word from "./components/Word"
import WordColorNumber from "./components/WordColorBackground"
import {BrowserRouter as Router, Switch, Route, Link} from "react-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Route exact path ="/home" component={Home}/>
          <Home />
        </Router>
      </header>
    </div>
  );
}

export default App;
