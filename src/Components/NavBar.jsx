import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1>Task</h1>
      <Link className="home" to="/">
        Home
      </Link>
    </div>
  );
};

export default NavBar;
