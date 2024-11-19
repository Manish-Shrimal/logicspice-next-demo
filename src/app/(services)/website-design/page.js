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
    post_slug: "/website-design"
  })

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

<div className="websiteDesign"><section className="d-framework d-framework1 none_space">
        <div className="page_img">
          <Image unoptimized={true}
            width={1000}
            height={100 / (500 / 500)}
            src="/img/websitedesign/web-designing-service.jpg"
            alt="web design service"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-8">
              <h1 className="main--title" style={{fontSize: "36px"}}>Website Design Services</h1>
              <p>
                Web Design Company caters to enterprises and managements with
                cost effective and professional personalized web designing
                services. The custom web designing services will propel your
                business towards new directions.{" "}
              </p>
              <p>
                Logicspice is one of the most preferred service providers for IT
                solutions. We have a record of serving to more than 1286 clients
                and furnished them with more than 1844 successful projects
                globally. We have more than 50 experts who have specialized in
                constructing and programming websites with insightful designs
                that are both alluring and comprehensive.
              </p>

              <h2>Professional Website Designing</h2>

              <p>
                If you are searching for a trustworthy web designing company
                then Logicspice will make your dreams come true. It has been
                accredited with accomplishments in over 15 countries around the
                globe. An enterprise requires a functional and an exceptional
                web design when its business depends on one. Our website
                designing services&sbquo;{" "}
                <Link
                  href="/website-redesign"
                  target="_blank"
                  className="WebsiteTxtLink"
                >
                  website redesign service
                </Link>{" "}
                will give you just that at affordable prices. Our clients have
                been reported to comment on our services with 100% satisfaction
                and genuine procurements.
              </p>
              <p>
                {" "}
                At Logicspice&sbquo; we believe in the ethos which supports the
                cause of our clients. Our developers are professional and
                brilliant in their respective fields of work. They make sure
                that the client does not have to make any extra effort. Our
                services are constantly under supervision and improvisation in
                order to satisfy the dynamic needs of our clients. We provide{" "}
                <b>web design service</b> which is quite distinct from any other
                IT solution provider.
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
          <h2>Web Design Services </h2>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="service_box Application1 ">
                <h3>Static Website Design</h3>
                <p>
                  {" "}
                  We offer static website design services which is
                  interactive&sbquo; appealing and creative. These websites load
                  faster and launch at a quick rate.
                </p>
              </div>
              <div className="service_box Application2">
                <h3>Graphic Designs</h3>
                <p>
                  Image speaks louder than words. Our graphic designs get
                  attention and define business in best possible way.
                </p>
              </div>
              <div className="service_box Application3">
                <h3>Responsive Web Designs</h3>
                <p>
                  We make the website effective and easy to use on any device.
                  Our web designers migrate a mobile enable website into mobile
                  responsive website.
                </p>
              </div>
              <div className="service_box Application1 ">
                <h3>Web Portal Designs</h3>
                <p>
                  Our web portal design differ with the kind of business. We
                  include all the essential features while developing web portal
                  for your business.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="service_box Application4">
                <h3>Dynamic Website Designs</h3>
                <p>
                  We offer dynamic website with easy and fast database. Our
                  developers create dynamic website with advance concept which
                  can help your business to succeed.
                </p>
              </div>
              <div className="service_box Application5">
                <h3>Custom Web Design Company</h3>
                <p>
                  Our developers are aware of our principles and hence are able
                  to render custom designs for every client as per their
                  instructions and choices.
                </p>
              </div>
              <div className="service_box Application6">
                <h3>Corporate Website Design</h3>
                <p>
                  Extremely sensitive and specific demands of corporate
                  enterprises are also fulfilled by our website designing
                  services.
                </p>
              </div>
              <div className="service_box Application4">
                <h3>Template Designing</h3>
                <p>
                  Our template design services focus on the client details and
                  customized it to meet requirement of business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-features">
        <div className="container">
          <h2>Our Web Design Process</h2>

          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/websitedesign/lara_icon1.png"
                  alt="icon1"
                />
                <h3>Strategy </h3>
                <p>
                  Our major concern is to identify your goal for integrating
                  successful web design strategy.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/websitedesign/lara_icon6.png"
                  alt="icon2"
                />
                <h3>Create Wireframes</h3>
                <p>
                  After gathering all the required information we design sketch
                  and get the content written.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/websitedesign/lara_icon5.png"
                  alt="icon3"
                />
                <h3>Create Mockup</h3>
                <p>
                  We create complete home page mockup with images&sbquo; content
                  & elements.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/websitedesign/lara_icon4.png"
                  alt="icon4"
                />
                <h3>Presentation</h3>
                <p>
                  We present our home page mockup with complete explanation &
                  concept.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/websitedesign/lara_icon3.png"
                  alt="icon5"
                />
                <h3>Support</h3>
                <p>
                  We do the required changes in the mock up if you ask us to do
                  so.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/websitedesign/lara_icon2.png"
                  alt="icon6"
                />
                <h3>Approval</h3>
                <p>
                  After your approval&sbquo; we proceed to the next step which
                  is web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-choose">
        <div className="container">
          <h2>Why Choose Logicspice for Web Designing Service?</h2>

          <div className="row">
            <div className="col-sm-6 col-md-6 text-right">
              <div className="libraries" data-aos="fade-right">
                <h3>One Stop Solution</h3>
                <p>
                  We offer complete design & development solution along with the
                  business strategy&sbquo; all under one roof.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6">
              <div className="libraries" data-aos="fade-left">
                <h3>Support & Maintenance</h3>
                <p>
                  You can contact with us in our working hours for any
                  query&sbquo; we are ready to serve you.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 text-right">
              <div className="libraries" data-aos="fade-right">
                <h3>Experience in same industry</h3>
                <p>
                  We have been working in the same industry for 12+ years and
                  have a better understanding and approach for work.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6">
              <div className="libraries" data-aos="fade-left">
                <h3>Minimum Loading Time</h3>
                <p>
                  While designing website&sbquo; we try to minimize loading time
                  as much as possible for richer user experience.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6  text-right">
              <div className="libraries" data-aos="fade-right">
                <h3>After sales support</h3>
                <p>
                  We offer 1 month free support after delivering project to you.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6">
              <div className="libraries" data-aos="fade-left">
                <h3>SEO Friendly Websites</h3>
                <p>
                  Our developed websites are seo optimized so it can rank better
                  in google.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6  text-right">
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
      </div></div>
      

      <Footer />
    </>
  );
};

export default Page;
