"use client";
import React, { useRef, useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "../../../../public/css/font-awesome.css";
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
    post_url: Domain + "/software-testing-services",
    product_name: "Software testing services",
    post_slug: "/software-testing-services"
  })

  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
    recaptchaerror: "",
  });

  const openModal = () => {
    // console.log(showModal);

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
      <section className="inner-qa-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <h1>
                Software <br />
                Testing Services
              </h1>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="qa-img">
                <Image unoptimized={true}
                  width={300}
                  height={500 / (100 / 100)}
                  src="/img/softwaretestingservices/qa-img.png"
                  alt="QA"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-qa-section" data-aos="fade-up">
        <div className="container">
          <div className="jumbotron">
            <h2>Software Quality Assurance and Testing Services </h2>
            <p>
              Software testing is a quality assurance (QA) process in which we
              analyze a system and its workflow with the intent to find the
              vulnerability of the application/product and also check whether it
              meets the specified project requirements. Every software system or
              app we develop, goes through the process of manual testing, in
              order to identify any gaps, errors, or missing requirements in
              contrary to the actual requirements and this professional practice
              strengthen our client&apos;s confidence in our software
              development services.
            </p>
            <p>
              Quality is the top criteria for any new innovative product or
              service and a valuable aspect for users for its selection. The
              software quality testing services include several software testing
              techniques and methodologies that help to enhance the quality of a
              web & mobile application. Our software testing for web & mobile
              includes various aspects like performance, functional and
              non-functional and security.
            </p>
            <p>
              We at Logicspice provide dedicated QA team & individuals who will
              work exclusively for a client&apos;s project and collaborate with
              the client&apos;s staff.
            </p>
          </div>
        </div>
      </section>

      <section className="testing-qa-section" data-aos="fade-up">
        <div className="container">
          <h2>Types of Software Testing</h2>
          <div className="testin-bx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="tesitng-fild">
                  <div className="testing-top">
                    <i>
                      <Image unoptimized={true}
                       width={50}
                       height={500 / (100 / 100)}
                        src="/img/softwaretestingservices/qa-icon1.png"
                        alt="QA-Icon"
                      />
                    </i>
                    <h3>Manual Testing: </h3>
                  </div>
                  <p>
                    It&apos;s not easy to build a web & mobile application
                    perfectly in the first attempt, it includes a number of
                    development phases and there are strong possibilities of
                    errors. So here the software testing process helps to
                    achieve the &apos;perfect&apos; production quality of
                    software/ product. In this manual testing our QA takes over
                    the role of an end-user and test the whole project workflow
                    process to identify bugs.{" "}
                  </p>
                  <p>
                    There are different stages for manual testing such as unit
                    testing, integration testing, system testing, and user
                    acceptance testing etc.{" "}
                  </p>
                </div>
                <div className="tesitng-fild">
                  <div className="testing-top">
                    <i>
                      <Image unoptimized={true}
                        width={50}
                        height={100}
                        src="/img/softwaretestingservices/qa-icon2.png"
                        alt="QA-Icon"
                      />
                    </i>

                    <h3>Automation Testing</h3>
                  </div>
                  <p>
                    The automation software testing services are designed to
                    increase the efficiency & to reduce manual efforts and
                    costs. With the automation testing its easy to achieve
                    consistent & accurate results in minimum time. This process
                    involves automation of a manual process.{" "}
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="testing-img">
                  <Image unoptimized={true}
                  width={450}
                  height={1500 / (100 / 100)}
                    src="/img/softwaretestingservices/qa-img2.png"
                    alt="testing-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testing-services-section" data-aos="fade-up">
        <div className="container">
          <h2>Software Testing Services To Enhance Customer Experience</h2>
          <div className="testin-sercvies">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="testin-sercvies-bx">
                  <h3>Our Areas of Expertise</h3>
                  <ul className="list-group">
                    <li className="list-group-item">Functional Testing </li>
                    <li className="list-group-item">Compatibility testing </li>
                    <li className="list-group-item">Mobile Testing</li>
                    <li className="list-group-item">Performance Testing </li>
                    <li className="list-group-item">Regression Testing</li>
                    <li className="list-group-item">Cross browser testing </li>
                    <li className="list-group-item">Security Testing </li>
                    <li className="list-group-item">Usability Testing </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="form_quote form_testing">
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
        </div>
      </section>
      <section className="qatesting-services-section" data-aos="fade-up">
        <div className="container">
          <h2>Why Logicspice for QA Testing Services? </h2>
          <p>
            At Logicspice, we offer independent software testing services to
            business, enterprises and startups in various industries. Our
            testing team validates and verify that a software
            program/application/product meets the business and technical
            requirements of the application.{" "}
          </p>
          <ul className="list-group">
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>
                Enhanced user experience with optimum QA strategy
              </span>{" "}
            </li>
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>
                We use creative, smart and effective testing techniques
              </span>{" "}
            </li>
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>10+ Years in providing QA testing services</span>{" "}
            </li>
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>Skilled & knowledgeable QA engineers</span>{" "}
            </li>
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>offshore & on-site testing models</span>{" "}
            </li>
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>Dedicated Team to work exclusively</span>{" "}
            </li>
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>Ensure maximum return on your investments.</span>{" "}
            </li>
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>100% Working Transparency</span>{" "}
            </li>
            <li className="list-group-item">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              <span>Timely delivery at an affordable price</span>{" "}
            </li>
          </ul>
        </div>
      </section>
      <section className="testing-statred-section" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <h2>Let&apos;s Get Started! -</h2>
            </div>
            <div className="col-sm-6 col-md-6">
              <a
                id=""
                data-toggle="modal"
                data-target="#contactFix"
                className="btn btn-primary"
                onClick={toggleModal}
              >
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
            <Image unoptimized={true}
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
