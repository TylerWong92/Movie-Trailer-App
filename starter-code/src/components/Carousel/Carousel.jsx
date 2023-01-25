import Slider from "react-slick";
import "./Carousel.css";
import "./CarouselTheme.css";
import React, { useState } from "react";
import MovieCover from "../MovieCover";
import { useNavigate } from "react-router-dom";

export const MovieCarousel = (props) => {
  const [movieId, setMovieId] = useState("76600");

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movieinner/${id}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider className="slider" {...settings}>
      {props.nowPlaying &&
        props.nowPlaying.results.map((d) => {
          return (
            <div key={d.id} onClick={() => handleClick(d.id)}>
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
