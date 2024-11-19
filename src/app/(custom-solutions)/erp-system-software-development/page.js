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
      title: "Why ERP system is necessary?",
      content: "ERP system helps to manage all company’s resource in organised way. It integrates all business management areas, like planning, human resources, engineering, inventory and materials management, manufacturing, order processing, sales and purchasing, accounting, finance etc. The benefits of using ERP software is to support to streamlined the processes and workflows.",
    },
    {
      key: "collapseTwo",
      title: "Do I need a new ERP system?",
      content:
        "If you think that your current ERP is not working properly and your goals are not fulfill, you should most probably implement a new, more efficient ERP system.",
    },
    // {
    //   key: "collapseThree",
    //   title:
    //     "How to choose the best ERP system solution?",
    //   content:
    //     ""
    // },
    {
      key: "collapseThree",
      title: "How to choose the best ERP system solution?",
      content: `To take the best choice of an ERP system, consider the following factors:
      - The ERP system consists of multiple modules. Choose those that you really need.
      - Correlate the cost for ERP development versus the ROI derived from its usage.
      - Ensure proper functioning of the ERP system.
      - Calculate the long-term benefits.
      - Ensure post-implementation support.`
    },
    
    {
      key: "collapseFour",
      title: "Is your system scalable? Is it possible to add new module at a later date?",
      content:
        "Yes, you can add new functionality in future.",
    },
    {
      key: "collapseFive",
      title: "Can we buy separate modules of the ERP system?",
      content:
        "Yes, you can buy separate modules of ERP. Some modules have integrated functionality and should be purchased together.",
    },
    {
      key: "collapseSix",
      title: "Do you support the ERP system after its implementation?",
      content:
        "Yes, we will support you after its implementation. Our support desk specialists and IT engineers will assist you for resolving all kinds of issues.",
    },
    {
      key: "collapseSeven",
      title: "Do you implement quality assurance (QA) procedures for ERP projects?",
      content:
        "Yes, we can implement the quality assurance procedure. We have an experienced team of QA.",
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
      <div className="top-head-custom erp-System">
        <div className="container">
          <div className="col-md-8">
            <div className="head-enquiry">
              <h1>Custom ERP System Software Development</h1>
              <p>
                ERP system refers to a type of software that organizations use
                to manage day-to-day business activities and our best team of
                developers offer you the customized ERP solution for your
                business.
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
              <li>Robust ERP Solution</li>
              <li>End-to-end Custom Software Application Development.</li>
              <li>Reliable, Secure, Scalable Custom ERP Solution.</li>
              <li>Delivering a smooth and effective solution.</li>
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
                  ERP System
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="BFC_logic">
        <div className="container">
          <h2>Why Logicspice Is The Best For ERP Software Development?</h2>
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
                  We support our customers for business analysis, designing,
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
                  doesnâ€™t come up with a ready made script.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="SBC_logic">
        <div className="container">
          <h2>ERP Application Development</h2>
        </div>
        <div className="inner_content_SBG">
          <div className="container">
            <p>
              An enterprise resource planning is an essential for sustained
              growth and development, while keeping your organization
              competitive. It can immensely help you streamline the processes
              across manufacturing, sales, finance, procurement, HR management
              and other services.
            </p>
            <p>
              Logicspice offers the best custom ERP software solution that helps
              to all kind of organizations from manufacturing to trading and
              small to midsize enterprises can be more productive and
              profitable. Our ERP can integrate all the data across the
              enterprises and can generate the reports for sales, inventory,
              expenses, profit and loss which will help to take the strategic
              planning decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="demand_app">
        <div className="container">
          <h2>Key Benefits of ERP to Organisation</h2>
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
                  <h3>Getting High ROI</h3>
                  <p>
                    ERP makes your employees more productive and it supports to
                    minimize the operating costs. Thus will get high ROI.
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
                  <h3>Help to Increase the overall performance</h3>
                  <p>
                    Integrate all the departments into a single system. As a
                    result, an organization can increase overall performance.
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
                  <h3>Streamlined Business Processes</h3>
                  <p>
                    Best utilization of all resources and assets. Help to
                    improve the standardization and high visibility of business
                    processes.
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
                alt="#"
              />
            </div>
            <div className="col-sm-4">
              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Mobility</h3>
                  <p>
                    Having centralized database access from a remote location.{" "}
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100}
                    src="/img/customsolutions/b_icon2.png"
                    alt="icon8"
                  />
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Best reporting and analytics tools</h3>
                  <p>
                    Generate the reports on a real-time and regular basis.
                    Management can decide their budgets, sales, target
                    strategies using these reports.
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100}
                    src="/img/customsolutions/b_icon4.png"
                    alt="icon9"
                  />
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Clarity and control</h3>
                  <p>
                    Management can easily communicate across departments and
                    units and can track every operation on a single dashboard.
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100}
                    src="/img/customsolutions/b_icon6.png"
                    alt="icon10"
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
            Custom ERP System Features
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
                    <div className="col-sm-4">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/Bid-Offer-Management.png"
                          alt="Smart Routing"
                        />
                        <h3>Integration</h3>
                        <p>
                          The ERP software can integrate a number of functional
                          modules, which support execution of key business
                          processes, such as: Customer Relationship Management
                          (CRM), Human Resource Management (HRM),Sales and
                          Distribution, Finance, Accounting and Controlling and
                          etc.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/search.png"
                          alt="Delivery Status"
                        />
                        <h3>Automation</h3>
                        <p>
                          It&apos;s automates common monotonous tasks including
                          payroll, reporting, invoicing, order entry, accounting
                          and more. Automation cuts down the employees’ manual
                          task time ensures more effective work.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/payments.png"
                          alt="Partial & Failed Delivery Status"
                        />
                        <h3>Accounting</h3>
                        <p>
                          It contain advance accounting tools which helps to
                          manage vital processes like accounts sales, accounts
                          purchase, profit, loss, fixed-asset, tax management
                          and risk management.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/product-listing.png"
                          alt="Ratings & Reviews"
                        />
                        <h3>Tracking and Visibility</h3>
                        <p>
                          ERP provide comprehensive visibility of supply chain.
                          It allows users to understand and predict issues such
                          as delays and stock disruption.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/Shop-Management.png"
                          alt="Admin Control"
                        />
                        <h3>Reporting</h3>
                        <p>
                          It provides detailed reports that are instinctive,
                          actionable and pertinent. Reporting panel supports
                          customizable dashboards, Gantt charts, pie charts, bar
                          diagram or chart and other visual representations.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          src="/img/customsolutions/User-Profile.png"
                          alt="Track Sales"
                        />
                        <h3>Data Analysis</h3>
                        <p>
                          It&apos;s collecting and processing data from all
                          business functional modules, and makes sense to
                          exploit on that information through analysis.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      <div className="clearfix"></div>
      <div className="app_solution">
        <div className="container">
          <h2>Custom ERP System Software Development</h2>
          <Customsolutiontabs />
        </div>
      </div>

      <section className="content_area feature_inner inductries-innesr">
        <div className="container">
          <h2 className="titlesettop titlesettop_mar">Industries</h2>
          <p>
            Enterprise resource planning (ERP) software can supports to
            following industries
          </p>
          <ul>
            <li>Insurance</li>
            <li>Financial Services</li>
            <li>Logistics</li>
            <li>Education</li>
            <li>Telecom</li>
            <li>Travel</li>
            <li>Healthcare</li>
            <li>Real Estate</li>
            <li>Retail</li>
            <li>Automotive</li>
            <li>Media and Entertainment</li>
          </ul>
        </div>
      </section>
      <div className="clearfix"></div>
      <div className="support_logic">
        <div className="container">
          <h2>What Support You Will Get ?</h2>
          <Support />
        </div>
      </div>
      <div className="clearfix"></div>

      {/* <section className="ecommerce_faq_section CustomSolutionFaqSection">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ecommerce__Quick_FAQ">
              <h4 className="title_main">Quick FAQ</h4>

              <MDBAccordion v-model="activeItem" borderless>
                <MDBAccordionItem
                  headerTitle="Why ERP system is necessary?"
                  collapseId="flush-collapse1"
                >
                  <p>
                    ERP system helps to manage all company’s resource in
                    organised way. It integrates all business management areas,
                    like planning, human resources, engineering, inventory and
                    materials management, manufacturing, order processing, sales
                    and purchasing, accounting, finance etc. The benefits of
                    using ERP software is to support to streamlined the
                    processes and workflows.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Do I need a new ERP system?"
                  collapseId="flush-collapse2"
                >
                  <p>
                    If you think that your current ERP is not working properly
                    and your goals are not fulfill, you should most probably
                    implement a new, more efficient ERP system.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="How to choose the best  ERP system solution?"
                  collapseId="flush-collapse3"
                >
                  <p>
                    To take the best choice of an ERP system consider the
                    following factors:
                    <br />
                    -The ERP system consists of multiple modules. Choose those
                    that you really need.
                    <br />
                    -Correlate the cost for ERP development versus the ROI
                    derived from its usage.
                    <br />
                    - Ensures about functioning of the ERP system. <br />
                    - Calculate the long term benefits.
                    <br />
                    -Ensure about post implementation support.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Is your system scalable? Is it possible to add new module at a later date?"
                  collapseId="flush-collapse4"
                >
                  <p>Yes, you can add new functionality in future.</p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Can we buy separate modules of the ERP system?"
                  collapseId="flush-collapse5"
                >
                  <p>
                    Yes, you can buy separate modules of ERP. Some modules have
                    integrated functionality and should be purchased together.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Do you support the ERP system after its implementation?"
                  collapseId="flush-collapse6"
                >
                  <p>
                    Yes, we will support you after its implementation. Our
                    support desk specialists and IT engineers will assist you
                    for resolving all kinds of issues.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Do you implement quality assurance (QA) procedures for ERP projects?"
                  collapseId="flush-collapse7"
                >
                  <p>
                    Yes, we can implement the quality assurance procedure. We
                    have an experienced team of QA.
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
                    title="Auction System Custom Development"
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
