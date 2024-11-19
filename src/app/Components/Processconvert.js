"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Ourclient = () => {
  var processconvert = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    cssEase: 'ease-in-out'
  };
  return (
    <>
      <Slider {...processconvert}>
        
      <div class="item">
                      <div class="slider_wrapper_content">
                        <div class="slider_wrapper_titile">Share</div>
                        <div class="slider_wrapper_content_main">
                          Share your design file with us. We accept files in all
                          the formats&sbquo; PSD&sbquo; JPEG&sbquo; PNG.
                        </div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="slider_wrapper_content">
                        <div class="slider_wrapper_titile">
                          Expertise in WordPress
                        </div>
                        <div class="slider_wrapper_content_main">
                          Our developers are expert enough to deliver the best
                          solution for your wordpress project.
                        </div>
                      </div>
                    </div>

                    <div class="item active">
                      <div class="slider_wrapper_content">
                        <div class="slider_wrapper_titile">Development</div>
                        <div class="slider_wrapper_content_main">
                          They will develop your website. They will communicate
                          with you if any doubts occur.
                        </div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="slider_wrapper_content">
                        <div class="slider_wrapper_titile">
                          Skilled Developers
                        </div>
                        <div class="slider_wrapper_content_main">
                          The developers at Logicspice are adept with latest
                          industry standards and technologies.
                        </div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="slider_wrapper_content">
                        <div class="slider_wrapper_titile">Transparency</div>
                        <div class="slider_wrapper_content_main">
                          We keep complete transparency with our clients through
                          the communication and updated them time-to-time.
                        </div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="slider_wrapper_content">
                        <div class="slider_wrapper_titile">
                          Testing &amp; Support
                        </div>
                        <div class="slider_wrapper_content_main">
                          Our quality analysis team will test your
                          project&sbquo; which will run on all the modern
                          browser.
                        </div>
                      </div>
                    </div>
      </Slider>
    </>
  );
};

export default Ourclient;
