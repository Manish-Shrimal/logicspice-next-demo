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
                <h1>Applicant Tracking System Software</h1>
                <div className="both-left-p-sec">
                  <h2>
                    Efficiently manage candidates and hire the right talent
                    faster.
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
                          title="Please fill the form below and get access to the live demo of Applicant Tracking System
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
                      <p>394 Reviews</p>
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
                    width={400}
                    height={100 / (100 / 100)}
                    className="lazy"
                    src="/img/applicant-tracking-system/applicant-tracking-banner-img.png"
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
                    Applicant Tracking System Software
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
              If you&apos;re looking to make your hiring process faster and more
              efficient, our ATS (Applicant Tracking System) is the solution you
              need. With our easy-to-use applicant tracking software, you can
              simplify every step of the recruitment process. From posting job
              listings to tracking applicants, our ATS tracking system helps you
              stay organized and find the right talent quickly.
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
                    <li>Centralized Candidate Management</li>
                    <li>Smart Resume Filtering</li>
                    <li>Automated Candidate Communication</li>
                    <li>Multi-Platform Job Posting</li>
                    <li>User-Friendly Dashboard</li>
                    <li>Real-Time Analytics and Reporting</li>
                    <li>Customizable Hiring Workflows</li>
                    <li>Mobile-Friendly Access</li>
                    <li>SEO Friendly</li>
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
                Applicant Tracking System Software Features
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
              Our Applicant Tracking System software is designed to simplify the
              recruitment process, making it easier for businesses of all sizes
              to manage applicants efficiently. Whether you are hiring for a
              small team or a large enterprise, our top Applicant Tracking
              Systems help you track, organize, and evaluate job applications in
              one centralized platform. With tools for sorting, filtering, and
              communication, you can quickly hire the right candidate for your
              team. With our intuitive job application tracker, you can easily
              keep all candidate data in one centralized platform, making it
              simple to track, organize, and evaluate applications.
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
                    <a>User Panel </a>
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
                                  Profile Management
                                  <div className="product-idea">
                                    <p>
                                      Candidates can easily create and manage
                                      their profiles, including personal
                                      information, work experience, skills, and
                                      uploaded resumes. They can update their
                                      details anytime.
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
                                  Smart Job Search
                                  <div className="product-idea">
                                    <p>
                                      Use filters to search for job openings
                                      based on location, job type, and other
                                      preferences. Find the best-fit positions
                                      quickly with an intuitive search feature.
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
                                  Easy Application Process
                                  <div className="product-idea">
                                    <p>
                                      Candidates can apply to job openings in
                                      just a few clicks, attaching resumes and
                                      cover letters directly from their profile.
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
                                  Track Application Status
                                  <div className="product-idea">
                                    <p>
                                      Candidates can track the status of their
                                      applications in real-time, from submission
                                      to interview or offer stage.
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
                                  Interview Scheduling
                                  <div className="product-idea">
                                    <p>
                                      Candidates can easily schedule and confirm
                                      interviews directly through the platform,
                                      simplifying communication with recruiters.
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
                                  Profile Privacy and Security
                                  <div className="product-idea">
                                    <p>
                                      Candidate profiles are secure with strong
                                      encryption, ensuring personal information
                                      is kept private.
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
                                  Feedback and Notifications
                                  <div className="product-idea">
                                    <p>
                                      Receive automatic updates about
                                      application status, interview scheduling,
                                      and feedback through email or SMS
                                      notifications.
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
                                  Manage Candidate Profiles
                                  <div className="product-idea">
                                    <p>
                                      View and manage detailed candidate
                                      profiles with ease, including resumes,
                                      cover letters, and application history.
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
                                  Smart Candidate Filtering
                                  <div className="product-idea">
                                    <p>
                                      Sort applications based on keywords,
                                      experience, education, and skills. Quickly
                                      filter through large volumes of
                                      applications to find the best-fit
                                      candidates.
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
                                  Interview Scheduling and Coordination
                                  <div className="product-idea">
                                    <p>
                                      Schedule and coordinate interviews with
                                      candidates directly within the platform,
                                      integrating with calendars for seamless
                                      booking.
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
                                  Collaboration Tools
                                  <div className="product-idea">
                                    <p>
                                      Share candidate profiles with team members
                                      for review and feedback. Make
                                      collaborative decisions using internal
                                      notes and ratings
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
                                  Applicant Shortlisting
                                  <div className="product-idea">
                                    <p>
                                      Easily shortlist candidates based on
                                      criteria, and mark potential matches as
                                      favorites for further assessment.
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
                                  Customizable Workflows
                                  <div className="product-idea">
                                    <p>
                                      Tailor the recruitment workflow to fit
                                      your business needs, from initial
                                      screening to final offer, ensuring
                                      consistency in every hiring process.
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
                                  Candidate Communication
                                  <div className="product-idea">
                                    <p>
                                      Send automated or personalized emails to
                                      candidates, keeping them informed about
                                      their application status, interview
                                      invitations, and other updates.
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
                                  Centralized Dashboard
                                  <div className="product-idea">
                                    <p>
                                      Access a comprehensive view of all
                                      recruitment activities from a single
                                      dashboard, including ongoing job postings,
                                      applications, and hiring progress.
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
                                  Job Posting Management
                                  <div className="product-idea">
                                    <p>
                                      Easily create and manage job listings,
                                      post to various platforms, and track their
                                      performance.
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
                                  Multi-User Access
                                  <div className="product-idea">
                                    <p>
                                      Set permissions for different users
                                      (recruiters, hiring managers, HR team) to
                                      ensure secure and organized access to the
                                      system.
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
                                  Advanced Reporting & Analytics
                                  <div className="product-idea">
                                    <p>
                                      Access detailed analytics on recruitment
                                      efforts, such as time-to-hire,
                                      cost-per-hire, and applicant drop-off
                                      rates, to make data-driven hiring
                                      decisions.
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
                                  Candidate Database Management
                                  <div className="product-idea">
                                    <p>
                                      Maintain a centralized, searchable
                                      database of all past and present
                                      applicants. Quickly retrieve candidate
                                      profiles and search based on specific
                                      criteria.
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
                                  Customizable Hiring Processes
                                  <div className="product-idea">
                                    <p>
                                      Create and modify workflows, from resume
                                      screening to final offer letters, to align
                                      with your organization&apos;s specific hiring
                                      practices.
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
                                  Job Offer Management
                                  <div className="product-idea">
                                    <p>
                                      Generate and send job offers, track
                                      accepted offers, and move candidates
                                      through the final stages of hiring.
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
                                  Security & Compliance
                                  <div className="product-idea">
                                    <p>
                                      Ensure your recruitment data is protected
                                      with top-notch security features and
                                      compliance with relevant data protection
                                      laws.
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
                What Does Our Applicant Tracking System Do for You?
              </h2>
              {/* <p>
                Our Doctor Appointment Scheduling Software simplifies the entire
                process of managing medical appointments. Whether you run a
                clinic, hospital, or private practice, this software makes it
                easy for patients to book their appointments online, reducing
                the workload for your staff and improving patient satisfaction.
              </p> */}
              <h3 className="Haeddinh2">Simplify Your Hiring Process</h3>
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
                Our application tracking system software is built to make hiring
                simple and efficient. Whether you&apos;re a small business or a
                growing enterprise, our platform helps you organize and manage
                job applications effortlessly. With an easy-to-use interface and
                a responsive design, you can handle your hiring needs without
                any technical knowledge.
              </p>
              <h3 className="Haeddinh2">
                A Better Experience for Recruiters and Candidates
              </h3>
              <p>
                Recruiters can take full advantage of our applicant tracking
                software for recruiters, which offers tools for posting jobs,
                reviewing applications, and managing candidates with ease.
                Automatic resume sorting, smart filters, and communication tools
                ensure you focus on the most qualified candidates. For
                candidates, the system provides a seamless way to apply for
                jobs, upload resumes, and track their application status. They
                can save job postings for later, share opportunities via email
                or social media, and receive timely updates about their
                applications.
              </p>
              <h3 className="Haeddinh2">
                Simple and Effective Recruitment for Small Businesses
              </h3>
              <p>
                Our applicant tracking software for small business is built with
                simplicity and efficiency in mind. With the ability to post
                jobs, sort candidates, and collaborate with your team, you&apos;ll
                have everything you need to streamline your recruitment efforts.
                Designed for ease of use, it keeps the process simple and
                efficient.
              </p>
              <h3 className="Haeddinh2">Designed for Global Reach</h3>
              <p>
                Our best applicant tracking software is suitable for businesses
                across the globe, whether you&apos;re based in the USA, UK, Europe,
                or beyond. It&apos;s flexible and scalable, making it ideal for
                companies of all sizes and industries. From local hiring to
                global recruitment, our software adapts to your needs, helping
                you find the right talent no matter where you are.
              </p>
              <p>
                Join the hundreds of businesses that trust our application
                tracking system software to simplify their hiring processes.
                Discover how easy it is to attract, evaluate, and hire top
                talent with a solution designed to work for you.
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
                        Unlimited Job Listings & Applications: Post and manage
                        an unlimited number of job openings and applications
                        without restrictions.
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
                        title="Please fill the form below and get access to the live demo of Applicant Tracking System Software. See how it works yourself!"
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
                      <p>394 Reviews</p>
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
                      Great software with excellent features! The ATS helped us
                      organize our recruitment better, saving us a lot of time.
                      The support team was very responsive and assisted us with
                      everything we needed.
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
                      Mark R., USA
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
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext" id="fiveer-clone">
                      I was looking for an affordable yet effective ATS, and
                      Logicspice delivered just that. The system is packed with
                      useful features, and their support team is always there
                      when you need them. A great investment!
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
                      <span id="client-name">Lisa S., Canada</span>{" "}
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

                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext" id="fiveer-clone">
                      I recently started using Logicspice&apos;s applicant tracking
                      system, and it has made our hiring process so much
                      smoother. The system is easy to navigate, and we can now
                      track applicants effortlessly. Highly recommended!
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
                      <span id="client-name">Tom W., Australia</span>{" "}
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
                      title="Applicant Tracking System"
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
                        <span>01. </span>What is an Applicant Tracking System
                        (ATS)?
                      </a>
                    </div>
                    <div style={activeIndex === 0 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          An Applicant Tracking System (ATS) is a software tool
                          that helps businesses manage the hiring process. It
                          allows you to post job openings, track applicants, and
                          organize candidate data, all in one place.
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
                        <span>02. </span> Who can use an ATS?
                      </a>
                    </div>
                    <div style={activeIndex === 1 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Logicspice&apos;s ATS software is designed for businesses
                          of all sizes, from small startups to large
                          enterprises. Whether you&apos;re hiring for a single
                          position or managing multiple job openings, our
                          software can help.
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
                        <span>03. </span> Do I need technical skills to use your
                        ATS?
                      </a>
                    </div>
                    <div style={activeIndex === 2 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Not at all! Our ATS applicant tracking software is
                          user-friendly and designed for people with no
                          technical background. You can get started easily, and
                          our support team is always available to help.
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
                        <span>04. </span> Is your ATS mobile-friendly?
                      </a>
                    </div>
                    <div style={activeIndex === 3 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes, our ATS is fully mobile-friendly. You can manage
                          job postings, track applicants, and communicate with
                          candidates from your smartphone or tablet.
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
                        <span>05. </span> Can candidates track their application
                        status?
                      </a>
                    </div>
                    <div style={activeIndex === 4 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes, candidates can view the status of their
                          applications in real-time, giving them transparency
                          and a better experience.
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
                      title="Applicant Tracking System"
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
  );
};

export default Page;
