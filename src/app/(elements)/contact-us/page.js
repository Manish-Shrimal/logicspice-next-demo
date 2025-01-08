"use client";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import "../../../../public/css/font-awesome.css";
import "/public/css/font-awesome.css";
import "/public/css/font-awesome.min.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import Image from "next/image";
import "../elements.css";
import "@/app/globals.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Swal from "sweetalert2";

const Page = () => {
  const recaptchaRef = useRef(null);
  const recaptchaNewsletterRef = useRef(null);

  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [isNewsletterRecaptchaVerified, setIsNewsletterRecaptchaVerified] =
    useState(false);

  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",

    message: "",
    product_name: "",
    post_slug: "",
    post_url: "",
    recaptcha_token: "", // Field to hold the reCAPTCHA token
  });
  const [newsletterData, setNewsletterData] = useState({
    newsletter_email: "",
    recaptcha_token: "", // Field to hold the reCAPTCHA tokenphone_no: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
    product_name: "",
    post_slug: "",
    post_url: "",
    newsletter_email: "",
    recaptchaerror: "",
    newsletter_recaptchaerror: "",
  });
  const [isEnquiryRequested, setIsEnquiryRequested] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };

  const handleNewsletterChange = (e) => {
    const { name, value } = e.target;
    setNewsletterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };

  const onRecaptchaChange = (token) => {
    if (token) {
      setIsRecaptchaVerified(true);

      // Save the reCAPTCHA token in the form data
      setFormData((prevData) => ({
        ...prevData,
        recaptcha_token: token,
      }));

      // Clear any previous reCAPTCHA errors
      setFormErrors((prevError) => ({
        ...prevError,
        recaptchaerror: "",
      }));
    } else {
      setIsRecaptchaVerified(false);
    }
  };
  const onNewsletterRecaptchaChange = (token) => {
    if (token) {
      setIsNewsletterRecaptchaVerified(true);

      // Save the reCAPTCHA token in the form data
      setNewsletterData((prevData) => ({
        ...prevData,
        recaptcha_token: token,
      }));

      // Clear any previous reCAPTCHA errors
      setFormErrors((prevError) => ({
        ...prevError,
        newsletter_recaptchaerror: "",
      }));
    } else {
      setIsNewsletterRecaptchaVerified(false);
    }
  };

  const submitEnquiryForm = async (e) => {
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
      setFormErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(BaseAPI + "/pages/enquire", formData);

      if (response.data.status === 200) {
        setIsEnquiryRequested(true);
        setResultSuccess(true);
        setHtml(response.data.message);
        setFormData({
          name: "",
          email: "",

          phone_no: "",
          message: "",
          recaptcha_token: "",
        });

        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else if (response.data.status === 500) {
        // console.log("yaha aaya")
        setFormErrors({
          recaptchaerror: response.data.message,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();

      // Add the expired callback to reset verification status
      recaptchaRef.current.execute(); // Trigger the reCAPTCHA

      recaptchaRef.current.props.onExpired = () => {
        setIsRecaptchaVerified(false); // Reset verification status when reCAPTCHA expires
      };
    }
  }, []);

  useEffect(() => {
    if (recaptchaNewsletterRef.current) {
      recaptchaNewsletterRef.current.reset();

      // Add the expired callback to reset verification status
      recaptchaNewsletterRef.current.execute(); // Trigger the reCAPTCHA

      recaptchaNewsletterRef.current.props.onExpired = () => {
        setIsNewsletterRecaptchaVerified(false); // Reset verification status when reCAPTCHA expires
      };
    }
  }, []);

  const handleNewsletterSubmit = async () => {
    if (newsletterData.newsletter_email === "") {
      setFormErrors({
        newsletter_email: "Please enter your email",
      });
      return;
    }
    if (!isNewsletterRecaptchaVerified) {
      setFormErrors({
        newsletter_recaptchaerror: "Please verify that you are not a robot",
      });
      return;
    }
    try {
      const response = await axios.post(BaseAPI + "/subscribe", {
        email: newsletterData,
      });
      if (response.data.status == 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message,
        });
        setNewsletterData({
          newsletter_email: "",
          recaptcha_token: "",
        });
        if (recaptchaNewsletterRef.current) {
          recaptchaNewsletterRef.current.reset();
        }
      } else {
        Swal.fire({
          icon: "warning",
          title: "",
          text: response.data.message,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <section className="page-contact-new">
        <div className="container">
          <h1>Let&apos;s Connect</h1>
          <div className="contact-top-bg">
            <div className="row">
              <div className="col-sm-12">
                <div className="contact_full_sec_right">
                  <form
                  // action="/contact-us"
                  // enctype="multipart/form-data"
                  // name="contactUs"
                  // id="contactUs"
                  // method="post"
                  // acceptCharset="utf-8"
                  // noValidate="novalidate"
                  >
                    <div style={{ display: "none" }}>
                      <input type="hidden" name="_method" value="POST" />
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span>
                            {/* <i className="fa fa-user-o" aria-hidden="true"></i> */}
                            {/* <i className="fa-regular fa-user" aria-hidden="true"></i> */}
                            {/* <i className="fa fa-user"></i> */}
                            {/* <PersonIcon /> */}
                            <i class="fa fa-user-o" aria-hidden="true"></i>
                          </span>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            className={`form-control ${
                              formErrors.name ? "fieldRequired" : ""
                            }`}
                            style={{ height: "40px" }}
                            placeholder="Your Name *"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span>
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                          </span>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            className={`form-control ${
                              formErrors.email ? "fieldRequired" : ""
                            }`}
                            placeholder="Your Email *"
                            style={{ height: "40px" }}
                            id="UserEmail"
                            aria-describedby="inputGroupPrepend"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span>
                            <i class="fa fa-phone" aria-hidden="true"></i>
                          </span>
                          <input
                            name="phone_no"
                            placeholder="Phone/Whatsapp Number"
                            value={formData.phone_no}
                            size="40"
                            className={`form-control ${
                              formErrors.phone_no ? "fieldRequired" : ""
                            }`}
                            type="text"
                            style={{ height: "40px" }}
                            id="UserPhoneNo"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="textarea-field">
                        <i class="fa fa-file-text-o" aria-hidden="true"></i>
                      </span>
                      <textarea
                        value={formData.message}
                        name="message"
                        placeholder="Your Message *"
                        className={`required form-control ${
                          formErrors.message ? "fieldRequired" : ""
                        }`}
                        size="50"
                        rows="40"
                        style={{ height: "100px" }} // Explicitly set the height
                        // noResize="1"
                        id="UserMessage"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <ReCAPTCHA
                            key={recaptchaKey}
                            sitekey={recaptchaKey}
                            onChange={onRecaptchaChange}
                          />
                          <div className="gcpc FormError" id="captcha_msg">
                            {formErrors.recaptchaerror}
                          </div>

                          <div
                            id="recaptcha1"
                            style={{
                              transform: "scale(1)",
                              transformOrigin: "left top",
                            }}
                          >
                            <div style={{ width: "304px", height: "78px" }}>
                              <div></div>
                            </div>
                            <iframe style={{ display: "none" }}></iframe>
                          </div>
                          <div className="form_contactinput_row">
                            <div
                              id="captcha_msg_contact"
                              className="cp_error"
                            ></div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div
                            className="display_success_message"
                            id="contact_success_message"
                            style={{ display: "none" }}
                          ></div>
                          <div
                            className="display_error_message"
                            id="contact_error_message"
                            style={{ display: "none" }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group newcontact-btn">
                          <button
                            title="Submit"
                            className="btn btn-primary"
                            size="30"
                            label=""
                            type="submit"
                            // value="Send"
                            onClick={submitEnquiryForm}
                          >
                            SEND
                          </button>
                        </div>
                      </div>
                      <div className="cart-icons"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="gest-contact-bx">
            <h2 className="SubscribeHadding">Subscribe to our newsletter</h2>
            <div className="SubscribeNews">
              <div className="form-group">
                <div className="SubscribeInput">
                  <span>
                    <DraftsOutlinedIcon />{" "}
                  </span>
                  <input
                    name="newsletter_email"
                    placeholder="Enter your email address"
                    value={newsletterData.newsletter_email}
                    size="40"
                    className={`form-control ${
                      formErrors.newsletter_email ? "fieldRequired" : ""
                    }`}
                    type="text"
                    style={{ height: "40px" }}
                    id="UserPhoneNo"
                    onChange={handleNewsletterChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="SubscribeInput">
                  <ReCAPTCHA
                    key={recaptchaKey}
                    sitekey={recaptchaKey}
                    onChange={onNewsletterRecaptchaChange}
                  />
                  <div className="gcpc FormError" id="captcha_msg">
                    {formErrors.newsletter_recaptchaerror}
                  </div>
                </div>
              </div>
              <div className="form-group newcontact-btn">
                <button
                  title="Subscribe"
                  className="btn btn-primary"
                  size="30"
                  label=""
                  type="submit"
                  onClick={handleNewsletterSubmit}
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6"></div>
            </div>
            <div className="row">
              <div className="col-sm-6"></div>
              <div className="col-sm-6"></div>
              <div className="cart-icons"></div>
            </div>
          </div>
          <div className="gest-contact-bx">
            {/* <i className="fa fa-envelope-open-o"></i> */}
            <DraftsOutlinedIcon />
            <p>
              Email at{" "}
              <a href="mailto:info@logicspice.com">info@logicspice.com</a> for
              information on{" "}
              <a
                href="https://www.logicspice.com/submit-guest-post"
                target="_blank"
              >
                Guest Posting
              </a>
              .
            </p>
          </div>
          <div className="google-reting-review">
            <div className="row">
              <div className="col-sm-6">
                <div className="ls-google-swction">
                  <div className="ls-google-img">
                    <Image
                      width={100}
                      height={100}
                      src="/img/contactus/google-reting.png"
                      alt="logo"
                    />
                  </div>
                  <p>
                    &quot;Considering all the adjustments we asked for, the
                    patience they showed, extremely swift turnaround times, good
                    value for money and quality of work, they have shown to be a
                    great partner.?
                  </p>
                  <div className="client-star">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="client-name">Rogier van Erkel</div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="ls-google-swction">
                  <div className="ls-google-img">
                    <Image
                      width={100}
                      height={100}
                      src="/img/contactus/google-reting.png"
                      alt="logo"
                    />
                  </div>
                  <p>
                    &quot;Love to work with LogicSpice Team. They understood the
                    requirements and delivered exactly that. If you want
                    literally the best software house going...then hire these
                    guys honestly. Highly recommended.?
                  </p>
                  <div className="client-star">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="client-name">Smith Jhon</div>
                </div>
              </div>
            </div>
          </div>
          <div className="awards_recognition">
            <h2>Awards & Recognition</h2>
            <div className="awards_recognition_contact">
              <div className="row">
                <div className="col-sm-3">
                  <div className="awards_recognition_img">
                    <Image
                      width={300}
                      height={100 / (100 / 100)}
                      src="/img/contactus/award_1.png"
                      alt=""
                      title="award"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="awards_recognition_img">
                    <Image
                      width={300}
                      height={100 / (100 / 100)}
                      src="/img/contactus/award_2.png"
                      alt=""
                      title="award"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="awards_recognition_img">
                    <Image
                      width={300}
                      height={100 / (100 / 100)}
                      src="/img/contactus/award_3.png"
                      alt=""
                      title="award"
                    />
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="awards_recognition_img">
                    <Image
                      width={300}
                      height={100 / (100 / 100)}
                      src="/img/contactus/award_4.png"
                      alt=""
                      title="award"
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content_area Page-contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="contact_full_sec_left">
                <div className="contact_detail_info_row">
                  <div className="media">
                    <div className="media-left">
                      <div className="contact_detail_info_row_icn">
                        <Image
                          width={100}
                          height={100}
                          src="/img/contactus/ingland_flag.png"
                          alt="USA Contact No. - Logicspice"
                          unoptimized={true}
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div className="contact_detail_info_row_det">
                        <h2 className="title_subs">USA</h2>
                        <div className="row_of_cont_d">
                          <label>Phone:</label> +1-616-929-4064
                        </div>
                        <div className="row_of_cont_d">
                          <label>Email:</label>
                          <div className="contact_image">
                            <Image
                              width={100}
                              height={50}
                              src="/img/contactus/log_com.png"
                              alt="UK Contact No. - Logicspice"
                              unoptimized={true}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_detail_info_row">
                  <div className="media">
                    <div className="media-left">
                      <div className="contact_detail_info_row_icn">
                        <Image
                          width={100}
                          height={100}
                          src="/img/contactus/falg_2.png"
                          alt="India Contact No. - Logicspice"
                          unoptimized={true}
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div className="contact_detail_info_row_det">
                        <h3 className="title_subs">UK</h3>
                        <div className="row_of_cont_d">Logicspice Ltd</div>
                        <div className="row_of_cont_d">
                          1 Lyric Square Hammersmith London W6 0NB
                        </div>
                        <div className="row_of_cont_d">
                          <label>Phone:</label> +44 7880654811
                        </div>
                        <div className="row_of_cont_d">
                          <label>Email:</label>
                          <Image
                            width={100}
                            height={100}
                            src="/img/contactus/log_co_uk.png"
                            alt="UK Contact No. - Logicspice"
                            unoptimized={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_detail_info_row">
                  <div className="media">
                    <div className="media-left">
                      <div className="contact_detail_info_row_icn">
                        <Image
                          width={100}
                          height={100}
                          src="/img/contactus/india_flag.png"
                          alt="India Contact No. - Logicspice"
                          unoptimized={true}
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div className="contact_detail_info_row_det">
                        <h4 className="title_subs">India</h4>
                        <div className="row_of_cont_d">
                          <label>Development Center</label>
                        </div>
                        <div className="row_of_cont_d">
                          Logicspice Consultancy Pvt Ltd
                        </div>
                        <div className="row_of_cont_da">
                          <label>Jaipur:</label> 506-507, Manglam&apos;s JAIPUR
                          ELECTRONIC MARKET, Opposite Petrol Pump, Mansarovar
                          Link Road, near Riddhi Siddhi, Gopalpura by pass,
                          Jaipur, Rajasthan PIN - 302018
                        </div>
                        <div className="row_of_cont_da">
                          <label>Pune:</label> 705, White Square, Wakad Road,
                          Hinjawadi Pune, Maharashtra- 411057
                        </div>

                        <div className="row_of_cont_d">
                          <label>Phone:</label> +91-7727974242
                        </div>
                        <div className="row_of_cont_d">
                          <label>Email:</label>
                          <Image
                            width={100}
                            height={100}
                            src="/img/contactus/log_com.png"
                            alt="Contact - Logicspice"
                            unoptimized={true}
                          />
                        </div>
                        <div className="row_of_cont_d">
                          <label>HR Email:</label>
                          <Image
                            width={100}
                            height={100}
                            src="/img/contactus/hr_logicspice_14.png"
                            alt="Contact - Logicspice"
                            unoptimized={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="awd_img">
                <Image
                  width={550}
                  height={100 / (100 / 100)}
                  src="/img/contactus/expri_img.png"
                  alt="Logicspice"
                  unoptimized={true}
                />
              </div>
              <div className="awards_link">
                <ul>
                  <li>Established in 2006</li>
                  <li>Vast Infrastructure</li>
                  <li>50+ experienced Full time Professionals</li>
                  <li>Major focus on Australia, US, Canada and UK</li>
                  <li>70% Repeat Client ratio</li>
                </ul>
                <ul>
                  <li>Expertise in handling Large Complex Projects</li>
                  <li>We are in top 10 on Freelancer</li>
                  <li>Unlimited Remote and Onsite Support</li>
                  <li>Complete IT Management Services</li>
                  <li>Qualified &amp; Skiled IT Professionals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="client-side">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-xs-6">
              <i className="cs_icon cs_icon1"></i>
              <div className="number-client">1286</div>
              <p>Satisfied Clients</p>
            </div>
            <div className="col-sm-3 col-xs-6">
              <i className="cs_icon cs_icon2"></i>
              <div className="number-client">1844</div>
              <p>Projects</p>
            </div>
            <div className="col-sm-3 col-xs-6">
              <i className="cs_icon cs_icon3"></i>
              <div className="number-client">327</div>
              <p>Mobile Apps</p>
            </div>
            <div className="col-sm-3 col-xs-6">
              <i className="cs_icon cs_icon4"></i>
              <div className="number-client">1082</div>
              <p>Likes</p>
            </div>
          </div>
        </div>
      </section>
      <section className="logicspicefriendly">
        <div className="container">
          <div className="logicspicefriendbg">
            <div className="row">
              <div className="col-sm-4">
                <div className="logic-fd">
                  <i className="fa fa-file-text" aria-hidden="true"></i>

                  <span>
                    Brief us Your Digital Needs @<br />
                    info@logicspice.com
                  </span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="logic-fd">
                  <i className="fa fa-handshake-o" aria-hidden="true"></i>
                  <span>
                    Be a Part of Logicspice Family
                    <br />
                    hr@logicspice.com
                  </span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="logic-fd">
                  {/* <i className="fa fa-skype" aria-hidden="true"></i> */}
                  <i className="fa fa-skype"></i>
                  <span>
                    Don&apos;t Have Much Time?
                    <br />
                    Connect to us on Skype: logicspice
                  </span>
                </div>
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
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              height={50}
              width={50}
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
