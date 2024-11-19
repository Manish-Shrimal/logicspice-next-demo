"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/industries/industry.css";
import Image from "next/image";
import Link from "next/link";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../resposive.css";
import "../../../public/css/font-awesome.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Navbar />
      <section className="bg-banner">
        <div className="linear-grad">
          <div className="container">
            <div className="banner-text col-md-6">
              <h1>Industries</h1>
              <p>
                Accelerate your business operations with our cost effective
                &amp; ready to use industrial web and mobile app solutions for
                diversified industries. Our team can help your business with
                right ready to use solutions for your industry and can also
                customize them for your specific requirement.
              </p>
              <div className="enquire-btn">
                <a className="btn btn-primary" onClick={toggleModal}>
                  INQUIRE NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="simplecontent">
        <div className="container">
          <h6 className="tegsj">
            Logicspice serve different industries to boost their business
            productivity, efficiency and optimize assets utilization with our
            customized app solutions.
          </h6>
        </div>
      </div>
      <section className="service">
        <div className="container">
          <div className="row py-3">
            <div className="col-lg-4 col-md-6 col-sm-12 service-row">
              <div className="service-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/Industry/app-development-ecommerce.png"
                  alt=""
                />
              </div>
              <div className="service-title">
                <h2>
                  <Link href="/industries/ecommerce-and-retail-apps">
                    {" "}
                    eCommerce & Retail{" "}
                  </Link>
                </h2>
              </div>
              <div className="service-text">
                Logicspice empowered eCommerce and retail businesses with
                cutting-edge technology solutions, from mobile apps to
                e-commerce platforms.
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-row">
              <div className="service-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/Industry/app-development-energy.png"
                  alt=""
                />
              </div>
              <div className="service-title">
                <h2>
                  <Link href="/industries/energy-and-utilities-apps">
                    {" "}
                    Energy & Utilities{" "}
                  </Link>
                </h2>
              </div>
              <div className="service-text">
                We offer innovative solutions for the energy and utilities
                sector, optimizing operations and promoting sustainability.
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-row">
              <div className="service-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/Industry/app-development-finance.png"
                  alt=""
                />
              </div>
              <div className="service-title">
                <h2>
                  <Link href="/industries/finance-and-insurance-apps">
                    {" "}
                    Finance & Insurance{" "}
                  </Link>
                </h2>
              </div>
              <div className="service-text">
                Logicspice is transforming the financial and insurance industry
                with advanced software and fintech solutions.
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-row py-3">
              <div className="service-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/Industry/app-development-marketing.png"
                  alt=""
                />
              </div>
              <div className="service-title">
                <h2>
                  <Link href="/industries/marketing-and-advertising-apps">
                    {" "}
                    Marketing & Advertising{" "}
                  </Link>
                </h2>
              </div>
              <div className="service-text">
                Logicspice developed apps for marketing and advertising
                technology, providing strategic solutions to boost brand
                visibility.
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-row py-3">
              <div className="service-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/Industry/app-development-accounts.png"
                  alt=""
                />
              </div>
              <div className="service-title">
                <h2>
                  <Link href="/industries/accountants-and-financial-services-real-estate-apps">
                    {" "}
                    Accountants and Financial Services{" "}
                  </Link>
                </h2>
              </div>
              <div className="service-text">
                Logicspice developed apps for financial organisations. loan
                calculator app, project investment process app...
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-row py-3">
              <div className="service-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/Industry/commercial-residential.png"
                  alt=""
                />
              </div>
              <div className="service-title">
                <h2>
                  <Link href="/industries/commercial-and-residential-apps">
                    {" "}
                    Commercial and Residential Real Estate{" "}
                  </Link>
                </h2>
              </div>
              <div className="service-text">
                We have completed many commercial and residential real estate
                business application projects.
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-row py-3 ">
              <div className="service-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/Industry/app-Development-government.png"
                  alt=""
                />
              </div>
              <div className="service-title">
                <h2>
                  <Link href="/industries/government-and-municipal-and-other-administrative-operations-apps">
                    Government and Municipal and other Administrative Operations
                  </Link>
                </h2>
              </div>
              <div className="service-text">
                The best place to get right office/Administrative management
                solutions to enhance citizen services...
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-row py-3">
              <div className="service-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/Industry/healthcare.png"
                  alt=""
                />
              </div>
              <div className="service-title">
                <h2>
                  <Link href="/industries/health-care-apps"> Health Care </Link>
                </h2>
              </div>
              <div className="service-text">
                We are offering easy to use online healthcare solutions,
                appointment booking app and patient record management...
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-row py-3">
              <div className="service-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/Industry/hotels-app-Development.png"
                  alt=""
                />
              </div>
              <div className="service-title">
                <h2>
                  <Link href="/industries/Hotel-apps"> Hotels </Link>
                </h2>
              </div>
              <div className="service-text">
                Hotel booking and apartment rental Apps. Increase your branding
                globally.
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-row py-3">
              <div className="service-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/Industry/ideas-business.png"
                  alt=""
                />
              </div>
              <div className="service-title  ">
                <h2>
                  <Link href="/industries/ideas-and-business-concepts-apps">
                    {" "}
                    Ideas and Business Concepts{" "}
                  </Link>
                </h2>
              </div>
              <div className="service-text">
                Logicspice is a digital lab where we transform unique and
                complex business ideas & concepts into digital form...
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-row ">
              <div className="service-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/Industry/app-Development-professionalcas.png"
                  alt=""
                />
              </div>
              <div className="service-title">
                <h2>
                  <Link href="/industries/professional-consultant-mobile-app-development">
                    {" "}
                    Professionals CAS, Attorneys and Lawyers Doctors, Job
                    Consultants
                  </Link>
                </h2>
              </div>
              <div className="service-text">
                Logicspice is a digital lab where we transform unique and
                complex business ideas & concepts into digital form...
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-row">
              <div className="service-img">
                <Image
                  width={100}
                  height={100}
                  src="/img/Industry/app-Service-cleaning.png"
                  alt=""
                />
              </div>
              <div className="service-title">
                <h2>
                  <Link href="/industries/service-contractors-and-cleaning-companies-apps">
                    {" "}
                    Service Contractors and Cleaning Companies{" "}
                  </Link>
                </h2>
              </div>
              <div className="service-text">
                Now Get professionally developed website and mobile apps for
                service contractors and cleaning companies to manage...
              </div>
            </div>

            <div className="row py-3">
              <div className="col-lg-4 col-md-6 col-sm-12 service-row">
                <div className="service-img">
                  <Image
                    width={100}
                    height={100}
                    src="/img/Industry/school-education.png"
                    alt=""
                  />
                </div>
                <div className="service-title">
                  <h2>
                    <Link href="/industries/schools-and-education-apps">
                      {" "}
                      School and Education{" "}
                    </Link>
                  </h2>
                </div>
                <div className="service-text">
                  We delivered some very good class and student management
                  solutions. Team of Logicspice developers...
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 service-row">
                <div className="service-img">
                  <Image
                    width={100}
                    height={100}
                    src="/img/Industry/Transportation-industry.png"
                    alt=""
                  />
                </div>
                <div className="service-title">
                  <h2>
                    <Link href="/industries/transportation-apps">
                      {" "}
                      Transportation{" "}
                    </Link>
                  </h2>
                </div>
                <div className="service-text">
                  We program best web and mobile(Android & iPhone) apps for
                  transportation business. We have developed Load sharing app...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bott-case">
        <div className="container">
          <div className="indus_left">
            <div className="menu_arrow">
              <div className="content left_arrow">
                <h3 className="title_box">
                  <Link href="/case-study">Case Studies</Link>
                </h3>
                <div className="box_content">
                  <p>
                    Please study our work and various projects on what we have
                    been worked in our 10+ years of experience in web &amp;
                    mobile app development field.
                  </p>
                  <div className="more_btn">
                    <Link href="/case-study" className="btn btn-primary">
                      <span>know more</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="right_image">
                <Image
                  width={400}
                  height={100}
                  alt="Case Studies - Logicspice"
                  src="/img/Industry/Case-Studies.png"
                />
              </div>
            </div>
          </div>
          <div className="indus_left">
            <div className="menu_arrow">
              <div className="content left_arrow">
                <h3 className="title_box">
                  <Link href="/softwares">Ready to use Solution</Link>
                </h3>
                <div className="box_content">
                  <p>
                    We at LogicSpice offer simplest way to resolve your IT need
                    with our ready to install web and mobile apps with
                    customization facility according to your need.
                  </p>
                  <div className="more_btn">
                    <Link href="/softwares" className="btn btn-primary">
                      <span>know more</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="right_image">
                <Image
                  width={400}
                  height={100}
                  alt="Case Studies - Logicspice"
                  src="/img/Industry/Case-Studies.png"
                />
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
