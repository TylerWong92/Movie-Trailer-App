import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/"> Home </Link>
    </nav>
  );
};

export default NavBar;
// <Link to="/movieinner"> Movie Inner Page </Link>
