"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "../../../../public/css/font-awesome.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../resposive.css";
const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [saascmsTab, setSaascmsTab] = useState(true);
  const [saascrmTab, setSaascrmTab] = useState(false);
  const [customecommerceTab, setCustomecommerceTab] = useState(false);
  const [missolutionTab, setMissolutionTab] = useState(false);

  const openModal = () => {
    // console.log(showModal);

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
    setCustomecommercerTab(false);
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
      <NavBar />
      <div className="supportMaintainence">
        <section className="country_head">
          <div className="container">
            <h1>Support &amp; Maintenance</h1>
            <p>
              <Link href="/" target="_blank" style={{ color: "#fff" }}>
                Home
              </Link>{" "}
              / Support &amp; Maintenance
            </p>
          </div>
        </section>
        <section className="support-det-ail">
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                <p>
                  For software to be exceptional, it needs to be backed up by
                  reliable software support and maintenance service. Since user
                  preferences keep on varying rapidly, perfect
                  <Link
                    href="/software-development"
                    target="_blank"
                    
                  >
                    {" "}
                    Software Development
                  </Link>{" "}
                  does not exist. However, to ensure that the customer stays
                  satisfied with the reliability and performance of the
                  development, we at Logicspice provide expert software support
                  and maintenance service to our valued clients. Additionally,
                  we make available support and solutions for applications and
                  software developed by third party.
                </p>
                <p>
                  So, if you are looking to cope up with ever evolving market
                  needs to gain better ROI, you can bank upon us. Our approach
                  is simple, we make available at your disposal same level of
                  expertise utilized while developing the software. Equipped
                  with an experienced team of{" "}
                  <Link
                    href="/mobile-app-development"
                    target="_blank"
                    
                  >
                    
                    Mobile App Developers
                  </Link>{" "}
                  and web programmers, we at Logicspice offer comprehensive
                  software support services to meet company requirements. We
                  provide you with long term ceaseless maintenance along with
                  support in real-time to ensure smooth functioning of the
                  software.
                </p>
              </div>
              <div className="col-sm-5 text-right hidden-xs">
                <Image
                  unoptimized={true}
                  width={395}
                  height={500 / (100 / 100)}
                  src="/img/softwaremaintenancesupport/support.png"
                  alt="Support &amp; Maintainence"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="offered-sup">
          <div className="container">
            <h2>A quick glance at services offered by us</h2>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="quick-glan">
                  <p>Customisation of application functionality</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="quick-glan">
                  <p>Bug fixing and effective troubleshooting</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="quick-glan">
                  <p>Making available upgrades and patches deployment</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="quick-glan">
                  <p>Workaround provisioning and security audits</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="quick-glan">
                  <p>Diagnosis and analysis</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="quick-glan">
                  <p>New release updates and hotfixes</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="quick-glan">
                  <p>
                    Carry over the number of hours to next regular tenure of
                    support.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="soft-maintain">
          <div className="">
            <h2>Our Software & Maintenance Services Includes</h2>
            <div className="serv-ices-includes">
              <div className="row m-0">
                <div className="col-md-6 col-sm-12 p-0">
                  <div className="row m-0">
                    <div className="col-md-6 col-sm-4 p-0">
                      <div className="servin-img">
                        <Image
                          unoptimized={true}
                          width={400}
                          height={100}
                          src="/img/softwaremaintenancesupport/cl2.png"
                          alt="Adjustable Maintenance and support"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-8 p-0">
                      <div className="servin-content">
                        <h3>Adjustable Maintenance and support</h3>
                        <Image
                          unoptimized={true}
                          width={400}
                          height={100}
                          src="/img/softwaremaintenancesupport/clArrow.png"
                          alt="clArrow"
                        />
                        <p>
                          Logicspice provides you with support to make required
                          alterations and revisions to your software. The
                          adaptable maintenance and support service includes
                          changing the data format, altering the hardware
                          configuration and integrating the operating system.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12 p-0">
                  <div className="row m-0">
                    <div className="col-md-6 col-sm-4 p-0">
                      <div className="servin-img">
                        <Image
                          unoptimized={true}
                          width={400}
                          height={100}
                          src="/img/softwaremaintenancesupport/cl3.png"
                          alt="Corrective maintenance"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-8 p-0">
                      <div className="servin-content">
                        <h3>Corrective maintenance</h3>
                        <Image
                          unoptimized={true}
                          width={400}
                          height={100}
                          src="/img/softwaremaintenancesupport/clArrow.png"
                          alt="clArrow"
                        />
                        <p>
                          Our duty just does not end with software development,
                          rather it starts from there. Our experts aid you in
                          fixing the errors with the software irrespective of
                          the fact them being logical, coding or design errors.
                          Further, we look into the errors in software algorithm
                          to prevent to prevent arising of bugs in future.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-6 col-sm-12 p-0"
                  style={{ direction: "rtl" }}
                >
                  <div className="row m-0">
                    <div className="col-md-6  col-sm-4 pull-right p-0">
                      <div className="servin-img">
                        <Image
                          unoptimized={true}
                          width={400}
                          height={100}
                          src="/img/softwaremaintenancesupport/cl1.png"
                          alt="Preventive software maintenance service"
                        />
                      </div>
                    </div>
                    <div className="col-md-6  col-sm-8 pull-left p-0">
                      <div className="servin-content">
                        <h3>Preventive software maintenance service</h3>
                        <Image
                          unoptimized={true}
                          width={400}
                          height={100}
                          src="/img/softwaremaintenancesupport/clArrow.png"
                          alt="clArrow"
                        />
                        <p>
                          Any problem relating to the coding of the software
                          that have garnered attention of customers in the past
                          are looked upon seriously and to make sure that such
                          issues never arise in future.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-6 col-sm-12 p-0"
                  style={{ direction: "rtl" }}
                >
                  <div className="row m-0">
                    <div className="col-md-6 col-sm-4 pull-right p-0">
                      <div className="servin-img">
                        <Image
                          unoptimized={true}
                          width={400}
                          height={100}
                          src="/img/softwaremaintenancesupport/cl4.png"
                          alt="Organized maintenance and support"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-8 pull-left p-0">
                      <div className="servin-content">
                        <h3>Organized maintenance and support</h3>
                        <Image
                          unoptimized={true}
                          width={400}
                          height={100}
                          src="/img/softwaremaintenancesupport/clArrow.png"
                          alt="clArrow"
                        />
                        <p>
                          To make sure that the software is in sync with
                          advanced technology and in line with new requirements,
                          we make available proactive maintenance service on
                          regular basis. The team of developers and experts
                          implement new features along with functions to the
                          user interface of the software to enhance user and
                          utility.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="we-pro-as">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <h2>We promise and assure</h2>
                <Image
                  unoptimized={true}
                  width={500}
                  height={100}
                  src="/img/softwaremaintenancesupport/promise.png"
                  alt="We promise and assure"
                />
              </div>
              <div className="col-sm-7">
                <ul className="round-list">
                  <li>
                    <strong>1</strong>{" "}
                    <span>
                      Best quality and reliable software maintenance and support
                    </span>
                  </li>
                  <li>
                    <strong>2</strong>{" "}
                    <span>Resolution of issues in expedited time frame</span>
                  </li>
                  <li>
                    <strong>3</strong>{" "}
                    <span>Quick response to complaints and requests</span>
                  </li>
                  <li>
                    <strong>4</strong>{" "}
                    <span>
                      Software maintenance and support facility based on global
                      quality standards{" "}
                    </span>
                  </li>
                  <li>
                    <strong>5</strong>{" "}
                    <span>
                      Utilising of most effective tools to dispense highest
                      value maintenance and support
                    </span>
                  </li>
                  <li>
                    <strong>6</strong>{" "}
                    <span>
                      Available in working hours to deliver solutions round the
                      clock
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="set-a-part">
          <div className="container">
            <h2>What sets us apart</h2>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="part-set">
                  <i className="fa fa-sitemap"></i>
                  <p>Enhanced stability</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="part-set">
                  <i className="fa fa-rocket"></i>
                  <p>Better Returns on investments</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="part-set">
                  <i className="fa fa-money-bill"></i>
                  <p>Reduction in TCO (Total cost of ownership )</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="part-set">
                  <i className="fa fa-clipboard"></i>
                  <p>
                    Application integration with advanced and newer technologies
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="part-set">
                  <i className="fa fa-bar-chart"></i>
                  <p>Improvement in efficiency and software performance </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="part-set">
                  <i className="fa fa-question-circle"></i>
                  <p>
                    Reliable and best quality support in the form of preventive,
                    adaptive and perfective{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                      title="Support & Maintainence"
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
        </section>
        <section className="quoue_box_full_sec">
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
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Page;
