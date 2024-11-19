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
import "../../../../public/css/font-awesome.css"

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [jobportal, setJobportal] = useState(false);
  const toggleJobPortalModal = () => setJobportal(!jobportal);
  const [demoAccessModal, setDemoAccessModal] = useState(false);


  const openDemoAccessModal = () => {
    // console.log(showModal);

    setDemoAccessModal(!demoAccessModal);
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

  const toggleModal = () => {
    setModalOpen(!modalOpen);
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
  const [activeTab, setActiveTab] = useState("tab2");
  const [sellerTab, setSellerTab] = useState(false);
  const [buyerTab, setBuyerTab] = useState(true);
  const [adminTab, setAdminTab] = useState(false);

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

  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        BaseAPI + "/product/Details/rental-property-management-software"
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
      <section className="paid-pro job-portal-banner fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg property-banner-new">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>Property Rental Script</h1>
              <div className="both-left-p-sec">
                <h2>
                  Manage all the rentals, residential or commercial with this
                  rental software.
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
                  <div
                    className=" btn-get"
                    onClick={openDemoAccessModal}
                    style={{ textAlign: "center" }}
                  >
                    <a>Get Demo Access!</a>
                    {
//                       <SoftwareEnquiry
//                         modalStatus={showModal}
//                         toggle={openModal}
//                         title="Please fill the form below and get access to the live demo of Property Rental Software.
// See how it work yourself!"
//                       />
<GetDemoEnquiry
                    modalStatus={demoAccessModal}
                    toggle={openDemoAccessModal}
                    title="Please fill the form below and get access to the live demo of Property Rental Software.
 See how it works yourself!!"
                  />
                    }
                  </div>
                  <Link
                    className="btn fiverr-buys NewGreenBtnJob"
                    href="/buy-now/rental-property-management-software"
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
                    <p>30 Reviews</p>
                  </div>
                </div>
              </div>
              <div className="jocpp">
                <ul className="job-pr-icon">
                  <li>
                    <i
                      className="fa fa-globe"
                      aria-hidden="true"
                    ></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                <Image unoptimized={true}
                  width={450}
                  height={100 / (100 / 100)}
                  alt="Rental_Property_Management_Software"
                  src="/img/softwares-banner-img/rental-property-banner-img.png"
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
                  <Link href="/softwares">Softwares</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Property Rental Script
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            Take our online property rental management software application
            similar to airbnb clone script on your smart mobile phones. Mobile
            application will provide all the features of the website. Get in
            touch with Logicspice today to get a vacation rental app developed
            for your business.
          </p>
        </div>
      </section>
      <section
        className="client-say service-market-say"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-market-ttd">
                <ul>
                  <li>
                    Search property by city, area, category, price range,
                    availability with this vacation rental script.
                  </li>
                  <li>
                    Property owner can manage their listing, reviews, amenities,
                    price, location.
                  </li>
                  <li>
                    Customers can manage their reservations, invoices, bookings
                    at airbnb clone script.
                  </li>
                  <li>
                    Customer can contact owner for the enquiry via message or
                    available contact form.
                  </li>
                  <li>
                    The vacation rental software is seo friendly to increase the
                    readability of search engine.
                  </li>
                  <li>
                    Property rental script is fully optimized for mobile devices
                    and works perfectly on all screen size.
                  </li>
                  <li>Responsive website (mobile friendly)</li>
                  <li>White labeled script </li>
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
            <h2 className="taxt_tt_job">Vacation Rental Script Features</h2>
          </div>

          <div className="tatxt_txt_job text-center">
            We can provide customized android & ios app for rental software as
            per your business requirement. Our property rental software
            application will let persons to book properties easily and owner can
            manage it&apos;s apartment very effectively.
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
                  <a>Users/Owner</a>
                </li>
                <li
                  id="tab2_li"
                  className={`rental_guest ddlj ${buyerTab ? "active" : ""}`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Tenants/Guest</a>
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
                  <div className="costomer_tab rj" id="tab1">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right costomer_tab_rightleft">
                          <Image unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/rentalproperty/rental-property-owner.png"
                            alt="Users/Owner"
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
                                  src="/img/jobboard/ragister-icon.png"
                                />
                              </i>
                              <span>
                                Owner Registration
                                <div className="product-idea">
                                  <p>
                                    Owner can register on the portal for posting
                                    the Rental Property.
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
                                  src="/img/jobboard/manage-notifi.png"
                                />
                              </i>
                              <span>
                                Notifications for Alerts
                                <div className="product-idea">
                                  <p>
                                    Owner can receive the notifications for
                                    Updates.
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
                                  src="/img/jobboard/blocked_date.png"
                                />
                              </i>
                              <span>
                                Manage Block Dates
                                <div className="product-idea">
                                  <p>
                                    Owner can add block date for specific
                                    Apartments by adding start date & end date
                                    when it will be block. Owner will be able to
                                    delete the block dates
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
                                  src="/img/jobboard/apar_book_history.png"
                                />
                              </i>
                              <span>
                                View Bookings
                                <div className="product-idea">
                                  <p>
                                    Owner can view all bookings for rental
                                    property done by Tenants.{" "}
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
                                  src="/img/jobboard/post_management.png"
                                />
                              </i>
                              <span>
                                Post apartment
                                <div className="product-idea">
                                  <p>
                                    Property managers or owner post their
                                    apartment and upload picture of apartment,
                                    Address and details.
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
                                  src="/img/jobboard/manage_calendar.png"
                                />
                              </i>
                              <span>
                                View Calendar
                                <div className="product-idea">
                                  <p>
                                    Owner can view the calendar for specific
                                    Apartments with highlight on dates.
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
                                  src="/img/jobboard/manage_messages.png"
                                />
                              </i>
                              <span>
                                Manage requests module
                                <div className="product-idea">
                                  <p>
                                    Owner can see a list of requests received
                                    for a property and accept or reject any
                                    request.
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
                                  src="/img/jobboard/user_profile.png"
                                />
                              </i>
                              <span>
                                Manage Profile
                                <div className="product-idea">
                                  <p>
                                    Owner can view their profile & can also
                                    manage(add/edit/delete) their profile.
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
                                  src="/img/jobboard/add_apartment.png"
                                />
                              </i>
                              <span>
                                Add Apartment
                                <div className="product-idea">
                                  <p>
                                    Owner can add the Apartments by entering
                                    apartment name, address, description, house
                                    rules, contact information, accommodation
                                    information, amenities information etc.
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
                                  src="/img/jobboard/manage_apartment.png"
                                />
                              </i>
                              <span>
                                Manage Apartment
                                <div className="product-idea">
                                  <p>
                                    Owner can manage the listing edit/delete the
                                    listing and its details from the website.
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
                                  src="/img/jobboard/reviews_ratings.png"
                                />
                              </i>
                              <span>
                                Adding Reviews & Ratings
                                <div className="product-idea">
                                  <p>Adding Reviews & Ratings</p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/spec_price.png"
                                />
                              </i>
                              <span>
                                Manage special price
                                <div className="product-idea">
                                  <p>
                                    Owner can add special price for the
                                    Apartments by adding start date, end date,
                                    rate per night for 10 guest & cost per
                                    additional guest etc.
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
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right">
                          <Image unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/rentalproperty/rental-property-guest.png"
                            alt="Tenants/Guest"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left">
                          <ul>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/view_order.png"
                                />
                              </i>
                              <span>
                                View apartment List
                                <div className="product-idea">
                                  <p>
                                    Tenants can view the list of apartments.
                                    Apartments listing will contain apartments
                                    name, address, price, view details using
                                    video, book now button, reviews & ratings
                                    etc.
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
                                  src="/img/jobboard/view_apartment.png"
                                />
                              </i>
                              <span>
                                View apartment details
                                <div className="product-idea">
                                  <p>
                                    Tenants can select an apartment from the
                                    listing and view details like, pictures of
                                    apartment, title, description.
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
                                  src="/img/jobboard/search_apartment.png"
                                />
                              </i>
                              <span>
                                Search Apartment
                                <div className="product-idea">
                                  <p>
                                    Tenants can search apartments by keywords,
                                    no. of bedrooms, baths, category, min rent,
                                    max rent.
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
                                  src="/img/jobboard/get_email.png"
                                />
                              </i>
                              <span>
                                Get automatic email
                                <div className="product-idea">
                                  <p>
                                    Tenants and landowners can receive email
                                    when they sign up, forgot password, fill
                                    contact form.
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
                                  src="/img/jobboard/sort_apartment.png"
                                />
                              </i>
                              <span>
                                Global Search & Sorting feature
                                <div className="product-idea">
                                  <p>
                                    Tenant can search using global search on the
                                    website which will give relevant output to
                                    it. Tenant can apply the sorting on the
                                    output they have received such as
                                    Popularity, Price, Area & Rating.
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
                                  src="/img/jobboard/view_map.png"
                                />
                              </i>
                              <span>
                                View By Map
                                <div className="product-idea">
                                  <p>
                                    Tenant can view the Apartments using Google
                                    map.
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
                                  src="/img/jobboard/upcoming_eve.png"
                                />
                              </i>
                              <span>
                                Upcoming Events
                                <div className="product-idea">
                                  <p>
                                    Tenant can view the Events which are
                                    displayed on the Property rental Application
                                    with Date, Description & Image.
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
                                  src="/img/jobboard/book_apartment.png"
                                />
                              </i>
                              <span>
                                Send Booking Request
                                <div className="product-idea">
                                  <p>
                                    Tenants can send booking requests to owner
                                    by choosing the start date and end date of
                                    the rental period.
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
                                  src="/img/jobboard/Ser_provider_ragis.png"
                                />
                              </i>
                              <span>
                                Chat module&apos;s
                                <div className="product-idea">
                                  <p>
                                    Tenants/Owner can send message in real time
                                    and able to view tenants whether they are
                                    online or offline.
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
                                  src="/img/jobboard/filter_project.png"
                                />
                              </i>
                              <span>
                                Filter search
                                <div className="product-idea">
                                  <p>
                                    Tenants can filter the results by location,
                                    price, No. of bedrooms, bathrooms, apartment
                                    category.
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
                                  src="/img/jobboard/contact.png"
                                />
                              </i>
                              <span>
                                Contact Us
                                <div className="product-idea">
                                  <p>
                                    Tenants and owner can fill the information
                                    or can provide feedback in contact us form.
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
                                  src="/img/jobboard/check_availability.png"
                                />
                              </i>
                              <span>
                                View availability
                                <div className="product-idea">
                                  <p>
                                    Tenants can rate a machine, writing a review
                                    and also browse through previously given
                                    reviews.
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
                            src="/img/rentalproperty/rental-property-admin.png"
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
                                  src="/img/jobboard/secure_login.png"
                                />
                              </i>
                              <span>
                                Secure Login
                                <div className="product-idea">
                                  <p>
                                    Admin can login securely on Property Rental
                                    Application. Admin can reset password & can
                                    do forgot password.
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
                                  src="/img/jobboard/admin_dash.png"
                                />
                              </i>
                              <span>
                                Admin Dashboard
                                <div className="product-idea">
                                  <p>
                                    Admin can access dashboard where admin can
                                    manage Tenants and Owner.
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
                                  src="/img/jobboard/self_profile.png"
                                />
                              </i>
                              <span>
                                Account Settings
                                <div className="product-idea">
                                  <p>
                                    Admin can view the profile & can changes
                                    email & password for the account.
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
                                  src="/img/jobboard/manage_category.png"
                                />
                              </i>
                              <span>
                                Manage Property Category&apos;s
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of property&apos;s
                                    categories which can be manage
                                    (add/edit/delete). Admin can
                                    activate/deactivate the categories which
                                    will get activated at the front end.
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
                                  src="/img/jobboard/manage_bookings.png"
                                />
                              </i>
                              <span>
                                Manage Bookings
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Bookings & can
                                    add the bookings by entering the details of
                                    bookings.
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
                                  src="/img/jobboard/manage_amenities.png"
                                />
                              </i>
                              <span>
                                Manage Amenities
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of amenities & can
                                    manage (add/edit/delete) all amenities.
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
                                  src="/img/jobboard/reviews_ratings.png"
                                />
                              </i>
                              <span>
                                Reviews & Ratings
                                <div className="product-idea">
                                  <p>
                                    Admin can view the Apartments with the
                                    reviews & ratings provided by Tenants.
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
                                  src="/img/jobboard/manage_city.png"
                                />
                              </i>
                              <span>
                                Manage Country/City/State
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of
                                    Country/City/State & can add new
                                    Country/City/State. In listing there will
                                    linking of Country, State & City where admin
                                    will be able to view State by selecting
                                    Country & City by selecting State.{" "}
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
                                  src="/img/jobboard/manage_apartment.png"
                                />
                              </i>
                              <span>
                                Manage Apartments
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Apartments & can
                                    manage(add/edit/delete) Apartments.
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
                                  src="/img/jobboard/upcoming_eve.png"
                                />
                              </i>
                              <span>
                                Manage Events
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Events & can add
                                    new events with detailed information.
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
                                  src="/img/jobboard/manage_faq.png"
                                />
                              </i>
                              <span>
                                Manage FAQs
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of FAQ&apos;s and
                                    can manage(add/edit/delete) it.
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
                                  src="/img/jobboard/pay_transaction.png"
                                />
                              </i>
                              <span>
                                Manage Payment Transaction
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Payment
                                    transactions.
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
              What does our <span>Property Rental Management Software</span>{" "}
              offers you ?
            </h2>
            <p>
              This property rental script will facilitate people to search for
              apartments to rent them and view their details along with the
              amenities so people can opt out property for the vacation rental.
              . Tenants can also view the availability of the apartment
              conveniently using a calendar with this vacation rental script. If
              they are interested in the apartment they can contact the owner or
              they can send them a booking request.
            </p>
            <p>
              Logicspice offers vacation rental software which allows owner to
              post details about their property and manage requests received by
              them for rent. They can manage the availability of their property.
              Property Owners can chat with the people who send them inquiries
              about their property with this property rental script.
            </p>
            <p>
              The vacation rental script similar to airbnb clone, developed by
              logicspice in PHP, MySQL can be used by the various industries
              like house rental, apartment rental, shop rental or any other
              rental business.
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
                    Unlimited Property Listings: List as properties as you need
                    without any limitations.
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
//                     <SoftwareEnquiry
//                       modalStatus={showModal}
//                       toggle={openModal}
//                       title="Please fill the form below and get access to the live demo of Property Rental Software.
// See how it work yourself!"
//                     />
<GetDemoEnquiry
                    modalStatus={demoAccessModal}
                    toggle={openDemoAccessModal}
                    title="Please fill the form below and get access to the live demo of Property Rental Software.
 See how it works yourself!!"
                  />
                  }
                </div>
                <Link
                  className="btn fiverr-buys"
                  href="/buy-now/rental-property-management-software"
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
                    <p>30 Reviews</p>
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
              <a
                className=""
                aria-controls="jobportal"
                onClick={toggleJobPortalModal}
              >
                <i className="fa fa-cogs" aria-hidden="true"></i>
                <span>How It Works</span>
              </a>
              <a onClick={toggleInfo} className="ylogicspice">
                <i>
                  <Image unoptimized={true}
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
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Image unoptimized={true}
              width={900}
              height={100 / (100 / 100)}
              src="/img/rentalproperty/property_rental.jpg"
              alt="icon"
              title=""
              className="img-fluid"
            />
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={toggleJobPortalModal}
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
                      <Image unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/jobboard/tech_cakephp_icon.png"
                        alt="CakePHP Development"
                      />
                    </div>
                    <div className="icntechimg_nm">CakePHP</div>
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
                    <b>Framework - </b> Cakephp
                  </li>
                  <li className="same">
                    <b>Language - </b> PHP 5.4+, AJAX, jQuery
                  </li>
                  <li className="other">
                    <b>Design - </b> HTML 5, CSS 3, JavaScript
                  </li>
                  <li className="other">
                    <b>Database - </b> MySQL 5.5+{" "}
                  </li>
                  <li className="other ">
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
                      <div className="people_star_num">25</div>
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
                      <div className="people_star_num">5</div>
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
                    title=" Property Rental Software"
                  />
                </div>
                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &apos;We needed a customizable property rental system for
                      our rental business to manage our rentals. Logicspice has
                      provided us the right online solution.- Thanks!&apos;
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
                        <Image unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/jobboard/india_flag_img.png"
                          alt="mobile app development in India"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &apos;Recently i bought this script to launch my own
                      rental property management portal from logicspice and it
                      worked really nice. Buying this customizable script is
                      worth for money as they gave me the full source code.
                      Highly recommended.&apos;
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
                        <Image unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;Fast and effective rental script for my property
                      business. Very professional & always put in extra effort
                      and technically strong knowledge. Best after sales
                      support.&quot;
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
                        <Image unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/jobboard/uae_flag_iimg.png"
                          alt="mobile app development in UAE"
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
                    headerTitle="How can a tenant search for properties to rent around their location?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      Tenant can search by selecting the type of property he
                      wants along with the amenities and all the properties
                      matching the criteria will be listed to the tenant.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How can the property owner manage their booking requests that they have received on their properties?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Owners can view a list of booking requests received by
                      them for their properties and can accept or reject them.
                      They can view the duration for which the tenant has sent
                      the request.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How many days will it take to implement the script?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Generally, it takes 7 days to Time taken to implement
                      vacation rental script as per your requirement.{" "}
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can tenant contact a Landowner if they are interested in renting their property?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Yes. Landlords/Tenants can access one to one real time
                      text chat feature over the site. They will be able to view
                      the message sent to them in real time by tenants in their
                      chat box.{" "}
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can a landlord upload more than one property to the website?"
                    collapseId="flush-collapse6"
                  >
                    <p>
                      Yes, Landlords can add more than one properties with
                      multiple pictures and other details of amenities.
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="What information does the tenant is required while sending a booking request to a Landlord?"
                    collapseId="flush-collapse7"
                  >
                    <p>
                      The tenants will choose the start date and end date of the
                      rental period from a calendar. They can see their total
                      rent on the request page along with moving fees.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Along with hosting server details, what other recommendations?"
                    collapseId="flush-collapse8"
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
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>How can a tenant search for properties to rent around their location?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Tenant can search by selecting the type of property he wants along with the amenities, and all the properties matching the criteria will be listed to the tenant.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>How can the property owner manage their booking requests that they have received on their properties?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Owners can view a list of booking requests received by them for their properties and can accept or reject them. They can view the duration for which the tenant has sent the request.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>How many days will it take to implement the script?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Generally, it takes 7 days to implement the vacation rental script as per your requirement.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>Can tenant contact a Landowner if they are interested in renting their property?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. Landlords/Tenants can access one-to-one real-time text chat feature over the site. They will be able to view the messages sent to them in real-time by tenants in their chat box.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography>Can a landlord upload more than one property to the website?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, landlords can add more than one property with multiple pictures and other details of amenities.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
      >
        <AccordionSummary
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography>What information is required from the tenant while sending a booking request to a Landlord?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The tenants will choose the start date and end date of the rental period from a calendar. They can see their total rent on the request page along with moving fees.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel7'}
        onChange={handleChange('panel7')}
      >
        <AccordionSummary
          aria-controls="panel7-content"
          id="panel7-header"
        >
          <Typography>Along with hosting server details, what other recommendations?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We recommend you purchase an SSL certificate along with a hosting server, considering that an SSL certificate is necessary for all websites these days and it provides a secure layer to the website as well.
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
          <h2 className="title_main">Real Estate Script Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    width={1075}
                    height={100 / (100 / 100)}
                    src="/img/rentalproperty/property_rental_sript_apartment_list.jpg"
                    alt="List of Apartment"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">List of Apartment</div>
                  <div className="pro-feat-detai">
                    Sort the list of apartments by popularity, area or rating
                    and book the apartment which suits you need best.
                  </div>
                </div>
              </div>

              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    width={1075}
                    height={100 / (100 / 100)}
                    src="/img/rentalproperty/rental_script_add_apartment.png"
                    alt="Add Apartment"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Add Apartment</div>
                  <div className="pro-feat-detai">
                    Property owner can add multiple properties with apartment
                    details, address, images, rules, and amenities.
                  </div>
                </div>
              </div>

              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    width={1075}
                    height={100 / (100 / 100)}
                    src="/img/rentalproperty/rental_software_search_apartments.jpg"
                    alt="Search Apartment"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Search Apartment</div>
                  <div className="pro-feat-detai">
                    Tenants can search apartments by keywords, no. of bedrooms,
                    baths, category, min rent, max rent.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    width={1075}
                    height={100 / (100 / 100)}
                    src="/img/rentalproperty/vacation_rental_script_manage_property.png"
                    alt="Manage Properties"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Manage Properties</div>
                  <div className="pro-feat-detai">
                    Owner can manage the listing edit/delete the listing and its
                    details from the website.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    width={1075}
                    height={100 / (100 / 100)}
                    src="/img/rentalproperty/vacation_rental_software_apartment_details.jpg"
                    alt="Apartment Details"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Apartment Details</div>
                  <div className="pro-feat-detai">
                    User can check details of apartment include floor, no. of
                    bedroom, amenities, reviews and house rules.
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
                    title="Property Rental Software"
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
