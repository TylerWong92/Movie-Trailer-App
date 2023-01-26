import React, { useState } from "react";
import useFetch from "../hook/useFetch";
import { MovieCarousel } from "../components/Carousel/Carousel";
import { MovieCarouselUpcoming } from "../components/Carousel/CarouselUpcoming";
import DisplayMovie from "../components/Display/DisplayMovie";

const Homepage = () => {
  // Display Functions //
  const [videoId, setVideoId] = useState("76600");

  const handleCoverClick = (id) => {
    setVideoId(id);
  };

  const api = "35358a0b33df9cdbafd8ad11d7ad3049";

  const { data, loading, error, refetch } = useFetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&language=en-US&page=1`
  );
  if (loading) return <h1> LOADING... </h1>;
  if (error) console.log(error);

  return (
    <div className="home">
      <DisplayMovie id={videoId} />
      <MovieCarousel nowPlaying={data} handleCoverClick={handleCoverClick} />
      <MovieCarouselUpcoming handleCoverClick={handleCoverClick} />
    </div>
  );
};

export default Homepage;
