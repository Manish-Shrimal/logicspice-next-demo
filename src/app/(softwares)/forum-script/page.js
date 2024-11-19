"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry"; 
import Reviewmodals from "@/app/Components/Reviewmodals";
import Whylogicspice from "@/app/Components/Whylogicspice";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";
import "../../../../public/css/font-awesome.css"


const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        BaseAPI + "/product/Details/forum-script"
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
  const [activeTab, setActiveTab] = useState("tab2");
  const [sellerTab, setSellerTab] = useState(true);
  const [adminTab, setAdminTab] = useState(false);

  const handleSellerTab = () => {
    setSellerTab(true);
    setAdminTab(false);
  };

  const openModal = () => {
    setShowModal(!showModal);
  };

  const handleAdminTab = () => {
    setSellerTab(false);
    setAdminTab(true);
  };

  const opendiv = (tab) => {
    setActiveTab(tab);
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

  const [demoAccessModal, setDemoAccessModal] = useState(false);
  const openDemoAccessModal = () => {
    // console.log(showModal);

    setDemoAccessModal(!demoAccessModal);
  };

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
      <section className="paid-pro job-portal-banner fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg PHPForumScript">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>PHP Forum Script</h1>
              <div className="both-left-p-sec">
                <h2>Readymade Online Forum Software</h2>
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
                        <Image unoptimized={true}
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
                  {/* <Link
                    href="#"
                    className="btn btn-get"
                    id="buy_now_1"
                    onClick={() => openDemoModel()}
                  >
                    Get Demo Access!
                  </Link> */}
                  <div className=" btn-get" onClick={openDemoAccessModal} style={{textAlign : "center"}}>
                    <button>Get Demo Access!</button>
                    {
//                       <SoftwareEnquiry
//                         modalStatus={showModal}
//                         toggle={openModal}
//                         title="Please fill the form below and get access to the live demo of Forum Script.
// See how it work yourself!"
//                       />

                      <GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of Forum script. See how it works yourself!"
                      />
                    }
                  </div>
                  <Link
                    className="btn fiverr-buys NewGreenBtnJob"
                    href="/buy-now/forum-script"
                  >
                    Buy Now
                  </Link>
                </div>
                <div className="SubscriptionPrice">
                  <div className="line-border NewLineBoader">
                    <Image unoptimized={true}
                      width={100}
                      height={100}
                      alt="crowd_funding_script"
                      src="/img/jobboard/stars.png"
                    />
                    <p>17 Reviews</p>
                  </div>
                </div>
              </div>

              <div className="jocpp">
                <ul className="job-pr-icon">
                  <li>
                    <i className="fa fa-globe"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                <Image unoptimized={true}
                  width={450}
                  height={500 / (100 / 100)}
                  alt="forum_mobile"
                  src="/img/softwares-banner-img/forum-banner-img.png"
                />
              </div>
            </div>
          </div>
          <div className="job-portal-banner-link">
            <div aria-label="breadcrumb" className="my-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/softwares">Softwares</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Forum Script
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            Want to develop your online discussion forum to enable your audience
            to interact with each other? Get our ready to use forum script to
            make your help forum in no time. This script helps your users to
            connect in a place where they can share their queries and
            experience. It allows users to create an account, open threads,
            reply to messages and more.{" "}
          </p>
        </div>
      </section>
      <section
        className="client-say WhatsaapCliets"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-market-ttd">
                <ul>
                  <li>Profile Customization</li>
                  <li>Category Management</li>
                  <li>Responsive & SEO Friendly</li>
                  <li>User-Friendly Dashboard</li>
                  <li>Forum Search Option</li>
                  <li>White Labeled Script</li>
                  <li>One time License Fee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="job_portal_area">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Forum Script Features</h2>
          </div>

          <div className="tatxt_txt_job text-center">
            This software has all basic functionality like user registration and
            enables the user to customize their profiles and can increase
            engagement. It has a powerful text editor to create and customize
            the post. Users can create as many discussion threads as per their
            needs. This software is robust, scalable, secure and admin can take
            complete control over the forum with the admin dashboard. Aside from
            given functionality, you can customize this script according to your
            needs.
          </div>

          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job tab_bbx_job_classified">
              <ul className="tab_listing">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${
                    sellerTab ? "active" : ""
                  }`}
                  onClick={() => handleSellerTab()}
                >
                  <a>User</a>
                </li>
                <li
                  id="tab3_li"
                  className={`admin_app_job ddlj ${adminTab ? "active" : ""}`}
                  onClick={() => handleAdminTab()}
                >
                  <a>Administrator</a>
                </li>
              </ul>
            </div>
            <div className="tab_contant">
              {sellerTab && (
                <>
                  <div className="costomer_tab rj" id="tab1">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right costomer_tab_rightleft">
                          <Image unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/forum-script/fourms-multiphone.png"
                            alt="Forum User"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left costomer_tab_leftright">
                          <ul>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/secure_login.png"
                                />
                              </i>
                              <span>
                                User signup
                                <div className="product-idea">
                                  <p>User can register on the Portal.</p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/configuration.png"
                                />
                              </i>
                              <span>
                                User Login
                                <div className="product-idea">
                                  <p>User login is secured</p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage-dashboard.png"
                                />
                              </i>
                              <span>
                                User Management
                                <div className="product-idea">
                                  <p>
                                    Users can manage all their Profile details.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_user.png"
                                />
                              </i>
                              <span>
                                Manage account
                                <div className="product-idea">
                                  <p>User can view account and edit account.</p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_contents.png"
                                />
                              </i>
                              <span>
                                Forum Management
                                <div className="product-idea">
                                  <p>
                                    Users can manage all Forums which include
                                    adding,editing and deleting them and
                                    activate,deactivate them.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_service.png"
                                />
                              </i>
                              <span>
                                Search forum
                                <div className="product-idea">
                                  <p>Users can search forums.</p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_service.png"
                                />
                              </i>
                              <span>
                                View Forum details
                                <div className="product-idea">
                                  <p>
                                    Users can view Forums details of the
                                    selected forum like Forum name,image.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_service.png"
                                />
                              </i>
                              <span>
                                Manage Forum Comment List
                                <div className="product-idea">
                                  <p>
                                    Any user can add new comments from the front
                                    end over the forum which is added by user or
                                    admin.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_service.png"
                                />
                              </i>
                              <span>
                                Manage Reply List
                                <div className="product-idea">
                                  <p>
                                    Users can reply to comments from the front
                                    end over the forum which is added by user or
                                    admin.
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

              {adminTab && (
                <>
                  <div className="costomer_tab rj" id="tab3">
                    <div className="row">
                      <div className="col-lg-4 col-md-3 ">
                        <div className="costomer_tab_right costomer_tab_rightleft2">
                          <Image unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/forum-script/fourms-dashboard.png"
                            alt="Admin Panel"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left costomer_tab_leftright2">
                          <ul>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/ragister-icon.png"
                                />
                              </i>
                              <span>
                                Admin Login
                                <div className="product-idea">
                                  <p>Admin login is secured.</p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_profile.png"
                                />
                              </i>
                              <span>
                                Admin Dashboard
                                <div className="product-idea">
                                  <p>
                                    Admin can manage their account settings and
                                    see their information over the dashboard.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/private-chat.png"
                                />
                              </i>
                              <span>
                                Configuration
                                <div className="product-idea">
                                  <p>
                                    Able to change the Username / Password /
                                    Change Email.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_job.png"
                                />
                              </i>
                              <span>
                                Forum Categories Management
                                <div className="product-idea">
                                  <p>
                                    Admin can manage all Forum categories which
                                    includes adding,editing and deleting them
                                    and activate,deactivate them.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/search-friend.png"
                                />
                              </i>
                              <span>
                                Forum Management
                                <div className="product-idea">
                                  <p>
                                    Admin can manage all Forums which includes
                                    adding,editing and deleting them and
                                    activate,deactivate them.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/add-group.png"
                                />
                              </i>
                              <span>
                                User Management
                                <div className="product-idea">
                                  <p>
                                    Admin can manage all Users which includes
                                    adding,editing and deleting them and
                                    activate,deactivate them.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/update-group.png"
                                />
                              </i>
                              <span>
                                Manage Forum Comment List
                                <div className="product-idea">
                                  <p>
                                    Admin can view all comments or give comments
                                    over any Forum which is added by user or
                                    admin.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/delete-group.png"
                                />
                              </i>
                              <span>
                                Manage Reply List
                                <div className="product-idea">
                                  <p>
                                    Admin can view all replies or give replies
                                    over any comment .
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
            </div>
          </div>
        </div>
      </section>
      <section className="job_product_page_header_in">
        <div className="container">
          <div className="whateissuprt">
            <h2 className="headhs">
              What does our Online Forum Software offer you?
            </h2>
            <p>
              Having an online discussion forum has become the need of every
              online business nowadays as tends to reduce time to connect with
              the company and the users. By discussing the queries in a common
              transparent platform you can improve productivity within your
              team, stakeholders and prospective clients. With our ready to use
              forum script, you can create an online community so your audience
              will naturally feel more engaged with your product or project.{" "}
            </p>
            <p>
              This PHP forum script has a secure admin dashboard where admin can
              control the forum by viewing and deleting the list of all
              registered users and can edit and delete their topics and comment
              which provides full command over the forum. Users can raise the
              questions regarding knowledge, reviews, suggestions threads of
              product or services by our easy to use help forum. It can be
              easily integrated with your website in less time.
            </p>
            <p>
              The active forum makes the users and prospective clients feel
              authenticated regarding your product or service. Get our readymade
              forum clone and save your development cost.
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
                <li>
                  <span>
                    Unlimited User Connection Listings: List as many user
                    connections as you need without any limitations.
                  </span>
                </li>
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
                {/* <Link
                  href="#"
                  className="btn btn-get"
                  id="buy_now_1"
                  onClick={() => openDemoModel()}
                >
                  Get Demo Access!
                </Link> */}
                <div className="btn btn-get" onClick={openDemoAccessModal}>
                  <button>Get Demo Access!</button>
                  {
//                     <SoftwareEnquiry
//                       modalStatus={showModal}
//                       toggle={openModal}
//                       title="Please fill the form below and get access to the live demo of Forum Script.
// See how it work yourself!"
//                     />

<GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of Forum script. See how it works yourself!"
                      />
                  }
                </div>
                <Link
                  className="btn fiverr-buys"
                  href="/buy-now/forum-script"
                >
                  Buy Now
                </Link>
              </div>
              <div className="jocpp">
                <ul className="job-pr-icon">
                  <li>
                    <i className="fa fa-globe"></i>
                  </li>
                </ul>
                <div className="portel-btnbx">
                  <div className="line-border NewLineBoader">
                    <Image unoptimized={true}
                      width={100}
                      height={100}
                      src="/img/jobboard/stars.png"
                      alt=""
                      className="lazy"
                    />
                    <p>17 Reviews</p>
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
                  Receive three months of complimentary support for any bugs or
                  issues you encounter.
                </span>
              </li>
              <li>
                <span>
                  Experience efficient communication channels via email,
                  WhatsApp, Google Meet, Skype, Zoom and Teams.
                </span>
              </li>
            </ul>
            <p>
              For details on an Enterprise license, please{" "}
              <Link href="#" onClick={toggleModal}>
                contact us
              </Link>
              .
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
                  <Image unoptimized={true}
                    width={20}
                    height={100}
                    src="/img/images/why-logic-icon.png"
                    alt=""
                    className=""
                  />
                </i>
                <span>Why Logicspice</span>
              </a>
              <Whylogicspice open={showInfo} />
            </div>
          </div>
          <div className="small_bbx_job_new" style={{ display: "none" }}>
            <div className="row">
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-bx1">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/coding.png"
                        alt="img"
                      />
                    </div>
                    <h3>Optimized Code with proper commenting</h3>
                    <p>
                      Our script code is fully optimized, which results in quick
                      load time and, Code is properly commented for each
                      function and module so anyone can easily update the code
                      in future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-bx2">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/data-complexity.png"
                        alt="img"
                      />
                    </div>
                    <h3>Strong Framework of PHP & Well managed database</h3>
                    <p>
                      We used popular and strong Framework of PHP with latest
                      versions to keep the code up to date and prevalent for
                      longer duration. Our experienced team managed all the
                      database tables with complete flexibility for extension
                      versions in future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-bx3">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/coordinate.png"
                        alt="img"
                      />
                    </div>
                    <h3>
                      Quick Response and
                      <br /> Coordination
                    </h3>
                    <p>
                      Customers will always get a quick response from our
                      technical support team, with the best possible solution.
                      Expect our response within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-bx4">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/customize.png"
                        alt="img"
                      />
                    </div>
                    <h3>Customization at affordable price</h3>
                    <p>
                      We provide customization of our scripts, to meet customer
                      expectations with best affordable price and minimum
                      turn-around time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-bx5">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/smartphone-icon.png"
                        alt="img"
                      />
                    </div>
                    <h3>Mobile Friendly Script</h3>
                    <p>
                      Our Script is mobile friendly so, users can easily access
                      all the features through mobile devices that gives
                      improved user experience with portability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-bx6">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/data.png"
                        alt="img"
                      />
                    </div>
                    <h3>Dedicated Support Team</h3>
                    <p>
                      You will get the dedicated support team while purchasing
                      the script or product. Technical support team will resolve
                      your query quickly in a given time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-box thumbnail-bx7">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/web-icon.png"
                        alt="img"
                      />
                    </div>
                    <h3>Global company with agile development approach</h3>
                    <p>
                      Our customers are almost equally spread around the globe
                      and we provide international standard solutions for USA,
                      UK, Europe, Australia, UAE and other countries. We follow
                      a transparent work process and divide all the development
                      processes into small phases. We can use the latest
                      technology and standards that assure the smooth
                      development and execution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-box thumbnail-bx8">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/encrypted.png"
                        alt="img"
                      />
                    </div>
                    <h3>Customer information and application level security</h3>
                    <p>
                      Security of customer data and application is a major
                      aspect of any of the solutions, Logicspice provides. Our
                      programming is robust and secure that assures password
                      encryption.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new thumbnail-box thumbnail-bx9">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/history-icon.png"
                        alt="img"
                      />
                    </div>
                    <h3>Experienced workforce with 3000+ project history</h3>
                    <p>
                      We are a team of experienced web and mobile app
                      developers, having expertise in handling complex tasks
                      since the past 16+ years. We delivered lots of projects
                      with 100% client satisfaction on different platforms with
                      high levels of standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new productthumbnail-box thumbnail-bx10">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/seouser-friendly.png"
                        alt="img"
                      />
                    </div>
                    <h3>Seo Friendly Development</h3>
                    <p>
                      Our developed websites are SEO optimized so it can rank
                      better on Google.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new productthumbnail-box thumbnail-bx11">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/one-stop-solution.png"
                        alt="img"
                      />
                    </div>
                    <h3>One Stop Solution</h3>
                    <p>
                      We offer complete design & development solutions along
                      with the business strategy, all under one roof.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new productthumbnail-box thumbnail-bx12">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/third-party-api.png"
                        alt="img"
                      />
                    </div>
                    <h3>Integration With Third Party Api</h3>
                    <p>
                      We integrate your website with third party API on our end
                      to serve you better.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-md-4">
                <div className="thumbnail-new productthumbnail-box thumbnail-bx13">
                  <div className="caption">
                    <div className="best-partner-img-bx">
                      <Image unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/cost-effective.png"
                        alt="img"
                      />
                    </div>
                    <h3>Cost Effective</h3>
                    <p>
                      Powerful technology back-end with basic ready-made modules
                      save time and hence overall project cost for your script
                      gets reduced.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="used_technology_section" id="technologies">
        <div className="container">
          <h4 className="title_main">
            <span>Used Technologies</span> and Server Requirements
          </h4>
          <div className="used_technology_section_dataa">
            <div className="row">
              <div className="col-sm-6">
                <ul>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <Image unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/jobboard/LaravelLogo.png"
                        alt="Laravel Development"
                      />
                    </div>
                    <div className="icntechimg_nm">Laravel</div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <Image unoptimized={true}
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
                      <Image unoptimized={true}
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
                      <Image unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/jobboard/tech_apache_icon.png"
                        alt="Apache"
                      />
                    </div>
                    <div className="icntechimg_nm">Apache</div>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list_detail">
                  <li className="same">
                    <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                    Safari 5+, IE 9+
                  </li>
                  <li className="same">
                    <b>Framework - </b> Laravel 5.5.41
                  </li>
                  <li className="same ">
                    <b>Language - </b> PHP 7 Supported, AJAX, jQuery
                  </li>
                  <li className="other">
                    <b>Design - </b> HTML 5, CSS 3, Bootstrap 3.3.7, JavaScript
                  </li>
                  <li className="other">
                    <b>Database - </b> MySQL 5.5+{" "}
                  </li>
                  <li className="other">
                    <b>Server - </b> Apache 2.4+
                  </li>
                </ul>
              </div>
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
                  <Image unoptimized={true}
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
                  <Image unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Brand Removal</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image unoptimized={true}
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
                  <Image unoptimized={true}
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
                        <span>4.8 out of 5 stars</span>
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
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">14</div>
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
                      <div className="people_star_num">3</div>
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
                    title="Food Ordering And Delivery Script"
                  />
                </div>

                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;I have purchased this script and has constructed my
                      own Forum. This was an easy task because of
                      logicspice&apos;s free installation and support. Keep up
                      the good work. I will be back for more in the future.
                      &quot;
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">John, USA</span>{" "}
                      <span className="ConuntryFlagIcon">
                        <Image unoptimized={true}
                          width={20}
                          height={100}
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;This is the best Forum Script. Thanks for your great
                      efforts and support while installing the script. Your
                      prompt service regarding a few minor issues was
                      superb.&quot;
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      D. Smith, Germany{" "}
                      <span className="ConuntryFlagIcon">
                        <Image unoptimized={true}
                          width={20}
                          height={100}
                          src="/img/jobboard/german.png"
                          alt="mobile app development in Germany"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;Recently I bought this script from logicspice and it
                      worked really nice, it helped my business to gain more
                      efficiency. I recommend for all whom looking for a Forum
                      Script, it&apos;s really nice.&quot;
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      mike wilshon, AUS{" "}
                      <span className="ConuntryFlagIcon">
                        <Image unoptimized={true}
                          width={20}
                          height={100}
                          src="/img/jobboard/australia_flag_img.png"
                          alt="mobile app development in AUS"
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
                {/* <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="Once I purchase this script, how many days will it take to go online?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      It takes 2 working days generally, provided all the
                      information to make it live has been given.{" "}
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I get help for customization?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Yes, we have an experienced team of developers to help you
                      with customization as per your requirements.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      No, You can&apos;t resell the script. All rights will
                      remain with Logicspice only.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will I be able to use it on multiple domains, after I purchase this script?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      You will be licensed to use it only for the domain, you
                      purchased for.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Along with hosting server details, what other recommendations?"
                    collapseId="flush-collapse14"
                  >
                    <p>
                      We recommend you purchase SSL certificate along with a
                      hosting server, considering that an SSL certificate is
                      necessary for all the websites these days and it provides
                      a secure layer to the website as well.
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion> */}
                      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          <Typography>Once I purchase this script, how many days will it take to go online?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It takes 2 working days generally, provided all the information to make it live has been given.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          <Typography>Can I get help for customization?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we have an experienced team of developers to help you with customization as per your requirements.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4-content" id="panel4-header">
          <Typography>Can I resell the script? Will I have rights over the script code?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, You can&apos;t resell the script. All rights will remain with Logicspice only.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5-content" id="panel5-header">
          <Typography>Will I be able to use it on multiple domains, after I purchase this script?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You will be licensed to use it only for the domain you purchased for.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
        <AccordionSummary aria-controls="panel14-content" id="panel14-header">
          <Typography>Along with hosting server details, what other recommendations?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We recommend you purchase an SSL certificate along with a hosting server, considering that an SSL certificate is necessary for all the websites these days and it provides a secure layer to the website as well.
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
          <h2 className="title_main">Forum Script Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    width={1200}
                    height={100}
                    src="/img/forum-script/fourms2.png"
                    alt=""
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Forum listing</div>
                </div>
              </div>

              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    width={1200}
                    height={100}
                    src="/img/forum-script/fourms3.png"
                    alt=""
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Forum Detail </div>
                </div>
              </div>

              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                   width={1200}
                   height={100}
                    src="/img/forum-script/fourms4.png"
                    alt=""
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Dashboard</div>
                </div>
              </div>
            </Slider>
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
                  <SoftwareEnquiry
                    modalStatus={showModal}
                    toggle={openModal}
                    title=" Forum Script"
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
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image unoptimized={true}
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
