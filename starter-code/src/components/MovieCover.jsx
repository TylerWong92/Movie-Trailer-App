import React from "react";
import css from "./MovieCover.css";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const MovieCover = (props) => {
  return (
    <div className="movieCard">
      <img className="cover" src={props.poster} />
      <div className="movieDetail">
        <h2 className="movieTitle">{props.title}</h2>
        {props.rating && <h5 className="badge">{props.rating}</h5>}
        {props.popularity && <h5 className="trending">{props.popularity}</h5>}
        {props.releaseDate && (
          <h5 className="releaseDate">{props.releaseDate}</h5>
        )}
        <Link to="/movieinner"> More Detail</Link>
      </div>
    </div>
  );
};

export default MovieCover;

// () => navigate("/movieinner/")
