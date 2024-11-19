"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "../../../../public/css/font-awesome.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleActiveItem = (collapseId) => {
    setActiveItem((prevActiveItem) =>
      prevActiveItem === collapseId ? null : collapseId
    );
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const openModal = () => {
    console.log(showModal);

    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className="shopify_packages">
        <NavBar />
        <section className="yellow_slider ShopofDevelopmentBanners ShopifyDevelopmentPackages">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="slidere-tittle">
                  <h1>Shopify Website Development Company</h1>
                  <p>
                    Obtain a quote instantly for your Shopify Website
                    Development. Packages and pricing for a customized Shopify
                    theme design and development.
                  </p>
                  <p>
                    Make your client&apos;s buying experience the best possible
                    with a feature-rich&sbquo; visually appealing consumer and
                    eCommerce store. Startups and businesses can benefit from
                    LogicSpice{" "}
                    <Link href="/shopify-development">
                      Shopify development services
                    </Link>
                    &sbquo; which are modular&sbquo; efficient&sbquo; and
                    secure.
                  </p>
                </div>
                <div
                  className="btn_align aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="btn  btn_same" onClick={toggleModal}>
                    <a>Enquire Now</a>
                    {/* {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Shopify Ecommerce Development Services"
                      />
                    } */}
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
              <div className="col-md-6">
                <div className="images-section">
                  <Image
                    width={650}
                    height={500 / (100 / 100)}
                    src="/img/shopifydevelopmentpackages/ShopifyPackagesBanner.png"
                    alt="SaaS_Software_Development"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="OurShopifyDevelopment">
          <div className="container">
            <h2>Hire Expert Shopify Developers</h2>
            <p>
              When it comes to pre-built themes&sbquo; Shopify tops the list. We
              help you connect with sellers and sell millions of things
              worldwide. With LogicSpice&sbquo; Shopify website development
              becomes easy for enterprises to create online stores. LogicSpice
              gives you design flexibility and many website capabilities&sbquo;
              but at what cost? We design&sbquo; customize and set up a website
              and the cost starts from one time cost of just $595. It has great
              features&sbquo; though. We&apos;ve developed a full analysis of
              each plan&apos;s features to help you choose.
            </p>
            <h3>
              Logicspice offers various Shopify Website Development Packages
            </h3>
            <p>
              LogicSpice&apos;s hard-working development team is committed to
              providing you with a website that takes full advantage of
              Shopify&apos;s cutting-edge features in order to facilitate user
              experience and increase the volume of traffic to your online
              store. Our programmers provide the best Shopify website
              development services since they have extensive expertise in
              creating websites for Shopify in a wide variety of industries.
            </p>
            <h4>
              Shopify.com offers ecommerce website packages packages like:
            </h4>
            <ul>
              <li className="BasicShopifyBg">1. Basic Shopify</li>
              <li className="AdvancedShopifyBg">2. Advanced Shopify</li>
              <li className="BasicShopifyPlusBg">3. Shopify Plus</li>
            </ul>
          </div>
        </section>
        <section className="ExpertiseShopifyDevelopment">
          <div className="container">
            <div className="ExpertiseShopifyeCommerce">
              <h3>Expertise in the development of Shopify eCommerce Website</h3>
              <p>
                LogicSpice offers a wide range of services for building Shopify
                ecommerce websites. Our team is the best in the business&sbquo;
                with over eight years of expertise designing unique&sbquo;
                dynamic&sbquo; and modern Shopify stores. We offer web design
                packages starting from $595 and include the following services.
              </p>
              <div className="ExpertiseShopifyedevelopment">
                <div className="ExpertiseShopifyebx">
                  <strong>
                    Shopify Store <br />
                    Development
                  </strong>
                  <span>
                    All aspects of a Shopify store&sbquo; including theme
                    design&sbquo; product classification&sbquo; payment
                    connection&sbquo; and third-party application setup.
                  </span>
                </div>
                <div className="ExpertiseShopifyebx">
                  <strong>
                    Shopify Theme <br /> Development
                  </strong>
                  <span>
                    Your website can benefit from customizing an existing theme
                    or implementing one of ours to meet your specific needs for
                    Shopify development.
                  </span>
                </div>
                <div className="ExpertiseShopifyebx">
                  <strong>
                    Shopify Mobile <br />
                    Website
                  </strong>
                  <span>
                    Through Shopify mobile website that integrates smoothly with
                    smartphones&sbquo; customers can purchase things from their
                    smartphones and tablet computers.
                  </span>
                </div>
                <div className="ExpertiseShopifyebx">
                  <strong>
                    Shopify Store <br />
                    Migration Services
                  </strong>
                  <span>
                    To develop a unique and personalized Shopify store&sbquo;
                    you can easily migrate your current online store from any
                    other platform.
                  </span>
                </div>
                <div className="ExpertiseShopifyebx">
                  <strong>
                    Shopify Customer <br />
                    Service & Support
                  </strong>
                  <span>
                    Resolving Shopify faults and conducting a comprehensive
                    website assessment are all included in this service package.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ShopifyDevelopment-middle-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="sa_t">
                  <h2>Why Work with our Shopify Development Company?</h2>
                  <p>
                    If you&apos;re looking for a reliable Shopify website
                    development company&sbquo; go no further than us! Over the
                    last decade&sbquo; our Shopify developers have worked with
                    many clients in fields as diverse as automotive and
                    healthcare. Bring our Shopify development company expertise
                    on board for your next project.
                  </p>
                  <ul>
                    <li>
                      Effortless communication and an open development
                      procedure.
                    </li>
                    <li>
                      Experienced Shopify developers with over eight years of
                      expertise.
                    </li>
                    <li>Experience with effective Shopify migration.</li>
                    <li>
                      Workflow management with leading project management
                      technologies.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
            <div className="img_saaa">
              <Image
                width={1075}
                height={500 / (100 / 100)}
                src="/img/shopifydevelopmentpackages/ShopifyBannerImg.png"
                alt="saaa_img"
              />
            </div>
          </div>
        </section>
        <section className="ecommerce_faq_section JobBoardFaqSection">
          <div className="container">
            <div className="row">
              <div className=" row ecommerce__Quick_FAQ">
                {/* <div className="col-md-12 ecommerce__Quick_FAQ">
                <h4 className="title_main">
                  FAQs on Shopify Website Development
                </h4>
                <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="01. Should I hire a developer to create my Shopify website?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      With Shopify&apos;s simple drag-and-drop interface for
                      creating online businesses&sbquo; professional Shopify
                      developers are highly advised for more complex changes.
                      They can easily integrate plugins and recommend the finest
                      design solutions for your e-commerce website. LogicSpice
                      offers packages starting from $595.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="02. What does the Shopify Website cost?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      The complexity of the store determines the amount of
                      Shopify development. However&sbquo; while the Shopify plan
                      starts at $29 per month&sbquo; customizing a business can
                      cost significantly more. Our team provides a suitable
                      estimate for the Shopify store after completing an
                      in-depth analysis of your needs.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="03. Is there any additional cost associated with using Shopify?"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      There aren&apos;t any additional costs associated with
                      using Shopify. With LogicSpice&sbquo; you&apos;ll pay a
                      one-time cost for your chosen plan. Even though you can
                      purchase extra apps and domain names&sbquo; you should not
                      be surprised by anything on your invoice.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="04. Are there any discounts on Shopify's price plans?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      Shopify gives a 10 percent discount for a one-year
                      subscription and 20 percent for a two-year subscription.
                      Both subscriptions must be paid in full upfront.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="05. What are the different Shopify Website Development Packages?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Shopify has three different Shopify Website Development
                      Packages to choose from: Basic Shopify&sbquo;,
                      Shopify&sbquo; Advanced Shopify and Shopify Plus. We offer
                      a Shopify Website Development package starting from $595.
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion>
              </div> */}
                <div className="col-md-12 ecommerce__Quick_FAQ">
                  <Typography variant="h4" className="title_main">
                    FAQs on Shopify Website Development
                  </Typography>

                  <MDBAccordion borderless>
                    {/* Accordion Item 1 */}
                    <MDBAccordionItem
                      collapseId="flush-collapse1"
                      headerTitle={
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            cursor: "pointer",
                          }}
                          onClick={() => toggleActiveItem("flush-collapse1")}
                        >
                          <span>
                            01. Should I hire a developer to create my Shopify
                            website?
                          </span>
                          {activeItem === "flush-collapse1" ? (
                            <KeyboardArrowDownIcon />
                          ) : (
                            <KeyboardArrowRightIcon />
                          )}
                        </div>
                      }
                    >
                      <Typography>
                        With Shopify&apos;s simple drag-and-drop interface for
                        creating online businesses&sbquo; professional Shopify
                        developers are highly advised for more complex changes.
                        They can easily integrate plugins and recommend the
                        finest design solutions for your e-commerce website.
                        LogicSpice offers packages starting from $595.
                      </Typography>
                    </MDBAccordionItem>

                    {/* Accordion Item 2 */}
                    <MDBAccordionItem
                      collapseId="flush-collapse2"
                      headerTitle={
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            cursor: "pointer",
                          }}
                          onClick={() => toggleActiveItem("flush-collapse2")}
                        >
                          <span>02. What does the Shopify Website cost?</span>
                          {activeItem === "flush-collapse2" ? (
                            <KeyboardArrowDownIcon />
                          ) : (
                            <KeyboardArrowRightIcon />
                          )}
                        </div>
                      }
                    >
                      <Typography>
                        The complexity of the store determines the amount of
                        Shopify development. However&sbquo; while the Shopify
                        plan starts at $29 per month&sbquo; customizing a
                        business can cost significantly more. Our team provides
                        a suitable estimate for the Shopify store after
                        completing an in-depth analysis of your needs.
                      </Typography>
                    </MDBAccordionItem>

                    {/* Accordion Item 3 */}
                    <MDBAccordionItem
                      collapseId="flush-collapse3"
                      headerTitle={
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            cursor: "pointer",
                          }}
                          onClick={() => toggleActiveItem("flush-collapse3")}
                        >
                          <span>
                            03. Is there any additional cost associated with
                            using Shopify?
                          </span>
                          {activeItem === "flush-collapse3" ? (
                            <KeyboardArrowDownIcon />
                          ) : (
                            <KeyboardArrowRightIcon />
                          )}
                        </div>
                      }
                    >
                      <Typography>
                        There aren&apos;t any additional costs associated with
                        using Shopify. With LogicSpice&sbquo; you&apos;ll pay a
                        one-time cost for your chosen plan. Even though you can
                        purchase extra apps and domain names&sbquo; you should
                        not be surprised by anything on your invoice.
                      </Typography>
                    </MDBAccordionItem>

                    {/* Accordion Item 4 */}
                    <MDBAccordionItem
                      collapseId="flush-collapse4"
                      headerTitle={
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            cursor: "pointer",
                          }}
                          onClick={() => toggleActiveItem("flush-collapse4")}
                        >
                          <span>
                            04. Are there any discounts on Shopify&apos;s price
                            plans?
                          </span>
                          {activeItem === "flush-collapse4" ? (
                            <KeyboardArrowDownIcon />
                          ) : (
                            <KeyboardArrowRightIcon />
                          )}
                        </div>
                      }
                    >
                      <Typography>
                        Shopify gives a 10 percent discount for a one-year
                        subscription and 20 percent for a two-year subscription.
                        Both subscriptions must be paid in full upfront.
                      </Typography>
                    </MDBAccordionItem>

                    {/* Accordion Item 5 */}
                    <MDBAccordionItem
                      collapseId="flush-collapse5"
                      headerTitle={
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            cursor: "pointer",
                          }}
                          onClick={() => toggleActiveItem("flush-collapse5")}
                        >
                          <span>
                            05. What are the different Shopify Website
                            Development Packages?
                          </span>
                          {activeItem === "flush-collapse5" ? (
                            <KeyboardArrowDownIcon />
                          ) : (
                            <KeyboardArrowRightIcon />
                          )}
                        </div>
                      }
                    >
                      <Typography>
                        Shopify has three different Shopify Website Development
                        Packages to choose from: Basic Shopify&sbquo;,
                        Shopify&sbquo; Advanced Shopify and Shopify Plus. We
                        offer a Shopify Website Development package starting
                        from $595.
                      </Typography>
                    </MDBAccordionItem>
                  </MDBAccordion>
                </div>
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
