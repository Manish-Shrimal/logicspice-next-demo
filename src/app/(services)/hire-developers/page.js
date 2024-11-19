"use client";
import React, { useState, lazy, Suspense } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import Image from "next/image";
import Link from "next/link";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Certificationtabs from "@/app/Components/Certificationtabs";
// import Workingwith from "@/app/Components/Workingwith";
import "../../globals.css";
import ReCAPTCHA from "react-google-recaptcha";
import "../../../../public/css/font-awesome.min.css";
import "../../../../public/css/font-awesome.css";


const Workingwith = lazy(() => import("@/app/Components/Workingwith"));

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    message: "",
    post_url: "https://lswebsitedemo.logicspice.com/fiverr-clone",
    recaptchaToken: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const openModal = () => {
    console.log(showModal);

    setShowModal(!showModal);
  };
  const onRecaptchaChange = (token) => {
    setFormData((prevData) => ({
      ...prevData,
      recaptchaToken: token,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (validateForm()) {
    //   setLoader(true);
    //   try {
    //     const response = await axios.post(BaseAPI + "/pages/contact", formData);
    //     if (response.data.status === 200) {
    //       setResultSuccess(true);
    //     }
    //   } catch (error) {
    //     console.error("Submission error:", error.message);
    //   }
    // }
  };
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.usarnameerror = "Name is required";
    } else if (/[\d]/.test(formData.name)) {
      newErrors.usarnameerror = "Name cannot contain numbers";
    }

    if (!formData.email) {
      newErrors.emailerror = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.emailerror = "Email is invalid";
    }

    if (!formData.phone_no) {
      newErrors.phoneerror = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone_no)) {
      newErrors.phoneerror = "Phone number must be 10 digits long";
    }

    if (!formData.message.trim()) {
      newErrors.messageerror = "Message is required";
    }

    if (!formData.recaptchaToken) {
      newErrors.reacptchaerror = "Please verify Recaptcha";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const toggleModal = () => {
    
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <NavBar />
      <section className="hire_developer_back">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="developer_slide_left">
                <div
                  data-aos="fade-right"
                  className="left_content_section aos-init aos-animate"
                >
                  <h1 className="slide_title">
                    Hire Dedicated Developers For Full Time
                  </h1>
                  <p className="slide_con">
                    Enjoy the comfort of having one-to-one communication with an
                    expert, while we supervise and provide administrative
                    support to the developer working for you.
                  </p>
                </div>
                <div
                  data-aos="fade-right"
                  className="more_btn deve_btn aos-init aos-animate"
                >
                  <Link href="/portfolio" className="btn btn-primary">
                    <span>Portfolio</span>
                  </Link>
                  <a className="btn btn-primary" onClick={toggleModal}>
                    <span>Enquire Now</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div
                data-aos="fade-left"
                className="right_slide_section aos-init aos-animate"
              >
                <Image unoptimized={true}
                  width={500}
                  height={500 / (100 / 100)}
                  alt="Hire App Developers - Logicspice"
                  src="/img/hiredevelopers/man_slide.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dev_flexibility">
        <div className="container">
          <div className="title_heading">
            We offer the flexibility of choosing the best suited hiring model
            for our clients.
          </div>

          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-4 col-sm-6">
              <div className="inner-flex">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <div className="title_heading_Main">Periodic Basis</div>
                <p>The billing is done on weekly/monthly basis </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="inner-flex">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                <div className="title_heading_Main">Hourly</div>
                <p>
                  The billing is done according to the time spent by the
                  developers{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dev_Packages dev_Packages_top">
        <div className="container">
          <h2 className="title_heading">KEY HIGHLIGHTS TO WORK WITH US</h2>
          <p>
            Logicspice offers you to hire programmers who will work exclusively
            for your projects - 8 hours per day and a minimum of 176 hours of
            every month. Key highlights for hiring dedicated &amp; expert
            developers from us -{" "}
          </p>

          <ul>
            <li>Working 22 days per month</li>
            <li>We follow the Indian time zone (GMT + 5:30).</li>
            <li>
              Invoices will be sent to you on a weekly basis or in the first
              week of every month.
            </li>
            <li>Direct communication with your hired developer. </li>
          </ul>
          <div className="clearfix"></div>
        </div>
      </section>
      <section className="dev_Packages">
        <div className="container">
          <div className="hire_type row">
            <div className="col-md-8">
              <h3>Senior Developers</h3>
              <div className="mobile_view">
                <Image unoptimized={true}
                  width={500}
                  height={500 / (100 / 100)}
                  alt="Senior Developers"
                  src="/img/hiredevelopers/hire-web-developers-technource.png"
                />
              </div>
              <p></p>
              <p style={{ textAlign: "justify" }}>
                We have senior mobile app &amp; software developers for hire for
                your custom web and <strong>mobile app development</strong>{" "}
                projects. Hire dedicated developers in India and other countries
                from Logicspice who have professional skills like PHP, MySQL,
                HTML, JavaScript, Ajax, Jquery, android &amp; iPhone app
                development and has an extensive experience of more than 7 years
                in web &amp; mobile app development services. Our{" "}
                <strong>senior developer</strong> has worked for international
                clients with cross-nationality teams. Our dedicated developers
                are comfortable with rapidly changing web &amp; mobile app
                development platforms.
              </p>
              <p></p>
            </div>
            <div className="col-md-4">
              <Image unoptimized={true}
                width={400}
                height={500 / (100 / 100)}
                alt="Senior Developers"
                src="/img/hiredevelopers/hire-web-developers-technource.png"
              />
            </div>
          </div>
          <div className="hire_type hire_type2 row">
            <div className="col-md-4">
              <Image unoptimized={true}
                width={400}
                height={500 / (100 / 100)}
                alt="TEAM LEAD"
                src="/img/hiredevelopers/Web-Developer.png"
              />
            </div>
            <div className="col-md-8">
              <h3>TEAM LEAD</h3>
              <div className="mobile_view">
                <Image unoptimized={true}
                 width={400}
                 height={500 / (100 / 100)}
                  alt="TEAM LEAD"
                  src="/img/hiredevelopers/Web-Developer.png"
                />
              </div>
              <p></p>
              <p style={{ textAlign: "justify" }}>
                Hire a developer or a team leader from Logicspice who can handle
                &amp; manage the team of programmers, guide them, and solve
                their queries and issues. Our{" "}
                <strong>dedicated team leader</strong> identifies inefficiencies
                in operations with the objective of improving the quality of the
                project and managing tasks according to the given time frame.
                The <strong>lead programmer</strong> will also be responsible
                for integrating the front-end elements built by his co-workers
                into the application.
              </p>
              <p></p>
            </div>
          </div>
          <div className="button-dev">
            <a
              className="btn btn-primary"
              onClick={toggleModal}
            >
              Request Free Consultation
            </a>
          </div>
        </div>
      </section>
      <section className="dev_future_solution">
        <div className="container">
          <h3 className="title_heading">
            We amaze you with our future-ready solutions
          </h3>
          <p>
            Logicspice strives to deliver future-ready solutions of the highest
            quality and standard. Our dedicated experts rectify each bug and
            issue with precision. We make you stand apart from the crowd and
            lead the industry.
          </p>
          <div className="row">
            <div className="col-md-6">
              <Image unoptimized={true}
                width={800}
                height={500 / (100 / 100)}
                alt="app development"
                src="/img/hiredevelopers/yt-dev-home-dev-stories.png"
              />
            </div>
            <div className="col-md-6">
              <h4>We Include</h4>
              <ul>
                <li>A. 100% confidentiality - strict NDA terms</li>
                <li>
                  B. Moneyback guarantee - The amount will not be refunded by us
                  if
                  <ul>
                    <li>Your invoice is already generated</li>
                    <li>There has been an abuse of our terms of use</li>
                    <li>The project has ended.</li>
                    <li>Moneyback will be only for unbilled hours</li>
                  </ul>
                </li>
                <li>C. Technical Support (In working hours only)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="developer_mid">
        <div className="container">
          <h3 className="title_heading">Why Hire from LogicSpice</h3>
          <div className="row">
            <div className="col-md-3 col-sm-4">
              <div
                className="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box_icon_top">
                  <Image unoptimized={true}
                    width={64}
                    height={100}
                    alt="Qualified, Experienced resources"
                    src="/img/hiredevelopers/experience_icon.png"
                  />
                </div>
                <div className="developer_box_content">
                  Qualified, Experienced and certified resources
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div
                className="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box_icon_top">
                  <Image unoptimized={true}
                    width={48}
                    height={100}
                    alt="Flexible Hiring Models - Logicspice"
                    src="/img/hiredevelopers/search_icon.png"
                  />
                </div>
                <div className="developer_box_content">
                  Flexible Hiring Models
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div
                className="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box_icon_top">
                  <Image unoptimized={true}
                    width={69}
                    height={100}
                    alt="Rapid and Effective development - logicspice"
                    src="/img/hiredevelopers/rapid_icon.png"
                  />
                </div>
                <div className="developer_box_content">
                  Rapid yet Effective development
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div
                className="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box_icon_top">
                  <Image unoptimized={true}
                    width={70}
                    height={100}
                    alt="Monitor team’s performance"
                    src="/img/hiredevelopers/monitor_icon.png"
                  />
                </div>
                <div className="developer_box_content">
                  Monitor team’s performance on regular basis
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div
                className="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box_icon_top">
                  <Image unoptimized={true}
                    width={65}
                    height={100}
                    alt="Track Progress with Project Management"
                    src="/img/hiredevelopers/progress_icon.png"
                  />
                </div>
                <div className="developer_box_content">
                  Track Progress with Project Management Tools
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div
                className="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box_icon_top">
                  <Image unoptimized={true}
                    width={58}
                    height={100}
                    alt="Fast and easy communication"
                    src="/img/hiredevelopers/comunication_icon.png"
                  />
                </div>
                <div className="developer_box_content">
                  Fast and easy communication
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div
                className="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box_icon_top">
                  <Image unoptimized={true}
                    width={56}
                    height={100}
                    alt="Flexible Timing - Logicspice"
                    src="/img/hiredevelopers/timing_icon.png"
                  />
                </div>
                <div className="developer_box_content">Flexible Timing</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div
                className="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box_icon_top">
                  <Image unoptimized={true}
                    width={56}
                    height={100}
                    alt="Cost-efficient development - logicspice"
                    src="/img/hiredevelopers/cost_icon.png"
                  />
                </div>
                <div className="developer_box_content">Cost-efficient</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div
                className="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box_icon_top">
                  <Image unoptimized={true}
                    width={57}
                    height={100}
                    alt="Consistent Technical and Administrative support"
                    src="/img/hiredevelopers/technical_icon.png"
                  />
                </div>
                <div className="developer_box_content">
                  Consistent Technical and Administrative support
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div
                className="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box_icon_top">
                  <Image unoptimized={true}
                    width={48}
                    height={100}
                    alt="Highly Secured Development - Logicspice"
                    src="/img/hiredevelopers/highly_icon.png"
                  />
                </div>
                <div className="developer_box_content">
                  Highly Secured Development Area
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div
                className="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box_icon_top">
                  <Image unoptimized={true}
                    width={72}
                    height={100}
                    alt="Dependable supervision and execution"
                    src="/img/hiredevelopers/dependabe_icon.png"
                  />
                </div>
                <div className="developer_box_content">
                  Dependable supervision and execution
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div
                className="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box_icon_top">
                  <Image unoptimized={true}
                    width={62}
                    height={100}
                    alt="Optimized Coding - Logicspice"
                    src="/img/hiredevelopers/code_icon.png"
                  />
                </div>
                <div className="developer_box_content">Optimized Coding</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div
                className="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box_icon_top">
                  <Image unoptimized={true}
                    width={55}
                    height={100}
                    alt="deadlines developers"
                    src="/img/hiredevelopers/calendar_icon.png"
                  />
                </div>
                <div className="developer_box_content">
                  We take deadlines very seriously
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div
                className="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box_icon_top">
                  <Image unoptimized={true}
                    width={59}
                    height={100}
                    alt="Project confidentiality - Logicspice"
                    src="/img/hiredevelopers/nda_icon.png"
                  />
                </div>
                <div className="developer_box_content">
                  100% confidentiality - strict NDA terms
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div
                className="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box_icon_top">
                  <Image unoptimized={true}
                    width={88}
                    height={100}
                    alt="moneyback gurantee - Logicspice"
                    src="/img/hiredevelopers/gaurantee_icon.png"
                  />
                </div>
                <div className="developer_box_content">
                  100% moneyback gurantee
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4">
              <div
                className="developer_mid_block_inner aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="box_icon_top">
                  <Image unoptimized={true}
                    width={53}
                    height={100}
                    alt="Availability and scope of expansion - logicspice"
                    src="/img/hiredevelopers/scope_icon.png"
                  />
                </div>
                <div className="developer_box_content">
                  Availability and scope of expansion
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content_hireexpert HireExpertContent">
        <div className="container">
          <p>
            Are you looking to hire developers in India for your next project?
            We offer a diverse pool of talent to meet your development needs.
            Whether you need to hire full stack developer, a Java developer, or
            any other specialized skills, our Indian developers are ready to
            bring your vision to life. With extensive expertise and a track
            record of delivering exceptional results, you can trust our team to
            drive your project&apos;s success. Hire Indian developers today and
            experience the Logicspice difference.
          </p>
          <p>
            At Logicspice, you can hire software developer in India at a
            reasonable price. You can hire Mobile App and web Programmers for an
            hourly, monthly, or project basis. We have experts and experienced
            developers for CakePHP, Laravel, WordPress, and Mobile Applications
            (Android apps &amp; iOS apps) development.
          </p>

          <p>
            Logicspice has a remarkable footprint among the{" "}
            <Link target="_blank" href="/mobile-app-development">
              top mobile app development companies
            </Link>{" "}
            by providing affordable mobile apps and development services for
            more than 12 years.
          </p>

          <p>
            Our dedicated developers provide end-to-end web and mobile app
            development solutions, for startups to enterprises across the globe
            with their expertise and experience.
          </p>

          <p>
            Hire remote developers and programmers from Logicspice for your
            custom Mobile app development &amp; web development needs according
            your business requirements.
          </p>
        </div>
      </section>
      <section className="hire_dedicated_section">
        <div className="container">
          <h2 className="title_heading">Hire dedicated Developers Skills</h2>
          <div className="dedicated_container">
            <div className="dedicated_develop_mid_wrap">
              <div className="row">
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-python-developers">
                          <Image unoptimized={true}
                            width={48}
                            height={100}
                            alt="Hire Python Developers - Logicspice"
                            src="/img/hiredevelopers/python-hire-logo.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-python-developers">
                          Hire Python Developers
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Hire Python developers for your software development
                        needs.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-reactjs-developers">
                          <Image unoptimized={true}
                            width={48}
                            height={100}
                            alt="Hire ReactJS Developers - Logicspice"
                            src="/img/hiredevelopers/reactjs-hire-logo.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-reactjs-developers">
                          Hire ReactJS Developers
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Start your web development journey with the expertise of
                        ReactJS developers.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-react-native-developers">
                          <Image unoptimized={true}
                            width={48}
                            height={100}
                            alt="Hire React Native Developers - Logicspice"
                            src="/img/hiredevelopers/reactjs-hire-logo.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-react-native-developers">
                          Hire React Native Developers
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Hire React Native Developers to transform your ideas
                        into mobile apps.{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-android-app-developers">
                          <Image unoptimized={true}
                            width={51}
                            height={100}
                            alt="Hire Android App Developer - Logicspice"
                            src="/img/hiredevelopers/andoird_icon.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-android-app-developers">
                          Hire Android App Developer
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Our Android experts ensure code is written in the most
                        effective way possible.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-ios-app-developers">
                          <Image unoptimized={true}
                            width={47}
                            height={100}
                            alt="Hire iOS/ iPhone App Developer"
                            src="/img/hiredevelopers/apple_phn_icon.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-ios-app-developers">
                          Hire iOS App Developer
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        We offers experienced iOS app developers for custom iOS
                        application development.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-web-developers">
                          <Image unoptimized={true}
                            width={40}
                            height={100}
                            alt="Hire Dphp-developers - logicspice"
                            src="/img/hiredevelopers/web_developer_icon.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-web-developers">
                          Hire Web Developer
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Hire website developer from the hub of talented web
                        developers to attain your development needs.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-php-developers">
                          <Image unoptimized={true}
                            width={64}
                            height={100}
                            alt="Hire Dphp-developers - logicspice"
                            src="/img/hiredevelopers/php_icon.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-php-developers">
                          Hire PHP Developer
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Logicspice have team of dedicated PHP programmers who
                        will mould your idea into digital blueprints.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-cakephp-developers">
                          <Image unoptimized={true}
                            width={60}
                            height={100}
                            alt="Hire Cake PHP Developer Logicspice"
                            src="/img/hiredevelopers/cake_icon.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-cakephp-developers">
                          Hire CakePHP Developer
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Hire dedicated CakePHP programmers, who have a good mix
                        of knowledge &amp; skills.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-wordpress-experts">
                          <Image unoptimized={true}
                            width={58}
                            height={100}
                            alt="Hire Wordpress Developer - logicspice"
                            src="/img/hiredevelopers/wp_icon.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-wordpress-experts">
                          Hire Wordpress Developer
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Our expert Wordpress developers offers customized web
                        development at low cost.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-magento-experts">
                          <Image unoptimized={true}
                            width={50}
                            height={100}
                            alt="hire magento developers - logicspice"
                            src="/img/hiredevelopers/magento_icon.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-magento-experts">
                          Hire Magento Developer
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Hire certified, expert &amp; dedicated Magento
                        developers for full time and hourly.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-laravel-developers">
                          <Image unoptimized={true}
                            width={64}
                            height={100}
                            alt="hire laravel developers - logicspice"
                            src="/img/hiredevelopers/larvel_icon.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-laravel-developers">
                          Hire Laravel Developers
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Hire Laravel web developers from logicspice to develop
                        high performance Laravel web applications.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-codeignitor-developers">
                          <Image unoptimized={true}
                            width={51}
                            height={100}
                            alt="hire codeigniter developers - logicspice"
                            src="/img/hiredevelopers/codenator_icon.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-codeignitor-developers">
                          Hire Codeigniter Developers
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        We has expert CodeIgniter web developers to work with
                        your project at budget friendly rates.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-node-js-experts">
                          <Image unoptimized={true}
                            width={64}
                            height={100}
                            alt="hire node-js-experts developers - logicspice"
                            src="/img/hiredevelopers/node_icon.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-node-js-experts">
                          Hire Node.js
                          <br />
                          Experts
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Hire Node.js developers and programmers from logicspice
                        for best NodeJS eCommerce solutions development..
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-angular-js-experts">
                          <Image unoptimized={true}
                            width={55}
                            height={100}
                            alt="hire angular-js-developers developers - logicspice"
                            src="/img/hiredevelopers/angular_icon.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-angular-js-experts">
                          Hire Angular JS developers{" "}
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Hire our experts AngularJS developers to build fast,
                        responsive and scalable web applications.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-yii-developers">
                          <Image unoptimized={true}
                            width={54}
                            height={100}
                            alt="hire yii developers - logicspice"
                            src="/img/hiredevelopers/yii_icon.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-yii-developers">
                          Hire Yii
                          <br />
                          Developers{" "}
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Hire highly skilled Yii programmers and developers for
                        custom Yii PHP web application development.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-opencart-developers">
                          <Image unoptimized={true}
                            width={64}
                            height={100}
                            alt="hire opencart developers - logicspice"
                            src="/img/hiredevelopers/operat_icon.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-opencart-developers">
                          Hire Opencart Developers{" "}
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Our dedicated Opencart experts ensure code is written in
                        the most effective way possible.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-hybrid-mobile-app-developer">
                          <Image unoptimized={true}
                            width={59}
                            height={100}
                            alt="hire hybrid mobile app developers at logicspice"
                            src="/img/hiredevelopers/hydribd_icon.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-hybrid-mobile-app-developer">
                          Hire Hybrid mobile app developer
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Hire top rated hybrid mobile app developers from
                        logicspice for your next hybrid app development.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-quality-analyst">
                          <Image unoptimized={true}
                            width={58}
                            height={100}
                            alt="hire quality analyst at logicspice"
                            src="/img/hiredevelopers/quality_icon.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-quality-analyst">
                          Hire Quality Analyst
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Hire developer quality assurance tester to make your
                        website,software applications or mobile app bug free.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div
                    data-aos="fade-up"
                    className="dedicated_develop_col aos-init aos-animate"
                  >
                    <div className="dedicated_develop_col_inner">
                      <div className="dedicated_develop_icon_box">
                        <Link href="/hire-shopify-developers">
                          <Image unoptimized={true}
                            width={58}
                            height={100}
                            alt="hire shopify developers at logicspice"
                            src="/img/hiredevelopers/shopify_icon.png"
                          />
                        </Link>
                      </div>
                      <div className="dedicated_develop_title_box">
                        <Link href="/hire-shopify-developers">
                          Hire Shopify Developers
                        </Link>
                      </div>
                      <div className="dedicated_develop_content_box">
                        Are you looking to hire a Shopify Developer for a new
                        online store or want to keep an existing one running
                        smoothly?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="certificates certificationawardsecin dgd">
        <div className="container">
          <Certificationtabs />
        </div>
      </section>
      <section className="working_with">
        <div className="container">
          <h3
            className="title_heading title_heading_bgg"
            style={{ marginBottom: "30px" }}
          >
            Worked with 1500+ companies worldwide, from startups to enterprises.
          </h3>
          <Suspense fallback={<div>Loading ...</div>}>
            <Workingwith />
          </Suspense>
        </div>
      </section>

      <section className="requirement_section">
        <div className="container">
          <div className="requir_title">
            Talk to us Now!! even if you have very short term requirement.
          </div>
          <div className="requirment_btn">
            {/* <a className="btn btn-primary" onclick={toggleModal}>Enquire Now</a> */}
            <a className="btn btn-primary" onClick={toggleModal}>
                    <span>Enquire Now</span>
                  </a>
          </div>
        </div>
      </section>
      <section className="how_to_hire">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-8">
              <h2 className="title_heading">Hire Developer in 5 Easy Steps</h2>
              <div className="clearfix"></div>
              <ul>
                <li>
                  <span>
                    <Image unoptimized={true}
                      width={70}
                      height={100}
                      src="/img/hiredevelopers/HI1.png"
                      alt="HI1"
                    />
                  </span>{" "}
                  Raise Your Request
                </li>
                <li>
                  <span>
                    <Image unoptimized={true}
                      width={70}
                      height={100}
                      src="/img/hiredevelopers/HI2.png"
                      alt="HI2"
                    />
                  </span>{" "}
                  Discuss Your Requirment
                </li>
                <li>
                  <span>
                    <Image unoptimized={true}
                      width={70}
                      height={100}
                      src="/img/hiredevelopers/HI3.png"
                      alt="HI3"
                    />
                  </span>{" "}
                  Select Experts
                </li>
                <li>
                  <span>
                    <Image unoptimized={true}
                      width={70}
                      height={100}
                      src="/img/hiredevelopers/HI4.png"
                      alt="HI4"
                    />
                  </span>{" "}
                  Finalize the Terms
                </li>
                <li>
                  <span>
                    <Image unoptimized={true}
                      width={70}
                      height={100}
                      src="/img/hiredevelopers/HI5.png"
                      alt="HI5"
                    />
                  </span>{" "}
                  Assign and kick start
                </li>
              </ul>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="form_quote">
                <form
                  onSubmit={handleSubmit}
                  // action="/pages/requestquote"
                  // enctype="multipart/form-data"
                  // name="requestquote"
                  // id="requestquote"
                  // method="post"
                  // accept-charset="utf-8"
                >
                  <div style={{ display: "none" }}>
                    <input type="hidden" name="_method" value="POST" />
                  </div>
                  <h4>Get a Quote</h4>
                  <div className="form-group">
                    <input
                      onChange={handleChange}
                      name="name"
                      placeholder="Your Full Name*"
                      value={formData.name}
                      size="40"
                      className="form-control required"
                      type="text"
                      id="UserName"
                    />
                  </div>
                  <div className="FormError">{errors.usarnameerror}</div>
                  <div className="form-group">
                    <input
                      onChange={handleChange}
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      size="40"
                      className="form-control required email"
                      type="text"
                      id="UserEmail"
                    />
                  </div>
                  <div className="FormError">{errors.emailerror}</div>
                  <div className="form-group">
                    <input
                      onChange={handleChange}
                      name="phone_no"
                      placeholder="Phone Number"
                      value={formData.phone_no}
                      size="40"
                      className="form-control"
                      type="text"
                      id="UserPhoneNo"
                    />
                  </div>
                  <div className="FormError">{errors.phoneerror}</div>
                  <div className="form-group">
                    <textarea
                      onChange={handleChange}
                      name="message"
                      placeholder="Your Message*"
                      size="40"
                      className="form-control required"
                      id="UserMessage"
                      value={formData.message}
                    ></textarea>
                  </div>
                  <div className="FormError">{errors.messageerror}</div>
                  <div className="form-group"></div>
                  <div id="captcha_msg_contact2"></div>
                  <input
                    type="hidden"
                    id="contact_slugQ"
                    value=""
                    name="data[User][post_slug]"
                  />
                  <input
                    type="hidden"
                    value="http://www.logicspice.com/hire-developers"
                    name="data[User][post_url]"
                  />
                  <input
                    type="hidden"
                    id="contact_frQ"
                    value="Get A Quote for hire developer"
                    name="data[User][product_name]"
                  />
                  <div className="form-group">
                    <div
                      className="display_success_message"
                      id="quote_success_message"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="display_error_message"
                      id="quote_error_message"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                  <div className="form-group buttonSubmit">
                    <div className="form-group-recaptcha">
                      <ReCAPTCHA
                        key={recaptchaKey}
                        sitekey={recaptchaKey}
                        onChange={onRecaptchaChange}
                      />
                      <div className="gcpc FormError" id="captcha_msg">
                        {errors.reacptchaerror}
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      id="submitquote"
                      title="Submit"
                      className="btn btn-primary"
                      size="30"
                      label=""
                      type="submit"
                      value="Submit"
                    />

                    {/* <div className="loadloader side_page" id="loadloaderH">
                      <Image unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/loading-old.gif"
                        alt=""
                      />
                    </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_now">
        <div className="container">
          <div className="contact_now_wraper">
            <div data-aos="fade-right" className="contact_now_btn  ">
              <a className="btn btn-primary" onClick={toggleModal}>
                Contact Now &nbsp; <i className="fa fa-angle-right"></i>
              </a>
            </div>
            <div className="conatct_title">
              Let&apos;s have a quick call to better understand about your idea
              of application.
            </div>
          </div>
        </div>
      </section>

      <section className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image unoptimized={true}
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
      </section>

      <Footer />
    </>
  );
};

export default Page;
