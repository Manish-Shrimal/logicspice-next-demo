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
import Enquirymodal from "@/app/Components/Enquirymodal";
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
import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";
import "../../../../public/css/font-awesome.css";

const Page = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const [activeTab, setActiveTab] = useState("tab2");
  const [renterTab, setRenterTab] = useState(true);
  const [borrowerTab, setBorrowerTab] = useState(false);
  const [adminTab, setAdminTab] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [jobportal, setJobportal] = useState(false);
  const [buyjobportal, setBuyJobportal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const toggleJobPortalModal = () => setJobportal(!jobportal);
  const toggleBuyJobPortalModal = () => setBuyJobportal(!buyjobportal);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const openModal = () => {
    setShowModal(!showModal);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleRenterTab = () => {
    setRenterTab(true);
    setBorrowerTab(false);
    setAdminTab(false);
  };
  const handleBorrowerTab = () => {
    setRenterTab(false);
    setBorrowerTab(true);
    setAdminTab(false);
  };
  const handleAdminTab = () => {
    setRenterTab(false);
    setBorrowerTab(false);
    setAdminTab(true);
  };

  const opendiv = (tab) => {
    setActiveTab(tab);
  };

  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        BaseAPI + "/product/Details/equipment-rental-software"
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

  return (
    <>
      <NavBar />
      <section className="paid-pro job-portal-banner  fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg equipment-banner-new">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>Equipment Rental Script</h1>
              <div className="both-left-p-sec">
                <h2>
                  Best equipment rental management software for renting
                  equipment tools.
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
                          src="/img/softwares-banner-img/more-info.png"
                          alt=""
                          width={100}
                          height={100}
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
                      //     <SoftwareEnquiry
                      //       modalStatus={showModal}
                      //       toggle={openModal}
                      //       title="Please fill the form below and get access to the live demo of Equipment Rental Script
                      // .See how it work yourself!"
                      //     />

                      <GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of Equipment Rental Script. See how it works yourself!"
                      />
                    }
                  </div>
                  <Link
                    className="btn fiverr-buys"
                    href="/buy-now/equipment-rental-software"
                  >
                    Buy Now
                  </Link>
                </div>
                <div className="SubscriptionPrice">
                  <div className="line-border NewLineBoader">
                    <Image
                      unoptimized={true}
                      alt="crowd_funding_script"
                      src="/img/jobboard/stars.png"
                      width={100}
                      height={100}
                    />
                    <p>38 Reviews</p>
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
                <Image
                  unoptimized={true}
                  alt="Equipment Rental"
                  src="/img/softwares-banner-img/equipment-banner-img.png"
                  width={400}
                  height={500 / (100 / 100)}
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
                  Equipment Rental Script
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            Take our online equipment rental management software application on
            your smart mobile phones. Mobile application will provide all the
            features of the website. Get in touch with Logicspice today to get
            an Equipment Rental script app developed for your online rental
            management system business.
          </p>
        </div>
      </section>
      <section className=" " style={{ background: "#fff", padding: "60px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 job-video">
              <iframe
                src="https://player.vimeo.com/video/794842326?h=daac5fd3fb&loop=1&color=451095&byline=0?rel=0&autoplay=0"
                width="100%"
                height="312"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-md-6">
              <div className="job-portal-ttd" style={{ width: "100%" }}>
                <ul>
                  <li style={{ width: "100%" }}>
                    Charge borrower for renting the equipment on weekly, daily
                    or hourly basis.
                  </li>
                  <li style={{ width: "100%" }}>
                    Automatic email notifications send to the renter and
                    borrower on new request and review.
                  </li>
                  <li style={{ width: "100%" }}>
                    This equipment rental script is specially designed for high
                    rate performance so it can work with heavy database.
                  </li>
                  <li style={{ width: "100%" }}>
                    Easily install this equipment rental software in your system
                    by following some steps.
                  </li>
                  <li style={{ width: "100%" }}>
                    The script comes with seo friendly URLs to increase the
                    readability of the search engine.
                  </li>
                  <li style={{ width: "100%" }}>
                    Equipment booking software is fully optimized for mobile
                    devices and works perfectly on all screen size.
                  </li>
                  <li style={{ width: "100%" }}>
                    Responsive website (mobile friendly)
                  </li>
                  <li style={{ width: "100%" }}>White labeled script </li>
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
            <h2 className="taxt_tt_job">Equipment Rental Script Features</h2>
          </div>

          <div className="tatxt_txt_job">
            We can provide customized android & ios app for equipment rental
            management as per your business requirement. Our equipment rental
            software application will let customers borrow equipment easily and
            renter can manage equipment very effectively.
          </div>

          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job">
              <ul className="fiverrClone">
                <li
                  id="tab1_li"
                  className={`renter_user ddlj ${renterTab ? "active" : ""}`}
                  onClick={() => handleRenterTab()}
                >
                  <a>Renter</a>
                </li>
                <li
                  id="tab2_li"
                  className={`borrower_user ddlj ${
                    borrowerTab ? "active" : ""
                  }`}
                  onClick={() => handleBorrowerTab()}
                >
                  <a>Borrower</a>
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
              {renterTab && (
                <>
                  <div className="costomer_tab rj" id="tab1">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right costomer_tab_rightleft">
                          <Image
                            unoptimized={true}
                            src="/img/equipment-rental/equipment-renter.webp"
                            alt="Renter"
                            width={400}
                            height={100}
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
                                  alt="img"
                                  src="/img/jobboard/ragister-icon.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Renter Registration
                                <div className="product-idea">
                                  <p>
                                    Renter can register on the portal for
                                    selling equipment&apos;s or machines.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/find-hire-fre.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Hire Operator
                                <div className="product-idea">
                                  <p>
                                    Renter can hire Operators for
                                    Equipment&apos;s & Machines by viewing their
                                    profile, experience & salary expected
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/borrow_request.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Order Request
                                <div className="product-idea">
                                  <p>
                                    Renter can view the details of Order Request
                                    which are accepted. Renter can send dispute
                                    order request.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/search_machine_location.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Search machine by location
                                <div className="product-idea">
                                  <p>
                                    Renter can manage status of equipment&apos;s
                                    or machines as available or not available
                                    which will get reflected to front end
                                    equipment listing.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_messages.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Message Section
                                <div className="product-idea">
                                  <p>
                                    Renter & Borrower can communicate with each
                                    other using Equipment Rental Application.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_user_acc.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Post Equipment
                                <div className="product-idea">
                                  <p>
                                    Renter can post a new equipment from the
                                    manage equipment page by entering required
                                    details.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_user_machine.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Equipment Management
                                <div className="product-idea">
                                  <p>
                                    Renter can manage all his machines at one
                                    place which includes adding, editing or
                                    deleting equipments.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_user_req.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage machine request
                                <div className="product-idea">
                                  <p>
                                    Renter can manage multiple requests for
                                    multiple equipments at one place.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/view_order.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Accept/Reject Request
                                <div className="product-idea">
                                  <p>
                                    Renter can see a list of requests received
                                    for a equipment by the borrowers.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/Ser_provider_ragis.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Notifications and send message
                                <div className="product-idea">
                                  <p>
                                    Renter and Borrower can receive automatic
                                    notifications and emails regarding their
                                    activities.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/get_paid.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                payment gateway
                                <div className="product-idea">
                                  <p>
                                    Renter can pay for the purchased items by
                                    paying safely through an integrated payment
                                    gateway.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_order.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Cart
                                <div className="product-idea">
                                  <p>
                                    Renter can also purchase the
                                    equipment&apos;s or machines if needed
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
              {borrowerTab && (
                <>
                  <div className="costomer_tab rj active" id="tab2">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right">
                          <Image
                            unoptimized={true}
                            src="/img/equipment-rental/equipment-borrower.webp"
                            alt="Borrower"
                            width={400}
                            height={100}
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
                                  src="/img/jobboard/manage-dashboard.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Borrower Dashboard
                                <div className="product-idea">
                                  <p>
                                    Borrower can manage their account settings
                                    and see their personal info over the
                                    dashboard.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_profile.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage own profile
                                <div className="product-idea">
                                  <p>
                                    Borrower can view their profile & can also
                                    manage(add/edit/delete) their profile.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/borrow_request.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Borrow Request
                                <div className="product-idea">
                                  <p>
                                    Borrower can send borrow request from
                                    equipment detail page by choose the dates of
                                    equipment rental.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/view_detail.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                View request
                                <div className="product-idea">
                                  <p>
                                    Borrower can view all request for
                                    equipment&apos;s done by them. Borrower can
                                    view the status of the request as its
                                    pending/accepted etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/chace_notifications.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Check Notifications
                                <div className="product-idea">
                                  <p>
                                    Renter and borrower can get notified about
                                    their important update on their dashboard.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_wishlist.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage wishlist
                                <div className="product-idea">
                                  <p>
                                    Borrower can add the equipment in the
                                    Wish-list and can remove the
                                    equipment&apos;s from wish-list.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_order.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Cart
                                <div className="product-idea">
                                  <p>
                                    Borrower can add the equipment into the cart
                                    which can be manage(add/edit/delete) by
                                    Borrower
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
                                Borrow Listings
                                <div className="product-idea">
                                  <p>
                                    Borrower can view the list of his borrow
                                    requests and current status of the requested
                                    for equipment.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/search_machine.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Equipment Search
                                <div className="product-idea">
                                  <p>
                                    Borrower can search for equipment to rent
                                    and purchase using categories, subcategories
                                    and keyword.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/search_machine_location.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Search machine by location
                                <div className="product-idea">
                                  <p>
                                    Borrower can apply search with filters which
                                    will provide the best output for their
                                    equipment search. Borrower can apply sorting
                                    on the equipment&apos;s.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/view_machine.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Equipment Detail
                                <div className="product-idea">
                                  <p>
                                    Borrower can see equipment details like
                                    title, categories, subcategories, Images,
                                    description etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/reviews_ratings.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Review & Rating
                                <div className="product-idea">
                                  <p>
                                    Borrower can rate a machine, writing a
                                    review and also browse through previously
                                    given reviews.
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
                          <Image
                            unoptimized={true}
                            src="/img/equipment-rental/equipment_admin_mac.webp"
                            alt="Admin Panel"
                            width={400}
                            height={100}
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
                                    Admin can login securely on Equipment Rental
                                    Portal. Admin can reset password & can do
                                    forgot password.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_configur.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Mange Configuration
                                <div className="product-idea">
                                  <p>
                                    Admin can configure the app/website through
                                    the configuration section.
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
                                    Admin can access dashboard where admin can
                                    manage Renter, Borrower and Operator.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_renter.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Renter
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of renters & can
                                    manage (add/edit/delete)all Renters which
                                    are registered
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_borrowers.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Borrowers
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of borrowers & can
                                    manage (add/edit/delete)all Borrowers which
                                    are registered.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_machine.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Machine
                                <div className="product-idea">
                                  <p>
                                    Admin can manage the list of machines
                                    displayed on the website/app and
                                    add/edit/delete them
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/view_order.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Order Request
                                <div className="product-idea">
                                  <p>
                                    Admin can see the Orders which are placed by
                                    Borrower from Front End.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/reviews_ratings.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Rating
                                <div className="product-idea">
                                  <p>
                                    Admin can view a list of reviews that were
                                    given to the Renter and delete them if they
                                    find it in appropriate.
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
                                Mange Category
                                <div className="product-idea">
                                  <p>
                                    Admin can manage(add/edit/delete) the
                                    category&apos;s of equipment/machine.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/post_management.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Post Management
                                <div className="product-idea">
                                  <p>
                                    Admin can view the post of new
                                    equipment&apos;s which are available with
                                    them.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_service.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Operator Management
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of operators & can
                                    manage (add/edit/delete)all Operators.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_contents.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Contents
                                <div className="product-idea">
                                  <p>
                                    Admin will be able to
                                    manage(add/edit/delete) all the
                                    Content(text, images & videos) displayed on
                                    the Front end.
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
              What does our <span>Equipment Rental Management Software</span>{" "}
              offer you ?
            </h2>
            <p>
              Our online{" "}
              <strong>
                <i>Equipment Rental</i>
              </strong>{" "}
              script will facilitate users to rent and sell their
              equipments/machines/auto parts over the app/website. There will be
              3 types of users: Renter/Supplier, Customer/Borrower borrower and
              Operator.
            </p>
            <p>
              Renter will be able to post his machines over the app/website with
              images and description. Logicspice offers{" "}
              <strong>
                <i>equipment rental software</i>
              </strong>
              which allow borrower to search machines over the app and send
              borrow request to the renter. Renter will get the notification and
              can accept or reject the request.
            </p>
            <p>
              Machine rental App or website will also facilitate renter to hire
              machine operators, equipment operators can post their picture,
              experience and salary. This{" "}
              <strong>
                <i>equipment rental software</i>
              </strong>{" "}
              lets people run their own business cost effectively.
            </p>
            <p>
              Our user friendly{" "}
              <strong>
                <i>equipment rental system</i>
              </strong>{" "}
              can be easily integrated into any website and customized as per
              your need.
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
                    Unlimited Equipment Listings: List as many equipment
                    requirements as you need without any limitations.
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
                    //     title="Please fill the form below and get access to the live demo of Equipment Rental Script
                    // .See how it work yourself!"
                    //   />

                    <GetDemoEnquiry
                      modalStatus={demoAccessModal}
                      toggle={openDemoAccessModal}
                      title="Please fill the form below and get access to the live demo of Equipment Rental Script. See how it works yourself!"
                    />
                  }
                </div>
                <Link
                  className="btn fiverr-buys"
                  href="/buy-now/equipment-rental-software"
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
                    <Image
                      unoptimized={true}
                      src="/img/jobboard/stars.png"
                      alt=""
                      className="lazy"
                      width={100}
                      height={100}
                    />
                    <p>38 Reviews</p>
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
      <section className="job_portal_area script-update-bg">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Script Update History</h2>
            <br />
            <div className="script-update_title">
              <p>
                V1.0 - March 28th, 2022 - Major updates and improvements
                completed!
              </p>
              <ul>
                <li>
                  <span>Payment gateway integration.(PayPal)</span>
                </li>
                <li>
                  <span>Commission management by administrator.</span>
                </li>
                <li>
                  <span>Subscription plan for renter.</span>
                </li>
                <li>
                  <span>Amount withdrawal process from wallet, by renter.</span>
                </li>
                <li>
                  <span>Featured equipment management.</span>
                </li>
                <li>
                  <span>Notification management.</span>
                </li>
                <li>
                  <span>
                    Register and login via social media like Facebook and Gmail.
                  </span>
                </li>
                <li>
                  <span>
                    Separate listing of equipment requests like
                    &apos;Accepted&apos; or &apos;In progress&apos;,
                    &apos;Completed&apos; and &apos;Pending&apos;.
                  </span>
                </li>
                <li>
                  <span>Dispute Management.</span>
                </li>
                <li>
                  <span>Currency management through third-party API.</span>
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
              src="/img/jobboard/machine_rental.webp"
              alt="icon"
              title=""
              className="img-fluid"
              width={900}
              height={100 / (100 / 100)}
            />
          </Modal.Body>
          {/* <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={toggleJobPortalModal}
            >
              Close
            </button>
          </Modal.Footer> */}
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
              <Slider {...settings}>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://www.simplax.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      simplax.com.br
                    </Link>
                  </div>
                  <Link
                    href="https://www.simplax.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      src="/img/images/simplax.webp"
                      alt="icon"
                      title=""
                      className="img-fluid"
                      width={900}
                      height={100 / (100 / 100)}
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="http://www.waku.ro/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      waku.ro
                    </Link>
                  </div>
                  <Link
                    href="http://www.waku.ro/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      src="/img/images/waku.webp"
                      alt="icon"
                      title=""
                      className="img-fluid"
                      width={900}
                      height={100 / (100 / 100)}
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://yelloh.co.za/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      yelloh.co.za
                    </Link>
                  </div>
                  <Link
                    href="https://yelloh.co.za/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      src="/img/images/yelloh.jpg"
                      alt="icon"
                      title=""
                      className="img-fluid"
                      width={900}
                      height={100 / (100 / 100)}
                    />
                  </Link>
                </div>
              </Slider>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={toggleBuyJobPortalModal}
            >
              Close
            </button>
          </Modal.Footer>
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
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        src="/img/jobboard/LaravelLogo.png"
                        alt="Laravel Development"
                        width={60}
                        height={100}
                      />
                    </div>
                    <div className="icntechimg_nm">Laravel</div>
                  </li>
                  <li data-aos="fade-up">
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
                  <li data-aos="fade-up">
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
                  <li data-aos="fade-up">
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
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list_detail">
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                    Safari 5+, IE 9+
                  </li>
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Framework - </b> Laravel 5.5.41
                  </li>
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Language - </b> PHP 7 Supported, AJAX, jQuery
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Design - </b> HTML 5, CSS 3, Bootstrap 3.3.6, JavaScript
                  </li>
                  <li className="other aos-init" data-aos="fade-up">
                    <b>Database - </b> MySQL 5.5+{" "}
                  </li>
                  <li className="other aos-init" data-aos="fade-up">
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
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                    width={60}
                    height={100 / (100 / 100)}
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
                    width={60}
                    height={100 / (100 / 100)}
                  />
                </div>
                <div className="supportsettingtext">Free Brand Removal</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/free_instal.png"
                    alt="manager_icn"
                    width={60}
                    height={100 / (100 / 100)}
                  />
                </div>
                <div className="supportsettingtext">Free Installation</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/access_secure_code_icon.png"
                    alt="manager_icn"
                    width={60}
                    height={100 / (100 / 100)}
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
                      <div className="people_star_num">33</div>
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
                      <div className="people_star_num">5</div>
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
                    title="Equipment Rental Script"
                  />
                </div>
                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;We needed a customized rental booking system for our
                      rental business to manage our rentals. Logicspice has
                      provided us the right online solution.- Thanks!&quot;
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">Kunal S., India</span>{" "}
                      <span className="ConuntryFlagIcon">
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/india_flag_img.png"
                          alt="mobile app development in INDIA"
                          width={20}
                          height={100}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;Recently I bought this script to launch my own
                      equipment rental management portal from logicspice and it
                      worked really nice. Buying this script is worth for money
                      as they gave me the full source code and I can customize
                      it. Highly recommended.&quot;
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Alena, USA{" "}
                      <span className="ConuntryFlagIcon">
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                          width={20}
                          height={100}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;Fast and effective PHP script for my rental
                      business. They are professional, always put in extra
                      effort and technically strong knowledge. One of the best
                      script providers. Will continue to work with them for an
                      upcoming project.&quot;
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Mohammed Shozeb, UAE{" "}
                      <span className="ConuntryFlagIcon">
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/uae_flag_iimg.png"
                          alt="mobile app development in UAE"
                          width={20}
                          height={100}
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
                    headerTitle="Can borrower give a review/rating even if they have not rented the equipment?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      No. The borrower can only review/rate the product once his
                      request has been accepted by the renter.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="When will the renter/borrower receive emails?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      The users will receive emails whenever they have an
                      update. For example when they sign up, when they have new
                      request or when their request get accepted.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="What kind of equipments can be added to the equipment rental software?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Any type of industrial equipment can be added to the
                      system. Renter can mark if the equipment is for sale or
                      not.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle=" Will there be installation charge when i purchase the product?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      No. the installation of our equipment rental product will
                      be absolutely free of cost.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Once i purchase the equipment rental software, how many days it will take to go online?"
                    collapseId="flush-collapse6"
                  >
                    <p>
                      Time taken to implement depends on the level of
                      customization and data migration. It takes approx 7 days
                      to implement.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I update some design and functionality in application code myself?"
                    collapseId="flush-collapse7"
                  >
                    <p>
                      Yes, You will have access of the all the code, except some
                      of the core encrypted files.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will I be able to use it on multiple domains, after I purchase this script?"
                    collapseId="flush-collapse8"
                  >
                    <p>
                      You will be licensed to use it only for the domain, you
                      purchased for.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse9"
                  >
                    <p>
                      No, You can&apos;t resell the script. All rights will
                      remain with Logicspice only.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Do you offer Money Back Guarantee?"
                    collapseId="flush-collapse10"
                  >
                    <p>
                      Yes, we offer 30 days money back guarantee to ensure
                      customer satisfaction of our softwares. If for any reason,
                      you wish to discontinue using the product, you can ask us
                      for refund. We will refund your total money except the
                      installation and configuration charges, which is USD 65 or
                      20% of application cost, whichever is greater.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Along with hosting server details, what other recommendations?"
                    collapseId="flush-collapse3"
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
                  >
                    <Typography>
                      Can the borrower give a review/rating even if they have
                      not rented the equipment?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No. The borrower can only review/rate the product once
                      their request has been accepted by the renter.
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
                      When will the renter/borrower receive emails?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The users will receive emails whenever they have an
                      update. For example, when they sign up, when they have a
                      new request, or when their request is accepted.
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

                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                  >
                    <Typography>
                      What kind of equipment can be added to the equipment
                      rental software?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Any type of industrial equipment can be added to the
                      system. The renter can mark if the equipment is for sale
                      or not.
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
                      Will there be an installation charge when I purchase the
                      product?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No. The installation of our equipment rental product will
                      be absolutely free of cost.
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
                      Once I purchase the equipment rental software, how many
                      days will it take to go online?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      The time taken to implement depends on the level of
                      customization and data migration. It takes approximately 7
                      days to implement.
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
                      Yes, you will have access to all the code, except some of
                      the core encrypted files.
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
                      purchase this script?
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
                      Can I resell the script? Will I have rights over the
                      script code?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No, you can&apos;t resell the script. All rights will
                      remain with Logicspice only.
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content_area feature_inner" id="features">
        <div className="container">
          <h2 className="title_main">Equipment Rental Software Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/equipment-rental/Manage_Equipment.webp"
                    alt="Equipment Management"
                    width={1075}
                    height={100}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Equipment Management</div>
                  <div className="pro-feat-detai">
                    Renter can manage all his machines at one place which
                    includes adding, editing or deleting equipments.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/equipment-rental/post-equipment.webp"
                    alt="Post Equipment"
                    width={1075}
                    height={100}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Post Equipment</div>
                  <div className="pro-feat-detai">
                    Renter can post a new equipment from the manage equipment
                    page by entering following details : Title, Categories,
                    Images.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/equipment-rental/Accept_Reject_Request.webp"
                    alt="Accept/Reject Request"
                    width={1075}
                    height={100}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Accept/Reject Request</div>
                  <div className="pro-feat-detai">
                    Renter can see a list of requests received for a equipment
                    by the borrowers.Renter can accept or reject any request.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/equipment-rental/Automatic_Email.webp"
                    alt="Notifications and Emails"
                    width={1075}
                    height={100}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Notifications and Emails</div>
                  <div className="pro-feat-detai">
                    Renter and Borrower can receive automatic notifications and
                    emails regarding their activities.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/equipment-rental/Search_Equipment_List_Equipment.webp"
                    alt="Search Equipment/ List Equipment"
                    width={1075}
                    height={100}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">
                    Search Equipment/ List Equipment
                  </div>
                  <div className="pro-feat-detai">
                    Borrower can search for equipment to rent and purchase using
                    categories, subcategories and keyword.
                  </div>
                </div>
              </div>

              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/equipment-rental/Equipment_Detail.webp"
                    alt="Equipment Detail"
                    width={1075}
                    height={100}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Equipment Detail</div>
                  <div className="pro-feat-detai">
                    Borrower can see equipment details like title, categories,
                    subcategories, Images, description etc. over the website.
                  </div>
                </div>
              </div>

              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/equipment-rental/Borrow_Listings.webp"
                    alt="Borrow Listings"
                    width={1075}
                    height={100}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Borrow Listings</div>
                  <div className="pro-feat-detai">
                    Borrower can view the list of his borrow requests that they
                    has sent. Customer can see current status of the requested
                    for equipment.
                  </div>
                </div>
              </div>

              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/equipment-rental/review_rating.webp"
                    alt="Review Feature"
                    width={1075}
                    height={100}
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Review Feature</div>
                  <div className="pro-feat-detai">
                    Borrower can rate a machine, writing a review and also
                    browse through previously given reviews.
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
                    title="Equipment Rental Script"
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
                  <Link href="/crowdfunding-script" title="View Detail" target="_blank">
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Crowdfunding</h3>
                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            src="/img/jobboard/crowdfunding_new.png"
                            alt="Crowdfunding"
                            className=""
                            width={250}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            Fundraising Software like GoFundMe &amp;
                            Kickstarter.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link href="/whatsapp-clone" title="View Detail" target="_blank">
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>WhatsApp Clone App</h3>
                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            src="/img/jobboard/ls-chat-logo.png"
                            alt="WhatsApp Clone App"
                            className=""
                            width={150}
                            height={100}
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
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link href="/groupon-clone" title="View Detail" target="_blank">
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Groupon clone</h3>
                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            src="/img/jobboard/groupon-clone-logo.png"
                            alt="Groupon clone"
                            className=""
                            width={150}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>Daily Deal Software and coupons.</span>{" "}
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
              width={50}
              height={50}
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
