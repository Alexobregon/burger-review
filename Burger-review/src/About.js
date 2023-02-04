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
    <div>
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

    
  <div>
  <h2>This is my about component!!</h2>
  </div>
  </>
  );
}

export default About;