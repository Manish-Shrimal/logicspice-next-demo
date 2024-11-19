"use client";
import React, { useState } from "react";
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
import Whylogicspice from "@/app/Components/Whylogicspice";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";
import EnquiryModal from "@/app/Components/Enquirymodal";
import "../../../../public/css/font-awesome.css"



const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };

  const openModal = () => {
    setShowModal(!showModal);
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
  return (
    <>
      <NavBar />
      <section className="paid-pro job-portal-banner fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg eBayNewBanner">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>eBay Clone Script</h1>
              <div className="both-left-p-sec abs_text">
                <h2>Multi Vendor Ecommerce Software Similar to Etsy Clone</h2>
              </div>
              <div className="job-valu">
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
                  //       title="Please fill the form below and get access to the live demo of ebay clone.
                  // .See how it work yourself!"
                  //     />

                  <GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of ebay Clone. See how it works yourself!"
                      />
                    }
                  </div>
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
                    <p>15 Reviews</p>
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
                <Image
                  unoptimized={true}
                  alt="Ebay Clone"
                  src="/img/softwares-banner-img/ebaybanner-img.png"
                  width={450}
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
                  eBay clone
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            eBay - A multi vendor eCommerce script, specially designed for multi
            vendor eCommerce platform. The application comprises various
            pleasing features which are extremely customer friendly and
            functional. eCommerce is rapidly growing platform these days in
            2020, hence this is the right time to obtain advantage of this
            opportunity. Our ebay clone script would assist you to start your
            own eCommerce marketplace with all advance features in short time.
            Get in touch with Logicspice to get a demo of your app.
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
                    {" "}
                    Administrator can manage multiple vendors and orders on
                    dashboard using Multi Vendor Store Script.
                  </li>
                  <li>
                    Vendors can register store, on the Multi Vendor Store and
                    upload their products under the store.
                  </li>
                  <li>
                    {" "}
                    Vendors can get most featured frontend vendor store
                    dashboard, to manage their products and orders.
                  </li>
                  <li>
                    Vendors can set up store commissions rules for admin or
                    vendors either for all products or for specific products.
                  </li>
                  <li>
                    {" "}
                    Admin can allow 2 types of shipping to the vendors â€“
                    Shipping by Country and Shipping by Zone.{" "}
                  </li>
                  <li>
                    Vendor can get Ledger Book to check all their store
                    transactions â€“ commission, withdrawal, refunds, and
                    charges as well.
                  </li>
                  <li>
                    Shipping cost for each shipping method and the vendor
                    commission will be calculated according to the shipping
                    cost.{" "}
                  </li>

                  <li>
                    Vendor can define all the types of policies like Shipping,
                    Refund/ Cancellation/ Return/ Exchange for the store and
                    products.
                  </li>
                  <li>
                    Vendors can manage Support Address, Support Email or a
                    Support Phone number for the customers.
                  </li>
                  <li>
                    Customers can add reviews and can view reviews added by
                    other customers to decide whether he/she should buy from the
                    specific vendor.
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
            <h2 className="taxt_tt_job">eBay Clone Features </h2>
          </div>

          <div className="tatxt_txt_job text-center">
            eBay Clone script enables admin to use multiple features as Manage
            Stores, Vendors, Products and Product categories, Orders and
            Coupons. Vendors would obtain features as Register Store, Add
            Products, Manage Orders, Customers, Add Coupons, Manage Payments etc
            and Customers would be able to Create an account, Search, view and
            Order Product.
          </div>

          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job">
              <ul className="fiverrClone">
                <li
                  id="tab1_li"
                  className={`food_app_job ddlj ${sellerTab ? "active" : ""}`}
                  onClick={() => handleSellerTab()}
                >
                  <a>Customer Panel</a>
                </li>
                <li
                  id="tab2_li"
                  className={`food_restaurant_job ebay_cutting ${
                    buyerTab ? "active" : ""
                  }`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Store Vendors Panel</a>
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
                            src="/img/ebay/ebay_User_website.jpg"
                            alt="Customer Panel"
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
                                  src="/img/jobboard/admin_dash.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Create Account
                                <div className="product-idea product-idea1">
                                  <p>
                                    Customer can create his account and get
                                    access to the dashboard with account details
                                    and orders.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_restaurants.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Manage Cart Products
                                <div className="product-idea">
                                  <p>
                                    Customers can view products and stores on
                                    the website and add the products into cart
                                    for order.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_banner.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Shop by Category
                                <div className="product-idea product-idea1">
                                  <p>
                                    Customer can shop by different categories of
                                    the products available by the different
                                    stores.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_customers.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Use Coupon Code
                                <div className="product-idea product-idea1">
                                  <p>
                                    Customers can use different coupon codes
                                    added by the stores and the website admin
                                    for the different offers on the products.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_cuisines.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Checkout with Order
                                <div className="product-idea product-idea1">
                                  <p>
                                    Customer can checkout with the products
                                    added to the cart for processing the order.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_1.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Place Order
                                <div className="product-idea product-idea1">
                                  <p>
                                    Customer can place an order for the products
                                    added to cart with checkout process with the
                                    available payment methods.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_1.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                View Orders
                                <div className="product-idea product-idea1">
                                  <p>
                                    Customer can view the list of orders and the
                                    order details with the order status updates.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_3.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Manage Shipping Addresses
                                <div className="product-idea product-idea1">
                                  <p>
                                    Customer can add, update and delete multiple
                                    shipping addresses for the checkout process.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_5.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Rate & Review Store
                                <div className="product-idea product-idea1">
                                  <p>
                                    Customer can give rating and review to
                                    stores from his shopping experience.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_pages.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Rate & Review Products
                                <div className="product-idea product-idea1">
                                  <p>
                                    Customer can give rating and review to
                                    products available on the website from his
                                    shopping experience.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_10.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Product Inquiry
                                <div className="product-idea product-idea1">
                                  <p>
                                    Customer can send an enquiry to the products
                                    owner for getting more information.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_pages.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                update Account Details
                                <div className="product-idea product-idea1">
                                  <p>
                                    Customer can update his own account details
                                    from his own dashboard and manage his
                                    account.
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
                            src="/img/ebay/ebay_User.png"
                            alt="Store Vendors Panel"
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
                                  src="/img/jobboard/manage_account.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Register Store
                                <div className="product-idea product-idea1">
                                  <p>
                                    Vendors can register their store and set up
                                    the store data with their products and
                                    information.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/received-orders.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Add Store Products
                                <div className="product-idea product-idea1">
                                  <p>
                                    Vendors can add his own products under the
                                    store for the sale using add products.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/delivery-Charges.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                View & manage Orders
                                <div className="product-idea">
                                  <p>
                                    Vendor can view and manage his orders
                                    received for the store products.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/kitchen-staff.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Store Customers
                                <div className="product-idea product-idea1">
                                  <p>
                                    Vendor can view and manage his store
                                    customers who have purchased products from
                                    the store.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/delivery-person.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Add Store Coupons
                                <div className="product-idea">
                                  <p>
                                    Vendor can add and manage the store coupons
                                    for the customers for store offers.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/order-status.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Add to my store
                                <div className="product-idea">
                                  <p>
                                    {" "}
                                    Vendors have capability to inherit the
                                    products added other vendors to his own
                                    store products.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_opening.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Store Settings
                                <div className="product-idea">
                                  <p>
                                    Vendor can set up and manage his store
                                    settings for store address, store
                                    information, contact details and so on.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_6.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Store Payment Settings
                                <div className="product-idea">
                                  <p>
                                    Vendor can set payment settings for the
                                    store for getting the withdrawal from the
                                    admin.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_3.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Add Shipping Methods
                                <div className="product-idea">
                                  <p>
                                    Vendor can add and manage the store shipping
                                    method for his store.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_opening.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Add Store Policies
                                <div className="product-idea">
                                  <p>
                                    Vendor can add and setup the store policies
                                    and terms and conditions, cancellation
                                    policies.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_7.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Customer Support Settings
                                <div className="product-idea">
                                  <p>
                                    Vendor can set up and add the customer
                                    support details for the store.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_6.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                View Payment History
                                <div className="product-idea">
                                  <p>
                                    Vendor can view the payment history for the
                                    products sales of his store.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_11.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                View Ledger Book
                                <div className="product-idea">
                                  <p>
                                    Vendor can view the ledger book with details
                                    for his sale of the products.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_10.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                View Sales Reports
                                <div className="product-idea">
                                  <p>
                                    Vendor can view monthly, daily sales reports
                                    for the products sold by the store.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_5.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Manage Store Reviews
                                <div className="product-idea">
                                  <p>
                                    Vendor can manage, approve the review of the
                                    store added by the customers.
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
                            src="/img/ebay/ebay_admin.png"
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
                                  src="/img/jobboard/view_order.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Secure Login
                                <div className="product-idea">
                                  <p>
                                    Admin can login securely entering valid
                                    credentials.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/search_restaurant.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Dashboard
                                <div className="product-idea">
                                  <p>
                                    Admin can view and manage all vendors and
                                    customers, products, categories, stores and
                                    the orders on the dashboard.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/filter_restaurant.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Manage Stores / Shops
                                <div className="product-idea">
                                  <p>
                                    Admin can manage registered stores data at
                                    one place on manage stores and shops.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/view_restaurant_dtl.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Manage Vendors / Customers
                                <div className="product-idea">
                                  <p>
                                    Admin can manage all vendors and customers
                                    on manage customers section of dashboard.
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
                                {" "}
                                Manage Products
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of products added by
                                    different vendors and can manage the
                                    products in the products section.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/manage_account.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Manage Categories / Subcategories{" "}
                                <div className="product-idea">
                                  <p>
                                    Admin can add, delete and manage categories
                                    and subcategories settings for the products.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_1.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Orders
                                <div className="product-idea">
                                  <p>
                                    Admin can view and manage the customers
                                    orders for the vendors, can also update the
                                    order status.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_2.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Coupons
                                <div className="product-idea">
                                  <p>
                                    {" "}
                                    Admin can create coupons, view and manage
                                    coupons added by the stores.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_3.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                Manage Shipping Methods
                                <div className="product-idea">
                                  <p>
                                    {" "}
                                    Admin can add and manage different shipping
                                    methods with shipping costs and set shipping
                                    zones.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_4.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Manage Accounts & Privacy
                                <div className="product-idea">
                                  <p>
                                    {" "}
                                    Admin can manage and set Account creation
                                    settings, privacy policy, checkout policies
                                    from manage accounts and privacy.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_6.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Manage Payments
                                <div className="product-idea">
                                  <p>
                                    {" "}
                                    Admin can set up different payment methods
                                    and manage the payment gateway settings.
                                  </p>
                                </div>
                              </span>
                            </li>

                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_5.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Manage Reviews
                                <div className="product-idea">
                                  <p>
                                    {" "}
                                    Admin can view, manage, approve and delete
                                    the reviews added for the stores.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_7.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Manage Marketplace Settings
                                <div className="product-idea">
                                  <p>
                                    {" "}
                                    Admin can manage Marketplace settings for
                                    the stores for commission settings, vendor
                                    registration and so on.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_9.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Manage Vendor Capabilities
                                <div className="product-idea">
                                  <p>
                                    Admin can set and manage store vendors
                                    capabilities for managing products, access
                                    controls, orders and so on.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  alt="img"
                                  src="/img/jobboard/eBay_8.png"
                                  width={100}
                                  height={100}
                                />
                              </i>
                              <span>
                                {" "}
                                Manage CMS (Content Management System)
                                <div className="product-idea">
                                  <p>
                                    Admin can manage (add/edit/delete) all front
                                    end contents of the website.
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
              What does <span> our eBay Clone offers you</span>?
            </h2>
            <p>
              E-commerce retail marketplace became the most popular in 2020. So
              many retailers go online to sell their products. eBay, Etsy and
              other multi vendor retail marketplaces having remarkable growth.
              Our eBay clone script helps to launch your own ecommerce app and
              start earning.{" "}
            </p>
            <p className="new_red_food">
              <strong>
                <i>eBay Clone</i>
              </strong>{" "}
              Script is an eCommerce marketplace where individual vendors from
              distinct backgrounds come together and sell their products online
              through a single storefront as like{" "}
              <strong>
                <i>etsy clone Script</i>
              </strong>
              . eBay marketplace is a platform where vendors provide products
              and services to the customer and owner manages the website. With{" "}
              <em>etsy clone app,</em> Customers can order products online
              through the marketplace and Owner would be getting commision from
              every deal the vendor makes. eBay clone script benefits to both
              owners and vendors.
            </p>
            <p>
              Using eBay clone, efforts of admin and vendor are reduced as admin
              does not have to find products to sell and vendor does not have to
              maintain a website.
            </p>
            <p>
              Any entrepreneurs about to establish an eCommerce marketplace like
              etsy should look forward to start with etsy clone script. A
              perfect multi vendor eCommerce script that permits you to start a
              conversion focused multi vendor ecommerce marketplace.
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
                    Unlimited Product Store Listings: List as many product
                    stores as you need without any limitations.
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
                    src="/img/jobboard/why-logic-icon.png"
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
                        src="/img/jobboard/frame_wordpress_icon.png"
                        alt="Wordpress Development"
                        width={60}
                        height={100}
                      />
                    </div>
                    <div className="icntechimg_nm">Wordpress</div>
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
                  <li className="same">
                    <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                    Safari 5+, IE 9+
                  </li>
                  <li className="same">
                    <b>Framework - </b> Wordpress
                  </li>
                  <li className="same">
                    <b>Language - </b> PHP 7.2+, AJAX, jQuery
                  </li>
                  <li className="other">
                    <b>Design - </b> HTML 5, CSS 3, JavaScript,Bootstrap 4.1.3{" "}
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
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                    width={60}
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
                    width={60}
                    height={100}
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
                    height={100}
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
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">1</div>
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
                    title="ebay Clone"
                  />
                </div>
                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;Perfect eBay clone script to launch Multi Vendor
                      Ecommerce Software This script is embedded with awesome
                      features. Thank you guys.&quot;
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
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/uk_flag_img.png"
                          alt="mobile app development in UK"
                          width={20}
                          height={100}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;An extremely quick and helpful solution for online
                      ecommerce business startup similar to eBay. Thanks to
                      Logicspice team for their timely support services.&quot;
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
                      &quot;I wanted to build a site like eBay & Etsy for
                      E-commerce platform. I bought this eBay clone script
                      because it has many features similar to what I was
                      expecting. It was very easy to install and works GREAT.
                      Thank you Logicspice.&quot;
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
                        <Image
                          unoptimized={true}
                          src="/img/jobboard/belgium_flag_img.png"
                          alt="mobile app development in Belgium"
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
                    headerTitle="What is the limit to add vendors from admin panel ?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      There is no limit as such. You can add multiple vendors
                      from similar account. Also admin can remove/delete or
                      deactivate the vendor account, if it is not in use.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Does customer has to create an account, before ordering a product ?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Yes, for ordering any product customer will have to create
                      an account first, then can continue with the ordering
                      process
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can i get customization into existing project ? How long would it take to do that ?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Yes, you can get customization done here and generally
                      time depends on the amount of work to be done.{" "}
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How long the technical support is provided by Logicspice ?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      As we desire to keep long term relationships with our
                      client, we are always ready to provide technical support
                      24/7 and as long as required.{" "}
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Are there any hidden charges or installation charges ?"
                    collapseId="flush-collapse6"
                  >
                    <p>
                      No. we don&apos;t have any type of hidden charges and
                      after buying a product, installation will be done from our
                      end which will be free.{" "}
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Do I have the rights to resell the script ?"
                    collapseId="flush-collapse7"
                  >
                    <p>
                      No. You don&apos;t have the right to resell script. All
                      rights will remain with Logicspice only. You can sell the
                      vendor panel that too on subscription basis{" "}
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Can I update some design and functionality in application code myself?"
                    collapseId="flush-collapse8"
                  >
                    <p>
                      Yes, You will have access of the all the code, except some
                      of the core encrypted files.{" "}
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Will I be able to use it on multiple domains, after I purchase this script?"
                    collapseId="flush-collapse9"
                  >
                    <p>
                      You will be licensed to use it only for the domain, you
                      purchased for.
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse10"
                  >
                    <p>
                      No, You can&apos;t resell the script. All rights will
                      remain with Logicspice only.
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
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                      What is the limit to add vendors from admin panel?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      There is no limit as such. You can add multiple vendors
                      from the same account. Also, the admin can remove/delete
                      or deactivate the vendor account if it is not in use.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography>
                      Does customer have to create an account before ordering a
                      product?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, for ordering any product, the customer will have to
                      create an account first, then continue with the ordering
                      process.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography>
                      Can I get customization into an existing project? How long
                      would it take to do that?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, you can get customization done here and generally
                      time depends on the amount of work to be done.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel4-content"
                    id="panel4-header"
                  >
                    <Typography>
                      How long is the technical support provided by Logicspice?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      We desire to keep long-term relationships with our
                      clients, so we are always ready to provide technical
                      support 24/7 and as long as required.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    aria-controls="panel5-content"
                    id="panel5-header"
                  >
                    <Typography>
                      Are there any hidden charges or installation charges?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No, we don’t have any hidden charges and after buying a
                      product, installation will be done from our end, which
                      will be free.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <AccordionSummary
                    aria-controls="panel6-content"
                    id="panel6-header"
                  >
                    <Typography>
                      Do I have the rights to resell the script?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No, you don’t have the right to resell the script. All
                      rights will remain with Logicspice only. You can sell the
                      vendor panel on a subscription basis.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                >
                  <AccordionSummary
                    aria-controls="panel7-content"
                    id="panel7-header"
                  >
                    <Typography>
                      Can I update some design and functionality in the
                      application code myself?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, you will have access to all the code, except for some
                      of the core encrypted files.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel8"}
                  onChange={handleChange("panel8")}
                >
                  <AccordionSummary
                    aria-controls="panel8-content"
                    id="panel8-header"
                  >
                    <Typography>
                      Will I be able to use it on multiple domains after I
                      purchase this script?
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
                    aria-controls="panel9-content"
                    id="panel9-header"
                  >
                    <Typography>
                      Can I resell the script? Will I have rights over the
                      script code?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      No, you can’t resell the script. All rights will remain
                      with Logicspice only.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel10"}
                  onChange={handleChange("panel10")}
                >
                  <AccordionSummary
                    aria-controls="panel10-content"
                    id="panel10-header"
                  >
                    <Typography>
                      Do you offer a Money Back Guarantee?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, we offer a 30-day money back guarantee to ensure
                      customer satisfaction of our software. If for any reason,
                      you wish to discontinue using the product, you can ask us
                      for a refund. We will refund your total money except the
                      installation and configuration charges, which is USD 65 or
                      20% of the application cost, whichever is greater.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel11"}
                  onChange={handleChange("panel11")}
                >
                  <AccordionSummary
                    aria-controls="panel11-content"
                    id="panel11-header"
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
          <h2 className="title_main">eBay Clone Script Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/ebay/ebay01.jpg"
                    alt="Add Menu For Restaurants"
                    width={1075}
                    height={100}
                  />
                </div>
              </div>

              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/ebay/ebay02.jpg"
                    alt="List/Filter/Sort Restaurants"
                    width={1075}
                    height={100}
                  />
                </div>
              </div>

              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/ebay/ebay03.jpg"
                    alt="Menu Management For Restaurant"
                    width={1075}
                    height={100}
                  />
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/ebay/ebay04.jpg"
                    alt="View Received Orders"
                    width={1075}
                    height={100}
                  />
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    src="/img/ebay/ebay05.jpg"
                    alt="View Restaurant Detail"
                    width={1075}
                    height={100}
                  />
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
                <button> Enquire Now</button>
                {
                 <EnquiryModal
                 modalStatus={showModal}
                 toggle={openModal}
                 title="ebay clone"
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
