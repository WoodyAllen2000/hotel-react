import React, { Component } from "react";
import Slider from "react-slick";

function Crousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
            <img src="Banner 1.png" />
        </div>
        <div>
            <img src="Banner 2.png" />
        </div>
        <div>
            <img src="Banner 3.png" />
        </div>
      </Slider>
    </div>
  );
}

export default Crousel;
