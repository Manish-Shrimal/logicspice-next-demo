"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(custom-solutions)/customsolutions.css";
import Image from "next/image";
import Link from "next/link";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Customsolutiontabs from "@/app/Components/Customsolutiontabs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Support from "@/app/Components/Support";
import { Accordion, Card, Button } from "react-bootstrap";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const openModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Navbar />
      <div className="top-head-custom e-commerce DefoutEcommerceBanner E-commerceDevelopmentBanner">
        <div className="container">
          <div className="row">
          <div className="col-md-8">
            <div className="head-enquiry">
              <h1>Custom E-commerce Development Services</h1>
              <p>
                Our custom Ecommerce mobile app development and web application
                development can become the best suitable solution for your
                business for buying and selling of goods and services online,
                through a web application or mobile apps.{" "}
              </p>
            </div>
            <ul className="head-feature">
              <li>Flexible & robust system</li>
              <li>Easy to use and comprehensive</li>
              <li>An award winning platform for a successful business</li>
              <li>Sparkle your business with our ecommerce solution</li>
            </ul>
            <div className="JewelleryBtbBx">
              {/* <a
                id=""
                className="btn btn-primary"
                onClick={() => openEnquiryModal()}
              >
                Enquire Now
              </a> */}
              <div className="btn btn-primary" onClick={openModal}>
                <a>Enquire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="eCommerce Ultimate Package"
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
                  E-Commerce Custom
                </li>
              </ol>
            </div>
          </div>
          <div className="col-md-4">
            
          </div>
          </div>
          
        </div>
      </div>

      <div className="BFC_logic eCommerceBestAppLogic">
        <div className="container">
          <div className="eCommerceBestAppWeb">
            <div className="row">
              <div className="col-lg-6">
                <div className="sr-our-expertise">
                  <h2>
                    Why logicspice is Best For Custom App/Web Development?
                  </h2>
                  <p className="title-text">
                    Whether you are expanding a brick-and-mortar store, looking
                    to find an enterprise-level solution, or even starting a
                    business from scratch, your choice of eCommerce app
                    development services has a huge impact on the profitability
                    and stability of your business.
                  </p>
                  <ul className="sr1-whyuslist">
                    <li className="why1">
                      <i>
                        <Image
                          unoptimized={true}
                          width={32}
                          height={32}
                          src="/img/customsolutions/ready-development-icon.png"
                          alt="img1"
                        />
                      </i>
                      Ready to Go for Development
                    </li>
                    <li className="why2">
                      <i>
                        <Image
                          unoptimized={true}
                          width={32}
                          height={32}
                          src="/img/customsolutions/support-maintenance-icon.png"
                          alt="img1"
                        />
                      </i>
                      Support & Maintenance
                    </li>
                    <li className="why3">
                      <i>
                        <Image
                          unoptimized={true}
                          width={32}
                          height={32}
                          src="/img/customsolutions/cost-efficient-icon.png"
                          alt="img1"
                        />
                      </i>
                      Cost- Efficient
                    </li>
                    <li className="why4">
                      <i>
                        <Image
                          unoptimized={true}
                          width={32}
                          height={32}
                          src="/img/customsolutions/future-extendibility-icon.png"
                          alt="img1"
                        />
                      </i>
                      Future Extendibility
                    </li>
                    <li className="why5">
                      <i>
                        <Image
                          unoptimized={true}
                          width={32}
                          height={32}
                          src="/img/customsolutions/low-cost-icon.png"
                          alt="img1"
                        />
                      </i>
                      Low Cost
                    </li>
                    <li className="why6">
                      <i>
                        <Image
                          unoptimized={true}
                          width={32}
                          height={32}
                          src="/img/customsolutions/personalized-icon.png"
                          alt="img1"
                        />
                      </i>
                      Personalized Online Experience
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 LightBgAqua">
                <h2 className="title-edp">
                  Select an appropriate eCommerce development platform
                </h2>
                <div className="ecommerce-process">
                  <div className="ecpr-box bg-red ecpr1">
                    Optimal eCommerce Development Procedure
                  </div>
                  <div className="ecpr-box bg-orange ecpr2">
                    Understand the client&apos;s business needs
                  </div>
                  <div className="ecpr-box bg-sepia ecpr4">
                    Create a customized business model
                  </div>
                  <div className="ecpr-box bg-blue ecpr6">
                    Design the website layout
                  </div>
                  <div className="ecpr-box bg-aqua ecpr8">
                    Establish a prototype for testing
                  </div>
                  <div className="ecpr-box bg-gray ecpr7">
                    Gather and analyze user feedback
                  </div>
                  <div className="ecpr-box bg-green ecpr5">
                    Incorporate approved modifications
                  </div>
                  <div className="ecpr-box bg-aqua ecpr3">
                    Advance to final website development
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "none" }}>
            <div className="col-md-3">
              <div className="top-box-BFC">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/customsolutions/capp1.png"
                  alt="img"
                />
                <h3>Ready to Go for Development</h3>
                <p>
                  We have a team of dedicated developers who are ready to work
                  on your requirements for app or web development. Our solution
                  is robust & highly scalable.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="top-box-BFC">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/customsolutions/capp2.png"
                  alt="img1"
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
              <div className="top-box-BFC">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/customsolutions/capp3.png"
                  alt="img3"
                />
                <h3>Cost- Efficient</h3>
                <p>
                  Our development varies with your requirement. We assure to
                  give cost efficient solution of development.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="top-box-BFC">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/customsolutions/capp4.png"
                  alt="img4"
                />
                <h3>Future Extendibility</h3>
                <p>
                  You can extend the features & functionality in your customised
                  app in future if you want to explore more. This feature
                  doesn’t come up with a ready made script.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="SBC_logic">
        <div className="container">
          <h2>Custom Ecommerce Development Solution</h2>
        </div>
        <div className="inner_content_SBG">
          <div className="container">
            <p>
              Our custom ecommerce development solutions will facilitate the
              shoppers to buy various products online from the website.
              Customers will have the option to search for different products by
              selecting the relevant categories and subcategories. They can also
              search by entering the appropriate keyword.
            </p>
            <p>
              With the help of on-demand ecommerce development, customers can
              view the listing of products and can sort/filter them according to
              their needs. They can view the details and add the items that they
              want to buy in the cart.
            </p>
            <p>
              From the cart, customers can purchase the items by paying through
              an integrated payment gateway. They can track their order once
              they have placed it. Once the customer has ordered the product, he
              can also give a rating to it and write a review. As an adept
              ecommerce app development company, we prioritize delivering these
              comprehensive solutions for optimal user experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="demand_app">
        <div className="container">
          <h2>Key Benefits of Our On-Demand Ecommerce Development Services</h2>
          <div className="EcommerceKeyBenefitsMain">
            <div className="EcommerceKeyBenefitsBx">
              <div className="EcommerceKeyBenefitsCard">
                <div className="EcommerceKeyBenefitsCardImg EcommerceKeyBenefitsImg1">
                  <Image
                    unoptimized={true}
                    width={64}
                    height={64}
                    src="/img/customsolutions/social-media-icon.png"
                    alt="Social Media Sign Up"
                  />
                </div>
                <div className="EcommerceKeyBenefitsContent">
                  <h3>Social Media Sign Up</h3>
                  <p>
                    Customers can use their social media accounts like Facebook
                    and Google Plus to sign up to the website
                  </p>
                </div>
                <div className="EcommerceKeyDotImag">
                  <Image
                    unoptimized={true}
                    width={515}
                    height={68}
                    src="/img/customsolutions/dot-img1.png"
                    alt="Easy Search"
                  />
                </div>
              </div>
              <div className="EcommerceKeyBenefitsCard EcommerceKeyBenefitsCardRight">
                <div className="EcommerceKeyBenefitsCardImg EcommerceKeyBenefitsImg2 pull-right">
                  <Image
                    unoptimized={true}
                    width={64}
                    height={64}
                    src="/img/customsolutions/easy-search-icon.png"
                    alt="Easy Search"
                  />
                </div>
                <div className="EcommerceKeyBenefitsContent">
                  <h3>Easy Search</h3>
                  <p>
                    Customers can easily search for their product by either
                    selecting the category & and sub category or entering
                    keywords
                  </p>
                </div>
                <div className="EcommerceKeyDotImag2">
                  <Image
                    unoptimized={true}
                    width={515}
                    height={68}
                    src="/img/customsolutions/dot-img2.png"
                    alt="Easy Search"
                  />
                </div>
              </div>
              <div className="EcommerceKeyBenefitsCard">
                <div className="EcommerceKeyBenefitsCardImg EcommerceKeyBenefitsImg3">
                  <Image
                    unoptimized={true}
                    width={64}
                    height={64}
                    src="/img/customsolutions/review-feature-icon.png"
                    alt="Review Feature"
                  />
                </div>
                <div className="EcommerceKeyBenefitsContent">
                  <h3>Review Feature </h3>
                  <p>
                    Customers can view ratings and reviews of the products
                    before purchasing them
                  </p>
                </div>
                <div className="EcommerceKeyDotImag">
                  <Image
                    unoptimized={true}
                    width={515}
                    height={68}
                    src="/img/customsolutions/dot-img1.png"
                    alt="Easy Search"
                  />
                </div>
              </div>
              <div className="EcommerceKeyBenefitsCard EcommerceKeyBenefitsCardRight">
                <div className="EcommerceKeyBenefitsCardImg EcommerceKeyBenefitsImg4 pull-right">
                  <Image
                    unoptimized={true}
                    width={64}
                    height={64}
                    src="/img/customsolutions/order-tracking-icon.png"
                    alt="Order Tracking"
                  />
                </div>
                <div className="EcommerceKeyBenefitsContent">
                  <h3>Order Tracking</h3>
                  <p>
                    {" "}
                    Customer can track their orders after they have placed them
                    through the website
                  </p>
                </div>
                <div className="EcommerceKeyDotImag2">
                  <Image
                    unoptimized={true}
                    width={515}
                    height={68}
                    src="/img/customsolutions/dot-img2.png"
                    alt="Easy Search"
                  />
                </div>
              </div>
              <div className="EcommerceKeyBenefitsCard">
                <div className="EcommerceKeyBenefitsCardImg EcommerceKeyBenefitsImg5">
                  <Image
                    unoptimized={true}
                    width={64}
                    height={64}
                    src="/img/customsolutions/quick-payment-icon.png"
                    alt="Quick Payment"
                  />
                </div>
                <div className="EcommerceKeyBenefitsContent">
                  <h3>Quick Payment</h3>
                  <p>
                    Customers can easily pay for the purchased products using an
                    integrated payment gateway
                  </p>
                </div>
                <div className="EcommerceKeyDotImag">
                  <Image
                    unoptimized={true}
                    width={515}
                    height={68}
                    src="/img/customsolutions/dot-img1.png"
                    alt="Easy Search"
                  />
                </div>
              </div>
              <div className="EcommerceKeyBenefitsCard EcommerceKeyBenefitsCardRight">
                <div className="EcommerceKeyBenefitsCardImg EcommerceKeyBenefitsImg6 pull-right">
                  <Image
                    unoptimized={true}
                    width={64}
                    height={64}
                    src="/img/customsolutions/favorites-feature-icon.png"
                    alt="Favorites Feature"
                  />
                </div>
                <div className="EcommerceKeyBenefitsContent">
                  <h3>Favorites Feature</h3>
                  <p>
                    Customers can add their favorite items to a list so that
                    they can find them easily when they visit the website next
                    time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="eCommerceCustomSolutionSection" id="features">
        <div className="container">
          <h2 className="CustomSolutionHadding">
            Custom Ecommerce Development Features
          </h2>
          <div className="eCommerceCustomFeatures">
            <div className="row">
              <div className="col-sm-3">
                <div className="eCommerceCustomFeaturesBx">
                  <Image
                    unoptimized={true}
                    width={64}
                    height={64}
                    src="/img/customsolutions/search-icon.png"
                    alt="Delivery Status"
                  />
                  <h3>Search </h3>
                  <p>
                    User can search for the products by keyword, category,
                    subcategory, deals or sale.{" "}
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="eCommerceCustomFeaturesBx">
                  <Image
                    unoptimized={true}
                    width={64}
                    height={64}
                    src="/img/customsolutions/advanced-filters-icon.png"
                    alt="Smart Routing"
                  />
                  <h3>Advanced Filters</h3>
                  <p>
                    Filter products by price, brands, size, color, reviews,
                    discount, latest arrivals or seller.
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="eCommerceCustomFeaturesBx">
                  <Image
                    unoptimized={true}
                    width={64}
                    height={64}
                    src="/img/customsolutions/product-detail-icon.png"
                    alt="Easy to Use"
                  />
                  <h3>Product Detail</h3>
                  <p>
                    View the details of the product i.e. description, price,
                    availability, images, reviews and rating.{" "}
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="eCommerceCustomFeaturesBx">
                  <Image
                    unoptimized={true}
                    width={64}
                    height={64}
                    src="/img/customsolutions/wishlist-icon.png"
                    alt="Automated Dispatching"
                  />
                  <h3>Wishlist </h3>
                  <p>
                    User can add the product in their wishlist which they like
                    and share the wishlist with the other users.
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="eCommerceCustomFeaturesBx">
                  <Image
                    unoptimized={true}
                    width={64}
                    height={64}
                    src="/img/customsolutions/order-tracking-icon.png"
                    alt="Admin Control"
                  />
                  <h3>Order Tracking</h3>
                  <p>
                    Track the order status i.e. dispatched, in transit,
                    delivered and the average delivery time.{" "}
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="eCommerceCustomFeaturesBx">
                  <Image
                    unoptimized={true}
                    width={64}
                    height={64}
                    src="/img/customsolutions/promo-codes-icon.png"
                    alt="Ratings & Reviews"
                  />
                  <h3>Promo Codes Management</h3>
                  <p>
                    Vendors can manage the promo codes, discount, application
                    products and validity period.
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="eCommerceCustomFeaturesBx">
                  <Image
                    unoptimized={true}
                    width={64}
                    height={64}
                    src="/img/customsolutions/product-management-icon.png"
                    alt="Track Sales"
                  />
                  <h3>Product Management</h3>
                  <p>
                    Vendors can manage the products in the product section,
                    activate or deactivate the products.
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="eCommerceCustomFeaturesBx">
                  <Image
                    unoptimized={true}
                    width={64}
                    height={64}
                    src="/img/customsolutions/category-management-icon.png"
                    alt="Partial & Failed Delivery Status"
                  />
                  <h3>Category Management</h3>
                  <p>
                    Admin can add, edit and delete the category. Manage the
                    categories, sub categories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="clearfix"></div>

      <div className="app_solution eCommerceAppSolution">
        <div className="container">
          <h2 className="CustomSolutionHadding">
            Custom Ecommerce Portal Development Solution
          </h2>
          <div className="EcommerceJewellerySolutionBx">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="EcommerceJewellerySolutionImg">
                  <Image
                    unoptimized={true}
                    width={533}
                    height={400}
                    src="/img/customsolutions/ecommerce-web-img.jpg"
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
                      src="/img/customsolutions/idea-icon.png"
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
                      src="/img/customsolutions/concept-icon.png"
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
                      src="/img/customsolutions/implement-icon.png"
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
                      src="/img/customsolutions/software-testing.png"
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
                      src="/img/customsolutions/support-icon.png"
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
                <li data-aos="fade-right"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/customsolutions/tech_ios_icon.png" alt="iOS"/></div><div className="icntechimg_nm">iOS</div></li>
                <li data-aos="fade-right"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/customsolutions/tech_java_icon.png" alt="Java"/></div><div className="icntechimg_nm">Java</div></li>
                <li data-aos="fade-right"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/customsolutions/tech_android_icon.png" alt="Android"/></div><div className="icntechimg_nm">Android</div></li>
                <li data-aos="fade-right"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/customsolutions/tech_php_icon.png" alt="PHP"/></div><div className="icntechimg_nm">PHP</div></li>
                <li data-aos="fade-left"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/customsolutions/tech_cakephp_icon.png" alt="CakePHP"/></div><div className="icntechimg_nm">CakePHP</div></li>
                <li data-aos="fade-left"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/customsolutions/tech_bootstrap_icon.png" alt="Bootstrap"/></div><div className="icntechimg_nm">Bootstrap</div></li>
                <li data-aos="fade-left"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/customsolutions/tech_mysql_icon.png" alt="MySQL"/></div><div className="icntechimg_nm">MySQL</div></li>
                <li data-aos="fade-left"><div className="icntechimg"><Image unoptimized={true} width={100} height={100} src="/img/customsolutions/tech_apache_icon.png" alt="Apache"/></div><div className="icntechimg_nm">Apache</div></li>
            </ul>
        </div>
    </div>
</div>--> */}
      <div className="clearfix"></div>
      <div className="support_logic eCommerceSupportLogic">
        <div className="container">
          <h2>What Support You Will Get ?</h2>

          <div className="row">
            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/customsolutions/sup1.png"
                alt="img12"
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
                src="/img/customsolutions/sup2.png"
                alt="img13"
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
                src="/img/customsolutions/sup3.png"
                alt="img14"
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
                src="/img/customsolutions/sup4.png"
                alt="img15"
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
                src="/img/customsolutions/sup5.png"
                alt="img16"
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
                src="/img/customsolutions/sup6.png"
                alt="img17"
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
                src="/img/customsolutions/sup7.png"
                alt="img18"
              />
              <h3>Post Delivery Support</h3>
              <p>We give free support for the next 6 months.</p>
            </div>

            <div className="col-sm-4">
              <Image
                unoptimized={true}
                width={95}
                height={95}
                src="/img/customsolutions/sup8.png"
                alt="img19"
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
                src="/img/customsolutions/sup9.png"
                alt="img20"
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
                  headerTitle="How can customers search for products?"
                  collapseId="flush-collapse1"
                >
                  <p>
                    Customers can search for the products by selecting the
                    categories and the sub categories or by entering the
                    keywords related to their search.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Can the Customer give rating to a product even if they havent purchased it?"
                  collapseId="flush-collapse2"
                >
                  <p>
                    No. Customer can only give rating out of 5 when they have
                    purchased the product. Customer can also write a review
                    along with the rating.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="How can the Admin manage their products on the website?"
                  collapseId="flush-collapse3"
                >
                  <p>
                    The Admin can add their products along with the pictures and
                    other details to the website. They can also edit and delete
                    the products that are already been added.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Can a customer add products that he likes to a list?"
                  collapseId="flush-collapse4"
                >
                  <p>
                    Yes, customer can add products to a favorites list so that
                    they can see them at one place when they visits the website
                    again.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="Can a Customer add products from more than one categories to the cart at the same time?"
                  collapseId="flush-collapse5"
                >
                  <p>
                    Yes, Customers can add products to the cart from more than
                    one categories at the same time.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="How can a customer purchase product from the website?"
                  collapseId="flush-collapse6"
                >
                  <p>
                    Customers can make a purchase from the website by adding the
                    products that they want to purchase to a cart and then pay
                    for it through an integrated payment gateway.
                  </p>
                </MDBAccordionItem>
                <MDBAccordionItem
                  headerTitle="How can customers review the products that are available on the website?"
                  collapseId="flush-collapse7"
                >
                  <p>
                    Customers can post a review on the product once they have
                    purchased it. Once the customer purchases a product they
                    will get an option to review it.
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
                    title="Custom E-Commerce Development"
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
