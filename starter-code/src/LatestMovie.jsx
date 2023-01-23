import React, { useState } from "react";
import MovieCover from "./components/MovieCover";
import DisplayMovie from "./DisplayMovie";

const LatestMovie = (props) => {
  const [movieId, setMovieId] = useState(null);

  const handleHover = (id) => {
    setMovieId(id);
  };

  return (
    <div>
      <DisplayMovie id={movieId} />
      <h1>Now Playing Movie</h1>
      {props.nowPlaying?.results.map((d) => {
        return (
          <section onMouseEnter={() => handleHover(d.id)} key={d.id}>
            <div key={d.id}>
              <MovieCover
                poster={`https://image.tmdb.org/t/p/w200/${
                  d.poster_path || d.backdrop_path
                }`}
                title={d.title}
                popularity={d.popularity}
                rating={d.vote_average}
              />
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default LatestMovie;
