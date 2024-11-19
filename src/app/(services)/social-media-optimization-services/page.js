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
import "../../resposive.css";
const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [saascmsTab, setSaascmsTab] = useState(true);
  const [saascrmTab, setSaascrmTab] = useState(false);
  const [customecommerceTab, setCustomecommerceTab] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const handleSaascmsTab = () => {
    setSaascmsTab(true);
    setSaascrmTab(false);
    setCustomecommerceTab(false);
  };
  const handleSaascrmTab = () => {
    setSaascmsTab(false);
    setSaascrmTab(true);
    setCustomecommerceTab(false);
  };
  const handleCustomecommerceTab = () => {
    setSaascmsTab(false);
    setSaascrmTab(false);
    setCustomecommerceTab(true);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <NavBar />
      <section className="yellow_slider social_media_slider">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="slidere-tittle">
                <h1>Social Media Optimization Services</h1>
                <p>
                  Social media has become an intrinsic part of our daily
                  life&sbquo; as our day to day life is governed by the presence
                  & dominance of social media reason being&sbquo; millions of
                  people are engaging with different social media platforms.
                  So&sbquo; every organization tends to focus on it and try to
                  reach this huge target audience. With the digital era&sbquo;
                  online reputation management is one of the key factors to
                  spread the business globally and without social media&sbquo;
                  it is not possible. Thus&sbquo; in order to take a lucrative
                  approach on it many enterprises are investing heavily on{" "}
                  <strong>social media optimization agency {" "} </strong>to manage
                  their online reputation.{" "}
                </p>
                <p>
                  We at Logicspice&sbquo; being one of the leading players in
                  the social media optimization sector provides comprehensive
                  SMO services to create social media presence that increases
                  the awareness of your overall brand name&sbquo;
                  products&sbquo; services&sbquo; events and more. We are a team
                  of creative social media experts who can organize&sbquo;
                  manage and optimize your social accounts giving due
                  consideration to the perspective & nature of your
                  organisation&sbquo; which ensures you to connect with your
                  targeted audience & potential audience to increase your
                  overall brand value&sbquo; and generate inquiries by sharing
                  the well managed content and eye catching posts over the
                  different popular social platform.
                </p>
                <h3>Want to boost your brand awareness?</h3>
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
                      title="Social Media Optimization Services"
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
            <div className="col-md-5">
              <div className="images-section">
                <Image unoptimized={true}
                
                 width={700}
                 height={500 / (100 / 100)}
                  src="/img/socialmediaoptimizationservices/smo-img.png"
                  alt="Social_Media_Optimization_Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resources-banner our-sass">
        <div className="container">
          <h2>Our SMO Services</h2>
          <div className="resources-bx-top">
            <ul className="resources-tabs">
              <li
                id="tab1_li"
                className={`ddlj ${saascmsTab ? "active" : ""}`}
                onClick={() => handleSaascmsTab()}
                style={{cursor: "pointer"}}
              >
                <a>
                  <i>
                    <Image unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/socialmediaoptimizationservices/project-img.png"
                      alt="logo"
                    />
                  </i>
                  <span>Account / Page Creation</span>
                </a>
              </li>
              <li
                id="tab2_li"
                className={`ddlj ${saascrmTab ? "active" : ""}`}
                onClick={() => handleSaascrmTab()}
                style={{cursor: "pointer"}}
              >
                <a>
                  <i>
                    <Image unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/socialmediaoptimizationservices/client-need-img.png"
                      alt="logo"
                    />
                  </i>
                  <span>Content / Creatives Production</span>
                </a>
              </li>
              <li
                id="tab3_li"
                className={`ddlj ${customecommerceTab ? "active" : ""}`}
                onClick={() => handleCustomecommerceTab()}
                style={{cursor: "pointer"}}
              >
                <a>
                  <i>
                    <Image unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/socialmediaoptimizationservices/client-approval-img.png"
                      alt="logo"
                    />
                  </i>
                  <span>SMO strategy creation & execution</span>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              {saascmsTab && (
                <>
                  <div className="costomer_tab rj" id="tab1">
                    <div className="resources-contan">
                      <p>
                        We can create your business profile on reputed online
                        social & professional networking sites.{" "}
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
                        Our creative writers can create catchy content and
                        talented designers can design engaging creatives (images
                        & infographics) for Facebook&sbquo; Twitter&sbquo;
                        LinkedIn&sbquo; Pinterest&sbquo; Instagram and more.
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
                        Our experts can review your current presence over social
                        media and can plan the SMO strategy according to
                        competitors to give you a competitive edge in your
                        field. Similarly&sbquo; respective account managers can
                        execute the strategy.
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
                  We help our clients to sustain their existing clients & target
                  their prospective customers considering the large number of
                  audience available on social media. We take full
                  responsibility for enhancing communication with your customers
                  so they can get the update of your current offers and updates
                  about your products / services. Our experts can comment&sbquo;
                  tweet or retweet your post for engaging your audiences and
                  collect the perspective of your customers about your products
                  and services&sbquo; which will help you to cater your
                  customers with the best solutions.
                </p>
                <p>
                  We ensure you to develop a unique strategy to promote your
                  business organically over the social media networks. During
                  the optimization process we execute all the efforts on social
                  sharing&sbquo; groups posting&sbquo; campaign
                  monitoring&sbquo; community management and always prefer the
                  latest techniques and tools being used to encash the
                  opportunity. The reason why Logicspice is favorite among the{" "}
                  <i>social media optimization companies</i> is because we at
                  Logicspice are pledged to provide our customers with the best
                  possible services in the industry that not only propels the
                  business of our customers in the right direction but also
                  helps to sustain in this cut throat competition.
                </p>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="img_saaa">
            <Image unoptimized={true}
              width={1075}
              height={500 / (100 / 100)}
              src="/img/socialmediaoptimizationservices/smo-bg.png"
              alt="Social_Media_Optimization_Services"
            />
          </div>
        </div>
      </section>

      <section className="new-why-choose-section sass_title">
        <div className="container">
          <h2>
            Why choose Logicspice <span>for Social Media Optimization?</span>
          </h2>
          <div className="row">
            <div
              className="col-sm-6 col-md-6 aos-init aos-animate"
              data-aos="fade-right"
            >
              <div className="new_libraries">
                <i>
                  <Image unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/socialmediaoptimizationservices/new_development_icon1.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>Best Technology Offering</h3>
                  <p>We offer powerful and latest technologies and tools.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                className="new_libraries aos-init aos-animate"
                data-aos="fade-left"
              >
                <i>
                  <Image unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/socialmediaoptimizationservices/new_development_icon2.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>Quick Support</h3>
                  <p>
                    We provide our customers with full support to their queries
                    and in this regards we are available over call and email to
                    solve their problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                className="new_libraries aos-init aos-animate"
                data-aos="fade-right"
              >
                <i>
                  <Image unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/socialmediaoptimizationservices/new_development_icon4.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>Easy Hiring Process</h3>
                  <p>
                    Just fill the contact form and select the best package as
                    per your requirement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                className="new_libraries aos-init aos-animate"
                data-aos="fade-left"
              >
                <i>
                  <Image unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/socialmediaoptimizationservices/new_development_icon3.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>Secure</h3>
                  <p>
                    We keep your information (Id&sbquo; Password&sbquo; Leads
                    and other) confidential.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                className="new_libraries aos-init aos-animate"
                data-aos="fade-right"
              >
                <i>
                  <Image unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/socialmediaoptimizationservices/new_development_icon6.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>Dedicated team of experts</h3>
                  <p>
                    You can get the personal account manager for your social
                    media accounts that are always there to provide you with the
                    best possible service in the industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                className="new_libraries aos-init aos-animate"
                data-aos="fade-left"
              >
                <i>
                  <Image unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/socialmediaoptimizationservices/new_development_icon5.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>100% Client Satisfaction & Cost-Effective Solution</h3>
                  <p>
                    We at Logicspice are pledged to give our customer first
                    priority for their needs and wants. We ensure to provide our
                    customers with 100% satisfaction for our services and
                    products.
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
              <a
               
                
                className="btn btn-primary sas13"
                onClick={toggleModal}
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image unoptimized={true}
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
    </>
  );
};

export default Page;
