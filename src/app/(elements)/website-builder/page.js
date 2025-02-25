"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import ReCAPTCHA from "react-google-recaptcha";
import "../elements.css";
import Image from "next/image";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Link from "next/link";
import "../../../../public/css/font-awesome.css";
import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";
import "@/app/(softwares)/softwares.css";

const Page = () => {
    const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";
    const [showMore, setShowMore] = useState(false);
  const [demoAccessModal, setDemoAccessModal] = useState(false);
  const openDemoAccessModal = () => {
    // console.log(showModal);

    setDemoAccessModal(!demoAccessModal);
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
  return (
    <>
      <Navbar />
      <section class="web_build_head">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h1>Get a free estimate for your new website </h1>
              <div
                className="btn btn-primary"
                onClick={openDemoAccessModal}
                style={{ textAlign: "center" }}
              >
                <a>Enquire Now</a>
                {
                  //     <SoftwareEnquiry
                  //       modalStatus={showModal}
                  //       toggle={openModal}
                  //       title="Please fill the form below and get access to the live demo of Appointment Booking PHP Script
                  // .See how it work yourself!"
                  //     />

                  <Enquirymodal
                    modalStatus={demoAccessModal}
                    toggle={openDemoAccessModal}
                    title="Grocery Store & Delivery Script"
                  />
                }
              </div>
              {/* <a class="btn btn-primary" data-toggle="modal" data-target="#popup_sc_product" onclick="$(&quot;#update_frm&quot;).html(&quot;Grocery Store &amp; Delivery Script&quot;);
                        $(&quot;#contact_fr&quot;).val(&quot;Grocery Store &amp; Delivery Script&quot;);
                   " id="buy_now_1">Enquire Now</a> */}
              <p>
                Convert your new business idea into digital form with
                logicspice. We provide you the best design, features and support
                that you need to bring your idea into life.{" "}
              </p>
            </div>
            <div class="col-md-8" align="right">
              {/* <img
                alt="Create Own Website - Logicspice"
                src="/img/web_builder/feat_web.png"
              /> */}
              <Image
                          unoptimized={true}
                          src="/img/web_builder/feat_web.png"
                          alt=""
                          width={650}
                          height={100 / (100 /100)}
                        />
            </div>
          </div>
        </div>
      </section>
      <section class="web_build_step">
        <div class="container">
          <h2>Your next big idea starts here </h2>
          <div class="web_build_txt">
            Do you want to expand your business and activities beyond just an
            online presence? We at logicspice serve you with the best affordable
            and economical website &amp; mobile app development packages to get
            your website developed in your budget. Share your business
            requirements by filling our questionnaire form to get a proper
            estimated development cost for free.
          </div>
        </div>
      </section>
      {/* <section class="web_build_question_section">
        <div class="container">
          <h2>Questionnaire Form</h2>
          <form
            action="/website-builder"
            id="questionForm"
            enctype="multipart/form-data"
            method="post"
            accept-charset="utf-8"
            novalidate="novalidate"
          >
            <div style={{ display: "none" }}>
              <input type="hidden" name="_method" value="POST" />
            </div>{" "}
            <div class="web_build_questions">
              <div class="web_build_questions_bx">
                <div class="ersu_message"> </div>
                <div class="form-group">
                  <label class="" for="textinput">
                    1.Company Tag Line or slogan:
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question1]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion1"
                    ></textarea>{" "}
                  </div>
                </div>
                <div class="form-group">
                  <label class="" for="textinput">
                    2.Do you have any corporate identity (logo)? If yes, please
                    send us.
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question2]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion2"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label class="" for="textinput">
                    3.What would be the domain name of the website/application ?
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question3]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion3"
                    ></textarea>{" "}
                  </div>
                </div>
                <div class="form-group">
                  <label class="" for="textinput">
                    4.How many number of pages you want on this website ?
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question4]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion4"
                    ></textarea>{" "}
                  </div>
                </div>
                <div class="more-details" style={{ display: "none" }}>
                  <div class="more-btns">More Questions</div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    5.Company Address:
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question5]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion5"
                    ></textarea>{" "}
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    6.Do you have a corporate visual identity (a customized (non
                    stock) logo and color scheme carried out throughout your
                    office, stationery, business cards, etc.)?
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question6]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion6"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    7.What is the nature of your business? Briefly describe your
                    products or services:
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question7]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion7"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    8.Who is your target market? Who are you hoping to reach
                    with your site?
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question8]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion8"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    9.What type of look are you trying to achieve? (e.g. clean,
                    high-tech, conservative, warm, flashy, etc.)
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question9]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion9"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    10.Please list at least 3 URLs (web addresses) of high
                    quality sites that you like the look of (these do not have
                    to be sites who’s business is similar to yours. It aids us
                    in determining what your design style is.) Please consider
                    layout, colors, navigation, graphics, and typography:
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question10]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion10"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    11.Personal email and phone no.{" "}
                    <span class="require">*</span>
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question11]"
                      class="form-control required"
                      autocomplete="off"
                      id="QuestionQuestion11"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    12.Skype details and any other IM.{" "}
                    <span class="require">*</span>
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question12]"
                      class="form-control required"
                      autocomplete="off"
                      id="QuestionQuestion12"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    13.Have you already registered domain for your website?
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question13]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion13"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    14.Do you want us to host your website and email ? (yes
                    /no): <span class="require">*</span>
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question14]"
                      class="form-control required"
                      autocomplete="off"
                      id="QuestionQuestion14"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    15.If you already have a shared host and or domain manager.
                    Please provide website, and login detail of hosting/domain
                    account [warning note we cannot guarantee security against
                    hacks on shared hosts we do not manage]:{" "}
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question15]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion15"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    16.List the major sections/product/service categories
                    (navigation) that you would like to have in your site:
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question16]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion16"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    17.Do you have any images for use in the design of your
                    site? If not, do you have images, can you offer suggestions
                    of what you type of imagery you feel would be most suitable
                    for your website:
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question17]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion17"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    18.How does your business and products benefit your target
                    audience? Please specify a clear list of bullet items of
                    benefits. What can your business offer your visitors, what's
                    in it for them, how can you help them? What problems do your
                    prospects have that your business solves?
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question18]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion18"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    19.What are the needs your business satisfies for your
                    customers? What words or images will impart those needs? It
                    is important to paint a mental picture for customers using
                    words, colors and images. What analogies can be used to
                    explain offers in simple, understandable terms.
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question19]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion19"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    20.Please describe your organization in a few sentences.
                    Since this answer will be something like an elevator speech,
                    it could be incorporated into the home page copy.
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question20]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion20"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    21.What is there about you and your background that sets you
                    apart for a special (niche) group of potential customers?{" "}
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question21]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion21"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    22.Please describe your potential customers. Pay special
                    attention to their income, interests, gender, age, even type
                    of computer they use, e.g., old with dialup account or newer
                    with broadband. If your website is a business-to-business
                    site, what sort of companies are you hoping to attract?
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question22]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion22"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    23.Who are the decision makers on this project? What is the
                    turnaround time for making a decision?{" "}
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question23]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion23"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    24.Have you researched your online competition so you have
                    an idea of what you do and don’t want on your site?{" "}
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question24]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion24"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    25.Where is the website content coming from? Who’s
                    responsible for updating it? Is it ready for use on your
                    website?
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question25]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion25"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    26.Other than what search engines will produce, what methods
                    do you have in mind to spread the word about your website?
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question26]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion26"
                    ></textarea>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-get hide-column">
              <input class="btn btn-primary" type="submit" value="Submit" />{" "}
            </div>
          </form>{" "}
        </div>
      </section> */}
       <section className="web_build_question_section">
      <div className="container">
        <h2>Questionnaire Form</h2>
        <form action="/website-builder" id="questionForm" enctype="multipart/form-data" method="post" acceptCharset="utf-8" noValidate>
          <input type="hidden" name="_method" value="POST" />
          <div className="web_build_questions">
            <div className="web_build_questions_bx">
              <div className="ersu_message"></div>
              
              {/* Initial Questions */}
              <div className="form-group">
                <label htmlFor="QuestionQuestion1">1. Company Tag Line or slogan:</label>
                <textarea name="data[Question][question1]" className="form-control" autoComplete="off" id="QuestionQuestion1"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="QuestionQuestion2">2. Do you have any corporate identity (logo)? If yes, please send us.</label>
                <textarea name="data[Question][question2]" className="form-control" autoComplete="off" id="QuestionQuestion2"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="QuestionQuestion3">3. What would be the domain name of the website/application?</label>
                <textarea name="data[Question][question3]" className="form-control" autoComplete="off" id="QuestionQuestion3"></textarea>
              </div>
              
              {/* More Questions Button */}
              {!showMore && (
                <div className="more-details">
                  <button type="button" className="more-btns" onClick={() => setShowMore(true)}>More Questions</button>
                </div>
              )}
              
              {/* Hidden Questions */}
              {showMore && (
                <>
                  <div className="form-group">
                    <label htmlFor="QuestionQuestion4">4. How many pages do you want on this website?</label>
                    <textarea name="data[Question][question4]" className="form-control" autoComplete="off" id="QuestionQuestion4"></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="QuestionQuestion5">5. Company Address:</label>
                    <textarea name="data[Question][question5]" className="form-control" autoComplete="off" id="QuestionQuestion5"></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="QuestionQuestion6">6. Do you have a corporate visual identity?</label>
                    <textarea name="data[Question][question6]" className="form-control" autoComplete="off" id="QuestionQuestion6"></textarea>
                  </div>
                  <div class="form-group hide-column">
                  <label class="" for="textinput">
                    7.What is the nature of your business? Briefly describe your
                    products or services:
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question7]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion7"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    8.Who is your target market? Who are you hoping to reach
                    with your site?
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question8]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion8"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    9.What type of look are you trying to achieve? (e.g. clean,
                    high-tech, conservative, warm, flashy, etc.)
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question9]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion9"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    10.Please list at least 3 URLs (web addresses) of high
                    quality sites that you like the look of (these do not have
                    to be sites who’s business is similar to yours. It aids us
                    in determining what your design style is.) Please consider
                    layout, colors, navigation, graphics, and typography:
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question10]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion10"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    11.Personal email and phone no.{" "}
                    <span class="require">*</span>
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question11]"
                      class="form-control required"
                      autocomplete="off"
                      id="QuestionQuestion11"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    12.Skype details and any other IM.{" "}
                    <span class="require">*</span>
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question12]"
                      class="form-control required"
                      autocomplete="off"
                      id="QuestionQuestion12"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    13.Have you already registered domain for your website?
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question13]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion13"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    14.Do you want us to host your website and email ? (yes
                    /no): <span class="require">*</span>
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question14]"
                      class="form-control required"
                      autocomplete="off"
                      id="QuestionQuestion14"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    15.If you already have a shared host and or domain manager.
                    Please provide website, and login detail of hosting/domain
                    account [warning note we cannot guarantee security against
                    hacks on shared hosts we do not manage]:{" "}
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question15]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion15"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    16.List the major sections/product/service categories
                    (navigation) that you would like to have in your site:
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question16]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion16"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    17.Do you have any images for use in the design of your
                    site? If not, do you have images, can you offer suggestions
                    of what you type of imagery you feel would be most suitable
                    for your website:
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question17]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion17"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    18.How does your business and products benefit your target
                    audience? Please specify a clear list of bullet items of
                    benefits. What can your business offer your visitors, what's
                    in it for them, how can you help them? What problems do your
                    prospects have that your business solves?
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question18]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion18"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    19.What are the needs your business satisfies for your
                    customers? What words or images will impart those needs? It
                    is important to paint a mental picture for customers using
                    words, colors and images. What analogies can be used to
                    explain offers in simple, understandable terms.
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question19]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion19"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    20.Please describe your organization in a few sentences.
                    Since this answer will be something like an elevator speech,
                    it could be incorporated into the home page copy.
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question20]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion20"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    21.What is there about you and your background that sets you
                    apart for a special (niche) group of potential customers?{" "}
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question21]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion21"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    22.Please describe your potential customers. Pay special
                    attention to their income, interests, gender, age, even type
                    of computer they use, e.g., old with dialup account or newer
                    with broadband. If your website is a business-to-business
                    site, what sort of companies are you hoping to attract?
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question22]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion22"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    23.Who are the decision makers on this project? What is the
                    turnaround time for making a decision?{" "}
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question23]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion23"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    24.Have you researched your online competition so you have
                    an idea of what you do and don’t want on your site?{" "}
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question24]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion24"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    25.Where is the website content coming from? Who’s
                    responsible for updating it? Is it ready for use on your
                    website?
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question25]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion25"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group hide-column">
                  <label class="" for="textinput">
                    26.Other than what search engines will produce, what methods
                    do you have in mind to spread the word about your website?
                  </label>
                  <div class="questins-input">
                    <textarea
                      name="data[Question][question26]"
                      class="form-control "
                      autocomplete="off"
                      id="QuestionQuestion26"
                    ></textarea>{" "}
                  </div>
                </div>
                <div className="form-group">
                                  <ReCAPTCHA
                                    key={recaptchaKey}
                                    sitekey={recaptchaKey}
                                    onChange={onRecaptchaChange}
                                  />
                                  <div
                                    className="gcpc FormError"
                                    id="captcha_msg"
                                  >
                                    {/* {formErrors.recaptchaerror} */}
                                  </div>
                                </div>
                  <div className="btn-get">
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
                </>
              )}
            </div>
          </div>
         
        </form>
      </div>
    </section>
      <Footer />
    </>
  );
};

export default Page;
