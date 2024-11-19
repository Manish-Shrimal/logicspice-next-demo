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
      <div className="artificialIntelligence">
        <section className="AritificialBanner">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-7">
                <div className="laravel-banner-txt">
                  <h1>
                    Artificial Intelligence
                    <br /> <span>Services</span>
                  </h1>
                  <div className="LaravelText">
                    <p>
                      Logicspice offers robust and leading-edge solutions in
                      artificial intelligence development globally&sbquo;
                      delivering high-performance functionality and intelligent
                      outcomes.
                    </p>
                  </div>

                  <div className="laravel-anquire">
                    <div className="btn btn-primary" onClick={openModal}>
                      <a>Hire Now</a>
                      {
                        <Enquirymodal
                          modalStatus={showModal}
                          toggle={openModal}
                          title="Request To Hire Artificial Intelligence Developers"
                        />
                      }
                    </div>
                    <div className="btn btn-primary" onClick={openModal}>
                      <a>Quick Enquiry</a>
                      {
                        <Enquirymodal
                          modalStatus={showModal}
                          toggle={openModal}
                          title="Request To Hire Artificial Intelligence Developers"
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
              <div className="col-xs-12 col-sm-6 col-md-5">
                <div className="page_img">
                  <Image
                    unoptimized={true}
                    width={300}
                    height={500 / (100 / 100)}
                    src="/img/artificialintelligence/ArtificialImg.png"
                    alt="Artificial Intelligence Development Services"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="laravel-descriptions Artificial-descriptions">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 pull-right">
                <div className="laravel_img">
                  <Image
                    unoptimized={true}
                    width={260}
                    height={500 / (100 / 100)}
                    src="/img/artificialintelligence/artificial-logo-img.png"
                    alt="Artificial Intelligence Development Services"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-6 pull-left">
                <div className="laravel-descriptions-bx" dir="ltr">
                  <h2>Artificial Intelligence Solution Development</h2>
                  <p>
                    Artificial intelligence development services utilize the
                    most recent and innovative technological inputs while
                    programming AI solutions. We ensure that our clients are
                    engaged in the process of development. We also maintain a
                    design staff that collaborates seamlessly with our
                    developers to make AI solutions aesthetically engaging and
                    interactive.
                  </p>
                  <p>
                    These designers and developers work extensively over the
                    solutions across different platforms to furnish them with
                    elegance and fluidity. They build AI solutions using{" "}
                    <Link href="/python-development" target="_blank">
                      Python
                    </Link>
                    &sbquo; TensorFlow&sbquo; Keras&sbquo; and PyTorch
                    development frameworks. We have provided phenomenal service
                    to all our clients across various platforms. As an AI
                    solution development company&sbquo; we build streamlined and
                    authentic applications.
                  </p>
                  <p>
                    Artificial Intelligence is a cross-domain technology that
                    meets your business requirements with an ideal combination
                    of advanced techniques. It is employed to create the
                    smartest and most adaptable solutions using a comprehensive
                    and well-distributed base of codes across different
                    platforms like Machine Learning&sbquo; Natural Language
                    Processing&sbquo; Deep Learning&sbquo; and Computer Vision.
                    Our team assures us to deliver 100% customized artificial
                    intelligence solutions that function efficiently across
                    multiple domains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="laravel-devlopments-services ReactNativeServices">
          <div className="container">
            <h2>Artificial Intelligence Development Services</h2>
            <div className="laravel-services-bx-top">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box2">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/artificialintelligence/artificial-new-icon6.png"
                          alt="Artificial Intelligence Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/artificialintelligence/artificial-white-icon6.png"
                          alt="Artificial Intelligence Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Data Science and Big Data Analysis</h3>
                    <p>
                      Our data scientists help businesses value their data. We
                      help businesses understand customer behavior&sbquo; market
                      trends&sbquo; and operational efficiency.
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
                          src="/img/artificialintelligence/artificial-new-icon3.png"
                          alt="Artificial Intelligence Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/artificialintelligence/artificial-white-icon3.png"
                          alt="Artificial Intelligence Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Computer Vision</h3>
                    <p>
                      Businesses&apos; visual interaction is changing. Our
                      computer vision skills allow businesses to automate
                      important activities&sbquo; boost security&sbquo; and
                      integrate facial recognition technologies.
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
                          src="/img/artificialintelligence/artificial-new-icon4.png"
                          alt="Artificial Intelligence Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/artificialintelligence/artificial-white-icon4.png"
                          alt="Artificial Intelligence Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Robot Process Automation (RPA)</h3>
                    <p>
                      Let humans do what they do best-creative and strategic
                      thinking. Our RPA solutions automate repetitive
                      tasks&sbquo; improving efficiency and accuracy across
                      operations.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box7">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/artificialintelligence/artificial-new-icon7.png"
                          alt="Artificial Intelligence Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/artificialintelligence/artificial-white-icon7.png"
                          alt="Artificial Intelligence Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Recommendation Systems</h3>
                    <p>
                      Personalization helps organizations strengthen consumer
                      relationships. Our advanced recommendation algorithms
                      match users&apos; preferences&sbquo; increase engagement
                      and satisfaction.
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
                          src="/img/artificialintelligence/artificial-new-icon5.png"
                          alt="Artificial Intelligence Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/artificialintelligence/artificial-white-icon5.png"
                          alt="Artificial Intelligence Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>AI Consulting</h3>
                    <p>
                      We simplify AI for any business. To ensure AI project
                      success&sbquo; our strategic consulting services offer AI
                      integration advice&sbquo; opportunity
                      identification&sbquo; and feasibility assessments.
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
                          src="/img/artificialintelligence/artificial-new-icon1.png"
                          alt="Artificial Intelligence Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/artificialintelligence/artificial-white-icon1.png"
                          alt="Artificial Intelligence Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Natural Language Processing (NLP)</h3>
                    <p>
                      We love integrating machine and human language. By using
                      powerful Natural Language Processing models&sbquo;
                      businesses deliver more tailored and intuitive consumer
                      experiences.
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
                          src="/img/artificialintelligence/artificial-new-icon2.png"
                          alt="Artificial Intelligence Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/artificialintelligence/artificial-white-icon2.png"
                          alt="Artificial Intelligence Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Machine Learning Solutions</h3>
                    <p>
                      We help organizations unlock their data insights. Through
                      predictive analytics to customization systems&sbquo; we
                      provide data-driven technologies.
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
                          src="/img/artificialintelligence/artificial-new-icon8.png"
                          alt="Artificial Intelligence Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/artificialintelligence/artificial-white-icon8.png"
                          alt="Artificial Intelligence Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>AI Application Development</h3>
                    <p>
                      Our AI solutions are custom-made for your organization. We
                      produce AI apps for web&sbquo; mobile&sbquo; and
                      standalone platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="laravel_core_features_section">
          <div className="container">
            <h2>Core Features Of Artificial Intelligence Development</h2>
            <div className="laravel_core_features_bx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/artificialintelligence/core_features_icon1.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Personalized User Experience</h3>
                      <p>
                        AI enables tailored content based on user behavior and
                        preferences.
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
                        src="/img/artificialintelligence/core_features_icon4.png"
                        alt="img4"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Natural Language Processing</h3>
                      <p>
                        Allows user-friendly interfaces through voice commands
                        or text inputs.
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
                        src="/img/artificialintelligence/core_features_icon2.png"
                        alt="img2"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Predictive Analysis</h3>
                      <p>
                        Uses machine learning to predict future user behavior
                        and trends.
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
                        src="/img/artificialintelligence/core_features_icon5.png"
                        alt="img5"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Image and Speech Recognition</h3>
                      <p>
                        Enables features like facial recognition and
                        voice-activated controls.
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
                        src="/img/artificialintelligence/core_features_icon3.png"
                        alt="img3"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Flexible rates</h3>
                      <p>
                        <strong>AI development company</strong> can help you get
                        more services at reasonable rates.
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
                        src="/img/artificialintelligence/core_features_icon6.png"
                        alt="img6"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Assortment of skill set among the developers</h3>
                      <p>
                        The artificial intelligence developers have adept
                        themselves with the different platforms and their
                        different requirements pertaining to application
                        development.
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
            <h2>Benefits Of Artificial Intelligence Development</h2>
            <div className="laravel_choose_features_bx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_features_img laravel_choose_features_img1">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/artificialintelligence/artificial-why-icon1.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Increased Efficiency</h3>
                      <p>
                        AI automates repetitive activities&sbquo; improving
                        efficiency and eliminating human error.
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
                        src="/img/artificialintelligence/artificial-why-icon2.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Enhanced Personalization</h3>
                      <p>
                        AI customizes customer experiences based on preferences
                        and behavior.
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
                        src="/img/artificialintelligence/artificial-why-icon3.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Better Decision Making</h3>
                      <p>
                        AI analyzes and interprets complicated data sets for
                        data-driven decision-making.
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
                        src="/img/artificialintelligence/artificial-why-icon4.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Improved Predictive Capabilities</h3>
                      <p>
                        {" "}
                        AI predicts customer behavior and trends using
                        predictive analytics.
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
                        src="/img/artificialintelligence/artificial-why-icon5.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Advanced Security</h3>
                      <p>
                        AI effectively enhances cybersecurity efforts&sbquo;
                        effectively detecting and preventing potential threats.
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
                        src="/img/artificialintelligence/artificial-why-icon6.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Scaling Is Easy</h3>
                      <p>
                        Scaling your app to meet the changing requirements is
                        necessary&sbquo; and AI apps come with easy scaling.
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
              Why Choose Logicspice For <br />
              AI Solution Development?
            </h2>
            <div className="laravel_choose_features_bx ReactJsChooseFeaturesBx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_details">
                      <p>
                        With over 18+ years of experience in the industry&sbquo;
                        we bring a wealth of expertise and insight to AI
                        solution development.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_details">
                      <p>
                        Through our experience&sbquo;we&apos;ve developed a
                        process that guarantees each job is completed with the
                        highest quality standards&sbquo; efficiency&sbquo; and
                        on-time delivery.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 " data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_details">
                      <p>
                        We&apos;ve over 1900+ clients and delivered top-notch AI
                        solutions&sbquo; demonstrating our ability to cater to a
                        wide range of business needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_details">
                      <p>
                        As an innovation-driven entity&sbquo; we are always at
                        the forefront of technological advancements in AI&sbquo;
                        providing our clients with cutting-edge solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_details">
                      <p>
                        Our commitment to client satisfaction ensures we offer
                        continuous support and maintenance post-deploymen&sbquo;
                        ensuring your AI solutions always perform at their best.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 main_btn_hire">
                <div className="btn btn-primary" onClick={openModal}>
                  <a>Hire Now</a>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Request To Hire Artificial Intelligence Developers"
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
                      width={550}
                      height={500 / (100 / 100)}
                      src="/img/laraveldevelopment/FaqLaravelImg.png"
                      alt="laravel web development"
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <MDBAccordion v-model="activeItem" borderless>
                    <MDBAccordionItem
                      headerTitle="Which industries do Logicspice's AI development services serve?"
                      collapseId="flush-collapse1"
                    >
                      <p>
                        Healthcare&sbquo; finance&sbquo; retail&sbquo; and
                        manufacturing are among the industries we serve. Our
                        team is excellent at tailoring AI solutions to the
                        specific requirements of each industry.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What categories of AI solutions can be developed by Logicspice?"
                      collapseId="flush-collapse2"
                    >
                      <p>
                        Our expertise ranges from numerous AI technologies. We
                        can develop various solutions&sbquo; including
                        chatbots&sbquo; predictive analytics systems&sbquo;
                        recommendation engines&sbquo; and models for natural
                        language processing.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Can Logicspice help integrate AI solutions with our existing systems?"
                      collapseId="flush-collapse3"
                    >
                      <p>
                        Absolutely. Our team can assist you in integrating the
                        AI solution with your existing infrastructure&sbquo;
                        ensuring a smooth addition to your operations.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Does Logicspice develop the AI solution scalable as our business grows?"
                      collapseId="flush-collapse4"
                    >
                      <p>
                        Yes&sbquo; we have designed all our AI solutions with
                        scalability in mind. Our AI solution can be expanded and
                        adapted to suit your evolving needs as your business
                        grows.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How does Logicspice ensure the security of the AI solutions they develop?"
                      collapseId="flush-collapse5"
                    >
                      <p>
                        Security is our foremost concern. During
                        development&sbquo; we implement industry-standard
                        security measures and thoroughly test the solutions to
                        ensure they are secure against potential threats.
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
              <Image
                unoptimized={true}
                width={50}
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
