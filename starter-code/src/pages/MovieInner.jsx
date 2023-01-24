import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hook/useFetch";

const MovieInner = () => {
  let navigate = useNavigate();
  // let { moviename } = useParams();

  //Fetch Now Playing Movies, pass data to <LatestMovie/>
  const { data, loading, error, refetch } = useFetch(
    `https://api.themoviedb.org/3/movie/324668?api_key=35358a0b33df9cdbafd8ad11d7ad3049&language=en-US`
  );
  if (loading) return <h1> LOADING... </h1>;
  if (error) console.log(error);

  return (
    <div>
      {data ? console.log(JSON.stringify(data)) : <h1>error</h1>}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        back to home
      </button>
      <h1>{data && data.budget}</h1>
      <div>
        {data &&
          data.genres.map((d, i) => {
            return <h1 key={i.id}>{d.name}</h1>;
          })}
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${data && data.backdrop_path}`}
      />
      <img
        src={`https://image.tmdb.org/t/p/w500/${data && data.poster_path}`}
      />
      <h1>{data && data.homepage}</h1>
      <p>{data && data.overview}</p>
      <h1>{data && data.popularity}</h1>
      <div>
        {data &&
          data.production_companies.map((d, i) => {
            return <h1 key={i.id}>{d.name}</h1>;
          })}
      </div>
      <h1>{data && data.release_date}</h1>
      <h1>{data && data.runtime}</h1>
      <h1>{data && data.status}</h1>
      <h1>{data && data.vote_average}</h1>
    </div>
  );
};

export default MovieInner;
// This is the movie content for {moviename}!