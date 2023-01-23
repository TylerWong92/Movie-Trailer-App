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
    <section className="youtube">
      {data ? (
        <iframe
          width="100%"
          height="900px"
          src={`https://www.youtube.com/embed/${movieLink[0]}?&autoplay=1&controls=0&showinfo=0&modestbranding=1&loop=1&rel=0&vq=hd720`}
        />
      ) : (
        "No Video Available"
      )}
    </section>
  );
};

export default DisplayMovie;
