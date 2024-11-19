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
      image: "/img/home/look/yp-logo.webp",
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
                <h1 class="slide_title">Hire CodeIgniter Developer</h1>
                <div class="subinstet">
                  Hire codeigniter programmer from the hub of talented
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
                  <a onClick={toggleModal} className="btn btn-primary">
                    <Contactusmodel
                      modalStatus={modalOpen}
                      toggle={toggleModal}
                      title="Hire CodeIgniter Developer"
                    />
                    Hire Now
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
                    width={233}
                    height={100}
                    alt="Hire WordPress Developer"
                    src="/img/hiredevelopers/Hire_codeigniter_developer.png"
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
                  <h2>Codeigniter developer for hire</h2>
                  <p>
                    Codeigniter is a powerful application development framework
                    to create full-featured web application which provides a
                    rich set of libraries for commonly needed tasks with a
                    simple interface and logical structure to access these
                    libraries. Logicspice offers the most proficient and expert{" "}
                    <Link href="/codeigniter-development">
                      codeigniter web developers
                    </Link>{" "}
                    offering affordable, cost-effective solutions that best suit
                    your project development requirements. <br />
                    <br />
                    Our dedicated codeigniter programmers have extensive
                    knowledge in MVC pattern, they deliver highly effective and
                    quality solution for your PHP development needs. After
                    hiring our expert codeigniter developer, you get the neatly
                    coded solution and extensive support from our codeigniter
                    web developers.
                    <br />
                    <br />
                    Logicspice is well known for its innovative and creative
                    approach in codeigniter. Hire codeigniter developer from us
                    and get outstanding results in the competitive market.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <h2>Technical expertise</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <span>Understanding in codeigniter framework</span>
                  </li>
                  <li class="list-group-item">
                    <span>Skills in PHP & HTML5</span>
                  </li>
                  <li class="list-group-item">
                    <span>Expertise in AJAX & MySQL</span>
                  </li>
                  <li class="list-group-item">
                    <span>Experience in codeigniter extension development</span>
                  </li>
                  <li class="list-group-item">
                    <span>CorePHP skills</span>
                  </li>
                  <li class="list-group-item">
                    <span>Excellence in handling clients</span>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="new-custom-section">
        <div class="container">
          <h2>Hire us for following codeigniter development solution</h2>
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
                        width={64}
                        height={100}
                        alt="icon-2"
                        src="/img/hiredevelopers/custom-icon2.png"
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
                        width={64}
                        height={100}
                        alt="icon-3"
                        src="/img/hiredevelopers/custom-icon3.png"
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
                        width={64}
                        height={100}
                        alt="icon-4"
                        src="/img/hiredevelopers/custom-icon4.png"
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
                        width={64}
                        height={100}
                        alt="icon-5"
                        src="/img/hiredevelopers/custom-icon5.png"
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
                        width={64}
                        height={100}
                        alt="icon-6"
                        src="/img/hiredevelopers/custom-icon6.png"
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
      <section class="dev_step_solution">
        <div class="container">
          <h2 class="title_heading">
            Hire expert codeigniter developer in 5 easy steps
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
                title="Hire Codeignitor Developer"
              />
              Hire Now
            </a>
          </div>
        </div>
      </section>
      <section class="portfolio_hire PortfolioWebsiteSlider">
        <div class="container">
          <Slider {...item}>
            <div>
              <div class="row">
                <div class="col-md-6">
                  <div class="port_feat_img">
                    <span>
                      <Image
                        width={808}
                        height={100}
                        src="/img/hiredevelopers/gloryfastboats--1-.png"
                        alt="Logicspice codeigniter portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />{" "}
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> GloryFastBoats
                    </li>
                    <li>
                      <b>Website URL:</b> http://www.gloryfastboats.com/
                    </li>
                    <li>
                      <b>Framework:</b> Codeigniter
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
                      <b>Overview:</b> Boat Company Website
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
                        width={808}
                        height={100}
                        src="/img/hiredevelopers/shjewellery.png"
                        alt="Logicspice codeigniter portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />{" "}
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> shjewellery
                    </li>
                    <li>
                      <b>Website URL:</b> http://www.shjewellery.com.au/
                    </li>
                    <li>
                      <b>Framework:</b> Codeigniter
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
                      <b>Overview:</b> Jewelry Website
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
                        width={808}
                        height={100}
                        src="/img/hiredevelopers/entitymakers.png"
                        alt="Logicspice codeigniter portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />{" "}
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> EntityMakers
                    </li>
                    <li>
                      <b>Website URL:</b> http://www.entitymakers.com.au/
                    </li>
                    <li>
                      <b>Framework:</b> Codeigniter
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
                      <b>Overview:</b> PDF generation Website
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
                <Contactusmodel
                  modalStatus={modalOpen}
                  toggle={toggleModal}
                  title="Hire Codeignitor Developer"
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
                    href="/hire-laravel-developers"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire Laravel Developer</h3>
                        <div class="other-project-logo">
                          <Image
                            width={100}
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
                            width={100}
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
                            width={100}
                            height={100}
                            src="/img/hiredevelopers/wordpress_img.png"
                            alt="img"
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
