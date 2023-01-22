import React from "react";
import DisplayMovie from "./DisplayMovie";
import useFetch from "./hook/useFetch";
import LatestMovie from "./LatestMovie";

function App() {
  const api = "35358a0b33df9cdbafd8ad11d7ad3049";

  //Fetch Now Playing Movies, pass data to <LatestMovie/>
  const { data, loading, error, refetch } = useFetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&language=en-US&page=1`
  );
  if (loading) return <h1> LOADING... </h1>;
  if (error) console.log(error);

  return (
    <div>
      <h2>Featured Video</h2>
      <LatestMovie nowPlaying={data} />
      <button onClick={refetch}>Refetch</button>
      <DisplayMovie />
    </div>
  );
}

export default App;
