"use client";
import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../public/css/font-awesome.css"

const Looksilder = () => {
  // const settings = {
  //   dots: false,
  //   arrows: true,
  //   lazyLoad: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   initialSlide: 2,
  // };

  const NextArrow = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        {/* <i className="fas fa-chevron-right"></i>{" "} */}
        {/* <i class="fa fa-chevron-right" aria-hidden="true"></i>{" "} */}
        <i class="fa fa-angle-right" aria-hidden="true"></i>{" "}
        {/* Example of using Font Awesome for arrow icon */}
      </div>
    );
  };

  const PrevArrow = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        {/* <i className="fas fa-chevron-left"></i>{" "} */}
        {/* <i class="fa fa-chevron-left" aria-hidden="true"></i>{" "} */}
        <i class="fa fa-angle-left" aria-hidden="true"></i>{" "}
        {/* Example of using Font Awesome for arrow icon */}
      </div>
    );
  };

  const settings = {
    dots: false,
    arrows: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom prev arrow
  };
  const takeAlookData = [
    {
      notMobileImage: "/img/home/look/iWorks.webp",
      classname: "",
      originalImage: "/img/home/look/iwork-logo.webp",
      alt: "iwork",

      text: "iWorks supports Multilingual and Social Media Sign in and Sign Up Features.",
      link: "/case-study/iworks",
      logoSize: 200,
    },
    {
      notMobileImage: "/img/home/look/Job-to-home.webp",
      classname: "",
      originalImage: "/img/home/look/logo-job-at-home.webp",
      alt: "JOB AT HOME",
      text: "Job At Home supports Multiple social channels to sharing the jobs including Whatsapp, Facebook, LinkedIn, Twitter etc",
      link: "/case-study/job-at-home",
      logoSize: 150,
    },
    {
      notMobileImage: "/img/home/look/GB-Lancer.webp",
      classname: "",
      originalImage: "/img/home/look/logo-gb-lancers.webp",
      alt: "GB Lancers",
      text: "GB Lancers supports Seller and Buyer management.",
      link: "/case-study/gb-lancers",
      logoSize: 150,
    },
    {
      notMobileImage: "/img/home/look/We-do.webp",
      classname: "beano",
      originalImage: "/img/home/look/logo-we-do.webp",
      width: "250px!important",
      alt: "We do it Cheaper",
      text: "We Do it Cheaper supports Buyer and Freelancer management.",
      link: "/case-study/we-do-it-cheaper",
      logoSize: 250,
    },
    {
      notMobileImage: "/img/home/look/your-pension.webp",
      classname: "",
      originalImage: "/img/home/look/yp-logo.webp",
      alt: "YourPension",
      text: "Responsive Custom Build website for Pension Plan Management",
      link: "/case-study/pension-plan-management",
      logoSize: 250,
    },
    {
      notMobileImage: "/img/home/look/Iamcleaning.webp",
      classname: "utrack",
      originalImage: "/img/home/look/Iamcleaninglogo.webp",
      alt: "utrack",
      text: "It's provides domestic and commercial cleaning services.",
      link: "/case-study/Iamcleaning",
      logoSize: 250,
    },
    {
      notMobileImage: "/img/home/look/Zibzob.webp",
      classname: "",
      originalImage: "/img/home/look/zip-joblogo.webp",
      alt: "Zibzob",
      text: "We Write Resumes that Get You Hired",
      link: "/case-study/zipjob",
      logoSize: 150,
    },
  ];

  return (
    <>
      <div className="look-slider">
        <div id="">
          {/* <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {takeAlookData.map((lookData, index) => (
              <SwiperSlide key={index} className="row d-flex">
                <div className="row">
                  <div className="col-md-7 ">
                    <Image
                      data-aos="fade-right"
                      src={lookData.notMobileImage}
                      className={lookData.classname}
                      alt={lookData.alt}
                      width={700} // Adjust width and height according to your design
                      height={300 / (300 / 300)}
                      unoptimized={true}
                    />
                  </div>
                  <div className="col-md-5">
                    <div className="ClientLogoHome">
                      <Image
                        src={lookData.originalImage}
                        alt={lookData.alt}
                        width={lookData.logoSize}
                        height={100 / (100 / 100)}
                        unoptimized={true}
                      />
                      <p className="to_matf">{lookData.text}</p>
                      <Link href={lookData.link} className="case-study">
                        Case Study
                      </Link>
                      <p className="have_look">
                        Have a look on similar Project{" "}
                      </p>
                      <div className="multibutton">
                        <Link
                          href="/company/portfolio"
                          className="btn btn-primary"
                        >
                          Portfolio
                        </Link>
                        <Link href="/contact-us" className="btn btn-default">
                          Request a quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
          {/* <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              // when window width is >= 768px
              768: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {takeAlookData.map((lookData, index) => (
              <SwiperSlide key={index} className="row d-flex">
                <div className="row">
                  <div className="col-md-7 col-12">
                    {" "}
                  
                    <Image
                      data-aos="fade-right"
                      src={lookData.notMobileImage}
                      className={lookData.classname}
                      alt={lookData.alt}
                      width={700} 
                      height={300}
                      unoptimized={true}
                    />
                  </div>
                  <div className="col-md-5 col-12">
                    <div className="ClientLogoHome">
                      <Image
                        src={lookData.originalImage}
                        alt={lookData.alt}
                        width={lookData.logoSize}
                        height={100}
                        unoptimized={true}
                      />
                      <p className="to_matf">{lookData.text}</p>
                      <Link href={lookData.link} className="case-study">
                        Case Study
                      </Link>
                      <p className="have_look">
                        Have a look on similar Project{" "}
                      </p>
                      <div className="multibutton">
                        <Link
                          href="/company/portfolio"
                          className="btn btn-primary"
                        >
                          Portfolio
                        </Link>
                        <Link href="/contact-us" className="btn btn-default">
                          Request a quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}

          <Slider {...settings} className="mySlickSlider">
            {takeAlookData.map((lookData, index) => (
              <div key={index} className="row d-flex lookSlider">
                <div className="row">
                  <div className="col-md-7 col-12">
                    <Image
                      data-aos="fade-right"
                      src={lookData.notMobileImage}
                      className={lookData.classname}
                      alt={lookData.alt}
                      width={700}
                      height={300}
                      unoptimized={true}
                    />
                  </div>
                  <div className="col-md-5 col-12">
                    <div className="ClientLogoHome">
                      <Image
                        src={lookData.originalImage}
                        alt={lookData.alt}
                        width={lookData.logoSize}
                        height={100}
                        unoptimized={true}
                      />
                      <p className="to_matf">{lookData.text}</p>
                      <Link href={lookData.link} className="case-study">
                        Case Study
                      </Link>
                      <p className="have_look">
                        Have a look on similar Project
                      </p>
                      <div className="multibutton">
                        <Link
                          href="/portfolio"
                          className="btn btn-primary"
                        >
                          Portfolio
                        </Link>
                        <Link href="/contact-us" className="btn btn-default">
                          Request a quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Looksilder;
