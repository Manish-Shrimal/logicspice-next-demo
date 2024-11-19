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
      <NavBar />
      <section className="yellow_slider pwa_developent_slider">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="slidere-tittle">
                <h1>Progressive Web app Development</h1>
                <p>
                  In this high tech digital era the progressive web app is a
                  cutting-edge technology that uses the latest web capabilities
                  to enrich the user experience and elevate website-loading
                  speed. These apps are easily accessible through URLs&sbquo; so
                  you do not need to download them.{" "}
                </p>
                <p>
                  PWAs also make sure that your website runs flawlessly on each
                  device and all screen sizes without creating any issue.
                  It&apos;s better performance and affordable price attract most
                  of the web developers that they start preferring PWAs to the
                  native apps and responsive websites.
                </p>
              </div>
              <div className="btn_align">
                <div className="btn btn-primary" onClick={toggleModal}>
                  <a>Enquire Now</a>
                  {/* {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Progressive Web Apps Development"
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
                <Image  unoptimized={true}
                  width={500}
                  height={500 / (100 / 100)}
                  src="/img/progressivewebappdevelopment/pwa-banner-img.png"
                  alt="PWA_Development_Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="d-services d-services1 PrgressiveDeveFeatures"
        style={{ background: "rgb(241, 241, 241)" }}
      >
        <div className="container">
          <h2>
            Awe-Inspiring features of PWA that make it Sky-High Web Application
          </h2>

          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="features_box">
                <h3>High-User-Engagement</h3>
                <p>
                  Our developer team creates PWA with the use of an automatic
                  update facility and advanced fixtures that help to increase
                  the conversion rate for your website.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6">
              <div className="features_box">
                <h3>Improved Performance</h3>
                <p>
                  The technical and developer team of Logicspice uses the core
                  principles of progressive enhancement that permits to create
                  web pages that will result in better performance across
                  various platforms and under resource constraints.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6">
              <div className="features_box">
                <h3>Seo-Friendly</h3>
                <p>
                  At Logicspice&sbquo; we design & develop the progressive app
                  according to SEO guidelines by implementing efficacious and
                  valuable SEO techniques to enhance the traffic on your
                  website.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6">
              <div className="features_box">
                <h3>Native App-Like</h3>
                <p>
                  From designing to the delivery of the project&sbquo; our web
                  developer team arranges every component systematically in such
                  a manner that the app appears the same as a native application
                  and has almost the same features.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6">
              <div className="features_box">
                <h3>Reliability</h3>
                <p>
                  Our <b>progressive web app development team</b> creates
                  reliable web applications for your website that are reliable
                  in every manner&sbquo; no matter which network conditions a
                  user works in&sbquo; our designed progressive app loads
                  quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-services d-services1 PrgressiveDeveServices">
        <div className="container">
          <h2>Progressive Web App Development Services</h2>
          <p className="text-center" style={{ padding: "5px 0 " }}>
            Logicspice is a top <b>progressive web app development company</b>{" "}
            that adopts the latest tools and technologies that help in making
            the application faster&sbquo; easier to develop&sbquo;
            understand&sbquo; and test.{" "}
          </p>
          <p className="text-center" style={{ padding: "5px 0 30px" }}>
            We assimilate various features like push notification&sbquo; offline
            browsing&sbquo; data analysis&sbquo; and easy distribution channels
            into web apps intending to maximize user engagement and deliver the
            best solution for your businesses.
          </p>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="service_box progressive1">
                <h3>Assist with Up-to-date Services</h3>
                <p>
                  Our developer team follows an agile approach for{" "}
                  <b>PWA development</b> that offers complete support and
                  maintenance to fulfil the needs and satisfy particular
                  audiences for your business.
                </p>
              </div>
              <div className="service_box re-engaging">
                <h3>No app store Hassle</h3>
                <p>
                  Progressive web apps do not require specific installation and
                  allow sharing via URL&sbquo; like other websites.{" "}
                </p>
              </div>

              <div className="service_box responsive2">
                <h3>Application Shell Architecture</h3>
                <p>
                  We create PWA on app shell model such that they deliver
                  incredible user experiencev&sbquo; without any other
                  interruption and user get to enjoy a pure app like performance
                </p>
              </div>
              <div className="service_box userfriendly">
                <h3>Custom Progressive Web App Development</h3>
                <p>
                  According to your business requirements&sbquo;{" "}
                  <b>our custom progressive web applications</b> services
                  develop an intuitive user interface&sbquo; quick
                  animations&sbquo; native alike feeling&sbquo; and
                  lightning-fast speed apps that satisfy your needs.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="service_box no-appstore">
                <h3>Connectivity independence</h3>
                <p>
                  With our experienced and enriched progressive web app
                  developer team we create a perfect website that runs both on
                  degraded-quality networks and offline.
                </p>
              </div>

              <div className="service_box uptodate">
                <h3>Plug-in Development</h3>
                <p>
                  Expert plug-in development and integration services allow you
                  to provide native-like app experience on the web platform.
                </p>
              </div>
              <div className="service_box userfriendly">
                <h3>Secure Data Migration</h3>
                <p>
                  Our team follows a systematic approach and develops a
                  data-intensive web application with faster&sbquo;
                  flawless&sbquo; seamless&sbquo; and secure migration of data
                  across browsers.
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
                  We create Progressive web applications that ensure seamless
                  performance and are identical to that of the native mobile
                  application. Intending to maximize user engagement our{" "}
                  <b>progressive web app development services</b> creates web
                  apps that run faster across all platforms with minimum effort
                </p>

                <p>
                  At Logicspice&sbquo; our experts make use of the latest
                  technologies to design feature enriched progressive web
                  applications that are fast loading and secure. Our{" "}
                  <b>progressive web app development company</b> builds your
                  application in such a manner that is more efficient and
                  elegant that pleases your customer.{" "}
                </p>
                <p>
                  Our main motive is to maximize user engagement by delivering
                  innovative ideas to your clients by developing faster
                  applications that run on all the platforms that 100% satisfy
                  their needs. Logicspice is one of the best mobile and{" "}
                  <b>Web app Development Company</b> and we handle the customers
                  globally i.e. USA&sbquo; UK&sbquo; Australia&sbquo; Europe and
                  many other countries.
                </p>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
          <div className="img_saaa">
            <Image unoptimized={true}
              width={1075}
              height={500 / (100 / 100)}
              src="/img/progressivewebappdevelopment/pwa_banner.png"
              alt="Node_Js_Development_Services"
            />
          </div>
        </div>
      </section>

      <section className="new-why-choose-section sass_title">
        <div className="container">
          <h2>
            Why choose Logicspice{" "}
            <span>for Progressive Web App development</span>
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
                    height={500 / (100 / 100)}
                    src="/img/progressivewebappdevelopment/new_development_icon1.png"
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
                    src="/img/progressivewebappdevelopment/new_development_icon3.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>Quality Assurance</h3>
                  <p>
                    Our tester does end to end testing of applications and
                    assure the best quality product.
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
                    src="/img/progressivewebappdevelopment/new_development_icon2.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>Quick Support</h3>
                  <p>
                    At Logicspice&sbquo; we address all issues impacting system
                    efficiency with a team of committed support staff. So&sbquo;
                    with the use of the latest technologies we ensure that your
                    PWA solution remains up-to-date and in line.{" "}
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
                    src="/img/progressivewebappdevelopment/new_development_icon4.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>Dedicated team of experts</h3>
                  <p>
                    Our team of Progressive web app developers are enriched with
                    their technical skills and leverage years of proficiency to
                    deliver cutting-edge solutions that help you stand out in
                    the world of millions.{" "}
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
                    src="/img/progressivewebappdevelopment/new_development_icon5.png"
                    alt="Web development"
                  />
                </i>
                <div className="new-libra-bx">
                  <h3>100% Client Satisfaction & Cost-Effective Solution</h3>
                  <p>
                    We are the top web apps development company and we excel in
                    delivering comprehensive business-oriented PWA solutions. We
                    begin by understanding your unique business
                    requirements&sbquo; strategize&sbquo; analyze&sbquo;
                    design&sbquo; and timely implement your solutions.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h3 className="sume-text">
            So&sbquo; if you have any query related to the progressive web app
            development you can reach our technical team.
          </h3>
        </div>
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
                      title="Progressive Web Apps Development"
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
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
