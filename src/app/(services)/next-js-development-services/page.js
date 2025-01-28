// import React from 'react'

// const Page = () => {
//   return (
//     <div>
//       Hi
//     </div>
//   )
// }

// export default Page

"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css";
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
      <div className="nextjs_developement">
        <section className="ReactNavtiveAppBanner ReactJsWebBanner">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="laravel-banner-txt">
                  <h1>Next.js Development Services</h1>
                  <h6>
                    Smart, scalable, and high-performance Next.js solutions for
                    modern businesses.
                  </h6>
                  <div className="LaravelText">
                    {/* <strong>Revolutionize Your Digital Presence:</strong>{" "}
                    Harness the Power of React JS{" "}
                    <Link href="/web-development" target="_blank">
                      Web Development
                    </Link>{" "}
                    with Logicspice. We offer reliable React JS web application
                    development services worldwide, delivering high-performance
                    functionality and feature-rich solutions. */}
                    At Logicspice, our skilled Next JS developers create smooth,
                    responsive, and high-performing web applications that
                    perfectly align with your business needs. Whether you are
                    starting from scratch or upgrading an existing platform, our
                    Next.js development services are designed to keep you ahead
                    with modern, scalable solutions.
                  </div>

                  <div className="laravel-anquire">
                    <div className="btn btn-primary" onClick={openModal}>
                      <a>Hire Now</a>
                      {
                        <Enquirymodal
                          modalStatus={showModal}
                          toggle={openModal}
                          title="Request To Hire Next JS Web Developers"
                        />
                      }
                    </div>
                    <div className="btn btn-primary" onClick={openModal}>
                      <a>Quick Enquiry</a>
                      {
                        <Enquirymodal
                          modalStatus={showModal}
                          toggle={openModal}
                          title="Request To Hire Next JS Web Developers"
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
                    width={300}
                    height={500 / (100 / 100)}
                    src="/img/nextjsdevelopment/next-banner-img.png"
                    alt="Nextjs Web Development Services"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="laravel-descriptions ReactNavtive-descriptions">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 pull-right">
                <div className="laravel_img">
                  <Image
                    unoptimized={true}
                    width={330}
                    height={500 / (100 / 100)}
                    src="/img/nextjsdevelopment/next-js-icon.png"
                    alt="Next Js Web Development Services"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-6 pull-left">
                <div className="laravel-descriptions-bx" dir="ltr">
                  {/* <h2>
                    React JS Web Application
                    <br /> Development
                  </h2> */}
                  <h2>Find Your Perfect Next.js Developer</h2>
                  <p>
                    Next.js is a React-based framework renowned for its ability
                    to build fast, scalable, and SEO-friendly web applications.
                    As a trusted Next.js development company, we create web
                    solutions that meet your business needs with flexibility and
                    efficiency. With features like server-side rendering (SSR)
                    and static site generation (SSG), Next.js offers
                    unparalleled performance and user experience.
                  </p>
                  <p>
                    With years of experience and a deep understanding of the
                    Next.js framework, our expert Next.js developers work
                    closely with clients to build{" "}
                    <Link href="/custom-solutions">
                      {" "}
                      custom web applications{" "}
                    </Link>{" "}
                    that are secure, responsive, and scalable. We utilize modern
                    tools and technologies to deliver solutions that align
                    perfectly with your goals. Using the latest tools and
                    technologies, we ensure our solutions are perfectly aligned
                    with your goals. Whether you need a high-performing website
                    or a complex web application, Logicspice is your trusted
                    Next.js development agency.
                  </p>
                  <p>
                    Hire Next js developers today and take your web presence to
                    the next level.
                  </p>
                  <p></p>
                  <h3>Using Next.js for Big Projects</h3>
                  <p>
                    Next.js is an excellent choice for large-scale projects,
                    offering an ideal combination of performance, scalability,
                    and flexibility. Its ability to support both static site
                    generation (SSG) and server-side rendering (SSR) allows
                    developers to optimize web applications for speed,
                    responsiveness, and a seamless user experience. This makes
                    Next.js a perfect fit for businesses that require fast load
                    times and efficient resource utilization.
                  </p>
                  <p>
                    Furthermore, Next.js is built with SEO in mind, featuring
                    tools like automatic static optimization and SSR to improve
                    search engine rankings. Whether you’re developing an
                    enterprise-level application or a content-heavy platform,
                    Next.js guarantees a high-performing, scalable, and
                    adaptable solution as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="laravel-devlopments-services ReactNativeServices">
          <div className="container">
            {/* <h2>React JS Web Application Development Services</h2> */}
            <h2>Our Next.js development services</h2>
            <div className="laravel-services-bx-top">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="laravel_service_box ">
                    <div className="laravel-services-icon laravel_service_box1">
                      <i>
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="widout-hover"
                          src="/img/reactjsdevelopment/reactjs-new-icon1.png"
                          alt="React JS Web Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/reactjsdevelopment/reactjs-white-icon1.png"
                          alt="React JS Web Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Next.js Web Development</h3>
                    <p>
                      We bring your vision to life by building highly
                      responsive, scalable, and user-friendly web applications
                      equipped with robust features to fuel your business
                      growth.
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
                          src="/img/nextjsdevelopment/development services/pwa-development-icon.png"
                          alt="React JS Web Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/nextjsdevelopment/development services/pwa-development-white-icon.png"
                          alt="React JS Web Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Next.js PWA Development</h3>
                    <p>
                      Deliver fast, reliable, and engaging{" "}
                      <b>Progressive Web Apps</b> with Next.js. Combining React,
                      SSR, and serverless functions, we ensure exceptional
                      performance, offline support, and push notification
                      capabilities.
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
                          src="/img/nextjsdevelopment/development services/custom-development-icon.png"
                          alt="React JS Web Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/nextjsdevelopment/development services/custom-development-white-icon.png"
                          alt="React JS Web Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Next.js Custom Development</h3>
                    <p>
                      As a leading Next.js development company, we provide
                      tailored solutions that align perfectly with your unique
                      goals, helping your business stand out in the digital
                      space.
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
                          src="/img/nextjsdevelopment/development services/planning-strategy-icon.png"
                          alt="React JS Web Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/nextjsdevelopment/development services/planning-strategy-white-icon.png"
                          alt="React JS Web Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Next.js Planning and Strategy</h3>
                    <p>
                      A well-planned approach is key to a successful project.
                      Our experienced team develops strategies to make your
                      Next.js application future-ready, efficient, and aligned
                      with your objectives.
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
                          src="/img/nextjsdevelopment/development services/e-commerce-solutions-icon.png"
                          alt="React JS Web Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/nextjsdevelopment/development services/e-commerce-solutions-white-icon.png"
                          alt="React JS Web Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Next.js E-commerce Solutions</h3>
                    <p>
                      We build fast, secure, and scalable Next.js e-commerce
                      platforms to deliver a seamless shopping experience. From
                      payment gateway integration to inventory management, we
                      ensure your website is optimized for performance and
                      conversions.
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
                          src="/img/nextjsdevelopment/development services/plugin-development-icon.png"
                          alt="React JS Web Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/nextjsdevelopment/development services/plugin-development-white-icon.png"
                          alt="React JS Web Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Next.js Plugin Development</h3>
                    <p>
                      Need additional functionality for your Next.js
                      application? Our team specializes in creating custom
                      plugins that enhance your app’s features and elevate the
                      user experience.
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
                          src="/img/nextjsdevelopment/development services/upgrade-services-icon.png"
                          alt="React JS Web Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/nextjsdevelopment/development services/upgrade-services-white-icon.png"
                          alt="React JS Web Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Next.js Upgrade Services</h3>
                    <p>
                      Stay up-to-date with the latest technologies with our
                      seamless Next.js upgrade services. Whether you’re
                      migrating an application or enhancing its features, we
                      ensure a smooth transition with minimal downtime.
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
                          src="/img/nextjsdevelopment/development services/maintenance-support-icon.png"
                          alt="React JS Web Development Services"
                        />
                        <Image
                          unoptimized={true}
                          width={80}
                          height={100}
                          className="on-hover"
                          src="/img/nextjsdevelopment/development services/maintenance-support-white-icon.png"
                          alt="React JS Web Development Services"
                        />
                        <div className="mask"></div>
                      </i>
                    </div>
                    <h3>Next.js Maintenance & Support</h3>
                    <p>
                      Our job doesn’t end with development, We offer ongoing
                      support and maintenance to keep your Next.js application
                      running smoothly. From performance optimization to bug
                      fixes, we have got you covered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="laravel_core_features_section">
          <div className="container">
            <h2>Why Choose Next.js for Modern Web Applications?</h2>
            <div className="laravel_core_features_bx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="laravel_core_featureBox">
                    <div className="laravel_core_features_img">
                      <Image
                        unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/nextjsdevelopment/Why Choose/powerful-framework-icon.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Powerful Framework</h3>
                      <p>
                        Next.js is a versatile, feature-packed framework that’s
                        perfect for creating high-performance web apps.
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
                        src="/img/nextjsdevelopment/Why Choose/server-side-rendering-icon.png"
                        alt="img4"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Server-side Rendering (SSR)</h3>
                      <p>
                        Integrated SSR ensures faster page load times,{" "}
                        <b>enhanced SEO</b>, and better search engine
                        visibility, making it ideal for content-heavy websites.
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
                        src="/img/nextjsdevelopment/Why Choose/static-site-generation-icon.png"
                        alt="img2"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Static Site Generation (SSG)</h3>
                      <p>
                        SSG pre-generates pages for faster loading and better
                        security, even during high traffic, serving content
                        directly from a CDN.
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
                        src="/img/nextjsdevelopment/Why Choose/api-routes-icon.png"
                        alt="img5"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>API Routes</h3>
                      <p>
                        Create custom API routes within your app, eliminating
                        the need for traditional servers and streamlining
                        backend connectivity.
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
                        src="/img/nextjsdevelopment/Why Choose/developer-friendly-icon.png"
                        alt="img3"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Developer-Friendly</h3>
                      <p>
                        Next.js features like hot module reloading and fast
                        refresh make development quicker and easier, enhancing
                        productivity.
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
                        src="/img/nextjsdevelopment/Why Choose/strong-community-support-icon.png"
                        alt="img6"
                      />
                    </div>
                    <div className="laravel_core_features_detail">
                      <h3>Strong Community Support</h3>
                      <p>
                        The Next.js community offers a wealth of plugins,
                        libraries, and resources, keeping your app updated and
                        cutting-edge.
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
            <h2>Key Benefits of Next.js Development</h2>
            <div className="laravel_choose_features_bx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_features_img laravel_choose_features_img1">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/reactjsdevelopment/reactjs-why-icon1.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Better SEO</h3>
                      <p>
                        Next.js enhances website SEO with server-side rendering
                        (SSR) and static site generation (SSG), ensuring content
                        is search-engine-friendly.
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
                        src="/img/reactjsdevelopment/reactjs-why-icon2.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Optimized Performance</h3>
                      <p>
                        Features like automatic code splitting and efficient
                        image handling enable faster page loads, improving user
                        experience and SEO.
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
                        src="/img/reactjsdevelopment/reactjs-why-icon3.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Flexible and Scalable</h3>
                      <p>
                        Next.js is built to grow with your business. Whether you
                        need to add new features or scale for increased traffic,
                        its flexible structure makes it ideal for projects of
                        any size and complexity.
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
                        src="/img/reactjsdevelopment/reactjs-why-icon4.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Easy Developer Experience</h3>
                      <p>
                        With built-in tools like hot module replacement (HMR)
                        and simple file-based routing, Next.js simplifies the
                        development process and improves efficiency.
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
                        src="/img/reactjsdevelopment/reactjs-why-icon5.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>CSS and Sass Support</h3>
                      <p>
                        Effortlessly integrate styles without complex
                        configurations, ensuring a clean and consistent design.
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
                        src="/img/nextjsdevelopment/Key Benefits/seamless-react-integration-icon.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Seamless React Integration</h3>
                      <p>
                        As a React-based framework, Next.js makes it easy for{" "}
                        <Link href="/reactjs-development">
                          {" "}
                          React developers{" "}
                        </Link>{" "}
                        to leverage existing skills and projects while
                        benefiting from advanced features.
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
                        src="/img/nextjsdevelopment/Key Benefits/thriving-ecosystem-icon.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Thriving Ecosystem</h3>
                      <p>
                        Next.js has a large, supportive community, offering
                        frequent updates, detailed documentation, and
                        third-party libraries. This ensures you have access to
                        all the tools needed to build and scale your projects.
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
                        src="/img/nextjsdevelopment/Key Benefits/enhanced-security-icon.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Enhanced Security</h3>
                      <p>
                        Next.js prioritizes security. Static sites are less
                        vulnerable to attacks, and SSR reduces client-side
                        risks. You can also easily implement secure headers and
                        content security policies to protect your app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="laravel_choose_features_section LaravelChooseFeaturesSection">
          <div className="container">
            <h2>Why Choose Logicspice for Hiring Next.js Developers?</h2>
            <div className="laravel_choose_features_bx ReactJsChooseFeaturesBx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_details">
                      <p>
                        We have worked in this industry for 18+ years with 1900+
                        clients across 15 countries. React JS developers on our
                        team provide top-notch solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_details">
                      <p>
                        We provide React JS consultancy, project planning,
                        development, testing, and support. We handle all your
                        React JS development needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose ">
                    <div className="laravel_choose_details">
                      <p>
                        Logicspice values customer satisfaction. We learn about
                        your business and create custom solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6 " data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_details">
                      <p>
                        Our service is not only the best in terms of quality but
                        also cost-effective.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_details">
                      <p>
                        Our competitive pricing offers exceptional value. We
                        offer affordable solutions without sacrificing quality
                        or usefulness.
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
                      title="Request To Hire React JS Web Developers"
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="laravel_choose_features_section">
          <div className="container">
            <h2>Why Choose Logicspice for Hiring Next.js Developers?</h2>
            {/* <p className="laravel_core_sub2">
              PHP is highly appreciated and widely used web programming and
              scripting <br />
              language that helps empower your websites.
            </p> */}
            <div className="laravel_choose_features_bx">
              <div className="row">
                <div className="col-sm-6 col-md-6" data-aos="fade-right">
                  <div className="libraries_laravel_choose">
                    <div className="laravel_choose_features_img laravel_choose_features_img1">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/nextjsdevelopment/Why Choose Logicspice/proven-expertise-icon.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Proven Expertise</h3>
                      <p>
                      We have worked in this industry for 18+ years with 1900+ clients across 15 countries. Next JS developers on our team provide top-notch solutions.
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
                        src="/img/nextjsdevelopment/Why Choose Logicspice/custom-solutions-icon.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Custom Solutions</h3>
                      <p>
                        We tailor every solution to meet your unique business
                        requirements, whether it’s a custom web app or a
                        scalable e-commerce platform.
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
                        src="/img/nextjsdevelopment/Why Choose Logicspice/agile-development-icon.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Agile Development</h3>
                      <p>
                        We follow an agile approach to ensure flexibility, quick
                        adaptation, and timely delivery.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6" data-aos="fade-left">
                  <div className="libraries_laravel_choose libraries_laravel_choose-right">
                    <div className="laravel_choose_features_img laravel_choose_features_img4">
                      <Image
                        unoptimized={true}
                        width={40}
                        height={100}
                        src="/img/nextjsdevelopment/Why Choose Logicspice/comprehensive-skill-icon.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Comprehensive Skill Set</h3>
                      <p>
                        We combine expertise in Next.js, React, JavaScript,
                        HTML, and CSS to create scalable, visually stunning
                        solutions.
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
                        src="/img/nextjsdevelopment/Why Choose Logicspice/focus-quality-icon.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Focus on Quality</h3>
                      <p>
                        Strict coding standards and robust security practices
                        ensure reliable, high-performing applications.
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
                        src="/img/nextjsdevelopment/Why Choose Logicspice/client-satisfaction-icon.png"
                        alt="img1"
                      />
                    </div>
                    <div className="laravel_choose_details">
                      <h3>Client Satisfaction</h3>
                      <p>
                        We prioritize your satisfaction by meeting deadlines,
                        adhering to budgets, and exceeding expectations.
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
                      title="Next.js Development Services"
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
                      headerTitle="What makes Next.js a good choice for web development?"
                      collapseId="flush-collapse1"
                    >
                      <p>
                        Next.js is ideal for building fast, scalable, and
                        SEO-friendly web applications thanks to features like
                        server-side rendering (SSR) and static site generation
                        (SSG).
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle=" Why should I hire a Next.js development company?"
                      collapseId="flush-collapse2"
                    >
                      <p>
                        Hiring a Nextjs development company ensures that you get
                        expert developers who specialize in building
                        high-performing, scalable web applications. They will
                        provide the right solutions, whether you need custom web
                        apps, e-commerce platforms, or progressive web apps
                        (PWA).
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What are the key benefits of using Next.js for my project?"
                      collapseId="flush-collapse3"
                    >
                      <p>
                        Next.js offers many advantages such as improved SEO,
                        faster page load times, and better scalability. It also
                        supports static site generation and server-side
                        rendering, making it ideal for creating fast and
                        optimized websites.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How do I hire the best Next.js developer?"
                      collapseId="flush-collapse4"
                    >
                      <p>
                        To hire the best Next.js developer, look for someone
                        with experience in Next.js and related technologies like
                        React, JavaScript, and CSS. A skilled developer will
                        ensure your project is completed on time, within budget,
                        and according to your specific needs.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle=" Can Next.js handle large-scale projects?"
                      collapseId="flush-collapse5"
                    >
                      <p>
                        Yes, Next.js is built for scalability and can handle
                        complex, high-traffic applications with ease.
                      </p>
                    </MDBAccordionItem>
                    <MDBAccordionItem
                      headerTitle=" What type of projects can a Next.js developer work on?"
                      collapseId="flush-collapse6"
                    >
                      <p>
                        A Next.js developer can work on various projects,
                        including custom web applications, e-commerce sites,
                        blogs, corporate websites, and progressive web apps
                        (PWAs). They can help bring your business idea to life
                        with robust and scalable web solutions.
                      </p>
                    </MDBAccordionItem>
                    <MDBAccordionItem
                      headerTitle=" What is the difference between Next.js and other frameworks?"
                      collapseId="flush-collapse7"
                    >
                      <p>
                        Next.js stands out for its SSR and SSG capabilities,
                        offering unmatched performance and SEO benefits compared
                        to other frameworks.
                      </p>
                    </MDBAccordionItem>
                    <MDBAccordionItem
                      headerTitle=" What kind of support can I expect after my Next.js project is complete?
"
                      collapseId="flush-collapse8"
                    >
                      <p>
                        We offer ongoing maintenance and support, including bug
                        fixes, performance optimization, and updates to keep
                        your application running smoothly.
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
