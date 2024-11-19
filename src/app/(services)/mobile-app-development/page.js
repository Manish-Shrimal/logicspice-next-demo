"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "@/app/Components/Contactusmodel";

const Page = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Screen width less than 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          slidesToScroll: 1,
          infinite: true,
          arrows: true, // Optional, to hide arrows on smaller screens
        },
      },
      {
        breakpoint: 600, // Screen width less than 600px (small screens)
        settings: {
          slidesToShow: 2, // Show 1 slide on small screens
          slidesToScroll: 1,
          arrows: true, // Optional
        },
      },
    ],
  };
  // var satisfying = {
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 3000,
  // };
  var satisfying = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Screen width less than 1024px
        settings: {
          slidesToShow: 1, // Show 2 slides on medium screens
          slidesToScroll: 1,
          infinite: true,
          arrows: true, // Optional, to hide arrows on smaller screens
        },
      },
      {
        breakpoint: 600, // Screen width less than 600px (small screens)
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          slidesToScroll: 1,
          arrows: false, // Optional
        },
      },
    ],
  };
  
  
  var casestudy = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <NavBar />
      <div className="mobileapp-deve_header environment">
        <div className="mobileapp_dev_bg_set"></div>
        <div className="mobileapp-deve_header_in">
          <div className="image_of_inhand">
            <Image
              unoptimized={true}
              width={650}
              height={500 / (100 / 100)}
              alt="mobile app development compnay - logicspice"
              src="/img/mobileappdevelopment/phone_inhand_img.png"
            />
          </div>
        </div>
      </div>

      <div className="mobileapp-deve_bottom MobileAppDevelopment ">
        <div className="wrapper colorTxt">
          <div className="mobileapp-deve_bottom_contop">
            <h1 className="mobileapp-deve_bottom_contopsm">
              Mobile App Development Company
            </h1>
            <div className="mobileapp-deve_bottom_contop_title">
              Stay Ahead of Competition
            </div>
            <div className="mobileapp-deve_bottom_contop_desc">
              We deliver custom mobile application development services ranging
              from small businesses to medium Enterprises. We develop native
              Android and iPhone apps customized to client requirements and
              current market trends. Logicspice is an{" "}
              <Link target="_blank" href="/">
                app development company
              </Link>{" "}
              that focuses on delivering our promises with the best planning and
              transparency. We work for some awesome clients like Cisco NHS,
              Johnson &amp; Johnson etc.
            </div>
          </div>
          <div className="BestMobileAppDevelopmentCompany">
            <div className="wrapper">
              <p>
                The mobile phones have changed the landscape of the market and
                this is why it has become important for every company to have
                its own mobile application. We at LogicSpice can help you with
                different types of mobile apps for both Android and iPhone
                users. We are the top <b>mobile app development company</b> in
                India that has been developing quality apps for the past few
                years. We have a broad clientele base that includes several
                hotels, pubs, medicine companies, finance companies, ecommerce
                stores, transport companies, and many other industry verticals.
                We have dedicated and dignified <b>mobile app developers</b>{" "}
                that help you to build any type of mobile app. We have a very
                robust framework and seamless solution for your brand. We have a
                client base of more than 800 companies from different fields and
                we have helped them to create a difference.
              </p>
              <p>
                Logicspice is the leading <b>Mobile app development</b> company
                when you talk about the native android & iphone application
                development. We provide you with robust quality of solutions and
                highly scalable mobile apps at very affordable prices. We know
                about the needs and demands of the modern generation and come up
                with apps that match up to their needs.
              </p>
              <h2>Best Mobile App Development Company</h2>
              <p>
                One of our prime aims is to come up with customized and easily
                accessible apps to make a solid impression on the clients. We
                are also very peculiar about the graphics and interface of the
                app. We have an expert team of developers that have experience
                of working on different types of apps and can help you with
                different varieties no matter what your business is.{" "}
                <b>Hire mobile app developers</b> who have served in the
                industries like restaurant, hotels, medicine, transport,
                garments and various others. We also keep coming up with new
                updates to keep the users engaged.
              </p>
              <p>
                We are amongst the top <b>mobile app development companies</b>{" "}
                because we focus on compact and user-friendly apps that can make
                an impact. We focus very extensively on the crawling through the
                pages so that users find it easier to navigate within the app.
                Our qualified team of developers also put their focus on adding
                maximum icons on the home page to make things simpler for users.
                We also focus on creating apps that do not disturb your budget
                by a great deal and make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileapp-deve_bottom known-iphone">
        <div className="wrapper">
          <div className="devide_secs">
            <div className="devide_secs_icn">
              <Image
                unoptimized={true}
                width={70}
                height={100}
                alt="ios app development"
                src="/img/mobileappdevelopment/icon_bgicon.png"
              />
            </div>
            <div className="devide_secs_right">
              <h2 className="devide_secs_title">
                <Link href="/ios-app-development">
                  iPhone &amp; iPad App Development
                </Link>
              </h2>
              <p className="colorTxt">
                Logicspice is a well known iphone app development company &
                specialized in building iPhone/iPad apps with great functional
                capabilities, meeting the ultimate objective of clients. With a
                team of highly experienced{" "}
                <strong>iPhone app developers</strong> for the UI&apos;s,
                development, testing and deployment. We are serving to all the
                major streams including business, entertainment, education,
                arts, education, e-commerce and others.{" "}
                <Link href="/ios-app-development">Read More</Link>
              </p>
            </div>
          </div>
          <div className="devide_secs devide_secs_rrf">
            <div className="devide_secs_icn">
              <Image
                unoptimized={true}
                width={70}
                height={100}
                alt="Android App Development - logicspice"
                src="/img/mobileappdevelopment/icn_androidicn.png"
              />
            </div>
            <div className="devide_secs_right">
              <h2 className="devide_secs_title">
                <Link href="/android-app-development">
                  Android App Development
                </Link>
              </h2>
              <p className="colorTxt">
                Logicspice is a leading android application development company
                across the globe and consistantly offering robust and scalable
                android application development services at low costs. Our team
                of expert <strong>android app developers</strong> is having the
                requisite tools and best design model to create, test and deploy
                apps. We are serving to all the major streams including
                business, entertainment, education, arts, education, e-commerce
                and others.{" "}
                <Link href="/android-app-development">Read More</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="SatisfyDemandModernBusiness1">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <h2>
                Mobile App Solution To Satisfy Demand of Modern Business Era
              </h2>
            </div>
            <div className="col-sm-12 col-md-9 position-relative">
              <div className="mobil-bg_h">
                <Image
                  unoptimized={true}
                  width={270}
                  height={100 / (100 / 100)}
                  alt="mobil-bg"
                  src="/img/mobileappdevelopment/mobil-bg_h.png"
                />
              </div>
              <div className="" id="satisfying_clients1">
                <Slider {...satisfying}>
                  <div className="satisfied_clients_logo1">
                    <div className="icon_mobil">
                      <i className="fa fa-map" aria-hidden="true"></i>
                    </div>
                    <h6>Easiest Navigation</h6>
                    <p>
                      We provide user friendly navigation to increase the
                      readability of the mobile app which is tied to call to
                      action.
                    </p>
                  </div>

                  <div className="satisfied_clients_logo1">
                    <div className="icon_mobil">
                      <i className="fa fa-brands fa-stumbleupon"></i>
                    </div>
                    <h6>Powerful Backend</h6>
                    <p>
                      Our developed backend is robust & secure so you can keep
                      your data protected.
                    </p>
                  </div>

                  <div className="satisfied_clients_logo1">
                    <div className="icon_mobil">
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <h6>Attractive Elements</h6>
                    <p>
                      Our mobile app elements are well designed meet all the
                      standard requirement without any compromise.
                    </p>
                  </div>

                  <div className="satisfied_clients_logo1">
                    <div className="icon_mobil">
                      <i className="fa fa-map" aria-hidden="true"></i>
                    </div>
                    <h6>Interactive Designs</h6>
                    <p>
                      We have a experienced designers who create unique and eye
                      catching designs so more users can get engaged to your
                      mobile app.
                    </p>
                  </div>

                  <div className="satisfied_clients_logo1">
                    <div className="icon_mobil">
                      <i className="fa fa-brands fa-stumbleupon"></i>
                    </div>
                    <h6>Modern UI</h6>
                    <p>
                      We design attractive and eye catchy interface with the
                      combination of your requirement and user requirement.
                    </p>
                  </div>

                  <div className="satisfied_clients_logo1">
                    <div className="icon_mobil">
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <h6>User Experience on Prior (UX)</h6>
                    <p>
                      Our designers have a great knowlegde in their field, they
                      integrate your idea and user experience together on your
                      mobile app.
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="scroll_sec">
        <div className="bestheating">
          <div className="apps_portfolioshowe bestheating-slider-wrap best-heating-wrap">
            <div className="home-projects">
              <div
                data-home-project="1"
                className="apps_portfolioshowe_sections home-project home-project--android none"
              >
                <div
                  style={{
                    backgroundImage: "url('/img/iosappdevelopment/uuuga.png')",
                  }}
                  className="apps_portfolioshowe_sections_image"
                ></div>
                <div className="apps_portfolioshowe_sections_container">
                  <div className="home-project__inner first-slide bdr_block">
                    <div className="home-project__clip">
                      <div className="home-project__phone">
                        <div
                          data-reveal-bg="1"
                          className="responsive__bg__wrap"
                        >
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100 / (100 / 100)}
                            src="/img/iosappdevelopment/mobileon_portfolio.png"
                            aria-hidden="true"
                            alt="iPhone app development services"
                          />
                        </div>
                        <div className="phone__reveal">
                          <div
                            data-reveal-wrap="1"
                            className="phone__reveal__wrap"
                          >
                            <Image
                              unoptimized={true}
                              width={100}
                              height={500 / (100 / 100)}
                              alt="UUUga"
                              src="/img/iosappdevelopment/uuuga_profile.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wrap">
                      <div className="apps_portfolioshowe_right_wrap">
                        <div className="apps_portfolioshowe_right_wrap_in">
                          <div className="apps_portfolioshowe_top">
                            <div className="apps_portfolioshowe_topleft">
                              <div className="apps_portfolioshowe_top_icon">
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={500 / (100 / 100)}
                                  alt="iPhone App Development Company"
                                  src="/img/iosappdevelopment/apps-logicspice.png"
                                />
                              </div>
                              <div className="apps_portfolioshowe_top_name">
                                UUUga
                              </div>
                            </div>
                            <div className="apps_portfolioshowe_topright">
                              <ul>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      unoptimized={true}
                                      width={30}
                                      height={100}
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/apple_icon.png"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      unoptimized={true}
                                      width={30}
                                      height={100}
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/android_skicon.png"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details_of_appdesc">
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                SYSTEM:
                              </div>
                              <span>iOS, Android</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                WE MAKE:
                              </div>
                              <span>UI/ UX design, development</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                TIME TAKE:
                              </div>
                              <span>30 Days to build</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                TEAM:
                              </div>
                              <span>
                                1 Project Manager, 3 Developer &amp; 1 Quality
                                Analyst
                              </span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                ABOUT APP:
                              </div>
                              <span>
                                The motto of the proposed app solutions is that
                                Buyer would be able to upload there CVs and
                                would be able to capture the video resume or
                                requirement in the form of video and then the
                                buyers CV would be matched as per the
                                requirement and the review of video resume would
                                be done. If the interviewee is not available
                                then interview could be assigned to some one
                                else and then the login id and password would be
                                sent to that interviewee.{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-home-project="2"
                className="apps_portfolioshowe_sections home-project home-project--android"
              >
                <div
                  style={{
                    backgroundImage: "url('/img/iosappdevelopment/localgenii.png')",
                  }}
                  className="apps_portfolioshowe_sections_image"
                ></div>
                <div className="apps_portfolioshowe_sections_container">
                  <div className="home-project__inner home-project__inner--quizup">
                    <div className="home-project__clip">
                      <div className="home-project__phone">
                        <div
                          data-reveal-bg="1"
                          className="responsive__bg__wrap"
                        >
                          <Image
                            unoptimized={true}
                            width={450}
                            height={500 / (100 / 100)}
                            src="/img/iosappdevelopment/mobileon_portfolio.png"
                            aria-hidden="true"
                            alt="iPhone app development services"
                          />
                        </div>
                        <div className="phone__reveal">
                          <div
                            data-reveal-wrap="1"
                            className="phone__reveal__wrap"
                          >
                            <Image
                              unoptimized={true}
                              width={450}
                              height={500 / (100 / 100)}
                              alt="Localgenii"
                              src="/img/iosappdevelopment/localgenii_in.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wrap">
                      <div className="apps_portfolioshowe_right_wrap">
                        <div className="apps_portfolioshowe_right_wrap_in">
                          <div className="apps_portfolioshowe_top">
                            <div className="apps_portfolioshowe_topleft">
                              <div className="apps_portfolioshowe_top_icon">
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={500 / (100 / 100)}
                                  alt="iPhone App Development Company"
                                  src="/img/iosappdevelopment/BusinesS-Apps-Development.png"
                                />
                              </div>
                              <div className="apps_portfolioshowe_top_name">
                                Localgenii
                              </div>
                            </div>
                            <div className="apps_portfolioshowe_topright">
                              <ul>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      unoptimized={true}
                                      width={30}
                                      height={500 / (100 / 100)}
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/apple_icon.png"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      unoptimized={true}
                                      width={30}
                                      height={500 / (100 / 100)}
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/android_skicon.png"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details_of_appdesc">
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                SYSTEM:
                              </div>
                              <span>iOS, Android</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                WE MAKE:
                              </div>
                              <span>UI/ UX design, development</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                TIME TAKE:
                              </div>
                              <span>30 Days to build</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                TEAM:
                              </div>
                              <span>
                                1 Project Manager, 3 Developer &amp; 1 Quality
                                Analyst
                              </span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                ABOUT APP:
                              </div>
                              <span>
                                The motto of the proposed app solution is that
                                users can register as traveler and can post
                                their services &amp; specifying their lenses
                                &amp; expertise. Users can search locals by
                                selecting maximum 3 lenses and view listing.
                                They can view profile of selected user. They can
                                connected to the local. After connecting they
                                can post their review over app.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-home-project="3"
                className="apps_portfolioshowe_sections home-project home-project--android"
              >
                <div
                  style={{
                    backgroundImage: "url('/img/iosappdevelopment/martgram.png')",
                  }}
                  className="apps_portfolioshowe_sections_image"
                ></div>
                <div className="apps_portfolioshowe_sections_container">
                  <div className="home-project__inner home-project__inner--quizup">
                    <div className="home-project__clip">
                      <div className="home-project__phone">
                        <div
                          data-reveal-bg="1"
                          className="responsive__bg__wrap"
                        >
                          <Image
                            unoptimized={true}
                            width={450}
                            height={500 / (100 / 100)}
                            src="/img/iosappdevelopment/mobileon_portfolio.png"
                            aria-hidden="true"
                            alt="iPhone app development services"
                          />
                        </div>
                        <div className="phone__reveal">
                          <div
                            data-reveal-wrap="1"
                            className="phone__reveal__wrap"
                          >
                            <Image
                              unoptimized={true}
                              width={100}
                              height={100}
                              alt="Martgram"
                              src="/img/iosappdevelopment/martgram_in.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wrap">
                      <div className="apps_portfolioshowe_right_wrap">
                        <div className="apps_portfolioshowe_right_wrap_in">
                          <div className="apps_portfolioshowe_top">
                            <div className="apps_portfolioshowe_topleft">
                              <div className="apps_portfolioshowe_top_icon">
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="iPhone App Development Company"
                                  src="/img/iosappdevelopment/mobile-Apps.png"
                                />
                              </div>
                              <div className="apps_portfolioshowe_top_name">
                                Martgram
                              </div>
                            </div>
                            <div className="apps_portfolioshowe_topright">
                              <ul>
                                <li>
                                  <a href="javascript:void(0)">
                                    <Image
                                      unoptimized={true}
                                      width={30}
                                      height={100}
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/apple_icon.png"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)">
                                    <Image
                                      unoptimized={true}
                                      width={30}
                                      height={100}
                                      alt="iPhone App Development Company"
                                      target="_blank"
                                      src="/img/iosappdevelopment/android_skicon.png"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details_of_appdesc">
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                SYSTEM:
                              </div>
                              <span>iOS, Android</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                WE MAKE:
                              </div>
                              <span>UI/ UX design, development</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                TIME TAKE:
                              </div>
                              <span>30 Days to build</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                TEAM:
                              </div>
                              <span>
                                1 Project Manager, 3 Developer &amp; 1 Quality
                                Analyst
                              </span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                ABOUT APP:
                              </div>
                              <span>
                                The motto of the proposed app solution is that
                                Seller can register email or Instagram accounts
                                and can select category under which they need to
                                list their softwares and summit required details
                                of product which they need to list their
                                product. Buyers can login &amp; can search for
                                sellers in their region and view softwares
                                listed by them and they can place order for
                                their desired product over app.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-home-project="4"
                className="apps_portfolioshowe_sections home-project home-project--android"
              >
                <div
                  style={{
                    backgroundImage:
                      "url('/img/iosappdevelopment/favorit.png')",
                  }}
                  className="apps_portfolioshowe_sections_image"
                ></div>
                <div className="apps_portfolioshowe_sections_container">
                  <div className="home-project__inner home-project__inner--quizup">
                    <div className="home-project__clip">
                      <div className="home-project__phone">
                        <div
                          data-reveal-bg="1"
                          className="responsive__bg__wrap"
                        >
                          <Image
                            unoptimized={true}
                            width={450}
                            height={500 / (100 / 100)}
                            src="/img/iosappdevelopment/mobileon_portfolio.png"
                            aria-hidden="true"
                            alt="iPhone app development services"
                          />
                        </div>
                        <div className="phone__reveal">
                          <div
                            data-reveal-wrap="1"
                            className="phone__reveal__wrap"
                          >
                            <Image
                              unoptimized={true}
                              width={450}
                              height={500 / (100 / 100)}
                              alt="Favor It"
                              src="/img/iosappdevelopment/favorit_it_in.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wrap">
                      <div className="apps_portfolioshowe_right_wrap">
                        <div className="apps_portfolioshowe_right_wrap_in">
                          <div className="apps_portfolioshowe_top">
                            <div className="apps_portfolioshowe_topleft">
                              <div className="apps_portfolioshowe_top_icon">
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={500 / (100 / 100)}
                                  alt="iPhone App Development Company"
                                  src="/img/iosappdevelopment/Business_Developers.png"
                                />
                              </div>
                              <div className="apps_portfolioshowe_top_name">
                                Favor It
                              </div>
                            </div>
                            <div className="apps_portfolioshowe_topright">
                              <ul>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      unoptimized={true}
                                      width={30}
                                      height={100}
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/apple_icon.png"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      unoptimized={true}
                                      width={30}
                                      height={100}
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/android_skicon.png"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details_of_appdesc">
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                SYSTEM:
                              </div>
                              <span>iOS, Android</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                WE MAKE:
                              </div>
                              <span>UI/ UX design, development</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                TIME TAKE:
                              </div>
                              <span>30 Days to build</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                TEAM:
                              </div>
                              <span>
                                1 Project Manager, 3 Developer &amp; 1 Quality
                                Analyst
                              </span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                ABOUT APP:
                              </div>
                              <span>
                                The motto of the proposed app solution is that
                                users can post tasks by selecting category and
                                also view tasks/favors in their location and can
                                also search for tasks. They can also view list
                                of all the favors posted and can then refine the
                                listings. They will also be able to select any
                                favor which they wish to complete and can accept
                                the favor or message the taskers. Once they
                                complete favor, both will be able to mark the
                                favor as completed and payment can be made over
                                the app.{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-home-project="5"
                className="apps_portfolioshowe_sections home-project home-project--android"
              >
                 <div
                  style={{
                    backgroundImage: "url('/img/iosappdevelopment/klick.png')",
                  }}
                  className="apps_portfolioshowe_sections_image"
                ></div>
                <div className="apps_portfolioshowe_sections_container">
                  <div className="home-project__inner home-project__inner--quizup">
                    <div className="home-project__clip">
                      <div className="home-project__phone">
                        <div
                          data-reveal-bg="1"
                          className="responsive__bg__wrap"
                        >
                          <Image
                            unoptimized={true}
                            width={450}
                            height={500 / (100 / 100)}
                            src="/img/iosappdevelopment/mobileon_portfolio.png"
                            aria-hidden="true"
                            alt="iPhone app development services"
                          />
                        </div>
                        <div className="phone__reveal">
                          <div
                            data-reveal-wrap="1"
                            className="phone__reveal__wrap"
                          >
                            <Image
                              unoptimized={true}
                              width={450}
                              height={500 / (100 / 100)}
                              alt="Klick"
                              src="/img/iosappdevelopment/klick_in.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wrap">
                      <div className="apps_portfolioshowe_right_wrap">
                        <div className="apps_portfolioshowe_right_wrap_in">
                          <div className="apps_portfolioshowe_top">
                            <div className="apps_portfolioshowe_topleft">
                              <div className="apps_portfolioshowe_top_icon">
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="iPhone App Development Company"
                                  src="/img/iosappdevelopment/Business-Service.png"
                                />
                              </div>
                              <div className="apps_portfolioshowe_top_name">
                                Klick
                              </div>
                            </div>
                            <div className="apps_portfolioshowe_topright">
                              <ul>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      unoptimized={true}
                                      width={30}
                                      height={100}
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/apple_icon.png"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      unoptimized={true}
                                      width={30}
                                      height={100}
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/android_skicon.png"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details_of_appdesc">
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                SYSTEM:
                              </div>
                              <span>iOS, Android</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                WE MAKE:
                              </div>
                              <span>UI/ UX design, development</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                TIME TAKE:
                              </div>
                              <span>30 Days to build</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                TEAM:
                              </div>
                              <span>
                                1 Project Manager, 3 Developer &amp; 1 Quality
                                Analyst
                              </span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                ABOUT APP:
                              </div>
                              <span>
                                The motto of the proposed app solution is that
                                Users leave the items at the place of purchase
                                to be prepared for shipment to his residence.
                                User will send payment to Apple inc. Then Apple
                                inc. will send the amount after fee deduction to
                                admin&apos;s paypal account. After purchasing
                                the item from the store, end user will collect
                                the receipt from the item provider and place a
                                shipment using the &quot;Klick&quot; app. User
                                also need to choose the shipping method provided
                                by courier company.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-home-project="6"
                className="apps_portfolioshowe_sections home-project home-project--android"
              >
                <div
                  style={{
                    backgroundImage:
                      "url('/img/iosappdevelopment/raydaar_img.png')",
                  }}
                  className="apps_portfolioshowe_sections_image"
                ></div>
                <div className="apps_portfolioshowe_sections_container">
                  <div className="home-project__inner last-slide slide-last-bdr">
                    <div className="home-project__clip">
                      <div className="home-project__phone">
                        <div
                          data-reveal-bg="1"
                          className="responsive__bg__wrap"
                        >
                          <Image
                            unoptimized={true}
                            width={450}
                            height={500 / (100 / 100)}
                            src="/img/iosappdevelopment/mobileon_portfolio.png"
                            aria-hidden="true"
                            alt="iPhone app development services"
                          />
                        </div>
                        <div className="phone__reveal">
                          <div
                            data-reveal-wrap="1"
                            className="phone__reveal__wrap"
                          >
                            <Image
                              unoptimized={true}
                              width={450}
                              height={500 / (100 / 100)}
                              alt="Raydaar"
                              src="/img/iosappdevelopment/tc_in.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wrap">
                      <div className="apps_portfolioshowe_right_wrap">
                        <div className="apps_portfolioshowe_right_wrap_in">
                          <div className="apps_portfolioshowe_top">
                            <div className="apps_portfolioshowe_topleft">
                              <div className="apps_portfolioshowe_top_icon">
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="iPhone App Development Company"
                                  src="/img/iosappdevelopment/Business-Apps.png"
                                />
                              </div>
                              <div className="apps_portfolioshowe_top_name">
                                Raydaar
                              </div>
                            </div>
                            <div className="apps_portfolioshowe_topright">
                              <ul>
                                <li>
                                  <a target="_blank" href="javascript:void(0)">
                                    <Image
                                      unoptimized={true}
                                      width={30}
                                      height={100}
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/apple_icon.png"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    href="https://play.google.com/store/apps/details?id=com.logicspice.raydaar&amp;hl=en"
                                  >
                                    <Image
                                      unoptimized={true}
                                      width={30}
                                      height={100}
                                      alt="iPhone App Development Company"
                                      src="/img/iosappdevelopment/android_skicon.png"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="details_of_appdesc">
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                SYSTEM:
                              </div>
                              <span>iOS, Android</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                WE MAKE:
                              </div>
                              <span>UI/ UX design, development</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                TIME TAKE:
                              </div>
                              <span>30 Days to build</span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                TEAM:
                              </div>
                              <span>
                                1 Project Manager, 3 Developer &amp; 1 Quality
                                Analyst
                              </span>
                            </div>
                            <div className="details_of_appdesc_row">
                              <div className="details_of_appdesc_row_title">
                                ABOUT APP:
                              </div>
                              <span>
                                Raydaar is the field extension of the Raydaar
                                software platform and connects the office and
                                field in real time to provide businesses more
                                value, transparency and efficiency in recording,
                                tracking, maintaining and transferring all
                                things assigned to employees.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav--home-projects  best-heating">
                <a className="" href="javascript:void(0);">
                  Link
                </a>
                <a className="" href="javascript:void(0);">
                  Link
                </a>
                <a className="" href="javascript:void(0);">
                  Link
                </a>
                <a className="" href="javascript:void(0);">
                  Link
                </a>
                <a className="" href="javascript:void(0);">
                  Link
                </a>
                <a className="" href="javascript:void(0);">
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="set_casestudysedc">
          <div className="container">
            <div className="row">
              <div className="set_casestudysedc_left col-md-6">
                <div className="title_of_casesetif">
                  <h2>LET OUR WORK SPEAK: CASE STUDY</h2>
                </div>
                <div className="title_of_casesetif_sm">
                  We have developed number of mobile applications for Android
                  and iPhone platform. Our softwares &amp; services have helped
                  plenty of businesses and teams get work done. We&apos;re not
                  just building applications, we&apos;re building an experience.
                  And we want that to be a meaningful and lasting one. View our
                  featured case studies to get a glimpse into the successful
                  digital experiences we create with our clients and the
                  business results we help them achieve.
                </div>
                <div className="casestudy_avards">
                  <ul>
                    <li>
                      <span>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          alt="icons"
                          src="/img/iosappdevelopment/icn_1.png"
                        />
                      </span>
                    </li>
                    <li>
                      <span>
                        <Image
                          unoptimized={true}
                          width={200}
                          height={100}
                          alt="icons"
                          src="/img/iosappdevelopment/icn_2.png"
                        />
                      </span>
                    </li>
                    <li>
                      <span>
                        <Image
                          unoptimized={true}
                          width={200}
                          height={100}
                          alt="icons"
                          src="/img/iosappdevelopment/icn_3.png"
                        />
                      </span>
                    </li>
                    <li>
                      <span>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          alt="icons"
                          src="/img/iosappdevelopment/icn_4.png"
                        />
                      </span>
                    </li>
                    <li>
                      <span>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          alt="icons"
                          src="/img/iosappdevelopment/icn_5.png"
                        />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="set_casestudysedc_right col-md-6">
                <div className="casestudy_sider">
                  <div className="owl-carousel hidedot" id="casestudy_carousel">
                    <Slider {...casestudy}>
                      <div>
                        <div className="casestudy_mobimg">
                          <Image
                            unoptimized={true}
                            width={650}
                            height={500 / (100 / 100)}
                            alt="app image"
                            src="/img/iosappdevelopment/Martgramcase.png"
                          />
                        </div>
                        <div className="casestudy_mobcontent">
                          <span>
                            <Link
                              href="/case-study/martgram-app"
                              target="_blank"
                            >
                              Martgram
                            </Link>
                          </span>
                          <p>
                            Martgram app that we are scoping will serves as
                            &quot;Online Marketplace Android &amp; iPhone
                            app&quot;...
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="casestudy_mobimg">
                          <Image
                            unoptimized={true}
                            width={650}
                            height={500 / (100 / 100)}
                            alt="app image"
                            src="/img/iosappdevelopment/beanocase.png"
                          />
                        </div>
                        <div className="casestudy_mobcontent">
                          <span>
                            <Link
                              href="/case-study/beano-app"
                              target="_blank"
                            >
                              Beano
                            </Link>
                          </span>
                          <p>
                            &quot;Beano: Coffee ordering&quot; is an interactive
                            application for customers to find nearby coffee...
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="casestudy_mobimg">
                          <Image
                            unoptimized={true}
                            width={650}
                            height={500 / (100 / 100)}
                            alt="app image"
                            src="/img/iosappdevelopment/Social-Securitas.png"
                          />
                        </div>
                        <div className="casestudy_mobcontent">
                          <span>
                            <Link
                              href="/case-study/social-securitas"
                              target="_blank"
                            >
                              Social Securites
                            </Link>
                          </span>
                          <p>
                            Social Securites app that will scoping for
                            &quot;Video Sharing Apps (Android &amp;
                            iPhone)&quot; that will...
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="casestudy_mobimg">
                          <Image
                            unoptimized={true}
                            width={650}
                            height={500 / (100 / 100)}
                            alt="app image"
                            src="/img/iosappdevelopment/MyUtrack.png"
                          />
                        </div>
                        <div className="casestudy_mobcontent">
                          <span>
                            <Link
                              href="/case-study/utrack-app"
                              target="_blank"
                            >
                              Utrack
                            </Link>
                          </span>
                          <p>
                            &quot;Utrack&quot; app facilitates the students to
                            live stress free by consolidating student&apos;s
                            className schedules...
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="casestudy_mobimg">
                          <Image
                            unoptimized={true}
                            width={650}
                            height={500 / (100 / 100)}
                            alt="app image"
                            src="/img/iosappdevelopment/bestcit.png"
                          />
                        </div>
                        <div className="casestudy_mobcontent">
                          <span>
                            <Link
                              href="/case-study/bestcit-app"
                              target="_blank"
                            >
                              Bestcit
                            </Link>
                          </span>
                          <p>
                            &quot;Aphorism&quot; app is a hub where user can
                            find a huge quantity of aphorisms, literary
                            quotes...
                          </p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
                <div className="more_btn more_btnrevercebn">
                  <Link className="btn btn-primary" href="/case-study">
                    <span>Featured Case Studies</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="industry_block">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>
                Based on the many years of experience and highly qualified
                development team we are able to serve nearly every industry
              </h4>
              <p>
                At Logicspice we serve various industries including Hotels,
                Transport, School and Education, Ideas and Business Concept,
                Health Care, Accounts and Financial Services, Commercial and
                Residential Estate and many more. Weâ€™ve serviced over 1,000
                customers across different countries. Our highly experienced
                team bring each client a deep industry knowledge and expert
                perspectives to offer them professionally qualified and business
                centric solutions in an impressive range of sectors.
              </p>
              <h6>Some Industries We Serve and able to Serve</h6>
              <div className="industru_btn">
                <Link className="btn btn-primary" href="/industries">
                  VIEW ALL
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="satisfied_clients">
        <div className="container">
          <div className="headings">
            <h2><b>Our Clients</b></h2>
            <p>We love what we do and our clients know about this</p>
          </div>
          <div className="clearfix"></div>
          <div className="" id="satisfying_clients">
            <Slider {...settings}>
              <div className="satisfied_clients_logo ">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  alt="client"
                  className="lazy"
                  src="/img/mobileappdevelopment/Business-Apps.png"
                />
              </div>

              <div className="satisfied_clients_logo ">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  alt="client"
                  className="lazy"
                  src="/img/mobileappdevelopment/mobile-Apps.png"
                />
              </div>

              <div className="satisfied_clients_logo ">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  alt="client"
                  className="lazy"
                  src="/img/mobileappdevelopment/BusinesS-Apps-Development.png"
                />
              </div>

              <div className="satisfied_clients_logo ">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  alt="client"
                  className="lazy"
                  src="/img/mobileappdevelopment/Business-Service.png"
                />
              </div>

              <div className="satisfied_clients_logo ">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  alt="client"
                  className="lazy"
                  src="/img/mobileappdevelopment/Business_Developers.png"
                />
              </div>

              <div className="satisfied_clients_logo ">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  alt="client"
                  className="lazy"
                  src="/img/mobileappdevelopment/app-development.png"
                />
              </div>

              <div className="satisfied_clients_logo ">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  alt="client"
                  className="lazy"
                  src="/img/mobileappdevelopment/application-developers.jpg"
                />
              </div>

              <div className="satisfied_clients_logo ">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  alt="client"
                  className="lazy"
                  src="/img/mobileappdevelopment/mobile-apps-logicspice.png"
                />
              </div>

              <div className="satisfied_clients_logo ">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  alt="client"
                  className="lazy"
                  src="/img/mobileappdevelopment/app-development-services.png"
                />
              </div>

              <div className="satisfied_clients_logo ">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  alt="client"
                  className="lazy"
                  src="/img/mobileappdevelopment/expert-app-developers.png"
                />
              </div>

              <div className="satisfied_clients_logo ">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  alt="client"
                  className="lazy"
                  src="/img/mobileappdevelopment/android-apps-development.png"
                />
              </div>

              <div className="satisfied_clients_logo ">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  alt="client"
                  className="lazy"
                  src="/img/mobileappdevelopment/mobile-apps-development.png"
                />
              </div>

              <div className="satisfied_clients_logo ">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  alt="client"
                  className="lazy"
                  src="/img/mobileappdevelopment/affordable-apps.png"
                />
              </div>

              <div className="satisfied_clients_logo ">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  alt="client"
                  className="lazy"
                  src="/img/mobileappdevelopment/apps-logicspice.png"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              unoptimized={true}
              width={50}
              height={50}
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
            />
          </a>
        </div>
        <div className="quote_pop_plus quote_pop_in" onClick={toggleModal}>
          <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
