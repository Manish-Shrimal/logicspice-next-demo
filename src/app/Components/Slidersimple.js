"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

const Slidersimple = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };
  var settings = {
    dots: true, // Dots will be visible by default
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // You can adjust the breakpoint based on your needs
        settings: {
          dots: false, // Hide dots below 768px screen width
        }
      }
    ]
  };

  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/66ed1e29e5982d6c7bb15ccc/1i873rkmf";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []); // Empty dependency array to run once on mount
  

  
  return (
    <>
      <Slider {...settings}>
        <div className="HomeSlider HomeSliderJobSlide">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 pull-right">
                <div className="HomeBannerImg">
                  <div className="LeftGolImg balloon">
                    <Image
                      width={100}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/gol-img.webp"
                      alt=""
                    />
                  </div>
                  <div className="LeftTxtImg">
                    <Image
                      width={100}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/job-text-img.webp"
                      alt=""
                    />
                  </div>
                  <Image
                    width={500}
                    height={100 / (100 / 100)}
                    className="AppDevelomentsImgHome"
                    src="/img/home/top-banner/app-development-banner.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 pull-left">
                <div className="HomeSliderTxt">
                  <h2>
                    Mobile Apps Development{" "}
                    <span className="smallText">Company</span>
                  </h2>
                  <p>
                    Ready to use, affordable &amp; custom solutions
                    <br />
                    1800+ projects | 18+ years | 60% repeat clients
                  </p>
                  <Link
                    href="/portfolio"
                    className="btn btn-primary bt34"
                  >
                    PORTFOLIO
                  </Link>{" "}
                  <Link
                    href="/hire-developers"
                    className="btn btn-default bt234"
                  >
                    HIRE A DEVELOPER
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="HomeSlider HomeSliderJobSlide">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 pull-right">
                <div className="HomeBannerImg">
                  <div className="GrouponIcons1">
                    <Image
                      width={100}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/groupon-icon1.webp"
                      alt="Groupon Clone"
                    />
                  </div>
                  <div className="GrouponIcons2">
                    <Image
                      width={100}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/groupon-icon2.webp"
                      alt="Groupon Clone"
                    />
                  </div>
                  <div className="GrouponIcons3">
                    <Image
                      width={500}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/groupon-icon3.webp"
                      alt="Groupon Clone"
                    />
                  </div>
                  <Image
                    width={500}
                    height={100 / (100 / 100)}
                    src="/img/home/top-banner/groupon-development-banner.webp"
                    alt="Groupon Clone"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 pull-left">
                <div className="HomeSliderTxt">
                  <h2>
                    Groupon Clone <span>Script</span>
                  </h2>
                  <p>Similar to Daily Deal Software &amp; Coupon Script</p>
                  <Link
                    className="btn btn-primary"
                    href="/groupon-clone"
                  >
                    KNOW MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="HomeSlider HomeSliderJobSlide">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-6 pull-right">
                <div className="HomeBannerImg">
                  <div className="FivverIcons1">
                    <Image
                      width={100}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/fivver-icon1.webp"
                      alt="gigger"
                    />
                  </div>
                  <div className="FivverIcons2">
                    <Image
                      width={100}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/fivver-icon2.webp"
                      alt="gigger"
                    />
                  </div>
                  <div className="FivverIcons3">
                    <Image
                      width={500}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/fivver-icon3.webp"
                      alt="gigger"
                    />
                  </div>
                  <div className="FivverIcons4">
                    <Image
                      width={100}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/fivver-icon4.webp"
                      alt="gigger"
                    />
                  </div>
                  <Image
                    width={500}
                    height={100 / (100 / 100)}
                    src="/img/home/top-banner/fivver-development-banner.webp"
                    alt="gigger"
                  />
                </div>
              </div>
              <div className="col-sm-8 col-md-6 pull-left">
                <div className="HomeSliderTxt">
                  <h2>
                    Fiverr Clone <span>Script</span>
                  </h2>
                  <p>Online Micro Job Portal Software and Mobile Apps</p>
                  <Link
                    className="btn btn-primary"
                    href="/fiverr-clone"
                  >
                    KNOW MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="HomeSlider HomeSliderJobSlide">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 pull-right">
                  <div className="HomeBannerImg">
                    <div className="FreelancerIcons1">
                      <Image
                        width={100}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/freelancer-icon1.webp"
                        alt="Freelancer Clone"
                      />
                    </div>
                    <div className="FreelancerIcons2">
                      <Image
                        width={100}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/freelancer-icon2.webp"
                        alt="Freelancer Clone"
                      />
                    </div>
                    <div className="FreelancerIcons3">
                      <Image
                        width={100}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/fivver-icon4.webp"
                        alt="Freelancer Clone"
                      />
                    </div>
                    <div className="FreelancerIcons4">
                      <Image
                        width={500}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/freelancer-icon2.webp"
                        alt="Freelancer Clone"
                      />
                    </div>
                    <div className="FreelancerIcons5">
                      <Image
                        width={100}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/freelancer-icon3.webp"
                        alt="Freelancer Clone"
                      />
                    </div>
                    <Image
                      width={500}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/freelancer-development-banner.webp"
                      alt="Freelancer Clone"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 pull-left">
                  <div className="HomeSliderTxt">
                    <h2>
                      Freelancer <span>Clone</span>
                    </h2>
                    <p>
                      Freelance Marketplace software &amp; Upwork clone script
                    </p>
                    <Link
                      className="btn btn-primary"
                      href="/freelancer-clone"
                    >
                      KNOW MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="HomeSlider HomeSliderJobSlide">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 pull-right">
                  <div className="HomeBannerImg">
                    <div className="LaravelIcons1">
                      <Image
                        width={500}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/laravel-icon1.webp"
                        alt="Laravel Development"
                      />
                    </div>
                    <div className="LaravelIcons2">
                      <Image
                        width={500}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/laravel-icon2.webp"
                        alt="Laravel Development"
                      />
                    </div>
                    <Image
                      width={500}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/laravel-development-banner.webp"
                      alt="Laravel Development"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 pull-left">
                  <div className="HomeSliderTxt">
                    <h2>
                      Laravel <span>Development</span>
                    </h2>
                    <p>
                      Logicspice offers Laravel Web development services for any
                      kind of enterprise.{" "}
                    </p>
                    <Link
                      className="btn btn-primary"
                      href="/laravel-development"
                    >
                      KNOW MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="HomeSlider HomeSliderJobSlide">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 pull-right">
                  <div className="HomeBannerImg">
                    <div className="ClassifiedIcons1">
                      <Image
                        width={100}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/classified-icon1.webp"
                        alt="PHP Classified Ads Script"
                      />
                    </div>
                    <div className="ClassifiedIcons2">
                      <Image
                        width={500}
                        height={100 / (100 / 100)}
                        src="/img/home/top-banner/classified-icon2.webp"
                        alt="PHP Classified Ads Script"
                      />
                    </div>
                    <Image
                      width={500}
                      height={100 / (100 / 100)}
                      src="/img/home/top-banner/classified-development-banner.webp"
                      alt="PHP Classified Ads Script"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 pull-left">
                  <div className="HomeSliderTxt">
                    <h2>
                      PHP Classified Ads <span>Script</span>
                    </h2>
                    <p>Empower Your Ads, Expand Your Reach</p>
                    <Link
                      className="btn btn-primary"
                      href="/classified-ads-script"
                    >
                      KNOW MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Slidersimple;
