import React from "react";
import useFetch from "./hook/useFetch";

const DisplayMovie = () => {
  //Fetch Movie Trailer - 1. Hero section 2. on hover card
  const { data, loading, error, refetch } = useFetch(
    `https://api.themoviedb.org/3/movie/361743/videos?api_key=35358a0b33df9cdbafd8ad11d7ad3049&language=en-US`
  );
  if (loading) return <h1> LOADING... </h1>;
  if (error) console.log(error);

  const movieLink = data?.results.map((d, i) => {
    return d.key;
  });
  console.log(movieLink);
  return (
    <div>
      {data ? (
        <iframe
          src={`https://www.youtube.com/embed/${movieLink[0]}?autoplay=1`}
        />
      ) : (
        "No Video Available"
      )}
    </div>
  );
};

export default DisplayMovie;
