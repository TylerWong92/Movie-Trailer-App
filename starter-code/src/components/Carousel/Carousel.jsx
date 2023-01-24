import Slider from "react-slick";
import "./Carousel.css";
import "./CarouselTheme.css";
import React, { useState } from "react";
import DisplayMovie from "../DisplayMovie";
import MovieCover from "../MovieCover";

export const MovieCarousel = (props) => {
  const [movieId, setMovieId] = useState("76600");

  const handleClick = (id) => {
    setMovieId(id);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <Slider {...settings}>
      {props.nowPlaying?.results.map((d) => {
        return (
          <div onClick={() => handleClick(d.id)} key={d.id}>
            <React.Fragment key={d.id}>
              <MovieCover
                poster={`https://image.tmdb.org/t/p/w200/${
                  d.poster_path || d.backdrop_path
                }`}
                title={d.title}
                popularity={d.popularity}
                rating={d.vote_average}
              />
            </React.Fragment>
          </div>
        );
      })}
    </Slider>
  );
};
