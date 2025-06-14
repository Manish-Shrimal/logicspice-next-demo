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
import React, { useEffect, useRef, useState } from "react";
import Contactusmodel from "@/app/Components/Contactusmodel";
import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
import "../../resposive.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";
import "../../../../public/css/font-awesome.css";

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
  const [modalTitle, setModalTitle] = useState("");
  const [jobportal, setJobportal] = useState(false);
  const [buyjobportal, setBuyJobportal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
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
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  // var companies = {
  //   dots: true,
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 3000,
  // };
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

  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        BaseAPI + "/product/Details/job-portal-script"
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 13; // change this based on how many items you render

  const CustomNextArrow = (props) => {
    const { onClick, currentSlide, slideCount } = props;
    const isLastSlide = currentSlide >= slideCount - 1;

    if (isLastSlide) return null; // Hide on last slide

    return (
      <button
        className="custom-arrow next"
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50%",
          right: "-65px",
          transform: "translateY(-50%)",
          backgroundColor: "#333",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        <i
          className="fa fa-chevron-circle-right"
          aria-hidden="true"
          style={{ fontSize: "24px" }}
        ></i>
      </button>
    );
  };

  const CustomPrevArrow = (props) => {
    const { onClick, currentSlide } = props;
    const isFirstSlide = currentSlide === 0;

    if (isFirstSlide) return null; // Hide on first slide

    return (
      <button
        className="custom-arrow prev"
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50%",
          left: "-65px",
          transform: "translateY(-50%)",
          backgroundColor: "#333",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        <i
          className="fa fa-chevron-circle-left"
          aria-hidden="true"
          style={{ fontSize: "24px" }}
        ></i>
      </button>
    );
  };

  const companies = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    nextArrow: <CustomNextArrow currentSlide={currentSlide} />,
    prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
  };

  const [demoAccessModal, setDemoAccessModal] = useState(false);
  const openDemoAccessModal = () => {
    // console.log(showModal);

    setDemoAccessModal(!demoAccessModal);
  };

  const iframeRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [isInView, setIsInView] = useState(false);

  // Load and initialize the YouTube Player API
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new YT.Player("ytplayer", {
        events: {
          onReady: (event) => {
            const savedTime =
              parseFloat(localStorage.getItem("lastPlayedTime")) || 0;
            event.target.seekTo(savedTime);
            setPlayer(event.target);
          },
          onStateChange: (event) => {
            if (
              event.data === YT.PlayerState.PLAYING ||
              event.data === YT.PlayerState.PAUSED
            ) {
              const currentTime = event.target.getCurrentTime();
              localStorage.setItem("lastPlayedTime", currentTime);
            }
          },
        },
      });
    };

    return () => {
      document.body.removeChild(tag);
    };
  }, []);

  // Set up IntersectionObserver to handle play/pause based on viewport visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (iframeRef.current) observer.observe(iframeRef.current);

    return () => {
      if (iframeRef.current) observer.unobserve(iframeRef.current);
    };
  }, []);

  // Control playback based on `isInView` and `player` readiness
  useEffect(() => {
    if (player) {
      if (isInView) {
        const savedTime =
          parseFloat(localStorage.getItem("lastPlayedTime")) || 0;
        player.seekTo(savedTime);
        player.playVideo();
      } else {
        player.pauseVideo();
      }
    }
  }, [isInView, player]);

  return (
    <>
      <Navbar />
      <section className="paid-pro job-portal-banner fiverr-new-banner job-portal-bg NewJobSiteDesign JobBoardNewDesign">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>LS Jobber - Online Job Portal Script</h1>
              <div className="both-left-p-sec">
                <h2>Best Way to Launch Your Own Job Portal</h2>
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
                    className=" btn-get"
                    onClick={openDemoAccessModal}
                    style={{ textAlign: "center" }}
                  >
                    <a>Get Demo Access!</a>
                    {
                      // <SoftwareEnquiry
                      //   modalStatus={showModal}
                      //   toggle={openModal}
                      //   title="Please fill the form below and get access to the live demo of Job Board Software.See how it work yourself!"
                      // />

                      <GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of Job Portal Script. See how it works yourself!"
                      />
                    }
                  </div>

                  <Link
                    className="btn fiverr-buys NewGreenBtnJob"
                    href="/buy-now/jobsite"
                    id="buy_now_1"
                  >
                    Buy Now
                  </Link>
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
                    <p>218 Reviews</p>
                  </div>
                </div>
                <div className="jocpp">
                  <ul className="job-pr-icon jobwidthauto">
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
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                <Image
                  unoptimized={true}
                  width={370}
                  height={100 / (100 / 100)}
                  className="lazy"
                  src="/img/jobboard/new-img-jobboard.png"
                  alt="Job_Board_Software"
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
                  Job Portal Script
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            Crafting a personalized job portal has never been this empowering.
            Our LS Jobber offers a gateway for businesses and companies to
            establish their own
            <strong> bespoke white label job portals</strong>. Not just that,
            entrepreneurs can seamlessly integrate recruiters into the hiring
            process, streamlining the journey from opportunity to employment.
            With its <i>advanced functionalities</i> and{" "}
            <i>user-friendliness</i>, even individuals without a technical
            background can effortlessly navigate this dynamic platform. The
            admin&apos;s role is made effortless through a responsive and
            user-friendly dashboard, where insights into users, jobs,
            categories, and payment histories are at your fingertips.
          </p>
        </div>
      </section>
      <section
        className=""
        style={{ backgroundColor: "#f1f1f1", padding: "60px 0" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 job-video">
              {/* <iframe
                id="jobvideo"
                width="100%"
                height="312"
                src="https://www.youtube.com/embed/7fJVD2R2kkA?rel=0&autoplay=0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe> */}
              <div ref={iframeRef}>
                <iframe
                  id="ytplayer"
                  width="100%"
                  height="312"
                  src="https://www.youtube.com/embed/7fJVD2R2kkA?enablejsapi=1&mute=1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-market-ttd-new JobBoardServiceMarketFeatures">
                <ul>
                  <li>Post Unlimited Jobs</li>
                  <li>Responsive & SEO Friendly</li>
                  <li>Advanced Search Filter</li>
                  <li>Manage Candidate Database</li>
                  <li>New Announcement</li>
                  <li>Social Media Sharing</li>
                  <li>Multiple Payment Gateway</li>
                  <li>Upload Video CV</li>
                  <li>Theme Color Management</li>
                  <li>One time License Fee</li>
                  <li>Email Notification</li>
                  <li>Auto Suggestion Filtering</li>
                  <li>Multi-Language/Currency Support</li>
                  <li>Optimized job search with filters</li>
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
              LS Jobber- Job Portal Script Features
            </h2>
          </div>
          <div className="tatxt_txt_job text-center">
            Navigating the hiring sphere takes on a new dimension with our
            feature-rich job portal PHP script. Employers can seamlessly post
            job listings by entering intricate details about the position and
            the requisite skill sets. Jobseekers embark on their journey by
            browsing jobs based on diverse categories, such as location and
            experience. Detailed job information can be stored for future
            reference, and eligible candidates can apply with ease. The added
            option of submitting a cover letter enhances the application
            process. Furthermore, crafting or updating CVs becomes a breeze,
            with users effortlessly selecting the most suitable format. Admins
            wield the power to activate, deactivate, edit, or remove employer
            and job seeker profiles as needed.
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
                  <a>Jobseeker App Features </a>
                </li>
                <li
                  id="tab2_li"
                  className={`emplyer_app_job ddlj ${buyerTab ? "active" : ""}`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>Employer App Features </a>
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
                            width={400}
                            height={100}
                            src="/img/jobboard/mobile-job-seeker.png"
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
                                Jobseeker Registration
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can register on the Job Portal
                                    using Email Address.
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
                                Manage Job Alerts
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can apply for Job Alerts & will
                                    get the Job alerts for specific Job,
                                    location & Category. Jobseekers can
                                    manage(add/edit/delete) Job alerts.
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
                                Manage Profile
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can view their profile details &
                                    can manage(add/edit/delete) their Profile.
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
                                Save Favorite Jobs
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can save the Job as Favorite and
                                    can apply in future or soon.
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
                                Apply to a Job
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can apply for the Jobs which are
                                    relevant to their Profile.{" "}
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
                                Search Jobs
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can search Jobs using Keyword,
                                    Category, Location & Work Type etc. which
                                    will provide the relevant result.
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
                                Applied List
                                <div className="product-idea">
                                  <p>
                                    Jobseeker can view the list of applied jobs
                                    on the portal.
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
                                Share a Job
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can share Job Tumblr, Facebook,
                                    Twitter, Print, Pinterest, Gmail, Google+
                                    etc.
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
                                Manage Education
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can view their Education details
                                    & can manage(add/edit/delete) the Education.
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
                                  src="/img/jobboard/manage_exp.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Manage Experience
                                <div className="product-idea">
                                  <p>
                                    Jobseekers can view all experience details
                                    which they have added in the profile & can
                                    manage(add/edit/delete) Experience.
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
                                    format & adding the fields which are
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
                                    Specific Industry, Specific Functions &
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
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right">
                          <Image
                            unoptimized={true}
                            width={400}
                            height={100}
                            src="/img/jobboard/emplyer-mobile.png"
                            alt="Buyer App Features"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left">
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
                                Employer Registration
                                <div className="product-idea">
                                  <p>
                                    Employers can register on the Job Portal
                                    using Email Address.
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
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Membership Plans
                                <div className="product-idea">
                                  <p>
                                    Employers can purchase the Membership
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
                                  src="/img/jobboard/fov_cant.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Favorite Candidates
                                <div className="product-idea">
                                  <p>
                                    Employers can mark the Candidate as
                                    Favorites who is relevant to the Job Post or
                                    requirement.
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
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Create Job
                                <div className="product-idea">
                                  <p>
                                    Employers can create a job by adding Job
                                    Title, Category, Job Description, Company
                                    Name, Company Profile, Work Type, Contact
                                    Name & Contact Number, Company Website,
                                    Skills, Designation, Location, Experience,
                                    Annual salary, Company Logo etc.
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
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Manage Jobs
                                <div className="product-idea">
                                  <p>
                                    Employers can view the list of Created Jobs
                                    & can manage(add/edit/delete) Jobs.
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
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Update Job status
                                <div className="product-idea">
                                  <p>
                                    Employer can activate/deactivate the Jobs
                                    which are posted.
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
                                Manage Profile
                                <div className="product-idea">
                                  <p>
                                    Employer can view Profile & can
                                    manage(update) Profile. Employers can change
                                    passwords & logos.
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
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Count Search view
                                <div className="product-idea">
                                  <p>
                                    Employers can view the count for total
                                    numbers of Search views.
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
                                  src="/img/jobboard/count_job_view.png"
                                  alt="Jobseeker App Feature"
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
                                  alt="Jobseeker App Feature"
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
                                  alt="Jobseeker App Feature"
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
                                    be generated & employer can
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
                                  alt="Jobseeker App Feature"
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
                                    Employers can manage mail history of custom
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
                                  src="/img/jobboard/manage-dashboard.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Dashboard Background Image
                                <div className="product-idea">
                                  <p>
                                    Employer can change/update dashboard
                                    background image.
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
                                    Employers can delete accounts by entering
                                    the reason.
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
                                  src="/img/jobboard/import_jobseekers.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Import Jobseekers
                                <div className="product-idea">
                                  <p>
                                    Employers can now import jobseekers in bulk
                                    through excel file by using the predefined
                                    format.
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
                                  src="/img/jobboard/accept_online.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Accept Online Payments
                                <div className="product-idea">
                                  <p>
                                    When it comes to recruitment, accepting
                                    payments can be a headache. But with our job
                                    boards software, you can enjoy a simple and
                                    seamless checkout process. Our platform
                                    comes with Stripe and PayPal built-in
                                    payment gateways, allowing you to accept
                                    Visa, MasterCard, Discover, American
                                    Express, and PayPal with ease.
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
                                  src="/img/jobboard/company_profile.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Company Profile Page
                                <div className="product-idea">
                                  <p>
                                    Employers can create a branded company
                                    profile page on our job board software,
                                    which includes their logo, company
                                    information, website, images, videos, and
                                    all active jobs posted. This can be a useful
                                    tool to attract more applicants and showcase
                                    your company culture.
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
                                  src="/img/jobboard/view_jobseeker_icon.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                View Jobseeker Contact Details
                                <div className="product-idea">
                                  <p>
                                    Employers will be able to view the jobseeker
                                    contact details only if they have that
                                    respective membership plan active.
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
                      <div className="col-lg-4 col-md-3 ">
                        <div className="costomer_tab_right costomer_tab_rightleft2">
                          <Image
                            unoptimized={true}
                            width={400}
                            height={100}
                            src="/img/fiverrclone/gigger_deshboard.png"
                            alt="Admin Panel"
                          />{" "}
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left costomer_tab_leftright2">
                          <ul>
                            <li>
                              <i className="JobBoardImg">
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className="lazy"
                                  src="/img/jobboard/secure_login.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Secure Login
                                <div className="product-idea">
                                  <p>Admin can login securely on Job Portal.</p>
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
                                  src="/img/jobboard/admin_dash.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Admin Dashboard
                                <div className="product-idea">
                                  <p>
                                    Admin can view the Dashboard where it will
                                    display the total number of Employers,
                                    Jobseekers, Categories, Skills, Designation,
                                    Locations, Jobs, Blogs etc.
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
                                  src="/img/jobboard/configuration.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Configuration
                                <div className="product-idea">
                                  <p>
                                    Admin can update Username, Password, Email,
                                    Security Questions, Plans, Contact Us
                                    Address, Slogan Text, Logo, PayPal details,
                                    Favicon, Subadmins etc.
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
                                  src="/img/jobboard/manage_skill.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Manage Jobseekers
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Jobseekers & can
                                    activate, deactivate, delete, edit, view,
                                    manage certificate, view applied job list.
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
                                  src="/img/jobboard/manage_emp.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Manage Employers
                                <div className="product-idea">
                                  <p>
                                    Admin can view a list of employers & can
                                    manage(view/add/edit/delete) employers.
                                    Admin can activate, deactivate employers &
                                    can verify them.
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
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Manage Jobs
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Jobs posted with
                                    and can manage(view/edit/delete) the Jobs.
                                    Admin can activate/deactivate jobs. Admin
                                    can view the Jobseekers list who has applied
                                    for this Job.
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
                                  src="/img/jobboard/manage_news.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Manage Newsletter
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Newsletter & can
                                    send Newsletter Email. Admin can keep logs
                                    of email & can view unsubscribe user lists.
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
                                  src="/img/jobboard/course_details.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Manage Course
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of course & can
                                    manage(view/add/edit/delete) course. Admin
                                    can activate/ deactivate Course & can view
                                    details of specialization.
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
                                  src="/img/jobboard/manage_cat.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Manage Categories
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of categories & can
                                    manage(view/add/edit/delete) categories.
                                    Admin can activate/ deactivate Categories &
                                    can view details of subcategory list under
                                    Categories.
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
                                Manage Blogs
                                <div className="product-idea">
                                  <p>
                                    Admin can view lists of blogs & can manage
                                    (add/edit/delete) Blogs. Admin can
                                    activate/Deactivate Blogs.
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
                                  src="/img/jobboard/manage_banner.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Manage Banner
                                <div className="product-idea">
                                  <p>
                                    Admin can view a list of Banners & can
                                    manage(add/edit/delete) Banners.
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
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Payment History
                                <div className="product-idea">
                                  <p>
                                    Admin can view the Payment History for all
                                    Employers who have purchased plans.
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
                                  src="/img/jobboard/theme-color.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Theme color management
                                <div className="product-idea">
                                  <p>
                                    Admin can change the website color theme
                                    with multiple options and reset back to the
                                    default color of the website.
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
                                  src="/img/jobboard/manage_contents.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Manage Announcement
                                <div className="product-idea">
                                  <p>
                                    Admin can manage announcements at backend ,
                                    which will be displayed on homepage
                                    announcement marquee.
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
                                  src="/img/jobboard/self_profile.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Manage Payment Configuration
                                <div className="product-idea">
                                  <p>
                                    Admin can change/update configuration of
                                    payment gateways.
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
                                  src="/img/jobboard/announcement_marquee.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Sub Admin Management
                                <div className="product-idea">
                                  <p>
                                    If you&apos;re a business, looking to
                                    streamline your recruitment process, Job
                                    board software has got you covered. Our
                                    platform allows you to create accounts for
                                    your teammates and will be able to
                                    add/edit/delete/activate/deactivate them.
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
                                  src="/img/jobboard/admin_users.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Assign Roles to Sub Admin
                                <div className="product-idea">
                                  <p>
                                    Admin can assign roles and provide them with
                                    specific access to work over it as a
                                    sub-admin. This ensures that everyone on
                                    your team is on the same page when it comes
                                    to hiring the best talent.
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
                                  src="/img/jobboard/banner_ads.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Banner Ads Placement
                                <div className="product-idea">
                                  <p>
                                    Looking to generate additional revenue
                                    through 3rd party ad networks? With our job
                                    board software, you can easily upload banner
                                    ads to your job board by copy-pasting the
                                    line of code or with a static image. This
                                    allows you to monetize your job board and
                                    make the most of your online presence.
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
                                  src="/img/jobboard/Manage_Membership.png"
                                  alt="Jobseeker App Feature"
                                />
                              </i>
                              <span>
                                Manage Membership Plan for Employers & Jobseeker
                                <div className="product-idea">
                                  <p>
                                    Admin will be able to
                                    manage(add/edit/delete) the membership plans
                                    for both Employers & Jobseeker.{" "}
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
                                  src="/img/jobboard/customize_design.png"
                                />
                              </i>
                              <span>
                                Manage Currency
                                <div className="product-idea">
                                  <p>
                                    Admin will be able to
                                    manage(add/edit/delete) the currency, and
                                    the currency which is selected by admin will
                                    display on the script.
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
            <h2 className="headhs">What does our LS Jobber do for you?</h2>
            <h3 className="Haeddinh2">
              Empowering Possibilities with Our LS Jobber
            </h3>
            <p>
              Our sophisticated white label job portal software goes beyond mere
              automation; it empowers you to emulate giants like Monster,
              Indeed, CareerBuilder, or Naukri. The script is designed for
              scalability, robustness, and user-friendliness, providing you with
              a seamless journey to build your own online job portal. Employers
              gain a panoramic view of job seekers who&apos;ve applied for
              specific positions, enabling efficient interviewing and selection.
              Upon acceptance, automatic email notifications are dispatched,
              fostering seamless communication. Jobseekers also enjoy the
              ability to craft compelling CVs, ensuring their profiles stand out
              to potential employers.
            </p>
            <h3 className="Haeddinh2">
              An Advanced Solution for Your Recruitment Needs
            </h3>
            <p>
              As an advanced job board classified, our PHP job portal script is
              a cornerstone of efficient shortlisting and hiring processes for
              businesses and organizations. Its user-friendly nature requires
              only basic computer skills, making it accessible to a wide
              audience. Our ready-made{" "}
              <strong>
                <i>recruitment software</i>
              </strong>{" "}
              offers a powerful yet cost-effective alternative to launching your
              job portal, rivaling the likes of Naukri or Monster. It
              encompasses key features such as job search for seekers, resume
              posting, and job posting with the added benefit of employer
              insight into applicant lists.
            </p>
            <h3 className="Haeddinh2">
              Exclusively Tailored Job Portal App Development
            </h3>
            <p>
              Experience the transformation of your hiring process through
              Logicspice&apos;s tailored job portal app development. We bring
              the prowess of automated online platforms to your hiring
              endeavors, enabling you to craft your career portal with ease. Our
              readymade JobPortal Script expedites your journey to launching
              this sophisticated job portal software, putting the power of
              efficient recruitment in your hands.
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
                <strong>USD 45 per month,</strong> limited offer available for
                the first year.
              </p>
              <div className="JobBoardPlans">
                <ul>
                  <li>
                    <span>Custom Domain & Free SSL</span>
                  </li>
                  <li>
                    <span>Styles and Texts Customization</span>
                  </li>
                  <li>
                    <span>Custom Static Pages</span>
                  </li>
                  <li>
                    <span>Built-in Blogging Platform</span>
                  </li>
                  <li>
                    <span>Charge for Job Postings</span>
                  </li>
                  <li>
                    <span>3,000 Active Jobs</span>
                  </li>
                  <li>
                    <span>Payment Gateway Integration</span>
                  </li>
                  <li>
                    <span>Language Translation</span>
                  </li>
                  <li>
                    <span>Subscriptions & Packages</span>
                  </li>
                  <li>
                    <span>Apply With Resume</span>
                  </li>
                  <li>
                    <span>Featured Employers</span>
                  </li>
                  <li>
                    <span>Banner Ads</span>
                  </li>
                  <li>
                    <span>XML Feed Importers</span>
                  </li>
                  <li>
                    <span>Remove Branding From Footer</span>
                  </li>
                  <li>
                    <span>Currency Management</span>
                  </li>
                  <li>
                    <span>Sub Admin Feature</span>
                  </li>
                  <li>
                    <span>Newsletter Management</span>
                  </li>
                  <li>
                    <span>Manage Payment Gateway Configuration</span>
                  </li>
                  <li>
                    <span>Manage Announcement</span>
                  </li>
                  <li>
                    <span>Invoice Generator</span>
                  </li>
                </ul>
              </div>
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
                    Unlimited Job Postings: Post as many job openings as you
                    need without any limitations.
                  </span>
                </li>
                <li>
                  <span>
                    Mobile Apps: Stay perpetually connected with Android and
                    iPhone apps, available for an additional USD 45 per month
                    for each, android or iPhone. Mobile apps will include
                    employer and jobseeker app only. These apps will be launched
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
                    //   title="Please fill the form below and get access to the live demo of Job Board Software.See how it work yourself!"
                    // />

                    <GetDemoEnquiry
                      modalStatus={demoAccessModal}
                      toggle={openDemoAccessModal}
                      title="Please fill the form below and get access to the live demo of Job Portal Script. See how it works yourself!"
                    />
                  }
                </div>
                <Link
                  className="btn fiverr-buys"
                  href="/buy-now/jobsite"
                  id="buy_now_1"
                >
                  Buy Now
                </Link>
              </div>
              <div className="jocpp">
                <ul className="job-pr-icon">
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
                  <div className="line-border NewLineBoader">
                    <Image
                      unoptimized={true}
                      width={100}
                      height={100}
                      src="/img/jobboard/stars.png"
                      alt=""
                      className="lazy"
                    />
                    <p>218 Reviews</p>
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
              <a onClick={toggleModal}>contact us</a>
            </p>
          </div>
        </div>
      </section>
      <section className="job_portal_area script-update-bg">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Script Update History</h2>
            <br />
            <div className="script-update_title">
              <p>
                V8.0 - May 5th, 2025 - New feature added and several key
                improvements to enhance functionality and user experience.
              </p>

              <ul>
                <li>
                  <span>
                    Enjoy a <b>unified modern design</b> for the web platform.
                  </span>
                </li>

                <li>
                  <span>Improved the website performance.</span>
                </li>

                <li>
                  <span>Utilized the backend API&apos;s.</span>
                </li>

                <li>
                  <span>Minor bug fixes.</span>
                </li>
              </ul>

              <p>
                V7.0 - December 24th, 2024 - New feature added and several key
                improvements to enhance functionality and user experience.
              </p>

              <ul>
                <li>
                  <span>
                    Admin can now efficiently{" "}
                    <b>import jobs via CSV or XLSX files</b>, automatically
                    associating them with the selected employer for streamlined
                    management.
                  </span>
                </li>

                <li>
                  <span>
                    Optimization techniques implemented for faster page load and{" "}
                    <b>performance optimization</b> for smoother user
                    experience.
                  </span>
                </li>

                <li>
                  <span>
                    Admin can now assign specific roles to sub-admins through{" "}
                    <b>sub-admin role management</b>, restricting their access
                    to authorized features and sections only.
                  </span>
                </li> 

                <li>
                  <span>
                    The platform&apos;s <b>multilingual support</b> feature is
                    now updated with Greek, German and Ukrainian languages,
                    allowing users to navigate and use the system in their
                    preferred language for a more <b>localized experience</b>.
                  </span>
                </li>
              </ul>
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
                V3.0 - June 29th, 2021 - New features added and design
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
                V2.0- November 03rd, 2020 - New features added and other small
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
                V1.0 - February 13th, 2020 - Major updates and design
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
                    Recruiter & Jobseeker can delete profile by himself with
                    specific reason.
                  </span>
                </li>
                <li>
                  <span>
                    Mail history will show in both Jobseeker & recruiter panel.
                  </span>
                </li>
              </ul>
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
              <a
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
              </a>
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
                      href="https://firstnationsjobs.com.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      firstnationsjobs.com.au
                    </Link>
                  </div>
                  <Link
                    href="https://firstnationsjobs.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/jobboard/firstnationjobs.png"
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
                      src="/img/jobboard/healthandsocialcarejobs.png"
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
                      src="/img/jobboard/joblisto.png"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://grc.ua/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      grc.ua
                    </Link>
                  </div>
                  <Link
                    href="https://grc.ua/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/jobboard/grc.png"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://www.lgbtijobs.com.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      lgbtijobs.com.au
                    </Link>
                  </div>
                  <Link
                    href="https://www.lgbtijobs.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/jobboard/lgbtijobs.png"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://jobvibe.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      jobvibe.co.uk
                    </Link>
                  </div>
                  <Link
                    href="https://jobvibe.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/jobboard/jobvibe.png"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://jobs.needtoday.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      jobs.needtoday.com
                    </Link>
                  </div>
                  <Link
                    href="https://jobs.needtoday.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/jobboard/needtoday.png"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                {/* <div className="SliderMainBx">
                                <div className="site-titles">
                                  <Link
                                    href="https://unchaayi.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    unchaayi.com
                                  </Link>
                                </div>
                                <Link
                                  href="https://unchaayi.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Image
                                    unoptimized={true}
                                    width={900}
                                    height={100}
                                    src="/img/jobboard/unchaayi.png"
                                    alt="icon"
                                    title=""
                                    className="img-fluid"
                                  />
                                </Link>
                              </div> */}
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://jobs.bepsl.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      jobs.bepsl.in
                    </Link>
                  </div>
                  <Link
                    href="https://jobs.bepsl.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/jobboard/bepsl.png"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="SliderMainBx">
                  <div className="site-titles">
                    <Link
                      href="https://www.bpservices.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      bpservices.in
                    </Link>
                  </div>
                  <Link
                    href="https://www.bpservices.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      unoptimized={true}
                      width={900}
                      height={100}
                      src="/img/jobboard/bpservices.png"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
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
                      src="/img/jobboard/sellfomote.png"
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
                      src="/img/jobboard/ejtecs.png"
                      alt="icon"
                      title=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </Slider>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={toggleBuyJobPortalModal}
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
                        src="/img/jobboard/tech_apache_icon.png"
                        alt="Apache"
                      />
                    </div>
                    <div className="icntechimg_nm">Apache</div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/jobboard/apple_phn_icon.png"
                        alt="MySQL"
                        className="lazy"
                      />
                    </div>
                    <div className="icntechimg_nm">iOS</div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/jobboard/andoird_icon.png"
                        alt="Apache"
                        className="lazy"
                      />
                    </div>
                    <div className="icntechimg_nm">Android</div>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list_detail">
                  <li className="same">
                    <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                    Safari 5+, IE 9+
                  </li>
                  <li className="same ">
                    <b>Framework - </b> Laravel 10.x
                  </li>
                  <li className="same ">
                    <b>Library - </b> ReactJS (Version 18.2.0)
                  </li>
                  <li className="same">
                    <b>Language - </b> PHP 8.2, jQuery
                  </li>
                  <li className="other">
                    <b>Design - </b> HTML 5, CSS 3, Bootstrap4, JavaScript
                  </li>
                  {/* <li className="other">
                    <b>Laravel - </b> 10.x{" "}
                  </li>
                  <li className="other">
                    <b>PHP - </b> 8.2{" "}
                  </li> */}
                  <li className="other">
                    <b>Database - </b> MySQL 5.5+
                  </li>
                  <li className="other">
                    <b>Server - </b> Apache 2.4+
                  </li>
                  <li className="other">
                    <b>iOS - </b> xcode 10.2.1 and swift 4.2{" "}
                  </li>
                  <li className="other">
                    <b>Android - </b> java 9 and Android Studio 3.4
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
                    width={60}
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
                    I have purchased this script and has constructed my own
                    job-site. This was an easy task because of logicspice&apos;s
                    free installation and support. Keep up the good work. I will
                    be back for more in the future.
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
                    John, USA
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
                    This is the best job portal script. Thanks for your great
                    efforts and support while installing the script. Your prompt
                    service regarding a few minor issues was superb
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
                    <span id="client-name">D. Smith, Germany in USA</span>{" "}
                    <span>
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/german.png"
                        alt="mobile app development in USA"
                        style={{ width: "20px", marginLeft: "3px;" }}
                      />
                    </span>
                  </div>
                </div>

                <div className="customers_review_sec_row">
                  <div className="customer_review_stext" id="fiveer-clone">
                    Recently I bought this script from logicspice and it worked
                    really nice, it helped my business to gain more efficiency.
                    I recommend for all whom looking for a job board script,
                    it&apos;s really nice.
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
                    <span id="client-name">mike wilshon, AUS</span>{" "}
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
                    <div className="people_star_num">174</div>
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
                    <div className="people_star_num">44</div>
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
                    title="Food Ordering And Delivery Script"
                  />
                </div>
                <div className="main-rait">
                  <span>
                    <i className="fa fa-star"></i>{" "}
                    <span>4.8 out of 5 stars</span>
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
                      <span>01. </span> Can a Jobseeker upload his CV to apply
                      for job?
                    </a>
                  </div>
                  <div style={activeIndex === 0 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        No. The information about the jobseeker will go from his
                        profile to the employer that he is applying the job for.
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
                      <span>02. </span> Will there be any installation charges
                      when I purchase the job portal script?
                    </a>
                  </div>
                  <div style={activeIndex === 1 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        No. The installation of our Job Portal Product will be
                        absolutely free of cost.
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
                      <span>03. </span> Can jobseeker download the CV that he
                      has created on this website?
                    </a>
                  </div>
                  <div style={activeIndex === 2 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        Yes. Once the job seeker creates his CV, he can download
                        the same in a PDF format.
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
                      <span>04. </span> Can employer or jobseeker write blog
                      posts?
                    </a>
                  </div>
                  <div style={activeIndex === 3 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        The employers and jobseekers cannot write blog posts.
                        The blog posts will be written by the admin, and
                        employers & Job Seekers can view them.
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
                      <span>05. </span> Once I purchase the job portal script,
                      how many days will it take to go online?
                    </a>
                  </div>
                  <div style={activeIndex === 4 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        It takes 2 working days generally, provided all the
                        information to make it live has been given. If you want
                        customizations, then the time taken to implement your
                        Job portal depends on the level of customization and
                        data migration.
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content_area feature_inner" id="features">
        <div className="container">
          <h2 className="title_main">LS Jobber Features</h2>
          <div id="joblboardslide">
            <Slider {...companies}>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image
                    unoptimized={true}
                    width={900}
                    height={100}
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
                    width={900}
                    height={100}
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
                    width={900}
                    height={100}
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
                    width={900}
                    height={100}
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
                    width={900}
                    height={100}
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
                    width={900}
                    height={100}
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
      </section>

      <section className="JObboardVideSection">
        <div className="container">
          <div className="JobBoardVideoBottom">
            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jZUjtbUTuHQ?si=NrWfYG4wQYAnm1bJ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}
            <div ref={iframeRef}>
              <iframe
                id="ytplayer"
                width="100%"
                height="312"
                src="https://www.youtube.com/embed/jZUjtbUTuHQ?enablejsapi=1&mute=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
                    title="Job Portal Script"
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
                            width={244}
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
                            width={250}
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
                            width={180}
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
      <Footer />
    </>
  );
};

export default Page;
