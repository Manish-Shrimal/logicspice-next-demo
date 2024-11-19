"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/industries/industry.css";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
import "../../../../public/css/font-awesome.css";
import Customsolutiontabs from "@/app/Components/Customsolutiontabs";
import Support from "@/app/Components/Support";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("case-study");
  const [selectedTab, setSelectedTab] = useState("about_app");

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,  // Changed from 8 to 1
    autoplay: true,
    autoplaySpeed: 3000,
  };

  var date = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,  // Changed from 8 to 1
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Navbar />
      <section className="caa-banner">
        <div className="hotel-background-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="country_header_secton_mobile_screen">
                  <div className="country_header_secton_mobile_screen_data">
                    <ul>
                      <li>
                        <div className="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            alt="Business Apps"
                            src="/img/globalpages/Business-Apps.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            alt="mobile Apps"
                            src="/img/globalpages/mobile-Apps.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            alt="Business Apps Development"
                            src="/img/globalpages/BusinesS-Apps-Development.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            alt="Business App Development Service"
                            src="/img/globalpages/Business-Service.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            alt="Business App Developers"
                            src="/img/globalpages/Business_Developers.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            alt="app-development"
                            src="/img/globalpages/app-development.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            alt="application developers"
                            src="/img/globalpages/application-developers.jpg"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            alt="mobile apps"
                            src="/img/globalpages/mobile-apps-logicspice.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            alt="app development services"
                            src="/img/globalpages/app-development-services.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            alt="expert app developers"
                            src="/img/globalpages/expert-app-developers.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            alt="android apps development"
                            src="/img/globalpages/android-apps-development.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            alt="mobile apps development"
                            src="/img/globalpages/mobile-apps-development.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            alt="affordable apps"
                            src="/img/globalpages/affordable-apps.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            alt="mobile apps-logicspice"
                            src="/img/globalpages/apps-logicspice.png"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="text-center hotel-info">
                  <div className="outstanding">Outstanding</div>
                  <div className="Business">Business Apps</div>

                  <div className="for">for</div>
                  <div className="Travel_and">PROFESSIONAL CONSULTANT</div>
                  <div className="Enhance_Business">
                    Enhance Your Business With Innovative Mobile Apps
                  </div>
                  <div className="portfolio_button_center">
                    <div id="inquirenow" className="enquire-btn">
                      <a className="btn btn-primary" onClick={toggleModal}>
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hotel_description">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="hotel_description_content">
                <h1 className="hotel_description_title">
                  Mobile App Development Services For
                  <span>
                    {" "}
                    Professionals CA&apos;s, Attorneys & Lawyers, Doctors and Job
                    Consultants{" "}
                  </span>
                </h1>
                <p style={{ textAlign: "justify" }}>
                  Logicspice is an award winning mobile app development company
                  and is serving the app industry since 2006. Our team is
                  commuted to provide best app design and user friendly layouts.
                  We at logicspice try to transform your ideas into successful
                  mobile apps and provide best app developemt services in Europe
                  and all other mazor countries. Our expert app developers
                  strive hard to develop best quality apps with offers complete
                  End-To-End custom features.
                </p>
                <p style={{ textAlign: "justify" }}>
                  We offers astounding apps development services for both
                  Android and Iphones with every possible feature of
                  customization to provide an additional benefits to user.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="hotel_description_image">
                <Image
                  width={400}
                  height={100 / 100 / 10}
                  alt="Accountants and Financial Industry Apps"
                  src="/img/globalpages/country_stepwisemobileapp.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="app_shown_describe">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="app_shown_describe_left">

                  <div className="app_shown_describe_bx aos-init aos-animate" data-aos="fade-left">
                    <div className="app_shown_describe_bx_icn">
                      <Image
                        unoptimized={true}
                        width={35}
                        height={100}
                        alt="App Development Company"
                        src="/img/globalpages/icn_an.png"
                      />
                    </div>
                    <div className="app_shown_describe_bx_label">
                      User Friendly
                      <br /> Layouts
                    </div>
                  </div>
                  <div className="app_shown_describe_bx aos-init aos-animate " data-aos="fade-left">
                    <div className="app_shown_describe_bx_icn">
                      <Image
                        unoptimized={true}
                        width={35}
                        height={100}
                        alt="App Development Company"
                        src="/img/globalpages/navigate_icon.png"
                      />
                    </div>
                    <div className="app_shown_describe_bx_label">
                      Easy To
                      <br /> Navigate
                    </div>
                  </div>
                  <div className="app_shown_describe_bx aos-init aos-animate " data-aos="fade-left">
                    <div className="app_shown_describe_bx_icn">
                      <Image
                        unoptimized={true}
                        width={35}
                        height={100}
                        alt="App Development Services"
                        src="/img/globalpages/security_icon.png"
                      />
                    </div>
                    <div className="app_shown_describe_bx_label">
                      Highly Secured
                      <br /> App
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mobile-screen-splash">
                  <div className="mobile-screen-sizee">
                    <Slider {...date}>
                      <div className="SiteFriendyBx">
                        <Image
                          width={600}
                          height={100}
                          alt="Mobile app development company"
                          src="/img/globalpages/raydaar_img.png"
                        />
                      </div>
                      <div className="SiteFriendyBx">
                        <Image
                          width={600}
                          height={100}
                          alt="Mobile app development Services"
                          src="/img/globalpages/martgram.png"
                        />
                      </div>
                      <div className="SiteFriendyBx">
                        <Image
                          width={600}
                          height={100}
                          alt="app development company"
                          src="/img/globalpages/localgenii.png"
                        />
                      </div>
                      <div className="SiteFriendyBx">
                        <Image
                          width={600}
                          height={100}
                          alt="app development services"
                          src="/img/globalpages/klick.png"
                        />
                      </div>
                      <div className="SiteFriendyBx">
                        <Image
                          width={600}
                          height={100}
                          alt="app development company Services"
                          src="/img/globalpages/tc.png"
                        />
                      </div>
                      <div className="SiteFriendyBx">
                        <Image
                          width={600}
                          height={100}
                          alt="android/ iphone app development"
                          src="/img/globalpages/fubmle.png"
                        />
                      </div>
                      <div className="SiteFriendyBx">
                        <Image
                          width={600}
                          height={100}
                          alt="expert app developers"
                          src="/img/globalpages/social_securitas.png"
                        />
                      </div>
                      <div className="SiteFriendyBx">
                        <Image
                          width={600}
                          height={100}
                          alt="Mobile app development company"
                          src="/img/globalpages/sweepstakes.png"
                        />
                      </div>
                      <div className="SiteFriendyBx">
                        <Image
                          width={600}
                          height={100}
                          alt="Mobile app development services"
                          src="/img/globalpages/bestcit.png"
                        />
                      </div>
                      <div className="SiteFriendyBx">
                        <Image
                          width={600}
                          height={100}
                          alt="app development agency"
                          src="/img/globalpages/uuuga.png"
                        />
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="app_shown_describe_right">
                  <div className="app_shown_describe_bx aos-init aos-animate " data-aos="fade-right">
                    <div className="app_shown_describe_bx_icn">
                      <Image
                        unoptimized={true}
                        width={35}
                        height={100}
                        alt="app development"
                        src="/img/globalpages/icon_ac.png"
                      />
                    </div>
                    <div className="app_shown_describe_bx_label">
                      Unique
                      <br /> Designs
                    </div>
                  </div>
                  <div className="app_shown_describe_bx aos-init aos-animate " data-aos="fade-right">
                    <div className="app_shown_describe_bx_icn">
                      <Image
                        unoptimized={true}
                        width={35}
                        height={100}
                        alt="mobile app development"
                        src="/img/globalpages/customiziable_app_icon.png"
                      />
                    </div>
                    <div className="app_shown_describe_bx_label">
                      Customizable
                      <br /> App
                    </div>
                  </div>
                  <div className="app_shown_describe_bxt aos-init aos-animate " data-aos="fade-right">
                    <div className="app_shown_describe_bx_icn">
                      <Image
                        unoptimized={true}
                        width={35}
                        height={100}
                        alt="mobile app development services"
                        src="/img/globalpages/userinterface_icon.png"
                      />
                    </div>
                    <div className="app_shown_describe_bx_label">
                      Simple Attractive UI
                      <br /> Interface
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      <section className="app_bottom_shwn_bs AppBottomShwnBx app_bottom_shwn_bs">
        <div className="container">
          <ul className="nav nav-tabs" role="tablist">
            <li
              role="presentation"
              className={activeTab === "case-study" ? "active" : ""}
            >
              <a
                onClick={() => setActiveTab("case-study")}
                style={{ display: "inline-block", cursor: "pointer" }}
              >
                Case Study
              </a>
            </li>
            <li
              role="presentation"
              className={activeTab === "testimonial" ? "active" : ""}
            >
              <a
                onClick={() => setActiveTab("testimonial")}
                style={{ display: "inline-block", cursor: "pointer" }}
              >
                Testimonial
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div
              role="tabpanel"
              className={`tab-pane ${
                activeTab === "case-study" ? "active" : ""
              }`}
              id="case-study"
            >
              <div className="row">
                <div className="col-md-3 col-sm-4">
                  <div className="casestudy-col">
                    <div className="casestudy-row" id="post-3343">
                      <div className="case-col-img">
                        <Image
                          width={300}
                          height={100}
                          src="/img/globalpages/93f23_daybreaktots.png"
                          alt="Daybreaktots - logicspice"
                        />
                      </div>
                      <div className="case-col-detail">
                        <h3 className="casestudy-title">
                          <a href="">
                            <span>Daybreaktots</span>
                          </a>
                        </h3>

                        <div className="casestudy-details-para">
                          Overview
                          <p>
                            Daybreaktots website that we are scoping will serves
                            as service offering website where customers can
                            search for child daycare service providers which can
                            help them for in-home chi...
                          </p>
                          <a href="">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="casestudy-col">
                    <div className="casestudy-row" id="post-3343">
                      <div className="case-col-img">
                        <Image
                          width={300}
                          height={100}
                          src="/img/globalpages/26f97_onegai.png"
                          alt="One-gai - logicspice"
                        />
                      </div>
                      <div className="case-col-detail">
                        <h3 className="casestudy-title">
                          <a href="">
                            <span>One-gai</span>
                          </a>
                        </h3>

                        <div className="casestudy-details-para">
                          iew
                          <p>
                            This website we are scoping will serve as a
                            &quot;SERVICE MARKETPLACE&quot; platform for Japan
                            and US to connect customers (service seekers) with
                            helpers (service providers) over site. Here us...
                          </p>
                          <a href="">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              className={`tab-pane ${
                activeTab === "testimonial" ? "active" : ""
              }`}
              id="testimonial"
            >
              <section className="testimonial-hire">
                <div className="container">
                  <Slider {...settings}>
                    <div>
                      <div className="media">
                        <div className="media-left">
                          <Image
                            width={100}
                            height={100}
                            className="media-object"
                            src="/img/globalbusinesscountries/kesepara.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">
                            C2C Ecommerce Website About Fashion
                          </h4>
                          <p>
                            &quot;Exactly the best team available online ! I
                            have been working and communicating with a few
                            companies over the internet and i didn&apos;t see a
                            single better company than logicspice. They are{" "}
                            <a
                              style={{ cursor: "pointer", color: "#31aae1" }}
                              className="show_data"
                            >
                              More...
                            </a>
                            <span
                              className="hidendata"
                              style={{ display: "none" }}
                            >
                              {" "}
                              so skilled and professional. Their knowledge about
                              coding is incredible. And they never say
                              &quot;no&quot; or &quot;we can&apos;t&quot; to any
                              situation. Actually they are the best guys i have
                              ever work with in my life. Their communication,
                              kindness are so high level. Every step of my
                              project, every progress of my project we need
                              maybe 15 to 20 changes. And every time i wrote
                              those needs to them, they did their work at most
                              1-2 days. Their speed and work quality is amazing
                              ! Final word to those who wants to hire them:
                              don&apos;t think twice ! Literally they are the
                              best team in this website. And also their work
                              progress and milestones are literally clear as
                              they said. I am advising them to all of my friends
                              and i will hire them again for sure !&quot;
                            </span>
                          </p>
                          <div className="author_name">
                            Burak <span>Turkey</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="media">
                        <div className="media-left">
                          <Image
                            width={100}
                            height={100}
                            className="media-object"
                            src="/img/globalbusinesscountries/dsherevk.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">
                            Website + Mobile App (iOs&amp;Android)
                          </h4>
                          <p>
                            &quot;Manish was very cooperative and professional
                            during the project. The team was great, the project
                            was very complicated and they tried their best to
                            complete it with the best diligence. I{" "}
                            <a
                              style={{ cursor: "pointer", color: "#31aae1" }}
                              className="show_data"
                            >
                              More...
                            </a>
                            <span
                              className="hidendata"
                              style={{ display: "none" }}
                            >
                              {" "}
                              will definitely contact this company in the future
                              for my project updates and would recommend to
                              anyone who is looking for a good quality
                              work.&quot;
                            </span>
                          </p>
                          <div className="author_name">
                            Dmitry <span>Canada</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="media">
                        <div className="media-left">
                          <Image
                            width={100}
                            height={100}
                            className="media-object"
                            src="/img/globalbusinesscountries/sabdeen.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">Build a Website</h4>
                          <p>
                            &quot;Best project management experience/journey I
                            had. Great team spirit, very flexible and
                            understanding while maintaining time and budget
                            target.Top tear professional communication and
                            support.&quot;{" "}
                          </p>
                          <div className="author_name">
                            Sherif A. <span>Dubai</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="media">
                        <div className="media-left">
                          <Image
                            width={100}
                            height={100}
                            className="media-object"
                            src="/img/globalbusinesscountries/beatbuehlmann.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">
                            Financial Web Application For Pensioners
                          </h4>
                          <p>
                            &quot;Excellent work again from logicspice! They
                            definitely put their best effort into the project
                            along with very valuable inputs regarding possible
                            enhancements of the web project. With logicspice{" "}
                            <a
                              style={{ cursor: "pointer", color: "#31aae1" }}
                              className="show_data"
                            >
                              More...
                            </a>
                            <span
                              className="hidendata"
                              style={{ display: "none" }}
                            >
                              {" "}
                              you don&apos;t just hire someone to execute your
                              project specification but much more someone who
                              helps you really make good and sophisticated web
                              project. The communication is greate and feedback
                              time very short. I really can&apos;t find anything
                              to criticise and will definitely rehire soon as
                              I&apos;m very happy with their work. Thanks a lot
                              to Manish and his team!&quot;
                            </span>
                          </p>
                          <div className="author_name">
                            Beat B. <span>Switzerland</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="media">
                        <div className="media-left">
                          <Image
                            width={100}
                            height={100}
                            className="media-object"
                            src="/img/globalbusinesscountries/tjulia1.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">
                            Build a Social Networking Website With Payment
                            System
                          </h4>
                          <p>
                            &quot;I hired this team for a very complex project
                            that involved handling many different types of
                            users, payment options, and social network
                            integration. Extremely timely and professional. Will
                            use again!&quot;{" "}
                          </p>
                          <div className="author_name">
                            Tom J. <span>USA</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="blog_sections">
        <div className="container">
          <div className="blog_heading text-center">Blog&apos;s</div>

          <div className="row">
            <div className="col-sm-6">
              <div className="blogstudy-th">
                <div className="blog_head" id="post-3498">
                  <div className="blog_head_img">
                    <Image
                      width={700}
                      height={100}
                      src="/img/globalpages/cd13e_Reasons-for-choosing-custom-design-software-development-services.jpg"
                      alt=" Reasons for choosing custom design software development services"
                    />
                  </div>
                  <div className="blog_head_detail">
                    <h3 className="heading_subsiti">
                      <a href="">
                        <span>
                          {" "}
                          Reasons for choosing custom design software
                          development services{" "}
                        </span>
                      </a>
                    </h3>
                    <div className="method_blog">
                      <ul>
                        <li>
                          <i className="fa fa-calendar"></i>
                          <span>November 26, 2014</span>
                        </li>
                        <li>
                          <i className="fa fa-folder-open"></i>
                          <span>
                            <a href="">web development</a>,
                            <a href=""> Software Development</a>
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-tag" aria-hidden="true"></i>
                          <span>
                            <a href="" title="">
                              web development company
                            </a>
                            ,
                            <a href="" title="software development company">
                              software development company
                            </a>
                            ,
                            <a href="" title=" affordable web development">
                              {" "}
                              affordable web development
                            </a>
                            ,
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="blog_details">
                      Customized software development is highly in demand these
                      days and with its increasing popularity it seems that the
                      demand for software development services will increase at
                      high rate in the near
                      <a href="" className="blog_read_more" title="read more">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="casestudyshoen_bx_col_th">
                <div className="blog_head" id="post-3498">
                  <div className="blog_head_img">
                    <Image
                      width={700}
                      height={100}
                      src="/img/globalpages/11e23_How-Effective-PHP-Development-Can-Boost-Your-Business.jpg"
                      alt=" How Effective PHP Development Can Boost Your Business?"
                    />
                  </div>
                  <div className="blog_head_detail">
                    <h3 className="entry-title heading_subsiti">
                      <a href="">
                        <span>
                          How Effective PHP Development Can Boost Your Business?
                        </span>
                      </a>
                    </h3>
                    <div className="method_blog">
                      <ul>
                        <li>
                          <i className="fa fa-calendar"></i>
                          <span> January 29, 2015</span>
                        </li>
                        <li>
                          <i className="fa fa-folder-open"></i>
                          <span>
                            <a href=""> Php Development</a>
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-tag" aria-hidden="true"></i>
                          <span>
                            <a href="" title="php development company">
                              php development company
                            </a>
                            ,
                            <a href="" title="php development services">
                              php development services
                            </a>
                            ,
                            <a href="" title=" hire php developers">
                              {" "}
                              hire php developers
                            </a>
                            ,{" "}
                            <a href="" title=" php programming">
                              {" "}
                              php programming
                            </a>
                            ,
                            <a href="" title=" professional php programming">
                              {" "}
                              professional php programming
                            </a>
                            ,
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="blog_details">
                      In present scenario, PHP has become one of the most
                      preferred languages for the development process with over
                      20 million domains being created with the use of PHP. The
                      potential of PHP Frameworkcan
                      <a href="" className="blog_read_more" title="read more">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="app_bottom_shwn_bs AppBottomShwnBx">
        <div className="container">
          <ul className="nav nav-tabs" role="tablist">
            <li
              role="presentation"
              className={selectedTab === "about_app" ? "active" : ""}
            >
              <a
                onClick={() => setSelectedTab("about_app")}
                style={{ display: "inline-block", cursor: "pointer" }}
              >
                About Mobile App
              </a>
            </li>
            <li
              role="presentation"
              className={selectedTab === "why_we_need" ? "active" : ""}
            >
              <a
                onClick={() => setSelectedTab("why_we_need")}
                style={{ display: "inline-block", cursor: "pointer" }}
              >
                Why We Need
              </a>
            </li>
          </ul>
          <div className="tab-content">
            {selectedTab === "about_app" && (
              <div role="tabpanel" className="tab-pane active" id="about_app">
                <div className="row">
                  <div className="col-sm-7 contentarea">
                    <div className="tabrightitle">
                      <h3>Be Straightforward And Loyal About Your App</h3>
                    </div>
                    <p>
                      An mobile app just not an app, It is an another way that
                      connect users to your business worldwide. We provide such
                      dynamic app designs and user-friendly interface that helps
                      you to increase your operational efficiency, productivity
                      and customer engagement through Mobile Applications.An
                      innovative mobile idea involves more than a mobile
                      friendly website and is an essential part of marketing
                      strategy now a days. Any business should be straight
                      forward and honest about their business app. Every
                      business app has a different approach according to the
                      business industry.
                    </p>
                    <p>
                      At Logicspice we has expert android app developers and
                      Iphone app developers to provide best mobile solution for
                      both android and Iphones.
                    </p>
                    <p>
                      We provide such dynamic app designs and user-friendly
                      interface that helps you to increase your operational
                      efficiency, productivity and customer engagement through
                      Mobile Applications.
                    </p>
                  </div>
                  <div className="col-sm-5 contentarea">
                    <div className="about__text">
                      <div className="img__about">
                        <Image
                          width={100}
                          height={100}
                          alt="img"
                          src="/img/globalpages/setting_icon.png"
                        />
                      </div>
                      <div className="media-body">
                        <div className="tabrightitle">
                          <div className="rightssdsd">
                            <h3>Minimum Sustainable Functionality</h3>
                            <p>
                              Any app should include key features, relevant
                              content and an attractive UI that elevate it
                              beyond a repackaged website. The navigation of a
                              website should be easy to understand
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="about__text">
                      <div className="img__code">
                        <Image
                          width={100}
                          height={100}
                          alt="img"
                          src="/img/globalpages/code_icn.png"
                        />
                      </div>
                      <div className="media-body">
                        <div className="tabrightitle">
                          <div className="rightssdsd">
                            <h3>Why Logicspice App Development Services</h3>
                            <p>
                              Stuck that how to choose an affordable and best
                              app development company ? We have a lot to show
                              you about our stability. Visit our portfolios and
                              case studies, testimonials and they will shows
                              trust for us. We have dedicated bunch of android
                              and iphone app developers that are able to offer
                              best solution for niche industry.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedTab === "why_we_need" && (
              <div role="tabpanel" className="tab-pane active" id="why_we_need">
                <div className="tab_para">
                  <p>
                    There are many benefits of having an mobile application for
                    your business. Here are the some key points that why a
                    business should have an mobile app –
                  </p>
                  <p>&nbsp;</p>
                  <ul className="listtupe">
                    <li>
                      <b>Increase Customer Engagement – </b>A mobile application
                      is the best way to increase customer engagement towards
                      your business.
                    </li>
                    <li>
                      <b>Improve Client Retention – </b> A mobile app make your
                      business user friendly and attract users to get connect
                      your business from anywhere.
                    </li>
                    <li>
                      <b>Be visible to customers anytime, anywhere – </b>Now
                      move your business beyond it’s limit through an mobile
                      app. Make your business easy to accessible in an small
                      device across the world.
                    </li>
                    <li>
                      <b>Add value to your customers –</b> A mobile application
                      arouse the interest in users about your business and
                      enhance your brand value.
                    </li>
                    <li>
                      <b>Increase brand awareness and recognition – </b>In this
                      online market trend, every business need an digital
                      presence and a brand recognition. A mobile application is
                      the best way to reach major audience.
                    </li>
                    <li>
                      <b>Stand out from the competition – </b>Now spread your
                      business globally and stand out from crowd. Let make your
                      brand its own identity by approaching through mobile app
                      to its right audience.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              height={50}
              width={50}
            />
          </a>
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
