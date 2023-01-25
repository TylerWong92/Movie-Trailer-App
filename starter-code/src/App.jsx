import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MovieInner from "./pages/MovieInner";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const getMovieId = (data) => {
    console.log(data);
  };

  return (
    <div className="home">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movieinner/" element={<MovieInner />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
