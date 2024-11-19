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
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const Page = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1.5,
    centerMode: true,
    vertical: false,
  };

  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {

    setShowModal(!showModal);
  };
  const [expanded, setExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleActiveItem = (collapseId) => {
    setActiveItem((prevActiveItem) =>
      prevActiveItem === collapseId ? null : collapseId
    );
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
    <div className="web_hosting">
    <NavBar />
      <section className="laravel-banner cackphp-banner web-hosting-banner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="laravel-banner-txt">
                <h1>Web Hosting</h1>
                <h6>
                  Hosting services tailored to your exact requirement
                  <br />
                  From here&sbquo; you can begin your search for the optimal web
                  hosting package.
                </h6>
                <ul>
                  <li>Easy-to-use control panel</li>
                  <li>Lightning Fast Servers</li>
                  <li>SSL Certificate</li>
                  <li>Fast & Secure</li>
                </ul>
                <div className="laravel-anquire">
                  <div className="btn btn-primary" onClick={openModal}>
                    <a>Enquire Now</a>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Web Hosting"
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
                  width={600}
                  height={500 / (100 / 100)}
                  src="/img/webhosting/web-hosting-banner-img.png"
                  alt="Web Hosting"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel-descriptions web-hosting-descriptions">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 pull-right">
              <div className="laravel_img">
                <Image
                  unoptimized={true}
                  width={250}
                  height={500 / (100 / 100)}
                  src="/img/webhosting/web-hosting-logo-img.png"
                  alt="Web Hosting Services"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6 pull-left">
              <div className="laravel-descriptions-bx" dir="ltr">
                <h2>Web Hosting</h2>
                <p>
                  Our top-rated web hosts will provide you access to the
                  resources you need to create professional-looking websites.
                </p>
                <p>
                  We offer you reliable web hosting to establish a presence on
                  the web. With the middle ground&sbquo; web hosting services
                  range from completely free to extremely pricey. Your hosting
                  needs&sbquo; as well as your budget&sbquo; will determine
                  which package is best for you. With the correct hosting
                  package&sbquo; you&apos;ll have access to the resources you
                  need to keep your site loading swiftly and consistently for
                  your visitors.{" "}
                </p>
                <p>
                  To illustrate&sbquo; consider the vast number of companies
                  that now rely heavily on their websites for sales and new
                  clientele. Unreliable websites won&apos;t keep visitors
                  waiting&sbquo; they&apos;ll leave for a site that works well
                  and meets their needs easily.
                </p>
                <p>
                  Many companies have benefited from our Web hosting services
                  and business-focused approach to web development&sbquo;
                  allowing them to launch with an effective interface and
                  powerful business system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel-devlopments-services">
        <div className="container">
          <h2>Web Hosting Services</h2>
          <p className="laravel_core_sub2">
            It would be best if you had a reliable web host like Logicspice to
            put your content on the web for personal or professional reasons.
            Dependability&sbquo; safety&sbquo; and a hassle-free experience are
            guaranteed with any of our plans.
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
                        src="/img/webhosting/web-hosting-icon1.png"
                        alt="Web Hosting Services"
                      />
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/webhosting/web-hosting-white-icon1.png"
                        alt="Web Hosting Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Shared Hosting</h3>
                  <p>
                    Everything you need to launch a successful internet presence
                    quickly&sbquo; affordably&sbquo; and with minimal effort.
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
                        src="/img/webhosting/web-hosting-icon2.png"
                        alt="Web Hosting Services"
                      />
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/webhosting/web-hosting-white-icon2.png"
                        alt="Web Hosting Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Reseller Hosting</h3>
                  <p>
                    You can run your own business by reselling hosting plans to
                    your customers.
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
                        src="/img/webhosting/web-hosting-icon3.png"
                        alt="Web Hosting Services"
                      />
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/webhosting/web-hosting-white-icon3.png"
                        alt="Web Hosting Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Email Hosting</h3>
                  <p>
                    Every email you send should serve as an opportunity to
                    promote your name and reputation.
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
                        src="/img/webhosting/web-hosting-icon4.png"
                        alt="Web Hosting Services"
                      />
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/webhosting/web-hosting-white-icon4.png"
                        alt="Web Hosting Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>VPS</h3>
                  <p>
                    Avail of Professional Help and Advice for Handling Your
                    Virtual Private Server or Dedicated Server!
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
                        src="/img/webhosting/web-hosting-icon5.png"
                        alt="Web Hosting Services"
                      />
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/webhosting/web-hosting-white-icon5.png"
                        alt="Web Hosting Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Dedicated Servers</h3>
                  <p>
                    Superior results that will help your company reach new
                    heights.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box6">
                    <i>
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/webhosting/web-hosting-icon6.png"
                        alt="Web Hosting Services"
                      />
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/webhosting/web-hosting-white-icon6.png"
                        alt="Web Hosting Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Wordpress Hosting</h3>
                  <p>
                    Use one of the best WordPress hosting services to host your
                    site on servers with settings optimized for the content
                    management system.
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
                        src="/img/webhosting/web-hosting-icon7.png"
                        alt="Web Hosting Services"
                      />
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/webhosting/web-hosting-white-icon7.png"
                        alt="Web Hosting Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>SSL Certificate</h3>
                  <p>
                    The SSL Certificate provided with our programmes provides
                    fundamental website security. It enables the configuration
                    of HTTPS on websites for secure connections.
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
                        src="/img/webhosting/web-hosting-icon8.png"
                        alt="Web Hosting Services"
                      />
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/webhosting/web-hosting-white-icon8.png"
                        alt="Web Hosting Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Website Backup Services</h3>
                  <p>
                    {" "}
                    We provide remote backup service. We protect website
                    content&sbquo; emails&sbquo; customer data&sbquo; sales and
                    financial details&sbquo; and inventory records on a regular
                    basis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel_core_features_section cackphp_core_features_section">
        <div className="container">
          <h2>Logicspice Web Hosting Features</h2>
          <p className="laravel_core_sub">
            Web Hosting has long been the preferred option for many
            professionals and businesses.
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
                      src="/img/webhosting/superlative_icon.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Superlative Results</h3>
                    <p>
                      We are worried about your website&apos;s speed. So&sbquo;
                      we use the most cutting-edge technology to run your
                      website&sbquo; such as HTTP/3 and IPv6&sbquo; as well as
                      LiteSpeed web servers and a content delivery network
                      (CDN).
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
                      src="/img/webhosting/complete_safety_icon.png"
                      alt="img2"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Complete Safety </h3>
                    <p>
                      We prioritize web server safety. Our Linux container -
                      based environment&sbquo; full DDoS protection&sbquo;
                      automated website backups&sbquo; auto-updates&sbquo; and
                      in-house designed setup will keep your website safe.
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
                      src="/img/webhosting/business_covered_icon.png"
                      alt="img4"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Got your Business Covered</h3>
                    <p>
                      In order to accommodate your expanding business and
                      storage needs&sbquo; Logicspice offers the option to
                      upgrade your current plan for an extra cost.
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
                      src="/img/webhosting/availability_help.png"
                      alt="img6"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Constant Availability of Help</h3>
                    <p>
                      You may expect a quick response to your support tickets
                      and access to live chat and phone help in case of any
                      problems.
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
                      src="/img/webhosting/regulated_icon.png"
                      alt="img5"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Maximum Regulated</h3>
                    <p>
                      LogicSpice will keep your code and website safe from harm.
                      We likely have what you need&sbquo; whether you&apos;re
                      experimenting with different versions of PHP or trying to
                      find ways to optimize your databases.
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
                      src="/img/webhosting/facilitated_wordpress_icon.png"
                      alt="img3"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Facilitated Wordpress </h3>
                    <p>
                      Using or managing a WordPress site on the WordPress
                      hosting platform is unnecessary. With features like
                      instant WordPress setup&sbquo; regular backups&sbquo; and
                      expert assistance&sbquo; your WordPress site is in safe
                      hands.
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
                      src="/img/webhosting/staging_icon.png"
                      alt="img6"
                    />
                  </div>
                  <div className="laravel_core_features_detail new-hit">
                    <h3>Wordpress Staging</h3>
                    <p>
                      It&apos;s not just about having a WordPress site managed
                      for you. Logicspice provides a staging environment for
                      your WordPress live site. You may create a duplicate of
                      your website&sbquo; experiment with layouts&sbquo;
                      content&sbquo; and more&sbquo; and only publish when
                      ready.
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
                      src="/img/webhosting/domain_icon.png"
                      alt="img6"
                    />
                  </div>
                  <div className="laravel_core_features_detail new-hit">
                    <h3>Domain Associated Email Address</h3>
                    <p>
                      Logicspice offers 3 email addresses associated with the
                      cPanel hosting&sbquo; which can be increased as per
                      specific requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ecommerce_faq_section JobBoardFaqSection">
        <div className="container">
          <div className="row">
            <div className=" row ecommerce__Quick_FAQ ">
              <div className="col-md-12 ecommerce__Quick_FAQ">
                <h4 className="title_main">Quick FAQ</h4>
                <div className="panel-group faq_quick_sec" id="accordion">
                <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                  
                    // headerTitle="01. What is web hosting ?"
                  
                    // collapseId="flush-collapse1"
                    //  data-aos="fade-up"
                    //  onClick={() => toggleActiveItem("flush-collapse1")}
                    collapseId="flush-collapse1"
                    data-aos="fade-up"
                    headerTitle={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleActiveItem("flush-collapse1")}
                      >
                        <span>
                        01. What is web hosting ?
                        </span>
                        {activeItem === "flush-collapse1" ? (
                          <KeyboardArrowDownIcon />
                        ) : (
                          < KeyboardArrowRightIcon/>
                        )}
                        </div>
                    }
                     
                  >
                    
                    <p>
                      Hosting refers to providing a location on a web server for
                      storing a website&apos;s files. Hosting a website makes
                      its components accessible over the World Wide Web. A
                      server is where you&apos;ll find every website you&apos;ve
                      ever visited.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    // headerTitle="02. What are the different types of Web Hosting Services?"
                    // collapseId="flush-collapse2"
                    //  data-aos="fade-up"
                    collapseId="flush-collapse2"
                    data-aos="fade-up"
                    headerTitle={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleActiveItem("flush-collapse2")}
                      >
                        <span>
                        02. What are the different types of Web Hosting Services?
                        </span>
                        {activeItem === "flush-collapse2" ? (
                          <KeyboardArrowDownIcon />
                        ) : (
                          < KeyboardArrowRightIcon/>
                        )}
                        </div>
                    }
                  >
                    <p>
                      Logicspice offers different types of hosting and provides
                      varying amounts of disc space for websites. Shared&sbquo;
                      dedicated&sbquo; virtual private server&sbquo; and
                      reseller hosting are the most common kinds of service. The
                      server technology employed&sbquo; the extent of
                      administration and the availability of ancillary services
                      all play a part in setting these plans apart.
                    </p>
                    <p>
                      Today&sbquo; you may choose from thousands of unique web
                      hosting packages from hundreds of different web hosts.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    // headerTitle="03. What is the difference between web hosting services and domains?"
                    collapseId="flush-collapse3"
                     data-aos="fade-up"
                  
                    headerTitle={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleActiveItem("flush-collapse3")}
                      >
                        <span>
                        03. What is the difference between web hosting services and domains?
                        </span>
                        {activeItem === "flush-collapse3" ? (
                          <KeyboardArrowDownIcon />
                        ) : (
                          < KeyboardArrowRightIcon/>
                        )}
                        </div>
                    }
                  >
                    <p>
                      When you type a website address into your browser&sbquo;
                      such as{" "}
                      <Link href="/" target="_blank">
                        https://www.logicspice.com
                      </Link>
                      &sbquo; the browser makes a domain name lookup&sbquo; in
                      this case&sbquo; to the Logicspice.com servers. To access
                      the data stored there&sbquo; a user launches their
                      browser.
                    </p>
                    <p>
                      Every website you frequent&sbquo; even those selling
                      goods&sbquo; must have its domain name and space on a web
                      server. The domain name is like the physical
                      location&sbquo; whereas the hosting is like the building
                      itself.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    // headerTitle="04. How does a web hosting service work?"
                    collapseId="flush-collapse4"
                     data-aos="fade-up"
                     headerTitle={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleActiveItem("flush-collapse4")}
                      >
                        <span>
                        04. How does a web hosting service work?
                        </span>
                        {activeItem === "flush-collapse4" ? (
                          <KeyboardArrowDownIcon />
                        ) : (
                          < KeyboardArrowRightIcon/>
                        )}
                        </div>
                    }
                  >
                    <p>
                      Users&apos; impressions of your website are the result of
                      assembling a large number of databases. Like most web
                      hosts&sbquo; Logicspice hosts your website&apos;s files
                      and databases on a shared server.
                    </p>
                    <p>
                      Whenever you enroll for a dedicated hosting plan with
                      Logicspice&sbquo; you&apos;ll be given access to your
                      account&apos;s control panel. The admin panel gives you
                      complete command over your website&sbquo; allowing you to
                      manage anything from domains and hosting to data and
                      files.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    // headerTitle="05. Why do I need a website host?"
                    collapseId="flush-collapse5"
                     data-aos="fade-up"
                     headerTitle={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleActiveItem("flush-collapse5")}
                      >
                        <span>
                        05. Why do I need a website host?
                        </span>
                        {activeItem === "flush-collapse5" ? (
                          <KeyboardArrowDownIcon />
                        ) : (
                          < KeyboardArrowRightIcon/>
                        )}
                        </div>
                    }
                  >
                    <p>
                      Your website cannot go live and become accessible to the
                      public without a hosting plan. Building a website without
                      even a hosting service is doable&sbquo; but beginners
                      should probably avoid doing so. If you&apos;re unsure how
                      to configure your personal computer to function as a
                      hosting server&sbquo; you may save money&sbquo;
                      time&sbquo; and frustration by using Logicspice Web
                      Hosting Services.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    // headerTitle="06. Can I purchase hosting without a domain name?"
                    collapseId="flush-collapse6"
                     data-aos="fade-up"
                     headerTitle={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          cursor: "pointer",
                        }}
                        onClick={() => toggleActiveItem("flush-collapse6")}
                      >
                        <span>
                        06. Can I purchase hosting without a domain name?
                        </span>
                        {activeItem === "flush-collapse6" ? (
                          <KeyboardArrowDownIcon />
                        ) : (
                          < KeyboardArrowRightIcon/>
                        )}
                        </div>
                    }
                  >
                    <p>
                      The answer is yes. You can purchase domain names from a
                      different registrar and then direct them to your
                      Logicspice server. Suppose you want to have your domain
                      and website hosted by the same company&sbquo; which we
                      highly recommend for convenience and easy troubleshooting.
                      In that case&sbquo; you can transfer your domain name to
                      Logicspice without losing your current site&apos;s
                      traffic. Get in touch with our helpful support
                      staff&sbquo;, and they will be glad to help.
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion>
                <div>
      
              </div>
               
              
              </div>
                
             </div>
            </div>
          </div>
        </div>
      </section>
      <div className="col-sm-12 main_btn_hire WebHireBtn">
        <div className="btn btn-primary" onClick={openModal}>
          <a>Enquire Now</a>
          {
            <Enquirymodal
              modalStatus={showModal}
              toggle={openModal}
              title="Web Hosting"
            />
          }
        </div>
      </div>
      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
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
    </div>
     
    </>
  );
};

export default Page;
