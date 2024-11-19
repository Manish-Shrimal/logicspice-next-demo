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
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.35,
    centerMode: true,
    vertical: false,
    autoplay: true,
    arrows: false,
  };

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
      <div className="advancedWebProgramming"><section className="laravel-banner advanced-web-banner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="laravel-banner-txt">
                <h1>
                  Advanced Web Application <br />
                  Development
                </h1>
                <ul>
                  <li>CMS Development </li>
                  <li>Plenty of Web Solutions</li>
                  <li>Shopping Cart Service</li>
                  <li>Plug-in Development</li>
                </ul>
                <div className="laravel-anquire">
                  <div className="btn btn-primary" onClick={openModal}>
                    <a>Enquire Now</a>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Advanced Web Application Development"
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
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="page_img">
                <Image unoptimized={true}
                
                  width={400}
                  height={500 / (100 / 100)}
                  src="/img/advancedwebprogramming/advanced-web-development-img.png"
                  alt="Advanced Web Application Development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="laravel-descriptions advanced-descriptions">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 pull-right">
              <div className="laravel_img">
                <Image unoptimized={true}
                  width={310}
                  height={500 / (100 / 100)}
                  src="/img/advancedwebprogramming/advanced-logo-img.png"
                  alt="Advanced Web Application Development"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6 pull-left">
              <div className="laravel-descriptions-bx" dir="ltr">
                <h2>
                  Advanced Web <br />
                  Application Development
                </h2>
                <p>
                  <b>Advanced website development</b> is the need of the hour
                  pertaining to the neck and throat competition in the market.
                  With many new and innovative platforms being available
                  now&sbquo; there is a need for smart business websites that
                  can help your business grow in the best manner.
                </p>
                <p>
                  With many a new {""}
                  <Link
                    href="/open-source-cms"
                    style={{ color: "white", fontWeight: "bold", textTransform: "capitalize" }}
                  >
                    open source platforms
                  </Link>{" "}
                  {""}
                  available for the developers&sbquo; you can chose highly
                  powerful and flexible framework for your website. These
                  frameworks are very effective for blogs&sbquo; websites&sbquo;
                  and any other types of activity such as e-commerce.
                </p>
                <p>
                  LogicSpice provides you with probably the best kind of
                  services when you talk about the advanced applications. We
                  have best in class programmers that have the expertise as well
                  as the experience of having served the clients from all over
                  the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="laravel-devlopments-services">
        <div className="container">
          <h2>Advanced Web Application Development</h2>
          <p className="laravel_core_sub2">
            Advanced website development is the need of the hour pertaining to
            the neck
            <br /> and throat competition in the market.
          </p>
          <div className="laravel-services-bx-top advanced_web_service_bx">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box1">
                    <i>
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/advancedwebprogramming/advanced-web-new-icon1.png"
                        alt="Advanced Web Application Development"
                      />
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/advancedwebprogramming/advanced-web-white-icon1.png"
                        alt="Advanced Web Application Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    E-Commerce <br />
                    Solutions
                  </h3>
                  <p>
                    We offer you with the best variety of e-commerce websites to
                    make shopping via e-cart smoother for the clients.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box4">
                    <i>
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/advancedwebprogramming/advanced-web-new-icon2.png"
                        alt="Advanced Web Application Development"
                      />
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/advancedwebprogramming/advanced-web-white-icon2.png"
                        alt="Advanced Web Application Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    CMS <br />
                    Development
                  </h3>
                  <p>
                    We can help you with world class solutions to help you have
                    fully customized websites that are effective and easy to
                    manage at the same time.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box3">
                    <i>
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/advancedwebprogramming/advanced-web-new-icon3.png"
                        alt="Advanced Web Application Development"
                      />
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/advancedwebprogramming/advanced-web-white-icon3.png"
                        alt="Advanced Web Application Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    Plenty of Web
                    <br /> Solutions
                  </h3>
                  <p>
                    We can help you with best in quality websites for varied
                    business needs to help you enhance your business in the best
                    manner.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box4">
                    <i>
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/advancedwebprogramming/codeigniter-new-icon3.png"
                        alt="Advanced Web Application Development"
                      />
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/advancedwebprogramming/codeigniter-white-icon3.png"
                        alt="Advanced Web Application Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    Third party <br />
                    Integration
                  </h3>
                  <p>
                    We also provide you with easy and smooth integration of
                    third party apps in your website to enhance the experience.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box5">
                    <i>
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/advancedwebprogramming/codeigniter-new-icon4.png"
                        alt="Advanced Web Application Development"
                      />
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/advancedwebprogramming/codeigniter-white-icon4.png"
                        alt="Advanced Web Application Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    Plug-in
                    <br /> Development
                  </h3>
                  <p>
                    We can also help you with the best quality plug-ins from
                    your website to help the clients have a more thrilling and
                    smoother experience.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box2">
                    <i>
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/advancedwebprogramming/codeigniter-new-icon5.png"
                        alt="Advanced Web Application Development"
                      />
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/advancedwebprogramming/codeigniter-white-icon5.png"
                        alt="Advanced Web Application Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    Web <br />
                    themes
                  </h3>
                  <p>
                    We give an access to innovative and attractive themes and
                    layouts.{" "}
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box7">
                    <i>
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/advancedwebprogramming/advanced-web-new-icon4.png"
                        alt="Advanced Web Application Development"
                      />
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/advancedwebprogramming/codeigniter-white-icon4.png"
                        alt="Advanced Web Application Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    Innovative <br />
                    designs
                  </h3>
                  <p>
                    This is another thing which makes our website different from
                    the league and a pleasure for the visitors at the same time.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box8">
                    <i>
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/advancedwebprogramming/advanced-web-new-icon5.png"
                        alt="Advanced Web Application Development"
                      />
                      <Image unoptimized={true}
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/advancedwebprogramming/advanced-web-white-icon5.png"
                        alt="Advanced Web Application Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    Word-class
                    <br /> developers
                  </h3>
                  <p>
                    We have best in class developers at our disposal to help you
                    with any kind of website with the best quality of features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="laravel_core_features_section advanced_core_features_section">
        <div className="container">
          <h2>Core Features Of Advanced Web Programming</h2>
          <p className="laravel_core_sub">
            Advanced website development is the need of the hour pertaining to
            the neck
            <br /> and throat competition in the market.
          </p>
          <div className="laravel_core_features_bx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/advancedwebprogramming/cackphp_features_icon3.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Advanced framework</h3>
                    <p>
                      It provides the user with easy access and management of
                      the website.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/advancedwebprogramming/advanced_features_icon1.png"
                      alt="img4"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Multi level management </h3>
                    <p>
                      We provide you with efficient management at all critical
                      levels.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/advancedwebprogramming/advanced_features_icon2.png"
                      alt="img2"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Colossal Database</h3>
                    <p>
                      With enormous database&sbquo; it allows you to store data
                      with utmost ease.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/advancedwebprogramming/advanced_features_icon3.png"
                      alt="img5"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Synchronization</h3>
                    <p>
                      It is well synchronized with the trends of the internet to
                      help you have better experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/advancedwebprogramming/advanced_features_icon4.png"
                      alt="img3"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>SEO friendly</h3>
                    <p>
                      This is another thing which makes the advanced framework a
                      smart option.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image unoptimized={true}
                      width={50}
                      height={100}
                      src="/img/advancedwebprogramming/core_features_icon6.png"
                      alt="img6"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Smooth content addition</h3>
                    <p>
                      It provides you with facility to add the content with
                      utmost ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="laravel_choose_features_section">
        <div className="container">
          <h2>
            Why Choose Advanced
            <br /> Web Programming And Services?
          </h2>
          <div className="laravel_choose_features_bx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img1">
                    <Image unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/advancedwebprogramming/advances-why-icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>User rich experience</h3>
                    <p>
                      It offers enhanced experience to users making the websites
                      highly popular.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img2">
                    <Image unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/advancedwebprogramming/advances-why-icon2.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Easy editing</h3>
                    <p>
                      You can easily edit the website without having any kind of
                      back-end knowledge.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 " data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img3">
                    <Image unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/advancedwebprogramming/cackphp-why-icon2.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Security</h3>
                    <p>
                      The websites are also highly secure and free from any kind
                      of hacker&apos;s attacks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img4">
                    <Image unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/advancedwebprogramming/codeigniter-why-icon4.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Customization of themes</h3>
                    <p>
                      One of the most eminent features is its excellent
                      documentation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img5">
                    <Image unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/advancedwebprogramming/advances-why-icon3.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Plug-ins</h3>
                    <p>
                      There is availability of multiple plug-INS to add to user
                      experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img6">
                    <Image unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/advancedwebprogramming/advances-why-icon4.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>SEO friendly</h3>
                    <p>
                      Being SEO friendly&sbquo; they can easily climb up the
                      Google&apos;s rankings to make your company more popular.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 main_btn_hire">
              <div className="btn btn-primary" onClick={openModal}>
                <a>Enquire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Advanced Web Application Development"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image unoptimized={true}
              width={50}
              height={100}
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
            />
          </a>
        </div>
        <div className="quote_pop_plus quote_pop_in" onClick={toggleModal}>
          <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
        </div>
      </div></div>
      

      <Footer />
    </>
  );
};

export default Page;
