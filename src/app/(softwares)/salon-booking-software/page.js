"use client";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React, { lazy, Suspense, useEffect, useState } from "react";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
// import "../../../../public/css/font-awesome.min.css";
import "../../../../public/css/font-awesome.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../resposive.css";
// import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";

import dynamic from 'next/dynamic';
const FAQSection = dynamic(() => import('./FAQSection'), { ssr: false });
const Whylogicspice = dynamic(() => import("@/app/Components/Whylogicspice"), {
  ssr: false, // Disable server-side rendering if needed
});
const CustomerReviews = dynamic(() => import("./CustomerReviews"), {
  ssr: false, // Disable server-side rendering if needed
});
const SupportSection = dynamic(() => import("./SupportSection"), {
  ssr: false, // Disable server-side rendering if needed
});
const UsedTechnologies = dynamic(() => import("./UsedTechnologies"), {
  ssr: false, // Disable server-side rendering if needed
});
const TabSection = dynamic(() => import("./TabSection"), {
  ssr: false, // Disable server-side rendering if needed
});
const Features = dynamic(() => import("./Features"), {
  ssr: false, // Disable server-side rendering if needed
});
const ModalSection = dynamic(() => import("./ModalSection"), {
  ssr: false, // Disable server-side rendering if needed
});
const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [jobportal, setJobportal] = useState(false);
  const [buyjobportal, setBuyJobportal] = useState(false);
  const [demoAccessModal, setDemoAccessModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const toggleJobPortalModal = () => setJobportal(!jobportal);
  const toggleBuyJobPortalModal = () => setBuyJobportal(!buyjobportal);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const openModal = () => {
    // console.log(showModal);

    setShowModal(!showModal);
  };
  const openDemoAccessModal = () => {
    // console.log(showModal);

    setDemoAccessModal(!demoAccessModal);
  };


  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        BaseAPI + "/product/Details/job-board-software"
      );
      // console.log(response.data.data)
      setPageData(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
  var companies = {
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
      <Navbar />
      <div className="doctor_appointment">
        <section className="paid-pro job-portal-banner fiverr-new-banner job-portal-bg NewJobSiteDesign JobBoardNewDesign SalonBookingBanner">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 col-md-7">
                <h1>Salon Booking Software</h1>
                <div className="both-left-p-sec">
                  <h2>
                    Easily manage appointments with flexible scheduling
                    solutions for salons and spas.
                  </h2>
                </div>
                <div className="job-valu">
                  <div className="portal-price NewPriceDesign">
                    <h4>
                      $45 USD<small>/mo</small>{" "}
                    </h4>
                    <div className="OfferPriceProduct">
                      <strike className="srik_cls">$175 USD</strike>
                      <span className="MoreInfo">
                        <i>
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/images/more-info.png"
                            alt=""
                          />
                        </i>
                        <p>Limited Period Offer for First Year</p>
                      </span>
                      <span className="AppPrice" style={{ display: "none" }}>
                        <a
                          className="text-primary js-anchor-link"
                          href="#subscriptionmodel"
                        >
                          More Details
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="job-valu-btn">
                    
                    <div
                      className="enquiry_software_btn"
                      style={{ marginTop: "15px" }}
                      onClick={openModal}
                    >
                      <button className="btn fiverr-buys NewGreenBtnJob">
                        Enquire Now
                      </button>
                      {
                        <SoftwareEnquiry
                          modalStatus={showModal}
                          toggle={openModal}
                          title="WordPress eCommerce Website"
                        />
                      }
                    </div>
                  </div>
                  <div
                    className="portal-price portal-priceNew"
                    style={{ display: "none" }}
                  >
                    <strike className="srik_cls">$175 USD</strike>
                    <h4>
                      $45 USD <small>/mo</small>{" "}
                      <span className="AppPrice">
                        <span className="MoreInfo">
                          <i>
                            <Image
                              unoptimized={true}
                              width={100}
                              height={100}
                              src="/img/images/more-info.png"
                              alt=""
                            />
                          </i>
                          <p>Limited Period Offer Available for First Year</p>
                        </span>
                        (
                        <a
                          className="text-primary js-anchor-link"
                          href="#subscriptionmodel"
                        >
                          More Details
                        </a>
                        )
                      </span>
                    </h4>
                  </div>

                  <div className="SubscriptionPrice">
                    <div className="DeliSou" style={{ display: "none" }}>
                      <span>For</span> Delivered Solution{" "}
                      <a href="#subscriptionprice">click here</a>
                    </div>{" "}
                    <div className="line-border NewLineBoader">
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/stars.png"
                        alt=""
                        className="lazy"
                      />
                      <p>210 Reviews</p>
                    </div>
                  </div>
                  <div className="jocpp robotic_icons">
                    <ul className="job-pr-icon jobwidthauto">
                      <li>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                      </li>
                    </ul>
                    
                  </div>
                </div>
              </div>
              <div className="col-sm-5 col-md-5">
                <div className="por-mobile-new">
                  <Image
                    width={440}
                    height={100 / (100 / 100)}
                    className="lazy"
                    src="/img/salon-booking/salon-img.png"
                    alt="Salon Booking Software"
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>
            <div className="job-portal-banner-link">
              <div aria-label="breadcrumb" className="my-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/softwares">Softwares</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Salon Booking Software
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="job-section-top-new JobBoardSectionNew">
          <div className="container">
            <p>
              Our Salon Booking Software is designed to make booking
              appointments easy and hassle-free for salons, spas, and beauty
              centers. Clients can find your services, pick their favorite
              stylist or therapist, and book a time that works for them—all in
              just a few clicks. This user-friendly software equips you with
              just the right tools to create an easy, seamless booking
              experience that&apos;s convenient both for your clients and your
              team.
            </p>
            <p>
              The software is customizable, so it matches your brand perfectly.
              Whether you run a nail salon, spa, or hair salon, this software
              adapts to your brand style and helps keep bookings smooth and
              professional.
            </p>
          </div>
        </section>
        {/* Features */}
        <Features />

        {/* Tab Section */}
        <TabSection />


        <section className="job_product_page_header_in">
          <div className="container">
            <div className="whateissuprt">
              <h2 className="headhs">
                How Our Salon Booking Software Helps You
              </h2>
              <p>
                Our Salon Booking Software simplifies the entire process of
                managing client appointments. Whether you operate a beauty
                salon, spa, or nail studio, this software makes it easy for
                clients to book appointments online, reducing the scheduling
                workload for your staff and boosting customer satisfaction.
              </p>
              <h3 className="Haeddinh2">Simple and Easy for Clients</h3>

              <p>
                Beyond booking, clients can easily reschedule or cancel their
                appointments with just a few clicks. They can select available
                time slots, receive instant confirmations, and get reminders via
                email or SMS, which leads to fewer missing appointments and
                keeps everything organized.
              </p>
              <h3 className="Haeddinh2">
                Efficient for Salon Owners and Staff
              </h3>
              <p>
                Salon staff and managers can effortlessly handle all
                appointments through a user-friendly dashboard. Our beauty salon
                appointment software tracks client bookings, manages staff
                availability, and provides real-time updates. This streamlines
                daily operations, helping you focus more on delivering excellent
                services rather than handling manual scheduling.
              </p>
              <h3 className="Haeddinh2">Customizable for Your Brand</h3>
              <p>
                Our salon appointment scheduling software can be customized to
                align with the branding and needs of your salon or spa. It
                adapts seamlessly to the unique setup of small salons or large
                multi-location beauty studios, offering flexibility as your
                business grows and expands.
              </p>
              <h3 className="Haeddinh2">Comprehensive and Reliable Solution</h3>
              <p>
                This salon appointment booking software is not just a scheduling
                tool; it&apos;s a complete solution for managing client
                appointments and enhancing the customer experience. You will be
                able to offer a seamless experience with advanced calendar
                management, real-time updates, and automated reminders while
                being able to pay much more attention to the care and quality of
                service of your clients.
              </p>
            </div>
          </div>
        </section>
        {/* <section
          className="SubscriptionModel"
          id="subscriptionmodel"
          style={{ background: "#f1f1f1" }}
        >
          <div className="container">
            <div className="job_or_title">
              <h2 className="taxt_tt_job">Subscription Model</h2>
              <br />
              <div className="SubscriptionModelBx">
                <p>
                  Experience convenience like never before with our
                  subscription-based hassle-free model, available at just USD
                  145 per month.
                </p>
                <p>Key Benefits:</p>
                <ul>
                  <li>
                    <span>
                      Experience convenience like never before with our
                      subscription-based hassle-free model, available at just
                      USD 145 per month.
                    </span>
                  </li>
                  <li>
                    <span>
                      Lifetime Updates: Enjoy complimentary updates for your
                      software version throughout its lifespan.
                    </span>
                  </li>
                  <li>
                    <span>
                      Timely Upgrades: Seamlessly transition to upgraded
                      versions at regular intervals, all at no extra cost.
                    </span>
                  </li>
                  <li>
                    <span>
                      Zero Setup Fees:- There are no additional charges for the
                      setup and installation of the software, making it easier
                      for customers to get started.
                    </span>
                  </li>
                  <li>
                    <span>
                      Unlimited Appointment Booking: Book as many appointments
                      as you need without any limitations.
                    </span>
                  </li>
                  <li>
                    <span>
                      Enhanced Communication: Avail yourself of 5 domain-based
                      email accounts to enhance your professional communication.
                    </span>
                  </li>

                  <li>
                    <span>
                      Effortless Program Operation: Revel in robust bandwidth
                      that guarantees your program runs flawlessly, supported by
                      resources allocated to your subscription model. Any
                      increase in allocated resources will incur additional
                      charges beyond the standard subscription model.
                    </span>
                  </li>
                  <li>
                    <span>
                      Enduring Support: We are committed to providing lifelong
                      assistance through our subscription model. If any software
                      issues arise, our dedicated technical team will promptly
                      address them during office hours.
                    </span>
                  </li>
                  <li>
                    <span>
                      Personalized Customization Assistance: Delivering Custom
                      Features According to Client Requirements at additional
                      cost.
                    </span>
                  </li>
                </ul>
                <p>
                  Discover a new era of convenience and efficiency with our
                  subscription offering. Subscribe today and elevate your
                  experience with our readymade solution!
                </p>
              </div>
            </div>
          </div>
        </section> */}
         <section className="SubscriptionModel" id="subscriptionmodel">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Subscription Model</h2>
            <br />
            <div className="SubscriptionModelBx">
              <p>
                Experience convenience like never before with our
                subscription-based hassle-free model, available at just{" "}
                <strong>USD 45 per month</strong>, limited offer available for
                the first year.
              </p>
              <p>Key Benefits:</p>
              <ul>
                <li>
                  <span>
                    Lifetime Updates: Enjoy complimentary updates for your
                    software version throughout its lifespan.
                  </span>
                </li>
                <li>
                  <span>
                    Timely Upgrades: Seamlessly transition to upgraded versions
                    at regular intervals, all at no extra cost.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Zero Setup Fees</strong>:- There are no additional
                    charges for the setup and installation of the software,
                    making it easier for customers to get started.
                  </span>
                </li>
                {/* <li>
                  <span>
                  Unlimited Shipment Postings: Post as many shipments as you need without any limitations.
                  </span>
                </li> */}
                <li>
                  <span>
                    Effortless Program Operation: Revel in robust bandwidth that
                    guarantees your program runs flawlessly, supported by
                    resources allocated to your subscription model. Any increase
                    in allocated resources will incur additional charges beyond
                    the standard subscription model.
                  </span>
                </li>
                <li>
                  <span>
                    Enduring Support: We are committed to providing lifelong
                    assistance through our subscription model. If any software
                    issues arise, our <strong>dedicated technical team</strong>{" "}
                    will promptly address them during office hours.
                  </span>
                </li>
                <li>
                  <span>
                    Personalized Customization Assistance: Delivering Custom
                    Features According to Client Requirements at additional
                    cost.
                  </span>
                </li>
              </ul>
              <p>
                Discover a new era of convenience and efficiency with our
                subscription offering. Subscribe today and elevate your
                experience with our readymade solution!
              </p>
            </div>
          </div>
        </div>
      </section>
        <section id="subscriptionprice" className="SubscriptionpriceSection">
          <div className="container">
            <h2 className="taxt_tt_job">Delivered Solution</h2>
            <div className="SubscriptionModelPrice">
              <div className="SubscriptionModelPriceBx">
                <h4>
                  {pageData.currency_symbol}
                  {pageData.price}
                  <span className="sml_labl"> {pageData.name}</span>
                </h4>
                <strike className="srik_cls">
                  {pageData.currency_symbol}
                  {pageData.other_price}
                  <span className="sml_labl"> {pageData.name}</span>
                </strike>

                <div className="SubscriptionModelPriceBtn">
                  <div
                    className="enquiry_software_btn"
                    style={{ marginTop: "15px" }}
                    onClick={openModal}
                  >
                    <button className="btn fiverr-buys NewGreenBtnJob">
                      Enquire Now
                    </button>
                    {
                      <SoftwareEnquiry
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Salon Booking Software"
                      />
                    }
                  </div>
                </div>
                <div className="jocpp">
                  <ul className="job-pr-icon">
                    <li>
                      <i className="fa fa-globe" aria-hidden="true"></i>
                    </li>
                  </ul>
                  <div className="portel-btnbx">
                    <div className="line-border NewLineBoader">
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/stars.png"
                        alt=""
                        className="lazy"
                      />
                      <p>210 Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="SubscriptionModelBx">
              <p>
                The solution offered by Logicspice provides several advantages
                that can assist you in expanding your business within the
                competitive market. Here are some key benefits outlined below:
              </p>

              <ul>
                <li>
                  <span>
                    Obtain a lifetime license for your domain under the pro
                    license with a one-time fee.
                  </span>
                </li>
                <li>
                  <span>
                    Enjoy free installation of the software for the first time.
                  </span>
                </li>
                <li>
                  <span>
                    Benefit from a white-labelled solution featuring your
                    branding, logo, and content at no additional cost.
                  </span>
                </li>
                <li>
                  <span>
                    Access custom features according to your specific
                    requirements, available at an additional charge.
                  </span>
                </li>
                <li>
                  <span>
                    Receive three months of complimentary support for any bugs
                    or issues you encounter.
                  </span>
                </li>
                <li>
                  <span>
                    Experience efficient communication channels via email,
                    WhatsApp, Google Meet, Skype, Zoom and Teams.
                  </span>
                </li>
                <li>
                  <span>
                    Our system allows customers a smooth transition between
                    monthly subscriptions and pro or enterprise licenses,
                    enabling them to adjust their license based on their pricing
                    preferences conveniently.
                  </span>
                </li>
              </ul>
              <p>
                For details on an Enterprise license, please{" "}
                <a onClick={toggleModal}>contact us</a>.
              </p>
            </div>
          </div>
        </section>

        <section className="job_portal_area job_portal_area_food">
          <div className="container">
            <div className="job_or_title">
              <h2 className="taxt_tt_job">
                Best Partner Company For Your Technological Solutions!
              </h2>
              <br />
              <div className="logic-parter">
                <a onClick={toggleInfo} className="ylogicspice">
                  <i>
                    <Image
                      unoptimized={true}
                      width={20}
                      height={20}
                      src="/img/jobboard/why-logic-icon.png"
                      alt=""
                      className=""
                    />
                  </i>
                  <span>Why Logicspice</span>
                </a>
                <Whylogicspice open={showInfo} />
              </div>
            </div>
          </div>
        </section>
        {/* Modal */}
       <ModalSection />

        {/* Used technologies */}
        <UsedTechnologies />
        
        {/* Support section */}
        <SupportSection />

        {/* Customer reviews */}
        <CustomerReviews />


        {/* FAQ section */}
        <Suspense fallback={<div>Loading Services...</div>}>
          <FAQSection />
        </Suspense>

        <section className="enq-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 text-center">
                <div className="btn btn-primary" onClick={openModal}>
                  <a>Enquire Now</a>
                  {
                    <SoftwareEnquiry
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Salon Booking Software"
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="latest_feature_product">
          <div className="container">
            <h2 className="title_main">Other Popular Softwares</h2>
            <div className="other-product-box">
              <div className="row">
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                    <Link
                      title="View Detail"
                      target="_black"
                      href="/udemy-clone"
                    >
                      <div className="caption">
                        <div className="other-caption-bx">
                          <h3>Udemy Clone</h3>
                          <div className="other-project-logo">
                            <Image
                              unoptimized={true}
                              width={200}
                              height={100}
                              src="/img/jobboard/udemy_new.png"
                              alt="Udemy Clone"
                              className=""
                            />
                          </div>
                          <p>
                            <span>
                              Readymade Script of video E- Learning Platform
                              like Udemy.
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                    <Link
                      className="View Detail"
                      target="_black"
                      href="/recruitment-management-software"
                    >
                      <div className="caption">
                        <div className="other-caption-bx">
                          <h3>Recruitment Management Software</h3>
                          <div className="other-project-logo">
                            <Image
                              unoptimized={true}
                              width={200}
                              height={100}
                              src="/img/jobboard/rms_new.png"
                              alt="Recruitment Management Software"
                              className=""
                            />
                          </div>
                          <p>
                            <span>
                              Readymade recruitment management system that
                              automates the hiring process.
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                    <Link
                      title="View Detail"
                      target="_black"
                      href="/fiverr-clone"
                    >
                      <div className="caption">
                        <div className="other-caption-bx">
                          <h3>Fiverr clone</h3>

                          <div className="other-project-logo">
                            <Image
                              unoptimized={true}
                              width={200}
                              height={100}
                              src="/img/jobboard/gigger_logo_new.png"
                              alt="fiverr-clone"
                              className=""
                            />
                          </div>
                          <p>
                            <span>On Demand Marketplace Software</span>
                          </p>
                        </div>
                      </div>
                    </Link>
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
      </div>

      <Footer />
    </>
  );
};

export default Page;
