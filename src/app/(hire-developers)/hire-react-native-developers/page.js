"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(hire-developers)/hire-developer.css";
import Image from "next/image";
import Link from "next/link";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Customsolutiontabs from "@/app/Components/Customsolutiontabs";
import Support from "@/app/Components/Support";
import WhyHireFromLogicspice from "@/app/Components/WhyHireFromLogicspice";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const testimonialData = [
    {
      id: 1,
      image:
        "/img/pythondevelopment/alex-morgan.jpg",
      heading: "",
      text: "Our Python development needs were complex, but the developer we hired from Logicspice tackled them with ease. Their proficiency in Django was particularly impressive.",
      name: "Michael T.,",
      location: "Startup Founder",
    },
    {
      id: 2,
      image:
        "/img/pythondevelopment/sophia-turner.jpg",
      heading: "",
      text: "We needed a Python expert for our machine learning project, and the professional from Logicspice exceeded all expectations.",
      name: "Sophia R.,",
      location: "Tech Department Manager",
    },
    {
      id: 3,
      image:
        "/img/pythondevelopment/david-clark.jpg",
      heading: "",
      text: "Hiring a Python developer for our backend systems was a crucial step. The developer's skill in Flask and database management has greatly improved our application's performance.",
      name: "David K.,",
      location: "IT Project Coordinator",
    },
    {
      id: 4,
      image:
        "/img/pythondevelopment/isabella-clark.jpg",
      heading: "",
      text: "The Python developer we hired was outstanding. They understood our vision and brought in their unique perspective, which added immense value to our web application.",
      name: "Isabella G.,",
      location: "Product Manager",
    },
    {
      id: 5,
      image:
        "/img/pythondevelopment/emma-turner.jpg",
      heading: "",
      text: "The Python developer we brought on board from Logicspice was a game-changer for our project. Their expertise in data analysis and web development helped us achieve milestones ahead of schedule.",
      name: "Emma L.,",
      location: "Project Lead",
    },
  ];
  return (
    <>
      {" "}
      <Navbar />
      <section
        style={{}}
        class="hire_developer_back_iin otherhire_developer_back_iin"
      >
        <div class="hire_developer_back_iin_mask new-developers-mask">
          <div class="container">
            <div class="row">
              <div class="col-md-7 text-start">
                <h1 class="slide_title">Hire React Native Developers</h1>
                <div class="subinstet">
                  Hire React Native Developers to transform your ideas into
                  mobile apps. Simple, efficient, and tailored to your needs.
                </div>
                <div class="developer-servicees-bx">
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Fast & Efficient</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Cost-Effective Solutions</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Diverse Industry Expertise</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Clear Communication with Clients</span>
                  </div>
                </div>
                <div class="nt_cdl">
                  <a onClick={toggleModal} className="btn btn-primary">
                    <Contactusmodel
                      modalStatus={modalOpen}
                      toggle={toggleModal}
                      title="Hire Python Developers"
                    />
                    Hire Now!
                  </a>

                  <a
                    href="javascript:$zopim.livechat.window.show();"
                    class="btn btn-primary"
                  >
                    Chat with a Developer
                  </a>
                </div>
              </div>
              <div class="col-md-5">
                <div class="cack_logo_img">
                  <Image
                    width={300}
                    height={100}
                    alt="Zencart"
                    src="/img/hiredevelopers/react-icon.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="snop_animation"></div>
        </div>
      </section>
      <section class="dev_flexibility new-hirig-section HireFlexNewSection">
        <div class="container">
          
        <div class="new-hiring-div">
          <div class="row">
                <div class="col-md-3 col-sm-4 p-0">
                    <div class="HireFlexNewImg"><Image   width={300}
                     height={500 / (100 / 100)} alt="app development" src="/img/hiredevelopers/hire-women-img.png" /></div>
                </div>
                
                <div class="col-md-9 col-sm-8 p-0">
                    <div class="title_heading">Hiring Model </div>  
                    <div class="row">
                <div class="col-md-4 col-sm-4">
                    <div class="HireFlexNewTxt">
                        <i><Image width={41} height={100} alt="app development" src="/img/hiredevelopers/periodic-new-icon.png" /></i>
                        <div class="HireFlexNewHeading">Periodic Basis</div>
                    </div></div>
                <div class="col-md-4 col-sm-4">
                    <div class="HireFlexNewTxt">
                        <i><Image width={27} height={100} alt="app development" src="/img/hiredevelopers/clock-new-icon.png" /></i>
                        <div class="HireFlexNewHeading">Hourly Basis</div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4">
                    <div class="HireFlexNewTxt">
                        <i><Image width={41} height={100} alt="app development" src="/img/hiredevelopers/checklist-new-icon.png" /></i>
                        <div class="HireFlexNewHeading">Project Basis</div>
                    </div>
                </div> 
                </div>
                </div> 
                </div>
            </div>

          <div class="hiring-sr">
            <div class="row">
              <div class="col-md-6">
                <div class="jumbotron">
                  <h2>Hire a React Native Expert</h2>
                  <p>
                    We assist enterprises in scaling by aligning with them to
                    offer expert and devoted React Native experts. Hire Expert
                    React Native developers from Logicspice, known for their
                    extensive experience and profound knowledge.
                  </p>
                  <p>
                    React Native is an exceptional framework designed for
                    crafting seamless mobile applications. So, if you&apos;re
                    thinking of utilizing the React Native framework for your
                    mobile application, we can connect you with the most
                    dedicated React Native experts.
                  </p>
                  <p>
                    Our freelance React Native developers boast years of
                    experience, and it&apos;s undeniable that we stand as one of the
                    elite React Native service providers in the market. We
                    possess comprehensive expertise in mobile app development,
                    ensuring the creation of user-friendly, modern, and
                    cross-platform applications.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <h2>Technical expertise</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <span>Mastery in JavaScript & JSX.</span>
                  </li>
                  <li class="list-group-item">
                    <span>In-depth React Native knowledge.</span>
                  </li>
                  <li class="list-group-item">
                    <span>Experience with e-Commerce & chat apps.</span>
                  </li>
                  <li class="list-group-item">
                    <span>Front-end & back-end skills.</span>
                  </li>
                  <li class="list-group-item">
                    <span>Mobile Database Optimization</span>
                  </li>
                  <li class="list-group-item">
                    <span>Cross-device compatibility mastery.</span>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="new-custom-section">
        <div class="container">
          <h2>
            Hire dedicated React Native developers for custom mobile app
            development
          </h2>
          <div class="custom-solution-bx">
            <div class="row">
              <div class="col-md-6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-1"
                        src="/img/hiredevelopers/custom-icon1.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>1. E-Commerce App Development</h3>
                      <p>
                        Achieve scalable and user-friendly mobile solutions for
                        your eCommerce venture with our React Native experts.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-2"
                        src="/img/hiredevelopers/custom-icon2.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>2. App Migration Solutions</h3>
                      <p>
                        Our dedicated React Native developers ensure smooth app
                        migration, bringing the best practices into play.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-3"
                        src="/img/hiredevelopers/custom-icon3.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>3. CMS App Solutions</h3>
                      <p>
                        Cost-effective and performance-oriented mobile CMS
                        solutions tailored to boost your business growth.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-4"
                        src="/img/hiredevelopers/custom-icon4.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>4. Social Networking Apps</h3>
                      <p>
                        Enhance digital connections through comprehensive mobile
                        social networking apps crafted by our specialists.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-5"
                        src="/img/hiredevelopers/custom-icon5.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>5. Theme Design & Integration</h3>
                      <p>
                        Seamlessly integrate captivating themes and designs in
                        your app with our skilled developers&apos; support.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-6"
                        src="/img/hiredevelopers/custom-icon6.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>6. App Extension Development</h3>
                      <p>
                        Expand your app&apos;s capabilities as our team stands ready
                        to assist in developing and integrating extensions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      <section class="dev_step_solution">
        <div class="container">
          <h2 class="title_heading">
            Hire React Native Developers in 5 easy steps.
          </h2>
          <div className="step-row">
            <div className="col-md-2">
              <div className="dev-steps">
                <i>
                  <Image
                    alt="step-1"
                    src="/img/hiredevelopers/step-icon1.png"
                    width={64}
                    height={50}
                  />
                </i>
                <h5>Raise Your Request</h5>
              </div>
            </div>
            <div className="col-md-2">
              <div className="dev-steps">
                <i>
                  <Image
                    alt="step-2"
                    src="/img/hiredevelopers/step-icon2.png"
                    width={63}
                    height={50}
                  />
                </i>
                <h5>Discuss Your Requirment</h5>
              </div>
            </div>
            <div className="col-md-2">
              <div className="dev-steps">
                <i>
                  <Image
                    alt="step-3"
                    src="/img/hiredevelopers/step-icon3.png"
                    width={63}
                    height={50}
                  />
                </i>
                <h5>Select Experts</h5>
              </div>
            </div>
            <div className="col-md-2">
              <div className="dev-steps">
                <i>
                  <Image
                    alt="step-4"
                    src="/img/hiredevelopers/step-icon4.png"
                    width={53}
                    height={50}
                  />
                </i>
                <h5>Finalize the Terms</h5>
              </div>
            </div>
            <div className="col-md-2">
              <div className="dev-steps last-step">
                <i>
                  <Image
                    alt="step-5"
                    src="/img/hiredevelopers/step-icon5.png"
                    width={63}
                    height={50}
                  />
                </i>
                <h5>Assign and kick start</h5>
              </div>
            </div>
          </div>

          <div class="step-but">
            <a onClick={toggleModal} className="btn btn-primary">
              <Contactusmodel
                modalStatus={modalOpen}
                toggle={toggleModal}
                title="Hire Python Developers"
              />
              Hire Now!
            </a>
          </div>
        </div>
      </section>
      <WhyHireFromLogicspice testimonialData={testimonialData} />
      <div class="clearfix"></div>
      <section class="enq-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 text-center">
              <a onClick={toggleModal} className="btn btn-primary">
                <Contactusmodel
                  modalStatus={modalOpen}
                  toggle={toggleModal}
                  title="Hire Python Developers"
                />
                Hire Now!
              </a>
            </div>
          </div>
        </div>
      </section>{" "}
      <section class="ecommerce_faq_section NewFaqDesignSection">
        <div class="container">
          <div class="row CustomQuickFAQScript">
            <div class=" row">
              <div class="col-md-5">
                <h4 class="title_main">
                  Frequently <br />
                  Asked Questions
                </h4>
                <div class="FaqImgBx">
                  <Image
                    width={500}
                    height={100}
                    src="/img/laraveldevelopment/FaqLaravelImg.png"
                    alt="laravel web development"
                  />
                </div>
              </div>

              <div class="col-md-7">
                
                <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="What is React Native used for in mobile app development?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      React Native is a framework that allows developers to
                      create native mobile apps using JavaScript for iOS and
                      Android platforms.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Why should I choose Logicspice's React Native developers?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      Logicspice offers experienced React Native developers who
                      are experts in crafting efficient, cross-platform mobile
                      apps tailored to your needs.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How does React Native compare to traditional native development?"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      React Native allows for faster development with code reuse
                      across iOS and Android. In contrast, traditional native
                      development requires separate codebases for each platform.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How do you ensure the security and confidentiality of my app idea?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      At Logicspice, client confidentiality is our priority. We
                      sign non-disclosure agreements (NDAs) with all our
                      clients, ensuring your app idea and data remain secure and
                      confidential.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can I hire a developer for both short-term and long-term projects?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Absolutely! Whether you have a brief requirement or a long
                      project, We offer flexible hiring models to cater to
                      short-term and long-term development needs.
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion>
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
              width={50}
              height={50}
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
