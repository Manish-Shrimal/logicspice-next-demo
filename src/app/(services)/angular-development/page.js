"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
const Page = () => {
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
      <div className="angular_development">
      <section className="AngularBanner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="laravel-banner-txt">
                <h1>
                  Angular <br /> <span>Web Development Services</span>
                </h1>
                <div className="LaravelText">
                  Logicspice delivers top-tier and dependable angular web
                  development services worldwide&sbquo; providing highly
                  functional and feature-laden solutions.
                </div>
                <div className="laravel-anquire">
                  <div className="btn btn-primary" onClick={openModal}>
                    <a>Hire Angular Developers</a>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Request To Hire Angular Developers"
                      />
                    }
                  </div>
                  <div className="btn btn-primary" onClick={openModal}>
                    <a>Quick Enquiry</a>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Request To Hire Angular Developers"
                      />
                    }
                  </div>

                  <Link
                    href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
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
                <Image unoptimized={true}
                  width={600}
                  height={500 / (100 / 100)}
                  src="/img/angulardevelopment/angular-icon.png"
                  alt="Angular Web Development Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel-descriptions AngularDescriptions">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 pull-right">
              <div className="laravel_img">
                <Image unoptimized={true}
                 width={350}
                 height={500 / (100 / 100)}
                  src="/img/angulardevelopment/angular-logo-img.png"
                  alt="Angular Web Development Services"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6 pull-left">
              <div className="laravel-descriptions-bx" dir="ltr">
                <h2>
                  Angular Web Application
                  <br /> Development{" "}
                </h2>
                <p>
                  Angular is a robust framework for developing dynamic web
                  applications&sbquo; combining the best technologies to satisfy
                  your business requirements. It is used to create the most
                  effective and adaptable web applications using a
                  well-organized and widely shared base of codes across
                  different platforms. Our{" "}
                  <strong>Angular Development Company</strong> pledges to
                  deliver 100% custom Angular Web Applications that operate
                  smoothly across various browsers.
                </p>
                <p>
                  The Angular development services employ the latest and most
                  advanced technological inputs while programming Angular web
                  applications. We make sure that our clients are involved in
                  the process of development. We also maintain a design team
                  that works harmoniously with our developers to make Angular
                  web apps visually appealing and interactive. These designers
                  and developers work exhaustively on the application across
                  different platforms to endow them with grace and fluidity.
                  They build web applications using JavaScript&sbquo;
                  TypeScript&sbquo; and other Angular development frameworks. We
                  have provided exemplary service to all our clients across
                  multiple platforms. As an Angular web development
                  company&sbquo; we construct simplified and authentic
                  applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel-devlopments-services">
        <div className="container">
          <h2>Angular Web Application Development Services</h2>
          <div className="laravel-services-bx-top">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box3">
                    <i>
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/angulardevelopment/angular-new-icon1.png"
                        alt="Angular Web Development Services"
                      />
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/angulardevelopment/angular-white-icon1.png"
                        alt="Angular Web Development Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Custom Angular Development</h3>
                  <p>
                    Logicspice offers the best custom angular{" "}
                    <Link
                      href="/web-development"
                      target="_blank"
                    >
                      web development services
                    </Link>
                    . This involves designing custom applications to meet
                    clients&apos; needs.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box6">
                    <i>
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/angulardevelopment/angular-new-icon2.png"
                        alt="Angular Web Development Services"
                      />
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/angulardevelopment/angular-white-icon2.png"
                        alt="Angular Web Development Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>AngularJS Migration</h3>
                  <p>
                    The company can assist organizations in converting their web
                    apps to Angular for greater functionality and user
                    experience.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box1">
                    <i>
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/angulardevelopment/angular-new-icon3.png"
                        alt="Angular Web Development Services"
                      />
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/angulardevelopment/angular-white-icon3.png"
                        alt="Angular Web Development Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Responsive Web Development</h3>
                  <p>
                    Logicspice specializes in responsive Angular web apps that
                    function across devices & platforms.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box4">
                    <i>
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/angulardevelopment/angular-new-icon4.png"
                        alt="Angular Web Development Services"
                      />
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/angulardevelopment/angular-white-icon4.png"
                        alt="Angular Web Development Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Enterprise Angular Solutions</h3>
                  <p>
                    Logicspice can focus on large-scale enterprise Angular
                    applications. Angular&apos;s scalability allowed them to
                    build robust&sbquo; reliable solutions for major businesses.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box8">
                    <i>
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/angulardevelopment/angular-new-icon5.png"
                        alt="Angular Web Development Services"
                      />
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/angulardevelopment/angular-white-icon5.png"
                        alt="Angular Web Development Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Maintenance and Support</h3>
                  <p>
                    To keep the Angular apps running properly&sbquo; Logicspice
                    could offer maintenance and support.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box7">
                    <i>
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/angulardevelopment/angular-new-icon6.png"
                        alt="Angular Web Development Services"
                      />
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/angulardevelopment/angular-white-icon6.png"
                        alt="Angular Web Development Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Angular Consultation</h3>
                  <p>
                    Our Angular Development Company advise clients on Angular
                    development best practices and how to use the framework for
                    their business.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box2">
                    <i>
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/angulardevelopment/angular-new-icon7.png"
                        alt="Angular Web Development Services"
                      />
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/angulardevelopment/angular-white-icon7.png"
                        alt="Angular Web Development Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>E-commerce Development</h3>
                  <p>
                    Specialized e-commerce development services using
                    Angular&sbquo; building reliable&sbquo; secure&sbquo; and
                    scalable e-commerce platforms.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box5">
                    <i>
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/angulardevelopment/angular-new-icon8.png"
                        alt="Angular Web Development Services"
                      />
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/angulardevelopment/angular-white-icon8.png"
                        alt="Angular Web Development Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Testing and QA Services</h3>
                  <p>
                    We can offer rigorous testing and QA assistance to ensure
                    the Angular apps are high-quality and bug-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel_core_features_section">
        <div className="container">
          <h2>Core Features Of Angular Web Development</h2>
          <div className="laravel_core_features_bx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/angulardevelopment/core_features_icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Two-Way Data Binding</h3>
                    <p>
                      Synchronizes data between model and view&sbquo; minimizing
                      errors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/angulardevelopment/core_features_icon4.png"
                      alt="img4"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Dependency Injection</h3>
                    <p>
                      Facilitates unit testing&sbquo; improving code reusability
                      and maintainability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/angulardevelopment/core_features_icon2.png"
                      alt="img2"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Modular Development</h3>
                    <p>
                      Organizes code into modules for better code management and
                      reusability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/angulardevelopment/core_features_icon5.png"
                      alt="img5"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Directives</h3>
                    <p>
                      Extend HTML attributes for a more dynamic and responsive
                      user experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/angulardevelopment/core_features_icon3.png"
                      alt="img3"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Routing</h3>
                    <p>
                      Provides seamless navigation and view transition in
                      single-page applications (SPAs).
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/angulardevelopment/core_features_icon6.png"
                      alt="img6"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Angular CLI</h3>
                    <p>
                      Speeds up development&sbquo; testing&sbquo; and deployment
                      with command-line tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel_choose_features_section">
        <div className="container">
          <h2>Benefits Of Angular Web Development</h2>
          <div className="laravel_choose_features_bx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img1">
                    <Image unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/angulardevelopment/angular-why-icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Efficient Development Process</h3>
                    <p>
                      Angular offers tools and features that speed up the
                      development cycle and improve productivity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img2">
                    <Image unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/angulardevelopment/angular-why-icon2.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Code Reusability</h3>
                    <p>
                      Modular architecture allows for code reuse&sbquo; reducing
                      development time and effort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 " data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img3">
                    <Image unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/angulardevelopment/angular-why-icon3.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Easy Maintenance</h3>
                    <p>
                      Angular&apos;s design and toolset simplify the process of
                      updating and maintaining applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img4">
                    <Image unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/angulardevelopment/angular-why-icon4.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Enhanced User Experience</h3>
                    <p>
                      Features like two-way data binding ensure a seamless and
                      dynamic user experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img5">
                    <Image unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/angulardevelopment/angular-why-icon5.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Seamless Integration</h3>
                    <p>
                      Angular can easily integrate with other libraries or
                      frameworks&sbquo; making it versatile.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img6">
                    <Image unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/angulardevelopment/angular-why-icon6.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Strong Community Support</h3>
                    <p>
                      Angular has robust community support&sbquo; ensuring
                      regular updates and assistance when needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel_choose_features_section LaravelChooseFeaturesSection">
        <div className="container">
          <h2>Why Choose Logicspice For Angular Web Development?</h2>
          <div className="laravel_choose_features_bx ReactJsChooseFeaturesBx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_details">
                    <p>
                      We have worked in this industry for 18+ years with 1900+
                      clients across 15 countries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_details">
                    <p>
                      Highly skilled and experienced Angular developers capable
                      of handling complex projects efficiently.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 " data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_details">
                    <p>
                      Our angular development services are not only superior in
                      terms of quality but also cost-effective.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_details">
                    <p>
                      Logicspice&sbquo; the{" "}
                      <strong>angular development agency</strong> offers
                      customized solutions that cater to unique business
                      needs&sbquo; enhancing project success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_details">
                    <p>
                      Implements rigorous testing and quality assurance
                      processes to deliver bug-free&sbquo; high-performing
                      applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 main_btn_hire">
              <div className="btn btn-primary" onClick={openModal}>
                <a>Hire Angular Developers</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Request To Hire Angular Developers"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ecommerce_faq_section NewFaqDesignSection">
        <div className="container">
          <div className="row">
            <div className=" row ecommerce__Quick_FAQ CustomQuickFAQScript">
              <div className="col-md-5">
                <h4 className="title_main">
                  Frequently <br />
                  Asked Questions
                </h4>
                <div className="FaqImgBx">
                  <Image unoptimized={true}
                   width={650}
                   height={500 / (100 / 100)}
                    src="/img/laraveldevelopment/FaqLaravelImg.png"
                    alt="laravel web development"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="What is Angular&sbquo; and why should I choose it for web development?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      Google&apos;s popular JavaScript framework Angular lets
                      developers build powerful&sbquo; scalable&sbquo; and
                      dynamic web apps. We at Logicspice offer complex user
                      interfaces&sbquo; provide two-way data binding and
                      dependency injection&sbquo; and simplify web development.
                      Our angular development company ensures a smooth user
                      experience&sbquo; increased productivity&sbquo; and a
                      manageable codebase.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How can LogicSpice help with Angular web development?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      At LogicSpice&sbquo; we have a team of experienced Angular
                      developers who specialize in creating custom web
                      applications tailored to your requirements. We provide
                      UI/UX design&sbquo; front-end development&sbquo; API
                      integration&sbquo; testing&sbquo; and deployment for
                      Angular web development. Our Angular development services
                      meet your company goals.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Do I need to have prior knowledge of Angular to work with LogicSpice?"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      No&sbquo; you don&apos;t need prior knowledge of Angular
                      to work with us. Our Angular experts can construct your
                      web app from start to finish. We provide updates and
                      resolve concerns during the process. Our goal is to
                      simplify development for our clients.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I integrate Angular with other technologies or frameworks?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      LogicSpice integrates Angular with several technologies
                      and frameworks. Our experts can effectively combine
                      Angular with backend technologies like Node.js&sbquo;
                      Laravel&sbquo; or ASP.NET&sbquo; as well as frameworks
                      like Redux or GraphQL.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How does LogicSpice ensure the quality of Angular web applications?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      LogicSpice delivers high-quality Angular web applications
                      using industry best practices and a rigorous quality
                      assurance approach. To ensure code quality&sbquo; our
                      developers follow coding standards&sbquo; test
                      (unit&sbquo; integration&sbquo; and end-to-end)&sbquo; and
                      review. We also use Git and Agile methods to manage and
                      deploy your Angular web application.
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image unoptimized={true}
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

      <Footer />
      </div>
      
    </>
  );
};

export default Page;
