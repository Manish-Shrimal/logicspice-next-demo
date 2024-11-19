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
import { Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Support from "@/app/Components/Support";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBModal,
  MDBModalBody,
} from "mdb-react-ui-kit";

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
      title: "Can people rate the survey if they have not taken it?",
      content: "No people can only rate the survey if they have taken it.",
    },
    {
      key: "collapseTwo",
      title: "How can people rate a survey?",
      content:
        "Once people have taken the surveys, they will receive the link through which they can give a rating to the survey. They can also write a review along with the given rating.",
    },
    {
      key: "collapseThree",
      title:
        "In what format can surveyors add questions to the surveys created by them?",
      content:
        "Surveyors can add the questions in the survey in form of multiple choice and Essay format.",
    },
    {
      key: "collapseFour",
      title: "How can a surveyor take the membership plan on the app?",
      content:
        "Surveyor can opt for taking the membership plan by paying through an integrated payment gateway. By taking the membership plan they can access more detailed statistics.",
    },
    {
      key: "collapseFive",
      title: "How can people search for surveys that they might want to take?",
      content:
        "People can search for the surveys by selecting the categories in which they want to take them or by entering the keywords related to their search.",
    },
    {
      key: "collapseSix",
      title: "How can the surveyors share the survey that they have created?",
      content:
        "Once the surveyors have created a survey, they can share the same to their social media network by clicking on the respective icons.",
    },
    {
      key: "collapseSeven",
      title:
        "What kind of statistics can a surveyor see once he has created the survey?",
      content:
        "Once the surveyor has created the survey, they can see the statistics related to the people who have attended the survey.",
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
      <div className="top-head-custom Survey-App">
        <div className="container">
          <div className="col-md-8">
            <div className="head-enquiry">
              <h1>Custom Survey App Development</h1>
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
                    title="Custom Survey App Development"
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
              <li>Powerful Solution</li>
              <li>Quality UI/UX</li>
              <li>High Engagement</li>
              <li>Rapid growth for enterprise application development</li>
            </ul>
            {/*  */}
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
          <h2>Custom Survey App Development </h2>
        </div>
        <div className="inner_content_SBG">
          <div className="container">
            <p>
              Our custom Survey app solution will serve as an attractive medium
              for surveyors to create new surveys that can be found by visitors
              of the app. Surveyors can create a account on the app to add a
              survey to it.{" "}
            </p>

            <p>
              With the help on on demand survey app development, they can manage
              their public profile and the surveys that they have already added.
              Once the surveyor has added the survey, he can view the statistics
              regarding them and share it to their social media network. They
              can view the ratings and reviews that are given to the survey.
            </p>

            <p>
              People can visit the app to search for the surveys they want to
              take. They can choose the category of the survey or search it
              through keywords. L Logicspice offers custom survey website
              development which allow users to view the details of the Survey
              and the profile of the surveyor. People can take the survey and
              share it to their social media network. Once they have taken the
              survey they can give a rating to it along with a review.
            </p>
          </div>
        </div>
      </div>

      <div className="demand_app">
        <div className="container">
          <h2>Key Benefits Of Our On Demand Survey App Development</h2>

          <div className="row">
            <div className="col-sm-4">
              <div className="demand-card" data-aos="fade-right">
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
                  <h3>Advance Search/Filters </h3>
                  <p>
                    Visitors can use the categories to search for surveys or
                    they can use keywords
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
                    alt="img6"
                  />
                </div>
                <div className="demand-content">
                  <h3>Survey Rating</h3>
                  <p>
                    Visitors can give rating to the surveys that they may have
                    taken which can be viewed by other visitors and the surveyor
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
                    alt="img7"
                  />
                </div>
                <div className="demand-content">
                  <h3>Social Media Sharing </h3>
                  <p>
                    {" "}
                    Visitors can share the surveys that they like to their
                    social media network
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
              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Survey Statistics</h3>
                  <p>
                    Surveyors can see detailed statistics of the survey which is
                    taken by the visitors
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

              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Surveyor Public Profile</h3>
                  <p>
                    Surveyors can maintain their profile which can be seen by
                    the visitors who take the survey
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

              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Upgrade Membership</h3>
                  <p>
                    Surveyors can upgrade their membership to access more
                    detailed statistics of the app
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
          Custom Survey App/Web Development Features
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
                          src="/img/customsolutions/Surveyor-Profile.png"
                          alt="Delivery Status"
                        />
                        <h3>Surveyor Profile</h3>
                        <p>
                          Manage profile with all the details, add, edit or
                          update your details in dashboard.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Survey-Creation.png"
                          alt="Smart Routing"
                        />
                        <h3>Survey Creation</h3>
                        <p>
                          Create any survey by adding the required details,
                          update details and delete the details.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Survey-Statistics.png"
                          alt="Easy to Use"
                        />
                        <h3>Survey Statistics</h3>
                        <p>
                          Check the statistics of the survey; total no. of users
                          in the survey and the success rate of survey.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Survey-Details.png"
                          alt="Automated Dispatching"
                        />
                        <h3>Survey Details</h3>
                        <p>
                          Check complete details of survey, type of survey,
                          category, description, location of survey.
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Advanced-Reporting.png"
                          alt="Admin Control"
                        />
                        <h3>Advanced Reporting</h3>
                        <p>
                          Admin can check the advance report of the survey which
                          includes every detail of the survey.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Manage-Category.png"
                          alt="Ratings & Reviews"
                        />
                        <h3>Manage Category</h3>
                        <p>
                          Admin can manage the category for surveys, include
                          more categories or delete category.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Schedule-email-invitations.png"
                          alt="Track Sales"
                        />
                        <h3>Schedule email invitations</h3>
                        <p>
                          Schedule emails to the users to remind them or update
                          them about the survey & it’s details.
                        </p>
                      </div>
                      <div className="ftr-detail">
                        <Image
                          unoptimized={true}
                          height={100}
                          width={60}
                          src="/img/customsolutions/Manage-Surveyors.png"
                          alt="Partial & Failed Delivery Status"
                        />
                        <h3>Manage Surveyors</h3>
                        <p>
                          Manage people who take surveys and check their total
                          no. of surveys and success rate in survey.
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
          <h2>Survey Custom App Development Solution</h2>
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
                  Yes, the business owner can upload multiple services/products
                  that he deals in.
                </p>
              </MDBAccordionItem>

              <MDBAccordionItem
                headerTitle="How can a customer ensure the authenticity of the information of different businesses?"
                collapseId="flush-collapse4"
              >
                <p>
                  Whenever a business owner creates a page for his business, it
                  has to be approved by the admin.
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
                  No, You can&apos;t resell the software. All rights will remain
                  with Logicspice only.
                </p>
              </MDBAccordionItem>

              <MDBAccordionItem
                headerTitle="Do you offer Money Back Guarantee?"
                collapseId="flush-collapse9"
              >
                <p>
                  Yes, we offer 30 days money-back guarantee to ensure customer
                  satisfaction with our software. If for any reason, you wish to
                  discontinue using the product, you can ask us for a refund. We
                  will refund your total money except the installation and
                  configuration charges, which is USD 65 or 20% of the
                  application cost, whichever is greater.
                </p>
              </MDBAccordionItem>

              <MDBAccordionItem
                headerTitle="Along with hosting server details, what other recommendations?"
                collapseId="flush-collapse10"
              >
                <p>
                  We recommend you purchase an SSL certificate along with a
                  hosting server, considering that an SSL certificate is
                  necessary for all websites these days and it provides a secure
                  layer to the website as well.
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
                    title="Custom Survey App Development"
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
