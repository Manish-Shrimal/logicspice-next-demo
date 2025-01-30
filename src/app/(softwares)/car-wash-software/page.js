"use client";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
// import "../../../../public/css/font-awesome.min.css";
import "../../../../public/css/font-awesome.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../resposive.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";

const Page = () => {
    const [activeIndex, setActiveIndex] = useState(null);

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
  const [showModal, setShowModal] = useState(false);
  const [jobportal, setJobportal] = useState(false);
  const [buyjobportal, setBuyJobportal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [demoAccessModal, setDemoAccessModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const toggleJobPortalModal = () => setJobportal(!jobportal);
  const toggleBuyJobPortalModal = () => setBuyJobportal(!buyjobportal);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const openModal = () => {
    // console.log(showModal);

    setShowModal(!showModal);
  };
  const openDemoAccessModal = () => {
    // console.log(showModal);

    setDemoAccessModal(!demoAccessModal);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };

  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        BaseAPI + "/product/Details/job-board-software"
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
  var companies = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  const [sellerTab, setSellerTab] = useState(true);
  const [buyerTab, setBuyerTab] = useState(false);
  const [adminTab, setAdminTab] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
  return (
    <>
            <Navbar />
      <div className="doctor_appointment">
        <section className="paid-pro job-portal-banner fiverr-new-banner job-portal-bg NewJobSiteDesign JobBoardNewDesign">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 col-md-7">
                <h1>Car Wash Management Software </h1>
                <div className="both-left-p-sec">
                  <h2>
                  Grow your car wash business with ease
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
                  {/* <div className="job-valu-btn">
                    <span>Fill your basic details and</span>

                    <div
                      className="btn-get"
                      onClick={openDemoAccessModal}
                      style={{ textAlign: "center" }}
                    >
                      <button>Get Demo Access!</button>
                      {
                        <GetDemoEnquiry
                          modalStatus={demoAccessModal}
                          toggle={openDemoAccessModal}
                          title="Please fill the form below and get access to the live demo of Car Wash Software
                          Software. See how it works yourself!"
                        />
                      }
                    </div>

                    <a
                      className=" fiverr-buys NewGreenBtnJob text-center"
                      href="/buy-now/doctor-appointment-scheduling-software"
                      id="buy_now_1"
                    >
                      BUY NOW
                    </a>
                  </div> */}
                   <div className="job-valu-btn">
                  <span>Fill your basic details and</span>

                  <div className="btn btn-get" onClick={openModal}>
                    <button>Enquire Now</button>
                    {
                      <SoftwareEnquiry
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Marketplace Software"
                      />
                    }
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
                      <p>192 Reviews</p>
                    </div>
                  </div>
                  <div className="jocpp robotic_icons">
                    <ul className="job-pr-icon jobwidthauto">
                      <li>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                      </li>
                    </ul>
                    {/* <div className="portel-btnbx">
                    <Link
                      href=""
                      className="StartFreeTrialBtn animate-charcter"
                      onClick={openModal}
                    >
                      <button>Start Free Trial</button>
                      {
                        <SoftwareEnquiry
                          modalStatus={showModal}
                          toggle={openModal}
                          title="Please fill the form"
                        />
                      }
                    </Link>

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
                          src="/app/webroot/img/images/product_new/subscription2.png"
                          alt="subscription"
                        />
                      </i>
                      Subscription Model
                    </a>
                  </div> */}
                  </div>
                </div>
              </div>
              <div className="col-sm-5 col-md-5">
                <div className="por-mobile-new">
                  <Image
                    width={550}
                    height={100 / (100 / 100)}
                    className="lazy"
                    src="/img/car-wash/car-wash-banner-img.png"
                    alt="Online Doctor Appointment Scheduling Software"
                    unoptimized={true}
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
                  Car Wash Software
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="job-section-top-new JobBoardSectionNew">
          <div className="container">
            <p style={{ display: "none" }}>
              LS Jobber, the{" "}
              <strong>
                <i>Job Board Software</i>
              </strong>{" "}
              has the best features for businesses to hire people online. With
              LS Jobber, jobseekers are able to search and apply for job
              openings, similar to well-known job boards such as Indeed,
              Monster, Naukri Clone &amp; CareerBuilder Clone. This{" "}
              <i>ready-to-use</i> job board script can be used by businesses,
              organizations, investors, recruitment companies, and other
              organizations to form their own job board with features like
              multiple resume uploads in different formats and video CV along
              with <strong>applicant tracking</strong>. Our team has crafted
              this cutting-edge, white-label job site solution to foster
              seamless connections between prospective employees and recruiters.
              LS Jobber is a ready-to-use Job Board Software that can assist you
              to launch your own <i>white Label job board</i> in less time.
            </p>
            <p>
            Logicspice provides a simple yet powerful solution to manage and expand your car wash business. Whether you run a fixed-location facility or offer mobile services. Our car wash software helps you handle customer inquiries, quotes, bookings, invoices, and payments, all from a single, user-friendly platform.
            </p>
            {/* <p>
              This white label solution offers complete customization to match
              your brand’s identity. It is a ready-to-use system designed for
              clinics, hospitals, and private practitioners. Quickly set up a
              personalized appointment booking system with minimal effort and in
              no time. Well organized scheduling system which improves the
              patient experience. Perfect for organizations aiming for
              efficient, branded healthcare management.
            </p> */}
            <p>
            With our Car cleaning app, you can efficiently manage your staff and car wash attendants, ensuring smooth daily operations. Additionally, our system securely stores customer details, including profiles, contact information, vehicle history, service records, appointment history, and feedback, all in the cloud for easy access. By choosing Logicspice, you can enhance customer experience, boost productivity, streamline operations, and drive higher revenue- all while simplifying the way you run your business.
            </p>
          </div>
        </section>
        <section
          className="client-say jobBoardNewSoftware"
          style={{ backgroundColor: "#f1f1f1" }}
        >
          <div className="container">
            <div className="row">
              {/* <div className="col-md-6 job-video">
              <iframe
                width="100%"
                height="312"
                src="https://www.youtube.com/embed/jZUjtbUTuHQ?si=NrWfYG4wQYAnm1bJ?rel=0&autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
              ></iframe>
            </div> */}
              <div className="col-md-12">
                <div className="service-market-ttd-new JobBoardServiceMarketFeatures">
                  <ul>
                    <li>Online Booking & Scheduling</li>
                    <li>Business Management Dashboard</li>
                    <li>Mobile Car Wash Software</li>
                    <li>Payment & Invoicing</li>
                    <li>Customer & Loyalty Management</li>
                    <li>Staff Management</li>
                    <li>SEO Friendly</li>
                    <li>Real-time updates</li>
                    <li>Mobile-Friendly Access
                    </li>
                    <li>Reporting & Analytics</li>
                    {/* <li>Reporting and Analytics</li>
                    <li>SEO-Friendly Environment</li>
                    <li>Multi-Location Access</li> */}
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
              Car Wash Software Features
              </h2>
            </div>
            {/* <div className="tatxt_txt_job">
              Our{" "}
              <strong>
                <i>Doctor Appointment Scheduling </i>
              </strong>{" "}
              Software has been designed to facilitate smooth and easy
              management of appointments of patients. This software allows
              healthcare providers to automate the scheduling process, enabling
              patients to easily book doctors appointments, reschedule, or
              cancel appointments online. The system works 24/7, offering
              flexibility in both the patients and the medical staff&apos;s busy
              schedules while reducing the administrative workload. With
              built-in features like email notifications or WhatsApp reminders,
              healthcare providers can ensure patients never miss an
              appointment. It is a complete white-label solution and can be
              fully customized to your branding in order to provide a
              professional, consistent interface.
              
            </div> */}
            <div className="tatxt_txt_job">
            Our car wash software makes it easy to manage your car wash business, whether you have a fixed location or offer mobile services. With everything in one place, you can handle bookings, payments, staff schedules, and customer details without any hassle.
            <p>
            This car wash app helps you run your business smoothly by automating daily tasks. Customers can book services online, make secure payments, and receive reminders for their appointments. You can also track customer history, vehicle details, and feedback to offer better service.
            </p>

            </div>
            

            <div className="tab_bbx_job">
              <div className="tab_bbx_top_job">
                <ul className="JobBoardNewtab">
                  <li
                    id="tab1_li"
                    className={`jobseeker_app_job ddlj ${
                      sellerTab ? "active" : ""
                    }`}
                    onClick={() => handleSellerTab()}
                  >
                    <a>Customer Panel </a>
                  </li>
                  <li
                    id="tab2_li"
                    className={`emplyer_app_job ddlj ${
                      buyerTab ? "active" : ""
                    }`}
                    onClick={() => handleBuyerTab()}
                  >
                    <a>Staff Panel </a>
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
                        {/* <div className="col-lg-4 col-md-3">
                          <div className="costomer_tab_right costomer_tab_rightleft JobBoardImg">
                            <Image
                              unoptimized={true}
                              width={300}
                              height={100}
                              src="/img/doctorappointment/patient-mobile-screen.png"
                              alt="Jobseeker App Feature"
                            />
                          </div>
                        </div> */}
                        <div className="col-lg-12 col-md-12">
                          <div className="costomer_tab_left costomer_tab_leftright">
                            <ul>
                              <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/jobboard/ragister-icon.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                Easy Online Booking 
                                  <div className="product-idea">
                                    <p>
                                    Customers can book a car wash through the car cleaning app in just a few clicks.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/jobboard/manage_alert.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                Service Selection
                                  <div className="product-idea">
                                    <p>
                                    Choose from different wash packages (basic, premium, interior cleaning, etc.

                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/jobboard/manage_profile.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                Real-Time Service Tracking
                                  <div className="product-idea">
                                    <p>
                                    Customers can track their car wash status and estimated completion time.

                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/jobboard/save_fav.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                Secure Online Payments
                                  <div className="product-idea">
                                    <p>
                                    Multiple payment options, including credit/debit cards and digital wallets.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/jobboard/apply_job.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                Service History & Records
                                  <div className="product-idea">
                                    <p>
                                    Customers can view their past bookings, invoices, and preferred services.

                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/jobboard/search_job.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                Customer Reviews & Ratings 
                                  <div className="product-idea">
                                    <p>
                                    Customers can leave feedback and check service ratings before booking.

                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/jobboard/applied_job.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                Promo Codes & Discounts 
                                  <div className="product-idea">
                                    <p>
                                    Customers can apply promo codes to get special discounts.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/jobboard/applied_job.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                Automatic Notifications & Reminders
                                  <div className="product-idea">
                                    <p>
                                    Customers receive SMS/email alerts about bookings, service completion, and offers.

                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/jobboard/applied_job.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                Location-Based Mobile Car Wash
                                  <div className="product-idea">
                                    <p>
                                    Book an on-demand mobile car wash at any location.
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
                        {/* <div className="col-lg-4 col-md-3">
                          <div className="costomer_tab_right">
                            <Image
                              unoptimized={true}
                              width={300}
                              height={100}
                              src="/img/doctorappointment/staff-panel-admin.png"
                              alt="Buyer App Features"
                            />
                          </div>
                        </div> */}
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
                                    src="/img/jobboard/ragister-icon.png"
                                  />
                                </i>
                                <span>
                                Daily Task View
                                  <div className="product-idea">
                                    <p>
                                    View upcoming service bookings and workload for the day.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              {/* <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/jobboard/membership_pur.png"
                                    alt=""
                                  />
                                </i>
                                <span>
                                  User Management
                                  <div className="product-idea">
                                    <p>
                                    Staff can access patient profiles, including medical history, current medications, and previous appointment notes, all in one place.
                                    </p>
                                  </div>
                                </span>
                              </li> */}
                              <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/jobboard/fov_cant.png"
                                    alt=""
                                  />
                                </i>
                                <span>
                                Service Updates
                                  <div className="product-idea">
                                    <p>
                                    Mark jobs as &apos;In Progress,&apos; &apos;Completed,&apos; or &apos;Delayed.&apos;

                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/jobboard/create-project.png"
                                    alt=""
                                  />
                                </i>
                                <span>
                                Navigation Support
                                  <div className="product-idea">
                                    <p>
                                    For mobile car wash providers, integrated maps guide staff to customer locations.

                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/jobboard/manage_job.png"
                                    alt=""
                                  />
                                </i>
                                <span>
                                Instant Notifications
                                  <div className="product-idea">
                                    <p>
                                    Get alerts for new job assignments or schedule changes.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/jobboard/update_job.png"
                                    alt=""
                                  />
                                </i>
                                <span>
                                Upload Work Proof
                                  <div className="product-idea">
                                    <p>
                                    Staff can upload images before and after service completion.

                                    </p>
                                  </div>
                                </span>
                              </li>

                              <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    alt=""
                                    className="lazy"
                                    src="/img/jobboard/manage_profile.png"
                                  />
                                </i>
                                <span>
                                Customer Communication 
                                  <div className="product-idea">
                                    <p>
                                    Chat with customers to confirm service details or request additional instructions.

                                    </p>
                                  </div>
                                </span>
                              </li>
                              <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/jobboard/customer-support.png"
                                    alt=""
                                  />
                                </i>
                                <span>
                                Performance Tracking
                                  <div className="product-idea">
                                    <p>
                                    Track completed services, earnings, and customer feedback.

                                    </p>
                                  </div>
                                </span>
                              </li>
                              {/* <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/jobboard/count_search_view.png"
                                    alt=""
                                  />
                                </i>
                                <span>
                                  Real-Time Analytics
                                  <div className="product-idea">
                                    <p>
                                      Monitor recruitment progress with
                                      insightful reports on time-to-hire,
                                      candidate sources, and overall pipeline
                                      health.
                                    </p>
                                  </div>
                                </span>
                              </li> */}
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
                        {/* <div className="col-lg-4 col-md-3 ">
                          <div className="costomer_tab_right costomer_tab_rightleft2">
                            <Image
                              unoptimized={true}
                              width={300}
                              height={100}
                              src="/img/doctorappointment/doctor-appointment-admin.png"
                              alt="Admin Panel"
                            />{" "}
                          </div>
                        </div> */}
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
                                    src="/img/jobboard/secure_login.png"
                                  />
                                </i>
                                <span>
                                Appointment Management
                                  <div className="product-idea">
                                    <p>
                                    Easily schedule, reschedule, or cancel car wash bookings.

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
                                Business Dashboard
                                  <div className="product-idea">
                                    <p>
                                    A centralized dashboard to monitor bookings, revenue, and performance.

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
                                Customer & Staff Management
                                  <div className="product-idea">
                                    <p>
                                    Keep track of customer details, service history, and staff assignments.

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
                                Billing & Payment Processing
                                  <div className="product-idea">
                                    <p>
                                    Manage invoices, payments, and refunds seamlessly.

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
                                Service Customization
                                  <div className="product-idea">
                                    <p>
                                    Offer different packages and pricing based on vehicle type and service level.

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
                                Fleet & Equipment Management
                                  <div className="product-idea">
                                    <p>
                                    Keep track of car wash machines, water usage, and service availability.

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
                                Integration with Other Tools
                                  <div className="product-idea">
                                    <p>
                                    Connect with accounting, payroll, and marketing tools for smooth operations.
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
                                Marketing & Promotions
                                  <div className="product-idea">
                                    <p>
                                    Run discounts, loyalty programs, and customer retention campaigns.

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
                                Automated Notifications & Reports
                                  <div className="product-idea">
                                    <p>
                                    Get daily/weekly reports on business performance and customer engagement.


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
                                Role-Based Access Control
                                  <div className="product-idea">
                                    <p>
                                    Assign different access levels for managers, staff, and support teams.


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
              What Does Our Car Wash Software Do for You?
              </h2>
              {/* <p>
                Our Doctor Appointment Scheduling Software simplifies the entire
                process of managing medical appointments. Whether you run a
                clinic, hospital, or private practice, this software makes it
                easy for patients to book their appointments online, reducing
                the workload for your staff and improving patient satisfaction.
              </p> */}
              <h3 className="Haeddinh2">Streamline Your Car Wash Operations with Our Software</h3>
              {/* <p>
              Our exceptional job board advertising software doesn&apos;t just
              stop at facilitating connections; it empowers you to craft your
              own recruitment portal. This ready-to-deploy script,{" "}
              <strong>
                <i>secure and responsive</i>
              </strong>
              , provides dedicated dashboards for administrators, employers, and
              job seekers. The setup process is a breeze, requiring zero coding
              know-how - our expert technical team ensures a seamless setup for
              you. Effortlessly launch your own job board advertising website in
              record time with our ready-to-use Job Board Software Script.
            </p> */}
              <p>
              Our car wash software is designed to make running your car wash business smooth and hassle-free. Whether you own a fixed-location car wash or offer mobile car cleaning services, our system helps you manage everything—from bookings and payments to staff schedules and customer interactions, all in one place. With an easy-to-use interface, you don&apos;t need technical skills to get started.

              </p>
              <h3 className="Haeddinh2">
              A Better Experience for Customers and Staff
              </h3>
              <p>
              Customers can book a car wash in just a few clicks using our car cleaning app. They can choose from different wash packages, make online payments, track service progress, and even leave reviews—all from their phones.


              </p>
              <p>
              For staff and technicians, our car wash app ensures smooth daily operations. Employees receive assigned jobs, update service statuses, and communicate with customers effortlessly. With features like real-time tracking and instant notifications, they stay organized and efficient.

              </p>
             
              <h3 className="Haeddinh2">
              Smart Car Wash Management for All Business Sizes
              </h3>
              <p>
              Whether you run a small car wash business or a large multi-location service, our car wash management software helps you handle operations without the chaos. Manage customer bookings, track payments, monitor staff performance, and keep an eye on business growth—all from a single dashboard. 

              </p>
              <h3 className="Haeddinh2">Designed for Growth and Efficiency </h3>
              <p>
              Our mobile car wash software works for businesses of all sizes, whether you serve a local community or expand across multiple locations. With powerful features like automated scheduling, online payments, and customer tracking, you can focus on delivering excellent service while the software takes care of the rest.

              </p>
              <p>
              Many businesses already using our car wash computer software to boost efficiency, enhance customer satisfaction, and drive business growth. Discover how easy it is to manage, grow, and optimize your operations with a car wash software solution built for success!

              </p>
            </div>
          </div>
        </section>
        {/* <section
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
                    Unlimited Appointment Booking: Book as many appointments as you need
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
      </section> */}
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
                      Timely Upgrades: Seamlessly transition to upgraded
                      versions at regular intervals, all at no extra cost.
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Zero Setup Fees</strong>:- There are no additional
                      charges for the setup and installation of the software,
                      making it easier for customers to get started.
                    </span>
                  </li>

                  {/* <li>
                    <span>
                      Unlimited Appointment Booking: Book as many appointments
                      as you need without any limitations.
                    </span>
                  </li> */}
                  <li>
                    <span>
                      {" "}
                      <li>
                      Unlimited Bookings & Appointments – Accept and manage an unlimited number of car wash bookings and customer appointments without restrictions.
                      </li>
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
                      Effortless Program Operation: Revel in robust bandwidth
                      that guarantees your program runs flawlessly, supported by
                      resources allocated to your subscription model. Any
                      increase in allocated resources will incur additional
                      charges beyond the standard subscription model.
                    </span>
                  </li>
                  <li>
                    <span>
                      Enduring Support: We are committed to providing lifelong
                      assistance through our subscription model. If any software
                      issues arise, our{" "}
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
                      <GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of Car Wash Software. See how it works yourself!"
                      />
                    }
                  </div>
                  <a
                    className="btn fiverr-buys"
                    href="/buy-now/job-board-software"
                    id="buy_now_1"
                  >
                    Buy Now
                  </a>
                </div>
                <div className="jocpp">
                  <ul className="job-pr-icon">
                    <li>
                      <i className="fa fa-globe" aria-hidden="true"></i>
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
                      <p>192 Reviews</p>
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
                    Receive three months of complimentary support for any bugs
                    or issues you encounter.
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
                    monthly subscriptions and pro or enterprise licenses,
                    enabling them to adjust their license based on their pricing
                    preferences conveniently.
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
                      height={20}
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
              <Image
                unoptimized={true}
                width={900}
                height={100}
                src="/img/jobboard/Job_board_for_page.jpg"
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
            <Modal.Header
              className="modal-dialog-service"
              closeButton="close"
            ></Modal.Header>
            <Modal.Body>
              <div id="jobboardclients" closeButton>
                <Slider {...companies}>
                  <div className="SliderMainBx">
                    <div className="site-titles">
                      <Link
                        href="https://sellfomote.ch/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        sellfomote.ch
                      </Link>
                    </div>
                    <Link
                      href="https://sellfomote.ch/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        unoptimized={true}
                        width={900}
                        height={100}
                        src="/img/jobboard/sellfomote.webp"
                        alt="icon"
                        title=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="SliderMainBx">
                    <div className="site-titles">
                      <Link
                        href="https://www.ejtecs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ejtecs.com
                      </Link>
                    </div>
                    <Link
                      href="https://www.ejtecs.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        unoptimized={true}
                        width={900}
                        height={100}
                        src="/img/jobboard/ejtecs.webp"
                        alt="icon"
                        title=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="SliderMainBx">
                    <div className="site-titles">
                      <Link
                        href="https://jobs.restrowizard.com.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        jobs.restrowizard.com.co
                      </Link>
                    </div>
                    <Link
                      href="https://jobs.restrowizard.com.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        unoptimized={true}
                        width={900}
                        height={100}
                        src="/img/jobboard/restrowizard.webp"
                        alt="icon"
                        title=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="SliderMainBx">
                    <div className="site-titles">
                      <Link
                        href="https://www.healthandsocialcarejobs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        healthandsocialcarejobs.com
                      </Link>
                    </div>
                    <Link
                      href="https://www.healthandsocialcarejobs.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        unoptimized={true}
                        width={900}
                        height={100}
                        src="/img/jobboard/healthandsocialcarejobs.webp"
                        alt="icon"
                        title=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="SliderMainBx">
                    <div className="site-titles">
                      <Link
                        href="https://www.joblisto.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        joblisto.com
                      </Link>
                    </div>
                    <Link
                      href="https://www.joblisto.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        unoptimized={true}
                        width={900}
                        height={100}
                        src="/img/jobboard/joblisto.webp"
                        alt="icon"
                        title=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="SliderMainBx">
                    <div className="site-titles">
                      <Link
                        href="https://www.booyajobs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        booyajobs.com
                      </Link>
                    </div>
                    <Link
                      href="https://www.booyajobs.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        unoptimized={true}
                        width={900}
                        height={100}
                        src="/img/jobboard/booyajobs.webp"
                        alt="icon"
                        title=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="SliderMainBx">
                    <div className="site-titles">
                      <Link
                        href="https://www.jobseakers.com.au/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        jobseakers.com.au
                      </Link>
                    </div>
                    <Link
                      href="https://www.jobseakers.com.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        unoptimized={true}
                        width={900}
                        height={100}
                        src="/img/jobboard/jobseakers.webp"
                        alt="icon"
                        title=""
                        className="img-fluid"
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
                          src="/img/technology/next-js-logo.png"
                          alt="ReactJS Development"
                        />
                      </div>
                      <div className="icntechimg_nm">NextJs</div>
                    </li>
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
                          src="/img/technology/tailwindcss-icon.png"
                          alt="Tailwind"
                        />
                      </div>
                      <div className="icntechimg_nm">Tailwind css</div>
                    </li>
                    {/* <li data-aos="fade-up">
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
                  </li> */}
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="list_detail">
                    <li
                      className="same aos-init aos-animate"
                      data-aos="fade-up"
                    >
                      <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera
                      30.0+, Safari 5+, IE 9+
                    </li>
                    <li
                      className="same aos-init aos-animate"
                      data-aos="fade-up"
                    >
                      <b>Framework - </b> NextJs, Laravel
                    </li>
                    <li
                      className="same aos-init aos-animate"
                      data-aos="fade-up"
                    >
                      <b>Language - </b> Javascript, Python
                    </li>
                    <li
                      className="other aos-init aos-animate"
                      data-aos="fade-up"
                    >
                      <b>Design - </b> HTML 5, CSS 3, JavaScript
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
                      width={60}
                      height={60}
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
                      height={60}
                      src="/img/jobboard/free_remove_icon.png"
                      alt="manager_icn"
                    />
                  </div>
                  <div className="supportsettingtext">Free Brand Removal</div>
                </li>
                <li data-aos="fade">
                  <div className="supportsetting_icn">
                    <Image
                      unoptimized={true}
                      width={60}
                      height={60}
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
                      height={50}
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
        <section className="ecommerce_review_section" id="reviews">
          <div className="ecommerce_review__img">
            <Image
              unoptimized={true}
              width={400}
              height={100}
              src="/img/jobboard/ecommerce-review-img.png"
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
                    We&apos;ve been using this car wash app for a few months now, and it&apos;s been a total game-changer for us! Our customers love how easy it is to book a wash, track their car, and even leave a review. It&apos;s made managing our bookings and payments so much smoother. Definitely recommend it!

                    </div>
                    <div className="who_ratset">
                      <span
                        className="star_review_main"
                        style={{ paddingRight: "10px", color: "gold;" }}
                      >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Mike John, Australia
                      <span>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/jobboard/australia_flag_img.png"
                          alt="mobile app development in USA"
                          style={{ width: "20px", marginLeft: "3px;" }}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext" id="fiveer-clone">
                    I run a mobile car wash service, and this mobile car wash software has been amazing! It&apos;s so easy for my team to get their job assignments and update the status of each wash. Plus, customers love the convenience of booking and paying online. It&apos;s saved us a ton of time!
                    </div>

                    <div className="who_ratset">
                      <span
                        className="star_review_main"
                        style={{ paddingRight: "10px", color: "gold;" }}
                      >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">Samantha D., Australia </span>{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/jobboard/australia_flag_img.png"
                          alt="mobile app development in USA"
                          style={{ width: "20px", marginLeft: "3px;" }}
                        />
                      </span>
                    </div>
                  </div>

                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext" id="fiveer-clone">
                    This mobile car wash app has made a huge impact on our service. Our customers can book, pay, and track their wash all from their phones, and it&apos;s made everything run so much more smoothly. My team loves it too.
                    </div>

                    <div className="who_ratset">
                      <span
                        className="star_review_main"
                        style={{ paddingRight: "10px", color: "gold;" }}
                      >
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">Tom Helm, USA</span>{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                          style={{ width: "20px", marginLeft: "3px;" }}
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
                      <div className="people_star_num">382</div>
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
                      <div className="people_star_num">12</div>
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
                      title="Car Wash Management Software "
                    />
                  </div>
                  <div className="main-rait">
                    <span>
                      <i className="fa fa-star"></i>{" "}
                      <span>4.9 out of 5 stars</span>
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
                        <span>01. </span>What makes your car wash software different?
                      </a>
                    </div>
                    <div style={activeIndex === 0 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                        Our car wash software is easy to use and packed with helpful features. It helps you manage bookings, payments, staff schedules, and customer communications all in one place. Whether you run a small local wash or a big multi-location service, our car wash management software is flexible and designed to grow with your business.

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
                        <span>02. </span>  How can customers book a car wash?
                      </a>
                    </div>
                    <div style={activeIndex === 1 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                        Customers can book a wash in just a few clicks using our car cleaning app. They can pick a wash package, choose a time, pay online, and even track the progress of their service—all from their phone. It&apos;s quick and super convenient!

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
                        <span>03. </span> Do I need technical skills to use the car wash app?

                      </a>
                    </div>
                    <div style={activeIndex === 2 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                        Nope! Our car wash app is designed to be user-friendly, so you don&apos;t need any tech experience. It&apos;s simple to get started, and you&apos;ll be managing your car wash business like a pro in no time.
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
                        <span>04. </span> Can I use this software for mobile car wash services?
                      </a>
                    </div>
                    <div style={activeIndex === 3 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                        Absolutely! Our mobile car wash software is perfect for businesses that offer on-the-go car cleaning services. It lets you manage bookings, assign jobs to your team, and keep customers updated, all while on the move.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div style={panelStyle} data-aos="fade-up">
                    <div style={headingStyle}>
                      <a
                        href="#collapse5"
                        style={titleStyle}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleAccordion(4);
                        }}
                      >
                        <span>05. </span>  Can customers track their car wash progress?
                      </a>
                    </div>
                    <div style={activeIndex === 4 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                        Yes! With our car wash app, customers can see real-time updates on their car wash progress. They can track when their wash starts, and when it’s completed, and even receive notifications if anything changes.

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
                          toggleAccordion(5);
                        }}
                      >
                        <span>06. </span>  How does the software help with staff management?
                      </a>
                    </div>
                    <div style={activeIndex === 5 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                        Our car wash management software makes staff management a breeze. You can easily assign jobs, track their progress, and communicate with your team. Real-time notifications ensure everything stays organized and on schedule.


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
                          toggleAccordion(6);
                        }}
                      >
                        <span>07. </span>  How secure is the payment system?
                      </a>
                    </div>
                    <div style={activeIndex === 6 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                        Our payment system is fully secure. Customers can make payments through the mobile car wash app using trusted, encrypted methods, so you can feel confident knowing their information is safe.



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
                          toggleAccordion(7);
                        }}
                      >
                        <span>08. </span>  Is there customer support if I need help?
                      </a>
                    </div>
                    <div style={activeIndex === 7 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                        Yes! We offer dedicated customer support to help you with anything related to our car wash software. If you run into any issues or need assistance, we’re just a message or call away!



                        </p>
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
                  <a>Enquire Now</a>
                  {
                    <SoftwareEnquiry
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Car Wash Software"
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
                      href="/udemy-clone"
                    >
                      <div className="caption">
                        <div className="other-caption-bx">
                          <h3>Udemy Clone</h3>
                          <div className="other-project-logo">
                            <Image
                              unoptimized={true}
                              width={200}
                              height={100}
                              src="/img/jobboard/udemy_new.png"
                              alt="Udemy Clone"
                              className=""
                            />
                          </div>
                          <p>
                            <span>
                              Readymade Script of video E- Learning Platform
                              like Udemy.
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
                      className="View Detail"
                      target="_black"
                      href="/recruitment-management-software"
                    >
                      <div className="caption">
                        <div className="other-caption-bx">
                          <h3>Recruitment Management Software</h3>
                          <div className="other-project-logo">
                            <Image
                              unoptimized={true}
                              width={200}
                              height={100}
                              src="/img/jobboard/rms_new.png"
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
                      href="/fiverr-clone"
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
      </div>

      <Footer />
    </>
  )
}

export default Page
