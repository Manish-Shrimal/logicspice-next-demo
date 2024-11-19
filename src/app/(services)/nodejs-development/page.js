"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
const Page = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.35,
    centerMode: true,
    vertical: false,
    centerPadding: "0",
  };

  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    // console.log(showModal);

    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <NavBar />

      <div className="nodejs-development">
        <section className="laravel-banner node-js-banner">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="laravel-banner-txt">
                  <h1>Node.JS Development Company</h1>
                  <ul>
                    <li>Real-time Application Development</li>
                    <li>Adaptable Scalability Solutions</li>
                    <li>RESTful API Development Skills</li>
                    <li>Full-Stack Development Expertise</li>
                    <li>Cross-Platform Development Capability</li>
                  </ul>
                  <div className="laravel-anquire">
                    <div className="btn btn-primary" onClick={openModal}>
                      <a>Enquire Now</a>
                      {
                        <Enquirymodal
                          modalStatus={showModal}
                          toggle={openModal}
                          title="Node JS Development Company"
                        />
                      }
                    </div>
                    <Link
                      href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
                      target="_blank"
                    >
                      <div className="WhatsappIcon">
                        <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                          <div className="coccoc-alo-ph-circle"></div>
                          <div className="coccoc-alo-ph-circle-fill"></div>
                          <div className="coccoc-alo-ph-img-circle"></div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="page_img">
                  <Image
                    unoptimized={true}
                    width={350}
                    height={500 / (100 / 100)}
                    src="/img/nodejsdevelopment/node-js-img.png"
                    alt="Node JS Development Company"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="laravel-descriptions nodejs-descriptions">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 pull-right">
                <div className="laravel_img">
                  <Image
                    unoptimized={true}
                    width={400}
                    height={500 / (100 / 100)}
                    src="/img/nodejsdevelopment/node-js-logo-img.png"
                    alt="Node JS Development Company"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-6 pull-left">
                <div className="laravel-descriptions-bx" dir="ltr">
                  <h2>
                    Node.JS
                    <br />
                    Development Company
                  </h2>
                  <p>
                    JavaScript is supported by all popular web browsers, due to
                    which Node.js has been the most commonly used programming
                    language for years. It provides the frameworks and Vital
                    libraries for developing the best interactive interface.{" "}
                  </p>
                  <p>
                    We at Logicspice, being one of the best service providers in
                    the node.js application development industry with having
                    proven past record serving the customers across the globe
                    providing customized, robust, scalable yet smooth web and
                    applications solutions to satisfy customers according to
                    their requirements. As an organisation we always look
                    forward to work more productively on a unique well optimized
                    product with a variety of functionality.
                  </p>
                  <p>
                    Experts of the web development industry always advise that
                    Node.js is one of the best technologies for APIs that would
                    be simple to use to develop websites and apps as It is an
                    open source framework that supports cross platform
                    applications.
                  </p>
                  <p>
                    We a{" "}
                    <strong>
                      <i>Node js app development company</i>
                    </strong>
                    , have a team of highly experienced Node.js developers, who
                    have developed a variety of real time web and mobile
                    applications for eCommerce, Finance, Medical, Banking,
                    Education, Transport, and other industries serving customers
                    worldwide. In addition to that we are experts in MongoDB,
                    ExpressJS, and AngularJS. We as a company strongly believe
                    in working with ethics hence our development process is
                    completely transparent, prefers optimized coding, cost
                    effective, and assures to deliver the best product.{" "}
                  </p>
                  <p>
                    If you plan to develop or integrate your application with
                    Node.js, our experts will take care of the entire project
                    within the desired time cycle and budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="laravel-devlopments-services">
          <div className="container">
            <h2>Our Node.Js Development Services</h2>
            <p className="laravel_core_sub2">
              Node.js is supported by all popular web browsers, due to which
              Node.js has
              <br /> been the most commonly used programming language for years.
            </p>
            <div className="laravel-services-bx-top advanced_web_service_bx">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box1">
                      <i>
                        <Image
                          unoptimized={true}
                          width={70}
                          height={100}
                          className="widout-hover"
                          src="/img/nodejsdevelopment/node-js-new-icon1.png"
                          alt="Node JS Development Company"
                        />
                        <Image
                          unoptimized={true}
                          width={70}
                          height={100}
                          className="on-hover"
                          src="/img/nodejsdevelopment/node-js-white-icon1.png"
                          alt="Node JS Development Company"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>API Development & Integration</h3>
                    <p>
                      We are proficient in developing API&apos;s for web
                      applications.
                    </p>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box2">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/nodejsdevelopment/laravel-new-icon2.png"
                          alt="Node JS Development Company"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/nodejsdevelopment/laravel-white-icon2.png"
                          alt="Node JS Development Company"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Plug-ins Development</h3>
                    <p>
                      We expertise in developing plug-ins and module development
                      solutions.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box3">
                      <i>
                        <Image
                          unoptimized={true}
                          width={70}
                          height={100}
                          className="widout-hover"
                          src="/img/nodejsdevelopment/laravel-new-icon3.png"
                          alt="Node JS Development Company"
                        />
                        <Image
                          unoptimized={true}
                          width={70}
                          height={100}
                          className="on-hover"
                          src="/img/nodejsdevelopment/laravel-white-icon3.png"
                          alt="Node JS Development Company"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Enterprise Solution</h3>
                    <p>
                      We develop business apps which help your business expand
                      and grow exponentially.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box4">
                      <i>
                        <Image
                          unoptimized={true}
                          width={70}
                          height={100}
                          className="widout-hover"
                          src="/img/nodejsdevelopment/laravel-new-icon4.png"
                          alt="Node JS Development Company"
                        />
                        <Image
                          unoptimized={true}
                          width={70}
                          height={100}
                          className="on-hover"
                          src="/img/nodejsdevelopment/laravel-white-icon4.png"
                          alt="Node JS Development Company"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Custom Web Application Development</h3>
                    <p>
                      We are specialists in developing the customised web apps
                      which meet your business requirement.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box5">
                      <i>
                        <Image
                          unoptimized={true}
                          width={70}
                          height={100}
                          className="widout-hover"
                          src="/img/nodejsdevelopment/node-js-new-icon2.png"
                          alt="Node JS Development Company"
                        />
                        <Image
                          unoptimized={true}
                          width={70}
                          height={100}
                          className="on-hover"
                          src="/img/nodejsdevelopment/node-js-white-icon2.png"
                          alt="Node JS Development Company"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Upgradation & Migration</h3>
                    <p>
                      Easily get migrated from PHP and CGI to Node.js to enhance
                      its security, speed, and reliability to a whole new level.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box6">
                      <i>
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          className="widout-hover"
                          src="/img/nodejsdevelopment/laravel-new-icon6.png"
                          alt="Node JS Development Company"
                        />
                        <Image
                          unoptimized={true}
                          width={60}
                          height={100}
                          className="on-hover"
                          src="/img/nodejsdevelopment/laravel-white-icon6.png"
                          alt="Node JS Development Company"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Security Enhancement</h3>
                    <p>
                      We follow the best practices to keep the scripts and
                      applications secure from the vulnerabilities and risks of
                      nodejs by applying inner security rules.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="laravel_core_features_section advanced_core_features_section">
          <div className="container">
            <h2>Why choose Logicspice for Node.JS Development?</h2>
            <p className="laravel_core_sub">
              Node.js is supported by all popular web browsers, due to which
              Node.js has
              <br /> been the most commonly used programming language for years.
            </p>
            <div className="laravel_core_features_bx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/nodejsdevelopment/nodajs_features_icon1.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Best Technology Offering</h3>
                      <p>
                        We offer powerful and latest technologies and tools.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/nodejsdevelopment/nodajs_features_icon2.png"
                        alt="img4"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Quality Assurance</h3>
                      <p>
                        Our tester does end to end testing of applications and
                        assure the best quality product.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/nodejsdevelopment/nodajs_features_icon3.png"
                        alt="img2"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Quick Support</h3>
                      <p>
                        We provide our customers with full support to their
                        queries and in this regard we are available over call
                        and email to solve their problems.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/nodejsdevelopment/nodajs_features_icon4.png"
                        alt="img5"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Dedicated team of experts</h3>
                      <p>
                        You can get the personal development manager for your
                        project that is always there to provide you with the
                        best possible development service.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12" data-aos="fade-right">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/nodejsdevelopment/nodajs_features_icon5.png"
                        alt="img3"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>
                        100% Client Satisfaction & Cost-Effective Solution
                      </h3>
                      <p>
                        We at Logicspice are pledged to give our customer first
                        priority for their needs and wants. We ensure to provide
                        our customers with 100% satisfaction for our services
                        and softwares.{" "}
                      </p>
                    </div>
                  </div>
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
                      title="Node.Js Development Company"
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
                width={100}
                height={100}
                src="/img/images/whatsapp.png"
                alt="whatsapp-icon"
              />
            </a>
          </div>
          <div className="quote_pop_plus quote_pop_in" onClick={toggleModal}>
            <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
