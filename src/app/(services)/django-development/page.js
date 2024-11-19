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
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <NavBar />
      <div className="djangoDevelopment">
        <section className=" DjangoBanner">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="laravel-banner-txt">
                  <h1>
                    Django Web <br /> <span>Development Services</span>
                  </h1>
                  <div className="LaravelText">
                    LogicSpice is a prominent{" "}
                    <strong>Django development company</strong> that provides
                    Django web development services of the highest quality to
                    clients worldwide. Our team employs the robust{" "}
                    <Link href="/python-development" target="_blank">
                      Python framework
                    </Link>{" "}
                    Django to develop innovative features and high-performance
                    solutions.
                  </div>
                  <div className="laravel-anquire">
                    <div className="btn btn-primary" onClick={openModal}>
                      <a>Hire Now</a>
                      {
                        <Enquirymodal
                          modalStatus={showModal}
                          toggle={openModal}
                          title="Request To Hire Django Web Developers"
                        />
                      }
                    </div>
                    <div className="btn btn-primary" onClick={openModal}>
                      <a>Quick Enquiry</a>
                      {
                        <Enquirymodal
                          modalStatus={showModal}
                          toggle={openModal}
                          title="Django Web Development Services"
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
                    width={3000}
                    height={500 / (100 / 100)}
                    src="/img/djangodevelopment/django-banner-img.png"
                    alt="Django Web Development Services"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="laravel-descriptions DjangoDescriptions">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 pull-right">
                <div className="laravel_img">
                  <Image
                    unoptimized={true}
                    width={400}
                    height={500 / (100 / 100)}
                    src="/img/djangodevelopment/django-logo-img.png"
                    alt="Django Web Development Services"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-6 pull-left">
                <div className="laravel-descriptions-bx" dir="ltr">
                  <h2>
                    Django Web Application <br /> Development{" "}
                  </h2>
                  <p>
                    Django is an advanced Python web framework that caters to
                    efficient code creation and deployment needs. As a
                    cross-platform framework, it enables Python Django
                    developers to build intelligent and flexible applications
                    using a widely dispersed set of codes. Our team of expert
                    Django Developers specializes in building Python Django
                    backend development. We are committed to delivering 100%
                    unique Django web apps that seamlessly run on all devices.
                    Whether you require a Django developer for your project or
                    seek high-quality web development services, we ensure smooth
                    and reliable solutions tailored to your specific
                    requirements.
                  </p>
                  <p>
                    Django web development is a powerful approach to building
                    robust and scalable web applications using Python. At
                    Logicspice, we offer comprehensive
                    <strong> Django development services</strong>, providing our
                    clients with tailored solutions for their specific
                    requirements. Our team of skilled Python Django developers
                    is dedicated to delivering high-quality results. Whether you
                    need to hire a Django developer for a specific project or
                    require end-to-end Django web development services, we have
                    you covered. We follow a streamlined process that
                    encompasses thorough planning, efficient coding, and
                    rigorous testing to ensure the development of secure and
                    efficient web applications. Our expertise in Django
                    development allows us to create dynamic and feature-rich
                    websites that enhance user experiences and meet your
                    business objectives. Trust Logicspice to make your Django
                    web development services work seamlessly, delivering
                    exceptional results for your online presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="laravel-devlopments-services">
          <div className="container">
            <h2>Django Web Development Services</h2>
            <div className="laravel-services-bx-top">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box7">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/djangodevelopment/django-new-icon6.png"
                          alt="Django Web Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/djangodevelopment/django-white-icon6.png"
                          alt="Django Web Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Customizability</h3>
                    <p>
                      When you hire a Django developer, you get a customizable
                      platform that can be tailored to your specific business
                      needs.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box8">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/djangodevelopment/django-new-icon5.png"
                          alt="Django Web Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/djangodevelopment/django-white-icon5.png"
                          alt="Django Web Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Robust Security</h3>
                    <p>
                      A Python Django backend developer ensures strong security
                      measures, protecting your application from common threats.
                    </p>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box1">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/djangodevelopment/django-new-icon3.png"
                          alt="Django Web Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/djangodevelopment/django-white-icon3.png"
                          alt="Django Web Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Scalability</h3>
                    <p>
                      Django developer skills include designing highly scalable
                      solutions that adapt well to increased user demand.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box4">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/djangodevelopment/django-new-icon4.png"
                          alt="Django Web Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/djangodevelopment/django-white-icon4.png"
                          alt="Django Web Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Versatile Applications</h3>
                    <p>
                      <strong>Django development agency</strong> capabilities
                      extend to various sectors like finance, health, and
                      e-commerce.
                    </p>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box2">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/djangodevelopment/django-new-icon7.png"
                          alt="Django Web Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/djangodevelopment/django-white-icon7.png"
                          alt="Django Web Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Superior Integration</h3>
                    <p>
                      A Django developer seamlessly integrates your application
                      with different technologies, ensuring optimal
                      functionality.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box5">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/djangodevelopment/django-new-icon8.png"
                          alt="Django Web Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/djangodevelopment/django-white-icon8.png"
                          alt="Django Web Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Maintenance and Support</h3>
                    <p>
                      With Django development services, you receive ongoing
                      maintenance and support to ensure continuous and
                      hassle-free operation.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box3">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/djangodevelopment/django-new-icon1.png"
                          alt="Django Web Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/djangodevelopment/django-white-icon1.png"
                          alt="Django Web Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Comprehensive Framework</h3>
                    <p>
                      A Django development company offers a full-stack solution,
                      handling everything from the backend to the front end.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box6">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/djangodevelopment/django-new-icon2.png"
                          alt="Django Web Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/djangodevelopment/django-white-icon2.png"
                          alt="Django Web Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Efficient Development</h3>
                    <p>
                      Django development services facilitate rapid development,
                      reducing time-to-market and maximizing efficiency for your
                      projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="laravel_core_features_section">
          <div className="container">
            <h2>Core Features Of Django Web Development</h2>
            <div className="laravel_core_features_bx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/djangodevelopment/core_features_icon1.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Full-Featured Framework</h3>
                      <p>
                        Offers comprehensive solutions for the backend to
                        frontend needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/djangodevelopment/core_features_icon4.png"
                        alt="img4"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Fast Development</h3>
                      <p>
                        Facilitates rapid, efficient development, reducing
                        time-to-market.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/djangodevelopment/core_features_icon2.png"
                        alt="img2"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>High Scalability</h3>
                      <p>
                        Supports the development of highly scalable, adaptive
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/djangodevelopment/core_features_icon5.png"
                        alt="img5"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Robust Security</h3>
                      <p>
                        Provides strong protection against common web threats.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/djangodevelopment/core_features_icon3.png"
                        alt="img3"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Customizable Platform</h3>
                      <p>
                        Enables tailor-made solutions for specific business
                        needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/djangodevelopment/core_features_icon6.png"
                        alt="img6"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Seamless Integration</h3>
                      <p>
                        Supports integration with various technologies for
                        optimal functionality.
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
            <h2>Benefits Of Django Web Development</h2>
            <div className="laravel_choose_features_bx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_features_img laravel_choose_features_img1">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/djangodevelopment/django-why-icon1.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Speedy Development</h3>
                      <p>
                        Django development services streamline processes,
                        offering quick and efficient development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_features_img laravel_choose_features_img2">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/djangodevelopment/django-why-icon2.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>High Security</h3>
                      <p>
                        Hiring a Django developer guarantees robust security
                        measures, safeguarding your web applications.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 " data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_features_img laravel_choose_features_img3">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/djangodevelopment/django-why-icon3.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Versatile</h3>
                      <p>
                        We can tailor solutions to fit various industry needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_features_img laravel_choose_features_img4">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/djangodevelopment/django-why-icon4.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Scalability</h3>
                      <p>
                        When you hire a Django developer, you get a platform
                        that scales seamlessly with growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_features_img laravel_choose_features_img5">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/djangodevelopment/django-why-icon5.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Integrated Solutions</h3>
                      <p>
                        We provide superior integration with different
                        technologies for enhanced functionality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_features_img laravel_choose_features_img6">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/djangodevelopment/django-why-icon6.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Expert Support</h3>
                      <p>
                        Django development services offer continuous support and
                        maintenance for smooth operation.
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
            <h2>Why Choose LogicSpice For Django Web Development?</h2>
            <div className="laravel_choose_features_bx ReactJsChooseFeaturesBx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_details">
                      <p>
                        We have 18+ years of experience providing web
                        development services to more than 1900+ clients & 15
                        countries.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_details">
                      <p>
                        LogicSpice employs a team of experienced Django
                        developers for high-quality service delivery.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 " data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_details">
                      <p>
                        With a client-centric approach, LogicSpice prioritizes
                        your specific business requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_details">
                      <p>
                        We keep in constant touch with our customers to provide
                        them with customized software.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_details">
                      <p>
                        Our efficient processes guarantee rapid delivery,
                        enhancing your business productivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 main_btn_hire">
                <div className="btn btn-primary" onClick={openModal}>
                  <a>Hire Django Developer</a>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Request To Hire Django Developers"
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
                    <Image
                      unoptimized={true}
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
                      headerTitle="How can a Django development company improve the security of my website?"
                      collapseId="flush-collapse1"
                      data-aos="fade-up"
                    >
                      <p>
                        A Django development company can leverage Django&apos;s
                        built-in security features to protect your site from
                        common web threats.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What kind of projects can a Django development agency handle?"
                      collapseId="flush-collapse2"
                      data-aos="fade-up"
                    >
                      <p>
                        Logicspice Django development agency can manage various
                        projects, from custom web applications to API
                        development and e-commerce solutions.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What should I look for when I want to hire Django developer?"
                      collapseId="flush-collapse3"
                      data-aos="fade-up"
                    >
                      <p>
                        When hiring a Django developer, consider their
                        experience, understanding of Django&apos;s security
                        features, ability to handle integrations, and project
                        delivery speed.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What advantages do Django development services offer over other web development services?"
                      collapseId="flush-collapse4"
                      data-aos="fade-up"
                    >
                      <p>
                        Logicspice Django development services offer rapid
                        development, scalability, robust security, seamless
                        integration, and a high degree of customizability.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How does a Python Django Developer ensure web application scalability?"
                      collapseId="flush-collapse5"
                      data-aos="fade-up"
                    >
                      <p>
                        Logicspice Python Django backend developer designs your
                        application to efficiently handle increased user demand
                        efficiently, ensuring seamless performance as traffic
                        grows.
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
