"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
import "../../resposive.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";
import "../../../../public/css/font-awesome.css";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [jobportal, setJobportal] = useState(false);
  const toggleJobPortalModal = () => setJobportal(!jobportal);

  const [demoAccessModal, setDemoAccessModal] = useState(false);
  const openDemoAccessModal = () => {
    // console.log(showModal);

    setDemoAccessModal(!demoAccessModal);
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const openModal = () => {
   

    setShowModal(!showModal);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
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
  const [activeTab, setActiveTab] = useState("tab2");
  const [sellerTab, setSellerTab] = useState(true);
  const [adminTab, setAdminTab] = useState(false);

  const handleSellerTab = () => {
    setSellerTab(true);
    setAdminTab(false);
  };

  const handleAdminTab = () => {
    setSellerTab(false);
    setAdminTab(true);
  };

  const opendiv = (tab) => {
    setActiveTab(tab);
  };

  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        BaseAPI + "/product/Details/online-exam-software-solution"
      );
      // console.log(response.data.data)
      setPageData(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
    // Change the background color when expanded
    "&.Mui-expanded": {
      backgroundColor: "#dbdbdb", // You can adjust this color
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  useEffect(() => {
    getData();
  }, []);

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
      <NavBar />
      <section className="paid-pro job-portal-banner  fiverr-new-banner NewJobSiteDesign JobBoardNewDesign NewCrowdDesigns job-portal-bg onlineexam-banner-new">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-md-7">
              <h1>Online Exam Software Script</h1>
              <div className="both-left-p-sec">
                <h2>
                  Conduct all types of online exams & tests for remote
                  locations.
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
                        <Image unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/softwares-banner-img/more-info.png"
                          alt=""
                        />
                      </i>
                      <p>Limited Period Offer for First Year</p>
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
                    <button>Get Demo Access!</button>
                    {
//                       <SoftwareEnquiry
//                         modalStatus={showModal}
//                         toggle={openModal}
//                         title="Please fill the form below and get access to the live demo of Online Exam Software Solution.
// See how it work yourself!!"
//                       />

<GetDemoEnquiry
                    modalStatus={demoAccessModal}
                    toggle={openDemoAccessModal}
                    title="Please fill the form below and get access to the live demo of Online Exam Software Solution.
 See how it works yourself!"
                  />

                    }
                  </div>
                  <Link
                    className="btn fiverr-buys NewGreenBtnJob"
                    href="/buy-now/online-exam-software-solution"
                  >
                    Buy Now
                  </Link>
                </div>
                <div className="SubscriptionPrice">
                  <div className="line-border NewLineBoader">
                    <Image unoptimized={true}
                      width={100}
                      height={100}
                      alt="crowd_funding_script"
                      src="/img/jobboard/stars.png"
                    />
                    <p>26 Reviews</p>
                  </div>
                </div>
              </div>

              <div className="jocpp">
                <ul className="job-pr-icon">
                  <li>
                    <i className="fa fa-globe"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-5 col-md-5">
              <div className="por-mobile-new">
                <Image unoptimized={true}
                  width={450}
                  height={100 / (100 / 100)}
                  alt="Online_exam_Software_Solution"
                  src="/img/softwares-banner-img/onlineexam-banner-img.png"
                />
              </div>
            </div>
          </div>
          <div className="job-portal-banner-link">
            <div aria-label="breadcrumb" className="my-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/softwares">Softwares</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Online Exam Software Solution
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="job-section-top-new JobBoardSectionNew">
        <div className="container">
          <p>
            As the best online exam software company, we provide you with the
            best online exam web & mobile app solution that will serve as an
            attractive platform for the candidates to take various online tests.
            Candidates can view all exam details on their dashboard and can
            apply for it. They can see the history of all applied exams and can
            view detailed exam results and download score cards.
          </p>
        </div>
      </section>
      <section
        className="client-say WhatsaapCliets"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-market-ttd">
                <ul>
                  <li>Easy test maker online</li>
                  <li>Engaging</li>
                  <li>Responsive website (mobile friendly)</li>
                  <li>White labeled script </li>
                  <li>Highly scalable & robust</li>
                  <li>Complete Powerful Solution</li>
                  <li>Timer to perform online test</li>
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
            <h2 className="taxt_tt_job">Online Exam Software Features</h2>
          </div>

          <div className="tatxt_txt_job text-center">
            This online exam test script will help you to build online exam test
            portal where teacher or admin can automate their examination process
            smoothly. Students or user can apply for that test easily.
          </div>

          <div className="tab_bbx_job">
            <div className="tab_bbx_top_job tab_bbx_job_classified">
              <ul className="tab_listing">
                <li
                  id="tab1_li"
                  className={`online_student ddlj ${sellerTab ? "active" : ""}`}
                  onClick={() => handleSellerTab()}
                >
                  <a>Student Section</a>
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
                  <div className="costomer_tab rj" id="tab1">
                    <div className="row">
                      <div className="col-lg-4 col-md-3">
                        <div className="costomer_tab_right costomer_tab_rightleft">
                          <Image unoptimized={true}
                            width={400}
                            height={100}
                            src="/img/onlineexam/onlineexam_student.png"
                            alt="Customer"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left costomer_tab_leftright">
                          <ul>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/ragister-icon.png"
                                />
                              </i>
                              <span>
                                Securely Login
                                <div className="product-idea">
                                  <p>
                                    Student can login securely on the portal
                                    using Email Addresss or Google/LinkedIn.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_profile.png"
                                />
                              </i>
                              <span>
                                Manage Profile
                                <div className="product-idea">
                                  <p>
                                    Student can view their profile & can manage
                                    their Profile.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/view_test.png"
                                />
                              </i>
                              <span>
                                View Test
                                <div className="product-idea">
                                  <p>
                                    Student can view all test added by Admin for
                                    each subject & can apply for test.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/online_test.png"
                                />
                              </i>
                              <span>
                                Take Online Test
                                <div className="product-idea">
                                  <p>
                                    Student can take online test after login.
                                    After applying for the test Student will be
                                    able to see the instruction page & once they
                                    read all instruction they can start the
                                    test.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/applied_test.png"
                                />
                              </i>
                              <span>
                                View Applied Test
                                <div className="product-idea">
                                  <p>
                                    User can view number of applied tests along
                                    with all exam analysis details under Exam
                                    Histories Section. They can also download
                                    score card certificate.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/view_result.png"
                                />
                              </i>
                              <span>
                                View Result
                                <div className="product-idea">
                                  <p>
                                    Students will be able to view detailed exam
                                    analysis like number of marks obtained,
                                    number of attended/not attended questions,
                                    number of correct/wrong answers along with
                                    score card certificate.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/current_ans.png"
                                />
                              </i>
                              <span>
                                View Correct Answer
                                <div className="product-idea">
                                  <p>
                                    Student will be able to view correct answer
                                    after submission of the test on View Result
                                    page.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_contents.png"
                                />
                              </i>
                              <span>
                                View Announcements
                                <div className="product-idea">
                                  <p>
                                    User will be able to view announcements on
                                    the Front page of the Portal.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/find-hire-fre.png"
                                />
                              </i>
                              <span>
                                Download Certificate
                                <div className="product-idea">
                                  <p>
                                    Students can download their score card
                                    certificates of all applied exams.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/view_result.png"
                                />
                              </i>
                              <span>
                                Exam Report
                                <div className="product-idea">
                                  <p>
                                    Students will be able to view statistical
                                    report of overall exam analysis and detailed
                                    exam analysis like total number of
                                    questions, number of correct answers, wrong
                                    answers, number of attended/Non-attended
                                    questions, overall marks obtained etc.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/view_test.png"
                                />
                              </i>
                              <span>
                                View Recent Exams
                                <div className="product-idea">
                                  <p>
                                    Students can view details of recent exams
                                    given along with applicant name,their
                                    scores.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/tickets_history.png"
                                />
                              </i>
                              <span>
                                View all Exam History
                                <div className="product-idea">
                                  <p>
                                    Students can view details like Exam
                                    Name,Number of questions,Number of
                                    Right/Wrong Answers,Score and date of exam.
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
                  <div className="costomer_tab rj" id="tab3">
                    <div className="row">
                      <div className="col-lg-4 col-md-3 ">
                        <div className="costomer_tab_right costomer_tab_rightleft2">
                          <Image unoptimized={true}
                            width={400}
                            height={100}
                            src="/img/onlineexam/onlineexam_mac.png"
                            alt="Admin Panel"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-9">
                        <div className="costomer_tab_left costomer_tab_leftright2">
                          <ul>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/configuration.png"
                                />
                              </i>
                              <span>
                                Secure Login
                                <div className="product-idea">
                                  <p>
                                    Admin will be able to login securely on the
                                    portal.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
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
                                    Admin will be able to view total number of
                                    students, subjects, Test Questions, Test
                                    Papers, Test Results on their dashboard.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/configuration.png"
                                />
                              </i>
                              <span>
                                Manage Settings
                                <div className="product-idea">
                                  <p>
                                    Admin will be able to manage
                                    (add/edit/view/delete) Username, Email id,
                                    Password and can view and edit front end
                                    pages content of website.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/class_details.png"
                                />
                              </i>
                              <span>
                                Manage Students
                                <div className="product-idea">
                                  <p>
                                    Admin will be able to view list of Students
                                    & can manage(add/edit/delete) Students.
                                    Admin will be able to activate & deactivate
                                    Students profile.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/course_details.png"
                                />
                              </i>
                              <span>
                                Manage Subjects
                                <div className="product-idea">
                                  <p>
                                    Admin will be able to view list of Subjects
                                    & can manage (add/edit/delete) Subjects.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/send_question.png"
                                />
                              </i>
                              <span>
                                Manage Questions
                                <div className="product-idea">
                                  <p>
                                    Admin will be able to view list of Questions
                                    with multiple options & can
                                    manage(add/edit/delete) Questions with image
                                    and without images.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/stu_test_paper.png"
                                />
                              </i>
                              <span>
                                Manage Test Paper
                                <div className="product-idea">
                                  <p>
                                    Admin will be able to view Test Papers List
                                    and can create test papers by adding details
                                    like Title, Subject, Time Duration,
                                    Certificate Generation (Enabled/ Disabled),
                                    Negative Marking (Yes/No). Admin will be
                                    able to manage (Add/Edit/Delete) all test
                                    papers and can activate/Deactivate test
                                    papers.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/view_queries.png"
                                />
                              </i>
                              <span>
                                View Student Test Results
                                <div className="product-idea">
                                  <p>
                                    Admin will be able to view the list of
                                    students who have successfully submitted
                                    tests and can export data.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_contents.png"
                                />
                              </i>
                              <span>
                                Manage Announcements
                                <div className="product-idea">
                                  <p>
                                    Admin will be able manage(add/edit/delete)
                                    accounements which are displayed in student
                                    account at front end.{" "}
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_content.png"
                                />
                              </i>
                              <span>
                                Manage Content
                                <div className="product-idea">
                                  <p>
                                    Admin will be able to manage (View/Edit)
                                    frontend Pages.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/manage_edu.png"
                                />
                              </i>
                              <span>
                                Manage Test <br />
                                Instructions
                                <div className="product-idea">
                                  <p>
                                    Admin will be able to manage (Edit/View)
                                    Online Test Instructions.
                                  </p>
                                </div>
                              </span>
                            </li>
                            <li>
                              <i>
                                <Image unoptimized={true}
                                  width={100}
                                  height={100}
                                  alt="img"
                                  src="/img/jobboard/download_test.png"
                                />
                              </i>
                              <span>
                                Download Test Results Data
                                <div className="product-idea">
                                  <p>
                                    Admin will be able to export all Test
                                    Results data by selecting date range.{" "}
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
              What does our <span>Online Test Exam Portal Script</span> do for
              you?
            </h2>
            <p>
              LogicSpice offers Online Test Exam Portal Script to build Online
              test portal for their Students.
            </p>
            <p>
              Online Test Exam Portal is platform to keep track of
              student&apos;s capabilities and test them.
            </p>
            <p>
              Online Exam portal is essential for Colleges, Universities,
              Teachers, Professors, Employees, Partners, Technicians.
            </p>
            <p>
              It would be helpful for folks within the educational development
              of children to enhance their instructional skills.
            </p>
            <p>
              <strong>
                <i>Online Exam PHP Script</i>
              </strong>{" "}
              will be User-Friendly, Responsive, Offering several types of
              questions, Give Scorecard etc.
            </p>
            <p>
              As per the client requirement we can customise the native mobile
              application.{" "}
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
                    Unlimited Online Test Listings: List as many test postings
                    as you need without any limitations.
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
//                     <SoftwareEnquiry
//                       modalStatus={showModal}
//                       toggle={openModal}
//                       title="Please fill the form below and get access to the live demo of Online Exam Software Solution.
// See how it work yourself!"
//                     />
<GetDemoEnquiry
                    modalStatus={demoAccessModal}
                    toggle={openDemoAccessModal}
                    title="Please fill the form below and get access to the live demo of Online Exam Software Solution.
 See how it works yourself!"
                  />
                  }
                </div>
                <Link
                  className="btn fiverr-buys"
                  href="/buy-now/online-exam-software-solution"
                >
                  Buy Now
                </Link>
              </div>
              <div className="jocpp">
                <ul className="job-pr-icon">
                  <li>
                    <i className="fa fa-globe"></i>
                  </li>
                </ul>
                <div className="portel-btnbx">
                  <div className="line-border NewLineBoader">
                    <Image unoptimized={true}
                      width={100}
                      height={100}
                      src="/img/jobboard/stars.png"
                      alt=""
                      className="lazy"
                    />
                    <p>26 Reviews</p>
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
                V1.0 - May 15th, 2020 - PHP framework upgrade to Laravel and
                other major improvements!
              </p>
              <ul>
                <li>
                  <span>PHP framework upgrade to Laravel.</span>{" "}
                </li>
                <li>
                  <span>
                    Flexible Start time for Exam : Now admin have ability to
                    decide Whether all the exams would start on the same time,
                    or candidate can participate at any point of time.
                  </span>
                </li>
                <li>
                  <span>
                    Payment feature for every test paper: Every student needs to
                    purchase a test paper before participating in the exam.
                  </span>
                </li>
                <li>
                  <span>
                    Change test paper design : Test paper layout has been
                    improved.
                  </span>{" "}
                </li>
                <li>
                  <span>
                    Exam Timer in milliseconds : Students can view exam timer in
                    milliseconds also.
                  </span>
                </li>
                <li>
                  <span>
                    Time period: Students are able to view time period spent in
                    the test paper.
                  </span>
                </li>
                <li>
                  <span>
                    More SEO friendly with content keyword and description
                    management in the admin panel.
                  </span>{" "}
                </li>
                <li>
                  <span>
                    Google analytics tracking code management in the admin
                    panel.
                  </span>
                </li>
                <li>
                  <span>
                    How it works content images and title management in the
                    admin panel.
                  </span>
                </li>
                <li>
                  <span>
                    Sharing(AddThis API) tool added to share the exam details
                    over the popular social media websites.
                  </span>{" "}
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

              <a onClick={toggleInfo} className="ylogicspice">
                <i>
                  <Image unoptimized={true}
                    width={20}
                    height={100}
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
            <Image unoptimized={true}
              width={900}
              height={100}
              src="/img/onlineexam/online_test.jpg"
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
                      <Image unoptimized={true}
                        width={60}
                        height={100 / (100 / 100)}
                        src="/img/jobboard/tech_cakephp_icon.png"
                        alt="CakePHP Development"
                      />
                    </div>
                    <div className="icntechimg_nm">CakePHP</div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <Image unoptimized={true}
                        width={60}
                        height={100 / (100 / 100)}
                        src="/img/jobboard/html-5.png"
                        alt="HTML5"
                      />
                    </div>
                    <div className="icntechimg_nm">HTML5</div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <Image unoptimized={true}
                        width={60}
                        height={100 / (100 / 100)}
                        src="/img/jobboard/tech_mysql_icon.png"
                        alt="MySQL"
                      />
                    </div>
                    <div className="icntechimg_nm">MySQL</div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="icntechimg">
                      <Image unoptimized={true}
                        width={60}
                        height={100 / (100 / 100)}
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
                  <li className="same">
                    <b>Browsers - </b> Firefox 32.6+, Chrome 20.0+, Opera 30.0+,
                    Safari 5+, IE 9+
                  </li>
                  <li className="same">
                    <b>Framework - </b> Cakephp
                  </li>
                  <li className="same">
                    <b>Language - </b> PHP 5.6+, AJAX, jQuery
                  </li>
                  <li className="other">
                    <b>Design - </b> HTML 5, CSS 3, JavaScript
                  </li>
                  <li className="other">
                    <b>Database - </b> MySQL 5.5+{" "}
                  </li>
                  <li className="other">
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
                  <Image unoptimized={true}
                   width={60}
                   height={100 / (100 / 100)}
                    src="/img/jobboard/month_half_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Support</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image unoptimized={true}
                    width={60}
                    height={100 / (100 / 100)}
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Brand Removal</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image unoptimized={true}
                  width={60}
                  height={100 / (100 / 100)}
                    src="/img/jobboard/free_instal.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Installation</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image unoptimized={true}
                   width={60}
                   height={100 / (100 / 100)}
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
      <section className="su_rev_section" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className="title_main">Customer Reviews </h4>
              <div className="row">
                <div className="col-md-5">
                  <div className="outof_rating">
                    <div className="main-rait">
                      <span>
                        <i className="fa fa-star"></i>{" "}
                        <span>4.8 out of 5 stars</span>
                      </span>
                    </div>
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
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">23</div>
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
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">3</div>
                    </div>

                    <div className="review_rating_fjs">
                      <div className="star_num">
                        3 <i className="fa fa-star"></i>
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
                </div>
                <div className="col-md-7">
                  <a className="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title="Job Board Software"
                  />
                </div>
                <div className="col-md-12">
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;We needed a customized Online Exam Portal for our
                      Online Exam to manage Users. Logicspice has provided us
                      with the right online solution. Thanks!&quot;&quot;We
                      needed a customized Online Exam Portal for our Online Exam
                      to manage Users. Logicspice has provided us with the right
                      online solution. Thanks!&quot;
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half" aria-hidden="true"></i>
                      </span>
                      <span id="client-name">Sagar., India</span>{" "}
                      <span className="ConuntryFlagIcon">
                        <Image unoptimized={true}
                          width={25}
                          height={100}
                          src="/img/jobboard/india_flag_img.png"
                          alt="mobile app development in India"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;Recently I purchased the Online Exam Portal Script
                      to launch my own online Exam Software from LS(Logicspice)
                      and it worked really nice. Buying this script was worth as
                      they have provided me with full source code & I was able
                      to customize it. Highly Recommended!!!!!!&quot;
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Alen, USA{" "}
                      <span className="ConuntryFlagIcon">
                        <Image unoptimized={true}
                          width={25}
                          height={100}
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;Online Exam Portal was easy to use & useful for My
                      Educational Institute which helps us to create Test for
                      Students&quot;
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Robert, New York{" "}
                      <span className="ConuntryFlagIcon">
                        <Image unoptimized={true}
                          width={25}
                          height={100}
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>

                  <div className="customers_review_sec_row">
                    <div className="customer_review_stext">
                      &quot;LogicSpice is the best IT Service Provider. I would
                      highly recommend it for any Institutes or Organization
                      which is looking for Online Exam Portal.&quot;
                    </div>

                    <div className="who_ratset">
                      <span className="star_review_main">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </span>
                      Selina, Atlanta{" "}
                      <span className="ConuntryFlagIcon">
                        <Image unoptimized={true}
                          width={25}
                          height={100}
                          src="/img/jobboard/usa_flag_img.png"
                          alt="mobile app development in USA"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 Quick_FAQ">
              <h4 className="title_main">Quick FAQ
              </h4>
              <div className="MainFaqBx">
                {/* <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="How candidate can search for online exams ?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      Candidates can view list of all exams on their Dashboard.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Will admin be able to add test papers ?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Admin can manage (add/edit/delete) test papers along with
                      other details.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="What will be the pattern of Online Test ?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Candidate will give the online test in the Multiple Choice
                      Question(MCQ) pattern.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can candidates see Test Result ?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Yes, They can see detailed exam result along with all
                      details.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can candidates receive Certificate after passing Exam ?"
                    collapseId="flush-collapse6"
                  >
                    <p>Yes. Candidates can download Score Certificate Copy.</p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can Candidates register using any social Accounts ?"
                    collapseId="flush-collapse7"
                  >
                    <p>
                      Yes. We have provided Sign Up/Login using Google and
                      Linkedin.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can Candidate see correct Answers?"
                    collapseId="flush-collapse8"
                  >
                    <p>
                      Yes, Candidate will be able to view number of correct
                      answers and wrong answers after submitting the test.
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Can Candidate see their appeared tests?"
                    collapseId="flush-collapse9"
                  >
                    <p>
                      Yes, Candidate can see all the list of exams appeared
                      under Exam History section
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Can I update some design and functionality in application code myself?"
                    collapseId="flush-collapse10"
                  >
                    <p>
                      Yes, You will have access of the all the code, except some
                      of the core encrypted files.{" "}
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Will I be able to use it on multiple domains, after I purchase this script?"
                    collapseId="flush-collapse11"
                  >
                    <p>
                      You will be licensed to use it only for the domain, you
                      purchased for.
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Can I resell the script? Will I have rights over the script code?"
                    collapseId="flush-collapse12"
                  >
                    <p>
                      No, You can&apos;t resell the script. All rights will
                      remain with Logicspice only.
                    </p>
                  </MDBAccordionItem>
                  <MDBAccordionItem
                    headerTitle="Do you offer Money Back Guarantee?"
                    collapseId="flush-collapse13"
                  >
                    <p>
                      Yes, we offer 30 days money back guarantee to ensure
                      customer satisfaction of our softwares. If for any reason,
                      you wish to discontinue using the product, you can ask us
                      for refund. We will refund your total money except the
                      installation and configuration charges, which is USD 65 or
                      20% of application cost, whichever is greater.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Along with hosting server details, what other recommendations?"
                    collapseId="flush-collapse14"
                  >
                    <p>
                      We recommend you purchase SSL certificate along with a
                      hosting server, considering that an SSL certificate is
                      necessary for all the websites these days and it provides
                      a secure layer to the website as well.
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion> */}
                <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>How can a candidate search for online exams?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Candidates can view a list of all exams on their Dashboard.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Will admin be able to add test papers?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Admin can manage (add/edit/delete) test papers along with other details.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>What will be the pattern of the Online Test?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Candidates will take the online test in the Multiple Choice Question (MCQ) pattern.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>Can candidates see the Test Result?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, they can see detailed exam results along with all the details.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography>Can candidates receive a Certificate after passing the Exam?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, candidates can download a Score Certificate Copy.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
      >
        <AccordionSummary
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography>Can Candidates register using any social accounts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we have provided Sign Up/Login using Google and LinkedIn.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel7'}
        onChange={handleChange('panel7')}
      >
        <AccordionSummary
          aria-controls="panel7-content"
          id="panel7-header"
        >
          <Typography>Can Candidates see correct Answers?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, candidates will be able to view the number of correct and wrong answers after submitting the test.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel8'}
        onChange={handleChange('panel8')}
      >
        <AccordionSummary
          aria-controls="panel8-content"
          id="panel8-header"
        >
          <Typography>Can Candidates see their appeared tests?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, candidates can see all the exams they have appeared for under the Exam History section.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel9'}
        onChange={handleChange('panel9')}
      >
        <AccordionSummary
          aria-controls="panel9-content"
          id="panel9-header"
        >
          <Typography>Can I update some design and functionality in the application code myself?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you will have access to all the code, except some core encrypted files.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel10'}
        onChange={handleChange('panel10')}
      >
        <AccordionSummary
          aria-controls="panel10-content"
          id="panel10-header"
        >
          <Typography>Will I be able to use it on multiple domains, after I purchase this script?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You will be licensed to use it only for the domain you purchased it for.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel11'}
        onChange={handleChange('panel11')}
      >
        <AccordionSummary
          aria-controls="panel11-content"
          id="panel11-header"
        >
          <Typography>Can I resell the script? Will I have rights over the script code?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, you can&apos;t resell the script. All rights will remain with Logicspice only.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel12'}
        onChange={handleChange('panel12')}
      >
        <AccordionSummary
          aria-controls="panel12-content"
          id="panel12-header"
        >
          <Typography>Do you offer a Money Back Guarantee?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer a 30-day money-back guarantee to ensure customer satisfaction with our software. If for any reason, you wish to discontinue using the product, you can ask us for a refund. We will refund your total money except for the installation and configuration charges, which are USD 65 or 20% of the application cost, whichever is greater.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel13'}
        onChange={handleChange('panel13')}
      >
        <AccordionSummary
          aria-controls="panel13-content"
          id="panel13-header"
        >
          <Typography>Along with hosting server details, what other recommendations?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We recommend you purchase an SSL certificate along with a hosting server, considering that an SSL certificate is necessary for all websites these days, providing a secure layer to the website.
          </Typography>
        </AccordionDetails>
      </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content_area feature_inner" id="features">
        <div className="container">
          <h2 className="title_main">Online Exam Software Features</h2>
          <div id="joblboardslide">
            <Slider {...settings}>
              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/onlineexam/my_account.png"
                    alt="Student Profile"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">My Dashboard</div>
                  <div className="pro-feat-detai">
                    Students can view all exams list and can apply for it
                  </div>
                </div>
              </div>

              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/onlineexam/overall_exam.png"
                    alt="overall_exam"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">View Result</div>
                  <div className="pro-feat-detai">
                    Students can view detailed exam analysis of all appeared
                    tests.
                  </div>
                </div>
              </div>

              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/onlineexam/online_test.png"
                    alt="Online Exam"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Online Exam</div>
                  <div className="pro-feat-detai">
                    Students can start the test after reading instructions.
                    There will be timer for the exam.Students can see total
                    number of questions,attended questions,non attended
                    questions details and can save answers and submit test.
                  </div>
                </div>
              </div>

              <div className="SliderMainBx">
                <div className="feat-slide-img">
                  <Image unoptimized={true}
                    width={1075}
                    height={100}
                    src="/img/onlineexam/exam_histories.png"
                    alt="Online Exam"
                  />
                </div>
                <div className="hands-proved">
                  <div className="titleof_scnew">Exam Histories</div>
                  <div className="pro-feat-detai">
                    Students can see list of all their appeared exams and can
                    view and download score card.
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="enq-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <div className="btn btn-primary" onClick={openModal}>
                <button>Enquire Now</button>
                {
                  <SoftwareEnquiry
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Online Exam Custom App Development"
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
                  <Link href="/job-board-software" title="View Detail" target="_black">
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Job Board Software</h3>
                        <div className="other-project-logo">
                          <Image unoptimized={true}
                            width={250}
                            height={100}
                            src="/img/jobboard/job-board-logo.png"
                            alt="Job board software"
                          />
                        </div>
                        <p>
                          <span>Best white label job board software.</span>{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link href="/udemy-clone" title="View Detail" target="_black">
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Udemy Clone</h3>

                        <div className="other-project-logo">
                          <Image unoptimized={true}
                            width={150}
                            height={100}
                            src="/img/jobboard/udemy_new.png"
                            alt="Udemy Clone"
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
                  <Link href="/whatsapp-clone" title="View Detail" target="_black">
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>WhatsApp Clone App</h3>

                        <div className="other-project-logo">
                          <Image unoptimized={true}
                            width={150}
                            height={100}
                            src="/img/jobboard/ls-chat-logo.png"
                            alt="WhatsApp Clone App"
                          />
                        </div>
                        <p>
                          <span>Readymade WhatsApp Clone Script.</span>
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
            <Image unoptimized={true}
              width={50}
              height={50}
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
