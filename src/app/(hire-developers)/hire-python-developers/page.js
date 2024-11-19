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
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const testimonialData = [
    {
      id: 1,
      image: "/img/pythondevelopment/alex-morgan.jpg",
      heading: "",
      text: "Our Python development needs were complex, but the developer we hired from Logicspice tackled them with ease. Their proficiency in Django was particularly impressive.",
      name: "Michael T.,",
      location: "Startup Founder",
    },
    {
      id: 2,
      image: "/img/pythondevelopment/sophia-turner.jpg",
      heading: "",
      text: "We needed a Python expert for our machine learning project, and the professional from Logicspice exceeded all expectations.",
      name: "Sophia R.,",
      location: "Tech Department Manager",
    },
    {
      id: 3,
      image: "/img/pythondevelopment/david-clark.jpg",
      heading: "",
      text: "Hiring a Python developer for our backend systems was a crucial step. The developer's skill in Flask and database management has greatly improved our application's performance.",
      name: "David K.,",
      location: "IT Project Coordinator",
    },
    {
      id: 4,
      image: "/img/pythondevelopment/isabella-clark.jpg",
      heading: "",
      text: "The Python developer we hired was outstanding. They understood our vision and brought in their unique perspective, which added immense value to our web application.",
      name: "Isabella G.,",
      location: "Product Manager",
    },
    {
      id: 5,
      image: "/img/pythondevelopment/emma-turner.jpg",
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
                <h1 class="slide_title">Hire Dedicated Python Developers</h1>
                <div class="subinstet">
                  Hire Python developers for your software development needs.
                  Our Python experts offer custom solutions, ensuring your
                  projects benefit from the latest advancements in Python
                  technology.
                </div>
                <div class="developer-servicees-bx">
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Efficient Development</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Cost Effective Solution</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Broad Industry Knowledge</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Transparent Client Interaction</span>
                  </div>
                </div>
                <div class="nt_cdl">
                  <a onClick={openModal} className="btn btn-primary">
                    <Enquirymodal
                      modalStatus={showModal}
                      toggle={openModal}
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
                    src="/img/hiredevelopers/paython-banner-icon.png"
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
                <div class="HireFlexNewImg">
                  <Image
                    width={300}
                    height={500 / (100 / 100)}
                    alt="app development"
                    src="/img/hiredevelopers/hire-women-img.png"
                  />
                </div>
              </div>

              <div class="col-md-9 col-sm-8 p-0">
                <div class="title_heading">Hiring Model </div>
                <div class="row">
                  <div class="col-md-4 col-sm-4">
                    <div class="HireFlexNewTxt">
                      <i>
                        <Image
                          width={41}
                          height={100}
                          alt="app development"
                          src="/img/hiredevelopers/periodic-new-icon.png"
                        />
                      </i>
                      <div class="HireFlexNewHeading">Periodic Basis</div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="HireFlexNewTxt">
                      <i>
                        <Image
                          width={27}
                          height={100}
                          alt="app development"
                          src="/img/hiredevelopers/clock-new-icon.png"
                        />
                      </i>
                      <div class="HireFlexNewHeading">Hourly Basis</div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <div class="HireFlexNewTxt">
                      <i>
                        <Image
                          width={41}
                          height={100}
                          alt="app development"
                          src="/img/hiredevelopers/checklist-new-icon.png"
                        />
                      </i>
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
                  <h2>Hire Python Developer</h2>
                  <p>
                    Need Python developers for your project? Logicspice offers a
                    range of Python experts in data science, Django, Flask, and
                    more. With extensive expertise and a proven track record of
                    delivering exceptional results, you can trust our team to
                    propel your project to success. Hire Python developers in
                    India today for exceptional results.
                  </p>
                  <p>
                    Python is acclaimed for its versatility and robustness,
                    making it ideal for diverse programming needs, from
                    sophisticated web applications to complex data analytics. If
                    you&apos;re planning to harness the power of Python for your
                    software projects, we are here to connect you with skilled
                    Python programmers.
                  </p>
                  <p>
                    Our dedicated Python developers deliver comprehensive
                    end-to-end solutions, catering to the unique needs of
                    startups and enterprises globally. Hire Python programmers
                    and developers from Logicspice for your custom Python
                    development needs. We align our services with your business
                    requirements, ensuring that our Python expertise perfectly
                    complements your project objectives.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <h2>Technical expertise</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <span>Python & Frameworks Mastery.</span>
                  </li>
                  <li class="list-group-item">
                    <span>In-depth Python Web Development.</span>
                  </li>
                  <li class="list-group-item">
                    <span>Data-Driven Application Experience.</span>
                  </li>
                  <li class="list-group-item">
                    <span>Full-Stack Python Proficiency.</span>
                  </li>
                  <li class="list-group-item">
                    <span>Database Optimization Skills.</span>
                  </li>
                  <li class="list-group-item">
                    <span>Scalable Python App Design.</span>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="new-custom-section">
        <div class="container">
          <h2>Hire dedicated Python Developers for custom web development.</h2>
          <div class="custom-solution-bx">
            <div class="row">
              <div class="col-md-6">
                <ul class="list-group">
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-1"
                        src="/img/hiredevelopers/custom-icon1.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>1. Python Web Application Development</h3>
                      <p>
                        Depend on our Python experts to develop dynamic and
                        efficient web applications tailored to your specific
                        needs.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-2"
                        src="/img/hiredevelopers/custom-icon2.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>2. Python Data Analysis Solutions</h3>
                      <p>
                        Our Python specialists deliver advanced data analysis
                        solutions, harnessing Python&apos;s powerful data
                        libraries and tools.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-3"
                        src="/img/hiredevelopers/custom-icon3.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>3. Python CMS Development</h3>
                      <p>
                        Get custom Python CMS solutions that are optimized and
                        cost-effective, designed to enhance your digital content
                        strategy.
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
                        width={64}
                        height={100}
                        alt="icon-4"
                        src="/img/hiredevelopers/custom-icon4.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>4. Python for Scientific Computing</h3>
                      <p>
                        Utilize our Python expertise for developing
                        sophisticated scientific computing applications, ideal
                        for complex data processing and analysis.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-5"
                        src="/img/hiredevelopers/custom-icon5.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>5. Python API Development and Integration</h3>
                      <p>
                        Integrate robust APIs into your systems, developed using
                        Python for seamless data exchange and application
                        interoperability.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-6"
                        src="/img/hiredevelopers/custom-icon6.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>6. Python Scripting and Automation</h3>
                      <p>
                        Streamline your processes with Python scripting and
                        automation, enhancing efficiency and reducing manual
                        workload.
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
          <h2 class="title_heading">Hire Python Developers in 5 easy steps.</h2>
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
            <a onClick={openModal} className="btn btn-primary">
              <Enquirymodal
                modalStatus={showModal}
                toggle={openModal}
                title="Request to hire-python-developers"
              />
              Hire Now!
            </a>
          </div>
        </div>
      </section>
      <WhyHireFromLogicspice testimonialData={testimonialData} />
      <div class="clearfix"></div>
      <section class="ecommerce_faq_section NewFaqDesignSection">
        <div class="container">
          <div class="row">
            <div class=" row  CustomQuickFAQScript">
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
                    headerTitle="What skills should I look for when hiring a Python developer?"
                    collapseId="flush-collapse1"
                  >
                    <p>
                      When hiring a Python developer, look for expertise in
                      Python frameworks like Django or Flask, experience with
                      databases, knowledge of front-end technologies, and
                      familiarity with version control. At Logicspice, we ensure
                      our Python developers possess these skills and a strong
                      problem-solving ability to meet diverse project needs.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How much does it cost to hire a Python developer?"
                    collapseId="flush-collapse2"
                  >
                    <p>
                      The cost of hiring a Python developer can vary based on
                      their experience level, the project&apos;s complexity, and
                      the contract&apos;s duration. Logicspice offers
                      competitive pricing for Python developers, ensuring you
                      get the best value for your investment.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can Python be used for both web development and data science?"
                    collapseId="flush-collapse3"
                  >
                    <p>
                      Yes, Python is a versatile language suitable for web
                      development and data science. Developers at Logicspice are
                      proficient in using Python for a range of applications,
                      from building dynamic websites to performing complex data
                      analysis.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How long does it take to hire a Python developer?"
                    collapseId="flush-collapse4"
                  >
                    <p>
                      The time to hire a Python developer can vary. At
                      Logicspice, we strive to streamline the hiring process,
                      often allowing clients to onboard a Python developer
                      within a few days to a week after initiating the process.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Is hiring a Python developer for a remote or part-time role possible?"
                    collapseId="flush-collapse5"
                  >
                    <p>
                      Absolutely. Many companies, including Logicspice, offer
                      flexible hiring options. Depending on your project
                      requirements and preferences, you can hire Python
                      developers for full-time, part-time, or on a remote basis.
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion>
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
                <a>Hire Now!</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Hire Python Developers"
                  />
                }
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
