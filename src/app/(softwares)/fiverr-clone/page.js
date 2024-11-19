"use client";
// import "@fortawesome/fontawesome-free/css/all.css";
import Image from "next/image";
import Link from "next/link";
import "@/app/(softwares)/softwares.css";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import React, { useEffect, useRef, useState } from "react";
import { lazy, Suspense } from "react";
import "../../resposive.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import { Modal, ModalBody } from "react-bootstrap";
import Reviewmodals from "@/app/Components/Reviewmodals";
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

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [jobportal, setJobportal] = useState(false);
  const [buyjobportal, setBuyJobportal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const iframeRef = useRef();

  const toggleJobPortalModal = () => setJobportal(!jobportal);
  const toggleBuyJobPortalModal = () => setBuyJobportal(!buyjobportal);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  var tab = {
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
  const [buyerTab, setBuyerTab] = useState(false);
  const [adminTab, setAdminTab] = useState(false);
  const [studentTab, setStudentTab] = useState(true);
  const [instructorTab, setInstructorTab] = useState(false);
  const [adminpanelTab, setAdminpanelTab] = useState(false);
  const [pageData, setPageData] = useState([]);
  const videoRef = useRef();

  const getData = async () => {
    try {
      const response = await axios.get(
        BaseAPI + "/product/Details/fiverr-clone"
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
  const handleStudentTab = () => {
    setStudentTab(true);
    setInstructorTab(false);
    setAdminpanelTab(false);
  };
  const handleInstructorTab = () => {
    setStudentTab(false);
    setInstructorTab(true);
    setAdminpanelTab(false);
  };
  const handleAdminpanelTab = () => {
    setStudentTab(false);
    setInstructorTab(false);
    setAdminpanelTab(true);
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

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setInView(entry.isIntersecting);
  //     },
  //     { root: null, rootMargin: "0px", threshold: 0.1 }
  //   );

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => {
  //     if (ref.current) {
  //       observer.unobserve(ref.current);
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   // Intersection Observer to detect when the iframe enters the viewport
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsInView(true); // Set to true when the iframe is in the viewport
  //         observer.unobserve(entry.target); // Stop observing after it starts playing
  //       }
  //     },
  //     { threshold: 0.5 } // Trigger when 50% of the iframe is visible
  //   );

  //   if (iframeRef.current) {
  //     observer.observe(iframeRef.current); // Start observing the iframe
  //   }

  //   return () => {
  //     if (iframeRef.current) {
  //       observer.unobserve(iframeRef.current); // Cleanup observer when component unmounts
  //     }
  //   };
  // }, []);

  // const iframeRef = useRef(null);
  const [player, setPlayer] = useState(null);
  // const [isInView, setIsInView] = useState(false);

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

      <section className="paid-pro job-portal-banner job-portal-bg fiverr-new-banner NewJobSiteDesign JobBoardNewDesign FiverrCloneMainBanner">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>Fiverr Clone Script</h1>
              <div className="both-left-p-sec">
                <h2>On Demand Marketplace Software</h2>
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
                <div className="job-valu-btn">
                  <div
                    className=" btn-get"
                    onClick={openDemoAccessModal}
                    style={{ textAlign: "center" }}
                  >
                    <a>Get Demo Access!</a>
                    {
                      //     <SoftwareEnquiry
                      //       modalStatus={showModal}
                      //       toggle={openModal}
                      //       title="Please fill the form below and get access to the live demo of Fiverr Clone
                      // .See how it work yourself!"
                      //     />
                      <GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of Fiverr Clone.
 See how it works yourself!"
                      />
                    }
                  </div>
                  <Link
                    className="btn fiverr-buys NewGreenBtnJob"
                    href={`/buy-now/fiverr-clone`}
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
                      width={100}
                      height={100}
                      src="/img/jobboard/stars.png"
                      alt=""
                      className="lazy"
                    />
                    <p>569 Reviews</p>
                  </div>
                </div>
              </div>
              <div className="jocpp">
                <ul className="job-pr-icon jobwidthauto">
                  <li>
                    <i className="fa fa-globe" aria-hidden="true"></i>
                  </li>
                  <li>
                    {/* <i className="fa-brands fa-android" aria-hidden="true"></i> */}
                    <i class="fa fa-android" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i class="fa fa-apple" aria-hidden="true"></i>
                  </li>
                </ul>
                <div className="portel-btnbx">
                  <a
                    className="btn text-primary jobportal-btn js-anchor-link"
                    href="#subscriptionmodel"
                    style={{ display: "none" }}
                  >
                    <i>
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/subscription2.png"
                        alt="subscription"
                      />
                    </i>
                    Subscription Model
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                {/* <Image
                  unoptimized={true}
                  width={450}
                  height={500 / (100 / 100)}
                  src="/img/fiverrclone/gigger-mobiles.png"
                  alt="Fiverr_clone"
                  className="lazy"
                /> */}
                {/* <Image
                unoptimized={true}
  priority={true}
  width={450}
  height={500}
  src="/img/fiverrclone/gigger-mobiles.png"
  alt="Fiverr Clone"
  className="lazy"
/> */}

                <Image
                  priority={true}
                  width={450}
                  height={500}
                  src="/img/fiverrclone/gigger-mobiles.png"
                  alt="Fiverr Clone"
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="lazy"
                />
              </div>
            </div>
          </div>
          <div className="job-portal-banner-link">
            <div aria-label="breadcrumb" className="my-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/softwares">Softwares</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Fiverr Clone
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new">
        <div className="container">
          <p>
            Get the best Fiverr Clone Script that can help you to build your own
            freelance service marketplace where freelancers can sell their
            services and buyers can order services.
          </p>
        </div>
      </section>

      <section
        className="client-say crowdfunding-say NewTorowLi"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 job-video">
              {/* {inView && (
                <div className="jobvideo">
                  <iframe
                    width="100%"
                    height="312"
                    src="https://www.youtube.com/embed/83xCE7lMRTs?rel=0&autoplay=1"
                     viewport="0 0 0"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
 

                </div>
              )} */}
              {/* <div ref={iframeRef}>
                {isInView && (
                  <iframe
                    width="100%"
                    height="312"
                    src="https://www.youtube.com/embed/83xCE7lMRTs?rel=0&autoplay=0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div> */}
              <div ref={iframeRef}>
                <iframe
                  id="ytplayer"
                  width="100%"
                  height="312"
                  src="https://www.youtube.com/embed/83xCE7lMRTs?enablejsapi=1&mute=1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-market-ttd-new JobBoardServiceMarketFeatures">
                <ul>
                  <li>Post Unlimited Gigs</li>
                  <li>White labeled script </li>
                  <li>Advance Search Filter</li>
                  <li>AJAX Rich Dashboard</li>
                  <li>Facebook Gmail Login</li>
                  <li>Wallet Functionality</li>
                  <li>One time License Fee</li>
                  <li>Responsive website (mobile friendly)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="job_portal_area">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Fiverr Clone Features</h2>
          </div>
          <div className="tatxt_txt_job text-center">
            The <b>Fiverr Clone</b> enables people to act as buyers or sellers
            of job services from the same account. Being a seller, they can
            create gigs(jobs) over the site and being buyers they can search for
            gigs present over the site through different categories or can do
            keyword search for them.
            <br />
            With the help of our readymade marketplace script, the buyer can go
            through the list of gigs that they have searched for and see the
            details of selected ones. They can add the gigs they like to a cart
            and purchase them by making payment through a payment gateway.
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
                  <a>Seller App Features</a>
                </li>
                <li
                  id="tab2_li"
                  className={`emplyer_app_job ddlj ${buyerTab ? "active" : ""}`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Buyer App Features</a>
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
                  <div className="costomer_tab rj JobseekerTab" id="tab1">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right costomer_tab_rightleft">
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/fiverrclone/gigger_saler.png"
                            alt="Seller App Features"
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
                                  src="/img/jobboard/secure_login.png"
                                />
                              </i>
                              <span>
                                Secure Login
                                <div className="product-idea">
                                  <p>
                                    Seller can log in securely using Facebook,
                                    Gmail or Email
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
                                  src="/img/jobboard/add_gig.png"
                                />
                              </i>
                              <span>
                                Create New Gig & Post Gig
                                <div className="product-idea">
                                  <p>
                                    Seller can post the gigs by creating new gig
                                    and adding Gig Title, Category, SubCategory
                                    & Tags.
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
                                  src="/img/jobboard/manage_gig.png"
                                />
                              </i>
                              <span>
                                Manage Gigs
                                <div className="product-idea">
                                  <p>
                                    Seller can view list of Gigs & can
                                    manage(view/add/edit/delete) Gigs. Seller
                                    can create gig by adding Gig Title,
                                    Category, SubCategory & Tags.
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
                                Seller Dashboard
                                <div className="product-idea">
                                  <p>
                                    Seller can view the dashboard with the total
                                    number of counts & Statistics.
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
                                  src="/img/jobboard/gig_gallery.png"
                                />
                              </i>
                              <span>
                                Manage Buyer Request
                                <div className="product-idea">
                                  <p>
                                    Seller can view the list of Active Request &
                                    Offers sent by Buyers & can manage Active
                                    Request & Offers.
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
                                  src="/img/jobboard/view_public.png"
                                />
                              </i>
                              <span>
                                Preview Public Mode
                                <div className="product-idea">
                                  <p>
                                    Seller can view the public view of their
                                    profile after making updates in profile with
                                    ratings & reviews.
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
                                View Reviews & Ratings
                                <div className="product-idea">
                                  <p>
                                    Seller can view the reviews & rating Buyer
                                    has received on the portal.
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
                                  <p>
                                    Seller can get updates through the
                                    notifications.
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
                                  src="/img/jobboard/manage_profile.png"
                                />
                              </i>
                              <span>
                                Manage Profile
                                <div className="product-idea">
                                  <p>
                                    Seller can view their profile & can change
                                    password & PayPal email address.
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
                                  src="/img/jobboard/contact.png"
                                />
                              </i>
                              <span>
                                Buyers Contact
                                <div className="product-idea">
                                  <p>
                                    Seller can find the contact of Buyer using
                                    this portal.
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
                                  src="/img/jobboard/manage_selling_order.png"
                                />
                              </i>
                              <span>
                                Manage Gig Order
                                <div className="product-idea">
                                  <p>
                                    Seller can receive the order for posted gig
                                    & Seller can manage(add/edit/delete) gigs.
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
                                  src="/img/jobboard/view_order.png"
                                />
                              </i>
                              <span>
                                Get Payment
                                <div className="product-idea">
                                  <p>
                                    Seller can receive the payment for the gig &
                                    can keep track of the transaction history.
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
                  <div className="costomer_tab rj EmployerTab" id="tab2">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right">
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/fiverrclone/buyegigger_buyer.png"
                            alt="Buyer App Features"
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
                                  src="/img/jobboard/secure_login.png"
                                />
                              </i>
                              <span>
                                Secure Login
                                <div className="product-idea">
                                  <p>
                                    Buyer can login securely using Facebook,
                                    Gmail or Email.
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
                                  src="/img/jobboard/browse_gig.png"
                                />
                              </i>
                              <span>
                                Browse Gigs
                                <div className="product-idea">
                                  <p>Buyer can browse gigs on the portal.</p>
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
                                  src="/img/jobboard/refine_search.png"
                                />
                              </i>
                              <span>
                                Refine Search
                                <div className="product-idea">
                                  <p>
                                    Buyer can search for the gig from posted one
                                    by apply filters{" "}
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
                                  src="/img/jobboard/manage_profile.png"
                                />
                              </i>
                              <span>
                                Manage Profile
                                <div className="product-idea">
                                  <p>
                                    Buyer can view their profile & can change
                                    their password & PayPal e-mail address.
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
                                  src="/img/jobboard/select_gig.png"
                                />
                              </i>
                              <span>
                                Select Gig
                                <div className="product-idea">
                                  <p>
                                    Buyer can select the best gig from the
                                    posted one as per their requirement.
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
                                View Reviews & Ratings
                                <div className="product-idea">
                                  <p>
                                    Buyer can view the reviews & rating Seller
                                    has received on the portal.
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
                                  src="/img/jobboard/manage_order.png"
                                />
                              </i>
                              <span>
                                Manage Buying Request
                                <div className="product-idea">
                                  <p>
                                    Buyer can view send Buying Request to
                                    Sellers & can manage(add/edit/delete) Buying
                                    Request.
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
                                  <p>
                                    Buyer can get updates through the
                                    notifications
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
                                  src="/img/jobboard/post_request.png"
                                />
                              </i>
                              <span>
                                Post Request
                                <div className="product-idea">
                                  <p>
                                    Buyer can post gig request on the portal
                                    with details Gig Title, Category,
                                    SubCategory & Tags.
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
                                  src="/img/jobboard/saved_gig.png"
                                />
                              </i>
                              <span>
                                Manage Saved Gigs
                                <div className="product-idea">
                                  <p>
                                    Buyer can save the gigs which found relevant
                                    & Buyer can remove from saved gigs.
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
                                Payment Transaction History
                                <div className="product-idea">
                                  <p>
                                    Buyer can make the payment & can view
                                    payment status (Paid/pending).
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
                  <div className="costomer_tab rj AdminTab" id="tab3">
                    <div className="row">
                      <div className="col-lg-4 col-md-3 ">
                        <div className="costomer_tab_right costomer_tab_rightleft2">
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/fiverrclone/gigger_deshboard.png"
                            alt="Admin Panel"
                          />{" "}
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
                                  src="/img/jobboard/secure_login.png"
                                />
                              </i>
                              <span>
                                Secure Login
                                <div className="product-idea">
                                  <p>
                                    Admin can login securely on this portal.
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
                                    Admin can view dashboard which will display
                                    the total number of counts for Seller,
                                    Buyer, Gig orders etc.
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
                                  src="/img/jobboard/manage_user.png"
                                />
                              </i>
                              <span>
                                Manage Users
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of Users(Seller/Buyer) &
                                    can manage(add/edit/delete) Users. Admin can
                                    activate/deactivate Users.
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
                                  src="/img/jobboard/manage_gig.png"
                                />
                              </i>
                              <span>
                                Manage Gigs
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of Gigs & can
                                    manage(delete) Gigs. Admin can
                                    activate/deactivate Gigs.
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
                                  src="/img/jobboard/manage_gig_order.png"
                                />
                              </i>
                              <span>
                                Manage Gig Orders
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of Gig orders & can
                                    manage (view) gig Orders.
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
                                  src="/img/jobboard/manage_service.png"
                                />
                              </i>
                              <span>
                                Manage Services
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of services & can
                                    manage(view/add/edit/delete) services.
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
                                    Admin can view list of Categories & can
                                    manage(view/add/edit/delete) Categories.
                                    Admin can activate/deactivate Categories.
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
                                  src="/img/jobboard/manage_skill.png"
                                />
                              </i>
                              <span>
                                Manage Skills
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of Skills & can manage
                                    (view/add/edit/delete) skills.
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
                                  src="/img/jobboard/manage_cat.png"
                                />
                              </i>
                              <span>
                                Manage Sub-categories
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of Sub-categories & can
                                    manage(view/add/edit/delete) Sub-categories.
                                    Admin can activate/deactivate
                                    Sub-categories.
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
                                  src="/img/jobboard/manage_countries.png"
                                />
                              </i>
                              <span>
                                Manage Countries
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of Countries & can
                                    manage(view/add/edit/delete) Countries.
                                    Admin can activate/deactivate Countries.
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
                                  src="/img/jobboard/manage_testimonial.png"
                                />
                              </i>
                              <span>
                                View Reviews & Ratings
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Reviews & Ratings
                                    Seller & Buyer has received.
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
                                Transaction History
                                <div className="product-idea">
                                  <p>
                                    Admin can view payment transactions which
                                    will display the status of the payment
                                    paid/pending.
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
            <h2 className="headhs">What does our Fiverr Clone do for you?</h2>
            <p>
              Logicspice offers Fiverr marketplace script, developed to build
              your own online marketplace software. Fiverr marketplace is the
              revolutionary online platform for business interactions where
              employers search for the best talent and freelancers get hired for
              their best skills. This is the online marketplace for freelancers
              and businessmen to interact with each other.
            </p>
            <p>
              The fiverr clone app comes with amazing and innovative features
              and project modules. It is a cost and time effective approach if
              you are looking to start a business in particular niche with small
              investment. <b>On demand marketplace software</b> is the easiest
              and quickest method to let your own freelancing website.
            </p>
            <p>
              Those businessmen and freelancers who want to develop their own
              micro-jobs website and mobile apps similar to fiverr, then they
              can have a live demo of our{" "}
              <strong>
                <i>fiverr clone script.</i>
              </strong>
            </p>
          </div>
        </div>
      </section>

      <section className="SubscriptionModel" id="subscription">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Subscription Model</h2>
            <br />
            <div className="SubscriptionModelBx">
              <p>
                Experience convenience like never before with our
                subscription-based hassle-free model, available at just{" "}
                <strong>USD 45 per month</strong> , limited offer available for
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
                    <strong>Zero Setup Fees</strong> :- There are no additional
                    charges for the setup and installation of the software,
                    making it easier for customers to get started.
                  </span>
                </li>
                <li>
                  <span>
                    Unlimited Gig Postings: Post as many gig postings as you
                    need without any limitations.
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
                  <a>Get Demo Access!</a>
                  {
                    // <SoftwareEnquiry
                    //   modalStatus={showModal}
                    //   toggle={openModal}
                    //   title="Please fill the form below and get access to the live demo of Fiverr Clone.See how it work yourself!"
                    // />
                    <GetDemoEnquiry
                      modalStatus={demoAccessModal}
                      toggle={openDemoAccessModal}
                      title="Please fill the form below and get access to the live demo of Fiverr Clone.
 See how it works yourself!"
                    />
                  }
                </div>
                <Link
                  className="btn fiverr-buys"
                  href={`/buy-now/fiverr-clone`}
                  id="buy_now_1"
                >
                  Buy Now
                </Link>
              </div>
              <div className="jocpp">
                <ul className="job-pr-icon">
                  <li>
                    <i className="fa fa-globe" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i class="fa fa-android" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i class="fa fa-apple" aria-hidden="true"></i>
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
                    <p>219 Reviews</p>
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
              <li>
                <span>
                  Our system allows customers a smooth transition between
                  monthly subscriptions and pro or enterprise licenses, enabling
                  them to adjust their license based on their pricing
                  preferences conveniently.
                </span>
              </li>
            </ul>
            <p>
              For details on an Enterprise license, please{" "}
              <Link href="#" onClick={toggleModal}>
                contact us
                {/* <div  onClick={toggleModal}>
                  contact us
          <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
        </div> */}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="job_portal_area script-update-bg">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Script Update History</h2>
            <br />
            <div className="script-update_title">
              <p>
                V1.2 - January 23rd, 2024 - Marks a significant technological
                upgrade for Android and iPhone mobile apps.
              </p>
              <ul>
                <li>
                  <span>
                    Formerly developed with Java 9 and Android Studio 4.1
                    (Android) and Xcode 10.2.1 with Swift 4.2 (iPhone), the apps
                    are now powered by React Native Version 0.72.6. This
                    strategic shift aims for enhanced performance and a
                    modernized user experience, reflecting our commitment to
                    innovative mobile app development.
                  </span>
                </li>
              </ul>
              <p>
                V1.1 - September 21st, 2023 - Diversify your payment experience
                with our latest options and enjoy several minor enhancements.
              </p>
              <ul>
                <li>
                  <span>
                    Effortless payment: You&apos;ll be directed to Stripe for a
                    secure checkout process.
                  </span>
                </li>
                <li>
                  <span>
                    Securely process Credit/Debit Card payments within the
                    website, powered by Stripe.
                  </span>
                </li>
                <li>
                  <span>
                    Experience faster speeds and enhanced performance with our
                    latest updates.
                  </span>
                </li>
                <li>
                  <span>
                    We&apos;ve listened to the client&apos;s feedback and
                    resolved bugs for a better user experience.
                  </span>
                </li>
              </ul>
              <p>
                V1.0 - May 23rd, 2023 - PHP and Laravel version upgrade and
                other minor improvements!
              </p>
              <ul>
                <li>
                  <span>PHP version updated from 7.3.13 to 8.2.5</span>
                </li>
                <li>
                  <span>Laravel Version from 5.5.41 to 10.8</span>
                </li>
                <li>
                  <span>Performance improvements. </span>
                </li>
                <li>
                  <span>Bug fixes.</span>
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
              Logicspice is the best partner for your Fiverr Clone solution!
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
                    src="/img/images/why-logic-icon.png"
                    alt=""
                    className=""
                  />
                </i>
                <span>Why Logicspice</span>
              </a>
            </div>
          </div>

          {showInfo && (
            <>
              <div className="small_bbx_job_new">
                <div className="row">
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-bx1">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/coding.png"
                            alt="img"
                          />
                        </div>
                        <h3>Optimized Code with proper commenting</h3>
                        <p>
                          Our script code is fully optimized, which results in
                          quick load time and, Code is properly commented for
                          each function and module so anyone can easily update
                          the code in future.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-bx2">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/data-complexity.png"
                            alt="img"
                          />
                        </div>
                        <h3>Strong Framework of PHP & Well managed database</h3>
                        <p>
                          We used popular and strong Framework of PHP with
                          latest versions to keep the code up to date and
                          prevalent for longer duration. Our experienced team
                          managed all the database tables with complete
                          flexibility for extension versions in future.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-bx3">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <Image
                            unoptimized={true}
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
                          technical support team, with the best possible
                          solution. Expect our response within 24 hours.
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
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/customize.png"
                            alt="img"
                          />
                        </div>
                        <h3>Customization at affordable price</h3>
                        <p>
                          We provide customization of our scripts, to meet
                          customer expectations with best affordable price and
                          minimum turn-around time.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-bx5">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/smartphone-icon.png"
                            alt="img"
                          />
                        </div>
                        <h3>Mobile Friendly Script</h3>
                        <p>
                          Our Script is mobile friendly so, users can easily
                          access all the features through mobile devices that
                          gives improved user experience with portability.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-bx6">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/data.png"
                            alt="img"
                          />
                        </div>
                        <h3>Dedicated Support Team</h3>
                        <p>
                          You will get the dedicated support team while
                          purchasing the script or product. Technical support
                          team will resolve your query quickly in a given time.
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
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/web-icon.png"
                            alt="img"
                          />
                        </div>
                        <h3>Global company with agile development approach</h3>
                        <p>
                          Our customers are almost equally spread around the
                          globe and we provide international standard solutions
                          for USA, UK, Europe, Australia, UAE and other
                          countries. We follow a transparent work process and
                          divide all the development processes into small
                          phases. We can use the latest technology and standards
                          that assure the smooth development and execution.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-box thumbnail-bx8">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/encrypted.png"
                            alt="img"
                          />
                        </div>
                        <h3>
                          Customer information and application level security
                        </h3>
                        <p>
                          Security of customer data and application is a major
                          aspect of any of the solutions, Logicspice provides.
                          Our programming is robust and secure that assures
                          password encryption.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new thumbnail-box thumbnail-bx9">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/history-icon.png"
                            alt="img"
                          />
                        </div>
                        <h3>
                          Experienced workforce with 3000+ project history
                        </h3>
                        <p>
                          We are a team of experienced web and mobile app
                          developers, having expertise in handling complex tasks
                          since the past 16+ years. We delivered lots of
                          projects with 100% client satisfaction on different
                          platforms with high levels of standards.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new productthumbnail-box thumbnail-bx10">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/seouser-friendly.png"
                            alt="img"
                          />
                        </div>
                        <h3>Seo Friendly Development</h3>
                        <p>
                          Our developed websites are SEO optimized so it can
                          rank better on Google.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new productthumbnail-box thumbnail-bx11">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <Image
                            unoptimized={true}
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
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/third-party-api.png"
                            alt="img"
                          />
                        </div>
                        <h3>Integration With Third Party Api</h3>
                        <p>
                          We integrate your website with third party API on our
                          end to serve you better.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-4">
                    <div className="thumbnail-new productthumbnail-box thumbnail-bx13">
                      <div className="caption">
                        <div className="best-partner-img-bx">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/jobboard/cost-effective.png"
                            alt="img"
                          />
                        </div>
                        <h3>Cost Effective</h3>
                        <p>
                          Powerful technology back-end with basic ready-made
                          modules save time and hence overall project cost for
                          your script gets reduced.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
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
          {/* <Modal.Header closeButton></Modal.Header> */}
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
              height={100}
              src="/img/fiverrclone/gigger-how-it-works.jpg"
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
            <div id="jobboardclients">
              <Slider {...settings}>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <a
                      href="https://salorapido.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      salorapido.com
                    </a>
                  </div>
                  <a
                    href="https://salorapido.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/fiverrclone/salorapido.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link href="https://www.gblancers.com/" target="_blank">
                      gblancers.com
                    </Link>
                  </div>
                  <Link href="https://www.gblancers.com/" target="_blank">
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/fiverrclone/gblancers.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link href="https://dilancer.com/" target="_blank">
                      dilancer.com
                    </Link>
                  </div>
                  <Link href="https://dilancer.com/" target="_blank">
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/fiverrclone/dilancer.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link href="https://www.bimtower.in/" target="_blank">
                      bimtower.in
                    </Link>
                  </div>
                  <a href="https://www.bimtower.in/" target="_blank">
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/fiverrclone/bimtower.jpg"
                      alt="icon"
                      title=""
                    />
                  </a>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link href="https://www.workpido.com/" target="_blank">
                      workpido.com
                    </Link>
                  </div>
                  <Link href="https://www.workpido.com/" target="_blank">
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/fiverrclone/workpido.jpg"
                      alt="icon"
                      title=""
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link href="https://4buh.org/" target="_blank">
                      4buh.org
                    </Link>
                  </div>
                  <Link href="https://4buh.org/" target="_blank">
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/fiverrclone/4buh.jpg"
                      alt="icon"
                      title=""
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
                    <Image
                      unoptimized={true}
                      width={60}
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
                      width={60}
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
                      width={60}
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
                  <b>Browsers - </b> Firefox 112.0.2 +, Chrome 113.0+, Opera
                  99.0+, Safari 5+, IE 9+
                </li>
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Framework - </b> Laravel 10.8
                </li>
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Language - </b> PHP 8.2.5 Supported, AJAX, jQuery
                </li>
                <li className="other aos-init aos-animate" data-aos="fade-up">
                  <b>Design - </b> HTML 5, CSS 3, Bootstrap 4.1.3, JavaScript
                </li>
                <li className="other aos-init" data-aos="fade-up">
                  <b>Database - </b> MySQL 5.5+{" "}
                </li>
                <li className="other aos-init" data-aos="fade-up">
                  <b>Mobile Apps - </b> React Native Version 0.72.6
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
                    width={60}
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
                  {/* <Reviewmodals title="Product Title" /> */}
                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title=" Fiverr Clone"
                  />
                </div>
                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    {/*                     <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div> */}

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
                          width={20}
                          height={100}
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    {/*                     <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div> */}
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
                          width={20}
                          height={100}
                          src="/img/jobboard/german.png"
                          alt="mobile app development in german"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    {/*                    <div className="customers_review_sec_row_ra"><div className="starget">5 <i className="fa fa-star" aria-hidden="true"></i></div><span>Build an Online Store</span></div> */}
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
                          width={20}
                          height={100}
                          src="/img/jobboard/australia_flag_img.png"
                          alt="mobile app development in USA"
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
                    <Typography>How can a user search for gigs?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      User can search for the gigs by selecting the categories
                      and the sub categories or by entering the keywords related
                      to their environment.
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
                      Can a user view the profile of users who has added the
                      gig?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes. User can view the profile of user who has uploaded
                      the bid along the total reviews received by him and other
                      gigs added by him.
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
                      After I purchase this script, Will I be able to use it on
                      multiple domains?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No, you will be licensed to use it only for the domain,
                      you purchased for.
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
                      Can I resell the script? Will I have rights over the
                      script code?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      All rights will remain with Logicspice only, and you can
                      not resell it.
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
                      {" "}
                      How many days will it take to implement the customization?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Time taken to implement your Fiverr Clone Script depends
                      on the level of customization and data migration. The time
                      frame generally ranges 5-6 weeks.
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
                      {" "}
                      Can the User give rating to a gig even if they
                      haven&apos;t purchased it?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No. User can only give rating out of 5 when they have
                      purchased the gig. User can also write a review along with
                      the rating.
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
                      {" "}
                      How can the users manage their gigs on the website?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The users can add their gigs along with pictures and other
                      deals to the website. They can also edit and delete the
                      gigs that are already been added.
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
                      {" "}
                      Can I update some design and functionality in application
                      code myself?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, You will have access of the all the code, except some
                      of the core encrypted files.
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
                      {" "}
                      Will I be able to use it on multiple domains, after I
                      purchase this script?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      You will be licensed to use it only for the domain, you
                      purchased for.
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
                    <Typography> Do you offer Money Back Guarantee?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, we offer 30 days money back guarantee to ensure
                      customer satisfaction of our softwares. If for any reason,
                      you wish to discontinue using the product, you can ask us
                      for refund. We will refund your total money except the
                      installation and configuration charges, which is USD 65 or
                      20% of application cost, whichever is greater. Any cost of
                      customization will not be refunded.
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
                      We recommend you purchase SSL certificate along with a
                      hosting server, considering that an SSL certificate is
                      necessary for all the websites these days and it provides
                      a secure layer to the website as well.
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
            Top Features of a Fiverr Clone Marketplace
          </h2>

          <div className="sliders-div">
            <ul className="nav nav-tabs-slide" role="tablist">
              <li role="presentation" className={studentTab ? "active" : ""}>
                <a
                  aria-controls="homefiveer"
                  role="tab"
                  data-toggle="tab"
                  aria-expanded="true"
                  onClick={() => handleStudentTab()}
                  style={{ cursor: "pointer" }}
                >
                  Seller App Features
                </a>
              </li>
              <li role="presentation" className={instructorTab ? "active" : ""}>
                <a
                  aria-controls="profilefiveer"
                  role="tab"
                  data-toggle="tab"
                  aria-expanded="false"
                  onClick={() => handleInstructorTab()}
                  style={{ cursor: "pointer" }}
                >
                  Buyer App Features
                </a>
              </li>
              <li role="presentation" className={adminpanelTab ? "active" : ""}>
                <a
                  aria-controls="adminfiveer"
                  role="tab"
                  data-toggle="tab"
                  aria-expanded="false"
                  onClick={() => handleAdminpanelTab()}
                  style={{ cursor: "pointer" }}
                >
                  Admin Panel
                </a>
              </li>
            </ul>
          </div>
          <div className="tab_contant">
            {studentTab && (
              <>
                <div id="joblboardslide">
                  <Slider {...tab}>
                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          width={1075}
                          height={100}
                          src="/img/fiverrclone/dashboard.png"
                          alt="Dashboard"
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Dashboard</div>
                        <div className="pro-feat-detai">
                          User can view own dashboard with gigs and other
                          details like : profile, service request etc..
                        </div>
                      </div>
                    </div>

                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          width={1075}
                          height={100}
                          src="/img/fiverrclone/post_gig.png"
                          alt="Post Gig"
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Post Gig</div>
                        <div className="pro-feat-detai">
                          It will facilitate users to post gig over the site.
                          Users can post gigs by specifying gig details.
                        </div>
                      </div>
                    </div>

                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          width={1075}
                          height={100}
                          src="/img/fiverrclone/earning.png"
                          alt="Earning"
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Manage Earning</div>
                        <div className="pro-feat-detai">
                          User can manage their earning which earned by gigs
                          over the site.
                        </div>
                      </div>
                    </div>

                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          width={1075}
                          height={100}
                          src="/img/fiverrclone/messaging-img.png"
                          alt="Messaging system"
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Messaging system</div>
                        <div className="pro-feat-detai">
                          Seller and buyer can communicate each other with using
                          messaging feature.
                        </div>
                      </div>
                    </div>

                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          width={1075}
                          height={100}
                          src="/img/fiverrclone/customer-img.png"
                          alt="Custom Offer"
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Custom Offer</div>
                        <div className="pro-feat-detai">
                          Seller can create any custom offer for buyer from
                          message page.
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </>
            )}

            {instructorTab && (
              <>
                <div id="joblboardslide">
                  <Slider {...tab}>
                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          width={1075}
                          height={100}
                          src="/img/fiverrclone/search_gig.png"
                          alt="Search Gig"
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Search Gig</div>
                        <div className="pro-feat-detai">
                          It will facilitate users to search gigs over the site.
                          Users can search gig by specifying keyword on search
                          bar or they can search gigs by categories.
                        </div>
                      </div>
                    </div>

                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          width={1075}
                          height={100}
                          src="/img/fiverrclone/detail_gig.png"
                          alt="Detail Gig"
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Detail Gig</div>
                        <div className="pro-feat-detai">
                          User can view detail of gigs with category, location,
                          gallery images etc.
                        </div>
                      </div>
                    </div>
                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          width={1075}
                          height={100}
                          src="/img/fiverrclone/post_request.png"
                          alt="Post Request"
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Post Request</div>
                        <div className="pro-feat-detai">
                          It will facilitate users to request service request
                          for gig over the site. Users can post service request
                          for gigs by specifying request details.
                        </div>
                      </div>
                    </div>
                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          width={1075}
                          height={100}
                          src="/img/fiverrclone/saved_gigs.png"
                          alt="Saved Gigs"
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">Saved Gigs</div>
                        <div className="pro-feat-detai">
                          User can do favorites any gig over the site and user
                          can view all saved gigs in separate listing.
                        </div>
                      </div>
                    </div>
                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          width={1075}
                          height={100}
                          src="/img/fiverrclone/view_profile.png"
                          alt="View Profile"
                        />
                      </div>
                      <div className="hands-proved">
                        <div className="titleof_scnew">View Profile</div>
                        <div className="pro-feat-detai">
                          Buyer can view seller profile with gigs and other
                          details like : reviews,profile details, service
                          request etc..
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </>
            )}

            {adminpanelTab && (
              <>
                <div id="joblboardslide">
                  <Slider {...tab}>
                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          width={1075}
                          height={100}
                          src="/img/fiverrclone/admin-dashboard.png"
                          alt="searchcourse"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">Admin dashboard</div>
                        <div class="pro-feat-detai">
                          It will facilitate admin to users, gigs and other
                          details like : profile, orders, service request etc..
                        </div>
                      </div>
                    </div>
                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          width={1075}
                          height={100}
                          src="/img/fiverrclone/manage-site-settings.png"
                          alt="Configuration"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">Manage Site Settings</div>
                        <div class="pro-feat-detai">
                          Admin can manage website setting like : name, logo,
                          payment detail etc..
                        </div>
                      </div>
                    </div>
                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          width={1075}
                          height={100}
                          src="/img/fiverrclone/manage-wallets.png"
                          alt="Manage Courses"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">Manage Wallets</div>
                        <div class="pro-feat-detai">
                          {" "}
                          Admin can view wallet detail of all users.
                        </div>
                      </div>
                    </div>
                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          width={1075}
                          height={100}
                          src="/img/fiverrclone/manage_gigs.png"
                          alt="View Payments"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">Manage Gigs</div>
                        <div class="pro-feat-detai">
                          Admin can manage all added gig and admin can
                          deactivate, activate and delete gigs from the website.
                        </div>
                      </div>
                    </div>
                    <div className="SliderMainBx">
                      <div className="feat-slide-img">
                        <Image
                          unoptimized={true}
                          width={1075}
                          height={100}
                          src="/img/fiverrclone/manage_qualifications.png"
                          alt="Manage Categories"
                        />
                      </div>
                      <div class="hands-proved">
                        <div class="titleof_scnew">Manage Qualifications</div>
                        <div class="pro-feat-detai">
                          Admin can view list of Qualifications &amp; can manage
                          (view/add/edit/delete) qualifications.
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <div className="clearfix"></div>
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
                    title="Fiverr Clone"
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
                  <a title="View Detail" target="_black" href="/whatsapp-clone">
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>WhatsApp Clone App</h3>
                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            width={150}
                            height={100}
                            src="/img/jobboard/ls-chat-logo.png"
                            alt="WhatsApp Clone"
                            className=""
                          />
                        </div>
                        <p>
                          <span>Readymade WhatsApp Clone Script.</span>{" "}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <a
                    title="View Detail"
                    target="_black"
                    href="/crowdfunding-script"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Crowdfunding</h3>
                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            width={280}
                            height={100}
                            src="/img/jobboard/crowdfunding_new.png"
                            alt="Crowdfunding Script"
                            className=""
                          />
                        </div>
                        <p>
                          <span>
                            Fundraising Software like GoFundMe & Kickstarter.
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <a
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
                            width={243}
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
                  </a>
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
