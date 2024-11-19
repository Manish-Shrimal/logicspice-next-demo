"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Image from "next/image";
import Link from "next/link";
import "../../../../public/css/font-awesome.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
const Page = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.35,
    centerMode: true,
    vertical: false,
    autoplay: true,
    arrows: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  var clientfeadback = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

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

      <section className="laravel-banner VideoCreationServicesBanners">
     
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-7"> 
              <div className="laravel-banner-txt">
                <h1>
                  <strong className="LaravelBannerHadding">Video</strong>{" "}
                  Creation Services
                </h1>
                <div className="LaravelText">
                  <strong style={{ color: "#ff2d20" }}>
                    <i>Expert Video Creation Solutions</i>
                  </strong>{" "}
                  <br />
                  We offer the best, highly engaging, and compelling videos that
                  speak clearly to your audience. As a leading video creation
                  company, we combine creativity, technology, and expertise to
                  produce videos that engage and convert. From creating animated
                  videos and professional editing services to an entire package
                  of production services, our team masters it, giving life to
                  your visions that leave your audiences mesmerized. We focus on
                  creating content that sticks with your audience.
                </div>
                {/* <div className="LaravelOffers">
                  <h3>
                    <span>Limited Period Offer:</span> 50% discount for the
                    first 50 hours of Laravel development.
                  </h3>
                </div> */}
                <div className="laravel-anquire">
                  <div className="btn btn-primary" onClick={openModal}>
                    <a>Enquire Now</a>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Video Creation"
                      />
                    }
                  </div>
                  <Link
                    href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
                    target="_blank"
                  >
                    <div className="WhatsappIcon">
                      <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                        <div className="coccoc-alo-ph-circle"></div>
                        <div className="coccoc-alo-ph-circle-fill"></div>
                        <div className="coccoc-alo-ph-img-circle"></div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-5">
              <div className="page_img LaravelBannerImg">
                <Image
                  width={450}
                  height={500 / (100 / 100)}
                  src="/img/videocreation/video-creation-banner-img.png"
                  alt="Creation Services"
                />
              </div>
            </div>
           
          </div>
        </div>
      </section>

      <section className="laravel-descriptions VideoCreationDescription">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-5 pull-right">
              <div className="laravel_img">
                <Image
                  width={310}
                  height={500 / (100 / 100)}
                  src="/img/videocreation/video-creation-img.png"
                  alt="laravel web development"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-7 pull-left">
              <div className="laravel-descriptions-bx" dir="ltr">
                <h2>Video Creation Services</h2>
                <h3>The Importance of Video Creation Services </h3>
                <p>
                  Video creation services are key to making your business look
                  great. Videos can be so engaging that they are able to grab
                  the attention of someone who normally would not be interested
                  in your business and keep it. It can help reveal the
                  personality of your brand and message to make it easier for
                  people to feel a personal connection with you. Besides, videos
                  are very shareable—indeed, almost contagious—and will help
                  spread the word about your business and create brand
                  awareness. <strong>Professional video services</strong>{" "}
                  increase your capacity to convert viewers into customers:
                  registration, purchases, or inquiries. Videos also have a
                  positive effect on SEO that promotes you up the search
                  results. Truly, high-quality video content is a powerful way
                  to grow your business and connect with your audience.
                </p>
                <h3>Boost Your Business with Great Video Content!</h3>
                Imagine displaying your products with vibrant, dynamic videos
                that steal attention and tell your brand’s story. Statistics
                show that businesses using product videos see a significant
                increase in online sales—up to 144%! Videos help customers
                understand and connect with your products better than text or
                images alone. At <Link href="/">Logicspice</Link>, a leading
                video creation company, we’re passionate about helping you make
                videos online that look great and deliver results. Our expert
                team collaborates with you to craft videos that reflect your
                brand’s unique voice and resonate with your target audience. Our
                professional video content creation services are flexible and
                affordable, giving you exactly what you need. Let’s make your
                brand stand out! We measure success through specific KPIs that
                align with your business goals, such as increased efficiency,
                improved customer satisfaction, and return on investment (ROI).
                Regular feedback and performance analysis help us refine the
                solution over time.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="ReadyMadeScriptSection">
        <div className="container">
          <div className="TopHadding">
            <h2>Our Ready-Made Softwares Developed Using Laravel</h2>
            <p>
              Discover how our range of ready-made solutions can boost your
              Laravel development experience, taking your business to the next
              level. Whether you're in need of a robust Job Board, efficient
              Logistic Management System, or optimized Recruitment Management
              System, these software offer powerful solutions that can be
              further customized to your requirements as well.
            </p>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="ReadyMadeScriptBx">
                <div className="ReadyMadeScriptImg">
                  <Image
                    width={350}
                    height={500 / (100 / 100)}
                    className=""
                    src="/img/laraveldevelopment/job-board-product-img.png"
                    alt="Job Board Software"
                    style={{ display: "inline-block" }}
                  />
                </div>
                <div className="ReadyMadeScriptTxt">
                  <h3>
                    <Link href="/softwares/job-board-software">
                      Job Board Software
                    </Link>
                  </h3>
                  <p>
                    Streamline your Business Hiring with our Job Board Software
                    built on the Laravel framework.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="ReadyMadeScriptBx">
                <div className="ReadyMadeScriptImg">
                  <Image
                    width={350}
                    height={500 / (100 / 100)}
                    className=""
                    src="/img/laraveldevelopment/logisticsoftware-product-img.png"
                    alt="Logistic Software"
                    style={{ display: "inline-block" }}
                  />
                </div>
                <div className="ReadyMadeScriptTxt">
                  <h3>
                    <Link href="/softwares/logistic-marketplace-software">
                      Logistic Software
                    </Link>
                  </h3>
                  <p>
                    Efficiently enhance your logistics operations smoothly using
                    our Logistic Management System.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="ReadyMadeScriptBx">
                <div className="ReadyMadeScriptImg">
                  <Image
                    width={350}
                    height={500 / (100 / 100)}
                    className=""
                    src="/img/laraveldevelopment/rms-product-img.png"
                    alt="Recruitment Management Software"
                    style={{ display: "inline-block" }}
                  />
                </div>
                <div className="ReadyMadeScriptTxt">
                  <h3>
                    <Link href="/softwares/recruitment-management-software">
                      Recruitment Management Software
                    </Link>
                  </h3>
                  <p>
                    Simplify your hiring process with our Recruitment Management
                    Software built on Laravel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="laravel-devlopments-services">
        <div className="container">
          <h2>Our Video Creation Services</h2>
          <div className="laravel-services-bx-top">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box1">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/videocreation/corporate-video-icon.png"
                        alt="laravel web development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/videocreation/corporate-video-white-icon.png"
                        alt="laravel web development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Corporate Video Production</h3>
                  <p>
                    Tell your brand’s story, values, and offerings with our
                    corporate video production services. We help you create
                    compelling narratives that engage and inspire.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box2">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/videocreation/promotional-videos-icon.png"
                        alt="laravel web development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/videocreation/promotional-videos-white-icon.png"
                        alt="laravel web development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Promotional Videos</h3>
                  <p>
                    Promote your products or services with powerful promotional
                    videos that capture attention and drive action. Our team
                    ensures your message is clear and impactful.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box3">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/videocreation/animated-videos-icon.png"
                        alt="laravel web development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/videocreation/animated-videos-white-icon.png"
                        alt="laravel web development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Animated Videos</h3>
                  <p>
                    For something more creative, our animated video creation
                    services bring your ideas to life with engaging animations
                    that simplify complex concepts.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box4">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/videocreation/social-media-videos-icon.png"
                        alt="laravel web development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/videocreation/social-media-videos-white-icon.png"
                        alt="laravel web development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Social Media Videos</h3>
                  <p>
                    Enhance your social media presence with short, shareable
                    videos tailored for platforms like Instagram, Facebook, and
                    LinkedIn.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box5">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/videocreation/explainer-videos-icon.png"
                        alt="laravel web development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/videocreation/explainer-videos-white-icon.png"
                        alt="laravel web development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Explainer Videos</h3>
                  <p>
                    Educate your audience with explainer videos that break down
                    your products, services, or processes in a clear and
                    engaging way.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4">
                <div className="laravel_service_box ">
                  <div className="laravel-services-icon laravel_service_box6">
                    <i>
                      <Image
                        width={80}
                        height={100}
                        className="widout-hover"
                        src="/img/videocreation/video-editing-icon.png"
                        alt="laravel web development"
                      />
                      <Image
                        width={80}
                        height={100}
                        className="on-hover"
                        src="/img/videocreation/video-editing-white-icon.png"
                        alt="laravel web development"
                      />
                      <div className="mask"></div>
                    </i>
                  </div>
                  <h3>Video Editing Services</h3>
                  <p>
                    Our professional video editing services ensure your content
                    is polished and professional, from trimming and cutting to
                    adding special effects and soundtracks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel_core_features_section">
        <div className="container">
          <h2>Core Features of Video Creation Services</h2>
          {/* <p className="laravel_core_sub">
            Laravel is open source PHP framework blessed with MVC architectural
            pattern.
            <br /> The Laravel Framework works great{" "}
          </p> */}
          <div className="laravel_core_features_bx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/videocreation/concept-development-icon.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Concept Development</h3>
                    <p>
                      We brainstorm and plan to develop a clear vision for your
                      video, including scripting, storyboarding, and defining
                      the overall message and goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/videocreation/professional-filming-icon.png"
                      alt="img4"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Professional Filming</h3>
                    <p>
                      Using advanced cameras and equipment, we capture crisp,
                      clear footage, ensuring every shot is well-composed and
                      visually appealing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/videocreation/creative-editing-icon.png"
                      alt="img2"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Creative Editing</h3>
                    <p>
                      We edit the footage to create a polished final product,
                      including cutting and arranging clips, adding transitions,
                      and incorporating special effects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/videocreation/animation-motion-graphics-icon.png"
                      alt="img5"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Animation and Motion Graphics</h3>
                    <p>
                      We use animation and motion graphics to add visual
                      interest and explain complex ideas creatively.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/videocreation/sound-design-icon.png"
                      alt="img3"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Sound Design</h3>
                    <p>
                      We enhance your video with effective sound design,
                      including background music, sound effects, and voiceovers
                      that support your message.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/videocreation/customization-icon.png"
                      alt="img6"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Customization</h3>
                    <p>
                      We offer various customization options to align your video
                      with your brand’s style, including custom graphics, color
                      schemes, and branding elements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/videocreation/multiple-formats-icon.png"
                      alt="img6"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Multiple Formats</h3>
                    <p>
                      We deliver videos in various formats optimized for
                      different platforms and uses, ensuring your content is
                      perfect for each specific platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="laravel_core_featureBox">
                  <div className="laravel_core_features_img">
                    <Image
                      width={50}
                      height={100}
                      src="/img/videocreation/professional-consultation-icon.png"
                      alt="img6"
                    />
                  </div>
                  <div className="laravel_core_features_detail">
                    <h3>Professional Consultation</h3>
                    <p>
                      Many video creation services include expert consultation
                      to guide you through the process. This helps ensure that
                      the final product meets your objectives and effectively
                      communicates your message.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="laravel_choose_features_section">
        <div className="container">
          <h2>
            Why Choose Logicspice for
            <br /> Video Creation?
          </h2>
          {/* <p className="laravel_core_sub2">
            Laravel is open source PHP framework blessed with MVC architectural
            pattern.
            <br /> The Laravel Framework works great{" "}
          </p> */}
          <div className="laravel_choose_features_bx">
            <div className="row">
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img1">
                    <Image
                      width={60}
                      height={100}
                      src="/img/videocreation/expert-team-icon.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Expert Team</h3>
                    <p>
                      Our team consists of experienced videographers, editors,
                      and animators who bring creativity and expertise to every
                      project. We are dedicated to delivering the best video
                      creation services that meet your expectations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 " data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img3">
                    <Image
                      width={60}
                      height={100}
                      src="/img/videocreation/cutting-edge-technology-icon.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Cutting-Edge Technology</h3>
                    <p>
                      We use the latest tools and technology in video production
                      to ensure high-quality results. Our video creation agency
                      stays updated with the most recent trends in the industry,
                      offering you innovative and effective solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose ">
                  <div className="laravel_choose_features_img laravel_choose_features_img2">
                    <Image
                      width={60}
                      height={100}
                      src="/img/videocreation/customized-solutions-icon.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Customized Solutions</h3>
                    <p>
                      We offer customized video creation services tailored to
                      your brand’s goals and objectives, whether you need a
                      single video or a full-fledged video campaign.
                    </p>
                  </div>
                </div>
              </div>

              

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img4">
                    <Image
                      width={60}
                      height={100}
                      src="/img/videocreation/end-to-end-services-icon.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>End-to-End Services</h3>
                    <p>
                      From concept development to final delivery, we provide
                      end-to-end video creation services, ensuring a smooth,
                      hassle-free experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-right">
                <div className="libraries_laravel_choose">
                  <div className="laravel_choose_features_img laravel_choose_features_img5">
                    <Image
                      width={60}
                      height={100}
                      src="/img/videocreation/competitive-pricing-icon.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Competitive Pricing</h3>
                    <p>
                      Get the best video creation services at competitive
                      prices. Our packages are affordable and designed to give
                      you the best quality possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6" data-aos="fade-left">
                <div className="libraries_laravel_choose libraries_laravel_choose-right">
                  <div className="laravel_choose_features_img laravel_choose_features_img6">
                    <Image
                      width={60}
                      height={100}
                      src="/img/videocreation/fast-turnaround-time-icon.png"
                      alt="img1"
                    />
                  </div>
                  <div className="laravel_choose_details">
                    <h3>Fast Turnaround Time</h3>
                    <p>
                      We understand the importance of meeting deadlines. Our
                      services are designed to deliver high-quality results,
                      without compromising on quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 main_btn_hire">
              <div className="btn btn-primary" onClick={openModal}>
                <a>Enquire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Video Creation"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="laravel-portfolio-php-dev">
        <h2>Our Laravel Portfolio</h2>
        <div className="laravel-slider-bx">
          <div id="laravel-slader" className="">
            <Slider {...settings}>
              <div className="php-item SalesagySite">
                <Link href="https://salesagy.com/" target="_blank">
                  <Image
                    width={900}
                    height={500 / (100 / 100)}
                    src="/img/laraveldevelopment/salesagy-banner.png"
                    alt="salesagy"
                  />
                </Link>
                <Link
                  href="https://salesagy.com/"
                  target="_blank"
                  className="visit-site"
                >
                  VISIT SITE
                </Link>
              </div>
              <div className="php-item">
                <Link
                  href="https://iepwritingcollaborative.com/"
                  target="_blank"
                >
                  <Image
                    width={900}
                    height={500 / (100 / 100)}
                    src="/img/laraveldevelopment/iep-banner-new.png"
                    alt="IEP Jobs"
                  />
                </Link>
                <Link
                  href="https://iepwritingcollaborative.com/"
                  target="_blank"
                  className="visit-site"
                >
                  VISIT SITE
                </Link>
              </div>
              <div className="php-item">
                <Link href="https://www.designerstrends.com/" target="_blank">
                  <Image
                    width={900}
                    height={500 / (100 / 100)}
                    src="/img/laraveldevelopment/designerstrends-banner-new.png"
                    alt="designerstrends"
                  />
                </Link>
                <Link
                  href="https://www.designerstrends.com/"
                  target="_blank"
                  className="visit-site"
                >
                  VISIT SITE
                </Link>
              </div>
            </Slider>
          </div>
        </div>
      </section> */}

      {/* <section className="LaravelTestimonialSection">
        <div className="container">
          <h2>Client Feedback</h2>
          <div className="LaravelTestimonialMain">
            <div id="slide-clientfeadback" className="owl-carousel">
              <Slider {...clientfeadback}>
                <div className="LaravelTestimonialBx">
                  <div className="QuotesLaravel">
                    <Image
                      width={100}
                      height={100}
                      src="/img/laraveldevelopment/laravel-quotes.png"
                      alt="quotes"
                    />
                  </div>
                  <div className="LaravelTestimonial">
                    <p>
                      Our experience with Logicspice in providing services in
                      our existing project has been nothing short of
                      exceptional. The team&apos;s expertise and dedication to
                      our project were evident from day one. They translated our
                      requirements into a robust and scalable solution. The open
                      communication and regular updates kept us in the loop,
                      making the entire development process smooth and
                      enjoyable. We highly recommend Logicspice for anyone
                      seeking top level Laravel development services.
                    </p>
                    <h4>John Welkins</h4>
                    <h6>Greece</h6>
                  </div>
                </div>

                <div className="LaravelTestimonialBx">
                  <div className="QuotesLaravel">
                    <Image
                      width={100}
                      height={100}
                      src="/img/laraveldevelopment/laravel-quotes.png"
                      alt="quotes"
                    />
                  </div>
                  <div className="LaravelTestimonial">
                    <p>
                      Choosing Logicspice for our webservices API development
                      was a game changer for us. Their team&apos;s proficiency
                      in Laravel, coupled with their commitment to client
                      satisfaction, resulted in an innovative solution for our
                      business. From intricate functionalities to a
                      user-friendly interface, they exceeded our expectations at
                      every turn. Working with them was a collaborative and
                      rewarding experience. We appreciate their efforts and look
                      forward to future collaborations.
                    </p>
                    <h4>Emma Johnson</h4>
                    <h6>Germany</h6>
                  </div>
                </div>

                <div className="LaravelTestimonialBx">
                  <div className="QuotesLaravel">
                    <Image
                      width={100}
                      height={100}
                      src="/img/laraveldevelopment/laravel-quotes.png"
                      alt="quotes"
                    />
                  </div>
                  <div className="LaravelTestimonial">
                    <p>
                      We extend our sincere thanks to Logicspice. The
                      team&apos;s technical knowledge and attention to detail
                      were evident throughout the project. They not only
                      delivered a high-performing Laravel based website but also
                      showcased flexibility in accommodating changes and
                      providing timely updates. It&apos;s rare to find a team
                      that combines skill with such a client-centric approach.
                      We&apos;re delighted with the results and would recommend
                      Logicspice without hesitation.
                    </p>
                    <h4>Mohammad Ahmed</h4>
                    <h6>United Arab Emirates</h6>
                  </div>
                </div>

                <div className="LaravelTestimonialBx">
                  <div className="QuotesLaravel">
                    <Image
                      width={100}
                      height={100}
                      src="/img/laraveldevelopment/laravel-quotes.png"
                      alt="quotes"
                    />
                  </div>
                  <div className="LaravelTestimonial">
                    <p>
                      Working with Logicspice to develop a dynamic website was a
                      strategic decision for our company. Their team&apos;s
                      depth of knowledge in Laravel, coupled with their
                      professionalism, ensured the success of our project. The
                      final product exceeded our expectations, and the ongoing
                      support provided post-launch has been invaluable. If
                      you&apos;re in search of a reliable partner, Logicspice is
                      the way to go.
                    </p>
                    <h4>Maria Rodriguez</h4>
                    <h6>Venezuela</h6>
                  </div>
                </div>

                <div className="LaravelTestimonialBx">
                  <div className="QuotesLaravel">
                    <Image
                      width={100}
                      height={100}
                      src="/img/laraveldevelopment/laravel-quotes.png"
                      alt="quotes"
                    />
                  </div>
                  <div className="LaravelTestimonial">
                    <p>
                      Our experience with Logicspice has been truly remarkable.
                      Their ability to develop complex projects combined
                      technical excellence with a collaborative approach. The
                      team&apos;s ability to understand and implement our vision
                      was commendable. The end result was a sophisticated
                      solution that has greatly contributed to our business
                      objectives. We appreciate the hard work and dedication of
                      the entire team at Logicspice.
                    </p>
                    <h4>William Turner</h4>
                    <h6>United States of America</h6>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section> */}

      <section className="ecommerce_faq_section" id="faq">
        <div className="container">
          <div className="ecommerce__Quick_FAQ_Script">
            <div className="row">
              <div className="col-md-5" data-aos="fade-up">
                <h4 className="title_main">
                  Frequently <br />
                  Asked Questions
                </h4>
                <div className="FaqImgBx">
                  <Image
                    width={500}
                    height={500 / (100 / 100)}
                    src="/img/marketplacesoftware/FaqLaravelImg.png"
                    alt="laravel web development"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="ecommerce__Quick_FAQ CustomQuickFAQScript">
                  <MDBAccordion v-model="activeItem" borderless>
                    <MDBAccordionItem
                      headerTitle="What kinds of videos can you make?"
                      collapseId="flush-collapse1"
                    >
                      <p>
                        We create all kinds of videos, including Promo videos,
                        explainer videos, animation videos, business/corporate
                        videos, video demonstrations for products, training
                        videos, and social media videos.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What does a video-making process look like?"
                      collapseId="flush-collapse2"
                    >
                      <p>
                        From our first consultation right through to scripting,
                        storyboarding, production, editing, and delivery, we
                        will collaborate with you every step of the way.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Will you help write the script for the video?"
                      collapseId="flush-collapse3"
                    >
                      <p>
                        Yes, we script for you or help you develop your ideas to
                        ensure the video communicates your message.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What is the cost of video production?"
                      collapseId="flush-collapse4"
                    >
                      <p>
                        It varies from the duration of a video and how complex
                        it is. Get in touch with a specific quote relative to
                        your needs.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="Can I request changes after the video is completed?"
                      collapseId="flush-collapse5"
                    >
                      <p>
                        What we include is up to a couple of rounds of revisions
                        in order to make sure you are happy with the final
                        video. Additional charges may be billed separately.
                      </p>
                    </MDBAccordionItem>

                    <MDBAccordionItem
                      headerTitle="What formats do you deliver the final video in?"
                      collapseId="flush-collapse6"
                    >
                      <p>
                        We deliver videos in various formats, including MP4,
                        AVI, and MOV, depending on your preferences and where
                        you plan to use the video.
                      </p>
                    </MDBAccordionItem>
                    <MDBAccordionItem
                      headerTitle="Can I use the videos on different platforms?"
                      collapseId="flush-collapse7"
                    >
                      <p>
                        Absolutely! Once we deliver your video, you can use it
                        across multiple platforms, including your website,
                        social media channels, and marketing campaigns, to reach
                        a wider audience.
                      </p>
                    </MDBAccordionItem>
                  </MDBAccordion>
                </div>
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
