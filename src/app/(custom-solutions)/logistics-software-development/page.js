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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Support from "@/app/Components/Support";
import { Accordion, Card, Button } from "react-bootstrap";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
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
      <Navbar />
      <div className="top-head-custom jewellery-e-commerce CustomLogicsticsSoftwareBanner DefoutEcommerceBanner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-7 col-md-8">
              <div className="head-enquiry">
                <h1>Custom Logistics Software Development</h1>
                <ul className="head-feature">
                  <li>Best customized solutions for logistic Business.</li>
                  <li>Transform and reshape supply chain operations.</li>
                  <li>Enhance operational efficiency & reduce costs.</li>
                </ul>
              </div>
              <div className="JewelleryBtbBx">
                <div className="btn btn-primary" onClick={openModal}>
                  <a>Enquire Now</a>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Custom Logistics Software Development"
                    />
                  }
                </div>

                <a
                  href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
                  target="_blank"
                >
                  <div className="WhatsappIcon WhatsappIconCustom">
                    <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                      <div className="coccoc-alo-ph-circle"></div>
                      <div className="coccoc-alo-ph-circle-fill"></div>
                      <div className="coccoc-alo-ph-img-circle"></div>
                    </div>
                  </div>
                </a>
              </div>
              <div aria-label="breadcrumb" className="my-breadcrumb ">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a>Custom Solutions</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Custom Logistics Software
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-xs-12 col-sm-5 col-md-4">
              <div className="CustomLogicsticsBannerImg">
                <Image
                  unoptimized={true}
                  width={557}
                  height={421}
                  src="/img/logisticssoftwaredevelopment/custom-logicstics-software-img.png"
                  alt="Custom Logistics Software Development"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="BFC_logic BFC_CustomLogicstics">
        <div className="container">
          <h2 className="CustomSolutionHadding">
            Why Choose Our Logistic Software Solutions?
          </h2>
          <div className="CustomLogicsticsWhyChoose">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="BestCustomDevelopment">
                  <Image
                    unoptimized={true}
                    width={128}
                    height={128}
                    src="/img/logisticssoftwaredevelopment/customized-development-icon.png"
                    alt="Customized Development"
                  />
                  <h3>Customized Development</h3>
                  <p>
                    We specialize in creating personalized logistic software
                    that precisely aligns with the unique requirements of your
                    business. Our solutions are crafted to address your specific
                    challenges and objectives.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="BestCustomDevelopment">
                  <Image
                    unoptimized={true}
                    width={128}
                    height={128}
                    src="/img/logisticssoftwaredevelopment/improved-efficiency-icon.png"
                    alt="Improved Efficiency"
                  />
                  <h3>Improved Efficiency</h3>
                  <p>
                    Our logistic software solutions are designed to streamline
                    and simplify logistics operations. By reducing
                    complications&sbquo; we aim to enhance overall
                    efficiency&sbquo; allowing your business to operate smoothly
                    and with greater effectiveness.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="BestCustomDevelopment">
                  <Image
                    unoptimized={true}
                    width={128}
                    height={128}
                    src="/img/logisticssoftwaredevelopment/scalable-options-icon.png"
                    alt="Scalable Options"
                  />
                  <h3>Scalable Options</h3>
                  <p>
                    Recognizing that businesses evolve&sbquo; our software is
                    built to scale alongside your growth. It seamlessly adapts
                    to changing demands&sbquo; ensuring that your logistics
                    management system remains effective and relevant as your
                    business expands.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="BestCustomDevelopment">
                  <Image
                    unoptimized={true}
                    width={128}
                    height={128}
                    src="/img/logisticssoftwaredevelopment/real-time-monitoring-icon.png"
                    alt="Real-time Monitoring"
                  />
                  <h3>Real-time Monitoring</h3>
                  <p>
                    Experience the advantage of real-time tracking&sbquo;
                    providing immediate insights into the current status of
                    shipments&sbquo; inventory levels&sbquo; and routes. This
                    capability empowers decision-makers with timely and accurate
                    information&sbquo; ensuring well-informed choices and
                    enhanced operational efficiency in the logistics process.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="BestCustomDevelopment">
                  <Image
                    unoptimized={true}
                    width={128}
                    height={128}
                    src="/img/logisticssoftwaredevelopment/integration-flexibility-icon.png"
                    alt="Integration Flexibility"
                  />
                  <h3>Integration Flexibility</h3>
                  <p>
                    Our proposed logistic software is designed for seamless
                    integration with your existing systems. This not only
                    enhances productivity by avoiding disruptions but also
                    ensures a user-friendly experience&sbquo; allowing your team
                    to transition smoothly to the new solution.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="BestCustomDevelopment">
                  <Image
                    unoptimized={true}
                    width={128}
                    height={128}
                    src="/img/logisticssoftwaredevelopment/strong-security-icon.png"
                    alt="Strong Security Protocols"
                  />
                  <h3>Strong Security Protocols</h3>
                  <p>
                    Data security is a top priority. logistic software
                    development offered by us is equipped with robust security
                    measures&sbquo; ensuring the highest level of protection for
                    your sensitive information and maintaining transaction
                    reliability. You can trust our solutions to safeguard your
                    critical logistics data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SBC_logic CustomLogicsticsSBC_logic">
        <div className="container">
          <h2>Connect with Us for Custom Logistic Software Solutions</h2>
        </div>
        <div className="inner_content_SBG">
          <div className="container">
            <p>
              Are you ready to improve your logistics operations with customized
              software solutions? Contact us to discuss how our logistic
              software can positively impact your business processes. Whether
              you need to optimize shipment management&sbquo; enhance real-time
              visibility&sbquo; or improve overall logistics efficiency&sbquo;
              our solutions are designed to meet your unique needs. During our
              consultation&sbquo; we&apos;ll thoroughly understand your
              logistics workflows&sbquo; and our team will create a detailed
              plan to address your goals. We prioritize precision and efficiency
              during development&sbquo; ensuring a robust and personalized
              solution. After development&sbquo; rigorous testing guarantees a
              reliable software product&sbquo; and ongoing support is provided
              for seamless integration and addressing evolving needs. Contact us
              today to start your journey toward optimized logistics operations.
            </p>
          </div>
        </div>
      </div>
      <section
        className="JewelryEcommerceFeatureBxSection CustomLogisticFeatureBxSection"
        id="features"
      >
        <div className="container">
          <h2 className="CustomSolutionHadding">
            Key Features of Our Custom Logistic Software Solutions
          </h2>
          <div className="features-tab">
            <div className="JewelryEcommerceDevelopmentFeature CustomLogicsticsDevelopmentFeature">
              <div className="JewelryEcommerceFeatureTop">
                <div className="row">
                  <div className="col-sm-6 col-md-6">
                    <div className="JewelryEcommerceFeature">
                      <i>
                        <Image
                          unoptimized={true}
                          width={64}
                          height={64}
                          src="/img/logisticssoftwaredevelopment/user-profiles-icon.png"
                          alt="User Profiles and Managment"
                        />
                      </i>
                      <div className="JewelryEcommerceFeatureBx">
                        <h3>User Profiles & Management</h3>
                        <p>
                          Experience comprehensive functionality for managing
                          customers and transporters profiles within the
                          logistics platform. Our software provides a
                          user-friendly interface for efficiently handling
                          profiles&sbquo; ensuring a seamless experience for
                          both users and administrators. This feature
                          contributes to a well-organized and user-centric
                          platform for management.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="JewelryEcommerceFeature">
                      <i>
                        <Image
                          unoptimized={true}
                          width={64}
                          height={64}
                          src="/img/logisticssoftwaredevelopment/scalability-flexibility-icon.png"
                          alt="Scalability and Flexibility"
                        />
                      </i>
                      <div className="JewelryEcommerceFeatureBx">
                        <h3>Scalability & Flexibility</h3>
                        <p>
                          Our logistic software solutions adapt and grow with
                          your evolving business needs. Whether you are
                          expanding your operations or undergoing changes in
                          your logistics processes&sbquo; our software ensures
                          flexibility and scalability. This adaptability is
                          essential for accommodating expansions and operational
                          adjustments&sbquo; providing a future-proof solution.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="JewelryEcommerceFeature">
                      <i>
                        <Image
                          unoptimized={true}
                          width={64}
                          height={64}
                          src="/img/logisticssoftwaredevelopment/shipment-management-icon.png"
                          alt="Shipment Management"
                        />
                      </i>
                      <div className="JewelryEcommerceFeatureBx">
                        <h3>Shipment Management</h3>
                        <p>
                          Efficiently oversee and track shipments throughout
                          their journey&sbquo; starting from the point of origin
                          to the final destination. Our software ensures
                          real-time visibility into the status of
                          shipments&sbquo; allowing for smooth handling and
                          ensuring timely deliveries. This feature is designed
                          to provide a comprehensive solution for managing the
                          entire shipment process&sbquo; enhancing operational
                          efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="JewelryEcommerceFeature">
                      <i>
                        <Image
                          unoptimized={true}
                          width={64}
                          height={64}
                          src="/img/logisticssoftwaredevelopment/reviews-ratings-icon.png"
                          alt="Reviews and Ratings"
                        />
                      </i>
                      <div className="JewelryEcommerceFeatureBx">
                        <h3>Reviews & Ratings</h3>
                        <p>
                          Promote transparency and enhance the user experience
                          by enabling users to share feedback on
                          transporters&sbquo; services&sbquo; or products. This
                          feature allows users to provide reviews and
                          ratings&sbquo; creating a valuable resource for future
                          users to make informed decisions. Through sharing
                          experiences&sbquo; users actively contribute to a
                          community-driven platform that values transparency and
                          aids in making well-informed choices.
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
      <section className="demand_app BenefitsLogisticSoftwareSection">
        <div className="container">
          <h2>Benefits of Our Logistic Software Development Services</h2>
          <div className="BenefitsLogisticSoftwareMain">
            <div className="row">
              <div className="col-sm-6">
                <div className="BenefitsLogisticCard">
                  <div className="BenefitsLogisticCardImg">
                    <Image
                      unoptimized={true}
                      width={64}
                      height={64}
                      src="/img/logisticssoftwaredevelopment/data-driven-insights-icon.png"
                      alt="Data-Driven Insights"
                    />
                  </div>
                  <h3>Data-Driven Insights</h3>
                  <div className="BenefitsLogisticCardContent">
                    <p>
                      Leverage the capabilities of advanced analytics to extract
                      valuable insights from your logistics data. Our services
                      equip you with the tools needed for analyzing and
                      interpreting data&sbquo; enabling the formulation of
                      intelligent strategies and fostering continuous
                      improvement in your logistics operations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="BenefitsLogisticCard">
                  <div className="BenefitsLogisticCardImg">
                    <Image
                      unoptimized={true}
                      width={64}
                      height={64}
                      src="/img/logisticssoftwaredevelopment/real-time-icon.png"
                      alt="Real-time Visibility"
                    />
                  </div>
                  <h3>Real-time Visibility</h3>
                  <div className="BenefitsLogisticCardContent">
                    <p>
                      Experience immediate insights into the status of
                      shipments&sbquo; current inventory levels&sbquo; and
                      ongoing logistics operations. This real-time visibility
                      empowers decision-makers with timely information&sbquo;
                      enabling strategic and informed decision-making for better
                      overall logistics management.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="BenefitsLogisticCard">
                  <div className="BenefitsLogisticCardImg">
                    <Image
                      unoptimized={true}
                      width={64}
                      height={64}
                      src="/img/logisticssoftwaredevelopment/cost-savings-icon.png"
                      alt="Cost Savings"
                    />
                  </div>
                  <h3>Cost Savings</h3>
                  <div className="BenefitsLogisticCardContent">
                    <p>
                      Achieve cost savings through our optimization strategies.
                      We specialize in optimizing routes&sbquo; managing
                      inventory efficiently&sbquo; and allocating resources
                      effectively. This comprehensive approach results in
                      reduced operational costs and increased savings for your
                      logistics operations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="BenefitsLogisticCard">
                  <div className="BenefitsLogisticCardImg">
                    <Image
                      unoptimized={true}
                      width={64}
                      height={64}
                      src="/img/logisticssoftwaredevelopment/enhanced-operational-icon.png"
                      alt="Enhanced Operational Efficiency"
                    />
                  </div>
                  <h3>Enhanced Operational Efficiency</h3>
                  <div className="BenefitsLogisticCardContent">
                    <p>
                      Our services are dedicated to optimizing logistics
                      processes&sbquo; effectively minimizing errors&sbquo; and
                      enhancing overall operational efficiency. We focus on
                      refining the intricacies of your logistics operations to
                      ensure a smoother and more efficient workflow.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="BenefitsLogisticCard">
                  <div className="BenefitsLogisticCardImg">
                    <Image
                      unoptimized={true}
                      width={64}
                      height={64}
                      src="/img/logisticssoftwaredevelopment/improved-customer-icon.png"
                      alt="Improved Customer Experience"
                    />
                  </div>
                  <h3>Improved Customer Experience</h3>
                  <div className="BenefitsLogisticCardContent">
                    <p>
                      Elevate the quality of service&sbquo; enhance delivery
                      accuracy&sbquo; and improve communication channels. Our
                      logistic software development services focus on refining
                      the customer experience by ensuring timely and accurate
                      deliveries&sbquo; fostering better communication&sbquo;
                      and ultimately leading to heightened customer
                      satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
      <div className="app_solution eCommerceAppSolution">
        <div className="container">
          <h2 className="CustomSolutionHadding">
            Our Approach to Custom Logistics Software Development
          </h2>
          <div className="EcommerceJewellerySolutionBx CustomLogicsticsSolutionBx">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="EcommerceJewellerySolutionImg">
                  <Image
                    unoptimized={true}
                    width={500}
                    height={397}
                    src="/img/logisticssoftwaredevelopment/logicstics-solution-img.jpg"
                    alt="Custom Logistics Software Development"
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="JewellerySolutionBx JewelleryIdeaBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={26}
                      height={26}
                      src="/img/logisticssoftwaredevelopment/idea-icon.png"
                      alt="Consultation"
                    />
                  </i>
                  <h3>Consultation</h3>
                  <p>
                    In the initial phase&sbquo; we engage in a comprehensive
                    consultation process to deeply understand the unique
                    challenges and objectives of your logistics operations. This
                    involves collaborative discussions to gather insights into
                    the intricacies of your logistics workflows and identify
                    specific pain points.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="JewellerySolutionBx JewelleryConceptBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={26}
                      height={26}
                      src="/img/logisticssoftwaredevelopment/concept-icon.png"
                      alt="Planning"
                    />
                  </i>
                  <h3>Planning</h3>
                  <p>
                    After the consultation&sbquo; we initiate careful planning.
                    This stage involves developing a detailed and customized
                    plan that aligns with your specific needs and requirements.
                    We focus on outlining a roadmap that addresses your
                    logistics goals&sbquo; ensuring a strategic and effective
                    approach to software development.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="JewellerySolutionBx JewelleryImplementBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={26}
                      height={26}
                      src="/img/logisticssoftwaredevelopment/implement-icon.png"
                      alt="Development"
                    />
                  </i>
                  <h3>Development</h3>
                  <p>
                    The development phase is executed with precision and
                    efficiency. Our team of skilled developers works attentively
                    to create the custom logistic software based on the outlined
                    plan. This involves the implementation of advanced
                    technologies and industry best practices to ensure the
                    development of a robust and customized solution.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="JewellerySolutionBx JewelleryTestingBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={26}
                      height={26}
                      src="/img/logisticssoftwaredevelopment/software-testing.png"
                      alt="Testing"
                    />
                  </i>
                  <h3>Testing</h3>
                  <p>
                    Rigorous testing is an integral part of our process to
                    guarantee a bug-free and reliable software solution. We
                    conduct thorough testing procedures&sbquo; including
                    functional&sbquo; performance&sbquo; and security
                    testing&sbquo; to identify and address any potential issues.
                    This ensures that the software meets the highest standards
                    of quality and reliability.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="JewellerySolutionBx JewellerySupportBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={26}
                      height={26}
                      src="/img/logisticssoftwaredevelopment/support-icon.png"
                      alt="Deployment & Support"
                    />
                  </i>
                  <h3>Deployment & Support</h3>
                  <p>
                    Once the software has successfully passed testing&sbquo; we
                    proceed with seamless deployment. Our commitment
                    doesn&apos;t end with deployment-we provide ongoing support
                    to ensure the optimal performance of the software. This
                    includes addressing any post-deployment issues&sbquo;
                    implementing updates&sbquo; and offering continuous
                    assistance to meet evolving logistics needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="support_logic eCommerceSupportLogic CustomLogisticsSupportLogic">
        <div className="container">
          <h2 className="CustomSolutionHadding">What Support You Will Get?</h2>
          <div className="row">
            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/logisticssoftwaredevelopment/sup1.png"
                alt="Idea Exchange"
              />
              <h3>Idea Exchange</h3>
              <p>
                We value your idea and with the mutual communication between you
                and us&sbquo; we come up with great idea.
              </p>
            </div>
            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/logisticssoftwaredevelopment/sup2.png"
                alt="Documentation Plan"
              />
              <h3>Documentation Plan</h3>
              <p>
                A proper documentation before start building an app or not rely
                on a code.
              </p>
            </div>
            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/logisticssoftwaredevelopment/sup3.png"
                alt="Plan With Prototype"
              />
              <h3>Plan With Prototype</h3>
              <p>
                A prototype version of a product&sbquo; a service or a process
                and same will be used in order to develop & test.
              </p>
            </div>
            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/logisticssoftwaredevelopment/sup4.png"
                alt="Regular updated Progress"
              />
              <h3>Regular updated Progress</h3>
              <p>
                You will get the updates after progress and with your
                approval&sbquo; we move forward.
              </p>
            </div>
            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/logisticssoftwaredevelopment/sup5.png"
                alt="Payment in Milestone"
              />
              <h3>Payment in Milestone</h3>
              <p>
                There is no need to do complete payment for your project. Each
                payment will get released after completion of each milestone.
              </p>
            </div>
            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/logisticssoftwaredevelopment/sup6.png"
                alt="First Installation Free"
              />
              <h3>First Installation Free</h3>
              <p>
                We install the code for the first time free on your live server
                and if you are going for second time&sbquo; it is chargeable.
              </p>
            </div>
            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/logisticssoftwaredevelopment/sup7.png"
                alt="Post Delivery Support"
              />
              <h3>Post Delivery Support</h3>
              <p>We give free support for the next 6 months.</p>
            </div>
            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/logisticssoftwaredevelopment/sup8.png"
                alt="Long Term Maintenance"
              />
              <h3>Long Term Maintenance</h3>
              <p>
                We always believe in long term relation with client so we are
                always available if you are looking for future extendibility.
              </p>
            </div>
            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/logisticssoftwaredevelopment/sup9.png"
                alt="Third Party Support"
              />
              <h3>Third Party Support</h3>
              <p>
                We communicate for all the third party installation and support
                on the behalf of the client.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="faq_logic faq_logic_marketplace CustomLogisticsFaq">
        <div className="container">
          <div className="JewelleryEcommerceFAQ">
            <h4 className="title_main">
              Frequently <br />
              Asked Questions
            </h4>
            <div className="FrequentlyQuestions">
              <MDBAccordion v-model="activeItem" borderless>
                <MDBAccordionItem
                  headerTitle="What Does Custom Logistic Software Development Involve?"
                  collapseId="flush-collapse1"
                >
                  <p>
                    Custom logistic software development is the creation of
                    personalized software solutions designed to meet a
                    business&apos;s unique logistical needs. The process focuses
                    on developing software that optimizes logistics
                    operations&sbquo; enhances efficiency&sbquo; and aligns with
                    the specific requirements of the client.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="How Can Logicspice's Custom Logistic Software Add Value to My Business?"
                  collapseId="flush-collapse2"
                >
                  <p>
                    Logicspice&apos;s custom logistic software delivers
                    significant value to your business by streamlining
                    operations&sbquo; automating processes&sbquo; providing
                    enhanced visibility into logistics&sbquo; and enabling
                    real-time tracking of shipments&sbquo; inventory&sbquo; and
                    routes.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Is Logicspice's Logistic Software Compatible with Mobile Platforms?"
                  collapseId="flush-collapse3"
                >
                  <p>
                    Certainly&sbquo; our logistic software solutions undergo a
                    thoughtful design process to be responsive and compatible
                    with various mobile platforms. This approach guarantees
                    accessibility and convenience for users while on the
                    go&sbquo; reflecting our commitment to providing a seamless
                    and user-friendly experience.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="What Support and Maintenance Services Does Logicspice Offer After Software Deployment?"
                  collapseId="flush-collapse4"
                >
                  <p>
                    Post-deployment&sbquo; Logicspice provides comprehensive
                    support and maintenance services for the next 1 month&sbquo;
                    covering regular updates&sbquo; bug fixes and technical
                    assistance. This ensures the continuous and efficient
                    functioning of the logistic software.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Can Logicspice's Custom Logistic Software Scale with Business Growth?"
                  collapseId="flush-collapse5"
                >
                  <p>
                    Certainly. Our logistic software solutions are expressly
                    designed to be scalable&sbquo; enabling smooth adaptation
                    and expansion to meet the changing needs and growth of your
                    business&sbquo; all without compromising efficiency or
                    performance.
                  </p>
                </MDBAccordionItem>
              </MDBAccordion>
            </div>
          </div>
        </div>
      </div>
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
                    title="Custom Logistics Software Development"
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

      <Footer />
    </>
  );
};

export default Page;
