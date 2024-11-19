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
      {" "}
      <Navbar />
      <div>
        <section
          style={{}}
          className="hire_developer_back_iin otherhire_developer_back_iin"
        >
          <div className="hire_developer_back_iin_mask new-developers-mask">
            <div className="container">
              <div className="row">
                <div className="col-md-8 text-start">
                  <h1 className="slide_title">Hire AngularJS Developer</h1>
                  <div className="subinstet">
                    Hire angular developer from the hub of talented developers
                    to attain your development needs.
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
                        title="Hire AngularJS Developer"
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
                      width={209}
                      height={100}
                      alt="Hire WordPress Developer"
                      src="/img/hiredevelopers/Hire_angularjs_developer.png"
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
                    <h2>Codeigniter developer for hire</h2>
                    <p style={{ textAlign: "justify" }}>
                      Logicspice is eminent angularjs development service
                      provider company with a team of dedicated and enthusiastic
                      developers, delivering top notch solutions. We work on
                      latest technologies and tools for making applications
                      fast, secure, easy to use and highly interactive. Being a
                      top AngularJS development company, we have successfully
                      delivered result driven projects to the clients.{" "}
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      AngularJS is a powerful framework for business
                      applications. The framework for creating high-end and
                      complex interfaces of web applications. Our{" "}
                      <Link href="/hire-web-developers">
                        dedicated web developers{" "}
                      </Link>
                      offer highly scalable and reliable applications and
                      websites.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      When you need to hire AngularJS developers in India,
                      connect with us today to find out what we can offer you.
                      We provide cost-effective AngularJS development services
                      on time and on schedule. Hire angularJS developer from
                      Logicspice on an hourly basis, periodic basis which suits
                      your business requirement best.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <h2>Technical expertise</h2>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <span>Expertise with javascript</span>
                    </li>
                    <li className="list-group-item">
                      <span>Familiar with frameworks</span>
                    </li>
                    <li className="list-group-item">
                      <span>Knowledge of HTML,CSS</span>
                    </li>
                    <li className="list-group-item">
                      <span>Professional, precise communication skills</span>
                    </li>
                    <li className="list-group-item">
                      <span>Experience with the front-end operation</span>
                    </li>
                    <li className="list-group-item">
                      <span>Expertise in cross browser compatibility</span>
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
              Hire angular developers in India for Offshore AngularJS
              Development
            </h2>
            <div className="custom-solution-bx">
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <i>
                        <Image
                          width={64}
                          height={100}
                          alt="icon-1"
                          src="/img/hiredevelopers/custom-icon1.png"
                        />
                      </i>
                      <div className="custom-ser-txt">
                        <h3>1. Custom angularJS applications</h3>
                        <p>
                          Get highly secure, robust, high-performance web
                          applications developed with the help of our
                          developers.
                        </p>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <i>
                        <Image
                          width={64}
                          height={100}
                          alt="icon-2"
                          src="/img/hiredevelopers/custom-icon2.png"
                        />
                      </i>
                      <div className="custom-ser-txt">
                        <h3>2. Social Applications</h3>
                        <p>
                          Hire AngularJS developers who have experience in
                          building highly creative and interactive apps.
                        </p>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <i>
                        <Image
                          width={64}
                          height={100}
                          alt="icon-3"
                          src="/img/hiredevelopers/custom-icon3.png"
                        />
                      </i>
                      <div className="custom-ser-txt">
                        <h3>3. Portal development</h3>
                        <p>
                          Hire AngularJS programmers to build an online portal
                          developed for small to large businesses.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <i>
                        <Image
                          width={64}
                          height={100}
                          alt="icon-4"
                          src="/img/hiredevelopers/custom-icon4.png"
                        />
                      </i>
                      <div className="custom-ser-txt">
                        <h3>4. Music &amp; Video Streaming Apps</h3>
                        <p>
                          Our expert angular developers are skilled with latest
                          techniques and technologies to create video streaming
                          apps.
                        </p>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <i>
                        <Image
                          width={64}
                          height={100}
                          alt="icon-5"
                          src="/img/hiredevelopers/custom-icon5.png"
                        />
                      </i>
                      <div className="custom-ser-txt">
                        <h3>5. Marketplace Solution</h3>
                        <p>
                          We have provided excellent service to clients globally
                          in marketplace development solutions.
                        </p>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <i>
                        <Image
                          width={64}
                          height={100}
                          alt="icon-6"
                          src="/img/hiredevelopers/custom-icon6.png"
                        />
                      </i>
                      <div className="custom-ser-txt">
                        <h3>6. Custom Widget Development</h3>
                        <p>
                          We offer custom widget development service which suits
                          your business requirement.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dev_step_solution">
          <div className="container">
            <h2 className="title_heading">
              Hire dedicated Angularjs developer in 5 easy steps
            </h2>
            <div className="step-row">
              <div className="col-md-2">
                <div className="dev-steps">
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
              <div className="col-md-2">
                <div className="dev-steps">
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
              <div className="col-md-2">
                <div className="dev-steps">
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
              <div className="col-md-2">
                <div className="dev-steps">
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
              <div className="col-md-2">
                <div className="dev-steps last-step">
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
            <div className="step-but">
              <a onClick={toggleModal} className="btn btn-primary">
                <Contactusmodel
                  modalStatus={modalOpen}
                  toggle={toggleModal}
                  title="Hire AngularJS Developers"
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
                    title="Hire AngularJS Developers"
                  />
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
                      target="_blank"
                      href="/hire-node-js-experts"
                    >
                      <div className="caption">
                        <div className="other-caption-bx">
                          <h3>Hire Node.JS developer</h3>
                          <div className="other-project-logo">
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
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                    <Link
                      title="View Detail"
                      target="_blank"
                      href="/hire-laravel-developers"
                    >
                      <div className="caption">
                        <div className="other-caption-bx">
                          <h3>Hire Laravel Developer</h3>
                          <div className="other-project-logo">
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
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                    <Link
                      title="View Detail"
                      target="_blank"
                      href="/hire-android-app-developers"
                    >
                      <div className="caption">
                        <div className="other-caption-bx">
                          <h3>Hire Android App Developers</h3>
                          <div className="other-project-logo">
                            <Image
                              width={90}
                              height={100}
                              src="/img/hiredevelopers/android_img.png"
                              alt="img"
                            />
                          </div>
                          <p>
                            <span>
                              Our Android experts ensure code is written in the
                              most efficient way possible.
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
      </div>
      <Footer />
    </>
  );
};

export default Page;
