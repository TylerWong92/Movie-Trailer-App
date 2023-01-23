import React from "react";
import css from "./MovieCover.css";

const MovieCover = (props) => {
  return (
    <div className="movieCard">
      <img className="cover" src={props.poster} />
      <div className="movieDetail">
        <h2 className="movieTitle">{props.title}</h2>
        <h5 className="badge">{props.rating}</h5>
        <h5 className="trending">Trending</h5>
      </div>
    </div>
  );
};

export default MovieCover;
