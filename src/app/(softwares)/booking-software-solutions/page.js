"use client";
import Footer from "@/app/Components/Footer";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
import "../../resposive.css";
import EnquiryModal from "@/app/Components/Enquirymodal";

import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";
import "../../../../public/css/font-awesome.css";

const Page = () => {
  const [activeTab, setActiveTab] = useState("tab2");
  const [sellerTab, setSellerTab] = useState(true);
  const [buyerTab, setBuyerTab] = useState(false);
  const [adminTab, setAdminTab] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [demoAccessModal, setDemoAccessModal] = useState(false);
  const openDemoAccessModal = () => {
    // console.log(showModal);

    setDemoAccessModal(!demoAccessModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const openModal = () => {
    console.log(showModal);

    setShowModal(!showModal);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  const handleSellerTab = () => {
    setSellerTab(true);
    setBuyerTab(false);
    setAdminTab(false);
  };
  const handleBuyerTab = () => {
    setSellerTab(false);
    setBuyerTab(true);
    setAdminTab(false);
  };
  const handleAdminTab = () => {
    setSellerTab(false);
    setBuyerTab(false);
    setAdminTab(true);
  };

  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        BaseAPI + "/product/Details/marketplacesoftware-solution"
      );
      // console.log(response.data.data)
      setPageData(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      // transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "rgba(255, 255, 255, .05)",
    }),
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    getData();
  }, []);

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
      <section className="paid-pro job-portal-banner fiverr-new-banner job-portal-bg NewJobSiteDesign JobBoardNewDesign MarketplaceSoftwareBanner">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>Online Booking Software</h1>
              <div className="both-left-p-sec">
                <h2>All-in-One Online Booking Software Solutions</h2>
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
                <div className="portal-price" style={{ display: "none" }}>
                  <strike className="srik_cls">
                    ₹0<span className="sml_labl"> INR</span>
                  </strike>
                  <h4>
                    ₹0<span className="sml_labl"> INR</span>
                  </h4>
                </div>
                <div className="job-valu-btn">
                  <span>Fill your basic details and</span>

                  <div className="btn btn-get" onClick={openModal}>
                    <button>Enquire Now</button>
                    {
                      <EnquiryModal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Online Booking Software"
                      />
                      //                       <SoftwareEnquiry
                      //                         modalStatus={showModal}
                      //                         toggle={openModal}
                      //                         title="Please fill the form below and get access to the live demo of Marketplace Software.
                      // See how it work yourself!"
                      //                       />
                      //                       <GetDemoEnquiry
                      //                         modalStatus={demoAccessModal}
                      //                         toggle={openDemoAccessModal}
                      //                         title="Please fill the form below and get access to the live demo of Online Booking Software.
                      //  See how it works yourself!"
                      //                       />
                    }
                  </div>
                </div>
              </div>
              <div className="jocpp">
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
                    <p>560 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                <Image
                  unoptimized={true}
                  width={450}
                  height={100 / (100 / 100)}
                  className=""
                  src="/img/marketplacesoftware/online-booking-banner-img.png"
                  alt="Marketplace Software"
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
                  Online Booking Software
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            We provide ready to use and custom online booking solutions that
            make managing your business easier. Our software simplifies the
            booking process, helping you handle reservations, appointments, and
            events smoothly. Whether you’re looking to manage seat bookings,
            restaurant tables, hotels, sports events, or any type of event
            planning, we have the right system for you.
          </p>
        </div>
      </section>
      <section
        className=" MarketplaceSoftwareClient"
        style={{ backgroundColor: "#fff;", padding: "60px 0" }}
      >
        <div className="container">
          <div className="service-market-ttd MarketplaceSoftwareFeatures">
            <ul>
              <li className="FirstMarketplace">Smart Search Filters</li>
              <li>Admin Dashboard</li>
              <li>Fully Responsive Web Design</li>
              <li>White-Labeled Software</li>
              <li className="FirstMarketplace">Payment Gateway Integration</li>
              <li>Email Notifications</li>
              <li>WhatsApp Notifications</li>
              <li>Booking History for Users</li>
              <li className="FirstMarketplace">Customized Calendar</li>
              <li>Reporting and Analytics</li>
              <li>SEO-Friendly</li>
              <li>Multi-Location Access</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="job_portal_area">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">
              Online Booking Software Solutions Features
            </h2>
          </div>
          <div
            className="tatxt_txt_job MarketplaceTxtJob"
            style={{ maxWidth: "1080px" }}
          >
            <p>
              We have very specific solutions available for different kinds of
              business sectors. These online booking software are designed for
              various industries such as healthcare, restaurants, sports, spa
              centers, and more. It simplifies tasks like patient appointments
              in clinics or table reservations in restaurants. Whether
              you&apos;re running a medical practice or clinic, our medical
              appointment scheduling software helps organize patient bookings.
              It also serves reservation systems for other businesses, from
              doctor appointment booking software for healthcare facilities to
              reservation systems for other businesses, our solution is flexible
              and efficient.
            </p>
            {/* <p>
              With the power of our on-demand B2B marketplace software&sbquo; we
              enable seamless transactions&sbquo; efficient service
              delivery&sbquo; and enhanced connectivity. Whether you&apos;re a
              freelance professional looking for gigs&sbquo; a rental service
              provider seeking customers&sbquo; a logistics company optimizing
              routes&sbquo; a homeowner in need of reliable cleaning&sbquo; or a
              business handling appointments and scheduling&sbquo; our platform
              serves as a comprehensive solution.
            </p> */}
          </div>
          <div className="tab_bbx_job MarketplaceSoftwareBBx">
            <div className="tab_bbx_top_job">
              <ul className="fiverrClone">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${
                    sellerTab ? "active" : ""
                  }`}
                  onClick={() => handleSellerTab()}
                >
                  <a>User Panel</a>
                </li>
                <li
                  id="tab2_li"
                  className={`emplyer_app_job ddlj  ${
                    buyerTab ? "active" : ""
                  }`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Staff Panel</a>
                </li>
                <li
                  id="tab3_li"
                  className={`admin_app_job ddlj  ${adminTab ? "active" : ""}`}
                  onClick={() => handleAdminTab()}
                >
                  <a>Admin Panel</a>
                </li>
              </ul>
            </div>
            <div className="tab_contant">
              {sellerTab && (
                <>
                  <div className="costomer_tab rj" id="tab1">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="costomer_tab_left costomer_tab_leftright">
                          <ul>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/ragister-icon.png"
                                />
                              </i>
                              <span>
                                Profile Management
                                <div className="product-idea">
                                  <p>
                                    Users can create and manage their profiles,
                                    including personal information, preferences,
                                    and saved payment methods.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/manage_alert.png"
                                />
                              </i>
                              <span>
                                Filters and Sorting
                                <div className="product-idea">
                                  <p>
                                    Use simple filters for price and date to
                                    customize your search, and sort results by
                                    popularity or newest for an efficient
                                    booking experience.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/manage_profile.png"
                                />
                              </i>
                              <span>
                                Easy Booking Process
                                <div className="product-idea">
                                  <p>
                                    Users can search, select, and book services
                                    quickly with a simple, intuitive interface.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/save_fav.png"
                                />
                              </i>
                              <span>
                                View Booking History
                                <div className="product-idea">
                                  <p>
                                    Users can quickly check their previous and
                                    future bookings
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/apply_job.png"
                                />
                              </i>
                              <span>
                                Real-time Availability
                                <div className="product-idea">
                                  <p>
                                    Check the real-time availability of seats,
                                    appointments, or services.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/search_job.png"
                                />
                              </i>
                              <span>
                                Booking Modifications
                                <div className="product-idea">
                                  <p>
                                    Allow users to modify, reschedule, or cancel
                                    their bookings as per business policy.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/applied_job.png"
                                />
                              </i>
                              <span>
                                Account Security and Privacy
                                <div className="product-idea">
                                  <p>
                                    Your account is kept safe with strong
                                    security features, making sure your personal
                                    information and payment details are private
                                    and secure.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/share_job.png"
                                />
                              </i>
                              <span>
                                Payment Integration
                                <div className="product-idea">
                                  <p>
                                    Secure online payment processing with
                                    multiple payment options (credit/debit card,
                                    PayPal, etc.)
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/manage_edu.png"
                                />
                              </i>
                              <span>
                                Review and Feedback
                                <div className="product-idea">
                                  <p>
                                    Users can leave reviews and ratings for
                                    services after booking.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/manage_exp.png"
                                />
                              </i>
                              <span>
                                Customer Support
                                <div className="product-idea">
                                  <p>
                                    Access customer support through live chat or
                                    a ticketing system for assistance with
                                    bookings.
                                  </p>
                                </div>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {buyerTab && (
                <>
                  <div className="costomer_tab rj active" id="tab2">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="costomer_tab_left">
                          <ul>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/manage-availability-icon.png"
                                />
                              </i>
                              <span>
                                Manage Bookings and Schedule
                                <div className="product-idea">
                                  <p>
                                    View, approve, modify, or cancel bookings.
                                    Staff can also check their own schedules and
                                    availability.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/manage-services-icon.png"
                                />
                              </i>
                              <span>
                                Real-time Notifications
                                <div className="product-idea">
                                  <p>
                                    Receive notifications on new bookings,
                                    cancellations, or any booking changes.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/manage-outstanding-icon.png"
                                />
                              </i>
                              <span>
                                Customer Management
                                <div className="product-idea">
                                  <p>
                                    View user details, booking history, and
                                    communicate directly with customers.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/accept-requests-icon.png"
                                />
                              </i>
                              <span>
                                Availability Management
                                <div className="product-idea">
                                  <p>
                                    Update and manage availability or block time
                                    slots for meetings, appointments, or
                                    personal time off.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/manage-requests-icon.png"
                                />
                              </i>
                              <span>
                                Mobile Access
                                <div className="product-idea">
                                  <p>
                                    Manage schedules and bookings on mobile
                                    devices.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/manage-event-icon.png"
                                />
                              </i>
                              <span>
                                Appointment Overviews
                                <div className="product-idea">
                                  <p>
                                    Staff can access a detailed view of upcoming
                                    appointments, including customer
                                    information, specific requests, and required
                                    preparations.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/view-booking-icon.png"
                                />
                              </i>
                              <span>
                                Customer Support Handling
                                <div className="product-idea">
                                  <p>
                                    Resolve customer queries and address
                                    complaints or special requests within the
                                    platform
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/view-review-icon.png"
                                />
                              </i>
                              <span>
                                Multi-location Access
                                <div className="product-idea">
                                  <p>
                                    If applicable, staff can manage bookings
                                    across multiple locations, allowing them to
                                    switch between venues or service centers.
                                  </p>
                                </div>
                              </span>
                            </li>
                            {/* <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/preview-public-icon.png"
                                />
                              </i>
                              <span>
                                Preview Public Mode
                                <div className="product-idea">
                                  <p>
                                    Take a Look at the Profile in Public Mode.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/social-media-icon.png"
                                />
                              </i>
                              <span>
                                Social Media Sharing
                                <div className="product-idea">
                                  <p>
                                    Expand Your Reach by Sharing on Social
                                    Media.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/promotions-discounts-icon.png"
                                />
                              </i>
                              <span>
                                Promotions and Discounts
                                <div className="product-idea">
                                  <p>
                                    Enhance your service provider presence by
                                    sharing on social media.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/notification-icon.png"
                                />
                              </i>
                              <span>
                                Notifications
                                <div className="product-idea">
                                  <p>
                                    As a service provider&sbquo; easily manage
                                    your notifications.
                                  </p>
                                </div>
                              </span>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {adminTab && (
                <>
                  <div className="costomer_tab rj" id="tab3">
                    <div className="row">
                      {/* <div className="col-lg-4 col-md-3 ">
                            <div className="costomer_tab_right costomer_tab_rightleft2">
                                <Image unoptimized={true} width={100} height={100} src="/img/product-img//crowdfunding_admin.png" alt="Admin Panel" /></div>
                        </div> */}
                      <div className="col-lg-12 col-md-12">
                        <div className="costomer_tab_left costomer_tab_leftright2">
                          <ul>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/secure_login.png"
                                />
                              </i>
                              <span>
                                Dashboard and Overview
                                <div className="product-idea">
                                  <p>
                                    Admin gets a comprehensive view of all
                                    bookings, upcoming appointments, revenue,
                                    and system performance.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/admin_dash.png"
                                />
                              </i>
                              <span>
                                User and Staff Management
                                <div className="product-idea">
                                  <p>
                                    {" "}
                                    Manage user roles and permissions for staff,
                                    customers, and other users. Add, edit, or
                                    delete accounts.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/configuration.png"
                                />
                              </i>
                              <span>
                                Booking Management
                                <div className="product-idea">
                                  <p>
                                    Monitor and manage all bookings, with the
                                    ability to override cancellations,
                                    reschedule, or apply discounts.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/manage_skill.png"
                                />
                              </i>
                              <span>
                                Payment Tracking
                                <div className="product-idea">
                                  <p>
                                    View all transactions, manage payment
                                    settings, and generate financial reports.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/manage_emp.png"
                                />
                              </i>
                              <span>
                                Analytics and Reports
                                <div className="product-idea">
                                  <p>
                                    Generate reports on booking trends, customer
                                    activity, and staff performance.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/manage_job.png"
                                />
                              </i>
                              <span>
                                Service Management
                                <div className="product-idea">
                                  <p>
                                    Create and update services, pricing, and
                                    availability. Manage resources like
                                    equipment, rooms, or spaces.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/manage_news.png"
                                />
                              </i>
                              <span>
                                Review and Feedback Management
                                <div className="product-idea">
                                  <p>
                                    Monitor customer reviews and feedback, and
                                    respond or resolve issues within the
                                    platform.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/course_details.png"
                                />
                              </i>
                              <span>
                                Customer Support Tools
                                <div className="product-idea">
                                  <p>
                                    Admins can monitor support tickets, assign
                                    them to staff, and track resolutions.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/manage_cat.png"
                                />
                              </i>
                              <span>
                                Multi-location Management
                                <div className="product-idea">
                                  <p>
                                    Manage multiple locations from a single
                                    interface.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/manage_blog.png"
                                />
                              </i>
                              <span>
                                Real-time Availability Updates
                                <div className="product-idea">
                                  <p>
                                    Ensure all bookings are up to date with
                                    real-time syncing of available slots and
                                    resources.
                                  </p>
                                </div>
                              </span>
                            </li>
                            {/* <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={47}
                                  height={100 / (100 / 100)}
                                  alt="img"
                                  src="/img/jobboard/manage_banner.png"
                                />
                              </i>
                              <span>
                                Content Management
                                <div className="product-idea">
                                  <p>
                                    Efficient Admin Level Content Management.
                                  </p>
                                </div>
                              </span>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="job_product_page_header_in">
        <div className="container">
          <div className="whateissuprt">
            <h2 className="headhs">
              How Our Online Booking Software Simplifies Your Business?
            </h2>
            <p>
              Our Online Booking Software makes it easy for your business to
              manage bookings, whether it&apos;s appointments, sports,
              reservations, or events. Customers can book online anytime, which
              saves you time and reduces mistakes. Automatic real-time
              availability keeps your business organized and improves the
              customer experience.
            </p>
          </div>

          <div className="whateissuprt">
            <h3 className="headhs">Why Choose Our Online Booking Software?</h3>
            <p>
              Our online booking software for small businesses provides the
              flexibility and efficiency you need to improve operations. With
              our solutions, you can increase customer satisfaction, reduce
              no-shows, and optimize resource allocation. Explore our booking
              software and find the perfect fit for your business!
            </p>
          </div>
        </div>
      </section>
      <section className="laravel_choose_features_section">
        <div className="container">
          <h2>What Our Online Booking Software Can Do for You?</h2>
          <div className="laravel_choose_features_bx">
            <div className="row">
              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="libraries_laravel_choose">
                  <Link href="/seat-booking-system" target="_blank">
                    <div className="laravel_choose_features_img laravel_choose_features_img1">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/marketplacesoftware/freelance-icon.png"
                        alt="Freelance"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Seat Booking</h3>
                      <p>
                        Allow customers to reserve seats for events, transport,
                        or shows with ease, ensuring a smooth booking experience
                        and real-time availability.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <Link href="/restaurant-table-booking-system" target="_blank">
                    <div className="laravel_choose_features_img laravel_choose_features_img2">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/marketplacesoftware/rental-icon.png"
                        alt="Rental"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Table Booking</h3>
                      <p>
                        Help restaurants and cafes manage reservations by
                        enabling customers to book tables online, reducing wait
                        times, and optimizing seating arrangements.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="libraries_laravel_choose">
                  <Link href="/event-booking-software" target="_blank">
                    <div className="laravel_choose_features_img laravel_choose_features_img3">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/marketplacesoftware/logistics-icon.png"
                        alt="Logistics"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Event Booking</h3>
                      <p>
                        Simplify the event planning process by providing a
                        platform where attendees can book tickets or register
                        for events, with instant confirmations and updates.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <Link href="/hotel-booking-software" target="_blank">
                    <div className="laravel_choose_features_img laravel_choose_features_img4">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/marketplacesoftware/home-cleaning-icon.png"
                        alt="Home Cleaning"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Hotel Booking</h3>
                      <p>
                        Allow guests to easily search for rooms, check
                        availability, and book their stay online, enhancing
                        their overall booking experience.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="libraries_laravel_choose">
                  <Link href="/appointment-scheduling-software" target="_blank">
                    <div className="laravel_choose_features_img laravel_choose_features_img5">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/marketplacesoftware/scheduling-icon.png"
                        alt="Scheduling"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Appointment Booking</h3>
                      <p>
                        Online Appointment Booking Software enables clients to
                        book appointments online, manage their schedules, and
                        automate slots, helping businesses reduce no-shows.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <Link href="" target="_blank">
                    <div className="laravel_choose_features_img laravel_choose_features_img6">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/marketplacesoftware/appointment-booking-icon.png"
                        alt="Appointment Booking"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Doctor Appointment Booking</h3>
                      <p>
                        Allow patients to book appointments online with ease,
                        view doctor availability, and receive instant
                        confirmations. This software helps medical practices
                        manage patient schedules efficiently, reducing wait
                        times and improving overall patient satisfaction.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <Link href="" target="_blank">
                    <div className="laravel_choose_features_img laravel_choose_features_img6">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/marketplacesoftware/appointment-booking-icon.png"
                        alt="Appointment Booking"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Sports Area Booking</h3>
                      <p>
                        Our Sports Area Booking Software is designed to manage
                        bookings for various sports facilities, including turfs,
                        tennis courts, football fields, and basketball courts.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <p className="laravel_core_sub2">
              Our online booking software empowers businesses to expand their
              reach&sbquo; streamline operations&sbquo; and provide a seamless
              experience to their customers. Join us in transforming your
              industry and achieving new heights of success.
            </p>
          </div>
        </div>
      </section>
      <section
        className="SubscriptionModel"
        id="subscriptionmodel"
        style={{ background: "#f5f5f5" }}
      >
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Subscription Model</h2>
            <br />
            <div className="SubscriptionModelBx">
              <p>
                Experience convenience like never before with our
                subscription-based hassle-free model&sbquo; available at just{" "}
                <strong>USD 45 per month</strong>&sbquo; limited offer available
                for the first year.
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
                    at regular intervals&sbquo; all at no extra cost.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Zero Setup Fees</strong>:- There are no additional
                    charges for the setup and installation of the
                    software&sbquo; making it easier for customers to get
                    started.
                  </span>
                </li>
                <li>
                  <span>
                    Unlimited Postings: Post as many gig/product/service
                    postings as you need without any limitations.
                  </span>
                </li>
                <li>
                  <span>
                    Mobile Apps: Stay perpetually connected with Android and
                    iPhone apps&sbquo; available for an additional USD 45 per
                    month for each&sbquo; android or iPhone. These apps will be
                    launched through your dedicated developer accounts on Google
                    Play and the Apple App Store.
                  </span>
                </li>
                <li>
                  <span>
                    Effortless Program Operation: Revel in robust bandwidth that
                    guarantees your program runs flawlessly&sbquo; supported by
                    resources allocated to your subscription model. Any increase
                    in allocated resources will incur additional charges beyond
                    the standard subscription model.
                  </span>
                </li>
                <li>
                  <span>
                    Enduring Support: We are committed to providing lifelong
                    assistance through our subscription model. If any software
                    issues arise&sbquo; our{" "}
                    <strong>dedicated technical team</strong> will promptly
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
      </section>
      <section id="subscriptionprice" className="SubscriptionpriceSection">
        <div className="container">
          <h2 className="taxt_tt_job">Delivered Solution</h2>
          <div className="SubscriptionModelPrice">
            <div className="SubscriptionModelPriceBx">
              <h4>
                {/* {pageData.currency_symbol}
                {pageData.price} */}
                $ 895
                <span className="sml_labl"> {pageData.name}</span>
              </h4>
              <strike className="srik_cls">
                {pageData.currency_symbol}
                {pageData.other_price}
                <span className="sml_labl"> {pageData.name}</span>
              </strike>
              <div className="SubscriptionModelPriceBtn">
                <div className="btn btn-get" onClick={openModal}>
                  <button>Enquire Now</button>
                  {
                    <EnquiryModal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Online Booking Software"
                    />
                    //                     <SoftwareEnquiry
                    //                       modalStatus={showModal}
                    //                       toggle={openModal}
                    //                       title="Please fill the form below and get access to the live demo of Marketplace Software.
                    // See how it work yourself!"
                    //                     />
                    //                     <GetDemoEnquiry
                    //                       modalStatus={demoAccessModal}
                    //                       toggle={openDemoAccessModal}
                    //                       title="Please fill the form below and get access to the live demo of Online Booking Software.
                    //  See how it works yourself!"
                    //                     />
                  }
                </div>
              </div>
              <div className="jocpp">
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
                    <p>560 Reviews</p>
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
                  branding&sbquo; logo&sbquo; and content at no additional cost.
                </span>
              </li>
              <li>
                <span>
                  Access custom features according to your specific
                  requirements&sbquo; available at an additional charge.
                </span>
              </li>
              <li>
                <span>
                  Receive three months of complimentary support for any bugs or
                  issues you encounter.
                </span>
              </li>
              <li>
                <span>
                  Experience efficient communication channels via email&sbquo;
                  WhatsApp&sbquo; Google Meet&sbquo; Skype&sbquo; Zoom and
                  Teams.
                </span>
              </li>
            </ul>
            <p>
              For details on an Enterprise license&sbquo; please{" "}
              <a onClick={toggleModal}>contact us</a>.
            </p>
          </div>
        </div>
      </section>
      <section className="job_portal_area job_portal_area_food">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">
              Logicspice is the best partner for Online Booking Software Solutions!
            </h2>
            <br />
            <div className="logic-parter">
              <a onClick={toggleInfo} className="ylogicspice">
                <i>
                  <Image
                    unoptimized={true}
                    width={20}
                    height={100}
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
      <section className="whatsupport_section" id="support">
        <div className="container">
          <h4 className="title_main">
            What <span>support</span> you will get?
          </h4>
          <div className="supportsetting">
            <ul>
              <li data-aos="fade" className="aos-init aos-animate">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">3 months Free Support</div>
              </li>
              <li data-aos="fade" className="aos-init aos-animate">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Brand Removal</div>
              </li>
              <li data-aos="fade" className="aos-init aos-animate">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/jobboard/free_instal.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Installation</div>
              </li>
              <li data-aos="fade" className="aos-init aos-animate">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    width={50}
                    height={100}
                    src="/img/jobboard/access_secure_code_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Easily scalable</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        className="ecommerce_review_section MarketplaceSoftwareReviewSection"
        id="reviews"
      >
        <div className="ecommerce_review__img">
          <Image
            unoptimized={true}
            width={450}
            height={100 / (100 / 100)}
            src="/img/marketplacesoftware/faq-review-img.png"
            alt="Marketplace Software"
            className=""
          />
        </div>
        <div className="container">
          <h2>Customer Reviews</h2>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="ecommerce--review">
                <div className="customers_review_sec_row">
                  <div className="customer_review_stext">
                    {/* I have purchased the service marketplace software and have
                    constructed my own website. This was an easy task because of
                    logicspice&apos;s free installation and support. Keep up the
                    good work. I will be back for more customization work in the
                    future. */}
                    The table booking feature in the online booking software was
                    exactly what my restaurant needed. The system is
                    user-friendly, and Logicspice&apos;s team was incredibly
                    helpful during setup. We&apos;ve seen fewer booking errors
                    and a faster turnaround.
                  </div>
                  <div className="who_ratset">
                    <span
                      className="star_review_main"
                      style={{ paddingRight: "10px", Color: "gold" }}
                    >
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    Luca Rossi, Italy
                    <span>
                      <Image
                        unoptimized={true}
                        width={25}
                        height={100}
                        src="/img/jobboard/italy_flag.png"
                        alt="mobile app development"
                        style={{ width: "20px", marginLeft: "3px" }}
                      />
                    </span>
                  </div>
                </div>
                <div className="customers_review_sec_row">
                  <div className="customer_review_stext" id="fiveer-clone">
                    {/* This is the best readymade solution I found for my business.
                    Thanks for your great efforts&sbquo; commitment and support
                    while installing the software. Your prompt service regarding
                    a few minor issues was superb and great communication
                    skills. */}
                    I&apos;ve been using Logicspice&apos;s event booking
                    software for a few months now, and I&apos;m impressed with
                    how smoothly it handles everything from bookings to
                    reminders. Great product and fantastic support from the
                    team!
                  </div>

                  <div className="who_ratset">
                    <span
                      className="star_review_main"
                      style={{ paddingRight: "10px", Color: "gold" }}
                    >
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span id="client-name">Maria Gomez, USA</span>{" "}
                    <span>
                      <Image
                        unoptimized={true}
                        width={25}
                        height={100}
                        src="/img/jobboard/usa_flag_img.png"
                        alt="mobile app development"
                        style={{ width: "20px", marginLeft: "3px" }}
                      />
                    </span>
                  </div>
                </div>

                <div className="customers_review_sec_row">
                  <div className="customer_review_stext" id="fiveer-clone">
                    {/* Recently I bought freelance software based upon gigs from
                    logicspice and it worked really nice&sbquo; it helped my
                    business to gain more efficiency. I recommend it to all who
                    are looking for freelance based models&sbquo; it&apos;s
                    really nice. */}
                    I used Logicspice&apos;s online booking software for seat
                    bookings at my theater, and it made everything so much
                    easier. The setup was fast, and their support team was
                    great. I highly recommend it to anyone who wants a simpler
                    way to manage bookings.
                  </div>
                  <div className="who_ratset">
                    <span
                      className="star_review_main"
                      style={{ paddingRight: "10px", Color: "gold" }}
                    >
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <span id="client-name">Robin Johnson, UK</span>{" "}
                    <span>
                      <Image
                        unoptimized={true}
                        width={25}
                        height={100}
                        src="/img/jobboard/uk_flag_img.png"
                        alt="mobile app development in USA"
                        style={{ width: "20px", marginLeft: "3px" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ecommerce--review--point ">
                <div className="outof_rating">
                  <div className="review_rating_fjs">
                    <div className="star_num">
                      5 <i className="fa fa-star"></i>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="people_star_num">500</div>
                  </div>

                  <div className="review_rating_fjs">
                    <div className="star_num">
                      4 <i className="fa fa-star"></i>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="people_star_num">60</div>
                  </div>
                  <div className="review_rating_fjs">
                    <div className="star_num">
                      0 <i className="fa fa-star"></i>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="people_star_num">3</div>
                  </div>
                  <div className="review_rating_fjs">
                    <div className="star_num">
                      2 <i className="fa fa-star"></i>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="people_star_num">0</div>
                  </div>
                  <div className="review_rating_fjs">
                    <div className="star_num">
                      1 <i className="fa fa-star"></i>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-danger progress-bar-striped"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                    <div className="people_star_num">0</div>
                  </div>
                </div>
                <div className="ecommerce--review--btn ">
                  <a className="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title="Online Booking Software"
                  />
                </div>
                <div className="main-rait">
                  <span>
                    <i className="fa fa-star"></i>{" "}
                    <span>4.7 out of 5 stars</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ecommerce_faq_section" id="faq">
        <div className="container">
          <div className="ecommerce__Quick_FAQ_Script CustomQuickFAQScript">
            <div className="row">
              <div className="col-md-5" data-aos="fade-up">
                <h4 className="title_main">
                  Frequently <br />
                  Asked Questions
                </h4>
                <div className="FaqImgBx">
                  <Image
                    unoptimized={true}
                    width={450}
                    height={100 / (100 / 100)}
                    src="/img/marketplacesoftware/FaqLaravelImg.png"
                    alt="laravel web development"
                  />
                </div>
              </div>
            
              <div className="col-md-7">
                <div className="panel-group faq_quick_sec" id="accordion">
                  <MDBAccordion v-model="activeItem" borderless>
                    <MDBAccordionItem
                      headerTitle="Is there a trial period for the online booking software?"
                      collapseId="flush-collapse1"
                    >
                      <p>
                        Yes, we offer a trial period so you can explore all the
                        features and see how they fit your business needs.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Can I customize the software to fit my business?"
                      collapseId="flush-collapse2"
                    >
                      <p>
                        Absolutely! Our online booking software is customizable
                        to meet your specific business requirements.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What industries can benefit from this software?"
                      collapseId="flush-collapse4"
                    >
                      <p>
                        Our online booking software is suitable for various
                        industries, including healthcare, restaurants, hotels,
                        sports, and event planning.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How do I get support if I encounter issues?"
                      collapseId="flush-collapse5"
                    >
                      <p>
                        You can reach our support team through live chat or our
                        ticketing system for prompt assistance.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle=" Can I integrate the software with my existing systems?
"
                      collapseId="flush-collapse6"
                    >
                      <p>
                        Yes, our online booking software can be integrated with
                        various existing systems to enhance functionality.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Will I receive notifications about my bookings?"
                      collapseId="flush-collapse7"
                    >
                      <p>
                        Yes, you will receive email and WhatsApp notifications
                        for confirmations and updates regarding your bookings.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle=" How can I update my profile information?"
                      collapseId="flush-collapse3"
                    >
                      <p>
                        You can easily update your profile information from the
                        user panel at any time.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle=" Is there a limit to the number of bookings I can manage?"
                      collapseId="flush-collapse8"
                    >
                      <p>
                        No, there is no limit to the number of bookings you can
                        manage with our software.
                      </p>
                    </MDBAccordionItem>

                    {/* <MDBAccordionItem
                      headerTitle=" Can I resell the software? Will I have rights over the
                        software code?"
                      collapseId="flush-collapse9"
                    >
                      <p>
                        No, you can&apos;t resell the software. All rights will
                        remain with Logicspice only.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Do you offer a Money Back Guarantee?"
                      collapseId="flush-collapse10"
                    >
                      <p>
                        Yes, we offer a 30 days money-back guarantee to ensure
                        customer satisfaction with our software. If for any
                        reason, you wish to discontinue using the product, you
                        can ask us for a refund. We will refund your total money
                        except the installation and configuration charges, which
                        are USD 65 or 20% of the application cost, whichever is
                        greater.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Along with hosting server details, what other recommendations?"
                      collapseId="flush-collapse11"
                    >
                      <p>
                        We recommend you purchase an SSL certificate along with
                        a hosting server which is Linux based, considering that
                        an SSL certificate is necessary for all the websites
                        these days and it provides a secure layer to the website
                        as well.
                      </p>
                    </MDBAccordionItem> */}
                  </MDBAccordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="enq-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <div className="btn btn-primary" onClick={openModal}>
                <button>Enquire Now</button>
                {
                  <EnquiryModal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Online Booking Software"
                  />
                  // <SoftwareEnquiry
                  //   modalStatus={showModal}
                  //   toggle={openModal}
                  //   title="Online Booking Software"
                  // />
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
                    href="/fiverr-clone"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Fiverr clone</h3>
                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            width={180}
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
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/logistic-marketplace-software"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Uship clone</h3>

                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            width={243}
                            height={100}
                            src="/img/jobboard/logictic_logo_new.png"
                            alt="logistic-marketplacesoftware"
                            className=""
                          />
                        </div>
                        <p>
                          <span>
                            Similar to Uship Clone&sbquo; Shiply Clone.
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
                    href="/appointment-scheduling-software"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Appointment Booking System</h3>

                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            width={180}
                            height={100}
                            src="/img/jobboard/abs_logo_new.png"
                            alt="Fiverr Clone Script Logo"
                            className=""
                          />
                        </div>
                        <p>
                          <span>
                            A user-friendly appointment booking system that
                            enables owners to manage.
                          </span>
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
    </>
  );
};

export default Page;
