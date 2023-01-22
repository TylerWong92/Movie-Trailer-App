import React from "react";
import useFetch from "./hook/useFetch";

const DisplayMovie = (props) => {
  //Fetch Movie Trailer - 1. Hero section 2. on hover card
  const { data, loading, error, refetch } = useFetch(
    `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=35358a0b33df9cdbafd8ad11d7ad3049&language=en-US`
  );
  if (loading) return <h1> LOADING... </h1>;
  if (error) console.log(error);

  const movieLink = data?.results.map((d, i) => {
    console.log(d.key);
    return d.key;
  });
  /// key return arrays of video link, movieLink[0] display just the first video
  return (
    <div>
      {data ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${movieLink[0]}?&autoplay=1&start=190"frameborder="0" 
          allowfullscreen`}
        />
      ) : (
        "No Video Available"
      )}
    </div>
  );
};

export default DisplayMovie;
