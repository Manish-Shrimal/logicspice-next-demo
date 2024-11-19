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
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

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
      image:
        "/img/globalbusinesscountries/beatbuehlmann.jpg",
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
        style={{}}
        class="hire_developer_back_iin otherhire_developer_back_iin"
      >
        <div class="hire_developer_back_iin_mask new-developers-mask">
          <div class="container">
            <div class="row">
              <div class="col-md-8 text-start">
                <h1 class="slide_title">Hire Quality Assurance Tester</h1>
                <div class="subinstet">
                  Hire expert quality assurance tester to make your
                  website,software applications or mobile app bug free.
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
                      title="Hire Quality Analyst"
                    />
                    Hire Now!
                  </a>{" "}
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
                    alt="Hire Android App Developers"
                    src="/img/hiredevelopers/quality-assurance.png"
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
                    <div class="HireFlexNewImg"><Image   width={300}
                     height={500 / (100 / 100)} alt="app development" src="/img/hiredevelopers/hire-women-img.png" /></div>
                </div>
                
                <div class="col-md-9 col-sm-8 p-0">
                    <div class="title_heading">Hiring Model </div>  
                    <div class="row">
                <div class="col-md-4 col-sm-4">
                    <div class="HireFlexNewTxt">
                        <i><Image width={41} height={100} alt="app development" src="/img/hiredevelopers/periodic-new-icon.png" /></i>
                        <div class="HireFlexNewHeading">Periodic Basis</div>
                    </div></div>
                <div class="col-md-4 col-sm-4">
                    <div class="HireFlexNewTxt">
                        <i><Image width={27} height={100} alt="app development" src="/img/hiredevelopers/clock-new-icon.png" /></i>
                        <div class="HireFlexNewHeading">Hourly Basis</div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="HireFlexNewTxt">
                        <i><Image width={41} height={100} alt="app development" src="/img/hiredevelopers/checklist-new-icon.png" /></i>
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
                  <h2>Hire Software Testers</h2>
                  <p>
                    Being in the technical industry, everyone is well aware of
                    the importance of product testing. Testing of the product is
                    the valuable phase of the development cycle. The product
                    without testing may be full of bugs which may not be usable
                    for the customer end and client end also. The same applies
                    on software or any other web and app development service.
                    Hire QA analyst from logicspice to get your website
                    developed in a professional manner.
                  </p>
                  <p>
                    We are having a team of well experienced QA testers who
                    performs testing, functional testing, compatibility testing,
                    database problems, and migration solutions. You can opt out
                    either manual testing service or automated testing service.
                    Manual testing is all about testing the code thoroughly and
                    automation testing is done by running few scripts.
                  </p>
                  <p>
                    Logicspice is full of resource for mobile application
                    testing, website testing, web application testing, product
                    testing or software testing. Hire quality analyst from
                    logicspice who have in-depth understanding and proven
                    knowledge in working on latest softwares in technology.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <h2>Technical expertise</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <span>Bug tracking tools: Bugzilla, JIRA, Github </span>
                  </li>
                  <li class="list-group-item">
                    <span>Understanding of most of the browsers</span>
                  </li>
                  <li class="list-group-item">
                    <span>Experienced in SDLC & STLC</span>
                  </li>
                  <li class="list-group-item">
                    <span>Great knowledge of web technologies</span>
                  </li>
                  <li class="list-group-item">
                    <span>
                      Experience in writing scripts for automated testing
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="new-custom-section">
        <div class="container">
          <h2>Hire us for the following testing services</h2>
          <div class="custom-solution-bx">
            <div class="row">
              <div class="col-md-6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-1"
                        src="/img/hiredevelopers/normal-testing.png"
                        style={{display: 'inline'}}

                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>1. General testing</h3>
                      <p>
                        System testing, compatibility testing, functional
                        testing, Accessibility testing.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-2"
                        src="/img/hiredevelopers/domain-testing.png"
                        style={{display: 'inline'}}

                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>2. Domain testing</h3>
                      <p>Mobile testing, CRM testing, CMS testing.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-4"
                        src="/img/hiredevelopers/special-testing.png"
                        style={{display: 'inline'}}

                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>3. Special testing</h3>
                      <p>Web app testing, App Testing, Database testing.</p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-5"
                        src="/img/hiredevelopers/automation-testing.png"
                        style={{display: 'inline'}}

                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>4. Automated testing</h3>
                      <p>Model testing, Data driven testing, Load testing.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      <section class="dev_step_solution">
        <div class="container">
          <h2 class="title_heading">
            Hire dedicated quality tester in 5 easy steps
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
          <div class="step-but">
          <a onClick={toggleModal} className="btn btn-primary">
              <Contactusmodel
                modalStatus={modalOpen}
                toggle={toggleModal}
                title="Hire Quality Analyst"
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
                  title="Hire Quality Analyst"
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
                    href="/hire-cakephp-developers"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire CakePHP Developer</h3>
                        <div class="other-project-logo">
                          <Image
                            width={90}
                            height={100}
                            src="/img/hiredevelopers/cakephp_img.png"
                            alt="img"
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
                    href="/hire-wordpress-experts"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire WordPress Developer</h3>
                        <div class="other-project-logo">
                          <Image
                            width={90}
                            height={100}
                            src="/img/hiredevelopers/wordpress_img.png"
                            alt="img"
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
                            alt="laravel"
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
