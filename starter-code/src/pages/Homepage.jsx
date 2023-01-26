import React from "react";
import useFetch from "../hook/useFetch";
import Upcoming from "../components/Upcoming";
import { MovieCarousel } from "../components/Carousel/Carousel";
import { MovieCarouselUpcoming } from "../components/Carousel/CarouselUpcoming";

const Homepage = () => {
  const api = "35358a0b33df9cdbafd8ad11d7ad3049";

  const { data, loading, error, refetch } = useFetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&language=en-US&page=1`
  );
  if (loading) return <h1> LOADING... </h1>;
  if (error) console.log(error);

  return (
    <div className="home">
      <MovieCarousel nowPlaying={data} />
      <MovieCarouselUpcoming nowPlaying={data} />
      <Upcoming />
    </div>
  );
};

export default Homepage;
