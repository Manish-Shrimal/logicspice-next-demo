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
      {" "}
      <Navbar />
      <section
        style={{}}
        class="hire_developer_back_iin otherhire_developer_back_iin"
      >
        <div class="hire_developer_back_iin_mask new-developers-mask">
          <div class="container">
            <div class="row">
              <div class="col-md-8 text-start">
                <h1 class="slide_title">Hire Hybrid App Developer</h1>
                <div class="subinstet">
                  Flexible hybrid app development service from the hub of
                  talented developers for smart, responsive and adaptive
                  applications.
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
                <div class="nt_cdl">
                <a onClick={toggleModal} className="btn btn-primary">
                    <Contactusmodel
                      modalStatus={modalOpen}
                      toggle={toggleModal}
                    />
                    Hire Now!
                  </a>

                  <a
                    href="javascript:$zopim.livechat.window.show();"
                    class="btn btn-primary"
                  >
                    Chat with a Developer
                  </a>
                </div>
              </div>
              <div class="col-md-4">
                <div class="cack_logo_img">
                  <Image
                    width={270}
                    height={100}
                    alt="Hire WordPress Developer"
                    src="/img/hiredevelopers/hire_hybrid_app_developer.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="snop_animation"></div>
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
                  <h2>Hire hybrid mobile app developers</h2>
                  <p>
                    Being a leading{" "}
                    <Link href="/hybrid-app-development">
                      hybrid app development company
                    </Link>
                    , Logicspice offers feature-rich and innovative hybrid apps
                    that deliver outstanding results to your business. When you
                    hire mobile app developers in India from our team, you gain
                    access to a group of hybrid expert app developers
                    well-versed in the latest frameworks such as PhoneGap,
                    Titanium, Sencha, and Ionic. The developer at Logicspice
                    leverages all mobile platforms to build a cross-channel
                    mobility solution.
                    <br />
                    <br />
                    Hybrid apps are developed with HTML5, CSS3, and JavaScript,
                    which reduce the development time, cost and complexity. Our
                    hybrid developers have expertise in the above-mentioned
                    skills with in-depth knowledge of web technologies and
                    hybrid frameworks. <br />
                    <br />
                    We offer a flexible model to the clients. You can hire app
                    developers in India on periodic or hourly basis, which suits
                    business requirements best.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <h2>Technical expertise</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <span>Swift</span>
                  </li>
                  <li class="list-group-item">
                    <span>jQuery mobile</span>
                  </li>
                  <li class="list-group-item">
                    <span>PhoneGap</span>
                  </li>
                  <li class="list-group-item">
                    <span>React native</span>
                  </li>
                  <li class="list-group-item">
                    <span>Sencha touch</span>
                  </li>
                  <li class="list-group-item">
                    <span>Ionic</span>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="new-app-section">
        <div class="container">
          <h2 class="title_heading">
            Hybrid app developers for hire in India{" "}
          </h2>
          <div class="aew-app-bxx">
            <div class="row">
              <div class="col-md-3 col-sm-4">
                <div class="apps-bxa" data-aos="fade-up">
                  <div class="box_apps_top">
                    <Image
                      width={80}
                      height={100}
                      alt="app development"
                      src="/img/hiredevelopers/business_networking.png"
                    />
                  </div>
                  <div class="developer_app_content">
                    Business networking apps
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-4">
                <div class="apps-bxa" data-aos="fade-up">
                  <div class="box_apps_top">
                    <Image
                      width={80}
                      height={100}
                      alt="app development"
                      src="/img/hiredevelopers/audio.png"
                    />
                  </div>
                  <div class="developer_app_content">
                    Audio/Video streaming apps
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-4">
                <div class="apps-bxa" data-aos="fade-up">
                  <div class="box_apps_top">
                    <Image
                      width={80}
                      height={100}
                      alt="app development"
                      src="/img/hiredevelopers/travel-app.png"
                    />
                  </div>
                  <div class="developer_app_content">Travel apps</div>
                </div>
              </div>

              <div class="col-md-3 col-sm-4">
                <div class="apps-bxa" data-aos="fade-up">
                  <div class="box_apps_top">
                    <Image
                      width={80}
                      height={100}
                      alt="app development"
                      src="/img/hiredevelopers/education-app.png"
                    />
                  </div>
                  <div class="developer_app_content">Education apps</div>
                </div>
              </div>

              <div class="col-md-3 col-sm-4">
                <div class="apps-bxa" data-aos="fade-up">
                  <div class="box_apps_top">
                    <Image
                      width={80}
                      height={100}
                      alt="app development"
                      src="/img/hiredevelopers/internet-app.png"
                    />
                  </div>
                  <div class="developer_app_content">Internet apps</div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4">
                <div class="apps-bxa" data-aos="fade-up">
                  <div class="box_apps_top">
                    <Image
                      width={80}
                      height={100}
                      alt="app development"
                      src="/img/hiredevelopers/multimedia-app.png"
                    />
                  </div>
                  <div class="developer_app_content">Multimedia apps</div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4">
                <div class="apps-bxa" data-aos="fade-up">
                  <div class="box_apps_top">
                    <Image
                      width={80}
                      height={100}
                      alt="app development"
                      src="/img/hiredevelopers/navigation_apps.png"
                    />
                  </div>
                  <div class="developer_app_content">
                    Mapping and navigation apps
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-4">
                <div class="apps-bxa" data-aos="fade-up">
                  <div class="box_apps_top">
                    <Image
                      width={80}
                      height={100}
                      alt="app development"
                      src="/img/hiredevelopers/healthcare-app.png"
                    />
                  </div>
                  <div class="developer_app_content">Healthcare apps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="dev_step_solution">
        <div class="container">
          <h2 class="title_heading">
            Hire dedicated Angularjs developer in 5 easy steps
          </h2>
          <div class="step-row">
            <div class="col-md-2">
              <div class="dev-steps">
                <i>
                  <Image
                    width={64}
                    height={100}
                    alt="step-1"
                    src="/img/hiredevelopers/step-icon1.png"
                  />
                </i>
                <h5>Raise Your Request</h5>
              </div>
            </div>
            <div class="col-md-2">
              <div class="dev-steps">
                <i>
                  <Image
                    width={63}
                    height={100}
                    alt="step-2"
                    src="/img/hiredevelopers/step-icon2.png"
                  />
                </i>
                <h5>Discuss Your Requirment</h5>
              </div>
            </div>
            <div class="col-md-2">
              <div class="dev-steps">
                <i>
                  <Image
                    width={63}
                    height={100}
                    alt="step-3"
                    src="/img/hiredevelopers/step-icon3.png"
                  />
                </i>
                <h5>Select Experts</h5>
              </div>
            </div>
            <div class="col-md-2">
              <div class="dev-steps">
                <i>
                  <Image
                    width={53}
                    height={100}
                    alt="step-4"
                    src="/img/hiredevelopers/step-icon4.png"
                  />
                </i>
                <h5>Finalize the Terms</h5>
              </div>
            </div>
            <div class="col-md-2">
              <div class="dev-steps last-step">
                <i>
                  <Image
                    width={63}
                    height={100}
                    alt="step-5"
                    src="/img/hiredevelopers/step-icon5.png"
                  />
                </i>
                <h5>Assign and kick start</h5>
              </div>
            </div>
          </div>
          <div class="step-but">
          <a onClick={toggleModal} className="btn btn-primary">
                    <Contactusmodel
                      modalStatus={modalOpen}
                      toggle={toggleModal}
                    />
                    Hire Now!
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
                    <Contactusmodel
                      modalStatus={modalOpen}
                      toggle={toggleModal}
                    />
                    Hire Now!
                  </a>
            </div>
          </div>
        </div>
      </section>
      <section class="latest_feature_product latest_feature_services">
        <div class="container">
          <h2 class="title_main">Other Popular Hire Developer</h2>
          <div class="other-product-box">
            <div class="row">
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/hire-angular-js-developers"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire AngularJS Developer</h3>
                        <div class="other-project-logo">
                          <Image
                            width={90}
                            height={100}
                            src="/img/hiredevelopers/angular-img.png"
                            alt="img"
                          />
                        </div>
                        <p>
                          <span>
                            Hire our expert AngularJS developers to build fast,
                            responsive and scalable web applications.
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
                    href="/hire-node-js-experts"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire Node.JS developer</h3>
                        <div class="other-project-logo">
                          <Image
                            width={90}
                            height={100}
                            src="/img/hiredevelopers/nodejs-img.png"
                            alt="img"
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
                            width={90}
                            height={100}
                            src="/img/hiredevelopers/laravel_img.png"
                            alt="img"
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
