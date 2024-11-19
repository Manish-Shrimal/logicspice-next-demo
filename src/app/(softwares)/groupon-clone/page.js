"use client";
import React, { useEffect, useState, useRef } from "react";
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
// import "../../../../public/css/font-awesome.min.css";
import "../../../../public/css/font-awesome.css";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
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
  // const [activeTab, setActiveTab] = useState("tab2");
  const [MerchantTab, setMerchantTab] = useState(false);
  const [CustomerTab, setCustomerTab] = useState(true);
  const [AdminTab, setAdminTab] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const openModal = () => {
    setShowModal(!showModal);
  };

  const handleMerchantTab = () => {
    setMerchantTab(true);
    setCustomerTab(false);
    setAdminTab(false);
  };
  const handleCustomerTab = () => {
    setMerchantTab(false);
    setCustomerTab(true);
    setAdminTab(false);
  };
  const handleAdminTab = () => {
    setMerchantTab(false);
    setCustomerTab(false);
    setAdminTab(true);
  };

  //   const opendiv = (tab) => {
  //     setActiveTab(tab);
  //   };

  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        BaseAPI + "/product/Details/groupon-clone"
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
  //     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem"  }} />}
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
      <NavBar />
      <section className="paid-pro job-portal-banner  fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg groupon_clone_new">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>Groupon Clone Script</h1>
              <div className="both-left-p-sec">
                <h2>Similar to Daily Deal Software & Coupon Script</h2>
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
//                         title="Please fill the form below and get access to the live demo of Groupon Clone Script.
// See how it work yourself!"
//                       />

<GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of Groupon Clone. See how it works yourself!"
                      />
                    }
                  </div>

                  <Link
                    className="btn fiverr-buys NewGreenBtnJob"
                    href="/buy-now/groupon-clone"
                    id="buy_now_1"
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
                    <p>27 Reviews</p>
                  </div>
                </div>
              </div>
              <div className="jocpp">
                <ul className="job-pr-icon jobwidthauto">
                  <li>
                  <i class="fa fa-globe" aria-hidden="true"></i>
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
                  width={320}
                  height={500 / (100 / 100)}
                  alt="Groupon Clone"
                  src="/img/softwares-banner-img/groupon_banner_img.png"
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
                  Groupon Clone Script
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            In the eCommerce industry, use of online coupon software is becoming
            the most popular trend in this decade. Groupon works the same as
            coupon management platforms that provide discounted gift
            certificates. Hence this is the right time to obtain the opportunity
            to make your own eCommerce website similar to Groupon. Our Groupon
            clone script would help you to start your own daily deal application
            with all advanced features in less time.{" "}
          </p>
        </div>
      </section>

      <section
        className="client-say NewTorowLi"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 job-video">
              <iframe
                src="https://player.vimeo.com/video/780613101?h=fb501dfd20&amp;autoplay=0&amp;loop=1&amp;color=451095&amp;byline=0"
                width="100%"
                height="312"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen=""
              ></iframe>
             
              
            </div>
            <div className="col-md-6">
              <div className="service-market-ttd JobBoardServiceMarketFeatures">
                <ul>
                  <li>Excellent communication system</li>
                  <li>Social Media Sign Up</li>
                  <li>Advance Search/Filters</li>
                  <li>Deals Management</li>
                  <li>Systematic and accurate reporting.</li>
                  <li>Powerful analytics panels.</li>
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
            <h2 className="taxt_tt_job">Groupon clone script Features</h2>
          </div>
          <div className="tatxt_txt_job">
            Get the best Groupon clone script that enables users to view
            complete listings of the deals according to search criterion and
            will be able to view details. Customers can give ratings to the
            deals that they may have purchased. Business owners can post tickets
            by providing fields like category, sub category, title, description
            zipcode.Customers can add their favorite deals to a wishlist so that
            they can find them easily when they visit the website next time.
          </div>
          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job">
              <ul className="fiverrClone">
                <li
                  id="tab1_li"
                  className={`admin_app_job ddlj ${AdminTab ? "active" : ""}`}
                  onClick={() => handleAdminTab()}
                >
                  <a>Admin Panel</a>
                </li>
                <li
                  id="tab2_li"
                  className={`jobseeker_app_job ddlj ${
                    CustomerTab ? "active" : ""
                  }`}
                  onClick={() => handleCustomerTab()}
                >
                  <a>Customer</a>
                </li>
                <li
                  id="tab3_li"
                  className={`business-directory-system ddlj ${
                    MerchantTab ? "active" : ""
                  }`}
                  onClick={() => handleMerchantTab()}
                >
                  <a>Merchant</a>
                </li>
              </ul>
            </div>
            <div className="tab_contant">
              {AdminTab && (
                <>
                  <div className="costomer_tab rj AdminTab" id="tab1">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right costomer_tab_rightleft">
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/grouponclone/groupon-site.png
                                "
                            alt="User"
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
                                  src="/img/jobboard/view_order.png"
                                />
                              </i>
                              <span>
                                Secure Login
                                <div className="product-idea">
                                  <p>Admin login is secured.</p>
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
                                  src="/img/jobboard/configuration.png"
                                />
                              </i>
                              <span>
                                Configuration
                                <div className="product-idea">
                                  <p>
                                    Change the username, password, email &amp;
                                    can also change the site settings.
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
                                Dashboard
                                <div className="product-idea">
                                  <p>
                                    View the dashboard where it will display the
                                    total number of customers, merchants,
                                    categories, deals, orders, payments,
                                    withdrawals etc.
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
                                  src="/img/jobboard/supervisor.png"
                                />
                              </i>
                              <span>
                                Manage Customers
                                <div className="product-idea">
                                  <p>
                                    View and manage (add/edit/delete) all the
                                    customers.
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
                                  src="/img/jobboard/manage_classified.png"
                                />
                              </i>
                              <span>
                                Manage Merchants
                                <div className="product-idea">
                                  <p>
                                    View and manage (add/edit/delete) all the
                                    merchants. He can also view and send the
                                    withdrawal request for a particular merchant
                                    here.{" "}
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
                                  src="/img/jobboard/filter_project.png"
                                />
                              </i>
                              <span>
                                Manage Countries
                                <div className="product-idea">
                                  <p>
                                    Manage (add/edit/delete) all the countries,
                                    states, cities and their localities.
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
                                  src="/img/jobboard/postan_ad.png"
                                />
                              </i>
                              <span>
                                Manage Categories
                                <div className="product-idea">
                                  <p>
                                    {" "}
                                    View and manage (add/edit/delete) all the
                                    categories and their subcategories.
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
                                  src="/img/jobboard/view_category.png"
                                />
                              </i>
                              <span>
                                Manage Deals
                                <div className="product-idea">
                                  <p>
                                    View the list of the deals and can activate,
                                    deactivate and delete also
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
                                  src="/img/jobboard/search_location.png"
                                />
                              </i>
                              <span>
                                Manage Orders
                                <div className="product-idea">
                                  <p>View the list of the orders.</p>
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
                                  src="/img/jobboard/payServices.png"
                                />
                              </i>
                              <span>
                                Manage Payments
                                <div className="product-idea">
                                  <p>View payment history.</p>
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
                                  src="/img/jobboard/make-payment.png"
                                />
                              </i>
                              <span>
                                Manage Withdrawals
                                <div className="product-idea">
                                  <p>
                                    {" "}
                                    Admin can view the list of the withdraw
                                    request and can create the new request for a
                                    merchant.
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
                                Manage Banners
                                <div className="product-idea">
                                  <p>
                                    Manage the banners for homepage sliders.
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
                                  src="/img/jobboard/manage_pages.png"
                                />
                              </i>
                              <span>
                                Manage Pages
                                <div className="product-idea">
                                  <p>
                                    Admin can view and manage static page
                                    content of the front-end.
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
              {CustomerTab && (
                <>
                  <div
                    id="tab2"
                    className={`costomer_tab rj ${
                      CustomerTab === "active" ? "active" : ""
                    }`}
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right">
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/grouponclone/groupon_user_mobile.png"
                            alt="Staff"
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
                                  src="/img/jobboard/manage_account.png"
                                />
                              </i>
                              <span>
                                View Deals by Category
                                <div className="product-idea product-idea1">
                                  <p>
                                    Customers can view all the deals according
                                    to the category.
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
                                  src="/img/jobboard/received-orders.png"
                                />
                              </i>
                              <span>
                                Search deals
                                <div className="product-idea product-idea1">
                                  <p>
                                    Customers can search deals by business name
                                    like restaurants, spa, saloon.
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
                                  src="/img/jobboard/delivery-Charges.png"
                                />
                              </i>
                              <span>
                                Merchant Details
                                <div className="product-idea">
                                  <p>
                                    Customers can view details of a merchant
                                    with the list of deals and view add deals to
                                    purchase.
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
                                  src="/img/jobboard/kitchen-staff.png"
                                />
                              </i>
                              <span>
                                Secure Register/Login
                                <div className="product-idea product-idea1">
                                  <p>
                                    Customer can Register or Log-in securely.
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
                                  src="/img/jobboard/delivery-person.png"
                                />
                              </i>
                              <span>
                                Buy Deals
                                <div className="product-idea">
                                  <p>
                                    Browse &amp; Buy the deals &amp; coupons and
                                    can select multiple deals for a merchant.
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
                                  src="/img/jobboard/order-status.png"
                                />
                              </i>
                              <span>
                                Payment Gateway
                                <div className="product-idea">
                                  <p>
                                    Customers can buy the deals by wallet or
                                    using Paypal payment gateway.
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
                                  src="/img/jobboard/order-status.png"
                                />
                              </i>
                              <span>
                                Manage Wallet:
                                <div className="product-idea">
                                  <p>
                                    Customers can view transaction history of
                                    wallet. They can add money in the wallet
                                    using the payment gateway.
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
                                  src="/img/jobboard/popular_teachers.png"
                                />
                              </i>
                              <span>
                                Manage Profile
                                <div className="product-idea">
                                  <p>
                                    {" "}
                                    Customer can update his personal details
                                    from the profile section.{" "}
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
                                View Payment History
                                <div className="product-idea">
                                  <p>
                                    Customers can view the all the payment
                                    history of payment gateway here.
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
                                  src="/img/jobboard/search_project.png"
                                />
                              </i>
                              <span>
                                View Order History
                                <div className="product-idea">
                                  <p>
                                    Customer can check all his past orders and
                                    their details.
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
                                  src="/img/jobboard/stu_test_paper.png"
                                />
                              </i>
                              <span>
                                Redeem Deal Coupons
                                <div className="product-idea">
                                  <p>
                                    Customers can redeem the deal coupons at
                                    vendor/merchant stores
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
              {MerchantTab && (
                <>
                  <div id="tab3" className="costomer_tab rj MerchantTab">
                    <div className="row">
                      <div className="col-lg-4 col-md-3 ">
                        <div className="costomer_tab_right costomer_tab_rightleft2">
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/grouponclone/groupon_user_mobile.png"
                            alt="Staff"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left costomer_tab_leftright2">
                          <ul>
                            <li>
                              <i>
                                {" "}
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  src="/img/jobboard/Request_management.png"
                                  alt="Business Search"
                                />
                              </i>
                              <span>
                                Secure Register/Login
                                <div className="product-idea">
                                  <p>
                                    Merchant is able to login or register
                                    securely.
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
                                  src="/img/jobboard/review_feature.png"
                                  alt="Business Listing"
                                />
                              </i>
                              <span>
                                Manage Account
                                <div className="product-idea">
                                  <p>
                                    Manage his business account and personal
                                    information from here.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                {" "}
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  src="/img/jobboard/equipment-management.png"
                                  alt="Business Detail"
                                />
                              </i>
                              <span>
                                Manage Deals
                                <div className="product-idea">
                                  <p>
                                    Merchant can manage(add, edit, delete) the
                                    deals.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                {" "}
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  src="/img/jobboard/email.png"
                                  alt="Offers Section"
                                />
                              </i>
                              <span>
                                Redeem Voucher
                                <div className="product-idea">
                                  <p>
                                    Merchant can redeem the voucher of deals
                                    purchased by the customer. Once the voucher
                                    is redeemed, order will show in the order
                                    history.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                {" "}
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  src="/img/jobboard/eBay_5.png"
                                  alt="Review Feature"
                                />
                              </i>
                              <span>
                                View Order History
                                <div className="product-idea">
                                  <p>
                                    Merchant can view all the orders booked from
                                    the customer.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                {" "}
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  src="/img/jobboard/manage_pages.png"
                                  alt="Review Feature"
                                />
                              </i>
                              <span>
                                Manage Wallet
                                <div className="product-idea">
                                  <p>
                                    Merchant can view the received amount
                                    listing with order and can view withdraw
                                    listing here. They send withdrawal requests
                                    to the admin also.
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
              What does our <span>Groupon Clone script</span> offer?
            </h2>
            <p align="justify">
              Our Groupon Clone script facilitates the customers to search for
              available deals according to their location. They can search for
              deals in their city or look for them using different categories
              and subcategories. After viewing the details of a deal, a customer
              can add the deals to their cart. We at <strong>Logicspice</strong>{" "}
              offer a readymade groupon clone app which allows customers to
              purchase deals by making payment through an integrated payment
              gateway. Customers can view details of the business owner who has
              uploaded the deals and can see the other deals that are similar to
              their deals.{" "}
            </p>
            <p align="justify">
              Our daily deal software allows business owners to register to the
              website to post deals. They can post a deal by entering various
              details along with posting pictures of the deal. Business owners
              can manage their deals that they put on the website, by editing or
              deleting them.
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
                subscription-based hassle-free model, available at just USD 145
                per month.
              </p>
              <p>Key Benefits:</p>
              <ul>
                <li>
                  <span>
                    Experience convenience like never before with our
                    subscription-based hassle-free model, available at just USD
                    145 per month.
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
                    Timely Upgrades: Seamlessly transition to upgraded versions
                    at regular intervals, all at no extra cost.
                  </span>
                </li>
                <li>
                  <span>
                    Zero Setup Fees:- There are no additional charges for the
                    setup and installation of the software, making it easier for
                    customers to get started.
                  </span>
                </li>
                <li>
                  <span>
                    Unlimited Deal Postings: Post as many deals as you need
                    without any limitations.
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
//                     <SoftwareEnquiry
//                       modalStatus={showModal}
//                       toggle={openModal}
//                       title="Please fill the form below and get access to the live demo of Groupon Clone Script.
// See how it work yourself!"
//                     />

<GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of Groupon Clone. See how it works yourself!"
                      />
                  }
                </div>
                <Link className="btn fiverr-buys" href="/buy-now/groupon-clone">
                  Buy Now
                </Link>
              </div>
              <div className="jocpp">
                <ul className="job-pr-icon">
                  <li>
                  <i class="fa fa-globe" aria-hidden="true"></i>
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
                    <p>32 Reviews</p>
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
              Best Partner Company For Your Technological Solutions!
            </h2>
            <br />
            <div className="logic-parter">
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
              <Whylogicspice open={showInfo} />
            </div>
          </div>
        </div>
      </section>

      <section className="used_technology_section" id="technologies">
        <div className="container">
          <h4 className="title_main">
            <span>Used Technologies</span> and Server Requirements
          </h4>
          <div className="row used_technology_section_dataa">
            <div className="col-sm-6">
              <ul>
                <li data-aos="fade-up" className="aos-init aos-animate">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/jobboard/LaravelLogo.png"
                      alt="CakePHP Development"
                    />
                  </div>
                  <div className="icntechimg_nm">Laravel</div>
                </li>
                <li data-aos="fade-up" className="aos-init aos-animate">
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
                <li data-aos="fade-up" className="aos-init aos-animate">
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
                <li data-aos="fade-up" className="aos-init aos-animate">
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
                <li data-aos="fade-up" className="aos-init aos-animate">
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
                <li data-aos="fade-up" className="aos-init aos-animate">
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
                  <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                  Safari 5+, IE 9+
                </li>
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Framework - </b> Laravel 6
                </li>
                <li className="same aos-init aos-animate" data-aos="fade-up">
                  <b>Language - </b> PHP 7.2 Supported, AJAX, jQuery
                </li>
                <li className="other aos-init aos-animate" data-aos="fade-up">
                  <b>Design - </b> HTML 5, CSS 3, Bootstrap4, JavaScript
                </li>
                <li className="other aos-init aos-animate" data-aos="fade-up">
                  <b>Database – </b> MySQL 5.5+
                </li>
                <li className="other aos-init aos-animate" data-aos="fade-up">
                  <b>Server – </b> Apache 2.4+
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
                    width={50}
                    height={100}
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Support</div>
              </li>
              <li data-aos="fade" className="aos-init aos-animate">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    width={50}
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
                    width={50}
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

      <section className="su_rev_section" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className="title_main">Customer Reviews</h4>
              <div className="row">
                <div className="col-md-5">
                  <div className="outof_rating">
                    <div className="main-rait">
                      <span>
                        <i className="fa fa-star"></i>{" "}
                        <span>4.0 out of 5 stars</span>
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
                      <div className="people_star_num">24</div>
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
                    title="Groupon Clone Script"
                  />
                </div>
                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;Great work – I installed this Groupon Clone and it
                      is working properly. I appreciate logicspice and their
                      support team, Thank you!&quot;
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
                      <span id="client-name">Clark - Methew, Canada</span>{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          width={20}
                          height={100}
                          src="/img/grouponclone/canada_flag_img.png"
                          alt="mobile app development in USA"
                          style={{ width: "20px", marginLeft: "3px" }}
                        />
                      </span>
                    </div>
                  </div>

                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;I bought this script from logicspice and it has no
                      bugs. They provide me the full support and installed it
                      for me and also fixed some issues related to my queries.
                      Timely response to my emails. Worth for money.&quot;
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
                      Rafish Saabdeen, Dubai [UAE]{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          width={20}
                          height={100}
                          src="/img/grouponclone/uae_flag_iimg.png"
                          alt="mobile app development in USA"
                          style={{ width: "20px", marginLeft: "3px" }}
                        />
                      </span>
                    </div>
                  </div>

                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;We have tried several software for the Groupon Clone
                      purpose. They are full of bugs and some others are so slow
                      but the logicspice Groupon Clone is working very fast and
                      accurately. It has all the features that a directory
                      should have. I recommend logicspice for ready-made PHP
                      scripts, professional softwares &amp; great customer
                      service.&quot;
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
                      Adom, USA{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          width={20}
                          height={100}
                          src="/img/grouponclone/usa_flag_img.png"
                          alt="mobile app development in USA"
                          style={{ width: "20px", marginLeft: "3px" }}
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
                      How can a customer search for deals around his location?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Location of customers is auto detected on the website or
                      customers can select their city on the website and all the
                      deals available nearby will be listed to the customer.
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
                      Can the Customer give a rating to a deal even if they
                      haven&apos;t purchased it?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No. Customers can give ratings for the deal only after
                      they purchase the deal. Customers can also write a review
                      along with the rating.
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
                      Can a Business Owner upload multiple deals to the website?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, Business Owners can add more than one deal with
                      multiple pictures and other details.
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
                      Are there any hidden charges or installation charges ?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No. we don&apos;t have any type of hidden charges and
                      after buying a product, installation will be done from our
                      end which will be free.{" "}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content_area feature_inner" id="features">
        <div className="container">
          <h2 className="title_main">Groupon Clone Script Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/grouponclone/groupon_home.png"
                    alt="Search Projects"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Home</div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/grouponclone/list.png"
                    alt="Backed projects"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Business Listing</div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/grouponclone/business.png"
                    alt="View Creator"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">List your Business</div>
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
                    title=" Groupon Clone Script"
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
                            src="/img/grouponclone/job-board-logo.png"
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
                    href="/recruitment-management-software"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Recruitment Management Software</h3>
                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            width={250}
                            height={100}
                            src="/img/grouponclone/rms_new.png"
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
                    href="/equipment-rental-software"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Equipment Rental Script</h3>
                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            width={250}
                            height={100}
                            src="/img/grouponclone/equipment_logo_new.png"
                            alt="Equipment Rental Script"
                            className=""
                          />
                        </div>
                        <p>
                          <span>
                            Advanced equipment rental software for renting
                            equipment tools.
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
