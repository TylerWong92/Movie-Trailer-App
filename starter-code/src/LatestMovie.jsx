import React from "react";

const LatestMovie = (props) => {
  return (
    <div>
      <h1>Now Playing Movie</h1>

      <h1>
        {props.nowPlaying?.results.map((d) => {
          return (
            <section className="removelater" key={d.id}>
              <div key={d.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${
                    d.poster_path || d.backdrop_path
                  }`}
                  alt={d.title}
                />
                <h2>{d.title}</h2>
                <h2>{d.popularity}</h2>
                <h2>{d.vote_average}</h2>
                {d.id}
              </div>
            </section>
          );
        })}
      </h1>
    </div>
  );
};

export default LatestMovie;
