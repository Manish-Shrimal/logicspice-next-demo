"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Testimonials = ({ testimonialData }) => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, // Changed from 8 to 1
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {testimonialData.map((item, index) => (
            <div className="" key={index}>
              <div className="media">
                <div className="media-left">
                  <Image
                    width={120}
                    height={100}
                    className="media-object"
                    src={item.image}
                    alt={item.heading}
                  />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">{item.heading}</h4>
                  <p>
                    {item.text}
                    <a
                      style={{ cursor: "pointer", color: "#31aae1" }}
                      className="show_data"
                    >
                      More
                    </a>
                  </p>
                  <div className="author_name">
                    <p>
                      {item.name} {item.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimonials;
