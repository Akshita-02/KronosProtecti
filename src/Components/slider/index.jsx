import React from "react";
import ImageSlider, { Slide } from "react-auto-image-slider";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Slider0 = () => {
  return (
    <div className="slider-section">
      <ImageSlider
        effectDelay={500}
        autoPlayDelay={3000}
        className="slider-container"
      >
        <Slide>
          <img
            alt="img2"
            src="https://images.unsplash.com/photo-1614627264058-f3e35e86d424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
          />
        </Slide>
        <Slide>
          <img
            alt="img2"
            src="https://images.unsplash.com/photo-1523294557-3637e1db3f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
        </Slide>
        <Slide>
          <img
            alt="img1"
            src="https://images.unsplash.com/photo-1485230405346-71acb9518d9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1794&q=80"
          />
        </Slide>
      </ImageSlider>
    </div>
  );
};

export const Slider1 = ({ height, sliderImages }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className=" w-full h-full rounded-3xl ">
        <Slider {...settings}>
          {sliderImages.map((image, index) => {
            return (
              <img
                key={index}
                className={`rounded-3xl w-full ${height}  object-cover  transition-all`}
                src={image.image}
                alt="/"
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
};
