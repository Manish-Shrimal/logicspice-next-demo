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
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key); // Toggle the accordion item
  };

  const accordionItems = [
    {
      key: "collapseOne",
      title: "How can a customer search for products/services of vendors around his location?",
      content: "User can enter his zip/postal code in the website and all the products/services that are around will be listed to the customer.",
    },
    {
      key: "collapseTwo",
      title: "Can the Customer give rating to a vendor even if he hasn't purchased any services from them?",
      content:
        "Yes. Customer can give rating out of 5 even if they have not purchased the product from a particular Vendor. Customer can also write a review along with the rating.",
    },
    {
      key: "collapseThree",
      title:
        "How many days it will take to implement the customization?",
      content:
        "Time taken to implement your Event Booking System depends on the level of customization and data migration. The time frame generally ranges 5-6 weeks",
    },
    {
      key: "collapseFour",
      title: "Can a Vendor upload multiple products/services to the website?",
      content:
        "Yes, Vendors can add products/services in their \"Store\" along with multiple pictures to show their previous work.",
    },
    {
      key: "collapseFive",
      title: "Can a vendor set up multiple \"Store\" on the website?",
      content:
        "No. A Vendor can only setup one \"Store\" in which he can upload multiple products/services.",
    },
    {
      key: "collapseSix",
      title: "How can a customer create/manage an event?",
      content:
        "Customer can create events on website by providing the respective details of the event like Date, Time, Description, Event Location etc. They can also edit/update/delete the events and its details over the site.",
    },
    
  ];

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
      <div className="top-head-custom Event-Booking">
        <div className="container">
          <div className="col-md-8">
            <div className="head-enquiry">
              <h1>Custom Event Booking System Development</h1>
              <p className="sml_txt">
                Logicspice offer the best custom mobile app and web application
                solution for your business which help your guests to book seats
                for events which you are hosting that can either be a demo
                lecture, drama, conference etc.
              </p>

              <div className="btn btn-primary" onClick={openModal}>
                <a>Enquire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Custom Event Booking System Development"
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
              <li>We help you get more from custom solution</li>
              <li>Improve the experience of the attendees and speakers</li>
              <li>
                Be in touch with your conference audience and improve the
                success of the event.
              </li>
              <li>Easy to use interface to manage the event details</li>
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
                  Event Booking
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
          <h2>Event Booking App Development</h2>
        </div>
        <div className="inner_content_SBG">
          <div className="container">
            <p>
              This Event Booking System Software will serve as an attractive
              medium for people to search for Event Managers on the website.
              People can search for Event Vendors according to their location
              and category. Customers will be able to see the list of vendors as
              per the criteria defined by them.
            </p>
            <p>
              {" "}
              With the help of our on demand online event registration software,
              they can go through any of the vendor&apos;s details that they
              prefer from the listing. Customers can also create their own event
              and share it other people using their email.
            </p>
            <p>
              Event booking website development allow vendors to set up and
              manage their &quot;Store&quot; over the website by uploading
              products/service in different different categories in their
              account. While adding their services vendors can put them into
              proper categories and upload images to display their work to their
              potential customers. Vendors can upload their contact information
              at event registeration system so that customers can contact them
              for services.
            </p>
          </div>
        </div>
      </div>

      <div className="demand_app">
        <div className="container">
          <h2>
            Key Benefits of Our On Demand Event Booking Software Development
          </h2>

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
                    Customers can view ratings given to different vendors by
                    other customers and rate them themselves
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
                  <h3>Social Media Sign Up</h3>
                  <p>
                    {" "}
                    Customers can use their social media accounts like Facebook
                    and Google Plus to sign up to the website
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card" data-aos="fade-right" />
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
                <h3>Location Based Search </h3>
                <p>
                  Customers can search for products according to the location by
                  entering their zip code
                </p>
              </div>
              <div className="clearfix"></div>
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
                  <h3>Store Management </h3>
                  <p>
                    {" "}
                    Vendors can set up and manage their &quot;Store&quot; over
                    the website easily providing their contact information
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
                  <h3>Services/Product Management </h3>
                  <p>
                    Vendors can add products/services in their &quot;Store&quot;
                    along with pictures to show their previous work
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
                  <h3>Favorites Feature</h3>
                  <p>
                    Customers can add their favorite vendors to a list so that
                    they can find them easily next time they visit the site
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
            Event Booking Software Feature
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
                            <h3>Search Vendor</h3>
                            <p>
                              Users can search for vendors on website by vendor
                              name, category, location(zip code) and Occasions.
                            </p>
                          </div>
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/admin-control.png"
                              alt="Delivery Status"
                            />
                            <h3>User Profile</h3>
                            <p>
                              User/Vendor will be able to manage their basic
                              personal information like name, birthday, email,
                              password.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/product-listing.png"
                              alt="Partial & Failed Delivery Status"
                            />
                            <h3>Manage Services</h3>
                            <p>
                              Vendors can manage products/ services in their
                              &quot;Store&quot; and will be able to add/ edit/
                              update/ delete them.
                            </p>
                          </div>

                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/rental-request-management.png"
                              alt="Track Sales"
                            />
                            <h3>Event Creation/Management</h3>
                            <p>
                              Customer can create events and manage events that
                              they have created, they will be able to update
                              them.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/simple-car-listing.png"
                              alt="Admin Control"
                            />
                            <h3>Vendor Listing</h3>
                            <p>
                              Customers can see the vendor list defined by his
                              criteria which includes details like title,
                              category.
                            </p>
                          </div>
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/content-management.png"
                              alt="Ratings & Reviews"
                            />
                            <h3>Vendor Details</h3>
                            <p>
                              Customer can view details like his
                              &quot;Store&quot; name, pictures of his previous
                              work, services provided and more.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/Shop-Management.png"
                              alt="Automated Dispatching"
                            />
                            <h3>Store Setup For Vendor</h3>
                            <p>
                              Vendors can set up and manage their
                              &quot;Store&quot; by uploading products/service in
                              different categories.{" "}
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
                                src="/img/customsolutions/add-service-product.jpg"
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
                                src="/img/customsolutions/event-creation.jpg"
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
                                src="/img/customsolutions/search-vendors.jpg"
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
                                src="/img/customsolutions/store-setup-management.jpg"
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
          <h2>Online Event Booking System Custom Development Solution</h2>
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
                  headerTitle="How can a customer search for products/services of vendors around his location?"
                  collapseId="flush-collapse1"
                >
                  <p>
                    User can enter his zip/postal code in the website and all
                    the products/services that are around will be listed to the
                    customer.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="Can the Customer give rating to a vendor even if he hasn't purchased any services from them?"
                  collapseId="flush-collapse2"
                >
                  <p>
                    Yes. Customer can give rating out of 5 even if they have not
                    purchased the product from a particular Vendor. Customer can
                    also write a review along with the rating.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="How many days it will take to implement the customization?"
                  collapseId="flush-collapse3"
                >
                  <p>
                    Time taken to implement your Event Booking System depends on
                    the level of customization and data migration. The time
                    frame generally ranges 5-6 weeks
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="Can a Vendor upload multiple products/services to the website?"
                  collapseId="flush-collapse4"
                >
                  <p>
                    Yes, Vendors can add products/services in their
                    &quot;Store&quot; along with multiple pictures to show their
                    previous work.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="Can a vendor set up multiple Store on the website?"
                  collapseId="flush-collapse5"
                >
                  <p>
                    No. A Vendor can only setup one Store in which he can upload
                    multiple products/services.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="How can a customer create/manage an event?"
                  collapseId="flush-collapse6"
                >
                  <p>
                    Customer can create events on website by providing the
                    respective details of the event like Date, Time,
                    Description, Event Location etc. They can also
                    edit/update/delete the events and its details over the site.
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
                    title="Custom Event Booking System Development"
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
