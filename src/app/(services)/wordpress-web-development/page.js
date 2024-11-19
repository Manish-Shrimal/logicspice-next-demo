"use client";
import React, { useState } from "react";
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
import "../../resposive.css";
const Page = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.35,
    centerMode: true,
    vertical: false,
  };
  var clientfeadback = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    console.log(showModal);

    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <NavBar />
      <div className="wordpressWebdevelopment"><section className="laravel-banner custom-wordpress-banner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="laravel-banner-txt">
                <h1>
                  Custom
                  <br />
                  Wordpress Development
                </h1>
                <ul>
                  <li>Web Solution</li>
                  <li>CMS Development</li>
                  <li>Shopping Cart Development</li>
                  <li>Plugin Development</li>
                </ul>
                <div className="laravel-anquire">
                  <div className="btn btn-primary" onClick={openModal}>
                    <a>Enquire Now</a>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Custom Wordpress Development"
                      />
                    }
                  </div>
                  <Link
                    href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
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
                    width={500}
                    height={100 / (100 / 100)}
                  src="/img/wordpresswebdevelopment/custom-wordpress-development-img.png"
                  alt="Custom Wordpress Development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="laravel-descriptions custom-wordpress-descriptions">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 pull-right">
              <div className="laravel_img">
                <Image
                  width={300}
                  height={100 / (100 / 100)}
                  src="/img/wordpresswebdevelopment/custom-wordpress-logo-img.png"
                  alt="Custom Wordpress Development"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6 pull-left">
              <div className="laravel-descriptions-bx" dir="ltr">
                <h2>
                  Custom
                  <br /> Wordpress Development
                </h2>
                <p>
                  WordPress is one of the most prominent platforms when it comes
                  to Open Source content development system in the world.{" "}
                  <b>WordPress web development</b> is vastly used for business
                  and blog sites. WordPress website development is well-known
                  for its open source system which is user friendly in
                  nature&sbquo; it offers a wide-ranging directory of essential
                  plugins.
                </p>
                <p>
                  WordPress website design offers a very powerful and reliable
                  template framework with an easily accessible and trouble-free
                  executive dashboard. WordPress is a very successful platform
                  used for almost everything from creating blogs to excessively
                  functional ecommerce sites.
                </p>
                <p>
                  {" "}
                  At Logicspice&sbquo; we offer adept{" "}
                  <b>WordPress development services </b> by skilled programmers
                  who have experience in offering powerful and smart WordPress
                  development solutions for clients from all over the world.
                  WordPress website development services include a wide range of
                  services such as plug-ins development&sbquo;
                  <Link
                    href="/open-source-cms"
                    target="_blank"
                  >
                    CMS development
                  </Link>
                  &sbquo; theme customization and maintenance backed up with
                  highly technically advanced tools and state of the art
                  infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="laravel-devlopments-services">
        <div className="container">
          <h2>WordPress Development Services</h2>
          <p className="laravel_core_sub2">
            WordPress is one of the most prominent platforms when it comes to
            Open <br />
            Source content development system in the world.
          </p>
          <div className="laravel-services-bx-top advanced_web_service_bx">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box1">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/wordpresswebdevelopment/laravel-new-icon1.png"
                        alt="Custom Wordpress Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/wordpresswebdevelopment/laravel-white-icon1.png"
                        alt="Custom Wordpress Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>WordPress web solutions</h3>
                  <p>
                    We offer a wide range of solutions for your ecommerce
                    development needs to manage the clients from all parts of
                    the world.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box4">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/wordpresswebdevelopment/wordpres-web-icon1.png"
                        alt="Custom Wordpress Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/wordpresswebdevelopment/wordpres-white-icon1.png"
                        alt="Custom Wordpress Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>WordPress Solutions for Migration</h3>
                  <p>
                    Migration between different platforms can be made so much
                    easier with the help of WordPress Migration Solutions.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box3">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/wordpresswebdevelopment/wordpres-web-icon2.png"
                        alt="Custom Wordpress Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/wordpresswebdevelopment/wordpres-white-icon2.png"
                        alt="Custom Wordpress Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Plug&ndash;in Development</h3>
                  <p>
                    Plug&ndash;in is one of the most essential features of
                    WordPress that allows you to write clean and clear. It
                    speeds up your work.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box4">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/wordpresswebdevelopment/codeigniter-new-icon3.png"
                        alt="Custom Wordpress Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/wordpresswebdevelopment/codeigniter-white-icon3.png"
                        alt="Custom Wordpress Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Third Party Application Integration</h3>
                  <p>
                    We offer immediate integration of WordPress development
                    solutions with the third party applications.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box5">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/wordpresswebdevelopment/wordpres-web-icon3.png"
                        alt="Custom Wordpress Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/wordpresswebdevelopment/wordpres-white-icon3.png"
                        alt="Custom Wordpress Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>WordPress CMS</h3>
                  <p>
                    WordPress is a clear and powerful open source framework
                    enabling development of CMS with the use efficient
                    solutions.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box2">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/wordpresswebdevelopment/codeigniter-new-icon5.png"
                        alt="Custom Wordpress Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/wordpresswebdevelopment/codeigniter-white-icon5.png"
                        alt="Custom Wordpress Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Design And Theme Integration</h3>
                  <p>
                    WordPress development service offers amazing assortment of
                    designs which will enliven your ecommerce sites.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box7">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/wordpresswebdevelopment/wordpres-web-icon4.png"
                        alt="Custom Wordpress Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/wordpresswebdevelopment/wordpres-white-icon4.png"
                        alt="Custom Wordpress Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>WordPress shopping cart development</h3>
                  <p>
                    We offer brilliant developers and secure solutions to
                    deliver you with completely functional e-store on your
                    WordPress site.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box8">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/wordpresswebdevelopment/codeigniter-new-icon7.png"
                        alt="Custom Wordpress Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/wordpresswebdevelopment/codeigniter-white-icon7.png"
                        alt="Custom Wordpress Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Customer Support and Maintenance</h3>
                  <p>
                    Our job extends beyond our relationship which can be felt by
                    our 24/7 support and maintenance facility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="laravel_core_features_section advanced_core_features_section">
        <div className="container">
          <h2>Core Features of WordPress Development</h2>
          <p className="laravel_core_sub">
            WordPress is one of the most prominent platforms when it comes to
            Open <br />
            Source content development system in the world.
          </p>
          <div className="laravel_core_features_bx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/wordpresswebdevelopment/wordpres_features_icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Advanced User framework</h3>
                    <p>
                      WordPress is featured with highly developed user
                      management feature.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/wordpresswebdevelopment/wordpres_features_icon2.png"
                      alt="img4"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Syndication</h3>
                    <p>
                      It offers dynamic and active syndications to the users.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/wordpresswebdevelopment/wordpres_features_icon3.png"
                      alt="img2"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Newsfeed</h3>
                    <p>
                      It is fast&sbquo; easier to manage the newsfeed for your
                      website and app.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/wordpresswebdevelopment/wordpres_features_icon4.png"
                      alt="img5"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Database</h3>
                    <p>
                      WordPress offer a clear and smooth working environment
                      which provides fully database driven website engines.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/wordpresswebdevelopment/wordpres_features_icon5.png"
                      alt="img3"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Additional content</h3>
                    <p>
                      WordPress provides instant editing facility as topic can
                      be added easily by the contributing authors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/wordpresswebdevelopment/wordpres_features_icon6.png"
                      alt="img6"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Multi level management</h3>
                    <p>
                      It features a well-organized management system at all
                      operational level.
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
            Why Choose WordPress Development Services <br /> For Web
            Development?
          </h2>
          <p className="laravel_core_sub2">
            WordPress is one of the most prominent platforms when it comes to
            Open <br />
            Source content development system in the world.
          </p>
          <div className="laravel_choose_features_bx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img1">
                    <Image
                      width={60}
                      height={100}
                      src="/img/wordpresswebdevelopment/codeigniter-why-icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>WordPress Editing</h3>
                    <p>
                      WordPress enables its users to edit and update the content
                      as per business fundamentals.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img2">
                    <Image
                      width={60}
                      height={100}
                      src="/img/wordpresswebdevelopment/codeigniter-why-icon2.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>WordPress Access</h3>
                    <p>
                      WordPress development services is highly secured and user
                      friendly. It comfortably runs on Linux&sbquo; MacOSX and
                      FreeBSD server.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 " data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img3">
                    <Image
                      width={60}
                      height={100}
                      src="/img/wordpresswebdevelopment/codeigniter-why-icon3.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>WordPress Plug&ndash;in</h3>
                    <p>
                      WordPress offers an extensive plugins directory for its
                      users.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img4">
                    <Image
                      width={60}
                      height={100}
                      src="/img/wordpresswebdevelopment/codeigniter-why-icon4.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>WordPress Framework</h3>
                    <p>
                      WordPress provides powerful and easy to use and administer
                      framework.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img5">
                    <Image
                      width={60}
                      height={100}
                      src="/img/wordpresswebdevelopment/codeigniter-why-icon5.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>WordPress Consulting</h3>
                    <p>
                      WordPress provides 24x7 inclusive maintenance & assistance
                      services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img6">
                    <Image
                      width={60}
                      height={100}
                      src="/img/wordpresswebdevelopment/codeigniter-why-icon6.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Customized Themes & Layouts</h3>
                    <p>
                      WordPress offers appealing theme designs which are vibrant
                      and it adorns your ecommerce sites.
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
                    title="Custom Wordpress Development"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel-portfolio-php-dev">
        <h2>Our WordPress Portfolio</h2>
        <div className="laravel-slider-bx">
          <div id="laravel-slader" className="">
            <Slider {...settings}>
              <div className="php-item">
                <a href="https://mastercutmyanmar.com/" target="_blank">
                  <Image
                    width={800}
                    height={500 / (100 / 100)}
                    src="/img/wordpresswebdevelopment/mastercutmyanmar-banner.png"
                    alt="img13"
                  />
                </a>
                <a
                  href="https://mastercutmyanmar.com/"
                  target="_blank"
                  className="visit-site"
                >
                  VISIT SITE
                </a>
              </div>
              <div className="php-item">
                <a href="https://nayasawera.org/" target="_blank">
                  <Image
                    width={800}
                    height={500 / (100 / 100)}
                    src="/img/wordpresswebdevelopment/nayasawera-banner.png"
                    alt="img14"
                  />
                </a>
                <a
                  href="https://nayasawera.org/"
                  target="_blank"
                  className="visit-site"
                >
                  VISIT SITE
                </a>
              </div>
              <div className="php-item">
                <a href="https://haitisupermarket.com/" target="_blank">
                  <Image
                    width={800}
                    height={500 / (100 / 100)}
                    src="/img/wordpresswebdevelopment/haitisupermarket-banner.png"
                    alt="img15"
                  />
                </a>
                <a
                  href="https://haitisupermarket.com/"
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
      </div></div>
      

      <Footer />
    </>
  );
};

export default Page;
