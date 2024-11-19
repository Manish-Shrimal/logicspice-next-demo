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
      <div className="doctor_appointment">
      <section className="paid-pro job-portal-banner fiverr-new-banner job-portal-bg NewJobSiteDesign JobBoardNewDesign">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>Online Doctor Appointment Scheduling Software</h1>
              <div className="both-left-p-sec">
                <h2>
                  Manage patient appointments with flexible scheduling solutions
                  easily.
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
                <div className="job-valu-btn">
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
                        title="Please fill the form below and get access to the live demo of Online Doctor Appointment Scheduling Software. See how it works yourself!"
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
                    <p>219 Reviews</p>
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
                  width={440}
                  height={100/ (100/100)}
                  className="lazy"
                  src="/img/doctorappointment/doctor-appointment-banner-img.png"
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
                   Doctor Appointment Scheduling Software
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
            has the best features for businesses to hire people online. With LS
            Jobber, jobseekers are able to search and apply for job openings,
            similar to well-known job boards such as Indeed, Monster, Naukri
            Clone &amp; CareerBuilder Clone. This <i>ready-to-use</i> job board
            script can be used by businesses, organizations, investors,
            recruitment companies, and other organizations to form their own job
            board with features like multiple resume uploads in different
            formats and video CV along with <strong>applicant tracking</strong>.
            Our team has crafted this cutting-edge, white-label job site
            solution to foster seamless connections between prospective
            employees and recruiters. LS Jobber is a ready-to-use Job Board
            Software that can assist you to launch your own{" "}
            <i>white Label job board</i> in less time.
          </p>
          <p>
            
              Online Doctor Appointment Scheduling Software
            {" "}
            makes the scheduling of medical appointments easy and hassle-free.
            This software is specifically designed for healthcare providers.
            Patients can find their doctor online and book an appointment in a
            few simple steps. With just a few clicks, patients will be allowed
            to choose their time slots in accordance with the availability of
            doctors.
          </p>
          <p>
            This is a white-label solution that can be themed to one&apos;s own
            brand name and identity. It&apos;s a ready-to-use software that
            helps clinics, hospitals, and private practices set up their own
            appointment booking system in no time.
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
                  <li>Smart Search Filters</li>
                  <li>Accept online bookings</li>
                  <li>Responsive website (mobile friendly)</li>
                  <li>White-Labeled Software</li>
                  <li>Highly scalable & robust</li>
                  <li>Email Notifications</li>
                  <li>WhatsApp Notifications</li>
                  <li>User Friendly</li>
                  <li>Customized Calendar</li>
                  <li>Reporting and Analytics</li>
                  <li>SEO-Friendly</li>
                  <li>Multi-Location Access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="job_portal_area">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Online Medical Appointment Scheduling Software Features</h2>
          </div>
          <div className="tatxt_txt_job">
            Our{" "}
            <strong>
              <i>Doctor Appointment Scheduling </i>
            </strong>{" "}
            Software has been designed to facilitate smooth and easy
            management of appointments of patients. This software allows
            healthcare providers to automate the scheduling process, enabling
            patients to easily book doctors appointment, reschedule, or cancel appointments online.
            The system works 24/7, offering flexibility in both the patients&apos;
            and the medical staff&apos;s busy schedules while reducing the
            administrative workload. With built-in features like email
            notifications or WhatsApp reminders, healthcare providers can ensure
            patients never miss an appointment. It is a complete white-label
            solution and can be fully customized to your branding in order to
            provide a professional, consistent interface.
            {/* <strong>
              <i>multi-job posting</i>
            </strong>{" "}
            feature to further enhance efficiency. */}
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
                  <a>Patient Panel </a>
                </li>
                <li
                  id="tab2_li"
                  className={`emplyer_app_job ddlj ${buyerTab ? "active" : ""}`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Staff Panel (Doctors and Medical Staff) </a>
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
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right costomer_tab_rightleft JobBoardImg">
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/doctorappointment/patient-mobile-screen.png"
                            alt="Jobseeker App Feature"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
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
                                Patient Registration
                                <div className="product-idea">
                                  <p>
                                    Patients can create profiles to manage
                                    appointments and access personalized
                                    services.
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
                                Patient Login
                                <div className="product-idea">
                                  <p>
                                    Registered users can log in to manage
                                    appointments, view history, and update
                                    information easily.
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
                                Profile Management
                                <div className="product-idea">
                                  <p>
                                    Patients can create and manage their
                                    profiles, including medical history,
                                    preferred doctors, and saved payment details
                                    for a faster appointment process.
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
                                Easy Appointment Booking
                                <div className="product-idea">
                                  <p>
                                    Users can search for doctors by specialty,
                                    location, or availability, and book their
                                    appointments with just a few clicks.
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
                                Real-time Availability
                                <div className="product-idea">
                                  <p>
                                    Patients can see up-to-date appointment
                                    slots, ensuring they can choose a convenient
                                    time without scheduling conflicts.
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
                                Appointment History
                                <div className="product-idea">
                                  <p>
                                    Patients can view their upcoming and past
                                    appointments, track their medical visits,
                                    and follow up with doctors as needed.
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
                                Medical Services
                                <div className="product-idea">
                                  <p>
                                    Patients can browse available medical
                                    services, and book an appointment with
                                    available staff with the booking date and
                                    time.
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
                                  src="/img/jobboard/share_job.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Our Experts
                                <div className="product-idea">
                                  <p>
                                    Patients can view the list of healthcare
                                    professionals and book an appointment based
                                    on their specialties and availability.
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
                                  src="/img/jobboard/manage_edu.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Guest Mode
                                <div className="product-idea">
                                  <p>
                                    Patients can even book appointments without
                                    registration for a quick, hassle-free
                                    experience.
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
                                  src="/img/jobboard/manage_exp.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Manage Experience
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can view all experience details
                                    which they have added in the profile &amp;
                                    can manage(add/edit/delete) Experience.
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
                                  src="/img/jobboard/genrate_cv.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Generate a CV
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can create CV by selecting the
                                    format &amp; adding the fields which are
                                    mandatory for creating CV. Jobseekers can
                                    update the CV as per their requirement.
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
                                  src="/img/jobboard/jobs_by.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Jobs by Industry, Functions, City
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can search for Jobs using
                                    Specific Industry, Specific Functions &amp;
                                    Specific City.
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
                                  src="/img/jobboard/approve_tickets.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Declaration Statement
                                <div className="product-idea">
                                  <p>
                                    Jobseeker need to select a declaration
                                    statement while applying for jobs.
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
                                  src="/img/jobboard/manage_blog.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Professional Registration
                                <div className="product-idea">
                                  <p>
                                    Jobseeker need to fill all the professional
                                    descriptions.
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
                                  src="/img/jobboard/send_mail.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Mail Communication
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can communicate with employers
                                    through email.
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
                                  src="/img/jobboard/tickets_history.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Mail History
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can manage mail history of custom
                                    mail communication.
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
                                  src="/img/jobboard/deletes_acc.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Delete Account
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can delete accounts by entering
                                    the reason for account deletion.
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
                                  src="/img/jobboard/upload-video.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Upload Video CV
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can upload their video CV and
                                    employers can view it in their jobseeker
                                    profile.
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
                                  src="/img/jobboard/categories-auto.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Membership Plan
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can purchase the Membership
                                    Plan(Free/paid) as per their requirement
                                    which is relevant to them.
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
                                  src="/img/jobboard/simple_application.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Email Notification
                                <div className="product-idea">
                                  <p>
                                    Jobseeker will receive email notifications
                                    for the Job Alerts and for some important
                                    features.
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

              {buyerTab && (
                <>
                  <div className="costomer_tab rj EmployerTab" id="tab2">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right">
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/doctorappointment/staff-panel-admin.png"
                            alt="Buyer App Features"
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
                                  src="/img/jobboard/ragister-icon.png"
                                />
                              </i>
                              <span>
                                Appointment Management
                                <div className="product-idea">
                                  <p>
                                    Doctors and staff can view, approve,
                                    reschedule, or cancel appointments with
                                    real-time updates, ensuring an organized
                                    workflow.
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
                                  src="/img/jobboard/membership_pur.png"
                                  alt=""
                                />
                              </i>
                              <span>
                                User Management
                                <div className="product-idea">
                                  <p>
                                    Staff can access patient profiles, including
                                    medical history, current medications, and
                                    previous appointment notes, all in one
                                    place.
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
                                  src="/img/jobboard/fov_cant.png"
                                  alt=""
                                />
                              </i>
                              <span>
                                Real-time Notifications
                                <div className="product-idea">
                                  <p>
                                    Staff receive instant notifications about
                                    new appointments, cancellations, or
                                    rescheduling, helping them stay on top of
                                    daily schedules.
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
                                Doctor Availability Management
                                <div className="product-idea">
                                  <p>
                                    Doctors can update their available time
                                    slots, manage personal time off, and block
                                    specific hours for meetings or breaks.
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
                                Staff Dashboard
                                <div className="product-idea">
                                  <p>
                                    Staff can access a summary of their
                                    appointments from the previous day, today,
                                    and tomorrow, with options to filter by date
                                    range on the dashboard.
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
                                Manage Slots
                                <div className="product-idea">
                                  <p>
                                    Staff can view, add, edit, or delete their
                                    slots, and can also activate or deactivate
                                    any slot as needed.
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
                                Configuration
                                <div className="product-idea">
                                  <p>
                                    Staff can update their email, password,
                                    username, contact information, and social
                                    media links.
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
                                  src="/img/jobboard/count_search_view.png"
                                  alt=""
                                />
                              </i>
                              <span>
                                Account Reports
                                <div className="product-idea">
                                  <p>
                                    Staff can view detailed reports of completed
                                    bookings, including payment amounts, with
                                    options to filter by daily, monthly, or
                                    custom date ranges.
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
                                  src="/img/jobboard/count_job_view.png"
                                  alt=""
                                />
                              </i>
                              <span>
                                Count Job View
                                <div className="product-idea">
                                  <p>
                                    Employers can view the count for total
                                    numbers of Job views.
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
                                  src="/img/jobboard/payment_history.png"
                                  alt=""
                                />
                              </i>
                              <span>
                                Payment History
                                <div className="product-idea">
                                  <p>
                                    Employers can view the Payment Transaction
                                    as per the purchased plan.
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
                                  src="/img/jobboard/manage_user_acc.png"
                                  alt=""
                                />
                              </i>
                              <span>
                                View Jobseeker Profile
                                <div className="product-idea">
                                  <p>
                                    Employer can view Profile of Jobseekers who
                                    have shortlisted or want to Hire.
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
                                  src="/img/jobboard/manage_content.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Plan Invoice
                                <div className="product-idea">
                                  <p>
                                    According to the purchased plan invoice will
                                    be generated &amp; employer can
                                    display/download.
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
                                  src="/img/jobboard/send_mail.png"
                                  alt=""
                                />
                              </i>
                              <span>
                                Mail Communication
                                <div className="product-idea">
                                  <p>
                                    Employers can communicate with jobseekers by
                                    using the mail.
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
                      <div className="col-lg-4 col-md-3 ">
                        <div className="costomer_tab_right costomer_tab_rightleft2">
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/doctorappointment/doctor-appointment-admin.png"
                            alt="Admin Panel"
                          />{" "}
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
                                  src="/img/jobboard/secure_login.png"
                                />
                              </i>
                              <span>
                                Secure Login
                                <div className="product-idea">
                                  <p>
                                    Admin can login securely on this portal.
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
                                Manage Users
                                <div className="product-idea">
                                  <p>
                                    Admin can create, edit, or delete accounts,
                                    and manage roles and permissions for both
                                    doctors and patients across departments.
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
                                Manage Staff
                                <div className="product-idea">
                                  <p>
                                    Admin can view and manage staff details,
                                    including adding, editing, deleting, and
                                    setting availability or unavailability for
                                    staff members.
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
                                Admin Dashboard
                                <div className="product-idea">
                                  <p>
                                    Admin can view a summary of appointments
                                    from the previous day, today, and tomorrow,
                                    with options to filter by date range.
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
                                Appointment Management
                                <div className="product-idea">
                                  <p>
                                    Admin can monitor and manage all
                                    appointments across multiple doctors or
                                    departments, including the ability to
                                    reschedule the appointments.
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
                                Account Reports
                                <div className="product-idea">
                                  <p>
                                    Admin can view details of completed
                                    bookings, including payment amounts, with
                                    options to filter by daily, monthly, or
                                    custom date ranges.
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
                                Configuration
                                <div className="product-idea">
                                  <p>
                                    Admin can update personal details, contact
                                    information, social media links, and
                                    configure appointment settings.
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
                                Multi-location Management
                                <div className="product-idea">
                                  <p>
                                    If the clinic operates across multiple
                                    locations, admins can manage schedules,
                                    appointments, and resources for each
                                    facility from a single platform.
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
                                  src="/img/jobboard/manage_countries.png"
                                />
                              </i>
                              <span>
                                Blog Management
                                <div className="product-idea">
                                  <p>
                                    This feature allows admins to create, edit,
                                    and publish blog posts on the platform.
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
                                  src="/img/jobboard/manage_testimonial.png"
                                />
                              </i>
                              <span>
                                Customer Support
                                <div className="product-idea">
                                  <p>
                                    Admins can monitor support tickets, assign
                                    them to staff members, and track how issues
                                    are resolved.
                                  </p>
                                </div>
                              </span>
                            </li>
                            {/* <li>
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
                                Transaction History
                                <div className="product-idea">
                                  <p>
                                    Admin can view payment transactions which
                                    will display the status of the payment
                                    paid/pending.
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
            </div>
          </div>
        </div>
      </section>
      <section className="job_product_page_header_in">
        <div className="container">
          <div className="whateissuprt">
            <h2 className="headhs">How Our Doctor Appointment Scheduling Software Helps You</h2>
            <p>
            Our Doctor Appointment Scheduling Software simplifies the entire process of managing medical appointments. Whether you run a clinic, hospital, or private practice, this software makes it easy for patients to book their appointments online, reducing the workload for your staff and improving patient satisfaction.
            </p>
            <h3 className="Haeddinh2">Simple and Easy for Patients</h3>
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
            Apart from booking, patients can reschedule or cancel their appointments with just a few clicks. They can choose available time slots, get instant confirmations, and receive notifications via email or WhatsApp. It minimizes missed appointments and keeps everything orderly.
            </p>
            <h3 className="Haeddinh2">Efficient for Healthcare Providers</h3>
            <p>
            Doctors and staff can easily manage appointments through a user-friendly dashboard. The software manages patient bookings, and doctor availability, and performs real-time updates. The smooth running of everything will be easier without manual interference or effort.
            </p>
            <h3 className="Haeddinh2">Customizable for Your Needs
            </h3>
            <p>
            Our software can be customized to fit the branding and needs of your healthcare facility. It is flexible enough to support either small practices or big hospitals and grows with your business when the need arises.

            </p>
            <h3 className="Haeddinh2">Comprehensive and Reliable
            </h3>
            <p>
            This patient appointment scheduling software is not just about scheduling; it&apos;s a complete solution for managing patient appointments and improving the overall experience. It has easy calendar management and real-time updates, taking the headache out of appointment management, and allowing you to focus more on patient care.
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
                      title="Please fill the form below and get access to the live demo of Online Doctor Appointment Scheduling Software. See how it works yourself!"
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
                    <p>219 Reviews</p>
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
              <li>
                <span>
                  Our system allows customers a smooth transition between
                  monthly subscriptions and pro or enterprise licenses, enabling
                  them to adjust their license based on their pricing
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
      {/* <section className="job_portal_area script-update-bg">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Script Update History</h2>
            <br />
            <div className="script-update_title">
              <p>
                V6.0 - September 19th, 2023 - Latest release brings new
                features, coupled with significant leaps in technologies!
              </p>
              <ul>
                <li>
                  <span>
                    Enjoy a unified modern design on both web and mobile
                    platforms.
                  </span>
                </li>
                <li>
                  <span>
                    Upgraded to the latest PHP version, switched to the{" "}
                    <strong>Laravel framework</strong>, and revamped it&apos;s
                    frontend with <strong>ReactJS</strong>.
                  </span>
                </li>
                <li>
                  <span>
                    Stripe Payment Gateway Integration Updated with latest
                    version.
                  </span>
                </li>
                <li>
                  <span>
                    Latest optimizations have resulted in noticeable performance
                    enhancements.
                  </span>
                </li>
              </ul>
              <p>
                V5.0 - April 26th, 2023 - New feature added and minor
                improvements!
              </p>
              <ul>
                <li>
                  <span>
                    Employer Membership Plan Feature: We have updated our
                    membership plan feature, and employers will be able to view
                    the jobseeker contact details only if they have that
                    respective membership plan active.
                  </span>
                </li>
                <li>
                  <span>Optimized job search method.</span>
                </li>
                <li>
                  <span>Minor bug fixes and UI improvements.</span>
                </li>
              </ul>
              <p>
                V4.0 - June 14th, 2022 - New features added and minor
                improvements!
              </p>
              <ul>
                <li>
                  <span>
                    Job import using XML format:- Admin have the option to
                    import the jobs in XML format with any third party URL. All
                    the job records will be imported with selection of each XML
                    parameter for corresponding values.
                  </span>
                </li>
                <li>
                  <span>
                    Auto assignment of categories:- Job category is
                    automatically assigned for the best matched keyword while
                    importing the jobs.
                  </span>
                </li>
                <li>
                  <span>
                    Import Jobseekers :- Employers can now{" "}
                    <strong>import jobseekers</strong> in bulk through excel
                    file by using the predefined format.
                  </span>
                </li>
                <li>
                  <span>
                    Announcement marquee :- Admin have ability to manage the
                    announcements over the website which will show over the
                    homepage.{" "}
                  </span>
                </li>
              </ul>

              <p>
                V3.0 – June 29th, 2021 – New features added and design
                improvements!
              </p>
              <ul>
                <li>
                  <span>
                    Search Job provided in the homepage for convenient searching
                    with a new modern layout and even guest jobseekers can
                    upload CV from the homepage itself.
                  </span>
                </li>
                <li>
                  <span>
                    Optimized job search with filters like title, skill,
                    category and popular searches.
                  </span>
                </li>
                <li>
                  <span>
                    Upload video CV option where jobseekers can upload their{" "}
                    <strong>video CV</strong> and employer can view it in
                    jobseeker profile.
                  </span>
                </li>
                <li>
                  <span>
                    A new layout with modern eye catching user interface
                    components for every section in the web version.
                  </span>
                </li>
              </ul>

              <p>
                V2.0 – November 03rd, 2020 – New features added and other small
                improvements!
              </p>
              <ul>
                <li>
                  <span>Automatic Job Expiry feature.</span>
                </li>
                <li>
                  <span>Membership plans for jobseekers.</span>
                </li>
                <li>
                  <span>Performance improvements.</span>
                </li>
                <li>
                  <span>Minor bug fixes</span>
                </li>
              </ul>
              <p>
                V1.0 – February 13th, 2020 – Major updates and design
                improvements!
              </p>
              <ul>
                <li>
                  <span>
                    Modern design applied both for web version and apps.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Stripe</strong> payment gateway was integrated.
                  </span>
                </li>
                <li>
                  <span>
                    New language as French added in frontend of the script.
                  </span>
                </li>
                <li>
                  <span>
                    Mail notification will send when job is posted, deleted and
                    modified.
                  </span>
                </li>
                <li>
                  <span>
                    Provided ability to Recruiter to send email to any
                    jobseeker.
                  </span>
                </li>
                <li>
                  <span>
                    Provided ability to admin to configure paypal with payment
                    mode.
                  </span>
                </li>
                <li>
                  <span>
                    New announcement section shown over home page in scrolling
                    strip bar.
                  </span>
                </li>
                <li>
                  <span>
                    New section as Professional certification/participation
                    added in jobseeker profile.
                  </span>
                </li>
                <li>
                  <span>
                    Recruiter &amp; Jobseeker can delete profile by himself with
                    specific reason.
                  </span>
                </li>
                <li>
                  <span>
                    Mail history will show in both Jobseeker &amp; recruiter
                    panel.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      <section className="job_portal_area job_portal_area_food">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">
              Best Partner Company For Your Technological Solutions!
            </h2>
            <br />
            <div className="logic-parter">
              {/* <a
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
              </a> */}
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
          {/* <Modal.Footer>
                <button
                  className="btn btn-secondary"
                  onClick={toggleBuyJobPortalModal}
                >
                  Close
                </button>
              </Modal.Footer> */}
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
                        src="/img/jobboard/tech_reactjs_icon.png"
                        alt="ReactJS Development"
                      />
                    </div>
                    <div className="icntechimg_nm">ReactJS</div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/doctorappointment/django-logo-icon.png"
                        alt="Laravel Development"
                      />
                    </div>
                    <div className="icntechimg_nm">Django</div>
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
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                    Safari 5+, IE 9+
                  </li>
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Framework - </b> ReactJs, Django
                  </li>
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Language - </b> Javascript, Python
                  </li>
                  <li className="other aos-init aos-animate" data-aos="fade-up">
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
                    I just love how this software makes appointment scheduling
                    so easy; reminder notifications keep our staff and patients
                    well-informed, and attendance has improved. We have received
                    a good return on the investment so far in this practice!
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
                    Dr. Sam Patel, UK
                    <span>
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/uk_flag_img.png"
                        alt="mobile app development in USA"
                        style={{ width: "20px", marginLeft: "3px;" }}
                      />
                    </span>
                  </div>
                </div>
                <div className="customers_review_sec_row">
                  <div className="customer_review_stext" id="fiveer-clone">
                    Switching over to this scheduling software was among the
                    best decisions we ever made for the clinic. The ability for
                    patients to self-book has minimized phone calls and made
                    this a piece of cake. Highly recommended!
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
                    <span id="client-name">
                      Linda S., Office Manager, Australia
                    </span>{" "}
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
                    I just can&apos;t say enough good things about this doctor&apos;s
                    appointment scheduling software! It&apos;s really intuitive. I
                    can manage my appointments really easily. And the patients
                    love it because they can book online and save us a lot of
                    time.
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
                    <span id="client-name">Dr. Rachel Lewis, Canada</span>{" "}
                    <span>
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/canada_flag_img.png"
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
                    <div className="people_star_num">206</div>
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
                    <div className="people_star_num">13</div>
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
                    title="Online Doctor Appointment Scheduling Software"
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
                      <span>01. </span> How can I book an appointment in the
                      software?
                    </a>
                  </div>
                  <div style={activeIndex === 0 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        You can easily book an appointment by selecting your
                        desired service, choosing an available date and time,
                        and confirming the details using our friendly interface.
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
                      <span>02. </span> Can I modify or cancel my appointment?
                    </a>
                  </div>
                  <div style={activeIndex === 1 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        Yes, you&apos;ll be able to modify or cancel an appointment
                        right from the platform, however, your cancellation must
                        be made while adhering to the business&apos;s cancellation
                        policy.
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
                      <span>03. </span> Is there a way I can book an appointment
                      without making an account?
                    </a>
                  </div>
                  <div style={activeIndex === 2 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        Yes, this software provides a feature called guest mode,
                        where anyone can securely make appointments without
                        registering or logging in.
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
                      <span>04. </span> Will the system send me notifications
                      about my appointment?
                    </a>
                  </div>
                  <div style={activeIndex === 3 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        Yes, the system automatically sends notifications via
                        email or WhatsApp to help you remember your upcoming
                        appointments.
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
                      <span>05. </span> Are the healthcare provider profiles
                      visible before booking?
                    </a>
                  </div>
                  <div style={activeIndex === 4 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        Yes, you&apos;ll have full access to all of the profiles of
                        the available healthcare providers, complete with a
                        description of the specialty so that you can make an
                        informed decision.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div style={panelStyle} data-aos="fade-up">
                  <div style={headingStyle}>
                    <a
                      href="#collapse7"
                      style={titleStyle}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleAccordion(5);
                      }}
                    >
                      <span>06. </span> How can Jobseeker apply for a job?
                    </a>
                  </div>
                  <div style={activeIndex === 5 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        Jobseeker can send their details directly to the job
                        company or they can attach a cover letter along with
                        their application. They can edit, add, or delete their
                        cover letter from the profile.
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
                      <span>07. </span> How can Jobseeker create job alerts?
                    </a>
                  </div>
                  <div style={activeIndex === 6 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        Jobseekers will be able to manage the alerts that will
                        help them receive emails if the job is available
                        according to their set criteria. They can add alerts by
                        providing the information like designation of job
                        required and location of job.
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
                      <span>08. </span> Can I update some design and
                      functionality in application code myself?
                    </a>
                  </div>
                  <div style={activeIndex === 7 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        Yes, you will have access to all the code, except some
                        of the core encrypted files.
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
                      <span>09. </span> Will I be able to use it on multiple
                      domains after I purchase this script?
                    </a>
                  </div>
                  <div style={activeIndex === 8 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        You will be licensed to use it only for the domain you
                        purchased it for.
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
                      <span>10. </span> Can I resell the script? Will I have
                      rights over the script code?
                    </a>
                  </div>
                  <div style={activeIndex === 9 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        All rights will remain with Logicspice only, and you
                        cannot resell it.
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
                      <span>11. </span> Do you offer Money Back Guarantee?
                    </a>
                  </div>
                  <div style={activeIndex === 10 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        Yes, we offer a 30-day money back guarantee to ensure
                        customer satisfaction with our software. If for any
                        reason you wish to discontinue using the product, you
                        can ask us for a refund. We will refund your total money
                        except for the installation and configuration charges,
                        which is USD 65 or 20% of the application cost,
                        whichever is greater. Any cost of customization will not
                        be refunded.
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
                      <span>12. </span> Do I need to provide Google map API key?
                      If yes, how to generate Google map API key?
                    </a>
                  </div>
                  <div style={activeIndex === 11 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        Yes, you need to provide a map API key. Please follow
                        the steps mentioned in the below URL to generate a
                        Google map API key:{" "}
                        <a
                          href="https://developers.google.com/maps/documentation/javascript/get-api-key"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Generate Google Map API Key
                        </a>
                        . You need to set up your billing details over that.
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
                      <span>13. </span> Along with hosting server details, what
                      other recommendations?
                    </a>
                  </div>
                  <div style={activeIndex === 12 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        We recommend you purchase an SSL certificate along with
                        a hosting server, considering that an SSL certificate is
                        necessary for all websites these days and it provides a
                        secure layer to the website as well.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="content_area feature_inner" id="features">
        <div className="container">
          <h2 className="title_main">LS Jobber Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1500}
                    height={100 / (100 / 100)}
                    src="/img/jobboard/job_portal_script_apply_jobs.png"
                    alt="Job Application"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Job Application</div>
                  <div className="pro-feat-detai">
                    Jobseekers can apply for the job directly to the company or
                    they can attach a cover letter along with their application.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1500}
                    height={100 / (100 / 100)}
                    src="/img/jobboard/Job_portal_script_create_job.png"
                    alt="Create New Job"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Create New Job</div>
                  <div className="pro-feat-detai">
                    Employers create new jobs by entering details i.e. Job
                    title,Category,Description,Company Name, Work Type.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1500}
                    height={100 / (100 / 100)}
                    src="/img/jobboard/job_portal_system_search_jobs.png"
                    alt="Job Search"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Job Search</div>
                  <div className="pro-feat-detai">
                    Search jobs by keywords, category, location, industry,
                    functional area & city.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1500}
                    height={100 / (100 / 100)}
                    src="/img/jobboard/make_a_cv_job_portal_app.png"
                    alt="Create CV"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Create CV</div>
                  <div className="pro-feat-detai">
                    Jobseekers will be able to create and download their CV on
                    the website. All the details will get automated from
                    profile.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1500}
                    height={100 / (100 / 100)}
                    src="/img/jobboard/Manage_jobs_job_portal_script.png"
                    alt="Job Management"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Job Management</div>
                  <div className="pro-feat-detai">
                    Manage the jobs created by them making them active or
                    inactive. Check the list of job seekers who applied for job.
                  </div>
                </div>
              </div>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={1500}
                    height={100 / (100 / 100)}
                    src="/img/jobboard/membership_plan_job_portal_script.png"
                    alt="Membership Plan"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Membership Plan</div>
                  <div className="pro-feat-detai">
                    Employers buy membership plan which suits their requirement
                    best.They can renew or update your membership plan at any
                    time.
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section> */}

      {/* <section className="JObboardVideSection">
        <div className="container">
          <div className="JobBoardVideoBottom JobBoardbxVideoBottom">
            <iframe
              width="100%"
              height="312"
              src="https://www.youtube.com/embed/7fJVD2R2kkA?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </section> */}

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
                    title="Online Doctor Appointment Scheduling Software"
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
                  <Link title="View Detail" target="_black" href="/udemy-clone">
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
                            Readymade Script of video E- Learning Platform like
                            Udemy.
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
  );
};

export default Page;
