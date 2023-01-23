import React, { useState } from "react";
import MovieCover from "./MovieCover";
import useFetch from "../hook/useFetch";

const LatestMovie = () => {
  const { data, loading, error, refetch } = useFetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=35358a0b33df9cdbafd8ad11d7ad3049&language=en-US&page=2`
  );
  if (loading) return <h1> LOADING... </h1>;
  if (error) console.log(error);

  return (
    <div className="testing2">
      <h1 className="sectiontitle">Upcoming</h1>
      <section className="latestList">
        {data?.results.map((d) => {
          return (
            <div onClick={() => handleHover(d.id)} key={d.id}>
              <React.Fragment key={d.id}>
                <MovieCover
                  poster={`https://image.tmdb.org/t/p/w200/${
                    d.poster_path || d.backdrop_path
                  }`}
                  title={d.title}
                  releaseDate={d.release_date}
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
