"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
import "../../resposive.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";
import BaseAPI from "@/app/BaseAPI/BaseAPI";

const Page = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const openModal = () => {
    console.log(showModal);

    setShowModal(!showModal);
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Navbar />
      <section className="our-services-new">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            We belong to the heart of the digital world and this is how we are
            always leading in the digital services. Teams of brilliant minds
            innovate solutions for brand enhancement, website solutions or a
            marketing campaign.
          </p>
        </div>
      </section>
      <section className="service-boxes-new" data-aos="fade-up">
        <div className="container">
          <div className="serv-div_new s">
            <div className="row">
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/mobile-app-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={66}
                        height={100}
                        src="/img/services/serv_4.png"
                        alt="serv_4"
                      />
                    </div>
                    <h2>Mobile App Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/web-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={90}
                        height={100}
                        src="/img/services/serv_1.png"
                        alt="serv_1"
                      />
                    </div>
                    <h2>Web Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/big-data-development">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={90}
                        height={100}
                        src="/img/services/big-data-development.png"
                        alt="Big Data Development"
                      />
                    </div>
                    <h2>Big Data Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/generative-ai-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/generative-ai-icon.png"
                        alt="Generative AI development"
                      />
                    </div>
                    <h2>Generative AI development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/blockchain-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/blockchain-development-icon.png"
                        alt="Blockchain Development"
                      />
                    </div>
                    <h2>Blockchain Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/video-creation">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/video-content-icon.png"
                        alt="Video Creation"
                      />
                    </div>
                    <h2>Video Creation</h2>
                  </div>
                </Link>
              </div>



              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/devops-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/devops-development.png"
                        alt="DevOps Development"
                      />
                    </div>
                    <h2>DevOps Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/web-hosting">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/webhostin_icon.png"
                        alt="serv_3"
                      />
                    </div>
                    <h2>Web Hosting</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/django-development">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={116}
                        height={100}
                        src="/img/services/DjangoIcon.png"
                        alt="contract hire"
                      />
                    </div>
                    <h2>Django Web Services</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/contract-hire">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/ContractIcon.png"
                        alt="contract hire"
                      />
                    </div>
                    <h2>Contract Staffing Services</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/angular-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/AngularLogo.png"
                        alt="Angular Development"
                      />
                    </div>
                    <h2>Angular Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/python-development">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/PythonLogo.png"
                        alt="Python Development"
                      />
                    </div>
                    <h2>Python Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/reactjs-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/ReactJSLogo.png"
                        alt="React JS Development"
                      />
                    </div>
                    <h2>React JS Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/react-native-app-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/ReactJSLogo.png"
                        alt="React Native App Development"
                      />
                    </div>
                    <h2>React Native App Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/artificial-intelligence">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/ArtificialLogo.png"
                        alt="Artificial Intelligence Services"
                      />
                    </div>
                    <h2>Artificial Intelligence Services</h2>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/digital-marketing">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_3.png"
                        alt="serv_3"
                      />
                    </div>
                    <h2>Digital Marketing</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/software-testing-services">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_5.png"
                        alt="serv_5"
                      />
                    </div>
                    <h2>Testing Services</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/software-development">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_2.png"
                        alt="serv_2"
                      />
                    </div>
                    <h2>Software Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/software-maintenance-support">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_6.png"
                        alt="serv_6"
                      />
                    </div>
                    <h2>Support & Maintenance</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/php-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_8.png"
                        alt="serv_8"
                      />
                    </div>
                    <h2>PHP Web Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/cakephp-development">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_9.png"
                        alt="serv_9"
                      />
                    </div>
                    <h2>Cakephp Web Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/codeigniter-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_10.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>CodeIgniter Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/nodejs-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_11.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Node.JS Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/opencart-development">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_12.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>OpenCart Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/magento-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_13.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Magento Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/laravel-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_04.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Laravel Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/ecommerce-website">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_15.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>eCommerce Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/wordpress-web-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_16.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Wordpress Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/advanced-web-programming">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_17.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Advanced Web Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/open-source-cms">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_18.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Open Source CMS Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/ios-app-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_19.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>iPhone Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/android-app-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_20.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Android App Development</h2>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/hybrid-app-development">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_21.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Hybrid Development</h2>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/website-design">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_22.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Website Design</h2>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="https://design.logicspice.com/website-design-packages/">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_23.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Website Design Packages</h2>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/website-redesign">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_24.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Website Redesign Company</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/responsive-web-design">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_25.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Responsive Website</h2>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/landing-page-design">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_26.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Landing Page Design</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/website-cloning-service">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_27.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Website Cloning Service</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/saas-software-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_28.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Saas Software Development</h2>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/psd-to-wordpress">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={102}
                        height={100}
                        src="/img/services/serv_29.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Psd to Wordpress</h2>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/psd-to-html">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={96}
                        height={100}
                        src="/img/services/serv_30.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Psd to HTML</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/psd-to-shopify">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={101}
                        height={100}
                        src="/img/services/serv_31.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Psd to Shopify</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/script-customization">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_32.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Script Customization</h2>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/software-testing-services">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_33.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Software Testing</h2>
                  </div>
                </Link>
              </div>

              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/progressive-web-app-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_34.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Progressive Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/business-support-services">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_35.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Business Support Services</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/social-media-optimization-services">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_36.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Social Media Optimization</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/shopify-development">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/serv_37.png"
                        alt="serv_10"
                      />
                    </div>
                    <h2>Shopify Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/shopify-development-packages">
                  <div className="our-services-bx">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/shopifypackages-img.png"
                        alt="Shopify Development Packages"
                      />
                    </div>
                    <h2>Shopify Development Packages</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/startup-mobile-app-development-company">
                  <div className="our-services-bx right-none">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/startup-img.png"
                        alt="Startup App Development"
                      />
                    </div>
                    <h2>Startup App Development</h2>
                  </div>
                </Link>
              </div>
              <div className="col-md-4 col-sm-4 padding-no">
                <Link href="/partner-with-us">
                  <div className="our-services-bx botton-none">
                    <div className="our-services-img">
                      <Image
                        width={70}
                        height={100}
                        src="/img/services/partner-img.png"
                        alt="Partner With us"
                      />
                    </div>
                    <h2>Partner With us</h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="technologies_section" data-aos="fade-up">
        <div className="container">
          <h2>Technologies Which We Are Using For Our Services</h2>
          <div className="technologies_bx">
            <ul className="ourservices-tab" role="tablist">
              <li
                id="tab1_li"
                className={`ddlj ${activeTab === "tab1" ? "active" : ""}`}
                onClick={() => handleTabClick("tab1")}
                style={{cursor: "pointer"}}
              >
                <a>Mobile App Development</a>
              </li>
              <li
                id="tab2_li"
                className={`ddlj ${activeTab === "tab2" ? "active" : ""}`}
                onClick={() => handleTabClick("tab2")}
                style={{cursor: "pointer"}}
              >
                <a>Web Development</a>
              </li>
              <li
                id="tab3_li"
                className={`ddlj ${activeTab === "tab3" ? "active" : ""}`}
                onClick={() => handleTabClick("tab3")}
                style={{cursor: "pointer"}}
              >
                <a>Others</a>
              </li>
            </ul>

            <div className="tab-content">
              {activeTab === "tab1" && (
                <div className=" rj" id="tab1">
                  <div className="technologi-bx">
                    <ul>
                      <li>
                        <Link href="/android-app-development">
                          <span className="circle_icon andri-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/android-img.png"
                              alt="android-img"
                            />
                          </span>
                          <h3>Android</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/ios-app-development">
                          <span className="circle_icon iPhone-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/iPhone-img.png"
                              alt="iPhone-img"
                            />
                          </span>
                          <h3>iPhone</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/hybrid-app-development">
                          <span className="circle_icon hybirds-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/hybrid-img.png"
                              alt="hybrid-img"
                            />
                          </span>
                          <h3>Hybrid</h3>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {activeTab === "tab2" && (
                <div className=" rj" id="tab2">
                  <div className="technologi-bx">
                    <ul>
                      <li>
                        <Link href="/cakephp-development">
                          <span className="circle_icon hybirds-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/cake-img.png"
                              alt="cake-img"
                            />
                          </span>
                          <h3>Cake PHP</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/codeigniter-development">
                          <span className="circle_icon iPhone-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/codeigniter-img.png"
                              alt="codeigniter-img"
                            />
                          </span>
                          <h3>Codeigniter</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/laravel-development">
                          <span className="circle_icon hybirds-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/laravel-img.png"
                              alt="laravel-img"
                            />
                          </span>
                          <h3>Laravel</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/wordpress-web-development">
                          <span className="circle_icon iPhone-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/wordpress-img.png"
                              alt="wordpress-img"
                            />
                          </span>
                          <h3>Wordpress</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/magento-development">
                          <span className="circle_icon magentos-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/magento-img.png"
                              alt="magento-img"
                            />
                          </span>
                          <h3>Magento</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/opencart-development">
                          <span className="circle_icon opne-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/opencart-img.png"
                              alt="opencart-img"
                            />
                          </span>
                          <h3>Opencart</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/php-development">
                          <span className="circle_icon hybirds-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/php-img.png"
                              alt="php-img"
                            />
                          </span>
                          <h3>PHP</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/website-design">
                          <span className="circle_icon webdesign-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/webdesign-img.png"
                              alt="webdesign-img"
                            />
                          </span>
                          <h3>Web Design</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/website-redesign">
                          <span className="circle_icon redesign-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/redesign-img.png"
                              alt="redesign-img"
                            />
                          </span>
                          <h3>Redesign</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/responsive-web-design">
                          <span className="circle_icon responsive-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/responsive-img.png"
                              alt="responsive-img"
                            />
                          </span>
                          <h3>Responsive</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/landing-page-design">
                          <span className="circle_icon iPhone-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/panding-img.png"
                              alt="panding-img"
                            />
                          </span>
                          <h3>
                            Landing Page <br />
                            Design
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/advanced-web-programming">
                          <span className="circle_icon adprograming-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/ad-progra-img.png"
                              alt="ad-progra-img"
                            />
                          </span>
                          <h3>
                            Advanced <br />
                            Programming
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/open-source-cms">
                          <span className="circle_icon responsive-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/opensource-img.png"
                              alt="opensource-img"
                            />
                          </span>
                          <h3>Open Source</h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/devops-development">
                          <span className="circle_icon hybirds-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/devops-img.png"
                              alt="DevOps Services"
                            />
                          </span>
                          <h3>DevOps Services</h3>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {activeTab === "tab3" && (
                <div className=" rj" id="tab3">
                  <div className="technologi-bx">
                    <ul>
                      <li>
                        <Link href="/software-development">
                          <span className="circle_icon responsive-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/softdevelop-img.png"
                              alt="softdevelop-img"
                            />
                          </span>
                          <h3>
                            Software <br />
                            Development
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/digital-marketing">
                          <span className="circle_icon opne-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/digital-img.png"
                              alt="digital-img"
                            />
                          </span>
                          <h3>
                            Digital
                            <br />
                            Marketing
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/software-maintenance-support">
                          <span className="circle_icon iPhone-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/support-img.png"
                              alt="support-img"
                            />
                          </span>
                          <h3>
                            Support & <br />
                            Maintenance
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/psd-to-wordpress">
                          <span className="circle_icon webdesign-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/psdwordpress-img.png"
                              alt="psdwordpress-img"
                            />
                          </span>
                          <h3>
                            PSD to
                            <br />
                            Wordpress
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/psd-to-html">
                          <span className="circle_icon redesign-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/psdhtml-img.png"
                              alt="psdhtml-img"
                            />
                          </span>
                          <h3>
                            PSD to
                            <br />
                            HTML
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/psd-to-shopify">
                          <span className="circle_icon opne-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/psdshopify-img.png"
                              alt="psdshopify-img"
                            />
                          </span>
                          <h3>
                            PSD to
                            <br />
                            Shopify
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/script-customization">
                          <span className="circle_icon iPhone-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/script-img.png"
                              alt="script-img"
                            />
                          </span>
                          <h3>
                            Script
                            <br />
                            Customization
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/software-testing-services">
                          <span className="circle_icon magentos-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/softtesting-img.png"
                              alt="softtesting-img"
                            />
                          </span>
                          <h3>
                            Software
                            <br />
                            Testing
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/progressive-web-page-development">
                          <span className="circle_icon iPhone-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/progressive-img.png"
                              alt="progressive-img"
                            />
                          </span>
                          <h3>
                            Progressive
                            <br />
                            Web Page
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/business-support-services">
                          <span className="circle_icon hybirds-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/business-img.png"
                              alt="business-img"
                            />
                          </span>
                          <h3>
                            Business
                            <br />
                            Support
                          </h3>
                        </Link>
                      </li>
                      <li>
                        <Link href="/salesforce-development-company">
                          <span className="circle_icon adprograming-img">
                            <Image
                              width={100}
                              height={100}
                              src="/img/services/salesforce-img.png"
                              alt="business-img"
                            />
                          </span>
                          <h3>
                            Salesforce
                            <br />
                            Development
                          </h3>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="clients_slide clients_slide_new" data-aos="fade-up">
        <div className="container">
          <h2>working with international clients</h2>
          <div className="our-services-sliders">
            <Slider {...settings}>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/cl_1.png"
                    alt="cl_1"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/cl_1.png"
                    alt="cl_1"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/cl_3.png"
                    alt="cl_3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/cl_4.png"
                    alt="cl_3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/cl_5.png"
                    alt="cl_5"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/cl_6.png"
                    alt="cl_6"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/cl_7.png"
                    alt="cl_9"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/cl_8.png"
                    alt="cl_8"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/cl_10.png"
                    alt="cl_10"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/cl_11.png"
                    alt="cl_10"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/cl_12.png"
                    alt="cl_10"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/client-icon.png"
                    alt="client-icon"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/client-icon3.svg"
                    alt="client-icon3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/client-icon4.png"
                    alt="client-icon4"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/client-icon5.png"
                    alt="client-icon5"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/client-icon6.png"
                    alt="client-icon3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/client-icon7.png"
                    alt="client-icon3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/client-icon8.png"
                    alt="client-icon3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/client-icon9.png"
                    alt="client-icon3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/client-icon10.png"
                    alt="client-icon3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/client-icon11.png"
                    alt="client-icon3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/client-icon12.png"
                    alt="client-icon3"
                  />
                </li>
              </div>
              <div>
                <li>
                  <Image
                    width={150}
                    height={100}
                    src="/img/services/client-icon13.jpg"
                    alt="client-icon3"
                  />
                </li>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section
        className="serv_professional serv_professional_new"
        data-aos="fade-up"
      >
        <div className="container">
          <h2>Professional Mobile Apps and Web Application Development</h2>
          <p>
            Logicspice is specialized in customized web and mobile application
            development and digital marketing, with experts available for
            various operations including but not limited to iPhone apps
            development, Android apps development, PHP web application
            development, Magento ecommerce application development, WordPress,
            Joomla, Drupal, CakePHP, Zend, Yii etc.
          </p>
          <h3>Here are the key service details:</h3>
          <ul>
            <li>
              – Logicspice do custom and complex web application and mobile apps
              development using custom coding (cakePHP, CodeIgniter, Yii, Zend)
              or open source solutions (Magento, Drupal, Joomla, WordPress).
            </li>
            <li>– Experience with popular solutions like CRM, ERP, CMS</li>
            <li>– Digital Marketing including SEO and SEM</li>
            <li>
              – Experts in PHP5, HTML 5, CSS3, jQuery, Ajax, Java Script, XML,
              Objective C, Java
            </li>
          </ul>
          <h3>Values our clients get:</h3>
          <ul>
            <li>
              – Extensive quality check and testing to ensure the quality of
              work delivered.
            </li>
            <li>
              – Documenting the requirements with innovative ideas, to ensure
              everything remains well planned from initial stage
            </li>
            <li>
              – Believe in providing required suggestions for improvements of
              the planned application
            </li>
            <li>
              – Support and Maintenance with good availability and quick
              turnaround
            </li>
            <li>
              – For Designing projects, we provide UNLIMITED REVISIONS for the
              home page design, until the client is completely satisfied.
            </li>
            <li>
              – FREE technical support for 30 business days after the delivery
              of the project and thereafter at a nominal cost will be charged on
              hourly rates.
            </li>
          </ul>
        </div>
      </section>

      <section className=" readyToStart_new">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <h2>Ready to start your project? Let&apos;s make it happen!</h2>
            </div>
            <div className="col-sm-3 text-right">
              <Link href="/contact-us" className="btn btn-primary">
                Click Here
              </Link>
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
