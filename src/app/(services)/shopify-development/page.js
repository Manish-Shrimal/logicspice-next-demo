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
    console.log(showModal);

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
      <section className="yellow_slider pwa_developent_slider ShopofDevelopmentBanners">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="slidere-tittle">
                <h1>Shopify Web Design & App Development Company</h1>
                <p>
                  In this competitive environment there are several developing
                  applications that are used to build some e-commerce
                  stores&sbquo; and Shopify is one of them. More than 1 million
                  businesses are using Shopify e-services. There are enormous
                  opportunities it offers&sbquo; so today it is considered as
                  Shopify means investing in growth.
                </p>
                <p>
                  Logicspice offers you the best e-commerce stores designed to
                  understand and meet the expectations of your customers. We
                  open up opportunities for businesses to increase and maintain
                  their brand value. Join your hands with us and take your
                  business to the next level.
                </p>
              </div>
              <div className="btn_align">
                <div className="btn btn-primary" onClick={openModal}>
                  <a>Enquire Now</a>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Shopify Ecommerce Development Services"
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
            <div className="col-md-6">
              <div className="images-section">
                <Image
                   width={650}
                   height={500 / (100 / 100)}
                  src="/img/shopifydevelopment/shopify-img2.png"
                  alt="Shopify_Development_Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="d-services d-services1 PrgressiveDeveFeatures"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div className="container">
          <h2>Features Of Shopify Ecommerce Web Development </h2>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="features_box">
                <h3>Easy To Setup And Use</h3>
                <p>
                  Shopify is a hassle free platform&sbquo; which is easy to set
                  up and use. It is the best alternative for those who want a
                  complete solution&sbquo; with no technicalities related to
                  development and hosting of the online store.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="features_box">
                <h3>App Integrations</h3>
                <p>
                  The platform boasts of amazing customization abilities as it
                  can be easily integrated with apps. This means that the seller
                  can easily add some extra features and functionalities to his
                  store and enhance its value manifold.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="features_box">
                <h3>Security and Reliability</h3>
                <p>
                  Another benefit of Shopify is the security and reliability it
                  offers. Security is essential for an online business because
                  it deals with confidential personal and financial information
                  of the customers.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="features_box">
                <h3>Speed Optimization</h3>
                <p>
                  Shopify has a reliable infrastructure along with optimized
                  hardware and software. This gives the platform a super-fast
                  loading speed and the e-commerce made on it loads in a matter
                  of seconds.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="features_box">
                <h3>Mobile Responsiveness</h3>
                <p>
                  Mobile responsiveness is the key to success of an e-commerce
                  store because the number of mobile shoppers is increasing by
                  the day. The Shopify themes are mobile responsive&sbquo; which
                  means that it can be used to avail mobile-optimized stores.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="features_box">
                <h3>Shopify Speed Customization</h3>
                <p>
                  Website performance represents all the technical and marketing
                  efforts used to acquire traffic&sbquo; engage consumers&sbquo;
                  convert them into buyers&sbquo; using precise methods to
                  achieve several predefined objectives. Website performance
                  optimization refers to monitoring and analyzing the efficiency
                  of your website and identifying ways to improve it in terms of
                  speed&sbquo; features&sbquo; implementations&sbquo; design and
                  digital marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-services d-services1">
        <div className="container">
          <h2>Shopify Ecommerce Development Services</h2>
          <p className="text-center" style={{ padding: " 5px 0" }}>
            You can get various useful solutions for your e-commerce needs with
            our <b>Shopify Development Agency</b>. Our{" "}
            <b>Shopify development services</b> are designed to provide content,
            products and orders that allow you to take full control of the
            Shopify Store.{" "}
          </p>
          <p className="text-center" style={{ padding: " 5px 0 30px" }}>
            At Logicspice&sbquo; we offer a wide range of services including{" "}
            <b>Shopify Web Development Company</b>&sbquo; Shopify Custom
            Application Development&sbquo; Shopify Online Store System&sbquo;
            Customization&sbquo; Quality Analysis&sbquo; Website
            Migration&sbquo; and PSD for Shopping for Theme Improvement and
            Post-Final Management Services. Below is a list of our services.
          </p>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="service_box progressive1">
                <h3>Shopping e-commerce development</h3>
                <p>
                  Get comprehensive Shopify installation&sbquo; integration and
                  configuration to help your business meet e-commerce needs
                  quickly and easily. Our talented team explores in creating
                  high-performance&sbquo; feature-rich shopping carts that drive
                  conversions and revenue for the business.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="service_box responsive2">
                <h3>Shopify SEO</h3>
                <p>
                  Our technical team provides search engine optimization
                  solutions for Shopify SEO and Shopify plus SEO. Our Experts at
                  Logicspice with SEO services deals with transparency&sbquo;
                  dedication&sbquo; and detailed insight are the core
                  fundamentals of our Shopify SEO agency.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="service_box userfriendly">
                <h3>Shop for app development</h3>
                <p>
                  Our Shopify Development team takes the guesswork out of
                  ecommerce by harnessing data-driven insights to cut to the
                  chase. This won&apos;t just save you time and money&sbquo; but
                  it will ensure your customers get exactly what they want.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="service_box uptodate">
                <h3>Shopify Maintenance Services</h3>
                <p>
                  Whether it is a small bug or some big errors affects your e
                  Commerce store&apos;s performance as a whole&sbquo; our
                  Shopify technical expert developers can provide you with the
                  required technical assistance.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="service_box no-appstore">
                <h3>Show theme design and development</h3>
                <p>
                  Our technical team of Logicspice mainly works on template
                  files which are built using liquefied template language
                  created by Shopify and responsible for managing and loading
                  dynamic content. We have a team of experienced Shopify
                  developers who can successfully fulfil your custom theme
                  development requirements of your online Shopify store and
                  customer&apos;s requirement.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="service_box re-engaging">
                <h3>Custom shop development</h3>
                <p>
                  Share your ideas and get satisfactory Shopify development
                  services. Our expert developers can definitely meet your
                  business needs.
                </p>
              </div>
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
                  <b>Shopify app development</b> solution offered by
                  Logicspice&sbquo; can help you take full advantage of the
                  site. From the outset&sbquo; our motto is increase sales
                  growth. We raise our standards and see to it that our
                  developers meet these standards. Because of this&sbquo; we
                  ensure that our team works with innovative capabilities and
                  amazing experience.{" "}
                </p>
                <p>
                  Our dedicated team at Logicspice create a world-class online
                  shopping experience for customers. Our Shopify developers will
                  guide you through the entire <br />
                  <b>Shopify e-commerce development</b> journey to ensure that
                  your store has a unique place in your customers&apos; minds in
                  this cut throat competitive environment.
                </p>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="img_saaa">
            <Image
               width={1075}
               height={500 / (100 / 100)}
              src="/img/shopifydevelopment/shopify.jpg"
              alt="Shopify_Web_Development"
            />
          </div>
        </div>
      </section>
      <section className="new-why-choose-section sass_title">
        <div className="container">
          <h2>
            Why choose Logicspice <span>for Shopify Web App Development?</span>
          </h2>
          <div className="row">
            <div
              className="col-sm-6 col-md-6 aos-init aos-animate"
              data-aos="fade-right"
            >
              <div className="new_libraries">
                <i>
                  <Image
                    width={60}
                    height={100}
                    src="/img/shopifydevelopment/new_development_icon1.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>Dedicated team of shopify experts</h3>
                  <p>
                    Our team of shopify web app developers are enriched with
                    their technical skills and leverage years of proficiency to
                    deliver cutting-edge solutions that help you stand out in
                    the world of millions.
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
                  <Image
                    width={60}
                    height={100}
                    src="/img/shopifydevelopment/new_development_icon3.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>Support and maintenance</h3>
                  <p>
                    Our team can assure you of direct management and support
                    along with project implementation. We provide regular
                    updates and website management with support for website
                    layout&sbquo; HTML / CSS&sbquo; social media updates and
                    enhancements.
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
                  <Image
                    width={60}
                    height={100}
                    src="/img/shopifydevelopment/new_development_icon2.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>Competitive price</h3>
                  <p>
                    Our team can look after and support customers throughout the
                    project process. As an experienced Shopify development
                    company&sbquo; we provide updates and maintenance that help
                    us make consistent corrections.
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
                  <Image
                    width={60}
                    height={100}
                    src="/img/shopifydevelopment/new_development_icon4.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>Quality Assurance</h3>
                  <p>
                    We are responsible for providing consistent performance of{" "}
                    <b>Shopify web development</b>. Here&sbquo; we adhere to
                    international coding standards and guidelines. Our
                    Professional Quality Analyst would like to try again before
                    submitting the final project.
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
                id=""
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
    </>
  );
};

export default Page;
