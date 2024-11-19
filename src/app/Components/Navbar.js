"use client";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "../globals.css";
import "../resposive.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { usePathname } from "next/navigation";
// import "../../../../public/css/font-awesome.css";
import "../../../public/css/font-awesome.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);
  const router = useRouter();

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header home-header fixed ${scroll ? "scrolled" : ""}`}
      >
        <nav className="navbar navbar-light  navbar-expand-lg navbar-default mega-menu  ">
          <div className="container">
            <div className="navbar-brand">
              <Link href="/">
                <Image
                  width={272}
                  height={100 / (100 / 100)}
                  src="/img/logo.png"
                  alt="Logo"
                />
              </Link>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="nav navbar-nav navbar-right ms-auto top-main-menu">
                <li className="dropdown mega-menu-fw">
                  <Link
                    className="dropdown-toggle"
                    href="/company"
                    id="companyDropdown"
                    role="button"
                    data-toggle="dropdown"
                    onMouseEnter={() => setDropdown1(true)}
                    onMouseLeave={() => setDropdown1(false)}
                  >
                    COMPANY
                    <b className="caret caret-company"></b>
                  </Link>

                  <div
                    className={`dropdown-menu company-menu company-menu-icon ${
                      dropdown1 ? "show" : ""
                    }`}
                    aria-labelledby="companyDropdown"
                    onMouseEnter={() => setDropdown1(true)}
                    onMouseLeave={() => setDropdown1(false)}
                  >
                    <div className="grid-demo">
                      <div className="row menu-one">
                        <div className="col-sm-6">
                          <ul>
                            <li
                              className={
                                pathname === "/company/our-team" ? "active" : ""
                              }
                            >
                              <Link href="/company/our-team">
                                <span className="hover_btn_menu">
                                  <i className="menu_icon_all icon_team"></i>
                                </span>
                                <span>Our Team</span>
                              </Link>
                            </li>
                            <li
                              className={
                                router.pathname ===
                                "/company/testimonials-and-reviews"
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href="/company/testimonials-and-reviews">
                                <span className="hover_btn_menu">
                                  <i className="menu_icon_all icon_testimonials"></i>
                                </span>
                                <span>Testimonials &amp; Reviews</span>
                              </Link>
                            </li>
                            <li
                              className={
                                router.pathname === "/technologies"
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href="/technologies">
                                <span className="hover_btn_menu">
                                  <i className="menu_icon_all icon_technologies"></i>
                                </span>
                                <span>Technologies</span>
                              </Link>
                            </li>
                            <li
                              className={
                                router.pathname === "/case-study"
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href="/case-study">
                                <span className="hover_btn_menu">
                                  <i className="menu_icon_all icon_case_study"></i>
                                </span>
                                <span>Case Studies</span>
                              </Link>
                            </li>
                            <li
                              className={
                                router.pathname === "/portfolio" ? "active" : ""
                              }
                            >
                              <Link href="/portfolio">
                                <span className="hover_btn_menu">
                                  <i className="menu_icon_all icon_portfolio"></i>
                                </span>
                                <span>Portfolio</span>
                              </Link>
                            </li>
                            <li
                              className={
                                router.pathname ===
                                "https://blog.logicspice.com/"
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href="https://blog.logicspice.com/">
                                <span className="hover_btn_menu">
                                  <i className="menu_icon_all icon_blog"></i>
                                </span>
                                <span>Blog</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-6">
                          <ul>
                            <li className="img_web_app img_web_app_sk">
                              <Image
                                width={230}
                                height={100}
                                src="/img/header/menu-x4.png"
                                alt="Website & App Development Company"
                                // width="230"
                              />
                            </li>
                            <li className="img_web_app img_web_app_sk">
                              <Image
                                width={136}
                                height={100}
                                src="/img/header/menu-x1.png"
                                alt="Website & App Development Company"
                                // width="136"
                              />
                            </li>
                            <li className="img_web_app img_web_app_sk">
                              <Image
                                width={123}
                                height={100}
                                src="/img/header/menu-x2.png"
                                alt="Website & App Development Company"
                                // width="123"
                              />
                            </li>
                            <li className="img_web_app img_web_app_sk">
                              <Image
                                width={152}
                                height={100}
                                src="/img/header/menu-x3.png"
                                alt="Website & App Development Company"
                                // width="152"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown mega-menu-fw">
                  <Link
                    className=" dropdown-toggle"
                    href="/softwares"
                    id="softwareDropdown"
                    role="button"
                    data-toggle="dropdown"
                    onMouseEnter={() => setDropdown2(true)}
                    onMouseLeave={() => setDropdown2(false)}
                  >
                    SOFTWARES
                    <b className="caret caret-company"></b>
                  </Link>
                  <div
                    className={`dropdown-menu company-menu ${
                      dropdown2 ? "show" : ""
                    }`}
                    aria-labelledby="softwareDropdown"
                    onMouseEnter={() => setDropdown2(true)}
                    onMouseLeave={() => setDropdown2(false)}
                  >
                    <div className="grid-demo">
                      <div className="row menu-one product-main-menu">
                        <div className="col-sm-4">
                          <ul>
                            <li>
                              <Link href="/fiverr-clone">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all fiver"></i>
                                </span>
                                <span>Fiverr Clone Script</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/crowdfunding-script">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_crowd_funding"></i>
                                </span>
                                <span>Crowdfunding Script</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/job-board-software">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_reqruitment_application"></i>
                                </span>
                                <span>Job Board Software</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/wordpress-ecommerce-website">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all wordpress_ecommerce_icon"></i>
                                </span>
                                <span>Wordpress eCommerce</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/groupon-clone">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_groupon"></i>
                                </span>
                                <span>Groupon Clone</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/udemy-clone">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all udemy-clone-icon"></i>
                                </span>
                                <span> Udemy Clone Script</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/freelancer-clone">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_freelancer"></i>
                                </span>
                                <span>Freelancer Clone</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-4">
                          <ul>
                            <li>
                              <Link href="/equipment-rental-software">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_machinerental"></i>
                                </span>
                                <span>Equipment Rental System</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/classified-ads-script">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_classfied"></i>
                                </span>
                                <span>Classified Ads Software</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/logistic-marketplace-software">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_logistic"></i>
                                </span>
                                <span>Logistic Marketplace Software</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/marketplace-software-solution">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_service_provider_system"></i>
                                </span>
                                <span>Marketplace Software Solution</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/inventory-management-software">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_online_test_app"></i>
                                </span>
                                <span>Inventory Management</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/recruitment-management-software">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all rms_clone"></i>
                                </span>
                                <span>Recruitment Management</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/business-directory-system">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_business_directorysystem"></i>
                                </span>
                                <span>Business Directory Software</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-4">
                          <ul>
                            <li>
                              <Link href="/event-booking-software">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_event_booking"></i>
                                </span>
                                <span>Event Booking Software</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/faq-script">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_faq"></i>
                                </span>
                                <span>FAQ Script</span>
                                <span
                                  class="free_sc1"
                                  style={{ marginLeft: "8px" }}
                                >
                                  Free
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/blog-script">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_angularjsblog"></i>
                                </span>
                                <span>Blog Script</span>
                                <span
                                  class="free_sc1"
                                  style={{ marginLeft: "8px" }}
                                >
                                  Free
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/lead-generation-contact-form-php-script">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_lead_gene"></i>
                                </span>
                                <span>Lead Generation Form</span>
                                <span
                                  class="free_sc1"
                                  style={{ marginLeft: "8px" }}
                                >
                                  Free
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link href="">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_temp"></i>
                                </span>
                                <span>Free Templates</span>
                                <span
                                  class="nws_sc1"
                                  style={{ marginLeft: "8px" }}
                                >
                                  New
                                </span>
                              </Link>
                            </li>

                            <li className="ad-footer-view-all">
                              <Link
                                href="/softwares"
                                className="btn btn-primary"
                              >
                                VIEW ALL SOFTWARES
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown mega-menu-fw">
                  <Link
                    className="dropdown-toggle"
                    href="/services"
                    id="servicesDropdown"
                    role="button"
                    data-toggle="dropdown"
                    onMouseEnter={() => setDropdown3(true)}
                    onMouseLeave={() => setDropdown3(false)}
                  >
                    SERVICES
                    <b className="caret caret-company"></b>
                  </Link>
                  <div
                    className={`dropdown-menu company-menu ${
                      dropdown3 ? "show" : ""
                    }`}
                    aria-labelledby="servicesDropdown"
                    onMouseEnter={() => setDropdown3(true)}
                    onMouseLeave={() => setDropdown3(false)}
                  >
                    <div className="grid-demo">
                      <div className="row menu-one service-main-menu">
                        <div className="col-sm-4">
                          <ul className="">
                            <span className="ahab">
                              <Link href="/web-development">
                                <i className="fa fa-desktop"></i> Web
                                Development{" "}
                              </Link>
                            </span>
                            <li>
                              <Link href="/php-development">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_php_programing"></i>{" "}
                                </span>
                                <span>PHP Development Company</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/cakephp-development" className="">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_cakephp"></i>{" "}
                                </span>
                                <span>CakePHP Development</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/codeigniter-development"
                                className=""
                              >
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_codeigniter_frm"></i>{" "}
                                </span>
                                <span>Codeigniter Development</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/laravel-development">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_laraval"></i>{" "}
                                </span>
                                <span>Laravel Development</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/nodejs-development">
                                <span className="hover_btn_menu icon_nodejs">
                                  <i className="menu_icon_all icon_nodejs"></i>{" "}
                                </span>
                                <span>Node.JS Development</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/ecommerce-website">
                                <span className="hover_btn_menu icon_nodejs">
                                  <i className="menu_icon_all icon_ecommerce"></i>{" "}
                                </span>
                                <span>eCommerce Website Package</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-4">
                          <ul style={{ paddingBottom: "15px" }}>
                            <span className="ahab ahab1">
                              <Link href="/mobile-app-development">
                                <i className="fa fa-mobile"></i> Mobile App
                                Development
                              </Link>
                            </span>
                            <li>
                              <Link href="/ios-app-development">
                                <span className="hover_btn_menu icon_iphone_application">
                                  <i className="menu_icon_all icon_iphone_application"></i>{" "}
                                </span>
                                <span>iPhone App Development</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/android-app-development">
                                <span className="hover_btn_menu icon_android_application">
                                  <i className="menu_icon_all icon_android_application"></i>
                                </span>
                                <span>Android App Development</span>
                              </Link>
                            </li>
                          </ul>
                          <ul className="" style={{ PaddingTop: "0px" }}>
                            <span className="ahab ahab2">
                              <Link href="https://design.logicspice.com">
                                <i className="fa fa-paint-brush"></i> UI UX
                                Design{" "}
                              </Link>
                            </span>
                            <li>
                              <Link href="/website-design" className="">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_web"></i>
                                </span>
                                <span>Web Design</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="https://design.logicspice.com/website-design-packages">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_webdesign"></i>{" "}
                                </span>
                                <span>Website Design Packages</span>
                              </Link>
                            </li>

                            <li className="ad-footer-view-all desktop-show">
                              <Link
                                href="/services"
                                className="btn btn-primary"
                              >
                                VIEW ALL SERVICES
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div className="col-sm-4">
                          <ul>
                            <span className="ahab">
                              <Link
                                style={{ marginTop: "0", color: "#0f591f" }}
                                href="javascript:void();"
                              >
                                <i className="fa fa-cog"></i> Other
                              </Link>
                            </span>
                            <li>
                              <Link href="/software-development" className="">
                                <span className="hover_btn_menu icon_software-development">
                                  <i className="menu_icon_all icon_software-development"></i>
                                </span>
                                <span>Software Development</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/digital-marketing" className="">
                                <span className="hover_btn_menu icon_digital_marketing">
                                  <i className="menu_icon_all icon_digital_marketing"></i>{" "}
                                </span>
                                <span>Digital Marketing</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/software-maintenance-support"
                                className=""
                              >
                                <span className="hover_btn_menu icon_support_maintence">
                                  <i className="menu_icon_all icon_support_maintence"></i>
                                </span>
                                <span>Support &amp; Maintenance</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/saas-software-development">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_salesforce"></i>{" "}
                                </span>
                                <span>SaaS Software Development</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/hire-developers">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_hire_remote"></i>{" "}
                                </span>
                                <span>Hire Remote Developer</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="http://plp.logicspice.com">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_placement_launch"></i>{" "}
                                </span>
                                <span>Placement Launch Pad</span>
                              </Link>
                            </li>
                            <li class="ad-footer-view-all mobile-show">
                              <Link href="/services" class="btn btn-primary">
                                View All Services
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown mega-menu-fw">
                  <Link
                    className=" dropdown-toggle"
                    href="/custom-solutions"
                    id="hiringDropdown"
                    role="button"
                    data-toggle="dropdown"
                    onMouseEnter={() => setDropdown4(true)}
                    onMouseLeave={() => setDropdown4(false)}
                  >
                    CUSTOM SOLUTIONS
                    <b className="caret caret-company"></b>
                  </Link>
                  <div
                    className={`dropdown-menu company-menu company-menu-icon ${
                      dropdown4 ? "show" : ""
                    }`}
                    aria-labelledby="hiringDropdown"
                    onMouseEnter={() => setDropdown4(true)}
                    onMouseLeave={() => setDropdown4(false)}
                  >
                    <div className="grid-demo">
                      <div className=" row menu-one custom-main-menu">
                        <div className="col-sm-4">
                          <ul>
                            <li>
                              <Link
                                href="/booking-app-development"
                                className=""
                              >
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_online_booking"></i>
                                </span>
                                <span>Booking Applications</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/seat-booking-system">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_seat_booking"></i>{" "}
                                </span>
                                <span>Seat Booking</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/crm-software-development">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all rcrm_icon"></i>{" "}
                                </span>
                                <span>CRM Solution</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/ecommerce-development">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_ecommerce_solution"></i>{" "}
                                </span>
                                <span>Ecommerce</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-4">
                          <ul>
                            <li>
                              <Link href="/dating-system-solution">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all datingsys_icon"></i>{" "}
                                </span>
                                <span>Dating System</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/event-booking-system-development">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_event_system"></i>{" "}
                                </span>
                                <span>Event Booking System</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/auction-software-solution">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_auctionsystem"></i>{" "}
                                </span>
                                <span>Auction System</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/car-rental-software">
                                <span className="hover_btn_menu ">
                                  <i className="menu_icon_all icon_carrental"></i>{" "}
                                </span>
                                <span>Car Rental Software</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-4">
                          <ul>
                            <li>
                              <Link href="/user-management-system">
                                <span className="hover_btn_menu">
                                  <i className="menu_icon_all icon_user_mng"></i>{" "}
                                </span>
                                <span>User Management System</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/website-calculator-builder">
                                <span className="hover_btn_menu">
                                  <i className="menu_icon_all icon_calc"></i>{" "}
                                </span>
                                <span>Website Calculator Builder</span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/erp-system-software-development">
                                <span className="hover_btn_menu">
                                  <i className="menu_icon_all icon_erp"></i>{" "}
                                </span>
                                <span>ERP System Software</span>
                              </Link>
                            </li>
                            <li className="ad-footer-view-all">
                              <Link
                                href="/custom-solutions"
                                className="btn btn-primary"
                              >
                                View All Custom Solutions
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="https://blog.logicspice.com/">blog</Link>
                </li>
                <li>
                  <div
                    className="contact_detail_top"
                    style={{ position: "relative" }}
                  >
                    <ul
                      className="con_d"
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "20px",
                      }}
                    >
                      <li className="logic_contact">
                        {/* <Link
                          href="#"
                          onMouseEnter={() => setDropdown5(true)}
                          onMouseLeave={() => setDropdown5(false)}
                        >
                          <i class="fa fa-phone" aria-hidden="true"></i>
                          <b className="caret"></b>
                        </Link> */}
                        <Link
                          href="#"
                          onMouseEnter={() => setDropdown5(true)}
                          onMouseLeave={() => setDropdown5(false)}
                          aria-label="Contact us"
                        >
                          <i className="fa fa-phone" aria-hidden="true"></i>
                          <b className="caret"></b>
                        </Link>

                        <div
                          className={`sub-contact ${dropdown5 ? "show" : ""}`}
                          aria-labelledby=""
                          onMouseEnter={() => setDropdown5(true)}
                          onMouseLeave={() => setDropdown5(false)}
                        >
                          <div className="">
                            <h2>Connect With Us</h2>
                            <div className="sales_enquiry">
                              <p>For Sales Inquiry</p>
                              <ul className="sales_contact">
                                <li>
                                  <Image
                                    width={100}
                                    height={100}
                                    src="/img/footer/fleg_icon2.png"
                                    alt="Logicspice Contact No. - USA"
                                  />
                                  <Link href="tel:+1-616-929-4064">
                                    +1-616-929-4064
                                  </Link>
                                </li>
                                <li>
                                  <Image
                                    width={100}
                                    height={100}
                                    src="/img/footer/fleg_icon1.png"
                                    alt="Logicspice Contact No. - UK"
                                  />
                                  <Link href="tel:+44-7880654811">
                                    +44 7880654811
                                  </Link>
                                </li>
                                <li>
                                  <Image
                                    width={100}
                                    height={100}
                                    src="/img/footer/fleg_icon3.png"
                                    alt="Logicspice Contact No. - India"
                                  />
                                  <Link href="tel:+91-9829559922">
                                    +91-9829559922
                                  </Link>
                                </li>
                                <li>
                                  <Image
                                    width={100}
                                    height={100}
                                    src="/img/footer/skya_icon.png"
                                    alt="Logicspice Contact - Skype"
                                  />
                                  <span>logicspice</span>
                                </li>
                                <li>
                                  <Image
                                    width={100}
                                    height={100}
                                    src="/img/footer/mail.png"
                                    alt="Logicspice Contact - Email"
                                  />
                                  <span>
                                    <Image
                                      width={100}
                                      height={100}
                                      src="/img/footer/logicspice-mail.svg"
                                      alt="Logicspice Contact - Email"
                                    />
                                  </span>
                                </li>
                              </ul>
                              <Link
                                href="/contact-us"
                                className="btn btn-primary"
                              >
                                Contact Us
                              </Link>
                            </div>
                            <div className="hr_enquiry">
                              <p>For HR Inquiry</p>
                              <ul className="sales_contact">
                                <li>
                                  <Image
                                    width={100}
                                    height={100}
                                    src="/img/footer/fleg_icon3.png"
                                    alt="Logicspice Contact No. - India"
                                  />{" "}
                                  <Link href="tel:+91-7727974242">
                                    +91-7727974242
                                  </Link>
                                </li>
                                <li>
                                  <Image
                                    width={100}
                                    height={100}
                                    src="/img/footer/mail.png"
                                    alt="Logicspice Contact - Email"
                                  />{" "}
                                  <span> hr@logicspice.com </span>
                                </li>
                              </ul>
                              <Link
                                href="/apply-now"
                                className="btn btn-primary"
                              >
                                Apply Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
