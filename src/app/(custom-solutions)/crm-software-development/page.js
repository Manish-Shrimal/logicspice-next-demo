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
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Support from "@/app/Components/Support";
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
      title: "How much time will be taken to implement the CRM?",
      content:
        "Time taken to implement your CRM depends on the level of customization and data migration. CRM implementation time frame generally ranges 5-6 weeks.",
    },
    {
      key: "collapseTwo",
      title: "Once implemented will we receive some support from your side?",
      content:
        "Yes, We will provide one month free support after final delivery of the CRM.",
    },
    {
      key: "collapseThree",
      title: "What are CRM technical requirements?",
      content:
        "There are no such specific technical requirements. All you need to use the CRM system is the internet browser that you are using now. There’s no software to install, so you can use the CRM system on PCs, Macs, iPads and smartphones.",
    },
    {
      key: "collapseFour",
      title: "Will you share our information with third parties?",
      content:
        "We will never sell your information to third parties. The only third parties who will receive any of your data are those who you choose to grant data, or who need data in order to implement your services, such as a payment processor.",
    },
    {
      key: "collapseFive",
      title: "How much Server Memory is required for the CRM?",
      content:
        "Database server memory size is critical to performance and should be no less than the anticipated database size after one year plus 1 gigabyte.",
    },
    {
      key: "collapseSix",
      title: "How much disk space will be required?",
      content:
        "The amount of disk space required varies widely based on the number of customer records, archiving plans, and backup policies. The disk space can also vary widely based on the amount of information held for each customer. Therefore, it is important to try to estimate this prior to installation and purchase sufficient disk storage to allow for significant growth in the volume of data.",
    },
    {
      key: "collapseSeven",
      title: "Does it matter which kind of user uses the CRM?",
      content:
        "It is important to keep in mind what type of user will be working with the system. For example, 200 call center users use the system more intensively than 200 sales and marketing users.",
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
      <div className="top-head-custom Custom-CRM-Software">
        <div className="container">
          <div className="col-md-8">
            <div className="head-enquiry">
              <h1>Custom CRM Software Development</h1>
              <p>
                CRM is a methodology for managing all your company&apos;s
                relationships and interactions with customers and potential
                buyers. Our customized web solution will help you to Improve
                your business relationships and grow your business.
              </p>

              <div className="btn btn-primary" onClick={openModal}>
                <a>Enquire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="CRM Software Development"
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
              <li>Powerful CRM Solution</li>
              <li>End-to-end Custom Software Application Development.</li>
              <li>Reliable, Secure, Scalable Custom CRM Solution.</li>
              <li>Delivering a robust and effective solution</li>
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
                  CRM Software
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
          <h2>Customer Relationship Management Software</h2>
        </div>
        <div className="inner_content_SBG">
          <div className="container">
            <p>
              Logicspice offers on demand crm software solution and services.
              Through CRM software system you can organize leads lists by
              geographic location and assign to respective sales
              representatives.
            </p>

            <p>
              The program will categorize your sales and customer data into
              manageable chunks that can be used to inform all of the other data
              that you need to make decisions. By custom customer relationship
              management system you will be able to quantify measures that
              otherwise would have no data to consider. Logicspice CRM app
              development & CRM web development professionals can work wonders
              for your business.
            </p>
            <p>
              Some of the advantages of CRM software are planning for targeted
              market campaigns towards specific clientele. The strategies used
              will be relying on the data comes from the CRM system. CRM
              software solution is generally used by all kind of corporations
              who focus on maintaining a strong relation & engagement with their
              customers. Being a crm software development company, we always
              deliver the best & quality work to the client.
            </p>
          </div>
        </div>
      </div>
      <div className="demand_app">
        <div className="container">
          <h2>Key Benefits of Our On Demand CRM Software Development</h2>

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
                  <h3>Account Management</h3>
                  <p>
                    Track all businesses/firms you work with. These can be
                    future clients, customers, referral sources, or general
                    business connections.
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
                  <h3>Sales Activity Tracking</h3>
                  <p>
                    Tasks you need to do/complete in order to move a sale
                    forward.
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
                  <h3>Opportunity Management </h3>
                  <p>
                    Create a pipeline of future closed/potential business for
                    you.
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
                alt="img8"
              />
            </div>
            <div className="col-sm-4">
              <div
                className="demand-card aos-init aos-animate"
                data-aos="fade-left"
              >
                <div className="demand-content">
                  <h3>Lead Management </h3>
                  <p>
                    Track leads generated including who the sales rep is, what
                    products/services it’s for, timing, status, etc.
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
                  <h3>Campaign Management</h3>
                  <p>
                    Track variety of information about an event, mailing,
                    emailing or other marketing initiative.
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
                  <h3>Report Management </h3>
                  <p>
                    Create reports based on Demographics, Sales stage, Leads and
                    Sales profits.
                  </p>
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
                  {/* <div className="row">
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Bid-Offer-Management.png"
                          alt="Smart Routing"
                        />
                        <h3>Bid Offer Management For Seller</h3>
                        <p>
                          Sellers can view the bid offers for their listed
                          products. Check the highest bidder, which will be the
                          auction winner.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/search.png"
                          alt="Delivery Status"
                        />
                        <h3>Search Product</h3>
                        <p>
                          Buyers can search for product by selecting the
                          category/sub-category, location &amp; keywords over
                          the website.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/payments.png"
                          alt="Partial &amp; Failed Delivery Status"
                        />
                        <h3>Payment</h3>
                        <p>
                          Buyers can make payment for purchase products by
                          secure credit card processing.
                        </p>
                      </div>

                      <div className="ftr-detail">
                        <Image unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/User-Profile.png"
                          alt="Track Sales"
                        />
                        <h3>User Profile</h3>
                        <p>
                          Buyers/Sellers will be able to manage their basic
                          information includes add/edit details.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Shop-Management.png"
                          alt="Admin Control"
                        />
                        <h3>Shop Management For Seller</h3>
                        <p>
                          Sellers can create their shop/store, one seller can
                          only create one store. They will be able to
                          add/edit/delete store.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/product-listing.png"
                          alt="Ratings &amp; Reviews"
                        />
                        <h3>Product Listing</h3>
                        <p>
                          Buyers can view listings of product and sort them by
                          keyword, price or alphabetical format.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/manage-product.png"
                          alt="Automated Dispatching"
                        />
                        <h3>Product Management For Seller</h3>
                        <p>
                          Sellers can add, edit or delete the products online.
                          While adding a product they have to enter the details.
                        </p>
                      </div>

                      <div className="ftr-detail">
                        <Image unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/product-detail.png"
                          alt="Easy to Use"
                        />
                        <h3>Product Detail</h3>
                        <p>
                          Buyer can view the product Image, category,
                          sub-category, seller name or store name, store
                          location.
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Lead-Management.png"
                          alt="Delivery Status"
                        />
                        <h3>Lead Management</h3>
                        <p>
                          Determine the customers based upon the demographics
                          and many other psychological factors.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Sales-Management.png"
                          alt="Smart Routing"
                        />
                        <h3>Sales Management</h3>
                        <p>
                          Manager can easily manage their sales team performance
                          and data can be organized by the salesperson.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Assign-Salesperson.png"
                          alt="Easy to Use"
                        />
                        <h3>Assign to Salesperson</h3>
                        <p>
                          Organize the leads by work, location, skills and
                          assign it to the respective sales representatives.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Chat-Integration.png"
                          alt="Automated Dispatching"
                        />
                        <h3>Chat Integration </h3>
                        <p>
                          You can directly chat to the customers, clients, leads
                          and provide them customer support.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Receive-Alert-Notifications.png"
                          alt="Admin Control"
                        />
                        <h3>Receive Alert Notifications</h3>
                        <p>
                          Receive alerts on email and popup when any task or
                          leads assigned to you with the appropriate details.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Email-marketing-integration.png"
                          alt="Ratings &amp; Reviews"
                        />
                        <h3>Email marketing integration</h3>
                        <p>
                          Send emails to your customer about your latest
                          products, services and offers.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Customer-Satisfaction.png"
                          alt="Track Sales"
                        />
                        <h3>Customer Satisfaction</h3>
                        <p>
                          Manage each customer very carefully and efficiently to
                          make customer satisfied at high level.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/View-Reports.png"
                          alt="Partial &amp; Failed Delivery Status"
                        />
                        <h3>View Reports</h3>
                        <p>
                          View the report of the each client and check the
                          overall status of the report either it is good or not.{" "}
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
          <h2>Custom CRM App Development Solution</h2>
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
                  headerTitle="How much time will be taken to implement the CRM?"
                  collapseId="flush-collapse1"
                >
                  <p>
                    Time taken to implement your CRM depends on the level of
                    customization and data migration. CRM implementation time
                    frame generally ranges 5-6 weeks.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Once implemented will we receive some support from your side?"
                  collapseId="flush-collapse2"
                >
                  <p>
                    Yes, We will provide one month free support after final
                    delivery of the CRM.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="What are CRM technical requirements?"
                  collapseId="flush-collapse3"
                >
                  <p>
                    There are no such specific technical requirements. All you
                    need to use the CRM system is the internet browser that you
                    are using now. Thereâ€™s no software to install, so you can
                    use the CRM system on PCs, Macs, iPads and smartphones.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Will you share our information with third parties?"
                  collapseId="flush-collapse4"
                >
                  <p>
                    We will never sell your information to third parties. The
                    only third parties who will receive any of your data are
                    those who you choose to grant data, or who need data in
                    order to implement your services, such as a payment
                    processor.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="How much Server Memory is required for the CRM?"
                  collapseId="flush-collapse5"
                >
                  <p>
                    Database server memory size is critical to performance and
                    should be no less than the anticipated database size after
                    one year plus 1 gigabyte.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="How much disk space will be required?"
                  collapseId="flush-collapse6"
                >
                  <p>
                    The amount of disk space required varies widely based on the
                    number of customer records, archiving plans, and backup
                    policies. The disk space can also vary widely based on the
                    amount of information held for each customer. Therefore, it
                    is important to try to estimate this prior to installation
                    and purchase sufficient disk storage to allow for
                    significant growth in the volume of data.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Does it matter which kind of user uses the CRM?"
                  collapseId="flush-collapse7"
                >
                  <p>
                    It is important to keep in mind what type of user will be
                    working with the system. For example, 200 call center users
                    use the system more intensively than 200 sales and marketing
                    users.
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
                    title="Custom CRM App Development Solution"
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
