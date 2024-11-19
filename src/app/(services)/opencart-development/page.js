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
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {

    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <NavBar />
      <div className="openCartDevelopment"><section className="laravel-banner opencart-banner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="laravel-banner-txt">
                <h1>
                  OpenCart <br />
                  Framework Development
                </h1>
                <ul>
                  <li>Website Development </li>
                  <li>CMS Development</li>
                  <li>E-commerce Solution</li>
                  <li>Customized Development</li>
                </ul>
                <div className="laravel-anquire">
                  <div className="btn btn-primary" onClick={openModal}>
                    <a>Enquire Now</a>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="OpenCart Framework Development"
                      />
                    }
                  </div>
                  <Link
                    href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team&#44; I have a question regarding the solutions you provide. Please Help!"
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
                <Image unoptimized={true}
                  src="/img/opencartdevelopment/opencart-banner-img.png"
                  alt="OpenCart Framework Development"
                  width={401}
                  height={327}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="laravel-descriptions opencart-descriptions">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 pull-right">
              <div className="laravel_img">
                <Image unoptimized={true}
                  src="/img/opencartdevelopment/opencart-logo-img.png"
                  alt="OpenCart Framework Development"
                  width={500}
                  height={106}
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6 pull-left">
              <div className="laravel-descriptions-bx" dir="ltr">
                <h2>
                  OpenCart <br />
                  Framework Development
                </h2>
                <p>
                  OpenCart is a highly advanced shopping cart web solution.
                  OpenCart development services come with affluent features; it
                  is user-friendly and SEO friendly&#44; at the same time.
                  OpenCart comes with an attractive interface as it works as a
                  strong ecommerce solution for big as well as small online
                  businesses and features an in-built order management system
                  along with multiple payment gateway options.
                </p>
                <p>
                  OpenCart website development & OpenCart {" "}
                  <Link href="/mobile-app-development" target="_blank" style={{textDecoration : "underline", color: "#fff", fontWeight: "bold"}}> {""}
                    Mobile app development
                  </Link>{" "}
                  offers you with highly advanced&#44; customized and innovative
                  ecommerce solutions. These solutions perfectly blend with the
                  latest trends and are well featured to meet the diversified
                  and unique requirements of the business owners and their
                  customers. <b>OpenCart customization </b>
                  services have proven to be an effective solution and amazing
                  opportunity to own and establish a successful ecommerce
                  business venture.
                </p>

                <p>
                  {" "}
                  Hire Logicspice (an <b>OpenCart development company</b>)&#44;
                  we have a team of expert Opencart developers who excel in
                  creating world class OpenCart web design and mobile
                  applications. We keep all your business requirements in mind
                  ranging from customized theme OpenCart website design to
                  highly optimized and advanced OpenCart web solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="laravel-devlopments-services">
        <div className="container">
          <h2>OpenCart Development Services</h2>
          <p className="laravel_core_sub2">
            OpenCart is a highly advanced shopping cart web solution. OpenCart
            <br /> development services come with affluent features.
          </p>
          <div className="laravel-services-bx-top advanced_web_service_bx">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box1">
                    <i>
                      <Image unoptimized={true}
                        className="widout-hover"
                        src="/img/opencartdevelopment/opencart-new-icon1.png"
                        alt="OpenCart Framework Development"
                        width={80}
                        height={80}
                      />
                      <Image unoptimized={true}
                        className="on-hover"
                        src="/img/opencartdevelopment/opencart-white-icon1.png"
                        alt="OpenCart Framework Development"
                        width={80}
                        height={80}
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    OpenCart Customized
                    <br /> Development
                  </h3>
                  <p>
                    Modify the look of your site or mobile app with easy
                    customization features of OpenCart.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box4">
                    <i>
                      <Image unoptimized={true}
                        className="widout-hover"
                        src="/img/opencartdevelopment/codeigniter-new-icon1.png"
                        alt="OpenCart Framework Development"
                        width={80}
                        height={80}
                      />
                      <Image unoptimized={true}
                        className="on-hover"
                        src="/img/opencartdevelopment/codeigniter-white-icon1.png"
                        alt="OpenCart Framework Development"
                        width={80}
                        height={80}
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    3rd Party <br />
                    Integration
                  </h3>
                  <p>
                    The OpenCart development solutions integrate easily with the
                    third party API&apos;S.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box8">
                    <i>
                      <Image unoptimized={true}
                        className="widout-hover"
                        src="/img/opencartdevelopment/opencart-new-icon5.png"
                        alt="OpenCart Framework Development"
                        width={80}
                        height={80}
                      />
                      <Image unoptimized={true}
                        className="on-hover"
                        src="/img/opencartdevelopment/opencart-white-icon5.png"
                        alt="OpenCart Framework Development"
                        width={80}
                        height={80}
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    OpenCart
                    <br /> Migration
                  </h3>
                  <p>
                    OpenCart easily migrates between two OpenCart platforms with
                    the help of robust migration solutions.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box4">
                    <i>
                      <Image unoptimized={true}
                        className="widout-hover"
                        src="/img/opencartdevelopment/opencart-new-icon3.png"
                        alt="OpenCart Framework Development"
                        width={80}
                        height={80}
                      />
                      <Image unoptimized={true}
                        className="on-hover"
                        src="/img/opencartdevelopment/opencart-white-icon3.png"
                        alt="OpenCart Framework Development"
                        width={80}
                        height={80}
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    OpenCart
                    <br /> CMS
                  </h3>
                  <p>
                    The proficient developers deliver efficient CMS solutions
                    for OpenCart framework with fine effectiveness.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box7">
                    <i>
                      <Image unoptimized={true}
                        className="widout-hover"
                        src="/img/opencartdevelopment/opencart-new-icon4.png"
                        alt="OpenCart Framework Development"
                        width={80}
                        height={80}
                      />
                      <Image unoptimized={true}
                        className="on-hover"
                        src="/img/opencartdevelopment/opencart-white-icon4.png"
                        alt="OpenCart Framework Development"
                        width={80}
                        height={80}
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    OpenCart Extension
                    <br /> feature
                  </h3>
                  <p>
                    OpenCart is an easy but powerful open source framework that
                    easily supports a range of modular extensions.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box2">
                    <i>
                      <Image unoptimized={true}
                        className="widout-hover"
                        src="/img/opencartdevelopment/codeigniter-new-icon5.png"
                        alt="OpenCart Framework Development"
                        width={80}
                        height={80}
                      />
                      <Image unoptimized={true}
                        className="on-hover"
                        src="/img/opencartdevelopment/codeigniter-white-icon5.png"
                        alt="OpenCart Framework Development"
                        width={80}
                        height={80}
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    Theme <br />
                    designing
                  </h3>
                  <p>
                    Decorate your site or app with wide range of OpenCart web
                    development themes. It has something for all types of
                    businesses.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box3">
                    <i>
                      <Image unoptimized={true}
                        className="widout-hover"
                        src="/img/opencartdevelopment/opencart-new-icon2.png"
                        alt="OpenCart Framework Development"
                        width={80}
                        height={80}
                      />
                      <Image unoptimized={true}
                        className="on-hover"
                        src="/img/opencartdevelopment/opencart-white-icon2.png"
                        alt="OpenCart Framework Development"
                        width={80}
                        height={80}
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    OpenCart Website <br />
                    Development
                  </h3>
                  <p>
                    OpenCart programmers are experienced and skilled at
                    delivering impressive services and robust solutions to
                    design attractive sites.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box5">
                    <i>
                      <Image unoptimized={true}
                        className="widout-hover"
                        src="/img/opencartdevelopment/laravel-new-icon1.png"
                        alt="OpenCart Framework Development"
                        width={80}
                        height={80}
                      />
                      <Image unoptimized={true}
                        className="on-hover"
                        src="/img/opencartdevelopment/laravel-white-icon1.png"
                        alt="OpenCart Framework Development"
                        width={80}
                        height={80}
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    OpenCart ecommerce
                    <br /> development
                  </h3>
                  <p>
                    Comprehensive OpenCart ecommerce development techniques and
                    solutions can easily be used to create an impressive
                    ecommerce online business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="laravel_core_features_section advanced_core_features_section">
        <div className="container">
          <h2>Core Features Of OpenCart Development</h2>
          <p className="laravel_core_sub">
            OpenCart is a highly advanced shopping cart web solution. OpenCart
            <br /> development services come with affluent features.
          </p>
          <div className="laravel_core_features_bx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      src="/img/opencartdevelopment/opencart_features_icon1.png"
                      alt="img1"
                      width={55}
                      height={44}
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Wide-ranging Catalog Management</h3>
                    <p>
                      OpenCart manages a wide range of both startups and
                      well-established brands across a variety of industry
                      verticals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      src="/img/opencartdevelopment/opencart_features_icon2.png"
                      alt="img4"
                      width={40}
                      height={45}
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Instant checkout</h3>
                    <p>
                      The regular backup and updating feature allows instant
                      checkout on the OpenCart websites and apps.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      src="/img/opencartdevelopment/core_features_icon6.png"
                      alt="img2"
                      width={55}
                      height={44}
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Feature-rich accounts</h3>
                    <p>
                      The customers can achieve their business goals with high
                      end and sophisticated OpenCart services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      src="/img/opencartdevelopment/opencart_features_icon3.png"
                      alt="img5"
                      width={55}
                      height={44}
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Order Management</h3>
                    <p>
                      OpenCart offers a smooth and efficient order management
                      system which can be used by all types of entrepreneurs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      src="/img/opencartdevelopment/opencart_features_icon5.png"
                      alt="img3"
                      width={55}
                      height={44}
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>SEO Friendly</h3>
                    <p>
                      OpenCart is 100 per cent Search Engine friendly and well
                      recognized in all parts of the world.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      src="/img/opencartdevelopment/opencart_features_icon4.png"
                      alt="img3"
                      width={55}
                      height={44}
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>All-inclusive browsing assistance</h3>
                    <p>
                      OpenCart web development services include comprehensive
                      browsing assistance for its users.
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
            Why Choose OpenCart Framework <br /> For Web Development?
          </h2>
          <p className="laravel_core_sub2">
            OpenCart is a highly advanced shopping cart web solution. OpenCart
            <br /> development services come with affluent features.
          </p>
          <div className="laravel_choose_features_bx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img1">
                    <Image unoptimized={true}
                      src="/img/opencartdevelopment/opencart-why-icon1.png"
                      alt="img1"
                      width={66}
                      height={56}
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>OpenCart Customized Theme designs</h3>
                    <p>
                      OpenCart framework provides mobile responsive and highly
                      optimized template&#44; theme&#44; etc. designs
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img2">
                    <Image unoptimized={true}
                      src="/img/opencartdevelopment/opencart-why-icon2.png"
                      alt="img1"
                      width={66}
                      height={56}
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>OpenCart Consulting</h3>
                    <p>
                      OpenCart Consultancy explains you about technology
                      selection&#44; its uses&#44; community management and much
                      more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 " data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img3">
                    <Image unoptimized={true}
                      src="/img/opencartdevelopment/opencart-why-icon3.png"
                      alt="img1"
                      width={66}
                      height={56}
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>OpenCart Developers</h3>
                    <p>
                      Opencart is quite popular hence&#44; well experienced and
                      dedicated developers and programmers are easily available.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img4">
                    <Image unoptimized={true}
                      src="/img/opencartdevelopment/opencart-why-icon4.png"
                      alt="img1"
                      width={41}
                      height={54}
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>OpenCart tests</h3>
                    <p>
                      OpenCart performs a few tests on its own to check out its
                      performance such as functional tests&#44; usability
                      tests&#44; security tests&#44; etc.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img5">
                    <Image unoptimized={true}
                      src="/img/opencartdevelopment/opencart-why-icon5.png"
                      alt="img1"
                      width={66}
                      height={56}
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Integrated With Google Analytics</h3>
                    <p>
                      It can easily get integrated with google analytics so you
                      can track the traffic of your website.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img6">
                    <Image unoptimized={true}
                      src="/img/opencartdevelopment/opencart-why-icon6.png"
                      alt="img1"
                      width={66}
                      height={56}
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Marketing Tools</h3>
                    <p>
                      This tool allows to add and track the marketing campaigns.
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
                    title="OpenCart Framework Development"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&#44; I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image unoptimized={true}
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              width={500}
              height={500}
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
