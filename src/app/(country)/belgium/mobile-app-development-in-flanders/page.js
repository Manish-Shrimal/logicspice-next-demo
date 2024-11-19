"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/industries/industry.css";
import Image from "next/image";
import Link from "next/link";
import Contactusmodel from "@/app/Components/Contactusmodel";
// import "../../resposive.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS
import "../../../../../public/css/font-awesome.css";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("case-study");
  const [selectedTab, setSelectedTab] = useState("about_app");
  const CustomPrevArrow = ({ onClick }) => {
    return (
      <button
        type="button"
        className="custom-prev-arrow"
        onClick={onClick}
      >
        {/* You can use an icon, image, or any other content for your custom arrow */}
        {/* <img src="/img/left-arrow.png" alt="Previous" /> */}
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </button>
    );
  };
  
  const CustomNextArrow = ({ onClick }) => {
    return (
      <button
        type="button"
        className="custom-next-arrow"
        onClick={onClick}
      >
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
      <Navbar />
      <section className="country_header_secton flanders">
        <div className="country_header_secton_in">
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
                            unoptimized={true}
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
                            unoptimized={true}
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
                            unoptimized={true}
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
                            unoptimized={true}
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
                            unoptimized={true}
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
                            unoptimized={true}
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
                            unoptimized={true}
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
                            unoptimized={true}
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
                            unoptimized={true}
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
                            unoptimized={true}
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
                            unoptimized={true}
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
                            unoptimized={true}
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
                            unoptimized={true}
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
              <div className="col-md-6">
                <div className="text-center main-ind-text">
                  <div className="country_header_secton_right_data1">
                    Outstanding
                  </div>
                  <div className="country_header_secton_right_data2">
                    Business Apps
                  </div>
                  <div className="foradd">for</div>
                  <div className="country_header_secton_right_countryname">
                    Flanders
                  </div>
                  <div className="country_header_secton_right_data3">
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

      <section className="mobileapp_devcountry_bx">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="mobileapp_devcountry_bx_left">
                <h1 className="mobileapp_devcountry_bx_left_title">
                  Mobile App Development Company In <span>Flanders</span>
                </h1>
                <p style={{ textAlign: "justify" }}>
                  Logicspice is an award winning mobile app development company
                  and is serving the app industry since 2006. Our team is
                  commuted to provide best app design and user friendly layouts.
                  We at logicspice try to transform your ideas into successful
                  mobile apps and provide best app developemt services in Dubai
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
              <div className="mobileapp_devcountry_bx_right">
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
      <section className="creativity">
        <div className="container">
          <h3 className="mobileapp_devcountry_bx_left_title">
            We Work With Essence of Creativity
          </h3>
          <p>
            {" "}
            Logicspice is a app development company providing customized web,
            android and iPhone app development solutions with best optimal
            designs and creativity throughout the world including major cities
            of Belgium. App developed by logicspice help businesses to enhance
            their brand presence, trust, loyalty among the current and
            prospective users in the global market.{" "}
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

        <section className="acquainted">
          <div className="container">
            <h3 className="mobileapp_devcountry_bx_left_title">
              We Have Served Our Clients In Belgium
            </h3>
            <p>
              Being acquainted with latest technology & standard tools we have
              delivered thousands of web & mobile application to our clients in
              Belgium and have a team of expert app developers who can serve you
              for any complex project or any new concepts. Check out our client
              project portfolio ..{" "}
            </p>

            <Slider {...settings}>
              <div className="slide">
                <div className="ClientSlideBx">
                  <div className="row">
                    <div className="col-md-4">
                      <Image
                        width={500}
                        height={100}
                        unoptimized={true}
                        src="/img/globalpages/9da70_Uuuga.png"
                        alt="..."
                        className="img-thumbnail"
                      />
                    </div>
                    <div className="col-md-8">
                      <h4>Uuuga</h4>
                      <p>
                        The application serves as &quot;Online Marketplace Android &
                        iPhone app&quot; which is an entry level app for the buyers.
                        Buyer would be able to upload there CVs and would be
                        able to capture the video resume or requirement in the
                        form of video and then the buyers CV would be matched as
                        per the requirement and the review of video resume would
                        be done . If the buyer shortlists the resource
                        <Link href="/case-study/uuuga" target="_blank">
                          Read More..
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="testimonial-country">
                    <div className="slide">
                      <div className="right_side_testi">
                        <div className="quotes_img">
                          <Link href="/">
                            <Image
                              width={100}
                              height={100}
                              unoptimized={true}
                              src="/img/globalpages/quotes.png"
                              alt="quotes-img"
                            />
                          </Link>
                        </div>
                        <div className="cilent_text">
                        &quot;We have worked on several projects with same 5star
                          experience. Great Job!&quot;
                        </div>
                        <div className="cilent_name">
                          <span>
                            <strong className="flag">
                              <Image
                                width={25}
                                height={100}
                                unoptimized={true}
                                src="/img/globalpages/belg.png"
                                alt="belgium"
                              />
                            </strong>{" "}
                            peterbrysse
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="ClientSlideBx">
                  <div className="row">
                    <div className="col-md-4">
                      <Image
                        width={500}
                        height={100}
                        unoptimized={true}
                        src="/img/globalpages/GigMinute.png"
                        alt="..."
                        className="img-thumbnail"
                      />
                    </div>
                    <div className="col-md-8">
                      <h4>Gigminute</h4>
                      <p>
                        Gigminute, is an event marketplace website, that will
                        provide a platform to the event planners/hosts and
                        artists (Actors, Musicians, and Speakers) to get in
                        touch with each other. This website will facilitate
                        event planners and artists to register over the website.
                        Where artists can list themselves with their pictures,
                        videos (YouTube), and review rating etc. with free
                        <Link
                          href="/case-study/gigminute"
                          target="_blank"
                        >
                          Read More..
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="testimonial-country">
                    <div className="slide">
                      <div className="right_side_testi">
                        <div className="quotes_img">
                          <Link href="/">
                            <Image
                              width={100}
                              height={100}
                              unoptimized={true}
                              src="/img/globalpages/quotes.png"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="cilent_text">
                        &quot;I have been working with Manish and his team for 2
                          years now. We hire him regularly to improve our
                          platform. The developers are very good and the codes
                          are clean. So far, they have always been able to meet
                          our requirements and make their best to satisfy us.
                          They should just pay more attention to design details.
                          I will clearly continue working with them in the
                          future if their prices remain in line with the Market
                          average. We know that we can trust them and this is a
                          very important point for us. Thanks for the good work,
                          Olivier&quot;
                        </div>
                        <div className="cilent_name">
                          <span>
                            <strong className="flag">
                              <Image
                                width={25}
                                height={100}
                                unoptimized={true}
                                alt="Global Page"
                                src="/img/globalpages/belg.png"
                              />
                            </strong>{" "}
                            Gdoli{" "}
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
        <section className="sectionset_iosands">
          <div className="container">
            <div className="headings">
              <div className="title_heading">
                This Is How We Can <span>Help</span> You
              </div>
              <p className="title_heading_sub">
                Let&apos;s take the first step now and get the results you are
                looking for!
              </p>
            </div>

            <div className="sectionset_iosands_col_bxx">
              <div className="sectionset_iosands_col_bxx_row">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="sectionset_iosands_col sectionset_iosands_colcon">
                      <div className="title_heading">
                        iPhone App Development
                      </div>
                      <div className="descectionset_iosands">
                        Hiring a mobile app development company is not a final
                        step towards getting a user-friendly business app. Let&apos;s
                        get started with booming iPhone app development company,
                        Logicspice and hire iPhone app developers that can offer
                        end-to-end solutions with exceptional coding quality to
                        get fresh &amp; innovative business apps. Our dedicated
                        iPhone app developers will just not develop your
                        business app but also show keen interest in
                        understanding your business requirement. Access our
                        company portfolio, client&apos;s reference and case studies
                        to know that how logicspice is continuously serving in
                        iphone app development industry. Developing an app is
                        just not about only coding, It&apos;s about making the app
                        more functional, attractive and user friendly to get
                        more user attentions.
                      </div>
                      <div className="more_btn">
                        <Link
                          href="/hire-ios-app-developers"
                          className="btn btn-primary"
                        >
                          <span>Hire iOS Developer</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="sectionset_iosands_col sectionset_iosands_image">
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
              <div className="sectionset_iosands_col_bxx_row sectionset_iosands_col_bxx_row_Right">
                <div className="row">
                  <div className="col-sm-6 pull-right">
                    <div className="sectionset_iosands_col sectionset_iosands_colcon">
                      <div className="title_heading">
                        Android App Development
                      </div>
                      <div className="descectionset_iosands" dir="ltr">
                        Let discuss what you need in your business app with our
                        dedicated team of android app developers. Hire android
                        app developers to stand in android app market with
                        astounding and attractive business apps for android
                        phone. We at logicspice ensure that our clients are
                        getting full exposure with android mobile apps that we
                        have developed for them. The team of expert android app
                        developers at logicspice provide seamless integration
                        &amp; customization in android app development and has
                        developed apps that are fully supported with all android
                        versions. Logicspice has delivered highly scalable
                        android apps for variety of industries like
                        transportation, Hotels, School and Education, Health
                        Care, Real Estate and many online business start-ups.
                      </div>
                      <div className="more_btn">
                        <Link
                          className="btn btn-primary"
                          href="/hire-android-app-developers"
                        >
                          <span>Hire Android Developer</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 pull-left">
                    <div className="sectionset_iosands_col sectionset_iosands_image">
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
        <section className="advantages-country">
          <div className="container">
            <h2>Advantages of mobile app development with Logicspice</h2>
            <div className="detail-advant">
              <div className="row">
                <div className="col-md-6 left-detail-advant">
                  {" "}
                  <strong>
                    {" "}
                    Detailed Research & analysis of your app requirements
                  </strong>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 right-detail-advant ms-auto">
                  {" "}
                  <strong>Worked on latest technology & standard tools</strong>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 left-detail-advant">
                  {" "}
                  <strong>
                    Highly experienced developers with extreme coding quality
                  </strong>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 right-detail-advant ms-auto">
                  {" "}
                  <strong>100% confidentiality - strict NDA terms </strong>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 left-detail-advant">
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
