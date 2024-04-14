import React from "react";
import { data } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Comments = () => {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 5000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 838,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 654,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
    // <div className="grid md:grid-cols-3 justify-items-center md:mx-10 items-center m-auto e py-5 gap-2">
    <Slider {...settings} className="px-5 md:px-10 m-auto py-5 overflow-hidden">
      {data.map((testimonial, index) => (
        <div key={index} className="bg-gray-200 p-10 px-10">
          <div className="name-img flex items-center">
            <div className="image rounded-full overflow-hidden mr-4">
              <img
                src={testimonial.image}
                alt=""
                className="object-cover w-20 h-20 md:w-24 md:h-24"
              />
            </div>
            <div className="name">
              <h4 className="capitalize">{testimonial.name}</h4>
              <p className="text-sm">{testimonial.job}</p>
            </div>
          </div>
          <div className="text py-5">
            <p className="text-sm text-black tracking-wide">
              {testimonial.text}
            </p>
          </div>
        </div>
      ))}
    </Slider>
    // </div>
  );
};

export default Comments;
