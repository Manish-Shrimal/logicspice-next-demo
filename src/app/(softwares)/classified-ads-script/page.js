"use client";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import "@fortawesome/fontawesome-free/css/all.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Lsclassified from "@/app/Components/Lsclassified";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
import { Modal, ModalBody } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";
// import "../../../../public/css/font-awesome.min.css";
import "../../../../public/css/font-awesome.css";

const Page = () => {
  const [activeTab, setActiveTab] = useState("tab2");
  const [buyerTab, setBuyerTab] = useState(true);
  const [adminTab, setAdminTab] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const toggleJobPortalModal = () => setJobportal(!jobportal);
  const toggleBuyJobPortalModal = () => setBuyJobportal(!buyjobportal);
  const [modalOpen, setModalOpen] = useState(false);
  const [jobportal, setJobportal] = useState(false);
  const [buyjobportal, setBuyJobportal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        BaseAPI + "/product/Details/classified-ads-script"
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
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleBuyerTab = () => {
    setBuyerTab(true);
    setAdminTab(false);
  };
  const openModal = () => {
    setShowModal(!showModal);
  };
  const handleAdminTab = () => {
    setBuyerTab(false);
    setAdminTab(true);
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
      <Navbar />
      <section className="paid-pro job-portal-banner NewJobSiteDesign JobBoardNewDesign classNameified-banner classified-banner fiverr-new-banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>LS classifier - Online Classified Ads Software</h1>
              <div className="both-left-p-sec">
                <h2>Effortless Online Classified Ad Management</h2>
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
                          src="/img/images/more-info.png"
                          width={100}
                          height={100}
                          alt=""
                        />
                      </i>
                      <p>Limited Period Offer for First Year</p>
                    </span>
                    <span className="AppPrice" style={{ display: "none" }}>
                      <Link
                        className="text-primary js-anchor-link"
                        href="#subscriptionmodel"
                      >
                        More Details
                      </Link>
                    </span>
                  </div>
                </div>
                <div
                  className="portal-price NewPriceDesignPageShow"
                  style={{ display: "none" }}
                >
                  <h4>
                    ₹88,160<span className="sml_labl"> INR</span>
                  </h4>
                  <div className="OfferPriceProduct">
                    <strike className="srik_cls">
                      ₹147,754<span className="sml_labl"> INR</span>{" "}
                    </strike>
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
                      //     <SoftwareEnquiry
                      //       modalStatus={showModal}
                      //       toggle={openModal}
                      //       title="Please fill the form below and get access to the live demo of Classified Ads software
                      // .See how it work yourself!"
                      //     />

                      <GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of LS Classifier. See how it works yourself!"
                      />
                    }
                  </div>
                  <Link
                    className="btn fiverr-buys"
                    href="/buy-now/classified-ads-script"
                    id="buy_now_1"
                  >
                    Buy Now
                  </Link>
                </div>
                <div className="SubscriptionPrice">
                  <div className="DeliSou" style={{ display: "none" }}>
                    <span>For</span> Delivered Solution{" "}
                    <Link href="#subscriptionprice">click here</Link>
                  </div>{" "}
                  <div className="line-border NewLineBoader">
                    <Image
                      unoptimized={true}
                      src="/img/jobboard/stars.png"
                      alt=""
                      className="lazy"
                      width={100}
                      height={100}
                    />
                    <p>24 Reviews</p>
                  </div>
                </div>
              </div>
              <div className="jocpp">
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
            </div>
            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                {/* <Image unoptimized={true}
                  src="/img/classified/classsifiedr-banner-img.png"
                  alt="classNameified_Ads_Script"
                  width={100}
                  height={100}
                /> */}
                <Image
                  unoptimized={true}
                  src="/img/classified/classsifiedr-banner-img.png"
                  alt="classified_Ads_Script"
                  width={460}
                  height={500 / (100 / 100)} // Adjust height to maintain aspect ratio
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
                  LS Classifier
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new">
        <div className="container">
          <p>
            LS Classifier software is the easiest way to showcase listing of
            products or ads. This software application has features similar to
            craigslist. Make your own Classified ads marketplace with our ready
            to use responsive LS Classifier in less time. This application has
            smooth functionality for the vendors or advertisers to list their
            ads and communicate further to buy and sell their products online
            from remote locations. Get in touch with Logicspice today to get a
            demo of this app.
          </p>
        </div>
      </section>
      <section
        className="client-say crowdfunding-say"
        style={{ backgroundColor: "#fff;" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 job-video">
              <iframe
                src="https://player.vimeo.com/video/797230876?h=6b4f994a41&amp;autoplay=0&amp;loop=1&amp;color=451095&amp;byline=0"
                width="100%"
                height="312"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen=""
              ></iframe>
            </div>
            <div className="col-md-6">
              <div className="service-market-ttd-new">
                <ul>
                  <li style={{ width: "100%" }}>
                    Customers are allowed to post more than one classNameified
                    ad, using this Classified posting software.
                  </li>
                  <li style={{ width: "100%" }}>
                    Users can add items to their favorite list, so that they can
                    find them easily next time they visit the website.
                  </li>
                  <li style={{ width: "100%" }}>
                    This Classified website application is SEO friendly which
                    can help you to improve your visibility in google.
                  </li>
                  <li style={{ width: "100%" }}>
                    Admin can manage categories, subcategories, and all the
                    Classified listings.
                  </li>
                  <li style={{ width: "100%" }}>
                    The admin panel is totally user-friendly and feature rich in
                    this LS Classifier software.
                  </li>
                  <li style={{ width: "100%" }}>
                    Integrated email verification for protection from spamming
                    in this software.
                  </li>
                  <li style={{ width: "100%" }}>
                    Blog functionality included (Free)
                  </li>
                  <li style={{ width: "100%" }}>
                    Responsive website (mobile friendly)
                  </li>
                  <li style={{ width: "100%" }}>White labeled software </li>
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
            <h2 className="taxt_tt_job">LS Classifier Features</h2>
          </div>
          <div className="tatxt_txt_job">
            We can provide customized android &amp; ios apps for LS Classifier
            software as per your business requirement. Our LS Classifier portal
            app lets the sellers post products and buyers can enquire regarding
            this. PHP classNameifieds software provides complete control over
            the admin dashboard to smoothly manage the users, ads, categories,
            comments, and more.
          </div>
          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job tab_bbx_job_classified">
              <ul className="tab_listing">
                <li
                  id="tab2_li"
                  className={`jobseeker_app_job ddlj ${
                    buyerTab ? "active" : ""
                  }`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>User</a>
                </li>
                <li
                  id="tab3_li"
                  className={`admin_app_job ddlj ${adminTab ? "active" : ""}`}
                  onClick={() => handleAdminTab()}
                >
                  <a>Admin Panel</a>
                </li>
              </ul>
            </div>
            <div className="tab_contant">
              {buyerTab && (
                <>
                  <div className="costomer_tab rj active" id="tab2">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right">
                          <Image
                            unoptimized={true}
                            src="/img/classified/classified_costomer.png"
                            alt="User"
                            width={400}
                            height={400}
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
                                  alt="img"
                                  src="/img/jobboard/ragister-icon.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Create account
                                <div className="product-idea">
                                  <p>
                                    User can register on the portal for posting
                                    ad on the portal.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/multiple_picture.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Multiple Picture Upload
                                <div className="product-idea">
                                  <p>
                                    Posting multiple picture relevant to your
                                    product give more details to the customer.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/share_review.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Social Media Sharing
                                <div className="product-idea">
                                  <p>
                                    Share this classified ad to the social media
                                    platform to increase awareness about the
                                    product and service.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/social_login.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Social Media Login
                                <div className="product-idea">
                                  <p>
                                    User can directly login through social media
                                    i.e. facebook, twitter and google+.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_classified.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Classified
                                <div className="product-idea">
                                  <p>
                                    User can manage(add/edit/delete) classifieds
                                    & can activate/deactivate them with a single
                                    click
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/filter_project.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Advanced Filters
                                <div className="product-idea">
                                  <p>
                                    User can search for the classified by city,
                                    country, keyword, category, subcategory.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/postan_ad.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Post Classified
                                <div className="product-idea">
                                  <p>
                                    User can post classified by giving the
                                    required details with the relevant images.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/view_category.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Classified Category
                                <div className="product-idea">
                                  <p>
                                    User can view the search as per Classified
                                    Category and and view it in detail.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/search_location.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Location Based
                                <div className="product-idea">
                                  <p>
                                    User can Post classified to the individual
                                    location if your ads is more relevant to
                                    particular city.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/transporter_list.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Classified Listings
                                <div className="product-idea">
                                  <p>
                                    User can view the classifieds where the user
                                    can view details in with name, city, images,
                                    map, price, description, comments etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_comments.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Message Feature
                                <div className="product-idea">
                                  <p>
                                    User can contact to the classified ad owner
                                    through message to get more information
                                    about product.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/view_alerts.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                View Alerts
                                <div className="product-idea">
                                  <p>User can view the alerts using email.</p>
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
                          <Image
                            unoptimized={true}
                            src="/img/classified/lsclassified_admin_mac.png"
                            alt="Admin Panel"
                            width={400}
                            height={400}
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
                                  alt="img"
                                  src="/img/jobboard/secure_login.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Secure Login
                                <div className="product-idea">
                                  <p>
                                    Admin can login securely in Admin Panel.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/admin_dash.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Dashboard
                                <div className="product-idea">
                                  <p>
                                    Admin can view total counts of Users,
                                    Classifieds & Categories. Admin can view the
                                    Users Statistics for today, yesterday, last
                                    7 days, last 30 days & last 12 months.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_user.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Users
                                <div className="product-idea">
                                  <p>
                                    Admin can view a list of all Users. Admin
                                    can manage (add/edit/delete) all Users.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/equipment_search.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Search & Filter Feature
                                <div className="product-idea">
                                  <p>
                                    Admin can search users by entering a first
                                    name, last name, email or created date.
                                    Admin can apply filters using a date.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/configuration.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Configuration
                                <div className="product-idea">
                                  <p>
                                    Admin can change a username, password,
                                    email, set contact us address & can do site
                                    settings.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_category.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Category
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of categories. Admin
                                    can manage (add/edit/delete) all categories.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_cat.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Subcategory
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of sub-categories.
                                    Admin can manage (add/edit/delete) all
                                    sub-categories.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_classified.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Classifieds
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Classifieds.
                                    Admin can manage (add/edit/delete) all
                                    Classifieds.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_bookings.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                View and Manage Comments
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list on comments over
                                    classifieds. Admin can approve & Disapprove
                                    comments.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_content.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage CMS(Content Management System)
                                <div className="product-idea">
                                  <p>
                                    Admin can manage(add/edit/delete) all front
                                    end content of the website.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_address.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Top Location
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of top locations & can
                                    manage(add/edit/delete) all Top Location.
                                  </p>
                                </div>
                              </span>
                            </li>{" "}
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/active_deactive.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Activate/Deactivate Categories
                                <div className="product-idea">
                                  <p>
                                    Admin can activate & deactivate the
                                    categories.
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
              What does our <span>LS Classifier </span> offer you ?
            </h2>
            <p align="justify">
              Our readymade Classified Ads software similar to craigslist lets
              you start an automated Classified Ads application which helps to
              sell products through online marketing. This php Classified
              application allows the users to post their products and services
              which works in various segments including real estate, sales,
              community, vehicles and more.
            </p>
            <p align="justify">
              We at Logicspice, provide mobile apps for android and iOS like
              OLX, which you can easily launch right away and start your venture
              through this Classified advert software. This is a user friendly
              mobile app, no development or programming skills required to
              tackle.
            </p>
            <p align="justify">
              People nowadays are more likely to digitize and LS Classifier is
              the most convenient way to stay connected with the people. Our
              Classified listing software is fully functional, scalable, and
              easy to use. We also provide custom solutions to meet your
              business requirements in the form of design and complex
              functionality.
            </p>
            <p align="justify">
              We provide the best Classified ads software which allows you to
              operate your advertising system from remote locations and can be
              easily integrated into your new or existing website.
            </p>
            <p align="justify">
              In this application, you will get product or service pages with
              complete details about the item along with details of its owner.
              you can directly contact the owner for enquiry. Sellers can add a
              number of products and services with this application.
            </p>
          </div>
        </div>
      </section>
      <section
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
                    Unlimited Classified Listings: List as many classNameifieds
                    as you need without any limitations.
                  </span>
                </li>
                <li>
                  <span>
                    Mobile Apps: Stay perpetually connected with Android and
                    iPhone apps, available for an additional USD 45 per month
                    for each, android or iPhone. These apps will be launched
                    through your dedicated developer accounts on Google Play and
                    the Apple App Store.
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
                <div className="btn btn-get" onClick={openDemoAccessModal}>
                  <button>Get Demo Access!</button>
                  {
                    //   <SoftwareEnquiry
                    //     modalStatus={showModal}
                    //     toggle={openModal}
                    //     title="Please fill the form below and get access to the live demo of Classified Ads software
                    // .See how it work yourself!"
                    //   />

                    <GetDemoEnquiry
                      modalStatus={demoAccessModal}
                      toggle={openDemoAccessModal}
                      title="Please fill the form below and get access to the live demo of LS Classifier. See how it works yourself!"
                    />
                  }
                </div>
                <Link
                  className="btn fiverr-buys"
                  href="/buy-now/classified-ads-script"
                  id="buy_now_1"
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
                      src="/img/jobboard/stars.png"
                      alt=""
                      className="lazy"
                      width={100}
                      height={100}
                    />
                    <p>24 Reviews</p>
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
              Logicspice is the best partner for your Classified ads software
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
                    src="/img/images/why-logic-icon.png"
                    alt=""
                    className=""
                    width={20}
                    height={100}
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
        {/* Button to Open Job Portal Modal */}

        {/* Job Portal Modal */}
        <Modal
          show={jobportal}
          onHide={toggleJobPortalModal}
          id="jobportal"
          className="modal-service"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Image
              unoptimized={true}
              src="/img/classified/Ls_classidied_infographic.jpg"
              alt="icon"
              title=""
              className="img-fluid"
              width={900}
              height={100}
            />
          </Modal.Body>
        </Modal>

        <Modal
          show={buyjobportal}
          onHide={toggleBuyJobPortalModal}
          id="buyjobportal"
          className="modal-service"
        >
          <Modal.Header
            className="modal-dialog-service"
            closeButton="close"
          ></Modal.Header>
          <Modal.Body>
            <div id="jobboardclients" closeButton>
              <Slider {...companies}>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://medinest.info"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      medinest.info
                    </Link>
                  </div>
                  <Link
                    href="https://medinest.info"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      src="/img/classified/medinest.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                      width={900}
                      height={100}
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://pharmsat.info"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      pharmsat.info
                    </Link>
                  </div>
                  <Link
                    href="https://pharmsat.info"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      src="/img/classified/pharmsat.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                      width={900}
                      height={100}
                    />
                  </Link>
                </div>
              </Slider>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={toggleBuyJobPortalModal}
            >
              Close
            </button>
          </Modal.Footer> */}
        </Modal>
      </div>
      <section className="used_technology_section" id="technologies">
        <div className="container">
          <h4 className="title_main">
            <span>Used Technologies</span> and Server Requirements
          </h4>
          <div className="used_technology_section_dataa">
            <div className="row">
              <div className="col-sm-6">
                <ul>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/frame_wordpress_icon.png"
                        alt="wordpress Development"
                        width={60}
                        height={100}
                      />
                    </div>
                    <div className="icntechimg_nm">Wordpress</div>
                  </li>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/html-5.png"
                        alt="HTML5"
                        width={50}
                        height={100}
                      />
                    </div>
                    <div className="icntechimg_nm">HTML5</div>
                  </li>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/tech_mysql_icon.png"
                        alt="MySQL"
                        width={60}
                        height={100}
                      />
                    </div>
                    <div className="icntechimg_nm">MySQL</div>
                  </li>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/tech_apache_icon.png"
                        alt="Apache"
                        width={60}
                        height={100}
                      />
                    </div>
                    <div className="icntechimg_nm">Apache</div>
                  </li>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/apple_phn_icon.png"
                        alt="MySQL"
                        className="lazy"
                        width={50}
                        height={100}
                      />
                    </div>
                    <div className="icntechimg_nm">iOS</div>
                  </li>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/andoird_icon.png"
                        alt="Apache"
                        className="lazy"
                        width={50}
                        height={100}
                      />
                    </div>
                    <div className="icntechimg_nm">Android</div>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list_detail">
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                    Safari 5+, IE 9+
                  </li>
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>CMS - </b> Wordpress
                  </li>
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Language - </b> PHP 5.4+, AJAX, jQuery
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Design - </b> HTML 5, CSS 3, Bootstrap 3.3.7, JavaScript
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Database – </b> MySQL 5.5+{" "}
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Server – </b> Apache 2.4+
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>iOS - </b> xcode 10.2.1 and swift 4.2{" "}
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Android - </b> java 9 and Android Studio 3.4
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
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                    width={50}
                    height={100}
                  />
                </div>
                <div className="supportsettingtext">Free Support</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                    width={50}
                    height={100}
                  />
                </div>
                <div className="supportsettingtext">Free Brand Removal</div>
              </li>

              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/access_secure_code_icon.png"
                    alt="manager_icn"
                    width={40}
                    height={100}
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
                      <div className="people_star_num">510</div>
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
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">46</div>
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
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">13</div>
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
                    title="PHP Business Directory Script"
                  />
                </div>

                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;I have purchased this script and has constructed my
                      own web-site. This was an easy task because of
                      logicspice&apos;s free installation and support. Keep up
                      the good work. I will be back for more in the
                      future.&quot;
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
                        <i className="fa fa-star-half" aria-hidden="true"></i>
                      </span>
                      John, USA{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                          width={20}
                          height={20}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext" id="fiveer-clone">
                      &quot;This is the best fiverr clone script. Thanks for
                      your great efforts and support while installing the
                      script. Your prompt service regarding a few minor issues
                      was superb.&quot;
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
                      <span id="client-name">D. Smith, Germany</span>{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/german.png"
                          alt="mobile app development in german"
                          width={20}
                          height={20}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;Recently I bought this script from logicspice and it
                      worked really nice, it helped my business to gain more
                      efficiency. I recommend for all whom looking for a Fiverr
                      Clone script, it&apos;s really nice.&quot;
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
                      mike wilshon, AUS{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/australia_flag_img.png"
                          alt="mobile app development in USA"
                          width={20}
                          height={20}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 Quick_FAQ">
              <h4 className="title_main">Quick FAQ</h4>
              <div className="MainFaqBx">
                {/* <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="How can a user search for classifieds around his location?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      User can enter his city in the website and all the items
                      that are around will be listed to the user.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can a user upload one classified ad in multiple categories?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Yes, User can put one classified ad in multiple categories
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How many days it will take to implement?"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      It will take 7 days to implement your php Classified
                      software.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can a user upload multiple classified ads to the website?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Yes, a user can upload more than one classified ads to the
                      website.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can a user view the contact information of the seller?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Yes. If a seller chooses to share his contact information
                      on the website, the user can see it.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Along with hosting server details, what other recommendations?"
                    collapseId="flush-collapse6"
                  >
                    <p>
                      We recommend you purchase SSL certificate along with a
                      hosting server, considering that an SSL certificate is
                      necessary for all the websites these days and it provides
                      a secure layer to the website as well.
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion> */}

                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    className="aos-init aos-animate"
                  >
                    <Typography>
                      How can a user search for classifieds around their
                      location?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The user can enter their city on the website, and all the
                      items around will be listed to them.
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
                      Can a user upload one classified ad in multiple
                      categories?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, a user can put one classified ad in multiple
                      categories.
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
                      How many days will it take to implement?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      It will take 7 days to implement your PHP Classified
                      software.
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
                      Can a user upload multiple classified ads to the website?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, a user can upload more than one classified ad to the
                      website.
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
                    <Typography>
                      Can a user view the contact information of the seller?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes. If a seller chooses to share their contact
                      information on the website, the user can see it.
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
          <h2 className="title_main">LS Classifier Features</h2>
          <div id="joblboardslide">
            <Lsclassified />
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
                    title=" Classified Ads software"
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
                    href="/business-directory-system"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Business Directory</h3>
                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            src="/img/jobboard/business-logo.png"
                            alt="business-directory-system"
                            className=""
                            width={180}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>Yellow Pages Clone, Yelp Clone</span>{" "}
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
                            src="/img/jobboard/gigger_logo_new.png"
                            alt="fiverr-clone"
                            className=""
                            width={180}
                            height={100}
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
                    href="/recruitment-management-software"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Recruitment Management Software</h3>
                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            src="/img/jobboard/rms_new.png"
                            alt="Recruitment Management Software"
                            className=""
                            width={180}
                            height={100}
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
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              height={50}
              width={50}
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
