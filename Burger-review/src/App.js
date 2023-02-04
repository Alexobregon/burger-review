import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div id="test">
        <ul id="top-bar">
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Navbar">NavBar</Link>
          </li>
        </ul>

        <hr id='hr'/>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Navbar">
            <NavBar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




export default App;
