"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
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
const Page = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.35,
    centerMode: true,
    vertical: false,
    autoplay: true,
    arrows: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  var clientfeadback = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

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
      <NavBar />

      <section className="laravel-banner LaravelBanners GenerativeAIBanner">
      
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-7">
              <div className="laravel-banner-txt">
                <h1>
                  <strong className="LaravelBannerHadding">Generative</strong>{" "}
                  AI Development Services
                </h1>
                <div className="LaravelText">
                  {/* <strong style={{ color: "#ff2d20" }}>
                    <i>Expert Video Creation Solutions</i>
                  </strong>{" "} */}
                  <br />
                  Generative AI can transform the way you work. Our services,
                  spanning from strategic consulting to custom solution
                  development and support services, are all offered as part of
                  our commitment as a leading Generative AI Development Company.
                  We use advanced models like GPT, Mistral, Claude, and Gemini
                  to make your workflows efficient and effective.
                </div>
                {/* <div className="LaravelOffers">
                  <h3>
                    <span>Limited Period Offer:</span> 50% discount for the
                    first 50 hours of Laravel development.
                  </h3>
                </div> */}
                <div className="laravel-anquire">
                  <div className="btn btn-primary" onClick={openModal}>
                    <a>Enquire Now</a>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Generative AI Development"
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
            <div className="col-xs-12 col-sm-6 col-md-5">
              <div className="page_img LaravelBannerImg">
                <Image
                  width={450}
                  height={500 / (100 / 100)}
                  src="/img/generative-ai/generative-ai-banner-img.png"
                  alt="Generative AI development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel-descriptions Generativedescriptions">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 pull-right">
              <div className="laravel_img">
                <Image
                  width={310}
                  height={500 / (100 / 100)}
                  src="/img/generative-ai/generative-ai-icon.png"
                  alt="laravel web development"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6 pull-left" dir="ltr">
              <div className="laravel-descriptions-bx" dir="ltr">
                <h2>Generative AI Development</h2>
                <h3>The Future of Generative AI Development</h3>
                <p>
                  As generative AI continues to evolve, a synergy between
                  personalization and content creation in the future will build
                  new futures in industries such as entertainment, marketing,
                  and design. AI would understand and predict human preferences,
                  thereby making highly customized experiences—from marketing
                  campaigns tuned to person-specific behaviors to learning
                  materials tailored to personal progress and interests. This
                  would further extend into domains like e-commerce, where
                  AI-driven propositions could change customer interaction with
                  seamless shopping.
                  <br />
                  <br /> In health itself, generative AI can reinvent diagnosis
                  and treatment planning by processing millions of patient data
                  for tailored treatment pathways. This will bring about
                  personalized medicine, powered by AI processing genetic
                  information, lifestyle, and environment for more effective
                  treatments and earlier diagnoses of diseases. In financial
                  services, AI sifts through these really complex datasets to
                  make predictions, detect fraud, and provide personalized
                  financial advice that improve decision-making at both the
                  individual and enterprise levels. Beyond specific sectors, AI
                  simulation and virtual environments will become the key
                  drivers of research and development. These may hasten cycles
                  of innovation by reducing the need for physical modeling
                  through rapid prototyping, testing, and refinement. This might
                  dramatically reduce time-to-market for new products and
                  breakthroughs in industries ranging from automotive and
                  aerospace to pharmaceuticals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel-devlopments-services">
        <div className="container">
          <h2>Our Generative AI development services</h2>
          <div className="laravel-services-bx-top">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box1">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/generative-ai/custom-generative-icon.png"
                        alt="Generative AI Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/generative-ai/custom-generative-white-icon.png"
                        alt="Generative AI Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Custom Generative AI Model Development</h3>
                  <p>
                    We develop custom generative AI models for text, code, and
                    media, tailored to your business needs and objectives. Our
                    solutions efficiently solve problems and drive optimal
                    results.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box2">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/generative-ai/generative-ai-consulting-icon.png"
                        alt="Generative AI Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/generative-ai/generative-ai-consulting-white-icon.png"
                        alt="Generative AI Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Generative AI Consulting</h3>
                  <p>
                    We partner with you in developing a believable and
                    implementable plan of how to apply generative AI. Our domain
                    experts maintain a wide-ranging and rich understanding of AI
                    models and technologies
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box3">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/generative-ai/data-analysis-icon.png"
                        alt="Generative AI Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/generative-ai/data-analysis-white-icon.png"
                        alt="Generative AI Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Data Analysis</h3>
                  <p>
                    Our Data Analysis service delivers actionable insights from
                    your data: We take structured and unstructured data, analyze
                    it carefully, and deliver insights into what hidden patterns
                    are.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box4">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/generative-ai/innovative-generative-icon.png"
                        alt="Generative AI Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/generative-ai/innovative-generative-white-icon.png"
                        alt="Generative AI Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Innovative Generative AI Solutions</h3>
                  <p>
                    If you need a chatbot, AI agent, recommendation system, or
                    predictive analytics tool, our generative AI services are
                    designed to meet your needs. We build on top of GPT, Llama,
                    PaLM, Gemini, Mistral, and Claude, making the foundational
                    models intelligent, creative, and responsive to your
                    specific challenges.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box5">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/generative-ai/ongoing-support-icon.png"
                        alt="Generative AI Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/generative-ai/ongoing-support-white-icon.png"
                        alt="Generative AI Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Ongoing Support & Maintenance</h3>
                  <p>
                    We do not just leave you up there once we make a deployment.
                    We provide continuous support and routine maintenance from
                    our team to assure that generative AI solutions are running
                    smoothly and your systems are updated and optimally
                    functioning.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box6">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/generative-ai/video-editing-icon.png"
                        alt="Generative AI Development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/generative-ai/video-editing-white-icon.png"
                        alt="Generative AI Development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Real-Time AI Adaptation</h3>
                  <p>
                  We create generative AI models that can adapt and improve in real-time. As your business grows and your needs change, our AI solutions evolve with you, staying relevant and providing accurate results. This helps you stay ahead in a fast-moving, tech-driven world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel_choose_features_section LaravelChooseFeaturesSection">
        <div className="container">
          <h2>
            The Process Our Developers Follow to Build <br />
            Generative AI Solutions
          </h2>
          <div className="laravel_choose_features_bx ReactJsChooseFeaturesBx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_details">
                    <p>
                      <strong>Understanding Needs:</strong> Identify and
                      document the requirements, project goals, and constraints.
                      You should clearly understand what the final AI solution
                      is supposed to do.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_details">
                    <p>
                      <strong>Planning the Strategy:</strong> We devise a plan
                      that describes strategic decisions like the choice of
                      model, learning approach, allocation of resources, and
                      method of deployment—aligned with project goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 " data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_details">
                    <p>
                      <strong>Design:</strong> The solution is designed in
                      detail with specifications. A model is built by the
                      development team for AI, ensuring that it meets the
                      specific needs of the project.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_details">
                    <p>
                      <strong>Testing:</strong> The AI solution is tested to be
                      free from bias and quality refined by iterating the tests.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_details">
                    <p>
                      <strong>Launch and Optimize:</strong> The tested AI
                      solution is deployed into the production environment.
                      Constant optimization ensures quality performance and
                      results of the system.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_details">
                    <p>
                      <strong>Integration and Ongoing Support:</strong>{" "}
                      Integration of the AI solution into the systems that are
                      already in place means ongoing support to be aligned with
                      changing needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 main_btn_hire">
              <div className="btn btn-primary" onClick={openModal}>
                <a>Hire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Request To Hire Generative AI Developer"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel_core_features_section">
        <div className="container">
          <h2>How We Apply Generative AI Across Different Sectors?</h2>
          {/* <p className="laravel_core_sub">
            Laravel is open source PHP framework blessed with MVC architectural
            pattern.
            <br /> The Laravel Framework works great{" "}
          </p> */}
          <div className="laravel_core_features_bx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/generative-ai/internet-technology-icon.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Internet & Technology</h3>
                    <p>
                      Generative AI is revolutionizing tech with tools like
                      chatbots and virtual assistants. We&apos;ve empowered tech
                      companies to do even more with their operations using
                      these advanced solutions. Generative AI is reshaping
                      banking with better customer interaction, early fraud
                      detection, and insight provision.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/generative-ai/healthcare-icon.png"
                      alt="img4"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Healthcare</h3>
                    <p>
                      Through its AI solutions, patients are provided with
                      better care, accurate diagnostics, and informed treatment
                      recommendations. We work to make medical processes more
                      effective and insightful with GenAI.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/generative-ai/retail-icon.png"
                      alt="img2"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Retail</h3>
                    <p>
                      Generative AI helps retailers manage inventory, forecast
                      demand, and boost customer satisfaction. Our solutions are
                      crafted for growth and enhancing shoppers&apos; experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/generative-ai/web-3-0-icon.png"
                      alt="img5"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Web 3.0</h3>
                    <p>
                      Generative AI is paving the way to the future with things
                      like 3D models and NFTs. Our team helps businesses in this
                      field tap into AI&apos;s potential to create cutting-edge
                      solutions and explore new possibilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel_choose_features_section">
        <div className="container">
          <h2>
            Why Choose Logicspice for
            <br /> Generative AI Development?
          </h2>

          <div className="laravel_choose_features_bx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img1">
                    <Image
                      width={60}
                      height={100}
                      src="/img/generative-ai/innovative-solutions-icon.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Innovative Solutions</h3>
                    <p>
                      We utilize the latest developments in generative AI to
                      bring about solutions that are state-of-the-art and
                      innovative.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img2">
                    <Image
                      width={60}
                      height={100}
                      src="/img/generative-ai/expert-developers-icon.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Expert Developers</h3>
                    <p>
                      Our team of expert generative AI developers is experienced
                      and has the right technical know-how for every project.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 " data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img3">
                    <Image
                      width={60}
                      height={100}
                      src="/img/generative-ai/local-expertise-icon.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Global and Local Expertise</h3>
                    <p>
                      With a strong presence in the USA and beyond, we offer
                      globally informed and locally relevant solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img4">
                    <Image
                      width={60}
                      height={100}
                      src="/img/generative-ai/full-cycle-support-icon.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Full-cycle Support</h3>
                    <p>
                      This means that you get comprehensive support and guidance
                      throughout your AI journey.
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img5">
                    <Image
                      width={60}
                      height={100}
                      src="/img/laraveldevelopment/laravel-why-icon5.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Competitive Pricing</h3>
                    <p>
                      Get the best video creation services at competitive
                      prices. Our packages are affordable and designed to give
                      you the best quality possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img6">
                    <Image
                      width={60}
                      height={100}
                      src="/img/laraveldevelopment/laravel-why-icon6.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Fast Turnaround Time</h3>
                    <p>
                      We understand the importance of meeting deadlines. Our
                      services are designed to deliver high-quality results,
                      without compromising on quality.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-sm-12 main_btn_hire">
              <div className="btn btn-primary" onClick={openModal}>
                <a>Enquire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Generative AI Development"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ecommerce_faq_section" id="faq">
        <div className="container">
          <div className="ecommerce__Quick_FAQ_Script">
            <div className="row">
              <div className="col-md-5" data-aos="fade-up">
                <h4 className="title_main">
                  Frequently <br />
                  Asked Questions
                </h4>
                <div className="FaqImgBx">
                  <Image
                    width={500}
                    height={500 / (100 / 100)}
                    src="/img/marketplacesoftware/FaqLaravelImg.png"
                    alt="laravel web development"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="ecommerce__Quick_FAQ CustomQuickFAQScript">
                  <MDBAccordion v-model="activeItem" borderless>
                    <MDBAccordionItem
                      headerTitle="What does it mean by Generative AI?"
                      collapseId="flush-collapse1"
                    >
                      <p>
                        Generative AI is a technology that creates content like
                        text, images, or code out of the data it has been
                        trained on. Using high-powered models will further
                        deliver unique information.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How can Generative AI assist my business?"
                      collapseId="flush-collapse2"
                    >
                      <p>
                        Generative AI drives process optimization, a better
                        customer experience, and innovation. It can also be used
                        to automate many functions, make personalized
                        recommendations, and even glean insights from data to
                        improve decision-making.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What kind of solutions can be built with generative AI?"
                      collapseId="flush-collapse3"
                    >
                      <p>
                        We can build all kinds of solutions, including but not
                        limited to chatbots, recommendation systems, or
                        predictive analytics tools. Our solution will be
                        tailor-made just for you, fulfilling all your
                        requirements and needs.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How long does it take to implement a Generative AI solution?"
                      collapseId="flush-collapse4"
                    >
                      <p>
                        Implementing a Generative AI solution is a function of
                        project complexity and your particular needs. We will
                        work very closely with you to produce a clear timeline
                        and ensure timely delivery.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="How do you ensure data privacy and security?"
                      collapseId="flush-collapse5"
                    >
                      <p>
                        We emphasize data privacy and security by following best
                        practices and industry standards. We will make sure to
                        handle your data safely and responsibly when developing
                        and deploying AI solutions.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What industries can benefit from Generative AI solutions?"
                      collapseId="flush-collapse6"
                    >
                      <p>
                        Generative AI benefits various industries, including
                        healthcare, finance, marketing, entertainment, and
                        e-commerce. It enhances processes across different
                        sectors and spurs innovation within these industries.
                      </p>
                    </MDBAccordionItem>
                    <MDBAccordionItem
                      headerTitle="How do you measure the success of a Generative AI implementation?"
                      collapseId="flush-collapse7"
                    >
                      <p>
                        We measure success through specific KPIs that align with
                        your business goals, such as increased efficiency,
                        improved customer satisfaction, and return on investment
                        (ROI). Regular feedback and performance analysis help us
                        refine the solution over time.
                      </p>
                    </MDBAccordionItem>
                    {/* <MDBAccordionItem
                      headerTitle="Can I remove your company proprietary notices?"
                      collapseId="flush-collapse6"
                    >
                      <p>
                        With an extra charge for that, you are allowed to modify
                        the branding there. You can remove our company
                        information and put yours. But you cannot put
                        &quot;copyright by&quot; because only Logicspice owns
                        the copyrights for our softwares.
                      </p>
                    </MDBAccordionItem> */}
                  </MDBAccordion>
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
      </div>

      <Footer />
    </>
  );
};

export default Page;
