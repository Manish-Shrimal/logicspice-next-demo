"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
const Page = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.35,
    centerMode: true,
    vertical: false,
    autoplay: true,
    arrows: true,
  };
  var clientfeadback = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

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
      <div className="magentoDevelopment"><section className="laravel-banner magento-banner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="laravel-banner-txt">
                <h1>
                  Magento <br />
                  Web Development
                </h1>
                <ul>
                  <li>Website Development </li>
                  <li>3rd Party Application Integration</li>
                  <li>Shopping Cart Service</li>
                  <li>Extension and Attachements</li>
                </ul>
                <div className="laravel-anquire">
                  <div className="btn btn-primary" onClick={openModal}>
                    <a>Enquire Now</a>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Magento Web Development"
                      />
                    }
                  </div>
                  <Link
                    href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
                    target="_blank"
                  >
                    <div className="WhatsappIcon">
                      <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                        <div className="coccoc-alo-ph-circle"></div>
                        <div className="coccoc-alo-ph-circle-fill"></div>
                        <div className="coccoc-alo-ph-img-circle"></div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="page_img">
                <Image
                  width={380}
                  height={500 / (100 / 100)}
                  src="/img/magentodevelopment/magento-banner-img.png"
                  alt="Magento Web Development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="laravel-descriptions megento-descriptions">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 pull-right">
              <div className="laravel_img">
                <Image
                  width={200}
                  height={500 / (100 / 100)}
                  src="/img/magentodevelopment/magento-logo-img.png"
                  alt="Magento Web Development"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6 pull-left">
              <div className="laravel-descriptions-bx" dir="ltr">
                <h2>
                  Magento <br />
                  Web Development
                </h2>
                <p>
                  Magento is an astounding open source ecommerce development
                  platform. The developers of Magento provide a significant
                  addition to their users with an assortment of choices and
                  development options catered by the Magento and we as a {""}
                  <Link href="/web-development" target="_blank" style={{color: "#fff", fontWeight:"bold" , textTransform : "capitalize"}}>
                    Web development company {""}
                  </Link>
                  can customize them to meet any specific requirements of
                  customization. Magento web development is rendered via a MVC
                  or Model View Controller&sbquo; EAV or Entity Attribute Value
                  model and database. Magento presents its users with a large
                  number of alternatives to its users which was not a common
                  practice at earlier frameworks. Magento has become the most
                  preferred ecommerce platform developer with over 150&sbquo;000
                  sites rendered under its framework.
                </p>
                <p>
                  Magento{" "}
                  <Link href="/website-design" target="_blank" style={{color: "#fff", fontWeight:"bold", textTransform : "capitalize"}}>
                    website designing {" "}
                  </Link>
                  and custom development services have been utilized by many
                  leading enterprises. We provide our clients with a larger
                  choice base than any other framework developer.
                </p>

                <p>
                  {" "}
                  LogicSpice has utilized the developers of Magento Development
                  Services to its fullest. Websites built by our Magento
                  ecommerce development workers are stable&sbquo; have a
                  flexible scalability and a large reach. Websites built by{" "}
                  <b>Magento ecommerce development</b> workers are stable&sbquo;
                  have a flexible scalability and a large reach. Our developers
                  have inculcated dynamic factors in every project that went
                  through their hands. These dynamic features include
                  transaction portals&sbquo; transactions alternatives&sbquo;
                  multi-faceted functionality&sbquo; loyalty programs&sbquo;
                  categorized overview&sbquo; etc. These features help ecommerce
                  websites to meet the ever changing and varying needs of
                  customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="laravel-devlopments-services">
        <div className="container">
          <h2>Magento Web Development Services</h2>
          <p className="laravel_core_sub2">
            Magento is an astounding open source ecommerce development platform.
            The
            <br /> developers of Magento provide a significant addition to their
            users.
          </p>
          <div className="laravel-services-bx-top advanced_web_service_bx">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box4">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/magentodevelopment/codeigniter-new-icon3.png"
                        alt="Magento Web Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/magentodevelopment/codeigniter-white-icon3.png"
                        alt="Magento Web Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    Magento Extension and
                    <br /> Attachments
                  </h3>
                  <p>
                    Magento tunes your ecommerce with extension and attachment
                    development offers.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box1">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/magentodevelopment/magento-new-icon1.png"
                        alt="Magento Web Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/magentodevelopment/magento-white-icon1.png"
                        alt="Magento Web Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    Magento Customization
                    <br /> Services
                  </h3>
                  <p>
                    Our highly satisfying customization service will meet the
                    needs of your ecommerce page.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box4">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/magentodevelopment/advanced-web-new-icon2.png"
                        alt="Magento Web Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/magentodevelopment/advanced-web-white-icon2.png"
                        alt="Magento Web Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    Shopping Cart
                    <br /> Service
                  </h3>
                  <p>
                    Smooth payment portals and easy checkout is one of our
                    specializations.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box3">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/magentodevelopment/opencart-new-icon2.png"
                        alt="Magento Web Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/magentodevelopment/opencart-white-icon2.png"
                        alt="Magento Web Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    Magento Webpage
                    <br /> Development
                  </h3>
                  <p>
                    Our renowned web development services are always ready to
                    cater to your needs no matter how intricate they are.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box2">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/magentodevelopment/codeigniter-new-icon5.png"
                        alt="Magento Web Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/magentodevelopment/codeigniter-white-icon5.png"
                        alt="Magento Web Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    Theme and Design
                    <br /> integration
                  </h3>
                  <p>
                    Magento web designing services present our clients with
                    alluring framework designs which will attract more users.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box7">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/magentodevelopment/magento-new-icon3.png"
                        alt="Magento Web Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/magentodevelopment/magento-white-icon3.png"
                        alt="Magento Web Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    3rd Party Application
                    <br /> Integration
                  </h3>
                  <p>
                    By integrating your business webpage with 3rd party APIs and
                    other magento web development services&sbquo; we ensure
                    steady and efficient performance of your business
                    application.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box5">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/magentodevelopment/magento-new-icon2.png"
                        alt="Magento Web Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/magentodevelopment/magento-white-icon2.png"
                        alt="Magento Web Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    Magento speed <br />
                    maximization
                  </h3>
                  <p>
                    Your ecommerce will support highest of the renderings in no
                    time after a speed optimization by Magento ecommerce
                    development services.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box8">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/magentodevelopment/magento-new-icon4.png"
                        alt="Magento Web Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/magentodevelopment/magento-white-icon4.png"
                        alt="Magento Web Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>
                    Magento Migration
                    <br /> Services
                  </h3>
                  <p>
                    Our Magento Website Development company also provides for
                    migration between the different platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="laravel_core_features_section advanced_core_features_section">
        <div className="container">
          <h2>Core Features Of Magento Web Development</h2>
          <p className="laravel_core_sub">
            Magento is an astounding open source ecommerce development platform.
            The
            <br /> developers of Magento provide a significant addition to their
            users.
          </p>
          <div className="laravel_core_features_bx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/magentodevelopment/advanced_features_icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Wide Scoped Catalog Management</h3>
                    <p>Improvised management of the catalog at every level.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/magentodevelopment/opencart_features_icon2.png"
                      alt="img4"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>One Webpage Checkout</h3>
                    <p>Simple and hassle free check out facility available.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/magentodevelopment/magento_features_icon1.png"
                      alt="img2"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Feature-full Accounts</h3>
                    <p>Well maintained and featured accounts are provided.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/magentodevelopment/magento_features_icon2.png"
                      alt="img5"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Extensive Browsing Support</h3>
                    <p>24 x 7 good quality browsing support.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/magentodevelopment/magento_features_icon3.png"
                      alt="img3"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Search Engine Friendly</h3>
                    <p>
                      The Magento platform is known for its SEO friendly and
                      smooth framework.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/magentodevelopment/magento_features_icon4.png"
                      alt="img3"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Marketing&sbquo; Promotion and Advertisement Tools</h3>
                    <p>All types of tools as per business needs are offered.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="laravel_choose_features_section">
        <div className="container">
          <h2>
            Why Choose Our Magento Web Development Services <br />
            For Your Ecommerce Website?
          </h2>
          <p className="laravel_core_sub2">
            Magento is an astounding open source ecommerce development platform.
            The
            <br /> developers of Magento provide a significant addition to their
            users.
          </p>
          <div className="laravel_choose_features_bx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img1">
                    <Image
                      width={60}
                      height={100}
                      src="/img/magentodevelopment/codeigniter-why-icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Integration of customizable themes & layouts</h3>
                    <p>
                      Magento web designing services offers alluring theme
                      designs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img2">
                    <Image
                      width={60}
                      height={100}
                      src="/img/magentodevelopment/magento-why-icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Magento speed optimization</h3>
                    <p>
                      Magento offers a speedy portal and shopping cart checkout
                      system.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 " data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img3">
                    <Image
                      width={60}
                      height={100}
                      src="/img/magentodevelopment/magento-why-icon2.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Secured Magento web page access</h3>
                    <p>
                      Magento web pages are highly secured and user friendly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img4">
                    <Image
                      width={60}
                      height={100}
                      src="/img/magentodevelopment/magento-why-icon3.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Magento framework</h3>
                    <p>
                      Magento provides steady and stable framework for easy
                      administration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img5">
                    <Image
                      width={60}
                      height={100}
                      src="/img/magentodevelopment/magento-why-icon4.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>
                      Solicitation over migration&sbquo; hiring & other choice
                      based portals
                    </h3>
                    <p>
                      Magento web developers cater with a 24x7 maintenance &
                      solicitation services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img6">
                    <Image
                      width={60}
                      height={100}
                      src="/img/magentodevelopment/magento-why-icon5.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Magento editing service</h3>
                    <p>
                      Magento enables its clients to edit and re-edit the
                      overview as per their regulations and requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 main_btn_hire">
              <div className="btn btn-primary" onClick={openModal}>
                <a>Enquire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Magento Web Development"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="laravel-portfolio-php-dev">
        <h2>Our Magento Portfolio</h2>
        <div className="laravel-slider-bx">
          <div id="laravel-slader" className="">
            <Slider {...settings}>
              <div className="php-item">
                <a href="https://xagshop.logicspice.com/" target="_blank">
                  <Image
                    width={900}
                    height={500 / (100 / 100)}
                    src="/img/magentodevelopment/xagshop-banner.png"
                    alt="img13"
                  />
                </a>
                <a
                  href="https://xagshop.logicspice.com/"
                  target="_blank"
                  className="visit-site"
                >
                  VISIT SITE
                </a>
              </div>
              <div className="php-item">
                <a href="https://www.regenepure.com/" target="_blank">
                  <Image
                    width={900}
                    height={500 / (100 / 100)}
                    src="/img/magentodevelopment/regenepure-banner.png "
                    alt="img14"
                  />
                </a>
                <a
                  href="https://www.regenepure.com/"
                  target="_blank"
                  className="visit-site"
                >
                  VISIT SITE
                </a>
              </div>
              <div className="php-item">
                <a
                  href="http://www.biggerboatdistribution.com/"
                  target="_blank"
                >
                  <Image
                    width={900}
                    height={500 / (100 / 100)}
                    src="/img/magentodevelopment/biggerboatdistribution-banner.png"
                    alt="img15"
                  />
                </a>
                <a
                  href="http://www.biggerboatdistribution.com/"
                  target="_blank"
                  className="visit-site"
                >
                  VISIT SITE
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              width={50}
              height={100}
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
            />
          </a>
        </div>
        <div className="quote_pop_plus quote_pop_in" onClick={toggleModal}>
          <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
        </div>
      </div></div>
      

      <Footer />
    </>
  );
};

export default Page;
