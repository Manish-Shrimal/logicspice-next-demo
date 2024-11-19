"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(custom-solutions)/customsolutions.css";
import Image from "next/image";
import Link from "next/link";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Customsolutiontabs from "@/app/Components/Customsolutiontabs";
import { Accordion, Card, Button } from "react-bootstrap";

import Support from "@/app/Components/Support";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBModal,
  MDBModalBody,
} from "mdb-react-ui-kit";

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
      <section className="inner-online-section">
        <div className="container">
          <h1 data-aos="zoom-in">Online Business Calculator</h1>
          <p>
            Create your own customized calculator for your business to improve
            your business efficiency. We at LogicSpice provide web calculator
            development services, which automates and reduces the task of manual
            calculation for each function.
          </p>
        </div>
      </section>
      <section className="about-online-section" data-aos="fade-up">
        <div className="container">
          <ul>
            <li>
              <i>
                <Image
                  unoptimized={true}
                  width={50}
                  height={100}
                  src="/img/websitecalculatorbuilder/cobc-icon1.png"
                  alt="icon"
                  title="Fast"
                />
              </i>
              <span>Fast</span>
            </li>
            <li>
              <i>
                <Image
                  unoptimized={true}
                  width={50}
                  height={100}
                  src="/img/websitecalculatorbuilder/cobc-icon2.png"
                  alt="icon"
                  title="Easy To Use"
                />
              </i>
              <span>Easy To Use </span>
            </li>
            <li>
              <i>
                <Image
                  unoptimized={true}
                  width={50}
                  height={100}
                  src="/img/websitecalculatorbuilder/cobc-icon3.png"
                  alt="icon"
                  title="Emphatic"
                />
              </i>
              <span>Emphatic</span>
            </li>
            <li>
              <i>
                <Image
                  unoptimized={true}
                  width={50}
                  height={100}
                  src="/img/websitecalculatorbuilder/cobc-icon4.png"
                  alt="icon"
                  title="Cost Effective"
                />
              </i>
              <span>Cost Effective </span>
            </li>
            <li>
              <i>
                <Image
                  unoptimized={true}
                  width={50}
                  height={100}
                  src="/img/websitecalculatorbuilder/cobc-icon5.png"
                  alt="icon"
                  title="Multi-Purpose"
                />
              </i>
              <span>Multi-Purpose</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="cobc-solutions-section" data-aos="fade-up">
        <div className="container">
          <h2 className="cobc-title">Web Calculators Solutions</h2>
          <div className="cobc-solutions-bx">
            <div className="row">
              <div className="col-sm-6 col-md-3" data-aos="fade-right">
                <div className="thumbnail">
                  <div className="thumbnail-cobc-img">
                    <Image
                      unoptimized={true}
                      width={100}
                      height={100}
                      src="/img/websitecalculatorbuilder/cobc-img1.png"
                      alt="img"
                    />
                  </div>
                  <div className="caption">
                    <h3>Finance Calculations</h3>
                    <p>
                      Easy to calculate loans, EMI&apos;s, insurance or any
                      other financial calculations with our Finance calculator.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3" data-aos="fade-up">
                <div className="thumbnail">
                  <div className="thumbnail-cobc-img">
                    <Image
                      unoptimized={true}
                      width={100}
                      height={100}
                      src="/img/websitecalculatorbuilder/cobc-img2.png"
                      alt="img"
                    />
                  </div>
                  <div className="caption">
                    <h3>Price & Payment Calculators</h3>
                    <p>
                      Let your user calculate prices of your goods and services
                      and pay for it online.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3" data-aos="fade-up">
                <div className="thumbnail">
                  <div className="thumbnail-cobc-img">
                    <Image
                      unoptimized={true}
                      width={100}
                      height={100}
                      src="/img/websitecalculatorbuilder/cobc-img3.png"
                      alt="img"
                    />
                  </div>
                  <div className="caption">
                    <h3>Health & Medical Calculators</h3>
                    <p>
                      Calculate useful dosage and calories for any of your
                      products.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3" data-aos="fade-left">
                <div className="thumbnail">
                  <div className="thumbnail-cobc-img">
                    <Image
                      unoptimized={true}
                      width={100}
                      height={100}
                      src="/img/websitecalculatorbuilder/cobc-img4.png"
                      alt="img"
                    />
                  </div>
                  <div className="caption">
                    <h3>BMI Calculator </h3>
                    <p>
                      Add this BMI calculator into your fitness website and let
                      users calculate their level of fitness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cobc-customized-section" data-aos="fade-up">
        <div className="container">
          <h2 className="cobc-title">
            Let us help you to build your own customized web calculator
          </h2>
          <p className="cobc-subtitle">
            If you&apos;re interested in building customized calculator for your
            business then get in touch with us to explore more. Our experts are
            here to help you in building your own calculator and provide you
            with ready to embed product.{" "}
          </p>
          <div className="cobc-customized-bx">
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                data-aos="fade-right"
              >
                <div className="cobc-customized-img">
                  <Image
                    unoptimized={true}
                    width={500}
                    height={100}
                    src="/img/websitecalculatorbuilder/cobc-img5.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6" data-aos="fade-left">
                <h3>Benefits of Our Calculator For Your Business </h3>
                <ul className="list-group">
                  <li className="list-group-item">
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    <span>Calculators are copyright protected.</span>{" "}
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    <span>
                      Complete protection for your clients data.{" "}
                    </span>{" "}
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    <span>
                      Mobile-friendly version to enhance client satisfaction.
                    </span>{" "}
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12" data-aos="fade-up">
                <div className="cobc-request-btn"onClick={toggleModal}>
                  <a  className="btn btn-primary">Request For An Expert</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cobc-configure-section" data-aos="fade-up">
        <div className="container">
          <h2 className="cobc-title">Configure Calculator</h2>
          <p className="cobc-subtitle">
            You can customize you calculator according to your need.
          </p>
          <div className="cobc-configure-bx">
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                data-aos="fade-right"
              >
                <div className="cobc-configure-img">
                  <Image
                    unoptimized={true}
                    width={100}
                    height={100}
                    src="/img/websitecalculatorbuilder/cobc-img6.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6" data-aos="fade-left">
                <div className="jumbotron">
                  <h3>Set up discounts on you products and services </h3>
                  <p>
                    Easily setup discounts on your products and services and
                    attract your customer base.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                data-aos="fade-right"
              >
                <div className="cobc-configure-img">
                  <Image
                    unoptimized={true}
                    width={100}
                    height={100}
                    src="/img/websitecalculatorbuilder/cobc-img7.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6" data-aos="fade-left">
                <div className="jumbotron">
                  <h3>Change prices without any programming skills </h3>
                  <p>
                    Easily manageable price section to change prices without any
                    programming skills.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                data-aos="fade-right"
              >
                <div className="cobc-configure-img">
                  <Image
                    unoptimized={true}
                    width={100}
                    height={100}
                    src="/img/websitecalculatorbuilder/cobc-img8.png"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6" data-aos="fade-left">
                <div className="jumbotron">
                  <h3>Receive email notifications about orders </h3>
                  <p>
                    Just select email address to receive Order Information via
                    email.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cobc-embede-section" data-aos="fade-up">
        <div className="container">
          <h2 className="cobc-title">
            Once you have got your customized calculator, then this can be
            <br />
            embedded in most of the web platforms like
          </h2>
          <div className="cobc-configure-logo">
            <ul>
              <li>
                {" "}
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/websitecalculatorbuilder/cobc-logo1.png"
                  alt="img"
                />
              </li>
              <li>
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/websitecalculatorbuilder/cobc-logo2.png"
                  alt="img"
                />
              </li>
              <li>
                {" "}
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/websitecalculatorbuilder/cobc-logo3.png"
                  alt="img"
                />
              </li>
              <li>
                {" "}
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/websitecalculatorbuilder/cobc-logo4.png"
                  alt="img"
                />
              </li>
              <li>
                {" "}
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/websitecalculatorbuilder/cobc-logo5.png"
                  alt="img"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="testing-statred-section" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <h2>Let&apos;s Get Started! -</h2>
            </div>
            <div className="col-sm-6 col-md-6">
              {/* <a
                id=""
                data-toggle="modal"
                data-target="#contactFix"
                className="btn btn-primary"
              >
                Get a Free Quote
              </a> */}
              <a className="btn btn-primary" onClick={toggleModal}>
                Get a Free Quote
              </a>
              .
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
              unoptimized={true}
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
