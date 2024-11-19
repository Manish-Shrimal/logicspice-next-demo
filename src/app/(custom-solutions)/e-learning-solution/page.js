"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(custom-solutions)/customsolutions.css";
import Image from "next/image";
import Link from "next/link";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Customsolutiontabs from "@/app/Components/Customsolutiontabs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Support from "@/app/Components/Support";
import { Accordion, Card, Button } from "react-bootstrap";
import { Collapse } from "react-bootstrap";


import {
  MDBAccordion,
  MDBAccordionItem,
  MDBModal,
  MDBModalBody,
} from "mdb-react-ui-kit";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [sellerTab, setSellerTab] = useState(true);
  const [buyerTab, setBuyerTab] = useState(false);

  const openModal = () => {

    setShowModal(!showModal);
  };

  const handleSellerTab = () => {
    setSellerTab(true);
    setBuyerTab(false);
  };
  const handleBuyerTab = () => {
    setSellerTab(false);
    setBuyerTab(true);
  };
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key); // Toggle the accordion item
  };

  const accordionItems = [
    {
      key: "collapseOne",
      title: "How can students search for teachers that they want to book class with?",
      content: "Students can search for the Teachers by following criterias : Keyword, Category(will have an option to search classes through selecting subjects defined by the admin over the website) and Location(Zip code).",
    },
    {
      key: "collapseTwo",
      title: "How many days will it take to implement the customization?",
      content:
        "Time taken to implement your E-Learning System depends on the level of customization and data migration. The time frame generally ranges 5-6 weeks.",
    },
    {
      key: "collapseThree",
      title:
        "How can a student contact a teacher?",
      content:
        "Students can send messages to the teacher if they have any problems regarding the information provided by them.",
    },
    {
      key: "collapseFour",
      title: "Can a student rate a teacher even if they havent taken a class from them?",
      content:
        "Yes. Students once logged in can give a rating to the teachers on the website.",
    },
    {
      key: "collapseFive",
      title: "How can people search for surveys that they might want to take?",
      content:
        "People can search for the surveys by selecting the categories in which they want to take them or by entering the keywords related to their search.",
    },
    {
      key: "collapseSix",
      title: "Does teacher need to add courses to the website?",
      content:
        "The teacher need not add courses to the website. They can just enter the subjects they teach and experience they have in teaching them.",
    },
    {
      key: "collapseSeven",
      title:
        "How can teachers manage the booking they have received?",
      content:
        "Teachers will be able to see the list of the booking they have received. Teachers will be able to select the respective booking and then can see the respective details.",
    },
  ];

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

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Navbar />
      <div className="top-head-custom E-learning-System">
        <div className="container">
          <div className="col-md-8">
            <div className="head-enquiry">
              <h1>Custom Elearning System Development</h1>
              <p>Custom Elearning System Development</p>
              <p className="sml_txt">
                Rapid customization, because of our team&apos;s past experience
                over similar solutions.
              </p>

              <div className="btn btn-primary" onClick={openModal}>
                <a>Enquire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Custom Elearning System Development"
                  />
                }
              </div>
              <Link
                href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
                target="_blank"
              >
                <div className="WhatsappIcon WhatsappIconCustom">
                  <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                    <div className="coccoc-alo-ph-circle"></div>
                    <div className="coccoc-alo-ph-circle-fill"></div>
                    <div className="coccoc-alo-ph-img-circle"></div>
                  </div>
                </div>
              </Link>
            </div>
            <ul className="head-feature">
              <li>Highly Recommendable</li>
              <li>Powerful Built-in Solution</li>
              <li>Long Term Development Solution</li>
              <li>Convert Your Business Idea into a Life</li>
            </ul>
            <div aria-label="breadcrumb" className="my-breadcrumb ">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/custom-solutions">Custom Solutions</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Elearning System
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="BFC_logic">
        <div className="container">
          <h2>Why logicspice is Best For Custom App/Web Development?</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="top-box-BFC">
                <Image
                  unoptimized={true}
                  height={100}
                  width={100}
                  src="/img/customsolutions/capp1.png"
                  alt="img1"
                />
                <h3>Ready to Go for Development</h3>
                <p>
                  We have a team of dedicated developers who are ready to work
                  on your requirements for app or web development. Our solution
                  is robust &amp; highly scalable.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="top-box-BFC">
                <Image
                  unoptimized={true}
                  height={100}
                  width={100}
                  src="/img/customsolutions/capp2.png"
                  alt="img2"
                />
                <h3>Support &amp; Maintenance</h3>
                <p>
                  We support our customers from business analysis, designing,
                  development, maintenance. Our team is always available to
                  solve your query.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="top-box-BFC">
                <Image
                  unoptimized={true}
                  height={100}
                  width={100}
                  src="/img/customsolutions/capp3.png"
                  alt="img3"
                />
                <h3>Cost- Efficient</h3>
                <p>
                  Our development varies with your requirement. We assure to
                  give cost efficient solution of development.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="top-box-BFC">
                <Image
                  unoptimized={true}
                  height={100}
                  width={100}
                  src="/img/customsolutions/capp4.png"
                  alt="img4"
                />
                <h3>Future Extendibility</h3>
                <p>
                  You can extend the features &amp; functionality in your
                  customised app in future if you want to explore more. This
                  feature doesn&apos;t come up with a ready made script.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SBC_logic">
        <div className="container">
          <h2>Custom Elearning System Development</h2>
        </div>
        <div className="inner_content_SBG">
          <div className="container">
            <p>
              This E-Learning system development that will serve as an
              attractive medium for students to search and book teachers based
              on the subject the teacher may have a qualification in. They can
              search for teachers on the basis of location they are based,
              Subjects that the student wants to learn and by entering some
              keywords if any related to search.
            </p>

            <p>
              On demand elearning system development allow students to view the
              details of the teachers which would include their rating, fees,
              qualification and educational details. Students can then check the
              availability of the teacher and book their class if they are
              available.
            </p>
            <p>
              Elearning system custom development allow teachers to create their
              profile on the website to make themselves available for students.
              They can manage their availability on their calendar which would
              be reflected on Student&apos;s side. Teachers can manage the
              bookings received by them from students and view their details.
              Also, teachers can receive messages from students if they have any
              query.
            </p>
          </div>
        </div>
      </div>

      <div className="demand_app">
        <div className="container">
          <h2>Key Benefits of Our On Demand Elearning System Development</h2>

          <div className="row">
            <div className="col-sm-4">
              <div className="demand-card" data-aos="fade-right">
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon1.png"
                    alt="icon5"
                  />
                </div>
                <div className="demand-content">
                  <h3>Rating Feature</h3>
                  <p>
                    Students can view ratings given to teachers by other
                    students and rate them themselves
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card" data-aos="fade-right">
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon3.png"
                    alt="icon6"
                  />
                </div>
                <div className="demand-content">
                  <h3>Message Feature </h3>
                  <p>
                    {" "}
                    Students can send messages to the teacher if they have any
                    problems regarding the information provided by them{" "}
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card" data-aos="fade-right">
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon5.png"
                    alt="icon7"
                  />
                </div>
                <div className="demand-content">
                  <h3>Social Media Sign Up </h3>
                  <p>
                    Students/Teachers can use their social media accounts like
                    Facebook and Google Plus to sign up to the website
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="col-sm-4 center_image">
              <Image
                unoptimized={true}
                height={100}
                width={250}
                src="/img/customsolutions/benifit.png"
                alt="icon8"
              />
            </div>
            <div className="col-sm-4">
              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Availability Management </h3>
                  <p>
                    {" "}
                    Teachers can manage their availability by marking the same
                    on a calendar
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon2.png"
                    alt="icon9"
                  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Request Management</h3>
                  <p>
                    Teachers can see the class booking requests that are
                    received by them at one place and they can view details of
                    the request
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon4.png"
                    alt="icon10"
                  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Easy Payment</h3>
                  <p>
                    Students can easily pay for the classes they have booked
                    with the teachers using an integrated payment gateway
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon6.png"
                    alt="icon11"
                  />
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="content_area feature_inner" id="features">
        <div className="container">
          <h2 className="titlesettop titlesettop_mar">
            Dating App/Web Development Features
          </h2>

          <div className="features-tab">
            <div className="clearfix">
              <ul className="nav nav-tabs" role="tablist">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${
                    sellerTab ? "active" : ""
                  }`}
                  onClick={() => handleSellerTab()}
                  style={{ cursor: "pointer" }}
                >
                  <a> Features</a>
                </li>
                <li
                  id="tab2_li"
                  className={`business-directory-system ddlj ${
                    buyerTab ? "active" : ""
                  }`}
                  onClick={() => handleBuyerTab()}
                  style={{ cursor: "pointer" }}
                >
                  <a>Screenshot </a>
                </li>
              </ul>

              <div className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane active"
                  id="features-car1"
                >
                  {sellerTab && (
                    <>
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/search.png"
                              alt="Smart Routing"
                            />
                            <h3>Search For Tutor</h3>
                            <p>
                              Student can search for the tutor by following
                              criterias : Keyword, Category and Location(Zip
                              code).
                            </p>
                          </div>
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/payments.png"
                              alt="Delivery Status"
                            />
                            <h3>Payment</h3>
                            <p>
                              Students can make payment for booked lessons.
                              Secure credit card processing.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/Checking-Availability.png"
                              alt="Partial & Failed Delivery Status"
                            />
                            <h3>Checking Availability</h3>
                            <p>
                              Students can check for availability of classes by
                              looking at the availability calendar and book a
                              time slot.
                            </p>
                          </div>

                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/Checking-Availability.png"
                              alt="Track Sales"
                            />
                            <h3>Booking Management</h3>
                            <p>
                              Tutors can manage the bookings from the list of
                              the booking they have received.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/message.png"
                              alt="Admin Control"
                            />
                            <h3>Messages</h3>
                            <p>
                              Students can send messages to tutor and similarly,
                              tutors can send messages to students.
                            </p>
                          </div>
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/Tutor-Listing.png"
                              alt="Ratings & Reviews"
                            />
                            <h3>Tutor Listing</h3>
                            <p>
                              Students can view a list of classes/tutors
                              according to their search criteria.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/Availability-Management.png"
                              alt="Automated Dispatching"
                            />
                            <h3>Availability Management</h3>
                            <p>
                              Tutors can create the schedules by selecting the
                              date and time, then they will mark it as available
                              or unavailable.
                            </p>
                          </div>

                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/Tutor-Profile.png"
                              alt="Easy to Use"
                            />
                            <h3>View Tutor Profile</h3>
                            <p>
                              Students can view profile details of tutors and
                              lessons offered by them. They can view every
                              detail.
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div
                  role="tabpanel"
                  className="tab-pane active"
                  id="features-car1"
                >
                  {buyerTab && (
                    <>
                      <div>
                        <Slider {...settings}>
                          <div className="SliderMainBx">
                            <a>
                              <Image
                                unoptimized={true}
                                src="/img/customsolutions/booking-calander.jpg"
                                alt="icon"
                                title=""
                                className="img-fluid"
                                width={1300}
                                height={500 / (100 / 100)}
                              />
                            </a>
                          </div>
                          <div className="SliderMainBx">
                            <a>
                              <Image
                                unoptimized={true}
                                src="/img/customsolutions/booking-management-elearning.jpg"
                                alt="icon"
                                title=""
                                className="img-fluid"
                                width={1300}
                                height={500 / (100 / 100)}
                              />
                            </a>
                          </div>
                          <div className="SliderMainBx">
                            <a>
                              <Image
                                unoptimized={true}
                                src="/img/customsolutions/search-for-tutor.jpg"
                                alt="icon"
                                title=""
                                className="img-fluid"
                                width={1300}
                                height={500 / (100 / 100)}
                              />
                            </a>
                          </div>
                          <div className="SliderMainBx">
                            <a>
                              <Image
                                unoptimized={true}
                                src="/img/customsolutions/tutor-listing.jpg"
                                alt="icon"
                                title=""
                                className="img-fluid"
                                width={1300}
                                height={500 / (100 / 100)}
                              />
                            </a>
                          </div>
                        </Slider>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="app_solution">
        <div className="container">
          <h2>E-Learning System Custom Development Solution</h2>
          <Customsolutiontabs />
        </div>
      </div>
      <div className="support_logic">
        <div className="container">
          <h2>What Support You Will Get ?</h2>
          <Support />
        </div>
      </div>

      {/*  */}
      {/* <section className="ecommerce_faq_section CustomSolutionFaqSection">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ecommerce__Quick_FAQ">
              <h4 className="title_main">Quick FAQ</h4>
              <MDBAccordion v-model="activeItem" borderless>
                <MDBAccordionItem
                  headerTitle="How can a customer search for businesses around his location?"
                  collapseId="flush-collapse1"
                >
                  <p>
                    A Customer can enter his zip/postal code on the website and
                    all the businesses that are around will be listed to the
                    customer.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="Can the customer give rating to a business even if he hasn't visited the store?"
                  collapseId="flush-collapse2"
                >
                  <p>
                    Yes, customer can give rating out of 5 even if they
                    haven&apos;t visited the store. Customer can also write a
                    review along with the rating.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="Can a business owner upload multiple services to the website?"
                  collapseId="flush-collapse3"
                >
                  <p>
                    Yes, the business owner can upload multiple
                    services/products that he deals in.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="How can a customer ensure the authenticity of the information of different businesses?"
                  collapseId="flush-collapse4"
                >
                  <p>
                    Whenever a business owner creates a page for his business,
                    it has to be approved by the admin.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="Can a user view the contact information of the seller?"
                  collapseId="flush-collapse5"
                >
                  <p>
                    Yes. If a seller chooses to share his contact information on
                    the website, the customer can see it.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="Can I update some design and functionality in the application code myself?"
                  collapseId="flush-collapse6"
                >
                  <p>Yes, You will have access to all the code.</p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="Will I be able to use it on multiple domains, after I purchase this software?"
                  collapseId="flush-collapse7"
                >
                  <p>
                    You will be licensed to use it only for the domain, you
                    purchased for.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="Can I resell the software? Will I have rights over the software code?"
                  collapseId="flush-collapse8"
                >
                  <p>
                    No, You can&apos;t resell the software. All rights will
                    remain with Logicspice only.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="Do you offer Money Back Guarantee?"
                  collapseId="flush-collapse9"
                >
                  <p>
                    Yes, we offer 30 days money-back guarantee to ensure
                    customer satisfaction with our software. If for any reason,
                    you wish to discontinue using the product, you can ask us
                    for a refund. We will refund your total money except the
                    installation and configuration charges, which is USD 65 or
                    20% of the application cost, whichever is greater.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="Along with hosting server details, what other recommendations?"
                  collapseId="flush-collapse10"
                >
                  <p>
                    We recommend you purchase an SSL certificate along with a
                    hosting server, considering that an SSL certificate is
                    necessary for all websites these days and it provides a
                    secure layer to the website as well.
                  </p>
                </MDBAccordionItem>
              </MDBAccordion>
            </div>
          </div>
        </div>
      </section> */}
       <section className="faq_logic faq_logic_marketplace">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <h4 className="title_main">FAQ&apos;s</h4>

              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                {accordionItems.map((item) => (
                  <div className="panel panel-default" key={item.key}>
                    <div
                      className="panel-heading"
                      role="tab"
                      id={`heading${item.key}`}
                    >
                      <h4 className="panel-title">
                        <a
                          role="button"
                          onClick={() => toggleAccordion(item.key)}
                          aria-expanded={
                            activeKey === item.key ? "true" : "false"
                          }
                          aria-controls={item.key}
                          className={activeKey === item.key ? "" : "collapsed"}
                        >
                          <span>{item.title} </span>
                          <i
                            className={`more-less glyphicon glyphicon-${
                              activeKey === item.key ? "minus" : "plus"
                            }`}
                          ></i>
                        </a>
                      </h4>
                    </div>
                    <Collapse in={activeKey === item.key}>
                      <div
                        id={item.key}
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby={`heading${item.key}`}
                      >
                        <div className="panel-body">{item.content}</div>
                      </div>
                    </Collapse>
                  </div>
                ))}
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
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Custom Elearning System Development"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <Link
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              unoptimized={true}
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              width={50}
              height={50}
            />
          </Link>
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
