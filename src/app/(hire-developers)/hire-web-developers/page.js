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
const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);


  const toggleModal = () => {
    setModalOpen(!modalOpen);
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
      image:
        "/img/globalbusinesscountries/beatbuehlmann.jpg",
      heading: "Financial Web Application For Pensioners",
      text: "&quot;Excellent work again from logicspice! They definitely put their best effort into the project along with very valuable inputs regarding possible enhancements of the web project. With logicspice",
      name: "Beat B.",
      location: "Switzerland",
    },
    {
      id: 5,
      image: "/img/globalbusinesscountries/tjulia1.jpg",
      heading: "Build a Social Networking Website With Payment System",
      text: "&quot;I hired this team for a very complex project that involved handling many different types of users, payment options, and social network integration. Extremely timely and professional. Will use again!&quot;",
      name: "Tom J.",
      location: "USA",
    },
  ];

  return (
    <>
      <Navbar />
      <section
        // style={}
        className="hire_developer_back_iin otherhire_developer_back_iin"
      >
        <div className="hire_developer_back_iin_mask new-developers-mask">
          <div className="container">
            <div className="row">
              <div className="col-md-8 text-start">
              <h1 class="slide_title">Hire Web Developer</h1>
          <div class="subinstet">
            Hire website developer from the hub of talented web developers to
            attain your development needs.
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
                <div className="nt_cdl">
                  <a onClick={toggleModal} className="btn btn-primary">
                    <Contactusmodel
                      modalStatus={modalOpen}
                      toggle={toggleModal}
                    />
                    Hire Now!
                  </a>
                  <a
                    href="javascript:$zopim.livechat.window.show();"
                    className="btn btn-primary"
                  >
                    Chat with a Developer
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cack_logo_img">
                  <Image
                    alt="Hire Android App Developers"
                    src="/img/hiredevelopers/development.png"
                    width={256}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="snop_animation"></div>
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
            <h2>Hire professional web developers</h2>
            <p>
              Whether you&rsquo;re a service provider, artist or a having a
              small business, for a growth in this competitive market, you must
              have a strong web presence and for that, you need a web
              programmer. Logicspice is a team of web developers, experienced in
              every web development technique, delivering best end-to-end
              <Link href="/web-development"
                >web development solutions</Link
              >. At our company, we offer you the opportunity to hire web
              developers from India who possess the expertise and experience to
              take your projects to the next level. <br />
              <br />
              Hire dedicated web developers for featured rich and advanced web
              applications. You can hire Indian web developers who suit your
              development on various timing schedules like hourly basis,
              full-time, or part-time. We collaborate with you, understand each
              and every requirement, goals and deliver high-quality solutions.
              Our dedicated developers ensure you deliver user-friendly and
              search engine-friendly website development which will help in your
              business boost.<br />
              <br />
              Our web developers are well aware of the latest web development
              technologies and trends to deliver proficient service. Hire web
              programmers in India from Logicspice who are experienced in
              multiple areas in eCommerce, CMS, back end, and front end
              development.<br />
              &nbsp;
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <h2>Technical expertise</h2>
          <ul class="list-group">
            <li class="list-group-item"><span>Widget development</span></li>
            <li class="list-group-item"><span>Framework knowledge</span></li>
            <li class="list-group-item"><span>Custom CMS themes</span></li>
            <li class="list-group-item">
              <span>CMS customizations and plugin development</span>
            </li>
            <li class="list-group-item"><span>HTML5, CSS3, PHP</span></li>
            <li class="list-group-item"><span>Back end development</span></li>
          </ul>
        </div>
      </div>
    </div>
        </div>
      </section>
      <section className="new-app-section">
        <div className="container">
          <h2 className="title_heading">Services offered by our dedicated web developers</h2>
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
                        style={{display: 'inline'}}
                      />
                    </i>
                    <div class="custom-ser-txt">
                <h3>1. CMS development</h3>
                <p>
                  Manage your website in more better way with the help of our
                  CMS developers.
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
                        style={{display: 'inline'}}
                      />
                    </i>
                    <div class="custom-ser-txt">
                <h3>2. e-Commerce web development</h3>
                <p>
                  Get your online eCommerce website developed on frameworks like
                  Magento.
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
                        style={{display: 'inline'}}
                      />
                    </i>
                    <div class="custom-ser-txt">
                <h3>3. Open source development</h3>
                <p>
                  Website development of your preferred open source includes
                  WordPress, Magento, CakePHP, and Laravel.
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
                        style={{display: 'inline'}}
                      />
                    </i>
                    <div class="custom-ser-txt">
                <h3>4. Plugin development</h3>
                <p>
                  Custom plugin development for giving easy access to use your
                  website.
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
                        style={{display: 'inline'}}
                      />
                    </i>
                    <div class="custom-ser-txt">
                <h3>5. Social networking</h3>
                <p>
                  Build social networking website or applications with the help
                  of our web developers.
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
                        style={{display: 'inline'}}
                      />
                    </i>
                    <div class="custom-ser-txt">
                <h3>6. Third party integrations</h3>
                <p>
                  Integrated any third-party tool with your website to add more
                  functionality.
                </p>
              </div>
                  </li>
                </ul>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
      <section className="dev_step_solution">
        <div className="container">
          <h2 className="title_heading">
          Hire web developers in India in 5 easy steps
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
      <section class="enq-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 text-center">
              <a onClick={toggleModal} className="btn btn-primary">
                <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
                Hire Now!
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="latest_feature_product latest_feature_services">
        <div className="container">
          <h2 className="title_main">Other Popular Hire Developer</h2>
          {/* <div className="other-product-box">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/hire-wordpress-experts"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Hire WordPress Developer</h3>
                        <div className="other-project-logo">
                          <Image
                            src="/img/hiredevelopers/wordpress_img.png"
                            alt="wordpress logo"
                            width={70}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            Our expert Wordpress developers offers customized
                            web development at low cost.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/hire-magento-experts"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Hire Magento Developer</h3>
                        <div className="other-project-logo">
                          <Image
                            src="/img/hiredevelopers/magento_img.png"
                            alt="laravel"
                            width={70}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            Hire certified, expert & dedicated Magento
                            developers for full time and hourly.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                  <Link
                    title="View Detail"
                    target="_black"
                    href="/hire-cakephp-developers"
                  >
                    <div className="caption">
                      <div className="other-caption-bx">
                        <h3>Hire CakePHP Developer</h3>
                        <div className="other-project-logo">
                          <Image
                            src="/img/hiredevelopers/cakephp_img.png"
                            alt="Hire Hybrid App Developer"
                            width={70}
                            height={100}
                          />
                        </div>
                        <p>
                          <span>
                            Hire dedicated, fulltime and freelance CakePHP
                            programmers, who have a good mix of knowledge,
                            skills & experience.
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
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
