"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(custom-solutions)/customsolutions.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
import { Modal, ModalBody } from "react-bootstrap";
import "../../resposive.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
const Page = () => {
  var methodology = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    cssEase: "ease-in-out",
  };
  var jewellerywebsite = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    cssEase: "ease-in-out",
  };
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    // console.log(showModal);

    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <NavBar />
      <div className="top-head-custom jewellery-e-commerce JewelleryEcommerceBanner DefoutEcommerceBanner">
        <div className="container">
          <div className="col-md-7">
            <div className="head-enquiry">
              <h1>Custom Jewellery Website Development | App Development</h1>
              <p>
                On demand mobile App or Web development solution for your
                business needs.
              </p>
              <p className="sml_txt">
                Rapid customization, because of our team&apos;s past experience
                over similar solutions.
              </p>
            </div>
            <ul className="head-feature">
              <li>Offering Scalable Solutions</li>
              <li>User-centric Exclusive Features</li>
              <li>Customizable and unique</li>
              <li>We just energize to run your business faster</li>
            </ul>
            <div className="JewelleryBtbBx">
              <div className="btn btn-primary" onClick={openModal}>
                <a>Enquire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Custom Jewellery Website | App Development"
                  />
                }
              </div>

              <a
                href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
                target="_blank"
              >
                <div className="WhatsappIcon">
                  <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                    <div className="coccoc-alo-ph-circle"></div>
                    <div className="coccoc-alo-ph-circle-fill"></div>
                    <div className="coccoc-alo-ph-img-circle"></div>
                  </div>
                </div>
              </a>
            </div>
            <div aria-label="breadcrumb" className="my-breadcrumb ">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/custom-solutions">Custom Solutions</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Jewellery Website
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="BFC_logic">
        <div className="container">
          <h2 className="CustomSolutionHadding">
            Why logicspice is Best For Custom App/Web Development?
          </h2>
          <div className="row">
            <div className="col-md-3">
              <div className="BestCustomDevelopment">
                <Image
                  unoptimized={true}
                  width={134}
                  height={129}
                  src="/img/jewelleryecommercesystemsolution/readydevelopment-icon.png"
                  alt="img1"
                />
                <h3>Ready to Development</h3>
                <p>
                  We have a team of dedicated developers who are ready to work
                  on your requirements for app or web development. Our solution
                  is robust & highly scalable.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="BestCustomDevelopment">
                <Image
                  unoptimized={true}
                  width={134}
                  height={129}
                  src="/img/jewelleryecommercesystemsolution/supportmaintenance-icon.png"
                  alt="img2"
                />
                <h3>Support & Maintenance</h3>
                <p>
                  We support our customers from business analysis, designing,
                  development, maintenance. Our team is always available to
                  solve your query.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="BestCustomDevelopment">
                <Image
                  unoptimized={true}
                  width={134}
                  height={129}
                  src="/img/jewelleryecommercesystemsolution/cost-efficient-icon.png"
                  alt="Cost- Efficient"
                />
                <h3>Cost- Efficient</h3>
                <p>
                  Our development varies with your requirement. We assure to
                  give cost efficient solution of development.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="BestCustomDevelopment">
                <Image
                  unoptimized={true}
                  width={134}
                  height={129}
                  src="/img/jewelleryecommercesystemsolution/future-extendibility-icon.png"
                  alt="Future Extendibility"
                />
                <h3>Future Extendibility</h3>
                <p>
                  You can extend the features & functionality in your customised
                  app in future if you want to explore more. This feature
                  doesn&apos;t come up with a ready made script.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="SBC_logic">
        <div className="container">
          <h2>Custom Jewelry Ecommerce Website Solution</h2>
        </div>
        <div className="inner_content_SBG">
          <div className="container">
            <p>
              Our custom fashion jewelry website solution will facilitate the
              shoppers to buy jewellery online from the website. Customers will
              have an option to search different items through advanced search
              criteria.The website will also have a section for customers to
              search for diamond that they are looking for. On Demand jewelry
              web development allow customers to view the authenticity
              certificates of the Jewellery.{" "}
            </p>

            <p>
              With the growing industry of gem and jewellery and in the same
              manner, it is rapidly growing online. The demand of jewelry
              website design is increasing in the same manner. Logicspice is
              offering scalable solution & exclusive features in fashion jewelry
              websites development.
            </p>
          </div>
        </div>
      </div>

      <div className="demand_app">
        <div className="container">
          <h2>Key Benefits of On Demand Jewellery Website Development</h2>

          <div className="row">
            <div className="col-sm-4">
              <div className="demand-card" data-aos="fade-right">
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={78}
                    height={78}
                    src="/img/jewelleryecommercesystemsolution/b_icon1.png"
                    alt="img5"
                  />
                </div>
                <div className="demand-content">
                  <h3>Social Media Sign Up</h3>
                  <p>
                    Customers can use their social media accounts like Facebook
                    and Google Plus to sign up to the website
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card" data-aos="fade-right">
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={78}
                    height={78}
                    src="/img/jewelleryecommercesystemsolution/b_icon3.png"
                    alt="img6"
                  />
                </div>
                <div className="demand-content">
                  <h3>Authenticity Certificates</h3>
                  <p>
                    Customers can view the authenticity of the jewellery that
                    are about to purchase
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card" data-aos="fade-right">
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={78}
                    height={78}
                    src="/img/jewelleryecommercesystemsolution/b_icon5.png"
                    alt="img7"
                  />
                </div>
                <div className="demand-content">
                  <h3>Advanced Diamond Search </h3>
                  <p>
                    Customer can search for diamonds on the basis of shape,
                    price, color and clarity
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="col-sm-4 center_image">
              <Image
                unoptimized={true}
                width={235}
                height={493}
                src="/img/jewelleryecommercesystemsolution/benifit.png"
                alt="img8"
              />
            </div>
            <div className="col-sm-4">
              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Easy Payment</h3>
                  <p>
                    {" "}
                    Customer can easily pay for the purchased jewellery by
                    payment through a payment gateway
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={78}
                    height={78}
                    src="/img/jewelleryecommercesystemsolution/b_icon2.png"
                    alt="img9"
                  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Order Tracking</h3>
                  <p>
                    {" "}
                    Customer can track their orders after they have placed them
                    through the website
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={78}
                    height={78}
                    src="/img/jewelleryecommercesystemsolution/b_icon4.png"
                    alt="img10"
                  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card" data-aos="fade-left">
                <div className="demand-content">
                  <h3>Favorites Feature</h3>
                  <p>
                    Customers can add their favorite items to a list so that
                    they can find them easily when they visit the website next
                    time
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    width={78}
                    height={78}
                    src="/img/jewelleryecommercesystemsolution/b_icon6.png"
                    alt="img11"
                  />
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="JewelryEcommerceFeatureBxSection" id="features">
        <div className="container">
          <h2 className="CustomSolutionHadding">
            Jewelry Ecommerce Website or App Development Features
          </h2>
          <div className="features-tab">
            <div className="JewelryEcommerceDevelopmentFeature">
              <div className="row">
                <div className="col-sm-4 col-md-4">
                  <div
                    id="slide-jewellerywebsite"
                    className="JewelryEcommerceSilder"
                  >
                    <Slider {...jewellerywebsite}>
                      <div className="JewelryMobileImg">
                        <Image
                          unoptimized={true}
                          width={512}
                          height={813}
                          src="/img/jewelleryecommercesystemsolution/jewellery-home.png"
                          alt="img1"
                        />
                      </div>

                      <div className="JewelryMobileImg">
                        <Image
                          unoptimized={true}
                          width={512}
                          height={813}
                          src="/img/jewelleryecommercesystemsolution/jewellery-listing.png"
                          alt="img1"
                        />
                      </div>

                      <div className="JewelryMobileImg">
                        <Image
                          unoptimized={true}
                          width={512}
                          height={813}
                          src="/img/jewelleryecommercesystemsolution/jewellery-details.png"
                          alt="img1"
                        />
                      </div>
                    </Slider>
                  </div>
                </div>
                <div className="col-sm-8 col-md-8">
                  <div className="JewelryEcommerceFeatureTop">
                    <div className="JewelryEcommerceFeature">
                      <i>
                        <Image
                          unoptimized={true}
                          width={43}
                          height={43}
                          src="/img/jewelleryecommercesystemsolution/user_icons.png"
                          alt="Delivery Status"
                        />
                      </i>
                      <div className="JewelryEcommerceFeatureBx">
                        <h3>User Profile</h3>
                        <p>
                          Customer will be able to manage their basic personal
                          information and add/edit details.
                        </p>
                      </div>
                    </div>
                    <div className="JewelryEcommerceFeature">
                      <i>
                        <Image
                          unoptimized={true}
                          width={43}
                          height={43}
                          src="/img/jewelleryecommercesystemsolution/Filter-Search-icons.png"
                          alt="Delivery Status"
                        />
                      </i>
                      <div className="JewelryEcommerceFeatureBx">
                        <h3>Categorically Search Products</h3>
                        <p>
                          Customers will have an option to search products by
                          selecting the categories and subcategory.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="JewelryEcommerceFeature">
                      <i>
                        <Image
                          unoptimized={true}
                          width={43}
                          height={43}
                          src="/img/jewelleryecommercesystemsolution/Manual-Search-icons.png"
                          alt="Partial & Failed Delivery Status"
                        />
                      </i>
                      <div className="JewelryEcommerceFeatureBx">
                        <h3>Advanced Search For Diamonds</h3>
                        <p>
                          Customer can search for diamonds by shape & price of
                          diamond, carat, cut, color and clarity.
                        </p>
                      </div>
                    </div>
                    <div className="JewelryEcommerceFeature">
                      <i>
                        <Image
                          unoptimized={true}
                          width={43}
                          height={43}
                          src="/img/jewelleryecommercesystemsolution/View-Deal-Listing-icons.png"
                          alt="Track Sales"
                        />
                      </i>
                      <div className="JewelryEcommerceFeatureBx">
                        <h3>Jewellery Listing</h3>
                        <p>
                          User can view complete listing of the Jewellery
                          according to search criterion and filter them by
                          price.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="JewelryEcommerceFeature">
                      <i>
                        <Image
                          unoptimized={true}
                          width={43}
                          height={43}
                          src="/img/jewelleryecommercesystemsolution/Project-Detail-icons.png"
                          alt="Admin Control"
                        />
                      </i>
                      <div className="JewelryEcommerceFeatureBx">
                        <h3>Jewellery Detail</h3>
                        <p>
                          User can see detail of the jewel like title, license
                          number, description, price and key points.
                        </p>
                      </div>
                    </div>
                    <div className="JewelryEcommerceFeature">
                      <i>
                        <Image
                          unoptimized={true}
                          width={43}
                          height={43}
                          src="/img/jewelleryecommercesystemsolution/add-cart-icons.png"
                          alt="Ratings & Reviews"
                        />
                      </i>
                      <div className="JewelryEcommerceFeatureBx">
                        <h3>Add To Cart</h3>
                        <p>
                          User can add the products in their shopping cart by
                          selecting quantity and add them in the cart.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="JewelryEcommerceFeature">
                      <i>
                        <Image
                          unoptimized={true}
                          width={43}
                          height={43}
                          src="/img/jewelleryecommercesystemsolution/Checkout-icons.png"
                          alt="Automated Dispatching"
                        />
                      </i>
                      <div className="JewelryEcommerceFeatureBx">
                        <h3>Checkout</h3>
                        <p>
                          Customer can proceed to checkout by integration of
                          payment gateway for credit card.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="clearfix"></div>
      <section className="BuildYourJewellerySection">
        <div className="container">
          <h2 className="CustomSolutionHadding">
            Establish Your Jewellery Store Online
          </h2>
          <div className="BuildYourJewelleryMain">
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="BuildYourJewellery">
                  <i>
                    <Image
                      unoptimized={true}
                      width={70}
                      height={70}
                      src="/img/jewelleryecommercesystemsolution/jewelry-website.png"
                      alt="Jewelry Website"
                    />
                  </i>
                  <h4>Online Jewelry Boutique</h4>
                  <p>Elegant and Clear Graphics Designed by Our UI/UX Team.</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="BuildYourJewellery">
                  <i>
                    <Image
                      unoptimized={true}
                      width={70}
                      height={70}
                      src="/img/jewelleryecommercesystemsolution/diamond-iIntegration.png"
                      alt="Diamond Integration"
                    />
                  </i>
                  <h4>Diamond Data Integration</h4>
                  <p>
                    Flawless Integration of Third-Party APIs Customized to
                    Client Specifications.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="BuildYourJewellery">
                  <i>
                    <Image
                      unoptimized={true}
                      width={70}
                      height={70}
                      src="/img/jewelleryecommercesystemsolution/ring-builder.png"
                      alt="Ring Builder"
                    />
                  </i>
                  <h4>Ring Customization</h4>
                  <p>
                    Personalize your dream ring with our easy-to-use
                    customization tool.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="BuildYourJewellery">
                  <i>
                    <Image
                      unoptimized={true}
                      width={70}
                      height={70}
                      src="/img/jewelleryecommercesystemsolution/diamond-filter.png"
                      alt="Diamond Filter"
                    />
                  </i>
                  <h4>Diamond Selection Tool</h4>
                  <p>
                    Enable users to pick the perfect diamond for their ring
                    using an intuitive filtering system.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="BuildYourJewellery">
                  <i>
                    <Image
                      unoptimized={true}
                      width={70}
                      height={70}
                      src="/img/jewelleryecommercesystemsolution/jewelry-retouching.png"
                      alt="Jewelry Retouching"
                    />
                  </i>
                  <h4>Enhanced Jewelry Imagery</h4>
                  <p>
                    Showcase Strengths and Minimize Flaws for Increased Customer
                    Appeal.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="BuildYourJewellery">
                  <i>
                    <Image
                      unoptimized={true}
                      width={70}
                      height={70}
                      src="/img/jewelleryecommercesystemsolution/jewelry-ecommerce.png"
                      alt="Jewelry E-commerce"
                    />
                  </i>
                  <h4>Online Jewelry Commerce</h4>
                  <p>
                    Enhance the growth of your online jewelry business with
                    personalized solutions designed to meet your unique needs.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="BuildYourJewellery">
                  <i>
                    <Image
                      unoptimized={true}
                      width={70}
                      height={70}
                      src="/img/jewelleryecommercesystemsolution/jewelry-marketing.png"
                      alt="Jewelry Marketing"
                    />
                  </i>
                  <h4>Jewelry Business Expansion</h4>
                  <p>
                    Supercharge your jewelry business with our marketing and SEO
                    services, unlocking remarkable growth and expansion.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="BuildYourJewellery">
                  <i>
                    <Image
                      unoptimized={true}
                      width={70}
                      height={70}
                      src="/img/jewelleryecommercesystemsolution/jewelry-pricing.png"
                      alt="Jewelry Website Pricing"
                    />
                  </i>
                  <h4>Jewelry Website Pricing</h4>
                  <p>
                    Minimize Ownership Costs for a Maximized Return on
                    Investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="custom-section process-wrapper wd__process--wrapper OurWebDesignProcess">
        <div className="container">
          <h2 className="CustomSolutionHadding">Our Web Design Methodology</h2>
          <div className="OurWebDesignProcessBx">
            <div className="fixedwidth">
              <div className="process_slideshow--wrapper">
                <div className="svg-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="localseo_svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 412 412"
                    xmlSpace="preserve"
                  >
                    <g id="loading_path">
                      <path
                        id="inner_path_2"
                        className="st0"
                        d="M231.3,25.2c0,1.4-0.1,2.8-0.3,4.2c38.3,5.3,73.6,22.9,101.4,50.7c5,5,9.7,10.3,14.1,15.9
          c1.4-0.9,2.9-1.8,4.4-2.4c-28.7-36.8-71.2-62.4-119.6-69.1C231.3,24.7,231.3,24.9,231.3,25.2z"
                      ></path>
                      <path
                        id="inner_path_3"
                        className="st0"
                        d="M376.3,137.3c-1.3,1-2.8,1.9-4.3,2.7c8.4,20.9,12.8,43.5,12.8,66.7s-4.4,45.8-12.8,66.7
          c1.5,0.7,2.9,1.6,4.3,2.7c8.7-21.4,13.5-44.8,13.5-69.4S385,158.7,376.3,137.3z"
                      ></path>
                      <path
                        id="inner_path_4"
                        className="st0"
                        d="M346.5,317.3c-4.4,5.5-9.1,10.8-14.1,15.9c-27.8,27.8-63.1,45.3-101.4,50.7c0.2,1.4,0.3,2.8,0.3,4.2
          c0,0.3,0,0.5,0,0.8c48.5-6.7,90.9-32.3,119.6-69.1C349.4,319.1,347.9,318.2,346.5,317.3z"
                      ></path>
                      <path
                        id="inner_path_5"
                        className="st0"
                        d="M180.3,388c0-1.4,0.1-2.8,0.3-4.2c-38.3-5.3-73.6-22.9-101.4-50.7c-5-5-9.7-10.3-14.1-15.9
          c-1.4,0.9-2.9,1.8-4.4,2.4c28.7,36.8,71.2,62.4,119.6,69.1C180.3,388.5,180.3,388.3,180.3,388z"
                      ></path>
                    </g>
                    <g id="path_1">
                      <circle
                        className="st0"
                        cx="205.8"
                        cy="25.2"
                        r="22.5"
                        style={{ fill: "rgb(224, 76, 65)" }}
                      ></circle>
                      <path
                        id="XMLID_45_"
                        className="st1"
                        d="M208.9,32.9h-3.3v-9.1v-1.5l0.1-1.6c-0.6,0.6-0.9,0.9-1.1,1.1l-1.8,1.5l-1.6-2l5.1-4h2.7
          L208.9,32.9L208.9,32.9z"
                        style={{ fill: "rgb(255, 255, 255)" }}
                      ></path>
                    </g>
                    <g id="path_2">
                      <circle
                        className="st0"
                        cx="360.8"
                        cy="117"
                        r="22.5"
                        style={{ fill: "rgb(224, 76, 65)" }}
                      ></circle>
                      <path
                        id="XMLID_42_"
                        className="st1"
                        d="M366.1,125.5h-11v-2.3l3.9-4c1.2-1.2,1.9-2,2.3-2.5s0.6-0.9,0.8-1.3c0.2-0.4,0.2-0.8,0.2-1.2
          c0-0.6-0.2-1.1-0.5-1.4s-0.8-0.5-1.4-0.5s-1.2,0.1-1.8,0.4c-0.6,0.3-1.2,0.7-1.8,1.2l-1.8-2.1c0.8-0.7,1.4-1.1,1.9-1.4
          s1.1-0.5,1.7-0.6s1.3-0.2,2-0.2c1,0,1.8,0.2,2.6,0.5c0.8,0.4,1.3,0.9,1.8,1.5c0.4,0.6,0.6,1.4,0.6,2.2c0,0.7-0.1,1.4-0.4,2
          s-0.6,1.3-1.2,1.9c-0.5,0.7-1.5,1.6-2.8,2.8l-2,1.9v0.2h6.8L366.1,125.5L366.1,125.5z"
                        style={{ fill: "rgb(255, 255, 255)" }}
                      ></path>
                    </g>
                    <g id="path_3">
                      <circle
                        className="st0"
                        cx="360.8"
                        cy="296.2"
                        r="22.5"
                        style={{ fill: "rgb(224, 76, 65)" }}
                      ></circle>
                      <path
                        id="XMLID_39_"
                        className="st1"
                        d="M365.5,292.3c0,1-0.3,1.8-0.9,2.5s-1.4,1.2-2.5,1.4v0.1c1.3,0.2,2.2,0.5,2.9,1.2
          c0.7,0.6,1,1.4,1,2.5c0,1.5-0.5,2.7-1.6,3.5s-2.7,1.3-4.7,1.3c-1.7,0-3.2-0.3-4.5-0.8v-2.8c0.6,0.3,1.3,0.6,2,0.8
          c0.7,0.2,1.5,0.3,2.2,0.3c1.1,0,1.9-0.2,2.4-0.6s0.8-1,0.8-1.8c0-0.7-0.3-1.3-0.9-1.6c-0.6-0.3-1.6-0.5-2.9-0.5h-1.3v-2.5h1.2
          c1.2,0,2.1-0.2,2.7-0.5s0.8-0.9,0.8-1.6c0-1.2-0.7-1.8-2.2-1.8c-0.5,0-1,0.1-1.6,0.3c-0.6,0.2-1.1,0.5-1.8,0.9l-1.5-2.3
          c1.4-1,3.1-1.5,5.1-1.5c1.6,0,2.9,0.3,3.9,1C365,290.2,365.5,291.1,365.5,292.3z"
                        style={{ fill: "rgb(255, 255, 255)" }}
                      ></path>
                    </g>
                    <g id="path_4">
                      <circle
                        className="st0"
                        cx="205.8"
                        cy="388"
                        r="22.5"
                        style={{ fill: "rgb(224, 76, 65)" }}
                      ></circle>
                      <path
                        id="XMLID_35_"
                        className="st1"
                        d="M211.9,392.4H210v3.3h-3.2v-3.3h-6.7v-2.3L207,380h3.1v9.9h1.9L211.9,392.4L211.9,392.4z
          M206.8,389.8v-2.7c0-0.4,0-1.1,0.1-1.9c0-0.8,0.1-1.3,0.1-1.5h-0.1c-0.3,0.6-0.6,1.2-1,1.7l-2.9,4.4H206.8z"
                        style={{ fill: "rgb(255, 255, 255)" }}
                      ></path>
                    </g>
                    <g id="path_5">
                      <circle
                        className="st0"
                        cx="50.9"
                        cy="296.2"
                        r="22.5"
                        style={{ fill: "rgb(224, 76, 65)" }}
                      ></circle>
                      <path
                        id="XMLID_32_"
                        className="st1"
                        d="M51,294.3c1.5,0,2.7,0.4,3.6,1.3c0.9,0.9,1.3,2,1.3,3.5c0,1.8-0.5,3.1-1.6,4.1
          c-1.1,0.9-2.6,1.4-4.6,1.4c-1.7,0-3.2-0.3-4.2-0.8v-2.9c0.6,0.3,1.2,0.5,2,0.7s1.5,0.3,2.1,0.3c2,0,3-0.8,3-2.5
          c0-1.6-1-2.4-3.1-2.4c-0.4,0-0.8,0-1.3,0.1s-0.8,0.2-1.1,0.2l-1.3-0.7l0.6-8h8.5v2.8h-5.6l-0.3,3.1l0.4-0.1
          C49.8,294.4,50.3,294.3,51,294.3z"
                        style={{ fill: "rgb(255, 255, 255)" }}
                      ></path>
                    </g>
                  </svg>
                </div>
                <div
                  id="slide-jewellery"
                  className="process_slideshow owl-carousel"
                >
                  <Slider {...methodology}>
                    <div>
                      <div className="process_slideshow_item">
                        <div className="process_slideshow_image">
                          <Image
                            unoptimized={true}
                            width={273}
                            height={253}
                            className="process_slideshow_image-img"
                            src="/img/jewelleryecommercesystemsolution/slide-img1.png"
                            alt="Jewelry"
                          />
                        </div>
                        <div className="process_slideshow_text">
                          <div className="process_number">1</div>
                          <div className="process_text">
                            <h3>Website Evaluation & Competitive Analysis</h3>
                            <p>
                              Initiating a comprehensive review of your website,
                              we&apos;ll scrutinize its functionality and user
                              experience to identify areas for enhancement.
                              These insights will strategically guide our
                              approach to optimizing your Jewellery website.
                              Concurrently, we&apos;ll conduct research to
                              discern the successful strategies employed by your
                              leading competitors.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="process_slideshow_item">
                        <div className="process_slideshow_image">
                          <Image
                            unoptimized={true}
                            width={273}
                            height={253}
                            className="process_slideshow_image-img"
                            src="/img/jewelleryecommercesystemsolution/slide-img3.png"
                            alt="Jewelry"
                          />
                        </div>
                        <div className="process_slideshow_text">
                          <div className="process_number">2</div>
                          <div className="process_text">
                            <h3>Design Prototyping Process</h3>
                            <p>
                              Before incorporating any changes into your
                              website, we&apos;ll construct a visual mockup of
                              the new design, providing you with a clear preview
                              of the updates. Whether your website is in its
                              infancy or an established entity, we collaborate
                              closely to formulate a design that aligns
                              seamlessly with your website platform and caters
                              to your unique Jewellery website business needs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="process_slideshow_item">
                        <div className="process_slideshow_image">
                          <Image
                            unoptimized={true}
                            width={273}
                            height={253}
                            className="process_slideshow_image-img"
                            src="/img/jewelleryecommercesystemsolution/slide-img2.png"
                            alt="Jewelry"
                          />
                        </div>
                        <div className="process_slideshow_text">
                          <div className="process_number">3</div>
                          <div className="process_text">
                            <h3>Unveiling Website Evolution</h3>
                            <p>
                              Experience the realization of your vision. Once
                              you endorse the design, we adeptly incorporate the
                              approved changes into your live Jewellery website.
                              Our devoted team is steadfast in providing an
                              immersive and captivating experience for your
                              audience, guaranteeing a distinctive and
                              compelling online presence that surpasses
                              expectations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="process_slideshow_item">
                        <div className="process_slideshow_image">
                          <Image
                            unoptimized={true}
                            width={273}
                            height={253}
                            className="process_slideshow_image-img"
                            src="/img/jewelleryecommercesystemsolution/slide-img1.png"
                            alt="Jewelry"
                          />
                        </div>
                        <div className="process_slideshow_text">
                          <div className="process_number">4</div>
                          <div className="process_text">
                            <h3>Thorough Testing Protocols</h3>
                            <p>
                              Going beyond implementation, our dedicated QA team
                              conducts extensive testing to ensure seamless
                              functionality and user-friendly experiences. We go
                              the extra mile to guarantee that every aspect
                              operates flawlessly, establishing a reliable and
                              user-centric digital environment through our
                              commitment to thorough testing procedures.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="process_slideshow_item">
                        <div className="process_slideshow_image">
                          <Image
                            unoptimized={true}
                            width={273}
                            height={253}
                            className="process_slideshow_image-img"
                            src="/img/jewelleryecommercesystemsolution/slide-img2.png"
                            alt="Jewelry"
                          />
                        </div>
                        <div className="process_slideshow_text">
                          <div className="process_number">5</div>
                          <div className="process_text">
                            <h3>Ongoing Support and Maintenance</h3>
                            <p>
                              As your campaign progresses, we consistently
                              monitor your Jewellery website. Should any new
                              issues arise, we collaborate with you to formulate
                              a comprehensive strategy for timely resolution.
                              Staying abreast of evolving industry guidelines,
                              we position your website at the forefront of the
                              latest SEO (search engine optimization)
                              requirements, maintaining its constant alignment
                              with state-of-the-art standards.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="app_solution eCommerceAppSolution">
        <div className="container">
          <h2 className="CustomSolutionHadding">
            Ecommerce Jewellery Web Development Solution
          </h2>
          <div className="EcommerceJewellerySolutionBx">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="EcommerceJewellerySolutionImg">
                  <Image
                    unoptimized={true}
                    width={533}
                    height={200}
                    src="/img/jewelleryecommercesystemsolution/jewellery-img.jpg"
                    alt="#"
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="JewellerySolutionBx JewelleryIdeaBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={26}
                      height={26}
                      src="/img/jewelleryecommercesystemsolution/idea-icon.png"
                      alt="#"
                    />
                  </i>
                  <h3>Idea</h3>
                  <p>
                    App idea starts with you. You came to us with your idea and
                    it&apos;s our duty to convert your idea into business. We
                    always give value to your idea. Your idea and our suggestion
                    can give a birth to excellent solution to development.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="JewellerySolutionBx JewelleryConceptBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={26}
                      height={26}
                      src="/img/jewelleryecommercesystemsolution/concept-icon.png"
                      alt="#"
                    />
                  </i>
                  <h3>Concept</h3>
                  <p>
                    We analyze the market, design UI to deliver the great and
                    effective solution for your business. R&D plays an important
                    role when you start any business. It&apos;s our duty to
                    stand out from the competition.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="JewellerySolutionBx JewelleryImplementBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={26}
                      height={26}
                      src="/img/jewelleryecommercesystemsolution/implement-icon.png"
                      alt="#"
                    />
                  </i>
                  <h3>Implement</h3>
                  <p>
                    We implement as per your requirements. We believe in
                    transparency and work with your given custom functionality &
                    features. Custom solution is especially focused to fulfill
                    your requirement by adding required features &
                    functionality.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="JewellerySolutionBx JewelleryTestingBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={26}
                      height={26}
                      src="/img/jewelleryecommercesystemsolution/software-testing.png"
                      alt="#"
                    />
                  </i>
                  <h3>Testing</h3>
                  <p>
                    We have a team of expert tested who use advanced tool to
                    test your app. We assure to come up with proper testing and
                    bug free app. We are always available if you find any issue
                    in the custom development.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="JewellerySolutionBx JewellerySupportBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={26}
                      height={26}
                      src="/img/jewelleryecommercesystemsolution/support-icon.png"
                      alt="#"
                    />
                  </i>
                  <h3>Support</h3>
                  <p>
                    We offer free support for 1 month after delivering a project
                    to the client.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {/* <!--<div className="used_technology_section" id="technologies">
    <div className="container">
        <h4 className="titlesettop titlesettop_mar"><span>Used Technologies</span> and Server Requirements</h4>     
        <div className="used_technology_section_dataa">
            <ul>
                <li data-aos="fade-right"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/jewelleryecommercesystemsolution/tech_ios_icon.png" alt="iOS"/></div><div className="icntechimg_nm">iOS</div></li>
                <li data-aos="fade-right"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/jewelleryecommercesystemsolution/tech_java_icon.png" alt="Java"/></div><div className="icntechimg_nm">Java</div></li>
                <li data-aos="fade-right"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/jewelleryecommercesystemsolution/tech_android_icon.png" alt="Android"/></div><div className="icntechimg_nm">Android</div></li>
                <li data-aos="fade-right"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/jewelleryecommercesystemsolution/tech_php_icon.png" alt="PHP"/></div><div className="icntechimg_nm">PHP</div></li>
                <li data-aos="fade-left"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/jewelleryecommercesystemsolution/tech_cakephp_icon.png" alt="CakePHP"/></div><div className="icntechimg_nm">CakePHP</div></li>
                <li data-aos="fade-left"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/jewelleryecommercesystemsolution/tech_bootstrap_icon.png" alt="Bootstrap"/></div><div className="icntechimg_nm">Bootstrap</div></li>
                <li data-aos="fade-left"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/jewelleryecommercesystemsolution/tech_mysql_icon.png" alt="MySQL"/></div><div className="icntechimg_nm">MySQL</div></li>
                <li data-aos="fade-left"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/jewelleryecommercesystemsolution/tech_apache_icon.png" alt="Apache"/></div><div className="icntechimg_nm">Apache</div></li>
            </ul>
        </div>
    </div>
</div>--> */}
      <div className="clearfix"></div>
      <div className="support_logic eCommerceSupportLogic">
        <div className="container">
          <h2 className="CustomSolutionHadding">What Support You Will Get?</h2>

          <div className="row">
            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/jewelleryecommercesystemsolution/sup1.png"
                alt="Idea Exchange"
              />
              <h3>Idea Exchange</h3>
              <p>
                We value your idea and with the mutual communication between you
                and us, we come up with great idea.
              </p>
            </div>

            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/jewelleryecommercesystemsolution/sup2.png"
                alt="Documentation Plan"
              />
              <h3>Documentation Plan</h3>
              <p>
                A proper documentation before start building an app or not rely
                on a code.
              </p>
            </div>

            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/customsolutionspage/sup3.png"
                alt="Plan With Prototype"
              />
              <h3>Plan With Prototype</h3>
              <p>
                A prototype version of a product, a service or a process and
                same will be used in order to develop & test.
              </p>
            </div>

            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/jewelleryecommercesystemsolution/sup4.png"
                alt="Regular updated Progress"
              />
              <h3>Regular updated Progress</h3>
              <p>
                You will get the updates after progress and with your approval,
                we move forward.
              </p>
            </div>

            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/jewelleryecommercesystemsolution/sup5.png"
                alt="Payment in Milestone"
              />
              <h3>Payment in Milestone</h3>
              <p>
                There is no need to do complete payment for your project. Each
                payment will get released after completion of each milestone.
              </p>
            </div>

            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/jewelleryecommercesystemsolution/sup6.png"
                alt="First Installation Free"
              />
              <h3>First Installation Free</h3>
              <p>
                We install the code for the first time free on your live server
                and if you are going for second time, it is chargeable.
              </p>
            </div>

            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/jewelleryecommercesystemsolution/sup7.png"
                alt="Post Delivery Support"
              />
              <h3>Post Delivery Support</h3>
              <p>We give free support for the next 6 months.</p>
            </div>

            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/jewelleryecommercesystemsolution/sup8.png"
                alt="Long Term Maintenance"
              />
              <h3>Long Term Maintenance</h3>
              <p>
                We always believe in long term relation with client so we are
                always available if you are looking for future extendibility.
              </p>
            </div>

            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/jewelleryecommercesystemsolution/sup9.png"
                alt="Third Party Support"
              />
              <h3>Third Party Support</h3>
              <p>
                We communicate for all the third party installation and support
                on the behalf of the client.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="faq_logic faq_logic_marketplace">
        <div className="container">
          <div className="JewelleryEcommerceFAQ">
            <h4 className="title_main">
              Frequently <br />
              Asked Questions
            </h4>
            <div className="FrequentlyQuestions">
              <MDBAccordion v-model="activeItem" borderless>
                <MDBAccordionItem
                  headerTitle="How can a Customer search for items that he may want to purchase?"
                  collapseId="flush-collapse1"
                >
                  <p>
                    Customer can purchase jewellery items by selecting the
                    categories and subcategories of the item. They can also
                    search by keywords.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Can the Customer give rating to a product even if they haven't purchased it?"
                  collapseId="flush-collapse2"
                >
                  <p>
                    Yes. Customer can give rating out of 5 even if they have not
                    purchased the product. Customer can also write a review
                    along with the rating.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="How many days it will take to implement the customization?"
                  collapseId="flush-collapse3"
                >
                  <p>
                    Time taken to implement your Jewellery E-commerce System
                    depends on the level of customization and data migration.
                    The time frame generally ranges 5-6 weeks.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Can I upload multiple pictures of the jewellery items to the website?"
                  collapseId="flush-collapse4"
                >
                  <p>
                    Yes, you can upload upto 5 pictures of the jewellery item
                    that you put on the website.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Does customer needs to be signed in to the website to make a purchase?"
                  collapseId="flush-collapse5"
                >
                  <p>
                    Yes, a customer needs to be signed in to the website to buy
                    jewellery from the site.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="How can a customer ensure the authenticity of the items on the website?"
                  collapseId="flush-collapse6"
                >
                  <p>
                    Customers can view the licence information of the jewellery
                    items on the website.{" "}
                  </p>
                </MDBAccordionItem>
              </MDBAccordion>
            </div>
          </div>
        </div>
      </div>

      <section className="enq-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <div className="btn btn-primary" onClick={openModal}>
                <a>Enquire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Custom Jewellery Website | App Development"
                  />
                }
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
              unoptimized={true}
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
