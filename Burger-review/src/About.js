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

function About() {
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
      
    </div>


    <div id="bdiv1">
    <img src={'https://c4.wallpaperflare.com/wallpaper/894/492/7/mcdonalds-burger-hd-wallpaper-preview.jpg'}
     id="main-burger" alt="Delicious-Buger"></img>
    <footer id="footer">
      I am a footer
    </footer>
    </div>
  </>
  );
}

export default About;