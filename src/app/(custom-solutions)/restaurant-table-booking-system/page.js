"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(custom-solutions)/customsolutions.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
import { Modal, ModalBody } from "react-bootstrap";
import "../../resposive.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import Support from "@/app/Components/Support";
import Customsolutiontabs from "@/app/Components/Customsolutiontabs";
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
      title: "How can customers search for restaurants?",
      content:
        "Customers can search for the restaurants by selecting the cuisines and the location of the restaurant or by entering the keywords related to their search.",
    },
    {
      key: "collapseTwo",
      title: "How can the Restaurants manage their menu on the app?",
      content:
        "The Restaurants can add their menu items along with the pictures and other details to their profile that they have created on the app. They can also edit and delete the menu items that are already been added.",
    },
    {
      key: "collapseThree",
      title:
        "Can the Customer give rating to a restaurant even if they havent booked table in that?",
      content:
        "No. Customer can only give rating out of 5 when they have booked a table in that restaurant. Customer can also write a review along with the rating.",
    },
    {
      key: "collapseFour",
      title: "Can a Customer cancel the booking of the table?",
      content:
        "Yes. The customer can cancel the booked table but he should cancel at least an hour before the time of booking.",
    },
    {
      key: "collapseFive",
      title: "How can a Customer get refund of the cancelled booking?",
      content:
        "Once the customer has canceled a table booking, they can get refunds in 3-4 working days. Customers can check the refund status on the app.",
    },
    {
      key: "collapseSix",
      title:
        "Can a Customer view a list of tables that he has booked in the past?",
      content:
        "Yes. Customers can view their past booked tables in the booking history section.",
    },
    {
      key: "collapseSeven",
      title: "Does a Customer needs to get registered to book the tables?",
      content: "Yes, the Customer needs to get registered to book the tables.",
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
      <NavBar />
      <div className="top-head-custom Restaurant-Table-Booking">
        <div className="container">
          <div className="col-md-8">
            <div className="head-enquiry">
              <h1>
                Restaurant Table Booking System Development | Opentable Clone
              </h1>
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
                    title="Restaurant Table Booking System Development"
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
              <li>Scalable</li>
              <li>One Stop Solution</li>
              <li>Go Live Quickly</li>
              <li>Experts Develop Table Booking System</li>
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
                  Restaurant Table Booking
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
                  alt="img1"
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
                  alt="img1"
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
                  alt="img1"
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
                  alt="img2"
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
          <h2>Restaurant Table Booking Web Development</h2>
        </div>
        <div className="inner_content_SBG">
          <div className="container">
            <p>
              Our Restaurant Table Booking Custom App Solution will serve as an
              attractive medium for customers to book table at different
              restaurants of their choosing. They can search for restaurants by
              cuisine type or location and view the complete list of restaurants
              that match their search criteria. Customers can go through the
              menu of the different restaurants by our restaurant reservation
              management software.
            </p>

            <p>
              With the help of on demand restaurant reservation software,
              customers can view the available tables in the restaurants and
              book them by entering the details about it. Customers can rate the
              restaurants on the basis of their experience through this
              restaurant seat reservation system. They can also cancel a table
              booking and get a refund.
            </p>

            <p>
              Restaurants can get registered to the website and put their
              information about their restaurant. Restaurant table booking
              system development similar to opentable clone allow restaurant to
              put the menu information on the website and add tables. They can
              receive table booking requests from the customers. Restaurants can
              view the bookings made by them.
            </p>

            <p>
              Let your customers book a table through restaurant reservation
              system and make them feel important person of your restaurant. The
              restaurant booking system provides an iterative solution to your
              customer.
            </p>
            <p className="res_txt">
              If you are looking for food ordering system for your restaurant?
              We have launched a hassle free{" "}
              <a
                href="https://food-ordering-marketplace.logicspice.com"
                target="_blank"
              >
                hosted solution for food ordering
              </a>{" "}
              at affordable price.
            </p>
          </div>
        </div>
      </div>

      <div className="demand_app">
        <div className="container">
          <h2>
            Key Benefits of Our Restaurant Table Booking on Demand App
            Development
          </h2>

          <div className="row">
            <div className="col-sm-4">
              <div className="demand-card" data-aos="fade-right">
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100}
                    src="/img/customsolutions/b_icon1.png"
                    alt="img3"
                  />
                </div>
                <div className="demand-content">
                  <h3>Advance Search/Filters</h3>
                  <p>
                    Customers can use the cuisines or location to search for
                    restaurants or they can use keywords
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
                    alt="img4"
                  />
                </div>
                <div className="demand-content">
                  <h3>Restaurant Rating</h3>
                  <p>
                    Customers can give rating to the restaurants that they may
                    have visited which can be viewed by other Customers
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
                    alt="img5"
                  />
                </div>
                <div className="demand-content">
                  <h3>Favorites Feature</h3>
                  <p>
                    Customers can add their favorite restaurants to a list so
                    that they can find them easily when they visit the website
                    next time
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
                alt="img6"
              />
            </div>
            <div className="col-sm-4">
              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Easy Payment</h3>
                  <p>
                    Customers can easily pay for the booked tables by payment
                    through a payment gateway
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100}
                    src="/img/customsolutions/b_icon2.png"
                    alt="img7"
                  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Menu Management</h3>
                  <p>
                    Restaurants can easily manage their menu by adding the
                    details to the app
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100}
                    src="/img/customsolutions/b_icon4.png"
                    alt="img8"
                  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Table Management</h3>
                  <p>
                    Restaurants can manage the tables and can manage their
                    availability
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100}
                    src="/img/customsolutions/b_icon6.png"
                    alt="img9"
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
            Custom Restaurant Seat Booking App Development Features
          </h2>

          <div className="features-tab">
            <div className="clearfix">
              {/* <!-- Nav tabs --> */}
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

              {/* <!-- Tab panes --> */}
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
                          width={60}
                          height={100}
                          src="/img/customsolutions/Restaurant-Registration.png"
                          alt="Delivery Status"
                        />
                        <h3>Restaurant Registration</h3>
                        <p>
                          Any restaurant can register as a vendor by giving all
                          the details about their restaurant.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/Search.png"
                          alt="Smart Routing"
                        />
                        <h3>Search </h3>
                        <p>
                          User can search for the restaurant by location,
                          booking day, time and cuisine.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/Restaurant-Details.png"
                          alt="Easy to Use"
                        />
                        <h3>Restaurant Details</h3>
                        <p>
                          User can check complete details of restaurant i.e.
                          location, review and ratings, left booking and,
                          timing.{" "}
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/Book-Table.png"
                          alt="Automated Dispatching"
                        />
                        <h3>Book Table</h3>
                        <p>
                          Customer can book the table by selecting a time, no.
                          of guest and make the payment.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/Customer-Registration.png"
                          alt="Admin Control"
                        />
                        <h3>Customer Registration</h3>
                        <p>
                          It is must to register as a customer before booking
                          table in any restaurant by giving required details.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/Manage-Booking.png"
                          alt="Ratings & Reviews"
                        />
                        <h3>Manage Booking</h3>
                        <p>
                          Restaurant owner gets notified when any customers book
                          a table in their restaurant and manage their bookings.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/Manage-Restaurants.png"
                          alt="Track Sales"
                        />
                        <h3>Manage Restaurants</h3>
                        <p>
                          Admin can manage all the details of the listed
                          restaurant and activate or deactivate the restaurant.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/Save-guest-information.png"
                          alt="Partial & Failed Delivery Status"
                        />
                        <h3>Save guest information</h3>
                        <p>
                          All the guest information has been saved to the
                          database of the restaurant.
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

      <div className="clearfix"></div>

      <div className="app_solution">
        <div className="container">
          <h2>Restaurant Booking System Development Solution</h2>
          <Customsolutiontabs />
        </div>
      </div>

      {/* <!--<div className="used_technology_section" id="technologies">
    <div className="container">
        <h4 className="titlesettop titlesettop_mar"><span>Used Technologies</span> and Server Requirements</h4>     
        <div className="used_technology_section_dataa">
            <ul>
                <li data-aos="fade-right"><div className="icntechimg"><Image unoptimized={true} width={100} height={100}src="/img/customsolutions/tech_ios_icon.png" alt="iOS"/></div><div className="icntechimg_nm">iOS</div></li>
                <li data-aos="fade-right"><div className="icntechimg"><Image unoptimized={true} width={100} height={100}src="/img/customsolutions/tech_java_icon.png" alt="Java"/></div><div className="icntechimg_nm">Java</div></li>
                <li data-aos="fade-right"><div className="icntechimg"><Image unoptimized={true} width={100} height={100}src="/img/customsolutions/tech_android_icon.png" alt="Android"/></div><div className="icntechimg_nm">Android</div></li>
                <li data-aos="fade-right"><div className="icntechimg"><Image unoptimized={true} width={100} height={100}src="/img/customsolutions/tech_php_icon.png" alt="PHP"/></div><div className="icntechimg_nm">PHP</div></li>
                <li data-aos="fade-left"><div className="icntechimg"><Image unoptimized={true} width={100} height={100}src="/img/customsolutions/tech_cakephp_icon.png" alt="CakePHP"/></div><div className="icntechimg_nm">CakePHP</div></li>
                <li data-aos="fade-left"><div className="icntechimg"><Image unoptimized={true} width={100} height={100}src="/img/customsolutions/tech_bootstrap_icon.png" alt="Bootstrap"/></div><div className="icntechimg_nm">Bootstrap</div></li>
                <li data-aos="fade-left"><div className="icntechimg"><Image unoptimized={true} width={100} height={100}src="/img/customsolutions/tech_mysql_icon.png" alt="MySQL"/></div><div className="icntechimg_nm">MySQL</div></li>
                <li data-aos="fade-left"><div className="icntechimg"><Image unoptimized={true} width={100} height={100}src="/img/customsolutions/tech_apache_icon.png" alt="Apache"/></div><div className="icntechimg_nm">Apache</div></li>
            </ul>
        </div>
    </div>
</div>--> */}
      <div className="clearfix"></div>
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
                  headerTitle="How can customers search for restaurants?"
                  collapseId="flush-collapse1"
                >
                  <p>
                    Customers can search for the restaurants by selecting the
                    cuisines and the location of the restaurant or by entering
                    the keywords related to their search.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="How can the Restaurants manage their menu on the app?"
                  collapseId="flush-collapse2"
                >
                  <p>
                    The Restaurants can add their menu items along with the
                    pictures and other details to their profile that they have
                    created on the app. They can also edit and delete the menu
                    items that are already been added.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Can the Customer give rating to a restaurant even if they havent booked table in that?"
                  collapseId="flush-collapse3"
                >
                  <p>
                    No. Customer can only give rating out of 5 when they have
                    booked a table in that restaurant. Customer can also write a
                    review along with the rating.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Can a Customer cancel the booking of the table?"
                  collapseId="flush-collapse4"
                >
                  <p>
                    Yes. The customer can cancel the booked table but he should
                    cancel at least an hour before the time of booking.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="How can a Customer get refund of the cancelled booking?"
                  collapseId="flush-collapse5"
                >
                  <p>
                    Once the customer has canceled a table booking, they can get
                    refunds in 3-4 working days. Customers can check the refund
                    status on the app.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Can a Customer view a list of tables that he has booked in the past?"
                  collapseId="flush-collapse6"
                >
                  <p>
                    Yes. Customers can view their past booked tables in the
                    booking history section.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Does a Customer needs to get registered to book the tables?"
                  collapseId="flush-collapse7"
                >
                  <p>
                    Yes, the Customer needs to get registered to book the
                    tables.
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
            <div className="col-md-12 ecommerce__Quick_FAQ">
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
                    title="Restaurant Table Booking System Development"
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
