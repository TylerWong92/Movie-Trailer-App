import Slider from "react-slick";
import "./CarouselUpcoming.css";
import "./CarouselUpcomingTheme.css";
import React, { useState } from "react";
import MovieCover from "../MovieCover/MovieCover";
import { useNavigate } from "react-router-dom";
import DisplayMovie from "../Display/DisplayMovie";
import useFetch from "../../hook/useFetch";

export const MovieCarouselUpcoming = (props) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movieinner/${id}`);
  };

  // Up Coming Movie Api //
  const { data, loading, error } = useFetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=35358a0b33df9cdbafd8ad11d7ad3049&language=en-US&page=2`
  );
  if (loading) return <h1> LOADING... </h1>;
  if (error) console.log(error);

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
    <React.Fragment>
      <Slider className="slider" {...settings}>
        <div>
          <h1 className="sectiontitle">Coming Soon</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation{" "}
          </p>
        </div>
        {data &&
          data.results.map((d) => {
            return (
              <div
                key={d.id}
                // onClick={() => handleClick(d.id)}
                onClick={() => props.handleCoverClick(d.id)}
              >
                <React.Fragment key={d.id}>
                  <MovieCover
                    poster={`https://image.tmdb.org/t/p/w200/${
                      d.poster_path || d.backdrop_path
                    }`}
                    title={d.title}
                    releaseDate={d.release_date}
                    detail={() => handleClick(d.id)}
                  />
                </React.Fragment>
              </div>
            );
          })}
      </Slider>
    </React.Fragment>
  );
};
