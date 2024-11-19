"use client";
import React, { useEffect, useState, useRef } from "react";
import "@/app/(softwares)/softwares.css";
import Link from "next/link";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
// import "@fortawesome/fontawesome-free/css/all.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";
// import "../../../../public/css/font-awesome.min.css";
import "../../../../public/css/font-awesome.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBModal,
  MDBModalBody,
} from "mdb-react-ui-kit";
import Contactusmodel from "@/app/Components/Contactusmodel";
import { Modal, ModalBody } from "react-bootstrap";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
const Page = () => {
  const [sellerTab, setSellerTab] = useState(true);
  const [buyerTab, setBuyerTab] = useState(false);
  const [adminTab, setAdminTab] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [buyjobportal, setBuyJobportal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        BaseAPI + "/product/Details/business-directory-system"
      );
      // console.log(response.data.data);
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

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const toggleBuyJobPortalModal = () => setBuyJobportal(!buyjobportal);

  const handleSellerTab = () => {
    setSellerTab(true);
    setBuyerTab(false);

    setAdminTab(false);
  };

  // const [expanded, setExpanded] = React.useState("panel1");

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };

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

  const [showInfo, setShowInfo] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };

  const openModal = () => {
    setShowModal(!showModal);
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

  const iframeRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [isInView, setIsInView] = useState(false);

  // Load and initialize the YouTube Player API
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new YT.Player("ytplayer", {
        events: {
          onReady: (event) => {
            const savedTime =
              parseFloat(localStorage.getItem("lastPlayedTime")) || 0;
            event.target.seekTo(savedTime);
            setPlayer(event.target);
          },
          onStateChange: (event) => {
            if (
              event.data === YT.PlayerState.PLAYING ||
              event.data === YT.PlayerState.PAUSED
            ) {
              const currentTime = event.target.getCurrentTime();
              localStorage.setItem("lastPlayedTime", currentTime);
            }
          },
        },
      });
    };

    return () => {
      document.body.removeChild(tag);
    };
  }, []);

  // Set up IntersectionObserver to handle play/pause based on viewport visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (iframeRef.current) observer.observe(iframeRef.current);

    return () => {
      if (iframeRef.current) observer.unobserve(iframeRef.current);
    };
  }, []);

  // Control playback based on `isInView` and `player` readiness
  useEffect(() => {
    if (player) {
      if (isInView) {
        const savedTime =
          parseFloat(localStorage.getItem("lastPlayedTime")) || 0;
        player.seekTo(savedTime);
        player.playVideo();
      } else {
        player.pauseVideo();
      }
    }
  }, [isInView, player]);
  return (
    <>
      <Navbar />
      <section className="paid-pro job-portal-banner fiverr-new-banner job-portal-bg NewJobSiteDesign BusinessDirectoryBanner">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>LS Bunet - PHP Business Directory Software</h1>
              <div className="both-left-p-sec">
                <h2>Similar to Yellow Pages &amp; Yelp</h2>
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
                          src="/img/softwares-banner-img/more-info.png"
                          alt=""
                          width={100}
                          height={100}
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
                      //       title="Please fill the form below and get access to the live demo of PHP Business Directory Script
                      // .See how it work yourself!"
                      //     />
                      <GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of PHP Business Directory System. See how it works yourself!"
                      />
                    }
                  </div>

                  <Link
                    className="btn fiverr-buys"
                    href="/buy-now/business-directory-system"
                    id="buy_now_1"
                  >
                    Buy Now
                  </Link>
                </div>
                <div className="SubscriptionPrice">
                  <div className="DeliSou" style={{ display: "none" }}>
                    <span>For</span> Delivered Solution{" "}
                    <a href="#subscriptionprice">click here</a>
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
                    <p>26 Reviews</p>
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
                <Image
                  unoptimized={true}
                  src="/img/businessdirectory/Business_Directory_Banner_Img.png"
                  alt="business-directory-system"
                  width={800}
                  height={100 / (100 / 100)}
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
                  Business Directory System
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            LS Bunet is an online classified like directory software and is
            basically for listing businesses and their products &amp; services
            whether it be a manufacturer, service provider, supplier,
            importer/exporter, or vendor. This Business listing software has all
            those cool features, which make showcasing of businesses and their
            product/service details easy. It could work as a business
            marketplace, where the businesses may see business details or other
            businesses and contact each other.
          </p>
        </div>
      </section>

      <section
        className="client-say crowdfunding-say"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 job-video">
              {/* <iframe
                width="100%"
                height="312"
                src="https://www.youtube-nocookie.com/embed/IlTZW3v7WYs?rel=0&autoplay=0"
                title="YouTube video player"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen=""
              ></iframe> */}
              <div ref={iframeRef}>
                <iframe
                  id="ytplayer"
                  width="100%"
                  height="312"
                  src="https://www.youtube.com/embed/IlTZW3v7WYs?enablejsapi=1&mute=1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="col-md-6">
              <div className="service-market-ttd-new">
                <ul>
                  <li style={{ width: "100%" }}>
                    Business owners can create their business profiles through
                    which they can list all their business information
                  </li>
                  <li style={{ width: "100%" }}>
                    Customers receive correct information about business because
                    the information can be verified.
                  </li>
                  <li style={{ width: "100%" }}>
                    Business owners can add products/services here to promote
                    them.
                  </li>
                  <li style={{ width: "100%" }}>
                    Customers can search for businesses around them using the
                    city and state filters.
                  </li>
                  <li style={{ width: "100%" }}>
                    Business owners can receive reviews about their business.
                  </li>
                  <li style={{ width: "100%" }}>
                    Customers can give ratings to the businesses, which can be
                    viewed by other customers.
                  </li>
                  <li style={{ width: "100%" }}>
                    Responsive website (mobile friendly)
                  </li>
                  <li style={{ width: "100%" }}>White labeled software</li>
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
            <h2 className="taxt_tt_job">LS Bunet Features</h2>
          </div>
          <div className="tatxt_txt_job">
            This Business Directory software is similar to Yellow Pages,
            provides customers with a platform where they can list their entire
            business details about their products &amp; services, and post
            pictures of their products, and can also share the link to their
            websites along with contact details of their business and hence
            showcase their entire business online for future growth.
          </div>
          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job">
              <ul className="fiverrClone">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${
                    sellerTab ? "active" : ""
                  }`}
                  onClick={() => handleSellerTab()}
                >
                  <a>Customer</a>
                </li>
                <li
                  id="tab2_li"
                  className={`business-directory-system ddlj ${
                    buyerTab ? "active" : ""
                  }`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Vendor Panel </a>
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
              {sellerTab && (
                <>
                  <div className="row">
                    <div className="col-lg-4 col-md-3">
                      <div className="costomer_tab_right costomer_tab_rightleft">
                        <Image
                          unoptimized={true}
                          src="/img/businessdirectory/business-directory_user_mobile.png"
                          alt="User"
                          width={400}
                          height={400}
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-9">
                      <div className="costomer_tab_left costomer_tab_leftright">
                        <ul>
                          <li>
                            <i>
                              {" "}
                              <Image
                                unoptimized={true}
                                src="/img/jobboard/manage_profile.png"
                                alt="Business Search"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Manage Profile
                              <div className="product-idea">
                                <p>
                                  Customers are able to create their accounts
                                  and are able to manage profiles.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              {" "}
                              <Image
                                unoptimized={true}
                                src="/img/jobboard/send_mail.png"
                                alt="Review Feature"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Send Enquiry
                              <div className="product-idea">
                                <p>
                                  Customers can send inquiries about the
                                  business which they want.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                src="/img/jobboard/review_feature.png"
                                alt="Business Listing"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Sort Business
                              <div className="product-idea">
                                <p>
                                  Customers are able to sort businesses by
                                  categories, locations, business titles, etc.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              {" "}
                              <Image
                                unoptimized={true}
                                src="/img/jobboard/manage_city.png"
                                alt="Review Feature"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Browse Business By City
                              <div className="product-idea">
                                <p>
                                  Customers can easily get the listing of the
                                  business by cities.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              {" "}
                              <Image
                                unoptimized={true}
                                src="/img/jobboard/reviews_ratings.png"
                                alt="Offers Section"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Reviews & Rating Management
                              <div className="product-idea">
                                <p>
                                  Customers are able to post reviews & ratings
                                  for the business.
                                </p>
                              </div>
                            </span>
                          </li>

                          <li>
                            <i>
                              {" "}
                              <Image
                                unoptimized={true}
                                src="/img/jobboard/manage_news.png"
                                alt="Business Detail"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Newsletter Subscription
                              <div className="product-idea">
                                <p>
                                  Customers are able to subscribe to
                                  newsletters. Browse Business by City:
                                  Customers can easily get the listing of the
                                  business by Cities.
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
                          src="/img/businessdirectory/business-directory_user_mobile.png"
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
                              Create Account
                              <div className="product-idea product-idea1">
                                <p>
                                  Vendor can register on the portal and create
                                  listings for his business
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                alt="img"
                                src="/img/jobboard/create-project.png"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Add Business
                              <div className="product-idea product-idea1">
                                <p>
                                  Vendors can manage their business, able to
                                  Add, Edit, and Delete the Business.
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
                              Location Management
                              <div className="product-idea">
                                <p>
                                  Vendors can add Locations for their business
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                alt="img"
                                src="/img/jobboard/crm-management.png"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              CRM Management
                              <div className="product-idea product-idea1">
                                <p>
                                  Vendors are able to manage CRM, they can
                                  manage Customers, Prospects, Emails, etc.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                alt="img"
                                src="/img/jobboard/manage-project.png"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Product Management
                              <div className="product-idea">
                                <p>
                                  Vendors can add Products and are able to edit
                                  and delete the products.
                                </p>
                              </div>
                            </span>
                          </li>

                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                alt="img"
                                src="/img/jobboard/manage_services.png"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Services Management
                              <div className="product-idea">
                                <p>
                                  Vendors can add Services and are able to edit
                                  and delete the services.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                alt="img"
                                src="/img/jobboard/form-management.png"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Form Management
                              <div className="product-idea">
                                <p>
                                  Vendors are able to create a particular form
                                  for their business, this form can be displayed
                                  on their business page. And also able to edit
                                  and delete the forms and also able to see the
                                  form entries.{" "}
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                alt="img"
                                src="/img/jobboard/enquiry-management.png"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Enquiry Management
                              <div className="product-idea">
                                <p>
                                  Vendors are able to manage the queries
                                  whatever posted by Enquiries.
                                </p>
                              </div>
                            </span>
                          </li>

                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                alt="img"
                                src="/img/jobboard/catalog-management.png"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Catalog Management
                              <div className="product-idea">
                                <p>
                                  Vendors can add the catalog for their
                                  business.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                alt="img"
                                src="/img/jobboard/fov_cant.png"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Manage Favorites
                              <div className="product-idea">
                                <p>
                                  Vendors can add Businesses, Products, and
                                  Services to their favorite list.
                                </p>
                              </div>
                            </span>
                          </li>

                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                alt="img"
                                src="/img/jobboard/manage_news.png"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Newsletter Feature
                              <div className="product-idea">
                                <p>
                                  Vendors are able to add their email templates
                                  and also able to Create and Import the mailing
                                  listing, so they can send emails to the added
                                  mailing listing.
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
                              Manage Videos
                              <div className="product-idea">
                                <p>
                                  Vendors are able to upload their YouTube
                                  videos that are related to their business and
                                  also able to edit and delete the added videos.
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
                          src="/img/businessdirectory/business-directory-admin.png"
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
                                  Administrator is able to login securely over
                                  the admin panel.
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
                                  Admin can easily navigate to the listings and
                                  they will get all the counts.
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
                                  Admin is able to manage all the basic details
                                  of users(view, add, edit, and delete).
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
                              Manage Business Directory
                              <div className="product-idea">
                                <p>
                                  Admin can manage and configure business
                                  directory settings, able to Submit notes and
                                  Emails.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                alt="img"
                                src="/img/jobboard/manage-project.png"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Manage Products
                              <div className="product-idea">
                                <p>
                                  Admin is able to manage the products, able to
                                  edit, delete, activate, and deactivate the
                                  products.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                alt="img"
                                src="/img/jobboard/manage_services.png"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Manage Services
                              <div className="product-idea">
                                <p>
                                  Admin can manage services and is able to
                                  submit notes and Emails. Also able to edit,
                                  delete, activate, and deactivate the services.
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
                              Manage Events
                              <div className="product-idea">
                                <p>
                                  Admin is able to manage Events and is able to
                                  Add, Edit, Delete, Activate & deactivate
                                  Events.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                alt="img"
                                src="/img/jobboard/manage_news.png"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Manage Newsletters
                              <div className="product-idea">
                                <p>
                                  Admin can Add Newsletters and is able to send
                                  newsletters to the users according to admin.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                alt="img"
                                src="/img/jobboard/manage_plan.png"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Manage Plans
                              <div className="product-idea">
                                <p>
                                  Admin is able to Add Subscription Plans and is
                                  able to Edit Plans.
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
                              Manage Countries, State, And Cities
                              <div className="product-idea">
                                <p>
                                  Admin can Add Countries and for those added
                                  countries, admin can add states and cities.
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
                              Manage Categories
                              <div className="product-idea">
                                <p>
                                  Admin is able to Add, Edit, and Delete
                                  Categories.
                                </p>
                              </div>
                            </span>
                          </li>
                          <li>
                            <i>
                              <Image
                                unoptimized={true}
                                alt="img"
                                src="/img/jobboard/send_mail.png"
                                width={100}
                                height={100}
                              />
                            </i>
                            <span>
                              Manage Emails
                              <div className="product-idea">
                                <p>Admin can send Emails to the users.</p>
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
              What does our <span>What does our LS Bunet</span> offer you ?
            </h2>
            <p align="justify">
              Our Business Directory Software is a stand-alone{" "}
              <strong>PHP Business Directory</strong> with numerous features to
              build your own online business directory site. You can create an
              unlimited number of countries, cities, categories, add business,
              products, and services to this business directory website.
            </p>
            <p align="justify">
              Our LS Bunet will allow the business owners to put the details of
              their business and create their business page which can be
              searched by the customer. it&apos;s not limited to adding their
              business only, they can add address, telephone number, business
              logo, images, website links, and also can list their business
              products and services on which they will receive reviews. Business
              owners can see how well their profile is performing and make
              adjustments to improve it. Here on Business Directory Software,
              Registered Business Owners have a large platform under a
              well-known domain name, and local businesses have an opportunity
              to grow their business.
            </p>
            <p align="justify">
              By using our PHP Business Directory listing software similar to
              Yellow Pages, customers will be able to search for products and
              services over the website. They will be able to narrow down their
              search by using various filters and sorts. They can view details
              of services/products along with the details of the business owner.
              Customers can rate the product/service that is available on the
              site.
            </p>
            <p align="justify">
              Our <strong>Business Listing software</strong> is a
              ready-to-install directory software so anyone can use it. Whether
              it&apos;s related to a professional, a particular niche, a
              networking company or organization, or any other business entity,
              who is looking to launch their own business directory/classified
              web application, can use this software without having any
              technical knowledge.
            </p>
            <p align="justify" className="new_red_food">
              Also, if you want some customization in this ready-to-use Business
              Directory Software or want to add some extra features, our team of
              expert web developers will be happy to do it for you.
            </p>
            <p align="justify">
              Are you a non-technical person? Don&apos;t worry! We do free
              installation for the first time and if you need any help you can
              contact us anytime.
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
                    Unlimited Business Listing: Post as many business listings
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
                    //     title="Please fill the form below and get access to the live demo of PHP Business Directory Script
                    // .See how it work yourself!"
                    //   />
                    <GetDemoEnquiry
                      modalStatus={demoAccessModal}
                      toggle={openDemoAccessModal}
                      title="Please fill the form below and get access to the live demo of PHP Business Directory System. See how it works yourself!"
                    />
                  }
                </div>
                <Link
                  className="btn fiverr-buys"
                  href="/buy-now/business-directory-system"
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
                    <p>26 Reviews</p>
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
              <a onClick={toggleModal}>contact us</a>.
            </p>
          </div>
        </div>
      </section>
      <section className="job_portal_area job_portal_area_food">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">
              Logicspice is the best partner for your LS Bunet solution!
            </h2>
            <br />
            <div className="logic-parter">
              <Link
                href=""
                className=""
                aria-controls="buyjobportal"
                onClick={toggleBuyJobPortalModal}
              >
                <i className="fa fa-building" aria-hidden="true"></i>
                <span>Companies Using It</span>
              </Link>
              <a onClick={toggleInfo} className="ylogicspice">
                <i>
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/why-logic-icon.png"
                    alt=""
                    className=""
                    width={20}
                    height={20}
                  />
                </i>
                <span>Why Logicspice</span>
              </a>
              <Whylogicspice open={showInfo} />
            </div>
          </div>
        </div>
      </section>

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
                    href="https://dishit.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dishit.org
                  </Link>
                </div>
                <Link
                  href="https://dishit.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    unoptimized={true}
                    src="/img/businessdirectory/dishit.jpg"
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
                    href="https://mexperts.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    mexperts.co.in
                  </Link>
                </div>
                <Link
                  href="https://mexperts.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    unoptimized={true}
                    src="/img/businessdirectory/mexperts.jpg"
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
                    href="https://ummahvendors.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ummahvendors.com
                  </Link>
                </div>
                <Link
                  href="https://ummahvendors.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    unoptimized={true}
                    src="/img/businessdirectory/ummahvendors.jpg"
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
                        src="/img/jobboard/tech_cakephp_icon.png"
                        alt="CakePHP Development"
                        width={60}
                        height={40}
                      />
                    </div>
                    <div className="icntechimg_nm">CakePHP</div>
                  </li>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/html-5.png"
                        alt="HTML5"
                        width={60}
                        height={40}
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
                        height={40}
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
                        height={40}
                      />
                    </div>
                    <div className="icntechimg_nm">Apache</div>
                  </li>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/apple_phn_icon.png"
                        alt="iOS"
                        width={50}
                        height={40}
                      />
                    </div>
                    <div className="icntechimg_nm">iOS</div>
                  </li>
                  <li data-aos="fade-up" className="aos-init aos-animate">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/andoird_icon.png"
                        alt="Android"
                        width={50}
                        height={40}
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
                    <b>Framework - </b> CakePHP
                  </li>
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Language - </b> PHP 5.4+, AJAX, jQuery
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Design - </b> HTML 5, CSS 3, JavaScript
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Database - </b> MySQL 5.5+{" "}
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Server - </b> Apache 2.4+
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>iOS - </b> xcode 11.3 and swift 5{" "}
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Android - </b> java 9 and Android Studio 4.1
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
              <li data-aos="fade" className="aos-init aos-animate">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                    height={50}
                    width={60}
                  />
                </div>
                <div className="supportsettingtext">Free Support</div>
              </li>
              <li data-aos="fade" className="aos-init aos-animate">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                    height={50}
                    width={60}
                  />
                </div>
                <div className="supportsettingtext">Free Brand Removal</div>
              </li>
              <li data-aos="fade" className="aos-init aos-animate">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/free_instal.png"
                    alt="manager_icn"
                    height={50}
                    width={60}
                  />
                </div>
                <div className="supportsettingtext">Free Installation</div>
              </li>
              <li data-aos="fade" className="aos-init aos-animate">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/access_secure_code_icon.png"
                    alt="manager_icn"
                    height={50}
                    width={50}
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
                      <div className="people_star_num">23</div>
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
                          style={{ width: "10%" }}
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
                    title="PHP Business Directory Script"
                  />
                </div>
                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;Great work - I installed this business directory
                      software and it is working properly. I appreciate
                      Logicspice and their support team, Thank you!&quot;
                    </div>
                    <div
                      className="who_ratset"
                      style={{ text: "right", paddingRight: "17px" }}
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
                      Clark - Methew, Canada{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/canada_flag_img.png"
                          alt="mobile app development in Canada"
                          style={{ width: "20px", marginLeft: "3px" }}
                          height={20}
                          width={20}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext" id="fiveer-clone">
                      &quot;I bought this software from logicspice and it has no
                      bugs. They provided me the full support, installed it for
                      me, and also fixed some issues related to my queries.
                      Timely response to my emails. Worth for money.&quot;
                    </div>

                    <div
                      className="who_ratset"
                      style={{ text: "right", paddingRight: "17px" }}
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
                      <span id="client-name">
                        Rafish Saabdeen, Dubai [UAE]{" "}
                      </span>{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/german.png"
                          alt="mobile app development in Dubai"
                          height={20}
                          width={20}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;We have tried several software for business
                      directory purposes. They are full of bugs and some others
                      are so slow but the logicspice business directory software
                      is working very fast and accurately. It has all the
                      features that a directory should have. I recommend
                      logicspice for ready-made PHP software, professional &
                      great customer service.&quot;
                    </div>
                    <div
                      className="who_ratset"
                      style={{ paddingRight: "17px" }}
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
                      Adom, USA{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/uae_flag_iimg.png"
                          alt="mobile app development in USA"
                          style={{ width: "20px", marginLeft: "3px" }}
                          height={20}
                          width={20}
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
                  >
                    <Typography>
                      How can a customer search for businesses around his
                      location?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      A Customer can enter his zip/postal code on the website
                      and all the businesses that are around will be listed to
                      the customer.
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
                      Can the customer give rating to a business even if he
                      hasn&apos;t visited the store?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, customer can give rating out of 5 even if they
                      haven&apos;t visited the store. Customer can also write a
                      review along with the rating.
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
                      Can a business owner upload multiple services to the
                      website?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, the business owner can upload multiple
                      services/products that he deals in.
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
                      How can a customer ensure the authenticity of the
                      information of different businesses?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Whenever a business owner creates a page for his business,
                      it has to be approved by the admin.
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
                      Yes. If a seller chooses to share his contact information
                      on the website, the customer can see it.
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
                      Can I update some design and functionality in the
                      application code myself?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, You will have access to all the code.
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
          <h2 className="title_main">
            PHP Business Directory Software Features
          </h2>
          {/* <div id="equipment_sldier">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    src="/img/businessdirectory/BusinessDetails.png"
                    alt="Business Details"
                    height={1075}
                    width={1075}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Business Details</div>
                  <div className="pro-feat-detai">
                    Business details like title, image, description, place,
                    categories, list of reviews and ratings.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    src="/img/businessdirectory/BusinessListing.png"
                    alt="Business Listing"
                    height={1075}
                    width={1075}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Service Listing</div>
                  <div className="pro-feat-detai">
                    Users can view a list of business according to their search
                    criteria with the details of the business.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    src="/img/businessdirectory/add-business-new.png"
                    alt="add-business"
                    height={1075}
                    width={1075}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Add Business</div>
                  <div className="pro-feat-detai">
                    Users can view discount that is being offered and offer
                    title, image and description.{" "}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    src="/img/businessdirectory/PopularPlacesNew.png"
                    alt="Popular Places"
                    height={1075}
                    width={1075}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Search Products</div>
                  <div className="pro-feat-detai">
                    Users can see the popular businesses on the website and
                    sorted according to their rating and number of reviews.
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div> */}
          <div id="joblboardslide">
            <Slider {...settings}>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/businessdirectory/BusinessDetails.png"
                    alt="Business Details"
                    height={1075}
                    width={1075}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Business Details</div>
                  <div className="pro-feat-detai">
                    Business details like title, image, description, place,
                    categories, list of reviews and ratings.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/businessdirectory/BusinessListing.png"
                    alt="Business Listing"
                    height={1075}
                    width={1075}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Service Listing</div>
                  <div className="pro-feat-detai">
                    Users can view a list of business according to their search
                    criteria with the details of the business.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/businessdirectory/add-business-new.png"
                    alt="add-business"
                    height={1075}
                    width={1075}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Add Business</div>
                  <div className="pro-feat-detai">
                    Users can view discount that is being offered and offer
                    title, image and description.{" "}
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/businessdirectory/PopularPlacesNew.png"
                    alt="Popular Places"
                    height={1075}
                    width={1075}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Search Products</div>
                  <div className="pro-feat-detai">
                    Users can see the popular businesses on the website and
                    sorted according to their rating and number of reviews.
                  </div>
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
                    title="PHP Business Directory Script"
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
                    href="/classified-ads-script"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Classified Ads Script</h3>

                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            src="/img/jobboard/classified_logo_new.png"
                            alt="Classified Ads Script"
                            className=""
                            height={200}
                            width={200}
                          />
                        </div>
                        <p>
                          <span>Craigslist clone, olx clone. </span>
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
                            height={200}
                            width={200}
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
                    href="/job-board-software"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Job Board Software</h3>

                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            src="/img/jobboard/job-board-logo.png"
                            alt="Job board software"
                            className=""
                            height={200}
                            width={200}
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
