"use client";
import React, { useRef, useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";
const Page = () => {
  const [activeTab, setActiveTab] = useState("tab2");
  const [cakephpTab, setCakephpTab] = useState(true);
  const [codeigniterTab, setCodeigniterTab] = useState(false);
  const [laravelTab, setLaravelTab] = useState(false);
  const [opencartTab, setOpencartTab] = useState(false);
  const [magentoTab, setMagentoTab] = useState(false);
  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";
  const recaptchaRef = useRef(null);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const handleCakephpTab = () => {
    setCakephpTab(true);
    setCodeigniterTab(false);
    setLaravelTab(false);
    setOpencartTab(false);
    setMagentoTab(false);
  };
  const handleCodeigniterTab = () => {
    setCakephpTab(false);
    setCodeigniterTab(true);
    setLaravelTab(false);
    setOpencartTab(false);
    setMagentoTab(false);
  };
  const handleLaravelTab = () => {
    setCakephpTab(false);
    setCodeigniterTab(false);
    setLaravelTab(true);
    setOpencartTab(false);
    setMagentoTab(false);
  };
  const handleOpencartTab = () => {
    setCakephpTab(false);
    setCodeigniterTab(false);
    setLaravelTab(false);
    setOpencartTab(true);
    setMagentoTab(false);
  };
  const handleMagentoTab = () => {
    setCakephpTab(false);
    setCodeigniterTab(false);
    setLaravelTab(false);
    setOpencartTab(false);
    setMagentoTab(true);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone_no: "",
    message: "",
    post_url: Domain + "/open-source-cms",
    product_name: "Open source cms",
    post_slug: "/open-source-cms"
  })

  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
    recaptchaerror: "",
  });

  const onRecaptchaChange = (token) => {
    if (token) {
      setIsRecaptchaVerified(true);
      setError((prevError) => ({
        ...prevError,
        recaptchaerror: "",
      }));
    }

    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError((prevError) => ({
      ...prevError,
      [name]: "",
    }))
  }


  const submitQuoteForm = async (e) => {
    e.preventDefault();
  
    const newErrors = {};
  
    if (!isRecaptchaVerified) {
      newErrors.recaptchaerror = "Please verify that you are not a robot";
    }
  
    if (formData.name === "") {
      newErrors.name = "Please enter your name";
    }
  
    if (formData.email === "") {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
  
    if (formData.message === "") {
      newErrors.message = "Please enter your message";
    }
  
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }
  
    try {
      const response = await axios.post(BaseAPI + "/pages/quote", formData);
  
      if (response.data.status === 200) {
        setFormData({
          name: "",
          email: "",
          company: "",
          phone_no: "",
          message: "",
        });
  
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
  
        document.querySelector("#successMessage").innerHTML = "Request message sent successfully";
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <NavBar />
      <div className="openSourceCMS"><section className="d-framework d-framework1 none_space">
        <div className="page_img">
          <Image unoptimized={true}
            width={1500}
            height={500 / (100 / 100)}
            src="/img/opensourcecms/opnecart-development-service.jpg"
            alt="Open source cms"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-8">
              <h1 className="main--title" style={{fontSize: "36px"}}>
                Open Source CMS Development Services
              </h1>
              <p>
                Open source development is the need and the trend in todayâ€™s
                market as almost every business house is looking for open source
                customized websites. Open source CMS applications and their
                custom development brings you with the features that are matched
                by none and at the same time are highly affordable and effective
                to make an impact on the audience.
              </p>
              <h2>Advanced Php Frameworks For CMS Applications:</h2>
              <p>
                There are various open source platforms like Technology Experts,
                CakePHP, CodeIgniter, Laravel, Opencart, and Magento to help you
                with flexible options. These frameworks written in PHP are very
                powerful whether you are looking to design a blog, e-commerce
                solution or others.
              </p>
              <div className="app_solution cms-tabbing">
                <ul className="nav nav-tabs">
                  <li
                    id="tab1_li"
                    className={`jobseeker_app_job ddlj ${
                      cakephpTab ? "active" : ""
                    }`}
                    onClick={() => handleCakephpTab()}
                  >
                    <a>CakePHP</a>
                  </li>
                  <li
                    id="tab2_li"
                    className={`emplyer_app_job  ddlj ${
                      codeigniterTab ? "active" : ""
                    }`}
                    onClick={() => handleCodeigniterTab()}
                  >
                    <a>CodeIgniter</a>
                  </li>
                  <li
                    id="tab3_li"
                    className={`admin_app_job ddlj ${
                      laravelTab ? "active" : ""
                    }`}
                    onClick={() => handleLaravelTab()}
                  >
                    <a>Laravel</a>
                  </li>
                  <li
                    id="tab4_li"
                    className={`admin_app_job ddlj ${
                      opencartTab ? "active" : ""
                    }`}
                    onClick={() => handleOpencartTab()}
                  >
                    <a>Opencart</a>
                  </li>
                  <li
                    id="tab5_li"
                    className={`admin_app_job ddlj ${
                      magentoTab ? "active" : ""
                    }`}
                    onClick={() => handleMagentoTab()}
                  >
                    <a>Magento</a>
                  </li>
                </ul>
                <div className="tab-content">
                  {cakephpTab && (
                    <>
                      <div className="TabPanel rj" id="tab1">
                        <p>
                          <Link
                            href="/cakephp-development"
                            target="_blank"
                            style={{textDecoration: "none", fontWeight:"normal"}}
                          >
                            CakePHP
                          </Link>{" "}
                          is designed and based on the concept of model
                          controller view. Development via Cake PHP is simple
                          and faster as it requires less coding when compared to
                          other web application development models. Since the
                          cakephp framework employs simple design patterns, the
                          coding becomes quite clearer and easier.
                        </p>
                        <ul>
                          <li>Codes can be reused</li>
                          <li>Model view controller</li>
                          <li>Robust and secure</li>
                          <li>In built validation for web application</li>
                          <li>Based on Object oriented programming</li>
                        </ul>
                      </div>
                    </>
                  )}
                  {codeigniterTab && (
                    <>
                      <div className="TabPanel rj" id="tab2">
                        <p>
                          A powerful PHP framework,{" "}
                          <Link
                            href="/codeigniter-development"
                            target="_blank"
                            style={{textDecoration: "none", fontWeight:"normal"}}
                          >
                            CodeIgniter
                          </Link>{" "}
                          is perfect for web developers who need effective and
                          simple tool kit to create fully featured web
                          applications.It provides a rich set of libraries and
                          simple interface along with logic structure that is
                          used for the purpose of accessing the library.
                        </p>
                        <ul>
                          <li>Quick response time</li>
                          <li>Form validation facility</li>
                          <li>Simple to configure</li>
                          <li>User friendly interface</li>
                          <li>Easy to migrate</li>
                        </ul>
                      </div>
                    </>
                  )}
                  {laravelTab && (
                    <>
                      <div className="TabPanel rj" id="tab3">
                        <p>
                          It comes with simple and expressive syntax which makes
                          it handy for creating perfect applications. Equipped
                          with features including scalability, quick intuition
                          and better development speed.{" "}
                          <Link
                            href="/laravel-development"
                            target="_blank"
                            style={{textDecoration: "none", fontWeight:"normal"}}
                          >
                            Laravel
                          </Link>{" "}
                          web framework dispenses better programming results
                          when compared to some other PHP frameworks.
                        </p>
                        <ul>
                          <li>Organized documentation</li>
                          <li>Unit Testing</li>
                          <li>Pre- installed templates</li>
                          <li>Modular</li>
                          <li>Easy to maintain codes</li>
                          <li>Highly secure</li>
                        </ul>
                      </div>
                    </>
                  )}
                  {opencartTab && (
                    <>
                      <div className="TabPanel rj" id="tab4">
                        <p>
                          A slightly different web development framework,{" "}
                          <Link
                            href="/opencart-development"
                            target="_blank"
                            style={{textDecoration: "none", fontWeight:"normal"}}
                          >
                            Opencart
                          </Link>{" "}
                          is preferred for developing e-commerce websites. It is
                          an online shopping cart and the CMS platform is
                          extremely easy to setup. It is an open source system
                          and enables business owners create and manage their
                          online presence quite effectively.
                        </p>
                        <ul>
                          <li>Supports innumerable products</li>
                          <li>Easy to operate</li>
                          <li>Pre-defined templates</li>
                          <li>Multi language & Multi Currency support</li>
                          <li>Updated Regularly</li>
                        </ul>
                      </div>
                    </>
                  )}
                  {magentoTab && (
                    <>
                      <div className="TabPanel rj" id="tab5">
                        <p>
                          It is one of the most widely used e-commerce platform
                          web frameworks as it comes with huge number of options
                          for integration and customization purpose.
                          <Link
                            href="/magento-development"
                            target="_blank"
                            style={{textDecoration: "none", fontWeight:"normal"}}
                          >
                            Magento
                          </Link>{" "}
                          has grown tremendously over a period of time and it
                          caters to the requirements of e-commerce market quite
                          specifically.
                        </p>
                        <ul>
                          <li>Exciting features</li>
                          <li>Mobile friendly</li>
                          <li>Support SEO</li>
                          <li>Robust and spacious</li>
                          <li>Friendly and easy to update</li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="form_quote form_top">
              <form>
                  <h4>Get a Quote</h4>
                  <div className="form-group">
                    <input
                      name="name"
                      placeholder="Your Full Name*"
                      value={formData.name}
                      size="40"
                      className={`form-control required ${error.name ? 'fieldRequired' : ''}`}                      type="text"
                      
                      id="UserName"
                      onChange={handleChange}
                    />{" "}
                  </div>
                  <div className="form-group">
                    <input
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      size="40"
                      className={`form-control required ${error.email ? 'fieldRequired' : ''}`}                      type="text"
                      onChange={handleChange}
                    />{" "}
                  </div>
                  <div className="form-group">
                    <input
                      name="phone_no"
                      placeholder="Phone Number"
                      value={formData.phone_no}
                      size="40"
                      className="form-control"
                      type="text"
                      onChange={handleChange}
                    />{" "}
                  </div>
                  <div className="form-group">
                    <input
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      size="40"
                      className="form-control"
                      type="text"
                      onChange={handleChange}
                    />{" "}
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Your Message*"
                      size="40"
                      value={formData.message}
                      className={`form-control required ${error.message ? 'fieldRequired' : ''}`}                      type="text"
                      onChange={handleChange}
                    ></textarea>{" "}
                  </div>
                  
                  <div className="form-group-google">
                    <ReCAPTCHA
                    ref={recaptchaRef}
                      key={recaptchaKey}
                      sitekey={recaptchaKey}
                      onChange={onRecaptchaChange}
                    />
                    <div className="gcpc FormError recaptchaError" id="captcha_msg">
                      {error.recaptchaerror}
                    </div>
                  </div>

                  <div id="successMessage" className="text-success fw-bold successMessage"></div>

                  <div className="form-group">
                    
                    <button className="btn btn-primary btn-block" onClick={submitQuoteForm}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-services d-services1">
        <div className="container">
          <h2>Open source development service</h2>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="service_box Application6">
                <h3>Third party integration</h3>
                <p>
                  We allow easy integration of third party apps on our website
                  to help you generate better customer base.
                </p>
              </div>
              <div className="service_box Application3">
                <h3>Unorthodox Designs</h3>
                <p>
                  We provide you with unorthodox designs in various types of
                  open source platforms that attract the audience.
                </p>
              </div>
              <div className="service_box Application3">
                <h3>Variety of solutions</h3>
                <p>
                  Our ability to work on different platforms allows us to
                  provide you with variety of solutions to suffice your needs.
                </p>
              </div>
              <div className="service_box Application2">
                <h3>Plug-ins</h3>
                <p>
                  Plug-ins are key for any website whether it is designed in
                  Magento, WordPress or other platforms and we help you with the
                  adept plug-ins as a part of our open source development
                  service.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="service_box Application4">
                <h3>E-commerce Development</h3>
                <p>
                  {" "}
                  Our developers can help you with smart e-commerce carts using
                  open sources like CodeIgniter and Opencart.
                </p>
              </div>
              <div className="service_box Application5">
                <h3>Unflinching Support</h3>
                <p>
                  We are ready to cater you with round the clock support via
                  different means viz. website chat, e-mail and telephone.
                </p>
              </div>
              <div className="service_box Application4">
                <h3>Themes</h3>
                <p>
                  There are uncountable themes that are available to make your
                  website look different and appealing to audience.
                </p>
              </div>
              <div className="service_box Application1 ">
                <h3>CMS customization</h3>
                <p>
                  We can help you with fully customized websites that will be
                  apt for the exact kind of business that you are doing to
                  create an impact on audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-features">
        <div className="container">
          <h2>Why Choose LogicSpice for Open source web development?</h2>
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/opensourcecms/lara_icon4.png"
                  alt="icon1"
                />
                <h3>SEO friendly Website</h3>
                <p>
                  This is another thing with our websites as we design SEO
                  friendly websites that can easily climb up the ladder of
                  Google rankings.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/opensourcecms/lara_icon6.png"
                  alt="icon2"
                />
                <h3>Customized themes</h3>
                <p>
                  We cater to fully customized themes for your business website
                  to create a niche for you in the market.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/opensourcecms/lara_icon5.png"
                  alt="icon3"
                />
                <h3>Hassle-free editing</h3>
                <p>
                  Our back-end is also very user friendly allowing you to easily
                  edit the content without sheer knowledge of the language.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/opensourcecms/lara_icon3.png"
                  alt="icon4"
                />
                <h3>Security</h3>
                <p>
                  We are also very peculiar about the security feature and make
                  use of latest open source web development tools for enhanced
                  security.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/opensourcecms/lara_icon1.png"
                  alt="icon5"
                />
                <h3>Enhanced user experience</h3>
                <p>
                  The user interface of our designed websites is very friendly
                  that makes it easier for them to access various features and
                  make better experience of end user.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/opensourcecms/lara_icon2.png"
                  alt="icon6"
                />
                <h3>Affordable pricing</h3>
                <p>
                  Last but not the least, we also provide you with open source
                  website at the most affordable of rates to make it easier for
                  you to go digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section></div>
      

      <Footer />
    </>
  );
};

export default Page;
