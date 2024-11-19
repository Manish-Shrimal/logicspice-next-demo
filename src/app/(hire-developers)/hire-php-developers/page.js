"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(hire-developers)/hire-developer.css";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Customsolutiontabs from "@/app/Components/Customsolutiontabs";
import Support from "@/app/Components/Support";
import WhyHireFromLogicspice from "@/app/Components/WhyHireFromLogicspice";
import Head from "next/head";
import RootLayout from "./layout";
const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const item = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const testimonialData = [
    {
      id: 1,
      image: "/img/globalbusinesscountries/kesepara.jpg",
      heading: "C2C Ecommerce Website About Fashion",
      text: "&quot;Exactly the best team available online ! I have been working and communicating with a few companies over the internet and i didn&apos;t see a single better company than logicspice. They are",
      name: "Burak",
      location: "Turkey",
    },
    {
      id: 2,
      image: "/img/globalbusinesscountries/dsherevk.jpg",
      heading: "Website + Mobile App (iOs&Android)",
      text: "&quot;&quot;Manish was very cooperative and professional during the project. The team was great, the project was very complicated and they tried their best to complete it with the best diligence. I",
      name: "Dmitry",
      location: "Canada",
    },
    {
      id: 3,
      image: "/img/globalbusinesscountries/sabdeen.jpg",
      heading: "Build a Website",
      text: "&quot;Best project management experience/journey I had. Great team spirit, very flexible and understanding while maintaining time and budget target.Top tear professional communication and support.",
      name: "Sherif A.",
      location: "Dubai",
    },
    {
      id: 4,
      image: "/img/globalbusinesscountries/beatbuehlmann.jpg",
      heading: "Financial Web Application For Pensioners",
      text: "&quot;Excellent work again from logicspice! They definitely put their best effort into the project along with very valuable inputs regarding possible enhancements of the web project. With logicspice",
      name: "Beat B.",
      location: "Switzerland",
    },
    {
      id: 5,
      image: "/img/globalbusinesscountries/tjulia1.jpg",
      heading: "Build a Social Networking Website With Payment System",
      text: "&quot;I hired this team for a very complex project that involved handling many different types of users, payment options, and social network integration. Extremely timely and professional. Will use again!&quot;",
      name: "Tom J.",
      location: "USA",
    },
  ];

  return (
    <>
      <Navbar />
      <section
        // style={}
        className="hire_developer_back_iin otherhire_developer_back_iin"
      >
        <div className="hire_developer_back_iin_mask new-developers-mask">
          <div className="container">
            <div className="row">
              <div className="col-md-8 text-start">
                <h1 className="slide_title">
                  Hire Dedicated PHP Developer Immediately
                </h1>
                <div className="subinstet">
                  Hire PHP web developer from the hub of talented developers to
                  attain your development needs.
                </div>
                <div className="developer-servicees-bx">
                  <div className="developer-servicees">
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span>PHP Security Best Practices</span>
                  </div>
                  <div className="developer-servicees">
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span> Best fit PHP Extensions and Libraries</span>
                  </div>
                  <div className="developer-servicees">
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span>Robust RESTful API Development</span>
                  </div>
                  <div className="developer-servicees">
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span> Mastery of PHP Design Patterns</span>
                  </div>
                  <div className="developer-servicees">
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span> Scalable & High-Performance Applications</span>
                  </div>
                </div>
                <div className="nt_cdl">
                  <a onClick={toggleModal} className="btn btn-primary">
                    <Contactusmodel
                      modalStatus={modalOpen}
                      toggle={toggleModal}
                    />
                    Hire Now!
                  </a>
                  <a
                    href="javascript:$zopim.livechat.window.show();"
                    className="btn btn-primary"
                  >
                    Chat with a Developer
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cack_logo_img">
                  <Image
                    alt="Hire Android App Developers"
                    src="/img/hiredevelopers/hire_php_developer.png"
                    width={288}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="snop_animation"></div>
        </div>
      </section>
      <section class="dev_flexibility new-hirig-section HireFlexNewSection">
        <div class="container">
          <div class="new-hiring-div">
            <div class="row">
              <div class="col-md-3 col-sm-4 p-0">
                <div class="HireFlexNewImg">
                  <Image
                    width={300}
                    height={500 / (100 / 100)}
                    alt="app development"
                    src="/img/hiredevelopers/hire-women-img.png"
                  />
                </div>
              </div>

              <div class="col-md-9 col-sm-8 p-0">
                <div class="title_heading">Hiring Model </div>
                <div class="row">
                  <div class="col-md-4 col-sm-4">
                    <div class="HireFlexNewTxt">
                      <i>
                        <Image
                          width={41}
                          height={100}
                          alt="app development"
                          src="/img/hiredevelopers/periodic-new-icon.png"
                        />
                      </i>
                      <div class="HireFlexNewHeading">Periodic Basis</div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="HireFlexNewTxt">
                      <i>
                        <Image
                          width={27}
                          height={100}
                          alt="app development"
                          src="/img/hiredevelopers/clock-new-icon.png"
                        />
                      </i>
                      <div class="HireFlexNewHeading">Hourly Basis</div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="HireFlexNewTxt">
                      <i>
                        <Image
                          width={41}
                          height={100}
                          alt="app development"
                          src="/img/hiredevelopers/checklist-new-icon.png"
                        />
                      </i>
                      <div class="HireFlexNewHeading">Project Basis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hiring-sr">
            <div className="row">
              <div className="col-md-6">
                <div className="jumbotron">
                  <h2>Hire PHP programmer</h2>
                  <p>
                    {/* We are an Android-friendly development house offering the
                    opportunity to hire dedicated android app developers to
                    build apps for your business. Our team of android
                    programmers have expertise in developing top android apps
                    for small, medium and large business globally. We are
                    continuously progressing in
                    <a href="https://www.logicspice.com/android-app-development">
                      {" "}
                      android apps development
                    </a>{" "}
                    for past years with a team of dedicated
                    developers&nbsp;towards their skills.&lt;br /&gt;&lt;br
                    /&gt; We keep ourselves updated with the latest technologies
                    so we can meet the client&rsquo;s requirements and deliver
                    high-quality apps. We are one of the emerging platforms that
                    provides amazing Android apps in the market.&lt;br
                    /&gt;&lt;br /&gt; Hire Android app developer in India and
                    other countries on hourly/monthly or fixed price. You get
                    amazing technical support, a quality analyst, a project
                    manager, and an innovative Android app that maximizes your
                    profit to an optimal level.&lt;br /&gt; Let&rsquo;s come
                    forward and hire &lt;strong&gt;&lt;i&gt;android app
                    programmer&lt;/i&gt;&lt;/strong&gt; who can convert your
                    ideas into mobile apps. */}
                    Are you looking to hire PHP expert hand for your custom web
                    application development? Or looking for a highly
                    professional offshore
                    <Link href="/php-development">
                      {" "}
                      PHP development company
                    </Link>{" "}
                    at a low cost? Then, Logicspice is the perfect place to opt
                    out of the solution for custom mobile-friendly PHP web
                    application development. We offer proficient & dedicated PHP
                    developers who have expert-level knowledge and experience of
                    working on different projects, related to diversified
                    industries and with many PHP frameworks like Laravel,
                    CakePHP, Codeigniter, Yii, etc. With hands-on experience in
                    many complex PHP web development projects, we believe in
                    delivering the work with quality, security, and
                    sustainability.
                  </p>
                  <p>
                    Our expert PHP developers have extensive knowledge about
                    every technical feature and the latest PHP versions. We care
                    about our clients, so our programmer understands your PHP
                    web development need and create innovative web applications
                    within your time-frame and budget.
                  </p>
                  <p>
                    The primary goal of our dedicated PHP programmers is giving
                    accomplish work for the client by satisfying their needs. By
                    hiring PHP developers from Logicspice, you will get a high
                    level of stability & functionality with the best PHP web
                    development in this competitive market.
                  </p>
                  <p>
                    Logicspice with the Glorious experience of working over
                    state-of-the-art Projects of numerous industries namely
                    Restaurants, Logistics, health care, Finance, etc serving
                    customers across the globe. Hire PHP developer in India for
                    your project to get a competitive advantage for your project
                    and make your project a huge success. We have the best PHP
                    programmers available for hire, whether you&apos;re in the
                    USA, UK, Australia, or other European countries, ensuring
                    top-notch expertise and quality for your project.
                  </p>
                  <p>
                    The reason we are among the best companies to solve PHP
                    requirements is because of our highly skilled dedicated PHP
                    Programmers, having in-depth knowledge in their field which
                    gives us a competitive edge in today&apos;s cut-throat
                    competition. Hire dedicated php programmers from us as we
                    are having the best pool of talented php web developers to
                    handle the job-related responsibility to the best of their
                    ability without compromising on the quality of work.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <h2>Technical expertise</h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    <span>Skills in PHP & HTML5, CSS3</span>
                  </li>
                  <li className="list-group-item">
                    <span>Experience in working with MySQL</span>
                  </li>
                  <li className="list-group-item">
                    <span>Advanced knowledge of AJAX</span>
                  </li>
                  <li className="list-group-item">
                    <span>Experience in plug-ins implementation</span>
                  </li>
                  <li className="list-group-item">
                    <span>Proficient in JQuery, JavaScript & Bootstrap</span>
                  </li>
                  <li className="list-group-item">
                    <span>
                      Understanding accessibility and security compliance
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="new-custom-section">
        <div className="container">
          <h2>
            Hire dedicated PHP developers in India for the following PHP web
            development solution
          </h2>
          <div class="custom-solution-bx">
            <div class="row">
              <div class="col-md-6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-1"
                        src="/img/hiredevelopers/custom-icon1.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>1. Codeigniter web development</h3>
                      <p>
                        Featured rich & result driven web development solution
                        at affordable price.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-2"
                        src="/img/hiredevelopers/custom-icon2.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>2. Migration solution</h3>
                      <p>
                        Easily use your code to the another project through
                        codeigniter migration to save money and time.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-3"
                        src="/img/hiredevelopers/custom-icon3.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>3. eCommerce solution</h3>
                      <p>
                        Get you eCommerce online store with flexible solution
                        developed by our developers.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-4"
                        src="/img/hiredevelopers/custom-icon4.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>4. Custom module development</h3>
                      <p>
                        Develop modules which suits your business requirement
                        best in application.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-5"
                        src="/img/hiredevelopers/custom-icon5.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>5. Integrate 3rd party API</h3>
                      <p>
                        Our developers have experience in developing 3rd Party
                        API for adding more functionality.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-6"
                        src="/img/hiredevelopers/custom-icon6.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>6. Theme integration</h3>
                      <p>
                        Integrate theme in codeigniter with the help of our
                        codeigniter programmer.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      <section className="dev_step_solution">
        <div className="container">
          <h2 className="title_heading">
            Hire dedicated PHP developer in 5 easy steps
          </h2>
          <div className="step-row">
            <div className="col-md-2">
              <div className="dev-steps">
                <i>
                  <Image
                    alt="step-1"
                    src="/img/hiredevelopers/step-icon1.png"
                    width={64}
                    height={50}
                  />
                </i>
                <h5>Raise Your Request</h5>
              </div>
            </div>
            <div className="col-md-2">
              <div className="dev-steps">
                <i>
                  <Image
                    alt="step-2"
                    src="/img/hiredevelopers/step-icon2.png"
                    width={63}
                    height={50}
                  />
                </i>
                <h5>Discuss Your Requirment</h5>
              </div>
            </div>
            <div className="col-md-2">
              <div className="dev-steps">
                <i>
                  <Image
                    alt="step-3"
                    src="/img/hiredevelopers/step-icon3.png"
                    width={63}
                    height={50}
                  />
                </i>
                <h5>Select Experts</h5>
              </div>
            </div>
            <div className="col-md-2">
              <div className="dev-steps">
                <i>
                  <Image
                    alt="step-4"
                    src="/img/hiredevelopers/step-icon4.png"
                    width={53}
                    height={50}
                  />
                </i>
                <h5>Finalize the Terms</h5>
              </div>
            </div>
            <div className="col-md-2">
              <div className="dev-steps last-step">
                <i>
                  <Image
                    alt="step-5"
                    src="/img/hiredevelopers/step-icon5.png"
                    width={63}
                    height={50}
                  />
                </i>
                <h5>Assign and kick start</h5>
              </div>
            </div>
          </div>
          <div className="step-but">
            <a onClick={toggleModal} className="btn btn-primary">
              <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
              Hire Now!
            </a>
          </div>
        </div>
      </section>

      <section className="portfolio_hire PortfolioWebsiteSlider">
        <div className="container">
          <Slider {...item}>
            <div>
              <div className="row">
                <div className="col-md-6">
                  <div className="port_feat_img">
                    <span>
                      <Image
                        width={851}
                        height={100}
                        src="/img/hiredevelopers/ahmadkadi.png"
                        alt="organicmoringaaustralia"
                      />
                    </span>
                  </div>
                  <div className="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> AhmadKadi
                    </li>
                    <li>
                      <b>Website URL:</b> http://ahmadkadi.com/
                    </li>
                    <li>
                      <b>Framework:</b> php
                    </li>
                    <li>
                      <b>Language:</b> PHP AJAX, jQuery, Java scripts,
                    </li>
                    <li>
                      <b>Database:</b> Mysql
                    </li>
                    <li>
                      <b>Server:</b> Apache
                    </li>
                    <li>
                      <b>Overview:</b> AhmadKadi is a responsive portfolio where
                      users can view portfolio by checking over the artist
                      (admin) name from the landing page. They will then be able
                      to view list of pictures listed over the site in both the
                      landscape and portrait mode. Users will als
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-md-6">
                  <div className="port_feat_img">
                    <span>
                      <Image
                        width={851}
                        height={100}
                        src="/img/hiredevelopers/sattvicsagesolutions.png"
                        alt="organicmoringaaustralia"
                      />
                    </span>
                  </div>
                  <div className="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> Satvicsage
                    </li>
                    <li>
                      <b>Website URL:</b> http://www.sattvicsagesolutions.com/
                    </li>
                    <li>
                      <b>Framework:</b> Saas
                    </li>
                    <li>
                      <b>Language:</b> PHP5.3.x, AJAX, jQuery, Java scripts, XML
                    </li>
                    <li>
                      <b>Database:</b> MySQL
                    </li>
                    <li>
                      <b>Server:</b> Apache
                    </li>
                    <li>
                      <b>Overview:</b> &quot;Sattvic Sage Solutions&quot; is a
                      SaaS system which will serve as an attractive medium for
                      clinics to manage their clients and their details.
                      Customers will be able to login and can manage their
                      accounts, branches and staff details with their roles over
                      SaaS
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-md-6">
                  <div className="port_feat_img">
                    <span>
                      <Image
                        width={851}
                        height={100}
                        src="/img/hiredevelopers/Organic-Moringa.png"
                        alt="organicmoringaaustralia"
                      />
                    </span>
                  </div>
                  <div className="portimagesec_shadow"></div>
                </div>
                <div className="col-md-6">
                  <ul className="port_feat">
                    <li>
                      <b>Website Name:</b> organicmoringaaustralia
                    </li>
                    <li>
                      <b>Website URL:</b>{" "}
                      <a href="http://organicmoringaaustralia.com.au/">
                        http://organicmoringaaustralia.com.au/
                      </a>
                    </li>
                    <li>
                      <b>Framework:</b> PHP
                    </li>
                    <li>
                      <b>Language:</b> PHP-5, AJAX, jQuery, JavaScript
                    </li>
                    <li>
                      <b>Database:</b> MySQLI
                    </li>
                    <li>
                      <b>Server:</b> MySQLI
                    </li>
                    <li>
                      <b>Overview:</b> eCommerce Website
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <WhyHireFromLogicspice testimonialData={testimonialData} />
      <div class="clearfix"></div>
      <section class="enq-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 text-center">
              <a onClick={toggleModal} className="btn btn-primary">
                <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
                Hire Now!
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="latest_feature_product latest_feature_services">
        <div className="container">
          <h2 className="title_main">Other Popular Hire Developer</h2>
          {/* <div className="other-product-box">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/hire-wordpress-experts"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Hire WordPress Developer</h3>
                        <div className="other-project-logo">
                          <Image
                            src="/img/hiredevelopers/wordpress_img.png"
                            alt="wordpress logo"
                            width={70}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            Our expert Wordpress developers offers customized
                            web development at low cost.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/hire-magento-experts"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Hire Magento Developer</h3>
                        <div className="other-project-logo">
                          <Image
                            src="/img/hiredevelopers/magento_img.png"
                            alt="laravel"
                            width={70}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            Hire certified, expert & dedicated Magento
                            developers for full time and hourly.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/hire-cakephp-developers"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Hire CakePHP Developer</h3>
                        <div className="other-project-logo">
                          <Image
                            src="/img/hiredevelopers/cakephp_img.png"
                            alt="Hire Hybrid App Developer"
                            width={70}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            Hire dedicated, fulltime and freelance CakePHP
                            programmers, who have a good mix of knowledge,
                            skills & experience.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          <div class="other-product-box">
            <div class="row">
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <a
                    title="View Detail"
                    target="_black"
                    href="/hire-laravel-developers"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire Laravel Developer</h3>
                        <div class="other-project-logo">
                          <Image
                            src="/img/hiredevelopers/laravel_img.png"
                            alt="laravel logo"
                            width={70}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            Hire dedicated and expert laravel developers to
                            develop high performance Laravel web applications.
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <a
                    title="View Detail"
                    target="_black"
                    href="/hire-node-js-experts"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire Node.JS developer</h3>
                        <div class="other-project-logo">
                          <Image
                            src="/img/hiredevelopers/nodejs-img.png"
                            alt="nodejs logo"
                            width={70}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            Hire Node.js developers and programmers for best
                            NodeJS eCommerce solutions development.
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <a
                    title="View Detail"
                    target="_black"
                    href="/hire-wordpress-experts"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire WordPress Developer</h3>
                        <div class="other-project-logo">
                          <Image
                            src="/img/hiredevelopers/wordpress_img.png"
                            alt="wordpress logo"
                            width={70}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            Our expert Wordpress developers offer customized web
                            development at low cost.
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>{" "}
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
              width={50}
              height={50}
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
