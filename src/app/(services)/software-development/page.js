"use client";
import React, { useRef, useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
import "../../../../public/css/font-awesome.css";
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
    post_url: Domain + "/software-development",
    product_name: "Software development",
    post_slug: "/software-development",
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
      <NavBar />

      <section className="d-framework d-framework1 none_space">
        <div className="page_img">
          <Image
            unoptimized={true}
            width={1500}
            height={500 / (300 / 300)}
            src="/img/websitedesign/software-development-services.jpg"
            alt="web design service"
          />
        </div>

        <div className="formAreaSection">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-8">
                <p>
                  Equipped with best and highly experienced software developers,
                  we employ innovative technology to deliver customized
                  solutions. Additionally, we also make available the facility
                  of offshore software development to small enterprises and
                  start-ups.{" "}
                </p>

                <p>
                  We being a reliable software development company demonstrate
                  flexibility and scalability to meet the desired requirements
                  of our clients. Trusted by customers across world, we take
                  expertise in developing{" "}
                  <Link
                    href="/custom-solutions"
                    target="_blank"
                    className="WebsiteTxtLink"
                  >
                    Custom Softwares
                  </Link>
                  ,{" "}
                  <Link
                    href="/website-design"
                    target="_blank"
                    className="WebsiteTxtLink"
                  >
                    Website Designing
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/mobile-app-development"
                    target="_blank"
                    className="WebsiteTxtLink"
                  >
                    Mobile Applications.
                  </Link>
                </p>

                <p>
                  We come with perfect software applications that we code and
                  design based on C#, C++, PHP, Java, Amazon Web Services and
                  JavaScript. Leveraging on our huge potential, we employ the
                  use of best in class resources, technologies and processes to
                  design and develop applications of superior value.{" "}
                </p>

                <p>
                  Softwares developed by us are based on modern methodology of
                  DevOps and Agile. The software development practice involves
                  automation and monitoring at basically every step of
                  development from integration to testing and all the way to
                  releasing and management of it.{" "}
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
        </div>
      </section>

      <section className="d-services d-services1">
        <div className="container">
          <h2>Our Software Development Service</h2>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="service_box Application1 ">
                <h3>Software Designing</h3>
                <p>
                  Modify the look of your site or mobile app with easy
                  customization features of OpenCart.
                </p>
              </div>
              <div className="service_box Application3">
                <h3>Maintenance And Support</h3>
                <p>
                  Equipped with expert professionals, we provide to clients
                  quality support so as to assist them with smooth IT
                  operations.
                </p>
              </div>
              <div className="service_box Application2">
                <h3>Software Product Development </h3>
                <p>
                  When you partner with us, we provide you the facility of
                  opting for software development service in the form of
                  customized software and offshore software development
                  facility.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="service_box Application4">
                <h3>Software Testing</h3>
                <p>
                  {" "}
                  As a top-notch custom software development company, we develop
                  softwares that are tested extensively on stringent parameters.
                  We make sure that we deliver software solutions that are
                  robust, secure and glitch free.
                </p>
              </div>
              <div className="service_box Application5">
                <h3>Software Re-Designing</h3>
                <p>
                  Being one of the best software development companies in India,
                  we not only provide development services, rather we aid
                  clients by assisting them with software product re-designing
                  facility. Experts at our agency help you re-engineer the
                  software so as to enable it to meet changing business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-features">
        <div className="container">
          <h2>Benefits of Working with us</h2>

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
                <h3>Cost effective solutions</h3>
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
                <h3>Faster and time-bound delivery of solutions </h3>
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
                <h3>Minimum risk involved in offshore software development</h3>
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
                <h3>Confidential and highly secure software development</h3>
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
                <h3>Availability of customer support in working hours</h3>
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
                <h3>Adaptability to advanced technologies</h3>
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
                    title="Software development"
                  />
                }
              </div>
              <Link
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
              </Link>
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
      </section>

      <Footer />
    </>
  );
};

export default Page;
