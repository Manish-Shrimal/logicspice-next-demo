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
      <div className="bigDataDevelopment">
        <section className="laravel-banner BigdataBanner">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-8">
                <div className="laravel-banner-txt">
                  <h1>
                    <strong className="LaravelBannerHadding">Big Data </strong>
                    Development Services
                  </h1>
                  <div className="LaravelText">
                    LogicSpice&sbquo; a leading <strong>big data</strong>{" "}
                    development company&sbquo; offers top-tier big data
                    analytics services to businesses globally&sbquo; leveraging
                    the immense potential of insights from data.
                  </div>
                  <div className="laravel-anquire">
                    <div className="btn btn-primary" onClick={openModal}>
                      <a>Enquire Now</a>
                      {
                        <Enquirymodal
                          modalStatus={showModal}
                          toggle={openModal}
                          title="Big Data Development Services"
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
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="page_img">
                  <Image
                    unoptimized={true}
                    width={380}
                    height={500 / (100 / 100)}
                    src="/img/bigdatadevelopment/bigdata-img.png"
                    alt="Big Data Development Services"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="laravel-descriptions cackphp-descriptions BigDataDescription">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-5 pull-right">
                <div className="laravel_img">
                  <Image
                    unoptimized={true}
                    width={290}
                    height={500 / (100 / 100)}
                    src="/img/bigdatadevelopment/big-data-icon.png"
                    alt="Big Data Development Services"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-7 pull-left">
                <div className="laravel-descriptions-bx" dir="ltr">
                  <h2>
                    <strong>Big Data</strong>
                    <br /> Development
                  </h2>
                  <p>
                    As a leading <i>Big Data</i> Analytics company&sbquo; we
                    pride ourselves on deciphering vast data into actionable
                    insights. Recognized among the top Big Data consulting
                    companies&sbquo; we provide customized analytics services to
                    businesses aiming to harness their data&apos;s potential.
                  </p>
                  <p>
                    With our extensive Big Data Analytics services&sbquo; we
                    address the distinct challenges businesses face in the
                    modern data-rich era. Our solutions are geared towards
                    enabling smooth data integration&sbquo; rapid
                    analysis&sbquo; and insightful interpretations. We leverage
                    tools like Hadoop&sbquo; Spark&sbquo; and Kafka to
                    process&sbquo; manage&sbquo; and analyze massive data sets.
                    Whether you are looking for dedicated Big Data Analytics
                    solutions or exploring various companies for holistic
                    solutions&sbquo; our team is prepared to assist and guide
                    you throughout your Big Data Analytics journey.
                  </p>
                  <p>
                    Big Data Development streamlines data processing and
                    analytics to drive informed business decision-making. It
                    leverages advanced tools and methodologies like
                    Hadoop&sbquo; Spark&sbquo; Flink&sbquo; and Kafka to
                    efficiently manage&sbquo; process&sbquo; and analyze vast
                    datasets. Our team is dedicated to delivering customized Big
                    Data solutions that ensure smooth integration and optimize
                    data-driven insights across various scenarios and platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="laravel-devlopments-services">
          <div className="container">
            <h2>
              <strong>Big Data</strong> Development Services
            </h2>
            <div className="laravel-services-bx-top">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box1">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/bigdatadevelopment/data-analytics.png"
                          alt="Big Data Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/bigdatadevelopment/data-analytics-white.png"
                          alt="Big Data Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Data Analytics Solutions</h3>
                    <p>
                      Our services are crucial in unlocking hidden patterns and
                      insights&sbquo; helping large corporations and startups
                      make informed decisions.
                    </p>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box6">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/bigdatadevelopment/data-visualization.png"
                          alt="Big Data Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/bigdatadevelopment/data-visualization-white.png"
                          alt="Big Data Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Data Visualization Platforms</h3>
                    <p>
                      Transform raw data into clear visuals. Our platforms
                      simplify datasets into actionable graphics for quick
                      decision-making.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box5">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/bigdatadevelopment/customer-behavior.png"
                          alt="Big Data Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/bigdatadevelopment/customer-behavior-white.png"
                          alt="Big Data Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Customer Behavior Analysis</h3>
                    <p>
                      Understand your audience with our tools. We analyze
                      customer behavior&sbquo; assisting brands in refining
                      engagement strategies.
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
                          src="/img/bigdatadevelopment/predictive-analysis.png"
                          alt="Big Data Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/bigdatadevelopment/predictive-analysis-white.png"
                          alt="Big Data Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Predictive Analysis Tools</h3>
                    <p>
                      Use predictive tools crafted by our team to guide
                      proactive business decisions.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box3">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/bigdatadevelopment/data-integration.png"
                          alt="Big Data Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/bigdatadevelopment/data-integrationwhite.png"
                          alt="Big Data Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Data Integration Systems</h3>
                    <p>
                      Centralize your data with our integration solutions for
                      enhanced analysis.
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box4">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/bigdatadevelopment/real-time-data.png"
                          alt="Big Data Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/bigdatadevelopment/real-time-data-white.png"
                          alt="Big Data Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Real-time Data Monitoring</h3>
                    <p>
                      Stay updated with our real-time data solutions&sbquo;
                      enabling swift responses to changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="laravel_core_features_section">
          <div className="container">
            <h2>
              Core Features of Our <strong>Big Data</strong> Services
            </h2>
            <div className="laravel_core_features_bx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/bigdatadevelopment/data-security.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Data Security</h3>
                      <p>Your data&apos;s safety is our prime concern.</p>
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
                        src="/img/bigdatadevelopment/tailored-solutions.png"
                        alt="img4"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Tailored Solutions</h3>
                      <p>
                        Experience customization at its best with our{" "}
                        <i>big data</i> consulting services.
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
                        src="/img/bigdatadevelopment/cost-efficiency.png"
                        alt="img2"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Cost-Efficiency</h3>
                      <p>
                        Top-quality <i>big data</i> development services at
                        competitive rates.
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
                        src="/img/bigdatadevelopment/adaptable-design.png"
                        alt="img5"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Adaptable Design</h3>
                      <p>Branding-centric data visualization and dashboards.</p>
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
                        src="/img/bigdatadevelopment/comprehensive-reporting.png"
                        alt="img3"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Comprehensive Reporting</h3>
                      <p>
                        Detailed insights to mold business strategies&sbquo;
                        emphasizing our role as a data integration consulting
                        leader.
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
                        src="/img/bigdatadevelopment/expertise-diversity.png"
                        alt="img6"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Expertise Diversity </h3>
                      <p>
                        Our team&apos;s vast knowledge spans numerous{" "}
                        <i>big data</i> platforms and tools.
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
            <h2>
              Benefits of <strong>Big Data</strong> Development
            </h2>
            <div className="laravel_choose_features_bx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_features_img laravel_choose_features_img1">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/bigdatadevelopment/enhanced-decision.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Enhanced Decision Making</h3>
                      <p>
                        Big Data aids in making informed decisions by swiftly
                        analyzing vast amounts of information.
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
                        src="/img/bigdatadevelopment/predictive-analysis-icon.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Predictive Analysis</h3>
                      <p>
                        Our tools dive deep into historical data&sbquo;
                        forecasting future trends and outcomes.
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
                        src="/img/bigdatadevelopment/improved-customer.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Improved Customer Insights</h3>
                      <p>
                        Big Data analyzes customer behavior&sbquo; refining
                        engagement and understanding.
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
                        src="/img/bigdatadevelopment/cost-efficiency-icon.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Cost Efficiency</h3>
                      <p>
                        Big Data solutions optimize storage processing costs and
                        streamline operations.
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
                        src="/img/bigdatadevelopment/risk-management.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Risk Management</h3>
                      <p>
                        Analyzing vast datasets can identify potential
                        threats&sbquo; enabling proactive mitigation.
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
                        src="/img/bigdatadevelopment/product-innovation.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Product Innovation</h3>
                      <p>
                        By understanding market trends&sbquo; Big Data can drive
                        innovative product development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="laravel_choose_features_section"
          style={{ backgroundColor: "#f1f1f1" }}
        >
          <div className="container">
            <h2>
              Why Choose Logicspice For <strong>Big Data</strong> Development?
            </h2>
            <div className="laravel_choose_features_bx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_details">
                      <p>
                        We have worked in this industry for 18+ years with 1900+
                        clients across 15 countries. Our Big Data team provides
                        top-notch solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_details">
                      <p>
                        We provide big data analytics solutions&sbquo; project
                        planning&sbquo; development&sbquo; testing, and support.
                        We handle all your Big Data development needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6 " data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_details">
                      <p>
                        Logicspice values customer satisfaction. We learn about
                        your business and create custom solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_details">
                      <p>
                        Our service is not only the best in terms of quality but
                        also cost-effective.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 main_btn_hire">
                <div className="btn btn-primary" onClick={openModal}>
                  <a>Enquire Now</a>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Big Data Development Services"
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
                      // headerTitle="How does big data analytics differ from traditional data analysis methods, and why is it becoming a preferred choice for businesses today?"
                      headerTitle={
                        <span
                          dangerouslySetInnerHTML={{
                            __html:
                              "How does <strong>big data</strong> analytics differ from traditional data analysis methods, and why is it becoming a preferred choice for businesses today?",
                          }}
                        />
                      }
                      collapseId="flush-collapse1"
                      data-aos="fade-up"
                    >
                      <p>
                        Big data analytics deals with vast&sbquo; frequently
                        unstructured datasets&sbquo; revealing more profound
                        insights than conventional analysis techniques. As
                        businesses navigate an ever-growing digital
                        landscape&sbquo; they increasingly lean towards big data
                        analytics&sbquo; valuing its comprehensive
                        insights&sbquo; strategic advantages&sbquo; and the
                        innovation it fosters.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Why is LogicSpice recognized as a leading big data consulting company?"
                      collapseId="flush-collapse2"
                      data-aos="fade-up"
                    >
                      <p>
                        LogicSpice is renowned for offering top-tier big data
                        analytics services to businesses across the globe. Our
                        expertise isn&apos;t limited to just understanding data;
                        we predict future trends&sbquo; analyze real-time data
                        streams&sbquo; and train machine learning models for
                        improved decision-making. Plus&sbquo; we&apos;re good at
                        using <strong>big data</strong> tools like Hadoop and
                        Spark&sbquo; which help businesses try new things&sbquo;
                        making us a trusted big data development company.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="With increasing concerns about data privacy and security, how do big data analytics services maintain the confidentiality and integrity of their data?"
                      collapseId="flush-collapse3"
                      data-aos="fade-up"
                    >
                      <p>
                        Big data analytics services prioritize data security by
                        employing multiple layers of protection measures. This
                        includes encrypted data transfers&sbquo; secure
                        storage&sbquo; access controls&sbquo; and regular
                        security audits.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What kind of big data services can businesses avail of from a specialized consulting company?"
                      collapseId="flush-collapse4"
                      data-aos="fade-up"
                    >
                      <p>
                        Businesses seeking specialized big data services can
                        explore a variety of offerings from consulting firms.
                        For instance&sbquo; LogicSpice provides a comprehensive
                        range of services&sbquo; including Business
                        Intelligence&sbquo; Predictive Analytics&sbquo; Data
                        Warehousing&sbquo; Data Mining&sbquo; Real-time
                        Analytics&sbquo; Data Visualization&sbquo; Data Lake
                        Solutions&sbquo; and Cloud Data Services&sbquo; all
                        tailored to each business&apos;s unique needs.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What benefits can businesses expect when partnering with a big data consulting company?"
                      collapseId="flush-collapse5"
                      data-aos="fade-up"
                    >
                      <p>
                        Partnering with a big data consulting company ensures
                        seamless integration into existing systems. They provide
                        user-centric designs&sbquo; and innovative strategies
                        for future growth&sbquo; and ensure compatibility with
                        cloud and on-premises platforms. This approach optimizes
                        business operations for future success.
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
