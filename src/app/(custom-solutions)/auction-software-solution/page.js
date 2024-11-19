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
import Customsolutiontabs from "@/app/Components/Customsolutiontabs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Support from "@/app/Components/Support";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { Collapse } from "react-bootstrap";
import "../../../../public/css/font-awesome.css";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [sellerTab, setSellerTab] = useState(true);
  const [buyerTab, setBuyerTab] = useState(false);
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key); // Toggle the accordion item
  };

  const accordionItems = [
    {
      key: "collapseOne",
      title: "How can a Buyer search for products around his location?",
      content: "User can enter his zip/postal code in the website and all the products will be listed to the seller.",
    },
    {
      key: "collapseTwo",
      title: "How many days will it take to implement the development?",
      content:
        "Time taken to implement your Auction Software depends on the level of customization and data migration. The time frame generally ranges from 5-6 weeks.",
    },
    {
      key: "collapseThree",
      title:
        "Can a Seller upload multiple products to the website?",
      content:
        "Yes, Sellers can add products in their â€œStoreâ€� along with multiple pictures and other details.",
    },
    {
      key: "collapseFour",
      title: "Can a Seller set up multiple stores on the website?",
      content:
        "No. A Seller can only setup one store in which he can upload multiple products.",
    },
    {
      key: "collapseFive",
      title: "How can a buyer win an auction?",
      content:
        "Buyer can win the auction that he has bid for if they have the highest offer price at the end of auction.",
    },
    
    
  ];

  const openModal = () => {
    setShowModal(!showModal);
  };

  const handleSellerTab = () => {
    setSellerTab(true);
    setBuyerTab(false);
  };
  const handleBuyerTab = () => {
    setSellerTab(false);
    setBuyerTab(true);
  };

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Navbar />
      <div className="top-head-custom Auction-System">
        <div className="container">
          <div className="col-md-8">
            <div className="head-enquiry">
              <h1>Auction System Custom Development</h1>
              <p>
                Logicspice will offer you the best custom mobile apps
                development and web solution for your business to buy and sell
                goods or services offering to customers for bidding-allowing
                customers to bid and sell to the highest bidder.
              </p>

              <div className="btn btn-primary" onClick={openModal}>
                <a>Enquire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Auction System Custom Development"
                  />
                }
              </div>
              <Link
                href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
                target="_blank"
              >
                <div className="WhatsappIcon WhatsappIconCustom">
                  <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                    <div className="coccoc-alo-ph-circle"></div>
                    <div className="coccoc-alo-ph-circle-fill"></div>
                    <div className="coccoc-alo-ph-img-circle"></div>
                  </div>
                </div>
              </Link>
            </div>
            <ul className="head-feature">
              <li>
                Cutting-Edge Auction Portal As Per Business&apos;s Criteria
              </li>
              <li>We offer flexible engagement models for our clients</li>
              <li>
                We deliver user friendly, all browser and all devices compatible
                solution
              </li>
              <li>Our project solutions offer seamless integration</li>
            </ul>
            <div aria-label="breadcrumb" className="my-breadcrumb ">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/custom-solutions">Custom Solutions</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Auction System
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="BFC_logic">
        <div className="container">
          <h2>Why logicspice is Best For Custom App/Web Development?</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="top-box-BFC">
                <Image
                  unoptimized={true}
                  height={100}
                  width={100}
                  src="/img/customsolutions/capp1.png"
                  alt="img1"
                />
                <h3>Ready to Go for Development</h3>
                <p>
                  We have a team of dedicated developers who are ready to work
                  on your requirements for app or web development. Our solution
                  is robust &amp; highly scalable.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="top-box-BFC">
                <Image
                  unoptimized={true}
                  height={100}
                  width={100}
                  src="/img/customsolutions/capp2.png"
                  alt="img2"
                />
                <h3>Support &amp; Maintenance</h3>
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
                  height={100}
                  width={100}
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
                  height={100}
                  width={100}
                  src="/img/customsolutions/capp4.png"
                  alt="img4"
                />
                <h3>Future Extendibility</h3>
                <p>
                  You can extend the features &amp; functionality in your
                  customised app in future if you want to explore more. This
                  feature doesn&apos;t come up with a ready made script.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SBC_logic">
        <div className="container">
          <h2>Auction Software Custom Development</h2>
        </div>
        <div className="inner_content_SBG">
          <div className="container">
            <p>
              The Auction System Software serve as an attractive medium for the
              buyers and sellers to interact one another on the same platform.
              Buyers can search for products that they need to buy according
              category of the product they want. Our custom auction portal help
              buyers to view details of the products that they may have to
              purchase. They can place a bid on the product that they like and
              pay for the same if they have won the auction with highest bid
              price.
            </p>

            <p>
              On this on demand auction software, sellers can set up and manage
              their &quot;Store&quot; over the website by uploading products in
              suitable categories in their account over the site. They can view
              the bid offers posted over their products listed. They will be
              able to view the bid amount of the highest bidder i.e. highest
              bidder will win the auction. Seller also have the facility to
              request buyer to withdraw any bid for a relevant reason.
            </p>
          </div>
        </div>
      </div>
      <div className="demand_app">
        <div className="container">
          <h2>Key Benefits of Our Auction Software On Demand Development</h2>

          <div className="row">
            <div className="col-sm-4">
              <div className="demand-card " data-aos="fade-right">
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon1.png"
                    alt="img5"
                  />
                </div>
                <div className="demand-content">
                  <h3>Location Based Search </h3>
                  <p>
                    Buyers can search for products they wish to purchase around
                    them using their zip/postal code
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card " data-aos="fade-right">
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon3.png"
                    alt="img6"
                  />
                </div>
                <div className="demand-content">
                  <h3>Product Rating</h3>
                  <p>
                    Buyers can give rating to the products that they may have
                    used which can be viewed by other Buyers
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card " data-aos="fade-right">
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon5.png"
                    alt="img7"
                  />
                </div>
                <div className="demand-content">
                  <h3>Favorites Feature</h3>
                  <p>
                    Buyers can add their favorite products to a list so that
                    they can find them easily when they visit the website next
                    time
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="col-sm-4 center_image">
              <Image
                unoptimized={true}
                height={100}
                width={250}
                src="/img/customsolutions/benifit.png"
                alt="img8"
              />
            </div>
            <div className="col-sm-4">
              <div className="demand-card " data-aos="fade-left">
                <div className="demand-content">
                  <h3>Store Management </h3>
                  <p>
                    {" "}
                    Sellers can set up and manage their â€œStoreâ€� over the
                    website easily providing their contact information
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon2.png"
                    alt="img9"
                  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card " data-aos="fade-left">
                <div className="demand-content">
                  <h3>Product Management</h3>
                  <p>
                    Sellers can add and manage products to their â€œStoreâ€�
                    along with their details
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon4.png"
                    alt="img10"
                  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="demand-card " data-aos="fade-left">
                <div className="demand-content">
                  <h3>Bid Offer Management</h3>
                  <p>
                    Sellers can view the details of various buyers who have
                    posted bids on their project along with the bid price
                  </p>
                </div>
                <div className="demand-img">
                  <Image
                    unoptimized={true}
                    height={100}
                    width={80}
                    src="/img/customsolutions/b_icon6.png"
                    alt="img11"
                  />
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="content_area feature_inner" id="features">
        <div className="container">
          <h2 className="titlesettop titlesettop_mar">
          Auction System Custom Development Features
          </h2>

          <div className="features-tab">
            <div className="clearfix">
              <ul className="nav nav-tabs" role="tablist">
                <li
                  id="tab1_li"
                  className={`jobseeker_app_job ddlj ${
                    sellerTab ? "active" : ""
                  }`}
                  onClick={() => handleSellerTab()}
                  style={{ cursor: "pointer" }}
                >
                  <a> Features</a>
                </li>
                <li
                  id="tab2_li"
                  className={`business-directory-system ddlj ${
                    buyerTab ? "active" : ""
                  }`}
                  onClick={() => handleBuyerTab()}
                  style={{ cursor: "pointer" }}
                >
                  <a>Screenshot </a>
                </li>
              </ul>

              <div className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane active"
                  id="features-car1"
                >
                  {sellerTab && (
                    <>
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/Bid-Offer-Management.png"
                              alt="Smart Routing"
                            />
                            <h3>Bid Offer Management For Seller</h3>
                            <p>
                              Sellers can view the bid offers for their listed
                              products. Check the highest bidder, which will be
                              the auction winner.
                            </p>
                          </div>
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/search.png"
                              alt="Delivery Status"
                            />
                            <h3>Search Product</h3>
                            <p>
                              Buyers can search for product by selecting the
                              category/sub-category, location &amp; keywords
                              over the website.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/payments.png"
                              alt="Partial &amp; Failed Delivery Status"
                            />
                            <h3>Payment</h3>
                            <p>
                              Buyers can make payment for purchase products by
                              secure credit card processing.
                            </p>
                          </div>

                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/User-Profile.png"
                              alt="Track Sales"
                            />
                            <h3>User Profile</h3>
                            <p>
                              Buyers/Sellers will be able to manage their basic
                              information includes add/edit details.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/Shop-Management.png"
                              alt="Admin Control"
                            />
                            <h3>Shop Management For Seller</h3>
                            <p>
                              Sellers can create their shop/store, one seller
                              can only create one store. They will be able to
                              add/edit/delete store.
                            </p>
                          </div>
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/product-listing.png"
                              alt="Ratings &amp; Reviews"
                            />
                            <h3>Product Listing</h3>
                            <p>
                              Buyers can view listings of product and sort them
                              by keyword, price or alphabetical format.
                            </p>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/manage-product.png"
                              alt="Automated Dispatching"
                            />
                            <h3>Product Management For Seller</h3>
                            <p>
                              Sellers can add, edit or delete the products
                              online. While adding a product they have to enter
                              the details.
                            </p>
                          </div>

                          <div className="ftr-detail">
                            <Image
                              unoptimized={true}
                              height={100}
                              width={60}
                              src="/img/customsolutions/product-detail.png"
                              alt="Easy to Use"
                            />
                            <h3>Product Detail</h3>
                            <p>
                              Buyer can view the product Image, category,
                              sub-category, seller name or store name, store
                              location.
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div
                  role="tabpanel"
                  className="tab-pane active"
                  id="features-car1"
                >
                  {buyerTab && (
                    <>
                      <div>
                        <Slider {...settings}>
                          <div className="SliderMainBx">
                            <Link
                              href="https://salorapido.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                unoptimized={true}
                                src="/img/customsolutions/bid-offer-management.jpg"
                                alt="icon"
                                title=""
                                className="img-fluid"
                                width={1500}
                                height={500 / (100 / 100)}
                              />
                            </Link>
                          </div>
                          <div className="SliderMainBx">
                            <Link
                              href="https://salorapido.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                unoptimized={true}
                                src="/img/customsolutions/shop-management.jpg"
                                alt="icon"
                                title=""
                                className="img-fluid"
                                width={1500}
                                height={500 / (100 / 100)}
                              />
                            </Link>
                          </div>
                          <div className="SliderMainBx">
                            <Link
                              href="https://salorapido.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                unoptimized={true}
                                src="/img/customsolutions/salorapido.jpg"
                                alt="icon"
                                title=""
                                className="img-fluid"
                                width={1500}
                                height={500 / (100 / 100)}
                              />
                            </Link>
                          </div>
                          <div className="SliderMainBx">
                            <Link
                              href="https://salorapido.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                unoptimized={true}
                                src="/img/customsolutions/salorapido.jpg"
                                alt="icon"
                                title=""
                                className="img-fluid"
                                width={1500}
                                height={500 / (100 / 100)}
                              />
                            </Link>
                          </div>
                          <div className="SliderMainBx">
                            <div className="feat-slide-img">
                              <Image
                                unoptimized={true}
                                src="/img/customsolutions/Manage_jobs_job_portal_script.png"
                                alt="Job Management"
                                width={1500}
                                height={500 / (100 / 100)}
                              />
                            </div>
                            <div className="hands-proved">
                              <div className="titleof_scnew">
                                Job Management
                              </div>
                              <div className="pro-feat-detai">
                                Manage the jobs created by them making them
                                active or inactive. Check the list of job
                                seekers who applied for job.
                              </div>
                            </div>
                          </div>
                          <div className="SliderMainBx">
                            <div className="feat-slide-img">
                              <Image
                                unoptimized={true}
                                src="/img/customsolutions/membership_plan_job_portal_script.png"
                                alt="Membership Plan"
                                width={1500}
                                height={500 / (100 / 100)}
                              />
                            </div>
                            <div className="hands-proved">
                              <div className="titleof_scnew">
                                Membership Plan
                              </div>
                              <div className="pro-feat-detai">
                                Employers buy membership plan which suits their
                                requirement best.They can renew or update your
                                membership plan at any time.
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="app_solution">
        <div className="container">
          <h2>Auction System Custom Development Solution</h2>
          <Customsolutiontabs />
        </div>
      </div>
      <div className="support_logic">
        <div className="container">
          <h2>What Support You Will Get ?</h2>
          <Support />
        </div>
      </div>

      {/*  */}
      {/* <section className="ecommerce_faq_section CustomSolutionFaqSection">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ecommerce__Quick_FAQ">
              <h4 className="title_main">Quick FAQ</h4>
              <MDBAccordion v-model="activeItem" borderless>
                <MDBAccordionItem
                  headerTitle="How can a Buyer search for products around his location?"
                  collapseId="flush-collapse1"
                >
                  <p>
                    User can enter his zip/postal code in the website and all
                    the products will be listed to the seller.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="How many days will it take to implement the development?"
                  collapseId="flush-collapse2"
                >
                  <p>
                    Time taken to implement your Auction Software depends on the
                    level of customization and data migration. The time frame
                    generally ranges from 5-6 weeks.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="Can a Seller upload multiple products to the website?"
                  collapseId="flush-collapse3"
                >
                  <p>
                    Yes, Sellers can add products in their Store along with
                    multiple pictures and other details.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="Can a Seller set up multiple stores on the website?"
                  collapseId="flush-collapse4"
                >
                  <p>
                    No. A Seller can only setup one store in which he can upload
                    multiple products.
                  </p>
                </MDBAccordionItem>

                <MDBAccordionItem
                  headerTitle="How can a buyer win an auction?"
                  collapseId="flush-collapse5"
                >
                  <p>
                    Buyer can win the auction that he has bid for if they have
                    the highest offer price at the end of auction.
                  </p>
                </MDBAccordionItem>
              </MDBAccordion>
            </div>
          </div>
        </div>
      </section> */}
        <section className="faq_logic faq_logic_marketplace">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <h4 className="title_main">FAQ&apos;s</h4>

              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                {accordionItems.map((item) => (
                  <div className="panel panel-default" key={item.key}>
                    <div
                      className="panel-heading"
                      role="tab"
                      id={`heading${item.key}`}
                    >
                      <h4 className="panel-title">
                        <a
                          role="button"
                          onClick={() => toggleAccordion(item.key)}
                          aria-expanded={
                            activeKey === item.key ? "true" : "false"
                          }
                          aria-controls={item.key}
                          className={activeKey === item.key ? "" : "collapsed"}
                        >
                          <span>{item.title} </span>
                          <i
                            className={`more-less glyphicon glyphicon-${
                              activeKey === item.key ? "minus" : "plus"
                            }`}
                          ></i>
                        </a>
                      </h4>
                    </div>
                    <Collapse in={activeKey === item.key}>
                      <div
                        id={item.key}
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby={`heading${item.key}`}
                      >
                        <div className="panel-body">{item.content}</div>
                      </div>
                    </Collapse>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
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
                    title="Auction System Custom Development"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <Link
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
          </Link>
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
