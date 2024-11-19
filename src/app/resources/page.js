"use client";
import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import Image from "next/image";
import "../../../public/css/font-awesome.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import "./resources.css";
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
      <section class="resources-header ResourcesBanner">
        <div class="container">
          <span>Resources</span>
        </div>
      </section>
      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Resources</h1>
            </div>
            <div class="col-md-6">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li class="breadcrumb-item">
                  <Link href="/resources">Resources</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Resources
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="content_area_resources">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-sm-8">
              <div class="content_left_bar_resources">
                <div class="entry-content-page">
                  <p>
                    If you have got any business idea or any other idea through
                    which you want to help other people and want an online
                    application for that purpose to make your goal achievement
                    smooth and easy process, you should defiinitley plan for web
                    or{" "}
                    <Link
                      href="/mobile-app-development"
                      target="_blank"
                    >
                      mobile application development services
                    </Link>{" "}
                    for this.
                  </p>
                  <p>- Evaluate your idea.</p>
                  <p>- Find the ways to make it success</p>
                  <p>- Research for possible revenue generating avenues.</p>
                  <p>- Chalk out the project plan</p>
                  <p>- Arrange the funding for your idea</p>
                  <p>
                    - Discuss with us about your idea and it&apos;s implementation as
                    web or mobile app.
                  </p>
                  <h3>How it works</h3>
                  <p>
                    LogicSpice is known for the convenience it provides to the
                    clients and if you are searching for a development team that
                    you can choose by your own after testing then LogicSpice is
                    the right place for your requirement. We follow a process
                    that is suitable for our clients and in that process clients
                    can check whatever it is seeking in a development team for
                    its full time or part time development project.
                  </p>
                  <h4>Steps Involved:</h4>
                  <p>
                    Client&apos;s Request: - Our clients can give their development
                    request after inquiring about all the details associated
                    with the project with our management team. After placing
                    your request our team approaches to the client for further
                    discussion on the project about the scope, time, and minute
                    details that has to be considered.
                  </p>
                  <p>
                    Interview: - After placing the request, our management team
                    arrange a set up where client can interview our team members
                    and according to that can choose from the wide pool of
                    professionals.
                  </p>
                  <p>
                    Selection Process: - After the completion of interview and
                    determining the capabilities of the developers our clients
                    can provide us the list of names, which is required for the
                    project. The client can also specify whether the hiring is
                    for full time or part time.
                  </p>
                  <p>
                    Contract &amp; Payment: - To maintain the transparency in
                    our work we frame contract between client and{" "}
                    <Link
                      href="/"
                      target="_blank"
                    >
                      LogicSpice
                    </Link>{" "}
                    in which all the details about the payment, project
                    delivery, allocation of resource and other required
                    information is stated.
                  </p>
                  <p>
                    We ensure to do a great support soon after delivery because
                    customer is new to the application and if there is any
                    problem, we provide support to fix them.
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div class="sidebar_right">
                <div id="targetdiv" class="dmtogglebxnavbx dmClass">
                  <div class="sidebarmenu_w afclr">
                    <ul class="aside_menu">
                      <li class="current_page_item">
                        <Link href="/resources">
                          Resources
                        </Link>
                      </li>
                      <li class="page_item">
                        <Link href="/resources/quality-assurance">
                          Quality Assurance
                        </Link>
                      </li>
                      <li class="page_item">
                        <Link href="/resources/project-communication">
                          Project Communication Strategy
                        </Link>
                      </li>
                      <li class="page_item">
                        <Link href="/resources/how-much-an-app-cost">
                          How Much An App Cost
                        </Link>
                      </li>
                      <li class="page_item">
                        <Link href="/resources/how-to-grow-your-business-idea">
                          How to grow your business idea
                        </Link>
                      </li>
                      <li class="page_item">
                        <Link href="/resources/how-can-we-help">
                          How Can We Help
                        </Link>
                      </li>
                      <li class="page_item">
                        <Link href="/resources/our-work-process">
                          Our Work Process
                        </Link>
                      </li>
                      <li class="page_item">
                        <Link href="/resources/free-scripts">
                          Free Scripts
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
