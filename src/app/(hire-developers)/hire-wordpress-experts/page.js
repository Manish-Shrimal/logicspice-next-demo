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
                <h1 class="slide_title">Hire WordPress Developer</h1>
                <div class="subinstet">
                  Hire dedicated wordpress developer from the hub of talented
                  developers to attain your development needs.
                </div>
                <div class="developer-servicees-bx">
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Quick & Agile</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Cost Effective Solution</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Varied Industry Experience</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Transparency with client</span>
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
                    src="/img/hiredevelopers/hire_wordpress_developer.png"
                    width={263}
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
          <div class="hiring-sr">
            <div class="row">
              <div class="col-md-6">
                <div class="jumbotron">
                  <h2>Hire wordpress experts</h2>
                  <p>
                    <strong>
                      <i>Hire wordpress developers</i>
                    </strong>{" "}
                    &nbsp;from logicspice at cost effective rates who are
                    experts in complex wordPress CMS programming. Our wordpress
                    developers are enriched with amazing skills that enable
                    which let them complex projects perfectly. Our wordpress
                    programmers are updated with the latest version of
                    wordpress, and capable of building a custom wordpress
                    website.
                    <br />
                    <br />
                    Hire
                    <Link href="/wordpress-web-development">
                      wordpress website developer
                    </Link>
                    from us to maximize strength of your business. Our
                    developers are engaged in multiple web development projects
                    and deliver highly reliable, efficient and quality results.
                    <br />
                    <br />
                    We are the best WordPress development company to
                    <strong>
                      <i>hire WordPress programmer in India</i>
                    </strong>{" "}
                    for the last 18 + years, we also offer WordPress designers
                    for hire. We follow the transparent work process to ensure
                    our clients about their project completion within the
                    desired time frame. We have successfully developed many
                    projects, so hire us for Front-End and Back-End solutions.
                    <br />
                    <br />
                    All WordPress developers are focused on achieving success in
                    every web development project.
                    <strong>
                      <i>Hire WordPress developers in India</i>
                    </strong>{" "}
                    as long as you need them to get success in your business in
                    this competitive edge.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <h2>Technical expertise</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <span>Skills in HTML and CSS</span>
                  </li>
                  <li class="list-group-item">
                    <span>PHP and Javascript/span&gt;</span>
                  </li>
                  <li class="list-group-item">
                    <span>Greater database knowledge</span>
                  </li>
                  <li class="list-group-item">
                    <span>Expert in SQL</span>
                  </li>
                  <li class="list-group-item">
                    <span>Experience in wordpress plugin development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="new-app-section">
        <div className="container">
          <h2 className="title_heading">
            {" "}
            Hire WordPress developer in India for the following WordPress
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
                      <h3>1. Wordpress web development</h3>
                      <p>
                        Get an amazing &amp; advanced e-Commerce solution for
                        your business.
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
                      <h3>2. Wordpress shopping cart solution</h3>
                      <p>
                        Powerful, easy-to-use, secure, and fully functional
                        shopping cart solution for your online store.
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
                      <h3>3. Wordpress plugin development</h3>
                      <p>
                        Build your own plugins and themes with the help of our
                        WordPress developer.
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
                      <h3>4. Wordpress migration solutions</h3>
                      <p>
                        Effective plugins migrate with WordPress websites to add
                        more functionality.
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
                      <h3>5. Theme Design Integration</h3>
                      <p>
                        Building amazing customized wordpress themes to meet
                        your business goals.
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
                      <h3>6. Wordpress CMS development</h3>
                      <p>
                        Best wordpress CMS tools for providing amazing
                        experience on mobile or web.
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
            Hire expert wordpress developer in 5 easy steps
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
              <div class="row">
                <div class="col-md-6">
                  <div class="port_feat_img">
                    <span>
                      <Image
                        width={851}
                        height={100}
                        src="/img/hiredevelopers/uavvision.png"
                        alt="Logicspice wordpress portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> Uav Vision
                    </li>
                    <li>
                      <b>Website URL:</b> http://www.uavvision.com/
                    </li>
                    <li>
                      <b>Framework:</b> WordPress
                    </li>
                    <li>
                      <b>Language:</b> PHP5, AJAX, jQuery, Java scripts
                    </li>
                    <li>
                      <b>Database:</b> MySQL
                    </li>
                    <li>
                      <b>Server:</b> Apache
                    </li>
                    <li>
                      <b>Overview:</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div class="row">
                <div class="col-md-6">
                  <div class="port_feat_img">
                    <span>
                      <Image
                        width={851}
                        height={100}
                        src="/img/hiredevelopers/dagrella.png"
                        alt="Logicspice wordpress portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> Dagrella
                    </li>
                    <li>
                      <b>Website URL:</b> http://www.dagrella.com/
                    </li>
                    <li>
                      <b>Framework:</b> WordPress CMS (4.3)
                    </li>
                    <li>
                      <b>Language:</b> PHP-5, AJAX, Jquery, Java scripts
                    </li>
                    <li>
                      <b>Database:</b> MySQL
                    </li>
                    <li>
                      <b>Server:</b> Apache
                    </li>
                    <li>
                      <b>Overview:</b> Law Firm Website
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div class="row">
                <div class="col-md-6">
                  <div class="port_feat_img">
                    <span>
                      <Image
                        width={851}
                        height={100}
                        src="/img/hiredevelopers/aikinnebandy.png"
                        alt="Logicspice wordpress portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> AikinneBandy
                    </li>
                    <li>
                      <b>Website URL:</b> http://www.aikinnebandy.se/
                    </li>
                    <li>
                      <b>Framework:</b> WordPress CMS (4.3)
                    </li>
                    <li>
                      <b>Language:</b> PHP-5, AJAX, Jquery, Java scripts
                    </li>
                    <li>
                      <b>Database:</b> MySQL
                    </li>
                    <li>
                      <b>Server:</b> Apache
                    </li>
                    <li>
                      <b>Overview:</b> Law Firm Website
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div class="row">
                <div class="col-md-6">
                  <div class="port_feat_img">
                    <span>
                      <Image
                        width={851}
                        height={100}
                        src="/img/hiredevelopers/nationalcleaninggroup--2-.png"
                        alt="Logicspice wordpress portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> National Cleaning Group
                    </li>
                    <li>
                      <b>Website URL:</b> http://nationalcleaninggroup.com.au/
                    </li>
                    <li>
                      <b>Framework:</b> Joomla
                    </li>
                    <li>
                      <b>Language:</b> PHP5, AJAX, jQuery, Java scripts
                    </li>
                    <li>
                      <b>Database:</b> MySQL
                    </li>
                    <li>
                      <b>Server:</b> Apache
                    </li>
                    <li>
                      <b>Overview:</b> Company/Informational Website
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div class="row">
                <div class="col-md-6">
                  <div class="port_feat_img">
                    <span>
                      <Image
                        width={851}
                        height={100}
                        src="/img/hiredevelopers/protroc.png"
                        alt="Logicspice wordpress portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> protroc
                    </li>
                    <li>
                      <b>Website URL:</b> http://protroc.com/
                    </li>
                    <li>
                      <b>Framework:</b> WordPress
                    </li>
                    <li>
                      <b>Language:</b> PHP5, AJAX, jQuery, Java scripts
                    </li>
                    <li>
                      <b>Database:</b> MySQL
                    </li>
                    <li>
                      <b>Server:</b> Apache
                    </li>
                    <li>
                      <b>Overview:</b> Classified Website
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
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/hire-magento-experts"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire Magento Developer</h3>
                        <div class="other-project-logo">
                        <Image
                            src="/img/hiredevelopers/magento_img.png"
                            alt="laravel"
                            width={70}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            Hire certified, expert &amp; dedicated Magento
                            developers for full time and hourly.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/hire-cakephp-developers"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire CakePHP Developer</h3>
                        <div class="other-project-logo">
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
                            skills &amp; experience.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <Link
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
                            alt="laravel"
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
                  </Link>
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
