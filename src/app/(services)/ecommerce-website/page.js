"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import "@/app/(services)/services.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";

import "../../../../public/css/font-awesome.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Reviewmodals from "@/app/Components/Reviewmodals";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

const Page = () => {
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
  // var portfolio = {
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 3000,
  // };
  var portfolio = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // screen width less than or equal to 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // screen width less than or equal to 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480, // screen width less than or equal to 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // hide arrows on smaller screens
          dots: true,
        },
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("tab2");
  const [customerTab, setCustomerTab] = useState(true);
  const [adminTab, setAdminTab] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const [showInfo, setShowInfo] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const [showReviewModal, setShowReviewModal] = useState(false);

  const toggleActiveItem = (collapseId) => {
    setActiveItem((prevActiveItem) =>
      prevActiveItem === collapseId ? null : collapseId
    );
  };

  const openModal = () => {
    console.log(showModal);

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
  const handleCustomerTab = () => {
    setCustomerTab(true);
    setAdminTab(false);
  };
  const handleAdminTab = () => {
    setCustomerTab(false);
    setAdminTab(true);
  };
  return (
    <>
      <div className="ecommerce_development">
        <NavBar />
        <section className="paid-pro ecommerce-portal-banner ">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 col-md-7">
                <h1>LS Shoppycart - eCommerce Website</h1>
                <div className="both-left-p-sec">
                  <h2>Best eCommerce Web Design Packages</h2>
                </div>
                <div className="job-valu">
                  <div class="portal-price">
                    <strike class="srik_cls">
                      ₹17,248<span class="sml_labl"> INR</span>
                      <small>/Month</small>
                    </strike>
                    <h4>
                      ₹4,435<span class="sml_labl"> INR</span>
                      <small>/Month</small>
                    </h4>
                  </div>
                </div>
                <div className="ecommerce-valu-btn">
                  <div className="job-valu-btn">
                    <div
                      className=" btn-get"
                      onClick={openModal}
                      style={{ textAlign: "center" }}
                    >
                      <a>Get Demo Access!</a>
                      {
                        <Enquirymodal
                          modalStatus={showModal}
                          toggle={openModal}
                          title="Please fill the form below and get access to the live demo of eCommerce Monthly Package.
                              See how it work yourself!"
                        />
                      }
                    </div>

                    {/* <div className="btn btn-primary" onClick={openModal}>
                      <a>Enquire Now</a>
                      {
                        <Enquirymodal
                          modalStatus={showModal}
                          toggle={openModal}
                          title="eCommerece Monthly Package"
                        />
                      }
                    </div> */}
                    <a
                      class="btn fiverr-buys"
                      href="/buy-now/ecommerce-website"
                      id="buy_now_1"
                    >
                      Buy Now
                    </a>
                    <ul className="job-ecommerce-icon">
                      <li>
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="jocpp">
                  <div className="portel-btnbx">
                    <div className="line-border">
                      <Image
                        width={100}
                        height={500 / (100 / 100)}
                        src="/img/ecommercewebsite/stars.png"
                        alt=""
                        className="lazy"
                      />
                      <p>564 Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-5 col-md-5">
                <div className="por-mobile-new">
                  <Image
                    width={650}
                    height={500 / (100 / 100)}
                    src="/img/ecommercewebsite/ecommerce-banner-img.png"
                    alt="eCommerce Ultimate Package"
                    className="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ecommerce-section-top-new">
          <div className="container">
            <p>
              At Logicspice, we specialize in providing top-notch ecommerce
              website development packages that are tailored to meet your unique
              needs. As a leading ecommerce website development company, we
              understand the importance of a robust online presence, and
              we&apos;re here to help you achieve just that. Get an eCommerce
              Website With Custom Theme, at an affordable price.
            </p>
          </div>
        </section>

        <section className="client-say ecommerce-say">
          <div className="container">
            <div className="ecommerce-bg">
              <div className="row">
                <div className="col-sm-6 col-md-5">
                  <div className="job-ecommerce-img">
                    <div className="website-portfolio">
                      <div
                        id="slide-website-portfolio"
                        className="slide-website-services"
                      >
                        <Slider {...settings}>
                          <div className="window window-desktop">
                            <Image
                              width={800}
                              height={500 / (100 / 100)}
                              src="/img/ecommercewebsite/vanessajo.jpg"
                              alt="img"
                            />
                            <div className="site-title">Vanessajo</div>
                          </div>
                          <div className="window window-desktop">
                            <Image
                              width={800}
                              height={500 / (100 / 100)}
                              src="/img/ecommercewebsite/onebed.jpg"
                              alt="img"
                            />
                            <div className="site-title">Onebed</div>
                          </div>

                          <div className="window window-desktop">
                            <Image
                              width={800}
                              height={500 / (100 / 100)}
                              src="/img/ecommercewebsite/la-maison-chic-img.jpg"
                              alt="img"
                            />
                            <div className="site-title">La Maison Chic</div>
                          </div>
                          <div className="window window-desktop">
                            <Image
                              width={800}
                              height={500 / (100 / 100)}
                              src="/img/ecommercewebsite/altijdbon-img.jpg"
                              alt="img"
                            />
                            <div className="site-title">Altijdbon</div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-7">
                  <div className="service-market-ttd">
                    <h2>LS Shoppycart Features</h2>
                    <ul>
                      <li>Review Feature</li>
                      <li>FAQ Section</li>
                      <li>Discount Coupons</li>
                      <li>Payment Gateway Integration</li>
                      <li>Upload Multiple Pictures</li>
                      <li>Favorite Lists</li>
                      <li>Search In Store</li>
                      <li>Unlimited Pages</li>
                      <li style={{ width: "100%" }}>
                        Catalog With Standard Ecommerce Functionality
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="job_portal_area">
          <div className="container">
            <div className="tab_bbx_job">
              <div className="tab_bbx_top_job tab_bbx_job_classified ">
                <ul className="">
                  <li
                    id="tab2_li"
                    className={`ecommerce_customer_job ddlj ${
                      customerTab ? "active" : ""
                    }`}
                    onClick={() => handleCustomerTab()}
                  >
                    <a>Customer</a>
                  </li>
                  <li
                    id="tab3_li"
                    className={`admin_ecommerce_job ddlj ${
                      adminTab ? "active" : ""
                    }`}
                    onClick={() => handleAdminTab()}
                  >
                    <a>Admin Panel</a>
                  </li>
                </ul>
              </div>
              <div className="tab_contant">
                {customerTab && (
                  <>
                    <div className="costomer_tab rj " id="tab2">
                      <div className="row">
                        <div className="col-lg-4 col-md-3">
                          <div className="costomer_tab_right">
                            <Image
                              width={300}
                              height={100}
                              src="/img/ecommercewebsite/ecommerce_customer_mobile.png"
                              className="lazy"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-9">
                          <div className="costomer_tab_left tab_bbx_ecommerce">
                            <ul>
                              <li>
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-customer-icon1.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Secure Login
                                  <div className="product-idea">
                                    <p>
                                      User / Customer can log in securely on the
                                      website.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-customer-icon2.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Manage Profile
                                  <div className="product-idea">
                                    <p>
                                      User / Customer can manage and update his
                                      profile from my account panel.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="b-right">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-customer-icon3.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Guest Checkout
                                  <div className="product-idea">
                                    <p>
                                      User / Customer can checkout as a guest on
                                      the website with a faster approach.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-customer-icon4.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Manage Cart
                                  <div className="product-idea">
                                    <p>
                                      Users / Customers can add, update, and
                                      remove the cart items on the cart page.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-customer-icon5.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Products Variations
                                  <div className="product-idea">
                                    <p>
                                      Users / Customers can view the products
                                      with different variations and add to the
                                      cart for purchase.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="b-right">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-customer-icon6.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Easy Shopping
                                  <div className="product-idea">
                                    <p>
                                      Users / Customers can view the products
                                      under the sections and categories which
                                      makes shopping easy.
                                    </p>
                                  </div>
                                </span>
                              </li>

                              <li>
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-customer-icon7.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Search with Category
                                  <div className="product-idea">
                                    <p>
                                      Users / Customers can search the products
                                      with the category and keyword added by the
                                      user.
                                    </p>
                                  </div>
                                </span>
                              </li>

                              <li>
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-customer-icon8.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Place Orders
                                  <div className="product-idea">
                                    <p>
                                      Users / Customers can place orders for
                                      buying the product on the auction and
                                      check their orders in their dashboard.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="b-right">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-customer-icon9.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Check Orders
                                  <div className="product-idea">
                                    <p>
                                      Users / Customers can check orders for
                                      buying the product with payment history
                                      and check their orders in their dashboard.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-customer-icon10.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Email Notifications
                                  <div className="product-idea">
                                    <p>
                                      Users / Customers can get email
                                      notifications for placing orders for
                                      buying the product.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-customer-icon11.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Add Review
                                  <div className="product-idea">
                                    <p>
                                      Users / Customers can add reviews and
                                      ratings on the products.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="b-right">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-customer-icon12.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Manage Address Book
                                  <div className="product-idea">
                                    <p>
                                      Users / Customers can manage their billing
                                      and shipping addresses in their own
                                      dashboard.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="b-bottom">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-Invoice-icon.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Invoice Generation
                                  <div className="product-idea">
                                    <p>
                                      Users / Customers can get and download a
                                      copy of the invoice after placing the
                                      order on the website.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="b-bottom">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-Return-icon.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Return Orders
                                  <div className="product-idea">
                                    <p>
                                      Customer can return his order after
                                      successfully placing the order.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="b-bottom b-right">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-Wishlist-icon.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Wishlist
                                  <div className="product-idea">
                                    <p>
                                      Customer can add and save products to his
                                      wishlist once logged in.
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
                          <div className="costomer_tab_right costomer_tab_rightleft2 ecommerce-admin-tbab">
                            <div className="ecommerce-admin-bax"></div>
                            <div className="ecommerce-admin-bax2"></div>
                            <Image
                              width={300}
                              height={100}
                              src="/img/ecommercewebsite/ecommerce-admin-img.png"
                              alt="Admin Panel"
                              className="lazy"
                            />
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-9">
                          <div className="costomer_tab_left costomer_tab_leftright2 tab_bbx_ecommerce">
                            <ul>
                              <li>
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-admin-icon1.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Secure Login
                                  <div className="product-idea">
                                    <p>
                                      Admin can log in securely in the admin
                                      panel.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-admin-icon2.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Manage Dashboard
                                  <div className="product-idea">
                                    <p>
                                      Admin can view and manage the products and
                                      add multiple products.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="b-right">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-admin-icon9.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Manage Customers
                                  <div className="product-idea">
                                    <p>
                                      Admin can add and manage users/customers
                                      from the backend.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-admin-icon3.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Infinite Categories
                                  <div className="product-idea">
                                    <p>
                                      Admin can add multiple categories and
                                      subcategories for the product type from
                                      the backend with categories under the
                                      section.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-admin-icon4.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Manage Brands
                                  <div className="product-idea">
                                    <p>
                                      Admin can manage brands for the products
                                      from the backend.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="b-right">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-admin-icon10.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Manage Catalogue Products
                                  <div className="product-idea">
                                    <p>
                                      Admin can add and manage all the catalogue
                                      products with variations from the backend.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-admin-icon5.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Manage Reviews
                                  <div className="product-idea">
                                    <p>
                                      Admin can manage reviews and ratings for
                                      products added by the customers and
                                      activate and deactivate them from the
                                      backend.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-admin-icon6.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Manage Coupons
                                  <div className="product-idea">
                                    <p>
                                      Admin can manage coupons and add discount
                                      coupons for products from the backend.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="b-right">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-admin-icon11.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Schedule Sale
                                  <div className="product-idea">
                                    <p>
                                      Admin can schedule sales for the products
                                      with sale dates as well as add category
                                      discounts for products from the backend.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-admin-icon7.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Manage Orders
                                  <div className="product-idea">
                                    <p>
                                      Admin can manage customer orders and
                                      update order status with order data, user
                                      details, and payment methods from the
                                      backend.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-admin-icon8.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Manage Shipping Charges
                                  <div className="product-idea">
                                    <p>
                                      Admin can add and manage shipping charges
                                      based on the countries and
                                      activate/deactivate the shipping charges
                                      from the backend.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="b-right">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-admin-icon12.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Manage Reports
                                  <div className="product-idea">
                                    <p>
                                      Admin can view reports for the
                                      customer&apos;s orders with all order data
                                      with status and date-to-date reports from
                                      the backend.
                                    </p>
                                  </div>
                                </span>
                              </li>

                              <li className="">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-Discount-icon.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Discount types
                                  <div className="product-idea">
                                    <p>
                                      Admin can set discounts on the products as
                                      well as category level from the backend.
                                      First priority is given to the product
                                      level discount and second priority is
                                      given to the category discount during the
                                      checkout process.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-Variable-icon.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Variable and Grouped Products
                                  <div className="product-idea">
                                    <p>
                                      Admin can add variable products with
                                      different variations like size, weight,
                                      and colors, with various prices for the
                                      products page. Admin can also group
                                      similar products by adding the group code
                                      on the products page.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="b-right">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-Country-icon.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Country Management
                                  <div className="product-idea">
                                    <p>
                                      Admin can add various countries and states
                                      from the backend and activate and
                                      deactivate it for displaying to the
                                      frontend.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="b-bottom">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-Payments-icon.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Manage Payments
                                  <div className="product-idea">
                                    <p>
                                      Admin can view and manage payments made by
                                      the customers through PayPal or an online
                                      payment gateway using the payment records
                                      and transaction IDs.
                                    </p>
                                  </div>
                                </span>
                              </li>

                              <li className="b-bottom">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-Pages-icon.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Manage Pages
                                  <div className="product-idea">
                                    <p>
                                      Admin can manage pages for page
                                      management, he can add, edit, and delete
                                      pag&apos;s contents.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li className="b-bottom b-right">
                                <i>
                                  <Image
                                    width={47}
                                    height={100}
                                    alt="img"
                                    src="/img/ecommercewebsite/ecommerce-Tax-icon.png"
                                    className="lazy"
                                  />
                                </i>
                                <span>
                                  Manage Tax
                                  <div className="product-idea">
                                    <p>
                                      Admin can manage tax rates for the
                                      countries from the tax management.
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
        <section className="used_technology_section" id="technologies">
          <div className="container">
            <h4 className="title_main">
              We Will Be Using Following Technologies
            </h4>
            <div className="used_technology_section_dataa">
              <div className="row">
                <div className="col-sm-6">
                  <ul>
                    <li data-aos="fade-up" className="aos-init aos-animate">
                      <div className="icntechimg">
                        <Image
                          width={60}
                          height={100}
                          src="/img/ecommercewebsite/LaravelLogo.png"
                          alt="Laravel Development"
                          className="lazy"
                        />
                      </div>
                      <div className="icntechimg_nm">Laravel</div>
                    </li>
                    <li data-aos="fade-up" className="aos-init aos-animate">
                      <div className="icntechimg">
                        <Image
                          width={60}
                          height={100}
                          src="/img/ecommercewebsite/html-5.png"
                          alt="HTML5"
                          className="lazy"
                        />
                      </div>
                      <div className="icntechimg_nm">HTML5</div>
                    </li>
                    <li data-aos="fade-up" className="aos-init aos-animate">
                      <div className="icntechimg">
                        <Image
                          width={60}
                          height={100}
                          src="/img/ecommercewebsite/tech_mysql_icon.png"
                          alt="MySQL"
                          className="lazy"
                        />
                      </div>
                      <div className="icntechimg_nm">MySQL</div>
                    </li>
                    <li data-aos="fade-up" className="aos-init aos-animate">
                      <div className="icntechimg">
                        <Image
                          width={60}
                          height={100}
                          src="/img/ecommercewebsite/tech_apache_icon.png"
                          alt="Apache"
                          className="lazy"
                        />
                      </div>
                      <div className="icntechimg_nm">Apache</div>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="list_detail">
                    <li className="same">
                      <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera
                      30.0+, Safari 5+, IE 9+
                    </li>
                    <li className="same">
                      <b>Framework - </b> Laravel 8.76
                    </li>
                    <li className="same">
                      <b>Language - </b> PHP 8, AJAX, jQuery
                    </li>
                    <li className="other">
                      <b>Design - </b> HTML 5, CSS 3, JavaScript
                    </li>
                    <li className="other ">
                      <b>Database - </b> MySQL 5.5+
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
        <section className="used_ecommerce_section">
          <div className="container">
            <div className="used_ecommerce__bx"></div>
            <div className="ecommerce-web-proje">
              <h2>Featured Ecommerce Website Projects</h2>
              <p>
                Do you have a specific ecommerce platform of choice? Our
                development team supports all the major ecommerce platforms like
                WooCommerce, Custom Development using Laravel framework,
                Magento, etc.
              </p>
              <div className="ecommerce-projects">
                <div
                  id="slide-website-portfolio2"
                  className="slide-website-services"
                >
                  <Slider {...portfolio}>
                    <div className="ecommerce-projects--bx">
                      <div className="ecommerce-projects--img">
                        <Image
                          width={800}
                          height={500 / (100 / 100)}
                          src="/img/ecommercewebsite/ecommerce-project-img1.png"
                          alt="eCommerce Ultimate Package"
                          className=""
                        />
                      </div>
                      <div className="ecommerce-projects--details">
                        <h5>Ecommerce</h5>
                        <h3>Mastercut Ecommerce</h3>
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>

                    <div className="ecommerce-projects--bx">
                      <div className="ecommerce-projects--img">
                        <Image
                          width={800}
                          height={500 / (100 / 100)}
                          src="/img/ecommercewebsite/ecommerce-project-img2.png"
                          alt="eCommerce Ultimate Package"
                          className=""
                        />
                      </div>
                      <div className="ecommerce-projects--details">
                        <h5>Ecommerce</h5>
                        <h3>Good Luck Ecommerce</h3>
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div className="ecommerce-projects--bx">
                      <div className="ecommerce-projects--img">
                        <Image
                          width={800}
                          height={500 / (100 / 100)}
                          src="/img/ecommercewebsite/onebed-img.png"
                          alt="eCommerce Ultimate Package"
                          className=""
                        />
                      </div>
                      <div className="ecommerce-projects--details">
                        <h5>Ecommerce</h5>
                        <h3>Onebed Ecommerce</h3>
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div className="ecommerce-projects--bx">
                      <div className="ecommerce-projects--img">
                        <Image
                          width={800}
                          height={500 / (100 / 100)}
                          src="/img/ecommercewebsite/vanessajo-img.png"
                          alt="eCommerce Ultimate Package"
                          className=""
                        />
                      </div>
                      <div className="ecommerce-projects--details">
                        <h5>Ecommerce</h5>
                        <h3>Vanessajo Ecommerce</h3>
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div className="ecommerce-projects--bx">
                      <div className="ecommerce-projects--img">
                        <Image
                          width={800}
                          height={500 / (100 / 100)}
                          src="/img/ecommercewebsite/la-maison-img.png"
                          alt="eCommerce Ultimate Package"
                          className=""
                        />
                      </div>
                      <div className="ecommerce-projects--details">
                        <h5>Ecommerce</h5>
                        <h3>La Maison Chic Ecommerce</h3>
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div className="ecommerce-projects--bx">
                      <div className="ecommerce-projects--img">
                        <Image
                          width={800}
                          height={500 / (100 / 100)}
                          src="/img/ecommercewebsite/altijdbon-img.png"
                          alt="eCommerce Ultimate Package"
                          className=""
                        />
                      </div>
                      <div className="ecommerce-projects--details">
                        <h5>Ecommerce</h5>
                        <h3>Altijdbon Ecommerce</h3>
                        <i
                          className="fa-solid fa-earth-americas"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </Slider>
                </div>
                <div className="vill-all-projects">
                  <Link href="/portfolio" className="btn btn-primary">
                    View all Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ecommerce_review_section" id="reviews">
          <div className="ecommerce_review__img">
            <Image
              width={500}
              height={500 / (100 / 100)}
              src="/img/ecommercewebsite/ecommerce-review-img.png"
              alt="eCommerce Ultimate Package"
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
                      I have approached Logicspice for making a customized
                      eCommerce website for my own business over the eCommerce
                      platform, they did a great job. Gave quick response and
                      support for each query. Thank you Logicspice, Highly
                      Recommended!
                    </div>
                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Marcus Cruz, Canadamobile app development in USA
                      <span className="ReviewFlagBx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/ecommercewebsite/canada-flag.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext" id="fiveer-clone">
                      Feature-rich online grocery software with an easy
                      installation process over the WooCommerce platform. The
                      team Logicspice guided me with full details and installed
                      the software for me. Fast response, proper guidance, and
                      free consultation, Good Job Logicspice, Highly
                      recommended!
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">
                        Lisa Jonhathan, Switzerland mobile app development in
                        USA
                      </span>{" "}
                      <span className="ReviewFlagBx">
                        <Image
                          width={100}
                          height={100}
                          src="/img/ecommercewebsite/switzerland_flag_img.png"
                          alt="mobile app development in USA"
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
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">51</div>
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
                          style={{ width: "10%" }}
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
                      title="eCommerce Ultimate Package"
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
            <div className="row ecommerce__Quick_FAQ">
              <div className="col-md-12 ecommerce__Quick_FAQ">
                <h4 className="title_main">Quick FAQ</h4>
                <div className="panel-group faq_quick_sec" id="accordion">
                  <MDBAccordion v-model="activeItem" borderless>
                    <MDBAccordionItem
                      // headerTitle="Can the owner of the business upload more than one product on the website?"
                      collapseId="flush-collapse1"
                      data-aos="fade-up"
                      headerTitle={
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            cursor: "pointer",
                          }}
                          onClick={() => toggleActiveItem("flush-collapse1")}
                        >
                          <span>
                            Can the owner of the business upload more than one
                            product on the website?
                          </span>
                          {activeItem === "flush-collapse1" ? (
                            <KeyboardArrowDownIcon />
                          ) : (
                            <KeyboardArrowRightIcon />
                          )}
                        </div>
                      }
                    >
                      <p>
                        Yes, the owner of the business can add multiple
                        products.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      // headerTitle="Does the customer have to create an account before ordering a product?"
                      collapseId="flush-collapse2"
                      data-aos="fade-up"
                      headerTitle={
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            cursor: "pointer",
                          }}
                          onClick={() => toggleActiveItem("flush-collapse2")}
                        >
                          <span>
                            Can the owner of the business upload more than one
                            product on the website?
                          </span>
                          {activeItem === "flush-collapse2" ? (
                            <KeyboardArrowDownIcon />
                          ) : (
                            <KeyboardArrowRightIcon />
                          )}
                        </div>
                      }
                    >
                      <p>
                        Yes, for ordering any product, customers will have to
                        create an account first, then can continue with the
                        ordering process, for faster checkout users can checkout
                        as a guest user, and the customer account is created
                        while placing the order, and the customer gets notified
                        with his login details through email notification.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      // headerTitle="Can the customer return the ordered product, if wrongly purchased or for any valid reason?"
                      collapseId="flush-collapse3"
                    >
                      <p>
                        Yes, registered customers can send a return order
                        request to the admin with the return request reason, If
                        the return request reason is found valid, the admin can
                        process the return request with the further process.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="After I purchase this software, Will I be able to use it on multiple domains?"
                      collapseId="flush-collapse4"
                    >
                      <p>
                        No, you will be licensed to use it only for the domain
                        you purchased.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Can I resell the software? Will I have rights over the software code?"
                      collapseId="flush-collapse5"
                    >
                      <p>
                        All rights will remain with Logicspice only, and you can
                        not resell it and there will be no access to the code
                        for the client.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How many days will it take to implement the customization?"
                      collapseId="flush-collapse6"
                    >
                      <p>
                        The time taken to implement your e-Commerce Website
                        depends on the level of customization and data
                        migration. The time frame generally ranges from 1 to 2
                        business days.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Do you offer a money-back guarantee?"
                      collapseId="flush-collapse7"
                    >
                      <p>
                        Yes, we offer a 30-day money-back guarantee to ensure
                        customer satisfaction with our products. If for any
                        reason, you wish to discontinue using the product, you
                        can ask us for a refund. We will refund your total
                        money. Any cost of customization will not be refunded
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How long is the technical support provided by Logicspice?"
                      collapseId="flush-collapse8"
                    >
                      <p>
                        As we desire to keep long-term relationships with our
                        clients, we are always ready to provide technical
                        support during working hours.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Are there any hidden charges or installation charges?"
                      collapseId="flush-collapse9"
                    >
                      <p>
                        We don&apos;t have any type of hidden charges and after
                        buying a package, there will be zero setup charges.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How the hosting services will work."
                      collapseId="flush-collapse10"
                    >
                      <p>
                        There will be no change for the hosting services as we
                        are hosting the website under the package. Domain needs
                        to be purchased and managed by you.
                      </p>
                    </MDBAccordionItem>
                  </MDBAccordion>
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
                  <a>Enquire Now</a>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="eCommerce Ultimate Package"
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="latest_feature_product">
          <div className="container">
            <h2 className="title_main">Other Popular Products</h2>
            <div className="other-product-box">
              <div className="row">
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                    <Link
                      title="View Detail"
                      target="_black"
                      href="/groupon-clone"
                    >
                      <div className="caption">
                        <div className="other-caption-bx">
                          <h3>Groupon clone</h3>
                          <div className="other-project-logo">
                            <Image
                              width={150}
                              height={100}
                              src="/img/ecommercewebsite/groupon-clone-logo.png"
                              alt="Groupon clone"
                              className=""
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
                              width={230}
                              height={100}
                              src="/img/ecommercewebsite/equipment_logo_new.png"
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
                              width={250}
                              height={100}
                              src="/img/ecommercewebsite/job-board-logo.png"
                              alt="Job board software"
                              className=""
                            />
                          </div>
                          <p>
                            <span>Best white label job board software.</span>{" "}
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
      </div>
    </>
  );
};

export default Page;
