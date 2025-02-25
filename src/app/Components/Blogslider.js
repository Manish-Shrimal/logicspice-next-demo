
"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import axios from "axios";
import Link from "next/link";

const Blogslider = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);



  const getData = async () => {
    try {
      const response = await axios.get("https://manage.logicspice.com/api/blog/listing");
      // console.log(response.data.data);
      setBlogs(response.data.response.blogData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const settings = {
  //   dots: false,
  //   lazyLoad: true,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  // };
  const settings = {
    dots: false,
    arrows: false,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    margin: 0,
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

  return (
    <div className="slider-container">
      {error ? (
        <p>{error}</p> // Display error message if API call fails
      ) : (
  
        <Slider {...settings}>
          {blogs.map((i, index) => (
            <div key={index} style={{ gap: "10px" }}>
              <ul>
              <li
                style={{
                  listStyle: "none",
                  marginRight: window.innerWidth <= 768 ? "0px" : "50px", // Adjust for mobile
                }}
              >
                <figure>
                  <Image
                    width={500}
                    height={100}
                    src={i.image}
                    alt={i.subject}
                    className="lazy"
                  />
                  <figcaption>
                    <Link
                      href={`/blog/${i.slug}`}
                      title="Read more"
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Read more
                    </Link>
                  </figcaption>
                </figure>
              </li>
              </ul>
              
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Blogslider;
