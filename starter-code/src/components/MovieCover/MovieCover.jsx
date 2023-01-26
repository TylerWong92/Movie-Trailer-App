import React from "react";
import css from "./MovieCover.css";
import { useNavigate } from "react-router-dom";

const MovieCover = (props) => {
  return (
    <div className="movieCard">
      {props.rating && <h5 className="badge">{props.rating}</h5>}
      <img className="cover" src={props.poster} />
      <div className="movieDetail">
        <h2 className="movieTitle">{props.title}</h2>

        {props.popularity && (
          <h5 className="trending">{`${Math.ceil(props.popularity)}`}</h5>
        )}
        {props.releaseDate && (
          <h5 className="releaseDate">Coming Soon: {props.releaseDate}</h5>
        )}
        <button class="button-17" role="button" onClick={props.detail}>
          view
        </button>
      </div>
    </div>
  );
};

export default MovieCover;

// () => navigate("/movieinner/")
