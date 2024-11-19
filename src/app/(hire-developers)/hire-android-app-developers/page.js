"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(hire-developers)/hire-developer.css";
import Image from "next/image";
import Link from "next/link";
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
                <h1 className="slide_title">Hire Android App Developers</h1>
                <div className="subinstet">
                  Hire dedicated android developers from the hub of talented
                  developers to attain your development needs.
                </div>
                <div className="developer-servicees-bx">
                  <div className="developer-servicees">
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span>Quick &amp; Agile</span>
                  </div>
                  <div className="developer-servicees">
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span>Cost Effective Solution</span>
                  </div>
                  <div className="developer-servicees">
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span>Varied Industry Experience</span>
                  </div>
                  <div className="developer-servicees">
                    <i className="fa fa-check" aria-hidden="true"></i>
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
                    src="/img/hiredevelopers/hire_android_programmers.png"
                    width={226}
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
                  <h2>Hire android developer</h2>
                  <p>
                    We are an Android-friendly development house offering the
                    opportunity to hire dedicated android app developers to
                    build apps for your business. Our team of android
                    programmers have expertise in developing top android apps
                    for small, medium and large business globally. We are
                    continuously progressing in
                    <Link href="/android-app-development">
                      {" "}
                      android apps development
                    </Link>{" "}
                    for past years with a team of dedicated
                    developers&nbsp;towards their skills. <br />
                    <br /> We keep ourselves updated with the latest
                    technologies so we can meet the client&rsquo;s requirements
                    and deliver high-quality apps. We are one of the emerging
                    platforms that provides amazing Android apps in the market.
                    <br />
                    <br /> Hire Android app developer in India and other
                    countries on hourly/monthly or fixed price. You get amazing
                    technical support, a quality analyst, a project manager, and
                    an innovative Android app that maximizes your profit to an
                    optimal level.
                    <br /> Let&rsquo;s come forward and hire{" "}
                    <strong>
                      <i>android app programmer</i>
                    </strong>{" "}
                    who can convert your ideas into mobile apps.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <h2>Technical expertise</h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    <span>Java/J2ME</span>
                  </li>
                  <li className="list-group-item">
                    <span>C++</span>
                  </li>
                  <li className="list-group-item">
                    <span>SQL Lite</span>
                  </li>
                  <li className="list-group-item">
                    <span>Linux</span>
                  </li>
                  <li className="list-group-item">
                    <span>Android SDK</span>
                  </li>
                  <li className="list-group-item">
                    <span>APIs</span>
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
            Hire Android app developers in India for the following industry
          </h2>
          <div className="aew-app-bxx">
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <div className="apps-bxa" data-aos="fade-up">
                  <div className="box_apps_top">
                    <Image
                      alt="app development"
                      src="/img/hiredevelopers/business_networking.png"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="developer_app_content">
                    Business networking apps
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="apps-bxa" data-aos="fade-up">
                  <div className="box_apps_top">
                    <Image
                      alt="app development"
                      src="/img/hiredevelopers/audio.png"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="developer_app_content">
                    Audio/Video streaming apps
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="apps-bxa" data-aos="fade-up">
                  <div className="box_apps_top">
                    <Image
                      alt="app development"
                      src="/img/hiredevelopers/travel-app.png"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="developer_app_content">Travel apps</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="apps-bxa" data-aos="fade-up">
                  <div className="box_apps_top">
                    <Image
                      alt="app development"
                      src="/img/hiredevelopers/education-app.png"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="developer_app_content">Education apps</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="apps-bxa" data-aos="fade-up">
                  <div className="box_apps_top">
                    <Image
                      alt="app development"
                      src="/img/hiredevelopers/internet-app.png"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="developer_app_content">Internet apps</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="apps-bxa" data-aos="fade-up">
                  <div className="box_apps_top">
                    <Image
                      alt="app development"
                      src="/img/hiredevelopers/multimedia-app.png"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="developer_app_content">Multimedia apps</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="apps-bxa" data-aos="fade-up">
                  <div className="box_apps_top">
                    <Image
                      alt="app development"
                      src="/img/hiredevelopers/navigation_apps.png"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="developer_app_content">
                    Mapping and navigation apps
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="apps-bxa" data-aos="fade-up">
                  <div className="box_apps_top">
                    <Image
                      alt="app development"
                      src="/img/hiredevelopers/healthcare-app.png"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="developer_app_content">Healthcare apps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dev_step_solution">
        <div className="container">
          <h2 className="title_heading">
            Hire android app programmers in 5 easy steps
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
      <section className="portfolio_hire">
        <div className="container-fluid">
          <div
            id="hire-generic"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner" role="listbox">
              {/* Add carousel items here */}
            </div>
            <a
              className="left carousel-control"
              href="#hire-generic"
              role="button"
              data-slide="prev"
            >
              <span className="fa fa-angle-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#hire-generic"
              role="button"
              data-slide="next"
            >
              <span className="fa fa-angle-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
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
          <div className="other-product-box">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/hire-ios-app-developers"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Hire iPhone App Developer</h3>
                        <div className="other-project-logo">
                          <Image
                            src="/img/hiredevelopers/iPhone_img.png"
                            alt="iPhone"
                            width={70}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            Our experienced iOS app developers are best for
                            custom iOS application development.
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
                    href="/hire-laravel-developers"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Hire Laravel Developer</h3>
                        <div className="other-project-logo">
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
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/hire-hybrid-mobile-app-developer"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Hire Hybrid App Developer</h3>
                        <div className="other-project-logo">
                          <Image
                            src="/img/hiredevelopers/hybrid_img.png"
                            alt="Hire Hybrid App Developer"
                            width={70}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            Hire top rated hybrid mobile app developers from
                            logicspice for your next hybrid app development.
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
