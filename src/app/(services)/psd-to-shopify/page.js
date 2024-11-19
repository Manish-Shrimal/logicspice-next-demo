"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Ourclient from "../../Components/Ourclient";
import Certificationtabs from "../../Components/Certificationtabs";
import Workingwith from "../../Components/Workingwith";
import Processconvert from "../../Components/Processconvert";
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
      <div className="psdToShopify"><section className="slider_img shopifyslider_img">
        <div className="container">
          <div className="slider_inner_img">
            <Image
              unoptimized={true}
              width={1200}
              height={500 / (100 / 100)}
              alt="PSD to Shopify Conversion Services"
              src="/img/psdtowordpress/psd_to_shopify_head.png"
            />
          </div>
        </div>
      </section>

      <section className="our_adeptness_section">
        <div className="container">
          <h1 className="main-heading">PSD to Shopify Conversion</h1>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="adeptness_mid_block_inner">
                <div className="adeptness_icon_top">
                  <Image
                    unoptimized={true}
                    width={100}
                    height={100}
                    alt="convert PSD to Wordpress"
                    src="/img/psdtowordpress/pstowp.png"
                  />
                </div>
                <div className="adeptness_box_content">PSD to Shopify</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="adeptness_mid_block_inner">
                <div className="adeptness_icon_top">
                  <Image
                    unoptimized={true}
                    width={50}
                    height={100}
                    alt="PSD to Wordpress Conversion Services"
                    src="/img/psdtowordpress/migration-maintence.png"
                  />
                </div>
                <div className="adeptness_box_content">
                  24*7 Technical Support
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="adeptness_mid_block_inner">
                <div className="adeptness_icon_top">
                  <Image
                    unoptimized={true}
                    width={50}
                    height={100}
                    alt="PSD to Wordpress Conversion Services"
                    src="/img/psdtowordpress/wordpressthemeicon.png"
                  />
                </div>
                <div className="adeptness_box_content">
                  {" "}
                  Wordpress Theme Development
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="adeptness_mid_block_inner">
                <div className="adeptness_icon_top">
                  <Image
                    unoptimized={true}
                    width={50}
                    height={100}
                    alt="PSD to Wordpress Conversion Services"
                    src="/img/psdtowordpress/customwordpressicon.png"
                  />
                </div>
                <div className="adeptness_box_content">
                  Wordpress Module Installation
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="adeptness_content">
          <div className="container">
            <p>
              <b>Shopify</b> - One of the best eCommerce CMS platform.So you
              have your own designed PSD for your website and now you want that
              design as your website. No Worries...Logicspice will convert your
              PSD to shopify. Our service of converting PSD to Shopify will meet
              your quality standard.
            </p>
            <br />
            <p>
              <Link className="linkcontensjs" href="/">
                Logicspice
              </Link>{" "}
              provide simple but powerful solution to your Shopify website.We
              make sure that all your requirements will be fulfilled with your
              website.Moreover&sbquo; we provide reliable&sbquo; fast support
              and 100% satisfaction. Just send us your design files and our
              experienced developers will convert them into a fully functional
              Shopify theme.
            </p>
          </div>
        </div>
      </section>

      <section className="slider_section slider_sectionsetbgs">
        <div className="container">
          <h2 className="title_setof_nav">
            Our Process to convert <span>PSD to Shopify</span>
          </h2>
          <div className="slider_wrapper">
            <div className="slider_wrapper_inner">
              <div className="slider_wrapper_inner_content_in">
                <div className="slider_wrapper_inner_content">
                  <div id="processslide" className="owl-carousel hidedot">
                    <Processconvert />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wordpress_to_psd">
        <div className="container">
          <div className="title-sec">
            <h2>
              Why Our <span>PSD to Shopify</span> Conversion is Best?
            </h2>
            <p>
              In the terms of quality &amp; performance&sbquo; you can expect
              high from us. What we give to our clients-
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="adeptness_psd_col_inner">
                <div className="adeptness_psd_icon_box">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/pixcel_perfect_icon.png"
                  />
                </div>
                <h3 className="adeptness_psd_title_box">
                  Pixel perfect design
                </h3>
                <div className="adeptness_psd_content_box">
                  We offer pixel perfect wordpress conversion that ensure 100%
                  similar website to the original PSD.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="adeptness_psd_col_inner">
                <div className="adeptness_psd_icon_box">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/compability_all_browsers_icon.png"
                  />
                </div>
                <h3 className="adeptness_psd_title_box">
                  Highly compatible all browsers
                </h3>
                <div className="adeptness_psd_content_box">
                  Highly compatible with all the browsers i.e. Google
                  Chrome&sbquo; Firefox&sbquo; Internet Browser etc.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="adeptness_psd_col_inner">
                <div className="adeptness_psd_icon_box">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/w3c_validator_icon.png"
                  />
                </div>
                <h3 className="adeptness_psd_title_box">
                  W3 validation with HTML &amp; CSS markup
                </h3>
                <div className="adeptness_psd_content_box">
                  We believe in well written &amp; clean code for better
                  readability and easy maintenance.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="adeptness_psd_col_inner">
                <div className="adeptness_psd_icon_box">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_responsive_icon.png"
                  />
                </div>
                <h3 className="adeptness_psd_title_box">Fully responsive</h3>
                <div className="adeptness_psd_content_box">
                  Keeping in mind the rising number of mobile users&sbquo; we
                  convert PSD to Shopify&sbquo; which can run smoothly on all
                  the gadgets.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="adeptness_psd_col_inner">
                <div className="adeptness_psd_icon_box">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_optimised_icon.png"
                  />
                </div>
                <h3 className="adeptness_psd_title_box">Optimized Images</h3>
                <div className="adeptness_psd_content_box">
                  After optimization&sbquo;it will load faster - Faster the page
                  load time&sbquo; better is the user experience.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="adeptness_psd_col_inner">
                <div className="adeptness_psd_icon_box">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_efficient_icon.png"
                  />
                </div>
                <h3 className="adeptness_psd_title_box">Smooth integration</h3>
                <div className="adeptness_psd_content_box">
                  Whenever you need something to add or integrate. With our
                  smooth integration&sbquo; we can easily do this.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="adeptness_psd_col_inner">
                <div className="adeptness_psd_icon_box">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_theme_customization_icon.png"
                  />
                </div>
                <h3 className="adeptness_psd_title_box">Highly interactive</h3>
                <div className="adeptness_psd_content_box">
                  You have only 3 seconds to convert your users to the customer.
                  This can only done by making your website interactive.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="adeptness_psd_col_inner">
                <div className="adeptness_psd_icon_box">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/admin_interface_icon.png"
                  />
                </div>
                <h3 className="adeptness_psd_title_box">Admin Interface</h3>
                <div className="adeptness_psd_content_box">
                  Complete control at your admin panel section.Easy to use
                  integration board.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="adeptness_psd_col_inner">
                <div className="adeptness_psd_icon_box">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_fast_loading_icon.png"
                  />
                </div>
                <h3 className="adeptness_psd_title_box">High Speed Loading</h3>
                <div className="adeptness_psd_content_box">
                  The faster your website is&sbquo; the more customer you will
                  attract.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="adeptness_psd_col_inner">
                <div className="adeptness_psd_icon_box">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/privacy_support_icon.png"
                  />
                </div>
                <h3 className="adeptness_psd_title_box">Privacy Support</h3>
                <div className="adeptness_psd_content_box">
                  We respect your privacy and we will never try to contact your
                  client.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="adeptness_psd_col_inner">
                <div className="adeptness_psd_icon_box">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_searchengine_icon.png"
                  />
                </div>
                <h3 className="adeptness_psd_title_box">SEO Friendly</h3>
                <div className="adeptness_psd_content_box">
                  We understand the importance of seo friendly feature and make
                  sure that your website will be search engine friendly.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="adeptness_psd_col_inner">
                <div className="adeptness_psd_icon_box">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_widget_icon.png"
                  />
                </div>
                <h3 className="adeptness_psd_title_box">Widget Compatible</h3>
                <div className="adeptness_psd_content_box">
                  We know how important widgets are for wordpress theme. Drag
                  which widget you want to use.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="adeptness_psd_col_inner">
                <div className="adeptness_psd_icon_box">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_best_price_icon.png"
                  />
                </div>
                <h3 className="adeptness_psd_title_box">Affordable</h3>
                <div className="adeptness_psd_content_box">
                  We offer the best price for our services.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="adeptness_psd_col_inner">
                <div className="adeptness_psd_icon_box">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/list_outstanding_icon.png"
                  />
                </div>
                <h3 className="adeptness_psd_title_box">Maintenance Support</h3>
                <div className="adeptness_psd_content_box">
                  Our high experienced team will give you support anytime.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="adeptness_psd_col_inner">
                <div className="adeptness_psd_icon_box">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    alt="PSD to Shopify Conversion Services"
                    src="/img/psdtowordpress/security_icon_psd.png"
                  />
                </div>
                <h3 className="adeptness_psd_title_box">Security</h3>
                <div className="adeptness_psd_content_box">
                  Your website will be full secured so no need to worry about
                  this.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="requirement_section">
        <div className="container">
          <div className="requir_title">
            Our Efforts Reflects from Our Portfolio
          </div>
          <p className="sbucint">
            Logicspice helps you bring your creativity to fruition. If you have
            any idea in your mind which you want to present before the world as
            your business&sbquo; you are not late.{" "}
            <Link
              href="/hire-developers"
              style={{ textDecoration: "underline" }}
            >
              Hire developer
            </Link>{" "}
            from our experienced team and give a start to your business.
          </p>
          <div className="requirment_btn">
            <Link
              className="btn btn-primary"
              data-aos="fade-right"
              id="inquirenow"
              href="/portfolio"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </section>
      <section className="expert_mind">
        <h2 className="title_setof_nav">
          Hire <span>Expert Minds</span> For Different Platform
        </h2>
        <div className="container">
          <div className="expert_minds">
            <div className="expert_minds_con">
              <p>
                If you are good at designing&sbquo; we are good at developing.
                We can help you to create a WordPress theme out of the design
                you created. All we will need is your design in the PSD format
                and we will provide code into HTML to provide you with a
                WordPress theme as imagined by you.
              </p>
            </div>
            <div className="different_experts">
              <ul className="different_experts_member">
                <li className="different_experts_name">
                  <Link href="/hire-android-app-developers">
                    <i aria-hidden="true" className="fa fa-angle-right"></i>{" "}
                    Hire Android App Developer
                  </Link>
                </li>
                <li className="different_experts_name">
                  <Link href="/hire-ios-app-developers">
                    <i aria-hidden="true" className="fa fa-angle-right"></i>{" "}
                    Hire iOS App Developer
                  </Link>
                </li>
                <li className="different_experts_name">
                  <Link href="/hire-cakephp-developers">
                    <i aria-hidden="true" className="fa fa-angle-right"></i>{" "}
                    Hire Cake PHP Developer
                  </Link>
                </li>
                <li className="different_experts_name">
                  <Link href="/hire-wordpress-experts">
                    <i aria-hidden="true" className="fa fa-angle-right"></i>{" "}
                    Hire Wordpress Developer
                  </Link>
                </li>
                {/* <li className="different_experts_name">
                  <Link href="/hire-drupal-experts">
                    <i aria-hidden="true" className="fa fa-angle-right"></i>{" "}
                    Hire Drupal Developer
                  </Link>
                </li> */}
                <li className="different_experts_name">
                  <Link href="/hire-magento-experts">
                    <i aria-hidden="true" className="fa fa-angle-right"></i>{" "}
                    Hire Magento Developer
                  </Link>
                </li>
                {/* <li className="different_experts_name">
                  <Link href="/hire-zencart-experts">
                    <i aria-hidden="true" className="fa fa-angle-right"></i>{" "}
                    Hire Zencart Developer
                  </Link>
                </li> */}
                <li className="different_experts_name">
                  <Link href="/hire-shopify-developers">
                    <i aria-hidden="true" className="fa fa-angle-right"></i>{" "}
                    Hire Shopify Developers
                  </Link>
                </li>
                <li className="different_experts_name">
                  <Link href="/hire-laravel-developers">
                    <i aria-hidden="true" className="fa fa-angle-right"></i>{" "}
                    Hire Laravel Developers
                  </Link>
                </li>
                <li className="different_experts_name">
                  <Link href="/hire-codeigniter-developers">
                    <i aria-hidden="true" className="fa fa-angle-right"></i>{" "}
                    Hire Codeigniter Developers
                  </Link>
                </li>
                <li className="different_experts_name">
                  <Link href="/hire-node-js-experts">
                    <i aria-hidden="true" className="fa fa-angle-right"></i>{" "}
                    Hire Node.Js Experts
                  </Link>
                </li>
                <li className="different_experts_name">
                  <Link href="/hire-angular-js-developers">
                    <i aria-hidden="true" className="fa fa-angle-right"></i>{" "}
                    Hire Angular jS Developers
                  </Link>
                </li>
                <li className="different_experts_name">
                  <Link href="/hire-yii-developers">
                    <i aria-hidden="true" className="fa fa-angle-right"></i>{" "}
                    Hire Yii Developers
                  </Link>
                </li>
                <li className="different_experts_name">
                  <Link href="/hire-opencart-developers">
                    <i aria-hidden="true" className="fa fa-angle-right"></i>{" "}
                    Hire Opencart Developers
                  </Link>
                </li>
                <li className="different_experts_name">
                  <Link href="/hire-hybrid-mobile-app-developer">
                    <i aria-hidden="true" className="fa fa-angle-right"></i>{" "}
                    Hire Hybrid mobile app Developer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-hire">
        <div className="container">
          <div>
            <Ourclient />
          </div>
        </div>
      </section>

      <section className="certificates certificationawardsecin dgd">
        <div className="container">
          <Certificationtabs />
        </div>
      </section>

      <section className="working_with">
        <div className="container">
          <h3 className="title_heading title_heading_bgg">
            Worked with 1500+ companies worldwide&sbquo; from startups to
            enterprises.
          </h3>

          <Workingwith />
        </div>
      </section>

      <section className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
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
          </a>
        </div>
        <div className="quote_pop_plus quote_pop_in" onClick={toggleModal}>
          <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
        </div>
      </section></div>

      <Footer />
    </>
  );
};

export default Page;
