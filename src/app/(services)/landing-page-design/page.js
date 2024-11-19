"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import Contactusmodel from "@/app/Components/Contactusmodel";

import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.min.css";
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
      <section className="header-LPD">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-6 col-md-offset-1">
              <h1>Landing Page Design</h1>
              <p>
                We&apos;ll Develop a Landing Page that will Hold your users at
                their first land.
              </p>
              <p>We create websites that are compatible for any devices.</p>
            </div>
            <div className="col-md-6 col-sm-6">
              <Image
                unoptimized={true}
                width={380}
                height={500 / (100 / 100)}
                alt="Landing page design"
                src="/img/landingpagedesign/landing_top_img.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="dream-live">
        <div className="container">
          <div className="heading-main">
            <h2>We Make Your Dream Live</h2>
            <p>
              We&apos;ll create a Landing Page that will attract your website
              visitors and convert them into valuable leads.
            </p>
          </div>
          <div className="valuable-leads">
            <div className="row">
              <div className="col-md-5 col-sm-6">
                <ul>
                  <li>
                    <span>01</span>Optimized Landing Page Design
                  </li>
                  <li>
                    <span>02</span>Cost effective Design &amp; Development
                  </li>
                  <li>
                    <span>03</span>Direct Lead Generation Design
                  </li>
                  <li>
                    <span>04</span>Creative Services
                  </li>
                  <li>
                    <span>05</span>Expertise in handling Large Complex Designs
                  </li>
                  <li>
                    <span>06</span>Landing Page Development Services
                  </li>
                  <li>
                    <span>07</span>Start Up Business Landing Page
                  </li>
                  <li>
                    <span>08</span>Rapid Design And Development
                  </li>
                  <li>
                    <span>09</span>Landing Page For Ecommerce &amp; B2B Portal
                  </li>
                </ul>
              </div>
              <div className="col-md-7 col-sm-6">
                <Image
                  unoptimized={true}
                  width={600}
                  height={500 / (100 / 100)}
                  alt="img"
                  src="/img/landingpagedesign/call_live.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="intelligent-presentation">
        <div className="container">
          <div className="heading-main">
            <h2>Why Landing Page Website</h2>
            <p>
              We make outwardly engaging and intelligent presentation pages
              which are intuitive and simple to peruse. Your viewer will be one
              stage away.
            </p>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="why_cgooseus_section_col_bx">
                <div className="why_cgooseus_section_col_bx_icon">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="img"
                    src="/img/landingpagedesign/more_effective_icon.png"
                  />
                </div>
                <div className="why_cgooseus_section_col_bx_name">
                  More Effective
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="why_cgooseus_section_col_bx">
                <div className="why_cgooseus_section_col_bx_icon">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="img"
                    src="/img/landingpagedesign/easytonavigate_icon.png"
                  />
                </div>
                <div className="why_cgooseus_section_col_bx_name">
                  Easy to Navigate
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="why_cgooseus_section_col_bx">
                <div className="why_cgooseus_section_col_bx_icon">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="img"
                    src="/img/landingpagedesign/conversion_icon.png"
                  />
                </div>
                <div className="why_cgooseus_section_col_bx_name">
                  Better Conversion
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="why_cgooseus_section_col_bx">
                <div className="why_cgooseus_section_col_bx_icon">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="img"
                    src="/img/landingpagedesign/procing_icon.png"
                  />
                </div>
                <div className="why_cgooseus_section_col_bx_name">
                  Economical Pricing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="visually-appealing">
        <div className="container">
          <div className="heading-main">
            <h2>Our Promise</h2>
            <p>
              We create visually appealing and interactive landing pages which
              are intuitive and easy to read. Your visitors will be one step
              away.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="why_cgooseus_section_col_bx">
                <div className="why_cgooseus_section_col_bx_icon_sh">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="img"
                    src="/img/landingpagedesign/callaction_icon.png"
                  />
                </div>
                <div className="why_cgooseus_section_col_bx_name">
                  Impactful Call to Action
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="why_cgooseus_section_col_bx">
                <div className="why_cgooseus_section_col_bx_icon_sh">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="img"
                    src="/img/landingpagedesign/dynamic_icon.png"
                  />
                </div>
                <div className="why_cgooseus_section_col_bx_name">
                  Dynamic Integration
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="why_cgooseus_section_col_bx">
                <div className="why_cgooseus_section_col_bx_icon_sh">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="img"
                    src="/img/landingpagedesign/user_friendly_icon.png"
                  />
                </div>
                <div className="why_cgooseus_section_col_bx_name">
                  User friendly Layout
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="why_cgooseus_section_col_bx">
                <div className="why_cgooseus_section_col_bx_icon_sh">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="img"
                    src="/img/landingpagedesign/attractive_structure_icon.png"
                  />
                </div>
                <div className="why_cgooseus_section_col_bx_name">
                  Attractive Structure
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="why_cgooseus_section_col_bx">
                <div className="why_cgooseus_section_col_bx_icon_sh">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="img"
                    src="/img/landingpagedesign/design_flaxi_icon.png"
                  />
                </div>
                <div className="why_cgooseus_section_col_bx_name">
                  Design Flexibility
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="why_cgooseus_section_col_bx">
                <div className="why_cgooseus_section_col_bx_icon_sh">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="img"
                    src="/img/landingpagedesign/seo_fr_icon.png"
                  />
                </div>
                <div className="why_cgooseus_section_col_bx_name">
                  SEO Friendly
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lets_talk">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                <span>Excited?</span> Let&apos;s Talk
              </h2>
              <h3>We serve you on first Priority.</h3>
              <p>
                You can easily get in touch with us through any way that you are
                comfortable with. Call Us&sbquo; mail us or Skype with us...
              </p>
              <div className="row">
                <div className="col-sm-4">
                  <div className="icons_letstalk">
                    <i className="fa fa-mobile" aria-hidden="true"></i>
                  </div>
                  <div className="name_letstalk">GIVE US A RING</div>
                  <div className="info_letstalk">+91-141-4021056</div>
                </div>
                <div className="col-sm-4">
                  <div className="icons_letstalk">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="name_letstalk">WRITE TO US</div>
                  <div className="info_letstalk">info@logicspice.com</div>
                </div>
                <div className="col-sm-4">
                  <div className="icons_letstalk">
                    <i className="fa-brands fa-skype"></i>
                  </div>
                  <div className="name_letstalk">SKYPE WITH US</div>
                  <div className="info_letstalk">logicspice</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <div className="lets_tala_made">We made them Happy.</div>
                <Image
                  unoptimized={true}
                  width={150}
                  height={100}
                  alt="img"
                  src="/img/landingpagedesign/callto_solution_img.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="design-process">
        <div className="container">
          <div className="heading-main">
            <h2>Start a Project with us</h2>
            <p>
              We create visually appealing and interactive landing pages which
              are intuitive and easy to read. Your visitors will be one step
              away.
            </p>
          </div>

          <div className="design-step">
            <div className="row">
              <div className="col-md-6">
                <Image
                  unoptimized={true}
                  width={300}
                  height={500 / (100 / 100)}
                  alt="img"
                  src="/img/landingpagedesign/impressive_design_img.png"
                />
              </div>
              <div className="col-md-6">
                <h2>Impressive Design</h2>
                <p>
                  A website is a reflection of an organization and plays an
                  important role in company&apos;s success. So a website should
                  be designed in a way that it reflects worthwhile points of
                  that organization. A good designed and eye-catching website
                  plays a vital role in attracting visitors and turning them
                  into prospective clients. Designing an outstanding website is
                  indeed complex and requires professional graphic designers.
                  Our target is to provide all those small scale businesses with
                  outstanding websites that fetch potential customers and
                  moreover provides strength to their business with the
                  capability to survive in the competitive world.
                </p>
              </div>
            </div>
          </div>
          <div className="design-step design-step-right">
            <div className="row">
              <div className="col-md-6 pull-right">
                <Image
                  unoptimized={true}
                  width={300}
                  height={500 / (100 / 100)}
                  alt="img"
                  src="/img/landingpagedesign/web_dev_img.png"
                />
              </div>
              <div className="col-md-6 pull-left">
                <h2>Web Development</h2>
                <p>
                  We have with us extensively qualified and trained
                  Developers&sbquo; who are masters in the domains of web
                  development. We have the ability to give your business a whole
                  new definition along-with the necessary push to the market.
                  Avail from us these development services and provide your
                  business a necessary boost. Development is our powerful
                  tool&sbquo; whether it is the web development or mobile
                  application development. We have years of experience in all
                  these verticals with a promise to excellence and a customer
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="design-step">
            <div className="row">
              <div className="col-md-6">
                <Image
                  unoptimized={true}
                  width={300}
                  height={500 / (100 / 100)}
                  alt="img"
                  src="/img/landingpagedesign/app_develop_img.png"
                />
              </div>
              <div className="col-md-6">
                <h2>Astounding App Development</h2>
                <p>Developing a tiny World inside Your Mobile Phone!</p>
                <p>
                  Whole world seems to be available in handhold devices
                  including notepads&sbquo; tabs&sbquo; smart phones and many
                  more.{" "}
                </p>
                <p>
                  {" "}
                  We provide Android and iPhone/iPad mobile apps development
                  services with satisfaction&sbquo; consistency&sbquo; and great
                  perfection. We have a good base of creative designers who love
                  to experiment and have been delivering outstanding designs
                  with innovation and uniqueness. With our very effective apps
                  development services&sbquo; you can get the push button for
                  your business to grow manifolds.
                </p>
              </div>
            </div>
          </div>
          <div className="design-step design-step-right">
            <div className="row">
              <div className="col-md-6 pull-right">
                <Image
                  unoptimized={true}
                  width={300}
                  height={500 / (100 / 100)}
                  alt="img"
                  src="/img/landingpagedesign/skilled_developer_img.png"
                />
              </div>
              <div className="col-md-6 pull-left">
                <h2>Skilled Developers</h2>
                <p>
                  We have with us a good foundation of creative&sbquo; hard
                  working&sbquo; flexible and skilled web and application
                  developers who always think of developing a project that
                  provides clients with the great level of satisfaction and best
                  of the work and also work to deliver the project from web
                  development to app development within the decided time frame.
                </p>
              </div>
            </div>
          </div>
          <div className="design-step">
            <div className="row">
              <div className="col-md-6">
                <Image
                  unoptimized={true}
                  width={300}
                  height={500 / (100 / 100)}
                  alt="img"
                  src="/img/landingpagedesign/hardwork_img.png"
                />
              </div>
              <div className="col-md-6">
                <h2>We do all hard work for you</h2>
                <p>Whatever we do&sbquo; we make it for you. </p>
                <p>
                  {" "}
                  Our knowledgeabl&sbquo; experienced and skilled team members
                  make sure to deliver all the project with our client specific
                  need and work till we get it to our customer satisfaction. We
                  work so as to provide a client with all that a business need
                  to expand and stand out in the market.
                </p>
              </div>
            </div>
          </div>
          <div className="design-step design-step-right">
            <div className="row">
              <div className="col-md-6 pull-right">
                <Image
                  unoptimized={true}
                  width={300}
                  height={500 / (100 / 100)}
                  alt="img"
                  src="/img/landingpagedesign/user_support_img.png"
                />
              </div>
              <div className="col-md-6 pull-left">
                <h2>Complete end-to-end user support</h2>
                <p>
                  Our dedication and interaction with the clients/customers does
                  not ends up on the delivery of projects. We maintain a
                  powerful relation with the clients and make sure timely
                  maintenance&sbquo; testing&sbquo; and technical support after
                  a project delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <Link
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              unoptimized={true}
              width={100}
              height={100}
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
            />
          </Link>
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
