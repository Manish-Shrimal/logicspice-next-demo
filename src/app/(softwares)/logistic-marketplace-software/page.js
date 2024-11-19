"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import Image from "next/image";

import {
  MDBAccordion,
  MDBAccordionItem,
  MDBModal,
  MDBModalBody,
} from "mdb-react-ui-kit";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
import "../../resposive.css";
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
import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";
// import "../../../../public/css/font-awesome.min.css";
import "../../../../public/css/font-awesome.css";


const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [jobportal, setJobportal] = useState(false);
  const [buyjobportal, setBuyJobportal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [demoAccessModal, setDemoAccessModal] = useState(false);
  const openDemoAccessModal = () => {
    // console.log(showModal);

    setDemoAccessModal(!demoAccessModal);
  };

  const toggleJobPortalModal = () => setJobportal(!jobportal);
  const toggleBuyJobPortalModal = () => setBuyJobportal(!buyjobportal);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const openModal = () => {
    setShowModal(!showModal);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };

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
  const [sellerTab, setSellerTab] = useState(true);
  const [buyerTab, setBuyerTab] = useState(false);
  const [adminTab, setAdminTab] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
        BaseAPI + "/product/Details/logistic-marketplace-software"
      );
      // console.log(response.data.data)
      setPageData(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const Accordion = styled((props) => (
  //   <MuiAccordion disableGutters elevation={0} square {...props} />
  // ))(({ theme }) => ({
  //   border: `1px solid ${theme.palette.divider}`,
  //   "&:not(:last-child)": {
  //     borderBottom: 0,
  //   },
  //   "&::before": {
  //     display: "none",
  //   },
  // }));

  // const AccordionSummary = styled((props) => (
  //   <MuiAccordionSummary
  //     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
  //     {...props}
  //   />
  // ))(({ theme }) => ({
  //   backgroundColor: "rgba(0, 0, 0, .03)",
  //   flexDirection: "row-reverse",
  //   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
  //     transform: "rotate(90deg)",
  //   },
  //   "& .MuiAccordionSummary-content": {
  //     marginLeft: theme.spacing(1),
  //   },
  //   ...theme.applyStyles("dark", {
  //     backgroundColor: "rgba(255, 255, 255, .05)",
  //   }),
  // }));

  // const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  //   padding: theme.spacing(2),
  //   borderTop: "1px solid rgba(0, 0, 0, .125)",
  // }));

  // const [expanded, setExpanded] = React.useState("panel1");

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };
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
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
    // Change the background color when expanded
    "&.Mui-expanded": {
      backgroundColor: "#dbdbdb", // You can adjust this color
    },
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
      <NavBar />
      <section className="paid-pro job-portal-banner fiverr-new-banner job-portal-bg NewJobSiteDesign LogicticMarketplaceBanner">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>LS Shipper - Logistic Marketplace Software</h1>
              <div className="both-left-p-sec">
                <h2>Similar to Uship & Shiply</h2>
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
                          src="/img/softwares-banner-img/more-info.png"
                          alt=""
                        />
                      </i>
                      <p>Limited Period Offer for First Year</p>
                    </span>
                  </div>
                </div>
                <div className="job-valu-btn">
                  <span>Fill your basic details and</span>
                  <div
                    className=" btn-get"
                    onClick={openDemoAccessModal}

                    style={{ textAlign: "center" }}
                  >
                    <button>Get Demo Access!</button>
                    {
//                       <SoftwareEnquiry
//                         modalStatus={showModal}
//                         toggle={openModal}
//                         title="Please fill the form below and get access to the live demo of Logistic Marketplace Software.
// See how it work yourself!"
//                       />
<GetDemoEnquiry
                    modalStatus={demoAccessModal}
                    toggle={openDemoAccessModal}
                    title="Please fill the form below and get access to the live demo of Logistic Marketplace Software.
 See how it works yourself!"
                  />
                    }
                  </div>
                  <Link
                    className="btn fiverr-buys NewGreenBtnJob"
                    href="/buy-now/logistic-marketplace-software"
                  >
                    Buy Now
                  </Link>
                </div>
                <div className="SubscriptionPrice">
                  <div className="line-border NewLineBoader">
                    <Image
                      unoptimized={true}
                      width={100}
                      height={100}
                      alt="crowd_funding_script"
                      src="/img/jobboard/stars.png"
                    />
                    <p>173 Reviews</p>
                  </div>
                </div>
              </div>
              <ul className="job-pr-icon jobwidthauto">
                <li>
                  <i
                    className="fa fa-globe"
                    aria-hidden="true"
                  ></i>
                </li>
                <li>
                  <i className="fa fa-android"></i>
                </li>
                <li>
                  <i className="fa fa-apple"></i>
                </li>
              </ul>
            </div>

            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                <Image
                  unoptimized={true}
                  width={450}
                  height={100 / (100 / 100)}
                  className="lazy"
                  src="/img/logisticmarketplace/logctic-banner-img.png"
                  alt="Logistic_Marketplace_Software_script"
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
                  Logistic Marketplace Software
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            Take our transport management system application on your smart
            mobile phones. The mobile application will provide all the features
            of the website. Get in touch with Logicspice today to get a demo of
            your app.
          </p>
        </div>
      </section>
      <section className="client-say" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 job-video">
              <iframe
                width="100%"
                height="312"
                src="https://www.youtube.com/embed/BtahaOxfctM?rel=0&autoplay=0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-md-6">
              <div className="service-market-ttd-new JobBoardServiceMarketFeatures ServiceMarketFeaturesFull">
                <ul>
                  <li style={{ width: "100%" }}>
                    Choose from multiple requests &#58; Users can check the
                    multiple quotations received for their enquiry and
                    communicate with them.
                  </li>
                  <li style={{ width: "100%" }}>
                    Push notification with direct reply &#58; When any
                    transporter and user send message to each other.
                  </li>
                  <li
                    style={{
                      width: "100%",
                      backgroundImage: "none",
                      margin: "0",
                      minHeight: "0",
                    }}
                  ></li>
                  <li style={{ width: "100%" }}>
                    Communicate with the service provider online :&#58; Customer
                    can communicate with the transporter through the chat
                    process.
                  </li>
                  <li style={{ width: "100%" }}>
                    Track the shipping process &#58; Customer can track their
                    shipment in either it&apos;s shipped&rsquo; packed or more.
                  </li>
                  <li style={{ width: "100%" }}>
                    Responsive website (mobile friendly)
                  </li>
                  <li style={{ width: "100%" }}>White-labeled software</li>
                  <li style={{ width: "100%" }}>One time License Fee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="job_portal_area">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">LS Shipper Features</h2>
          </div>
          <div className="tatxt_txt_job">
            We can provide a customized website for logistic marketplace
            software as per your business requirements. Our logistic system
            application will let customers ship their transportation to the
            right place at the right time very effectively.
          </div>

          <div className="tab_bbx_job ">
            <div className="tab_bbx_top_job">
              <ul className="fiverrClone">
                <li
                  id="tab1_li"
                  className={`food_app_job ddlj ddlj ${
                    sellerTab ? "active" : ""
                  }`}
                  onClick={() => handleSellerTab()}
                >
                  <a>Customer </a>
                </li>
                <li
                  id="tab2_li"
                  className={`logistic_transporters  ddlj ${
                    buyerTab ? "active" : ""
                  }`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Transporters </a>
                </li>
                <li
                  id="tab3_li"
                  className={`admin_app_job  ddlj ${adminTab ? "active" : ""}`}
                  onClick={() => handleAdminTab()}
                >
                  <a>Admin Panel</a>
                </li>
              </ul>
            </div>

            <div className="tab_contant">
              {sellerTab && (
                <>
                  <div className="row">
                    <div className="col-lg-4 col-md-3">
                      <div className="costomer_tab_right costomer_tab_rightleft">
                        <Image
                          unoptimized={true}
                          width={300}
                          height={100}
                          src="/img/logisticmarketplace/logistic_customer.png"
                          alt="Customer"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-9">
                      <div className="costomer_tab_left costomer_tab_leftright">
                        <ul>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/ragister-icon.png"
                              />
                            </i>
                            <span>
                              Customer Registration
                              <div className="product-idea">
                                <p>
                                  Customer can register on the portal to post a
                                  shipping request.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage-dashboard.png"
                              />
                            </i>
                            <span>
                              Manage Dashboard
                              <div className="product-idea">
                                <p>
                                  Customer can manage their account settings and
                                  can see their personal info over the
                                  dashboard.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_shipments.png"
                              />
                            </i>
                            <span>
                              Manage Shipments
                              <div className="product-idea">
                                <p>
                                  Customer can manage (update & delete) the
                                  shipment which are already posted and can
                                  change the location&rsquo; name&rsquo;
                                  weight&rsquo; etc.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/truck_shipments.png"
                              />
                            </i>
                            <span>
                              Track Shipment
                              <div className="product-idea">
                                <p>
                                  Customer can track the shipment where it is &
                                  when it will be delivered.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/search_enquires.png"
                              />
                            </i>
                            <span>
                              Reviews & Ratings
                              <div className="product-idea">
                                <p>
                                  Customer can view the reviews & ratings
                                  Transporter has received in the past which
                                  will be helpful to find the better
                                  Transporter.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_messages.png"
                              />
                            </i>
                            <span>
                              View Messages
                              <div className="product-idea">
                                <p>
                                  Customer can view the messages received from
                                  the Transporter for the shipments. Customer
                                  can chat with multiple Transporters & can view
                                  old messages too.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/accepet_reject_reque.png"
                              />
                            </i>
                            <span>
                              Accept/Reject Request
                              <div className="product-idea">
                                <p>
                                  Customer can view the reviews & ratings
                                  Transporter has received in the past which
                                  will help to find.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/add_post.png"
                              />
                            </i>
                            <span>
                              Add Post
                              <div className="product-idea">
                                <p>
                                  Customer can add a post on the portal to
                                  receive quotes from Transporters.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/promo_codes.png"
                              />
                            </i>
                            <span>
                              Use promo code
                              <div className="product-idea">
                                <p>
                                  Customer can add the promo code to get a
                                  discount on transportation and get the full
                                  benefit.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_news.png"
                              />
                            </i>
                            <span>
                              Subscribe Newsletter
                              <div className="product-idea">
                                <p>
                                  Customer can subscribe to a newsletter by
                                  adding an Email ID.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage-notifi.png"
                              />
                            </i>
                            <span>
                              View Notifications
                              <div className="product-idea">
                                <p>Customer will get notified about Updates.</p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/post_management.png"
                              />
                            </i>
                            <span>
                              Manage Post
                              <div className="product-idea">
                                <p>
                                  Customer can manage posts to receive quotes.
                                </p>
                              </div>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {buyerTab && (
                <>
                  <div className="row">
                    <div className="col-lg-4 col-md-3">
                      <div className="costomer_tab_right">
                        <Image
                          unoptimized={true}
                          width={300}
                          height={100}
                          src="/img/logisticmarketplace/logistic-transporters.png"
                          alt="Transporters"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-9">
                      <div className="costomer_tab_left">
                        <ul>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/ragister-icon.png"
                              />
                            </i>
                            <span>
                              Transporter Registration
                              <div className="product-idea">
                                <p>
                                  Transporter can register on the portal to
                                  accept shipping requests. Transporter can log
                                  in using Facebook.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage-dashboard.png"
                              />
                            </i>
                            <span>
                              Transporter Dashboard
                              <div className="product-idea">
                                <p>
                                  Transporter can view all their Journeys&rsquo;
                                  Trucks&rsquo; Drivers & Quote List on the
                                  Dashboard page.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_user_acc.png"
                              />
                            </i>
                            <span>
                              Transporter Profile
                              <div className="product-idea">
                                <p>
                                  Transporter can view their profile & can
                                  manage (add/edit/delete) it. Transporter can
                                  manage (add/edit/delete) their Branch.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_journeys.png"
                              />
                            </i>
                            <span>
                              Manage Journeys
                              <div className="product-idea">
                                <p>
                                  Transporter can manage (add/edit/delete)
                                  Journeys by adding Trucks and drivers for the
                                  Journey. Transporter can manage
                                  (add/edit/delete) Trucks by adding trucks
                                  details. Transporter can manage
                                  (add/edit/delete) Drivers. Transporter can
                                  allocate a driver for the Journey.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/subscription_plans.png"
                              />
                            </i>
                            <span>
                              Subscription Plans
                              <div className="product-idea">
                                <p>
                                  Transporter can view the subscription plan &
                                  can subscribe for the plans by making the
                                  payment.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/view-blogs.png"
                              />
                            </i>
                            <span>
                              Blog Section
                              <div className="product-idea">
                                <p>
                                  Transporter can view the blog which is
                                  recently updated on the website with Blog
                                  Articles and images.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/search_enquires.png"
                              />
                            </i>
                            <span>
                              Search Enquires
                              <div className="product-idea">
                                <p>
                                  Transporter can search for enquiries by
                                  applying a filter such as Keyword&rsquo;
                                  Select category&rsquo; Pickup place&rsquo;
                                  Pickup date&rsquo; and Destination place which
                                  will show the relevant search as per their
                                  requirement.
                                </p>
                              </div>
                            </span>
                          </li>

                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/view_gig_detail.png"
                              />
                            </i>
                            <span>
                              View details
                              <div className="product-idea">
                                <p>
                                  Transporter can check complete shipment
                                  details and inform the customer about the
                                  progress.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/payment_history.png"
                              />
                            </i>
                            <span>
                              Payment History
                              <div className="product-idea">
                                <p>
                                  Transporter can view all the Payment
                                  transactions.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/reviews_ratings.png"
                              />
                            </i>
                            <span>
                              Reviews & Rating
                              <div className="product-idea">
                                <p>
                                  Transporter can view the reviews & ratings
                                  they have received from Customers for the
                                  service they have provided.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/search-transporter.png"
                              />
                            </i>
                            <span>
                              Save Search
                              <div className="product-idea">
                                <p>
                                  Transporter can save the search for future
                                  use.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/add-quote.png"
                              />
                            </i>
                            <span>
                              Quote Lists
                              <div className="product-idea">
                                <p>
                                  Transporter can send a quote for the Shipping
                                  post. Transporters can view the list of all
                                  quotes where they can view the message & can
                                  communicate with them.
                                </p>
                              </div>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {adminTab && (
                <>
                  <div className="row">
                    <div className="col-lg-4 col-md-3 ">
                      <div className="costomer_tab_right costomer_tab_rightleft2">
                        <Image
                          unoptimized={true}
                          width={300}
                          height={100}
                          src="/img/logisticmarketplace/logistic_admin_mac.png"
                          alt="Admin Panel"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-9">
                      <div className="costomer_tab_left costomer_tab_leftright2">
                        <ul>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/configuration.png"
                              />
                            </i>
                            <span>
                              Configuration
                              <div className="product-idea">
                                <p>
                                  Admin can update Username&rsquo; Email&rsquo;
                                  Password&rsquo; Set Contact Us Address&rsquo;
                                  Transporter Cities&rsquo; Server Configuration
                                  Path&rsquo; PayPal Updates&rsquo; etc.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/admin_dash.png"
                              />
                            </i>
                            <span>
                              Admin Dashboard
                              <div className="product-idea">
                                <p>
                                  Admin can view Statistics & Graph on the
                                  Dashboard. It shows the total count of
                                  Shipment Jobs&rsquo; Customers&rsquo;
                                  Transporters&rsquo; Truck Types&rsquo;
                                  Trucks&rsquo; etc. on the Dashboard page.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_customers.png"
                              />
                            </i>
                            <span>
                              Manage Customers
                              <div className="product-idea">
                                <p>
                                  Admin can view the list of all Customers.
                                  Admin can search for Customer by applying
                                  joining date. Admin can export the report of
                                  all Customers.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_transporter.png"
                              />
                            </i>
                            <span>
                              Manage Transporter
                              <div className="product-idea">
                                <p>
                                  Admin can view the list of all Transporter.
                                  Admin can search for Transporter by applying
                                  joining date. Admin can export the report of
                                  all Customers.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_trucks.png"
                              />
                            </i>
                            <span>
                              Manage Trucks
                              <div className="product-idea">
                                <p>
                                  Admin can view the list of Trucks & can
                                  manage(deactivate/edit/delete) Trucks.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_journeys.png"
                              />
                            </i>
                            <span>
                              Manage Journeys
                              <div className="product-idea">
                                <p>
                                  Admin can view the list of Journeys. Admin can
                                  manage(deactivate/edit/ delete). Admin can
                                  manage truck travels & can manage stops for
                                  the journey.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_category.png"
                              />
                            </i>
                            <span>
                              Manage Categories
                              <div className="product-idea">
                                <p>
                                  Admin can view the list of Product Categories.
                                  Admin can manage(deactivate/ edit/delete) the
                                  categories. Admin can view the sub-categories
                                  and can add new sub-categories.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/view-blogs.png"
                              />
                            </i>
                            <span>
                              Manage Blog
                              <div className="product-idea">
                                <p>
                                  The admin can check the list of Blogs & can
                                  search the blog by name & created date. Admin
                                  can manage(add/deactivate/edit/delete) blogs.
                                  Admin can comment on the blog.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_review_list.png"
                              />
                            </i>
                            <span>
                              View Payment Transaction
                              <div className="product-idea">
                                <p>
                                  Admin can view all the Payment Transactions.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_content.png"
                              />
                            </i>
                            <span>
                              Manage CMS (Content Management System)
                              <div className="product-idea">
                                <p>
                                  Admin will be able to manage(add/edit/delete)
                                  all the Content(text&rsquo; images & videos)
                                  displayed on the Front end.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/manage_news.png"
                              />
                            </i>
                            <span>
                              Manage Newsletters
                              <div className="product-idea">
                                <p>
                                  Admin can view the list of Newsletters added
                                  in the Front End. Admin can
                                  manage(add/edit/delete) Newsletter.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                width={100}
                                height={100}
                                alt="img"
                                src="/img/jobboard/reviews_ratings.png"
                              />
                            </i>
                            <span>
                              View Reviews & Rating
                              <div className="product-idea">
                                <p>
                                  Admin can view the reviews & ratings of
                                  Customers and transporters
                                </p>
                              </div>
                            </span>
                          </li>
                        </ul>
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
              What does our <span>LS Shipper</span> offer you ?
            </h2>
            <p align="justify">
              A transportation management system is an online platform that
              helps businesses to streamline their shipping process. With
              logicspice&apos;s online transportation booking software&rsquo;
              you can start your own online portal like any other popular
              transportation system by providing a high-value fleet management
              platform to your transport businesses.
            </p>
            <p align="justify">
              We have a ready-to-use LS Shipper that you can use to create a
              platform like Uship.
            </p>
            <p align="justify">
              We offer{" "}
              <strong>
                <i>transport booking software</i>
              </strong>{" "}
              to make transportation easy for people across the world.
              Transportation management system is the synonym for moving
              anything and everything. On these websites&rsquo; people can list
              their transport&rsquo; get bidders&rsquo; and choose the best out
              of all.
            </p>
            <p align="justify">
              Our ready-made LS Shipper&rsquo; a cargo booking software has a
              unique set of features that help shippers manage their fleet
              operations easily and can save more time to achieve their mission.
              This transport logistic software helps businesses in
              shipping&rsquo; tracking&rsquo; and delivering their freight from
              one place to another
            </p>
            <p align="justify">
              Using this transport management software&rsquo; the transporter
              can choose their jobs&rsquo; bid for deliveries&rsquo; and
              communicate with the client. Companies are already generating big
              profits in the shipping industry like shiply. Logicspice offers a
              feature-rich transport marketplace with a unique set of features
              and functionality.
            </p>
            <p align="justify">
              We at Logicspice are a{" "}
              <i>Transportation Software Development Company</i> that provides
              end-to-end logistics solutions to simplify your process and
              minimize operational hassles. If you want to grow your logistics
              business in less time then you can get our ready made software.
              Also provides custom solutions if you need. Take it a step further
              and inquire for the demo today.
            </p>
          </div>
        </div>
      </section>

      <section className="SubscriptionModel" id="subscriptionmodel">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Subscription Model</h2>
            <br />
            <div className="SubscriptionModelBx">
              <p>
                Experience convenience like never before with our
                subscription-based hassle-free model&rsquo; available at just
                USD 145 per month.
              </p>
              <p>Key Benefits&#58;</p>
              <ul>
                <li>
                  <span>
                    Lifetime Updates&#58; Enjoy complimentary updates for your
                    software version throughout its lifespan.
                  </span>
                </li>
                <li>
                  <span>
                    Timely Upgrades&#58; Seamlessly transition to upgraded
                    versions at regular intervals&rsquo; all at no extra cost.
                  </span>
                </li>
                <li>
                  <span>
                    Zero Setup Fees&#58; There are no additional charges for the
                    setup and installation of the software&rsquo; making it
                    easier for customers to get started.
                  </span>
                </li>
                <li>
                  <span>
                    Unlimited Shipment Postings&#58; Post as many shipments as
                    you need without any limitations.
                  </span>
                </li>
                <li>
                  <span>
                    Enhanced Communication&#58; Avail yourself of 5 domain-based
                    email accounts to enhance your professional communication.
                  </span>
                </li>
                <li>
                  <span>
                    Mobile Apps&#58; Stay perpetually connected with Android and
                    iPhone apps&rsquo; available for an additional USD 45 per
                    month for each&rsquo; android or iPhone. These apps will be
                    launched through your dedicated developer accounts on Google
                    Play and the Apple App Store.
                  </span>
                </li>
                <li>
                  <span>
                    Effortless Program Operation&#58; Revel in robust bandwidth
                    that guarantees your program runs flawlessly&rsquo;
                    supported by resources allocated to your subscription model.
                    Any increase in allocated resources will incur additional
                    charges beyond the standard subscription model.
                  </span>
                </li>
                <li>
                  <span>
                    Enduring Support&#58; We are committed to providing lifelong
                    assistance through our subscription model. If any software
                    issues arise&rsquo; our dedicated technical team will
                    promptly address them during office hours.
                  </span>
                </li>
                <li>
                  <span>
                    Personalized Customization Assistance&#58; Delivering Custom
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
                <div className="btn btn-get"                     onClick={openDemoAccessModal}
                >
                  <button>Get Demo Access!</button>
                  {
//                     <SoftwareEnquiry
//                       modalStatus={showModal}
//                       toggle={openModal}
//                       title="Please fill the form below and get access to the live demo of Logistic Marketplace Software.
// See how it work yourself!"
//                     />

<GetDemoEnquiry
                    modalStatus={demoAccessModal}
                    toggle={openDemoAccessModal}
                    title="Please fill the form below and get access to the live demo of Logistic Marketplace Software.
 See how it works yourself!"
                  />
                  }
                </div>
                <Link
                  className="btn fiverr-buys"
                  href="/buy-now/logistic-marketplace-software"
                >
                  Buy Now
                </Link>
              </div>
              <div className="jocpp">
                <ul className="job-pr-icon">
                  <li>
                    <i
                      className="fa fa-globe"
                      aria-hidden="true"
                    ></i>
                  </li>
                  <li>
                    <i className="fa fa-android"></i>
                  </li>
                  <li>
                    <i className="fa fa-apple"></i>
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
                    <p>173 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SubscriptionModelBx">
            <p>
              The solution offered by Logicspice provides several advantages
              that can assist you in expanding your business within the
              competitive market. Here are some key benefits outlined below&#58;
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
                  branding&rsquo; logo&rsquo; and content at no additional cost.
                </span>
              </li>
              <li>
                <span>
                  Access custom features according to your specific
                  requirements&rsquo; available at an additional charge.
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
                  Experience efficient communication channels via email&rsquo;
                  WhatsApp&rsquo; Google Meet&rsquo; Skype&rsquo; Zoom and
                  Teams.
                </span>
              </li>
            </ul>
            <p>
              For details on an Enterprise license&rsquo; please{" "}
              <a onClick={toggleModal}>contact us</a>.
            </p>
          </div>
        </div>
      </section>
      <section className="job_portal_area script-update-bg">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">LS Shipper Update History</h2>
            <br />
            <div className="script-update_title">
              <p>
                V1.1 - September 20th&rsquo; 2022 - PHP version update and other
                major improvements!
              </p>
              <ul>
                <li>
                  <span>PHP version updated from 7.3.13 to 7.4.30.</span>
                </li>
                <li>
                  <span>
                    Added country and state fields at the time of registration
                    of transporter and customer.
                  </span>
                </li>
                <li>
                  <span>
                    Transporter&apos;s mobile and address verification by the
                    admin.
                  </span>
                </li>
                <li>
                  <span>
                    Stripe payment gateway integration for purchasing membership
                    plans as a transporter.
                  </span>
                </li>
                <li>
                  <span>
                    Invoice feature for the payment received over the portal.
                  </span>
                </li>
                <li>
                  <span>
                    Added French&rsquo; Arabic language for the web version of
                    the software.
                  </span>
                </li>
                <li>
                  <span>
                    Search by Radius feature while the transporter searches the
                    jobs.
                  </span>
                </li>
                <li>
                  <span>Newsletter module integration on the admin side.</span>
                </li>
                <li>
                  <span>
                    Payment process integrated while accepting the Quote.
                  </span>
                </li>
                <li>
                  <span>
                    Email notifications to the transporters for the jobs which
                    are matching to their category.
                  </span>
                </li>
                <li>
                  <span>
                    Displaying the number of active transporters and active
                    shipments to the visitors.
                  </span>
                </li>
              </ul>
              <p>
                V1.0 - January 09th&rsquo; 2020 - PHP version update and other
                small improvements!
              </p>
              <ul>
                <li>
                  <span>PHP version updated from 5.6.40 to 7.3.13 </span>
                </li>
                <li>
                  <span>Performance improvements</span>
                </li>
                <li>
                  <span>Minor bug fixes</span>
                </li>
              </ul>
            </div>
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
              <a
                className=""
                aria-controls="jobportal"
                onClick={toggleJobPortalModal}
              >
                <i className="fa fa-cogs" aria-hidden="true"></i>
                <span>How It Works</span>
              </a>
              <a
                className=""
                aria-controls="buyjobportal"
                onClick={toggleBuyJobPortalModal}
              >
                <i className="fa fa-building" aria-hidden="true"></i>
                <span>Companies Using It</span>
              </a>
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
      <div>
        <Modal
          show={jobportal}
          onHide={toggleJobPortalModal}
          id="jobportal"
          className="modal-service"
        >
           <Modal.Header className="modal-dialog-service">
            <button
              type="button"
              className="custom-close-button"
              aria-label="Close"
              onClick={toggleJobPortalModal}
            >
              &times;
            </button>
          </Modal.Header>
          <Modal.Body>
            <Image
              unoptimized={true}
              width={900}
              height={100 / (100 / 100)}
              src="/img/logisticmarketplace/logistics_marketplace.jpg"
              alt="icon"
              title=""
              className="img-fluid"
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={buyjobportal}
          onHide={toggleBuyJobPortalModal}
          id="buyjobportal"
          className="modal-service"
        >
           <Modal.Header className="modal-dialog-service">
            <button
              type="button"
              className="custom-close-button"
              aria-label="Close"
              onClick={toggleBuyJobPortalModal}
            >
              &times;
            </button>
          </Modal.Header>
          <Modal.Body>
            <div id="jobboardclients" closeButton>
              <Slider {...companies}>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://loadmoversgh.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      loadmoversgh.com
                    </Link>
                  </div>
                  <Link
                    href="https://loadmoversgh.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100 / (100 /100)}
                      src="/img/logisticmarketplace/loadmoversgh.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://fletes24.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      fletes24.com
                    </Link>
                  </div>
                  <Link
                    href="https://fletes24.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100 / (100 /100)}
                      src="/img/logisticmarketplace/fletes24.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://logistics.onestop.global/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     logistics.onestop.global
                    </Link>
                  </div>
                  <Link
                    href="https://logistics.onestop.global/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100 / (100 /100)}
                      src="/img/logisticmarketplace/logisticsonestop.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://afodel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      afodel.com
                    </Link>
                  </div>
                  <Link
                    href="https://afodel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100 / (100 /100)}
                      src="/img/logisticmarketplace/afodel.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="http://esseltransport.co.ke/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      esseltransport.co.ke
                    </Link>
                  </div>
                  <Link
                    href="http://esseltransport.co.ke/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100 / (100 /100)}
                      src="/img/logisticmarketplace/esseltransport.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://loadboard.trucking21.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    loadboard.trucking21.com
                    </Link>
                  </div>
                  <Link
                    href="https://loadboard.trucking21.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100 / (100 /100)}
                      src="/img/logisticmarketplace/loadboard.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </Slider>
            </div>
          </Modal.Body>
         
        </Modal>
      </div>

      <section className="used_technology_section" id="technologies">
        <div className="container">
          <h4 className="title_main">
            <span>Used Technologies</span> and Server Requirements
          </h4>
          <div className="row used_technology_section_dataa">
            <div className="col-sm-6">
              <ul>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/jobboard/tech_cakephp_icon.png"
                      alt="CakePHP Development"
                    />
                  </div>
                  <div className="icntechimg_nm">CakePHP</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/jobboard/html-5.png"
                      alt="HTML5"
                    />
                  </div>
                  <div className="icntechimg_nm">HTML5</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/jobboard/tech_mysql_icon.png"
                      alt="MySQL"
                    />
                  </div>
                  <div className="icntechimg_nm">MySQL</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/jobboard/tech_apache_icon.png"
                      alt="Apache"
                    />
                  </div>
                  <div className="icntechimg_nm">Apache</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/jobboard/apple_phn_icon.png"
                      alt="MySQL"
                      className="lazy"
                    />
                  </div>
                  <div className="icntechimg_nm">iOS</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/jobboard/andoird_icon.png"
                      alt="Apache"
                      className="lazy"
                    />
                  </div>
                  <div className="icntechimg_nm">Android</div>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="list_detail">
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Browsers - </b> Firefox 32.6+&rsquo; Chrome 20.0+&rsquo;
                  Opera 30.0+&rsquo; Safari 5+&rsquo; IE 9+
                </li>
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Framework - </b> Cakephp
                </li>
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Language - </b> PHP 7.4.30&rsquo; AJAX&rsquo; jQuery
                </li>
                <li className="other aos-init aos-animate" data-aos="fade-up">
                  <b>Design - </b> HTML 5&rsquo; CSS 3&rsquo; JavaScript
                </li>
                <li className="other aos-init" data-aos="fade-up">
                  <b>Database – </b> MySQL 5.5+{" "}
                </li>
                <li className="other aos-init" data-aos="fade-up">
                  <b>Server – </b> Apache 2.4+
                </li>
                <li className="other aos-init" data-aos="fade-up">
                  <b>iOS - </b> xcode 10.2.1 and swift 4.2{" "}
                </li>
                <li className="other aos-init" data-aos="fade-up">
                  <b>Android - </b> java 9 and Android Studio 3.4
                </li>
              </ul>
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
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Support</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">
                  White Labeled <br />
                  Software
                </div>
              </li>
              <li data-aos="fade">
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
              <li data-aos="fade">
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
      <section className="su_rev_section" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className="title_main">Customer Reviews </h4>
              <div className="row">
                <div className="col-md-5">
                  <div className="outof_rating">
                    <div className="main-rait">
                      <span>
                        <i className="fa fa-star"></i>{" "}
                        <span>4.7 out of 5 stars</span>
                      </span>
                    </div>
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
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">159</div>
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
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">14</div>
                    </div>

                    <div className="review_rating_fjs">
                      <div className="star_num">
                        3 <i className="fa fa-star"></i>
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
                </div>
                <div className="col-md-7">
                  <a className="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title="Logistic Marketplace Software"
                  />
                </div>
                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    {/* <!--                    <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div>--> */}

                    <div className="customer_review_stext">
                      &quot;We needed a customized logistic booking system for
                      our logistics business to manage our users. Logicspice has
                      provided us with the right online solution.- Thanks!&quot;
                    </div>
                    <div
                      className="who_ratset"
                      style={{ textAlign: "right", paddingRight: "17px" }}
                    >
                      <span
                        className="star_review_main"
                        style={{ paddingRight: "10px", color: "gold" }}
                      >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Kunal S.&rsquo; India{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/jobboard/india_flag_img.png"
                          alt="mobile app development in India"
                          style={{ width: "20px", marginLeft: "3px" }}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    {/* <!--                    <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div>--> */}
                    <div className="customer_review_stext" id="fiveer-clone">
                      &quot;Recently I bought this software to launch my own
                      logistic marketplace software from Logicspice and it
                      worked really nice. Buying this software is worth for
                      money as they gave me the full source code and I can
                      customize it. Highly recommended.&quot;
                    </div>

                    <div
                      className="who_ratset"
                      style={{ textAlign: "right", paddingRight: "17px" }}
                    >
                      <span
                        className="star_review_main"
                        style={{ paddingRight: "10px", color: "gold" }}
                      >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">Alena&rsquo; USA</span>{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          width={20}
                          height={100}
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    {/* <!--                    <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div>--> */}
                    <div className="customer_review_stext">
                      &quot;Fast and effective PHP software for my logistic
                      business. They are professional&rsquo; always put in extra
                      effort&rsquo; and have technically strong knowledge. One
                      of the best software providers. Will continue to work with
                      them for an upcoming project.&quot;
                    </div>
                    <div
                      className="who_ratset"
                      style={{ textAlign: "right", paddingRight: "17px" }}
                    >
                      <span
                        className="star_review_main"
                        style={{ paddingRight: "10px", color: "gold" }}
                      >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Mohammed Shozeb&rsquo; UAE{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/jobboard/uae_flag_iimg.png"
                          alt="mobile app development in UAE"
                          style={{ width: "20px", marginLeft: "3px" }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 Quick_FAQ">
              <h4 className="title_main">FAQ&apos;s</h4>
              <div className="MainFaqBx">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    className="aos-init aos-animate"
                  >
                    <Typography>Is the source code modifiable?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, most of the software is completely flexible and
                      clients can customize it as per their requirements.
                      However, some parts of it are encoded.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <Typography>
                      How much time will it take to make it live?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The whole process will take around 1 week, and the rest
                      depends on your response time and customization
                      requirements.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography>
                      How will you deal with bugs and issues in the product?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      We will communicate with you via chat, phone call, Skype,
                      and email during our business hours and try to solve your
                      problem as soon as possible.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                  >
                    <Typography>
                      Does Logicspice provide technical support?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, we are providing free 3 months of technical support.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    aria-controls="panel5d-content"
                    id="panel5d-header"
                  >
                    <Typography>Do I own my software completely?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, you will own the license to use it for the domain you
                      purchased it for.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <AccordionSummary
                    aria-controls="panel6d-content"
                    id="panel6d-header"
                  >
                    <Typography>
                      Do I need to provide a Google Maps API key? If yes, how to
                      generate a Google Map API key?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, you need to provide a map API key. Please follow the
                      steps mentioned in the following URL to generate the
                      Google map API key:
                      https://developers.google.com/maps/documentation/javascript/get-api-key.
                      You need to set up your billing details over that.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                >
                  <AccordionSummary
                    aria-controls="panel7d-content"
                    id="panel7d-header"
                  >
                    <Typography>
                      Can I update some design and functionality in the
                      application code myself?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, you will have access to all the code.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel8"}
                  onChange={handleChange("panel8")}
                >
                  <AccordionSummary
                    aria-controls="panel8d-content"
                    id="panel8d-header"
                  >
                    <Typography>
                      Will I be able to use it on multiple domains after I
                      purchase this software?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      You will be licensed to use it only for the domain you
                      purchased it for.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel9"}
                  onChange={handleChange("panel9")}
                >
                  <AccordionSummary
                    aria-controls="panel9d-content"
                    id="panel9d-header"
                  >
                    <Typography>
                      Can I resell the software? Will I have rights over the
                      software code?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No, you can&apos;t resell the software. All rights will remain
                      with Logicspice only.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel10"}
                  onChange={handleChange("panel10")}
                >
                  <AccordionSummary
                    aria-controls="panel10d-content"
                    id="panel10d-header"
                  >
                    <Typography>
                      Do you offer a Money Back Guarantee?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, we offer a 30-day money-back guarantee to ensure
                      customer satisfaction with our software. If for any reason
                      you wish to discontinue using the product, you can ask us
                      for a refund. We will refund your total money except the
                      installation and configuration charges, which is USD 65 or
                      20% of the application cost, whichever is greater.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel11"}
                  onChange={handleChange("panel11")}
                >
                  <AccordionSummary
                    aria-controls="panel11d-content"
                    id="panel11d-header"
                  >
                    <Typography>
                      Along with hosting server details, what other
                      recommendations?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      We recommend you purchase an SSL certificate along with a
                      hosting server, considering that an SSL certificate is
                      necessary for all websites these days and it provides a
                      secure layer to the website as well.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content_area feature_inner" id="features">
        <div className="container">
          <h2 className="title_main">Logistic Marketplace Software Features</h2>

          <div id="joblboardslide">
            <Slider {...settings}>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1500}
                    height={100 / (100 / 100)}
                    src="/img/logisticmarketplace/add_shipment.png"
                    alt="Add Shipment"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Add Shipment </div>
                  <div className="pro-feat-detai">
                    Add all the shipment details like image&rsquo;
                    description&rsquo; weight&rsquo; quantity&rsquo; type&rsquo;
                    pickup point&rsquo; delivery point.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1500}
                    height={100 / (100 / 100)}
                    src="/img/logisticmarketplace/search_for_transporters.png"
                    alt="Search for transporters"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Search for transporters</div>
                  <div className="pro-feat-detai">
                    Search by keyword&rsquo; category&rsquo;departure
                    city&rsquo; destination city and state.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1500}
                    height={100 / (100 / 100)}
                    src="/img/logisticmarketplace/search_inquiries.png"
                    alt="Search enquiries"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Search enquiries</div>
                  <div className="pro-feat-detai">
                    Transport can search for the listed enquiries item&rsquo;
                    collection&rsquo; delivery.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1500}
                    height={100 / (100 / 100)}
                    src="/img/logisticmarketplace/submit_quote.png"
                    alt="Submit quote"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Submit quote</div>
                  <div className="pro-feat-detai">
                    User can check the transporter details and get their contact
                    details.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1500}
                    height={100 / (100 / 100)}
                    src="/img/logisticmarketplace/transporter_details.png"
                    alt="Transporter details"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Transporter details</div>
                  <div className="pro-feat-detai">
                    Borrower can search for equipment to rent and purchase using
                    categories&rsquo; subcategories and keyword.
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <div className="clearfix"></div>
      <section className="enq-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <div className="btn btn-primary" onClick={openModal}>
                <button>Enquire Now</button>
                {
                  <SoftwareEnquiry
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Logistic Marketplace Software"
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
                    href="/freelancer-clone"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Freelancer Clone</h3>

                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            width={180}
                            height={100}
                            src="/img/jobboard/freelancer_logo_new.png"
                            alt="Freelancer Clone"
                            className=""
                          />
                        </div>
                        <p>
                          <span>
                            Best Freelance Marketplace Software with bidding and
                            hiring experts online.
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
                    href="/job-board-software"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Job Board Software</h3>

                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            width={250}
                            height={100}
                            src="/img/jobboard/job-board-logo.png"
                            alt="Job board software"
                            className=""
                          />
                        </div>
                        <p>
                          <span>Best white label job board software. </span>{" "}
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
                    href="/whatsapp-clone"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>WhatsApp Clone App</h3>

                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            width={180}
                            height={100}
                            src="/img/jobboard/ls-chat-logo.png"
                            alt="WhatsApp Clone App"
                            className=""
                          />
                        </div>
                        <p>
                          <span>Readymade WhatsApp Clone Script.</span>{" "}
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
      <Footer />

      <MDBModal
        id="jobportal"
        tabindex="-1"
        labelledby="exampleModalLabel"
        v-model="jobportal"
        className="modal-service"
      >
        <MDBModalBody>
          <Image
            unoptimized={true}
            width={100}
            height={100}
            src="/img/logisticmarketplace/logistics_marketplace.jpg"
            alt="icon"
            title=""
          />
        </MDBModalBody>
      </MDBModal>

      <MDBModal
        id="buyjobportal"
        tabindex="-1"
        labelledby="exampleModalLabel"
        v-model="buyjobportal"
        className="modal-service"
      >
        <MDBModalBody>
          <div id="jobboardclients" className="owl-carousel hidedot">
            <div className="item active">
              <div className="site-titles">
                <Link href="https://loadboard.trucking21.com/" target="_blank">
                  loadboard.trucking21.com
                </Link>
              </div>
              <Link href="https://loadboard.trucking21.com/" target="_blank">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/logisticmarketplace/loadboard.jpg"
                  alt="banner"
                  title=""
                />
              </Link>
            </div>

            <div className="item">
              <div className="site-titles">
                <Link href="https://loadmoversgh.com/" target="_blank">
                  loadmoversgh.com
                </Link>
              </div>
              <Link href="https://loadmoversgh.com/" target="_blank">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/logisticmarketplace/loadmoversgh.jpg"
                  alt="banner"
                  title=""
                />
              </Link>
            </div>
            <div className="item">
              <div className="site-titles">
                <Link href="https://fletes24.com/" target="_blank">
                  fletes24.com
                </Link>
              </div>
              <Link href="https://fletes24.com/" target="_blank">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/logisticmarketplace/fletes24.jpg"
                  alt="banner"
                  title=""
                />
              </Link>
            </div>
            <div className="item">
              <div className="site-titles">
                <Link href="https://logistics.onestop.global/" target="_blank">
                  logistics.onestop.global
                </Link>
              </div>
              <Link href="https://logistics.onestop.global/" target="_blank">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/logisticmarketplace/logisticsonestop.jpg"
                  alt="banner"
                  title=""
                />
              </Link>
            </div>
            <div className="item">
              <div className="site-titles">
                <Link href="https://afodel.com/" target="_blank">
                  afodel.com
                </Link>
              </div>
              <Link href="https://afodel.com/" target="_blank">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/logisticmarketplace/afodel.jpg"
                  alt="banner"
                  title=""
                />
              </Link>
            </div>
            <div className="item">
              <div className="site-titles">
                <Link href="http://esseltransport.co.ke/" target="_blank">
                  esseltransport.co.ke
                </Link>
              </div>
              <Link href="http://esseltransport.co.ke/" target="_blank">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/logisticmarketplace/esseltransport.jpg"
                  alt="banner"
                  title=""
                />
              </Link>
            </div>
          </div>
        </MDBModalBody>
      </MDBModal>

      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&rsquo; I have a question regarding the solutions you provide. Please Help!"
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
    </>
  );
};

export default Page;
