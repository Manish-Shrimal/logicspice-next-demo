"use client";
import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import Image from "next/image";
import "../../../../public/css/font-awesome.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import "../resources.css";
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
      <section class="resources-header HowCanBanner" >
        <div class="container">
          <span>How Can We Help</span>
        </div>
      </section>
      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>How Can We Help</h1>
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
                  How Can We Help
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
                    <strong>&quot;</strong>A good plan is like a road map: it
                    shows the final destination and usually the best way to get
                    there.<strong>&quot;</strong>{" "}
                    <strong>H. Stanely Judd</strong>
                  </p>
                  <h2>Project Planning</h2>
                  <p>
                    We understand the high importance of planning any project,
                    before we start.
                    <br />
                    We have an expert team of Business Analyst, which
                    communicate with the customers and clarify the requirement
                    with them, and help them in the documentation of the plan.
                    After the analysis part is done the whole plan is discussed
                    with the development to fine tune the plan and decide about
                    the milestones and work strategy.
                  </p>
                  <h3>Client Need</h3>
                  <p>
                    Our designers also want a design questionnaire be filled up
                    by our customers, so that our team can better understand
                    about the design preferences of the customer.
                  </p>
                  <h3>Client Approval</h3>
                  <p>
                    Once the design is approved, we show progress over the
                    project milestone by milestone on our demo server.
                  </p>
                  <h4>Quality Assurance</h4>
                  <p>
                    Our quality assurance team always check the application,
                    before we send it to the client for a demonstration. We take
                    feedback and make the updates in the applications. Once all
                    the milestones are completed, we are ready to deliver and we
                    also provide post-delivery support for the application.
                    <br />A lot of other small processes are also involved, but
                    the ley part is efficiency of communication.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-4">
              <div class="sidebar_right">
                <div id="targetdiv" class="dmtogglebxnavbx dmClass">
                  <div class="sidebarmenu_w afclr">
                    <ul class="aside_menu">
                      <li class="page_item">
                        <Link href="/resources">Resources</Link>
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
                      <li class="current_page_item">
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
                        <Link href="/resources/free-scripts">Free Scripts</Link>
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
