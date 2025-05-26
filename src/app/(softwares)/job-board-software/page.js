"use client";
import dynamic from "next/dynamic";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import ScriptUpdatedModal from "../../Components/ScriptUpdatedModal";

import "../../(softwares)/softwares.css";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState, useRef } from "react";
import Contactusmodel from "../../Components/Contactusmodel";
import "../../../../public/css/font-awesome.css";
import "../../resposive.css";
import Whylogicspice from "../../Components/Whylogicspice";
import Reviewmodals from "../../Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";
import axios from "axios";
import BaseAPI from "../../BaseAPI/BaseAPI";
import { Button } from "@mui/material";
import TableRow from "./TableRow";

const GetDemoEnquiry = dynamic(
  () => import("../../Components/GetDemoEnquiry"),
  { ssr: false }
);
const SoftwareEnquiry = dynamic(
  () => import("../../Components/SoftwareEnquiry"),
  { ssr: false }
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-md flex flex-col items-center text-center relative group hover:bg-gradient-to-r BuildHover">
    <div className="bg-white h-full p-2 rounded-xl relative">
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
    feature: "Quick & Free Setup",
    logicspice: "Get your job board up and running in no time with a hassle-free setup process—no technical expertise required.",
    others: "Often involves complex installation steps, extra charges, or the need for developer support."
  },
  {
    feature: "Device Compatibility",
    logicspice: "Fully responsive – works perfectly on mobiles, tablets, and desktops",
    others: "May have layout or loading issues on mobile devices"
  },
  {
    feature: "User Experience",
    logicspice: "Simple and clean interface for job seekers, employers, and admins",
    others: "Complex interfaces that require training or support"
  },
  {
    feature: "Flexible Pricing Options",
    logicspice: "One-time license fee or affordable monthly plan (45 $) to suit different needs",
    others: "Usually, only offer monthly or annual recurring plans"
  },
  {
    feature: "Customizability",
    logicspice: "Highly customizable for industries, regions, and niche markets",
    others: "Limited flexibility in design or features"
  },
  {
    feature: "Jobseeker & Employer Tools",
    logicspice: "Feature-rich panels with CV builder, job alerts, video CV, and more",
    others: "Basic features with fewer job-seeker tools"
  },
  {
    feature: "Admin Control",
    logicspice: "Powerful admin dashboard with full control over users, jobs, categories & more",
    others: "Limited admin control or a difficult-to-manage backend"
  },
  {
    feature: "SEO & Marketing Ready",
    logicspice: "Built-in SEO optimization + blog, social sharing, and email alerts",
    others: "Requires third-party tools or manual setup"
  },
  {
    feature: "Custom Pages & API Access",
    logicspice: "Create SEO-optimized pages + private API for integrations",
    others: "Rarely included or requires expensive add-ons"
  },
  {
    feature: "Payment Gateway Support",
    logicspice: "Supports Stripe, PayPal & others for easy transactions",
    others: "Limited gateway options or manual setup required"
  },
  {
    feature: "Scalability",
    logicspice: "Scales smoothly as your platform grows – from startup to enterprise",
    others: "Performance drops as traffic or data increases"
  },
  {
    feature: "Support & Documentation",
    logicspice: "Dedicated support team + complete documentation",
    others: "Poor support or lack of proper user guides"
  }
];
const Page = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [activeIndex, setActiveIndex] = useState(null);
  const [open, setOpen] = useState(false);

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
  // var companies = {
  //   dots: false,
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



  const [activeTab, setActiveTab] = useState('basic');

  const basicFeatures = [
    {
      icon: "/img/jobboard/ragister-icon.png",
      title: "Jobseeker Registration",
      description: "Jobseekers can register on the Job Portal using Email Address."
    },
    {
      icon: "/img/jobboard/search_job.png",
      title: "Search Jobs",
      description: "Jobseekers can search Jobs using Keyword, Category, Location & Work Type etc. which will provide the relevant result."
    },
    {
      icon: "/img/jobboard/apply_job.png",
      title: "Apply to a Job",
      description: "Jobseekers can apply for the Jobs which are relevant to their Profile."
    },
    {
      icon: "/img/jobboard/manage_profile.png",
      title: "Manage Profile",
      description: "Jobseekers can view their profile details & can manage(add/edit/delete) their Profile."
    },
    {
      icon: "/img/jobboard/applied_job.png",
      title: "Applied List",
      description: "Jobseeker can view the list of applied jobs on the portal."
    }
  ];

  const advancedFeatures = [
    {
      icon: "/img/jobboard/manage_alert.png",
      title: "Manage Job Alerts",
      description: "Jobseekers can apply for Job Alerts & will get the Job alerts for specific Job, location & Category. Jobseekers can manage(add/edit/delete) Job alerts."
    },
    {
      icon: "/img/jobboard/save_fav.png",
      title: "Save Favorite Jobs",
      description: "Jobseekers can save the Job as Favorite and can apply in future or soon."
    },
    {
      icon: "/img/jobboard/share_job.png",
      title: "Share a Job",
      description: "Jobseekers can share Job Tumblr, Facebook, Twitter, Print, Pinterest, Gmail, Google+ etc."
    },
    {
      icon: "/img/jobboard/manage_edu.png",
      title: "Manage Education",
      description: "Jobseekers can view their Education details & can manage(add/edit/delete) the Education."
    },
    {
      icon: "/img/jobboard/manage_exp.png",
      title: "Manage Experience",
      description: "Jobseekers can view all experience details which they have added in the profile & can manage(add/edit/delete) Experience."
    },
    {
      icon: "/img/jobboard/genrate_cv.png",
      title: "Generate a CV",
      description: "Jobseekers can create CV by selecting the format & adding the fields which are mandatory for creating CV. Jobseekers can update the CV as per their requirement."
    },
    {
      icon: "/img/jobboard/jobs_by.png",
      title: "Jobs by Industry, Functions, City",
      description: "Jobseekers can search for Jobs using Specific Industry, Specific Functions & Specific City."
    },
    {
      icon: "/img/jobboard/approve_tickets.png",
      title: "Declaration Statement",
      description: "Jobseeker need to select a declaration statement while applying for jobs."
    },
    {
      icon: "/img/jobboard/manage_blog.png",
      title: "Professional Registration",
      description: "Jobseeker need to fill all the professional descriptions."
    },
    {
      icon: "/img/jobboard/send_mail.png",
      title: "Mail Communication",
      description: "Jobseekers can communicate with employers through email."
    },
    {
      icon: "/img/jobboard/tickets_history.png",
      title: "Mail History",
      description: "Jobseekers can manage mail history of custom mail communication."
    },
    {
      icon: "/img/jobboard/deletes_acc.png",
      title: "Delete Account",
      description: "Jobseekers can delete accounts by entering the reason for account deletion."
    },
    {
      icon: "/img/jobboard/upload-video.png",
      title: "Upload Video CV",
      description: "Jobseekers can upload their video CV and employers can view it in their jobseeker profile."
    },
    {
      icon: "/img/jobboard/categories-auto.png",
      title: "Membership Plan",
      description: "Jobseekers can purchase the Membership Plan(Free/paid) as per their requirement which is relevant to them."
    },
    {
      icon: "/img/jobboard/simple_application.png",
      title: "Email Notification",
      description: "Jobseeker will receive email notifications for the Job Alerts and for some important features."
    }
  ];


  return (
    <>
      <div className="NewJobBoardDesign">
        <Navbar />
        <section className="paid-pro job-portal-banner fiverr-new-banner job-portal-bg NewJobSiteDesign JobBoardNewDesign JobBoardPageNew">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 col-md-7">
                <h1 className="!mt-[10px]">
                  LS Jobber - White Label Job Board Software
                </h1>
                <div className="both-left-p-sec">
                  <h2>
                    Launch your custom job board with no technical skills
                    required.{" "}
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
                        {/* <i className="fa fa-globe" aria-hidden="true"></i> */}
                        <Image 
                          unoptimized={true}
                          width={30}
                          height={30}
                          src="/img/jobboard/Web.png"
                          alt="Globe Icon"
                        />
                      </li>
                      <li>
                        {/* <i class="fa fa-android" aria-hidden="true"></i> */}
                        <Image 
                          unoptimized={true}
                          width={30}
                          height={30}
                          src="/img/jobboard/Android.png"
                          alt="Globe Icon"
                        />
                      </li>
                      <li>
                        {/* <i class="fa fa-apple" aria-hidden="true"></i> */}
                        <Image 
                          unoptimized={true}
                          width={30}
                          height={30}
                          src="/img/jobboard/Apple.png"
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
                  src="/img/jobboard/new-img-jobboard.png"
                  alt="Job_Board_Software"
                  width={350}
                  height={100}
                  sizes="(max-width: 768px) 100vw, 350px"
                  priority
                  placeholder="blur" // Uses a low-quality preview while loading
                  fetchPriority="high" // Ensures it loads early
                  loading="eager" // Forces immediate loading
                  blurDataURL="/img/jobboard/new-img-jobboard.png"
                  style={{ objectFit: "cover" }} // Prevents layout shifts
                />
              </div> */}

                <div className="por-mobile-new">
                  <Image
                    src="/img/jobboard/jobboardNewImgs.png"
                    alt="Job Board Software"
                    width={490} // Increased resolution 
                    height={430} // Adjusted to maintain aspect ratio
                    sizes="(max-width: 768px) 100vw, 700px" // Ensures correct scaling on mobile
                    priority
                    placeholder="blur"
                    fetchPriority="high"
                    loading="eager"
                    blurDataURL="/img/jobboard/jobboardNewImgs.png"
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

            <div className="flex flex-col items-center pt-12 pb-0">
              <h1 className="w-full text-left text-4xl font-bold text-gray-800 mb-8">
                Build a Powerful Job Board in Minutes
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mb-8">
                <FeatureCard
                  icon="/img/jobboard/launch-fast-icon.png"
                  title="Launch Fast"
                  description="Get your job board live in just a few minutes"
                />
                <FeatureCard
                  icon="/img/jobboard/fully-customizable-icon.png"
                  title="Fully Customizable"
                  description="Tailor the platform to your brand, your goals"
                />
                <FeatureCard
                  icon="/img/jobboard/white-labeled-icon.png"
                  title="White-Labeled"
                  description="Your branding, your logos, no third-party"
                />
                <FeatureCard
                  icon="/img/jobboard/scalable-and-flexible-icon.png"
                  title="Scalable & Flexible"
                  description="Perfect for both niche and large-scale job markets"
                />
                <FeatureCard
                  icon="/img/jobboard/zero-maintainence-icon.png"
                  title="Zero Maintenance"
                  description="We handle the backend so you can focus on growth"
                />
              </div>

              <div className="text-left">
                <p className="text-lg text-gray-600 mb-4">
                  <span className="font-semibold">LS Jobber</span> is the
                  fastest and most reliable way to launch your own classified
                  for job postings. Designed for businesses, recruiters, and
                  agencies, it gives you everything you need to create a fully
                  branded, feature-rich hiring portal—
                  <em>without writing a single line of code.</em>
                </p>
                <p className="text-gray-600">
                  Whether you&apos;re building for a niche industry or a broader
                  market, LS Jobber provides a ready-to-use solution that works.
                  From job posting and job search to resume uploads (including
                  video CVs), it delivers a seamless experience for both
                  employers and job seekers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="client-say jobBoardNewSoftware"
          style={{
            backgroundImage:
              "url(/img/jobboard/youtube-background-jobboard.png)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 job-video">
                <div ref={iframeRef}>
                  {inView && (
                    <iframe
                      className="!rounded-xl"
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
                <div className="job-board-features">
                  <ul>
                    <li className="!text-white">Post Unlimited Jobs</li>
                    <li className="!text-white">
                      Responsive &amp; SEO Friendly
                    </li>
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="job_portal_area">
          <div className="container">
            {/* <div className="job_or_title">
            <h2 className="taxt_tt_job">Prime Features of Our LS Jobber</h2>
          </div> */}
            <div className="job_or_title">
              <h2 className="core-featues-heading">
                Core Features of LS Jobber – Your Complete Job Board Solution
              </h2>
            </div>
            {/* <div className="tatxt_txt_job">
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
          </div> */}
            <div className="tatxt_txt_job space-y-4 text-gray-800 text-left leading-relaxed">
              <p>
                Built with a robust PHP and React framework,{" "}
                <strong>LS Jobber</strong> delivers the power and flexibility
                needed to run a modern hiring platform. It offers a complete
                toolkit for businesses, recruiters, and staffing agencies who
                want to manage the hiring process effectively.
              </p>

              <ul className="list-disc pl-4 space-y-2 core-feature-left-border">
                <li>
                  <strong>Dynamic Job Listings:</strong> Employers can post
                  openings with detailed descriptions and custom criteria.
                </li>
                <li>
                  <strong>Smart Candidate Tools:</strong> Job seekers can easily
                  search, filter, and apply based on skills, location, and more.
                </li>
                <li>
                  <strong>Modern Dashboards:</strong> User-friendly panels for
                  employers and admins to manage postings, applications, and
                  candidate pipelines.
                </li>
                <li>
                  <strong>Advanced Admin Controls:</strong> Effortlessly manage
                  users, categories, memberships, and payment settings, all from
                  one centralized place.
                </li>
                <li>
                  <strong>Bulk Posting & Scalability:</strong> Handle
                  high-volume job publishing with ease, ideal for fast-growing
                  hiring needs.
                </li>
              </ul>

              <p>
                Whether you&apos;re looking to build a CareerBuilder-style clone, a
                Naukri-like experience, or a completely custom hiring portal,{" "}
                <strong>LS Jobber</strong> offers the structure, speed, and
                flexibility you need to succeed.
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
                    <a className={` ${
                      sellerTab ? "JobBoardJobseekerNewtabOpen" : ""
                    }`}>Jobseeker App Features </a>
                  </li>
                  <li
                    id="tab2_li"
                    className={`emplyer_app_job ddlj ${
                      buyerTab ? "active" : ""
                    }`}
                    onClick={() => handleBuyerTab()}
                  >
                    <a className={` ${
                      buyerTab ? "JobBoardEmployerNewtabOpen" : ""
                    }`}>Employer App Features </a>
                  </li>
                  <li
                    id="tab3_li"
                    className={`admin_app_job ddlj ${adminTab ? "active" : ""}`}
                    onClick={() => handleAdminTab()}
                  >
                    <a className={` ${
                      adminTab ? "JobBoardAdminNewtabOpen" : ""
                    }`}>Admin Panel</a>
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
                              src="/img/jobboard/jobseeker-app-feature.png"
                              alt="Jobseeker App Feature"
                            />
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-9">
                          <div className="costomer_tab_left costomer_tab_leftright">
                            <ul>
                              <p className="">Basic Jobseeker App Features:</p>
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
                                      Jobseekers can save the Job as Favorite
                                      and can apply in future or soon.
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
                                      Jobseekers can apply for the Jobs which
                                      are relevant to their Profile.{" "}
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
                                      Jobseeker can view the list of applied
                                      jobs on the portal.
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
                                      Jobseekers can view their Education
                                      details &amp; can manage(add/edit/delete)
                                      the Education.
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
                                      Specific Industry, Specific Functions
                                      &amp; Specific City.
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
                                      Jobseeker need to fill all the
                                      professional descriptions.
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
                                      Jobseekers can manage mail history of
                                      custom mail communication.
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

{/* <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-4 bg-white rounded-lg shadow p-1">
              <button
                className={`px-6 py-2 text-lg font-semibold rounded-md transition-colors duration-300 ${activeTab === 'basic' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveTab('basic')}
              >
                Basic Features
              </button>
              <button
                className={`px-6 py-2 text-lg font-semibold rounded-md transition-colors duration-300 ${activeTab === 'advanced' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                onClick={() => setActiveTab('advanced')}
              >
                Advanced Features
              </button>
            </div>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === 'basic' ? basicFeatures : advancedFeatures).map((feature, index) => (
              <li key={index} className="flex items-start p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                <i className="JobBoardImg mr-4">
                  <img
                    width={100}
                    height={100}
                    className="lazy"
                    src={feature.icon}
                    alt="Jobseeker App Feature"
                  />
                </i>
                <span>
                  <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                  <div className="product-idea">
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </span>
              </li>
            ))}
          </ul>
        </div> */}
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
                                      Favorites who is relevant to the Job Post
                                      or requirement.
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
                                      Name &amp; Contact Number, Company
                                      Website, Skills, Designation, Location,
                                      Experience, Annual salary, Company Logo
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
                                    src="/img/jobboard/manage_job.png"
                                    alt=""
                                  />
                                </i>
                                <span>
                                  Manage Jobs
                                  <div className="product-idea">
                                    <p>
                                      Employers can view the list of Created
                                      Jobs &amp; can manage(add/edit/delete)
                                      Jobs.
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
                                      manage(update) Profile. Employers can
                                      change passwords &amp; logos.
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
                                      Employer can view Profile of Jobseekers
                                      who have shortlisted or want to Hire.
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
                                      According to the purchased plan invoice
                                      will be generated &amp; employer can
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
                                      Employers can communicate with jobseekers
                                      by using the mail.
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
                                      Admin can view dashboard which will
                                      display the total number of counts for
                                      Seller, Buyer, Gig orders etc.
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
                                      Admin can view list of Users(Seller/Buyer)
                                      & can manage(add/edit/delete) Users. Admin
                                      can activate/deactivate Users.
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
                                      Admin can view list of Sub-categories &
                                      can manage(view/add/edit/delete)
                                      Sub-categories. Admin can
                                      activate/deactivate Sub-categories.
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
                                      Admin can view the list of Reviews &
                                      Ratings Seller & Buyer has received.
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
        {/* <section className="job_product_page_header_in job_board_software_lsjobber_do">
        <div className="container">
          <div className="whateissuprt">
            <h2 className="headhs">What does our LS Jobber do for you?</h2>
            <h3 className="Haeddinh2">
              Build Your Own Branded Job Portal — No Coding Needed
            </h3>

            
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                <strong>LS Jobber</strong> offers an efficient solution to
                create a full-featured job portal. Whether you’re a startup,
                recruitment firm, or an entrepreneur, our platform eliminates
                technical barriers and provides you with a secure, responsive
                system that’s ready for action.
              </p>

              <ul className="list-none pl-0 space-y-2 text-left md:flex flex-col justify-center items-center">
                <li>
                  ✅ <strong>Mobile-Friendly & Responsive</strong>
                </li>
                <li>
                  ✅ <strong>Custom Branding & Domain Setup</strong>
                </li>
                <li>
                  ✅{" "}
                  <strong>Source Code Access for Deeper Customization</strong>
                </li>
              </ul>

              <p>
                Use our pre-built script to build and scale your platform as you
                grow. It’s a great fit for anyone looking to launch the best
                white label job board, without sacrificing control or
                flexibility.
              </p>

              <p>
                Our exceptional job board advertising software doesn’t just stop
                at facilitating connections; it empowers you to craft your own
                recruitment portal. This ready-to-deploy script,{" "}
                <strong>
                  <i>secure and responsive</i>
                </strong>
                , provides dedicated dashboards for administrators, employers,
                and job seekers.
              </p>

              <p>
                The setup process is a breeze, requiring zero coding
                know-how—our expert technical team ensures a seamless setup for
                you. Effortlessly launch your own job board advertising website
                in record time with our ready-to-use Job Board Software Script.
              </p>
            </div>

            <h3 className="Haeddinh2">A Seamless Experience for All Users</h3>

         
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                <strong>For Job Seekers:</strong> Build a profile, generate
                resumes, explore listings, and apply instantly. Save jobs, share
                them, or upload video CVs for a standout presence.
              </p>

              <p>
                <strong>For Employers:</strong> Post unlimited listings, manage
                applications, communicate with candidates, and oversee
                membership and billing, all in one dashboard.
              </p>
            </div>

            <h3 className="Haeddinh2">Complete Control with Admin Dashboard</h3>

         
            <p>
              The powerful admin panel puts you in charge of everything—from
              user accounts and job listings to payment gateways and content
              management. It's intuitive, secure, and designed to handle complex
              workflows with ease. Perfect for those needing advanced tools
              without the steep learning curve typical of enterprise platforms.
            </p>
            <h3 className="Haeddinh2">Global Reach, Local Impact</h3>

           
            <p>
              Whether you're building a regional job portal or an international
              job marketplace, LS Jobber is designed for global success. Our
              clients span across the UK, USA, India, Europe, and beyond—making
              LS Jobber a trusted choice in both local and international hiring
              markets.
            </p>
          </div>
        </div>
      </section> */}

        {/* New section for what does LS Jobber do for you */}
        <section className="job_board_software_lsjobber_do">
          <div className="job_board_software_lsjobber_do_bg"></div>
          <div className="container">
            <div className="heading_box">
              <h2 className="do_for_you_header">
                What does our LS Jobber do for you?
              </h2>
            </div>

            <div className="do_for_you_box">
              <h3 className="do_for_you_box_heading">
                Build Your Own Branded Job Portal — No Coding Needed
              </h3>
              <p>
                LS Jobber offers an efficient solution to create a full-featured
                job portal. Whether you&apos;re a startup, recruitment firm, or an
                entrepreneur, our platform eliminates technical barriers and
                provides you with a secure, responsive system that&apos;s ready for
                action.
              </p>
              <div className="do_for_you_box_list">
                <div className="do_for_you_box_list_item">
                  <Image
                    src="/img/jobboard/jobboard_do_for_you_image1.png"
                    alt="tick"
                    width={50}
                    height={50}
                  />
                  <span>Mobile-Friendly & Responsive</span>
                </div>
                <div className="do_for_you_box_list_item">
                  <Image
                    src="/img/jobboard/jobboard_do_for_you_image2.png"
                    alt="tick"
                    width={50}
                    height={50}
                  />
                  <span>Custom Branding & Domain Setup</span>
                </div>
                <div className="do_for_you_box_list_item">
                  <Image
                    src="/img/jobboard/jobboard_do_for_you_image3.png"
                    alt="tick"
                    width={50}
                    height={50}
                  />
                  <span>Source Code Access for Deeper Customization</span>
                </div>
              </div>
              <p className="do_for_you_box_text">
                Use our pre-built script to build and scale your platform as you
                grow. It&apos;s a great fit for anyone looking to launch the best
                white label job board, without sacrificing control or
                flexibility.
              </p>
              <p className="do_for_you_box_text">
                Our exceptional job board advertising software doesn&apos;t just stop
                at facilitating connections; it empowers you to craft your own
                recruitment portal. This ready-to-deploy script, secure and
                responsive, provides dedicated dashboards for administrators,
                employers, and job seekers.
              </p>
              <p className="do_for_you_box_text">
                The setup process is a breeze, requiring zero coding
                know-how—our expert technical team ensures a seamless setup for
                you. Effortlessly launch your own job board advertising website
                in record time with our ready-to-use Job Board Software Script.
              </p>
              <Image
                src="/img/jobboard/search 1.png"
                className="do_for_you_box_search_image"
                alt="job board software"
                width={120}
                height={400}
                unoptimized={true}
              />
            </div>

            <div className="do_for_you_info">
              <div className="do_for_you_info_box">
                <div className="do_for_you_left">
                  <h4 className="do_for_you_left_heading">
                    A Seamless Experience for All Users
                  </h4>
                  <ul className="do_for_you_left_list">
                    <li>
                      <strong>For Job Seekers:</strong> Build a profile,
                      generate resumes, explore listings, and apply instantly.
                      Save jobs, share them, or upload video CVs for a standout
                      presence.
                    </li>
                    <li>
                      <strong>For Employers:</strong> Post unlimited listings,
                      manage applications, communicate with candidates, and
                      oversee membership and billing, all in one dashboard.
                    </li>
                  </ul>
                </div>

                <div className="do_for_you_right">
                  <Image
                    src="/img/jobboard/do_for_you_info_image1.png"
                    alt="tick"
                    width={500}
                    height={100}
                    className="do_for_you_info_image"
                  />
                </div>
              </div>

              <div className="do_for_you_info_box">
                <div className="do_for_you_left">
                  <Image
                    src="/img/jobboard/do_for_you_info_image2.png"
                    alt="tick"
                    width={500}
                    height={100}
                    className="do_for_you_info_image"
                  />
                </div>

                <div className="do_for_you_right">
                  <h4 className="do_for_you_left_heading">
                    Complete Control with Admin Dashboard
                  </h4>
                  <p className="do_for_you_left_text">
                    The powerful admin panel puts you in charge of
                    everything—from user accounts and job listings to payment
                    gateways and content management. It&apos;s intuitive, secure, and
                    designed to handle complex workflows with ease. Perfect for
                    those needing advanced tools without the steep learning
                    curve typical of enterprise platforms.
                  </p>
                </div>
              </div>

              <div className="do_for_you_info_box">
                <div className="do_for_you_left">
                  <h4 className="do_for_you_left_heading">
                    Global Reach, Local Impact
                  </h4>
                  <p className="do_for_you_left_text">
                    Whether you&apos;re building a regional job portal or an
                    international job marketplace, LS Jobber is designed for
                    global success. Our clients span across the UK, USA, India,
                    Europe, and beyond—making LS Jobber a trusted choice in both
                    local and international hiring markets.
                  </p>
                </div>

                <div className="do_for_you_right">
                  <Image
                    src="/img/jobboard/do_for_you_info_image3.png"
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
              <h3 className="comparison_heading">Logicspice Job Board Software (LS Jobber) vs. Other Job Board Solutions</h3>
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
                        <h3>Other Job Board Solutions</h3>
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
                <li>Other Job Board Solutions</li>
                {tableData.map((row, index) => (
                  <li key={index}>{row.others}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
          </div>
        </section>

        {/* <section className="SubscriptionModel" id="subscriptionmodel">
          <div className="SubscriptionModelBx ">
            <div className="text-center">
              <h2 className="taxt_tt_job ">Why People Love LS Jobber?</h2>
            </div>
            <br />

            <ul>
              <li>
                <span>
                  <strong>Easy to Set Up and Customize</strong>
                  <br />
                  You can launch your job portal quickly and make changes
                  anytime since you get full access to the source code.
                </span>
              </li>
              <li>
                <span>
                  <strong>Works Great on Any Device</strong>
                  <br />
                  Whether someone&apos;s using a phone, tablet, or computer, the
                  platform looks good and runs smoothly.
                </span>
              </li>
              <li>
                <span>
                  <strong>Simple for Everyone to Use</strong>
                  <br />
                  The interface is clean and straightforward, so employers, job
                  seekers, and admins won&apos;t get confused.
                </span>
              </li>
              <li>
                <span>
                  <strong>Budget-Friendly and Grows with You</strong>
                  <br />
                  It&apos;s affordable for small businesses and startups, but
                  also flexible enough to expand as your site gets bigger.
                </span>
              </li>
              <li>
                <span>
                  <strong>Fits Any Type of Job Board</strong>
                  <br />
                  Whether you&apos;re building a general job portal or one for a
                  specific industry or region, LS Jobber can handle it.
                </span>
              </li>
            </ul>
          </div>
        </section> */}
        <section className="SubscriptionModel" id="subscriptionmodel">
          <div className="container">
            <div className="job_or_title">
              <h2 className="taxt_tt_job">Subscription Model</h2>
              <br />
              <div className="SubscriptionModelBx">
                <div className="SubscriptionModelRight">
                  <Image
                    className="SubscriptionModelRightImg"
                    src="/img/jobboard/portrait-beautiful 1.png"
                    alt="Subscription"
                    width={250}
                    height={200}
                    unoptimized={true}
                  />
                </div>
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
                <div className="SubscriptionModelLeft">
                  <Image
                    className="SubscriptionModelLeftImg"
                    src="/img/jobboard/full-length-portrait 1.png"
                    alt="Subscription"
                    width={200}
                    height={150}
                    unoptimized={true}
                  />
                </div>
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
                      Timely Upgrades: Seamlessly transition to upgraded
                      versions at regular intervals, all at no extra cost.
                    </span>
                  </li>
                  <li>
                    <span>
                      <strong>Zero Setup Fees</strong>:- Customers can easily
                      get started with the{" "}
                      <strong>Search Engine Friendly</strong> software as there
                      are no additional charges for setup and installation,
                      ensuring a smooth onboarding experience.
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
                      through your dedicated developer accounts on Google Play
                      and the Apple App Store.
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
        <section className="job_portal_area script-update-bg" style={{ height: "270px" }}>
          <div className="container">
        
          
                <div className="job_or_title">
                  <h2 className="taxt_tt_job">Script Update History</h2>
                  <br />

                  <ScriptUpdatedModal />

                
              

                
                </div>
             
              <div className="ScriptupdateImg">
               <Image
                  unoptimized={true}
                  width={220}
                  height={200}
                  src="/img/jobboard/Update-History 2.png"
                  alt="img"
                />
              </div>
               
           
            
          </div>
        </section>

        {/* <section className="job_portal_area job_portal_area_food">
        <div className="container">
          <div className="best-partner-left-img">
            <Image
              unoptimized={true}
              width={200}
              height={200}
              src="/img/jobboard/best-partner-company.png"
              alt="img"
            />
          </div>
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
                  <i className="fa fa-cogs" aria-hidden="true"></i>
                  <span className="">How It Works</span>
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
        </div>
      </section> */}

        <section className="job_portal_area job_portal_area_food" style={{ height: "330px"}}>
          <div className="best-partner-left-img">
                  <Image
                    unoptimized={true}
                    width={350}
                    height={200}
                    src="/img/jobboard/best-partner-company.png"
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
                          src="/img/jobboard/best_partner_image1.png"
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
                          src="/img/jobboard/best_partner_image2.png"
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
                          src="/img/jobboard/best_partner_image3.png"
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
                          src="/img/jobboard/tech_reactjs_icon.png"
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
                          src="/img/jobboard/LaravelLogo.png"
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
                  </li> */}

                    <li data-aos="fade-up">
                      <div className="icntechimg">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/jobboard/html-5.png"
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
                          src="/img/jobboard/tech_mysql_icon.png"
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
                          src="/img/jobboard/tech_apache_icon.png"
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
                      job-site. This was an easy task because of
                      logicspice&apos;s free installation and support. Keep up
                      the good work. I will be back for more in the future.
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
                      efforts and support while installing the script. Your
                      prompt service regarding a few minor issues was superb
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
                      Recently I bought this script from logicspice and it
                      worked really nice, it helped my business to gain more
                      efficiency. I recommend for all whom looking for a job
                      board script, it&apos;s really nice.
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
                </div> */}
                  <div className="outof_rating">
                    {[
                      { stars: 5, value: 100, count: 206 },
                      { stars: 4, value: 30, count: 13 },
                      { stars: 0, value: 0, count: 0 },
                      { stars: 2, value: 0, count: 0 },
                      { stars: 1, value: 0, count: 0 },
                    ].map((rating, index) => (
                      <div key={index} className="review_rating_fjs">
                        <div className="star_num">
                          {rating.stars} <i className="fa fa-star"></i>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-danger progress-bar-striped"
                            role="progressbar"
                            aria-label={`Rating ${rating.stars} stars progress`}
                            aria-valuenow={rating.value}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: `${rating.value}%` }}
                          ></div>
                        </div>
                        <div className="people_star_num">{rating.count}</div>
                      </div>
                    ))}
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
                        <span>01. </span> Can a Jobseeker upload his CV to apply
                        for job?
                      </a>
                    </div>
                    <div style={activeIndex === 0 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          No. The information about the jobseeker will go from
                          his profile to the employer that he is applying the
                          job for.
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
                          Yes. Once the job seeker creates his CV, he can
                          download the same in a PDF format.
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
                          information to make it live has been given. If you
                          want customizations, then the time taken to implement
                          your Job portal depends on the level of customization
                          and data migration.
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
                          according to their set criteria. They can add alerts
                          by providing the information like designation of job
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
                          can ask us for a refund. We will refund your total
                          money except for the installation and configuration
                          charges, which is USD 65 or 20% of the application
                          cost, whichever is greater. Any cost of customization
                          will not be refunded.
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
                        <span>12. </span> Do I need to provide Google map API
                        key? If yes, how to generate Google map API key?
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
                        <span>13. </span> Along with hosting server details,
                        what other recommendations?
                      </a>
                    </div>
                    <div style={activeIndex === 12 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          We recommend you purchase an SSL certificate along
                          with a hosting server, considering that an SSL
                          certificate is necessary for all websites these days
                          and it provides a secure layer to the website as well.
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
            <div
              className="JobBoardVideoBottom JobBoardbxVideoBottom"
              ref={secondVideoRef}
            >
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

        {/* cta section */}
        <section className="jobboard_cta_section">
          <div className="flex justify-center items-center !bg-white !rounded-xl py-5">
            <div className="bg-[url('/img/jobboard/jobboard-cta-bg.png')] bg-cover bg-center h-64 w-full p-8 max-w-6xl rounded-xl shadow-lg w-full text-center">
              <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
                {/* Get Started */}
              </p>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                Ready to Launch Your Own{" "}
                <span className="text-[#451095]">Job Board?</span>
              </h1>
              <p className="text-md text-gray-800 mb-6 max-w-3xl mx-auto">
                LS Jobber makes it easy to build and manage a job portal that
                delivers results. Whether you're creating a niche hiring site or
                a global job marketplace, our white label job board software
                gives you everything you need to grow and succeed.
              </p>
              <button
                className="bg-[#451095] hover:bg-[#6c10f7] text-white font-semibold py-2 px-6 rounded-full"
                onClick={toggleModal}
              >
                Contact Our Team
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
