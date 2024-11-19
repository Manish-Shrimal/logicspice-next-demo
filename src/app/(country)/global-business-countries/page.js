"use client";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "@/app/industries/industry.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [isModalOpen, setCountryModel] = useState(false);
  const [switzerlandModel, setSwitzerlandModel] = useState(false);
  const [belgiumModel, setBelgiumModel] = useState(false);
  const [uaeModel, setUaeModel] = useState(false);

  const openUsaModel = () => setCountryModel(true);
  const closeUsaModal = () => setCountryModel(false);
  const openSwitzerlandModal = () => setSwitzerlandModel(true);
  const closeSwitzerlandModal = () => setSwitzerlandModel(false);
  const openBelgiumModal = () => setBelgiumModel(true);
  const closeBelgiumModal = () => setBelgiumModel(false);
  const openUaeModal = () => setUaeModel(true);
  const closeUaeModal = () => setUaeModel(false);

  const CustomPrevArrow = ({ onClick }) => {
    return (
      <button type="button" className="custom-prev-arrow" onClick={onClick}>
        {/* You can use an icon, image, or any other content for your custom arrow */}
        {/* <img src="/img/left-arrow.png" alt="Previous" /> */}
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </button>
    );
  };

  const CustomNextArrow = ({ onClick }) => {
    return (
      <button type="button" className="custom-next-arrow" onClick={onClick}>
        {/* You can use an icon, image, or any other content for your custom arrow */}
        {/* <img src="/img/right-arrow.png" alt="Next" /> */}
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </button>
    );
  };
  // var settings = {
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1, // Changed from 8 to 1
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   prevArrow: <CustomPrevArrow />,
  //   nextArrow: <CustomNextArrow />,
  // };

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480, // Mobile phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  var date = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, // Changed from 8 to 1
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const openModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <>
      <Navbar />
      <section class="country_head">
        <div class="container">
          <span>Business Countries</span>
          <p>We Are Serving Globally</p>
        </div>
      </section>

      <section class="detail_country">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="produvtivity">
                <h4>
                  Our services in different countries and geographic areas to
                  boost their{" "}
                </h4>
                <span>BUSINESS PRODUCTIVITY</span>
                <p>
                  With more than 11 years of experience we have provided web &
                  mobile app development services in every corner of the globe.
                </p>
                <p>
                  No matter where you are, There&apos;s strong probability that
                  we are providing services to the person or organization nearby
                  you.{" "}
                </p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="place_country">
                <Link href="/usa">
                  <Image
                    width={100}
                    height={100}
                    unoptimized={true}
                    alt="Web & App Development Services USA"
                    src="/img/globalbusinesscountries/USA.png"
                  />
                </Link>
                <h2>USA</h2>
                <ul>
                  <li>
                    <Link href="/usa/mobile-app-development-in-california">
                      California
                    </Link>
                  </li>
                  <li>
                    <Link href="/usa/mobile-app-development-in-miami">
                      Miami
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#" data-toggle="modal" data-target="#USA">
                      More Cities
                    </Link>
                  </li> */}
                  <li>
                    <a onClick={openUsaModel} style={{ cursor: "pointer" }}>
                      More Cities
                    </a>
                  </li>
                  {isModalOpen && (
                    <div
                      className="modal country-modal fade show"
                      style={{ display: "block" }}
                      tabIndex="-1"
                      role="dialog"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">USA</h5>
                            <button
                              type="button"
                              className="close"
                              onClick={closeUsaModal}
                            >
                              x
                            </button>
                          </div>
                          <div className="modal-body">
                            <ul>
                              <li>
                                <Link href="/usa/mobile-app-development-in-california/">
                                  {" "}
                                  California{" "}
                                </Link>
                              </li>
                              <li>
                                <Link href="/usa/mobile-app-development-in-miami">
                                  {" "}
                                  Miami{" "}
                                </Link>
                              </li>
                              <li>
                                <Link href="/usa/mobile-app-development-in-florida">
                                  {" "}
                                  Florida{" "}
                                </Link>
                              </li>
                              <li>
                                <Link href="/usa/mobile-app-development-in-losangeles">
                                  {" "}
                                  Los angeles{" "}
                                </Link>
                              </li>
                              <li>
                                <Link href="/usa/mobile-app-development-in-newyork">
                                  {" "}
                                  New york{" "}
                                </Link>
                              </li>
                              <li>
                                <Link href="/usa/mobile-app-development-in-chicago">
                                  {" "}
                                  Chicago{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-default"
                              onClick={closeUsaModal}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </ul>
              </div>
              <div class="place_country">
                <Link href="/switzerland">
                  <Image
                    width={100}
                    height={100}
                    unoptimized={true}
                    alt="App Development Services Switzerland"
                    src="/img/globalbusinesscountries/SW.png"
                  />
                </Link>
                <h2>Switzerland</h2>
                <ul>
                  <li>
                    <Link href="/switzerland/mobile-app-development-in-geneva">
                      Geneva
                    </Link>
                  </li>
                  <li>
                    <Link href="/switzerland/mobile-app-development-in-zurich">
                      Zürich
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#" data-toggle="modal" data-target="#SW">
                      More Cities
                    </Link>
                  </li> */}
                  <li>
                    <a
                      onClick={openSwitzerlandModal}
                      style={{ cursor: "pointer" }}
                    >
                      More Cities
                    </a>
                  </li>
                  {switzerlandModel && (
                    <div
                      className="modal country-modal fade show"
                      style={{ display: "block" }}
                      tabIndex="-1"
                      role="dialog"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Switzerland</h5>
                            <button
                              type="button"
                              className="close"
                              onClick={closeSwitzerlandModal}
                            >
                              x
                            </button>
                          </div>
                          <div className="modal-body">
                            <ul>
                              <li>
                                <Link href="/switzerland/mobile-app-development-in-geneva/">
                                  {" "}
                                  Geneva{" "}
                                </Link>
                              </li>
                              <li>
                                <Link href="/switzerland/mobile-app-development-in-zurich">
                                  {" "}
                                  Zürich{" "}
                                </Link>
                              </li>
                              <li>
                                <Link href="/switzerland/mobile-app-development-in-basel">
                                  {" "}
                                  Basel{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-default"
                              onClick={closeSwitzerlandModal}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="place_country">
                <Link href="/uae">
                  <Image
                    width={100}
                    height={100}
                    unoptimized={true}
                    alt="Mobile App Development Services UAE"
                    src="/img/globalbusinesscountries/UAE.png"
                  />
                </Link>
                <h2>UAE</h2>
                <ul>
                  <li>
                    <Link href="/uae/mobile-app-development-in-dubai">
                      Dubai
                    </Link>
                  </li>
                  <li>
                    <Link href="/uae/mobile-app-development-in-abu-dhabi">
                      Abu Dhabi
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#" data-toggle="modal" data-target="#UAE">
                      More Cities
                    </Link>
                  </li> */}
                  <li>
                    <a onClick={openUaeModal} style={{ cursor: "pointer" }}>
                      More Cities
                    </a>
                  </li>
                  {uaeModel && (
                    <div
                      className="modal country-modal fade show"
                      style={{ display: "block" }}
                      tabIndex="-1"
                      role="dialog"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">UAE</h5>
                            <button
                              type="button"
                              className="close"
                              onClick={closeUaeModal}
                            >
                              x
                            </button>
                          </div>
                          <div className="modal-body">
                            <ul>
                              <li>
                                <Link href="/uae/mobile-app-development-in-dubai/">
                                  {" "}
                                  Dubai{" "}
                                </Link>
                              </li>
                              <li>
                                <Link href="/uae/mobile-app-development-in-abu-dhabi">
                                  {" "}
                                  Abu Dhabi{" "}
                                </Link>
                              </li>
                              <li>
                                <Link href="/uae/mobile-app-development-in-ajman">
                                  {" "}
                                  Ajman{" "}
                                </Link>
                              </li>
                              <li>
                                <Link href="/uae/mobile-app-development-in-al-ain">
                                  {" "}
                                  Al Ain{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-default"
                              onClick={closeUaeModal}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </ul>
              </div>
              <div class="place_country">
                <Link href="/belgium">
                  <Image
                    width={100}
                    height={100}
                    unoptimized={true}
                    alt="Mobile App Development Company Belgium"
                    src="/img/globalbusinesscountries/BELG.png"
                  />
                </Link>
                <h2>Belgium</h2>
                <ul>
                  <li>
                    <Link href="/belgium/mobile-app-development-in-brussels">
                      Brussels
                    </Link>
                  </li>
                  <li>
                    <Link href="/belgium/mobile-app-development-in-flanders">
                      Flanders
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#" data-toggle="modal" data-target="#belg">
                      More Cities
                    </Link>
                  </li> */}
                  <li>
                    <a onClick={openBelgiumModal} style={{ cursor: "pointer" }}>
                      More Cities
                    </a>
                  </li>
                  {belgiumModel && (
                    <div
                      className="modal country-modal fade show"
                      style={{ display: "block" }}
                      tabIndex="-1"
                      role="dialog"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Belgium</h5>
                            <button
                              type="button"
                              className="close"
                              onClick={closeBelgiumModal}
                            >
                              x
                            </button>
                          </div>
                          <div className="modal-body">
                            <ul>
                              <li>
                                <Link href="/belgium/mobile-app-development-in-brussels/">
                                  {" "}
                                  Brussels{" "}
                                </Link>
                              </li>
                              <li>
                                <Link href="/belgium/mobile-app-development-in-antwerp">
                                  {" "}
                                  Antwerp{" "}
                                </Link>
                              </li>
                              <li>
                                <Link href="/belgium/mobile-app-development-in-ghent">
                                  {" "}
                                  Ghent{" "}
                                </Link>
                              </li>
                              <li>
                                <Link href="/belgium/mobile-app-development-in-flanders">
                                  {" "}
                                  Flanders{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-default"
                              onClick={closeBelgiumModal}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="place_country">
                <Link href="/australia">
                  <Image
                    width={100}
                    height={100}
                    unoptimized={true}
                    alt="Web & Mobile App Development Company Australia"
                    src="/img/globalbusinesscountries/AU.png"
                  />
                </Link>
                <h2>Australia</h2>
                <ul>
                  <li>
                    <Link href="/australia/mobile-app-development-in-melbourne">
                      Melbourne
                    </Link>
                  </li>
                  <li>
                    <Link href="/australia/mobile-app-development-in-sydney">
                      Sydney
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="place_country">
                <Link href="/uk">
                  <Image
                    width={100}
                    height={100}
                    unoptimized={true}
                    alt="Web & Mobile App Development Services UK"
                    src="/img/globalbusinesscountries/UK.png"
                  />
                </Link>
                <h2>UK</h2>
                <ul>
                  <li>
                    <Link href="/uk/mobile-app-development-in-london">
                      London
                    </Link>
                  </li>
                  <li>
                    <Link href="/uk/mobile-app-development-in-manchester">
                      Manchester
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="global_country">
        <div class="container">
          <h1>Web & Mobile App Development Services Globally</h1>
          <p>
            We at Logicspice have faced most of tough market challenges and has
            polished our skills by processing thousands of different tasks on
            different platforms. We have an extensive experience of providing
            customized solutions to our clients. We don&apos;t just help you in
            making your website live on the Internet and run, we also help you
            with our hosting and SEO services and want to see your website to
            serve you well for the long haul.{" "}
          </p>
          <p>
            There are lots of domestic{" "}
            <strong>web development companies</strong> that offers leading edge
            solutions for different projects but the company like Logicspice is
            at the top in development zone and offers the best affordable web
            designing solutions.
          </p>
          <p>
            If you are looking for any of web &{" "}
            <Link href="/mobile-app-development">
              <strong>mobile app development services</strong>
            </Link>
            , we will be honored to hear from you. The team Logicspice is
            committed to provide best solutions at the lowest cost with great
            designs. We have a strong customer base and serving web and mobile{" "}
            <strong>app development services globally</strong> including all
            major counties like <strong>USA, UK, UAE, Australia, India</strong>,
            Canada, Belgium, Switzerland, HongKong, Turkey, Ethiopia, Italy,
            Indonesia, Japan, China and many more.{" "}
          </p>
        </div>
      </section>

      <section class="global_case_study">
        <div class="container">
          <h2>How We Are Serving Globally</h2>
          <p>
            We have been working with leading brands and companies, providing
            cutting-edge custom IT solutions for web and mobile platform.
          </p>
          <div className="row">
            <Slider {...settings}>
              <div class="case-study-country">
                <Image
                  width={300}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/cs1.png"
                />
                <Image
                  width={300}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/cs_logo1.png"
                />
                <p>Responsive Custom build Website for photographer quoting.</p>
                <Link href="/case-study/photographers247">Case Study</Link>
              </div>
              <div class="case-study-country">
                <Image
                  width={300}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/cs2.png"
                />
                <Image
                  width={300}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/cs_logo2.png"
                />
                <p>Custom build Website for Community for online tattoo</p>
                <Link href="/case-study/mytattooist">Case Study</Link>
              </div>
              <div class="case-study-country">
                <Image
                  width={300}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/cs3.png"
                />
                <Image
                  width={300}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/cs_logo3.png"
                />
                <p>Best coffee ordering app for iPhone & Android users.</p>
                <Link href="/case-study/beano-app">Case Study</Link>
              </div>
              <div class="case-study-country">
                <Image
                  width={300}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/cs4.png"
                />
                <Image
                  width={300}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/cs_logo4.png"
                />
                <p>Responsive Custom build Website for online coaching.</p>
                <Link href="/case-study/coursetakers">Case Study</Link>
              </div>
              <div class="case-study-country">
                <Image
                  width={300}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/cs5.png"
                />
                <Image
                  width={300}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/cs_logo5.png"
                />
                <p>Best schedule tracking app for iPhone & Android users.</p>
                <Link href="/case-study/utrack-app">Case Study</Link>
              </div>
              <div class="case-study-country">
                <Image
                  width={300}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/cs6.png"
                />
                <Image
                  width={300}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/cs_logo6.png"
                />
                <p>An interactive iPhone to play with aphorisms.</p>
                <Link href="/case-study/bestcit-app">Case Study</Link>
              </div>
              <div class="case-study-country">
                <Image
                  width={300}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/cs7.png"
                />
                <Image
                  width={300}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/cs_logo7.png"
                />
                <p>Responsive Custom build Website for online coaching.</p>
                <Link href="/case-study/four-strokes">Case Study</Link>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section class="industries_country">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <Image
                width={1500}
                height={100 / (100 / 100)}
                unoptimized={true}
                alt=""
                src="/img/globalbusinesscountries/ind-girl.png"
              />
            </div>
            <div class="col-sm-8">
              <h2>industries we have served</h2>
              <div class="row">
                <div class="col-md-4 col-sm-6 col-xs-6">
                  <div class="ind_cat hotel">
                    <Image
                      width={50}
                      height={100}
                      unoptimized={true}
                      alt=""
                      src="/img/globalbusinesscountries/hotels_icon.png"
                    />
                    <p>
                      <Link href="/industries/Hotel-apps">Hotels</Link>
                    </p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                  <div class="ind_cat transport">
                    <Image
                      width={50}
                      height={100}
                      unoptimized={true}
                      alt=""
                      src="/img/globalbusinesscountries/transport_icon.png"
                    />
                    <p>
                      <Link href="/industries/transportation-apps">
                        Transportation
                      </Link>
                    </p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                  <div class="ind_cat health">
                    <Image
                      width={50}
                      height={100}
                      unoptimized={true}
                      alt=""
                      src="/img/globalbusinesscountries/health_icon.png"
                    />
                    <p>
                      <Link href="/industries/health-care-apps">
                        Health Care
                      </Link>
                    </p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                  <div class="ind_cat real">
                    <Image
                      width={50}
                      height={100}
                      unoptimized={true}
                      alt=""
                      src="/img/globalbusinesscountries/real_icon.png"
                    />
                    <p>
                      <Link href="/industries/commercial-and-residential-apps">
                        Real Estate
                      </Link>
                    </p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                  <div class="ind_cat service">
                    <Image
                      width={50}
                      height={100}
                      unoptimized={true}
                      alt=""
                      src="/img/globalbusinesscountries/service_icon.png"
                    />
                    <p>
                      <Link href="/industries/service-contractors-and-cleaning-companies-apps">
                        Service Contractors
                      </Link>
                    </p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                  <div class="ind_cat goverment">
                    <Image
                      width={50}
                      height={100}
                      unoptimized={true}
                      alt=""
                      src="/img/globalbusinesscountries/goverment_icon.png"
                    />
                    <p>
                      <Link href="/industries/government-and-municipal-and-other-administrative-operations-apps">
                        Government Operations
                      </Link>
                    </p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                  <div class="ind_cat school">
                    <Image
                      width={50}
                      height={100}
                      unoptimized={true}
                      alt=""
                      src="/img/globalbusinesscountries/school_icon.png"
                    />
                    <p>
                      <Link href="/industries/schools-and-education-apps">
                        Schools and Education
                      </Link>
                    </p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                  <div class="ind_cat accounts">
                    <Image
                      width={50}
                      height={100}
                      unoptimized={true}
                      alt=""
                      src="/img/globalbusinesscountries/accounts_icon.png"
                    />
                    <p>
                      <Link href="/industries/accountants-and-financial-services-real-estate-apps">
                        Accountants & Financial
                      </Link>
                    </p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                  <div class="ind_cat profassional">
                    <Image
                      width={50}
                      height={100}
                      unoptimized={true}
                      alt=""
                      src="/img/globalbusinesscountries/profassional_icon.png"
                    />
                    <p>
                      <Link href="/industries/professional-consultant-mobile-app-development">
                        Professional Consultants
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonial_country">
        <div class="container">
          <h3>What Our Client Say About Us</h3>
          {/* <div
            id="country_testimonial"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#country_testimonial"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#country_testimonial" data-slide-to="1"></li>
              <li data-target="#country_testimonial" data-slide-to="2"></li>
              <li data-target="#country_testimonial" data-slide-to="3"></li>
              <li data-target="#country_testimonial" data-slide-to="4"></li>
            </ol>

            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <Image
                  width={100}
                  height={100}
                  unoptimized={true}
                  src="/img/globalbusinesscountries/kesepara.jpg"
                  alt="Client"
                  class="user-image"
                />
                <div class="testi-text">
                  &quot;Exactly the best team available online ! I have been
                  working and communicating with a few companies over the
                  internet and i didn&apos;t see a single better company than
                  logicspice. They are{" "}
                  <Link
                    href="#"
                    style={{ cursor: "pointer", color: "#31aae1" }}
                    class="show_data"
                  >
                    More...
                  </Link>
                  <span class="hidendata" style={{ display: "none" }}>
                    {" "}
                    so skilled and professional. Their knowledge about coding is
                    incredible. And they never say &quot;no&quot; or &quot;we
                    can&apos;t&quot; to any situation. Actually they are the
                    best guys i have ever work with in my life. Their
                    communication, kindness are so high level. Every step of my
                    project, every progress of my project we need maybe 15 to 20
                    changes. And every time i wrote those needs to them, they
                    did their work at most 1-2 days. Their speed and work
                    quality is amazing ! Final word to those who wants to hire
                    them: don&apos;t think twice ! Literally they are the best
                    team in this website. And also their work progress and
                    milestones are literally clear as they said. I am advising
                    them to all of my friends and i will hire them again for
                    sure !&quot;
                  </span>
                </div>
                <div class="userName">Burak</div>
                <div class="userTitle">Turkey</div>
              </div>
              <div class="item">
                <Image
                  width={100}
                  height={100}
                  unoptimized={true}
                  src="/img/globalbusinesscountries/dsherevk.jpg"
                  alt="Client"
                  class="user-image"
                />
                <div class="testi-text">
                  &quot;Manish was very cooperative and professional during the
                  project. The team was great, the project was very complicated
                  and they tried their best to complete it with the best
                  diligence. I
                  <Link
                    href="#"
                    style={{ cursor: "pointer", color: "#31aae1" }}
                    class="second_show"
                  >
                    More...
                  </Link>{" "}
                  <span class="second_slid" style={{ display: "none" }}>
                    {" "}
                    will definitely contact this company in the future for my
                    project updates and would recommend to anyone who is looking
                    for a good quality work.&quot;
                  </span>
                </div>
                <div class="userName">Dmitry</div>
                <div class="userTitle">Canada</div>
              </div>
              <div class="item">
                <Image
                  width={100}
                  height={100}
                  unoptimized={true}
                  src="/img/globalbusinesscountries/sabdeen.jpg"
                  alt="Client"
                  class="user-image"
                />
                <div class="testi-text">
                  &quot;Best project management experience/journey I had. Great
                  team spirit, very flexible and understanding while maintaining
                  time and budget target.Top tear professional communication and
                  support.&quot;
                </div>
                <div class="userName">Sherif A.</div>
                <div class="userTitle">Dubai</div>
              </div>
              <div class="item">
                <Image
                  width={100}
                  height={100}
                  unoptimized={true}
                  src="/img/globalbusinesscountries/beatbuehlmann.jpg"
                  alt="Client"
                  class="user-image"
                />
                <div class="testi-text">
                  &quot;Excellent work again from logicspice! They definitely
                  put their best effort into the project along with very
                  valuable inputs regarding possible enhancements of the web
                  project. With logicspice
                  <Link
                    href="#"
                    style={{ cursor: "pointer", color: "#31aae1" }}
                    class="third_show"
                  >
                    More...
                  </Link>{" "}
                  <span class="third_slid" style={{ display: "none" }}>
                    {" "}
                    you don&apos;t just hire someone to execute your project
                    specification but much more someone who helps you really
                    make good and sophisticated web project. The communication
                    is greate and feedback time very short. I really can&apos;t
                    find anything to criticise and will definitely rehire soon
                    as I&apos;m very happy with their work. Thanks a lot to
                    Manish and his team!&quot;
                  </span>
                </div>
                <div class="userName">Beat B.</div>
                <div class="userTitle">Switzerland</div>
              </div>
              <div class="item">
                <Image
                  width={100}
                  height={100}
                  unoptimized={true}
                  src="/img/globalbusinesscountries/tjulia1.jpg"
                  alt="Client"
                  class="user-image"
                />
                <div class="testi-text">
                  &quot;I hired this team for a very complex project that
                  involved handling many different types of users, payment
                  options, and social network integration. Extremely timely and
                  professional. Will use again!&quot;
                </div>
                <div class="userName">Tom J.</div>
                <div class="userTitle">USA</div>
              </div>
            </div>
          </div> */}
          <Slider {...date}>
            <div id="country_testimonial">
              <div class="item">
                <Image
                  width={100}
                  height={100}
                  unoptimized={true}
                  src="/img/globalbusinesscountries/dsherevk.jpg"
                  alt="Client"
                  class="user-image"
                />
                <div class="testi-text">
                  &quot;Manish was very cooperative and professional during the
                  project. The team was great, the project was very complicated
                  and they tried their best to complete it with the best
                  diligence. I{" "}
                  <Link
                    href="#"
                    style={{ cursor: "pointer", color: "#31aae1" }}
                    class="second_show"
                  >
                    More...
                  </Link>{" "}
                  <span class="second_slid" style={{ display: "none" }}>
                    {" "}
                    will definitely contact this company in the future for my
                    project updates and would recommend to anyone who is looking
                    for a good quality work.&quot;
                  </span>
                </div>
                <div class="userName">Dmitry</div>
                <div class="userTitle">Canada</div>
              </div>
              {/* <div class="item">
                <Image
                  width={100}
                  height={100}
                  unoptimized={true}
                  src="/img/globalbusinesscountries/sabdeen.jpg"
                  alt="Client"
                  class="user-image"
                />
                <div class="testi-text">
                  &quot;Best project management experience/journey I had. Great
                  team spirit, very flexible and understanding while maintaining
                  time and budget target.Top tear professional communication and
                  support.&quot;
                </div>
                <div class="userName">Sherif A.</div>
                <div class="userTitle">Dubai</div>
              </div>
              <div class="item">
                <Image
                  width={100}
                  height={100}
                  unoptimized={true}
                  src="/img/globalbusinesscountries/beatbuehlmann.jpg"
                  alt="Client"
                  class="user-image"
                />
                <div class="testi-text">
                  &quot;Excellent work again from logicspice! They definitely
                  put their best effort into the project along with very
                  valuable inputs regarding possible enhancements of the web
                  project. With logicspice
                  <Link
                    href="#"
                    style={{ cursor: "pointer", color: "#31aae1" }}
                    class="third_show"
                  >
                    More...
                  </Link>{" "}
                  <span class="third_slid" style={{ display: "none" }}>
                    {" "}
                    you don&apos;t just hire someone to execute your project
                    specification but much more someone who helps you really
                    make good and sophisticated web project. The communication
                    is greate and feedback time very short. I really can&apos;t
                    find anything to criticise and will definitely rehire soon
                    as I&apos;m very happy with their work. Thanks a lot to
                    Manish and his team!&quot;
                  </span>
                </div>
                <div class="userName">Beat B.</div>
                <div class="userTitle">Switzerland</div>
              </div>
              <div class="item">
                <Image
                  width={100}
                  height={100}
                  unoptimized={true}
                  src="/img/globalbusinesscountries/tjulia1.jpg"
                  alt="Client"
                  class="user-image"
                />
                <div class="testi-text">
                  &quot;I hired this team for a very complex project that
                  involved handling many different types of users, payment
                  options, and social network integration. Extremely timely and
                  professional. Will use again!&quot;
                </div>
                <div class="userName">Tom J.</div>
                <div class="userTitle">USA</div>
              </div> */}
            </div>
            <div id="country_testimonial">
              <div class="item">
                <Image
                  width={100}
                  height={100}
                  unoptimized={true}
                  src="/img/globalbusinesscountries/sabdeen.jpg"
                  alt="Client"
                  class="user-image"
                />
                <div class="testi-text">
                  &quot;Best project management experience/journey I had. Great
                  team spirit, very flexible and understanding while maintaining
                  time and budget target.Top tear professional communication and
                  support.&quot;
                </div>
                <div class="userName">Sherif A.</div>
                <div class="userTitle">Dubai</div>
              </div>
            </div>
            <div id="country_testimonial">
              <div class="item">
                <Image
                  width={100}
                  height={100}
                  unoptimized={true}
                  src="/img/globalbusinesscountries/beatbuehlmann.jpg"
                  alt="Client"
                  class="user-image"
                />
                <div class="testi-text">
                  &quot;Excellent work again from logicspice! They definitely
                  put their best effort into the project along with very
                  valuable inputs regarding possible enhancements of the web
                  project. With logicspice{" "}
                  <Link
                    href="#"
                    style={{ cursor: "pointer", color: "#31aae1" }}
                    class="third_show"
                  >
                    More...
                  </Link>{" "}
                  <span class="third_slid" style={{ display: "none" }}>
                    {" "}
                    you don&apos;t just hire someone to execute your project
                    specification but much more someone who helps you really
                    make good and sophisticated web project. The communication
                    is greate and feedback time very short. I really can&apos;t
                    find anything to criticise and will definitely rehire soon
                    as I&apos;m very happy with their work. Thanks a lot to
                    Manish and his team!&quot;
                  </span>
                </div>
                <div class="userName">Beat B.</div>
                <div class="userTitle">Switzerland</div>
              </div>
            </div>
            <div id="country_testimonial">
              <div class="item">
                <Image
                  width={100}
                  height={100}
                  unoptimized={true}
                  src="/img/globalbusinesscountries/tjulia1.jpg"
                  alt="Client"
                  class="user-image"
                />
                <div class="testi-text">
                  &quot;I hired this team for a very complex project that
                  involved handling many different types of users, payment
                  options, and social network integration. Extremely timely and
                  professional. Will use again!&quot;
                </div>
                <div class="userName">Tom J.</div>
                <div class="userTitle">USA</div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      <section class="hire_exp">
        <div class="container">
          <h2>Hire Developers in 5 easy steps</h2>
          <ul class="hire-step">
            <li>
              <div class="hs1">
                <Image
                  width={80}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/ryr.png"
                />
                <p>Raise Your Request</p>
              </div>
            </li>
            <li>
              <div class="hs1">
                <Image
                  width={80}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/dyr.png"
                />
                <p>Discuss Your Requirment</p>
              </div>
            </li>
            <li>
              <div class="hs1">
                <Image
                  width={80}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/select-expert.png"
                />
                <p>Select Experts</p>
              </div>
            </li>
            <li>
              <div class="hs1">
                <Image
                  width={80}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/ftt.png"
                />
                <p>Finalize the Terms</p>
              </div>
            </li>
            <li>
              <div class="hs1">
                <Image
                  width={80}
                  height={100}
                  unoptimized={true}
                  alt=""
                  src="/img/globalbusinesscountries/asign.png"
                />
                <p>Assign and kick start</p>
              </div>
            </li>
          </ul>
          <div class="clearfix"></div>
          <br />
          <div class="btn-hire-coun btn btn-primary" onClick={openModal}>
            <a> Hire Developer Now</a>
            {
              <Enquirymodal
                modalStatus={showModal}
                toggle={openModal}
                title="Request To Hire Developer"
              />
            }
            {/* <Link
            href="#"
              data-toggle="modal"
              data-target="#popup_sc_product"
              onclick='if (!window.__cfRLUnblockHandlers) return false; $("#update_frm").html("Request To Hire Developer");
                        $("#contact_fr").val("Hire Developer");
                   '
              id=""
              class="btn btn-primary"
              data-cf-modified-9292b238862a94c383a50f91-=""
            >
              Hire Developer Now
            </Link> */}
          </div>
        </div>
      </section>

      <div
        class="modal fade country-pop"
        id="USA"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title" id="myModalLabel">
                USA
              </h4>
            </div>
            <div class="modal-body">
              <ul>
                <li>
                  <Link href="/usa/mobile-app-development-in-california">
                    {" "}
                    California{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/usa/mobile-app-development-in-miami">
                    {" "}
                    Miami{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/usa/mobile-app-development-in-florida">
                    {" "}
                    Florida{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/usa/mobile-app-development-in-losangeles">
                    {" "}
                    Los angeles{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/usa/mobile-app-development-in-newyork">
                    {" "}
                    New york{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/usa/mobile-app-development-in-chicago">
                    {" "}
                    Chicago{" "}
                  </Link>
                </li>
              </ul>
              <div class="clearfix"></div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade country-pop"
        id="UAE"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title" id="myModalLabel">
                UAE
              </h4>
            </div>
            <div class="modal-body">
              <ul>
                <li>
                  <Link href="/uae/mobile-app-development-in-dubai">
                    {" "}
                    Dubai{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/uae/mobile-app-development-in-abu-dhabi">
                    {" "}
                    Abu Dhabi{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/uae/mobile-app-development-in-ajman">
                    {" "}
                    Ajman{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/uae/mobile-app-development-in-al-ain">
                    {" "}
                    Al Ain{" "}
                  </Link>
                </li>
              </ul>
              <div class="clearfix"></div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade country-pop"
        id="SW"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title" id="myModalLabel">
                Switzerland
              </h4>
            </div>
            <div class="modal-body">
              <ul>
                <li>
                  <Link href="/switzerland/mobile-app-development-in-geneva">
                    {" "}
                    Geneva{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/switzerland/mobile-app-development-in-zurich">
                    {" "}
                    Zürich{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/switzerland/mobile-app-development-in-basel">
                    {" "}
                    Basel{" "}
                  </Link>
                </li>
              </ul>
              <div class="clearfix"></div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade country-pop"
        id="belg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title" id="myModalLabel">
                Belgium
              </h4>
            </div>
            <div class="modal-body">
              <ul>
                <li>
                  <Link href="/belgium/mobile-app-development-in-brussels">
                    {" "}
                    Brussels{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/belgium/mobile-app-development-in-antwerp">
                    {" "}
                    Antwerp{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/belgium/mobile-app-development-in-ghent">
                    {" "}
                    Ghent{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/belgium/mobile-app-development-in-flanders">
                    {" "}
                    Flanders{" "}
                  </Link>
                </li>
              </ul>
              <div class="clearfix"></div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              width={100}
              height={100}
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
            />
          </a>
        </div>
        <div className="quote_pop_plus quote_pop_in" onClick={toggleModal}>
          <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
