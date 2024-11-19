"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
import "../../resposive.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import { redirect } from "next/navigation";
import "../../../../public/css/font-awesome.css";

const Page = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showMoreData, setShowMoreData] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const openModal = () => {
    // console.log(showModal);

    setShowModal(!showModal);
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/66ed1e29e5982d6c7bb15ccc/1i873rkmf";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []); // Empty dependency array to run once on mount
  // redirect('/')
  return (
    <>
      <Navbar />
      <div className="software_products">
        <section className="breadcrems_header">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>Softwares</h1>
              </div>
              <div className="col-md-6">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Softwares
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="product-new-page">
          <div className="container">
            <div className="new-product-bx product_abs_and_all">
              <ul className="nav-tabs new-products-tab" role="tablist">
                <li
                  id="tab1_li"
                  className={activeTab === "tab1" ? "active" : ""}
                  onClick={() => handleTabClick("tab1")}
                >
                  <a>
                    <span>All</span>
                  </a>
                </li>
                <li
                  id="tab2_li"
                  className={activeTab === "tab2" ? "active" : ""}
                  onClick={() => handleTabClick("tab2")}
                >
                  <a>
                    <span>Web</span>
                  </a>
                </li>
                <li
                  id="tab3_li"
                  className={activeTab === "tab3" ? "active" : ""}
                  onClick={() => handleTabClick("tab3")}
                >
                  <a>
                    <span>Mobile</span>
                  </a>
                </li>
                <li
                  id="tab4_li"
                  className={activeTab === "tab4" ? "active" : ""}
                  onClick={() => handleTabClick("tab4")}
                >
                  <a>
                    <span>Free</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              {activeTab === "tab1" && (
                <div id="tab1" className="costomer_tab rj">
                  <div className="new-product-box">
                    <div className="row">
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/wordpress-ecommerce-website"
                          className="ready-product aos-init aos-animate"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/softwares/wordpress-ecommerce-website-img.png"
                            alt="WordPress eCommerce Website"
                          />{" "}
                          <div className="abs-product">
                            <h3>WordPress eCommerce Website</h3>
                            <p>
                              A WordPress eCommerce website is a platform built
                              using a popular content management system (CMS),
                              Wordpress, designed for online stores.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">225 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/order-management-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/order-management-product-img.png"
                            alt="Job-board"
                          />
                          <div className="abs-product">
                            <h3>Order Management Software</h3>
                            <p>
                              Our Order Management Software empowers you to take
                              control of your orders with precision. Simplify
                              order processing, reduce errors, and accelerate
                              your business operations.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">225 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/job-board-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/jobboard-product-img.png"
                            alt="Job-board"
                          />
                          <div className="abs-product">
                            <h3>Job Board Software</h3>
                            <p>
                              Our job Board script enables you to get started
                              with your own job Board website like Coroflot &
                              Monster. It is a highly scalable, robust and
                              user-friendly job board script.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">219 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/fiverr-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/gigger-product-img.png"
                            alt="Fiverr Clone"
                          />
                          <div className="abs-product">
                            <h3>Fiverr Clone</h3>
                            <p>
                              The fiverr clone script can help you to build your
                              own freelance service marketplace where
                              freelancers can sell their services and buyers can
                              order services.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">569 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/freelancer-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/freelancer-product-img.png"
                            alt="Freelancer Clone"
                          />
                          <div className="abs-product">
                            <h3>Freelancer Clone</h3>
                            <p>
                              Logicspice offers freelance marketplace script,
                              developed to build your own freelance marketplace
                              similar to upwork clone, elance clone and more.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">128 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/logistic-marketplace-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/logisticr-product-img.png"
                            alt="Logicstic Marketplace Software"
                          />
                          <div className="abs-product">
                            <h3>Logicstic Marketplace Software</h3>
                            <p>
                              A transportation management system is an online
                              platform that help businesses to streamline their
                              shipping process.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">173 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/doctor-appointment-scheduling-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/doctorappointment/doctor-appointment-icon.png"
                            alt="Doctor Appointment Scheduling Software"
                          />
                          <div className="abs-product">
                            <h3>Doctor Appointment Scheduling Software</h3>
                            <p>
                              Doctor Appointment Scheduling Software offers an
                              easy, efficient way to manage bookings, making
                              healthcare appointments stress-free for everyone.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">173 REVIEWS</div>
                            <ul className="make-style">
                              {/* <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li> */}
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/hrms-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/hrms/human-resource-icon.png"
                            alt="Human Resource Management Software"
                          />
                          <div className="abs-product">
                            <h3>Human Resource Management Software</h3>
                            <p>
                              HR Management Software makes handling employee
                              data and HR tasks simple and efficient, helping
                              businesses save time and stay organized.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">310 REVIEWS</div>
                            <ul className="make-style">
                              {/* <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li> */}
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/salon-booking-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/doctorappointment/salon-booking-icon.png"
                            alt="Salon Booking Software"
                          />
                          <div className="abs-product">
                            <h3>Salon Booking Software</h3>
                            <p>
                              Our Salon Booking Software helps salons and spas
                              manage appointments with ease, and creating a
                              smooth booking experience for clients.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">173 REVIEWS</div>
                            <ul className="make-style">
                              {/* <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li> */}
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/crowdfunding-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/crowdfunding-product-img.png"
                            alt="Crowdfunding Script"
                          />
                          <div className="abs-product">
                            <h3>Crowdfunding Script</h3>
                            <p>
                              The crowdfunding product that we have developed
                              will enable the people to donate money for various
                              categories of causes that they may have favor for.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">47 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/classified-ads-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/classified-product-img.png"
                            alt="Classified Ads Script"
                          />
                          <div className="abs-product">
                            <h3>Classified Ads Script</h3>
                            <p>
                              Our Classified Ads Script offers a reliable,
                              easy-to-use platform for listing, buying, and
                              selling items in any location.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">24 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/inventory-management-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/inventory-management-img.png"
                            alt="LS Inventorizerr"
                          />
                          <div className="abs-product">
                            <h3>LS Inventorizerr</h3>
                            <p>
                              Experience comprehensive end-to-end supply chain
                              visibility and control with our web based
                              inventory management system. From the moment you
                              initiate a purchase order to the final customer
                              sale.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">70 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/marketplace-software-solution"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/marketplace-software-img.png"
                            alt="Marketplace Software"
                          />
                          <div className="abs-product">
                            <h3>Marketplace Software</h3>
                            <p>
                              Please check our readymade service marketplace
                              softwares for the sectors like freelance,
                              logistics, rental, scheduling, home cleaning and
                              appointment booking service.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">560 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/booking-software-solutions"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/marketplace-software-img.png"
                            alt="Marketplace Software"
                          />
                          <div className="abs-product">
                            <h3>Online Booking Software</h3>
                            <p>
                              Our Online Booking Software enables you to manage
                              bookings effortlessly. Streamline scheduling,
                              minimize errors, and boost your business
                              efficiency with seamless online reservations.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">560 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/groupon-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/groupon-product-img.png"
                            alt="Groupon Clone Script"
                          />
                          <div className="abs-product">
                            <h3>Groupon Clone Script</h3>
                            <p>
                              Groupon clone Script helps you to avail a daily
                              deal software for listing deals. Launch your own
                              online coupon software with our Readymade Groupon
                              clone app.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">27 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/service-marketplace-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/servicemarket-product-img.png"
                            alt="Service Marketplace"
                          />
                          <div className="abs-product">
                            <h3>Service Marketplace</h3>
                            <p>
                              Our thumbtack clone will facilitate customer to
                              search for service providers that are offering the
                              service by entering their location and selecting
                              the type
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">49 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/udemy-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/udemy-img.png"
                            alt="Udemy Clone Script"
                          />
                          <div className="abs-product">
                            <h3>Udemy Clone Script</h3>
                            <p>
                              Are you looking to launch your own online video
                              learning platform? Get on to our ready to use
                              udemy clone script to start your own e-learning
                              portal like udemy. This script allows an user to
                              add and manage courses with their sections and
                              lectures.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">13 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/equipment-rental-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/equipment-product-img.png"
                            alt="Equipment Rental Script"
                          />
                          <div className="abs-product">
                            <h3>Equipment Rental Software</h3>
                            <p>
                              Our online Equipment Rental script will facilitate
                              users to rent and sell their
                              equipments/machines/Linkuto parts over the
                              app/website.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">38 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/online-exam-software-solution"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/online-exam-img.png"
                            alt="Online Exam Software Script"
                          />
                          <div className="abs-product">
                            <h3>Online Exam Software Script</h3>
                            <p>
                              The online exam software Script can help you to
                              develop your own online exam system, to conduct
                              any type of online examination, test, practice and
                              more.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">26 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/job-portal-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/jo-portel-img.png"
                            alt="Job-Portal"
                          />
                          <div className="abs-product">
                            <h3>Job Portal Script</h3>
                            <p>
                              Our job portal script enables you to get started
                              with your own job portal website like Coroflot &
                              Monster. It is a highly scalable, robust and
                              user-friendly job board script.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">218 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/business-directory-system"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/business-directory-img.png"
                            alt="PHP Business Directory Script"
                          />
                          <div className="abs-product">
                            <h3>PHP Business Directory Script</h3>
                            <p>
                              Yellow pages script is stand alone PHP business
                              directory script with a numerous features to build
                              your own online business directory site.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">26 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/grocery-app-development"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/grocery-app-img.png"
                            alt="Grocery PHP Script"
                          />
                          <div className="abs-product">
                            <h3>Grocery PHP Script</h3>
                            <p>
                              If you are planning to sell grocery online, our
                              online grocery software is the best available
                              choice in the market.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">26 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/recruitment-management-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/recruitment-product-img.png"
                            alt="Recruitment Management Software"
                          />
                          <div className="abs-product">
                            <h3>Recruitment Management Software</h3>
                            <p>
                              An online recruitment management system tends to
                              make the HR&apos;s job faster, more precise and
                              proficient.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">44 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/event-booking-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/event-booking-img.png"
                            alt="Event Booking Software"
                          />
                          <div className="abs-product">
                            <h3>Event Booking Software</h3>
                            <p>
                              Our Online Event Booking system helps your
                              customer to reserve seats for meetings and
                              conferences to social events, weddings, parties,
                              movies, bus tours etc.This software provides
                              functionality to track all details of booked
                              seats.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">217 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/whatsapp-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/whatsapp-product-img.png"
                            alt="whatsApp-clone"
                          />
                          <div className="abs-product">
                            <h3>Whatsapp Clone</h3>
                            <p>
                              Get on to our ready to use WhatsApp clone app and
                              make your messenger similar to WhatsApp. This
                              script works on the web, android and iOS platforms
                              and helps users to stay connected with their
                              friends, colleagues and relatives by sharing
                              messages, photos, videos and files.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">24 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/chat-room-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/chat-room-img.png"
                            alt="Chat Room Script"
                          />
                          <div className="abs-product">
                            <h3>Chat Room Script</h3>
                            <p>
                              Get on to our ready to use Chat Room Script . This
                              script works on the web, android and iOS platforms
                              and helps users to stay connected with their
                              friends, colleagues and relatives by sharing
                              messages, photos, videos and files.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">92 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/food-ordering-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/foododer-product-img.png"
                            alt="food-ordering"
                          />
                          <div className="abs-product">
                            <h3>Food Ordering Script</h3>
                            <p>
                              The food ordering script that we have developed
                              will serve as an attractive medium for customers
                              to order food from the restaurants.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">32 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/appointment-scheduling-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/appointment-img.png"
                            alt="Appointment Booking System"
                          />
                          <div className="abs-product">
                            <h3>Appointment Booking System</h3>
                            <p>
                              A user-friendly appointment booking system that
                              enables owners to manage their appointments online
                              from remote locations.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">28 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/real-estate-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/real-product-img.png"
                            alt="Real Estate Script"
                          />
                          <div className="abs-product">
                            <h3>Real Estate Script</h3>
                            <p>
                              Are you looking to make your own real estate CRM
                              software? Get on to our ready to use real estate
                              clone script to make your own online real estate
                              classified website.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">13 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/rental-property-management-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/rental-property-img.png"
                            alt="Property Rental Script"
                          />
                          <div className="abs-product">
                            <h3>Property Rental Script</h3>
                            <p>
                              This property rental script will facilitate people
                              to search for apartments to rent them and view
                              their details along with the amenities so people
                              can opt out property
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">30 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/news-management-system"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/news-management-img.png"
                            alt="News Management System"
                          />
                          <div className="abs-product">
                            <h3>News Management System</h3>
                            <p>
                              Digital media is playing a major role in authentic
                              flow of information and the news, to the masses
                              and this news portal management script can play a
                              major role for your corporate, political or any
                              other kind of news showcasing.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">18 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/ebay-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/ebay-img.png"
                            alt="eBay Clone"
                          />
                          <div className="abs-product">
                            <h3>eBay Clone</h3>
                            <p>
                              eBay - A multi vendor eCommerce script, specially
                              designed for multi vendor eCommerce platform. The
                              application comprises various pleasing features
                              which are extremely customer friendly and
                              functional.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">15 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/teacher-marketplace"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/teacher-marketplace-img.png"
                            alt="Teacher Marketplace"
                          />
                          <div className="abs-product">
                            <h3>Teacher Marketplace Software</h3>
                            <p>
                              Get your online teacher marketplace that
                              facilitates students to find their best suitable
                              teachers.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">14 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/linkedin-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/linkedin--img.png"
                            alt="LinkedIn Clone"
                          />
                          <div className="abs-product">
                            <h3>LinkedIn Clone</h3>
                            <p>
                              This LinkedIn Clone software script can help you
                              to launch your own business networking website
                              like LinkedIn. It will allow users to connect with
                              millions of professionals around the globe.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">27 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/forum-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/forum-script-img.png"
                            alt="PHP Forum Script"
                          />
                          <div className="abs-product">
                            <h3>PHP Forum Script</h3>
                            <p>
                              Want to develop your online discussion forum to
                              enable your audience to interact with each other?
                              Get our ready to use forum script to make your
                              help forum in no time.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">17 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      {/* <div className="col-sm-6 col-md-4">
                        <Link
                          href="/softwares"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/texi-booking-img.png"
                            alt="Taxi Booking App"
                          />
                          <div className="abs-product">
                            <h3>Taxi Booking App</h3>
                            <p>
                              Our solution for online taxi booking is completely
                              based on real and genuine need of this billion
                              dollar industry.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">17 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div> */}
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/product-review-rating-php-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/product--review-img.png"
                            alt="Product Review & Rating PHP Script"
                          />
                          <div className="abs-product">
                            <h3>Product Review & Rating PHP Script</h3>
                            <p>
                              The PHP Review Script can help in improving
                              quality of your products and services, by getting
                              genuine feedback from customers, which inturn will
                              increase credibility and brand awareness, and will
                              ultimately increase your market.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">23 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      

                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="https://free-templates.logicspice.com/"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/free-template-img.png"
                            alt="Free Template"
                          />
                          <div className="abs-product">
                            <h3>Free Template</h3>
                            <p>
                              Download best free web templates, edit them in any
                              HTML editor, customize it according to your
                              requirement.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">20 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/lead-generation-contact-form-php-script"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/lead-generation-img.png"
                            alt="Lead Generation Form Script"
                          />
                          <div className="abs-product">
                            <h3>Lead Generation Form Script</h3>
                            <p>
                              This is the excellent way to customise your
                              contact form with custom form fields like texts
                              fields.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/blog-script"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/blog-script-img.png"
                            alt="Blog Script"
                          />
                          <div className="abs-product">
                            <h3>Blog Script</h3>
                            <p>
                              We provide collection of commercial and free PHP
                              Blog Scripts.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">18 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/faq-script"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/faq-script.png"
                            alt="FAQ Script"
                          />
                          <div className="abs-product">
                            <h3>FAQ Script</h3>
                            <p>
                              FAQ Script is a knowledge base script and you
                              could use it as a Frequently Asked Questions
                              section on your website.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      {/* <div className="col-sm-6 col-md-4">
                        <Link
                          href="/cakephp-cms-script"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/cakephp-cms-img.png"
                            alt="Cake PHP CMS Script"
                          />
                          <div className="abs-product">
                            <h3>Cake PHP CMS Script</h3>
                            <p>
                              Get a smart content management system to create
                              and manage multiple web sections and embed them
                              into your website.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div> */}
                      {/* <div className="col-sm-6 col-md-4">
                        <Link
                          href="/cakephp-facebook-login-plugin-script"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/cakephp-facebook-img.png"
                            alt="Cake PHP Facebook Login Plugin Script"
                          />
                          <div className="abs-product">
                            <h3>Cake PHP Facebook Login Plugin Script</h3>
                            <p>
                              Nowadays users are not interested in filling a big
                              form to registration. Short registration process
                              helps to get more subscribers for your website.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div> */}
                      {/* <div className="col-sm-6 col-md-4">
                        <Link
                          href="/wordpress-twitter-login-plugin"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/wordpress-twitter-img.png"
                            alt="Wordpress Twitter Login Plugin"
                          />
                          <div className="abs-product">
                            <h3>Wordpress Twitter Login Plugin</h3>
                            <p>
                              Twitter is one of the most popular social network
                              on the internet and millions of users are
                              registered with twitter.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div> */}
                      {/* <div className="col-sm-6 col-md-4">
                        <Link
                          href="/social-network-integration-in-android-app"
                          className="ready-product ready-product-min"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/social-network-img.png"
                            alt="Social Integration Android"
                          />
                          <div className="abs-product">
                            <h3>Social Integration Android</h3>
                            <p>
                              What if you have one social network integrated
                              into your android app, but you need to add one
                              more social network for your application?
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div> */}
                      <div className="col-sm-6 col-md-4">
                        <div
                          className="thumbnail customized-website"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={500}
                            height={100}
                            src="/img/softwares/customized_website.png"
                            alt="Customized Website"
                            className="img_prora"
                          />
                          <div className="caption">
                            <div className="caption-bx">
                              <h3>
                                <Link href="">
                                  Are you looking for clones of other websites
                                  and Apps?
                                </Link>
                              </h3>
                              <div
                                className="btn btn-primary"
                                onClick={openModal}
                              >
                                <button>Enquire Now</button>
                                {
                                  <SoftwareEnquiry
                                    modalStatus={showModal}
                                    toggle={openModal}
                                    title="Customised Website"
                                  />
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "tab2" && (
                <div id="tab2" className="costomer_tab rj">
                  <div className="new-product-box">
                    <div className="row">
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/doctor-appointment-scheduling-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/doctorappointment/doctor-appointment-icon.png"
                            alt="Doctor Appointment Scheduling Software"
                          />
                          <div className="abs-product">
                            <h3>Doctor Appointment Scheduling Software</h3>
                            <p>
                              Doctor Appointment Scheduling Software offers an
                              easy, efficient way to manage bookings, making
                              healthcare appointments stress-free for everyone.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">173 REVIEWS</div>
                            <ul className="make-style">
                              {/* <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li> */}
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/salon-booking-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/doctorappointment/salon-booking-icon.png"
                            alt="Salon Booking Software"
                          />
                          <div className="abs-product">
                            <h3>Salon Booking Software</h3>
                            <p>
                              Our Salon Booking Software helps salons and spas
                              manage appointments with ease, and creating a
                              smooth booking experience for clients.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">173 REVIEWS</div>
                            <ul className="make-style">
                              {/* <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li> */}
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/wordpress-ecommerce-website"
                          className="ready-product aos-init aos-animate"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/softwares/wordpress-ecommerce-website-img.png"
                            alt="WordPress eCommerce Website"
                          />{" "}
                          <div className="abs-product">
                            <h3>WordPress eCommerce Website</h3>
                            <p>
                              A WordPress eCommerce website is a platform built
                              using a popular content management system (CMS),
                              Wordpress, designed for online stores.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">225 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/order-management-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/order-management-product-img.png"
                            alt="Job-board"
                          />
                          <div className="abs-product">
                            <h3>Order Management Software</h3>
                            <p>
                              Our Order Management Software empowers you to take
                              control of your orders with precision. Simplify
                              order processing, reduce errors, and accelerate
                              your business operations.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">225 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/job-board-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/jobboard-product-img.png"
                            alt="Job-board"
                          />
                          <div className="abs-product">
                            <h3>Job Board Software</h3>
                            <p>
                              Our job Board script enables you to get started
                              with your own job Board website like Coroflot &
                              Monster. It is a highly scalable, robust and
                              user-friendly job board script.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">219 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/fiverr-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/gigger-product-img.png"
                            alt="Fiverr Clone"
                          />
                          <div className="abs-product">
                            <h3>Fiverr Clone</h3>
                            <p>
                              The fiverr clone script can help you to build your
                              own freelance service marketplace where
                              freelancers can sell their services and buyers can
                              order services.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">569 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/freelancer-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/freelancer-product-img.png"
                            alt="Freelancer Clone"
                          />
                          <div className="abs-product">
                            <h3>Freelancer Clone</h3>
                            <p>
                              Logicspice offers freelance marketplace script,
                              developed to build your own freelance marketplace
                              similar to upwork clone, elance clone and more.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">128 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/logistic-marketplace-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/logisticr-product-img.png"
                            alt="Logicstic Marketplace Software"
                          />
                          <div className="abs-product">
                            <h3>Logicstic Marketplace Software</h3>
                            <p>
                              A transportation management system is an online
                              platform that help businesses to streamline their
                              shipping process.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">173 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/crowdfunding-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/crowdfunding-product-img.png"
                            alt="Crowdfunding Script"
                          />
                          <div className="abs-product">
                            <h3>Crowdfunding Script</h3>
                            <p>
                              The crowdfunding product that we have developed
                              will enable the people to donate money for various
                              categories of causes that they may have favor for.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">47 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/classified-ads-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/classified-product-img.png"
                            alt="Classified Ads Script"
                          />
                          <div className="abs-product">
                            <h3>Classified Ads Script</h3>
                            <p>
                              Our Classified Ads Script offers a reliable,
                              easy-to-use platform for listing, buying, and
                              selling items in any location.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">24 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/inventory-management-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/inventory-management-img.png"
                            alt="LS Inventorizerr"
                          />
                          <div className="abs-product">
                            <h3>LS Inventorizerr</h3>
                            <p>
                              Experience comprehensive end-to-end supply chain
                              visibility and control with our web based
                              inventory management system. From the moment you
                              initiate a purchase order to the final customer
                              sale.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">70 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="marketplace-software-solution"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/marketplace-software-img.png"
                            alt="Marketplace Software"
                          />
                          <div className="abs-product">
                            <h3>Marketplace Software</h3>
                            <p>
                              Please check our readymade service marketplace
                              softwares for the sectors like freelance,
                              logistics, rental, scheduling, home cleaning and
                              appointment booking service.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">560 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/booking-software-solutions"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/marketplace-software-img.png"
                            alt="Marketplace Software"
                          />
                          <div className="abs-product">
                            <h3>Online Booking Software</h3>
                            <p>
                              Our Online Booking Software enables you to manage
                              bookings effortlessly. Streamline scheduling,
                              minimize errors, and boost your business
                              efficiency with seamless online reservations.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">560 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/groupon-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/groupon-product-img.png"
                            alt="Groupon Clone Script"
                          />
                          <div className="abs-product">
                            <h3>Groupon Clone Script</h3>
                            <p>
                              Groupon clone Script helps you to avail a daily
                              deal software for listing deals. Launch your own
                              online coupon software with our Readymade Groupon
                              clone app.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">27 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/service-marketplace-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/servicemarket-product-img.png"
                            alt="Service Marketplace"
                          />
                          <div className="abs-product">
                            <h3>Service Marketplace</h3>
                            <p>
                              Our thumbtack clone will facilitate customer to
                              search for service providers that are offering the
                              service by entering their location and selecting
                              the type
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">49 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/udemy-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/udemy-img.png"
                            alt="Udemy Clone Script"
                          />
                          <div className="abs-product">
                            <h3>Udemy Clone Script</h3>
                            <p>
                              Are you looking to launch your own online video
                              learning platform? Get on to our ready to use
                              udemy clone script to start your own e-learning
                              portal like udemy. This script allows an user to
                              add and manage courses with their sections and
                              lectures.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">13 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/equipment-rental-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/equipment-product-img.png"
                            alt="Equipment Rental Script"
                          />
                          <div className="abs-product">
                            <h3>Equipment Rental Software</h3>
                            <p>
                              Our online Equipment Rental script will facilitate
                              users to rent and sell their
                              equipments/machines/auto parts over the
                              app/website.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">38 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="https://setcourses.logicspice.com"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/online-exam-img.png"
                            alt="Online Exam Software Script"
                          />
                          <div className="abs-product">
                            <h3>Online Exam Software Script</h3>
                            <p>
                              The online exam software Script can help you to
                              develop your own online exam system, to conduct
                              any type of online examination, test, practice and
                              more.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">26 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/job-portal-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/jo-portel-img.png"
                            alt="Job-Portal"
                          />
                          <div className="abs-product">
                            <h3>Job Portal Script</h3>
                            <p>
                              Our job portal script enables you to get started
                              with your own job portal website like Coroflot &
                              Monster. It is a highly scalable, robust and
                              user-friendly job board script.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">218 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/business-directory-system"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/business-directory-img.png"
                            alt="PHP Business Directory Script"
                          />
                          <div className="abs-product">
                            <h3>PHP Business Directory Script</h3>
                            <p>
                              Yellow pages script is stand alone PHP business
                              directory script with a numerous features to build
                              your own online business directory site.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">26 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/grocery-app-development"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/grocery-app-img.png"
                            alt="Grocery PHP Script"
                          />
                          <div className="abs-product">
                            <h3>Grocery PHP Script</h3>
                            <p>
                              If you are planning to sell grocery online, our
                              online grocery software is the best available
                              choice in the market.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">26 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/recruitment-management-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/recruitment-product-img.png"
                            alt="Recruitment Management Software"
                          />
                          <div className="abs-product">
                            <h3>Recruitment Management Software</h3>
                            <p>
                              An online recruitment management system tends to
                              make the HR&apos;s job faster, more precise and
                              proficient.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">44 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/event-booking-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/event-booking-img.png"
                            alt="Event Booking Software"
                          />
                          <div className="abs-product">
                            <h3>Event Booking Software</h3>
                            <p>
                              Our Online Event Booking system helps your
                              customer to reserve seats for meetings and
                              conferences to social events, weddings, parties,
                              movies, bus tours etc.This software provides
                              functionality to track all details of booked
                              seats.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">217 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/whatsapp-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/whatsapp-product-img.png"
                            alt="whatsApp-clone"
                          />
                          <div className="abs-product">
                            <h3>Whatsapp Clone</h3>
                            <p>
                              Get on to our ready to use WhatsApp clone app and
                              make your messenger similar to WhatsApp. This
                              script works on the web, android and iOS platforms
                              and helps users to stay connected with their
                              friends, colleagues and relatives by sharing
                              messages, photos, videos and files.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">24 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/chat-room-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/chat-room-img.png"
                            alt="Chat Room Script"
                          />
                          <div className="abs-product">
                            <h3>Chat Room Script</h3>
                            <p>
                              Get on to our ready to use Chat Room Script . This
                              script works on the web, android and iOS platforms
                              and helps users to stay connected with their
                              friends, colleagues and relatives by sharing
                              messages, photos, videos and files.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">92 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/food-ordering-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/foododer-product-img.png"
                            alt="food-ordering"
                          />
                          <div className="abs-product">
                            <h3>Food Ordering Script</h3>
                            <p>
                              The food ordering script that we have developed
                              will serve as an attractive medium for customers
                              to order food from the restaurants.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">32 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/appointment-scheduling-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/appointment-img.png"
                            alt="Appointment Booking System"
                          />
                          <div className="abs-product">
                            <h3>Appointment Booking System</h3>
                            <p>
                              A user-friendly appointment booking system that
                              enables owners to manage their appointments online
                              from remote locations.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">28 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/real-estate-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/real-product-img.png"
                            alt="Real Estate Script"
                          />
                          <div className="abs-product">
                            <h3>Real Estate Script</h3>
                            <p>
                              Are you looking to make your own real estate CRM
                              software? Get on to our ready to use real estate
                              clone script to make your own online real estate
                              classified website.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">13 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/rental-property-management-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/rental-property-img.png"
                            alt="Property Rental Script"
                          />
                          <div className="abs-product">
                            <h3>Property Rental Script</h3>
                            <p>
                              This property rental script will facilitate people
                              to search for apartments to rent them and view
                              their details along with the amenities so people
                              can opt out property
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">30 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/news-management-system"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/news-management-img.png"
                            alt="News Management System"
                          />
                          <div className="abs-product">
                            <h3>News Management System</h3>
                            <p>
                              Digital media is playing a major role in authentic
                              flow of information and the news, to the masses
                              and this news portal management script can play a
                              major role for your corporate, political or any
                              other kind of news showcasing.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">18 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/ebay-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/ebay-img.png"
                            alt="eBay Clone"
                          />
                          <div className="abs-product">
                            <h3>eBay Clone</h3>
                            <p>
                              eBay - A multi vendor eCommerce script, specially
                              designed for multi vendor eCommerce platform. The
                              application comprises various pleasing features
                              which are extremely customer friendly and
                              functional.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">15 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/teacher-marketplace"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/teacher-marketplace-img.png"
                            alt="Teacher Marketplace"
                          />
                          <div className="abs-product">
                            <h3>Teacher Marketplace Software</h3>
                            <p>
                              Get your online teacher marketplace that
                              facilitates students to find their best suitable
                              teachers.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">14 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/linkedin-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/linkedin--img.png"
                            alt="LinkedIn Clone"
                          />
                          <div className="abs-product">
                            <h3>LinkedIn Clone</h3>
                            <p>
                              This LinkedIn Clone software script can help you
                              to launch your own business networking website
                              like LinkedIn. It will allow users to connect with
                              millions of professionals around the globe.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">27 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/forum-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/forum-script-img.png"
                            alt="PHP Forum Script"
                          />
                          <div className="abs-product">
                            <h3>PHP Forum Script</h3>
                            <p>
                              Want to develop your online discussion forum to
                              enable your audience to interact with each other?
                              Get our ready to use forum script to make your
                              help forum in no time.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">17 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      {/* <div className="col-sm-6 col-md-4">
                        <a
                          href="/softwares"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/texi-booking-img.png"
                            alt="Taxi Booking App"
                          />
                          <div className="abs-product">
                            <h3>Taxi Booking App</h3>
                            <p>
                              Our solution for online taxi booking is completely
                              based on real and genuine need of this billion
                              dollar industry.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">17 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div> */}
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/product-review-rating-php-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/product--review-img.png"
                            alt="Product Review & Rating PHP Script"
                          />
                          <div className="abs-product">
                            <h3>Product Review & Rating PHP Script</h3>
                            <p>
                              The PHP Review Script can help in improving
                              quality of your products and services, by getting
                              genuine feedback from customers, which inturn will
                              increase credibility and brand awareness, and will
                              ultimately increase your market.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">23 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      

                      <div className="col-sm-6 col-md-4">
                        <a
                          href="https://free-templates.logicspice.com/"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/free-template-img.png"
                            alt="Free Template"
                          />
                          <div className="abs-product">
                            <h3>Free Template</h3>
                            <p>
                              Download best free web templates, edit them in any
                              HTML editor, customize it according to your
                              requirement.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">20 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/lead-generation-contact-form-php-script"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/lead-generation-img.png"
                            alt="Lead Generation Form Script"
                          />
                          <div className="abs-product">
                            <h3>Lead Generation Form Script</h3>
                            <p>
                              This is the excellent way to customise your
                              contact form with custom form fields like texts
                              fields.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/blog-script"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/blog-script-img.png"
                            alt="Blog Script"
                          />
                          <div className="abs-product">
                            <h3>Blog Script</h3>
                            <p>
                              We provide collection of commercial and free PHP
                              Blog Scripts.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">18 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/faq-script"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/faq-script.png"
                            alt="FAQ Script"
                          />
                          <div className="abs-product">
                            <h3>FAQ Script</h3>
                            <p>
                              FAQ Script is a knowledge base script and you
                              could use it as a Frequently Asked Questions
                              section on your website.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      {/* <div className="col-sm-6 col-md-4">
                        <Link
                          href="/cakephp-cms-script"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/cakephp-cms-img.png"
                            alt="Cake PHP CMS Script"
                          />
                          <div className="abs-product">
                            <h3>Cake PHP CMS Script</h3>
                            <p>
                              Get a smart content management system to create
                              and manage multiple web sections and embed them
                              into your website.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div> */}
                      {/* <div className="col-sm-6 col-md-4">
                        <Link
                          href="/cakephp-facebook-login-plugin-script"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/cakephp-facebook-img.png"
                            alt="Cake PHP Facebook Login Plugin Script"
                          />
                          <div className="abs-product">
                            <h3>Cake PHP Facebook Login Plugin Script</h3>
                            <p>
                              Nowadays users are not interested in filling a big
                              form to registration. Short registration process
                              helps to get more subscribers for your website.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div> */}
                      {/* <div className="col-sm-6 col-md-4">
                        <Link
                          href="/wordpress-twitter-login-plugin"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/wordpress-twitter-img.png"
                            alt="Wordpress Twitter Login Plugin"
                          />
                          <div className="abs-product">
                            <h3>Wordpress Twitter Login Plugin</h3>
                            <p>
                              Twitter is one of the most popular social network
                              on the internet and millions of users are
                              registered with twitter.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div> */}
                      {/* <div className="col-sm-6 col-md-4">
                        <Link
                          href="/social-network-integration-in-android-app"
                          className="ready-product ready-product-min"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/social-network-img.png"
                            alt="Social Integration Android"
                          />
                          <div className="abs-product">
                            <h3>Social Integration Android</h3>
                            <p>
                              What if you have one social network integrated
                              into your android app, but you need to add one
                              more social network for your application?
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div> */}
                      <div className="col-sm-6 col-md-4">
                        <div
                          className="thumbnail customized-website"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={500}
                            height={100}
                            src="/img/softwares/customized_website.png"
                            alt="Customized Website"
                            className="img_prora"
                          />
                          <div className="caption">
                            <div className="caption-bx">
                              <h3>
                                <a href="#">
                                  Are you looking for clones of other websites
                                  and Apps?
                                </a>
                              </h3>
                              <div
                                className="btn btn-primary"
                                onClick={openModal}
                              >
                                <button>Enquire Now</button>
                                {
                                  <SoftwareEnquiry
                                    modalStatus={showModal}
                                    toggle={openModal}
                                    title="Customised Website"
                                  />
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "tab3" && (
                <div id="tab3" className="costomer_tab rj">
                  <div className="new-product-box">
                    <div className="row">
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/job-board-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/jobboard-product-img.png"
                            alt="Job-board"
                          />
                          <div className="abs-product">
                            <h3>Job Board Software</h3>
                            <p>
                              Our job Board script enables you to get started
                              with your own job Board website like Coroflot &
                              Monster. It is a highly scalable, robust and
                              user-friendly job board script.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">219 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/fiverr-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/gigger-product-img.png"
                            alt="Fiverr Clone"
                          />
                          <div className="abs-product">
                            <h3>Fiverr Clone</h3>
                            <p>
                              The fiverr clone script can help you to build your
                              own freelance service marketplace where
                              freelancers can sell their services and buyers can
                              order services.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">569 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/freelancer-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/freelancer-product-img.png"
                            alt="Freelancer Clone"
                          />
                          <div className="abs-product">
                            <h3>Freelancer Clone</h3>
                            <p>
                              Logicspice offers freelance marketplace script,
                              developed to build your own freelance marketplace
                              similar to upwork clone, elance clone and more.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">128 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/logistic-marketplace-software"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/logisticr-product-img.png"
                            alt="Logicstic Marketplace Software"
                          />
                          <div className="abs-product">
                            <h3>Logicstic Marketplace Software</h3>
                            <p>
                              A transportation management system is an online
                              platform that help businesses to streamline their
                              shipping process.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">173 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>

                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/classified-ads-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/classified-product-img.png"
                            alt="Classified Ads Script"
                          />
                          <div className="abs-product">
                            <h3>Classified Ads Script</h3>
                            <p>
                              Our Classified Ads Script offers a reliable,
                              easy-to-use platform for listing, buying, and
                              selling items in any location.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">24 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>

                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/groupon-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/groupon-product-img.png"
                            alt="Groupon Clone Script"
                          />
                          <div className="abs-product">
                            <h3>Groupon Clone Script</h3>
                            <p>
                              Groupon clone Script helps you to avail a daily
                              deal software for listing deals. Launch your own
                              online coupon software with our Readymade Groupon
                              clone app.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">27 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/service-marketplace-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/servicemarket-product-img.png"
                            alt="Service Marketplace"
                          />
                          <div className="abs-product">
                            <h3>Service Marketplace</h3>
                            <p>
                              Our thumbtack clone will facilitate customer to
                              search for service providers that are offering the
                              service by entering their location and selecting
                              the type
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">49 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/udemy-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/udemy-img.png"
                            alt="Udemy Clone Script"
                          />
                          <div className="abs-product">
                            <h3>Udemy Clone Script</h3>
                            <p>
                              Are you looking to launch your own online video
                              learning platform? Get on to our ready to use
                              udemy clone script to start your own e-learning
                              portal like udemy. This script allows an user to
                              add and manage courses with their sections and
                              lectures.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">13 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>

                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/job-portal-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/jo-portel-img.png"
                            alt="Job-Portal"
                          />
                          <div className="abs-product">
                            <h3>Job Portal Script</h3>
                            <p>
                              Our job portal script enables you to get started
                              with your own job portal website like Coroflot &
                              Monster. It is a highly scalable, robust and
                              user-friendly job board script.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">218 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/business-directory-system"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/business-directory-img.png"
                            alt="PHP Business Directory Script"
                          />
                          <div className="abs-product">
                            <h3>PHP Business Directory Script</h3>
                            <p>
                              Yellow pages script is stand alone PHP business
                              directory script with a numerous features to build
                              your own online business directory site.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">26 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/grocery-app-development"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/grocery-app-img.png"
                            alt="Grocery PHP Script"
                          />
                          <div className="abs-product">
                            <h3>Grocery PHP Script</h3>
                            <p>
                              If you are planning to sell grocery online, our
                              online grocery software is the best available
                              choice in the market.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">26 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>

                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/whatsapp-clone"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/whatsapp-product-img.png"
                            alt="whatsApp-clone"
                          />
                          <div className="abs-product">
                            <h3>Whatsapp Clone</h3>
                            <p>
                              Get on to our ready to use WhatsApp clone app and
                              make your messenger similar to WhatsApp. This
                              script works on the web, android and iOS platforms
                              and helps users to stay connected with their
                              friends, colleagues and relatives by sharing
                              messages, photos, videos and files.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">24 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/chat-room-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/chat-room-img.png"
                            alt="Chat Room Script"
                          />
                          <div className="abs-product">
                            <h3>Chat Room Script</h3>
                            <p>
                              Get on to our ready to use Chat Room Script . This
                              script works on the web, android and iOS platforms
                              and helps users to stay connected with their
                              friends, colleagues and relatives by sharing
                              messages, photos, videos and files.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">92 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/food-ordering-script"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/foododer-product-img.png"
                            alt="food-ordering"
                          />
                          <div className="abs-product">
                            <h3>Food Ordering Script</h3>
                            <p>
                              The food ordering script that we have developed
                              will serve as an attractive medium for customers
                              to order food from the restaurants.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">32 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>

                      {/* <div className="col-sm-6 col-md-4">
                        <a
                          href="/softwares"
                          className="ready-product"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/texi-booking-img.png"
                            alt="Taxi Booking App"
                          />
                          <div className="abs-product">
                            <h3>Taxi Booking App</h3>
                            <p>
                              Our solution for online taxi booking is completely
                              based on real and genuine need of this billion
                              dollar industry.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">17 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div> */}
                      <div className="col-sm-6 col-md-4">
                        <div
                          className="thumbnail customized-website"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={500}
                            height={100}
                            src="/img/softwares/customized_website.png"
                            alt="Customized Website"
                            className="img_prora"
                          />
                          <div className="caption">
                            <div className="caption-bx">
                              <h3>
                                <a href="#">
                                  Are you looking for clones of other websites
                                  and Apps?
                                </a>
                              </h3>
                              <div
                                className="btn btn-primary"
                                onClick={openModal}
                              >
                                <button>Enquire Now</button>
                                {
                                  <SoftwareEnquiry
                                    modalStatus={showModal}
                                    toggle={openModal}
                                    title="Customized Website"
                                  />
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "tab4" && (
                <div id="tab4" className="costomer_tab rj">
                  <div className="new-product-box">
                    <div className="row">
                      <div className="col-sm-6 col-md-4">
                        <a
                          href="https://free-templates.logicspice.com/"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/free-template-img.png"
                            alt="Free Template"
                          />
                          <div className="abs-product">
                            <h3>Free Template</h3>
                            <p>
                              Download best free web templates, edit them in any
                              HTML editor, customize it according to your
                              requirement.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">20 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/lead-generation-contact-form-php-script"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/lead-generation-img.png"
                            alt="Lead Generation Form Script"
                          />
                          <div className="abs-product">
                            <h3>Lead Generation Form Script</h3>
                            <p>
                              This is the excellent way to customise your
                              contact form with custom form fields like texts
                              fields.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/blog-script"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/blog-script-img.png"
                            alt="Blog Script"
                          />
                          <div className="abs-product">
                            <h3>Blog Script</h3>
                            <p>
                              We provide collection of commercial and free PHP
                              Blog Scripts.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review">18 REVIEWS</div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <Link
                          href="/faq-script"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/faq-script.png"
                            alt="FAQ Script"
                          />
                          <div className="abs-product">
                            <h3>FAQ Script</h3>
                            <p>
                              FAQ Script is a knowledge base script and you
                              could use it as a Frequently Asked Questions
                              section on your website.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div>
                      {/* <div className="col-sm-6 col-md-4">
                        <Link
                          href="/cakephp-cms-script"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/cakephp-cms-img.png"
                            alt="Cake PHP CMS Script"
                          />
                          <div className="abs-product">
                            <h3>Cake PHP CMS Script</h3>
                            <p>
                              Get a smart content management system to create
                              and manage multiple web sections and embed them
                              into your website.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div> */}
                      {/* <div className="col-sm-6 col-md-4">
                        <Link
                          href="/cakephp-facebook-login-plugin-script"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/cakephp-facebook-img.png"
                            alt="Cake PHP Facebook Login Plugin Script"
                          />
                          <div className="abs-product">
                            <h3>Cake PHP Facebook Login Plugin Script</h3>
                            <p>
                              Nowadays users are not interested in filling a big
                              form to registration. Short registration process
                              helps to get more subscribers for your website.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div> */}
                      {/* <div className="col-sm-6 col-md-4">
                        <Link
                          href="/wordpress-twitter-login-plugin"
                          className="ready-product ready-product-min2"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/wordpress-twitter-img.png"
                            alt="Wordpress Twitter Login Plugin"
                          />
                          <div className="abs-product">
                            <h3>Wordpress Twitter Login Plugin</h3>
                            <p>
                              Twitter is one of the most popular social network
                              on the internet and millions of users are
                              registered with twitter.
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div> */}
                      {/* <div className="col-sm-6 col-md-4">
                        <Link
                          href="/social-network-integration-in-android-app"
                          className="ready-product ready-product-min"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            className=""
                            src="/img/softwares/social-network-img.png"
                            alt="Social Integration Android"
                          />
                          <div className="abs-product">
                            <h3>Social Integration Android</h3>
                            <p>
                              What if you have one social network integrated
                              into your android app, but you need to add one
                              more social network for your application?
                            </p>
                            <div className="product-star">
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                              <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div className="product-review"></div>
                            <ul className="make-style">
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/web_new.png"
                                  alt="web"
                                />
                              </li>
                            </ul>
                          </div>
                        </Link>
                      </div> */}
                      <div className="col-sm-6 col-md-4">
                        <div
                          className="thumbnail customized-website"
                          data-aos="fade-up"
                        >
                          <Image
                            unoptimized={true}
                            width={500}
                            height={100 / (100 / 100)}
                            src="/img/softwares/customized_website.png"
                            alt="Customized Website"
                            className="img_prora"
                          />
                          <div className="caption">
                            <div className="caption-bx">
                              <h3>
                                <a href="#">
                                  Are you looking for clones of other websites
                                  and Apps?
                                </a>
                              </h3>
                              <div
                                className="btn btn-primary"
                                onClick={openModal}
                              >
                                <a>Enquire Now</a>
                                {
                                  <SoftwareEnquiry
                                    modalStatus={showModal}
                                    toggle={openModal}
                                    title="Customised Website"
                                  />
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="primary" className="content-area product_all_show">
          <div id="content" className="site-content" role="main">
            <section className="why_should js-reveal">
              <div className="container">
                <div
                  className="content_area content_left_bar pursue"
                  style={{
                    width: "100%",
                    paddingRight: "0",
                    background: "#fff",
                  }}
                >
                  <div className="pro_dic_cl">
                    <h3 className="pro_hd">
                      Get Ready To Install Readymade Product Scripts
                    </h3>
                  </div>
                  <p>
                    Logicspice is a trusted name in web and mobile application
                    development having offices in different continent around the
                    globe, with big team size, long experience in the industry
                    and with highly experienced and skillful team members and
                    proven records of successful software development projects.
                  </p>
                  <p>
                    The best part we offer, for small and medium size
                    businesses, is that we have ready-made turnkey solutions
                    includes Product Scripts, Clone Scripts and App Scripts
                    available with us, which could be customized and configured
                    as per the specific requirements over the basic application,
                    and our focus always persist on achieving the objective of
                    our customers, in most efficient and user friendly manner.
                  </p>
                  <p>
                    Website and Mobile app development involve many steps for
                    high level strategy, analysis, planning, design, accurate
                    programming, testing and uploading over server. Throughout
                    this complete process we remain clear and transparent with
                    our clients without any misleading promises.
                  </p>
                  <p>
                    As a company that has a dedicated long term web and mobile
                    app development team, we document all processes well and
                    maintain high standard in explaining and defining them, so
                    that the clarity remain in the communication and the
                    application programming plan could be easily managed or
                    extended or upgraded in the future.
                    {!showMoreData && (
                      <a
                        style={{ cursor: "pointer", color: "#31aae1" }}
                        id="show_data"
                        onClick={() => setShowMoreData(true)}
                      >
                        More...
                      </a>
                    )}
                  </p>
                  {showMoreData === true && (
                    <span id="hidendata" data-aos="fade-up">
                      <p>
                        Our testing team ensure our programmed applications are
                        bug free and confirms to the latest web and mobile app
                        development standards in addition to rapid development,
                        increased usability and easy to use screen interfaces.
                      </p>
                      <p>
                        LogicSpice believe in best work ethics and actively
                        pursue long term support contracts for website and
                        mobile app development. We do not compromise on quality
                        for any size of project we undertake. All the softwares
                        we offer include a lot benefits to our clients, which
                        you can explore over the specific software product page
                        and you can also check the demonstration provided
                        therein.
                      </p>
                      <h3>
                        We offer a number of Ready Made Product Scripts, Clone
                        Scripts and App Scripts to help you advance business
                        with quality apps and website. Our main softwares
                        includes:
                      </h3>
                      <ul className="webvevtwo">
                        <li>Food Ordering</li>
                        <li>Online Learning Platform Script</li>
                        <li>Crowd Funding</li>
                        <li>Job Portal</li>
                        <li>FAQ Script</li>
                        <li>CakePHP Facebook Login Plugin</li>
                        <li>AngularJS Blog Script</li>
                        <li>Wordpress Twitter Login Plugin</li>
                        <li>CakePHP CMS Script</li>
                        <li>Lead Generation Form</li>
                        <li>Restaurant Food Delivery Script</li>
                      </ul>
                    </span>
                  )}
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="client-say">
          <div className="container">
            <div className="headings">
              <h2>WHAT OUR CLIENTS SAY</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/DwZRqMYOmZo?rel=0"
                  allowfullscreen=""
                  height="300"
                  width="100%"
                  frameborder="0"
                ></iframe>
              </div>
              <div className="col-md-6">
                <p>
                  Logicspice offers <span>Cost Effective</span> Solution and the{" "}
                  <span>quality</span> of their work is very good. Logicspice
                  has very <span>good reviews</span> and 100&apos;s of different
                  project of different areas and work with detailed feedback
                  about our request with very <span>standardized process.</span>
                </p>
                <p>
                  Very friendly environment and i highly recommend logicspice
                  for Android & iPhone app development...
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="testing-statred-section" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <h2>Let&apos;s Get Started! -</h2>
                <a onClick={toggleModal} className="btn btn-primary">
                  Get a Free Quote
                </a>
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
      </div>
    </>
  );
};

export default Page;
