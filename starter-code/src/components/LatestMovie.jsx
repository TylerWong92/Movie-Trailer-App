import React, { useState } from "react";
import MovieCover from "./MovieCover/MovieCover";
import DisplayMovie from "./DisplayMovie";

const LatestMovie = (props) => {
  const [movieId, setMovieId] = useState("76600");

  const handleClick = (id) => {
    setMovieId(id);
  };
  console.log(`movie id ${movieId}`);
  return (
    <div className="testing">
      <DisplayMovie id={movieId} />
      <h1 className="sectiontitle">Now Showing</h1>
      <section className="latestList">
        {props.nowPlaying?.results.map((d) => {
          return (
            <div onClick={() => handleClick(d.id)} key={d.id}>
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
