import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/movieinner"> Movie Inner Page </Link>
    </nav>
  );
};

export default NavBar;
