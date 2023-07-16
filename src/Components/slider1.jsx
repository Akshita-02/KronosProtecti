import React from "react";

import Image1 from "../assets/dummyImage.avif";
import Image2 from "../assets/dummyImage.avif";
import Image3 from "../assets/dummyImage.avif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BackgroundSlideShow = ({ height }) => {
  const SliderImages = [
    { image: Image1 },
    { image: Image2 },
    { image: Image3 },
  ];
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
          {SliderImages.map((image, index) => {
            return (
              <img
                key={index}
                className={`rounded-3xl w-full h-[${height}]  object-cover  transition-all`}
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

export default BackgroundSlideShow;
