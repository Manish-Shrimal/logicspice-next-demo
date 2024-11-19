"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";

const Page = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.35,
    centerMode: true,
    vertical: false,
    autoplay: true,
    arrows: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
    

  };

  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    // console.log(showModal);

    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <NavBar />
      <div className="codeigniter-development">
        {" "}
        <section className="laravel-banner codeIgniter-banner">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="laravel-banner-txt">
                  <h1>
                    CodeIgniter
                    <br />
                    Framework Development
                  </h1>
                  <ul>
                    <li>Website Development </li>
                    <li>Social Network Development</li>
                    <li>E-commerce Solution</li>
                    <li>Solutions For Migration</li>
                  </ul>
                  <div className="laravel-anquire">
                    <div className="btn btn-primary" onClick={openModal}>
                      <a>Enquire Now</a>
                      {
                        <Enquirymodal
                          modalStatus={showModal}
                          toggle={openModal}
                          title="PHP Web Development Services"
                        />
                      }
                    </div>
                    <Link
                      href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
                      target="_blank"
                    >
                      <div className="WhatsappIcon">
                        <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                          <div className="coccoc-alo-ph-circle"></div>
                          <div className="coccoc-alo-ph-circle-fill"></div>
                          <div className="coccoc-alo-ph-img-circle"></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="page_img">
                  <Image
                    unoptimized={true}
                    width={650}
                    height={500 / (100 / 100)}
                    src="/img/codeigniterdevelopment/codeigniter-development-img.png"
                    alt="Codeigniter Development"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="laravel-descriptions codeigniter-descriptions">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 pull-right">
                <div className="laravel_img">
                  <Image
                    unoptimized={true}
                    width={300}
                    height={500 / (100 / 100)}
                    src="/img/codeigniterdevelopment/codeigniter-logo-img.png"
                    alt="laravel web development"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-6 pull-left">
                <div className="laravel-descriptions-bx" dir="ltr">
                  <h2>
                    CodeIgniter <br />
                    Framework Development
                  </h2>
                  <p>
                    CodeIgniter is the one of the most preferred platforms in
                    the Open Source Development works in the world. Budding and
                    well established companies are flocking towards CodeIgniter
                    Development to avail its buzzing services. It facilitates
                    the user with a scheduled framework to construct websites
                    and web pages with a PHP. The{" "}
                    <b>CodeIgniter Development Service</b> is SEO
                    friendly&sbquo; abundantly development&sbquo;amicable and
                    user friendly. It equips its users with easy to use tools
                    and acutely interactive interface.
                  </p>
                  <p>
                    CodeIgniter has been the talk of the week due to sundry
                    reasons but the main reason is its agility. The{" "}
                    <b>CodeIgniter Framework</b> Development offers an
                    unparalleled speed which makes it a big contributor to the
                    Open Source development projects. Its exceptional approach
                    and correct environment provides optimal solutions to the
                    requirements. Logicspice is a leading company when it comes
                    to offer world class quality CodeIgniter development
                    services. <b>CodeIgniter web service </b> promotes
                    utilization of its fertile framework to its fullest.
                  </p>

                  <p>
                    Logicspice is codeigniter development company who has a
                    great users experience gives an exceptional liberty to play
                    with their creativity and logics with zero struggles in
                    comprehending the interface. Our features have been
                    programmed to suit the latest trends and have been well
                    defined to meet the growing requirements of users and their
                    uses.
                  </p>

                  <p>
                    Hire CodeIgniter developers and avail the benefits from a
                    team of diverse developers. The developers and coders have
                    been chosen through a combination of their experience and
                    working skills. CodeIgniter web development service creates
                    elite web designs suiting to the latest trends in the mobile
                    applications&sbquo;{" "}
                    <Link
                      className="PhpProgramingLink"
                      href="/php-development"
                      target="_blank"
                    >
                      PHP programming services.
                    </Link>
                    Our services have been proven to enhance innovative and
                    inventive outcomes. Our softwares are assorted over a
                    diverse range with result oriented goals. It serves as a
                    platform for both big and small enterprises through its
                    multifaceted payment gateway options.{" "}
                    <b>CodeIgniter Web Development Company</b> has been a part
                    to diverse projects arising from almost every industrial
                    aspect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="laravel-devlopments-services">
          <div className="container">
            <h2>CodeIgniter Development Services</h2>
            <p className="laravel_core_sub2">
              CodeIgniter is the one of the most preferred platforms in the Open
              Source
              <br /> Development works in the world.
            </p>
            <div className="laravel-services-bx-top">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box1">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/codeigniterdevelopment/laravel-new-icon1.png"
                          alt="CodeIgniter Development"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/codeigniterdevelopment/laravel-white-icon1.png"
                          alt="CodeIgniter Development"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>CodeIgniter ecommerce Solutions</h3>
                    <p>
                      We offer wide ranging services ecommerce Development
                      solutions to managements and clients all over the world.
                    </p>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box4">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/codeigniterdevelopment/codeigniter-new-icon1.png"
                          alt="CodeIgniter Development"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/codeigniterdevelopment/codeigniter-white-icon1.png"
                          alt="CodeIgniter Development"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Third Party Application Integration</h3>
                    <p>
                      We advise instant integration of CodeIgniter development
                      services with the third party me updatedapplications.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box3">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/codeigniterdevelopment/codeigniter-new-icon2.png"
                          alt="CodeIgniter Development"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/codeigniterdevelopment/codeigniter-white-icon2.png"
                          alt="CodeIgniter Development"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Social Network Development</h3>
                    <p>
                      One of the most essential aspect of a business now days is
                      Social Networking which is managed by our developers with
                      advanced solutions.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box4">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/codeigniterdevelopment/codeigniter-new-icon3.png"
                          alt="CodeIgniter Development"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/codeigniterdevelopment/codeigniter-white-icon3.png"
                          alt="CodeIgniter Development"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>CodeIgniter Extension Development</h3>
                    <p>
                      CodeIgniter is a comprehensible and powerful open source
                      web application framework enabling development of modular
                      extensions.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box5">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/codeigniterdevelopment/codeigniter-new-icon4.png"
                          alt="CodeIgniter Development"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/phpdevelopment/codeigniter-white-icon4.png"
                          alt="CodeIgniter Development"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>CodeIgniter Web Developers</h3>
                    <p>
                      We offer brilliant developers with exceptional web
                      designing and developing skill sets.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box2">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/codeigniterdevelopment/codeigniter-new-icon5.png"
                          alt="CodeIgniter Development"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/codeigniterdevelopment/codeigniter-white-icon5.png"
                          alt="CodeIgniter Development"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Design and theme Integration</h3>
                    <p>
                      CodeIgniter development service offers mind blowing
                      collection of designs will invigorate your ecommerce
                      websites.
                    </p>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box7">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/codeigniterdevelopment/codeigniter-new-icon6.png"
                          alt="CodeIgniter Development"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/codeigniterdevelopment/codeigniter-white-icon6.png"
                          alt="CodeIgniter Development"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>CodeIgniter Solutions for Migration</h3>
                    <p>
                      Migration between different platforms can be made so much
                      easier with the help of CodeIgniter Migration Solutions.
                    </p>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box8">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/codeigniterdevelopment/codeigniter-new-icon7.png"
                          alt="CodeIgniter Development"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/codeigniterdevelopment/codeigniter-white-icon7.png"
                          alt="CodeIgniter Development"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Customer Support and Maintenance</h3>
                    <p>
                      Our work extends beyond our relationship which is
                      reflected through 24X7 professional support and
                      maintenance services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="laravel_core_features_section codeigniter_core_features_section">
          <div className="container">
            <h2>Core Features of CodeIgniter Development</h2>
            <p className="laravel_core_sub">
              CodeIgniter is the one of the most preferred platforms in the Open
              Source
              <br /> Development works in the world.
            </p>
            <div className="laravel_core_features_bx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/codeigniterdevelopment/codeigniter_features_icon1.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>MVC Based Framework</h3>
                      <p>
                        CodeIgniter is featured with reliable and
                        <br /> robust framework - MVC.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/codeigniterdevelopment/codeigniter_features_icon4.png"
                        alt="img4"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Authentic Process</h3>
                      <p>It is 100 percent secure and valid.</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/codeigniterdevelopment/codeigniter_features_icon2.png"
                        alt="img2"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Dynamic Division of Web Pages</h3>
                      <p>
                        It is fast&sbquo; easier to manage and dynamic in
                        <br /> nature.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/codeigniterdevelopment/codeigniter_features_icon5.png"
                        alt="img5"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Quick Response URL Routing</h3>
                      <p>
                        CodeIgniter provides instant responses to the <br />
                        URL routes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/codeigniterdevelopment/codeigniter_features_icon3.png"
                        alt="img3"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Multi Level Session Management</h3>
                      <p>
                        It features an efficient management system at every
                        operational level.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/codeigniterdevelopment/codeigniter_features_icon6.png"
                        alt="img6"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Fluidic and Comprehensible Working</h3>
                      <p>
                        CodeIgniter offer a clear&sbquo; logical and smooth
                        working environment to the programmers as well as to its
                        users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="laravel_choose_features_section">
          <div className="container">
            <h2>
              Why Choose CodeIgniter Development Services
              <br /> for Web Development?
            </h2>
            <p className="laravel_core_sub2">
              CodeIgniter is the one of the most preferred platforms in the Open
              Source
              <br /> Development works in the world.
            </p>
            <div className="laravel_choose_features_bx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_features_img laravel_choose_features_img1">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/codeigniterdevelopment/codeigniter-why-icon1.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>CodeIgniter Framework</h3>
                      <p>
                        CodeIgniter solutions provide a MVC controlled
                        framework.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_features_img laravel_choose_features_img2">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/codeigniterdevelopment/codeigniter-why-icon2.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>CodeIgniter Solution Access</h3>
                      <p>
                        The access provided by CodeIgniter development services
                        is highly secured and filtered using Cross-site
                        scripting or XSS.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6 " data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_features_img laravel_choose_features_img3">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/codeigniterdevelopment/codeigniter-why-icon3.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Faster Development and High Customization Perks</h3>
                      <p>
                        It provides high level of customization support and
                        faster development.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_features_img laravel_choose_features_img4">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/codeigniterdevelopment/codeigniter-why-icon4.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Excellent Documentation of CI framework</h3>
                      <p>
                        One of the most eminent features is its excellent
                        documentation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_features_img laravel_choose_features_img5">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/codeigniterdevelopment/codeigniter-why-icon5.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>CodeIgniter Consulting</h3>
                      <p>
                        CodeIgniter provides inclusive maintenance support for
                        all classes of management&apos;s with libraries.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_features_img laravel_choose_features_img6">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/codeigniterdevelopment/codeigniter-why-icon6.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Customized Theme designs</h3>
                      <p>
                        CodeIgniter offers alluring theme designing services
                        which are dynamic and always available to adorn your
                        ecommerce websites.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 main_btn_hire">
                <div className="btn btn-primary" onClick={openModal}>
                  <a>Enquire Now</a>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Codeigniter Development"
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="laravel-portfolio-php-dev">
          <h2>Our CodeIgniter Portfolio</h2>
          <div className="laravel-slider-bx">
            <div id="laravel-slader" className="">
              <Slider {...settings}>
                <div className="php-item">
                  <a href="https://www.eventigo.eu/" target="_blank">
                    <Image
                      unoptimized={true}
                      width={900}
                      height={500 / (100 / 100)}
                      src="/img/codeigniterdevelopment/eventigo-banner.png"
                      alt="img13"
                    />
                  </a>
                  <a
                    href="https://www.eventigo.eu/"
                    target="_blank"
                    className="visit-site"
                  >
                    VISIT SITE
                  </a>
                </div>
                <div className="php-item">
                  <a
                    href="https://www.fourstrokescoaching.com/"
                    target="_blank"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={500 / (100 / 100)}
                      src="/img/codeigniterdevelopment/fourstrokescoaching-banner.png"
                      alt="img14"
                    />
                  </a>
                  <a
                    href="https://www.fourstrokescoaching.com/"
                    target="_blank"
                    className="visit-site"
                  >
                    VISIT SITE
                  </a>
                </div>
                <div className="php-item">
                  <a href="https://www.entitymakers.com.au/" target="_blank">
                    <Image
                      unoptimized={true}
                      width={900}
                      height={500 / (100 / 100)}
                      src="/img/codeigniterdevelopment/entitymakers-banner.png"
                      alt="img15"
                    />
                  </a>
                  <a
                    href="https://www.entitymakers.com.au/"
                    target="_blank"
                    className="visit-site"
                  >
                    VISIT SITE
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        <div className="quoue_box_full_sec">
          <div className="whatsapp-call">
            <a
              href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
              target="_blank"
            >
              <Image
                unoptimized={true}
                width={50}
                height={100}
                src="/img/images/whatsapp.png"
                alt="whatsapp-icon"
              />
            </a>
          </div>
          <div className="quote_pop_plus quote_pop_in" onClick={toggleModal}>
            <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
