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
                <h1 class="slide_title">Hire Node.JS Developer </h1>
                <div class="subinstet">
                  Hire node.js experts from the hub of talented developers to
                  attain your development needs.
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
                      title="Hire NodeJS Developer"
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
                    alt="Hire Node.JS Developer "
                    src="/img/hiredevelopers/node_js.png"
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
                  <h2>Hire node.js programmer</h2>
                  <p style={{ textAlign: "justify" }}>
                    Logicspice offers a wide range of node.js application
                    development services which let you create highly effective,
                    scalable websites and applications. We have a large pool of
                    node.js developer who keep themselves updated with the
                    latest technology and updates in node.js. Our team of
                    Node.js experts delivers results oriented and creative
                    development service to the clients.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Node JS written in javascript can work on any OS. This is
                    why every big brand like Linkedin are using node.js for
                    creating web applications. With our node.js developer, you
                    get the complete control over your project and get the
                    project delivered according to your requirements.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Hire node.js developer from us and get completely
                    transparent process, high quality coding at competitive
                    price. Our developers have worked on various aspects of
                    resources and technology which assure to deliver the best
                    output.
                  </p>{" "}
                </div>
              </div>
              <div class="col-md-6">
                <h2>Technical expertise</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <span>
                      Understanding of front end development Technologies
                    </span>
                  </li>
                  <li class="list-group-item">
                    <span>Good Knowledge of node.js framework</span>
                  </li>
                  <li class="list-group-item">
                    <span>Proficiency in Restful APIs</span>
                  </li>
                  <li class="list-group-item">
                    <span>HTML5 &amp; CSS3</span>
                  </li>
                  <li class="list-group-item">
                    <span>Familiar with MVC framework</span>
                  </li>
                  <li class="list-group-item">
                    <span>Good Grasp of Asynchronous Programming</span>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="new-custom-section">
        <div class="container">
          <h2>Hire us for following custom node.js solutions</h2>
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
                        src="/img/hiredevelopers/custom-icon1.png"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>1. API Development &amp; Integration</h3>
                      <p>
                        Our dedicated node.js developers are proficient in
                        developing API&rsquo;s for web application.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-5"
                        src="/img/hiredevelopers/custom-icon5.png"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>2. Enterprise Solution</h3>
                      <p>
                        We develop business apps which surely help your business
                        expand and grow exponentially.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-3"
                        src="/img/hiredevelopers/custom-icon3.png"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>3. Upgradation &amp; Migration</h3>
                      <p>
                        Easily get migrated PHP and CGI to Node.js to improve
                        its security, speed, and reliability.
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
                        alt="icon-4"
                        src="/img/hiredevelopers/custom-icon4.png"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>4. Plug-ins Development</h3>
                      <p>
                        Our freelance node js have expertise in developing
                        plug-ins and module development solutions.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-2"
                        src="/img/hiredevelopers/custom-icon2.png"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>5. Custom Web Application Development</h3>
                      <p>
                        Hire node.js experts who develop custom web apps which
                        meets your business requirement.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-6"
                        src="/img/hiredevelopers/custom-icon6.png"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>6. Security Enhancement</h3>
                      <p>
                        We are aware of the protecting the user data and ensure
                        that the web application is secured by the latest
                        firewall.
                      </p>
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
            Hire expert node.js developer in 5 easy steps
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
                title="Hire NodeJS Developers"
              />
              Hire Now!
            </a>
          </div>
        </div>
      </section>
      <section class="portfolio_hire">
        <div class="container-fluid">
          <div id="hire-generic" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <div class="row">
                  <div class="col-md-6">
                    <div class="port_feat_img">
                      <span>
                        <Image
                          width={808}
                          height={100}
                          src="/img/hiredevelopers/treasureMap--1-.png"
                          alt="Logicspice note js portfolio"
                          class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                        />{" "}
                      </span>
                    </div>
                    <div class="portimagesec_shadow"></div>
                  </div>
                  <div class="col-md-6">
                    <ul class="port_feat">
                      <li>
                        <b>Website Name:</b> Treasure Map
                      </li>
                      <li>
                        <b>Website URL:</b>{" "}
                        https://itunes.apple.com/in/app/treasuremap-club/id1294993934?mt=8
                      </li>
                      <li>
                        <b>Framework:</b> Node
                      </li>
                      <li>
                        <b>Language:</b>{" "}
                      </li>
                      <li>
                        <b>Database:</b>{" "}
                      </li>
                      <li>
                        <b>Server:</b>{" "}
                      </li>
                      <li>
                        <b>Overview:</b>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
                  title="Hire NodeJS Developers"
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
                    href="/hire-php-developers"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire PHP Developer</h3>
                        <div class="other-project-logo">
                          <Image
                            width={90}
                            height={100}
                            src="/img/hiredevelopers/php-img.png"
                            alt="img"
                          />
                        </div>
                        <p>
                          <span>
                            Hire dedicated and full time remote PHP programmers
                            who will mould your idea into digital blueprints.
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
                    href="/hire-quality-analyst"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire Quality Assurance Tester</h3>
                        <div class="other-project-logo">
                          <Image
                            width={90}
                            height={100}
                            src="/img/hiredevelopers/qa-img.png"
                            alt="img"
                          />
                        </div>
                        <p>
                          <span>
                            Hire expert quality assurance tester to make your
                            website,software applications or mobile app bug
                            free.
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
