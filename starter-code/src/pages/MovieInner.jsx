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
  // 536554

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        back to home
      </button>
      <div className="containertop">
        <div className="col">
          <img
            className="movieCover"
            src={`https://image.tmdb.org/t/p/w500/${data && data.poster_path}`}
          />
        </div>
        <div className="col">
          <div className="genres">
            {data &&
              data.genres.map((d, i) => {
                return <h1 key={i.id}>{d.name}</h1>;
              })}
          </div>
          <h1>{data && data.original_title}</h1>
          <h1>{data && data.popularity}</h1>
          <h1>{data && data.vote_average}</h1>
          <h1>{data && data.status}</h1>
          <h1>{data && data.release_date}</h1>
          <p>{data && data.overview}</p>
          <h1>{data && data.homepage}</h1>
        </div>
      </div>
      <div className="mainwrap">
        <div className="col1"></div>

        <div className="col2"></div>
      </div>

      {data ? console.log(JSON.stringify(data)) : <h1>error</h1>}

      <img
        src={`https://image.tmdb.org/t/p/w500/${data && data.backdrop_path}`}
      />

      <div>
        {data &&
          data.production_companies.map((d, i) => {
            return <h1 key={i.id}>{d.name}</h1>;
          })}
      </div>
    </div>
  );
};

export default MovieInner;
