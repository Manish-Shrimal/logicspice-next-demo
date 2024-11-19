"use client";
import dynamic from "next/dynamic";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState, useRef } from "react";
import Contactusmodel from "@/app/Components/Contactusmodel";
// import "../../../../public/css/font-awesome.min.css";
import "../../../../public/css/font-awesome.css";
import "../../resposive.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

const GetDemoEnquiry = dynamic(
  () => import("@/app/Components/GetDemoEnquiry"),
  { ssr: false }
);
const SoftwareEnquiry = dynamic(
  () => import("@/app/Components/SoftwareEnquiry"),
  { ssr: false }
);

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
    setShowModal(!showModal);
  };
  const openDemoAccessModal = () => {
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

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  const secondVideoRef = useRef(null);
  const [inViewSecond, setInViewSecond] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInViewSecond(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    if (secondVideoRef.current) {
      observer.observe(secondVideoRef.current);
    }

    return () => {
      if (secondVideoRef.current) {
        observer.unobserve(secondVideoRef.current);
      }
    };
  }, []);
  return (
    <>
      <Navbar />
      <section className="paid-pro job-portal-banner fiverr-new-banner job-portal-bg NewJobSiteDesign JobBoardNewDesign HumanResourceBanner">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>Human Resource Management Software</h1>
              <div className="both-left-p-sec">
                <h2>Your All-in-One HR and Payroll Solution</h2>
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
                      // <SoftwareEnquiry
                      //   modalStatus={showModal}
                      //   toggle={openModal}
                      //   title="Please fill the form below and get access to the live demo of Job Board Software.See how it work yourself!"
                      // />
                      <GetDemoEnquiry
                        modalStatus={demoAccessModal}
                        toggle={openDemoAccessModal}
                        title="Please fill the form below and get access to the live demo of Human Resource Management Software. See how it works yourself!"
                      />
                    }
                  </div>

                  <Link
                    className=" fiverr-buys NewGreenBtnJob text-center"
                    href="/buy-now/hrms-software"
                    id="buy_now_1"
                  >
                    BUY NOW
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
                    <p>310 Reviews</p>
                  </div>
                </div>
                <div className="jocpp">
                  <ul className="job-pr-icon jobwidthauto">
                    <li>
                      <i className="fa fa-globe" aria-hidden="true"></i>
                    </li>
                    {/* <li>
                      <i class="fa fa-android" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-apple" aria-hidden="true"></i>
                    </li> */}
                  </ul>
                  <div className="portel-btnbx">
                    {/* <Link
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
                    </Link> */}

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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                <Image
                  width={430}
                  height={100}
                  className="lazy"
                  src="/img/hrms/human-resource-banner-img.png"
                  alt="Job_Board_Software"
                  sizes="(max-width: 768px) 100vw, 350px"
                  unoptimized={false} // Ensure image optimization is enabled
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
                  Human Resource Management Software
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
          {/* <p>
            LS Jobber, a{" "}
            <strong>
              <i>job board software</i>
            </strong>{" "}
            that makes it easy for businesses to hire people online. It works
            similar to popular job sites like Indeed, Monster, Naukri, and
            CareerBuilder. With LS Jobber, job seekers can search and apply for
            open positions. They can upload their resumes in different file
            formats, including video resumes (video CVs). LS Jobber is a
            white-label job board, which means companies can customize it to
            match their own branding. It&apos;s a ready-to-use software that
            allows businesses, organizations, recruitment agencies, and
            investors to quickly set up their own white label job board website.
            Overall, this Job board software is designed to make the job hiring
            process smoother and more efficient for both employers and job
            seekers.
          </p> */}
          <p>
            Efficiently manage your human resources with our HRMS payroll
            Software, a complete solution for HR and payroll needs. Built to
            simplify HR operations, our software is ideal for small to mid-sized
            businesses seeking reliable, scalable, and customizable HRMS
            software solutions. Whether you&apos;re managing employee information,
            tracking attendance, or processing payroll, our best HR Management
            software helps you handle everything from one easy-to-use platform
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
              <div ref={iframeRef}>
              {inView && (
                <iframe
                  id="ytplayer"
                  width="100%"
                  height="312"
                  src="https://www.youtube-nocookie.com/embed/jZUjtbUTuHQ?enablejsapi=1&mute=1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                )}
              </div>
            </div> */}
            <div className="col-md-12">
              <div className="service-market-ttd-new JobBoardServiceMarketFeatures">
                <ul>
                  <li>Payroll Management</li>
                  <li>Employee Database Management</li>
                  <li>Attendance and Leave Tracking</li>
                  <li>Performance Evaluation</li>
                  <li>Customizable Reports</li>
                  <li>User-Friendly Interface</li>
                  <li>Scalable and Customizable</li>
                  <li>Recruitment and Onboarding</li>
                  {/* <li>Theme Color Management</li>
                  <li>One time License Fee</li>
                  <li>Email Notification</li>
                  <li>Auto Suggestion Filtering</li>
                  <li>Multi-Language/Currency Support</li>
                  <li>Optimized job search with filters</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="job_portal_area">
        <div className="container">
          <div className="job_or_title">
            <h2 className="taxt_tt_job">Prime Features of Our HRMS Software</h2>
          </div>
          <div className="tatxt_txt_job">
            {/* Our{" "}
            <strong>
              <i>dynamic PHP job board</i>
            </strong>{" "}
            script serves as a versatile platform for employers to post job
            listings, outlining necessary skill sets and finer details.
            Jobseekers can effortlessly navigate through available opportunities
            that align with their qualifications, geographical preferences, and
            work experience. Once registration is complete, jobseekers gain the
            privilege to apply for specific jobs that pique their interest.
            Within this sophisticated job board application management software,
            employers wield the ability to sift through job applications,
            earmarking potential matches as favorites. This intelligent curation
            aids in streamlining the hiring process, identifying top-notch
            prospects for each vacancy. Empowered by a secure admin dashboard,
            users can seamlessly manage employers, jobseekers, job postings, and
            more. This Job Posting Software also boasts a{" "}
            <strong>
              <i>multi-job posting</i>
            </strong>{" "}
            feature to further enhance efficiency. */}
            Our Human Resource Management System software combines all essential
            HR functions into one user-friendly system. From employee data
            management and attendance tracking to payroll processing, our HRMS
            payroll software offers everything that simplifies HR operations.
            With enhanced data management and workflow automation, your company
            can reduce administrative burdens and provide valuable insights into
            employee performance.
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
                  <a>Employee Panel </a>
                </li>
                <li
                  id="tab2_li"
                  className={`emplyer_app_job ddlj ${buyerTab ? "active" : ""}`}
                  onClick={() => handleBuyerTab()}
                >
                  <a>HR Panel </a>
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
                            src="/img/jobboard/mobile-job-seeker.png"
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
                                Employee Registration
                                <div className="product-idea">
                                  <p>
                                    Employees can create their profiles, view
                                    payslips, and track performance reviews.
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
                                Employee Login
                                <div className="product-idea">
                                  <p>
                                    Registered users can log in securely to
                                    access personal data, request time off, and
                                    view payroll information.
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
                                    Employees can update contact details, job
                                    history, and bank details for salary
                                    deposits.
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
                                Leave Management
                                <div className="product-idea">
                                  <p>
                                    Employees can request and track their leave
                                    (sick, vacation, etc.), view their leave
                                    balance, and receive real-time approval
                                    notifications.
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
                                Payroll Access
                                <div className="product-idea">
                                  <p>
                                    Employees can view and download payslips,
                                    track salary history, and access tax details
                                    for easy financial planning.
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
                                Performance Tracking
                                <div className="product-idea">
                                  <p>
                                    Employees can view their performance
                                    reviews, set personal goals, and monitor
                                    progress over time.
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
                                Training and Development
                                <div className="product-idea">
                                  <p>
                                    Employees can browse and sign up for
                                    training programs, webinars, or courses to
                                    grow skills and careers.
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
                                Employee Directory
                                <div className="product-idea">
                                  <p>
                                    Employees can search for colleagues by
                                    department, role, or location, making
                                    internal communication easier.
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
                                    Employees can quickly access specific
                                    features, such as leave balance and
                                    payslips, without full login requirements.
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
                      {/* <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right">
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/jobboard/emplyer-mobile.png"
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
                                Employee Management
                                <div className="product-idea">
                                  <p>
                                    HR can manage employee profiles, track job
                                    changes, and maintain compliance-ready
                                    records.
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
                                Leave Approval
                                <div className="product-idea">
                                  <p>
                                    HR can review and approve/reject employee
                                    leave requests for efficient resource
                                    management.
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
                                Payroll Management
                                <div className="product-idea">
                                  <p>
                                    HR can process payroll, manage salary
                                    adjustments, and ensure timely and accurate
                                    salary disbursements.
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
                                Attendance Management
                                <div className="product-idea">
                                  <p>
                                    HR can monitor attendance, manage working
                                    hours, and view real-time attendance and
                                    absence data.
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
                                Employee Reports
                                <div className="product-idea">
                                  <p>
                                    HR can generate and view detailed reports on
                                    employee performance, leave, payroll, and
                                    attendance for better decisions.
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
                              Recruitment Management
                                <div className="product-idea">
                                  <p>
                                  HR can post job openings, review candidate applications, schedule interviews, and manage the hiring process.

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
                                Employee Performance Management
                                <div className="product-idea">
                                  <p>
                                    HR can track employee performance, set up
                                    review cycles, and generate individual
                                    performance reports.
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
                                Training Management
                                <div className="product-idea">
                                  <p>
                                    HR can assign employees to required or
                                    voluntary training, monitor progress, and
                                    track certification status.
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
                                  alt=""
                                />
                              </i>
                              <span>
                                Real-time Notifications
                                <div className="product-idea">
                                  <p>
                                    HR can receive instant notifications for new
                                    leave requests, payroll updates, and
                                    performance review submissions.
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
                      {/* <div className="col-lg-4 col-md-3 ">
                        <div className="costomer_tab_right costomer_tab_rightleft2">
                          <Image
                            unoptimized={true}
                            width={300}
                            height={100}
                            src="/img/fiverrclone/gigger_deshboard.png"
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
                                Secure Login
                                <div className="product-idea">
                                  <p>
                                    Admins can securely log in to the system
                                    with role-based access and permissions for
                                    added security.
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
                                  src="/img/jobboard/admin_dash.png"
                                />
                              </i>
                              <span>
                                Manage Users
                                <div className="product-idea">
                                  <p>
                                    Admins can create, edit, or delete employee
                                    and HR accounts, assigning roles for smooth
                                    workflows.
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
                                Dashboard
                                <div className="product-idea">
                                  <p>
                                    Admins can view a summary of attendance,
                                    payroll, leave balances, and HR metrics on a
                                    central dashboard.
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
                                Payroll Processing
                                <div className="product-idea">
                                  <p>
                                    Admins can manage payroll settings, adjust
                                    salary structures, and oversee the
                                    disbursement of payments.
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
                                Report Generation
                                <div className="product-idea">
                                  <p>
                                    Admins can generate detailed reports on
                                    employee activity, attendance, salary, and
                                    other HR activities.
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
                                System Configuration
                                <div className="product-idea">
                                  <p>
                                    Admins can configure the HRMS system, update
                                    personal details, manage notifications, and
                                    customize the software as needed.
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
                                Employee Management
                                <div className="product-idea">
                                  <p>
                                    Admins can view detailed employee records,
                                    update information, and manage employee
                                    onboarding processes.
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
                                Multi-location Management
                                <div className="product-idea">
                                  <p>
                                    If the company operates in multiple
                                    locations, admins can manage employees,
                                    payroll, and attendance across different
                                    branches from a single platform.
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
                                  src="/img/jobboard/manage_cat.png"
                                />
                              </i>
                              <span>
                                Manage Sub-categories
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of Sub-categories & can
                                    manage(view/add/edit/delete) Sub-categories.
                                    Admin can activate/deactivate
                                    Sub-categories.
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
                                Manage Countries
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of Countries & can
                                    manage(view/add/edit/delete) Countries.
                                    Admin can activate/deactivate Countries.
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
                                View Reviews & Ratings
                                <div className="product-idea">
                                  <p>
                                    Admin can view the list of Reviews & Ratings
                                    Seller & Buyer has received.
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
              What Does Our HR Management Software Do for You?
            </h2>
            <h3 className="Haeddinh2">Streamlining Your HR Processes</h3>
            <p>
              {/* Our exceptional job board advertising software doesn&apos;t just
              stop at facilitating connections; it empowers you to craft your
              own recruitment portal. This ready-to-deploy script,{" "}
              <strong>
                <i>secure and responsive</i>
              </strong>
              , provides dedicated dashboards for administrators, employers, and
              job seekers. The setup process is a breeze, requiring zero coding
              know-how - our expert technical team ensures a seamless setup for
              you. Effortlessly launch your own job board advertising website in
              record time with our ready-to-use Job Board Software Script. */}
              Our HRMS software simplifies and automates HR tasks, offering a
              comprehensive HRMS solution for businesses of all sizes. With a
              user-friendly interface and powerful features, it helps you manage
              everything from employee data to payroll, attendance, and
              performance—all in one place. No coding skills are needed, and our
              team ensures a smooth setup process so you can start quickly.
            </p>
            <h3 className="Haeddinh2">
              A Seamless Experience for HR Teams and Employees
            </h3>
            <p>
              Our software for human resource management makes it easy for HR
              teams to stay organized and efficient. Employees can access their
              profiles, request time off, and track performance, all through the
              intuitive interface. With automated payroll, tax deductions, and
              leave management, your team can focus on priorities. Our best HR
              software for small business helps you manage your HR tasks with
              ease, without unnecessary complexity or cost.
            </p>
            <h3 className="Haeddinh2">Advanced Control with Admin Dashboard</h3>
            <p>
              The HR management software provides a powerful admin dashboard,
              allowing HR teams to manage employee records, track payroll, and
              review performance from a central location. You’ll have full
              control over user roles, security settings, and data access,
              ensuring smooth operations.
            </p>
            <h3 className="Haeddinh2">Comprehensive Payroll and Compliance</h3>
            <p>
              Our best HR and payroll software automates payroll calculations,
              tax compliance, and reporting, keeping your business aligned with
              current regulations. It reduces manual errors and streamlines
              payroll processes effortlessly.
            </p>
            <h3 className="Haeddinh2">Global Reach with Local Flexibility</h3>
            <p>
              Our HRMS solution adapts to local labor laws and regulations,
              supporting global operations smoothly, whether you&apos;re based in the
              UK, USA, India, or beyond.
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
              {/* <div className="JobBoardPlans">
                <ul>
                  <li>
                    <span>Custom Domain &amp; Free SSL</span>
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
                    <span>Subscriptions &amp; Packages</span>
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
              </div> */}
              <p>Key Benefits:</p>
              <ul>
                <li>
                  <span>
                    Lifetime Updates: Enjoy complimentary updates for your
                    software version throughout its lifespan, including{" "}
                    <strong>Free bug &amp; security fixes</strong> under the
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
                  Effective Payroll Management: Easily handle payroll for your team with accurate calculations, on-time payments, and full compliance with legal requirements.
                  </span>
                </li>
                {/* <li>
                  <span>
                    Mobile Apps: Stay perpetually connected with Android and
                    iPhone apps, available for an additional USD 45 per month
                    for each, android or iPhone. These apps will be launched
                    through your dedicated developer accounts on Google Play and
                    the Apple App Store.
                  </span>
                </li> */}
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
                      title="Please fill the form below and get access to the live demo of Human Resource Management Software. See how it works yourself!"
                    />
                  }
                </div>
                <Link
                  className="btn fiverr-buys"
                  href="/buy-now/hrms-software"
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
                  {/* <li>
                    <i className="fa fa-android" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-apple" aria-hidden="true"></i>
                  </li> */}
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
            
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="list_detail">
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                    Safari 5+, IE 9+
                  </li>
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Framework - </b> Laravel
                  </li>
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Language - </b> PHP 8.2 Supported, AJAX, jQuery
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
                  As a growing business, we needed the best HR software for small business, and this is it! It’s affordable, efficient, and has everything we need to manage payroll, attendance, and performance.
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
                    David L. Senior HR Coordinator
                    {/* <span>
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/usa_flag_img.png"
                        alt="mobile app development in USA"
                        style={{ width: "20px", marginLeft: "3px;" }}
                      />
                    </span> */}
                  </div>
                </div>
                <div className="customers_review_sec_row">
                  <div className="customer_review_stext" id="fiveer-clone">
                  We were looking for a solution that could scale with our growing team. This HRMS software has exceeded our expectations. From recruitment to employee management, it has made everything more efficient, and the support team has been incredibly responsive.
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
                    <span id="client-name">Emily W., HR Head</span>{" "}
                    {/* <span>
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/german.png"
                        alt="mobile app development in USA"
                        style={{ width: "20px", marginLeft: "3px;" }}
                      />
                    </span> */}
                  </div>
                </div>

                <div className="customers_review_sec_row">
                  <div className="customer_review_stext" id="fiveer-clone">
                  This HR and payroll software has completely transformed how we manage our team. The payroll process used to take hours every month, but now it’s automated and much faster. It’s a huge time-saver!
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
                    <span id="client-name">John P., HR Manager</span>{" "}
                    {/* <span>
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/jobboard/australia_flag_img.png"
                        alt="mobile app development in USA"
                        style={{ width: "20px", marginLeft: "3px;" }}
                      />
                    </span> */}
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
                    title="Human Resource Management Software"
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
                      <span>01. </span> What is HRMS software and how can it
                      help my business?
                    </a>
                  </div>
                  <div style={activeIndex === 0 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        HRMS software helps you manage everything related to
                        your employees, like payroll, attendance, and
                        performance, in one user-friendly platform. It enhances
                        the speed and accuracy of HR tasks, saving your business
                        time and reducing effort.
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
                      <span>02. </span> Is your HRMS software easy to set up?
                    </a>
                  </div>
                  <div style={activeIndex === 1 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        Yes! Our HRMS software is very easy to set up. You don’t
                        need any technical skills, and our team will help you
                        get everything up and running quickly.
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
                      <span>03. </span> Can your HRMS software handle payroll
                      for small businesses?
                    </a>
                  </div>
                  <div style={activeIndex === 2 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        Yes, our{" "}
                        <strong>best HR software for small business</strong>  is perfect for managing payroll. It
                        automatically calculates wages, handles tax deductions,
                        and ensures everything is accurate and on time.
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
                      <span>04. </span> How secure is the data in your HRMS
                      solution?
                    </a>
                  </div>
                  <div style={activeIndex === 3 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        We take security seriously. Our software uses strong
                        security features like encryption and secure access to
                        protect your data, so you can trust that your
                        information is safe.
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
                      <span>05. </span> Can employees access their information
                      in the system?
                    </a>
                  </div>
                  <div style={activeIndex === 4 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        Yes, employees can log in to see their profiles, check
                        their pay, request time off, and track their
                        performance, all through a simple and easy-to-use
                        interface.
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
                      <span>06. </span> Is the HRMS software suitable for global
                      businesses?
                    </a>
                  </div>
                  <div style={activeIndex === 5 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        Yes! Our HRMS software works for businesses worldwide.
                        It adjusts to local laws and rules, so it&apos;s perfect
                        for companies with employees in different countries.
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
                      <span>07. </span> Can I track employee performance using
                      your HRMS software?
                    </a>
                  </div>
                  <div style={activeIndex === 6 ? showStyle : collapseStyle}>
                    <div style={bodyStyle}>
                      <p>
                        Yes, our software lets you set goals and track employee
                        performance, making it easier to review progress and
                        give feedback.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div style={panelStyle} data-aos="fade-up">
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
          <div className="JobBoardVideoBottom JobBoardbxVideoBottom" ref={secondVideoRef}>
          {inViewSecond && (
            <iframe
              width="100%"
              height="312"
              src="https://www.youtube-nocookie.com/embed/7fJVD2R2kkA?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
            )}
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
                    title="Human Resource Management Software"
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
      <Footer />
    </>
  );
};

export default Page;
