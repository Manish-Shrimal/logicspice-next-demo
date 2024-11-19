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
import { Accordion, Card, Button } from "react-bootstrap";

import Support from "@/app/Components/Support";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBModal,
  MDBModalBody,
} from "mdb-react-ui-kit";
const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [sellerTab, setSellerTab] = useState(true);
  const [buyerTab, setBuyerTab] = useState(false);
  const [showInitialText, setShowInitialText] = useState(true); // Track if initial text and button should be displayed
  const [showMore, setShowMore] = useState(false);

  const handleReadMoreClick = () => {
    setShowMore(true); // Show more content
    setShowInitialText(false); // Hide initial text and button
  };

  const openModal = () => {
    setShowModal(!showModal);
  };
  const [activeTab, setActiveTab] = useState("tab1");

  const opendiv = (tab) => {
    setActiveTab(tab);
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
      <section className="UserManagementSystemSection HireDevelopersBannerText">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1 className="MainSlideTitle">Custom User Management System</h1>
              <p className="SubTitle">
                Get the best user management system developed for your business,
                employees, members or subscribers. We offer the best custom web
                and mobile app solution to manage users which can be for roles
                or assets assigned to the users.
              </p>
              <div className="HireDeveloperServiceesBx">
                <ul>
                  <li>Manage members</li>
                  <li>Multiple login</li>
                  <li>Search members</li>
                  <li>Disable registration</li>
                </ul>
              </div>
              <div className="HireDevelopersBannerBtn">
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
            </div>
            <div className="col-md-5">
              <div className="HireDevelopersBannerLogo">
                <Image
                  unoptimized={true}
                  width={500}
                  height={100}
                  src="/img/user-management/user-management-banner-img.png"
                  alt="Custom User Management System"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="BestDevelopmentSection">
        <div className="container">
          <div className="HireTopHaddind">
            <h2>
              Why Logicspice Is Best For <br />
              <span>Custom App/Web Development?</span>
            </h2>
          </div>
          <div className="BestDevelopmentMainBx">
            <div className="row">
              <div className="col-md-6">
                <div className="BestDevelopmentBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={80}
                      height={100}
                      src="/img/user-management/ready-development-icon.png"
                      alt="Ready to Go for Development"
                    />
                  </i>
                  <h3>Ready to Go for Development</h3>
                  <p>
                    We have a team of dedicated developers who are ready to work
                    on your requirements for app or web development. Our
                    solution is robust & highly scalable.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="BestDevelopmentBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={80}
                      height={100}
                      src="/img/user-management/support-maintenance-icon.png"
                      alt="Support & Maintenance"
                    />
                  </i>
                  <h3>Support & Maintenance</h3>
                  <p>
                    We support our customers from business analysis, designing,
                    development, maintenance. Our team is always available to
                    solve your query.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="BestDevelopmentBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={80}
                      height={100}
                      src="/img/user-management/cost-efficient-icon.png"
                      alt="Cost- Efficient"
                    />
                  </i>
                  <h3>Cost- Efficient</h3>
                  <p>
                    Our development varies with your requirement. We assure to
                    give cost efficient solution of development.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="BestDevelopmentBx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={80}
                      height={100}
                      src="/img/user-management/future-extendibility-icon.png"
                      alt="Future Extendibility"
                    />
                  </i>
                  <h3>Future Extendibility</h3>
                  <p>
                    You can extend the features & functionality in your
                    customised app in future if you want to explore more. This
                    feature doesnâ€™t come up with a ready made script.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="CustomUserManagementSection">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="HireTopHaddind">
                <h2>
                  Custom User <span>Management System</span>
                </h2>
              </div>
              <p>
                Whether you wish to have a private forum, a discussion platform
                for your upcoming online gaming community or want to develop a
                huge social network platform or need a user management system.
                The PHP user management system provides access to manage users
                and profiles.{" "}
              </p>
              <p>
                Our framework offers you with a fully functional user management
                system that gives you an edge over your competitors. This user
                management web application will be completely extendable. Our
                user management software can be highly customized to meet your
                business needs.{" "}
              </p>
              <div id="more-content" style={{ display: "none" }}>
                <p>
                  We introduce you to the object oriented patterns of design and
                  PHP standards of recommendation, which will improve the
                  structure of your code & ease its management as well. Our team
                  of skilled professionals will teach you how to manage Bower,
                  Node.js so that you can manage the Javascripts and CSS.
                </p>
                <p>
                  This user management system will be highly secure, multi-level
                  user access and internal communication of users.
                </p>
              </div>

              {showInitialText && (
                <p>
                  <a
                    id="read-more-content"
                    // style={{
                    //   cursor: "pointer",
                    //   color: "#fff",
                    //   border: "1px solid #fff",
                    //   padding: "3px 20px",
                    //   display: "inline-block",
                    // }}
                    onClick={handleReadMoreClick}
                  >
                    Read More
                  </a>
                </p>
              )}

              {showMore && (
                <div style={{ color: "#fff", marginTop: "10px" }}>
                  <p>
                    We introduce you to the object oriented patterns of design
                    and PHP standards of recommendation, which will improve the
                    structure of your code & ease its management as well. Our
                    team of skilled professionals will teach you how to manage
                    Bower, Node.js so that you can manage the Javascripts and
                    CSS.
                  </p>

                  <p>
                    This user management system will be highly secure,
                    multi-level user access and internal communication of users.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="UserManagementKeyBenefitsSection">
        <div className="container">
          <div className="HireTopHaddind">
            <h2>
              Key Benefits of Our <br />
              <span>PHP User Management System</span>
            </h2>
          </div>
          <div className="UserManagementKeyBenefits">
            <div className="row">
              <div className="col-sm-6">
                <div className="ManagementKeyBenefitsBx">
                  <h3>Efficient sign-up</h3>
                  <p>
                    Just login once and the persistent sessions will be taken
                    care of by us for you with the help of our remember feature.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="ManagementKeyBenefitsBx">
                  <h3>Post Maintenance</h3>
                  <p>
                    {" "}
                    We will not only maintain your system at present, but also
                    help you in learning the art of maintainability for future
                    needs.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="ManagementKeyBenefitsBx">
                  <h3>Roles and permission</h3>
                  <p>
                    {" "}
                    Manage user access and manage those permissions through role
                    management page
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="ManagementKeyBenefitsBx">
                  <h3>Dashboards</h3>
                  <p>
                    We offer elegant dashboards on your system for your users.{" "}
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="ManagementKeyBenefitsBx">
                  <h3>Admin management page</h3>
                  <p>
                    A built-in management page enables you to search, view and
                    sort the users, open new account for users and alter the
                    earlier ones.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="ManagementKeyBenefitsBx">
                  <h3>Permission & Access</h3>
                  <p>
                    Our powerful access controller helps you in deciding
                    well-grained, programmatic system to allow access to the
                    user and then manage those permissions through the function
                    management section.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="UserManagementFeaturesSection" id="features">
        <div className="container">
          <div className="HireTopHaddind">
            <h2>
              PHP User Management
              <span>System Features</span>
            </h2>
          </div>
          <div className="features-tab">
            <div className="clearfix">
              <ul className="nav nav-tabs" role="tablist">
                <li
                  id="tab1_li"
                  className={` ddlj ${sellerTab ? "active" : ""}`}
                  onClick={() => handleSellerTab()}
                  style={{ cursor: "pointer" }}
                >
                  <a> Features</a>
                </li>
                <li
                  id="tab2_li"
                  className={` ddlj ${buyerTab ? "active" : ""}`}
                  onClick={() => handleBuyerTab()}
                  style={{ cursor: "pointer" }}
                >
                  <a>Admin </a>
                </li>
              </ul>

              <div className="costomer_tab tab-pane rj">
                <div
                  role="tabpanel"
                  className="tab-pane active"
                  id="features-car1"
                >
                  {sellerTab && (
                    <>
                      <div className="UserManagementFeatures">
                        <div className="UserManagementFeaturesUp">
                          <div className="UserManagementFeaturesBx">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/user-list-icon.png"
                                alt="User list"
                              />
                            </i>
                            <h3>User list </h3>
                            <p>
                              Homepage has a list of registered users and users
                              who are newly registered on the website.
                            </p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp">
                          <div className="UserManagementFeaturesBx UserManagementFeaturesBx2">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/user-status-icon.png"
                                alt="User status"
                              />
                            </i>
                            <h3>User status</h3>
                            <p>
                              See users who are currently online, offline and
                              user who have registered today.
                            </p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp">
                          <div className="UserManagementFeaturesBx">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/user-settings-icon.png"
                                alt="User settings"
                              />
                            </i>
                            <h3>User settings</h3>
                            <p>
                              User can update their details, name, birthdate,
                              country, city, profile image, bio etc.
                            </p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp">
                          <div className="UserManagementFeaturesBx UserManagementFeaturesBx2">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/easy-register-icon.png"
                                alt="Easy register"
                              />
                            </i>
                            <h3>Easy to register</h3>
                            <p>
                              User can easily register by giving the required
                              details with quick and easy page.
                            </p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp UserManagementFeaturesUp2">
                          <div className="UserManagementFeaturesBx">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/forgot-password-icon.png"
                                alt="Forgot password"
                              />
                            </i>
                            <h3>Forgot password</h3>
                            <p>
                              User can reset their login password through email
                              if they forgot their password.
                            </p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp">
                          <div className="UserManagementFeaturesBx UserManagementFeaturesBx2">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/update-password-icon.png"
                                alt="Update password"
                              />
                            </i>
                            <h3>Update password</h3>
                            <p>
                              User can change their address directly by filling
                              the current password in the setting page.
                            </p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp">
                          <div className="UserManagementFeaturesBx">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/access-profile-icon.png"
                                alt="Access-profile"
                              />
                            </i>
                            <h3>Access of profile</h3>
                            <p>
                              Your plan restrict you for handling your user
                              profile and do not allow you to use every feature.
                            </p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp">
                          <div className="UserManagementFeaturesBx UserManagementFeaturesBx2">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/captcha-validation-icon.png"
                                alt="Captcha validation"
                              />
                            </i>
                            <h3>Captcha validation</h3>
                            <p>
                              Captcha enable registration to prevent bots from
                              spamming your site (can be disabled in admin
                              panel).
                            </p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp">
                          <div className="UserManagementFeaturesBx">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/multiple-login-icon.png"
                                alt="Multiple login"
                              />
                            </i>
                            <h3>Multiple login</h3>
                            <p>
                              User can register through social media login i.e.
                              facebook, google+, twitter to make it quicker.
                            </p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp UserManagementFeaturesUp2">
                          <div className="UserManagementFeaturesBx UserManagementFeaturesBx2">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/search-members-icon.png"
                                alt="Search members"
                              />
                            </i>
                            <h3>Search members</h3>
                            <p>
                              Search of the user in the specific category,
                              country, level or by keyword like name.
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
                      <div className="UserManagementFeatures">
                        <div className="UserManagementFeaturesUp">
                          <div className="UserManagementFeaturesBx">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/userlog-icon.png"
                                alt="User log"
                              />
                            </i>
                            <h3>User log</h3>
                            <p>View activity of all the users.</p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp">
                          <div className="UserManagementFeaturesBx UserManagementFeaturesBx2">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/manage-members-icon.png"
                                alt="Manage members"
                              />
                            </i>
                            <h3>Manage members</h3>
                            <p>
                              Edit or delete members information i.e. email,
                              numbers.
                            </p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp">
                          <div className="UserManagementFeaturesBx">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/user-dashboard-icon.png"
                                alt="Dashboard"
                              />
                            </i>
                            <h3>Dashboard</h3>
                            <p>
                              Change site name, logo, description, images and
                              more details.
                            </p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp">
                          <div className="UserManagementFeaturesBx UserManagementFeaturesBx2">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/custom-field-icon.png"
                                alt="Custom Field"
                              />
                            </i>
                            <h3>Custom Field</h3>
                            <p>Create custom fields to registration form.</p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp UserManagementFeaturesUp2">
                          <div className="UserManagementFeaturesBx">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/disable-registration-icon.png"
                                alt="Disable registration"
                              />
                            </i>
                            <h3>Disable registration</h3>
                            <p>
                              Register can be disabled through the admin panel.
                            </p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp">
                          <div className="UserManagementFeaturesBx UserManagementFeaturesBx2">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/manage-email-icon.png"
                                alt="Manage Email"
                              />
                            </i>
                            <h3>Manage Email</h3>
                            <p>
                              Send emails to all registered users. Send by
                              group, username.
                            </p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp">
                          <div className="UserManagementFeaturesBx">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/payment-plan-icon.png"
                                alt="Set Up payment plan"
                              />
                            </i>
                            <h3>Set Up payment plan</h3>
                            <p>
                              Set plans details, plan price, duration and
                              payment settings.
                            </p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp">
                          <div className="UserManagementFeaturesBx UserManagementFeaturesBx2">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/disable-captcha-icon.png"
                                alt="Disable captcha"
                              />
                            </i>
                            <h3>Disable captcha</h3>
                            <p>Admin can disable the captcha at anytime.</p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp">
                          <div className="UserManagementFeaturesBx">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/block-ip-icon.png"
                                alt="Block IP"
                              />
                            </i>
                            <h3>Block IP</h3>
                            <p>Block IPs from registration or logging in .</p>
                          </div>
                        </div>
                        <div className="UserManagementFeaturesUp UserManagementFeaturesUp2">
                          <div className="UserManagementFeaturesBx UserManagementFeaturesBx2">
                            <i>
                              <Image
                                unoptimized={true}
                                width={50}
                                height={100}
                                src="/img/user-management/password-protection-icon.png"
                                alt="Password protection"
                              />
                            </i>
                            <h3>Password protection</h3>
                            <p>
                              Password is protected through library to make sure
                              your data is safe.
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="clearfix"></div>

      <section className="PhpUserSystemSection">
        <div className="HireTopHaddind">
          <h2>
            PHP User Management
            <span>System Solution</span>
          </h2>
        </div>

        <div className="PhpUserSystemTabMain">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                {/* <!-- Nav tabs --> */}
                <ul className="nav UserSystemTab" role="tablist">
                  <li
                    id="tab1_li"
                    className={`ddlj ${activeTab === "tab1" ? "active" : ""}`}
                    onClick={() => opendiv("tab1")}
                  >
                    <a href="javascript:void(0)">
                      <i>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/user-management/idea-icon.png"
                          alt="Idea"
                        />
                      </i>
                      <span>Idea</span>
                      <strong>01</strong>
                    </a>
                  </li>
                  <li
                    id="tab2_li"
                    className={`ddlj ${activeTab === "tab2" ? "active" : ""}`}
                    onClick={() => opendiv("tab2")}
                  >
                    <a href="javascript:void(0)">
                      <i>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/user-management/concept-icon.png"
                          alt="Concept"
                        />
                      </i>
                      <span>Concept</span>
                      <strong>02</strong>
                    </a>
                  </li>
                  <li
                    id="tab3_li"
                    className={`ddlj ${activeTab === "tab3" ? "active" : ""}`}
                    onClick={() => opendiv("tab3")}
                  >
                    <a href="javascript:void(0)">
                      <i>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/user-management/implement-icon.png"
                          alt="Implement"
                        />
                      </i>
                      <span>Implement</span>
                      <strong>03</strong>
                    </a>
                  </li>
                  <li
                    id="tab4_li"
                    className={`ddlj ${activeTab === "tab4" ? "active" : ""}`}
                    onClick={() => opendiv("tab4")}
                  >
                    <a href="javascript:void(0)">
                      <i>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/user-management/testing-icon.png"
                          alt="Testing"
                        />
                      </i>
                      <span>Testing</span>
                      <strong>04</strong>
                    </a>
                  </li>
                  <li
                    id="tab5_li"
                    className={`ddlj ${activeTab === "tab5" ? "active" : ""}`}
                    onClick={() => opendiv("tab5")}
                  >
                    <a href="javascript:void(0)">
                      <i>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/user-management/support-icon.png"
                          alt="Support"
                        />
                      </i>
                      <span>Support</span>
                      <strong>05</strong>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- Tab panes --> */}
              <div className="col-sm-8">
                <div className="tab-content">
                  <div
                    className={`costomer_tab tab-pane rj ${
                      activeTab === "tab1" ? "active" : ""
                    }`}
                    id="tab1"
                  >
                    <div className="UserSystemTabPanal">
                      <i>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/user-management/idea-icon2.png"
                          alt="Idea"
                        />
                      </i>
                      <h3>Idea</h3>
                      <p>
                        App idea starts with you. You came to us with your idea
                        and it&apos;s our duty to convert your idea into
                        business. We always give value to your idea. Your idea
                        and our suggestion can give a birth to excellent
                        solution to development.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`costomer_tab tab-pane rj ${
                      activeTab === "tab2" ? "active" : ""
                    }`}
                    id="tab2"
                  >
                    <div className="UserSystemTabPanal">
                      <i>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/user-management/concept-icon2.png"
                          alt="Concept"
                        />
                      </i>
                      <h3>Concept</h3>
                      <p>
                        We analyze the market, design UI to deliver the great
                        and effective solution for your business. R&D plays an
                        important role when you start any business. It&apos;s
                        our duty to stand out from the competition.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`costomer_tab tab-pane rj ${
                      activeTab === "tab3" ? "active" : ""
                    }`}
                    id="tab3"
                  >
                    <div className="UserSystemTabPanal">
                      <i>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/user-management/implement-icon2.png"
                          alt="Implement"
                        />
                      </i>
                      <h3>Implement</h3>
                      <p>
                        We implement as per your requirements. We believe in
                        transparency and work with your given custom
                        functionality & features. Custom solution is especially
                        focused to fulfill your requirement by adding required
                        features & functionality.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`costomer_tab tab-pane rj ${
                      activeTab === "tab4" ? "active" : ""
                    }`}
                    id="tab4"
                  >
                    <div className="UserSystemTabPanal">
                      <i>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/user-management/testing-icon2.png"
                          alt="Testing"
                        />
                      </i>
                      <h3>Testing</h3>
                      <p>
                        We have a team of expert tested who use advanced tool to
                        test your app. We assure to come up with proper testing
                        and bug free app. We are always available if you find
                        any issue in the custom development.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`costomer_tab tab-pane rj ${
                      activeTab === "tab5" ? "active" : ""
                    }`}
                    id="tab5"
                  >
                    <div className="UserSystemTabPanal">
                      <i>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          src="/img/user-management/support-icon2.png"
                          alt="Support"
                        />
                      </i>
                      <h3>Support</h3>
                      <p>
                        We offer free support for 1 month after delivering a
                        project to the client.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
      <div className="SupportWillGetSection">
        <div className="container">
          <div className="HireTopHaddind">
            <h2>
              What Support
              <span>You Will Get?</span>
            </h2>
          </div>

          <div className="SupportWillGet">
            <div className="row">
              <div className="col-sm-4">
                <div className="SupportWillGetbx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={40}
                      height={100}
                      src="/img/user-management/idea-exchange-icon.png"
                      alt="Idea Exchange"
                    />
                  </i>
                  <div className="SupportWillGetTxt">
                    <h3>Idea Exchange</h3>
                    <p>
                      We value your idea and with the mutual communication
                      between you and us, we come up with great idea.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="SupportWillGetbx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={40}
                      height={100}
                      src="/img/user-management/documentation-plan-icon.png"
                      alt="Documentation Plan"
                    />
                  </i>
                  <div className="SupportWillGetTxt">
                    <h3>Documentation Plan</h3>
                    <p>
                      A proper documentation before start building an app or not
                      rely on a code.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="SupportWillGetbx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={40}
                      height={100}
                      src="/img/user-management/plan-prototype-icon.png"
                      alt="Plan With Prototype"
                    />
                  </i>
                  <div className="SupportWillGetTxt">
                    <h3>Plan With Prototype</h3>
                    <p>
                      A prototype version of a product, a service or a process
                      and same will be used in order to develop & test.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="SupportWillGetbx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={40}
                      height={100}
                      src="/img/user-management/regular-updated-progress-icon.png"
                      alt="Regular updated Progress"
                    />
                  </i>
                  <div className="SupportWillGetTxt">
                    <h3>Regular updated Progress</h3>
                    <p>
                      You will get the updates after progress and with your
                      approval, we move forward.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="SupportWillGetbx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={40}
                      height={100}
                      src="/img/user-management/payment-milestone-icon.png"
                      alt="Payment in Milestone"
                    />
                  </i>
                  <div className="SupportWillGetTxt">
                    <h3>Payment in Milestone</h3>
                    <p>
                      There is no need to do complete payment for your project.
                      Each payment will get released after completion of each
                      milestone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="SupportWillGetbx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={40}
                      height={100}
                      src="/img/user-management/installation-icon.png"
                      alt="First Installation Free"
                    />
                  </i>
                  <div className="SupportWillGetTxt">
                    <h3>First Installation Free</h3>
                    <p>
                      We install the code for the first time free on your live
                      server and if you are going for second time, it is
                      chargeable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="SupportWillGetbx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={40}
                      height={100}
                      src="/img/user-management/delivery-support-icon.png"
                      alt="Post Delivery Support"
                    />
                  </i>
                  <div className="SupportWillGetTxt">
                    <h3>Post Delivery Support</h3>
                    <p>We give free support for the next 6 months.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="SupportWillGetbx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={40}
                      height={100}
                      src="/img/user-management/term-maintenance-icon.png"
                      alt="Long Term Maintenance"
                    />
                  </i>
                  <div className="SupportWillGetTxt">
                    <h3>Long Term Maintenance</h3>
                    <p>
                      We always believe in long term relation with client so we
                      are always available if you are looking for future
                      extendibility.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="SupportWillGetbx">
                  <i>
                    <Image
                      unoptimized={true}
                      width={40}
                      height={100}
                      src="/img/user-management/third-party-support-icon.png"
                      alt="Third Party Support"
                    />
                  </i>
                  <div className="SupportWillGetTxt">
                    <h3>Third Party Support</h3>
                    <p>
                      We communicate for all the third party installation and
                      support on the behalf of the client.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="ecommerce_faq_section NewFaqDesignSection UserManagementFaqSection"
        id="faq"
      >
        <div className="container">
          <div className="row">
            <div className="CustomQuickFAQScript">
              <div className="row">
                <div className="col-md-5" data-aos="fade-up">
                  <h4 className="title_main">
                    Frequently <br />
                    Asked Questions
                  </h4>
                  <div className="FaqImgBx">
                    <Image
                      unoptimized={true}
                      width={300}
                      height={100}
                      src="/img/user-management/freescript-faq.png"
                      alt="Free Script"
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <MDBAccordion v-model="activeItem" borderless>
                    <MDBAccordionItem
                      headerTitle="How to add a new user to the user management system?"
                      collapseId="flush-collapse1"
                    >
                      <p>
                        To add a big batch of fresh users, you can immediately
                        add them through user or group management option.
                      </p>
                    </MDBAccordionItem>
                    <MDBAccordionItem
                      headerTitle="How to avoid automatic addition of new users?"
                      collapseId="flush-collapse2"
                    >
                      <p>You can check out the demand user joining option.</p>
                    </MDBAccordionItem>
                    <MDBAccordionItem
                      headerTitle="How much time it will take to implement this?"
                      collapseId="flush-collapse3"
                    >
                      <p>
                        It takes 4-5 weeks to develop user management system to
                        your business.
                      </p>
                    </MDBAccordionItem>
                  </MDBAccordion>
                </div>
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
                    title="Custom User Management System"
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
