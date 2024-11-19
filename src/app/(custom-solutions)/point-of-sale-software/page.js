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
      title: "What’s the meaning of POS?",
      content: "POS means Point of Sale; it’s a place where the sales take place. On macro level, it can be referred to a Mall, market, etc. and on micro level, a retailer store’s checkout counter.",
    },
    {
      key: "collapseTwo",
      title: "What is a POS Device?",
      content:
        "A POS Device is an electronic component which is used to accept card payments at various locations. It reads the information on the cards – debit or credit, checks the bank server for sufficient funds and transfers it from customer's account to the seller’s account.",
    },
    {
      key: "collapseThree",
      title:
        "What does a POS system includes?",
      content:
        "The POS system comprises of a point of sale software, computer, cash register, monitor, cash drawer, printer for receipts, client display, card reader and a barcode scanner.",
    },
    {
      key: "collapseFour",
      title: "Is your System well-secured?",
      content:
        "Yes, absolutely. To ensure your data is completely secured, we apply a multi-layer approach for data protection.",
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
      <div className="top-head-custom point-sale">
        <div className="container">
          <div className="col-md-8">
            <div className="head-enquiry">
              <h1>Custom Point of Sale Software Development</h1>
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
                    title="Loan System Custom Development"
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
              <li>Track Sales</li>
              <li>Work Offline</li>
              <li>Build Reports</li>
              <li>Accept Payments</li>
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
                  Point of Sale Software
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
          <h2>Best POS Software</h2>
        </div>
        <div className="inner_content_SBG">
          <div className="container">
            <p>
              Point of sale system have completely redefined the way you shop by
              allowing the customers to pay directly through debit and credit
              cards. It comprises of a cash register, card swiper, a printer for
              printing receipts and a cash drawer. It&apos;s a place where sales
              take place more like a checkout counter which has made the
              handling of transactions easier.
            </p>
            <p>
              Point of sale system play a great role in Retail or wholesale
              store industry, where generally the customers are higher in number
              than the number of checkout counters; this is why, a smooth, fast
              and efficient sale software is needed.
            </p>
            <div id="more-content" style={{ display: "none" }}>
              <p>
                To manage and create a perfect Point of sale system for your
                business venture, LogicSpice is here to help you. We can help
                you with any type of point of sale pos software to satiate your
                needs.
              </p>
              <p>
                LogicSpice is one of the leading IT companies that can provide
                you with mobile point of sale systems software & point of sale
                computer software to help you enhance your business. Our POS
                software help you to generate billing in a better manner and
                also keep a better watch on inventory systems.
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
                  To manage and create a perfect Point of sale system for your
                  business venture, LogicSpice is here to help you. We can help
                  you with any type of point of sale pos software to satiate
                  your needs.
                </p>

                <p>
                  LogicSpice is one of the leading IT companies that can provide
                  you with mobile point of sale systems software & point of sale
                  computer software to help you enhance your business. Our POS
                  software help you to generate billing in a better manner and
                  also keep a better watch on inventory systems.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="demand_app">
        <div className="container">
          <h2>Retail POS Software For Any of These Businesses</h2>
          <div className="pos-soft">
            <div className="row">
              <div className="col-md-6">
                <ul>
                  <li>
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Fashion Boutiques
                  </li>
                  <li>
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Hardware Stores
                  </li>
                  <li>
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Sports &amp; Outdoors
                  </li>
                  <li>
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Food &amp; Drink Retail
                  </li>
                  <li>
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Health &amp; Beauty Retail
                  </li>
                  <li>
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Bike Shops
                  </li>
                  <li>
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Electronics
                  </li>
                  <li>
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Shoe Stores
                  </li>
                  <li>
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Fitness &amp; Supplements
                  </li>
                  <li>
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Vape Stores
                  </li>
                  <li>
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Toys &amp; Hobbies
                  </li>
                  <li>
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Jewelry
                  </li>
                  <li>
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Pet Store
                  </li>
                  <li>
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>{" "}
                    Non Profit
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <Image
                  unoptimized={true}
                  height={500 / (500 / 500)}
                  width={500}
                  src="/img/customsolutions/pos.png"
                  alt="Delivery Status"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="content_area feature_inner" id="features">
        <div className="container">
          <h2 className="titlesettop titlesettop_mar">
          Point Of Sale Software Features
          </h2>

          <div className="features-tab">
            <div className="clearfix">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                  <Link
                    href="#features-car1"
                    aria-controls="features-car"
                    role="tab"
                    data-toggle="tab"
                  >
                    Features
                  </Link>
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
                          src="/img/customsolutions/sales-tracking.png"
                          alt="Delivery Status"
                        />
                        <h3>Sales tracking management</h3>
                        <p>
                          {" "}
                          Our POS software help you to keep a track on your
                          sales with ease and aplomb.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/sales-operations.png"
                          alt="Smart Routing"
                        />
                        <h3>Sales Operations</h3>
                        <p>
                          Make easy for customers for returns, refunds and email
                          receipts by using this software.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/payments.png"
                          alt="Automated Dispatching"
                        />
                        <h3>Payments & Gift Cards</h3>
                        <p>
                          Accept payment through debit card, credit card and
                          gift cards and go cashless with this digital system.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/work-offline.png"
                          alt="Partial & Failed Delivery Status"
                        />
                        <h3>Work Offline</h3>
                        <p>
                          Continue your sales when internet goes down, it will
                          automatically resync your sales when online.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/manage-product.png"
                          alt="Real Time Information"
                        />
                        <h3>Manage Product</h3>
                        <p>
                          Add products, Edit products, remove products, Edit
                          title, include images & description.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/orders.png"
                          alt="Push Notifications"
                        />
                        <h3>Orders</h3>
                        <p>
                          Use automated reordering, restocking, reorder points
                          to manage everything automatically without any hassle.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/customers.png"
                          alt="Admin Control"
                        />
                        <h3>Customers</h3>
                        <p>
                          View purchase history, balance and make a group of
                          those customers to communicate with them in future.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/users.png"
                          alt="Ratings & Reviews"
                        />
                        <h3>Users</h3>
                        <p>
                          Allow to make user account so they can manage their
                          purchase and account details.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/build-reports.png"
                          alt="Deliverer Account"
                        />
                        <h3>Build Reports</h3>
                        <p>
                          {" "}
                          You can generate monthly statements about the sales
                          record to make a check about the progress of your
                          sales.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/sale-target.png"
                          alt="Track Sales"
                        />
                        <h3>Sale Target</h3>
                        <p>
                          Set goals of selling and monitor the date that how
                          much you have achieved at the end of month.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/add-ons.png"
                          alt="Easy to Use"
                        />
                        <h3>Add-Ons</h3>
                        <p>
                          Extend your operations by adding more add-ons on this
                          POS software to give more ease to customers.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/multi-currency.png"
                          alt="Deliveries on Time"
                        />
                        <h3>Multi Currency Support</h3>
                        <p>
                          This software will work worldwide with multi currency
                          support to engage more audience.
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
          <h2>Point Of Sale Software Solution</h2>
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
                    title="Custom Point of Sale Software Development"
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
