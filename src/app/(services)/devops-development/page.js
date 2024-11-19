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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    autoplay: true,
    arrows: false,
  };

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
      <div className="devopsDevelopment"><section className="laravel-banner DevOpsBanner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="laravel-banner-txt">
                <h1>
                  <strong className="LaravelBannerHadding">DevOps </strong>
                  Development Services
                </h1>
                <div className="LaravelText">
                  Logicspice offers premier global DevOps services&sbquo;
                  providing robust and advanced solutions. We guarantee seamless
                  integration and swift delivery&sbquo; setting DevOps
                  excellence standards.
                </div>
                <div className="laravel-anquire">
                  <div className="btn btn-primary" onClick={openModal}>
                    <a>Enquire Now</a>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="DevOps Development Services"
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
                <Image
                  unoptimized={true}
                  width={600}
                  height={500 / (100 / 100)}
                  src="/img/devopsdevelopment/devops-img.png"
                  alt="DevOps Development Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="laravel-descriptions cackphp-descriptions BigDataDescription DevOpsDescription">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-5 col-md-5 pull-right">
              <div className="laravel_img">
                <Image
                  unoptimized={true}
                  width={600}
                  height={500 / (100 / 100)}
                  src="/img/devopsdevelopment/devops-icon.png"
                  alt="DevOps Development Services"
                />
              </div>
            </div>
            <div className="col-sm-7 col-md-7 pull-left">
              <div className="laravel-descriptions-bx" dir="ltr">
                <h2>
                  <strong>DevOps</strong>
                  <br /> Development
                </h2>
                <p>
                  As a leading DevOps development company&sbquo; we pride
                  ourselves on bridging the gap between software development and
                  IT operations. Recognized among the top DevOps consulting
                  companies&sbquo; we offer tailored DevOps consulting services
                  to enterprises seeking to optimize their workflows.{" "}
                </p>
                <p>
                  With our comprehensive DevOps services and solutions&sbquo; we
                  address the unique challenges businesses face in today&apos;s
                  fast-paced digital landscape. Our DevOps development services
                  are designed to ensure seamless integration&sbquo; automated
                  processes&sbquo; and enhanced collaboration. Whether you are
                  searching for a dedicated DevOps consulting company or
                  exploring various DevOps companies for end-to-end
                  solutions&sbquo; our team is equipped to guide and support you
                  at every step of your DevOps journey.
                </p>
                <p>
                  DevOps application streamlines development and operations to
                  achieve business goals through integrated tools and
                  methodologies. It leverages best practices and platforms like
                  Jenkins&sbquo; Docker&sbquo; Kubernetes&sbquo; and Terraform
                  to automate&sbquo; monitor&sbquo; and enhance the software
                  delivery lifecycle. Our team is committed to delivering
                  tailored DevOps solutions that ensure seamless collaboration
                  and optimize the development pipeline across diverse
                  environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel-devlopments-services">
        <div className="container">
          <h2>
            <strong>DevOps</strong> Development Services
          </h2>
          <div className="laravel-services-bx-top">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box3">
                    <i>
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/devopsdevelopment/containerization-icon.png"
                        alt="DevOps Development Services"
                      />
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/devopsdevelopment/containerization-icon-white.png"
                        alt="DevOps Development Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Containerization</h3>
                  <p>
                    Leverage the power of Docker and similar tools for
                    environment consistency.
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
                        src="/img/devopsdevelopment/cloud-automation-icon.png"
                        alt="DevOps Development Services"
                      />
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/devopsdevelopment/cloud-automation-white-icon.png"
                        alt="DevOps Development Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Cloud Automation</h3>
                  <p>
                    Embrace the cloud with automated deployment and scaling
                    strategies.
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
                        src="/img/devopsdevelopment/deployment-automation-icon.png"
                        alt="DevOps Development Services"
                      />
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/devopsdevelopment/deployment-automation-white-icon.png"
                        alt="DevOps Development Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Deployment Automation</h3>
                  <p>
                    Automate your release process&sbquo; ensuring faster and
                    safer deliveries.
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
                        src="/img/devopsdevelopment/infrastructure-icon.png"
                        alt="DevOps Development Services"
                      />
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/devopsdevelopment/infrastructure-white-icon.png"
                        alt="DevOps Development Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Infrastructure as Code</h3>
                  <p>
                    Script your infrastructure needs&sbquo; a key component of
                    our DevOps development services.
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
                        src="/img/devopsdevelopment/infrastructure-automation-icon.png"
                        alt="DevOps Development Services"
                      />
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/devopsdevelopment/infrastructure-automation-white-icon.png"
                        alt="DevOps Development Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Infrastructure Automation</h3>
                  <p>
                    Our DevOps development services have transformed the
                    operational efficiency of numerous enterprises&sbquo; from
                    startups to established corporations.
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
                        src="/img/devopsdevelopment/monitoring-logging-icon.png"
                        alt="DevOps Development Services"
                      />
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/devopsdevelopment/monitoring-logging-white-icon.png"
                        alt="DevOps Development Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Monitoring and Logging Solutions</h3>
                  <p>
                    Step up your system surveillance game. Keep a vigilant eye
                    on applications and infrastructure performance.
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
                        src="/img/devopsdevelopment/security-compliance-icon.png"
                        alt="DevOps Development Services"
                      />
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/devopsdevelopment/security-compliance-white-icon.png"
                        alt="DevOps Development Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Security and Compliance</h3>
                  <p>
                    Prioritize your software&apos;s security with our dedicated
                    DevOps practices&sbquo; ensuring your applications meet
                    compliance standards.
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
                        src="/img/devopsdevelopment/configuration-management-icon.png"
                        alt="DevOps Development Services"
                      />
                      <Image
                        unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/devopsdevelopment/configuration-management-white-icon.png"
                        alt="DevOps Development Services"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Configuration Management</h3>
                  <p>
                    Ensure consistent settings across development&sbquo;
                    staging&sbquo; and production.
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
            Core Features of Our <strong>DevOps</strong> Services
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
                      src="/img/devopsdevelopment/operational-efficiency.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Operational Efficiency</h3>
                    <p>
                      Simplified workflows for faster&sbquo; error-free
                      operations.
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
                      src="/img/devopsdevelopment/custom-infrastructure.png"
                      alt="img4"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Custom Infrastructure</h3>
                    <p>
                      Bespoke solutions in tune with your DevOps services and
                      solutions needs.
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
                      src="/img/devopsdevelopment/flexible-rates.png"
                      alt="img2"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Flexible rates</h3>
                    <p>
                      The DevOps development can help you in getting more
                      services at reasonable rates.
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
                      src="/img/devopsdevelopment/scalable-architecture.png"
                      alt="img5"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Scalable Architecture</h3>
                    <p>Infrastructure that grows with your needs.</p>
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
                      src="/img/devopsdevelopment/real-time-reporting.png"
                      alt="img3"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Real-time Reporting</h3>
                    <p>
                      Immediate feedback for timely interventions and strategy
                      changes.
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
                      src="/img/devopsdevelopment/diverse-expertise.png"
                      alt="img6"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Diverse Expertise</h3>
                    <p>
                      Our team is efficient across a broad spectrum of DevOps
                      tools and practices.
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
            Benefits of <strong>DevOps</strong> Development
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
                      src="/img/devopsdevelopment/seamless-collaboration.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Seamless Collaboration</h3>
                    <p>
                      DevOps ensures unified operations&sbquo; leading to
                      efficient teamwork between developers and operators.
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
                      src="/img/devopsdevelopment/swift-market.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Swift Market Launch</h3>
                    <p>
                      Frequent releases ensure your products hit the market
                      swiftly&sbquo; thanks to continuous deployment.
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
                      src="/img/devopsdevelopment/peak-performance.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Peak Performance Levels</h3>
                    <p>
                      With DevOps&sbquo; systems are stable and reliable&sbquo;
                      minimizing operational hitches.
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
                      src="/img/devopsdevelopment/budget-friendly.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Budget-Friendly Fixes</h3>
                    <p>
                      Catch issues early&sbquo; leading to cost-effective
                      solutions and reduced overall expenses.
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
                      src="/img/devopsdevelopment/easy-scalability.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Easy Scalability</h3>
                    <p>
                      Adapting to growing demands is effortless&sbquo; as DevOps
                      ensures scalable solutions.
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
                      src="/img/devopsdevelopment/automated-quick.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Automated & Quick</h3>
                    <p>
                      A single DevOps pipeline enhances speed with integrated
                      platform automation.
                    </p>
                  </div>
                </div>
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
                    width={500}
                    height={100}
                    src="/img/laraveldevelopment/FaqLaravelImg.png"
                    alt="laravel web development"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="What is DevOps&sbquo; and why are companies using it more nowadays?"
                    collapseId="flush-collapse1"
                     data-aos="fade-up"
                  >
                    <p>
                      DevOps combines software development (Dev) and IT
                      operations (Ops) to speed up and improve the software
                      delivery process. With DevOps&sbquo; companies can release
                      new features faster&sbquo; fix problems quicker&sbquo; and
                      offer more stable solutions. It&apos;s becoming popular
                      because businesses need to adapt rapidly in our digital
                      world.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Why is LogicSpice considered a top DevOps development company?"
                    collapseId="flush-collapse2"
                     data-aos="fade-up"
                  >
                    <p>
                      LogicSpice stands out because of its commitment to quality
                      and speed. We use the best tools and methods to make
                      software development and IT operations work better
                      together. Our goal is to help businesses move faster
                      without problems&sbquo; which is why many trust us for
                      their DevOps needs.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How do DevOps services ensure that software is both high quality and delivered quickly?"
                    collapseId="flush-collapse3"
                     data-aos="fade-up"
                  >
                    <p>
                      DevOps uses automated testing and deployment methods. This
                      means we can check the software for issues quickly and
                      often. So&sbquo; by the time the software is ready for
                      users&sbquo; it has been tested many times&sbquo; ensuring
                      its quality while also getting it out fast.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="What tools are commonly used in DevOps&sbquo; and why?"
                    collapseId="flush-collapse4"
                     data-aos="fade-up"
                  >
                    <p>
                      Tools like Jenkins&sbquo; Docker&sbquo; and Kubernetes are
                      popular in DevOps. Jenkins helps with automating different
                      stages of development&sbquo; Docker packages software into
                      units called containers&sbquo; and Kubernetes manages
                      these containers. Using these tools makes the process
                      smoother and more efficient.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How does DevOps benefit businesses directly?"
                    collapseId="flush-collapse5"
                     data-aos="fade-up"
                  >
                    <p>
                      With DevOps&sbquo; businesses can release new software
                      features faster&sbquo; which keeps customers happy. They
                      can also respond to market changes more quickly and have
                      fewer software problems. Overall&sbquo; it saves time and
                      money while improving the product.
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
      </div></div>
      

      <Footer />
    </>
  );
};

export default Page;
