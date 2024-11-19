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
        <section className="paid-pro job-portal-banner fiverr-new-banner job-portal-bg NewJobSiteDesign JobBoardNewDesign SalonBookingBanner">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 col-md-7">
                <h1>Salon Booking Software</h1>
                <div className="both-left-p-sec">
                  <h2>
                    Easily manage appointments with flexible scheduling
                    solutions for salons and spas.
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
                   
                    {/* <span>Fill your basic details and</span>

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
                          title="Please fill the form below and get access to the live demo of Salon Booking Software. See how it works yourself!"
                        />
                      }
                    </div>

                    <a
                      className=" fiverr-buys NewGreenBtnJob text-center"
                      href="/buy-now/salon-booking-software"
                      id="buy_now_1"
                    >
                      BUY NOW
                    </a> */}
                    <div className="enquiry_software_btn" style={{marginTop: "15px"}} onClick={openModal}>
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
                    height={100 / (100 / 100)}
                    className="lazy"
                    src="/img/doctorappointment/salon-img.png"
                    alt="Salon Booking Software"
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
                    Salon Booking Software
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
              {/* <strong>
              <i>Online Doctor Appointment Scheduling Software</i>
            </strong>{" "}
            makes the scheduling of medical appointments easy and hassle-free.
            This software is specifically designed for healthcare providers.
            Patients can find their doctor online and book an appointment in a
            few simple steps. With just a few clicks, patients will be allowed
            to choose their time slots in accordance with the availability of
            doctors. */}
              Our Salon Booking Software is designed to make booking
              appointments easy and hassle-free for salons, spas, and beauty
              centers. Clients can find your services, pick their favorite
              stylist or therapist, and book a time that works for them—all in
              just a few clicks. This user-friendly software equips you with
              just the right tools to create an easy, seamless booking
              experience that&apos;s convenient both for your clients and your team.
            </p>
            <p>
              {/* This is a white-label solution that can be themed to one&apos;s own
            brand name and identity. It&apos;s a ready-to-use software that
            helps clinics, hospitals, and private practices set up their own
            appointment booking system in no time. */}
              The software is customizable, so it matches your brand perfectly.
              Whether you run a nail salon, spa, or hair salon, this software
              adapts to your brand style and helps keep bookings smooth and
              professional.
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
                    <li>Easy-to-Use Search Filters</li>
                    <li>24/7 Online Bookings</li>
                    <li>Mobile-Friendly Design</li>
                    <li>Customizable to Your Brand</li>
                    <li>Automated Notifications</li>
                    <li>Flexible Calendar Views</li>
                    <li>Valuable Insights</li>
                    <li>SEO Optimized</li>
                    <li>Multi-Location Access</li>
                    <li>Intuitive and User-Friendly</li>
                    {/* <li>SEO-Friendly</li>
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
              <h2 className="taxt_tt_job">Salon Booking Software Features</h2>
            </div>
            <div className="tatxt_txt_job">
              {/* Our{" "}
            <strong>
              <i>Doctor Appointment Scheduling </i>
            </strong>{" "}
            Software has been designed to facilitate smooth and easy
            management of appointments of patients. This software allows
            healthcare providers to automate the scheduling process, enabling
            patients to easily book, reschedule, or cancel appointments online.
            The system works 24/7, offering flexibility in both the patients&apos;
            and the medical staff&apos;s busy schedules while reducing the
            administrative workload. With built-in features like email
            notifications or WhatsApp reminders, healthcare providers can ensure
            patients never miss an appointment. It is a complete white-label
            solution and can be fully customized to your branding in order to
            provide a professional, consistent interface. */}
              With our Salon Appointment Booking Software, clients can quickly
              and easily book appointments online, while staff can manage
              schedules without the usual manual effort. It&apos;s a complete
              solution that simplifies your day-to-day operations, improving
              customer experience. Our software allows for easy booking, more
              flexible conditions to rebook, and to stay with your salon. With
              automated notifications, clients stay engaged and are less likely
              to miss appointments. It&apos;s a very user-friendly platform,
              customized to the look of your salon, and overall a great
              experience that will keep your clients wanting to come back for
              more.
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
                    <a>Customer Panel (Clients) </a>
                  </li>
                  <li
                    id="tab2_li"
                    className={`emplyer_app_job ddlj ${
                      buyerTab ? "active" : ""
                    }`}
                    onClick={() => handleBuyerTab()}
                  >
                    <a>Staff Panel (Salon Professionals) </a>
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
                                      Clients can create and manage their
                                      profiles, including personal preferences,
                                      booking history, and payment information,
                                      making the next booking faster and more
                                      personalized.
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
                                  Easy Booking
                                  <div className="product-idea">
                                    <p>
                                      Clients can easily book, reschedule, or
                                      cancel appointments in just a few clicks.
                                      Whether it’s a haircut, facial, or
                                      massage, booking is quick and hassle-free.
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
                                  Real-time Availability
                                  <div className="product-idea">
                                    <p>
                                      Clients can view the live availability of
                                      their favorite salon professionals,
                                      ensuring they get the time slot that works
                                      best for them.
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
                                  Service Menu
                                  <div className="product-idea">
                                    <p>
                                      Clients can browse a comprehensive list of
                                      salon services and select their preferred
                                      treatments, ensuring clarity about what
                                      they’re booking.
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
                                  Appointment History
                                  <div className="product-idea">
                                    <p>
                                      Clients can access their past
                                      appointments, track their visit history,
                                      and rebook their favorite services with a
                                      single click.
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
                                  Notifications & Reminders
                                  <div className="product-idea">
                                    <p>
                                      Automatic reminders are sent via SMS or
                                      email to clients about upcoming
                                      appointments, reducing no-shows and
                                      keeping everyone on schedule.
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
                                  Multi-location Booking
                                  <div className="product-idea">
                                    <p>
                                      For salons with multiple locations,
                                      clients can book appointments at any
                                      branch, making it easy to manage services
                                      no matter where they are.
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
                                  Guest Mode
                                  <div className="product-idea">
                                    <p>
                                      Clients can book an appointment without
                                      creating an account, making the process
                                      even more convenient for one-time users.
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
                            </li> */}
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
                                  Appointment Management
                                  <div className="product-idea">
                                    <p>
                                      Salon staff can easily manage bookings,
                                      view customer details, reschedule
                                      appointments, and mark services as
                                      completed – all from one user-friendly
                                      dashboard.
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
                                  Service Management
                                  <div className="product-idea">
                                    <p>
                                      Salon professionals can manage their
                                      service offerings, including updating
                                      prices, and descriptions, and adding or
                                      removing services from the menu.
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
                                      Staff receives instant updates for new
                                      bookings, cancellations, or changes to
                                      existing appointments, ensuring they’re
                                      always prepared for the day.
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
                                  Availability Management
                                  <div className="product-idea">
                                    <p>
                                      Staff can update their available time
                                      slots and set personal time off or block
                                      off certain hours for breaks or meetings.
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
                                  Client History
                                  <div className="product-idea">
                                    <p>
                                      Salon professionals can view past
                                      services, client preferences, and booking
                                      history to offer more personalized
                                      services and recommendations.
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
                            </li> */}

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
                                  Daily Overview
                                  <div className="product-idea">
                                    <p>
                                      The dashboard provides a comprehensive
                                      view of all appointments scheduled for the
                                      day, with options to filter by time,
                                      client, or service.
                                    </p>
                                  </div>
                                </span>
                              </li>
                              {/* 
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
                            </li> */}
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
                                  Secure Login
                                  <div className="product-idea">
                                    <p>
                                      Admins can securely log in to manage the
                                      entire salon operation, ensuring that only
                                      authorized users have access.
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
                                      Admins can create, edit, or delete
                                      accounts for clients, salon professionals,
                                      and other staff members. They can also
                                      manage roles and permissions to control
                                      access.
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
                                  Staff Management
                                  <div className="product-idea">
                                    <p>
                                      Admins can add, edit, or remove staff
                                      profiles, set working hours, and manage
                                      shift schedules to ensure the salon is
                                      always properly staffed.
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
                                  Appointment Tracking
                                  <div className="product-idea">
                                    <p>
                                      Admins can oversee all appointments,
                                      reschedule when necessary, and monitor
                                      real-time updates from every department to
                                      ensure smooth operations.
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
                                  Reports & Analytics
                                  <div className="product-idea">
                                    <p>
                                      Admins can view detailed reports on
                                      appointment statistics, revenue, client
                                      retention, and more, helping make informed
                                      decisions for the business.
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
                                  Customizable Branding
                                  <div className="product-idea">
                                    <p>
                                      Admins can customize the software
                                      interface to match their salon’s brand
                                      with logos, color schemes, and branding
                                      elements to provide a professional and
                                      cohesive experience.
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
                                  Multi-location Support
                                  <div className="product-idea">
                                    <p>
                                      Admins who operate salons in multiple
                                      locations can manage all their branches
                                      from a single platform, overseeing
                                      appointments, staff, and schedules across
                                      locations.
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
                                  Blog Management
                                  <div className="product-idea">
                                    <p>
                                      Admins can create, edit, and manage blog
                                      posts, promotional offers, and discounts
                                      directly on the platform, making it easy
                                      to engage with clients and promote
                                      services
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
                                  Payment Integration
                                  <div className="product-idea">
                                    <p>
                                      The system allows admins to set up secure
                                      online payment gateways to collect
                                      payments and process invoices for bookings
                                      directly through the software.
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
              <h2 className="headhs">
                How Our Salon Booking Software Helps You
              </h2>
              <p>
                Our Salon Booking Software simplifies the entire process of
                managing client appointments. Whether you operate a beauty
                salon, spa, or nail studio, this software makes it easy for
                clients to book appointments online, reducing the scheduling
                workload for your staff and boosting customer satisfaction.
              </p>
              <h3 className="Haeddinh2">Simple and Easy for Clients</h3>
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
                Beyond booking, clients can easily reschedule or cancel their
                appointments with just a few clicks. They can select available
                time slots, receive instant confirmations, and get reminders via
                email or SMS, which leads to fewer missing appointments and
                keeps everything organized.
              </p>
              <h3 className="Haeddinh2">
                Efficient for Salon Owners and Staff
              </h3>
              <p>
                Salon staff and managers can effortlessly handle all
                appointments through a user-friendly dashboard. Our beauty salon
                appointment software tracks client bookings, manages staff
                availability, and provides real-time updates. This streamlines
                daily operations, helping you focus more on delivering excellent
                services rather than handling manual scheduling.
              </p>
              <h3 className="Haeddinh2">Customizable for Your Brand</h3>
              <p>
                Our salon appointment scheduling software can be customized to
                align with the branding and needs of your salon or spa. It
                adapts seamlessly to the unique setup of small salons or large
                multi-location beauty studios, offering flexibility as your
                business grows and expands.
              </p>
              <h3 className="Haeddinh2">Comprehensive and Reliable Solution</h3>
              <p>
                This salon appointment booking software is not just a scheduling
                tool; it&apos;s a complete solution for managing client
                appointments and enhancing the customer experience. You will be
                able to offer a seamless experience with advanced calendar
                management, real-time updates, and automated reminders while
                being able to pay much more attention to the care and quality of
                service of your clients.
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
                  subscription-based hassle-free model, available at just USD
                  145 per month.
                </p>
                <p>Key Benefits:</p>
                <ul>
                  <li>
                    <span>
                      Experience convenience like never before with our
                      subscription-based hassle-free model, available at just
                      USD 145 per month.
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
                      Timely Upgrades: Seamlessly transition to upgraded
                      versions at regular intervals, all at no extra cost.
                    </span>
                  </li>
                  <li>
                    <span>
                      Zero Setup Fees:- There are no additional charges for the
                      setup and installation of the software, making it easier
                      for customers to get started.
                    </span>
                  </li>
                  <li>
                    <span>
                      Unlimited Appointment Booking: Book as many appointments
                      as you need without any limitations.
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
                  {/* <div className="btn btn-get" onClick={openDemoAccessModal}>
                    <button>Get Demo Access!</button>
                    {
                      <GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of Salon Booking Software. See how it works yourself!"
                        />
                    }
                  </div>
                  <a
                    className="btn fiverr-buys"
                    href="/buy-now/job-board-software"
                    id="buy_now_1"
                  >
                    Buy Now
                  </a> */}
                  <div className="enquiry_software_btn" style={{marginTop: "15px"}} onClick={openModal}>
                    <button className="btn fiverr-buys NewGreenBtnJob">
                      Enquire Now
                    </button>
                    {
                      <SoftwareEnquiry
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Salon Booking Software"
                      />
                    }
                  </div>
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
                      <b>Framework - </b> ReactJs, Django
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
                      &quot;This hair salon booking software has completely changed
                      how we manage our appointments. Clients find it so easy to
                      book online. It&apos;s been a huge help for our salon!&quot;
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
                      Sarah J., Salon Owner, USA
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
                    &quot;We&apos;re so happy we switched to this software. Clients can
                      book their own appointments whenever they want, which
                      frees up our time to focus on them when theyre here. It&apos;s
                      made such a difference for us.&quot;
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
                        Donald M., Beauty Salon Owner, UK
                      </span>{" "}
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
                    &quot;Adding this booking software was the best decision for
                      our spa. Clients love the convenience, and we can focus
                      more on their experience instead of dealing with
                      scheduling. It&apos;s been amazing.&quot;
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
                        James P., Spa Owner, New Zealand
                      </span>{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/jobboard/newzealand_flag.jpg"
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
                      title="Salon Booking Software"
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
                        <span>01. </span> How does this salon booking software
                        help me manage appointments?
                      </a>
                    </div>
                    <div style={activeIndex === 0 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          This software makes scheduling easy. Clients can book,
                          change, or cancel appointments online anytime. It also
                          sends reminders, so you don&apos;t have to worry about
                          missed appointments. Plus, you can easily manage
                          everything from one dashboard.
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
                        <span>02. </span> Is this software good for salons with
                        multiple locations?
                      </a>
                    </div>
                    <div style={activeIndex === 1 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Absolutely! You can manage appointments for one or
                          many locations, keeping everything organized no matter
                          how many branches you have.
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
                        <span>03. </span> Is this software secure?
                      </a>
                    </div>
                    <div style={activeIndex === 2 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes, we prioritize data security with
                          industry-standard encryption, so all client and
                          booking data is safe. Only authorized staff can access
                          sensitive information, ensuring client privacy.
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
                        <span>04. </span> Can I customize the software to match
                        my salon&apos;s brand?
                      </a>
                    </div>
                    <div style={activeIndex === 3 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes! You can customize the software with your salon&apos;s
                          logo, colors, and branding to make it feel like part
                          of your business.
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
                        <span>05. </span> What if a client needs to cancel or
                        reschedule?
                      </a>
                    </div>
                    <div style={activeIndex === 4 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Clients can easily cancel or reschedule their
                          appointments online. You&apos;ll get real-time updates, and
                          the system will automatically adjust availability.
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
                        <span>06. </span> Does the software remind clients about
                        their appointments?
                      </a>
                    </div>
                    <div style={activeIndex === 5 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes, clients receive automatic reminders by email or
                          SMS, so they won&apos;t forget their appointment with you.
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
                      title="Salon Booking Software"
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
