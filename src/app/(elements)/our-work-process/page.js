"use client";
import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import Image from "next/image";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import "@/app/resources/resources.css";
import Contactusmodel from "@/app/Components/Contactusmodel";


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
      <section class="wop-header">
        <div class="container-fluid">
          <h1>Our Work Process</h1>
        </div>
      </section>
      <section class="wop-middle">
        <div class="container">
          <p>
            We follow a multidisciplinary approach for developing
            customer-centric applications for Web and Mobile with the highest
            reliability and quality. Great things are not achieved in a hurry
            but with series of processes brought together through sheer hard
            work and dedication. Our team consists of
            <Link
              href="https://www.logicspice.com/mobile-app-development"
              target="_blank"
            >
              {" "}
              mobile app developers
            </Link>
            ,
            <Link
              href="https://www.logicspice.com/hire-web-developers"
              target="_blank"
            >
              website developers
            </Link>
            , web and graphic designers, test engineers, user documentation
            writer, project managers and maintenance engineers that will work to
            ensure the creation of a stunning and professional project.
          </p>
        </div>
      </section>
      <section class="wop-list wop-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="wl-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/resources/wp-icon1.png"
                  alt="Requirement Gathering"
                />
              </div>
              <div class="wl-cont">
                <h2>Requirement Gathering</h2>
                <p>
                  Our development process begins with having an interaction with
                  the client to clearly understand the requirements. We give
                  utmost importance to documentation of precise requirements of
                  the client.{" "}
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <ul>
                <li>Interact with client</li>
                <li>Understand project goals</li>
                <li>Conceptualizing the Idea</li>
                <li>Set benchmark</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="wop-list wop-inverse">
        <div class="container">
          <div class="row">
            <div class="col-md-9 pull-right">
              <div class="wl-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/resources/wp-icon2.png"
                  alt="Analysis and Prototyping"
                />
              </div>
              <div class="wl-cont">
                <h2>Analysis and Prototyping</h2>
                <p>
                  Our analyst analyses the gathered requirements to clearly
                  understand the exact customer requirements and to weed out any
                  ambiguities, incompleteness and inconsistencies from the
                  initial customer perception of the problem.{" "}
                </p>
              </div>
            </div>
            <div class="col-md-3 pull-left">
              <ul>
                <li>Determine the feasibility</li>
                <li>Prepare a prototype model</li>
                <li>Submit a detailed Proposal</li>
                <li>Estimate of time, cost &amp; duration</li>
                <li>Deadlines of various</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="wop-list wop-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="wl-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/resources/wp-icon3.png"
                  alt="Design | User Interface (UI) &amp; User Experience (UX)"
                />
              </div>
              <div class="wl-cont">
                <h2>Design | User Interface (UI) &amp; User Experience (UX)</h2>
                <p>
                  In this phase, we transform the website requirement
                  specification document into the design document. We would
                  design different modules in the solution in the form of
                  functions and data, define control relationship and interfaces
                  among modules and data structures of the individual module.{" "}
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <ul>
                <li>Use of latest &amp; relevant UI design</li>
                <li>Emotional design &amp; colors</li>
                <li>UX personalization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="wop-list wop-inverse">
        <div class="container">
          <div class="row">
            <div class="col-md-9 pull-right">
              <div class="wl-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/resources/wp-icon4.png"
                  alt="Development and Implementation"
                />
              </div>
              <div class="wl-cont">
                <h2>Development and Implementation</h2>
                <p>
                  In this phase, the actual coding of the design document is
                  performed. Front end and back end coding is done, database is
                  connected and the various algorithms are implemented with
                  least time and space complexities.{" "}
                </p>
              </div>
            </div>
            <div class="col-md-3 pull-left">
              <ul>
                <li>Speed Analysis</li>
                <li>Error Prevention</li>
                <li>Aesthetic and attractiveness</li>
                <li>Full stack backend development</li>
                <li>Consistency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="wop-list wop-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="wl-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/resources/wp-icon5.png"
                  alt="Testing &amp; Quality Assurance"
                />
              </div>
              <div class="wl-cont">
                <h2>Testing &amp; Quality Assurance</h2>
                <p>
                  Testing is done to validate a fully developed system to assure
                  that it meets its requirements. The test cases are solely
                  designed based on the SRS document.
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <ul>
                <li>Bug Elimination</li>
                <li>Static &amp; Automated tests</li>
                <li>Gather feedback</li>
                <li>Make final adjustments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="wop-list wop-inverse">
        <div class="container">
          <div class="row">
            <div class="col-md-9 pull-right">
              <div class="wl-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/resources/wp-icon6.png"
                  alt="Deployment and Launch"
                />
              </div>
              <div class="wl-cont">
                <h2>Deployment and Launch</h2>
                <p>
                  Now starts the real thing, you get the opportunity to see your
                  website being brought to life at your location.{" "}
                </p>
              </div>
            </div>
            <div class="col-md-3 pull-left">
              <ul>
                <li>Introduce the features</li>
                <li>Explain working process</li>
                <li>Install database on your system</li>
                <li>Get approval</li>
                <li>Upload to client web server</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="wop-list wop-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="wl-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/resources/wp-icon7.png"
                  alt="Support"
                />
              </div>
              <div class="wl-cont">
                <h2>Support</h2>
                <p>
                  After the completion of the project, you can enjoy one month
                  free support to resolve any queries, bugs or issues that the
                  website might have.
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <ul>
                <li>One month free technical support</li>
                <li>Post deployment maintenance</li>
                <li>Remove bugs if occur</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="wop-talk">
        <div class="container">
          <h3>
            So, tell us a little about your project and we will transform it
            into reality at the earliest.
          </h3>
          <Link
            href="/contact-us/"
            class="btn btn-default"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <Link
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              width={50}
              height={50}
            />
          </Link>
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
