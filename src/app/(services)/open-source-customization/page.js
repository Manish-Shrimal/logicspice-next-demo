"use client";
import React, { useRef, useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/(services)/services.css";
import Image from "next/image";
import Link from "next/link";
import "../../../../public/css/font-awesome.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Domain from "@/app/BaseAPI/Domain";

const Page = () => {
  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";
  const recaptchaRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone_no: "",
    message: "",
    post_url: Domain + "/website-design",
    product_name: "Website design",
    post_slug: "/website-design",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
    recaptchaerror: "",
  });

  const openModal = () => {
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

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
    }));
  };

  const [isEnquiryRequested, setIsEnquiryRequested] = useState(false);
  const submitQuoteForm = async (e) => {
    e.preventDefault();

    if (isEnquiryRequested) {
      return;
    }

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
      setIsEnquiryRequested(true);
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
        setIsEnquiryRequested(false);

        document.querySelector("#successMessage").innerHTML =
          "Request message sent successfully";
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <NavBar />

      <div className="websiteDesign">
        <section className="d-framework d-framework1 none_space">
          <div className="page_img">
            <Image
              unoptimized={true}
              width={1000}
              height={100 / (500 / 500)}
              src="/img/websitedesign/laravel_page_banner-tini.jpg"
              alt="web design service"
            />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-8">
                {/* <h1 className="main--title" style={{ fontSize: "36px" }}>
            Website Design Services
          </h1> */}
                <p>
                  Laravel is open source PHP framework blessed with MVC
                  architectural pattern. The Laravel Framework works great in
                  creating high quality websites & <b>web applications</b>. One
                  of the most prominent feature of Laravel is that it stacks and
                  arranges code in a very clean way so that the code is easily
                  readable and understandable.{" "}
                </p>
                <p>
                  Using additional functionality,{" "}
                  <b>customized laravel web development</b> can help create a
                  unique product with a variety of functionality.
                </p>

                <h2>PHP Laravel Framework Development</h2>

                <p>
                  Being one of the latest frameworks, PHP framework Laravel is
                  considered quite strong and clean which helps build high
                  quality web application easily with minimum effort possible.
                  It basically avoids rewriting of codes to make{" "}
                  <Link
                    href="/website-development"
                    target="_blank"
                    className="WebsiteTxtLink"
                  >
                    web development
                  </Link>{" "}
                  easier and quicker.
                </p>
                <p>
                  {" "}
                  Don&apos;t run elsewhere for laravel developers, Logicspice is
                  one of the best Laravel web development company for solution
                  to your project. Our Laravel developers are highly skilled
                  well acquainted with all the aspects of Laravel Framework.
                </p>

                <p>
                  {" "}
                  Custom <b>Laravel development service</b> can help to create
                  unique product with a ultimate functionality &amp; unique
                  features.
                </p>
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
                        className={`form-control required ${
                          error.name ? "fieldRequired" : ""
                        }`}
                        type="text"
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
                        className={`form-control required ${
                          error.email ? "fieldRequired" : ""
                        }`}
                        type="text"
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
                        className={`form-control required ${
                          error.message ? "fieldRequired" : ""
                        }`}
                        type="text"
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
                      <div
                        className="gcpc FormError recaptchaError"
                        id="captcha_msg"
                      >
                        {error.recaptchaerror}
                      </div>
                    </div>

                    <div
                      id="successMessage"
                      className="text-success fw-bold successMessage"
                    ></div>

                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-block"
                        onClick={submitQuoteForm}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="d-services d-services1">
          <div className="container">
            <h2>Laravel Development Services </h2>
            <div className="row">
              <div className="col-sm-6 col-md-6">
                <div className="service_box Application1 ">
                  <h3>Laravel Web Application</h3>
                  <p>
                    {" "}
                    Our Laravel developers provides purely functional amazing
                    web development suits your business requirement.
                  </p>
                </div>
                <div className="service_box Application2">
                  <h3>Laravel eCommerce Solution</h3>
                  <p>
                    Laravel is an easy way to develop ecommerce website to grow
                    with a strong marketplace and a broad customer base.
                  </p>
                </div>
                <div className="service_box Application3">
                  <h3>Design & Integration</h3>
                  <p>
                    Talk to our developers for magnificent laravel themes. We
                    are experience in providing custom plugin installation and
                    configuration services.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="service_box Application1 ">
                  <h3>3rd Party Integration</h3>
                  <p>
                    We have expertise in integrating third party API to increase
                    the functionality of laravel web application.
                  </p>
                </div>
                <div className="service_box Application4">
                  <h3>Payment Gateway Integration</h3>
                  <p>
                    Our Laravel developers has a capability to integrate payment
                    gateway in your website.
                  </p>
                </div>
                <div className="service_box Application5">
                  <h3>Mobile App Backend Development Using Laravel</h3>
                  <p>
                    Customize your app backend in laravel for big database
                    connectivity and more features.
                  </p>
                </div>
                {/* <div className="service_box Application6">
            <h3>Corporate Website Design</h3>
            <p>
              Extremely sensitive and specific demands of corporate
              enterprises are also fulfilled by our website designing
              services.
            </p>
          </div> */}
                {/* <div className="service_box Application4">
            <h3>Template Designing</h3>
            <p>
              Our template design services focus on the client details and
              customized it to meet requirement of business.
            </p>
          </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className="d-features">
          <div className="container">
            <h2>Core Features of Laravel Development</h2>

            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="featureBox">
                  <Image
                    unoptimized={true}
                    width={100}
                    height={100}
                    src="/img/websitedesign/lara_icon1.png"
                    alt="icon1"
                  />
                  <h3>Class Autoloading </h3>
                  <p>
                    Laravel take care that right class is called at the right
                    time. It does it automatically reducing a lot of work from
                    developer&apos;s side.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="featureBox">
                  <Image
                    unoptimized={true}
                    width={100}
                    height={100}
                    src="/img/websitedesign/lara_icon6.png"
                    alt="icon2"
                  />
                  <h3>Unit Testing</h3>
                  <p>
                    Creation and execution of unit tests on Laravel is easy. It
                    supports a lot of these tests itself to ensure quality of
                    the product.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="featureBox">
                  <Image
                    unoptimized={true}
                    width={100}
                    height={100}
                    src="/img/websitedesign/lara_icon5.png"
                    alt="icon3"
                  />
                  <h3>Bundles</h3>
                  <p>
                    Bundles are like plugins which can be downloaded to further
                    increase the functionality of the web application.
                  </p>
                </div>
              </div>

              <div className="col-sm-6 col-md-4">
                <div className="featureBox">
                  <Image
                    unoptimized={true}
                    width={100}
                    height={100}
                    src="/img/websitedesign/lara_icon4.png"
                    alt="icon4"
                  />
                  <h3>Easy to Customize</h3>
                  <p>
                    Laravel is simple code pattern which is easily customizable
                    fast process.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="featureBox">
                  <Image
                    unoptimized={true}
                    width={100}
                    height={100}
                    src="/img/websitedesign/lara_icon3.png"
                    alt="icon5"
                  />
                  <h3>Excellent Maintainability</h3>
                  <p>
                    PHP Laravel framework code comes with a high reliability.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="featureBox">
                  <Image
                    unoptimized={true}
                    width={100}
                    height={100}
                    src="/img/websitedesign/lara_icon2.png"
                    alt="icon6"
                  />
                  <h3>Emerging Platform</h3>
                  <p>
                    The development scope of this platform is very high and
                    advance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="d-choose">
          <div className="container">
            <h2>Why Choose Laravel Framework For Web Development?</h2>

            <div className="row">
              <div className="col-sm-6 col-md-6 text-right">
                <div className="libraries" data-aos="fade-right">
                  <h3>Well Guarded Codebase</h3>
                  <p>
                    Laravel is heavily protected against common technical
                    vulnerabilities i.e. SQL injection, cross site request
                    forgery and cross site scripting to a web application.
                  </p>
                </div>
              </div>

              <div className="col-sm-6 col-md-6">
                <div className="libraries" data-aos="fade-left">
                  <h3>Exception and Error Handling</h3>
                  <p>
                    Laravel includes Monolog logging library to give support to
                    log handling. Error and exception handling is{" "}
                    <b>pre configured in a Laravel</b> based application
                    reducing man and machine efforts.
                  </p>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 text-right">
                <div className="libraries" data-aos="fade-right">
                  <h3>Testing</h3>
                  <p>
                    Phphunit.xml is already present in the installation which
                    allows automated testing of the projects. Laravel simulates
                    normal user behaviour for testing to get the most out of the
                    web application.
                  </p>
                </div>
              </div>

              <div className="col-sm-6 col-md-6">
                <div className="libraries" data-aos="fade-left">
                  <h3>Pre-Installed Libraries</h3>
                  <p>
                    Laravel has a lot of object oriented libraries already
                    installed. Some libraries like authentication are quite
                    useful in maintaining the web application secure.
                  </p>
                </div>
              </div>

              <div className="col-sm-6 col-md-6  text-right">
                <div className="libraries" data-aos="fade-right">
                  <h3>Database Migration</h3>
                  <p>
                    Database structure can be easily migrated without having to
                    re-write all the codes of the application. This is very
                    helpful as one does not lose any bunch of codes due to this.
                  </p>
                </div>
              </div>

              <div className="col-sm-6 col-md-6">
                <div className="libraries" data-aos="fade-left">
                  <h3>MVC Architecture Support</h3>
                  <p>
                    Alike other PHP frameworks, Laravel follows MVC structure as
                    well. This architecture provides quick functioning and is
                    suitable for large codes.
                  </p>
                </div>
              </div>

              {/* <div className="col-sm-6 col-md-6  text-right">
          <div className="libraries" data-aos="fade-right">
            <h3>Integration with third party API</h3>
            <p>
              We integrate your website with third party API on our end to
              serve you better.
            </p>
          </div>
        </div>

        <div className="col-sm-6 col-md-6">
          <div className="libraries" data-aos="fade-left">
            <h3>Unlimited Revision for home page design</h3>
            <p>
              We offer unlimited revision for home page until client
              satisfaction.
            </p>
          </div>
        </div> */}
              <div class="col-sm-12 main_btn_hire">
                <Link href="/hire-laravel-developers" class="btn btn-hire">
                  Hire Laravel Developer
                </Link>
              </div>
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
      </div>

      <Footer />
    </>
  );
};

export default Page;
