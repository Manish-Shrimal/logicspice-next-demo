"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "@/app/company/company.css";
import NavBar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../../public/css/font-awesome.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  // var settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 7,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 3000,
  //   margin: 20,
  // };

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: false,
    margin: 20,
    responsive: [
      {
        breakpoint: 1200, // For screens smaller than 1200px
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992, // For screens smaller than 992px
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576, // For screens smaller than 576px
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  var settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    margin: 20,
    responsive: [
      {
        breakpoint: 1200, // For screens smaller than 1200px
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992, // For screens smaller than 992px
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576, // For screens smaller than 576px
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      const script = document.createElement("script");
      script.src =
        "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.6&appId=1945351702357034";
      script.async = true;
      script.onload = () => {
        window.FB.XFBML.parse();
      };
      document.body.appendChild(script);
    }
  }, []);
  return (
    <>
      <NavBar />
      <section class="CompanyResourcesHeader">
        <div class="container">
          <h1>Our Company</h1>
          <p>
            LogicSpice is a team of experienced and enthusiastic experts
            providing software development services for mobile app and web
            development.
          </p>
        </div>
        <div class="OurCompanyBanner">
          <Image
            width={1600}
            height={100}
            src="/img/ourteam/companybannerimg.png"
            alt="Comapny"
          />
        </div>
      </section>
      <section class="WhoWeAreSection">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-9">
              <div class="WhoWeAreBx">
                <h2>Who We Are</h2>
                <p>
                  LogicSpice specializes in providing efficient software
                  development services. Our services include mobile app and web
                  development, with a focus on Android and iPhone app
                  development. We do lots of complex web application
                  programming. Our seasoned and efficient team is committed to
                  delivering robust, user-friendly, and efficient applications
                  designed to optimize day-to-day business operations.
                  Established in 2006 and headquartered in Jaipur, India,
                  LogicSpice is your trusted partner for turning digital ideas
                  into reality.
                </p>
                <p>
                  We provide a comprehensive range of web and app
                  technology-related services. Our offerings encompass website
                  design, digital marketing, custom web application development,
                  e-commerce solutions, software testing, software maintenance,
                  project management and consulting. Our mission is to empower
                  our customers with cutting-edge technology, equipping them to
                  thrive in the dynamic and ever-evolving e-Business landscape.
                </p>
                <p>
                  Currently, our customer base spans across INDIA, EUROPE, USA,
                  UK, AUSTRALIA, and the Middle East. Our vision is to drive
                  transformative changes within the information
                  technology-driven economy. We take pride in our reputation and
                  uphold a customer-centric approach, emphasizing flexibility
                  and friendliness because we value long-term relationships with
                  our clients. We believe in giving our clients full authority,
                  allowing them direct control over their projects, and
                  providing unwavering support every step of the way. Our area
                  of expertise is centered around the provision of in-depth
                  custom and ready-made solutions, meticulously designed to meet
                  your unique requirements.
                </p>
                <p>
                  In addition to this, we excel in website promotion strategies
                  and top-tier SEO services, ensuring that our customers get
                  best ROI (Return on Investment) and we also ensure that your
                  online presence reaches its full potential.
                </p>
                <p>
                  We understand that the success of your business hinges on
                  generating substantial profits. Therefore, we tailor our
                  solutions to help you achieve your objectives effectively.
                  Additionally, we continuously identify fresh opportunities to
                  support your growth, all while minimizing the associated
                  costs.
                </p>
                <p>
                  At LogicSpice, our unwavering commitment is to attain the
                  highest levels of customer satisfaction through the provision
                  of quality, cost-effective, and punctual solutions from our
                  software development. Our relentless pursuit of excellence
                  encompasses not only technical proficiency but also financial
                  acumen, business prowess, and unwavering moral integrity. Our
                  goal is to consistently deliver exceptional value to our
                  clients.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <div className="sidebar_right">
                <div
                  id="tertiary"
                  className="sidebar-container"
                  role="complementary"
                >
                  <div className="sidebar-inner">
                    <div className="widget-area">
                      <aside id="text-3" className="widget widget_text">
                        <h3 className="widget-title">Like us on Facebook</h3>
                        <div
                          className="fb-page"
                          data-href="https://www.facebook.com/LogicSpice.company"
                          data-tabs="timeline"
                          data-small-header="false"
                          data-adapt-container-width="true"
                          data-hide-cover="false"
                          data-show-facepile="true"
                        >
                          <blockquote
                            cite="https://www.facebook.com/LogicSpice.company"
                            className="fb-xfbml-parse-ignore"
                          >
                            <a href="https://www.facebook.com/LogicSpice.company">
                              LogicSpice
                            </a>
                          </blockquote>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
              <div class="WhoWeAreFutcher">
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="WhoWeAreTxt">
                      <i>
                        <Image
                          width={29}
                          height={100}
                          src="/img/ourteam/arrow-icon.png"
                          alt="icon"
                        />
                      </i>
                      <span>
                        We are your comprehensive destination for project
                        consultation services.
                      </span>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="WhoWeAreTxt">
                      <i>
                        <Image
                          width={29}
                          height={100}
                          src="/img/ourteam/arrow-icon.png"
                          alt="icon"
                        />
                      </i>
                      <span>
                        We offer a complimentary initial analysis of your
                        requirements and provide a free project quote.
                      </span>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="WhoWeAreTxt MinHeights">
                      <i>
                        <Image
                          width={29}
                          height={100}
                          src="/img/ourteam/arrow-icon.png"
                          alt="icon"
                        />
                      </i>
                      <span>
                        We specialize in creating comprehensive and detailed
                        project reports.
                      </span>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="WhoWeAreTxt MinHeights">
                      <i>
                        <Image
                          width={29}
                          height={100}
                          src="/img/ourteam/arrow-icon.png"
                          alt="icon"
                        />
                      </i>
                      <span>
                        We excel in crafting precise project scopes and
                        specifications, often in the form of Request for
                        Proposals (RFPs).
                      </span>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="WhoWeAreTxt">
                      <i>
                        <Image
                          width={29}
                          height={100}
                          src="/img/ourteam/arrow-icon.png"
                          alt="icon"
                        />
                      </i>
                      <span>
                        We assign specialized experts to handle the relevant
                        project modules with precision and expertise.
                      </span>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="WhoWeAreTxt">
                      <i>
                        <Image
                          width={29}
                          height={100}
                          src="/img/ourteam/arrow-icon.png"
                          alt="icon"
                        />
                      </i>
                      <span>
                        We maintain a dedicated quality assurance team to ensure
                        the highest standards of quality in our projects.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="OurGallerySection">
        <h2>Gallery</h2>
      
        <Slider {...settings} className="hidedot OurGallery">
          <div>
            <div class="OurGalleryImg">
              <Image
                width={500}
                height={100}
                src="/img/ourteam/gallery-img1.png"
                alt="icon"
              />
            </div>
          </div>
          <div>
            <div class="OurGalleryImg">
              <Image
                width={500}
                height={100}
                src="/img/ourteam/gallery-img2.png"
                alt="icon"
              />
            </div>
          </div>
          <div>
            <div class="OurGalleryImg">
              <Image
                 width={500}
                height={100}
                src="/img/ourteam/gallery-img3.png"
                alt="icon"
              />
            </div>
          </div>
          <div>
            <div class="OurGalleryImg">
              <Image
                 width={500}
                height={100}
                src="/img/ourteam/gallery-img4.png"
                alt="icon"
              />
            </div>
          </div>
          <div>
            <div class="OurGalleryImg">
              <Image
                width={500}
                height={100}
                src="/img/ourteam/gallery-img5.png"
                alt="icon"
              />
            </div>
          </div>

          <div>
            <div class="OurGalleryImg">
              <Image
                 width={500}
                height={100}
                src="/img/ourteam/gallery-img6.png"
                alt="icon"
              />
            </div>
          </div>
          <div>
            <div class="OurGalleryImg">
              <Image
                 width={500}
                height={100}
                src="/img/ourteam/diwali-img3.png"
                alt="icon"
              />
            </div>
          </div>
          <div>
            <div class="OurGalleryImg">
              <Image
                 width={500}
                height={100}
                src="/img/ourteam/cricket-day.png"
                alt="icon"
              />
            </div>
          </div>
        </Slider>
        
        <Slider {...settings2} className="hidedot OurGallery">
          <div>
            <div class="OurGalleryImg">
              <Image
                 width={500}
                height={100}
                src="/img/ourteam/gallery-img7.png"
                alt="icon"
              />
            </div>
          </div>
          <div>
            <div class="OurGalleryImg">
              <Image
                width={500}
                height={100}
                src="/img/ourteam/gallery-img8.png"
                alt="icon"
              />
            </div>
          </div>
          <div>
            <div class="OurGalleryImg">
              <Image
                 width={500}
                height={100}
                src="/img/ourteam/gallery-img9.png"
                alt="icon"
              />
            </div>
          </div>
          <div>
            <div class="OurGalleryImg">
              <Image
                width={500}
                height={100}
                src="/img/ourteam/gallery-img10.png"
                alt="icon"
              />
            </div>
          </div>
          <div>
            <div class="OurGalleryImg">
              <Image
                 width={500}
                height={100}
                src="/img/ourteam/gallery-img11.png"
                alt="icon"
              />
            </div>
          </div>

          <div>
            <div class="OurGalleryImg">
              <Image
                width={500}
                height={100}
                src="/img/ourteam/gallery-img12.png"
                alt="icon"
              />
            </div>
          </div>
          <div>
            <div class="OurGalleryImg">
              <Image
                width={500}
                height={100}
                src="/img/ourteam/diwali-img1.png"
                alt="icon"
              />
            </div>
          </div>
          <div>
            <div class="OurGalleryImg">
              <Image
                width={500}
                height={100}
                src="/img/ourteam/diwali-img2.png"
                alt="icon"
              />
            </div>
          </div>
        </Slider>
      </section>
      <section class="OurOfficeSection">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6 stickybx">
              <section class="OurOfficeLeft stickybx">
                <div class="OurOfficeBx">
                  <h2>Our Office</h2>
                  <p>
                    LogicSpice specializes in delivering expert software
                    development services encompassing mobile app and web
                    development. Our proficiency extends to Android and iPhone
                    app development, as well as intricate web application
                    programming. With a highly experienced and efficient team,
                    we are committed to crafting robust, user-friendly, and
                    efficient applications tailored to streamline day-to-day
                    business operations. Your digital aspirations are in capable
                    hands with LogicSpice.
                  </p>
                  <div class="OurOfficeImg">
                    <Image
                      width={544}
                      height={100}
                      src="/img/ourteam/our-office-img.png"
                      alt="Our Office"
                    />
                  </div>
                </div>
              </section>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="OurOfficeTxt ">
                <ul>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>
                      Since 2006, LogicSpice excels in expert software
                      development.
                    </span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>
                      40+ experienced full-time professionals on board.
                    </span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>
                      We&apos;ve served 1400+ satisfied clients worldwide.
                    </span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>We&apos;ve catered to clients in 40+ countries.</span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>
                      Our primary focus includes Australia, US, Europe, and the
                      UK.
                    </span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>We excel in managing large, complex projects.</span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>
                      Leading provider of both readymade and custom solutions.
                    </span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>Remote and onsite support without limitations.</span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>Full-fledged IT Management Services</span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>
                      We hold a position in the top 10 on freelancer.com
                    </span>
                  </li>
                  <li>
                    <i>
                      <Image
                        width={29}
                        height={100}
                        src="/img/ourteam/arrow-icon.png"
                        alt="icon"
                      />
                    </i>
                    <span>Highly Qualified and Skilled IT Professionals</span>
                  </li>
                </ul>
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
