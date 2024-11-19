"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "../../../../public/css/font-awesome.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
// import "../../@public/css/font-awesome.css";
// import "@/public/css/font-awesome.css"
// import "../public/css/font-awesome.min.css";
import "../../../../public/css/font-awesome.min.css";
import "../../../../public/css/font-awesome.css";

import "../../resposive.css";
import AOS from 'aos';
import 'aos/dist/aos.css';  // AOS Styles
const Page = () => {
  // var settings = {
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   autoplay: false,
  //   autoplaySpeed: 3000,
  // };
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px (tablets and mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  

  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {

    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <NavBar />
      <section className="WebDevelopmentBanner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="WebDevelopmentBannerBx">
                <h1>Web Development Services</h1>
                <p>
                  Turn your vision into reality with Logicspice&apos;s Web
                  Development Services, crafting tailored digital solutions to
                  drive business growth and enhance user experience.
                </p>
                <div className="btn btn-primary" onClick={openModal}>
                  <a>Enquire Now</a>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Web Development"
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
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="WebDevelopmentBannerImg">
                <Image
                  unoptimized={true}
                  width={380}
                  height={400 / (100 / 100)}
                  src="/img/webdevelopment/web-development-img.png"
                  alt="Web Development Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="WebDevelopmentClients">
        <div class="container">
          <ul>
            <li>
              <span>Our Clients</span>
            </li>
            <li>
              <Image
                unoptimized={true}
                width={80}
                height={500 / (100 / 100)}
                src="/img/webdevelopment/client-logo-img1.png"
                alt="Web Development Services"
              />
            </li>
            <li>
              <Image
                unoptimized={true}
                width={140}
                height={500 / (100 / 100)}
                src="/img/webdevelopment/client-logo-img2.png"
                alt="Web Development Services"
              />
            </li>
            <li>
              <Image
                unoptimized={true}
                width={100}
                height={500 / (100 / 100)}
                src="/img/webdevelopment/client-logo-img3.png"
                alt="Web Development Services"
              />
            </li>
            <li>
              <Image
                unoptimized={true}
                width={300}
                height={500 / (100 / 100)}
                src="/img/webdevelopment/client-logo-img4.png"
                alt="Web Development Services"
              />
            </li>
          </ul>
        </div>
      </section>
      <section className="WebDevelopmentApplication">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="WebDevelopmentApplicationBx">
                <h2>
                  Web <span>Development</span>
                </h2>
                <p>
                  Web development is building platform-independent solutions
                  using an ideal combination of technologies to meet business
                  requirements. Our team ensures to deliver 100%{" "}
                  <Link href="/custom-solutions" target="_blank">
                    customized web applications
                  </Link>{" "}
                  that work efficiently across multiple platforms and devices.
                </p>
                <p>
                  Custom web app development services process the latest and
                  most advanced form of technological inputs while programming
                  web applications. We make sure that our clients get to
                  interact with the process of development of a website. Our
                  designers and developers work extensively on the application
                  across different platforms to provide grace and fluidity. We
                  build websites or web applications using JavaScript, CSS3,
                  HTML5, and other development frameworks.
                </p>
                <p>
                  Our team provides a phenomenal service to all our clients
                  through different platforms. Being a Custom web app
                  development company, we build simplified and genuine
                  applications. Our commitment lies in developing authentic,
                  simplified applications, distinguishing us in web development
                  and design services. Our client-focused approach to{" "}
                  <strong>custom web application development</strong>{" "}
                  demonstrates our expertise and dedication to delivering
                  high-quality, bespoke solutions that surpass clients&apos;
                  expectations.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="WebDevelopmentApplicationImg">
                <Image
                  unoptimized={true}
                  width={600}
                  height={500 / (100 / 100)}
                  src="/img/webdevelopment/web-application-development-img.png"
                  alt="Web Development Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="WebDesignDevelopmentSection">
        <div className="container">
          <div className="TopHadding">
            <h2>
              Web <span>Development Services</span>
            </h2>
          </div>
          <div className="WebDesignDevelopment">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="WebDesignDevelopmentBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={100}
                      height={100}
                      src="/img/webdevelopment/web-design-icon1.png"
                      alt="Web Development Services"
                    />
                  </i>
                  <h3>
                    Responsive Web
                    <br /> Design
                  </h3>
                  <p>
                    Optimal viewing and interaction across devices, from
                    desktops to mobile phones.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="WebDesignDevelopmentBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={100}
                      height={100}
                      src="/img/webdevelopment/web-design-icon2.png"
                      alt="Web Development Services"
                    />
                  </i>
                  <h3>
                    Custom <br />
                    Web Development
                  </h3>
                  <p>
                    Tailored websites from scratch, aligning with your brand and
                    business goals.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="WebDesignDevelopmentBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={90}
                      height={100}
                      src="/img/webdevelopment/web-design-icon3.png"
                      alt="Web Development Services"
                    />
                  </i>
                  <h3>E-Commerce Development</h3>
                  <p>
                    User-friendly e-commerce platforms with secure payment and
                    efficient inventory systems.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="WebDesignDevelopmentBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={85}
                      height={100}
                      src="/img/webdevelopment/web-design-icon4.png"
                      alt="Web Development Services"
                    />
                  </i>
                  <h3>Content Management Systems (CMS)</h3>
                  <p>
                    Robust CMS platforms for easy content management and
                    audience engagement.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="WebDesignDevelopmentBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={90}
                      height={100}
                      src="/img/webdevelopment/web-design-icon5.png"
                      alt="Web Development Services"
                    />
                  </i>
                  <h3>
                    Web Application <br />
                    Development
                  </h3>
                  <p>
                    Dynamic web applications tailored to your business needs.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="WebDesignDevelopmentBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={100}
                      height={100}
                      src="/img/webdevelopment/web-design-icon6.png"
                      alt="Web Development Services"
                    />
                  </i>
                  <h3>SEO Optimization</h3>
                  <p>
                    Enhancing your website&apos;s visibility on search engines
                    to drive more organic traffic.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="WebDesignDevelopmentBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={80}
                      height={100}
                      src="/img/webdevelopment/web-design-icon7.png"
                      alt="Web Development Services"
                    />
                  </i>
                  <h3>
                    Website Maintenance <br />
                    and Support
                  </h3>
                  <p>
                    Ongoing support to keep your website updated, secure, and
                    functional.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="WebDesignDevelopmentBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={85}
                      height={100}
                      src="/img/webdevelopment/web-design-icon8.png"
                      alt="Web Development Services"
                    />
                  </i>
                  <h3>
                    Website <br />
                    Analytics
                  </h3>
                  <p>
                    Implementing analytics tools to track and analyze your
                    website&apos;s performance and user behavior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="WebFeaturesSection">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="TopHadding">
                <h2>
                  Core Features of{" "}
                  <span>
                    Web
                    <br />
                    Development
                  </span>
                </h2>
                <ul>
                  <li>
                    <strong>Top-level confidentiality:</strong> Privacy is given
                    utmost
                    <br /> priority.
                  </li>
                  <li>
                    <strong>Personalized applications:</strong> The entire
                    application is <br />
                    adjustable.
                  </li>
                  <li>
                    <strong>Flexible rates:</strong> Web development can help
                    you get more services at reasonable rates.
                  </li>
                  <li>
                    <strong>Customizable themes and designs:</strong> The
                    designs can be completely customized per your
                    recommendations.
                  </li>
                  <li>
                    <strong>Comprehensive and interactive reporting:</strong>{" "}
                    The web system offers an interactive and wide-ranging app.
                  </li>
                  <li>
                    <strong>
                      Assortment of skill sets among the developers:
                    </strong>{" "}
                    Web developers have made themselves proficient with the
                    different platforms and their separate requirements for
                    application development.{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="TopHadding WebFeaturesRight">
                <h2>
                  Benefits of Web Design
                  <br />
                  <span>and Development</span>
                </h2>
                <ul>
                  <li>
                    <strong>Easy Maintenance:</strong> Web development requires
                    updates only on the server side, simplifying maintenance and
                    ensuring users always access the latest version.
                  </li>
                  <li>
                    <strong>Secure:</strong> With stringent security measures
                    and regular server-side updates, web development offers a
                    secure environment, protecting against potential cyber
                    threats.
                  </li>
                  <li>
                    <strong>Better User Experience:</strong> Web development
                    offers improved user experience on each platform.
                  </li>
                  <li>
                    <strong>Easy To Monetize:</strong> Easy integration is
                    available, making things smooth for running ads and other
                    elements.
                  </li>
                  <li>
                    <strong>Scaling Is Easy:</strong> Scaling your website to
                    meet the changing requirements is necessary, and web
                    development comes with easy scaling.
                  </li>
                  <li>
                    <strong>Fast:</strong> A web application is much faster than
                    a native app because of a single codebase being run on
                    different platforms.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="WebLatestProjectsSection">
        <div className="container">
          <div className="TopHadding">
            <h2>
              Latest <span>Projects</span>
            </h2>
          </div>
          <div className="WebLatestProjects">
            <div className="" id="slide-latestproducts">
              <Slider {...settings}>
                <div className="WebLatestProjectsSlide WebLatestGreen">
                  <div className="WebProjectLogo">
                    <Image
                      unoptimized={true}
                      width={70}
                      height={100 / (100 / 100)}
                      src="/img/webdevelopment/goodluck-logo.png"
                      alt="Web Development Services"
                    />
                  </div>
                  <p>
                    Create your profile, showcasing your experience, skills and
                    the markets you can reach.
                  </p>
                  <div className="WebProjectInfo">
                    <div className="WebProjectInfoLeft">
                      <Link href="https://www.goodlucknc.com/" target="_blank">
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </div>
                    <div className="WebProjectInfoView">
                      <Link href="/portfolio" className="">
                        View Portfolio
                      </Link>
                    </div>
                  </div>
                  <div className="WebProjectImg">
                    <div className="WebProjectImgBx">
                      <Image
                        unoptimized={true}
                        width={450}
                        height={500 / (100 / 100)}
                        src="/img/webdevelopment/goodluck-img.png"
                        alt="Web Development Services"
                      />
                    </div>
                  </div>
                  <div className="RingImg">
                    <Image
                      unoptimized={true}
                      width={170}
                      height={100}
                      src="/img/webdevelopment/ring-img.png"
                      alt="Web Development Services"
                    />
                  </div>
                </div>
                <div className="WebLatestProjectsSlide WebLatestRed">
                  <div className="WebProjectLogo">
                    <Image
                      unoptimized={true}
                      width={200}
                      height={500 / (100 / 100)}
                      src="/img/webdevelopment/salesagy-logo.png"
                      alt="Web Development Services"
                    />
                  </div>
                  <p>
                    Create your profile, showcasing your experience, skills and
                    the markets you can reach.
                  </p>
                  <div className="WebProjectInfo">
                    <div className="WebProjectInfoLeft">
                      <Link href="https://salesagy.com/" target="_blank">
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </Link>
                      <i class="fa fa-android" aria-hidden="true"></i>
                      <i className="fa-brands fa-apple" aria-hidden="true"></i>
                    </div>
                    <div className="WebProjectInfoView">
                      <Link href="/portfolio" className="">
                        View Portfolio
                      </Link>
                    </div>
                  </div>
                  <div className="WebProjectImg">
                    <div className="WebProjectImgBx">
                      <Image
                        unoptimized={true}
                        width={450}
                        height={500 / (100 / 100)}
                        src="/img/webdevelopment/salesagy-img.png"
                        alt="Web Development Services"
                      />
                    </div>
                  </div>
                  <div className="RingImg">
                    <Image
                      unoptimized={true}
                      width={170}
                      height={100}
                      src="/img/webdevelopment/ring-img.png"
                      alt="Web Development Services"
                    />
                  </div>
                </div>

                <div className="WebLatestProjectsSlide WebLatestJobatHome">
                  <div className="WebProjectLogo">
                    <Image
                      unoptimized={true}
                      width={120}
                      height={500 / (100 / 100)}
                      src="/img/webdevelopment/jobathome-logo.png"
                      alt="Web Development Services"
                    />
                  </div>
                  <p>
                    Create your profile, showcasing your experience, skills and
                    the markets you can reach.
                  </p>
                  <div className="WebProjectInfo">
                    <div className="WebProjectInfoLeft">
                      <a href="https://jobathome.fr/" target="_blank">
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="WebProjectInfoView">
                      <Link href="/portfolio" className="">
                        View Portfolio
                      </Link>
                    </div>
                  </div>
                  <div className="WebProjectImg">
                    <div className="WebProjectImgBx">
                      <Image
                        unoptimized={true}
                        width={400}
                        height={500 / (100 / 100)}
                        src="/img/webdevelopment/jobathome-img.png"
                        alt="Web Development Services"
                      />
                    </div>
                  </div>
                  <div className="RingImg">
                    <Image
                      unoptimized={true}
                      width={170}
                      height={100}
                      src="/img/webdevelopment/ring-img.png"
                      alt="Web Development Services"
                    />
                  </div>
                </div>
                <div className="WebLatestProjectsSlide WebLatestGreen">
                  <div className="WebProjectLogo">
                    <Image
                      unoptimized={true}
                      width={260}
                      height={500 / (100 / 100)}
                      src="/img/webdevelopment/fundcareusa-logo.png"
                      alt="Web Development Services"
                    />
                  </div>
                  <p>
                    Create your profile, showcasing your experience, skills and
                    the markets you can reach.
                  </p>
                  <div className="WebProjectInfo">
                    <div className="WebProjectInfoLeft">
                      <a href="https://fundcareusa.com/" target="_blank">
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="WebProjectInfoView">
                      <Link href="/portfolio" className="">
                        View Portfolio
                      </Link>
                    </div>
                  </div>
                  <div className="WebProjectImg">
                    <div className="WebProjectImgBx">
                      <Image
                        unoptimized={true}
                        width={400}
                        height={500 / (100 / 100)}
                        src="/img/webdevelopment/fundcareusa-img.png"
                        alt="Web Development Services"
                      />
                    </div>
                  </div>
                  <div className="RingImg">
                    <Image
                      unoptimized={true}
                      width={170}
                      height={100}
                      src="/img/webdevelopment/ring-img.png"
                      alt="Web Development Services"
                    />
                  </div>
                </div>

                <div className="WebLatestProjectsSlide WebLatestTacksm">
                  <div className="WebProjectLogo">
                    <Image
                      unoptimized={true}
                      width={200}
                      height={500 / (100 / 100)}
                      src="/img/webdevelopment/tacksm-logo.png"
                      alt="Web Development Services"
                    />
                  </div>
                  <p>
                    Create your profile, showcasing your experience, skills and
                    the markets you can reach.
                  </p>
                  <div className="WebProjectInfo">
                    <div className="WebProjectInfoLeft">
                      <a href="https://tacksm.com/" target="_blank">
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="WebProjectInfoView">
                      <Link href="/portfolio" className="">
                        View Portfolio
                      </Link>
                    </div>
                  </div>
                  <div className="WebProjectImg">
                    <div className="WebProjectImgBx">
                      <Image
                        unoptimized={true}
                        width={400}
                        height={500 / (100 / 100)}
                        src="/img/webdevelopment/tacksm-img.png"
                        alt="Web Development Services"
                      />
                    </div>
                  </div>
                  <div className="RingImg">
                    <Image
                      unoptimized={true}
                      width={170}
                      height={100}
                      src="/img/webdevelopment/ring-img.png"
                      alt="Web Development Services"
                    />
                  </div>
                </div>

                <div className="WebLatestProjectsSlide WebLatestVanessajo">
                  <div className="WebProjectLogo">
                    <Image
                      unoptimized={true}
                      width={230}
                      height={500 / (100 / 100)}
                      src="/img/webdevelopment/vanessajo-logo.png"
                      alt="Web Development Services"
                    />
                  </div>
                  <p>
                    Create your profile, showcasing your experience, skills and
                    the markets you can reach.
                  </p>
                  <div className="WebProjectInfo">
                    <div className="WebProjectInfoLeft">
                      <a href="https://www.vanessajo-ann.com/" target="_blank">
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                    <div className="WebProjectInfoView">
                      <Link href="/portfolio" className="">
                        View Portfolio
                      </Link>
                    </div>
                  </div>
                  <div className="WebProjectImg">
                    <div className="WebProjectImgBx">
                      <Image
                        unoptimized={true}
                        width={400}
                        height={500 / (100 / 100)}
                        src="/img/webdevelopment/vanessajo-img.png"
                        alt="Web Development Services"
                      />
                    </div>
                  </div>
                  <div className="RingImg">
                    <Image
                      unoptimized={true}
                      width={170}
                      height={100}
                      src="/img/webdevelopment/ring-img.png"
                      alt="Web Development Services"
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel_choose_features_section">
        <div className="container">
          <div className="TopHadding">
            <h2>
              Why Choose <span>Logicspice For Web Development?</span>
            </h2>
          </div>
          <div className="laravel_choose_features_bx WebProjectInfoChooseFeaturesBx">
            <div className="row">
              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img1">
                    <Image
                      unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/webdevelopment/webdevelopment-why-icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <p>
                      We ensure the integration of the latest technological
                      advancements in our web development processes.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img2">
                    <Image
                      unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/webdevelopment/webdevelopment-why-icon2.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <p>
                      With 18+ years of experience in the web development
                      industry, we have served 1900+ clients across 15
                      countries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 aos-init" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img3">
                    <Image
                      unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/webdevelopment/webdevelopment-why-icon3.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <p>
                      As a{" "}
                      <strong>
                        custom web application development company
                      </strong>
                      , we offer services that excel in quality while being
                      cost-effective.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 aos-init" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img4">
                    <Image
                      unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/webdevelopment/webdevelopment-why-icon4.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <p>
                      We prioritize seamless communication with clients to
                      create web applications that suit their unique
                      requirements perfectly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 aos-init" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img5">
                    <Image
                      unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/webdevelopment/webdevelopment-why-icon5.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <p>
                      Our{" "}
                      <Link
                        href="/website-design"
                        target="_blank"
                        className="anchor_link"
                      >
                        web design
                      </Link>{" "}
                      and development team always focuses on client
                      satisfaction, always available for support and
                      communication.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 aos-init" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img6">
                    <Image
                      unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/webdevelopment/webdevelopment-why-icon6.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <p>
                      Committed to delivering{" "}
                      <strong>custom website development</strong> services, our
                      developers and designers go the extra mile to ensure
                      top-tier results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 main_btn_hire">
          <Link href="/hire-web-developers" className="btn btn-hire">
            Hire a Web Developer
          </Link>
        </div>
      </section>
      <section className="ecommerce_faq_section NewFaqDesignSection ">
        <div className="container">
          <div className="row">
            <div className="row ecommerce__Quick_FAQ CustomQuickFAQScript">
              <div className="col-md-5">
                <h4 className="title_main">
                  Frequently <br />
                  Asked Questions
                </h4>
                <div className="FaqImgBx">
                  <Image
                    unoptimized={true}
                    width={450}
                    height={500 / (100 / 100)}
                    src="/img/webdevelopment/FaqLaravelImg.png"
                    alt="Django Web Development Services"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="panel-group faq_quick_sec" id="accordion">
                  <MDBAccordion v-model="activeItem" borderless>
                    <MDBAccordionItem
                      headerTitle="What is web development?"
                      collapseId="flush-collapse1"
                      data-aos="fade-up"
                    >
                      <p>
                        Web development involves creating, building, and
                        maintaining websites. It includes aspects such as web
                        design, web publishing, web programming, and database
                        management.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What services does Logicspice web development company offer?"
                      collapseId="flush-collapse2"
                      data-aos="fade-up"
                    >
                      <p>
                        Logicspice, a web development company, offers various
                        services, including top-notch web design and development
                        services, and custom website development.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What sets Logicspice web application development company apart?"
                      collapseId="flush-collapse3"
                      data-aos="fade-up"
                    >
                      <p>
                        Logicspice creates tailored websites based on specific
                        client requirements, which standard web development
                        services may not cater to. We focus on delivering
                        high-quality, user-friendly, and SEO-optimized websites
                        to meet your business goals.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How does a web development agency enhance my business?"
                      collapseId="flush-collapse4"
                      data-aos="fade-up"
                    >
                      <p>
                        Logicspice web development agency can boost your online
                        presence, optimize your site for search engines, and
                        provide custom web development services to meet your
                        business goals.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Why should I opt for custom website development services?"
                      collapseId="flush-collapse5"
                      data-aos="fade-up"
                    >
                      <p>
                        Custom website development services offer personalized
                        solutions that cater to your business needs and improve
                        user experience, ultimately driving more traffic and
                        engagement.
                      </p>
                    </MDBAccordionItem>
                  </MDBAccordion>
                </div>
              </div>
            </div>
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
      </div>

      <Footer />
    </>
  );
};

export default Page;
