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
              <div class="col-md-8 text-start">
                <h1 class="slide_title">Hire Shopify Developers</h1>
                <div class="subinstet">
                  Are you looking to hire a Shopify Developer for a new online
                  store or want to keep an existing one running smoothly? Look
                  no further now! Developers at Logicspice have long of
                  experience creating customized Shopify stores. We build
                  solution
                </div>
                <div class="developer-servicees-bx">
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Quick & Agile</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Cost Effective Solution</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Varied Industry Experience</span>
                  </div>
                  <div class="developer-servicees">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <span>Transparency with client</span>
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
              <div class="col-md-4">
                <div class="cack_logo_img">
                  <Image
                    width={256}
                    height={100}
                    alt="Zencart"
                    src="/img/hiredevelopers/shopify_hire_bg.png"
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
                  <h2>Hire Shopify Developers</h2>
                  <p>
                    Hire Logicspice Shopify&apos;s developers to build your
                    online shop. We assist you in creating the best online
                    business possible. When it comes to Shopify, our shopify
                    experts can do it all, from helping you set up your store
                    from the ground up to help you become an online marketing
                    master to helping you build the unique features and
                    functions that make your store stand out from the crowd.
                  </p>
                  <p>
                    If you want a safe, scalable online store, we have an
                    award-winning team for Shopify store design and development.
                    The Shopify platform is designed for businesses in mind,
                    giving you complete power over your e-commerce site and a
                    seamless one for your customers. Hire dedicated Shopify
                    Developers from Logicspice to get the {""}
                    <Link href="/shopify-development" target="_blank">
                      Shopify development services. and Speed Optimization.
                    </Link>
                  </p>
                  <p>
                    Our Shopify programmers will modify the e-commerce platform
                    to your needs, give a robust plan, and help you grow your
                    customer base. Our Shopify developers are experts at
                    developing brands and online shops that make a significant
                    impact. We have used Shopify for clients that required
                    specialized features for their web storefronts, such as
                    advertising firms, startups, and individual projects.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <h2>Technical expertise</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    <span>Dedicated Shopify Developers for your project</span>
                  </li>
                  <li class="list-group-item">
                    <span>Quality Delivery in Time</span>
                  </li>
                  <li class="list-group-item">
                    <span>
                      Have extensive experience dealing with the platform&apos;s
                      APIs
                    </span>
                  </li>
                  <li class="list-group-item">
                    <span>
                      Use version control when developing Shopify themes
                    </span>
                  </li>
                  <li class="list-group-item">
                    <span>Security and Reliability</span>
                  </li>
                  <li class="list-group-item">
                    <span>Shopify App Development</span>
                  </li>
                  <li class="list-group-item">
                    <span>Custom shopify store setup</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="new-custom-section">
        <div class="container">
          <h2>Hire US for Shopify Store Design & Development</h2>
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
                        src="/img/hiredevelopers/responsive-icon.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>1. Responsive Shopify Templates</h3>
                      <p>
                        Hire a professional Shopify developer to create
                        beautiful, adaptable store designs so consumers can buy
                        on any device.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-2"
                        src="/img/hiredevelopers/creating-store-icon.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>2. Creating a Customized Shopify Store</h3>
                      <p>
                        Hire Shopify developers to customize themes and add
                        advanced features to your business.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-3"
                        src="/img/hiredevelopers/integrations-icon.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt custom-ser-txt3">
                      <h3>3. Shopify Integrations</h3>
                      <p>
                        Our Experienced Shopify developers assist you in growing
                        the e-commerce business by incorporating shipping, and
                        payment gateway APIs.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-4"
                        src="/img/hiredevelopers/shopify-development.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>4. Shopify App Development</h3>
                      <p>
                        We can create a Shopify app featuring high-end
                        functionality. Our apps combine and create user-friendly
                        Shopify functionalities.
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
                        alt="icon-5"
                        src="/img/hiredevelopers/shopify-migration.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>5. Shopify Migration</h3>
                      <p>
                        Shopify migration developers are needed for applications
                        and APIs. Our onshore developers offer a robust future
                        platform.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-6"
                        src="/img/hiredevelopers/shopify-plus-development.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt">
                      <h3>6. Shopify Plus Development</h3>
                      <p>
                        Shopify Plus allows businesses to launch their
                        e-commerce stores. We help organizations with Shopify
                        Plus development services.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-6"
                        src="/img/hiredevelopers/shopify-online.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt custom-ser-txt7">
                      <h3>7. Developing an Online Store using Shopify</h3>
                      <p>
                        Our team of specialists offers a wide variety of
                        tailor-made and flexible eCommerce development services.
                      </p>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <i>
                      <Image
                        width={64}
                        height={100}
                        alt="icon-6"
                        src="/img/hiredevelopers/shopify-gateway.png"
                        style={{ display: "inline" }}
                      />
                    </i>
                    <div class="custom-ser-txt custom-ser-txt8">
                      <h3>8. Shopify Payment Gateway Integration</h3>
                      <p>
                        Hire experienced Shopify developers to connect
                        third-party payment sources and construct a customized
                        checkout.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>{" "}
          </div>
          <div class="shopify-faq">
            <h2>FAQs on Shopify Developers Service</h2>
            <div class="shopify-faq-main">
              <div class="shopify-faq-bx">
                <h3>What sets our Shopify experts apart from the rest?</h3>
                <h6>
                  Our Shopify programmers pass a rigorous application and
                  interview procedure before joining our team. When you engage
                  with us, you will have access to web engineering and design
                  professionals who have a thorough grasp of your
                  business&apos;s aims, challenges, and dynamics when it comes
                  to Shopify.
                </h6>
              </div>
              <div class="shopify-faq-bx">
                <h3>
                  I have no technical Shopify knowledge. How may I benefit from
                  your assistance?
                </h3>
                <h6>
                  After hiring Logicspice top Shopify developers, you will not
                  have to worry about a thing. We manage the creation,
                  deployment, and post-deployment procedures. Our assistance and
                  maintenance team is always available to serve you.
                </h6>
              </div>
              <div class="shopify-faq-bx">
                <h3>Why hire a team of Shopify Developers?</h3>
                <h6>
                  You should engage a development team to maximize your returns
                  and get the most out of Shopify. Below are just a few of the
                  many reasons why you should consider hiring our Shopify
                  developers:
                </h6>
                <ul>
                  <li>
                    Freedom to contact and collaborate directly with Logicspice
                    Shopify&apos;s developers.
                  </li>
                  <li>
                    You have absolute control over the Shopify web development
                    process due to the ability to organize and distribute
                    specific tasks.
                  </li>
                  <li>
                    Capability to add extra resources at any time to fulfil
                    short deadlines or alterations to the project&apos;s
                    delivery timeline.
                  </li>
                  <li>
                    Employing a specialized Shopify development team ensures
                    quality assurance and on-time delivery.
                  </li>
                  <li>
                    Offer a professional project manager to handle the Shopify
                    development project and the team at no extra cost to ensure
                    timely delivery.
                  </li>
                  <li>
                    We provide the most affordable pricing on the market for
                    hiring a Shopify development team with the highest quality
                    code.
                  </li>
                </ul>
              </div>
              <div class="shopify-faq-bx">
                <h3>Can Shopify integrate with existing systems?</h3>
                <h6>
                  Shopify is a highly versatile and adaptive platform because of
                  its app-based environment. Shopify can work with a wide
                  variety of third-party applications, improving your
                  store&apos;s functionality and saving you time. Thanks to its
                  extensive app store, Shopify can support and integrate with
                  all of your business&apos;s software, from your accounting
                  program to your email provider.
                </h6>
              </div>
              <div class="shopify-faq-bx">
                <h3>What kind of post-deployment assistance do you provide?</h3>
                <h6>
                  Yes, we provide support and technical assistance after project
                  implementation, as we feel that this is where the actual
                  business begins.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="dev_step_solution">
        <div class="container">
          <h2 class="title_heading">
            Hire ReactJS Developers in 5 streamlined steps.
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
      <section className="latest_feature_product latest_feature_services">
        <div className="container">
          <h2 className="title_main">Other Popular Hire Developer</h2>

          <div class="other-product-box">
            <div class="row">
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <a
                    title="View Detail"
                    target="_black"
                    href="/hire-laravel-developers"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire Laravel Developer</h3>
                        <div class="other-project-logo">
                          <Image
                            src="/img/hiredevelopers/laravel_img.png"
                            alt="laravel logo"
                            width={70}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            Hire dedicated and expert laravel developers to
                            develop high performance Laravel web applications.
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <a
                    title="View Detail"
                    target="_black"
                    href="/hire-node-js-experts"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire Node.JS developer</h3>
                        <div class="other-project-logo">
                          <Image
                            src="/img/hiredevelopers/nodejs-img.png"
                            alt="nodejs logo"
                            width={70}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            Hire Node.js developers and programmers for best
                            NodeJS eCommerce solutions development.
                          </span>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <a
                    title="View Detail"
                    target="_black"
                    href="/hire-wordpress-experts"
                  >
                    <div class="caption">
                      <div class="other-caption-bx">
                        <h3>Hire WordPress Developer</h3>
                        <div class="other-project-logo">
                          <Image
                            src="/img/hiredevelopers/wordpress_img.png"
                            alt="wordpress logo"
                            width={70}
                            height={100}
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
                  </a>
                </div>
              </div>
            </div>{" "}
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
