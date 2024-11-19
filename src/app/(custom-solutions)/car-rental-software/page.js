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
import { Accordion, Card, Button } from "react-bootstrap";
import Support from "@/app/Components/Support";
import Carrentaltab from "@/app/Components/Carrentaltab";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBModal,
  MDBModalBody,
} from "mdb-react-ui-kit";
import { Collapse } from "react-bootstrap";


const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showInitialText, setShowInitialText] = useState(true); // Track if initial text and button should be displayed
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key); // Toggle the accordion item
  };

  const accordionItems = [
    {
      key: "collapseOne",
      title: "How will the customers search cars around your area?",
      content: "Customers will enter the zip code on the website and all the nearest available cars will appear.",
    },
    {
      key: "collapseTwo",
      title: "Can customers rate a service provider, even if they haven’t used it?",
      content:
        "Yes, the customer can rate and review your services and listed car, even if they haven’t used them yet.",
    },
    {
      key: "collapseThree",
      title:
        "Can the owner of the business upload more than one service or car on the website?",
      content:
        "Yes, the owner of the business can post multiple cars on rent in which he is dealing.",
    },
    {
      key: "collapseFour",
      title: "Can customer list their cars on the business owner’s website?",
      content:
        "Yes, only if the business owner allow customer to list their car on rent.",
    },
    {
      key: "collapseFive",
      title: "How will the customers view the contact details of the business owner?",
      content:
        "If the business owner selects the option to display the contact information, then the customers can see it by visiting the contact page.",
    },
    
    
  ];

  const handleReadMoreClick = () => {
    setShowMore(true); // Show more content
    setShowInitialText(false); // Hide initial text and button
  };

  const openModal = () => {

    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Navbar />
      <div className="top-head-custom car-rental-software">
        <div className="container">
          <div className="col-md-8">
            <div className="head-enquiry">
              <h1>Custom Car Rental Software & App Development</h1>
              <p>
                Logicspice offer the best custom mobile apps and web solution
                for specific needs of car rental companies, travel companies and
                travel agencies to book cars for their customers.
              </p>
              <div className="btn btn-primary" onClick={openModal}>
                <a>Enquire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Custom Car Rental Software & App Development"
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
              <li>Vehicles by locations</li>
              <li>Vehicle Management</li>
              <li>Doorstep Delivery</li>
              <li>Pick-up and drop-off locations</li>
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
                  Car Rental
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
                  doesn’t come up with a ready made script.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="SBC_logic">
        <div className="container">
          <h2>Car Rental Management Software</h2>
        </div>
        <div className="inner_content_SBG" style={{ textAlign: "left" }}>
          <div className="container">
            <p>
              Car rental software helps to track every car which has been
              deployed in your business venture. The software which controls and
              overview every rented vehicle. With the help of car rental system,
              you can not only list car rentals on your website, but also you
              can sell their equipment.. This car rental software has become the
              new arrival which enables you to manage your rentals and accounts
              at the same time and can also be developed in a customized way
              according to your business needs.{" "}
            </p>
            <p>
              <strong>Why do you need custom Car Rental Software?</strong>{" "}
            </p>
            <p>
              We understand that every rental business has different needs and
              every one’s business is also different. So, in order to meet
              different requirements, we customized car rental web application
              which would help you keep everything aligned. We would suggest
              that you should immediately enter this auto industry as it is the
              need of the future.
            </p>
            <div id="more-content" style={{ display: "none" }}>
              <p>
                The main requirement is the management of handling all the
                rentals all together along with the accounting needs for which
                you need a good car rental system development company like us.
              </p>
              <p>
                <strong>
                  How we help you in Car Rental Software Development Solution?
                </strong>{" "}
              </p>
              <p>
                Logicspice provides you best development team to create your car
                rental app development. You can upload multiple products or
                services related to the rental process of the cars, as per your
                requirements.
              </p>
              <p>
                We provide car rental management system through which Rental
                Company Owner controls and overview every rented vehicle. They
                can see the information about different vehicles and can see
                their status.
              </p>
            </div>
            {showInitialText && (
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
            )}

            {showMore && (
              <div style={{ color: "#fff", marginTop: "10px" }}>
                <p>
                  The main requirement is the management of handling all the
                  rentals all together along with the accounting needs for which
                  you need a good car rental system development company like us.
                </p>
                <p>
                  <strong>
                    How we help you in Car Rental Software Development Solution?
                  </strong>{" "}
                </p>
                <p>
                  Logicspice provides you best development team to create your
                  car rental app development. You can upload multiple products
                  or services related to the rental process of the cars, as per
                  your requirements.
                </p>
                <p className="res_txt">
                  We provide car rental management system through which Rental
                  Company Owner controls and overview every rented vehicle. They
                  can see the information about different vehicles and can see
                  their status.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="demand_app">
        <div className="container">
          <h2>Key Benefits of Our Custom Car Rental App Development</h2>

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
                  <h3>Own business page</h3>
                  <p>
                    Yes, the business owner can design his or her own business
                    page to list cars and all the required information
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
                  <h3>Add Products/Services</h3>
                  <p>
                    The owners can list new services or products on their car
                    rental systems to promote their business
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
                  <h3>Review column</h3>
                  <p>
                    The owners can receive the reviews from their customers
                    about their car rental services.
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
                  <h3>Security</h3>
                  <p>
                    We verify the information, on behalf of the business owners
                    before it is posted for the customers
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
                  <h3>Local Payments Support</h3>
                  <p>
                    Accept payments anywhere seamlessly with integration support
                    for payment gateways of your choice.
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
                  <h3>Global Solution</h3>
                  <p>
                    Operate your business in multiple locations with built-in
                    support for multiple language and currencies.
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
            Custom Car Rental Web & App Development Features
          </h2>
          <Carrentaltab />
        </div>
      </section>

      <div className="clearfix"></div>

      <div className="app_solution">
        <div className="container">
          <h2>Car Rental Management System Solution</h2>
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
                  headerTitle="How will the customers search cars around your area?"
                  collapseId="flush-collapse1"
                >
                  <p>
                    Customers will enter the zip code on the website and all the
                    nearest available cars will appear.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="Can customers rate a service provider, even if they haven’t used it?"
                  collapseId="flush-collapse2"
                >
                  <p>
                    Yes, the customer can rate and review your services and
                    listed car, even if they haven&apos;t used them yet.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="Can the owner of the business upload more than one service or car on the website?"
                  collapseId="flush-collapse3"
                >
                  <p>
                    Yes, the owner of the business can post multiple cars on
                    rent in which he is dealing.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="Can customer list their cars on the business owner’s website?"
                  collapseId="flush-collapse4"
                >
                  <p>
                    Yes, only if the business owner allow customer to list their
                    car on rent.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="How will the customers view the contact details of the business owner?"
                  collapseId="flush-collapse5"
                >
                  <p>
                    If the business owner selects the option to display the
                    contact information, then the customers can see it by
                    visiting the contact page.
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
                    title="Custom Car Rental Software & App Development"
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
