import React, { useState } from "react";
import DisplayMovie from "./DisplayMovie";

const LatestMovie = (props) => {
  const [movieId, setMovieId] = useState(null);

  const handleHover = (id) => {
    setMovieId(id);
  };

  return (
    <div>
      <h1>Now Playing Movie</h1>

      <h1>
        {props.nowPlaying?.results.map((d) => {
          return (
            <section
              className="removelater"
              onMouseEnter={() => handleHover(d.id)}
              key={d.id}
            >
              <div key={d.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${
                    d.poster_path || d.backdrop_path
                  }`}
                  alt={d.title}
                />
                <h6>{d.title}</h6>
                <h6>{d.popularity}</h6>
                <h6>{d.vote_average}</h6>
              </div>
            </section>
          );
        })}
      </h1>
      <DisplayMovie id={movieId} />
    </div>
  );
};

export default LatestMovie;
