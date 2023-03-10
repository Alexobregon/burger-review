import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "20px",
  margin: "0 6px 6px",
  //background: "blue",
  textDecoration: "none",
  color: "black",
};

function Home() {
  return (

    <>

<div class="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        // activeStyle={{
        //   background: "darkblue",
        // }}
        activeStyle={{
          textDecoration: "underline"
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          textDecoration: "underline",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/rating"
        exact
        style={linkStyles}
        activeStyle={{
          textDecoration: "underline",
        }}
      >
        Rating
      </NavLink>
      
    </div>
    <div id="welcomeMessage">
    
      <h2>
        We Love Burgers and we know you will too!
      </h2>
      

    </div>
  
   <div id="bdiv">
   
    <img src={'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80'}
     id="main-burger" alt="Delicious-Buger"></img>
    </div>
    
    <footer id="footer">
      I am a footer
    </footer>
   
    
    </>
    );
}

export default Home;