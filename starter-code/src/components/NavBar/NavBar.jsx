import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="header">
      <Link to="/">
        <div></div>
      </Link>
    </div>
  );
};

export default NavBar;
