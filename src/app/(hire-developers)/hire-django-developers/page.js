"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(hire-developers)/hire-developer.css";
import Image from "next/image";
// import "@/app/(services)/services.css";
import Link from "next/link";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import "../../resposive.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css";
import Customsolutiontabs from "@/app/Components/Customsolutiontabs";
import Support from "@/app/Components/Support";
import WhyHireFromLogicspice from "@/app/Components/WhyHireFromLogicspice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const testimonialData = [
    {
      id: 1,
      image: "/img/globalbusinesscountries/kesepara.jpg",
      heading: "C2C Ecommerce Website About Fashion",
      text: "&quot;Exactly the best team available online ! I have been working and communicating with a few companies over the internet and i didn&apos;t see a single better company than logicspice. They are",
      name: "Burak",
      location: "Turkey",
    },
    {
      id: 2,
      image: "/img/globalbusinesscountries/dsherevk.jpg",
      heading: "Website + Mobile App (iOs&Android)",
      text: "&quot;&quot;Manish was very cooperative and professional during the project. The team was great, the project was very complicated and they tried their best to complete it with the best diligence. I",
      name: "Dmitry",
      location: "Canada",
    },
    {
      id: 3,
      image: "/img/globalbusinesscountries/sabdeen.jpg",
      heading: "Build a Website",
      text: "&quot;Best project management experience/journey I had. Great team spirit, very flexible and understanding while maintaining time and budget target.Top tear professional communication and support.",
      name: "Sherif A.",
      location: "Dubai",
    },
    {
      id: 4,
      image: "/img/globalbusinesscountries/beatbuehlmann.jpg",
      heading: "Financial Web Application For Pensioners",
      text: "&quot;Excellent work again from logicspice! They definitely put their best effort into the project along with very valuable inputs regarding possible enhancements of the web project. With logicspice",
      name: "Beat B.",
      location: "Switzerland",
    },
    {
      id: 5,
      image: "/img/globalbusinesscountries/tjulia1.jpg",
      heading: "Build a Social Networking Website With Payment System",
      text: "I hired this team for a very complex project that involved handling many different types of users, payment options, and social network integration. Extremely timely and professional. Will use again!",
      name: "Tom J.",
      location: "USA",
    },
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Navbar />
      <section
        style={{}}
        class="hire_developer_back_iin otherhire_developer_back_iin"
      >
        <div class="hire_developer_back_iin_mask new-developers-mask">
          <div class="container">
            <div class="row">
              <div class="col-md-8 text-start">
                <h6 class="NewSubtitle">Empower Your Team:</h6>
                <h1 class="slide_title">Hire Remote Django Developers Now!</h1>
                <div class="subinstet">
                  Hire dedicated Django programmers for your web development
                  projects. Our team of skilled Python developers specializes in
                  the Django framework and offers custom solutions to meet your
                  unique needs.
                </div>
                <div class="developer-servicees-bx">
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span> Efficient Development</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span> Cost-Friendly Solutions</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Extensive Industry Expertise</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Transparent Client Interaction</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span> Customer-Centric Approach</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Scalability Focus</span>
                  </div>
                </div>
                <div class="nt_cdl">
                  <a onClick={toggleModal} className="btn btn-primary">
                    <Contactusmodel
                      modalStatus={modalOpen}
                      toggle={toggleModal}
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
              <div class="col-md-4">
                <div class="cack_logo_img">
                  <Image
                    width={300}
                    height={100 / (100 / 100)}
                    alt="Hire CakePHP Developer"
                    src="/img/hiredevelopers/here-django-img.png"
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
                  <h2>Hire Django Developer</h2>
                  <p>
                    If you need to build a website or web application, hire
                    Django programmers from Logicspice. Our team includes
                    experts who specialize in Django, a powerful{" "}
                    <Link href="/python-development">Python framework</Link> for
                    web development. With years of experience, our top-notch
                    Django developers have successfully delivered robust and
                    scalable web solutions time and again. You can trust our
                    Django programmers to drive your web project to success with
                    outstanding results.
                  </p>
                  <p>
                    Django makes it easier to create secure and well-maintained
                    websites by providing a solid foundation. If you want to tap
                    into the advantages of Django for your web development
                    projects, we can provide you with dedicated Django
                    developers.
                  </p>
                  <p>
                    Whether you&apos;re a startup or an established business,
                    our Django experts offer comprehensive end-to-end services
                    tailored to your unique requirements. From planning to
                    deployment, we&apos;ll work closely with you to ensure your
                    Django skills perfectly align with your project goals and
                    business needs.
                  </p>{" "}
                </div>
              </div>
              <div class="col-md-6">
                <h2>Technical expertise</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <span>Django Framework Proficiency.</span>
                  </li>
                  <li class="list-group-item">
                    <span>Advanced Django Web Development.</span>
                  </li>
                  <li class="list-group-item">
                    <span>RESTful API Development.</span>
                  </li>
                  <li class="list-group-item">
                    <span>Authentication and Authorization.</span>
                  </li>
                  <li class="list-group-item">
                    <span>Frontend Integration.</span>
                  </li>
                  <li class="list-group-item">
                    <span>Django Performance Optimization.</span>
                  </li>
                  <li class="list-group-item">
                    <span>Testing and Debugging.</span>
                  </li>
                  <li class="list-group-item">
                    <span>Deployment and DevOps.</span>
                  </li>
                  <li class="list-group-item">
                    <span>Security Best Practices.</span>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="new-custom-section">
        <div class="container">
          <h2>Hire Django Experts for custom web development</h2>
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
                        src="/img/hiredevelopers/ecommerce-development.png"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>1. Django Web Application Development</h3>
                      <p>
                        Rely on our skilled Django developers to build dynamic
                        and scalable web applications tailored to your unique
                        business requirements.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-2"
                        src="/img/hiredevelopers/web-migration.png"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>2. Django E-Commerce Solutions</h3>
                      <p>
                        Our Django experts specialize in developing robust and
                        user-friendly e-commerce platforms, ensuring a seamless
                        online shopping experience.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-3"
                        src="/img/hiredevelopers/cms-web.png"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>3. Django CMS Development</h3>
                      <p>
                        Get custom Django CMS solutions that are optimized and
                        cost-effective, designed to enhance your digital content
                        management strategy.
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
                        src="/img/hiredevelopers/social-networking.png"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>4. Django RESTful API Development</h3>
                      <p>
                        Utilize our Django expertise to build secure and
                        efficient RESTful APIs, enabling seamless data exchange
                        and integration with third-party services.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-5"
                        src="/img/hiredevelopers/theme-design.png"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>5. Django Integration and Migration</h3>
                      <p>
                        Hire Django developers from Logicspice. Our team can
                        seamlessly integrate Django with your existing systems
                        or migrate your applications to the Django framework.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={60}
                        height={100}
                        alt="icon-6"
                        src="/img/hiredevelopers/extension-development.png"
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>6. Django Performance Optimization</h3>
                      <p>
                        Ensure your Django web applications are high-performing
                        and efficient with our expertise in performance
                        optimization and load testing.
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
            Hire Django Developers in 5 streamlined steps.
          </h2>
          <div class="step-row">
            <div class="col-md-2">
              <div class="dev-steps">
                <i>
                  <Image
                    width={64}
                    height={100}
                    alt="step-1"
                    src="/img/hiredevelopers/step-icon1.png"
                  />
                </i>
                <h5>Raise Your Request</h5>
              </div>
            </div>
            <div class="col-md-2">
              <div class="dev-steps">
                <i>
                  <Image
                    width={63}
                    height={100}
                    alt="step-2"
                    src="/img/hiredevelopers/step-icon2.png"
                  />
                </i>
                <h5>Discuss Your Requirment</h5>
              </div>
            </div>
            <div class="col-md-2">
              <div class="dev-steps">
                <i>
                  <Image
                    width={63}
                    height={100}
                    alt="step-3"
                    src="/img/hiredevelopers/step-icon3.png"
                  />
                </i>
                <h5>Select Experts</h5>
              </div>
            </div>
            <div class="col-md-2">
              <div class="dev-steps">
                <i>
                  <Image
                    width={53}
                    height={100}
                    alt="step-4"
                    src="/img/hiredevelopers/step-icon4.png"
                  />
                </i>
                <h5>Finalize the Terms</h5>
              </div>
            </div>
            <div class="col-md-2">
              <div class="dev-steps last-step">
                <i>
                  <Image
                    width={63}
                    height={100}
                    alt="step-5"
                    src="/img/hiredevelopers/step-icon5.png"
                  />
                </i>
                <h5>Assign and kick start</h5>
              </div>
            </div>
          </div>
          <div className="step-but">
            <a onClick={toggleModal} className="btn btn-primary">
              <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
              Hire Now!
            </a>
          </div>
        </div>
      </section>

      <WhyHireFromLogicspice testimonialData={testimonialData} />
      <div class="clearfix"></div>
      {/* <section class="enq-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 text-center">
               <a onClick={toggleModal} className="btn btn-primary">
                <Contactusmodel
                  modalStatus={modalOpen}
                  toggle={toggleModal}
                  title="Hire Laravel Developer"
                />
                Hire Now!
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <section className="ecommerce_faq_section NewFaqDesignSection">
        <div className="container">
          <div className="row">
            <div className=" row ecommerce__Quick_FAQ CustomQuickFAQScript">
              <div className="col-md-5">
                <h4 className="title_main">
                  Frequently <br />
                  Asked Questions
                </h4>
                <div className="FaqImgBx">
                  <Image
                    unoptimized={true}
                    width={650}
                    height={500 / (100 / 100)}
                    src="/img/laraveldevelopment/FaqLaravelImg.png"
                    alt="laravel web development"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <MDBAccordion v-model="activeItem" borderless>
                  <MDBAccordionItem
                    headerTitle="What makes Django a good choice for web development?"
                    collapseId="flush-collapse1"
                    data-aos="fade-up"
                  >
                    <p>
                      Django is a popular Python web framework that makes
                      building websites and web applications easier and faster.
                      It comes with built-in features for common web development
                      tasks like handling user authentication, managing
                      databases, and creating admin interfaces. This helps
                      developers save time and effort.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="What types of projects can Django developers work on?"
                    collapseId="flush-collapse2"
                    data-aos="fade-up"
                  >
                    <p>
                      Django developers can work on a wide range of web
                      projects, including e-commerce platforms, content
                      management systems (CMS), social networking sites, and
                      data-driven web applications.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="How experienced are your Django developers?"
                    collapseId="flush-collapse3"
                    data-aos="fade-up"
                  >
                    <p>
                      At Logicspice, we have a team of highly experienced Django
                      developers for hire, with expertise in building robust and
                      scalable web applications. Our Django programmers have
                      worked on numerous projects across various industries,
                      ensuring they have the necessary skills and knowledge to
                      tackle diverse project requirements.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Can Django be integrated with other technologies? "
                    collapseId="flush-collapse4"
                    data-aos="fade-up"
                  >
                    <p>
                      Yes, Django is designed to be flexible and can be easily
                      integrated with other technologies and frameworks. Hire
                      Python Django developers who are skilled in seamlessly
                      integrating Django with front-end frameworks like React or
                      Angular, as well as other backend systems and third-party
                      APIs.
                    </p>
                  </MDBAccordionItem>

                  <MDBAccordionItem
                    headerTitle="Do you offer remote or on-site Django development services?"
                    collapseId="flush-collapse5"
                    data-aos="fade-up"
                  >
                    <p>
                      At Logicspice, we provide versatile Django development
                      services tailored to your needs. Whether you prefer remote
                      or on-site services, our team of expert Python Django
                      developers is ready to support your project requirements.
                      Hire Python Django developers today to leverage our
                      flexible and dedicated approach to Django development.
                    </p>
                  </MDBAccordionItem>
                </MDBAccordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="enq-section">
        <div class="container">
          <div class="row">
            <div className="col-sm-12 main_btn_hire">
              <div className="btn btn-primary" onClick={openModal}>
                <a>Hire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Request To Hire Django Developers"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="latest_feature_product latest_feature_services">
        <div class="container">
          <h2 class="title_main">Other Popular Hire Developer</h2>
          <div class="other-product-box">
            <div class="row">
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/hire-quality-analyst"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire Quality Assurance Tester</h3>
                        <div class="other-project-logo">
                          <Image
                            width={100}
                            height={100}
                            src="/img/softwaretestingservices/qa-img.png"
                            alt="img"
                          />
                        </div>
                        <p>
                          <span>
                            Hire expert quality assurance tester to make your
                            website,software applications or mobile app bug
                            free.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/hire-angular-js-experts"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire AngularJS Developer</h3>
                        <div class="other-project-logo">
                          <Image
                            width={100}
                            height={100}
                            src="/img/hiredevelopers/angular-img.png"
                            alt="img"
                          />
                        </div>
                        <p>
                          <span>
                            Hire our expert AngularJS developers to build fast,
                            responsive and scalable web applications.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/hire-wordpress-experts"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire WordPress Developer</h3>
                        <div class="other-project-logo">
                          <Image
                            width={100}
                            height={100}
                            src="/img/hiredevelopers/wordpress_img.png"
                            alt="img"
                          />
                        </div>
                        <p>
                          <span>
                            Our expert Wordpress developers offer customized web
                            development at low cost.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section> */}
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
