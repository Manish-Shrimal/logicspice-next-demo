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
import Contactusmodel from "@/app/Components/Contactusmodel";

const Page = () => {
  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";
  const recaptchaRef = useRef(null);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {

    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone_no: "",
    message: "",
    post_url: Domain + "/responsive-web-design",
    product_name: "Responsive web design",
    post_slug: "/responsive-web-design"
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

      <div className="responsiveWebDesign">
      <section className="d-framework d-framework1 none_space">
        <div className="page_img">
          <Image unoptimized={true}
            width={1500}
            height={100 / (100 / 100)}
            src="/img/responsivewebdesign/responsive-design.jpg"
            alt="Responsive web design"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-8">
              <h1 className="main--title" style={{fontSize : "36px"}}>Responsive Web Design Company</h1>
              <p>
                Responsive Web Design Services tunes the layout in a way that
                all the relevant information and graphics are in direct view. It
                tweaks the layout so that the user is at ease while navigating
                and reading through the page with reduced effort usually
                involved in resizing&sbquo; scrolling and panning.
              </p>

              <h2>Responsive Website Development</h2>
              <p>
                Logicspice offers the exceptional Responsive Website Design
                services that are going to allure customers at an exponential
                level. Responsive web development services will make your page
                interactive and comprehensively easy to use.
              </p>
              <p>
                We make sure that our clients are getting the best which there
                is to offer. Our designs&sbquo; layouts&sbquo; and themes have
                been chosen carefully after an immense amount of scrutiny.
                Fluidity and dynamicity are one of the main ingredients you will
                find in our developed pages.{" "}
                <Link href="/website-design" target="_blank">
                  Websites designed{" "}
                </Link>
                by responsive web page development team is intuitive and
                adaptable. They learn how to resize and its layout along with
                the content according to the device on which they are running.
              </p>

              <p>
                {" "}
                Logicspice believes in delivering an optimized performance after
                the service is ended. You can always troubleshoot the
                performance via our customer care and support maintenance staff.
                Our web developers have made it easier to migrate through
                different devices with the help of{" "}
                <b>Mobile Responsive Design and Mobile Responsive Websites</b>.
                These websites improvise and revamp themselves according to the
                device whether it be an iPhone&sbquo; iPad or an Android running
                device. No matter how intricate and comprehensive the site
                is&sbquo; we make sure its simplicity and beauty is maintained
                through the different devices.
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
          <h2>Responsive Web Development Services </h2>
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="service_box Application2">
                <h3>Self intuitive User Interface</h3>
                <p>
                  We make sure that the layout is interactive and intelligent so
                  that it keeps the customer attached and occupied.
                </p>
              </div>
              <div className="service_box Application1 ">
                <h3>Responsive to all devices</h3>
                <p>
                  Pages and sites developed through our services revamp and
                  resize themselves to suit the screen size they are being used
                  on.
                </p>
              </div>

              <div className="service_box Application3">
                <h3>Cross Browser capabilities</h3>
                <p>
                  We design a page that can hold itself from the bugs and faults
                  while it is being used over different web browsers on same or
                  separate devices.
                </p>
              </div>
              <div className="service_box Application2">
                <h3>Fluidity of Operations</h3>
                <p>
                  We make sure that the cross platform and cross browser usage
                  of the website does not make it lose its fluidity and
                  simplicity.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="service_box Application4">
                <h3>Speedy Functionality</h3>
                <p>
                  Speed and performance are one the foremost concerns for our
                  developers while designing a website.
                </p>
              </div>

              <div className="service_box Application5">
                <h3>Distinct Artworks and Graphic Works</h3>
                <p>
                  We offer our clients with an arena within its own workspace to
                  provide with innovative and fresh ideas that can be used on
                  the web sites to suit the requirements.
                </p>
              </div>
              <div className="service_box Application6">
                <h3>Multiple Devices Adaptability</h3>
                <p>
                  Our websites are proficient in adapting themselves according
                  to the device&apos;s need whether it be an iOS or an Android
                  featuring platform.
                </p>
              </div>
              <div className="service_box Application4">
                <h3>Customizable Website Designs</h3>
                <p>
                  We not only offer the best of the designs and layouts but also
                  make sure that there is enough room for the creativity of our
                  clients so that they can express their own ideas through their
                  web pages by customizing them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-features">
        <div className="container">
          <h2>Why Go for Responsive Web Design?</h2>
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/responsivewebdesign/lara_icon5.png"
                  alt="icon1"
                />
                <h3>Reduced Loading Time</h3>
                <p>The loading time period is really less. </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/responsivewebdesign/lara_icon1.png"
                  alt="icon2"
                />
                <h3>Mobile and Responsive Design</h3>
                <p>The design are mobile friendly.</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/responsivewebdesign/lara_icon2.png"
                  alt="icon3"
                />
                <h3>Search Engine Friendly</h3>
                <p>
                  They are crafted in such a way that they get really SEO
                  friendly.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/responsivewebdesign/lara_icon4.png"
                  alt="icon4"
                />
                <h3>Screen Adjustability</h3>
                <p>Screen can be smoothly adjusted&sbquo; as per your needs.</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/responsivewebdesign/lara_icon3.png"
                  alt="icon5"
                />
                <h3>Multiple Platform Access</h3>
                <p>
                  The responsive website gives access to multiple platforms.{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="featureBox">
                <Image unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/responsivewebdesign/lara_icon6.png"
                  alt="icon6"
                />
                <h3>Time Saving</h3>
                <p>
                  Responsive web design service offered by us reduce the
                  development time and cost. You can optimize your business
                  through a single website on various screens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="d-choose">
        <div className="container">
          <h2>Why Choose Logicspice for Responsive Web Design Services ?</h2>

          <div className="row">
            <div className="col-sm-6 col-md-6 text-right">
              <div className="libraries" data-aos="fade-right">
                <p>
                  We have a team of experienced & expert developers and
                  programmers.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6">
              <div className="libraries" data-aos="fade-left">
                <p>
                  Our clients are fully satisfied with our responsive web design
                  services.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 text-right">
              <div className="libraries" data-aos="fade-right">
                <p>We are having 12+ years experience in the same industry.</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6">
              <div className="libraries" data-aos="fade-left">
                <p>
                  We work with productivity&sbquo; efficiency&sbquo; save time &
                  cost and deliver quality work.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6  text-right">
              <div className="libraries" data-aos="fade-right">
                <p>
                  Our motto is always satisfy our client 100% with our softwares
                  and services.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-6">
              <div className="libraries" data-aos="fade-left">
                <p>
                  Our team has worked for the various industries i.e.
                  education&sbquo; medical&sbquo; entertainment and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <Link
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image unoptimized={true}
              width={100}
              height={100}
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
            />
          </Link>
        </div>
        <div className="quote_pop_plus quote_pop_in" onClick={toggleModal}>
          <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
        </div>
      </section>
      </div>

      <Footer />
    </>
  );
};

export default Page;
