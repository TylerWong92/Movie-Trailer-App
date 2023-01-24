import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieInner = () => {
  let navigate = useNavigate();
  let { moviename } = useParams();
  return (
    <div>
      This is the movie content for {moviename}!
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        back to home
      </button>
    </div>
  );
};

export default MovieInner;
