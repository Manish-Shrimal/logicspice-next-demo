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
        style={{}}
        class="hire_developer_back_iin otherhire_developer_back_iin"
      >
        <div class="hire_developer_back_iin_mask new-developers-mask">
          <div class="container">
            <div class="row">
              <div class="col-md-8 text-start">
                <h1 class="slide_title">Hire Laravel Developers</h1>
                <div class="subinstet">
                  Hire dedicated laravel programmers from the hub of talented
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
                <div class="nt_cdl">
                  {/* <a
                    href="javascript:void(0);"
                    data-toggle="modal"
                    data-target="#popup_sc_product"
                    onclick='if (!window.__cfRLUnblockHandlers) return false; $("#update_frm").html("Request to hire laravel developers");
                                    $("#contact_fr").val("Hire Laravel Developers");
                           '
                    id=""
                    class="btn btn-primary"
                    data-cf-modified-1a16f141c132cb889313ca56-=""
                  >
                    Hire Now!
                  </a> */}
                  <a onClick={toggleModal} className="btn btn-primary">
                    <Contactusmodel
                      modalStatus={modalOpen}
                      toggle={toggleModal}
                      title="Hire Python Developers"
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
                    width={312}
                    height={100}
                    alt="Hire Laravel Developers"
                    src="/img/hiredevelopers/hire_laravel_developer.png"
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
                  <h2>Hire Laravel Expert</h2>
                  <p>
                    We help businesses grow, by partnering with them to provide
                    expert and dedicated Laravel developers.{" "}
                    <strong>Hire Expert Laravel developers</strong> from
                    Logicspice, who are well experienced and highly
                    knowledgeable.
                    <br />
                    Laravel is the most amazing and fantastic framework which is
                    developed by writing code syntax. So, if you are planning to
                    get this code syntax for your e-commerce store and site,
                    then, we can provide you with the most dedicated Laravel
                    developers. &nbsp;
                    <br />
                    &nbsp;
                    <br />
                    When you hire Laravel developers in India, USA, UK &amp;
                    other european countries, you gain access to a vast talent
                    pool renowned for its technical proficiency and
                    cost-effectiveness. Our team of dedicated Laravel developers
                    is well-versed in crafting dynamic, high-performance web
                    applications that align with your business goals. &nbsp;
                    <br />
                    Our freelance Laravel developers have years of experience
                    and there is no doubt in saying that we are one of the
                    finest{" "}
                    <Link href="/laravel-development">
                      Laravel service providers
                    </Link>{" "}
                    available in the market. We have in-depth knowledge of
                    scripting and can help in building easy-to-maintain, modern,
                    and platform-friendly websites.
                  </p>{" "}
                </div>
              </div>
              <div class="col-md-6">
                <h2>Technical expertise</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <span>Advance skills in PHP, HTML, CSS</span>
                  </li>
                  <li class="list-group-item">
                    <span>Experience working with a PHP framework</span>
                  </li>
                  <li class="list-group-item">
                    <span>
                      Have worked on projects like e-Commerce, CRM, CMS
                    </span>
                  </li>
                  <li class="list-group-item">
                    <span>Experience in frontend and backend</span>
                  </li>
                  <li class="list-group-item">
                    <span>Good understanding of database performance</span>
                  </li>
                  <li class="list-group-item">
                    <span>Understanding of cross platforms</span>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="new-custom-section">
        <div class="container">
          <h2>
            Hire Laravel developer in India for custom Laravel development
          </h2>
          <div class="custom-solution-bx">
            <div class="row">
              <div class="col-md-6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        src="/img/hiredevelopers/custom-icon1.png"
                        alt="icon-1"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>1. eCommerce development</h3>
                      <p>
                        Get the most flexible solution for your eCommerce
                        business with the help of our laravel developers.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        src="/img/hiredevelopers/custom-icon2.png"
                        alt="icon-2"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>2. Migration solution</h3>
                      <p>
                        Our dedicated laravel developers will help you to get
                        the right kind of migration services.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        src="/img/hiredevelopers/custom-icon3.png"
                        alt="icon-3"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>3. CMS solution</h3>
                      <p>
                        Affordable and result driven cakephp development
                        solutions to help your business to grow.
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
                        width={64}
                        height={100}
                        src="/img/hiredevelopers/custom-icon4.png"
                        alt="icon-4"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>4. Social networking solution</h3>
                      <p>
                        Make networking easier with the right kind of one-source
                        web application with our laravel programmers.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        src="/img/hiredevelopers/custom-icon5.png"
                        alt="icon-5"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>5. Theme design &amp; integration</h3>
                      <p>
                        Easiest framework to integrate new themes and templates
                        with the help of our developers.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        src="/img/hiredevelopers/custom-icon6.png"
                        alt="icon-6"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>6. Extension development</h3>
                      <p>
                        We are ready to help you with extending your Laravel
                        extension.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <p>&nbsp;</p>{" "}
          </div>
        </div>
      </section>
      <section class="dev_step_solution">
        <div class="container">
          <h2 class="title_heading">Hire laravel programmer in 5 easy steps</h2>
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
                title="Hire Python Developers"
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
                  title="Hire Laravel Developer"
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
                    href="/hire-codeigniter-developers"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire CodeIgniter Developer</h3>
                        <div class="other-project-logo">
                          <Image
                            width={90}
                            height={100}
                            src="/img/hiredevelopers/codeigniter_img.png"
                            alt="img"
                          />
                        </div>
                        <p>
                          <span>
                            We have expert CodeIgniter web developers to work
                            with your project at budget friendly rates.
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
              width={100}
              height={100}
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
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
