"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/industries/industry.css";
import Image from "next/image";
import Link from "next/link";
import Contactusmodel from "@/app/Components/Contactusmodel";
// import "../../resposive.css";
import "../../../../public/css/font-awesome.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("case-study");
  const [selectedTab, setSelectedTab] = useState("about_app");
  const CustomPrevArrow = ({ onClick }) => {
    return (
      <button type="button" className="custom-prev-arrow" onClick={onClick}>
        {/* You can use an icon, image, or any other content for your custom arrow */}
        {/* <img src="/img/left-arrow.png" alt="Previous" /> */}
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </button>
    );
  };

  const CustomNextArrow = ({ onClick }) => {
    return (
      <button type="button" className="custom-next-arrow" onClick={onClick}>
        {/* You can use an icon, image, or any other content for your custom arrow */}
        {/* <img src="/img/right-arrow.png" alt="Next" /> */}
        <i class="fa fa-angle-right" aria-hidden="true"></i>
      </button>
    );
  };
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, // Changed from 8 to 1
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  var date = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, // Changed from 8 to 1
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <>
      {" "}
      <Navbar />
      <section class="country_header_secton usa">
        <div class="country_header_secton_in">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="country_header_secton_mobile_screen">
                  <div class="country_header_secton_mobile_screen_data">
                    <ul>
                      <li>
                        <div class="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            unoptimized={true}
                            alt="Business Apps"
                            src="/img/globalpages/Business-Apps.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div class="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            unoptimized={true}
                            alt="mobile Apps"
                            src="/img/globalpages/mobile-Apps.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div class="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            unoptimized={true}
                            alt="Business Apps Development"
                            src="/img/globalpages/BusinesS-Apps-Development.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div class="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            unoptimized={true}
                            alt="Business App Development Service"
                            src="/img/globalpages/Business-Service.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div class="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            unoptimized={true}
                            alt="Business App Developers"
                            src="/img/globalpages/Business_Developers.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div class="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            unoptimized={true}
                            alt="app-development"
                            src="/img/globalpages/app-development.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div class="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            unoptimized={true}
                            alt="application developers"
                            src="/img/globalpages/application-developers.jpg"
                          />
                        </div>
                      </li>
                      <li>
                        <div class="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            unoptimized={true}
                            alt="mobile apps"
                            src="/img/globalpages/mobile-apps-logicspice.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div class="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            unoptimized={true}
                            alt="app development services"
                            src="/img/globalpages/app-development-services.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div class="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            unoptimized={true}
                            alt="expert app developers"
                            src="/img/globalpages/expert-app-developers.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div class="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            unoptimized={true}
                            alt="android apps development"
                            src="/img/globalpages/android-apps-development.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div class="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            unoptimized={true}
                            alt="mobile apps development"
                            src="/img/globalpages/mobile-apps-development.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div class="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            unoptimized={true}
                            alt="affordable apps"
                            src="/img/globalpages/affordable-apps.png"
                          />
                        </div>
                      </li>
                      <li>
                        <div class="country_icon_screen">
                          <Image
                            width={100}
                            height={100}
                            unoptimized={true}
                            alt="mobile apps-logicspice"
                            src="/img/globalpages/apps-logicspice.png"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="text-center main-ind-text">
                  <div class="country_header_secton_right_data1">
                    Outstanding
                  </div>
                  <div class="country_header_secton_right_data2">
                    Business Apps
                  </div>
                  <div class="foradd">for</div>
                  <div class="country_header_secton_right_countryname">USA</div>
                  <div class="country_header_secton_right_data3">
                    Enhance Your Business With Innovative Mobile Apps
                  </div>
                  <div className="portfolio_button_center">
                    <div id="inquirenow" className="portfolio_button">
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
      <section class="mobileapp_devcountry_bx">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="mobileapp_devcountry_bx_left">
                <h1 class="mobileapp_devcountry_bx_left_title">
                  Mobile App Development Company In <span>USA</span>
                </h1>
                <p style={{ textAlign: "justify" }}>
                  Logicspice, USA is a leading mobile app development company.
                  We follow the different technology, It begins with
                  understanding the actual requirement of clients. The process
                  starts with designing and development and end till the launch.
                  We do the testing with high quality standard software. We have
                  a developers who are having years. of experience to convert
                  your imagination into a a powerful app for you and all your
                  customers.
                </p>
                <p style={{ textAlign: "justify" }}>
                  We are one the most proficient company in creating user
                  friendly apps for all the major platforms. We utilize advanced
                  technology in the development process and deliver great user
                  experience. We have the skills and experience to create both
                  iOS and Android App.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="mobileapp_devcountry_bx_right">
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
      <section class="creativity">
        <div class="container">
          <h3 class="mobileapp_devcountry_bx_left_title">
            We Work With Essence of Creativity
          </h3>
          <p>
            {" "}
            Logicspice is a app development company providing customized web,
            android and iPhone app development solutions with best optimal
            designs and creativity throughout the world including major cities
            of USA. App developed by logicspice help businesses to enhance their
            brand presence, trust, loyalty among the current and prospective
            users in the global market.{" "}
          </p>
        </div>
      </section>
      <section>
        <section className="app_shown_describe">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="app_shown_describe_left">
                  <div
                    className="app_shown_describe_bx aos-init aos-animate"
                    data-aos="fade-left"
                  >
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
                  <div
                    className="app_shown_describe_bx aos-init aos-animate "
                    data-aos="fade-left"
                  >
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
                  <div
                    className="app_shown_describe_bx aos-init aos-animate "
                    data-aos="fade-left"
                  >
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
                  <div
                    className="app_shown_describe_bx aos-init aos-animate "
                    data-aos="fade-right"
                  >
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
                  <div
                    className="app_shown_describe_bx aos-init aos-animate "
                    data-aos="fade-right"
                  >
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
                  <div
                    className="app_shown_describe_bxt aos-init aos-animate "
                    data-aos="fade-right"
                  >
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
                        connect users to your business worldwide. We provide
                        such dynamic app designs and user-friendly interface
                        that helps you to increase your operational efficiency,
                        productivity and customer engagement through Mobile
                        Applications.An innovative mobile idea involves more
                        than a mobile friendly website and is an essential part
                        of marketing strategy now a days. Any business should be
                        straight forward and honest about their business app.
                        Every business app has a different approach according to
                        the business industry.
                      </p>
                      <p>
                        At Logicspice we has expert android app developers and
                        Iphone app developers to provide best mobile solution
                        for both android and Iphones.
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
                                you about our stability. Visit our portfolios
                                and case studies, testimonials and they will
                                shows trust for us. We have dedicated bunch of
                                android and iphone app developers that are able
                                to offer best solution for niche industry.
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
                <div
                  role="tabpanel"
                  className="tab-pane active"
                  id="why_we_need"
                >
                  <div className="tab_para">
                    <p>
                      There are many benefits of having an mobile application
                      for your business. Here are the some key points that why a
                      business should have an mobile app –
                    </p>
                    {/* <p>&nbsp;</p> */}
                    <ul className="listtupe">
                      <li>
                        <b>Increase Customer Engagement – </b>A mobile
                        application is the best way to increase customer
                        engagement towards your business.
                      </li>
                      <li>
                        <b>Improve Client Retention – </b> A mobile app make
                        your business user friendly and attract users to get
                        connect your business from anywhere.
                      </li>
                      <li>
                        <b>Be visible to customers anytime, anywhere – </b>Now
                        move your business beyond it&apos;s limit through an
                        mobile app. Make your business easy to accessible in an
                        small device across the world.
                      </li>
                      <li>
                        <b>Add value to your customers –</b> A mobile
                        application arouse the interest in users about your
                        business and enhance your brand value.
                      </li>
                      <li>
                        <b>Increase brand awareness and recognition – </b>In
                        this online market trend, every business need an digital
                        presence and a brand recognition. A mobile application
                        is the best way to reach major audience.
                      </li>
                      <li>
                        <b>Stand out from the competition – </b>Now spread your
                        business globally and stand out from crowd. Let make
                        your brand its own identity by approaching through
                        mobile app to its right audience.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section class="acquainted">
          <div class="container">
            <h3 class="mobileapp_devcountry_bx_left_title">
              We Have Served Our Clients In USA
            </h3>
            <p>
              Being acquainted with latest technology & standard tools we have
              delivered thousands of web & mobile application to our clients in
              USA and have a team of expert app developers who can serve you for
              any complex project or any new concepts. Check out our client
              project portfolio ..{" "}
            </p>

            <Slider {...settings}>
              <div className="slide">
                <div class="ClientSlideBx">
                  <div class="row">
                    <div class="col-md-4">
                      <Image
                        width={500}
                        height={100}
                        unoptimized={true}
                        src="/img/globalpages/b99da_Physical-EDGE.png"
                        alt="..."
                        class="img-thumbnail"
                      />
                    </div>
                    <div class="col-md-8">
                      <h4>Physical EDGE</h4>
                      <p>
                        The application serves as “Physical Edge�? iPhone App.
                        Here teachers can view lessons or activities posted over
                        the app by admin or other teachers and can export the
                        lessons via email. The app can facilitate teachers to
                        register over app and can browse through the activities
                        listed either by everyone or by friends also. They can
                        post their likes{" "}
                        <Link
                          href="/case-study/physical-edge"
                          target="_blank"
                        >
                          Read More..
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div class="testimonial-country">
                    <div class="slide">
                      {/* <!--                        <div class="left_side_testi">
                            <div class="cilent_img"> 
                                <Image width={100} height={100} unoptimized={true} src="/img/globalpages/no-img-client.png" alt="">                          </div> 
                            <div class="cilent_name">
                                <span><strong class="flag"><Image width={100} height={100} unoptimized={true} src="/img/globalpages/usa.png" /></strong> Michael Hodges</span>
                                
                            </div>

                        </div>--> */}
                      <div class="right_side_testi">
                        <div class="quotes_img">
                          <Link href="/">
                            <Image
                              width={100}
                              height={100}
                              unoptimized={true}
                              src="/img/globalpages/quotes.png"
                              alt="quotes"
                            />
                          </Link>
                        </div>
                        <div class="cilent_text">
                          Cannot express my gratitude enough. Manish and the
                          team went above and beyond to meet my needs, that at
                          times were changing constantly. They were patient and
                          diligent to make my app perfect. Thank you VERY MUCH!!
                          I AM VERY HAPPY.
                        </div>
                        <div class="cilent_name">
                          <span>
                            <strong class="flag">
                              <Image
                                width={25}
                                height={100}
                                unoptimized={true}
                                src="/img/globalpages/usa.png"
                                alt="usa"
                              />
                            </strong>{" "}
                            Michael Hodges
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div class="ClientSlideBx">
                  <div class="row">
                    <div class="col-md-4">
                      <Image
                        width={500}
                        height={100}
                        unoptimized={true}
                        src="/img/globalpages/Askoureinstein.png"
                        alt="..."
                        class="img-thumbnail"
                      />
                    </div>
                    <div class="col-md-8">
                      <h4>Ask Our Einstein</h4>
                      <p>
                        &quot;AskOurEinstein&quot; is a tutoring website, which
                        will provide tutoring service. Tutors from all areas of
                        academic including math, science, engineering,
                        chemistry, accounting, finance, biology, economics,
                        computer science, web development, foreign language,
                        history, English, etc. will serve Student/Clients with
                        their guidance. “ASK OUR EINSTEIN�? will not only{" "}
                        <Link
                          href="/case-study/askoureinstein"
                          target="_blank"
                        >
                          Read More..
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div class="testimonial-country">
                    <div class="slide">
                      {/* <!--                        <div class="left_side_testi">
                            <div class="cilent_img"> 
                                <Image width={100} height={100} unoptimized={true} src="/img/globalpages/no-img-client.png" alt="">                            </div> 
                            <div class="cilent_name">
                                <span><strong class="flag"><Image width={100} height={100} unoptimized={true} src="/img/globalpages/usa.png" /></strong> Dclark24 </span>
                                
                            </div>

                        </div>--> */}
                      <div class="right_side_testi">
                        <div class="quotes_img">
                          <Link href="/">
                            <Image
                              width={100}
                              height={100}
                              unoptimized={true}
                              src="/img/globalpages/quotes.png"
                              alt="quotes"
                            />
                          </Link>
                        </div>
                        <div class="cilent_text">
                          &quot;Manish and team were very helpful and
                          professional. This was a very aggressive project with
                          a tight timeline and it was ultimately completed to my
                          satisfaction.&quot;
                        </div>
                        <div class="cilent_name">
                          <span>
                            <strong class="flag">
                              <Image
                                width={25}
                                height={100}
                                unoptimized={true}
                                src="/img/globalpages/usa.png"
                                alt="usa"
                              />
                            </strong>{" "}
                            Dclark24{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>

        <section class="sectionset_iosands">
          <div class="container">
            <div class="headings">
              <div class="title_heading">
                This Is How We Can <span>Help</span> You
              </div>
              <p class="title_heading_sub">
                Let&apos;s take the first step now and get the results you are
                looking for!
              </p>
            </div>

            <div class="sectionset_iosands_col_bxx">
              <div class="sectionset_iosands_col_bxx_row">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="sectionset_iosands_col sectionset_iosands_colcon">
                      <div class="title_heading">iPhone App Development</div>
                      <div class="descectionset_iosands">
                        You will get a large list of iPhone app development
                        company in USA to hire, but what is the use of companies
                        when they don’t understand the methodology and
                        understand the clients. Our iPhone app development
                        begins with understanding of clients, what they really
                        needs which follows the process of designing and
                        development and make the rest best. After a successful
                        iPhone app development, our quality team will make sure
                        to give bug free app. We follow the trends and launch
                        the app to get maximum user attention. Access our
                        company portfolio to know how logicspice is continuously
                        serving their clients and serving them with great
                        satisfaction. Developing is an app is not just a coding,
                        it’s your business which will generate the maximum
                        revenue in future.
                      </div>
                      <div class="more_btn">
                        <Link
                          href="/hire-ios-app-developers"
                          class="btn btn-primary"
                        >
                          <span>Hire iOS Developer</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="sectionset_iosands_col sectionset_iosands_image">
                      <Image
                        width={425}
                        height={100 / (100 / 100)}
                        unoptimized={true}
                        alt="iphone app development Company"
                        src="/img/globalpages/iphone-app-development.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="sectionset_iosands_col_bxx_row sectionset_iosands_col_bxx_row_Right">
                <div class="row">
                  <div class="col-sm-6 pull-right">
                    <div class="sectionset_iosands_col sectionset_iosands_colcon">
                      <div class="title_heading">Android App Development</div>
                      <div class="descectionset_iosands">
                        An iOS app can bring a drastic change in your business.
                        Our iOS app developers use high advance technology and
                        know user intent very well. Logicspice moto is not only
                        make clients happy, but also make customers happy. Being
                        one of the best iOS app development company, we promise
                        to deliver a dynamic app which delivers you a great
                        business. If you think that your idea can become a next
                        big thing in play store, then you are welcomed to share
                        your idea with us. We always value your ideas. We have
                        already delivered no. of successful projects in the
                        numerous industry, i.e travel, health, ecommerce and
                        more. The team of expert Android app developers at
                        logicspice provide seamless integration &amp;
                        customization in android app development and has
                        developed apps that are fully supported with all android
                        versions.
                      </div>
                      <div class="more_btn">
                        <Link
                          class="btn btn-primary"
                          href="/hire-android-app-developers/"
                        >
                          <span>Hire Android Developer</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 pull-left">
                    <div class="sectionset_iosands_col sectionset_iosands_image">
                      <Image
                        width={425}
                        height={100 / (100 / 100)}
                        unoptimized={true}
                        alt="Android App Development Company"
                        src="/img/globalpages/android-app-development.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="advantages-country">
          <div class="container">
            <h2>Advantages of mobile app development with Logicspice</h2>
            <div class="detail-advant">
              <div class="row">
                <div class="col-md-6 left-detail-advant">
                  {" "}
                  <strong>
                    {" "}
                    Detailed Research & analysis of your app requirements
                  </strong>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 right-detail-advant ms-auto">
                  {" "}
                  <strong>Worked on latest technology & standard tools</strong>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 left-detail-advant">
                  {" "}
                  <strong>
                    Highly experienced developers with extreme coding quality
                  </strong>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 right-detail-advant ms-auto">
                  {" "}
                  <strong>100% confidentiality - strict NDA terms </strong>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 left-detail-advant">
                  {" "}
                  <strong>Continuous evaluation of development</strong>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
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
