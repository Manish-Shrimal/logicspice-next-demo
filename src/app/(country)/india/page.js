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
import "../../../../public/css/font-awesome.css";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("case-study");
  const [selectedTab, setSelectedTab] = useState("about_app");

  // var settings = {
  //   dots: true,
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1, // Changed from 8 to 1
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };
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
      <section className="country_header_secton india-img">
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
                    India
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
                  Mobile App Development Company In <span>India</span>
                </h1>
                <p style={{ textAlign: "justify" }}>
                  Logicspice is award winning mobile app development company in
                  India offering mobile app development service for android and
                  iOS. Our team of{" "}
                  <Link
                    style={{
                      fontWeight: "bold",
                      textDecoration: "underline",
                      color: "blue",
                    }}
                    href="/mobile-app-development"
                  >
                    mobile app developers
                  </Link>{" "}
                  is creative to give a head start to your mobile app business.
                  Using advanced tools and latest technology, we deliver great
                  mobile apps in India which is highly customizable.
                </p>
                <p style={{ textAlign: "justify" }}>
                  With the team of professional designer & developer, we believe
                  to give best mobile app development solution at your doorstep.
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
                      <h3>Mobile App Developers</h3>
                    </div>
                    <p>
                      Hire our team of mobile app developers in india for top
                      apps. It is your choice to hire android app developers &
                      iphone app developers for full time, part time or fixed
                      cost. We are loaded with expert mobile app developers in
                      india. We deliver quality mobile app developed with
                      customized development and unique designs.
                    </p>
                    <p>
                      Logicspice is offshore iPhone &{" "}
                      <Link
                        href="/android-app-development"
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                          color: "blue",
                        }}
                      >
                        android app development company
                      </Link>{" "}
                      in india specialized in mobile app development having
                      11+years experience in the same industry.
                    </p>
                    <p>
                      Our motto is not only developing a mobile app but to make
                      sure that developed mobile apps are built with latest
                      technologies that fulfill client goals. Logicspice mobile
                      app developers is always having a testing of app to
                      deliver quality result.
                    </p>
                    <p>
                      We are making our clients happy and satisfied since 2006.
                      Unique idea, mindful solution, client satisfaction, user
                      satisfaction, cost effectiveness are the foundation for
                      our success.
                    </p>
                  </div>
                  <div className="col-sm-5 contentarea">
                    <div className="about__text">
                      <div className="img__about">
                        <Image
                          width={140}
                          height={100}
                          alt="img"
                          src="/img/globalpages/setting_icon.png"
                        />
                      </div>
                      <div className="media-body">
                        <div className="tabrightitle">
                          <div className="rightssdsd">
                            <h3>Turn Your Idea Into Reality</h3>
                            <p>
                              We design and develop mobile app which shows
                              presence. Logicspice is a top notch{" "}
                              <b>mobile app development company</b> which has
                              been serving clients for years. We have been
                              listing as a top mobile app development company in
                              india
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="about__text">
                      <div className="img__code">
                        <Image
                          width={40}
                          height={100}
                          alt="img"
                          src="/img/globalpages/code_icn.png"
                        />
                      </div>
                      <div className="media-body">
                        <div className="tabrightitle">
                          <div className="rightssdsd">
                            <h3>
                              Why Logicspice Mobile App Development Services
                            </h3>
                            <p>
                              We have developed award winning mobile apps for
                              top brands. Client satisfaction and reviews makes
                              us successful business. We have dedicated bunch of
                              <b>android and iphone app developers</b> that are
                              able to offer best solution for industry.
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
                  <h2 style={{ fontSize: "30px" }}>Why Mobile App</h2>
                  {/* <p>&nbsp;</p> */}
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
                      move your business beyond it&apos;s limit through an
                      mobile app. Make your business easy to accessible in an
                      small device across the world.
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

      <section className="sectionset_iosands">
        <div className="container">
          <div className="headings">
            <div className="title_heading">
              Hire Mobile App Developers in India
            </div>
            <p className="title_heading_sub">
              Let&apos;s take the first step now and get the results you are looking
              for!
            </p>
          </div>

          <div className="sectionset_iosands_col_bxx">
            <div className="sectionset_iosands_col_bxx_row">
              <div className="row">
                <div className="col-sm-6">
                  <div className="sectionset_iosands_col sectionset_iosands_colcon">
                    <div className="title_heading">iPhone App Development</div>
                    <div className="descectionset_iosands">
                      Do you need the best iOS developer for your online
                      business. Hire from our experienced mobile app development
                      team in india who will not only develop the app, but
                      deliver the app which will give momentum to your business.
                      In the short span of time, we provide excellent and
                      competitive app. Logicspice{" "}
                      <b>iPhone app development team in india</b> consists of
                      designer, developers, expert in balancing the client idea,
                      app quality and efficient handling of technical deadlocks
                      . iPhone Application Development has the potential to give
                      businesses the edge via enhanced customer service and
                      greater access to their target market. Let&apos;s get started
                      with booming iPhone app development company, Logicspice
                      and <b>hire developer iPhone app developers </b> that can
                      offer end-to-end solutions with exceptional coding
                      quality.
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
                    <div className="title_heading">Android App Development</div>
                    <div className="descectionset_iosands" dir="ltr">
                      We deliver highly productive and cost effective android
                      applications. Logicspice have a huge team of experienced
                      developers who remain updated with buzz. We believe that
                      mobile apps should not only be highly customized but
                      actually provide a great user experience that users will
                      remember. Custom android app development not only let you
                      reach to your customers also represent your business
                      brand. Logicspice has delivered highly scalable{" "}
                      <b>android apps in india</b> for a variety of industries
                      like transportation, Hotels, School and Education,
                      Healthcare, Real Estate and many online business startups.
                      We build visually stunning, effective{" "}
                      <b>android applications in india</b> for your smartphone.
                      Visit our portfolio, case study and reviews to build trust
                      in us.
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
