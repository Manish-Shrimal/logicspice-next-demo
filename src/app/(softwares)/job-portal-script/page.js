"use client";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "../../(softwares)/softwares.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from "react";
import Contactusmodel from "../../Components/Contactusmodel";
import SoftwareEnquiry from "../../Components/SoftwareEnquiry";
import "../../resposive.css";
import Whylogicspice from "../../Components/Whylogicspice";
import YouTubeLazyEmbed from "../../Components/YouTubeLazyEmbed";

import Reviewmodals from "../../Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";
import axios from "axios";
import BaseAPI from "../../BaseAPI/BaseAPI";
import GetDemoEnquiry from "../../Components/GetDemoEnquiry";
import "../../../../public/css/font-awesome.css";
import ScriptUpdatedModal from "../../Components/ScriptUpdatedModal";
import useWindowWidth from "../../Components/useWindowWidth";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-md flex flex-col items-center text-center relative group hover:bg-gradient-to-r BuildHover">
    <div className="bg-white h-full p-2 rounded-xl relative !w-full">
      <div className="text-3xl mb-2 flex items-center gap-2">
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          unoptimized={true}
        />
        <h3 className="text-[16px] font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-[16px] text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

const tableData = [
  {
    feature: "Rapid Deployment",
    logicspice: "Go live in minutes—no coding needed.",
    others: "Often requires manual server setup and technical know-how.",
  },
  {
    feature: "Responsive Design",
    logicspice:
      "Adapts flawlessly to phones, tablets, and desktops out of the box.",
    others: "May display awkward layouts or require extra tweaks for mobile.",
  },
  {
    feature: "Intuitive Interface",
    logicspice:
      "Clean, user-friendly dashboards for employers, candidates, and admins.",
    others: "Complex menus and confusing workflows that need training.",
  },
  {
    feature: "Flexible Pricing Plans",
    logicspice:
      "One-time license fee or budget-friendly monthly option ($45/mo).",
    others: "Typically locked into annual or tiered subscriptions only.",
  },
  {
    feature: "Deep Customization",
    logicspice:
      "Easily tailor fields, workflows, and styling for any niche or region.",
    others: "Limited theme options and rigid feature sets.",
  },
  {
    feature: "Candidate & Employer Tools",
    logicspice:
      "Built-in resume builder, job alerts, video profiles, and messaging.",
    others: "Basic posting and application features only.",
  },
  {
    feature: "Powerful Admin Panel",
    logicspice:
      "Complete control over listings, users, categories, and reports.",
    others: "Backend often clunky or missing key management tools.",
  },
  {
    feature: "SEO & Social Sharing",
    logicspice:
      "Auto-generate SEO-friendly pages, integrated blog, and social widgets.",
    others: "You must add plugins or manually optimize each page.",
  },
  {
    feature: "Custom Pages & API Access",
    logicspice:
      "Drag-and-drop page builder plus private API for any integration.",
    others: "Rarely included or sold as costly add-ons.",
  },
  {
    feature: "Payment Gateway Support",
    logicspice:
      "Ready-to-use Stripe, PayPal, and more—configurable in minutes.",
    others: "Limited gateways and often manual payment setups.",
  },
  {
    feature: "Seamless  Scalability",
    logicspice:
      "Handles growth smoothly—from a handful of listings to thousands.",
    others: "Performance can slow as traffic and data volume rise.",
  },
  {
    feature: "Dedicated Support & Docs",
    logicspice: "24/7 expert support and step-by-step documentation.",
    others: "Support is slow, or the documentation is outdated.",
  },
];

const Page = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let windowWidth = useWindowWidth();
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
      <div className="NewJobBoardDesign">
        <Navbar />
        <section className="paid-pro job-portal-banner fiverr-new-banner job-portal-bg NewJobSiteDesign JobBoardNewDesign JobPortalPageNew">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 col-md-7">
                {/* <h1 className="!mt-[10px]">
                  LS Jobber - White Label Job Portal <br />Script{" "}
                </h1> */}
                <h1 className="mt-2 text-3xl font-bold text-black leading-snug">
                  LS Jobber – White Label Job Portal <br />
                  Script
                </h1>

                <div className="both-left-p-sec">
                  <h2>
                    All-in-one job board script to launch a job portal clone.
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
                          title="Please fill the form below and get access to the live demo of Job Portal Script. See how it works yourself!"
                        />
                      }
                    </div>

                    <a
                      className=" fiverr-buys NewGreenBtnJob text-center"
                      href="/buy-now/jobsite"
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
                        src="/img/job-portal/stars.png"
                        alt=""
                        className="lazy"
                      />
                      <p>219 Reviews</p>
                    </div>
                  </div>
                  <div className="jocpp">
                    <ul className="job-pr-icon jobwidthauto">
                      <li>
                        {/* <i className="fa fa-globe" aria-hidden="true"></i> */}
                        <Image
                          unoptimized={true}
                          width={30}
                          height={30}
                          src="/img/job-portal/Web.png"
                          alt="Globe Icon"
                        />
                      </li>
                      <li>
                        {/* <i class="fa fa-android" aria-hidden="true"></i> */}
                        <Image
                          unoptimized={true}
                          width={30}
                          height={30}
                          src="/img/job-portal/Android.png"
                          alt="Globe Icon"
                        />
                      </li>
                      <li>
                        {/* <i class="fa fa-apple" aria-hidden="true"></i> */}
                        <Image
                          unoptimized={true}
                          width={30}
                          height={30}
                          src="/img/job-portal/Apple.png"
                          alt="Globe Icon"
                        />
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
                {/* <div className="por-mobile-new">
             
                <Image
                  src="/img/job-portal/new-img-jobboard.png"
                  alt="Job_Board_Software"
                  width={350}
                  height={100}
                  sizes="(max-width: 768px) 100vw, 350px"
                  priority
                  placeholder="blur" // Uses a low-quality preview while loading
                  fetchPriority="high" // Ensures it loads early
                  loading="eager" // Forces immediate loading
                  blurDataURL="/img/job-portal/new-img-jobboard.png"
                  style={{ objectFit: "cover" }} // Prevents layout shifts
                />
              </div> */}

                <div className="por-mobile-new">
                  <Image
                    src="/img/job-portal/job-portal-banner-img.png"
                    alt="Job Portal Script"
                    width={380} // Increased resolution
                    height={430} // Adjusted to maintain aspect ratio
                    sizes="(max-width: 768px) 100vw, 700px" // Ensures correct scaling on mobile
                    priority
                    placeholder="blur"
                    fetchPriority="high"
                    loading="eager"
                    blurDataURL="/img/job-portal/job-portal-banner-img.png"
                    style={{ objectFit: "cover" }} // Prevents image distortion
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
      

            <div className="flex flex-col items-center pb-0">
              <h2 className="w-full text-left text-4xl font-bold text-gray-800 mb-8">
                Launch Faster. Hire Smarter. Grow Bigger.
              </h2>

              <div className="text-left">
                <p className="text-lg text-gray-600 mb-4">
                  <span className="font-semibold">LS Jobber</span> is a powerful
                  white label job portal script created for businesses, HR
                  agencies, and entrepreneurs who want to build and run their
                  own custom job portal platform. Whether you&apos;re starting a new
                  job portal or scaling an existing recruitment business, LS
                  Jobber offers a complete solution with full customization and
                  zero coding hassle.
                </p>
                <p className="text-gray-600 mb-4">
                  With this job portal application, you get a professional
                  dashboard to manage job listings, employers, job seekers, and
                  recruiters—effortlessly.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mb-8">
                <FeatureCard
                  icon="/img/jobboard/launch-fast-icon.png"
                  title="White-Label Script"
                  description="100% white-label and fully brandable to reflect your brand identity"
                />
                <FeatureCard
                  icon="/img/jobboard/fully-customizable-icon.png"
                  title="All-In-One Platform"
                  description="Built for employers, job seekers, and recruiters alike"
                />
                <FeatureCard
                  icon="/img/jobboard/white-labeled-icon.png"
                  title="No coding required"
                  description="Get started quickly with hassle-free setup and management"
                />
                <FeatureCard
                  icon="/img/jobboard/scalable-and-flexible-icon.png"
                  title="Custom Workflows"
                  description="Advanced filters, categories, and workflows customized to your business"
                />
                <FeatureCard
                  icon="/img/jobboard/zero-maintainence-icon.png"
                  title="Maintenance-Free"
                  description="We manage the backend, letting you focus on growing your business"
                />
              </div>

             
            </div>
          </div>
        </section>
        <section
          className="client-say jobBoardNewSoftware"
          style={{
            backgroundImage:
              "url(/img/job-portal/youtube-background-jobboard.png)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 job-video">
                {/* <div ref={iframeRef}>
                  <iframe
                    className="!rounded-xl"
                    id="ytplayer"
                    width="100%"
                    height="312"
                    src="https://www.youtube.com/embed/7fJVD2R2kkA?enablejsapi=1&mute=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div> */}
                <YouTubeLazyEmbed videoId="7fJVD2R2kkA" />
              </div>
              <div className="col-md-6">
                <div className="job-board-features">
                  <ul>
                    <li className="!text-white">Post Unlimited Jobs</li>
                    <li className="!text-white">Responsive & SEO Friendly</li>
                    <li className="!text-white">Advanced Search Filter</li>
                    <li className="!text-white">Manage Candidate Database</li>
                    <li className="!text-white">New Announcement</li>
                    <li className="!text-white">Social Media Sharing</li>
                    <li className="!text-white">Multiple Payment Gateway</li>
                    <li className="!text-white">Upload Video CV</li>
                    <li className="!text-white">Theme Color Management</li>
                    <li className="!text-white">One time License Fee</li>
                    <li className="!text-white">Email Notification</li>
                    <li className="!text-white">Auto Suggestion Filtering</li>
                    <li className="!text-white">
                      Multi-Language/Currency Support
                    </li>
                    <li className="!text-white">
                      Optimized job search with filters
                    </li>
                    <li className="!text-white">Job Search Monetization</li>
                    <li className="!text-white">Custom Domain + Free SSL</li>
                    <li className="!text-white">Built-in Blog Module</li>
                    <li className="!text-white">Custom Code & CSS</li>
                    <li className="!text-white">One-Click Data Export</li>
                    <li className="!text-white">Modern, Customizable Design</li>
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
                Easy-to-Use Features for Employers, Job Seekers, and Admins{" "}
              </h2>
            </div>
            {/* <div className="tatxt_txt_job text-center">
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
          </div> */}

            <div
              className="tatxt_txt_job space-y-4 !text-gray-800 !text-left leading-relaxed"
              style={{ textAlign: "left" }}
            >
              <p className="">
                <strong>
                  What if hiring could be simple, smart, and fully yours?
                </strong>{" "}
                That&apos;s exactly what LS Jobber delivers with its
                feature-rich job portal script. This easy-to-use platform lets
                employers post jobs fast and helps job seekers find the right
                roles using basic filters like location and experience.
              </p>

              <ul className="list-disc pl-4 space-y-2 core-feature-left-border">
                <li>
                  <strong>For Employers:</strong> Employers can quickly post job
                  openings with all the key details like job title, skills,
                  experience, and location, making it easy to attract the right
                  candidates.
                </li>
                <li>
                  <strong>For Job Seekers :</strong> Job seekers can easily
                  browse openings by category, location, or experience. They can
                  save listings, apply with a cover letter, and upload or update
                  their resume anytime.
                </li>
                <li>
                  <strong>For Admins:</strong> Admins can manage the entire
                  platform smoothly—approve or remove users, edit profiles, and
                  keep everything secure and up-to-date with ease.
                </li>
              </ul>

              <p>
                LS Jobber brings everyone to the table—employers find talent
                faster, job seekers get access to the most relevant
                opportunities, and admins stay in full control without the tech
                headaches. It&apos;s not just a job portal; it&apos;s a complete
                hiring ecosystem built for simplicity, speed, and success.
              </p>
            </div>

            <div className="tab_bbx_job">
              <div className="tab_bbx_top_job">
                <ul className="JobBoardNewtab">
                  <li
                    id="tab1_li"
                    className={`jobseeker_app_job_job_portal ddlj ${
                      sellerTab ? "active" : ""
                    }`}
                    onClick={() => handleSellerTab()}
                  >
                    <a
                      className={` ${
                        sellerTab ? "JobBoardJobseekerNewtabOpen" : ""
                      }`}
                    >
                      Jobseeker App Features{" "}
                    </a>
                  </li>
                  <li
                    id="tab2_li"
                    className={`emplyer_app_job_job_portal ddlj ${
                      buyerTab ? "active" : ""
                    }`}
                    onClick={() => handleBuyerTab()}
                  >
                    <a
                      className={` ${
                        buyerTab ? "JobBoardEmployerNewtabOpen" : ""
                      }`}
                    >
                      Employer Panel{" "}
                    </a>
                  </li>
                  <li
                    id="tab3_li"
                    className={`admin_app_job_job_portal ddlj ${
                      adminTab ? "active" : ""
                    }`}
                    onClick={() => handleAdminTab()}
                  >
                    <a
                      className={` ${
                        adminTab ? "JobBoardAdminNewtabOpen" : ""
                      }`}
                    >
                      Admin Panel
                    </a>
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
                              src="/img/job-portal/jobseeker-app-feature.png"
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
                                    src="/img/job-portal/ragister-icon.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Easy Registration
                                  <div className="product-idea">
                                    <p>
                                      Job seekers can quickly sign up using
                                      their email address to start browsing and
                                      applying for jobs.
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
                                    src="/img/job-portal/manage_alert.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Custom Job Alerts
                                  <div className="product-idea">
                                    <p>
                                      Set up personalized job alerts based on
                                      your preferred role, location, or
                                      category—and receive updates right in your
                                      inbox.
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
                                    src="/img/job-portal/manage_profile.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Profile Management
                                  <div className="product-idea">
                                    <p>
                                      Create, edit, or delete your profile
                                      anytime. Keep your details up-to-date to
                                      match the right opportunities.
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
                                    src="/img/job-portal/save_fav.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Save Favorite Jobs
                                  <div className="product-idea">
                                    <p>
                                      Found a great opportunity but not ready to
                                      apply? Save it and come back to it later.
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
                                    src="/img/job-portal/apply_job.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Simple Job Applications
                                  <div className="product-idea">
                                    <p>
                                      Apply directly to jobs that match your
                                      profile—fast, easy, and hassle-free.
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
                                    src="/img/job-portal/search_job.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Smart Job Search
                                  <div className="product-idea">
                                    <p>
                                      Use filters like keyword, location,
                                      category, or work type to find jobs that
                                      truly fit you.
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
                                    src="/img/job-portal/applied_job.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Track Your Applications
                                  <div className="product-idea">
                                    <p>
                                      Keep a clear view of all the jobs you&apos;ve
                                      applied to, all in one place.
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
                                    src="/img/job-portal/share_job.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Share Job Opportunities
                                  <div className="product-idea">
                                    <p>
                                      Share job listings with your network via
                                      platforms like Facebook, Gmail, Pinterest,
                                      and more.
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
                                    src="/img/job-portal/manage_edu.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Education Management
                                  <div className="product-idea">
                                    <p>
                                      Add, edit, or remove your education
                                      history to show your academic background.
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
                                    src="/img/job-portal/manage_exp.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Experience Management
                                  <div className="product-idea">
                                    <p>
                                      Easily manage your work experience details
                                      right from your profile.
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
                                    src="/img/job-portal/genrate_cv.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Build Your CV
                                  <div className="product-idea">
                                    <p>
                                      Generate a professional CV with
                                      customizable templates—update it anytime
                                      as you grow.
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
                                    src="/img/job-portal/jobs_by.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Search by Industry, Role, or Location
                                  <div className="product-idea">
                                    <p>
                                      Find jobs tailored to your field,
                                      function, or preferred city with advanced
                                      search options.
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
                                    src="/img/job-portal/approve_tickets.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Add a Declaration Statement
                                  <div className="product-idea">
                                    <p>
                                      Include a professional declaration
                                      statement in your job applications when
                                      required.
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
                                    src="/img/job-portal/manage_blog.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Professional Details
                                  <div className="product-idea">
                                    <p>
                                      Fill in your complete professional summary
                                      to help employers better understand your
                                      background.
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
                                    src="/img/job-portal/send_mail.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Email Communication
                                  <div className="product-idea">
                                    <p>
                                      Connect with employers via built-in email
                                      communication tools.
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
                                    src="/img/job-portal/tickets_history.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Manage Email History
                                  <div className="product-idea">
                                    <p>
                                      Track and organize your email
                                      conversations with potential employers.
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
                                    src="/img/job-portal/deletes_acc.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Account Deletion Option
                                  <div className="product-idea">
                                    <p>
                                      Done with job searching? You can easily
                                      delete your account and provide a reason
                                      if you choose to.
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
                                    src="/img/job-portal/upload-video.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Video CV Upload
                                  <div className="product-idea">
                                    <p>
                                      Make your profile stand out by uploading a
                                      video CV—give employers a better sense of
                                      who you are.
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
                                    src="/img/job-portal/categories-auto.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Membership Plans
                                  <div className="product-idea">
                                    <p>
                                      Choose from free or premium membership
                                      options depending on your job search
                                      needs.
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
                                    src="/img/job-portal/simple_application.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Email Notifications
                                  <div className="product-idea">
                                    <p>
                                      Stay updated with instant notifications
                                      for job alerts and key activities.
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
                                    src="/img/job-portal/simple_application.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  AI-Based Job Recommendations
                                  <div className="product-idea">
                                    <p>
                                      Get job suggestions powered by AI based on
                                      your profile, behavior, and application
                                      history.
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
                              src="/img/job-portal/employer-mobile-preview.png"
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
                                    src="/img/job-portal/ragister-icon.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Easy Registration
                                  <div className="product-idea">
                                    <p>
                                      Employers can sign up quickly using their
                                      email address and start posting jobs right
                                      away.
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
                                    src="/img/job-portal/membership_pur.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Flexible Membership Plans
                                  <div className="product-idea">
                                    <p>
                                      Employers can choose a free or paid
                                      membership plan based on what they need.
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
                                    src="/img/job-portal/fov_cant.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Save Favorite Candidates
                                  <div className="product-idea">
                                    <p>
                                      Mark top candidates as favorites so you
                                      can easily return to them later when
                                      you&apos;re ready to make a hiring
                                      decision.
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
                                    src="/img/job-portal/create-project.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Post Jobs Effortlessly
                                  <div className="product-idea">
                                    <p>
                                      Employers can create detailed job listings
                                      with everything from title and job
                                      description to required skills, salary,
                                      location, company info, and more.
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
                                    src="/img/job-portal/manage_job.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Job Management
                                  <div className="product-idea">
                                    <p>
                                      Edit, update, or remove job postings
                                      anytime from your dashboard—stay in full
                                      control of your listings.
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
                                    src="/img/job-portal/update_job.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Job Status Updates
                                  <div className="product-idea">
                                    <p>
                                      Easily activate or deactivate job listings
                                      with a single click.
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
                                    src="/img/job-portal/manage_profile.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Profile Management
                                  <div className="product-idea">
                                    <p>
                                      Keep your company profile updated with the
                                      latest information, including logo and
                                      contact details. Change passwords anytime
                                      for added security.
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
                                    src="/img/job-portal/count_search_view.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  View Counts for Jobs and Searches
                                  <div className="product-idea">
                                    <p>
                                      Track how many people are viewing your
                                      jobs and searching for roles similar to
                                      what you offer.
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
                                    src="/img/job-portal/count_job_view.png"
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
                              </li> */}
                              <li>
                                <i className="JobBoardImg">
                                  <Image
                                    unoptimized={true}
                                    width={100}
                                    height={100}
                                    className="lazy"
                                    src="/img/job-portal/payment_history.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Payment History Overview
                                  <div className="product-idea">
                                    <p>
                                      Get a clear view of your transaction
                                      history based on purchased plans and
                                      features.
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
                                    src="/img/job-portal/manage_user_acc.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Browse Jobseeker Profiles
                                  <div className="product-idea">
                                    <p>
                                      Access detailed profiles of job seekers
                                      who match your hiring criteria or have
                                      applied for your jobs.
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
                                    src="/img/job-portal/manage_content.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Invoices for Plans
                                  <div className="product-idea">
                                    <p>
                                      Download or display invoices for your
                                      membership plans and maintain records for
                                      your purchases.
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
                                    src="/img/job-portal/send_mail.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Email Communication
                                  <div className="product-idea">
                                    <p>
                                      Communicate directly with job seekers
                                      through built-in email tools—no
                                      third-party platforms required.
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
                                    src="/img/job-portal/tickets_history.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Mail History
                                  <div className="product-idea">
                                    <p>
                                      Access and manage your history of email
                                      interactions with candidates for better
                                      follow-up and organization.
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
                                    src="/img/job-portal/manage-dashboard.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Custom Dashboard Background
                                  <div className="product-idea">
                                    <p>
                                      Make your dashboard feel like home by
                                      uploading your own background image.
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
                                    src="/img/job-portal/deletes_acc.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Delete Account Option
                                  <div className="product-idea">
                                    <p>
                                      Done hiring? You can delete your account
                                      anytime, with the option to provide a
                                      reason.
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
                                    src="/img/job-portal/import_jobseekers.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Bulk Jobseeker Import
                                  <div className="product-idea">
                                    <p>
                                      Import jobseeker data in bulk using a
                                      simple Excel format—ideal for larger
                                      hiring needs or database transfers.
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
                                    src="/img/job-portal/accept_online.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Secure Online Payments
                                  <div className="product-idea">
                                    <p>
                                      Our platform includes built-in Stripe and
                                      PayPal gateways, making it easy to accept
                                      payments via Visa, MasterCard, Discover,
                                      American Express, and PayPal.
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
                                    src="/img/job-portal/company_profile.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Company Profile Page
                                  <div className="product-idea">
                                    <p>
                                      Showcase your company to potential
                                      candidates with a dedicated profile page.
                                      Add your logo, company details, website,
                                      photos, videos, and all your active job
                                      postings to attract more applications.
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
                                    src="/img/job-portal/view_jobseeker_icon.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  View Job Seeker Contact Details
                                  <div className="product-idea">
                                    <p>
                                      With the right membership plan, employers
                                      can view job seeker contact information to
                                      connect directly with potential hires.
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
                                    src="/img/job-portal/view_jobseeker_icon.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Job Performance Analytics
                                  <div className="product-idea">
                                    <p>
                                      View detailed insights on job ad
                                      performance—clicks, views, applications,
                                      and conversion rate.
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
                              width={360}
                              height={100}
                              src="/img/job-portal/admin-preview.png"
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
                                    src="/img/job-portal/secure_login.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Secure Login
                                  <div className="product-idea">
                                    <p>
                                      Admins can securely log in to the job
                                      portal with protected access.
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
                                    src="/img/job-portal/admin_dash.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Admin Dashboard
                                  <div className="product-idea">
                                    <p>
                                      The admin can access a central dashboard
                                      that shows the total number of employers,
                                      jobseekers, categories, skills,
                                      designations, locations, jobs, blogs, and
                                      more — all in one organized view.
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
                                    src="/img/job-portal/configuration.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Configuration
                                  <div className="product-idea">
                                    <p>
                                      Update essential details like username,
                                      password, email, security questions,
                                      contact address, slogan, logo, favicon,
                                      PayPal info, and manage sub-admin
                                      accounts.
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
                                    src="/img/job-portal/manage_skill.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Manage Jobseekers
                                  <div className="product-idea">
                                    <p>
                                      Admin can view and manage jobseekers —
                                      activate, deactivate, edit, delete
                                      profiles, view certificates, and track
                                      applied jobs.
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
                                    src="/img/job-portal/manage_emp.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Manage Employers
                                  <div className="product-idea">
                                    <p>
                                      Admin can access the full employer list
                                      and take actions like add, edit, delete,
                                      activate, deactivate, or verify profiles.
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
                                    src="/img/job-portal/manage_job.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Manage Jobs
                                  <div className="product-idea">
                                    <p>
                                      Browse all job postings, edit or remove
                                      listings, activate/deactivate jobs, and
                                      see which jobseekers have applied.
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
                                    src="/img/job-portal/manage_news.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Manage Newsletter
                                  <div className="product-idea">
                                    <p>
                                      Admin can view the list of newsletter and
                                      send newsletter emails, keep logs of sent
                                      messages, and view users who&apos;ve
                                      unsubscribed.
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
                                    src="/img/job-portal/course_details.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Manage Course
                                  <div className="product-idea">
                                    <p>
                                      Add, edit, delete, or deactivate courses
                                      and view their specializations with ease.
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
                                    src="/img/job-portal/manage_cat.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Manage Categories & Subcategories
                                  <div className="product-idea">
                                    <p>
                                      Create, update, or delete categories.
                                      Activate or deactivate them and manage the
                                      full subcategory structure.
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
                                    src="/img/job-portal/manage_blog.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Manage Blogs
                                  <div className="product-idea">
                                    <p>
                                      Add, edit, delete, or toggle the
                                      activation status of blogs posted on the
                                      portal.
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
                                    src="/img/job-portal/manage_banner.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Manage Banner
                                  <div className="product-idea">
                                    <p>
                                      Easily add, edit, or remove banner ads
                                      that appear across your site.
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
                                    src="/img/job-portal/payment_history.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Payment History
                                  <div className="product-idea">
                                    <p>
                                      Admin can track all payment transactions
                                      made by employers for purchased plans.
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
                                    src="/img/job-portal/theme-color.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Theme Color Management
                                  <div className="product-idea">
                                    <p>
                                      Customize the look of your site with color
                                      themes and reset them to default whenever
                                      needed.
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
                                    src="/img/job-portal/manage_contents.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Manage Announcements
                                  <div className="product-idea">
                                    <p>
                                      Admin can manage announcements at backend
                                      , which will be displayed on homepage
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
                                    src="/img/job-portal/self_profile.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Manage Payment Configuration
                                  <div className="product-idea">
                                    <p>
                                      Admin can set up or update details for
                                      integrated payment gateways like Stripe or
                                      PayPal.
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
                                    src="/img/job-portal/announcement_marquee.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Sub-Admin Management
                                  <div className="product-idea">
                                    <p>
                                      Create accounts for your team members and
                                      manage their permissions — add, edit,
                                      delete, activate, or deactivate
                                      sub-admins.
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
                                    src="/img/job-portal/admin_users.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Assign Roles to Sub-Admin
                                  <div className="product-idea">
                                    <p>
                                      Assign specific roles and access levels so
                                      your team can help manage the platform
                                      efficiently.
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
                                    src="/img/job-portal/banner_ads.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Banner Ads Placement
                                  <div className="product-idea">
                                    <p>
                                      Monetize your job board by placing
                                      third-party banner ads with simple code
                                      snippets or image uploads.
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
                                    src="/img/job-portal/Manage_Membership.png"
                                    alt="Jobseeker App Feature"
                                  />
                                </i>
                                <span>
                                  Manage Membership Plans
                                  <div className="product-idea">
                                    <p>
                                      Admin can create and update membership
                                      plans for both employers and job seekers —
                                      free or paid.
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
                                    src="/img/job-portal/customize_design.png"
                                  />
                                </i>
                                <span>
                                  Manage Currency
                                  <div className="product-idea">
                                    <p>
                                      Admin can Add, edit, or delete currencies.
                                      The selected currency will be reflected
                                      across the platform.
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
                                    src="/img/job-portal/customize_design.png"
                                  />
                                </i>
                                <span>
                                  Advanced Analytics Dashboard
                                  <div className="product-idea">
                                    <p>
                                      Access detailed reports on traffic, user
                                      engagement, job posts, application rates,
                                      and revenue.{" "}
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
        {/* <section className="job_product_page_header_in">
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
      </section> */}

        <section className="job_board_software_lsjobber_do">
          <div className="job_board_software_lsjobber_do_bg"></div>
          <div className="container">
            <div className="heading_box">
              <h2 className="do_for_you_header">
                How LS Jobber Helps You Launch and Grow?
              </h2>
            </div>

            <div className="do_for_you_box">
              <h3 className="do_for_you_box_heading">
                Build a Modern Job Portal Like Monster or Naukri
              </h3>
              <p>
                LS Jobber goes beyond a simple job portal script—it&apos;s your
                all-in-one readymade solution to launch a professional, scalable
                job website like Monster or Naukri, without the high costs.
              </p>
              {/* <div className="do_for_you_box_list">
                      <div className="do_for_you_box_list_item">
                        <Image
                          src="/img/job-portal/jobboard_do_for_you_image1.png"
                          alt="tick"
                          width={50}
                          height={50}
                        />
                        <span>Mobile-Friendly & Responsive</span>
                      </div>
                      <div className="do_for_you_box_list_item">
                        <Image
                          src="/img/job-portal/jobboard_do_for_you_image2.png"
                          alt="tick"
                          width={50}
                          height={50}
                        />
                        <span>Custom Branding & Domain Setup</span>
                      </div>
                      <div className="do_for_you_box_list_item">
                        <Image
                          src="/img/job-portal/jobboard_do_for_you_image3.png"
                          alt="tick"
                          width={50}
                          height={50}
                        />
                        <span>Source Code Access for Deeper Customization</span>
                      </div>
                    </div> */}
              <p className="do_for_you_box_text">
                Our advanced classifieds software for job listings grows with
                your business, offering an intuitive, reliable experience anyone
                can master. Employers enjoy clear views of applicant pools,
                streamlining hiring decisions, and keeping candidates informed
                with automatic updates.
              </p>
              <p className="do_for_you_box_text">
                Meanwhile, job seekers benefit from easy-to-build, professional
                CVs that help them shine in a competitive market.
              </p>
              {/* <p className="do_for_you_box_text">
                      The setup process is a breeze, requiring zero coding
                      know-how—our expert technical team ensures a seamless setup for
                      you. Effortlessly launch your own job board advertising website
                      in record time with our ready-to-use Job Board Software Script.
                    </p> */}
              <Image
                src="/img/job-portal/search 1.png"
                className="do_for_you_box_search_image"
                alt="job portal script"
                width={120}
                height={400}
                unoptimized={true}
              />
            </div>

            <div className="do_for_you_info">
              <div className="do_for_you_info_box">
                <div className="do_for_you_left">
                  <h4 className="do_for_you_left_heading">
                    Efficient Hiring with Our Job Portal Script
                  </h4>
                  <p className="do_for_you_left_text">
                    Our advanced PHP job portal script is built to help
                    businesses handle recruitment in-house, smoothly, even
                    without technical expertise. Job seekers can search for
                    jobs, upload resumes, and apply for jobs, while employers
                    get detailed insights into applicants for better
                    decision-making. This cost-effective PHP job board script
                    gives you all the essential tools to launch a job portal
                    rivaling industry leaders like Monster or Naukri.
                  </p>
                </div>

                <div className="do_for_you_right">
                  <Image
                    src="/img/job-portal/efficient-hiring.png"
                    alt="tick"
                    width={500}
                    height={100}
                    className="do_for_you_info_image"
                  />
                </div>
              </div>

              <div className="do_for_you_info_box DoForSecond">
                <div className="do_for_you_right">
                  <h4 className="do_for_you_left_heading">
                    Custom Job Portal App Development Made Simple
                  </h4>
                  <p className="do_for_you_left_text">
                    This script lets you set up a professional career website
                    quickly—no need for custom coding or technical skills.
                  </p>
                  <p className="do_for_you_left_text">
                    With the best job portal software, you get all the important
                    tools in one place: job posting, managing applicants, resume
                    uploads, and instant notifications. This speeds up your
                    hiring process, helping you find great candidates and manage
                    applications smoothly from day one.{" "}
                  </p>
                </div>
                <div className="do_for_you_left">
                  <Image
                    src="/img/job-portal/custom-job-portal.png"
                    alt="tick"
                    width={500}
                    height={100}
                    className="do_for_you_info_image mt-2 md:mt-0"
                  />
                </div>
              </div>

              <div className="do_for_you_info_box">
                <div className="do_for_you_left">
                  <h4 className="do_for_you_left_heading">
                    Perfect for Staffing Agencies, HR Firms & Entrepreneurs
                    Worldwide{" "}
                  </h4>
                  <p className="do_for_you_left_text">
                    Whether you&apos;re an HR consultant in the UK, a staffing
                    agency in the USA, or an entrepreneur launching a niche job
                    board in Australia or India, LS Jobber adapts to your
                    business needs. Our white label job portal script is trusted
                    across the globe for creating high-performing hiring
                    platforms in various industries like healthcare, tech,
                    education, and logistics.
                  </p>
                </div>

                <div className="do_for_you_right">
                  <Image
                    src="/img/job-portal/perfect-staffing.png"
                    alt="tick"
                    width={500}
                    height={100}
                    className="do_for_you_info_image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* why people love LS Jobber */}
        <section className="why_people_love_ls_jobber">
          <div className="container">
            <div className="comparison_heading_box">
              <h3 className="comparison_heading">
                Logicspice Job Board Script (LS Jobber) vs. Other Job Portal
                Solutions
              </h3>
            </div>
            <div className="table-container">
              {windowWidth < 768 ? (
                // Mobile view - unchanged
                <div className="mobile-table">
                  <div className="mobile-header">
                    <h2 className="logicspice-header">LOGICSPICE LS JOBBER</h2>
                    <h2 className="others-header">Other Job Board Solutions</h2>
                  </div>
                  <ul className="feature-list">
                    {tableData.map((row, index) => (
                      <li key={index} className="feature-item">
                        <div className="feature-title">{row.feature}</div>
                        <ul className="comparison-list">
                          <li className="card logicspice-card scaled-card">
                            <h3>LogicSpice LS Jobber</h3>
                            <p>{row.logicspice}</p>
                          </li>
                          <li className="card others-card">
                            <h3>Other Job Portal Solutions</h3>
                            <p>{row.others}</p>
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                // Desktop view - column-based structure
                <div className="desktop-columns">
                  {/* Feature Column */}
                  <ul className="column-list feature-list header-list">
                    <li>Feature/Criteria</li>
                    {tableData.map((row, index) => (
                      <li key={index}>{row.feature}</li>
                    ))}
                  </ul>
                  {/* LogicSpice Column */}
                  <ul className="column-list logicspice-list header-list">
                    <li>LOGICSPICE LS JOBBER</li>
                    {tableData.map((row, index) => (
                      <li key={index}>{row.logicspice}</li>
                    ))}
                  </ul>
                  {/* Others Column */}
                  <ul className="column-list others-list header-list">
                    <li>Other Job Portal Solutions</li>
                    {tableData.map((row, index) => (
                      <li key={index}>{row.others}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="SubscriptionModel" id="subscriptionmodel">
          <div className="container">
            <div className="job_or_title">
              <h2 className="taxt_tt_job">Subscription Model</h2>
              <br />
              <div className="SubscriptionModelBx">
                <div className="SubscriptionModelRight">
                  <Image
                    className="SubscriptionModelRightImg"
                    src="/img/job-portal/business-men.png"
                    alt="Subscription"
                    width={250}
                    height={200}
                    unoptimized={true}
                  />
                </div>
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
                <div className="SubscriptionModelLeft">
                  <Image
                    className="SubscriptionModelLeftImg"
                    src="/img/job-portal/cheerful-business-woman.png"
                    alt="Subscription"
                    width={180}
                    height={150}
                    unoptimized={true}
                  />
                </div>
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
                      employer and jobseeker app only. These apps will be
                      launched through your dedicated developer accounts on
                      Google Play and the Apple App Store.{" "}
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
                        src="/img/job-portal/stars.png"
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
                <a onClick={toggleModal}>contact us</a>
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
                  <span>Utilized the backend API's.</span>
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
      </section> */}
        <section className="job_portal_area script-update-bg jobboard-script-update">
          <div className="container">
            <div className="job_or_title">
              <h2 className="taxt_tt_job">Script Update History</h2>
              <br />

              <ScriptUpdatedModal />
            </div>

            <div className="ScriptupdateImg">
              <Image
                unoptimized={true}
                width={250}
                height={200}
                src="/img/job-portal/script-update.png"
                alt="img"
              />
            </div>
          </div>
        </section>
        {/* <section className="job_portal_area job_portal_area_food">
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
                    src="/img/job-portal/why-logic-icon.png"
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
      </section> */}
        <section className="job_portal_area job_portal_area_food jobboard_best_partner">
          <div className="best-partner-left-img">
            <Image
              unoptimized={true}
              width={270}
              height={200}
              src="/img/job-portal/howitwork.png"
              alt="img"
            />
          </div>
          <div className="container">
            {/* <div className="row align-items-center"> */}
            {/* <div className="col-md-3"> */}

            {/* </div> */}
            {/* <div className="col-md-9"> */}
            <div className="job_or_title">
              <h2 className="taxt_tt_job">
                Best Partner Company For Your Technological Solutions!
              </h2>
              <br />
              <div className="best-partner">
                <div className="logic-parter">
                  <a
                    className=""
                    aria-controls="jobportal"
                    onClick={toggleJobPortalModal}
                  >
                    <Image
                      unoptimized={true}
                      width={20}
                      height={20}
                      src="/img/job-portal/best_partner_image1.png"
                      alt=""
                      className=""
                    />
                    <span className="">How It Works</span>
                  </a>
                  <a
                    className=""
                    aria-controls="buyjobportal"
                    onClick={toggleBuyJobPortalModal}
                  >
                    <Image
                      unoptimized={true}
                      width={20}
                      height={20}
                      src="/img/job-portal/best_partner_image2.png"
                      alt=""
                      className=""
                    />{" "}
                    <span>Companies Using It</span>
                  </a>
                  <a onClick={toggleInfo} className="ylogicspice">
                    <Image
                      unoptimized={true}
                      width={20}
                      height={20}
                      src="/img/job-portal/best_partner_image3.png"
                      alt=""
                      className=""
                    />
                    <span>Why Logicspice</span>
                  </a>
                  {/* <Whylogicspice open={showInfo} /> */}
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
            <Whylogicspice open={showInfo} />
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
                src="/img/job-portal/Job_board_for_page.jpg"
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
                        src="/img/job-portal/firstnationjobs.png"
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
                        src="/img/job-portal/healthandsocialcarejobs.png"
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
                        src="/img/job-portal/joblisto.png"
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
                        src="/img/job-portal/grc.png"
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
                        src="/img/job-portal/lgbtijobs.png"
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
                        src="/img/job-portal/jobvibe.png"
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
                        src="/img/job-portal/needtoday.png"
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
                                    src="/img/job-portal/unchaayi.png"
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
                        src="/img/job-portal/bepsl.png"
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
                        src="/img/job-portal/bpservices.png"
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
                        src="/img/job-portal/sellfomote.png"
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
                        src="/img/job-portal/ejtecs.png"
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
                          src="/img/job-portal/tech_reactjs_icon.png"
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
                          src="/img/job-portal/tech_reactjs_icon.png"
                          alt="ReactJS Development"
                        />
                      </div>
                      <div className="icntechimg_nm">React Native</div>
                    </li>
                    <li data-aos="fade-up">
                      <div className="icntechimg">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/job-portal/LaravelLogo.png"
                          alt="Laravel Development"
                        />
                      </div>
                      <div className="icntechimg_nm">Laravel</div>
                    </li>
                    {/* <li data-aos="fade-up">
                          <div className="icntechimg">
                            <Image
                              unoptimized={true}
                              width={60}
                              height={100}
                              src="/img/job-portal/html-5.png"
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
                              src="/img/job-portal/tech_mysql_icon.png"
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
                              src="/img/job-portal/tech_apache_icon.png"
                              alt="Apache"
                            />
                          </div>
                          <div className="icntechimg_nm">Apache</div>
                        </li> */}

                    <li data-aos="fade-up">
                      <div className="icntechimg">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/job-portal/html-5.png"
                          alt="HTML5 logo"
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
                          src="/img/job-portal/tech_mysql_icon.png"
                          alt="MySQL database logo"
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
                          src="/img/job-portal/tech_apache_icon.png"
                          alt="Apache server logo"
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
                          src="/img/job-portal/apple_phn_icon.png"
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
                          src="/img/job-portal/andoird_icon.png"
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
                      <b>Framework - </b> Laravel 10.x
                    </li>
                    <li
                      className="same aos-init aos-animate"
                      data-aos="fade-up"
                    >
                      <b>Library - </b> ReactJS (Version 18.2.0)
                    </li>
                    <li
                      className="same aos-init aos-animate"
                      data-aos="fade-up"
                    >
                      <b>Language - </b> PHP 8.2, jQuery
                    </li>
                    <li
                      className="other aos-init aos-animate"
                      data-aos="fade-up"
                    >
                      <b>Design - </b> HTML 5, CSS 3, Bootstrap5, JavaScript
                    </li>
                    <li className="other aos-init" data-aos="fade-up">
                      <b>Database - </b> MySQL 5.5+{" "}
                    </li>
                    <li className="other aos-init" data-aos="fade-up">
                      <b>Server - </b> Apache 2.4+
                    </li>
                    <li className="other aos-init" data-aos="fade-up">
                      <b>Mobile Apps - </b> React Native Version 0.71.8
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
                      src="/img/job-portal/month_half_icon.png"
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
                      src="/img/job-portal/free_remove_icon.png"
                      alt="manager_icn"
                    />
                  </div>
                  <div className="supportsettingtext">
                    White Labeled Software
                  </div>
                </li>
                <li data-aos="fade">
                  <div className="supportsetting_icn">
                    <Image
                      unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/job-portal/free_instal.png"
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
                      src="/img/job-portal/access_secure_code_icon.png"
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
              src="/img/job-portal/ecommerce-review-img.png"
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
                    Launching my job portal with Logicspice&apos;s script was one of the best decisions I&apos;ve made. The customization options are impressive, and the admin panel is super intuitive. It saved me a lot of time and development cost. I appreciate the quick assistance provided during setup.
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
                   {/* Mark Reynolds,  United Kingdom */}
                   <span id="client-name">Mark Reynolds,  United Kingdom </span>{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/job-portal/uk_flag_img.png"
                          alt="mobile app development in USA"
                          style={{ width: "20px", marginLeft: "3px;" }}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext" id="fiveer-clone">
                     As someone new to web development, I was nervous about setting up a job site. But Logicspice made it surprisingly easy. Their script is beginner-friendly, and the customer support team really knows their stuff. They answered my questions fast and got me through the technical setup without stress.
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
                      <span id="client-name">Dan Huge,  Australia</span>{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/job-portal/australia_flag_img.png"
                          alt="mobile app development in USA"
                          style={{ width: "20px", marginLeft: "3px;" }}
                        />
                      </span>
                    </div>
                  </div>

                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext" id="fiveer-clone">
                     I&apos;ve tried other scripts before, but Logicspice really stands out. The platform is stable, easy to manage, and packed with the right features for employers and job seekers. Their documentation was clear, and the support team resolved my queries quickly. 
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
                      <span id="client-name">Tomas Herrera, United States</span>{" "}
                      <span>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/job-portal/usa_flag_img.png"
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
                  {/* <div className="outof_rating">
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
                  </div> */}
                  <div className="outof_rating">
                    <div className="review_rating_fjs">
                      <div className="star_num">
                        5 <i className="fa fa-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-label="5 star rating progress"
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
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-label="4 star rating progress"
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
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-label="0 star rating progress"
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
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-label="2 star rating progress"
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
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          aria-label="1 star rating progress"
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
                      title="Job Portal Script"
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
                        <span>01. </span> Is the job portal script easy to set
                        up?
                      </a>
                    </div>
                    <div style={activeIndex === 0 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Absolutely. We handle installation and setup for all
                          license types—no coding skills required.
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
                        <span>02. </span> Will I have to pay for future updates?
                      </a>
                    </div>
                    <div style={activeIndex === 1 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          No! With the Pro License, you&apos;ll get free updates
                          for the next 6 months. If you&apos;re on a monthly
                          subscription, you&apos;ll enjoy lifetime free updates.
                          We regularly enhance the script and template, and all
                          new features or improvements will be available to you
                          automatically—no extra charges.
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
                        <span>03. </span> Is this application only suitable for
                        small businesses?
                      </a>
                    </div>
                    <div style={activeIndex === 2 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          No. Our scalable job portal software supports all
                          business sizes—from startups to enterprises.
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
                        <span>04. </span> Can I offer my job portal in different
                        languages?
                      </a>
                    </div>
                    <div style={activeIndex === 3 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes. The script includes a built-in language
                          translation tool that allows you to easily switch
                          between languages or set a default one, making your
                          job portal accessible to a global audience.
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
                        <span>05. </span> Can I monetize the portal with paid
                        job listings or ads?
                      </a>
                    </div>
                    <div style={activeIndex === 4 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes. Offer paid job postings and display banner ads
                          using our job classified script features. You can
                          display custom banners to generate extra revenue.
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
                        <span>06. </span> Is technical support available if I
                        need help?
                      </a>
                    </div>
                    <div style={activeIndex === 5 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Definitely. Logicspice offers dedicated support to
                          help you with any technical questions or customization
                          needs you might have.
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
                        <span>07. </span> Will there be any installation charges
                        when I purchase the job portal script script?
                      </a>
                    </div>
                    <div style={activeIndex === 6 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          No setup fees. We offer free installation and launch
                          support with all standard plans.
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
                        <span>08. </span> Do I need any design or coding skills?
                      </a>
                    </div>
                    <div style={activeIndex === 7 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Not at all. The platform is fully no-code—customize
                          layouts, colors, and content easily through the admin
                          panel.
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
                        <span>09. </span> Is my data secure?
                      </a>
                    </div>
                    <div style={activeIndex === 8 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes. We use enterprise-grade hosting (like AWS) and
                          SSL encryption for all data. Payment details are
                          handled securely through trusted gateways like Stripe.
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
                        <span>10. </span> How do job seekers get notified of new
                        opportunities?
                      </a>
                    </div>
                    <div style={activeIndex === 9 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          They can set custom job alerts by location, category,
                          or keywords and get real-time updates by email.
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
                        <span>11. </span> Does it support multiple currencies?
                      </a>
                    </div>
                    <div style={activeIndex === 10 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          The platform works with various currencies like USD,
                          EUR, GBP, INR, CAD, AUD, and many others. Whatever
                          currency the admin chooses will show up across the
                          website and the mobile apps (Android & iOS)
                          automatically.
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
                        <span>12. </span> Do I need a Google Map API key? How do
                        I get one?
                      </a>
                    </div>
                    <div style={activeIndex === 11 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes, to show locations on your site, you&apos;ll need a
                          Google Map API key. To generate one, follow the steps
                          provided in the official {""}
                          <a
                            href="https://developers.google.com/maps/documentation/javascript/get-api-key"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Google Map API Key
                          </a>
                          guide. Please note that billing must be enabled on
                          your Google account to activate the key.
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
                        <span>13. </span> Do you offer a money-back guarantee?
                      </a>
                    </div>
                    <div style={activeIndex === 12 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes. We offer a 30-day money-back guarantee (excluding
                          setup or custom work fees).
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
                      src="/img/jobboard/applied-job.jpg"
                      alt="Job Application"
                    />
                  </div>
                  <div className="hands-proved">
                    <div className="titleof_scnew">Job Application</div>
                    <div className="pro-feat-detai">
                      Jobseekers can apply for the job directly to the company
                      or they can attach a cover letter along with their
                      application.
                    </div>
                  </div>
                </div>
                <div className="SliderMainBx">
                  <div className="feat-slide-img">
                    <Image
                      unoptimized={true}
                      width={1500}
                      height={100 / (100 / 100)}
                      src="/img/jobboard/create-job.jpg"
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
                      src="/img/jobboard/home-page.jpg"
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
                      src="/img/jobboard/myprofile.jpg"
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
                      src="/img/jobboard/manage-jobs.jpg"
                      alt="Job Management"
                    />
                  </div>
                  <div className="hands-proved">
                    <div className="titleof_scnew">Job Management</div>
                    <div className="pro-feat-detai">
                      Manage the jobs created by them making them active or
                      inactive. Check the list of job seekers who applied for
                      job.
                    </div>
                  </div>
                </div>
                <div className="SliderMainBx">
                  <div className="feat-slide-img">
                    <Image
                      unoptimized={true}
                      width={1500}
                      height={100 / (100 / 100)}
                      src="/img/jobboard/purchase-membership.jpg"
                      alt="Membership Plan"
                    />
                  </div>
                  <div className="hands-proved">
                    <div className="titleof_scnew">Membership Plan</div>
                    <div className="pro-feat-detai">
                      Employers buy membership plan which suits their
                      requirement best.They can renew or update your membership
                      plan at any time.
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
              <YouTubeLazyEmbed videoId="jZUjtbUTuHQ" />
              {/* <div ref={iframeRef}>
                <iframe
                  id="ytplayer"
                  width="100%"
                  height="312"
                  src="https://www.youtube.com/embed/jZUjtbUTuHQ?enablejsapi=1&mute=1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div> */}
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
                              width={244}
                              height={100}
                              src="/img/job-portal/udemy_new.png"
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
                              width={250}
                              height={100}
                              src="/img/job-portal/rms_new.png"
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
                              src="/img/job-portal/gigger_logo_new.png"
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

        {/* cta section */}
        <section className="jobboard_cta_section">
          <div className="flex justify-center items-center !bg-white !rounded-xl py-5">
            <div className="bg-[url('/img/job-portal/jobboard-cta-bg.png')] bg-cover bg-center h-auto md:h-64  w-full p-8 max-w-6xl rounded-xl shadow-lg w-full text-center">
              <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
                {/* Get Started */}
              </p>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                {/* Ready to Launch Your Own{" "}
                <span className="text-[#451095]">Job Board?</span> */}
                Make Finding Talent Simple and Fast
              </h2>
              <p className="text-md text-gray-800 mb-6 max-w-3xl mx-auto">
                {/* LS Jobber makes it easy to build and manage a job portal that
                delivers results. Whether you&apos;re creating a niche hiring
                site or a global job marketplace, our white label job board
                software gives you everything you need to grow and succeed. */}
                Ready to make hiring easier and faster? LS Jobber lets you create your job portal quickly—no tech skills required.

              </p>
               <p className="text-md text-gray-800 mb-6 max-w-3xl mx-auto">
                Try our free demo now and see how simple it is to post jobs, manage candidates, and grow your hiring process.
               </p>
                 <p className="text-md text-gray-800 mb-6 max-w-3xl mx-auto">
               If you have any questions, just reach out—we&apos;re here to help!

               </p>
              
              <button
                className="bg-[#451095] hover:bg-[#6c10f7] text-white font-semibold py-2 px-6 rounded-full"
                onClick={toggleModal}
              >
                {/* Launch Your Job Board Now */}
                Get started today 
              </button>
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
      </div>
    </>
  );
};

export default Page;
