import React from "react";
import useFetch from "./hook/useFetch";

function App() {
  const { data, loading, error, refetch } = useFetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=35358a0b33df9cdbafd8ad11d7ad3049&language=en-US&page=1"
  );
  if (loading) return <h1> LOADING... </h1>;
  if (error) console.log(error);

  return (
    <div>
      <h2>Movie App</h2>

      <button onClick={refetch}>Refetch</button>
      <h1>{data?.results.map((d) => d.title)}</h1>
    </div>
  );
}

export default App;
