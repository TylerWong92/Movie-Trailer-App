import React, { useState } from "react";
import MovieCover from "./components/MovieCover";
import DisplayMovie from "./DisplayMovie";

const LatestMovie = (props) => {
  const [movieId, setMovieId] = useState("315162");

  const handleHover = (id) => {
    setMovieId(id);
  };

  return (
    <div className="testing">
      <DisplayMovie id={movieId} />
      <h1 className="sectiontitle">Latest Showing</h1>
      <section className="latestList">
        {props.nowPlaying?.results.map((d) => {
          return (
            <div onClick={() => handleHover(d.id)} key={d.id}>
              <React.Fragment key={d.id}>
                <MovieCover
                  poster={`https://image.tmdb.org/t/p/w200/${
                    d.poster_path || d.backdrop_path
                  }`}
                  title={d.title}
                  popularity={d.popularity}
                  rating={d.vote_average}
                />
              </React.Fragment>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default LatestMovie;
