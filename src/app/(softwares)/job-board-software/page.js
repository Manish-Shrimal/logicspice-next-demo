"use client";
import dynamic from 'next/dynamic';
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
// import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
// import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";


const GetDemoEnquiry = dynamic(() => import('@/app/Components/GetDemoEnquiry'), { ssr: false }); 
const SoftwareEnquiry = dynamic(() => import('@/app/Components/SoftwareEnquiry'), { ssr: false });
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
      <section className="paid-pro job-portal-banner fiverr-new-banner job-portal-bg NewJobSiteDesign JobBoardNewDesign">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>LS Jobber - Online Job Board Software</h1>
              <div className="both-left-p-sec">
                <h2>Create your own White Label Job Board</h2>
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
                        title="Please fill the form below and get access to the live demo of Job Board Software. See how it works yourself!"
                      />
                    }
                  </div>

                  <a
                    className=" fiverr-buys NewGreenBtnJob text-center"
                    href="/buy-now/job-board-software"
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
                <div className="jocpp">
                  <ul className="job-pr-icon jobwidthauto">
                    <li>
                      <i className="fa fa-globe" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-android" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i class="fa fa-apple" aria-hidden="true"></i>
                    </li>
                  </ul>
                  <div className="portel-btnbx">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                <Image
                  width={350}
                  height={100}
                  className="lazy"
                  src="/img/jobboard/new-img-jobboard.png"
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
                  Job Board Software
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
          </p>
        </div>
      </section>

      <section
        className="client-say jobBoardNewSoftware"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 job-video">
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
              {/* <iframe
                width="100%"
                height="312"
                src="https://www.youtube.com/embed/jZUjtbUTuHQ?si=NrWfYG4wQYAnm1bJ?rel=0&autoplay=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
              ></iframe> */}
            </div>
            <div className="col-md-6">
              <div className="service-market-ttd-new JobBoardServiceMarketFeatures">
                <ul>
                  <li>Post Unlimited Jobs</li>
                  <li>Responsive &amp; SEO Friendly</li>
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
            <h2 className="taxt_tt_job">Prime Features of Our LS Jobber</h2>
          </div>
          <div className="tatxt_txt_job">
            Our{" "}
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
            feature to further enhance efficiency.
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
                            width={300}
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
                                    Jobseekers can apply for Job Alerts &amp;
                                    will get the Job alerts for specific Job,
                                    location &amp; Category. Jobseekers can
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
                                    Jobseekers can view their profile details
                                    &amp; can manage(add/edit/delete) their
                                    Profile.
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
                                    Category, Location &amp; Work Type etc.
                                    which will provide the relevant result.
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
                                    &amp; can manage(add/edit/delete) the
                                    Education.
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
                            width={300}
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
                                  alt=""
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
                                  alt=""
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
                                  alt=""
                                />
                              </i>
                              <span>
                                Create Job
                                <div className="product-idea">
                                  <p>
                                    Employers can create a job by adding Job
                                    Title, Category, Job Description, Company
                                    Name, Company Profile, Work Type, Contact
                                    Name &amp; Contact Number, Company Website,
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
                                  alt=""
                                />
                              </i>
                              <span>
                                Manage Jobs
                                <div className="product-idea">
                                  <p>
                                    Employers can view the list of Created Jobs
                                    &amp; can manage(add/edit/delete) Jobs.
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
                                  alt=""
                                  className="lazy"
                                  src="/img/jobboard/manage_profile.png"
                                />
                              </i>
                              <span>
                                Manage Profile
                                <div className="product-idea">
                                  <p>
                                    Employer can view Profile &amp; can
                                    manage(update) Profile. Employers can change
                                    passwords &amp; logos.
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
                            width={300}
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
                                  src="/img/jobboard/admin_dash.png"
                                />
                              </i>
                              <span>
                                Admin Dashboard
                                <div className="product-idea">
                                  <p>
                                    Admin can view dashboard which will display
                                    the total number of counts for Seller,
                                    Buyer, Gig orders etc.
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
                                    Admin can view list of Users(Seller/Buyer) &
                                    can manage(add/edit/delete) Users. Admin can
                                    activate/deactivate Users.
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
                                Manage Gigs
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of Gigs & can
                                    manage(delete) Gigs. Admin can
                                    activate/deactivate Gigs.
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
                                Manage Gig Orders
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of Gig orders & can
                                    manage (view) gig Orders.
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
                                Manage Services
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of services & can
                                    manage(view/add/edit/delete) services.
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
                                Manage Categories
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of Categories & can
                                    manage(view/add/edit/delete) Categories.
                                    Admin can activate/deactivate Categories.
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
                                Manage Skills
                                <div className="product-idea">
                                  <p>
                                    Admin can view list of Skills & can manage
                                    (view/add/edit/delete) skills.
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
            <h3 className="Haeddinh2">Empowering Your Recruitment Journey</h3>
            <p>
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
            </p>
            <h3 className="Haeddinh2">A Seamless Experience for All Users</h3>
            <p>
              Candidates are bestowed with the power to create and curate their
              profiles within this best Job Board Software. The functionality to
              mark favored job listings and apply directly or save them for
              future reference is just the tip of the iceberg. Sharing potential
              opportunities via social media and even generating CVs with the
              &quot;Generate A CV?&quot; feature ensures a comprehensive
              experience. For employers, our Job Board App offers an
              unparalleled arena to post unlimited jobs and meticulously review
              prospective candidates. Email notifications can be dispatched
              directly to job seekers, while job statuses can be seamlessly
              updated. Employers can also keep track of membership plans,
              payment history, email correspondences, and job applications, all
              within a user-friendly dashboard.
            </p>
            <h3 className="Haeddinh2">Elevated Control with Admin Dashboard</h3>
            <p>
              The backbone of our jobboard software lies in its comprehensive
              admin dashboard. Admins can oversee and manage job seekers,
              employers, categories, skills, locations, job listings, and even
              blogs within this dynamic interface. The control center empowers
              swift management of user credentials, password security questions,
              plans, and more. Additionally, the admin holds the authority to
              update and modify payment gateway configurations, ensuring
              uninterrupted operations.
            </p>
            <h3 className="Haeddinh2">Global Reach of Our Solution</h3>
            <p>
              Our cutting-edge white label job board software isn&apos;t
              confined to geographical limits. From the vibrant landscapes of
              the UK and USA to the diverse territories of Europe, Australia,
              India, and beyond, our solution spans the globe. Whether
              you&apos;re an employer aiming to streamline the recruitment
              process, a business seeking efficient job posting and
              shortlisting, or a job consultant aiming to manage a comprehensive
              candidate database, our feature-rich job site software stands as
              your unwavering ally. Join us on the journey to revolutionize
              recruitment and forge meaningful professional connections.
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
              <div className="JobBoardPlans">
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
              </div>
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
                    Unlimited Job Postings: Post as many job openings as you
                    need without any limitations.
                  </span>
                </li>
                <li>
                  <span>
                    Mobile Apps: Stay perpetually connected with Android and
                    iPhone apps, available for an additional USD 45 per month
                    for each, android or iPhone. These apps will be launched
                    through your dedicated developer accounts on Google Play and
                    the Apple App Store.
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
                      title="Please fill the form below and get access to the live demo of Job Board Software. See how it works yourself!"
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
      <section className="job_portal_area script-update-bg">
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
                        width={50}
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
                        width={50}
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
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                    Safari 5+, IE 9+
                  </li>
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Framework - </b> CakePHP
                  </li>
                  <li className="same aos-init aos-animate" data-aos="fade-up">
                    <b>Language - </b> PHP 7 Supported, AJAX, jQuery
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
                    title="Job Board Software"
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
              {/* <div className="panel-group faq_quick_sec" id="accordion">
                <div
                  className="panel panel-default aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="panel-heading">
                    <div className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        aria-expanded="true"
                        href="#collapse1"
                      >
                        <span>01. </span> Can a Jobseeker upload his CV to apply
                        for job?
                      </a>
                    </div>
                  </div>
                  <div id="collapse1" className="panel-collapse collapse in">
                    <div className="panel-body">
                      <p>
                        No. The information about the jobseeker will go from his
                        profile to the employer that he is applying the job for.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="panel panel-default aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="panel-heading">
                    <div className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse2"
                      >
                        <span>02. </span> Will there be any installation charges
                        when I purchase the job portal script?
                      </a>
                    </div>
                  </div>
                  <div id="collapse2" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        No. The installation of our Job Portal Product will be
                        absolutely free of cost.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="panel panel-default aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="panel-heading">
                    <div className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse3"
                      >
                        <span>03. </span> Can jobseeker download the CV that he
                        has created on this website?
                      </a>
                    </div>
                  </div>
                  <div id="collapse3" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        Yes. Once the job seeker creates his CV, he can download
                        the same in a PDF format.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="panel panel-default aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="panel-heading">
                    <div className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse4"
                      >
                        <span>04. </span> Can employer or jobseeker write blog
                        posts?
                      </a>
                    </div>
                  </div>
                  <div id="collapse4" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        The employers and jobseekers can not write blog posts.
                        The blog posts will be written by admin and employers
                        &amp; Job Seekers can view them.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="panel panel-default aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="panel-heading">
                    <div className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse6"
                      >
                        <span>05. </span> Once I purchase the job portal script,
                        how many days will it take to go online?
                      </a>
                    </div>
                  </div>
                  <div id="collapse6" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        It takes 2 working days generally, provided all the
                        information to make it live has been given. If you want
                        customizations, then time taken to implement your Job
                        portal depends on the level of customization and data
                        migration.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="panel panel-default aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="panel-heading">
                    <div className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse7"
                      >
                        <span>06. </span> How can Jobseeker apply for a job?
                      </a>
                    </div>
                  </div>
                  <div id="collapse7" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        Jobseeker can send their details directly to the job
                        company or they can attached a cover letter along with
                        their application. They can edit add or delete their
                        cover letter from the profile.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="panel panel-default aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="panel-heading">
                    <div className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse8"
                      >
                        <span>07. </span> How can Jobseeker create job alerts?
                      </a>
                    </div>
                  </div>
                  <div id="collapse8" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        Jobseekers will be able to manage the alerts that will
                        help them to receive emails if the job is available
                        according to their set criteria. They can add alerts by
                        providing the information like designation of job
                        required and location of job.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="panel panel-default aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="panel-heading">
                    <div className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse201"
                      >
                        <span>08. </span> Can I update some design and
                        functionality in application code myself?
                      </a>
                    </div>
                  </div>
                  <div id="collapse201" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        Yes, You will have access of the all the code, except
                        some of the core encrypted files.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="panel panel-default aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="panel-heading">
                    <div className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse202"
                      >
                        <span>09. </span> Will I be able to use it on multiple
                        domains, after I purchase this script?
                      </a>
                    </div>
                  </div>
                  <div id="collapse202" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        You will be licensed to use it only for the domain, you
                        purchased for.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="panel panel-default aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="panel-heading">
                    <div className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse203"
                      >
                        <span>10. </span> Can I resell the script? Will I have
                        rights over the script code?
                      </a>
                    </div>
                  </div>
                  <div id="collapse203" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        All rights will remain with Logicspice only, and you can
                        not resell it.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="panel panel-default aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="panel-heading">
                    <div className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse204"
                      >
                        <span>11. </span> Do you offer Money Back Guarantee?
                      </a>
                    </div>
                  </div>
                  <div id="collapse204" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        Yes, we offer 30 days money back guarantee to ensure
                        customer satisfaction of our softwares. If for any
                        reason, you wish to discontinue using the product, you
                        can ask us for refund. We will refund your total money
                        except the installation and configuration charges, which
                        is USD 65 or 20% of application cost, whichever is
                        greater. Any cost of customization will not be refunded.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="panel panel-default aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="panel-heading">
                    <div className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse07"
                      >
                        <span>12. </span> Do I need to provide Google map API
                        key? If yes, how to generate Google map API key?
                      </a>
                    </div>
                  </div>
                  <div id="collapse07" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        Yes, you need to provide map API key. Please follow the
                        steps mentioned in below URL to generate Google map API
                        key:
                        https://developers.google.com/maps/documentation/javascript/get-api-key.
                        You need to setup your billing details over that.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="panel panel-default aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="panel-heading">
                    <div className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse504"
                      >
                        <span>13. </span> Along with hosting server details,
                        what other recommendations?
                      </a>
                    </div>
                  </div>
                  <div id="collapse504" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>
                        We recommend you purchase SSL certificate along with a
                        hosting server, considering that an SSL certificate is
                        necessary for all the websites these days and it
                        provides a secure layer to the website as well.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
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
      </section>

      <section className="JObboardVideSection">
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
                    title="Job Board Software"
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
