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
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { Collapse } from "react-bootstrap";


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
      title: "Do we get alerts when route deviation or overspeeding?",
      content: "Yes, vehicle tracking software will get instantly alert when drives deviated from root & speed up their vehicle over limit.",
    },
    {
      key: "collapseTwo",
      title: "How it is different from GPS tracking system?",
      content:
        "The technology behind this system is same but GPS fleet management system is mainly a business tool which track your commercial vehicle or private as well.",
    },
    {
      key: "collapseThree",
      title:
        "Are there restrictions to the number of assets that can be monitored?",
      content:
        "No. there is no restriction in numbers of assets. You can track as much as vehicle you want.",
    },
    {
      key: "collapseFour",
      title: "Can I have more than one user access my fleet?",
      content:
        "Yes, additional user account can be added into the system as per your requirement.",
    },
    {
      key: "collapseFive",
      title: "Can I access current and past data?",
      content:
        "Yes, you can access past 1 year data on the fleet system.",
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
      <div className="top-head-custom vehicle-tracking">
        <div className="container">
          <div className="col-md-8">
            <div className="head-enquiry">
              <h1>Custom GPS Vehicle Tracking System</h1>
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
                    title="Custom GPS Vehicle Tracking System"
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
              <li>Improve vehicle security</li>
              <li>Live, web-based vehicle tracking</li>
              <li>Cut off engine and control remotely</li>
              <li>Compatible with many kinds of gps vehicle</li>
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
                  GPS Vehicle
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
          <h2>Custom GPS Vehicle Tracking System</h2>
        </div>
        <div className="inner_content_SBG">
          <div className="container">
            <p>
              Logicspice offers custom GPS tracking system which allows you to
              track vehicle any time. The addition features of vehicle gps
              tracking software allow to track the vehicle past navigation and
              the present navigation. GPS vehicle tracking system is applicable
              for domestic and commercial vehicles, trucks, motorcycles, boats,
              ships, trains and nearly all means of transportation.
            </p>

            <p>
              The vehicle GPS fleet tracking application features does not end
              here. It also give details about vehicle speed, engine
              performance, driver behaviour and more. Our Vehicle GPS tracking
              system can be customized according to you need. Whether your
              business need driver identity, camera, seat belt, open & close
              door notification.
            </p>

            <p>
              This fleet tracking system information can be viewed on electronic
              maps. We are one of the best custom vehicle GPS tracking
              application development company who deliver best result to
              clients.
            </p>
          </div>
        </div>
      </div>

      <div className="demand_app">
        <div className="container">
          <h2>
            Key Benefits of Our GPS Vehicle Tracking Software on demand
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
                    alt="icon5"
                  />
                </div>
                <div className="demand-content">
                  <h3>Increase Your Profitability</h3>
                  <p>
                    It is the clear insight that your business needs to make
                    stable decisions to increase profitability.
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
                  <h3>Safeguard Business Reputation</h3>
                  <p>
                    Monitor driver behaviour on the road, reducing accidents and
                    keep your driver safe.
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
                  <h3>Connect Your Fleet</h3>
                  <p>
                    A GPS tracking solution allows you to track your fleet at
                    any given time through a mobile device.
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
                  <h3>Easily Track Compliance</h3>
                  <p>
                    With automated GPS tracking solutions, compliance can be
                    easily monitored, with no room for human error.
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
                  <h3>Measure Key Metrics</h3>
                  <p>
                    Protect them from safety hazards like harsh braking,
                    speeding or insufficient rest breaks.
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
                  <h3>Maintain Customer Satisfaction</h3>
                  <p>
                    It includes messaging tools and optimised routing features
                    will mean your drivers can reach their destinations on time.
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100}
                    src="/img/customsolutions/b_icon6.png"
                    alt="icon12"
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
            Vehicle GPS Tracking App Development Features
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
                          src="/img/customsolutions/Control-Fuel-waste.png"
                          alt="Delivery Status"
                        />
                        <h3>Control Fuel waste</h3>
                        <p>
                          Eliminate poor driving habits such as rash driving,
                          speeding, idling and reduce flue cost by 13%.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/Real-time-gps-tracking.png"
                          alt="Smart Routing"
                        />
                        <h3>Real time gps tracking</h3>
                        <p>
                          Speeding alert, excessive stoppage alert, driver
                          behavior, fuel usage alert, over-speeding and more
                          alerts.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/Geo-fencing.png"
                          alt="Easy to Use"
                        />
                        <h3>Geo fencing</h3>
                        <p>
                          Create geographical boundaries and an alert is sent
                          out when the vehicle enters to geo fencing area.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/Trip-History.png"
                          alt="Automated Dispatching"
                        />
                        <h3>Trip History </h3>
                        <p>
                          Track all the trips made by the vehicle, including
                          their speed, travelling distance.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/Driver-Behavior-Monitoring.png"
                          alt="Admin Control"
                        />
                        <h3>Driver Behavior Monitoring</h3>
                        <p>
                          Ranking and scoring for driver behavior, worst & best
                          driver basis on the driving, fuel usage, speeding.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/Single-Map.png"
                          alt="Ratings & Reviews"
                        />
                        <h3>Single Map</h3>
                        <p>
                          Track all your vehicles on a single map along with the
                          status and geographical information of the vehicle.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/Connect-with-mobile-app.png"
                          alt="Track Sales"
                        />
                        <h3>Connect with mobile app</h3>
                        <p>
                          Easily connect this system to mobile app and track all
                          the vehicles wherever you want.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/Real-Time-Alerts.png"
                          alt="Partial & Failed Delivery Status"
                        />
                        <h3>Real Time Alerts</h3>
                        <p>
                          Speeding alert, excessive stoppage alert, driver
                          behavior, fuel usage alert, over-speeding and more
                          alerts.
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
          <h2>Vehicle Management System Development Solution</h2>

          <Customsolutiontabs />
        </div>
      </div>

      {/* <!--<div className="used_technology_section" id="technologies">
    <div className="container">
        <h4 className="titlesettop titlesettop_mar"><span>Used Technologies</span> and Server Requirements</h4>     
        <div className="used_technology_section_dataa">
            <ul>
                <li data-aos="fade-up"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/customsolutions/tech_ios_icon.png" alt="iOS"/></div><div className="icntechimg_nm">iOS</div></li>
                <li data-aos="fade-up"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/customsolutions/tech_java_icon.png" alt="Java"/></div><div className="icntechimg_nm">Java</div></li>
                <li data-aos="fade-up"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/customsolutions/tech_android_icon.png" alt="Android"/></div><div className="icntechimg_nm">Android</div></li>
                <li data-aos="fade-up"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/customsolutions/tech_php_icon.png" alt="PHP"/></div><div className="icntechimg_nm">PHP</div></li>
                <li data-aos="fade-up"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/customsolutions/tech_cakephp_icon.png" alt="CakePHP"/></div><div className="icntechimg_nm">CakePHP</div></li>
                <li data-aos="fade-up"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/customsolutions/tech_bootstrap_icon.png" alt="Bootstrap"/></div><div className="icntechimg_nm">Bootstrap</div></li>
                <li data-aos="fade-up"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/customsolutions/tech_mysql_icon.png" alt="MySQL"/></div><div className="icntechimg_nm">MySQL</div></li>
                <li data-aos="fade-up"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/customsolutions/tech_apache_icon.png" alt="Apache"/></div><div className="icntechimg_nm">Apache</div></li>
            </ul>
        </div>
    </div>
</div>--> */}
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
                  headerTitle="Do we get alerts when route deviation or overspeeding?"
                  collapseId="flush-collapse1"
                >
                  <p>
                    Yes, vehicle tracking software will get instantly alert when
                    drives deviated from root & speed up their vehicle over
                    limit.{" "}
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="How it is different from GPS tracking system?"
                  collapseId="flush-collapse2"
                >
                  <p>
                    The technology behind this system is same but GPS fleet
                    management system is mainly a business tool which track your
                    commercial vehicle or private as well.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Are there restrictions to the number of assets that can be monitored?"
                  collapseId="flush-collapse3"
                >
                  <p>
                    No. there is no restriction in numbers of assets. You can
                    track as much as vehicle you want.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Can I have more than one user access my fleet?"
                  collapseId="flush-collapse4"
                >
                  <p>
                    Yes, additional user account can be added into the system as
                    per your requirement.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Can I access current and past data?"
                  collapseId="flush-collapse5"
                >
                  <p>
                    Yes, you can access past 1 year data on the fleet system.{" "}
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
                    title="Custom GPS Vehicle Tracking System"
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
