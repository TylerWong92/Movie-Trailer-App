import React from "react";
import MovieCover from "./components/MovieCover";
import useFetch from "./hook/useFetch";
import LatestMovie from "./components/LatestMovie";
import Upcoming from "./components/Upcoming";
import { MovieCarousel } from "./components/Carousel/Carousel";

function App() {
  const api = "35358a0b33df9cdbafd8ad11d7ad3049";

  //Fetch Now Playing Movies, pass data to <LatestMovie/>
  const { data, loading, error, refetch } = useFetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&language=en-US&page=1`
  );
  if (loading) return <h1> LOADING... </h1>;
  if (error) console.log(error);

  return (
    <div className="home">
      <h1 className="nav">header nav bar</h1>
      <LatestMovie nowPlaying={data} />
      <MovieCarousel nowPlaying={data} />
      <Upcoming />
    </div>
  );
}

export default App;
// <button onClick={refetch}>Refetch</button>
