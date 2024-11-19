"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const BlogSliderDynamic = ({ blogData, blogImagePath }) => {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024, // For tablets and larger screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // For mobile devices in landscape mode
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For mobile devices in portrait mode
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // console.log(blogData, "data");
  // console.log(blogImagePath, "imagepath");

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {blogData && blogData.map((item, index) => (
            <div key={index}>
              <li style={{ listStyle: "none" }}>
                <figure>
                  <Image
                    width={500}
                    height={100}
                    src={`${blogImagePath}${item.image}`}
                    className="lazy"
                    alt={item.title}
                  />
                  <figcaption>
                    <a
                      href={`https://blog.logicspice.com/${item.slug}`}
                      title="Read more"
                      className="btn btn-primary"
                    >
                      Read more
                    </a>
                  </figcaption>
                </figure>
              </li>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BlogSliderDynamic;
