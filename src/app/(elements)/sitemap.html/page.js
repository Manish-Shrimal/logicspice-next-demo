"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "../elements.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"


const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };

  const openModal = () => {
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Navbar />
      <section
        className="resources-header"
        style={{ background: "url(/img/3820b_sitemap.png)" }}
      >
        <div className="container">
          <span>Sitemap</span>
        </div>
      </section>

      <section className="breadcrems_header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>SITEMAP</h1>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="current">Sitemap</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content_area sitemap">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="four columns_sitemap alpha">
                <ul className="sites_maps">
                  <li>
                    <Link href="/company">Company</Link>
                    <ul>
                      <li className="sub_mp">
                        <Link href="/company/about-us">About US</Link>
                        <ul>
                          <li>
                            <Link href="/company/our-team">Our Team</Link>
                          </li>
                          <li>
                            <Link href="/company/testimonials-and-reviews">
                              Testimonials &amp; Reviews
                            </Link>
                          </li>
                          <li>
                            <Link href="/technologies">Technologies</Link>
                          </li>
                          <li>
                            <Link href="https://www.logicspice.com/blog">Blogs</Link>
                          </li>
                          <li>
                            <Link href="/gallery">Gallery</Link>
                          </li>
                          <li>
                            <Link href="/company/social-responsibility">
                              Social Responsibility
                            </Link>
                          </li>
                          <li>
                            <Link href="/top-freelancer-company">
                              Top Freelancer Company
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="sub_mp">
                        <Link href="/resources">Resources</Link>
                        <ul>
                          <li>
                            <Link href="/resources/how-can-we-help">
                              How Can We Help
                            </Link>
                          </li>
                          <li>
                            <Link href="/resources/how-much-an-app-cost">
                              How Much An App Cost
                            </Link>
                          </li>
                          <li>
                            <Link href="/resources/how-to-grow-your-business-idea">
                              How to grow your business idea
                            </Link>
                          </li>
                          <li>
                            <Link href="/resources/quality-assurance">
                              Quality Assurance
                            </Link>
                          </li>
                          <li>
                            <Link href="/resources/our-work-process">
                              Work Our Process
                            </Link>
                          </li>
                          <li>
                            <Link href="/resources/free-scripts">
                              Free Scripts
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="sub_mp">
                        <Link href="/industries">Industries</Link>
                        <ul>
                          <li>
                            <Link href="/industries/Hotel-apps">
                              Hotel Industry
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/ecommerce-and-retail-apps">
                              eCommerce &amp; Retail
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/transportation-apps">
                              Transportation
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/schools-and-education-apps">
                              Online Education
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/ideas-and-business-concepts-apps">
                              Unique Business Concepts &amp; Ideas
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/health-care-apps">
                              Health Care Industry
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/commercial-and-residential-apps">
                              Real Estate
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/service-contractors-and-cleaning-companies-apps">
                              Service Contractors
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/accountants-and-financial-services-real-estate-apps">
                              Accountants and Financial Industry
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/government-and-municipal-and-other-administrative-operations-apps">
                              Government Operations
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/professional-consultant-mobile-app-development">
                              Professional Consultants
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/energy-and-utilities-apps">
                              Energy &amp; Utilities
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/finance-and-insurance-apps">
                              Finance &amp; Insurance
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/marketing-and-advertising-apps">
                              Marketing &amp; Advertising
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="sub_mp">
                        <Link href="/our-work-process">
                          Our Process
                        </Link>
                        <ul>
                          <li>
                            <Link href="/case-study">Case Study</Link>
                          </li>
                          <li>
                            <Link href="/our-work-process">Development Methodology</Link>
                          </li>
                          <li>
                            <Link href="/resources/project-communication">
                              Project Communication Strategy
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="four columns_sitemap">
                <ul className="sites_maps">
                  <li>
                    <Link href="/softwares">Softwares</Link>
                    <ul>
                      <li>
                        <Link href="/crowdfunding-script">
                          Crowd Funding PHP Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/doctor-appointment-scheduling-software">
                        Online Doctor Appointment Scheduling Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/hrms-software">
                        Human Resource Management Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/salon-booking-software">
                        Salon Booking Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/job-portal-script">
                          Job Portal PHP Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/food-ordering-script">
                          Food Ordering &amp; Delivery Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/classified-ads-script">
                          Classified Ads Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/online-exam-software-solution">
                          Online Exam Test
                        </Link>
                      </li>
                      <li>
                        <Link href="/taxi-booking-script">
                          Taxi Booking PHP Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq-script">FAQ Script</Link>
                      </li>
                      <li>
                        <Link href="/equipment-rental-software">
                          Equipment Rental Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/rental-property-management-software">
                          Property Rental Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/groupon-clone">
                          Groupon Clone Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/freelancer-clone">
                          Freelancer Clone
                        </Link>
                      </li>
                      <li>
                        <Link href="/fiverr-clone">Fiverr Clone</Link>
                      </li>
                      <li>
                        <Link href="/appointment-scheduling-software">
                          Appointment Scheduling Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/cakephp-facebook-login-plugin-script">
                          Cake PHP Facebook Login Plugin Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/angularjs-blog-script">
                          Angular Js Blog Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/wordpress-twitter-login-plugin">
                          Wordpress Twitter Login Plugin
                        </Link>
                      </li>
                      <li>
                        <Link href="/cakephp-cms-script">
                          CakePHP CMS Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/lead-generation-contact-form-php-script">
                          Contact Form PHP Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/service-marketplace-script">
                          Service Marketplace Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/booking-software-solutions">
                          Online Booking Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/business-directory-system">
                          PHP Business Directory Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/food-ordering-script">
                          Restaurant Food Delivery Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/online-course-management-script">
                          Online Course Management Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/chat-room-script">
                          Chat Room Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/grocery-app-development">
                          Grocery Store Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/online-food-ordering-system">
                          Food Ordering Hosted Solution
                        </Link>
                      </li>
                      <li>
                        <Link href="/logistic-marketplace-software">
                          Logistic Marketplace Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/linkedin-clone">
                          LinkedIn Clone
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-script">Blog Script</Link>
                      </li>
                      <li>
                        <Link href="/ebay-clone">
                          eBay Clone Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/recruitment-management-software">
                          Recruitment Management Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/job-board-software">
                          Job Board Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/teacher-marketplace">
                          Teacher Marketplace
                        </Link>
                      </li>
                      <li>
                        <Link href="/whatsapp-clone">
                          WhatsApp Clone
                        </Link>
                      </li>
                      <li>
                        <Link href="/real-estate-script">
                          Real Estate Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/forum-script">Forum Script</Link>
                      </li>
                      <li>
                        <Link href="/news-management-system">
                          News Management System
                        </Link>
                      </li>
                      <li>
                        <Link href="/event-booking-software">
                          Event Booking Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/udemy-clone">Udemy Clone</Link>
                      </li>
                      <li>
                        <Link href="/product-review-rating-php-script">
                          Product Review Script
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/custom-solutions">Custom Solutions</Link>
                    <ul>
                      <li>
                        <Link href="/booking-app-development">
                          Online Booking App
                        </Link>
                      </li>
                      <li>
                        <Link href="/restaurant-table-booking-system">
                          Restaurant Table Booking App
                        </Link>
                      </li>
                      <li>
                        <Link href="/seat-booking-system">
                          Seat Booking Application
                        </Link>
                      </li>
                      <li>
                        <Link href="/crm-software-development">
                          CRM Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/ecommerce-development">
                          E-Commerce Portal
                        </Link>
                      </li>
                      <li>
                        <Link href="/crowdfunding-script">
                          Ready-Made Fundraising PHP Scripts
                        </Link>
                      </li>
                      <li>
                        <Link href="/loan-management-software-development">
                          Loan System
                        </Link>
                      </li>
                      <li>
                        <Link href="/marketplace-software-solution">
                          Marketplace Solutions
                        </Link>
                      </li>
                      <li>
                        <Link href="/survey-software-development">
                          Survey App
                        </Link>
                      </li>
                      <li>
                        <Link href="/dating-system-solution">
                          Dating System
                        </Link>
                      </li>
                      <li>
                        <Link href="/jewellery-ecommerce-system-solution">
                          Jewellery E-Commerce System
                        </Link>
                      </li>
                      <li>
                        <Link href="/e-learning-solution">
                          E-Learning System
                        </Link>
                      </li>
                      <li>
                        <Link href="/event-booking-system-development">
                          Event booking System Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/auction-software-solution">
                          Auction System
                        </Link>
                      </li>
                      <li>
                        <Link href="/gps-vehicle-tracking-system">
                          Vehical Tracking System
                        </Link>
                      </li>
                      <li>
                        <Link href="/car-rental-software">Car Rental</Link>
                      </li>
                      <li>
                        <Link href="/delivery-management-software">
                          Delivery Management System
                        </Link>
                      </li>
                      <li>
                        <Link href="/point-of-sale-software">
                          Point Of Sale Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/hotel-booking-software">
                          Hotel Booking Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/user-management-system">
                          User Management System
                        </Link>
                      </li>
                      <li>
                        <Link href="/social-network-integration-in-android-app">
                          Social Network Integration In Android App
                        </Link>
                      </li>
                      <li>
                        <Link href="/erp-system-software-development">
                          ERP System Software Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/ecommerce-website">eCommerce Website</Link>
                      </li>
                      <li>
                        <Link href="/inventory-management-software">
                          Inventory Management System Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/logistics-software-development">
                          Custom Logistics Software Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/order-management-software">
                          Order Management Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/wordpress-ecommerce-website">
                          WordPress Ecommerce Website Development Company -
                          Logicspice
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="four columns_sitemap">
                <ul className="sites_maps">
                  <li>
                    <Link href="/services">Services</Link>
                    <ul>
                      <li>
                        <Link href="/django-development">
                          Django Web Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/contract-hire">Contract Hire</Link>
                      </li>
                      <li>
                        <Link href="/angular-development">
                          Angular Web Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/python-development">
                          Python Development Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/reactjs-development">
                          React JS Web Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/react-native-app-development">
                          React Native App Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/artificial-intelligence">
                          Artificial Intelligence
                        </Link>
                      </li>
                      <li>
                        <Link href="/mobile-app-development">
                          Mobile App Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/ios-app-development">iPhone</Link>
                      </li>
                      <li>
                        <Link href="/android-app-development">Android</Link>
                      </li>
                      <li>
                        <Link href="/web-development">
                          Website Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/psd-to-html">
                          XHTML Conversion
                        </Link>
                      </li>
                      <li>
                        <Link href="/cakephp-development">
                          CakePHP Development Company
                        </Link>
                      </li>
                      <li>
                        <Link href="/codeigniter-development">
                          {" "}
                          Codeigniter Framework
                        </Link>
                      </li>
                      <li>
                        <Link href="/laravel-development">
                          LARAVEL DEVELOPMENT COMPANY
                        </Link>
                      </li>
                      <li>
                        <Link href="/opencart-development">
                          Opencart Development Company
                        </Link>
                      </li>
                      <li>
                        <Link href="/web-development">
                          {" "}
                          Drupal Development Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/magento-development">
                          {" "}
                          Magento Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/php-development">
                          PHP Web Development Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/job-portal-script">
                          Jobsite Script Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/shopify-development">
                          Shopify Framework
                        </Link>
                      </li>
                      <li>
                        <Link href="/salesforce-development-company">
                          Salesforce Development Company
                        </Link>
                      </li>
                      <li>
                        <Link href="/business-support-services">
                          Business Support Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/saas-software-development">
                          SaaS Software Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/social-media-optimization-services">
                          Social Media Optimization Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/nodejs-development">
                          Node.js Development Company
                        </Link>
                      </li>
                      <li>
                        <Link href="/website-cloning-service">
                          Website Cloning Service | Website Clone Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/mobile-app-development">
                          Mobile App Developement
                        </Link>
                      </li>
                      <li>
                        <Link href="/shopify-development">
                          Shopify App Development Company | Shopify Web
                          Development Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/devops-development">
                          DevOps Services | DevOps Consulting Services &amp;
                          Solutions
                        </Link>
                      </li>
                      <li>
                        <Link href="/submit-guest-post">
                          Submit Guest Post for Software, Technology, WordPress
                          Niche
                        </Link>
                      </li>
                      <li>
                        <Link href="/django-development">
                          Django Development Company | Django Development
                          Services - Logicspice
                        </Link>
                      </li>
                      <li>
                        <Link href="/shopify-development-packages">
                          Shopify Development Packages
                        </Link>
                      </li>
                      <li>
                        <Link href="/angular-development">
                          Angular Development Company | Hire Angular Developers
                          | Logicspice
                        </Link>
                      </li>
                      <li>
                        <Link href="/python-development">
                          Python Development Company | Python Development
                          Services | Logicspice
                        </Link>
                      </li>
                      <li>
                        <Link href="/artificial-intelligence">
                          Best Artificial Intelligence Development Company |
                          Logicspice
                        </Link>
                      </li>
                      <li>
                        <Link href="/reactjs-development">
                          Reactjs Development Company | Hire Reactjs Developers
                          -Logicspice
                        </Link>
                      </li>
                      <li>
                        <Link href="/react-native-app-development">
                          React Native App Development Company | Hire React
                          Native Developers
                        </Link>
                      </li>
                      <li>
                        <Link href="/contract-hire">
                          The New IT Recruitment Model | Contract IT Staffing
                          Services - Logicspice
                        </Link>
                      </li>
                      <li>
                        <Link href="/big-data-development">
                          Big Data Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/devops-development">
                          DevOps Development Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/website-design">Web Design</Link>
                      </li>
                      <li>
                        <Link href="/website-redesign">
                          Website Redesign Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/responsive-web-design">
                          Responsive Web Design
                        </Link>
                      </li>
                      <li>
                        <Link href="/landing-page-design">
                          Landing Page Design
                        </Link>
                      </li>
                      <li>
                        <Link href="/website-design">
                          UI UX Design Company
                        </Link>
                      </li>
                      <li>
                        <Link href="/software-development">
                          Software Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/auction-software-solution">
                          Auction Script Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/lead-generation-contact-form-php-script">
                          Forum Script
                        </Link>
                      </li>
                      <li>
                        <Link href="/open-source-cms">
                          Open Source CMS Development
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="/web-development">
                          Enterprises Solution
                        </Link>
                      </li> */}
                      <li>
                        <Link href="/dating-system-solution">
                          Dating Website Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/crm-software-development">
                          CRM Software Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/software-mainenance-support">
                          Live Support Script Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/erp-system-software-development">
                          ERP (OpenBravo)
                        </Link>
                      </li>
                      <li>
                        <Link href="/booking-app-development">
                          Online Booking Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/hotel-booking-software">
                          Hotel Management Software
                        </Link>
                      </li>
                      <li>
                        <Link href="/open-source-customization">
                          Open Source Customization
                        </Link>
                      </li>
                      <li>
                        <Link href="/wordpress-web-development">
                          WordPress Development
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="/oscommerce">
                          Oscommerce
                        </Link>
                      </li> */}
                      <li>
                        <Link href="/digital-marketing">Digital Marketing</Link>
                      </li>
                      {/* <li>
                        <Link href="/brand-development">
                          Brand Development
                        </Link>
                      </li> */}
                      {/* <li>
                        <Link href="/services/digital-marketing/social-media-promotion">
                          Social Media Marketing
                        </Link>
                      </li> */}
                      {/* <li>
                        <Link href="/services/digital-marketing/search-engine-optimization">
                          Search Engine Optimization
                        </Link>
                      </li> */}
                      {/* <li>
                        <Link href="/services/digital-marketing/internet-marketing-solutions">
                          Internet Marketing Solutions
                        </Link>
                      </li> */}
                      <li>
                        <Link href="/advanced-web-programming">
                          Advanced Web Programming
                        </Link>
                      </li>
                      <li>
                        <Link href="/software-maintenance-support">Support &amp; Maintenance</Link>
                      </li>
                      <li>
                        <Link href="/psd-to-shopify">PSD to Shopify</Link>
                      </li>
                      <li>
                        <Link href="/generative-ai-development">Generative AI Development</Link>
                      </li>
                      <li>
                        <Link href="/blockchain-development">Blockchain Development</Link>
                      </li>
                      <li>
                        <Link href="/video-creation">Video Creation</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="four columns_sitemap">
                <ul className="sites_maps">
                  <li>
                    <Link href="/hire-developers">Hire Developers</Link>
                    <ul>
                      {/* <li>
                        <Link href="/hire-drupal-experts">Drupal Experts</Link>
                      </li> */}
                      <li>
                        <Link href="/hire-android-app-developers">
                          Hire Android App Developers Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-ios-app-developers">
                          Hire iPhone App Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-web-developers">
                          Hire Web Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-cakephp-developers">
                          Hire CakePHP Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-wordpress-experts">
                          Hire WordPress Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-magento-experts">
                          Hire Magento Developer Experts
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="/hire-zencart-experts">
                          Zencart Experts
                        </Link>
                      </li> */}
                      <li>
                        <Link href="/hire-shopify-developers">
                          Hire Shopify Developers Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-laravel-developers">
                          Hire Laravel Developers Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-node-js-experts">
                          Hire Node.JS Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-angular-js-experts">
                          Hire AngularJS Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-yii-developers">
                          Hire Yii Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-opencart-developers">
                          Hire Opencart Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-hybrid-mobile-app-developer">
                          Hire Hybrid App Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-codeignitor-developers">
                          Hire CodeIgniter Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-php-developers">
                          Hire PHP Developer Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-quality-analyst">
                          Hire Quality Assurance Tester Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-reactjs-developers">
                          hire-react-developers Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-react-native-developers">
                          hire-react-native-developers Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-python-developers">
                          hire-python-developers Experts
                        </Link>
                      </li>
                      <li>
                        <Link href="/hire-yii-developers">
                          Hire Yii Developers Experts
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
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
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              height={50}
              width={50}
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
