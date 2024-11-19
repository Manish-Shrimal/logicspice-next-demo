"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(hire-developers)/hire-developer.css";
import Image from "next/image";
import Link from "next/link";
import "@/app/(softwares)/softwares.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Workingwith from "@/app/Components/Workingwith";
import Certificationtabs from "@/app/Components/Certificationtabs";
import "../../resposive.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Customsolutiontabs from "@/app/Components/Customsolutiontabs";
import Support from "@/app/Components/Support";
import WhyHireFromLogicspice from "@/app/Components/WhyHireFromLogicspice";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log(showModal);

    setShowModal(!showModal);
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
      {/* <section
        // style={}
        className="hire_developer_back_iin otherhire_developer_back_iin"
      >
        <div className="hire_developer_back_iin_mask new-developers-mask">
          <div className="container">
            <div className="row">
              <div className="col-md-7 text-start">
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
              <div className="col-md-5">
                <div className="cack_logo_img">
                  <Image
                    alt="Hire Android App Developers"
                    src="/img/hiredevelopers/hire_wordpress_developer.png"
                    width={350}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="snop_animation"></div>
        </div>
      </section> */}
      <section class="HireYiiDeveloperBanner HireDevelopersBannerText">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <h1 class="MainSlideTitle">Hire Yii Developers</h1>
              <div class="SubTitle">
                Hire yii programmers from the hub of talented developers to
                attain your development needs.
              </div>
              <div class="HireDeveloperServiceesBx">
                <ul>
                  <li>Quick & Agile</li>
                  <li>Cost Effective Solution</li>
                  <li>Varied Industry Experience</li>
                  <li>Transparency with client</li>
                </ul>
              </div>
              <div class="HireDevelopersBannerBtn">
                <div className="btn btn-primary" onClick={openModal}>
                  <button>HIre Now!</button>
                  {
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
                      title="Request for YII Developer"
                    />
                  }
                </div>
                <a
                  href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
                  target="_blank"
                >
                  <div class="WhatsappIcon">
                    <div class="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                      <div class="coccoc-alo-ph-circle"></div>
                      <div class="coccoc-alo-ph-circle-fill"></div>
                      <div class="coccoc-alo-ph-img-circle"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="col-md-5">
              <div class="HireDevelopersBannerLogo">
                <div class="HireDevelopersMainImg">
                  <Image
                    width={400}
                    height={500}
                    src="/img/yiiframework/yiiframework-banner-img.png"
                    alt="Hire Yii Developer"
                  />
                </div>
                <div class="PinkImgBx">
                  <Image
                    width={263}
                    height={500}
                    src="/img/yiiframework/pink-box.png"
                    alt="Hire Yii Developer"
                  />
                </div>
                <div class="BlueImgBx">
                  <Image
                    width={263}
                    height={500}
                    src="/img/yiiframework/blue-box.png"
                    alt="Hire Yii Developer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="snop_animation"></div>
      </section>
      {/* <section className="dev_flexibility new-hirig-section">
        <div className="container">
          <div className="new-hiring-div">
            <div className="title_heading">Hiring Model</div>
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="inner-flex-new">
                  <i>
                    <Image
                      alt="app development"
                      src="/img/hiredevelopers/periodic-icon.png"
                      width={70}
                      height={50}
                    />
                  </i>
                  <div className="title_heading_Main-new">Periodic Basis</div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="inner-flex-new">
                  <i>
                    <Image
                      alt="app development"
                      src="/img/hiredevelopers/clock-icon.png"
                      width={70}
                      height={50}
                    />
                  </i>
                  <div className="title_heading_Main-new">Hourly Basis</div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="inner-flex-new">
                  <i>
                    <Image
                      alt="app development"
                      src="/img/hiredevelopers/checklist.png"
                      width={70}
                      height={50}
                    />
                  </i>
                  <div className="title_heading_Main-new">Project Basis</div>
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
                    <a href="https://www.logicspice.com/wordpress-web-development">
                      wordpress website developer
                    </a>
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
      </section> */}
      <section class="OurNewHirigSection">
        <div class="container">
          <div class="OurNewHirigModel">
            <div class="HireTopHaddind">
              <h2>
                Our <span>Hiring Model</span>
              </h2>
            </div>
            <div class="OurNewHirigModelMain">
              <div class="row">
                <div class="col-md-4 col-sm-4">
                  <div class="OurNewHirigModelBx">
                    <i>
                      <Image
                        width={70}
                        height={100}
                        alt="app development"
                        src="/img/yiiframework/periodic-icon.png"
                      />
                    </i>
                    <div class="title_heading_Main-new">Periodic Basis</div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="OurNewHirigModelBx">
                    <i>
                      <Image
                        width={70}
                        height={100}
                        alt="app development"
                        src="/img/yiiframework/hourly-basis-icon.png"
                      />
                    </i>
                    <div class="title_heading_Main-new">Hourly Basis</div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-4">
                  <div class="OurNewHirigModelBx">
                    <i>
                      <Image
                        width={70}
                        height={100}
                        alt="app development"
                        src="/img/yiiframework/project-basis-icon.png"
                      />
                    </i>
                    <div class="title_heading_Main-new">Project Basis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="OurNewHirigModelBxSer">
            <div class="row">
              <div class="col-md-6">
                <div class="OurNewHirigPhpYii">
                  <div class="HireTopHaddind">
                    <h2>
                      Php yii <span>Developer</span>
                    </h2>
                  </div>
                  <div class="">
                    <p>
                      Logicspice, one of the web development company offering
                      cost effective solution to hire php yii developer for your
                      project. Our team of dedicated yii framework developer has
                      worked on multiple projects from small website to large
                      enterprise websites. We offer advanced php yii solutions
                      using the robust technology in yii development.
                    </p>
                    <p>
                      Our yii programmers are helping you throughout the
                      development process. Our team is proficient to keep client
                      satisfied in terms of quality, uniqueness and
                      functionality. By Hiring Yii developers, you will have a
                      great experience working in a collaborative environment to
                      evolve the application best in its class.
                    </p>
                    <p>
                      You will get a skillful yii developer at logicspice for
                      your yii php development needs. We always assure our
                      clients for secure, cost effective, robust web and
                      application development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="OurNewHirigTechnicalBx">
                  <div class="HireTopHaddind">
                    <h2>
                      Technical <span>expertise</span>
                    </h2>
                  </div>
                  <ul class="">
                    <li class="">
                      Advance skills in <strong>corePHP</strong>
                    </li>
                    <li class="">
                      Experience in <strong>yii framework</strong>
                    </li>
                    <li class="">
                      Great understanding of <strong>MVC framework</strong>
                    </li>
                    <li class="">
                      Experience with <strong>plugins development</strong>
                    </li>
                    <li class="">
                      Knowledge of <strong>mysql database</strong>
                    </li>
                    <li class="">
                      Works in open <strong>source technologies</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="new-app-section">
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
      </section> */}
      <section class="NewHireCustomDeveloperSection">
        <div class="container">
          <div class="HireTopHaddind">
            <h2>
              Hire Us For Custom <span>Yii Framework Development</span>
            </h2>
          </div>
          <div class="NewHireCustomDeveloperBx">
            <div class="row">
              <div class="col-md-6">
                <ul class="">
                  <li class="">
                    <i>
                      <Image
                        width={70}
                        height={100}
                        src="/img/yiiframework/website-development-icon.png"
                        alt="Website Development"
                      />
                    </i>
                    <div class="NewHireCustomTxt">
                      <h3>1. Website Development</h3>
                      <p>
                        Get a fast process for your web development as compare
                        to other MVC framework.
                      </p>
                    </div>
                  </li>
                  <li class="">
                    <i>
                      <Image
                        width={70}
                        height={100}
                        src="/img/yiiframework/enterprise-icon.png"
                        alt="Enterprise Web Application"
                      />
                    </i>
                    <div class="NewHireCustomTxt">
                      <h3>2. Enterprise Web Application</h3>
                      <p>
                        Our yii programmers are experts in creating complex
                        applications for any business.
                      </p>
                    </div>
                  </li>
                  <li class="">
                    <i>
                      <Image
                        width={70}
                        height={100}
                        src="/img/yiiframework/ecommerce-Solution-icon.png"
                        alt="eCommerce Solution"
                      />
                    </i>
                    <div class="NewHireCustomTxt">
                      <h3>3. eCommerce Solution</h3>
                      <p>
                        Build your eCommerce store in open source php framework
                        with lots of features.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="">
                  <li class="">
                    <i>
                      <Image
                        width={70}
                        height={100}
                        src="/img/yiiframework/Plugin-development-icon.png"
                        alt="Plugin Development"
                      />
                    </i>
                    <div class="NewHireCustomTxt">
                      <h3>4. Plugin Development</h3>
                      <p>
                        Get your own extension developed with open source php
                        framework yii.
                      </p>
                    </div>
                  </li>
                  <li class="">
                    <i>
                      <Image
                       width={70}
                       height={100}
                        src="/img/yiiframework/web-application-icon.png"
                        alt="Web Application Development"
                      />
                    </i>
                    <div class="NewHireCustomTxt">
                      <h3>5. Web Application Development</h3>
                      <p>
                        Get web application developed for your business with our
                        yii developers.
                      </p>
                    </div>
                  </li>
                  <li class="">
                    <i>
                      <Image
                        width={70}
                        height={100}
                        src="/img/yiiframework/migration-solution-icon.png"
                        alt="Migration solution"
                      />
                    </i>
                    <div class="NewHireCustomTxt">
                      <h3>6. Migration solution</h3>
                      <p>
                        It&apos;s easy to migrate between yii framework while
                        using custom migration template.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="HireDevelopersEasySteps">
        <div class="container">
          <div class="HireTopHaddind">
            <h2 class="">
              Hire Expert Yii Framework <span>Developer In 5 Easy Steps</span>
            </h2>
          </div>
          <div class="HireEasySteps">
            <div class="HireEasyStepsBx">
              <div class="HireEasyStepsBxBg">
                <i>
                  <Image
                    width={64}
                    height={100}
                    alt="Raise Your Request"
                    src="/img/yiiframework/raise-request-icon.png"
                  />
                </i>
                <h5>
                  Raise Your <br />
                  Request
                </h5>
              </div>
              <div class="HireEasyStepsBorder">
                <Image
                    width={64}
                    height={100}
                  alt="Raise Your Request"
                  src="/img/yiiframework/step-box-border-down.png"
                />
              </div>
            </div>
            <div class="HireEasyStepsBx">
              <div class="HireEasyStepsBorder2">
                <Image
                   width={64}
                   height={100}
                  alt="Raise Your Request"
                  src="/img/yiiframework/step-box-border-up.png"
                />
              </div>
              <div class="HireEasyStepsBxBg">
                <i>
                  <Image
                      width={64}
                      height={100}
                    alt="Discuss Your Requirement"
                    src="/img/yiiframework/discuss-requirement-icon.png"
                  />
                </i>
                <h5>
                  Discuss Your <br />
                  Requirement
                </h5>
              </div>
            </div>
            <div class="HireEasyStepsBx">
              <div class="HireEasyStepsBxBg">
                <i>
                  <Image
                      width={64}
                      height={100}
                    alt="Select Experts"
                    src="/img/yiiframework/select-experts-icon.png"
                  />
                </i>
                <h5>
                  Project <br />
                  Documentation
                </h5>
              </div>
              <div class="HireEasyStepsBorder">
                <Image
                   width={64}
                   height={100}
                  alt="Raise Your Request"
                  src="/img/yiiframework/step-box-border-down.png"
                />
              </div>
            </div>
            <div class="HireEasyStepsBx">
              <div class="HireEasyStepsBorder2">
                <Image
                    width={64}
                    height={100}
                  alt="Raise Your Request"
                  src="/img/yiiframework/step-box-border-up.png"
                />
              </div>
              <div class="HireEasyStepsBxBg">
                <i>
                  <Image
                      width={64}
                      height={100}
                    alt="Finalize The Terms"
                    src="/img/yiiframework/finalize-icon.png"
                  />
                </i>
                <h5>
                  Finalize The <br />
                  Terms
                </h5>
              </div>
            </div>
            <div class="HireEasyStepsBx">
              <div class="HireEasyStepsBxBg">
                <i>
                  <Image
                      width={64}
                      height={100}
                    alt="Assign and kick start"
                    src="/img/yiiframework/kick-start-icon.png"
                  />
                </i>
                <h5>
                  Assign and <br />
                  kick start
                </h5>
              </div>
              <div class="HireEasyStepsBorder">
                <Image
                    width={64}
                    height={100}
                  alt="Raise Your Request"
                  src="/img/yiiframework/step-box-border-down.png"
                />
              </div>
            </div>
          </div>
          <div class="HireEasyStepsBtn">
            {/* <a href="javascript:void(0);" class="btn btn-primary">Hire Now!</a> */}
            <div className="btn btn-primary" onClick={openModal}>
              <a>Hire Now</a>
              {
                <Enquirymodal
                  modalStatus={showModal}
                  toggle={openModal}
                  title="Request for YII Developer"
                />
              }
            </div>
          </div>
        </div>
      </section>
      <section class="WhyHireFromSection">
        <div class="container">
          <h3 class="title_heading">
            Why hire from
            <Image
                width={272}
                height={100}
              alt="Logicspice Mobile and Web development company"
              src="/img/logo.png"
              style={{ display: "inline-block" }}
            />
          </h3>
          <div class="WhyHireFromMainBx">
            <div class="row">
              <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                  <div class="WhyHireFromImg">
                    <Image
                        width={64}
                        height={100}
                      alt="Qualified, Experienced resources"
                      src="/img/hiredevelopers/experience_icon.png"
                    />
                  </div>
                  <div class="WhyHireFromContent">
                    Qualified, Experienced and certified resources
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                  <div class="WhyHireFromImg">
                    <Image
                        width={64}
                        height={100}
                      alt="Flexible Hiring Models - Logicspice"
                      src="/img/hiredevelopers/search_icon.png"
                    />
                  </div>
                  <div class="WhyHireFromContent">Flexible Hiring Models</div>
                </div>
              </div>

              <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                  <div class="WhyHireFromImg">
                    <Image
                        width={64}
                        height={100}
                      alt="Monitor team’s performance"
                      src="/img/hiredevelopers/monitor_icon.png"
                    />
                  </div>
                  <div class="WhyHireFromContent">
                    Monitor team’s performance on regular basis
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                  <div class="WhyHireFromImg">
                    <Image
                        width={64}
                        height={100}
                      alt="Track Progress with Project Management"
                      src="/img/hiredevelopers/progress_icon.png"
                    />
                  </div>
                  <div class="WhyHireFromContent">
                    Track Progress with Project Management Tools
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                  <div class="WhyHireFromImg">
                    <Image
                        width={64}
                        height={100}
                      alt="Fast and easy communication"
                      src="/img/hiredevelopers/comunication_icon.png"
                    />
                  </div>
                  <div class="WhyHireFromContent">
                    Fast and easy communication
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                  <div class="WhyHireFromImg">
                    <Image
                        width={64}
                        height={100}
                      alt="Flexible Timing - Logicspice"
                      src="/img/hiredevelopers/timing_icon.png"
                    />
                  </div>
                  <div class="WhyHireFromContent">Flexible Timing</div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                  <div class="WhyHireFromImg">
                    <Image
                        width={64}
                        height={100}
                      alt="Cost-efficient development - logicspice"
                      src="/img/hiredevelopers/cost_icon.png"
                    />
                  </div>
                  <div class="WhyHireFromContent">Cost-efficient</div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                  <div class="WhyHireFromImg">
                    <Image
                        width={64}
                        height={100}
                      alt="Consistent Technical and Administrative support"
                      src="/img/hiredevelopers/technical_icon.png"
                    />
                  </div>
                  <div class="WhyHireFromContent">
                    Consistent Technical and Administrative support
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                  <div class="WhyHireFromImg">
                    <Image
                        width={64}
                        height={100}
                      alt="Dependable supervision and execution"
                      src="/img/hiredevelopers/dependabe_icon.png"
                    />
                  </div>
                  <div class="WhyHireFromContent">
                    Dependable supervision and execution
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                  <div class="WhyHireFromImg">
                    <Image
                        width={64}
                        height={100}
                      alt="deadlines developers"
                      src="/img/hiredevelopers/calendar_icon.png"
                    />
                  </div>
                  <div class="WhyHireFromContent">
                    We take deadlines very seriously
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                  <div class="WhyHireFromImg">
                    <Image
                        width={64}
                        height={100}
                      alt="Project confidentiality - Logicspice"
                      src="/img/hiredevelopers/nda_icon.png"
                    />
                  </div>
                  <div class="WhyHireFromContent">
                    100% confidentiality - strict NDA terms
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-4">
                <div class="WhyHireFromBx" data-aos="fade-up">
                  <div class="WhyHireFromImg">
                    <Image
                        width={64}
                        height={100}
                      alt="Availability and scope of expansion - logicspice"
                      src="/img/hiredevelopers/scope_icon.png"
                    />
                  </div>
                  <div class="WhyHireFromContent">
                    Availability and scope of expansion
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="BetterUnderstandSection">
        <div class="container">
          <h2>
            Let&apos;s Have A Quick Call To Better Understand <br />
            <span>About Your Idea of Yii Application.</span>
          </h2>
          <p>(Even if you have very short term requirement.)</p>
          <div class="requirment_btn">
            {/* <a
        id="inquirenow"
        data-toggle="modal"
        data-target="#contactFix"
        class="btn btn-primary"
        >CONTACT NOW</a
      > */}
            <a onClick={toggleModal} className="btn btn-primary">
              CONTACT NOW
            </a>
          </div>
        </div>
      </section>
      <section class="CustomerReviewsSections">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-4 col-lg-4">
              <div class="CustomerReviewsImg">
                <Image
                  width={100}
                  height={100 / (100 / 100)}
                  alt="customer-reviews"
                  src="/img/yiiframework/customer-reviews-img.jpg"
                />
              </div>
            </div>
            <div class="col-xs-12 col-md-8 col-lg-8">
              <div class="CustomerReviews">
                <h2>Customer Reviews</h2>
                <div class="YiiCustomerReviews">
                  <div class="CustomerReviewsMainBx">
                    <div class="CustomerReviewsBx">
                      <div class="CustomerReviewsBxImg">
                        <Image
                          width={100}
                          height={100}
                          alt="customer-reviews"
                          src="/img/yiiframework/beat-img.jpg"
                        />
                      </div>
                      <div class="CustomerReviewsBxContent">
                        <h3>Financial Web Application For Pensioners</h3>
                        <p>
                          I have purchased the service marketplace software and
                          have constructed my own website. This was an easy task
                          because of logicspice&apos;s free installation and
                          support. Keep up the good work. I will be back for
                          more customization work in the future.
                        </p>
                      </div>
                    </div>
                    <div class="CustomerReviewsClient">
                      <i>
                        <Image
                          width={100}
                          height={100}
                          alt="customer-reviews"
                          src="/img/yiiframework/purpal-star.png"
                        />
                      </i>
                      <span>
                        Beat B. Switzerland
                        <i class="contry-flag">
                          <Image
                            width={100}
                            height={100}
                            alt="customer-reviews"
                            src="/img/jobboard/switzerland_flag_img.png"
                          />
                        </i>
                      </span>
                    </div>
                  </div>
                  <div class="CustomerReviewsMainBx">
                    <div class="CustomerReviewsBx">
                      <div class="CustomerReviewsBxImg">
                        <Image
                          width={100}
                          height={100}
                          alt="customer-reviews"
                          src="/img/yiiframework/tom-img.jpg"
                        />
                      </div>
                      <div class="CustomerReviewsBxContent">
                        <h3>
                          Build a Social Networking Website With Payment System
                        </h3>
                        <p>
                          This is the best readymade solution I found for my
                          business. Thanks for your great efforts, commitment
                          and support while installing the software. Your prompt
                          service regarding a few minor issues was superb and
                          great communication skills.
                        </p>
                      </div>
                    </div>
                    <div class="CustomerReviewsClient">
                      <i>
                        <Image
                          width={100}
                          height={100}
                          alt="customer-reviews"
                          src="/img/yiiframework/purpal-star.png"
                        />
                      </i>
                      <span>
                        Tom J. USA
                        <i class="contry-flag">
                          <Image
                            width={100}
                            height={100}
                            alt="customer-reviews"
                            src="/img/jobboard/usa_flag_img.png"
                          />
                        </i>
                      </span>
                    </div>
                  </div>
                  <div class="CustomerReviewsMainBx">
                    <div class="CustomerReviewsBx">
                      <div class="CustomerReviewsBxImg">
                        <Image
                          width={100}
                          height={100}
                          alt="customer-reviews"
                          src="/img/yiiframework/burak-img.jpg"
                        />
                      </div>
                      <div class="CustomerReviewsBxContent">
                        <h3>C2C Ecommerce Website About Fashion</h3>
                        <p>
                          Exactly the best team available online ! I have been
                          working and communicating with a few companies over
                          the internet and i didn&apos;t see a single better
                          company than logicspice. They are so skilled and
                          professional. Their knowledge about coding is
                          incredible. And they never say &quot;no&quot; or
                          &quot;we can&apos;t&quot; to any situation. Actually
                          they are the best guys i have ever work with in my
                          life. Their communication, kindness are so high level.
                          Every step of my project, every progress of my project
                          we need maybe 15 to 20 changes. And every time i wrote
                          those needs to them, they did their work at most 1-2
                          days. Their speed and work quality is amazing ! Final
                          word to those who wants to hire them: don&apos;t think
                          twice ! Literally they are the best team in this
                          website. And also their work progress and milestones
                          are literally clear as they said. I am advising them
                          to all of my friends and i will hire them again for
                          sure !
                        </p>
                      </div>
                    </div>
                    <div class="CustomerReviewsClient">
                      <i>
                        <Image
                          width={100}
                          height={100}
                          alt="customer-reviews"
                          src="/img/yiiframework/purpal-star.png"
                        />
                      </i>
                      <span>
                        Burak Turkey
                        <i class="contry-flag">
                          <Image
                            width={100}
                            height={100}
                            alt="customer-reviews"
                            src="/img/jobboard/turkey-flag.png"
                          />
                        </i>
                      </span>
                    </div>
                  </div>

                  <div class="CustomerReviewsMainBx">
                    <div class="CustomerReviewsBx">
                      <div class="CustomerReviewsBxImg">
                        <Image
                          width={100}
                          height={100}
                          alt="customer-reviews"
                          src="/img/yiiframework/dmitry-img.jpg"
                        />
                      </div>
                      <div class="CustomerReviewsBxContent">
                        <h3>Website + Mobile App (iOs&Android)</h3>
                        <p>
                          Manish was very cooperative and professional during
                          the project. The team was great, the project was very
                          complicated and they tried their best to complete it
                          with the best diligence. I will definitely contact
                          this company in the future for my project updates and
                          would recommend to anyone who is looking for a good
                          quality work.
                        </p>
                      </div>
                    </div>
                    <div class="CustomerReviewsClient">
                      <i>
                        <Image
                          width={100}
                          height={100}
                          alt="customer-reviews"
                          src="/img/yiiframework/purpal-star.png"
                        />
                      </i>
                      <span>
                        Dmitry Canada
                        <i class="contry-flag">
                          <Image
                            width={100}
                            height={100}
                            alt="customer-reviews"
                            src="/img/jobboard/canada-flag.png"
                          />
                        </i>
                      </span>
                    </div>
                  </div>
                  <div class="CustomerReviewsMainBx">
                    <div class="CustomerReviewsBx">
                      <div class="CustomerReviewsBxImg">
                        <Image
                          width={100}
                          height={100}
                          alt="customer-reviews"
                          src="/img/yiiframework/sherif-img.jpg"
                        />
                      </div>
                      <div class="CustomerReviewsBxContent">
                        <h3>Build a Website</h3>
                        <p>
                          Best project management experience/journey I had.
                          Great team spirit, very flexible and understanding
                          while maintaining time and budget target.Top tear
                          professional communication and support.
                        </p>
                      </div>
                    </div>
                    <div class="CustomerReviewsClient">
                      <i>
                        <Image
                          width={100}
                          height={100}
                          alt="customer-reviews"
                          src="/img/yiiframework/purpal-star.png"
                        />
                      </i>
                      <span>
                        Sherif A. Dubai
                        <i class="contry-flag">
                          <Image
                            width={100}
                            height={100}
                            alt="customer-reviews"
                            src="/img/jobboard/dubai-flag.png"
                          />
                        </i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <WhyHireFromLogicspice testimonialData={testimonialData} /> */}
      <section className="certificates">
        <div className="container">
          <Certificationtabs />
        </div>
      </section>
      <section className="working_with">
        <div className="container">
          <h3 className="title_heading title_heading_bgg">
            Worked with 1500+ companies worldwide, from startups to enterprises.
          </h3>

          <Workingwith />
        </div>
      </section>

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
          <div className="other-product-box">
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
