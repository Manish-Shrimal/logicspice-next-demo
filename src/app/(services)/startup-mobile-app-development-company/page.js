"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "../../../../public/css/font-awesome.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {

    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <NavBar />
      <section className="startup_page_section_slide">
        <div className="container">
          <div className="carousel slide" id="startup">
            <div className="carousel-inner">
              <div className="item active">
                <div className="testimonial_sectks_row">
                  <h1 className="startup_sc_title">Startup App Development</h1>
                  <div className="startup_sc_subtitle">
                    We deliver top notch IT solution to startup business.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="startup_business_se js-reveal">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-3">
              <Image unoptimized={true}
                width={300}
                height={500 / (100 / 100)}
                alt="Startup Solution"
                src="/img/startupmobileappdevelopmentcompany/startup.png"
              />
            </div>
            <div className="col-sm-8 col-md-9">
              <div className="solution_idea">
                <div className="title_main">
                  You have Startup idea&sbquo; We have solution
                </div>
                <p>
                  Do you have a wonderful idea for your startup&sbquo; but stuck
                  to execute your idea? You need a team of creative designers
                  and developers who had previously worked with startups and
                  made them a successful business by providing them an effective
                  solution for their startup business.{" "}
                </p>
                <p>
                  Logicspice have a team of web &{" "}
                  <Link
                    href="/mobile-app-development"
                    target="_blank"
                  >
                    mobile app developers
                  </Link>{" "}
                  who can turn your idea into a successful business. Our team
                  consults with client to add more creativity in your startup
                  idea.{" "}
                </p>
                <p>
                  Logicspice is leading mobile & web development company who
                  worked as a tech partners with several startups from an idea
                  to successful launch. We understand the startups inside
                  out&sbquo; as were startup too.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="working_process">
        <div className="container">
          <h2 className="title_main">How We Nourish Your Startup Business?</h2>
          <div className="work_section">
            <div className="row">
              <div className="col-sm-4 col-md-6" data-aos="fade-left">
                <div className="image_working right_img">
                  <Image unoptimized={true}
                    width={100}
                    height={500 / (100 / 100)}
                    alt="Innovation as a Core Value -Logicspice"
                    src="/img/startupmobileappdevelopmentcompany/CoreValue.png"
                  />
                </div>
              </div>
              <div className="col-sm-8 col-md-6" data-aos="fade-right">
                <div className="idea_working">
                  <h3>Innovation as a Core Value</h3>
                  <p>
                    We go beyond the challenges. Innovation is not just by
                    word&sbquo; it is a daily work of our team. We have done it
                    right from custom table to integrating IoT devices with
                    mobile applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="work_section">
            <div className="col-sm-4 col-md-6 pull-right" data-aos="fade-left">
              <div className="image_working right_img">
                <Image unoptimized={true}
                  width={300}
                  height={500 / (100 / 100)}
                  alt="Stand Ahead From Competition"
                  src="/img/startupmobileappdevelopmentcompany/StandAheadFromCompetition.png"
                />
              </div>
            </div>
            <div className="col-sm-8 col-md-6 pull-left" data-aos="fade-right">
              <div className="idea_working">
                <h3>Stand Ahead From Competition</h3>
                <p>
                  The start business&sbquo; you are going to execute may be
                  surrounded by high competitors who has been in the market for
                  years. At Logicspice&sbquo; our developers and designers
                  develop the IT solution so you can stand ahead of competition.
                </p>
              </div>
            </div>
          </div>
          <div className="work_section">
            <div className="row">
              <div className="col-sm-4 col-md-6" data-aos="fade-left">
                <div className="image_working right_img">
                  <Image unoptimized={true}
                    width={300}
                    height={500 / (100 / 100)}
                    alt="Skilled Developers"
                    src="/img/startupmobileappdevelopmentcompany/SkilledDevelopers.png"
                  />
                </div>
              </div>
              <div className="col-sm-8 col-md-6" data-aos="fade-right">
                <div className="idea_working">
                  <h3>Skilled Developers</h3>
                  <p>
                    Logicspice has a team of skilled developers who develop the
                    complete stack through the Cloud&sbquo; Business
                    Logic&sbquo; API Layer and the front-end. Our team of
                    dedicated developers specialized in Android&sbquo; iPhone &{" "}
                    <Link href="/website-development">
                      web development service
                    </Link>{" "}
                    has helped the startup to reach their goal with minimized
                    cost & time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="work_section">
            <div className="col-sm-4 col-md-6 pull-right" data-aos="fade-right">
              <div className="image_working">
                <Image unoptimized={true}
                  width={300}
                  height={500 / (100 / 100)}
                  alt="Interactive UI"
                  src="/img/startupmobileappdevelopmentcompany/InteractiveUI.png"
                />
              </div>
            </div>
            <div className="col-sm-8 col-md-6 pull-left" data-aos="fade-left">
              <div className="idea_working">
                <h3>Interactive UI</h3>
                <p>
                  Logicspice have a team of quality designer who deliver
                  top-notch designs which speaks about your identity and brand.
                  We have a fully-integrated team of professional designer to
                  deliver powerful solution.
                </p>
              </div>
            </div>
          </div>
          <div className="work_section">
            <div className="row">
              <div className="col-sm-4 col-md-6" data-aos="fade-right">
                <div className="image_working">
                  <Image unoptimized={true}
                    width={300}
                    height={500 / (100 / 100)}
                    alt="Flexibility in Execution"
                    src="/img/startupmobileappdevelopmentcompany/Flexibility-Execution.png"
                  />
                </div>
              </div>
              <div className="col-sm-8 col-md-6" data-aos="fade-left">
                <div className="idea_working">
                  <h3>Flexibility in Execution</h3>
                  <p>
                    We were also a startup so we understand the challenges which
                    startup faces&sbquo; their requirements&sbquo;
                    specifications and deliver a cutting edge solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="work_section">
            <div className="col-sm-4 col-md-6 pull-right" data-aos="fade-right">
              <div className="image_working">
                <Image unoptimized={true}
                  width={300}
                  height={500 / (100 / 100)}
                  alt="User-End Priority"
                  src="/img/startupmobileappdevelopmentcompany/UserEndPriority.png"
                />
              </div>
            </div>
            <div className="col-sm-8 col-md-6 pull-left" data-aos="fade-left">
              <div className="idea_working">
                <h3>User-End Priority</h3>
                <p>
                  We develop the startup solution by keeping in mind about your
                  customer. You are our customer&sbquo; but your customer is our
                  user-end so we develop and design IT solution keeping the
                  end-users in mind. We deliver the solutions by following the
                  latest technologies and trends.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="enterprises">
        <div className="container">
          <h2>
            How can we work together for building successful enterprises from
            your startup idea.
          </h2>
          <div className="row">
            <div className="col-sm-6">
              <div className="box_enterprises">
                <div className="enterprises-left">
                  <a href="#">
                    <Image unoptimized={true}
                      width={100}
                      height={100}
                      className="enterprises-object"
                      src="/img/startupmobileappdevelopmentcompany/discuss.png"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="enterprises-body">
                  <h3 className="enterprises-heading">Discuss Your Idea</h3>
                  <p>
                    With over 10 years of experience&sbquo; we validate your
                    idea&sbquo; discuss with our marketing experts and present a
                    solution.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="box_enterprises">
                <div className="enterprises-left">
                  <a href="#">
                    <Image unoptimized={true}
                      width={100}
                      height={100}
                      className="enterprises-object"
                      src="/img/startupmobileappdevelopmentcompany/goal.png"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="enterprises-body">
                  <h3 className="enterprises-heading">Discover Your Goal</h3>
                  <p>
                    We did into your brain and know what you are expecting from
                    your business.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="box_enterprises">
                <div className="enterprises-left">
                  <a href="#">
                    <Image unoptimized={true}
                      width={100}
                      height={100}
                      className="enterprises-object"
                      src="/img/startupmobileappdevelopmentcompany/product.png"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="enterprises-body">
                  <h3 className="enterprises-heading">Product Execution</h3>
                  <p>
                    Together we deliver a successful product launch&sbquo; fully
                    featured&sbquo; highly customizable and mobile responsive.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="box_enterprises">
                <div className="enterprises-left">
                  <a href="#">
                    <Image unoptimized={true}
                      width={100}
                      height={100}
                      className="enterprises-object"
                      src="/img/startupmobileappdevelopmentcompany/relationship.png"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="enterprises-body">
                  <h3 className="enterprises-heading">
                    Long Term Relationship
                  </h3>
                  <p>
                    We are always ready to enhance your project by adding latest
                    features and technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hire_expert on_staratup_hire js-reveal">
        <div className="container">
          <div className="rd_expet">
            <div className="home_nnew">
              <h2 className="here_exped_tital">
                Let&apos;s mould Your business in Your Way with Our Developers
              </h2>{" "}
            </div>
            <div className="hire_ex">
              Hire developers & programmers from logicspice. Our technical
              experts and skilled developers offer you quite a huge range of
              services in Web&sbquo; iPhone and Android development.
            </div>

            <div className="hire_s">
              <ul>
                <li>
                  <Link href="/hire-android-app-developers">
                    <div className="hire_ex_img">
                      <Image unoptimized={true}
                        width={90}
                        height={100 / (100 / 100)}
                        src="/img/startupmobileappdevelopmentcompany/hire-web-developer.png"
                        alt="hire web and app developers"
                      />
                    </div>
                    <div className="hire_ex_txt">
                      Hire Android App Developer
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/hire-ios-app-developers">
                    <div className="hire_ex_img">
                      <Image unoptimized={true}
                        width={90}
                        height={100 / (100 / 100)}
                        src="/img/startupmobileappdevelopmentcompany/hire-ios-developer.png"
                        alt="hire web and app developers"
                      />
                    </div>
                    <div className="hire_ex_txt">Hire iOS App Developer</div>
                  </Link>
                </li>
                <li>
                  <Link href="/hire-web-developers">
                    <div className="hire_ex_img">
                      <Image unoptimized={true}
                         width={90}
                         height={100 / (100 / 100)}
                        src="/img/startupmobileappdevelopmentcompany/hire-developer.png"
                        alt="hire web and app developers"
                      />
                    </div>
                    <div className="hire_ex_txt">Hire Web Developer</div>
                  </Link>
                </li>
                <li>
                  <Link href="/hire-cakephp-developers">
                    <div className="hire_ex_img">
                      <Image unoptimized={true}
                         width={90}
                         height={100 / (100 / 100)}
                        src="/img/startupmobileappdevelopmentcompany/hire-cakephp.png"
                        alt="hire web and app developers"
                      />
                    </div>
                    <div className="hire_ex_txt">Hire Cakephp Developer</div>
                  </Link>
                </li>
                <li>
                  <Link href="/hire-wordpress-experts">
                    <div className="hire_ex_img">
                      <Image unoptimized={true}
                         width={90}
                         height={100 / (100 / 100)}
                        src="/img/startupmobileappdevelopmentcompany/hire-wordpress.png"
                        alt="hire web and app developers"
                      />
                    </div>
                    <div className="hire_ex_txt">Hire Wordpress Developer</div>
                  </Link>
                </li>
                <li>
                  <Link href="/hire-laravel-developers">
                    <div className="hire_ex_img">
                      <Image unoptimized={true}
                         width={90}
                         height={100 / (100 / 100)}
                        src="/img/startupmobileappdevelopmentcompany/hire-laraval.png"
                        alt="hire web and app developers"
                      />
                    </div>
                    <div className="hire_ex_txt">Hire Laravel Developer</div>
                  </Link>
                </li>
                <li>
                  <Link href="/hire-codeigniter-developers">
                    <div className="hire_ex_img">
                      <Image unoptimized={true}
                         width={90}
                         height={100 / (100 / 100)}
                        src="/img/startupmobileappdevelopmentcompany/hire-codeigniter.png"
                        alt="hire web and app developers"
                      />
                    </div>
                    <div className="hire_ex_txt">
                      Hire Codeigniter Developers
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/hire-magento-experts">
                    <div className="hire_ex_img">
                      <Image unoptimized={true}
                        width={90}
                        height={100 / (100 / 100)}
                        src="/img/startupmobileappdevelopmentcompany/hire-magento.png"
                        alt="hire web and app developers"
                      />
                    </div>
                    <div className="hire_ex_txt">Hire Magento Develop</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="discuss_project">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <p>
                LET&apos;S <strong>DISCUSS</strong> FOR YOUR PROJECT{" "}
                <strong>IDEA</strong>
              </p>
            </div>
            <div className="col-sm-4">
              <Link
                href="/contact-us"
                className="btn btn-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image unoptimized={true}
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
      </section>

      <Footer />
    </>
  );
};

export default Page;
