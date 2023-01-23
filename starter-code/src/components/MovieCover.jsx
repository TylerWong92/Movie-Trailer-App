import React from "react";
import css from "./MovieCover.css";

const MovieCover = () => {
  return (
    <div className="movieCard">
      <img className="cover" src="../assets/imagetest.jpeg" />
      <div className="movieDetail">
        <h2 className="movieTitle">Title of the movie</h2>
        <h5 className="badge">8.8</h5>
        <h5 className="trending">Trending</h5>
      </div>
    </div>
  );
};

export default MovieCover;
