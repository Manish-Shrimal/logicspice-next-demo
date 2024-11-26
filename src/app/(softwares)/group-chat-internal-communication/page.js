"use client";
import dynamic from "next/dynamic";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState, useRef } from "react";
import Contactusmodel from "@/app/Components/Contactusmodel";
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
      <div className="group_chat">
        <Navbar />
        <section className="paid-pro job-portal-banner fiverr-new-banner job-portal-bg NewJobSiteDesign JobBoardNewDesign">
          <div className="container">
            <div className="row">
              <div className="col-sm-7 col-md-7">
                <h1>Group Chat App for Effective Internal Communication</h1>
                <div className="both-left-p-sec">
                  <h2>
                    Improve collaboration, boost productivity, and simplify
                    communication within your organization.
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
                          title="Please fill the form below and get access to the live demo of Group Chat App. See how it works yourself!"
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
                      {/* <li>
                        <i class="fa fa-android" aria-hidden="true"></i>
                      </li>
                      <li>
                        <i class="fa fa-apple" aria-hidden="true"></i>
                      </li> */}
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
                    Group Chat App
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
            <p>
              Designed for businesses of all sizes, our internal communication
              software for business connects teams seamlessly, ensuring smooth
              interactions across departments. With real-time chat and
              user-friendly features, this software is your ultimate solution
              for staying organized, aligned, and efficient.
            </p>
          </div>
        </section>

        <section
          className="client-say jobBoardNewSoftware"
          style={{ backgroundColor: "#f1f1f1" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="service-market-ttd-new JobBoardServiceMarketFeatures">
                  <ul>
                    <li>Group Chat Functionality</li>
                    <li>Private Messaging</li>
                    <li>Platform Compatibility</li>
                    <li>White-Labeled Solution</li>
                    <li>Real-Time Notifications</li>
                    <li>Scalable & Secure</li>
                    <li>Searchable Chat History</li>
                    <li>One time License Fee</li>
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
                Prime Features of Our Group Chat App
              </h2>
            </div>

            <div className="tatxt_txt_job">
              Our internal communication software with group chat for business
              is thoughtfully designed to simplify team interactions and enhance
              workplace productivity. With an advanced group chat software
              application, your team can seamlessly collaborate in real time,
              ensuring no message is missed. Whether you need to share updates
              or have quick discussions, the platform allows instant
              communication that keeps everyone connected. The software also
              supports secure private or group chat text messaging, providing a
              safe space for sensitive conversations. It acts as a reliable
              real-time chat application, enabling instant file sharing,
              notifications, and updates, making daily operations smoother.
              Fully compatible across devices and browsers, our internal
              communication apps for business allow teams to stay engaged from
              anywhere.
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
                    <a>User Features</a>
                  </li>
                  <li
                    id="tab2_li"
                    className={`emplyer_app_job ddlj ${
                      buyerTab ? "active" : ""
                    }`}
                    onClick={() => handleBuyerTab()}
                  >
                    <a>Admin Panel Features </a>
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
                                  User Registration
                                  <div className="product-idea">
                                    <p>
                                      Employees can register on the platform to
                                      start communicating with their teams and
                                      colleagues.
                                    </p>
                                  </div>
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
                                  Profile Management
                                  <div className="product-idea">
                                    <p>
                                      Users can update their profiles, including
                                      name, profile picture, contact details,
                                      and password for easy identification.
                                    </p>
                                  </div>
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
                                  Direct Messaging
                                  <div className="product-idea">
                                    <p>
                                      Send private messages to colleagues for
                                      one-on-one conversations, ensuring quick
                                      and effective communication. You can also
                                      forward messages, mark them as unread,
                                      save important messages, or copy links and
                                      text for easy sharing.
                                    </p>
                                  </div>
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
                                  Team/Group Chats
                                  <div className="product-idea">
                                    <p>
                                      Create or join group chats to discuss
                                      projects, share updates, or collaborate
                                      with multiple team members in real-time.
                                      Use the @mention feature to grab specific
                                      members' attention instantly.
                                    </p>
                                  </div>
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
                                  Search Colleagues
                                  <div className="product-idea">
                                    <p>
                                      Quickly find colleagues using the search
                                      feature to connect or share updates.
                                    </p>
                                  </div>
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
                                  File Sharing
                                  <div className="product-idea">
                                    <p>
                                      Share documents, images, emojis, or other
                                      files securely within chats to streamline
                                      workflows.
                                    </p>
                                  </div>
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
                                  Team Management
                                  <div className="product-idea">
                                    <p>
                                      Easily invite new members, add them to
                                      your team, or manage team exits with
                                      seamless options to keep your projects
                                      organized
                                    </p>
                                  </div>
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
                                  Search Messages Access
                                  <div className="product-idea">
                                    <p>
                                      Easily jump to previous messages within a
                                      chat to quickly find and reply to
                                      important conversations without scrolling
                                      endlessly.
                                    </p>
                                  </div>
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
                                  Task Discussions
                                  <div className="product-idea">
                                    <p>
                                      Discuss specific tasks within the chat
                                      interface to keep conversations organized
                                      and focused.
                                    </p>
                                  </div>
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
                                  Mute Notifications
                                  <div className="product-idea">
                                    <p>
                                      Manage notifications for groups or chats
                                      to reduce distractions during focused work
                                      hours.
                                    </p>
                                  </div>
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
                                  Archive Chats
                                  <div className="product-idea">
                                    <p>
                                      Archive old or inactive conversations to
                                      keep the interface clean and organized.
                                    </p>
                                  </div>
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
                                  Status Updates
                                  <div className="product-idea">
                                    <p>
                                      Share your availability status (e.g.,
                                      available, busy, away) to keep colleagues
                                      informed.
                                    </p>
                                  </div>
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
                                  Saved Posts
                                  <div className="product-idea">
                                    <p>
                                      Save important posts or messages for quick
                                      access whenever you need them.
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
                                  User Management
                                  <div className="product-idea">
                                    <p>
                                      Add, update, or remove users from the
                                      system as needed to keep the platform
                                      secure and relevant.
                                    </p>
                                  </div>
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
                                  Group Management
                                  <div className="product-idea">
                                    <p>
                                      Create, update, or delete groups based on
                                      the company’s communication needs.
                                    </p>
                                  </div>
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
                                  Access Control
                                  <div className="product-idea">
                                    <p>
                                      Assign user roles and permissions to
                                      ensure secure access and prevent
                                      unauthorized actions.
                                    </p>
                                  </div>
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
                                  Monitor Activity
                                  <div className="product-idea">
                                    <p>
                                      Track user and group activities to
                                      maintain accountability and prevent
                                      misuse.
                                    </p>
                                  </div>
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
                                  File Control
                                  <div className="product-idea">
                                    <p>
                                      Manage the size and type of files shared
                                      on the platform to maintain system
                                      efficiency.
                                    </p>
                                  </div>
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
                                  Broadcast Messages
                                  <div className="product-idea">
                                    <p>
                                      Send company-wide announcements or
                                      important updates to all users in just a
                                      few clicks.
                                    </p>
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
                                  Chat History Logs
                                  <div className="product-idea">
                                    <p>
                                      Access and manage chat history to ensure
                                      compliance with company policies.
                                    </p>
                                  </div>
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
                                  Data Backup
                                  <div className="product-idea">
                                    <p>
                                      Regularly back up communication data to
                                      ensure no important information is lost.
                                    </p>
                                  </div>
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
                                  Integration Support
                                  <div className="product-idea">
                                    <p>
                                      Integrate the company communication
                                      software with other tools, such as project
                                      management systems for a seamless
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
                                    src="/img/jobboard/payment_history.png"
                                    alt=""
                                  />
                                </i>
                                <span>
                                  Analytics Dashboard
                                  <div className="product-idea">
                                    <p>
                                      View usage statistics and other insights
                                      to understand platform engagement and
                                      improve communication strategies.
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
                What Does Our Group Chat App Do for You?
              </h2>
              <h3 className="Haeddinh2">Simplifying Team Communication</h3>

              <p>
                Our internal communication software for business is designed to
                enhance collaboration and streamline communication within your
                organization. With a user-friendly interface and robust
                features, it enables teams to connect effortlessly, Whether for
                quick updates, group discussions, or private conversations, the
                platform makes communication effortless.
              </p>
              <h3 className="Haeddinh2">Effortless Connectivity for Teams</h3>

              <p>
                This business internal communication software makes it simple
                for teams to stay connected and organized. Whether you&apos;re
                using the best group chat apps to collaborate in real time or
                sharing important updates through private chats, the software
                ensures seamless communication across departments. Teams can
                exchange ideas, share files, and stay aligned on projects—all in
                one secure platform.
              </p>
              <h3 className="Haeddinh2">Customizable and Scalable Solution</h3>

              <p>
                Our chat app for business is adaptable to your organization’s
                needs, offering flexibility for businesses of all sizes.
                Customize the platform to reflect your company’s branding, and
                enjoy a scalable solution that grows with your team. From small
                startups to large enterprises, it ensures efficient
                communication at every level.
              </p>
              <h3 className="Haeddinh2">
                Real-Time Features for Improved Collaboration
              </h3>

              <p>
                Stay on top of tasks with instant notifications, searchable chat
                history, and responsive design. The platform is compatible with
                various devices and browsers, enabling teams to communicate from
                anywhere. Real-time chat functionality keeps your team informed
                and engaged, fostering productivity and collaboration.
              </p>
              <h3 className="Haeddinh2">Enhancing Workplace Productivity</h3>
              <p>
                Our internal communication apps for business provide a modern,
                efficient way to connect employees and simplify communication
                workflows. Whether you are managing remote teams or coordinating
                in-office projects, this company communication software is your
                all-in-one solution for enhancing workplace productivity.
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
                        title="Please fill the form below and get access to the live demo of Group Chat App . See how it works yourself!"
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
                      Latest optimizations have resulted in noticeable
                      performance enhancements.
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
                      membership plan feature, and employers will be able to
                      view the jobseeker contact details only if they have that
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
                      import the jobs in XML format with any third party URL.
                      All the job records will be imported with selection of
                      each XML parameter for corresponding values.
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
                      Search Job provided in the homepage for convenient
                      searching with a new modern layout and even guest
                      jobseekers can upload CV from the homepage itself.
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
                  V2.0 – November 03rd, 2020 – New features added and other
                  small improvements!
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
                      Mail notification will send when job is posted, deleted
                      and modified.
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
                      Recruiter &amp; Jobseeker can delete profile by himself
                      with specific reason.
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
                      <b>Framework - </b> CakePHP
                    </li>
                    <li
                      className="same aos-init aos-animate"
                      data-aos="fade-up"
                    >
                      <b>Language - </b> PHP 7 Supported, AJAX, jQuery
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
                      What I love most about this communication tool is how
                      user-friendly it is. The search feature is fantastic for
                      finding colleagues and messages quickly, and the ability
                      to forward or mark messages as unread helps me stay
                      organized. It&apos;s definitely made my work life easier!
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
                      James W., Marketing Lead
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext" id="fiveer-clone">
                      As a remote team, staying connected was always a
                      challenge. This software has made it so much easier to
                      communicate in real-time.
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
                      <span id="client-name">David R., Lead Developer</span>{" "}
                    </div>
                  </div>

                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext" id="fiveer-clone">
                      This software has been a game-changer for our internal
                      communication. The file-sharing feature is super
                      convenient, and we love being able to save and easily
                      reference important messages. Plus, the team management
                      options are simple and effective for keeping our workflow
                      smooth.
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
                      <span id="client-name">Maria T., HR Manager </span>{" "}
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
                        <span>01. </span>What is internal communication
                        software, and how does it benefit my business?
                      </a>
                    </div>
                    <div style={activeIndex === 0 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Internal communication software is a tool designed to
                          improve teamwork by enabling seamless communication
                          and task coordination. The result is faster
                          decision-making, enhanced productivity, and better
                          collaboration.
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
                        <span>02. </span> Can the software be used for both
                        group and private chats?
                      </a>
                    </div>
                    <div style={activeIndex === 1 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes, it supports both! Create group chats for team
                          discussions and use private messaging for sensitive
                          conversations.
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
                        <span>03. </span> Is the software suitable for
                        businesses of all sizes?
                      </a>
                    </div>
                    <div style={activeIndex === 2 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Absolutely! Our internal communication software for
                          business is scalable and adaptable, making it ideal
                          for startups, small businesses, and large enterprises
                          alike. It grows with your organization and supports
                          teams of any size.
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
                        <span>04. </span> Is the software compatible with mobile
                        devices & desktops?
                      </a>
                    </div>
                    <div style={activeIndex === 3 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes, our software is designed to be cross-platform and
                          responsive.
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
                        <span>05. </span> Can we customize the platform to match
                        our company branding?
                      </a>
                    </div>
                    <div style={activeIndex === 4 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes, the software offers white-labeling options that
                          allow you to customize the interface with your
                          company’s logo, colors, and branding elements.
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
                        <span>06. </span> Does the software provide real-time
                        notifications?
                      </a>
                    </div>
                    <div style={activeIndex === 5 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          Yes, our business internal communication software
                          sends instant notifications for new messages, task
                          updates, and important announcements, ensuring your
                          team never misses a beat.
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
                        <span>07. </span>Is chat history saved and secure?
                      </a>
                    </div>
                    <div style={activeIndex === 6 ? showStyle : collapseStyle}>
                      <div style={bodyStyle}>
                        <p>
                          All chat histories are saved for easy reference. With
                          encrypted messaging and secure storage, your data
                          remains protected.
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
                      title="Group Chat App"
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
        <Footer />
      </div>
    </>
  );
};

export default Page;
