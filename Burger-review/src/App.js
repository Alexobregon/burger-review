import logo from './logo.svg';
import './App.css';
import {  Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar";
import About from "./About";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={"https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465__340.jpg"} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
    <NavBar />
    <Routes>
      <Route exact path='/About'>
        <About />
      </Route>
    </Routes>
  </div>




  );
}

export default App;
