"use client";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import Link from "next/link";
import "@/app/company/company.css";
import Image from "next/image";
import React, { useState } from "react";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Contactusmodel from "@/app/Components/Contactusmodel";

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
      <NavBar />
      <section class="inner-technology-section">
        <div class="container">
          <h1>Technologies</h1>
          <p>
            We meet industry standards by staying up to date with dynamic
            technologies
          </p>
        </div>
      </section>
      <section class="LogicspiceTechnologiesSection" data-aos="fade-up">
        <div class="container">
          <div class="LogicspiceTechnologies">
            <ul>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/laravel-icon.png"
                    alt="Laravel"
                  />
                </i>
                <span>Laravel</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/react-icon.png"
                    alt="React JS"
                  />
                </i>
                <span>React JS</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/nodejs-icon.png"
                    alt="Node js"
                  />
                </i>
                <span>Node js</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/react-native-icon.png"
                    alt="React Native"
                  />
                </i>
                <span>React Native</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/angular-icon.png"
                    alt="Angular"
                  />
                </i>
                <span>Angular</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/swift-icon.png"
                    alt="Swift"
                  />
                </i>
                <span>Swift</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/bootstrap-icon.png"
                    alt="Bootstrap"
                  />
                </i>
                <span>Bootstrap</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/bigdata-icon.png"
                    alt="Big Data"
                  />
                </i>
                <span>Big Data</span>
              </li>
              <li class="DevOpsTechnologies">
                <i>
                  <Image
                    unoptimized={true}
                    width={50}
                    height={100}
                    src="/img/technology/devops-icon.png"
                    alt="DevOps Infrastructure"
                  />
                </i>
                <span>
                  DevOps
                  <br />
                  Infrastructure
                </span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/ai-icon.png"
                    alt="Ai"
                  />
                </i>
                <span>Ai</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/java-icon.png"
                    alt="JAVA"
                  />
                </i>
                <span>JAVA</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/xcode-icon.png"
                    alt="Xcode"
                  />
                </i>
                <span>Xcode</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/mysql-icon.png"
                    alt="MY SQL"
                  />
                </i>
                <span>MY SQL</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100}
                    src="/img/technology/mongodb-icon.png"
                    alt="Mongo DB"
                  />
                </i>
                <span>Mongo DB</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/php-icon.png"
                    alt="PHP"
                  />
                </i>
                <span>PHP</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/codeigniter-icon.png"
                    alt="Codeigniter"
                  />
                </i>
                <span>Codeigniter</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/django-icon.png"
                    alt="Codeigniter"
                  />
                </i>
                <span>DJango</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/next-js-logo.png"
                    alt="Codeigniter"
                  />
                </i>
                <span>Next JS</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100}
                    src="/img/technology/vue-js-logo.jpg"
                    alt="Codeigniter"
                  />
                </i>
                <span>Vue JS</span>
              </li>
              <li>
                <i>
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/blockchain-icon.png"
                    alt="Codeigniter"
                  />
                </i>
                <span>Blockchain</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="about-technologies-section">
        <div class="container">
          <div class="jumbotron jumbotron-new" data-aos="fade-up">
            <h2>Web Development Tools</h2>
            <p>
              At Logicspice, we are dedicated to delivering top-tier, dependable
              solutions for web and mobile platforms by harnessing the power of
              cutting-edge technologies. Our team of experts is unwavering in
              their commitment to ongoing research and evaluation of emerging
              development technologies, ensuring that we remain at the forefront
              of the ever-evolving landscape of web and mobile app development
              trends. We take immense pride in our commitment to staying at the
              forefront of the latest web development technologies and
              delivering custom e-commerce solutions that are powered by
              emerging technologies in software development.
            </p>
          </div>
          <div class="technologies-use" data-aos="fade-up">
            <ul>
              <li>
                <div class="use-icon">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/php-web-icon.png"
                    alt="PHP Development"
                  />
                </div>
                <h4>PHP Development</h4>
              </li>
              <li>
                <div class="use-icon">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/xml-development-icon.png"
                    alt="XML Development"
                  />
                </div>
                <h4>XML Development</h4>
              </li>
              <li>
                <div class="use-icon">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/html-css-icon.png"
                    alt="HTML5/ CSS3"
                  />
                </div>
                <h4>HTML5/ CSS3</h4>
              </li>
              <li>
                <div class="use-icon">
                  <Image
                    unoptimized={true}
                    width={60}
                    height={100}
                    src="/img/technology/js-web-icon.png"
                    alt="JS Web Development"
                  />
                </div>
                <h4>JS Web Development</h4>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="WebFrameworksSection" data-aos="fade-up">
        <div class="container">
          <div class="WebFrameworksBx">
            <div class="WebFrameworksHadding">
              <h2>Crafting Success with Cutting-Edge Web Frameworks</h2>
              <p>
                Revolutionize Web Development with Our Effortless and Rapid Web
                Framework
              </p>
            </div>

            <div class="LogicspiceTechnologies">
              <ul>
                <li>
                  <i>
                    <Image
                      unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/technology/laravel-icon.png"
                      alt="Laravel"
                    />
                  </i>
                  <span>Laravel</span>
                </li>
                <li>
                  <i>
                    <Image
                      unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/technology/nodejs-icon.png"
                      alt="Node js"
                    />
                  </i>
                  <span>Node js</span>
                </li>
                <li>
                  <i>
                    <Image
                      unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/technology/cake-icon.png"
                      alt="Cake PHP"
                    />
                  </i>
                  <span>Cake PHP</span>
                </li>
                <li>
                  <i>
                    <Image
                      unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/technology/react-icon.png"
                      alt="React JS"
                    />
                  </i>
                  <span>React JS</span>
                </li>
                <li>
                  <i>
                    <Image
                      unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/technology/angular-icon.png"
                      alt="Angular"
                    />
                  </i>
                  <span>Angular</span>
                </li>
                <li>
                  <i>
                    <Image
                      unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/technology/bootstrap-icon.png"
                      alt="Bootstrap"
                    />
                  </i>
                  <span>Bootstrap</span>
                </li>
                <li>
                  <i>
                    <Image
                      unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/technology/django-icon.png"
                      alt="django"
                    />
                  </i>
                  <span>django</span>
                </li>
                <li>
                  <i>
                    <Image
                      unoptimized={true}
                      width={60}
                      height={100}
                      src="/img/technology/codeigniter-icon.png"
                      alt="Codeigniter"
                    />
                  </i>
                  <span>Codeigniter</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="mobile-section TechnologiesMobileSection">
        <div class="container">
          <div class="jumbotron jumbotron-new" data-aos="fade-up">
            <h2>Mobile Platform</h2>
            <p>
              We have skilled mobile app developers that offer the best app
              solution for your business.
            </p>
          </div>
          <div class="TechnologiesMobileUse">
            <ul>
              <li data-aos="fade-right">
                <div class="TechnologiesMobileUseIcon">
                  <Image
                    unoptimized={true}
                    width={150}
                    height={100 / (100 / 100)}
                    src="/img/technology/android-icon.png"
                    alt="android"
                  />
                </div>
                <h4>Android Platform</h4>
                <h5>
                  <span>Java</span>
                </h5>
              </li>
              <li data-aos="fade-left">
                <div class="TechnologiesMobileUseIcon">
                  <Image
                    unoptimized={true}
                    width={150}
                    height={100 / (100 / 100)}
                    src="/img/technology/apple-icon.png"
                    alt="apple"
                  />
                </div>
                <h4>iOS Platform</h4>
                <h5>
                  <span>Xcode with Swift</span>{" "}
                </h5>
              </li>
              <li data-aos="fade-left">
                <div class="TechnologiesMobileUseIcon">
                  <Image
                    unoptimized={true}
                    width={150}
                    height={100 / (100 / 100)}
                    src="/img/technology/hybrid.png"
                    alt="Hybrid"
                  />
                </div>
                <h4>Hybrid</h4>
                <h5>
                  <span>React Native</span>
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="mobile-section database-section" data-aos="fade-up">
        <div class="container">
          <div class="jumbotron jumbotron-new">
            <h2>Database Technologies</h2>
            <p>
              We use well known and most reliable database to keep our
              development process smooth for any complex & big data.
            </p>
          </div>
          <div class="detabesh-use">
            <ul>
              <li data-aos="fade-right">
                <div class="database-use-icon">
                  <Image
                    unoptimized={true}
                    width={200}
                    height={100 / (100 / 100)}
                    src="/img/technology/mysol-icon.png"
                    alt="mysol"
                  />
                </div>
              </li>
              <li data-aos="fade-left">
                <div class="database-use-icon database-mango-icon">
                  <Image
                    unoptimized={true}
                    width={200}
                    height={100 / (100 / 100)}
                    src="/img/technology/mangodb-icon.png"
                    alt="mangodb"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="TechnologiesStatredSection" data-aos="fade-up">
        <div class="container">
          <div class="TechnologiesStatred">
            <h2>Let&ldquo;s Get Started!</h2>
            <div class="TechnologiesStatredBtn">
              <a onClick={toggleModal} class="btn btn-info">
                Get a Free Quote
                <i>
                  <Image
                    unoptimized={true}
                    width={20}
                    height={100}
                    src="/img/technology/technologies-icon-arrow.png"
                    alt="mongodb"
                  />
                </i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <Link
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              unoptimized={true}
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
