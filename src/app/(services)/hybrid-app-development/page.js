"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import Image from "next/image";
import Link from "next/link";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Certificationtabs from "@/app/Components/Certificationtabs";
import Workingwith from "@/app/Components/Workingwith";
import "../../globals.css";

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
      <NavBar />
      <div className="hybridAppDevelopment"><section className="d-framework d-framework1 none_space">
        <div className="hibrid-app-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <Image
                  width={400}
                  height={500 / (100 / 100)}
                  src="/img/hybridappdevelopment/hybrid-top.png"
                  alt="hybrid app development company"
                />
              </div>
              <div className="col-sm-8">
                <h1>
                  Hybrid Mobile <br />
                  App Development Services
                </h1>
                <p>
                  Logicspice works as a hybrid mobile app development company,
                  offering powerful & quality service in hybrid mobile
                  application development globally, delivering advanced
                  functionality and highly featured solutions.
                </p>
                <div className="hb-btns">
                  <div className="btn btn-primary" onClick={openModal}>
                    <a>Hire Now!</a>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Request To Hire Hybrid mobile app Developers"
                      />
                    }
                  </div>
                  <div className="btn btn-primary" onClick={openModal}>
                    <a>Quick Inquiry</a>
                    {
                      <Contactusmodel
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Request To Hire Hybrid mobile app Developers"
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
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <p>
                Hybrid application is a cross platform app to accomplish your
                business needs with a perfect combination of technologies. It is
                used to produce the smartest and versatile applications using a
                compiled and well distributed base of codes across different
                platforms like Titanium, Sencha, HTML5 and PhoneGap. Our team
                assures to deliver 100% customized hybrid{" "}
                <Link href="/mobile-app-development" target="_blank" style={{textDecoration: "underline"}}>
                  Mobile applications
                </Link>{" "}
                that work efficiently across multiple devices.
              </p>
              <h2>Hybrid Mobile Application Development</h2>

              <p>
                The hybrid app development services process the latest and most
                advanced form of technological inputs while programming hybrid
                mobile applications. We make sure that our clients get to
                interact with the process of development of an app. We also
                maintain a designing staff which works in synchronization with
                our developers in order to make hybrid mobile apps aesthetically
                appealing and interactive. These designers and developers work
                extensively over the application across different platforms to
                furnish them with grace and fluidity. They use JavaScript,
                JQuery Mobile, CSS3, and HTML5 development frameworks to build
                hybrid mobile apps. We have provided a phenomenal service to all
                of our clients throughout different platforms. Being a hybrid
                app development company, we build simplified and genuine
                applications.
              </p>
            </div>
            <div className="col-sm-12 col-md-4">
              <Image
                width={100}
                height={100}
                className="hydra-banner-img"
                src="/img/hybridappdevelopment/hybrid-banner2.png"
                alt="hybrid app development company"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="d-services d-services1">
        <div className="container">
          <h2>Hybrid Application Development Services</h2>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="service_box Application1 ">
                <h3>Business Applications</h3>
                <p>
                  Our services have helped compound profits of several big and
                  small enterprises and managements.
                </p>
              </div>
              <div className="service_box Application2">
                <h3>Games Applications</h3>
                <p>
                  You can convert your creativity with the help of our
                  programmers adept in developing gaming applications.
                </p>
              </div>
              <div className="service_box Application3">
                <h3>Social Networking Apps</h3>
                <p>
                  You can begin your journey towards becoming the new Zuckerberg
                  with social networking apps developed under our roof.
                </p>
              </div>
              <div className="service_box Application1">
                <h3>Sports Applications</h3>
                <p>
                  We build and develop fresh sports monitoring and live
                  streaming applications also.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="service_box Application4">
                <h3>Lifestyle Applications</h3>
                <p>
                  Our lifestyle applications have been said to be one of the
                  most interactive ones.
                </p>
              </div>
              <div className="service_box Application5">
                <h3>Utility Applications</h3>
                <p>
                  Tweaking and editing tools can be developed with hybrid app
                  developers.
                </p>
              </div>
              <div className="service_box Application6">
                <h3>Educational Applications</h3>
                <p>
                  Want to make a change right from the root then we will help
                  you create interactive and fun educational apps across
                  different platforms.
                </p>
              </div>
              <div className="service_box Application2">
                <h3>Travel Applications</h3>
                <p>
                  Want to help people with a breakthrough in the travel business
                  then we are here to take you off from the ground in the online
                  aerospace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-features">
        <div className="container">
          <h2>Core Features of Hybrid Mobile App Development </h2>
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/hybridappdevelopment/lara_icon1.png"
                  alt="icon1"
                />
                <h3>Top level confidentiality</h3>
                <p>Privacy is given utmost priority. </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/hybridappdevelopment/lara_icon6.png"
                  alt="icon2"
                />
                <h3>Personalized applications</h3>
                <p>The entire application is adjustable in nature. </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/hybridappdevelopment/lara_icon5.png"
                  alt="icon3"
                />
                <h3>Flexible rates</h3>
                <p>
                  The hybrid app development can help you in getting more
                  services at reasonable rates.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/hybridappdevelopment/lara_icon4.png"
                  alt="icon4"
                />
                <h3>Customizable themes and designs </h3>
                <p>
                  The designs can completely be customized as per your
                  recommendations.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/hybridappdevelopment/lara_icon3.png"
                  alt="icon5"
                />
                <h3>Comprehensive and interactive reporting</h3>
                <p>
                  The hybrid system offer an interactive and wide ranging app.{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/hybridappdevelopment/lara_icon2.png"
                  alt="icon6"
                />
                <h3>Assortment of skill set among the developers</h3>
                <p>
                  The hybrid app developers have adept themselves with the
                  different platforms and their separate requirements pertaining
                  to application development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="benefitsHybrid">
        <div className="container">
          <h2>Benefits of Hybrid App Development </h2>
          <div className="h-benifit">
            <div className="bh-count">
              <div className="row">
                <div className="col-md-6">
                  <Image
                    width={100}
                    height={100}
                    src="/img/hybridappdevelopment/1.png"
                    alt="icon7"
                  />
                  <h3>Easy To Handle</h3>
                  <p>
                    It can manage easily due to the high level of compatibility
                    with different platforms.
                  </p>
                </div>
                <div className="col-md-6">
                  <Image
                    width={100}
                    height={100}
                    src="/img/hybridappdevelopment/2.png"
                    alt="icon8"
                  />
                  <h3>Offer On Multiple Stages</h3>
                  <p>
                    A single hybrid app can be staged on Google Playstore for
                    Android and App Store for iOS.
                  </p>
                </div>
                <div className="col-md-6">
                  <Image
                    width={100}
                    height={100}
                    src="/img/hybridappdevelopment/3.png"
                    alt="icon9"
                  />
                  <h3>Better User Experience</h3>
                  <p>
                    Hybrid app offers improved user experience on each platform.
                  </p>
                </div>
                <div className="col-md-6">
                  <Image
                    width={100}
                    height={100}
                    src="/img/hybridappdevelopment/4.png"
                    alt="icon10"
                  />
                  <h3>Easy To Monetize</h3>
                  <p>
                    You get easy integration available which makes things smooth
                    for running ads and other elements.{" "}
                  </p>
                </div>
                <div className="col-md-6">
                  <Image
                    width={100}
                    height={100}
                    src="/img/hybridappdevelopment/5.png"
                    alt="icon11"
                  />
                  <h3>Scaling Is Easy</h3>
                  <p>
                    Scaling your app to meet the changing requirements is
                    necessary and hybrid apps come with easy scaling.{" "}
                  </p>
                </div>
                <div className="col-md-6">
                  <Image
                    width={100}
                    height={100}
                    src="/img/hybridappdevelopment/6.png"
                    alt="icon12"
                  />
                  <h3>Fast</h3>
                  <p>
                    A hybrid app is much faster than a native app, this is
                    accept krobecause of single codebase being run on different
                    platforms.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="bh-img">
              <Image
                width={300}
                height={500 / (100 / 100)}
                src="/img/hybridappdevelopment/girl-bg.png"
                alt="icon13"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="had-choose">
        <div className="container">
          <h2>Why Choose Logicspice for Hybrid App Development?</h2>
          <div className="row">
            <div className="col-md-5">
              <Image
                width={500}
                height={500 / (100 / 100)}
                src="/img/hybridappdevelopment/HYBRID-APP-DEVELOPMENT.png"
                alt="hybrid app development company"
              />
            </div>
            <div className="col-md-7">
              <ul>
                <li>
                  We have been working in the same industry for 12+ years with
                  1900+ client & 15 countries.
                </li>
                <li>
                  We promise the best available technological advancement
                  through our applications
                </li>
                <li>
                  Our service is not only the best in terms of quality but also
                  cost effective.
                </li>
                <li>
                  Logicspice keep a seamless communication with clients in order
                  to render applications suiting their special needs.
                </li>
                <li>
                  Our developers and designing team maintain their focus on the
                  satisfaction of the client all the time through customer
                  support service and other mediums of communication.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 main_btn_hire">
            <Link href="/hire-developers" className="btn btn-primary">Hire App Developer</Link>
          </div>
        </div>
      </section>
      <section className="hybrid-blog">
        <div className="container">
          <h2>Our Blogs</h2>
          <div className="row">
            <div className="col-sm-6">
              <div className="blog-box">
                <a
                  href="https://blog.logicspice.com/how-much-does-it-cost-to-develop-a-mobile-app"
                  target="_blank"
                >
                  <Image
                    width={700}
                    height={500 / (100 / 100)}
                    src="/img/hybridappdevelopment/d19fe_How-Much-Does-It-Cost-To-Develop-An-App--1-.jpg"
                    alt=""
                  />
                </a>
                <a
                  href="https://blog.logicspice.com/how-much-does-it-cost-to-develop-a-mobile-app"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="blog-box">
                <a
                  href="https://blog.logicspice.com/native-apps-vs-hybrid-apps-in-mobile-app-development"
                  target="_blank"
                >
                  <Image
                    width={700}
                    height={500 / (100 / 100)}
                    src="/img/hybridappdevelopment/7a29a_Netiv_vs_hybrid--1-.jpg"
                    alt=""
                  />
                </a>
                <a
                  href="https://blog.logicspice.com/native-apps-vs-hybrid-apps-in-mobile-app-development"
                  target="_blank"
                >
                  Read More
                </a>
              </div>
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
      </section></div>
      
      <Footer />
    </>
  );
};

export default Page;
