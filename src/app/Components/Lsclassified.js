import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Lsclassified = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  return (
    <>
      {/* <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="feat-slide-img">
              <Image
                 width={1500}
                 height={100 / (100 / 100)}
                src="/img/classified/Advanced_Filters.jpg"
                alt="Advanced Filters"
              />
            </div>
            <div class="hands-proved">
              <div class="titleof_scnew">Advanced Filters</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="feat-slide-img">
              <Image unoptimized={true}
                width={1500}
                height={100 / (100 / 100)}
                src="/img/classified/Classifieds_Management.jpg"
                alt="Classifieds Management"
              />
            </div>
            <div class="hands-proved">
              <div class="titleof_scnew">Classifieds Management</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="feat-slide-img">
              <Image
               unoptimized={true}
               width={1500}
               height={100 / (100 / 100)}
                src="/img/classified/Post_Classfied.jpg"
                alt="Post Classified"
              />
            </div>
            <div class="hands-proved">
              <div class="titleof_scnew">Post Classified</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="feat-slide-img">
              <Image
               unoptimized={true}
               width={1500}
               height={100 / (100 / 100)}
                src="/img/classified/Multiple_Picture_Upload.jpg"
                alt="Multiple Picture Upload"
              />
            </div>
            <div class="hands-proved">
              <div class="titleof_scnew">Multiple Picture Upload</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="feat-slide-img">
              <Image
               unoptimized={true}
               width={1500}
               height={100 / (100 / 100)}
                src="/img/classified/Location_Based.jpg"
                alt="Location Based"
              />
            </div>
            <div class="hands-proved">
              <div class="titleof_scnew">Location Based</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </> */}
      <div id="">
        <Slider {...settings}>
          <div className="SliderMainBx">
            <div class="feat-slide-img">
              <Image
                width={1500}
                height={100 / (100 / 100)}
                src="/img/classified/Advanced_Filters.jpg"
                alt="Advanced Filters"
              />
            </div>
            <div class="hands-proved">
              <div class="titleof_scnew">Advanced Filters</div>
            </div>
          </div>
          <div className="SliderMainBx">
            <div class="feat-slide-img">
              <Image
                unoptimized={true}
                width={1500}
                height={100 / (100 / 100)}
                src="/img/classified/Classifieds_Management.jpg"
                alt="Classifieds Management"
              />
            </div>
            <div class="hands-proved">
              <div class="titleof_scnew">Classifieds Management</div>
            </div>
          </div>
          <div className="SliderMainBx">
            <div class="feat-slide-img">
              <Image
                unoptimized={true}
                width={1500}
                height={100 / (100 / 100)}
                src="/img/classified/Multiple_Picture_Upload.jpg"
                alt="Multiple Picture Upload"
              />
            </div>
            <div class="hands-proved">
              <div class="titleof_scnew">Multiple Picture Upload</div>
            </div>
          </div>
          <div className="SliderMainBx">
          <div class="feat-slide-img">
              <Image
               unoptimized={true}
               width={1500}
               height={100 / (100 / 100)}
                src="/img/classified/Location_Based.jpg"
                alt="Location Based"
              />
            </div>
            <div class="hands-proved">
              <div class="titleof_scnew">Location Based</div>
            </div>
          </div>
          
        </Slider>
      </div>
    </>
  );
};

export default Lsclassified;
