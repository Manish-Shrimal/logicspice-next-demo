"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
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
import "../../../../public/css/font-awesome.css";

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const [demoAccessModal, setDemoAccessModal] = useState(false);
  const openDemoAccessModal = () => {
    // console.log(showModal);

    setDemoAccessModal(!demoAccessModal);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const panelStyle = {
    marginBottom: "10px",
    // border: '1px solid #ddd',
    borderBottom: "1px solid #ddd",
  };

  const headingStyle = {
    // backgroundColor: '#f7f7f7',
    padding: "20px 0",
  };

  const titleStyle = {
    textDecoration: "none",
    // fontWeight: "bold",
    color: "#333",
    display: "block",
    fontSize: "18px",
  };

  const collapseStyle = {
    display: "none",
    transition: "all 0.3s ease",
  };

  const showStyle = {
    display: "block",
  };

  const bodyStyle = {
    padding: "7px",
    // borderTop: '1px solid #ddd',
  };
  const [activeTab, setActiveTab] = useState("tab2");
  const [sellerTab, setSellerTab] = useState(false);
  const [buyerTab, setBuyerTab] = useState(true);
  const [adminTab, setAdminTab] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

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
        BaseAPI + "/product/Details/wordpress-ecommerce-website"
      );
      // console.log(response.data.data)
      setPageData(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
      // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

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
      <section className="paid-pro job-portal-banner job-portal-bg fiverr-new-banner NewJobSiteDesign WordPresseCommerceBanner">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>WordPress eCommerce Website</h1>
              <div className="both-left-p-sec">
                <h2>Empowering Your Online Store for Success</h2>
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
                          alt="more-info"
                        />
                      </i>
                      <p>Limited Period Offer for First Year</p>
                    </span>
                  </div>
                </div>
                <div className="job-valu-btn">
                  <span>Fill your basic details and</span>
                  <div className="enquiry_software_btn">
                  <div
                    className=" btn-get"
                    onClick={openDemoAccessModal}
                    style={{ textAlign: "center" }}
                  >
                    <a>Get Demo Access!</a>
                    {
                      <GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of WordPress eCommerce Website.
                         See how it works yourself!"
                      />
                    }
                  </div>
                  <div className="" onClick={openModal}>
                    <button className="btn fiverr-buys NewGreenBtnJob">
                      Enquire Now
                    </button>
                    {
                      <SoftwareEnquiry
                        modalStatus={showModal}
                        toggle={openModal}
                        title="WordPress eCommerce Website"
                      />
                    }
                  </div>
                  </div>
                  
                  {/* <button
                    className="btn fiverr-buys NewGreenBtnJob"
                    href="/udemy-clone"
                  >
                    Enquire Now
                  </button>
                   <SoftwareEnquiry
                        modalStatus={showModal}
                        toggle={openModal}
                        title="WordPress E-commerce website"
                      /> */}
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
                    <p>225 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                <Image
                  unoptimized={true}
                  width={275}
                  height={100 / (100 / 100)}
                  alt="WordPress eCommerce Website"
                  src="/img/wordpress-ecommerce/wordpress-ecommerce-banner-img.png"
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
                  WordPress eCommerce Website
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            A WordPress eCommerce website is a platform built using a popular
            content management system (CMS), Wordpress, designed for online
            stores. It enables users to create and manage an online store with
            features such as product listings, shopping carts, integrated
            payment gateways, and order management. With a wide range of plugins
            and themes available, WordPress offers a flexible and customizable
            solution for businesses looking to sell products or services online.
          </p>
        </div>
      </section>
      <section
        className="client-say crowdfunding-say"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-market-ttd-new event-ttd-new">
                <ul>
                  <li>Product Management</li>
                  <li>Shopping Cart</li>
                  <li>Payment Gateways</li>
                  <li>Customizable Themes</li>
                  <li>Order Management</li>
                  <li>Mobile Responsiveness</li>
                  <li>Search and Filtering</li>
                  <li>Secure Checkout</li>
                  <li>Shipping Options</li>
                  <li>SEO Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="job_portal_area">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">
              WordPress eCommerce Website Features
            </h2>
          </div>

          <div className="tatxt_txt_job text-center">
            Explore the potential of our WordPress eCommerce website, designed
            to enhance your online business. Our solutions are built to
            strengthen your brand and drive sales. Featuring smooth integration
            of WooCommerce, Easy Digital Downloads, or WP eCommerce, our
            websites offer comprehensive eCommerce functionality. Enjoy engaging
            product pages, intuitive shopping carts, secure payment gateways,
            flexible shipping options, and customer account management. Build
            trust with customer reviews and ensure a user-friendly experience
            across devices with mobile responsiveness. Optimize for search
            engines and track your success with advanced analytics. Upgrade your
            online store with our customized WordPress eCommerce websites.
          </div>
          <div class="tatxt_txt_job"></div>
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
                  <a>Seller Features</a>
                </li>
                <li
                  id="tab2_li"
                  className={`emplyer_app_job ddlj ${buyerTab ? "active" : ""}`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Buyer Features</a>
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
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100 / (100 / 100)}
                            src="/img/wordpress-ecommerce/worspress-ecommerce-customer.png"
                            alt="Customer App Feature"
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
                                  src="/img/jobboard/manage-dashboard.png"
                                />
                              </i>
                              <span>
                                Seller Dashboard
                                <div className="product-idea">
                                  <p>
                                    Provide sellers with a dedicated dashboard
                                    to manage their products, orders, inventory,
                                    and sales performance.
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
                                  src="/img/jobboard/product-management-icon.png"
                                />
                              </i>
                              <span>
                                Product Management
                                <div className="product-idea">
                                  <p>
                                    Allow sellers to easily add, edit, and
                                    remove products, including descriptions,
                                    images, pricing, and variations.
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
                                  src="/img/jobboard/order-management.png"
                                />
                              </i>
                              <span>
                                Order Management
                                <div className="product-idea">
                                  <p>
                                    Enable sellers to view and manage orders,
                                    update order statuses, and communicate with
                                    customers regarding their purchases.
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
                                  src="/img/jobboard/commission-management.png"
                                />
                              </i>
                              <span>
                                Commission Management
                                <div className="product-idea">
                                  <p>
                                    Implement a system to calculate and manage
                                    commissions for each sale made by the seller
                                    on the platform.
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
                                  src="/img/jobboard/shipping-management.png"
                                />
                              </i>
                              <span>
                                Shipping Management
                                <div className="product-idea">
                                  <p>
                                    Offer sellers the ability to set their own
                                    shipping methods, rates, and policies for
                                    their products.
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
                                  src="/img/jobboard/payment-integration.png"
                                />
                              </i>
                              <span>
                                Payment Integration
                                <div className="product-idea">
                                  <p>
                                    Integrate payment gateways to allow sellers
                                    to receive payments directly for their
                                    sales, with the platform deducting any
                                    applicable fees or commissions.
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
                                  src="/img/jobboard/seller-ratings.png"
                                />
                              </i>
                              <span>
                                Seller Ratings and Reviews
                                <div className="product-idea">
                                  <p>
                                    Allow customers to rate and review sellers
                                    based on their products and services,
                                    helping to build trust and credibility.
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
                                  src="/img/jobboard/marketing-promotion.png"
                                />
                              </i>
                              <span>
                                Marketing and Promotion Tools
                                <div className="product-idea">
                                  <p>
                                    Provide sellers with tools to promote their
                                    products, such as discounts, coupons, and
                                    promotional campaigns.
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
                                  src="/img/jobboard/product-recommendations.png"
                                />
                              </i>
                              <span>
                                Product Recommendations
                                <div className="product-idea">
                                  <p>
                                    If offers sellers to increase sales by
                                    suggesting relevant and complementary
                                    products to customers based on their
                                    behavior and purchase history. This enhances
                                    the shopping experience, increases customer
                                    satisfaction, and can lead to higher sales
                                    and conversions.
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
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100 / (100 / 100)}
                            src="/img/wordpress-ecommerce/worspress-buyer-mobile.png"
                            alt="Investors"
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
                                  src="/img/jobboard/seller-ratings.png"
                                />
                              </i>
                              <span>
                                Product Reviews and Ratings
                                <div className="product-idea">
                                  <p>
                                    Allow buyers to leave reviews and ratings
                                    for products, helping other shoppers make
                                    informed decisions.
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
                                  src="/img/jobboard/wishlist-save.png"
                                />
                              </i>
                              <span>
                                Wishlist and Save for Later
                                <div className="product-idea">
                                  <p>
                                    Enable buyers to save products to a wishlist
                                    or &apos;save for later&apos; list for
                                    future reference or purchase.
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
                                  src="/img/jobboard/secure-payment-gateways.png"
                                />
                              </i>
                              <span>
                                Secure Payment Gateways
                                <div className="product-idea">
                                  <p>
                                    Integrate secure payment gateways to ensure
                                    a safe and seamless checkout process for
                                    buyers.
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
                                  src="/img/jobboard/order-tracking.png"
                                />
                              </i>
                              <span>
                                Order Tracking
                                <div className="product-idea">
                                  <p>
                                    Provide buyers with the ability to track
                                    their orders in real-time, including
                                    shipping status and estimated delivery
                                    dates.
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
                                  src="/img/jobboard/responsive-design.png"
                                />
                              </i>
                              <span>
                                Responsive Design
                                <div className="product-idea">
                                  <p>
                                    Ensure the website is fully responsive and
                                    optimized for mobile devices, providing a
                                    seamless shopping experience across all
                                    platforms.
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
                                  src="/img/jobboard/customer-support.png"
                                />
                              </i>
                              <span>
                                Customer Support
                                <div className="product-idea">
                                  <p>
                                    Offer multiple channels for customer
                                    support, such as live chat, email, or phone,
                                    to assist buyers with any questions or
                                    issues they may have.
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
                                  src="/img/jobboard/easy-returns.png"
                                />
                              </i>
                              <span>
                                Easy Returns and Refunds
                                <div className="product-idea">
                                  <p>
                                    Implement a clear and hassle-free return and
                                    refund policy to build trust and confidence
                                    among buyers.
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
                                  src="/img/jobboard/personalized-recommendations.png"
                                />
                              </i>
                              <span>
                                Personalized Recommendations
                                <div className="product-idea">
                                  <p>
                                    Intelligent product recommendations based on
                                    the buyer&lsquo;s browsing and purchase
                                    history, enhancing the shopping experience.
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
                            width={300}
                            height={100 / (100 / 100)}
                            src="/img/wordpress-ecommerce/worspress-ecommerce-website.png"
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
                                  src="/img/jobboard/email-marketing.png"
                                />
                              </i>
                              <span>
                                Email Marketing Integration
                                <div className="product-idea">
                                  <p>
                                    Integration with email marketing platforms
                                    for targeted email campaigns and customer
                                    engagement.
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
                                  src="/img/jobboard/product-management-icon.png"
                                />
                              </i>
                              <span>
                                Product Management
                                <div className="product-idea">
                                  <p>
                                    The ability to add, edit, and remove
                                    products, including descriptions, images,
                                    pricing, and inventory management.
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
                                  src="/img/jobboard/order-management.png"
                                />
                              </i>
                              <span>
                                Order Management
                                <div className="product-idea">
                                  <p>
                                    A centralized system to manage orders, view
                                    order details, update order statuses, and
                                    track shipments.
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
                                  src="/img/jobboard/customer-support.png"
                                />
                              </i>
                              <span>
                                Customer Management
                                <div className="product-idea">
                                  <p>
                                    Tools to manage customer accounts, view
                                    order history, and communicate with
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
                                  src="/img/jobboard/inventory-management.png"
                                />
                              </i>
                              <span>
                                Inventory Management
                                <div className="product-idea">
                                  <p>
                                    {" "}
                                    Tools to track and manage inventory levels,
                                    receive low stock alerts, and automate
                                    inventory updates.
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
                                  src="/img/jobboard/payment-shipping.png"
                                />
                              </i>
                              <span>
                                Payment and Shipping Settings
                                <div className="product-idea">
                                  <p>
                                    Configuration options for payment gateways,
                                    shipping methods, and tax settings.
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
                                  src="/img/jobboard/reporting-analytics.png"
                                />
                              </i>
                              <span>
                                Reporting and Analytics
                                <div className="product-idea">
                                  <p>
                                    Detailed reports and analytics to track
                                    sales performance, customer behavior, and
                                    site traffic.
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
                                  src="/img/jobboard/coupon-discount.png"
                                />
                              </i>
                              <span>
                                Coupon and Discount Management
                                <div className="product-idea">
                                  <p>
                                    Tools to create and manage coupons,
                                    discounts, and promotional offers.
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
                                  src="/img/jobboard/security-permissions.png"
                                />
                              </i>
                              <span>
                                Security and Permissions
                                <div className="product-idea">
                                  <p>
                                    User role management to control access
                                    levels for admin users, ensuring the
                                    security of sensitive information.
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
              {" "}
              What does our WordPress eCommerce Website do for you?
            </h2>
            <p>
              Our WordPress eCommerce website empowers you to build and manage a
              successful online store with ease. From smooth product management
              and secure payment processing to personalized customer experiences
              and powerful analytics, our platform offers everything you need to
              succeed in the competitive world of online retail. With our easy
              to use interface and comprehensive features, you can create a
              unique and engaging shopping experience for your customers while
              maximizing your sales and growing your business. Experience the
              difference with our WordPress eCommerce website and take your
              online store to new heights.
            </p>
            <h3>
              What does we accomplish for your WordPress eCommerce Website
            </h3>
            <p>
              Custom Design: Our custom design service creates customized
              website designs that perfectly match your brand and business
              objectives. We ensure that every aspect of the design, from
              visuals to layout, aligns with your brand identity, helping you
              achieve your goals effectively.
            </p>
            <p>
              Plugin Installation and Customization: Our plugin installation and
              customization service enhance your eCommerce site&lsquo;s
              functionality by installing and customizing relevant plugins. This
              ensures your website has the features it needs to succeed.
            </p>
            <p>
              Operational Guidance: We will provide comprehensive guidance on
              how to operate your WordPress eCommerce website, including
              managing products, orders, and customer interactions. Our goal is
              to empower you to effectively manage and grow your online
              business.
            </p>
            <p>
              Real-Time Support: We offer real-time 3 months of free support
              within our office hours to address any issues or questions you may
              have, ensuring that your website runs smoothly and efficiently.
              Our team is dedicated to providing prompt and effective solutions
              to help you maximize your online presence. The support period can
              be extended as per your requirements with extra cost.
            </p>
            <p>
              Enhancing Security: Our security enhancements include implementing
              a range of measures to protect your WordPress eCommerce website
              from cyber threats and ensure the safety of customer data. We
              conduct a thorough assessment of your website&lsquo;s
              vulnerabilities and then implement security protocols such as
              firewalls, secure socket layer (SSL) certificates, and regular
              security audits. Additionally, we stay updated with the latest
              security trends and technologies to continuously enhance your
              website&lsquo;s security posture.
            </p>
          </div>
        </div>
      </section>
      <section
        className="SubscriptionModel"
        id="subscriptionmodel"
        style={{ backgroundColor: "#f1f1f1" }}
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
                    software version throughout its lifespan. Timely Upgrades:
                    Seamlessly transition to upgraded versions at regular
                    intervals, all at no extra cost.{" "}
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
                    Unlimited Order Postings: Post as many orders as you need
                    without any limitations.
                  </span>
                </li>
                <li>
                  <span>
                    Mobile Apps: Stay perpetually connected with Android and
                    iPhone apps, available for an additional USD 45 per month
                    for each, android or iPhone. These apps will be launched
                    through your dedicated developer accounts on Google Play and
                    the Apple App Store.{" "}
                  </span>
                </li>
                <li>
                  <span>
                    Effortless Program Operation: Revel in robust bandwidth that
                    guarantees your program runs flawlessly, supported by
                    resources allocated to your subscription model. Any increase
                    in allocated resources will incur additional charges beyond
                    the standard subscription model.{" "}
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
              <div className="enquiry_software_btn">
              <div className="btn btn-get" onClick={openDemoAccessModal}>
                  <a>Get Demo Access!</a>
                  {
                    //                     <SoftwareEnquiry
                    //                       modalStatus={showModal}
                    //                       toggle={openModal}
                    //                       title="Please fill the form below and get access to the live demo of WordPress eCommerce Website.
                    // See how it work yourself!"
                    //                     />
                    <GetDemoEnquiry
                      modalStatus={demoAccessModal}
                      toggle={openDemoAccessModal}
                      title="Please fill the form below and get access to the live demo of WordPress eCommerce Website.
 See how it works yourself!"
                    />
                  }
                </div>
                {/* <Link
                  className="btn fiverr-buys"
                  href="/crowdfunding"
                >
                  Enquire Now
                </Link> */}
                <div className="" onClick={openModal}>
                  <button className="btn fiverr-buys NewGreenBtnJob">
                    Enquire Now
                  </button>
                  {
                    <SoftwareEnquiry
                      modalStatus={showModal}
                      toggle={openModal}
                      title="WordPress eCommerce Website"
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
                      alt="stars"
                      className="lazy"
                    />
                    <p>225 Reviews</p>
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
              Logicspice is the best partner for your WordPress eCommerce
              Website!
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
                    alt="icon"
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
                      <Image
                        unoptimized={true}
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
                      <Image
                        unoptimized={true}
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
            <span>Utilized Technologies</span> and Server Requirements
          </h4>
          <div className="used_technology_section_dataa">
            <div className="row">
              <div className="col-sm-6">
                <ul>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/jobboard/frame_wordpress_icon.png"
                        alt="Wordpress Development"
                      />
                    </div>
                    <div className="icntechimg_nm">Wordpress</div>
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
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list_detail">
                  <li className="same">
                    <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                    Safari 5+, IE 9+
                  </li>
                  <li className="same">
                    <b>Framework - </b> WordPress Content Management System
                    (CMS)
                  </li>
                  <li className="same">
                    <b>Language - </b> PHP 8.2 Supported, AJAX, jQuery
                  </li>
                  <li className="other ">
                    <b>Design - </b> HTML 5, CSS 3, Bootstrap 3.3.7, JavaScript
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
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    width={50}
                    height={100}
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">White Labeled Software</div>
              </li>
              <li data-aos="fade">
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
      <section className="CustomerReviewsSections">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-3 col-lg-3 CustomerReviewsImgMobile">
              <div className="CustomerReviewsImg">
                <Image
                  unoptimized={true}
                  width={300}
                  height={100 / (100 / 100)}
                  alt="customer-reviews"
                  src="/img/yiiframework/customer-reviews-img.jpg"
                />
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-6">
              <div className="CustomerReviews">
                <div className="CustomerReviewsBxMain">
                  <h2>Customer Reviews</h2>
                  <div className="CustomerReviewsMainBx">
                    <div className="CustomerReviewsBx">
                      <p>
                        I absolutely love the intuitive user interface of this
                        software. It&lsquo;s incredibly easy to navigate, and I
                        can quickly find the features Im looking for. The
                        interface is well-designed, with detailed descriptions
                        and helpful tooltips that give me a clear idea of how to
                        use the software. The overall user experience is
                        seamless, and I appreciate the variety of customization
                        options available, making it convenient for me to
                        customize the website to my needs. Overall, this
                        software offers a fantastic user experience that keeps
                        me satisfied.
                      </p>
                    </div>
                    <div className="CustomerReviewsClient">
                      <i>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          alt="customer-reviews"
                          src="/img/yiiframework/purpal-star.png"
                        />
                      </i>
                      <span>
                        Emily, Canada
                        <i className="contry-flag">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            alt="customer-reviews"
                            src="/img/jobboard/canada_flag_img.png"
                          />
                        </i>
                      </span>
                    </div>
                  </div>
                  <div className="CustomerReviewsMainBx">
                    <div className="CustomerReviewsBx">
                      <p>
                        The product management features of this software are
                        exceptional. As a buyer of this product, I appreciate
                        how easy it is to add, edit, and remove products. The
                        inventory management tools are also very useful, helping
                        me keep track of my stock levels. The order management
                        system is efficient, allowing me to process orders
                        quickly and keep my customers informed. Overall, this
                        software has everything I need to manage my online store
                        effectively.
                      </p>
                    </div>
                    <div className="CustomerReviewsClient">
                      <i>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          alt="customer-reviews"
                          src="/img/yiiframework/purpal-star.png"
                        />
                      </i>
                      <span>
                        James, USA
                        <i className="contry-flag">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            alt="customer-reviews"
                            src="/img/jobboard/usa_flag_img.png"
                          />
                        </i>
                      </span>
                    </div>
                  </div>
                  <div className="CustomerReviewsMainBx">
                    <div className="CustomerReviewsBx">
                      <p>
                        The customer support provided by Logicspice for this
                        software is outstanding. Whenever I have a question or
                        issue, the support team is quick to respond and always
                        goes above and beyond to help me. They are
                        knowledgeable, friendly, and genuinely care about
                        providing the best possible experience for their
                        customers. I also love the frequent updates and new
                        features they add to the software, ensuring that it
                        stays up-to-date and relevant.
                      </p>
                    </div>
                    <div className="CustomerReviewsClient">
                      <i>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          alt="customer-reviews"
                          src="/img/yiiframework/purpal-star.png"
                        />
                      </i>
                      <span>
                        Sophie, UK
                        <i className="contry-flag">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            alt="customer-reviews"
                            src="/img/jobboard/uk_flag_img.png"
                          />
                        </i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-4 col-lg-3">
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
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                    <div className="people_star_num">200</div>
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
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                    <div className="people_star_num">25</div>
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
                <div className="ecommerce--review--btn ">
                  <a className="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title=" WordPress eCommerce Website"
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
      <section className="ecommerce_faq_section JobBoardFaqSection">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ecommerce__Quick_FAQ">
              <h4 className="title_main">Quick FAQ</h4>
              <div className="panel-group faq_quick_sec" id="accordion">
                <div id="accordion">
                  <div style={panelStyle} data-aos="fade-up">
                    <div style={headingStyle}>
                      <a
                        href="#collapse1"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion(0);
                        }}
                        style={titleStyle}
                      >
                        What is an eCommerce website?
                      </a>
                    </div>
                    <div style={activeIndex === 0 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          An eCommerce website is an online platform where
                          businesses can sell products or services to customers
                          over the internet. It typically includes features such
                          as product listings, shopping carts, and secure
                          payment processing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={panelStyle} data-aos="fade-up">
                    <div style={headingStyle}>
                      <a
                        href="#collapse2"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion(1);
                        }}
                        style={titleStyle}
                      >
                        What is WordPress?
                      </a>
                    </div>
                    <div style={activeIndex === 1 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          WordPress is a popular content management system (CMS)
                          that allows users to create and manage websites. It is
                          known for its ease of use, flexibility, and wide range
                          of available plugins and themes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={panelStyle} data-aos="fade-up">
                    <div style={headingStyle}>
                      <a
                        href="#collapse3"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion(2);
                        }}
                        style={titleStyle}
                      >
                        What is WooCommerce?
                      </a>
                    </div>
                    <div style={activeIndex === 2 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          WooCommerce is a plugin for WordPress that adds
                          eCommerce functionality to a website. It allows users
                          to create an online store, add products, manage
                          inventory, and process payments.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={panelStyle} data-aos="fade-up">
                    <div style={headingStyle}>
                      <a
                        href="#collapse4"
                        style={titleStyle}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion(3);
                        }}
                      >
                        What are the benefits of using WordPress for eCommerce?
                      </a>
                    </div>
                    <div style={activeIndex === 3 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Some benefits of using WordPress for eCommerce include
                          its ease of use, flexibility, and scalability.
                          WordPress also offers a wide range of plugins and
                          themes that can help you customize your online store
                          and enhance its functionality. The 3rd party plugins
                          can be customized to some extent, as the service is
                          provided by the 3rd party, also if you want the
                          upgraded features,we can purchase the paid
                          subscriptions from the 3rd party plugin owners.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={panelStyle} data-aos="fade-up">
                    <div style={headingStyle}>
                      <a
                        href="#collapse6"
                        style={titleStyle}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion(4);
                        }}
                      >
                        Can I use WordPress for a large eCommerce website?
                      </a>
                    </div>
                    <div style={activeIndex === 4 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes, WordPress can be used for large eCommerce
                          websites. However, you may need to optimize your
                          website for performance and scalability, and consider
                          using dedicated hosting to handle high levels of
                          traffic.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={panelStyle} data-aos="fade-up">
                    <div style={headingStyle}>
                      <a
                        href="#collapse7"
                        style={titleStyle}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion(5);
                        }}
                      >
                        Is WordPress secure for eCommerce?
                      </a>
                    </div>
                    <div style={activeIndex === 5 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          WordPress itself is secure, but it is important to
                          take steps to ensure the security of your eCommerce
                          website. This includes keeping WordPress and all
                          plugins up to date, using strong passwords, and
                          implementing security measures such as SSL encryption.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={panelStyle} data-aos="fade-up">
                    <div style={headingStyle}>
                      <a
                        href="#collapse8"
                        style={titleStyle}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion(6);
                        }}
                      >
                        What kind of support is provided with the software?
                      </a>
                    </div>
                    <div style={activeIndex === 6 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          You will receive three months of support from the date
                          of purchase for any bugs or issues that may arise in
                          the standard software features that have already been
                          developed. This support includes assistance with
                          identifying, troubleshooting, and resolving any bugs
                          or issues that affect the functionality of the
                          software.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={panelStyle} data-aos="fade-up">
                    <div style={headingStyle}>
                      <a
                        href="#collapse201"
                        style={titleStyle}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion(7);
                        }}
                      >
                        Am I permitted to eliminate your company&apos;s
                        proprietary notices?
                      </a>
                    </div>
                    <div style={activeIndex === 7 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          You have the flexibility to modify the script by
                          removing your company information and substituting it
                          with yours. However, it is not permissible to include
                          &quot;copyright by&quot; since exclusive copyright
                          ownership for the software rests with us.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={panelStyle} data-aos="fade-up">
                    <div style={headingStyle}>
                      <a
                        href="#collapse202"
                        style={titleStyle}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion(8);
                        }}
                      >
                        How long does it take to receive the software after I
                        purchase it?
                      </a>
                    </div>
                    <div style={activeIndex === 8 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          It will take a minimum 48 hours after payment.You will
                          receive an email message with login details for your
                          personal account where the software can be downloaded.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={panelStyle} data-aos="fade-up">
                    <div style={headingStyle}>
                      <a
                        href="#collapse203"
                        style={titleStyle}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion(9);
                        }}
                      >
                        Can I use your software without any programming skills?
                      </a>
                    </div>
                    <div style={activeIndex === 9 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes, you can manage almost everything in the WordPress
                          admin panel which is very user friendly.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={panelStyle} data-aos="fade-up">
                    <div style={headingStyle}>
                      <a
                        href="#collapse204"
                        style={titleStyle}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion(10);
                        }}
                      >
                        Will you deliver the exact product as shown in the demo?
                      </a>
                    </div>
                    <div style={activeIndex === 10 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes, we deliver the exact product. We don&apos;t
                          compromise with quality at all.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={panelStyle} data-aos="fade-up">
                    <div style={headingStyle}>
                      <a
                        href="#collapse07"
                        style={titleStyle}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion(11);
                        }}
                      >
                        Do you offer a Money Back Guarantee?
                      </a>
                    </div>
                    <div style={activeIndex === 11 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes, we provide a 30 days money back guarantee to
                          ensure customer satisfaction with our software. If,
                          for any reason, you decide to stop using the product,
                          you can request a refund. We will reimburse the entire
                          amount, excluding the installation and configuration
                          charges, which are either USD 65 or 20% of the
                          application cost, whichever is higher. Please note
                          that the money back guarantee does not apply to
                          customers who have received updates as per their
                          specific requests, taking into account the significant
                          efforts and time invested by the team for their
                          project.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={panelStyle} data-aos="fade-up">
                    <div style={headingStyle}>
                      <a
                        href="#collapse504"
                        style={titleStyle}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion(12);
                        }}
                      >
                        Are you willing to advise us with ideas?
                      </a>
                    </div>
                    <div style={activeIndex === 12 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Sure, we fulfill the client requirements always while
                          doing all customization work offered with additional
                          cost. Although client suggestions or ideas are always
                          welcomed which can make your business more usable.
                        </p>
                      </div>
                    </div>
                  </div>
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
                  <SoftwareEnquiry
                    modalStatus={showModal}
                    toggle={openModal}
                    title="WordPress eCommerce Website"
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
                    href="/fiverr-clone"
                    title="View Detail"
                    target="_black"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Fiverr clone</h3>
                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            width={200}
                            height={100}
                            src="/img/jobboard/gigger_logo_new.png"
                            alt="Fiverr clone"
                          />
                        </div>
                        <p>
                          <span>On Demand Marketplace Software</span>{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    href="/job-board-software"
                    title="View Detail"
                    target="_black"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Job Board Software</h3>
                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            width={270}
                            height={100}
                            src="/img/jobboard/job-board-logo.png"
                            alt="Job Board Software Logo"
                          />
                        </div>
                        <p>
                          <span>Best white label job board software. </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link href="/ecommerce-website" title="View Detail" target="_black">
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>eCommerce Software</h3>
                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            width={200}
                            height={100}
                            src="/img/jobboard/ecommerce_logo_new.png"
                            alt="eCommerce Software"
                          />
                        </div>
                        <p>
                          <span>Best eCommerce Web Design Packages</span>
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
