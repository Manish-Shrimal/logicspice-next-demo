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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Page = () => {
  const item = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
      text: "I hired this team for a very complex project that involved handling many different types of users, payment options, and social network integration. Extremely timely and professional. Will use again!",
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
                <h1 class="slide_title">Hire CakePHP Developer</h1>
                <div class="subinstet">
                  Hire expert freelance cakephp developers from the hub of
                  talented developers to attain your development needs.
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
                    width={300}
                    height={100 / (100 / 100)}
                    alt="Hire CakePHP Developer"
                    src="/img/hiredevelopers/hire_cakephp_developer.png"
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
                  <h2>Hire CakePHP programmer</h2>
                  <p>
                    <b>Are you looking for a solution in cakePHP?</b> Then, you
                    are at right place. Logicspice is a leading{" "}
                    <Link href="/cakephp-development">
                      cakePHP development company
                    </Link>{" "}
                    with talented developers serving the industry over years. We
                    are equipped with cakephp developers who serves client as
                    per their project requirement with cakephp web development,
                    CMS development.
                  </p>
                  <p>
                    Being an open source PHP framework that makes your web
                    application better which would not only make the web portals
                    or applications unique but also minimize the development
                    cost &amp; code as well. Our CakePHP developers &amp;
                    designer work together to develop end-to-end solution while
                    using well-equipped development infrastructure to maintain
                    the best of CakePHP industry standards. We have successfully
                    delivered cakePHP projects to number of businesses globally.
                  </p>
                  <p>
                    You can hire cakephp programmer which suits your requirement
                    best. We provide comprehensive options to select from the
                    talented hub of developers. We ensure to deliver cakephp
                    project in the given time and budget. Hire cakephp
                    developers from logicspice for result driven solution.
                  </p>{" "}
                </div>
              </div>
              <div class="col-md-6">
                <h2>Technical expertise</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <span>Advance knowledge Of CakePHP framework</span>
                  </li>
                  <li class="list-group-item">
                    <span>Knowledge of MVC architecture</span>
                  </li>
                  <li class="list-group-item">
                    <span>Knowledge of javaScript &amp; jQuery</span>
                  </li>
                  <li class="list-group-item">
                    <span>Concept of oops</span>
                  </li>
                  <li class="list-group-item">
                    <span>Knowledge of MySQL database</span>
                  </li>
                  <li class="list-group-item">
                    <span>Programming skills in PHP5 and HTML5</span>
                  </li>
                  <li class="list-group-item">
                    <span>
                      Strong knowledge of CakePHP and its extensive feature set
                    </span>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="new-custom-section">
        <div class="container">
          <h2>Hire us for following custom CakePHP solutions</h2>
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
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>1. Web development</h3>
                      <p>
                        Affordable and result driven cakephp development
                        solutions to help your business to grow.
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
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>2. Shopping cart solution</h3>
                      <p>
                        Get unique &amp; excellent shopping cart solution using
                        the cakePHP rapid development process.
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
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>3. CMS development</h3>
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
                        width={60}
                        height={100}
                        alt="icon-4"
                        src="/img/hiredevelopers/custom-icon4.png"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>4. Plugin development</h3>
                      <p>
                        Get technical expert for cakephp plugin development
                        while allowing hierarchical, role based, simple
                        authorization.
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
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>5. Application development</h3>
                      <p>
                        Get highest quality application with the help of ORM and
                        MVC from our cakephp expert developers.
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
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>6. Social networking solution</h3>
                      <p>
                        We offer social integration into web applications from
                        single API which can interface with multiple social
                        networks.
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
            Hire expert cake php developer in 5 easy steps
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
                        width={808}
                        height={100}
                        src="/img/cakephpdevelopment/teacherpublisher.png"
                        alt="Logicspice cakephp portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />{" "}
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> Teacher Publisher
                    </li>
                    <li>
                      <b>Website URL:</b> http://teacherpublisher.com/
                    </li>
                    <li>
                      <b>Framework:</b> CakePHP
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
                      <b>Overview:</b> Teacher Publisher Website
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
                        src="/img/cakephpdevelopment/a544f_altijdbon.png"
                        alt="Logicspice cakephp portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />{" "}
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> Altijdbon
                    </li>
                    <li>
                      <b>Website URL:</b> https://www.altijdbon.nl/
                    </li>
                    <li>
                      <b>Framework:</b> CakePHP
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
                      <b>Overview:</b> Marketplace Site
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
                        src="/img/cakephpdevelopment/a4221_uloan.png"
                        alt="Logicspice cakephp portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />{" "}
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> uLoan
                    </li>
                    <li>
                      <b>Website URL:</b> http://www.uloan.club/
                    </li>
                    <li>
                      <b>Framework:</b> CakePHP
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
                      <b>Overview:</b> ooleys is a Job portal, it facilitates
                      perfect platform for Recruiter to find the correct
                      candidate for their company and candidate can also search
                      for the jobs within different categories over the site.
                      Recruiter will be able to post the job over the web
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
                        src="/img/cakephpdevelopment/6b36c_locumsite.png"
                        alt="Logicspice cakephp portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />{" "}
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> LocumSite
                    </li>
                    <li>
                      <b>Website URL:</b> http://www.locumsite.co.uk/
                    </li>
                    <li>
                      <b>Framework:</b> CakePHP
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
                      <b>Overview:</b> Doctors/Medical Website
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
                        src="/img/cakephpdevelopment/694ce_your-pansion.png"
                        alt="Logicspice cakephp portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />{" "}
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> YourPension
                    </li>
                    <li>
                      <b>Website URL:</b> http://www.yourpension.ch/
                    </li>
                    <li>
                      <b>Framework:</b> CakePHP
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
                      <b>Overview:</b> The motto of &quot;Pension Plan
                      Management&quot; web solution is to provide online viewing
                      portfolio that will be offered by administrator that would
                      be a User Centric, User Oriented and would be easy to
                      navigate and use. The objective of the proposed web
                      solution{" "}
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
                        src="/img/cakephpdevelopment/3f714_shopbook.png"
                        alt="Logicspice cakephp portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />{" "}
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> Shopbook
                    </li>
                    <li>
                      <b>Website URL:</b> https://www.shopbook.co.za/
                    </li>
                    <li>
                      <b>Framework:</b> CakePHP
                    </li>
                    <li>
                      <b>Language:</b> PHP5.3.x, AJAX, jQuery, Java scripts,
                      Codeigniter, XML
                    </li>
                    <li>
                      <b>Database:</b> MySQL
                    </li>
                    <li>
                      <b>Server:</b> Apache
                    </li>
                    <li>
                      <b>Overview:</b> This website facilitates a shoppers to do
                      shopping by choosing products as per the selected
                      categories/store/vendors/brands, add products into a
                      shopping cart and securely make payment for the products.
                      The website/app will basically be an online shopping
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
                        src="/img/cakephpdevelopment/90037_Iancooking-808px.png"
                        alt="Logicspice cakephp portfolio"
                        class="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                      />{" "}
                    </span>
                  </div>
                  <div class="portimagesec_shadow"></div>
                </div>
                <div class="col-md-6">
                  <ul class="port_feat">
                    <li>
                      <b>Website Name:</b> iamcooking
                    </li>
                    <li>
                      <b>Website URL:</b> https://www.iamcooking.co.za/
                    </li>
                    <li>
                      <b>Framework:</b> CakePHP
                    </li>
                    <li>
                      <b>Language:</b> PHP5.3.x, AJAX, jQuery, Java scripts
                    </li>
                    <li>
                      <b>Database:</b> MySQL
                    </li>
                    <li>
                      <b>Server:</b> Apache
                    </li>
                    <li>
                      <b>Overview:</b> Iamcooking that we are scoping will
                      serves as Online Food Ordering Website using custom
                      framework (PHP) that will facilitate a shoppers to do
                      place order by choosing items as per the selected
                      categories/store/chef, add products into a shopping cart
                      and se
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
                    href="/hire-quality-analyst"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire Quality Assurance Tester</h3>
                        <div class="other-project-logo">
                          <Image
                            width={100}
                            height={100}
                            src="/img/softwaretestingservices/qa-img.png"
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
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/hire-angular-js-experts"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire AngularJS Developer</h3>
                        <div class="other-project-logo">
                          <Image
                            width={100}
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
