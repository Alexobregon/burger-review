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

function Rating() {
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

    <p>
            This is where reviews will go
        </p>
   
    
    <footer id="footer">
      I am a footer
    </footer>
   
  </>
  );
}

export default Rating;