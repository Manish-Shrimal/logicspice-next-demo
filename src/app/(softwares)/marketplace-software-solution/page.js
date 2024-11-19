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
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import EnquiryModal from "@/app/Components/Enquirymodal";
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
              <h1>Marketplace Software</h1>
              <div className="both-left-p-sec">
                <h2>Crafting Online Marketplace Software Solutions</h2>
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
                        title="Marketplace Software"
                      />

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
                  src="/img/marketplacesoftware/marketplace-banner-img.png"
                  alt="Marketplace Software"
                />
              </div>
            </div>
          </div>
          <div className="job-portal-banner-link">
            <div aria-label="breadcrumb" className="my-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="https://www.logicspice.com">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="https://www.logicspice.com/softwares">
                    Softwares
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Marketplace Software Solutions
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            Please check our readymade service marketplace softwares for the
            sectors like freelance&sbquo; logistics&sbquo; rental&sbquo;
            scheduling&sbquo; home cleaning and appointment booking service.
            Click Here to get a demo of the specific marketplace as per your
            requirement.
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
              <li>Innovative Rich Data Dashboard</li>
              <li>Messaging Feature</li>
              <li>One-time Software License</li>
              <li className="FirstMarketplace">Admin Dashboard</li>
              <li>Fully Responsive Web Design</li>
              <li>White labeled Software</li>
              <li>Payment Gateway Integration</li>
              <li className="FirstMarketplace">Review-Rating Feature</li>
              <li>Transactions History</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="job_portal_area">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">
              Marketplace Software Solutions Features
            </h2>
          </div>
          <div className="tatxt_txt_job MarketplaceTxtJob">
            <p>
              Our best marketplace software solutions are designed to
              revolutionize a wide range of industries. From freelance
              professionals seeking opportunities to logistics companies
              streamlining operations&sbquo; and from homeowners in need of
              cleaning services to businesses managing scheduling and
              appointments&sbquo; our platform caters to them all.
            </p>
            <p>
              With the power of our on-demand B2B marketplace software&sbquo; we
              enable seamless transactions&sbquo; efficient service
              delivery&sbquo; and enhanced connectivity. Whether you&apos;re a
              freelance professional looking for gigs&sbquo; a rental service
              provider seeking customers&sbquo; a logistics company optimizing
              routes&sbquo; a homeowner in need of reliable cleaning&sbquo; or a
              business handling appointments and scheduling&sbquo; our platform
              serves as a comprehensive solution.
            </p>
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
                  <a>Customer Panel</a>
                </li>
                <li
                  id="tab2_li"
                  className={`emplyer_app_job ddlj  ${
                    buyerTab ? "active" : ""
                  }`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Vendor Panel</a>
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
                                Registration and Profile Management
                                <div className="product-idea">
                                  <p>
                                    Effortlessly create and personalize user
                                    accounts with robust registration and
                                    profile management tools.
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
                                Browse product/Services
                                <div className="product-idea">
                                  <p>
                                    Discover products and services effortlessly
                                    with streamlined browsing.
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
                                Refine Search
                                <div className="product-idea">
                                  <p>
                                    Fine-Tune Your Search for Precision and
                                    Relevance.
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
                                Account Security and Privacy
                                <div className="product-idea">
                                  <p>
                                    Protect account and data with robust
                                    security measures while maintaining privacy
                                    controls.
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
                                Post Reviews & Ratings
                                <div className="product-idea">
                                  <p>
                                    Contribute with feedback by posting reviews
                                    and ratings.
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
                                View Notifications
                                <div className="product-idea">
                                  <p>
                                    Stay updated and informed with your
                                    notifications.
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
                                Payment Transaction History
                                <div className="product-idea">
                                  <p>
                                    Access payment transaction history with
                                    ease.
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
                                Manage Order/Shipment
                                <div className="product-idea">
                                  <p>
                                    Effortlessly manage orders and shipments as
                                    a customer.
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
                                Shipment/Order Tracking
                                <div className="product-idea">
                                  <p>
                                    Track orders and shipments effortlessly.
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
                                Filters and Sorting
                                <div className="product-idea">
                                  <p>
                                    Enhance search precision with intuitive
                                    filters and sorting options.
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
                                Manage Availability
                                <div className="product-idea">
                                  <p>
                                    Take charge of the availability with easy
                                    schedule management.
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
                                Manage Services
                                <div className="product-idea">
                                  <p>
                                    Easily manage the services with efficiency
                                    and control.
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
                                Manage Outstanding Bookings
                                <div className="product-idea">
                                  <p>
                                    Efficiently manage outstanding bookings for
                                    a streamlined process.
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
                                Accept/Reject Requests
                                <div className="product-idea">
                                  <p>
                                    Easily accept or reject requests for a
                                    seamless process.
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
                                Manage Requests
                                <div className="product-idea">
                                  <p>
                                    Efficiently Manage Requests: Simplify Your
                                    Workflow.
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
                                Manage Events
                                <div className="product-idea">
                                  <p>
                                    Effortlessly Organize Events: Streamline
                                    Your Planning.
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
                                View Bookings
                                <div className="product-idea">
                                  <p>
                                    Easily access and view your bookings for a
                                    hassle-free experience.
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
                                View Reviews & Ratings
                                <div className="product-idea">
                                  <p>
                                    Get valuable insights from reviews and
                                    ratings to make informed decisions.
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
                                Secure Login
                                <div className="product-idea">
                                  <p>
                                    Safeguard the admin access with secure
                                    login.
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
                                Admin Dashboard
                                <div className="product-idea">
                                  <p>
                                    {" "}
                                    Simplify the management tasks with an
                                    intuitive admin dashboard.
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
                                Manage Customers
                                <div className="product-idea">
                                  <p>
                                    Efficiently handle customer profiles and
                                    data as an admin.
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
                                Manage Orders
                                <div className="product-idea">
                                  <p>
                                    Streamline order management tasks from the
                                    admin perspective.
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
                                Manage Services
                                <div className="product-idea">
                                  <p>
                                    Efficiently Manage and Control Services as
                                    an Admin.
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
                                Manage Categories
                                <div className="product-idea">
                                  <p>
                                    Efficiently oversee and manage categories as
                                    an admin.
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
                                Manage Sub-Categories
                                <div className="product-idea">
                                  <p>
                                    Efficiently handle sub-category management
                                    tasks from an admin perspective.
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
                                View Reviews & Ratings
                                <div className="product-idea">
                                  <p>
                                    Access and manage ratings and reviews
                                    seamlessly as an admin.
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
                                Transaction History
                                <div className="product-idea">
                                  <p>
                                    Precision oversight of financial
                                    transactions from an admin standpoint.
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
                                Analytics and Reporting
                                <div className="product-idea">
                                  <p>
                                    Administer Analytics and Reporting with Ease
                                    for Enhanced Control.
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
              What does our Marketplace Softwares do for you?
            </h2>
            <p>
              Logicspice is the custom marketplace development company that
              offers powerful service marketplace software tailored to your
              needs&sbquo; catering to a diverse range of sectors including
              freelance&sbquo; rental&sbquo; logistics&sbquo; home
              cleaning&sbquo; scheduling&sbquo; and appointment booking. Our
              expertise extends to creating versatile multi vendor marketplace
              software and marketplace app development solutions that empower
              businesses to thrive in the digital marketplace landscape.
            </p>
          </div>
        </div>
      </section>
      <section className="laravel_choose_features_section">
        <div className="container">
          <h2>Here&apos;s what our marketplace software can do for you</h2>
          <div className="laravel_choose_features_bx">
            <div className="row">
              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="libraries_laravel_choose">
                  <a
                    href="https://www.logicspice.com/freelancer-clone"
                    target="_blank"
                  >
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
                      <h3>Freelance</h3>
                      <p>
                        Connect freelancers with clients&sbquo; streamline
                        project management&sbquo; facilitate secure
                        payments&sbquo; and enhance collaboration.
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <a
                    href="https://www.logicspice.com/equipment-rental-software"
                    target="_blank"
                  >
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
                      <h3>Rental</h3>
                      <p>
                        Simplify the rental process&sbquo; from listing products
                        to managing bookings&sbquo; payments&sbquo; and customer
                        reviews.
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="libraries_laravel_choose">
                  <a
                    href="https://www.logicspice.com/logistic-marketplace-software"
                    target="_blank"
                  >
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
                      <h3>Logistics</h3>
                      <p>
                        Optimize routes&sbquo; track deliveries&sbquo; manage
                        orders&sbquo; and improve overall logistics efficiency.
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <a
                    href="https://www.logicspice.com/service-marketplace-script"
                    target="_blank"
                  >
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
                      <h3>Home Cleaning</h3>
                      <p>
                        Offer homeowners a platform to find and book reliable
                        cleaning services&sbquo; manage appointments&sbquo; and
                        ensure quality control.
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="libraries_laravel_choose">
                  <a
                    href="https://www.logicspice.com/event-booking-software"
                    target="_blank"
                  >
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
                      <h3>Scheduling</h3>
                      <p>
                        Provide businesses with intuitive scheduling tools to
                        manage appointments&sbquo; reduce no-shows&sbquo; and
                        enhance customer experience.
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div
                className="col-sm-6 col-md-6 aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <a
                    href="https://www.logicspice.com/appointment-scheduling-software"
                    target="_blank"
                  >
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
                      <h3>Appointment Booking</h3>
                      <p>
                        Enable clients to easily book appointments online&sbquo;
                        manage their schedules&sbquo; and receive notifications.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <p className="laravel_core_sub2">
              Our white label software marketplace empowers businesses to expand
              their reach&sbquo; streamline operations&sbquo; and provide a
              seamless experience to their customers. Join us in transforming
              your industry and achieving new heights of success.
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
  title="Marketplace Software"
/>

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
              Logicspice is the best partner for Service Marketplace solutions!
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
                    I have purchased the service marketplace software and have
                    constructed my own website. This was an easy task because of
                    logicspice&apos;s free installation and support. Keep up the
                    good work. I will be back for more customization work in the
                    future.
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
                    Mark Henry&sbquo; Australia
                    <span>
                      <Image
                        unoptimized={true}
                        width={25}
                        height={100}
                        src="/img/jobboard/australia_flag_img.png"
                        alt="mobile app development"
                        style={{ width: "20px", marginLeft: "3px" }}
                      />
                    </span>
                  </div>
                </div>
                <div className="customers_review_sec_row">
                  <div className="customer_review_stext" id="fiveer-clone">
                    This is the best readymade solution I found for my business.
                    Thanks for your great efforts&sbquo; commitment and support
                    while installing the software. Your prompt service regarding
                    a few minor issues was superb and great communication
                    skills.
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
                    <span id="client-name">Davian Smith&sbquo; Italy</span>{" "}
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
                    Recently I bought freelance software based upon gigs from
                    logicspice and it worked really nice&sbquo; it helped my
                    business to gain more efficiency. I recommend it to all who
                    are looking for freelance based models&sbquo; it&apos;s
                    really nice.
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
                    <span id="client-name">Iam Convey&sbquo; USA</span>{" "}
                    <span>
                      <Image
                        unoptimized={true}
                        width={25}
                        height={100}
                        src="/img/jobboard/usa_flag_img.png"
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
                    title="Job Board Software"
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
              {/* <div className="col-md-7">
                <div className="ecommerce__Quick_FAQ">
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel1" ? <RemoveIcon /> : <AddIcon />
                      }
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography>Is the source code modifiable?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Yes, most of the software is completely flexible and
                        clients can customize it as per their requirements.
                        However, 1-2 core files are encrypted due to licensing
                        purposes because we will allow you to run the script on
                        the specific domain for which encryption will be done in
                        1-2 core files; the rest of the code is open to make
                        changes and those encrypted files will be part of the
                        codebase as well.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel2" ? <RemoveIcon /> : <AddIcon />
                      }
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                    >
                      <Typography>
                        How much time will it take to make it live?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        The whole process will take a maximum of 1 week, and the
                        rest depends on your response time and customization
                        requirements.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel3" ? <RemoveIcon /> : <AddIcon />
                      }
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                    >
                      <Typography>
                        How will you deal with bugs and issues in the product?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        We will communicate with you via live chat, phone call,
                        WhatsApp, Skype, and email during our business hours and
                        try to solve your problem as soon as possible.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel4" ? <RemoveIcon /> : <AddIcon />
                      }
                      aria-controls="panel4d-content"
                      id="panel4d-header"
                    >
                      <Typography>
                        Does Logicspice provide technical support?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Yes, we are providing free 3 months technical support on
                        the existing features and functionalities of the
                        software.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel5" ? <RemoveIcon /> : <AddIcon />
                      }
                      aria-controls="panel5d-content"
                      id="panel5d-header"
                    >
                      <Typography>Do I own my software completely?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Yes, you will own the license to use it for the domain
                        you purchased for.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel6" ? <RemoveIcon /> : <AddIcon />
                      }
                      aria-controls="panel6d-content"
                      id="panel6d-header"
                    >
                      <Typography>
                        Do I need to provide a Google Maps API key? If yes, how
                        to generate a Google Map API key?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Yes, you need to provide a map API key. Please follow
                        the steps mentioned in the below URL to generate the
                        Google Maps API key:
                        <a
                          href="https://developers.google.com/maps/documentation/javascript/get-api-key"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Maps API Key
                        </a>
                        . You need to set up your billing details over that.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel7"}
                    onChange={handleChange("panel7")}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel7" ? <RemoveIcon /> : <AddIcon />
                      }
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
                        Yes, you will have access to all the code, except for
                        some of the core encrypted files.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel8"}
                    onChange={handleChange("panel8")}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel8" ? <RemoveIcon /> : <AddIcon />
                      }
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
                        purchased for.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel9"}
                    onChange={handleChange("panel9")}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === "panel9" ? <RemoveIcon /> : <AddIcon />
                      }
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
                        No, you can’t resell the software. All rights will
                        remain with Logicspice only.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div> */}
              <div className="col-md-7">
                <div className="panel-group faq_quick_sec" id="accordion">
                  <MDBAccordion v-model="activeItem" borderless>
                    <MDBAccordionItem
                      headerTitle="Is the source code modifiable?"
                      collapseId="flush-collapse1"
                    >
                      <p>
                        Yes, most of the softwares is completely flexible and
                        clients can customize it as per their requirements.
                        However, 1-2 core files are encrypted due to licensing
                        purposes, because we will allow you to run the script on
                        the specific domain for which encryption will be done in
                        1-2 core files, rest of the code is open to make changes
                        and those encrypted files will be part of the codebase
                        as well.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How much time will it take to make it live?"
                      collapseId="flush-collapse2"
                    >
                      <p>
                        The whole process will take maximum 1 week time and the
                        rest depends on your response time and customization
                        requirements.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How will you deal with bugs and issues in the product?"
                      collapseId="flush-collapse4"
                    >
                      <p>
                        We will communicate with you via live chat, phone call,
                        whatsapp, skype, and email during our business hours and
                        try to solve your problem as soon as possible.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Does logicspice provide technical support?"
                      collapseId="flush-collapse5"
                    >
                      <p>
                        Yes, we are providing free 3 months technical support on
                        the existing features and functionalities of the
                        software.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Do I own my software completely?
"
                      collapseId="flush-collapse6"
                    >
                      <p>
                        Yes, you will own the license to use it for the domain
                        you purchased for.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Do I need to provide a Google Maps API key? If yes, how
                        to generate a Google Map API key?"
                      collapseId="flush-collapse7"
                    >
                      <p>
                        Yes, you need to provide a map API key. Please follow
                        the steps mentioned in the below URL to generate the
                        Google map API key:
                        https://developers.google.com/maps/documentation/javascript/get-api-key.
                        You need to set up your billing details over that.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle=" Can I update some design and functionality in the
                        application code myself?"
                      collapseId="flush-collapse3"
                    >
                      <p>
                        Yes, you will have access to all the code, except for
                        some of the core encrypted files.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Will I be able to use it on multiple domains after I
                        purchase this software?"
                      collapseId="flush-collapse8"
                    >
                      <p>
                        You will be licensed to use it only for the domain you
                        purchased for.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
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
                    </MDBAccordionItem>
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
                  title="Marketplace Software"
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
                    href="/appointment-scheduling-software/"
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
