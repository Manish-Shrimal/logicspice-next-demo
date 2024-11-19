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
      <section class="hire_developer_back_iin otherhire_developer_back_iin">
        <div class="hire_developer_back_iin_mask new-developers-mask">
          <div class="container">
            <div class="row">
              <div class="col-md-8 text-start">
                <h1 class="slide_title">Hire Magento Developer</h1>
                <div class="subinstet">
                  From the diversified pool of developers, hire Magento
                  programmer that best suits your requirements in an effective
                  manner.{" "}
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
                      title="Hire Magento Developer"
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
                    width={230}
                    height={100}
                    alt="Hire Magento Developer"
                    src="/img/hiredevelopers/hire_magento_experts.png"
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
                  <h2>Hire magento expert</h2>
                  <p>
                    Logicspice offers a hub of talented magento ecommerce
                    developers with vivid experience who are able to handle even
                    the most complex requirements in a hassle-free manner. By
                    working on a range of projects, our developers have garnered
                    skills that best suits any requirement with the most
                    advanced methodology for{" "}
                    <Link href="/magento-development">
                      magento development
                    </Link>
                    .<br />
                    <br />
                    Our proficient magento experts tend to participate
                    proactively in the complete development process of either
                    your new or existing Magento eCommerce store. With
                    state-of-the-art technology involved, we ensure to deliver a
                    solution that not only caters to your development needs, it
                    also helps you in achieving the set goals in a much easier
                    manner. <br />
                    <br />
                    Our team of dedicated magento developer is aware of the
                    latest version of magento. We are able to deliver highly
                    oriented solution for your e-Commerce store. <br />
                    &nbsp;
                  </p>{" "}
                </div>
              </div>
              <div class="col-md-6">
                <h2>Technical expertise</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <span>Multiple eCommerce integration</span>
                  </li>
                  <li class="list-group-item">
                    <span>Strong widget development skills</span>
                  </li>
                  <li class="list-group-item">
                    <span>Proficient in javascript</span>
                  </li>
                  <li class="list-group-item">
                    <span>Knowledge of CMS and MVC frameworks</span>
                  </li>
                  <li class="list-group-item">
                    <span>Custom theme development</span>
                  </li>
                  <li class="list-group-item">
                    <span>Knowledge of PSD and XHTML</span>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="new-custom-section">
        <div class="container">
          <h2>Hire us for following magento development solution</h2>
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
                      <h3>1. Custom solution</h3>
                      <p>
                        Get amazing customized development for your requirements
                        with advanced technology backing it.
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
                      <h3>2. Magento shopping carts solution</h3>
                      <p>
                        Avail easy to use, highly functional and dynamics
                        shopping cart solution for your eCommerce store.
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
                      <h3>3. Magento plugin development</h3>
                      <p>
                        Evolve your own plugin that can give an added boost to
                        the site&rsquo;s functionality.
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
                      <h3>4. Magento CMS development</h3>
                      <p>
                        We provide a solution that offers improved experience to
                        the users on any device.
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
                      <h3>5. Magento migration solutions</h3>
                      <p>
                        Proficient plugin tools that easily migrates for
                        providing improved functionality to the site.
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
                      <h3>6. Theme design integration</h3>
                      <p>
                        Highly dynamic customized themes that create amazing
                        impact on the visitors.
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
          <h2 class="title_heading">Hire magento experts in 5 easy steps</h2>
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
                title="Hire Magento Developers"
              />
              Hire Now!
            </a>
          </div>
        </div>
      </section>
      <section class="portfolio_hire PortfolioWebsiteSlider">
        <div class="container-fluid">
          <Slider {...item}>
            <div>
              <div class="row">
                <div class="col-md-6">
                  <div class="port_feat_img">
                    <span>
                      <Image
                        width={808}
                        height={100}
                        src="/img/hiredevelopers/regenepure.png"
                        alt="Logicspice magento portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />{" "}
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> Regene Pure
                    </li>
                    <li>
                      <b>Website URL:</b> http://www.regenepure.com/
                    </li>
                    <li>
                      <b>Framework:</b> Magento
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
                      <b>Overview:</b> eCommerce Website
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
                        src="/img/hiredevelopers/biggerboatdistribution.png"
                        alt="Logicspice magento portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />{" "}
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> Bigger Boat Distribution
                    </li>
                    <li>
                      <b>Website URL:</b> http://www.biggerboatdistribution.com/
                    </li>
                    <li>
                      <b>Framework:</b> Magento
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
                <Contactusmodel
                  modalStatus={modalOpen}
                  toggle={toggleModal}
                  title="Hire Magento Expert"
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
                    href="/hire-php-developers"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire PHP Developer</h3>
                        <div class="other-project-logo">
                          <Image
                            width={100}
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
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/hire-opencart-developers"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire Opencart Developer</h3>
                        <div class="other-project-logo">
                          <Image
                            width={100}
                            height={100}
                            src="/img/hiredevelopers/opencart-img.png"
                            alt="img"
                          />
                        </div>
                        <p>
                          <span>
                            Our dedicated Opencart experts ensure code is
                            written in the most effective way possible.
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
