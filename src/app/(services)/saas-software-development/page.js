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
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [saascmsTab, setSaascmsTab] = useState(true);
  const [saascrmTab, setSaascrmTab] = useState(false);
  const [customecommerceTab, setCustomecommerceTab] = useState(false);
  const [missolutionTab, setMissolutionTab] = useState(false);

  const openModal = () => {

    setShowModal(!showModal);
  };

  const handleSaascmsTab = () => {
    setSaascmsTab(true);
    setSaascrmTab(false);
    setCustomecommerceTab(false);
    setMissolutionTab(false);
  };
  const handleSaascrmTab = () => {
    setSaascmsTab(false);
    setSaascrmTab(true);
    setCustomecommerceTab(false);
    setMissolutionTab(false);
  };
  const handleCustomecommerceTab = () => {
    setSaascmsTab(false);
    setSaascrmTab(false);
    setCustomecommerceTab(true);
    setMissolutionTab(false);
  };
  const handleMissolutionTab = () => {
    setSaascmsTab(false);
    setSaascrmTab(false);
    setCustomecommerceTab(false);
    setMissolutionTab(true);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
    <div className="saas_development">
    <NavBar />
      <section className="yellow_slider">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="slidere-tittle">
                <h1 style={{fontWeight : "100"}}>SaaS Software Development</h1>
                <p>
                  Saas (Software as a service) is a way of distribution of web
                  application and easily access as a service over the Internet.
                  It is the best alternative to standard software installation.
                  No need to installing and maintaining complex software and
                  hardware. It is also known as hosted software or on-demand
                  software.The user not paid for whole software, they can use it
                  for a certain period of time and pay only for services that
                  they are utilized.
                </p>
                <p>
                  We at{" "}
                  <strong>
                    {" "}
                    Logicspice, <span>SaaS software development company</span>
                  </strong>{" "}
                  provides the SaaS solutions to small, medium and large
                  enterprises. We have experienced developers who have
                  efficiently developed SaaS application which will help to
                  reduce the overall operational cost. We use advanced
                  technologies and tools to develop robust, scalable and secure
                  product. Our solutions gives maximum control over the software
                  and services.
                </p>
              </div>
              <div
                className="btn_align aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="btn btn-primary" onClick={openModal}>
                  <a>Enquire Now</a>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Saas-Software-Development"
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
            <div className="col-md-6">
              <div className="images-section">
                <Image
                  width={600}
                  height={500 / (100 / 100)}
                  src="/img/saassoftwaredevelopment/mt-1378-home3-header-icon12.png"
                  alt="SaaS_Software_Development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="resources-banner our-sass">
        <div className="container">
          <h2>Our SaaS Development Services </h2>
          <div className="resources-bx-top">
            <ul className="resources-tabs">
              <li
                id="tab1_li"
                className={`ddlj ${saascmsTab ? "active" : ""}`}
                onClick={() => handleSaascmsTab()}
              >
                <a>
                  <i>
                    <Image
                      width={80}
                      height={100}
                      src="/img/saassoftwaredevelopment/project-img.png"
                      alt="logo"
                    />
                  </i>
                  <span>SaaS CMS Development</span>
                </a>
              </li>
              <li
                id="tab2_li"
                className={`ddlj ${saascrmTab ? "active" : ""}`}
                onClick={() => handleSaascrmTab()}
              >
                <a>
                  <i>
                    <Image
                      width={80}
                      height={100}
                      src="/img/saassoftwaredevelopment/client-need-img.png"
                      alt="logo"
                    />
                  </i>
                  <span>SaaS CRM Development</span>
                </a>
              </li>
              <li
                id="tab3_li"
                className={`ddlj ${customecommerceTab ? "active" : ""}`}
                onClick={() => handleCustomecommerceTab()}
              >
                <a>
                  <i>
                    <Image
                      width={80}
                      height={100}
                      src="/img/saassoftwaredevelopment/client-approval-img.png"
                      alt="logo"
                    />
                  </i>
                  <span>Custom Ecommerce Solutions</span>
                </a>
              </li>
              <li
                id="tab4_li"
                className={`ddlj ${missolutionTab ? "active" : ""}`}
                onClick={() => handleMissolutionTab()}
              >
                <a>
                  <i>
                    <Image
                      width={80}
                      height={100}
                      src="/img/saassoftwaredevelopment/quality-img.png"
                      alt="logo"
                    />
                  </i>
                  <span>MIS Solution</span>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              {saascmsTab && (
                <>
                  <div className="costomer_tab rj" id="tab1">
                    <div className="resources-contan">
                      <p>
                        We develop cloud-based headless Content Management
                        System extensible and flexible.{" "}
                      </p>
                    </div>
                  </div>
                </>
              )}
              {saascrmTab && (
                <>
                  <div className="costomer_tab rj " id="tab2">
                    <div className="resources-contan">
                      <p>
                        Our SaaS CRM (Customer Relationship Management ) assured
                        24/7 access, backups and security. Your customers do not
                        require installation or maintenance of these apps, they
                        just have to use the software solution as a service. It
                        will help you to integrate all your business system.{" "}
                      </p>
                    </div>
                  </div>
                </>
              )}
              {customecommerceTab && (
                <>
                  <div className="costomer_tab rj " id="tab3">
                    <div className="resources-contan">
                      <p>
                        We provide Ecommerce SaaS solutions suitable for your
                        online business goals, which will allow you to decide
                        your strategy and convey smooth online shopping
                        experience to your clients.
                      </p>
                    </div>
                  </div>
                </>
              )}
              {missolutionTab && (
                <>
                  <div className="costomer_tab rj " id="tab4">
                    <div className="resources-contan">
                      <p>
                        We build SaaS MIS( Management Information System) which
                        will help to build long term partnership with your
                        clients. Support to quick implementation, existing
                        system enhancement , low cost, less risk, easy to
                        access.{" "}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="sasss-middle-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="sa_t">
                <p>
                  As a <span>saas software development company</span>, we assist
                  our clients to bring their application to SaaS model. We are
                  responsible for managing the access to the application with
                  security, performance and support. That&apos;s why our clients
                  call us the best SaaS based product development company.
                </p>
                <p>
                  Software as services used in many businesses like Content
                  management system (CMS), Customer Relationship Management
                  (CRM), Human resources (HRM), Accounting.{" "}
                </p>
                <p>
                  Don&apos;t worry if you are planning to develop a{" "}
                  <span>custom SaaS solution,</span> our experts will take care
                  of development of an application within a certain time frame
                  with advanced features.{" "}
                </p>
              </div>
            </div>

            <div className="col-md-6"></div>
          </div>
          <div className="img_saaa">
            <Image
              width={700}
              height={500 / (100 / 100)}
              src="/img/saassoftwaredevelopment/saaa_img.png"
              alt="saaa_img"
            />
          </div>
        </div>
      </section>

      <section className="new-why-choose-section sass_title">
        <div className="container">
          <h2>
            Why choose Logicspice <span>for Web Development?</span>
          </h2>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="new_libraries">
                <i>
                  <Image
                    width={50}
                    height={100}
                    src="/img/saassoftwaredevelopment/new_development_icon1.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>Best Technology Offering</h3>
                  <p>
                    We offer powerful and latest technologies to build SaaS
                    based product.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="new_libraries">
                <i>
                  <Image
                    width={50}
                    height={100}
                    src="/img/saassoftwaredevelopment/new_development_icon2.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>Unperturbed Support</h3>
                  <p>
                    We provide you with full customer support. Thanks to our
                    dedicated team of technical support executives.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="new_libraries">
                <i>
                  <Image
                    width={50}
                    height={100}
                    src="/img/saassoftwaredevelopment/new_development_icon3.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>Secure</h3>
                  <p>
                    The SaaS is recognized as an authorized tool. It supports
                    high security features.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="new_libraries">
                <i>
                  <Image
                    width={50}
                    height={100}
                    src="/img/saassoftwaredevelopment/new_development_icon4.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>Dedicated team of experts</h3>
                  <p>
                    Our website development company has dedicated and efficient
                    developers that are always willing to provide you with the
                    best.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="new_libraries">
                <i>
                  <Image
                    width={50}
                    height={100}
                    src="/img/saassoftwaredevelopment/new_development_icon5.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>100% Client Satisfaction</h3>
                  <p>
                    Our first priority is always a client. We believe in
                    satisfying our client 100% with our service and softwares.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="new_libraries">
                <i>
                  <Image
                    width={50}
                    height={100}
                    src="/img/saassoftwaredevelopment/new_development_icon6.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>SEO friendly websites</h3>
                  <p>
                    In today&apos;s era, it has become important for any company
                    to have SEO friendly websites to have an impact on Google
                    searches. Our company provides you with SEO friendly website
                    to help you make a mark.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testing-statred-section resources-statred-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="sas12">Enquiry Now</h2>
              <a id="" className="btn btn-primary sas13" onClick={toggleModal}>
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
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
      </section>

      <Footer />
    </div>
     
    </>
  );
};

export default Page;
