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
  const [buyerTab, setBuyerTab] = useState(false);
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
        BaseAPI + "/product/Details/food-ordering-script"
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
      <section className="paid-pro job-portal-banner  fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg food-orderung-banner-new">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>UberEats Clone Script</h1>
              <div className="both-left-p-sec">
                <h2>Food Ordering & Delivery Script and Mobile Apps</h2>
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
                  <div className=" btn-get" onClick={openDemoAccessModal} style={{ textAlign: "center" }}>
                    <button>Get Demo Access!</button>
                    {
                      // <SoftwareEnquiry
                      //   modalStatus={showModal}
                      //   toggle={openModal}
                      //   title="Demo Details For Food Ordering PHP Script"
                      // />

                      <GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Demo Details For Food Ordering PHP Script"
                      />
                    }
                  </div>
                  <Link
                    className="btn fiverr-buys NewGreenBtnJob"
                    href="/buy-now/food-ordering-script"
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
                    <p>32 Reviews</p>
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
                    {" "}
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
                <Image unoptimized={true}
                  width={320}
                  height={500 / (100 / 100)}
                  alt="Food Ordering Script"
                  src="/img/softwares-banner-img/food-banner-img.png"
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
                  Food Ordering Script
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            Intuitive Mobile Apps for Restaurants that is Affordable, Scalable &
            Fully Customizable. Get orders and different reports along with
            internal order processing done through the mobile app.{" "}
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
                    Discount Coupon : Generate discount coupons to reduce prices
                    when ordering food online.This can be fixed or in some
                    percentage.
                  </li>
                  <li>
                    Restaurant Menu Builder : Create an attractive restaurant
                    menu organized in categories.{" "}
                  </li>
                  <li>
                    Add Multiple Dishes : Add dishes with details, speciality
                    and more.
                  </li>
                  <li>
                    Payment Integration : Restaurant can receive payment using
                    paypal, credit or debit card or cash on delivery.
                  </li>
                  <li>Responsive website (mobile friendly)</li>
                  <li>White labeled script </li>
                  <li>
                    Pickup & Delivery : User can either pick up their order by
                    own or can be delivered through restaurant.
                  </li>
                  <li>
                    Delivery Address Management: Save your address for the first
                    time and use it in future as well. Customer can manage their
                    saved addresses easily.
                  </li>
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
            <h2 className="taxt_tt_job">Food Ordering Script Features</h2>
          </div>

          <div className="tatxt_txt_job text-center">
            Using our food ordering script, restaurant owners will be able to
            list their menu, manage orders, kitchen staff, coupon code and
            payment option. Customers can search restaurant on the app by
            filtering category. You can also request for customization in our
            script.
          </div>

          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job">
              <ul className="fiverrClone">
                <li
                  id="tab1_li"
                  className={`food_app_job ddlj ${sellerTab ? "active" : ""}`}
                  onClick={() => handleSellerTab()}
                >
                  <a>Customer</a>
                </li>
                <li
                  id="tab2_li"
                  className={`food_restaurant_job ddlj ${
                    buyerTab ? "active" : ""
                  }`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Restaurant</a>
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
                            src="/img/foodordering/food-ordering-customer.png"
                            alt="Customer"
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
                                  src="/img/jobboard/view_order.png"
                                />
                              </i>
                              <span>
                                View Order Details
                                <div className="product-idea">
                                  <p>
                                    Customers can view order details like order
                                    number, restaurant name, status and placed
                                    date or time.
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
                                  src="/img/jobboard/search_restaurant.png"
                                />
                              </i>
                              <span>
                                Search Restaurant
                                <div className="product-idea">
                                  <p>
                                    Customers can search any restaurant by
                                    restaurants name, cuisine name, food item
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
                                  src="/img/jobboard/filter_restaurant.png"
                                />
                              </i>
                              <span>
                                List/Filter/Sort Restaurants
                                <div className="product-idea">
                                  <p>
                                    Customer can view resultant list of
                                    restaurants over the site according to the
                                    search criteria they have entered.{" "}
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
                                  src="/img/jobboard/view_restaurant_dtl.png"
                                />
                              </i>
                              <span>
                                View Restaurant Details
                                <div className="product-idea">
                                  <p>
                                    Customers can view restaurant details of the
                                    selected restaurant like restaurant name,
                                    Image, ratings, minimum order.
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
                                View Reviews & Ratings of restaurant
                                <div className="product-idea">
                                  <p>
                                    Customer can view the reviews & ratings of
                                    Restaurants which they have received from
                                    past Customers & will help customer to find
                                    the best restaurant.
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
                                  src="/img/jobboard/manage_account.png"
                                />
                              </i>
                              <span>
                                Manage Account
                                <div className="product-idea">
                                  <p>
                                    Customer can view account and edit account.
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
                                  src="/img/jobboard/payServices.png"
                                />
                              </i>
                              <span>
                                Payment Gateway
                                <div className="product-idea">
                                  <p>
                                    Customer can pay for the purchased items by
                                    paying safely through an integrated payment
                                    gateway.
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
                                  src="/img/jobboard/favorite-orders.png"
                                />
                              </i>
                              <span>
                                Manage Favorite
                                <div className="product-idea">
                                  <p>
                                    Customers can mark the food items they like
                                    as their favorites so that they can see them
                                    in their favorites list.
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
                                  src="/img/jobboard/manage_address.png"
                                />
                              </i>
                              <span>
                                Manage Addresses
                                <div className="product-idea">
                                  <p>
                                    Customers can save their delivery addresses.
                                    Ordering again, they will be offered to
                                    select the previous address.
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
                                  src="/img/jobboard/payment_history.png"
                                />
                              </i>
                              <span>
                                View Payment History
                                <div className="product-idea">
                                  <p>
                                    Customer can view payment history like
                                    transation id, order number, amount, date
                                    and time
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
                                  src="/img/jobboard/menu_order.png"
                                />
                              </i>
                              <span>
                                View Menu Detail
                                <div className="product-idea">
                                  <p>
                                    Customer can choose a cuisine to view the
                                    food items that are available within & sort
                                    the food items by price & most loved.
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
                                  src="/img/jobboard/manage_cart.png"
                                />
                              </i>
                              <span>
                                Manage Cart
                                <div className="product-idea">
                                  <p>
                                    Customer can manage cart by using added item
                                    and order them.
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
                            src="/img/foodordering/food-ordering-restaurant.png"
                            alt="restaurant"
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
                                  src="/img/jobboard/manage_account.png"
                                />
                              </i>
                              <span>
                                Manage Account
                                <div className="product-idea product-idea1">
                                  <p>
                                    Restaurants can view account and edit
                                    account.
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
                                  src="/img/jobboard/received-orders.png"
                                />
                              </i>
                              <span>
                                View Received Orders
                                <div className="product-idea product-idea1">
                                  <p>
                                    Restaurants can view the orders details like
                                    Order no., Order Status, Placed Date/Time,
                                    Order type.
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
                                  src="/img/jobboard/delivery-Charges.png"
                                />
                              </i>
                              <span>
                                Manage Delivery Charges
                                <div className="product-idea">
                                  <p>
                                    Restaurant can manage delivery charges like
                                    pickup available(on/off) option, if the
                                    status on this will applicable to all orders
                                    and if off than delivery charge will be
                                    zero, vespa delivery price, car delivery
                                    price, delivery charges limit{" "}
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
                                  src="/img/jobboard/kitchen-staff.png"
                                />
                              </i>
                              <span>
                                Manage Kitchen Staff
                                <div className="product-idea product-idea1">
                                  <p>
                                    Restaurant can add new kitchen staff, edit
                                    kitchen staff details, delete kitchen staff
                                    details and can activate or deactivate them.
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
                                  src="/img/jobboard/delivery-person.png"
                                />
                              </i>
                              <span>
                                Mangage Delivery Person
                                <div className="product-idea">
                                  <p>
                                    Restaurant can add new delivery person, edit
                                    delivery person details, delete them and
                                    activate or deactivate them.
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
                                  src="/img/jobboard/order-status.png"
                                />
                              </i>
                              <span>
                                Manage Order Status
                                <div className="product-idea">
                                  <p>
                                    Restaurant can view the Order status which
                                    will keep track of order&apos;s like order
                                    is delivered or not.
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
                                  src="/img/jobboard/manage_opening.png"
                                />
                              </i>
                              <span>
                                Manage Opening Hours
                                <div className="product-idea">
                                  <p>
                                    Restaurant can manage the
                                    status(Online/Off-line for specific hours)
                                    of Restaurant&apos;s Opening Hours.
                                    Restaurant will not accept any order when
                                    status is &quot;Off-line&quot;.
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
                                  src="/img/jobboard/coupon-codes.png"
                                />
                              </i>
                              <span>
                                Manage Coupon Codes
                                <div className="product-idea">
                                  <p>
                                    Restaurant can add their coupon codes with
                                    coupon code, discount, start time and end
                                    time. Can edit, delete and activate and
                                    deactivate them
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
                                  src="/img/jobboard/payment_history.png"
                                />
                              </i>
                              <span>
                                View Payment History
                                <div className="product-idea product-idea1">
                                  <p>
                                    Restaurant can view payment history like
                                    transaction id, order number, amount, date
                                    and time
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
                                  src="/img/jobboard/sponsorship-history.png"
                                />
                              </i>
                              <span>
                                View Membership Payment History
                                <div className="product-idea">
                                  <p>
                                    Restaurant can view membership payment
                                    history like transaction id, plan, amount,
                                    date and time.
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
                                View Reviews
                                <div className="product-idea product-idea1">
                                  <p>
                                    Restaurant can view the ratings provided by
                                    Customer & Restaurant can reply over the
                                    reviews. Restaurant are not allowed to
                                    delete the reviews.{" "}
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
                                  src="/img/jobboard/view_restaurant.png"
                                />
                              </i>
                              <span>
                                View All Restaurants
                                <div className="product-idea product-idea1">
                                  <p>
                                    Can view all the restaurants and its
                                    details.
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
                            src="/img/foodordering/food-ordering-admin.png"
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
                                  src="/img/jobboard/admin_dash.png"
                                />
                              </i>
                              <span>
                                Manage Dashboard
                                <div className="product-idea product-idea1">
                                  <p>
                                    Admin can manage their account settings and
                                    see their personal info over the dashboard
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
                                  src="/img/jobboard/manage_restaurants.png"
                                />
                              </i>
                              <span>
                                Manage Restaurants
                                <div className="product-idea">
                                  <p>
                                    Admin will be able to view list of all the
                                    Restaurants & can manage(add/edit/delete)
                                    all Restaurants.
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
                                  src="/img/jobboard/manage_banner.png"
                                />
                              </i>
                              <span>
                                Manage Banner
                                <div className="product-idea product-idea1">
                                  <p>
                                    Admin can manage all banners from backend
                                    and can add/edit/delete banners details and
                                    can acivate or deactivate banners.
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
                                  src="/img/jobboard/manage_customers.png"
                                />
                              </i>
                              <span>
                                Manage Customers
                                <div className="product-idea product-idea1">
                                  <p>
                                    Admin can manage all customers at one place
                                    which includes adding, editing and deleting
                                    them and activate or deactivate them.
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
                                  src="/img/jobboard/manage_cuisines.png"
                                />
                              </i>
                              <span>
                                Manage Cuisines
                                <div className="product-idea product-idea1">
                                  <p>
                                    Admin can manage all cuisines at one place
                                    which includes adding, editing, deleting
                                    them and activate or deactivate them.
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
                                  src="/img/jobboard/manage_meal.png"
                                />
                              </i>
                              <span>
                                Manage Meal Types
                                <div className="product-idea product-idea1">
                                  <p>
                                    Admin can manage all Meal types at one place
                                    which includes adding, editing, deleting
                                    them and activate or deactivate them.
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
                                Manage Cities
                                <div className="product-idea product-idea1">
                                  <p>
                                    Admin can manage all cities at one place
                                    adding, editing, deleting, activate or
                                    deactivate. According to cities admin can
                                    manage their area which includes adding,
                                    editing, deleting and activate or deactivate
                                    them.
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
                                  src="/img/jobboard/manage_pages.png"
                                />
                              </i>
                              <span>
                                Manage Pages
                                <div className="product-idea product-idea1">
                                  <p>
                                    Admin can manage all pages at one place
                                    which includes adding, editing, deleting
                                    them and activate or deactivate them.
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
                                  src="/img/jobboard/manage_review_list.png"
                                />
                              </i>
                              <span>
                                Manage Review List
                                <div className="product-idea product-idea1">
                                  <p>
                                    Admin can manage all review list which
                                    includes deleting, activate or deactivate.
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
                                  src="/img/jobboard/coupon-codes.png"
                                />
                              </i>
                              <span>
                                Manage Coupons
                                <div className="product-idea product-idea1">
                                  <p>
                                    Admin can manage all coupons at one place
                                    which includes adding, editing, deleting
                                    them and activate or deactivate them.
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
                                  src="/img/jobboard/payment_history.png"
                                />
                              </i>
                              <span>
                                Manage Payment History
                                <div className="product-idea">
                                  <p>
                                    Admin can view payment history like
                                    transaction id, order number, status,
                                    amount, payment type, date and time. Admin
                                    can delete them also.
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
                                  src="/img/jobboard/sponsorship-payments.png"
                                />
                              </i>
                              <span>
                                View Membership Payments
                                <div className="product-idea">
                                  <p>
                                    Admin can view the membership payment
                                    history like tansaction id, plan,amount,
                                    status, payment type, date and time.
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
              What does{" "}
              <span>Our Multi Restaurant Food Ordering Script offer you </span>?
            </h2>
            <p>
              The food ordering script that we have developed will serve as an
              attractive medium for customers to order food from the
              restaurants. It provides an option for delivery or pickup of food
              item both. Our online food ordering clone script enables users to
              get their favorite delicious food from recommended restaurants
              online at their doorstep without any hassle.
            </p>

            <p className="new_red_food">
              {" "}
              Are you looking for single restaurant food ordering system? We
              have launched a hassle free{" "}
              <a
                href="https://food-ordering-marketplace.logicspice.com"
                target="_blank"
              >
                hosted solution for food ordering
              </a>{" "}
              at affordable price.
            </p>
            <h2 className="headhs-ti">
              Online Food Ordering Software Script For Restaurant (Web/Mobile
              App) :
            </h2>
            <p>
              {" "}
              This will allow the customer order from multiple restaurants by
              selecting city, area over the site. Customers will be able to
              select a Restaurant from the list and order. They can view the
              popular restaurants, according to the rating and once the order is
              delivered, they can rate the restaurant as well.
            </p>
            <p>
              Are you looking for a food ordering script like{" "}
              <b>UberEats Clone</b>, Zomato Clone, foodpanda clone, just eat
              clone, swiggy clone script, nearby clone script, talabat clone
              script or eat24hours clone? Then logicspice will be right choice
              for online food ordering and food delivery system. It gives you
              all the possibilities that a script of <b>foodpanda clone</b> or
              just eat clone, takeaway food order script etc have. You can give
              your customer options to pickup their food by themselves to
              provide them a more convenient solution. Logicspice have created a
              top food delivery script to provide customers the best experience.
              The interesting fact is that we have a{" "}
              <b>food ordering mobile app for iphone and android app</b> with
              latest features for food ordering and delivery business that boost
              your business in your budget. Our restaurant online ordering app
              effortlessly user friendly and intuitive is all what one wish for
              in a mobile app.
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
                    Mobile Apps: Stay perpetually connected with Android and
                    iPhone apps, available for an additional USD 45 per month
                    for each, android or iPhone. Mobile apps will include
                    customer and Restaurant/Kitchen Staff/Delivery Person app
                    only. These apps will be launched through your dedicated
                    developer accounts on Google Play and the Apple App Store.
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
                    // <SoftwareEnquiry
                    //   modalStatus={showModal}
                    //   toggle={openModal}
                    //   title="Demo Details For Food Ordering PHP Script"
                    // />

                    <GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Demo Details For Food Ordering PHP Script"
                      />
                  }
                </div>
                <Link
                  className="btn fiverr-buys"
                  href="/buy-now/food-ordering-script"
                >
                  Buy Now
                </Link>
              </div>
              <div className="jocpp">
                <ul className="job-pr-icon">
                  <li>
                    <i className="fa fa-globe"></i>
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
                    <Image unoptimized={true}
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
              height={100}
              src="/img/foodordering/foodordering_marketplace.jpg"
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
                  <li>
                    <div className="icntechimg">
                      <Image unoptimized={true}
                        width={40}
                        height={100}
                        src="/img/jobboard/apple_phn_icon.png"
                        alt="iOS"
                      />
                    </div>
                    <div className="icntechimg_nm">iOS</div>
                  </li>
                  <li>
                    <div className="icntechimg">
                      <Image unoptimized={true}
                        width={40}
                        height={100}
                        src="/img/jobboard/andoird_icon.png"
                        alt="Android"
                      />
                    </div>
                    <div className="icntechimg_nm">Android</div>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list_detail">
                  <li className="same ">
                    <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                    Safari 5+, IE 9+
                  </li>
                  <li className="same">
                    <b>Framework - </b> Laravel 5+
                  </li>
                  <li className="same">
                    <b>Language - </b> PHP 5.4+, AJAX, jQuery
                  </li>
                  <li className="other">
                    <b>Design - </b> HTML 5, CSS 3, Bootstrap 3.3.7, JavaScript
                  </li>
                  <li className="other">
                    <b>Database - </b> MySQL 5.5+{" "}
                  </li>
                  <li className="othert">
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
                      <div className="people_star_num">29</div>
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
                    title="Food Ordering And Delivery Script"
                  />
                </div>
                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;Perfect clone script to launch an online food
                      startup. This script is embedded with awesome features.
                      Thank you guys.&quot;
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">Jack caron, UK</span>{" "}
                      <span className="ConuntryFlagIcon">
                        <Image unoptimized={true}
                          width={20}
                          height={100}
                          src="/img/jobboard/uk_flag_img.png"
                          alt="mobile app development in UK"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;An extremely quick and helpful solution for online
                      food business startup. Thanks to logicspice team for their
                      timely support services.&quot;
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      W. Desuza, USA{" "}
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
                      &quot;I wanted to build a site like just eat & swiggy for
                      online food delivery and I bought this food ordering
                      script because it has many features similar to what I was
                      expecting. It was very easy to install and works GREAT.
                      Thank you logicspice.&quot;
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Marian Keli, Belgium{" "}
                      <span className="ConuntryFlagIcon">
                        <Image unoptimized={true}
                          width={20}
                          height={100}
                          src="/img/jobboard/belgium_flag_img.png"
                          alt="mobile app development in Belgium"
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
                    headerTitle="Can customer give a review/rating even if they have not ordered food from that restaurant?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      No. The customer can only review/rate the restaurant once
                      his order has been delivered.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Once I purchase the product, how many days will it take to go online?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Time taken to implement your product depends on the level
                      of customization and data migration. The time frame
                      generally ranges from 7 business days to 30-40 days for
                      complex implementations.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will there be any installation charges when I purchase the product?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      No. The installation of the product will be absolutely
                      free of cost.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can customer cancel an order once they have placed it?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Yes customer can cancel his order but only till the
                      restaurant has not confirmed it. Once the order is
                      confirmed, the customer cannot cancel it.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can customer track their order status on the website?"
                    collapseId="flush-collapse6"
                  >
                    <p>
                      Yes the customers can see if their order has been
                      confirmed, canceled or delivered. Also, restaurants can
                      add custom order status that they would like so that
                      customers can be updated about each step of the order
                      delivery.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How will the customer be informed of changed order status?"
                    collapseId="flush-collapse7"
                  >
                    <p>
                      Customer will receive an email whenever the restaurant
                      owner will change the order status on his end.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can the customer save their address once they have ordered from the
                                    website?"
                    collapseId="flush-collapse8"
                  >
                    <p>
                      Yes. Customers can save their delivery addresses on the
                      website. Once they order their food for the first time,
                      their address is saved. Ordering again they will be
                      offered to select the previous address. The Customer can
                      also manage their saved addresses and they can edit or
                      delete old addresses.{" "}
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I update some design and functionality in application code myself?"
                    collapseId="flush-collapse9"
                  >
                    <p>
                      Yes, You will have access of the all the code, except some
                      of the core encrypted files.{" "}
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Will I be able to use it on multiple domains, after I purchase this script?"
                    collapseId="flush-collapse10"
                  >
                    <p>
                      You will be licensed to use it only for the domain, you
                      purchased for.
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse11"
                  >
                    <p>
                      No, You can’t resell the script. All rights will remain
                      with Logicspice only.
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Do you offer Money Back Guarantee?"
                    collapseId="flush-collapse12"
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
                    collapseId="flush-collapse13"
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
          <Typography>Can customer give a review/rating even if they have not ordered food from that restaurant?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No. The customer can only review/rate the restaurant once their order has been delivered.
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
          <Typography>Once I purchase the product, how many days will it take to go online?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Time taken to implement your product depends on the level of customization and data migration. The time frame generally ranges from 7 business days to 30-40 days for complex implementations.
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
          <Typography>Will there be any installation charges when I purchase the product?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No. The installation of the product will be absolutely free of cost.
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
          <Typography>Can customer cancel an order once they have placed it?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, a customer can cancel their order, but only until the restaurant has confirmed it. Once the order is confirmed, the customer cannot cancel it.
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
          <Typography>Can customer track their order status on the website?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, customers can see if their order has been confirmed, canceled, or delivered. Also, restaurants can add custom order statuses to keep customers updated on each step of the order delivery.
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
          <Typography>How will the customer be informed of changed order status?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The customer will receive an email whenever the restaurant owner changes the order status on their end.
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
          <Typography>Can the customer save their address once they have ordered from the website?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, customers can save their delivery addresses on the website. Once they order food for the first time, their address is saved. When ordering again, they will be offered to select the previous address. Customers can also manage their saved addresses and edit or delete old addresses.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel8'}
        onChange={handleChange('panel8')}
      >
        <AccordionSummary
          aria-controls="panel8-content"
          id="panel8-header"
        >
          <Typography>Can I update some design and functionality in the application code myself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you will have access to all the code, except some of the core encrypted files.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel9'}
        onChange={handleChange('panel9')}
      >
        <AccordionSummary
          aria-controls="panel9-content"
          id="panel9-header"
        >
          <Typography>Will I be able to use it on multiple domains after I purchase this script?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You will be licensed to use it only for the domain you purchased for.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel10'}
        onChange={handleChange('panel10')}
      >
        <AccordionSummary
          aria-controls="panel10-content"
          id="panel10-header"
        >
          <Typography>Can I resell the script? Will I have rights over the script code?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, you can’t resell the script. All rights will remain with Logicspice only.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel11'}
        onChange={handleChange('panel11')}
      >
        <AccordionSummary
          aria-controls="panel11-content"
          id="panel11-header"
        >
          <Typography>Do you offer Money Back Guarantee?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer a 30-day money-back guarantee to ensure customer satisfaction with our software. If for any reason, you wish to discontinue using the product, you can ask us for a refund. We will refund your total money except the installation and configuration charges, which is USD 65 or 20% of the application cost, whichever is greater.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel12'}
        onChange={handleChange('panel12')}
      >
        <AccordionSummary
          aria-controls="panel12-content"
          id="panel12-header"
        >
          <Typography>Along with hosting server details, what other recommendations?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We recommend you purchase an SSL certificate along with a hosting server, considering that an SSL certificate is necessary for all websites these days and provides a secure layer to the website as well.
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
          <h2 className="title_main">Food Ordering Software Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/foodordering/add-Menu-for--restaurants.png"
                    alt="Add Menu For Restaurants"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Add Menu For Restaurants</div>
                  <div className="pro-feat-detai">
                    Restaurants can add their menus with details like cuisine,
                    name, description, image and price.{" "}
                  </div>
                </div>
              </div>

              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/foodordering/list-filter-sort-restaurants.png"
                    alt="List/Filter/Sort Restaurants"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">
                    List/Filter/Sort Restaurants
                  </div>
                  <div className="pro-feat-detai">
                    Customer can view resultant list of restaurants over the
                    site according to the search criteria they have entered.{" "}
                  </div>
                </div>
              </div>

              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/foodordering/menu-managements-for-restaurants.png"
                    alt="Menu Management For Restaurant"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">
                    Menu Management For Restaurant
                  </div>
                  <div className="pro-feat-detai">
                    Restaurant can manage their menu. They can edit cuisine
                    type, item name, price, description, item images.
                  </div>
                </div>
              </div>

              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/foodordering/view-receieved-order.png"
                    alt="View Received Orders"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">View Received Orders</div>
                  <div className="pro-feat-detai">
                    Restaurants can view the orders details like Order no.,
                    Order Status, Placed Date/Time, Order type.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/foodordering/view-restaurant-detail.png"
                    alt="View Restaurant Detail"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">View Restaurant Detail</div>
                  <div className="pro-feat-detai">
                    Customers can view restaurant details of the selected
                    restaurant like restaurant name, Image, ratings, minimum
                    order.
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
                    title=" Food Ordering PHP Script"
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
