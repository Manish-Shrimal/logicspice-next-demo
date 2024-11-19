"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
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
import "../../resposive.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

const Page = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const openModal = () => {
    setShowModal(!showModal);
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Navbar />
      <section id="primary" className="content-area product_all_show">
        <div id="content" className="site-content" role="main">
          <section className="why_should js-reveal new-custom-solutions">
            <div className="container-fluid">
              <h1 className="mainHeadTop" data-aos="fade-up">
                Custom Development Solution
              </h1>
              <div
                aria-label="breadcrumb"
                className="my-breadcrumb my-custom-breadcrumb"
                data-aos="fade-up"
              >
                <ol
                  className="breadcrumb"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Custom Solutions
                  </li>
                </ol>
              </div>
              <div className="all_products_show" data-aos="fade-up">
                <ul id="myList" className="row">
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <a href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </a>
                      </div>
                      <Link className="" href="/logistics-software-development">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/logistics-software-development-img.png"
                                alt="Custom Logistics Software"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              Custom Logistics Software
                            </span>
                            <div className="buttons_of_products_new more_link"></div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <a href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </a>
                      </div>
                      <Link className="" href="/booking-app-development">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/booking_app_img.png"
                                alt="Booking App"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              Booking Application
                            </span>
                            <div className="buttons_of_products_new more_link"></div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        className=""
                        href="/restaurant-table-booking-system"
                      >
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/tablke_booing_img.png"
                                alt="Table Booking System"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              Table Booking System
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link className="" href="/seat-booking-system">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/seat_book_img.png"
                                alt="Seat Booking System"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              Seat Booking System
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link className="" href="/crm-software-development">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/crm_solution_img.png"
                                alt="CRM Solution"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">CRM Solution</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link className="" href="/ecommerce-development">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/ecommerce_img.png"
                                alt="Ecommerce Solutions"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              Ecommerce Solutions
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        className=""
                        href="/loan-management-software-development"
                      >
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/loan_system_img.png"
                                alt="Loan System"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">Loan System</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>

                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link className="" href="/online-exam-software-solution">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/online_test_img.png"
                                alt="Online Exam App"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">Online Test App</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link className="" href="/survey-software-development">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/survey_img.png"
                                alt="Survey Software Development"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">Survey App</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>

                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link className="" href="/dating-system-solution">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/dating_system_img.png"
                                alt="Dating System Solution"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              Dating System Solution
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>

                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        className=""
                        href="/jewellery-ecommerce-system-solution"
                      >
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/jewellery_ecommerce_img.png"
                                alt="Jewellery E-Commerce System Custom"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              Jewellery E-Commerce System
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>

                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link className="" href="/e-learning-solution">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/e-learning_img.png"
                                alt="E-Learning App"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">E-Learning System</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        className=""
                        href="/event-booking-system-development"
                      >
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/event_booking_img.png"
                                alt="Event Booking System"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              Event Booking System
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link className="" href="/auction-software-solution">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/auction_img.png"
                                alt="Auction System"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">Auction System</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={600}
                            height={100 / 100 / 10}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link className="" href="/gps-vehicle-tracking-system">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/gps_img.png"
                                alt="GPS Vehicle Tracking System"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              GPS Vehicle Tracking
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link className="" href="/car-rental-software">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/car-rental-software_img.png"
                                alt="Car Rental Software"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              Car Rental Software
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link className="" href="/delivery-management-software">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/delivery_management_system_img.png"
                                alt="Delivery Management Software"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              Delivery Management
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link className="" href="/point-of-sale-software">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/point_of_sale_system_img.png"
                                alt="Point Of Sale Software"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              Point Of Sale System
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link className="" href="/hotel-booking-software">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/hotel_booking_software_img.png"
                                alt="Hotel Booking Software"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              Hotel Booking Software
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link className="" href="/user-management-system">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/user_management_system_img.png"
                                alt="User Management System"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              User Management System
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link className="" href="/website-calculator-builder">
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/website_calculator_builder_img.png"
                                alt="Website Calculator Builder"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              Website Calculator Builder
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        className=""
                        href="/erp-system-software-development"
                      >
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/erp_system_developement_img.png"
                                alt="ERP System Software "
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              ERP System Software{" "}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className="col-lg-3 col-md-4 col-sm-6 col-xs-6 moreBox">
                    <div className="product_show_bx_new">
                      <div className="client-chat">
                        <Link href="javascript:void($zopim.livechat.window.show())">
                          <Image
                            unoptimized={true}
                            width={100}
                            height={100}
                            src="/img/customsolutionspage/chat.png"
                            alt="Chat"
                          />
                        </Link>
                      </div>
                      <Link
                        className=""
                        href="/social-network-integration-in-android-app"
                      >
                        <div className="product_show_bx_in">
                          <div className="product_image_full_shon">
                            <span>
                              <Image
                                unoptimized={true}
                                width={600}
                                height={100 / 100 / 10}
                                src="/img/customsolutionspage/social_integration_img.png"
                                alt="Social Network Integration"
                                className="img_prora"
                              />
                            </span>
                          </div>
                          <div className="product_show_bx_name_new">
                            <span className="prdu-book">
                              Social Network Integration
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="newbfc-section" data-aos="fade-up">
        <div className="BFC_logic">
          <h2>
            Get Custom Mobile App or Web Development Solution
            <span className="headSpan">
              Custom app development where customers can request for a product
              and we make it available for them with custom features and
              integrations as per client&apos;s requirements.{" "}
            </span>
          </h2>
          <div className="BFC_logic_bg">
            <div className="container">
              <div className="BFC_logic_bx" data-aos="fade-up">
                <div className="row">
                  <div className="col-md-3 no-padding">
                    <div className="top-box-BFC-new">
                      <div className="img-custom consult-img"></div>
                      <h3>Consult Our Experts</h3>
                      <p>
                        Discuss your idea and requirement with our team, they
                        will also add some suggestion and provide you effective
                        solution for your business.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 no-padding">
                    <div className="top-box-BFC-new">
                      <div className="img-custom your-team-img"></div>
                      <h3>Get Your Development Team</h3>
                      <p>
                        Hire developers from our experienced team and get the
                        project done in minimum time & cost.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 no-padding">
                    <div className="top-box-BFC-new">
                      <div className="img-custom receive-img"></div>
                      <h3>Receive Daily Insights</h3>
                      <p>
                        Our dedicated team ensures to keep you updated with your
                        project with reports and progress.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 no-padding">
                    <div className="top-box-BFC-new">
                      <div className="img-custom installation-img"></div>
                      <h3>Installation</h3>
                      <p>
                        Once we are done with the development, we will install
                        the code free on your live server.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="BFC_logic_Demand" data-aos="fade-up">
                <div className="row">
                  <div className="col-xs-12 col-sm-3 col-md-3">
                    <div className="demand_img">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/customsolutionspage/satisfied-client.png"
                        alt="#"
                      />
                    </div>
                    <div className="demand_text">
                      <h3>1286</h3>
                      <p>Satisfied Client</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-3 col-md-3">
                    <div className="demand_img">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/customsolutionspage/projects-img.png"
                        alt="#"
                      />
                    </div>
                    <div className="demand_text">
                      <h3>1844</h3>
                      <p>projects</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-3 col-md-3">
                    <div className="demand_img">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/customsolutionspage/mobile-app-img.png"
                        alt="#"
                      />
                    </div>
                    <div className="demand_text">
                      <h3>327</h3>
                      <p>mobile apps</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-3 col-md-3">
                    <div className="demand_img">
                      <Image
                        unoptimized={true}
                        width={60}
                        height={100}
                        src="/img/customsolutionspage/likes-img.png"
                        alt="#"
                      />
                    </div>
                    <div className="demand_text">
                      <h3>1082</h3>
                      <p>likes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="new-custom-section" data-aos="fade-up">
        <div className="container">
          <div
            className="content_area content_left_bar pursue"
            style={{
              float: "left",
              width: "100%",
              paddingRight: "0",
              background: "#fff",
            }}
          >
            <div className="pro_dic_cl">
              <h3 className="pro_hd">
                Get app or web on demand development solution
              </h3>
            </div>
            <p>
              Logicspice is mobile app & web development company having years of
              experience in this industry with the team of highly skilled
              developers. Our experience for on-demand apps & solutions gives
              solution to the customer a unique insights building various
              on-demand apps & solutions for our customers.
            </p>
            <p>
              Logicspice is able to create deep insights solution and grants a
              highly professional individual approach. Our aim is to deliver
              solutions that satisfy customers’ needs much more precisely than
              any off-the-shelf product. We have already multiple on-demand
              projects.
            </p>
            <p>
              We have a team of experts with years of experience who are updated
              with latest technology. Our motive is always to deliver project
              with great user interface and no performance issue.
            </p>
            <p>
              We do the third party integration on behalf of the clients and
              communicate with them on our level. Logicspice believe in best
              work ethics and actively pursue long term support contracts for
              custom website and mobile app development.
            </p>
          </div>
        </div>
      </section>

      <section className="enq-section enq-section-custom">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              {/* <a className="btn btn-primary" @click="openReviewModel()">Enquire Now</a> */}
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
      </div>
      <Footer />
    </>
  );
};

export default Page;
