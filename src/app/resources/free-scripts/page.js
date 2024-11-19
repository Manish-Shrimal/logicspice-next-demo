"use client";
import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import Image from "next/image";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import "../resources.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../../../public/css/font-awesome.css";
const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Navbar />
      <section class="MainDiscriptionFreescript">
        <div class="container">
          <div class="FreeScriptsHeader">
            <div class="container">
              <div class="centerfreescript">
                <h1 class="hedingstehs">
                  <span>Free Scripts</span>
                </h1>
                <p>
                  PHP is an interesting language because much of it exists as
                  snippets: modular chunks of code that can be run independently
                  from each other. This makes it very easy to share code and
                  someone else can simply plug into their own site and have it
                  working right out of the box. If you&apos;re developing or
                  maintaining a PHP-based website and you want to add new
                  features, there&apos;s nothing wrong with using someone
                  else&apos;s freely-provided code. It&apos;ll save you time and
                  energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="FreeScriptProductSection">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="FreeScriptProducts FreeScriptProductsBlue">
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="FreeScriptProductsImg">
                      <Image
                        width={650}
                        height={500 / (100 / 100)}
                        alt="Lead Generation Form Script"
                        src="/img/resources/lead-generation-form-img.jpg"
                        class=""
                      />
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="FreeScriptProductsTxt">
                      <h2>Lead Generation Form</h2>
                      <p>
                        Bringing in new customers through lead generation
                        campaigns involves utilizing a number of possibilities.
                        One such possibility involves the creation of scripts
                        for lead generation campaigns. This strikes some as an
                        extremely difficult venture.
                      </p>
                      <div class="FreeScriptProductsMoreBtn">
                        <a
                          class=""
                          href="https://www.logicspice.com/softwares/lead-generation-contact-form-php-script/"
                        >
                          <span>Read More</span>
                          <i>
                            <Image
                              width={50}
                              height={500 / (100 / 100)}
                              alt="read more"
                              src="/img/resources/readmore-arrow.png"
                              class=""
                            />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="FreeScriptProducts FreeScriptProductsOrenge">
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="FreeScriptProductsImg">
                      <Image
                        width={650}
                        height={500 / (100 / 100)}
                        alt="FAQ Script"
                        src="/img/resources/Faqscript-img.jpg"
                        class=""
                      />
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="FreeScriptProductsTxt FreeScriptProductsTxtFaq">
                      <h2>FAQ Script</h2>
                      <p>
                        FAQ Script is a knowledge based script and it could be
                        used it as a Frequently Asked Questions section on any
                        PHP based website. FAQ Script is written in PHP and
                        MySQL.
                      </p>
                      <div class="FreeScriptProductsMoreBtn">
                        <a
                          class=""
                          href="https://www.logicspice.com/softwares/faq-script"
                        >
                          <span>Read More</span>
                          <i>
                            <Image
                              width={20}
                              height={100}
                              alt="read more"
                              src="/img/resources/readmore-arrow.png"
                              class=""
                            />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="FreeScriptProducts FreeScriptProductsOrenge">
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="FreeScriptProductsImg">
                      <Image
                        width={650}
                        height={500 / (100 / 100)}
                        alt="Blog Script"
                        src="/img/resources/blogscript-img.jpg"
                        class=""
                      />
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="FreeScriptProductsTxt FreeScriptProductsTxtBlog">
                      <h2>Blog Script</h2>
                      <p>
                        We provide collection of commercial and free PHP Blog
                        Scripts. Blogs scripts allow you to setup your own blog
                        on the Website by providing an interface to manage your
                        posts.
                      </p>
                      <div class="FreeScriptProductsMoreBtn">
                        <a
                          class=""
                          href="https://www.logicspice.com/softwares/blog-script/"
                        >
                          <span>Read More</span>
                          <i>
                            <Image
                              width={25}
                              height={100}
                              alt="read more"
                              src="/img/resources/readmore-arrow.png"
                              class=""
                            />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="FreeScriptProducts FreeScriptProductsBlue">
                <div class="row">
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="FreeScriptProductsImg">
                      <Image
                        width={650}
                        height={500 / (100 / 100)}
                        alt="cake php cms"
                        src="/img/resources/cmsscript-img.jpg"
                        class=""
                      />
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <div class="FreeScriptProductsTxt FreeScriptProductsTxtCms">
                      <h2>CMS Script</h2>
                      <p>
                        Get a smart content management system to create and
                        manage multiple web sections and embed them into your
                        website. Our CakePHP CMS script is designed to provide
                        you with super easy content administration tools.
                      </p>
                      <div class="FreeScriptProductsMoreBtn">
                        <a
                          class=""
                          href="https://www.logicspice.com/softwares/cakephp-cms-script/"
                        >
                          <span>Read More</span>
                          <i>
                            <Image
                              width={25}
                              height={100}
                              alt="read more"
                              src="/img/resources/readmore-arrow.png"
                              class=""
                            />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="product_middle_menu_box">
        <section class="UsedTechnologySection" id="technologies">
          <div class="container">
            <h4 class="title_main">
              Used Technologies and Server Requirements
            </h4>
            <div class="UsedTechnologySectionDataa">
              <ul>
                <li
                  data-aos="fade-up"
                  class="iOSUsedTechnology aos-init aos-animate"
                >
                  <div class="UsedTechnologyImg">
                    <Image
                      width={40}
                      height={500 / (100 / 100)}
                      alt="iOS Development"
                      src="/img/resources/tech_ios_icon.png"
                    />
                  </div>
                  <div class="UsedTechnologyTxt">iOS</div>
                </li>
                <li
                  data-aos="fade-up"
                  class="JavaUsedTechnology aos-init aos-animate"
                >
                  <div class="UsedTechnologyImg">
                    <Image
                      width={40}
                      height={100}
                      alt="Java"
                      src="/img/resources/tech_java_icon.png"
                    />
                  </div>
                  <div class="UsedTechnologyTxt">Java</div>
                </li>
                <li
                  data-aos="fade-up"
                  class="AndroidUsedTechnology aos-init aos-animate"
                >
                  <div class="UsedTechnologyImg">
                    <Image
                      width={40}
                      height={100}
                      alt="Android Developers"
                      src="/img/resources/tech_android_icon.png"
                    />
                  </div>
                  <div class="UsedTechnologyTxt">Android</div>
                </li>
                <li
                  data-aos="fade-up"
                  class="PHPUsedTechnology aos-init aos-animate"
                >
                  <div class="UsedTechnologyImg">
                    <Image
                      width={40}
                      height={100}
                      alt="PHP Development"
                      src="/img/resources/tech_php_icon.png"
                    />
                  </div>
                  <div class="UsedTechnologyTxt">PHP</div>
                </li>
                <li
                  data-aos="fade-up"
                  class="CakePHPUsedTechnology aos-init aos-animate"
                >
                  <div class="UsedTechnologyImg">
                    <Image
                      width={40}
                      height={100}
                      alt="CakePHP Developers"
                      src="/img/resources/tech_cakephp_icon.png"
                    />
                  </div>
                  <div class="UsedTechnologyTxt">CakePHP</div>
                </li>
                <li
                  data-aos="fade-up"
                  class="BootstrapUsedTechnology aos-init aos-animate"
                >
                  <div class="UsedTechnologyImg">
                    <Image
                      width={40}
                      height={100}
                      alt="Bootstrap"
                      src="/img/resources/bootstrap_icon.png"
                    />
                  </div>
                  <div class="UsedTechnologyTxt">Bootstrap</div>
                </li>
                <li
                  data-aos="fade-up"
                  class="MySQLUsedTechnology aos-init aos-animate"
                >
                  <div class="UsedTechnologyImg">
                    <Image
                      width={40}
                      height={100}
                      alt="MySQL"
                      src="/img/resources/tech_mysql_icon.png"
                    />
                  </div>
                  <div class="UsedTechnologyTxt">MySQL</div>
                </li>
                <li
                  data-aos="fade-up"
                  class="ApacheUsedTechnology aos-init aos-animate"
                >
                  <div class="UsedTechnologyImg">
                    <Image
                      width={40}
                      height={100}
                      alt="Apache"
                      src="/img/resources/tech_apache_icon.png"
                    />
                  </div>
                  <div class="UsedTechnologyTxt">Apache</div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="whatsupport_section" id="support">
          <div class="container">
            <h4 class="title_main">
              What <span>support</span> you will get?
            </h4>
            <div class="supportsetting">
              <ul>
                <li data-aos="fade" class="aos-init aos-animate">
                  <div class="supportsetting_icn">
                    <Image
                      width={50}
                      height={100}
                      alt="Free Updates - Logicspice"
                      src="/img/jobboard/monthyear_icon.png"
                    />
                  </div>
                  <div class="supportsettingtext">Free Updates</div>
                </li>
                <li data-aos="fade" class="aos-init aos-animate">
                  <div class="supportsetting_icn">
                    <Image
                      width={50}
                      height={100}
                      alt="Free Support - Logicspice"
                      src="/img/jobboard/month_half_icon.png"
                    />
                  </div>
                  <div class="supportsettingtext">Free Support</div>
                </li>
                <li data-aos="fade" class="aos-init aos-animate">
                  <div class="supportsetting_icn">
                    <Image
                      width={50}
                      height={100}
                      alt="Free Brand Removal - Logicspice"
                      src="/img/jobboard/free_remove_icon.png"
                    />
                  </div>
                  <div class="supportsettingtext">Free Brand Removal</div>
                </li>
                <li data-aos="fade" class="aos-init aos-animate">
                  <div class="supportsetting_icn">
                    <Image
                      width={50}
                      height={100}
                      alt="Free Installation - Logicspice"
                      src="/img/jobboard/free_instal.png"
                    />
                  </div>
                  <div class="supportsettingtext">Free Installation</div>
                </li>
                <li data-aos="fade" class="aos-init aos-animate">
                  <div class="supportsetting_icn">
                    <Image
                      width={50}
                      height={100}
                      alt="Access to Source code - Logicspice"
                      src="/img/jobboard/access_secure_code_icon.png"
                    />
                  </div>
                  <div class="supportsettingtext">Access to Source code</div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="CustomerReviewsSections">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-3 col-lg-3">
                <div class="CustomerReviewsImg">
                  <Image
                    width={650}
                    height={500 / (100 / 100)}
                    alt="customer-reviews"
                    src="/img/resources/customer-reviews-img.jpg"
                  />
                </div>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-6">
                <div class="CustomerReviews">
                  <h2>Customer Reviews</h2>
                  <div class="CustomerReviewsMainBx">
                    <div class="CustomerReviewsBx">
                      <p>
                        Professional, Always put in extra effort, Good
                        Knowledge. One of the best Developer. Will continue to
                        work with them with upcoming project.
                      </p>
                    </div>
                    <div class="CustomerReviewsClient">
                      <i>
                        <Image
                          width={100}
                          height={100}
                          alt="customer-reviews"
                          src="/img/yiiframework/purpal-star.png"
                        />
                      </i>
                      <span>
                        Amanda Rodriguez, USA
                        <i class="contry-flag">
                          <Image
                            width={100}
                            height={100}
                            alt="customer-reviews"
                            src="/img/jobboard/usa_flag_img.png"
                          />
                        </i>
                      </span>
                    </div>
                  </div>
                  <div class="CustomerReviewsMainBx">
                    <div class="CustomerReviewsBx">
                      <p>
                        The word &quot;perfect&quot; is not enough to describe
                        the capability of Logicspice. They are just wonderful
                        and willing to extend the effort until the customer
                        satisfied, definitely will re-hire them.
                      </p>
                    </div>
                    <div class="CustomerReviewsClient">
                      <i>
                        <Image
                          width={100}
                          height={100}
                          alt="customer-reviews"
                          src="/img/yiiframework/purpal-star.png"
                        />
                      </i>
                      <span>
                        Carlos Hernandez, Germany
                        <i class="contry-flag">
                          <Image
                            width={100}
                            height={100}
                            alt="customer-reviews"
                            src="/img/jobboard/german.png"
                          />
                        </i>
                      </span>
                    </div>
                  </div>
                  <div class="CustomerReviewsMainBx">
                    <div class="CustomerReviewsBx">
                      <p>
                        Excellent work. Would definitely use them again. Fast
                        and effective work.
                      </p>
                    </div>
                    <div class="CustomerReviewsClient">
                      <i>
                        <Image
                          width={100}
                          height={100}
                          alt="customer-reviews"
                          src="/img/yiiframework/purpal-star.png"
                        />
                      </i>
                      <span>
                        Lisa Jonhathan, Canada
                        <i class="contry-flag">
                          <Image
                            width={100}
                            height={100}
                            alt="customer-reviews"
                            src="/img/jobboard/canada_flag_img.png"
                          />
                        </i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-md-4 col-lg-3">
                <div class="ecommerce--review--point ">
                  <div class="outof_rating">
                    <div class="review_rating_fjs">
                      <div class="star_num">
                        5 <i class="fa fa-star"></i>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <div class="people_star_num">60</div>
                    </div>
                    <div class="review_rating_fjs">
                      <div class="star_num">
                        4 <i class="fa fa-star"></i>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                      <div class="people_star_num">5</div>
                    </div>
                    <div class="review_rating_fjs">
                      <div class="star_num">
                        3 <i class="fa fa-star"></i>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <div class="people_star_num">0</div>
                    </div>
                    <div class="review_rating_fjs">
                      <div class="star_num">
                        2 <i class="fa fa-star"></i>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <div class="people_star_num">0</div>
                    </div>
                    <div class="review_rating_fjs">
                      <div class="star_num">
                        1 <i class="fa fa-star"></i>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <div class="people_star_num">0</div>
                    </div>
                  </div>
                  <div class="ecommerce--review--btn ">
                    <a class="btn btn-primary">Rate and Review product</a>
                  </div>
                  <div class="main-rait">
                    <span>
                      <i class="fa fa-star"></i> <span>4.7 out of 5 stars</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="ecommerce_faq_section NewFaqDesignSection">
          <div class="container">
            <div class="CustomQuickFAQScript">
              <div class="row">
                <div class="col-md-5">
                  <h4 class="title_main">
                    Frequently <br />
                    Asked Questions
                  </h4>
                  <div class="FaqImgBx">
                    <Image
                      width={350}
                      height={500 / (100 / 100)}
                      src="/img/ordermanagement/freescript-faq.png"
                      alt="Order Management Software"
                    />{" "}
                  </div>
                </div>
                <div class="col-md-7">
                  <MDBAccordion v-model="activeItem" borderless>
                    <MDBAccordionItem
                      headerTitle="Are your given source code modifiable?"
                      collapseId="flush-collapse1"
                    >
                      <p>
                        Yes, our given scripts are flexible. Clients can
                        customize according to their requirement.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Do logicspice give technical support?"
                      collapseId="flush-collapse2"
                    >
                      <p>
                        Yes , we believe in long-term relationship.We provide
                        technical support to the client till the end of journey
                        with us.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Are you willing to advise us with ideas?"
                      collapseId="flush-collapse3"
                    >
                      <p>
                        Sure, we fulfill the requirement of client. Your
                        suggestion or ideas are always welcomed which can make
                        your business more interactive.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Will I get refund if I don't like script developed by you?"
                      collapseId="flush-collapse4"
                    >
                      <p>
                        We are following latest technology. which ensure highest
                        level of quality and most number of iterations with you
                        so that will never be case.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Will you deliver the exact product as shown in demo?"
                      collapseId="flush-collapse5"
                    >
                      <p>
                        Yes, We deliver the exact product. We don&apos;t
                        compromise with quality at all.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Can I use your script without any programming skills?"
                      collapseId="flush-collapse6"
                    >
                      <p>
                        Yes, You can directly install our given script and can
                        manage everything in admin panel which is very user
                        friendly.
                      </p>
                    </MDBAccordionItem>
                    <MDBAccordionItem
                      headerTitle="How long does it take to receive the script after I purchase it?"
                      collapseId="flush-collapse7"
                    >
                      <p>
                        It will take minimum 48 hours after payment.You will
                        receive an email message with login details for your
                        personal account where the script can be downloaded.
                      </p>
                    </MDBAccordionItem>
                    <MDBAccordionItem
                      headerTitle="Can I remove your company proprietary notices?"
                      collapseId="flush-collapse8"
                    >
                      <p>
                        You are allowed to modify the script. You can remove our
                        company information and put yours. But you cannot put
                        &quot;copyright by&quot; because only we own the
                        copyrights for our softwares.
                      </p>
                    </MDBAccordionItem>
                  </MDBAccordion>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <Link
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              width={50}
              height={50}
            />
          </Link>
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
