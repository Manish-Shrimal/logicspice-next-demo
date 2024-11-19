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
import Customsolutiontabs from "@/app/Components/Customsolutiontabs";
import Support from "@/app/Components/Support";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import "../../../../public/css/font-awesome.css"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key); // Toggle the accordion item
  };

  const accordionItems = [
    {
      key: "collapseOne",
      title: "How can customers search to make bookings on the app?",
      content:
        "Customers can search to make bookings by selecting location or by entering the keywords related to their search.",
    },
    {
      key: "collapseTwo",
      title:
        "Can the Customer give rating even if they haven't made a booking?",
      content:
        "No. Customer can only give rating out of 5 when they have made a booking. Customer can also write a review along with the rating.",
    },
    {
      key: "collapseThree",
      title: "Can a Customer cancel the booking?",
      content:
        "Yes. The customer can cancel the booking but he should cancel at least an hour before the time of booking.",
    },
    {
      key: "collapseFour",
      title: "How can a Customer get refund of the cancelled booking?",
      content:
        "Once the customer has canceled the booking, they can get refunds in 3-4 working days. Customers can check the refund status on the app.",
    },
    {
      key: "collapseFive",
      title:
        "Can a Customer view a list of bookings that he may have made in the past?",
      content:
        "Yes. Customers can view their past bookings in the booking history section.",
    },
    {
      key: "collapseSix",
      title: "Does a Customer need to get registered to make a booking?",
      content:
        "Yes, the Customer needs to get registered to make bookings on the app.",
    },
    {
      key: "collapseSeven",
      title: "How can a candidate rate the booking that he has made?",
      content:
        "Once the candidates have made the booking, they will receive a link through which they can give a rating. They can also write a review.",
    },
  ];

  const openModal = () => {

    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Navbar />
      <div className="top-head-custom Online-Booking-App">
        <div className="container">
          <div className="col-md-8">
            <div className="head-enquiry">
              <h1>Custom Online Booking App Development</h1>
              <p>
                We offer the best Custom booking solution, whether it&apos;s
                appointment booking, or seat booking or table booking or class
                booking or any kind of time, seat, person, service or product
                booking application, we have the right expertise for them. These
                web and mobile app solutions for your business may allow your
                potential guests and customers to self-book and pay online.{" "}
              </p>

              <div className="btn btn-primary" onClick={openModal}>
                <a>Enquire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Custom Online Booking App Development"
                  />
                }
              </div>
              {/* <Link
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
              </Link> */}
              <Link
  href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
  target="_blank"
  aria-label="Contact Logicspice Team on WhatsApp"
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
              <li>Online Solution</li>
              <li>Fully Responsive System For all Mobile Device</li>
              <li>Get more clients with our easy to manage software</li>
              <li>Easily accept bookings from their customers and clients</li>
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
                  Booking App Development
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
          <h2>Online Booking Software Development</h2>
        </div>
        <div className="inner_content_SBG">
          <div className="container">
            <p>
              The online booking apps that we would develop can be used by
              people to book an appointment, ticket or seat. Our online booking
              system will facilitate the Customers to book like Seat Booking,
              hotel booking, bus reservation, appointment booking and Table
              Booking App. Once the booking are done, they can receive the
              ticket by email. They will always have an option to cancel the
              tickets that have been booked and check the refund status.
            </p>

            <p>
              Our on demand booking software for website that we will develop
              will serve as an attractive medium for Customers to book an
              appointment at a Professional&apos;s office. A professional can be
              a lawyer, doctor or a hairdresser registered to the website. They
              can send booking request selecting the date and make payment for
              the same.
            </p>
          </div>
        </div>
      </div>
      <div className="demand_app">
        <div className="container">
          <h2>Key Benefits of Our on Demand Online Booking App Development</h2>

          <div className="row">
            <div className="col-sm-4">
              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon1.png"
                    alt="img5"
                  />
                </div>
                <div className="demand-content">
                  <h3>Social Media Sign Up </h3>
                  <p>
                    People can use their social media accounts like Facebook and
                    Google Plus to sign up to the app
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>

              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon3.png"
                    alt="img6"
                  />
                </div>
                <div className="demand-content">
                  <h3>Advance Search/Filters</h3>
                  <p>
                    People can use the advanced filters to search for bookings
                    that they want to make
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>

              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-right"
              >
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon5.png"
                    alt="img7"
                  />
                </div>
                <div className="demand-content">
                  <h3>Easy Payment</h3>
                  <p>
                    {" "}
                    People can easily pay for the bookings by payment through a
                    payment gateway
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="col-sm-4 center_image">
              <Image
                unoptimized={true}
                height={493}
                width={235}
                src="/img/customsolutions/benifit.png"
                alt="img8"
              />
            </div>
            <div className="col-sm-4 ">
              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="demand-content">
                  <h3>Favorites Feature</h3>
                  <p>
                    People can add bookings to a list so that they can find them
                    easily next time they visit the site
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon2.png"
                    alt="img9"
                  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="demand-content">
                  <h3>Review Feature</h3>
                  <p>
                    People can add ratings and reviews to the booking that they
                    have made
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon4.png"
                    alt="img10"
                  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="demand-content">
                  <h3>Booking History</h3>
                  <p>People can see the bookings made by them in the past</p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon6.png"
                    alt="img11"
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
            Custom Online Booking App/Web Development Features
          </h2>

          <div className="features-tab">
            <div className="clearfix">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                  <a
                    href="#features-car1"
                    aria-controls="features-car"
                    role="tab"
                    data-toggle="tab"
                  >
                    Features
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane active"
                  id="features-car1"
                >
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Customer-Registration.png"
                          alt="Delivery Status"
                        />
                        <h3>Customer Registration</h3>
                        <p>
                          Customer need to register or log in through social
                          media before making any booking.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Manage-Booking.png"
                          alt="Smart Routing"
                        />
                        <h3>Make Booking</h3>
                        <p>
                          Customer can book the ticket through the app and
                          continue to the payment through debit/credit card.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/View-Past-Bookings.png"
                          alt="Easy to Use"
                        />
                        <h3>View Past Bookings</h3>
                        <p>
                          Customer can check their all the past bookings and use
                          the previous information for upcoming booking.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Booking-Cancellation.png"
                          alt="Automated Dispatching"
                        />
                        <h3>Booking Cancellation</h3>
                        <p>
                          User can cancel the booking any time and the amount
                          will be refunded to their bank account.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/SMS-Email-Alerts.png"
                          alt="Ratings &amp; Reviews"
                        />
                        <h3>SMS and Email Alerts</h3>
                        <p>
                          An alerts will be sent to you through email and SMS
                          when any booking is made or cancelled.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Promo-Code.png"
                          alt="Partial &amp; Failed Delivery Status"
                        />
                        <h3>Promo Code </h3>
                        <p>
                          User can use promo codes while making booking to get
                          discounts and special offers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="app_solution">
        <div className="container">
          <h2>Custom Online Booking App Development Solution</h2>
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
                    title="Custom Online Booking App Development"
                  />
                }
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
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              width={50}
              height={50}
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
