"use client";
import React, { useRef, useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
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
    post_url: Domain + "/salesforce-development-company",
    product_name: "Salesforce development company",
    post_slug: "/salesforce-development-company",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
    recaptchaerror: "",
  });

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

        document.querySelector("#successMessage").innerHTML =
          "Request message sent successfully";
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Navbar />
      <section className="d-framework d-framework1 none_space">
        <div className="page_img">
          <Image
            width={1500}
            height={100 / (500 / 500)}
            src="/img/services/salesforce-banner.png"
            alt="Professional SalesForce Platform Development Services"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-8">
              <p>
                Salesforce provides end to end solutions to organisations to
                automate their business workflow. It is a cloud based
                application or software, developed to help your sales team to
                decide their strategies to improve the sales by accessing the
                centralised customer&apos;s and other information.{" "}
              </p>
              <h2>Salesforce Application Development</h2>
              <p>
                We at Logicspice, perceive your business requirements and help
                you to automate your business functionality. We, therefore
                develop a custom salesforce CRM software with our experienced,
                trained, certified developers to improve the value of your
                business.
              </p>
              <p>
                We provides the advance Salesforce solutions, which will help
                you to developing the strategies for growing your overall sales.
                It&apos;s the integration of people, system, strategies,
                processes, sales, customer and more related business entity. It
                will helps sales team to execute their strategies.{" "}
              </p>
              <p>
                Our Salesforce CRM can help you to track on your client&apos;s
                information from anywhere and anytime. So you can quickly
                answers the customer&apos;s queries and enquiries to move sales
                forward. Get the detailed business reports, will help you to
                make your decision smart. We make sure its security and workflow
                is maintained through the different platform.{" "}
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
          <h2>SalesForce Platform Development Services </h2>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="service_box Application1 ">
                <h3>Sales & Service Cloud Solutions</h3>
                <p>
                  {" "}
                  We provide custom applications development and execution
                  services for Salesforce Sales and Service Cloud solutions to
                  enhance overall platform.
                </p>
              </div>
              <div className="service_box Application2">
                <h3>Third Party Application Integration</h3>
                <p>
                  We advise instant integration of SalesForce development
                  services with the third party updated applications.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="service_box Application4">
                <h3>Fields Service Impetuous</h3>
                <p>
                  We provide consultation and execution services to improve
                  field operation and improve front and back end communication
                  using the mobile solution that delivers real-time association
                  with access.
                </p>
              </div>
              <div className="service_box Application5">
                <h3>Perform Justification</h3>
                <p>
                  Applying the Salesforces platform competence Logicspice has
                  accelerators and provides comprehensive industry specific
                  platform rationalization services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-features">
        <div className="container">
          <h2>Why Go For SalesForce Development?</h2>

          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/websitedesign/lara_icon1.png"
                  alt="icon1"
                />
                <h3>Cloud based </h3>
                <p>
                  Salesforce services are cloud based, anyone can access the
                  services and data from remote locations.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/websitedesign/lara_icon6.png"
                  alt="icon2"
                />
                <h3>Easy to Customize</h3>
                <p>
                  It can be customized easily as compared to other development.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/websitedesign/lara_icon5.png"
                  alt="icon3"
                />
                <h3>Easy to integrate</h3>
                <p>
                  Easy to integrate in your present CRM, Database Management,
                  System Analytics and other.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/websitedesign/lara_icon4.png"
                  alt="icon4"
                />
                <h3>Reporting dashboard</h3>
                <p>
                  Salesforce software have analytics and reporting dashboard to
                  generate automatic report . Help to forecast the growth of the
                  business.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/websitedesign/lara_icon3.png"
                  alt="icon5"
                />
                <h3>Cost effective</h3>
                <p>
                  SalesForce can increases the revenues and reduces the cost.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image
                  width={100}
                  height={100}
                  src="/img/websitedesign/lara_icon2.png"
                  alt="icon6"
                />
                <h3>Easy integration</h3>
                <p>Support third party app or software integration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="d-choose">
        <div className="container">
          <h2>Why Choose Logicspice For SalesForce Services ?</h2>
          <div className="row">
            <div className="col-sm-6 col-md-6 text-right">
              <div
                className="libraries aos-init aos-animate"
                data-aos="fade-right"
              >
                <h3>
                  We have a team of experienced &amp; expert developers and
                  programmers.
                </h3>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                className="libraries aos-init aos-animate"
                data-aos="fade-left"
              >
                <h3>
                  Our clients are fully satisfied with our SalesForce services.
                </h3>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 text-right">
              <div
                className="libraries aos-init aos-animate"
                data-aos="fade-right"
              >
                <h3>
                  We work with productivity, efficiency, save time &amp; cost
                  and deliver quality work.
                </h3>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                className="libraries aos-init aos-animate"
                data-aos="fade-left"
              >
                <h3>
                  Our motto is always satisfy our client 100% with our softwares
                  and services.
                </h3>
              </div>
            </div>
            <div className="col-sm-6 col-md-6  text-right">
              <div
                className="libraries aos-init aos-animate"
                data-aos="fade-right"
              >
                <h3>
                  We are also very peculiar about the security feature and make
                  use of latest SalesForce development tools for enhanced
                  security.
                </h3>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                className="libraries aos-init aos-animate"
                data-aos="fade-left"
              >
                <h3>
                  We provides high level of customization support and faster
                  development.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
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
      </section>
      <Footer />
    </>
  );
};

export default Page;
