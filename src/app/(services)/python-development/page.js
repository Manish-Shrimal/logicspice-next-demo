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
  // const [showModal, setShowModal] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   // console.log(showModal);

  //   setShowModal(!showModal);
  // };

  // const toggleModal = () => {
  //   setModalOpen(!modalOpen);
  // };

const [modalTitle, setModalTitle] = useState('');
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = (title) => {
  setModalTitle(title);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(!isModalOpen);
  setModalTitle('');
};

  return (
    <>
      <NavBar />
      <div className="python_development">
        <section className="laravel-banner PythonBanner">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-8">
                <div className="laravel-banner-txt">
                  <h1>
                    Python
                    <br /> <span>Development Services</span>
                  </h1>
                  <div className="LaravelText">
                    Logicspice offers top-tier and dependable Python Development
                    Services worldwide, delivering highly functional and
                    feature-rich solutions.
                  </div>

                  <div className="laravel-anquire">
                    <div className="btn btn-primary" onClick={() => openModal('Hire Python Developers')}>
                      <a>Hire Python Developers</a>
                      {/* {showModal && (
    <Enquirymodal
      modalStatus={showModal}
      toggle={openModal}
      title="Hire Python Developers"
    />
  )} */}
  {isModalOpen && (
      <Enquirymodal
        modalStatus={isModalOpen}
        toggle={closeModal}
        title={modalTitle}
      />
    )}
                    </div>
                    <div className="btn btn-primary" onClick={() => openModal('Python Development Services')}>
                      <a>Quick Enquiry</a>
                      {/* {showModal && (
    <Enquirymodal
      modalStatus={showModal}
      toggle={openModal}
      title="Python Development Services"
    />
  )} */}
    {/* {isModalOpen && (
      <Enquirymodal
        modalStatus={isModalOpen}
        toggle={closeModal}
        title={modalTitle}
      />
    )} */}
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
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="page_img">
                  <Image unoptimized={true}
                    width={650}
                    height={500 / (100 / 100)}
                    src="/img/pythondevelopment/python-icon.png"
                    alt="Python Development Services"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="laravel-descriptions python-descriptions">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 pull-right">
                <div className="laravel_img">
                  <Image unoptimized={true}
                    width={300}
                    height={500 / (100 / 100)}
                    src="/img/pythondevelopment/python-logo-img.png"
                    alt="Python Development Services"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-6 pull-left">
                <div className="laravel-descriptions-bx" dir="ltr">
                  <h2>
                    Python Application
                    <br /> Development
                  </h2>
                  <p>
                    Python is a powerful, high-level, general-purpose
                    programming language that meets your business needs with an
                    optimal amalgamation of technologies. It is used to create
                    the most efficient and adaptable applications using a
                    well-organized and widely shared base of codes across
                    different platforms. Our{" "}
                    <strong>Python Development Company</strong> commits to
                    delivering 100% custom Python Applications that operate
                    efficiently across multiple platforms.
                  </p>
                  <p>
                    Python development services employ the latest and most
                    advanced technological inputs while programming Python
                    applications. We ensure that our clients are involved in the
                    development process. We also maintain a Python web
                    development framework that works harmoniously with our
                    developers to make Python applications visually appealing
                    and interactive. We use Python libraries like{" "}
                    <Link
                      href="/django-development"
                      target="_blank"
                    >
                      Django
                    </Link>
                    , Flask, and Pyramid to build web and desktop applications.
                    We have provided exemplary service to all our clients across
                    multiple platforms. As a{" "}
                    <strong>Python Development Agency</strong>, we construct
                    simplified and authentic applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="laravel-devlopments-services">
          <div className="container">
            <h2>Python Application Development Services</h2>
            <div className="laravel-services-bx-top">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box1">
                      <i>
                        <Image unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/pythondevelopment/python-new-icon1.png"
                          alt="Python Development Services"
                        />
                        <Image unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/pythondevelopment/python-white-icon1.png"
                          alt="Python Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Custom Python Development</h3>
                    <p>
                      Creating bespoke applications catering to a client&apos;s
                      business needs and requirements.
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
                          src="/img/pythondevelopment/python-new-icon2.png"
                          alt="Python Development Services"
                        />
                        <Image unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/pythondevelopment/python-white-icon2.png"
                          alt="Python Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Web Development with Django/Flask</h3>
                    <p>
                      Utilizing Python&apos;s popular web frameworks like Django
                      or Flask to develop high-performing and scalable web
                      applications.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box3">
                      <i>
                        <Image unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/pythondevelopment/python-new-icon3.png"
                          alt="Python Development Services"
                        />
                        <Image unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/pythondevelopment/python-white-icon3.png"
                          alt="Python Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Machine Learning and AI Solutions</h3>
                    <p>
                      Implementing Python&apos;s robust libraries, such as
                      Scikit-learn, TensorFlow, and PyTorch, for creating
                      AI-based solutions.
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
                          src="/img/pythondevelopment/python-new-icon4.png"
                          alt="Python Development Services"
                        />
                        <Image unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/pythondevelopment/python-white-icon4.png"
                          alt="Python Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Data Analysis and Visualization</h3>
                    <p>
                      Using Python&apos;s powerful libraries like pandas, NumPy,
                      and Matplotlib to analyze and visualize data effectively.
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
                          src="/img/pythondevelopment/python-new-icon5.png"
                          alt="Python Development Services"
                        />
                        <Image unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/pythondevelopment/python-white-icon5.png"
                          alt="Python Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Python API Development</h3>
                    <p>
                      Creating Python APIs that allow seamless communication
                      between software components, thus improving functionality.
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
                          src="/img/pythondevelopment/python-new-icon6.png"
                          alt="Python Development Services"
                        />
                        <Image unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/pythondevelopment/python-white-icon6.png"
                          alt="Python Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Python Support and Maintenance</h3>
                    <p>
                      Providing ongoing maintenance and support to ensure the
                      seamless functioning of Python applications.
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
                          src="/img/pythondevelopment/python-new-icon7.png"
                          alt="Python Development Services"
                        />
                        <Image unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/pythondevelopment/python-white-icon7.png"
                          alt="Python Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Python Migration Services</h3>
                    <p>
                      Helping businesses upgrade or migrate their existing
                      software solutions to Python, thereby enhancing their
                      efficiency.
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
                          src="/img/pythondevelopment/python-new-icon8.png"
                          alt="Python Development Services"
                        />
                        <Image unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/pythondevelopment/python-white-icon8.png"
                          alt="Python Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Python Testing Services</h3>
                    <p>
                      Using Python Web Development Framework like pytest and
                      Selenium to test applications to ensure their reliability
                      and efficient performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="laravel_core_features_section">
          <div className="container">
            <h2>Core Features Of Python Application Development</h2>
            <div className="laravel_core_features_bx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/pythondevelopment/core_features_icon1.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Readability</h3>
                      <p>
                        {" "}
                        Python&apos;s clear syntax promotes easily readable and
                        maintainable code.
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
                        src="/img/pythondevelopment/core_features_icon4.png"
                        alt="img4"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Dynamic Typing</h3>
                      <p>
                        Allows variable type changes anytime, increasing
                        language flexibility.
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
                        src="/img/pythondevelopment/core_features_icon2.png"
                        alt="img2"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Extensive Libraries</h3>
                      <p>
                        Python&apos;s wide-ranging libraries expedite various
                        development tasks.
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
                        src="/img/pythondevelopment/core_features_icon5.png"
                        alt="img5"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Compatibility</h3>
                      <p>
                        Supports multiple platforms and systems, enhancing
                        application accessibility.
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
                        src="/img/pythondevelopment/core_features_icon3.png"
                        alt="img3"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>High-Level Language</h3>
                      <p>
                        Handles complex tasks with simplified syntax and
                        commands.
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
                        src="/img/pythondevelopment/core_features_icon6.png"
                        alt="img6"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Strong Integration</h3>
                      <p>
                        Facilitates seamless integration with other languages
                        and tools.
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
            <h2>Benefits Of Python Application Development</h2>
            <div className="laravel_choose_features_bx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_features_img laravel_choose_features_img1">
                      <Image unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/pythondevelopment/python-why-icon1.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Simplified Syntax</h3>
                      <p>
                        Easy readability enhances maintainability and reduces
                        development time.
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
                        src="/img/pythondevelopment/python-why-icon2.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Dynamic Nature</h3>
                      <p>
                        Allows for high adaptability and flexibility in coding.
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
                        src="/img/pythondevelopment/python-why-icon3.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Versatile Libraries</h3>
                      <p>
                        Streamline development tasks and speed up the process.
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
                        src="/img/pythondevelopment/python-why-icon4.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Cross-Platform Compatibility</h3>
                      <p>
                        Enables applications to run across various platforms.
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
                        src="/img/pythondevelopment/python-why-icon5.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Efficient Integration</h3>
                      <p>
                        Facilitates smooth integration with other languages and
                        tools.
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
                        src="/img/pythondevelopment/python-why-icon6.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Community Support</h3>
                      <p>
                        Provides access to ample resources and quick issue
                        resolution.
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
            <h2>
              Why Choose Logicspice For Python <br />
              Application Development?
            </h2>
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
                        Logicspice delivers projects within the agreed
                        timeframe, ensuring business continuity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 " data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_details">
                      <p>
                        We offer comprehensive post-deployment support and
                        maintenance services for seamless application <br />
                        functionality.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_details">
                      <p>
                        Our developers and design team always focus on client
                        satisfaction through customer support service and other
                        communication channels.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_details">
                      <p>
                        We provide tailored Python application development
                        solutions catering to unique business needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_details">
                      <p>
                        Logicspice follows rigorous testing and quality
                        assurance protocols to ensure high-performing, bug-free
                        applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 main_btn_hire">
                <div className="btn btn-primary" onClick={() => openModal('Request To Hire Python Developers')}>
                  <a>Hire Python Developers</a>
                  {/* {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Request To Hire Python Developers"
                    />
                  } */}
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
                      headerTitle="Why should I hire Python developers for my project?"
                      collapseId="flush-collapse1"
                    >
                      <p>
                        Hiring Python developers can bring expertise and
                        efficiency to your project. They&apos;re adept at using
                        the Python web development framework to build robust
                        applications.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What types of Python development services do you provide?"
                      collapseId="flush-collapse2"
                    >
                      <p>
                        As a Python development company, we offer various
                        services, from custom application development, web
                        development with Django or Flask, data analysis, and AI
                        solutions.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How does your company ensure the quality of Python applications?"
                      collapseId="flush-collapse3"
                    >
                      <p>
                        We enforce strict quality assurance protocols and
                        conduct thorough testing. Our Python developers adhere
                        to best practices, ensuring high-quality applications.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How can Python web development framework benefit my business?"
                      collapseId="flush-collapse4"
                    >
                      <p>
                        Python web development frameworks, like Django or Flask,
                        can create scalable, secure, and efficient applications,
                        contributing to your business growth.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Can I hire Python developers from your company for my existing project?"
                      collapseId="flush-collapse5"
                    >
                      <p>
                        You can hire our skilled Python developers to work on
                        your existing project. They can efficiently integrate
                        and contribute to your development process.
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
              <Image unoptimized={true}
                width={100}
                height={100}
                src="/img/images/whatsapp.png"
                alt="whatsapp-icon"
              />
            </a>
          </div>
          {/* <div className="quote_pop_plus quote_pop_in" onClick={closeModal}>
            <Contactusmodel modalStatus={isModalOpen} toggle={closeModal} />
          </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
