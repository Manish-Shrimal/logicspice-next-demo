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
      <section class="resources-header QualityAssuranceBanner">
        <div class="container">
          <span>Quality Assurance</span>
        </div>
      </section>
      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Quality Assurance</h1>
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
                  Quality Assurance
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
                  <article class="hentry">
                    <ul class="webvevtwo">
                      <li>
                        Were test cases created, or modified to reflect changed
                        requirements?
                      </li>
                      <li>Was all required testing completed?</li>
                      <li>
                        All the test result and test data included in the
                        released package?
                      </li>
                      <li>Are all exiting criteria completed?</li>
                    </ul>
                    <p>
                      Quality assurance is the process of verifying or
                      determining whether products or services meet or exceed
                      customer expectations. Quality assurance is a
                      process-driven approach with specific steps to help define
                      and attain goals. This process considers design,
                      development, production, and service. Logicspice provides
                      a wide range of services in software testing and quality
                      assurance. Plan is the first and foremost thing to
                      accomplish a task as it should be.
                      <Link href="/" target="_blank">
                        Logicspice
                      </Link>{" "}
                      had and have plan to provide you the best quality.
                    </p>
                    <h2>We follow these steps: -</h2>
                    <ul class="webvevtwo">
                      <li>
                        The first step is to make a decision about intention of
                        the project.
                      </li>
                      <li>
                        The second step is to conclude all the processes
                        compulsory for accomplishing the project productively.
                      </li>
                      <li>
                        The third step involves planning the quality control
                        activities in order to reassure the exceptional quality
                        of the deliverable.
                      </li>
                      <li>
                        The next step is to plan for the resources required in
                        productively implementing the quality assurance.
                      </li>
                    </ul>
                    <p>
                      Logicspice is known for its Quality Assurance on each and
                      every aspects. We maintain the quality in our web and
                      <Link
                        href="/services/mobile-app-development"
                        target="_blank"
                      >
                        mobile development
                      </Link>{" "}
                      to meet or exceed customer expectations.
                    </p>
                  </article>
                  <p></p>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-4">
              <div class="sidebar_right">
                <div id="targetdiv" class="dmtogglebxnavbx dmClass">
                  <div class="sidebarmenu_w afclr">
                    <div class="clr"></div>
                    <ul class="aside_menu">
                      <li class="page_item">
                        <Link href="/resources">Resources</Link>
                      </li>
                      <li class="current_page_item">
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
                        <Link href="/resources/free-scripts">Free Scripts</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
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
