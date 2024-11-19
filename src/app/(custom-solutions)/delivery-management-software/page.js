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

  const [showMore, setShowMore] = useState(false);
  const [showInitialText, setShowInitialText] = useState(true); // Track if initial text and button should be displayed
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key); // Toggle the accordion item
  };

  const accordionItems = [
    {
      key: "collapseOne",
      title: "What’s Delivery management software?",
      content: "Delivery Management software plays a broader role than you think. It organizes, administers, and supervises the people, technologies and processes to successfully deliver what a customer’s expects to receive.",
    },
    {
      key: "collapseTwo",
      title: "Do I need it in my business?",
      content:
        "Delivery Management software is a perfect tool for all type of business where a large quantity of workers are working outside the office building. It fits Logistics, Retails, Wholesale, Retail, Utility, manufacturing, food delivery and the courier service industry & we are certain our software will prove to be helpful for your business, as well.",
    },
    {
      key: "collapseThree",
      title:
        "What are the benefits of using LogicSpice instead of my own built subscription system?",
      content:
        "Delivery management system does a lot more than just getting the couriers delivered. For absolute customer satisfaction, it is vital to have smooth delivery system. With LogicSpice, you can get that easily. We aim at minimizing your work. We will regularly update you to ensure that our client’s are on the top of everything. So, you can relax and focus more on expansion of your business and leave the task of managing it in the hands of our experts.",
    },
    {
      key: "collapseFour",
      title: "What if I’m stuck while using the software?",
      content:
        "You can check the guide or you can contact our representative for help.",
    },
    
    
    
  ];

  const handleReadMoreClick = () => {
    setShowMore(true); // Show more content
    setShowInitialText(false); // Hide initial text and button
  };

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
      <div className="top-head-custom delivery-management-software">
        <div className="container">
          <div className="col-md-8">
            <div className="head-enquiry">
              <h1>Custom Delivery Management Software</h1>
              <p>
                On demand mobile App or Web development solution for your
                business needs.
              </p>
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
                    title="Custom Delivery Management Software"
                  />
                }
              </div>
              <a
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
              </a>
            </div>
            <ul className="head-feature">
              <li>Smart Routing </li>
              <li>Real time information </li>
              <li>Automated Dispatching</li>
              <li>Track Sales</li>
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
                  Delivery Management
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
                  width={100}
                  height={100}
                  src="/img/customsolutions/capp1.png"
                  alt="icon1"
                />
                <h3>Ready to Go for Development</h3>
                <p>
                  We have a team of dedicated developers who are ready to work
                  on your requirements for app or web development. Our solution
                  is robust & highly scalable.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="top-box-BFC">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/customsolutions/capp2.png"
                  alt="icon2"
                />
                <h3>Support & Maintenance</h3>
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
                  width={100}
                  height={100}
                  src="/img/customsolutions/capp3.png"
                  alt="icon3"
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
                  width={100}
                  height={100}
                  src="/img/customsolutions/capp4.png"
                  alt="icon4"
                />
                <h3>Future Extendibility</h3>
                <p>
                  You can extend the features & functionality in your customised
                  app in future if you want to explore more. This feature
                  doesn&apos;t come up with a ready made script.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="SBC_logic">
        <div className="container">
          <h2>Custom Delivery Management Software</h2>
        </div>
        <div className="inner_content_SBG" style={{ textAlign: "left" }}>
          <div className="container">
            <p>
              Delivery management software is a system through which anything
              that&apos;s shipped can be tracked by you and your customers. This
              connection helps your delivery drivers in getting all the required
              data from a reliable source. This data is essential for them to
              complete a delivery no matter in which field you are in, whether
              it&apos;s - Retails ecommerce industry, food and grocery industry,
              package delivery industry, delivery courier tracking.{" "}
            </p>
            <p>
              A delivery management system plays a great role in retail
              ecommerce industry. With this, the back office gets the complete
              view of the shifts of the individuals. In the recent times,
              customer&apos;s expectations are getting higher and higher for
              delivery performances. Thus, it is very important that an online
              retail store offers their clients with a smooth and flexible
              delivery management system.
            </p>
            <div id="more-content" style={{ display: "none" }}>
              <p>
                One of the best ways to build your name in the food and grocery
                industry is to get an integrated and seamless delivery software
                solution for your business. This will allow you to deliver fresh
                food and grocery, on time and you can easily win the trust of
                your clients. Buyers just want quick and perfect service and
                with the right software, you can give them what they are looking
                for.
              </p>
              <p>
                A good packing makes the product more attractive and impressive
                and with the right delivery software, you can deliver these
                beautiful packages on time. Yes, the right delivery management
                software will help your package delivery business in growing
                faster with thousands of happy customers on your list.{" "}
              </p>
              <p>
                To create a perfect delivery tracking software for your
                business, LogicSpice is always ready to help you. We are
                equipped with a dedicated team of professionals, who wish to
                work hard and help us in creating a reputation in the field of
                developing the best delivery routing software for our clients.
              </p>
            </div>

            {showInitialText && (
              <div>
                <p className="res_txt">
                  If you are looking for a food ordering system for your
                  restaurant? We have launched a hassle-free{" "}
                  <a
                    style={{ color: "#fff" }}
                    href="https://food-ordering-marketplace.logicspice.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    hosted solution for food ordering
                  </a>{" "}
                  at an affordable price.
                </p>

                <p>
                  <a
                    id="read-more-content"
                    style={{
                      cursor: "pointer",
                      color: "#fff",
                      border: "1px solid #fff",
                      padding: "3px 20px",
                      display: "inline-block",
                    }}
                    onClick={handleReadMoreClick}
                  >
                    Read More
                  </a>
                </p>
              </div>
            )}

            {showMore && (
              <div style={{ color: "#fff", marginTop: "10px" }}>
                <p>
                  One of the best ways to build your name in the food and
                  grocery industry is to get an integrated and seamless delivery
                  software solution for your business. This will allow you to
                  deliver fresh food and grocery, on time and you can easily win
                  the trust of your clients. Buyers just want quick and perfect
                  service and with the right software, you can give them what
                  they are looking for.
                </p>
                <p>
                  A good packing makes the product more attractive and
                  impressive and with the right delivery software, you can
                  deliver these beautiful packages on time. Yes, the right
                  delivery management software will help your package delivery
                  business in growing faster with thousands of happy customers
                  on your list.
                </p>
                <p>
                  To create a perfect delivery tracking software for your
                  business, LogicSpice is always ready to help you. We are
                  equipped with a dedicated team of professionals, who wish to
                  work hard and help us in creating a reputation in the field of
                  developing the best delivery routing software for our clients.
                </p>
                <p className="res_txt">
                  If you are looking for a food ordering system for your
                  restaurant? We have launched a hassle-free{" "}
                  <a
                    style={{ color: "#fff" }}
                    href="https://food-ordering-marketplace.logicspice.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    hosted solution for food ordering
                  </a>{" "}
                  at an affordable price.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="demand_app">
        <div className="container">
          <h2>Key Benefits of Our Delivery Routing Software</h2>

          <div className="row">
            <div className="col-sm-4">
              <div className="demand-card" data-aos="fade-right">
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100}
                    src="/img/customsolutions/b_icon1.png"
                    alt="icon5"
                  />
                </div>
                <div className="demand-content">
                  <h3>Time-saving</h3>
                  <p>
                    The instant update of every movement is provided to the
                    delivery driver, Courier Company, as well as at the back
                    office and main branch.
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card" data-aos="fade-right">
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100}
                    src="/img/customsolutions/b_icon3.png"
                    alt="icon6"
                  />
                </div>
                <div className="demand-content">
                  <h3>Highly Advanced</h3>
                  <p>
                    We use the latest technology to deliver our customers with
                    advanced software which can be updated easily.
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card" data-aos="fade-right">
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100}
                    src="/img/customsolutions/b_icon5.png"
                    alt="icon7"
                  />
                </div>
                <div className="demand-content">
                  <h3>Faster Communication</h3>
                  <p>
                    It ensure a faster communication system, it forwards instant
                    updates to all the concerned parties and keep them posted
                    about every happening.
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="col-sm-4 center_image">
              <Image
                unoptimized={true}
                width={250}
                height={100}
                src="/img/customsolutions/benifit.png"
                alt="icon8"
              />
            </div>
            <div className="col-sm-4">
              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Availability of Customer information </h3>
                  <p>
                    This data is of great importance to deliver right product to
                    right buyer at the right time selected by the buyer.
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100}
                    src="/img/customsolutions/b_icon2.png"
                    alt="icon9"
                  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Get full overview of every delivery</h3>
                  <p>
                    You can keep a complete check on all the deliveries, push
                    the drivers for prompt deliveries and receive instant
                    updates on every delivery and a lot more.
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100}
                    src="/img/customsolutions/b_icon4.png"
                    alt="icon10"
                  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Customizable</h3>
                  <p>
                    Our software is customized as per your preference, for
                    example if you have a grocery then we will deliver you with
                    a grocery business friendly delivery system.
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100}
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
            Delivery Management Software Feature
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
                              width={60}
                              height={100}
                              src="/img/customsolutions/delivery-status.png"
                              alt="Delivery Status"
                            />
                            <h3>Delivery Status</h3>
                            <p>
                              {" "}
                              Keeps the admin and customers updated with the
                              delivery status &apos;Picked&apos;, &apos;In
                              transit&apos; and &apos;Dropped&apos;.
                            </p>
                          </div>
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              width={60}
                              height={100}
                              src="/img/customsolutions/smart-routing.png"
                              alt="Smart Routing"
                            />
                            <h3>Smart Routing</h3>
                            <p>
                              Optimise the route to save your time, fuel and
                              vehicle cost and daily delivery per deliver per
                              day.
                            </p>
                          </div>
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              width={60}
                              height={100}
                              src="/img/customsolutions/automated-dispatching.png"
                              alt="Automated Dispatching"
                            />
                            <h3>Automated Dispatching</h3>
                            <p>
                              The courier is automatically assigned to deliver
                              on the basis of availability, current load
                              capacity & more.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              width={60}
                              height={100}
                              src="/img/customsolutions/failed-delivery-status.png"
                              alt="Partial & Failed Delivery Status"
                            />
                            <h3>Partial & Failed Delivery Status</h3>
                            <p>
                              It includes info for partial and failed deliveries
                              which is a very important data in case of
                              disputes.
                            </p>
                          </div>
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              width={60}
                              height={100}
                              src="/img/customsolutions/real-time-information.png"
                              alt="Real Time Information"
                            />
                            <h3>Real Time Information</h3>
                            <p>
                              Update from your delivery driver can be uploaded
                              instantly to your system through the handheld
                              devices.
                            </p>
                          </div>
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              width={60}
                              height={100}
                              src="/img/customsolutions/push-notifications.png"
                              alt="Push Notifications"
                            />
                            <h3>Push Notifications</h3>
                            <p>
                              All the information delivery status, location,
                              payment status are given via push notification.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              width={60}
                              height={100}
                              src="/img/customsolutions/admin-control.png"
                              alt="Admin Control"
                            />
                            <h3>Admin Control</h3>
                            <p>
                              Admin will have complete control over the order,
                              delivery system and delivery team.
                            </p>
                          </div>
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              width={60}
                              height={100}
                              src="/img/customsolutions/rate.png"
                              alt="Ratings & Reviews"
                            />
                            <h3>Ratings & Reviews</h3>
                            <p>
                              Customer can give review and rating. The feedback
                              can be collected after placing the delivery.
                            </p>
                          </div>
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              width={60}
                              height={100}
                              src="/img/customsolutions/deliverer-account.png"
                              alt="Deliverer Account"
                            />
                            <h3>Deliverer Account</h3>
                            <p>
                              {" "}
                              All the information includes total delivered
                              order, pending order, rating of the deliverer.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              width={60}
                              height={100}
                              src="/img/customsolutions/track-sales.png"
                              alt="Track Sales"
                            />
                            <h3>Track Sales</h3>
                            <p>
                              Track the complete sales, how many ordering has
                              been delivered and the earning from the delivered
                              order.
                            </p>
                          </div>
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              width={60}
                              height={100}
                              src="/img/customsolutions/easy-to-use.png"
                              alt="Easy to Use"
                            />
                            <h3>Easy to Use</h3>
                            <p>
                              Generally, people think delivery software is too
                              technical for them. But, it&apos;s not. It is very
                              user-friendly.
                            </p>
                          </div>
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              width={60}
                              height={100}
                              src="/img/customsolutions/Booking-Details.png"
                              alt="Deliveries on Time"
                            />
                            <h3>Deliveries on Time</h3>
                            <p>
                              It helps a lot to deliver order on time or earlier
                              from the date by keeping everyone updated.
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
                                src="/img/customsolutions/Delivery-software-Admin-control.jpg"
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
                                src="/img/customsolutions/delivery-software-track-your-driver.jpg"
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
                                src="/img/customsolutions/delivery-software-status.jpg"
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
                                src="/img/customsolutions/delivery-software-Route-Map-Integration.jpg"
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

      <div className="clearfix"></div>

      <div className="app_solution">
        <div className="container">
          <h2>Custom Delivery Management Software Solution</h2>
          <Customsolutiontabs />
        </div>
      </div>

      <div className="clearfix"></div>
      <div className="support_logic">
        <div className="container">
          <h2>What Support You Will Get ?</h2>
          <Support />
        </div>
      </div>
      {/* <section className="ecommerce_faq_section CustomSolutionFaqSection">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ecommerce__Quick_FAQ">
              <h4 className="title_main">Quick FAQ</h4>

              <MDBAccordion v-model="activeItem" borderless>
                <MDBAccordionItem
                  headerTitle="What’s Delivery management software?"
                  collapseId="flush-collapse1"
                >
                  <p>
                    Delivery Management software plays a broader role than you
                    think. It organizes, administers, and supervises the people,
                    technologies and processes to successfully deliver what a
                    customer&apos;s expects to receive.{" "}
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Do I need it in my business?"
                  collapseId="flush-collapse2"
                >
                  <p>
                    Delivery Management software is a perfect tool for all type
                    of business where a large quantity of workers are working
                    outside the office building. It fits Logistics, Retails,
                    Wholesale, Retail, Utility, manufacturing, food delivery and
                    the courier service industry & we are certain our software
                    will prove to be helpful for your business, as well.{" "}
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="What are the benefits of using LogicSpice instead of my own built subscription system?"
                  collapseId="flush-collapse3"
                >
                  <p>
                    Delivery management system does a lot more than just getting
                    the couriers delivered. For absolute customer satisfaction,
                    it is vital to have smooth delivery system. With LogicSpice,
                    you can get that easily. We aim at minimizing your work. We
                    will regularly update you to ensure that our client’s are on
                    the top of everything. So, you can relax and focus more on
                    expansion of your business and leave the task of managing it
                    in the hands of our experts.{" "}
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="What if I’m stuck while using the software?"
                  collapseId="flush-collapse4"
                >
                  <p>
                    You can check the guide or you can contact our
                    representative for help.{" "}
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
                    title="Custom Delivery Management Software"
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
