import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { useParams } from "react-router-dom";

const MovieInner = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  console.log(`${id} params pass from carousel`);
  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=35358a0b33df9cdbafd8ad11d7ad3049&language=en-US`
  );
  if (loading) return <h1> LOADING... </h1>;
  if (error) console.log(error);

  return (
    <div className="mainwrapper">
      <div className="wrapper">
        <button
          className="back-button"
          onClick={() => {
            navigate("/");
          }}
        >
          &lsaquo;
        </button>
        <img
          src={`https://image.tmdb.org/t/p/original/${
            data && data.backdrop_path
          }`}
          className="cover-img"
        />
      </div>
      <div className="grid-box">
        <section className="grid">
          <div className="col">
            <img
              className="movieCover"
              src={`https://image.tmdb.org/t/p/w500/${
                data && data.poster_path
              }`}
            />
          </div>
          <div className="col">
            <h5 className="state">{data && data.status}</h5>
            <h5>{data && data.release_date}</h5>

            <h1 className="title">{data && data.original_title}</h1>
            <p className="content">{data && data.overview}</p>
            <div className="genres">
              {data &&
                data.genres.map((d, i) => {
                  return (
                    <div className="genres" key={i.id}>
                      {d.name}
                    </div>
                  );
                })}
            </div>
            <h1 className="tag">{data && data.vote_average}</h1>
            <div className="companieswrap">
              {data &&
                data.production_companies.map((d, i) => {
                  return (
                    <h5 className="companies" key={i.id}>
                      {d.name}
                    </h5>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MovieInner;
