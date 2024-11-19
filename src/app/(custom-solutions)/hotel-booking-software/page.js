"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
import { Modal, ModalBody } from "react-bootstrap";
import "../../resposive.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [jobportal, setJobportal] = useState(false);
  const [buyjobportal, setBuyJobportal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const toggleJobPortalModal = () => setJobportal(!jobportal);
  const toggleBuyJobPortalModal = () => setBuyJobportal(!buyjobportal);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const openModal = () => {

    setShowModal(!showModal);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
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
  return (
    <>
      <NavBar />

      <section className="job-portal-banner job-portal-bg NewJobSiteDesign fiverr-new-banner JobBoardNewDesign HotelBookingSoftwareBanner">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>LS Room Reserver - Hotel Booking Software</h1>
              <div className="both-left-p-sec">
                <h2>Software Excellence for Superior Stays!</h2>
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

                <div className="job-valu-btn">
                  <span>Fill your basic details and</span>
                  <div className="btn btn-get" onClick={openModal}>
                    <a>Enquiry Now</a>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="LS Room Reserver - Hotel Booking Software"
                      />
                    }
                  </div>
                </div>
                <div className="jocpp">
                  <ul className="job-pr-icon" style={{ display: "none" }}>
                    <li>
                      <i className="fa fa-globe" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-android" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-apple" aria-hidden="true"></i>
                    </li>
                  </ul>
                  <div className="portel-btnbx">
                    <div className="line-border">
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/stars.png"
                        alt=""
                        className="lazy"
                      />
                      <p>228 Reviews</p>
                    </div>

                    <a
                      className="btn text-primary jobportal-btn js-anchor-link"
                      style={{ display: "none" }}
                      href="#subscriptionmodel"
                    >
                      <i>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/images/product_new/subscription2.png"
                          alt="subscription"
                        />
                      </i>
                      Subscription Model
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-5 noposition">
              <div className="por-mobile-new">
                <Image
                  unoptimized={true}
                  width={350}
                  height={100 / 100 / 10}
                  src="/img/hotelbooking/hotelbooking-banner-img.png"
                  alt="hotel booking"
                  className="lazy"
                />
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
                    Hotel Booking Software
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new">
        <div className="container">
          <p>
            Hotel booking software is a sophisticated system designed to
            facilitate booking acceptance and payment processing directly from
            the platform. This software opens up new sales channels and
            maximizes occupancy rates. It enhances online visibility, ultimately
            boosting revenues.
            <br />
            For tourism businesses, having hotel management software is crucial
            to staying competitive. Logicspice can turn your hotel reservation
            business dream into reality. We developed the web version of
            software with the latest technologies and offer customization
            services to develop the optimal hotel booking software customize to
            your needs, with an additional cost.
          </p>
        </div>
      </section>
      <section
        className="client-say crowdfunding-say"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5 job-video">
              <Image
                unoptimized={true}
                width={400}
                height={100}
                src="/img/hotelbooking/hotelbooking-img.png"
                alt="hotel booking"
                className="lazy"
              />
            </div>
            <div className="col-md-7">
              <div className="OrderManagementSoftwareFeatures HotelBokingSoftwareFeatures">
                <ul>
                  <li>Online Booking Management</li>
                  <li>Inventory Tracking System</li>
                  <li>Real Time Room Availability</li>
                  <li>Integrated Booking Calendar</li>
                  <li>Secure Payment Processing</li>
                  <li>Automated Email Notifications</li>
                  <li>Reservation Management Tools</li>
                  <li>Flexible Cancellation Policies</li>
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
              Exploring the Features of LS Room Reserver Software
            </h2>
          </div>

          <div className="tatxt_txt_job">
            LS Room Reserver is a hotel booking software designed to simplify
            the reservation process. It offers features such as online booking
            management, real time room availability updates, secure payment
            processing, and efficient reservation management tools. With
            inventory tracking, reporting, and analytics features, LS Room
            Reserver provides valuable insights for hotel operations. Its mobile
            friendly interface ensures a smooth booking experience for
            customers, making it an ideal solution for hotels looking to enhance
            their booking process.
          </div>

          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job HotelBookingTabs">
              <ul className="JobBoardNewtab">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${
                    sellerTab ? "active" : ""
                  }`}
                  onClick={() => handleSellerTab()}
                  style={{ cursor: "pointer" }}
                >
                  <a>Hotel Owner</a>
                </li>
                <li
                  id="tab2_li"
                  className={`emplyer_app_job ddlj ${buyerTab ? "active" : ""}`}
                  onClick={() => handleBuyerTab()}
                  style={{ cursor: "pointer" }}
                >
                  <a>Customer</a>
                </li>
                <li
                  id="tab3_li"
                  className={`admin_app_job ddlj ${adminTab ? "active" : ""}`}
                  onClick={() => handleAdminTab()}
                  style={{ cursor: "pointer" }}
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
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/hotelbooking/efficient-reservation-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Efficient Reservation Management
                                <div className="product-idea">
                                  <p>
                                    Easily manage reservations, including
                                    booking, modifying, and canceling rooms.
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
                                  src="/img/hotelbooking/room-availability-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Room Availability
                                <div className="product-idea">
                                  <p>
                                    Keep track of real time room availability to
                                    avoid overbooking and optimize occupancy.
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
                                  src="/img/hotelbooking/relationship-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Customer Relationship Management (CRM)
                                <div className="product-idea">
                                  <p>
                                    Manage guest interactions, preferences, and
                                    feedback to provide personalized experiences
                                    and improve guest satisfaction.
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
                                  src="/img/hotelbooking/payment-processing-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Payment Processing
                                <div className="product-idea">
                                  <p>
                                    Securely process payments for reservations,
                                    offering convenience to guests and ensuring
                                    smooth transactions.
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
                                  src="/img/hotelbooking/reporting-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Reporting and Analytics
                                <div className="product-idea">
                                  <p>
                                    Access detailed reports and analytics on
                                    bookings, revenue, and occupancy rates to
                                    make informed decisions.
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
                                  src="/img/hotelbooking/inventory-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Inventory Management
                                <div className="product-idea">
                                  <p>
                                    Manage room inventory effectively, ensuring
                                    rooms are available when needed and
                                    maximizing revenue.
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
                                  src="/img/hotelbooking/mobile-compatibility-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Mobile Compatibility
                                <div className="product-idea">
                                  <p>
                                    Access the software and manage bookings from
                                    mobile devices, providing flexibility and
                                    convenience to access software with any type
                                    of mobile devices.
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
                                  src="/img/hotelbooking/booking-rules-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Customizable Booking Rules
                                <div className="product-idea">
                                  <p>
                                    Set rules for minimum stays, maximum
                                    occupancy, and other parameters to optimize
                                    room utilization and revenue.
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
                                  src="/img/hotelbooking/user-friendly-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                User-Friendly Interface
                                <div className="product-idea">
                                  <p>
                                    Easy-to-use interface for efficient
                                    management of hotel bookings and operations.
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
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/hotelbooking/easy-booking-icon.png "
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Easy Booking Process
                                <div className="product-idea">
                                  <p>
                                    Simplified and user-friendly booking
                                    interface for quick and hassle-free
                                    reservations.
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
                                  src="/img/hotelbooking/real-time-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Real-Time Availability
                                <div className="product-idea">
                                  <p>
                                    Instant access to room availability,
                                    ensuring customers can book their preferred
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
                                  src="/img/hotelbooking/secure-payment-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Secure Payment Options
                                <div className="product-idea">
                                  <p>
                                    Safe and secure online payment processing
                                    for booking confirmation.
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
                                  src="/img/hotelbooking/search-filters-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Flexible Search Filters
                                <div className="product-idea">
                                  <p>
                                    Customizable search filters to find the
                                    perfect room based on preferences like
                                    price, amenities, and location.
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
                                  src="/img/hotelbooking/room-information-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Detailed Room Information
                                <div className="product-idea">
                                  <p>
                                    Comprehensive room descriptions, images, and
                                    amenities lists to help customers make
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
                                  src="/img/hotelbooking/special-offers-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Special Offers and Discounts
                                <div className="product-idea">
                                  <p>
                                    Access to exclusive deals, discounts, and
                                    promotional offers for cost-effective
                                    bookings.
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
                                  src="/img/hotelbooking/booking-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Booking Management
                                <div className="product-idea">
                                  <p>
                                    Ability to manage bookings, including
                                    modifications and cancellations,
                                    conveniently through the platform.
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
                                  src="/img/hotelbooking/social-media-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Social Media Integration
                                <div className="product-idea">
                                  <p>
                                    Allow customers to share their booking or
                                    hotel experience on social media, helping to
                                    promote your property organically.
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
                                  src="/img/hotelbooking/room-customization-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Room Customization
                                <div className="product-idea">
                                  <p>
                                    {" "}
                                    Allow customers to customize their room
                                    selection by choosing specific room
                                    features, such as a view, bed type, or floor
                                    level.
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
                      <div className="col-lg-12 col-md-12">
                        <div className="costomer_tab_left costomer_tab_leftright2">
                          <ul>
                            <li>
                              <i>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/hotelbooking/dashboard-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Dashboard
                                <div className="product-idea">
                                  <p>
                                    A comprehensive dashboard providing an
                                    overview of key metrics, such as bookings,
                                    revenue, and occupancy rates, as well as
                                    quick access to important functionalities.
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
                                  src="/img/hotelbooking/user-management-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                User Management
                                <div className="product-idea">
                                  <p>
                                    Manage user accounts and permissions,
                                    including adding new users, assigning roles,
                                    and monitoring user activity.
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
                                  src="/img/hotelbooking/inventory-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Inventory Management
                                <div className="product-idea">
                                  <p>
                                    Manage room inventory, including adding new
                                    rooms, updating room details, and setting
                                    availability.
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
                                  src="/img/hotelbooking/booking-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Booking Management
                                <div className="product-idea">
                                  <p>
                                    View, modify, and cancel bookings, as well
                                    as manage waitlists and room assignments.
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
                                  src="/img/hotelbooking/task-management-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Task Management
                                <div className="product-idea">
                                  <p>
                                    Assign tasks to staff members, track task
                                    progress, and ensure efficient management of
                                    daily operations.
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
                                  src="/img/hotelbooking/payment-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Payment Management
                                <div className="product-idea">
                                  <p>
                                    Monitor and manage payments, including
                                    processing refunds, viewing payment history,
                                    and generating financial reports.
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
                                  src="/img/hotelbooking/relationship-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Customer Relationship Management (CRM)
                                <div className="product-idea">
                                  <p>
                                    Manage guest profiles, preferences, and
                                    feedback to personalize guest experiences
                                    and improve satisfaction.
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
                                  src="/img/hotelbooking/email-campaigns-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Email Campaigns
                                <div className="product-idea">
                                  <p>
                                    Create and send targeted email campaigns to
                                    guests based on their booking history,
                                    preferences, or special occasions. Admins
                                    can use this feature to promote special
                                    offers, events, and loyalty programs, and
                                    stay connected with guests.
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
                                  src="/img/hotelbooking/rate-management-icon.png"
                                  className="lazy"
                                />
                              </i>
                              <span>
                                Rate Management
                                <div className="product-idea">
                                  <p>
                                    Manage room rates, including setting
                                    seasonal pricing, discounts, and special
                                    offers to maximize revenue.
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
      <section
        className="SubscriptionModel"
        id="subscriptionmodel"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Subscription Model</h2>
            <br />
            <div className="SubscriptionModelBx">
              <p>Key Benefits:</p>
              <ul>
                <li>
                  <span>
                    Lifetime Updates: Enjoy complimentary updates for your
                    software version throughout its lifespan, including{" "}
                    <strong>Free bug & security fixes</strong> under the
                    subscription model.
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
                    <strong>Zero Setup Fees</strong>:- Customers can easily get
                    started with the <strong>Search Engine Friendly</strong>{" "}
                    software as there are no additional charges for setup and
                    installation, ensuring a smooth onboarding experience.
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
                    Enduring Support: Our dedicated{" "}
                    <strong>Customer Care team</strong> is dedicated to
                    providing lifelong assistance through our subscription
                    model. Any software issues that arise will be promptly
                    addressed by our dedicated technical team during office
                    hours.
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
                $895<span className="sml_labl"> INR</span>
              </h4>
              <strike className="srik_cls">
                $1500<span className="sml_labl"> USD</span>
              </strike>
              <div className="SubscriptionModelPriceBtn">
                <div className="btn btn-get" onClick={openModal}>
                  <a>Enquire Now</a>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="LS Room Reserver - Hotel Booking Software"
                    />
                  }
                </div>
              </div>
              <div className="jocpp">
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
                    <p>288 Reviews</p>
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
              <a href="#" onClick={toggleModal}>
                contact us
              </a>
              .
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
                        width={40}
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
                        width={57}
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
                    <b>Framework - </b> Laravel 10.x
                  </li>
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Language - </b> PHP 8.2 Supported, AJAX, jQuery
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
                    <b>Design - </b> HTML 5, CSS 3, Bootstrap 3.3.7, JavaScript
                  </li>
                  <li className="other aos-init" data-aos="fade-up">
                    <b>Database - </b> MySQL 5.5+{" "}
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
            {/* What <span>support</span> you will get? */}
            What kind of assistance will you receive?
          </h4>
          <div className="supportsetting">
            <ul>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                    width={50}
                    height={100}
                  />
                </div>
                <div className="supportsettingtext">
                  3-Months of Free Support
                </div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                    width={50}
                    height={100}
                  />
                </div>
                <div className="supportsettingtext">
                  Brand Removal at No Cost
                </div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    src="/img/jobboard/free_instal.png"
                    alt="manager_icn"
                    width={50}
                    height={100}
                  />
                </div>
                <div className="supportsettingtext">
                  Complimentary Installation
                </div>
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
                <div className="supportsettingtext">Effortless Scalability</div>
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
                  width={100}
                  height={100}
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
                        LS Room Reserver has simplified our hotel booking
                        process. The software is user-friendly, and the
                        customization options provided by Logicspice are
                        excellent. The support team is also very responsive and
                        helpful.
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
                        John D. (Canada)
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
                        We have been using LS Room Reserver for over a year now,
                        and it has greatly improved our efficiency. The software
                        is feature-rich and easy to use. Logicspice has done a
                        great job with this product.
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
                        Sarah K. (UK)
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
                  <div className="CustomerReviewsMainBx">
                    <div className="CustomerReviewsBx">
                      <p>
                        Logicspice&apos;s LS Room Reserver has been a
                        game-changer for our hotel. The software is robust, and
                        the team at Logicspice has been very supportive
                        throughout the implementation process. Highly
                        recommended.
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
                        Michael P. (Australia)
                        <i className="contry-flag">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            alt="customer-reviews"
                            src="/img/jobboard/australia_flag_img.png"
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
                    <div className="people_star_num">28</div>
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
                    title=" Free Script"
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
          <div className="CustomQuickFAQScript">
            <div className="row">
              <div className="col-md-5">
                <h4 className="title_main">
                  Frequently <br />
                  Asked Questions
                </h4>
                <div className="FaqImgBx">
                  <Image
                    unoptimized={true}
                    width={350}
                    height={100 / 100 / 10}
                    src="/img/ordermanagement/freescript-faq.png"
                    alt="Free Script"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="panel-group faq_quick_sec" id="accordion">
                  <MDBAccordion v-model="activeItem" borderless>
                    <MDBAccordionItem
                      headerTitle="What is LS Room Reserver?"
                      collapseId="flush-collapse1"
                    >
                      <p>
                        LS Room Reserver is a comprehensive hotel booking
                        software developed by Logicspice. It helps hotels manage
                        their room inventory, bookings, and guest information
                        efficiently.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What features does LS Room Reserver offer?"
                      collapseId="flush-collapse2"
                    >
                      <p>
                        LS Room Reserver offers a wide range of features,
                        including online booking management, room availability
                        tracking, guest management, reporting and analytics, and
                        customizable booking rules.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Is LS Room Reserver suitable for small hotels and large hotel chains?"
                      collapseId="flush-collapse3"
                    >
                      <p>
                        Yes, LS Room Reserver is designed to meet the needs of
                        both small hotels and large hotel chains. It can be
                        adapted to suit the specific requirements of each
                        property.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How can hotels customize LS Room Reserver to meet their specific needs?"
                      collapseId="flush-collapse4"
                    >
                      <p>
                        LS Room Reserver offers a range of customization
                        options, allowing hotels to tailor the software to their
                        specific requirements. This includes customizing booking
                        rules, room rates, and guest preferences.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Can LS Room Reserver be accessed from mobile devices?"
                      collapseId="flush-collapse5"
                    >
                      <p>
                        Yes, LS Room Reserver is mobile-responsive, allowing
                        users to access the software from their smartphones or
                        tablets. This enables hotel staff to manage bookings and
                        guest information on-the-go, enhancing operational
                        efficiency.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How user-friendly is the Hotel Booking Software?"
                      collapseId="flush-collapse6"
                    >
                      <p>
                        Look for intuitive interfaces, customizable features,
                        and adequate training options to ensure a smooth
                        onboarding process.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What kind of support is provided with the software?"
                      collapseId="flush-collapse7"
                    >
                      <p>
                        Check for customer service, training resources, and
                        ongoing assistance to meet your business needs.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Am I permitted to eliminate your company's proprietary notices?"
                      collapseId="flush-collapse8"
                    >
                      <p>
                        You have the flexibility to modify the software by
                        removing our company information and substituting it
                        with yours. However, it is not permissible to include
                        &quot;copyright by&quot; since exclusive copyright
                        ownership for the software rests with us.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How long does it take to receive the software after I purchase it?"
                      collapseId="flush-collapse9"
                    >
                      <p>
                        It will take a minimum 48 hours after payment.You will
                        receive an email message with login details for your
                        personal account where the software can be downloaded.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Will you deliver the exact product as shown in the demo?"
                      collapseId="flush-collapse10"
                    >
                      <p>
                        Yes, We deliver the exact product. We don&apos;t
                        compromise with quality at all.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Do you offer a Money Back Guarantee?"
                      collapseId="flush-collapse11"
                    >
                      <p>
                        Yes, we provide a 30 days money back guarantee to ensure
                        customer satisfaction with our software. If, for any
                        reason, you decide to stop using the product, you can
                        request a refund. We will reimburse the entire amount,
                        excluding the installation and configuration charges,
                        which are either USD 65 or 20% of the application cost,
                        whichever is higher. Please note that the money back
                        guarantee does not apply to customers who have received
                        updates as per their specific requests, taking into
                        account the significant efforts and time invested by the
                        team for their project.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Are you willing to advise us with ideas?"
                      collapseId="flush-collapse12"
                    >
                      <p>
                        Sure, we fulfill the client requirements always while
                        doing all customization work offered with additional
                        cost. Although client suggestions or ideas are always
                        welcomed which can make your business more interactive.
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
                <a>Enquire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="LS Room Reserver - Hotel Booking Software"
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
                    href="/inventory-management-software"
                    title="View Detail"
                    target="_black"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Inventory Management Software</h3>
                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            src="/img/jobboard/inventory-management-logo.png"
                            alt="Inventory Management Software"
                            width={114}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>Efficient Inventory Control and Tracking</span>{" "}
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
                            src="/img/jobboard/job-board-logo.png"
                            alt="Job Board Software"
                            width={259}
                            height={100}
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
                  <Link
                    href="/recruitment-management-software"
                    title="View Detail"
                    target="_black"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Recruitment Management Software</h3>

                        <div className="other-project-logo">
                          <Image
                            unoptimized={true}
                            src="/img/jobboard/rms_new.png"
                            alt="Recruitment Management Software"
                            width={253}
                            height={100}
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
