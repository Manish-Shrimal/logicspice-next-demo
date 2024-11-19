"use client";
import Link from "next/link";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/company/company.css";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Contactusmodel from "@/app/Components/Contactusmodel";
import React, { useEffect, useState } from "react";
import Enquirymodal from "@/app/Components/Enquirymodal";
import "../../../../public/css/font-awesome.css";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const [activeTab, setActiveTab] = useState("tab1");

  const opendiv = (tabId) => {
    setActiveTab(tabId);
  };

  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };

  const openModal = () => {
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Navbar />
      <section class="about-us">
        <div class="container">
          <h1 class="text-center">
            <strong> About Us </strong>
          </h1>
          <p class="text-center">Find out what separates us from the rest</p>
          <div class="ab-box-new">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="pricing-plan pricing-plan-1">
                  <div class="icon text-center">
                    <Image
                      width={64}
                      height={100}
                      src="/img/ourteam/ab-icon1.png"
                      alt="tred-banch"
                    />
                  </div>
                  <h3 class="text-center">Our Credibility</h3>
                  <p class="text-center">
                    We have been in this industry for more than a decade now and
                    we are shaping up to be the best service provider online and
                    even offline. Our stable of satisfied customers can speak
                    for us. We work towards the ultimate goal of each and every
                    business, making them a name to reckon in this highly
                    competitive world.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="pricing-plan pricing-plan-2">
                  <div class="icon text-center">
                    <Image
                      width={64}
                      height={100}
                      src="/img/ourteam/ab-icon2.png"
                      alt="tred-banch"
                    />
                  </div>
                  <h3 class="text-center">Our Creativity</h3>
                  <p class="text-center">
                    Logicspice authored some of the brightest ideas ever known.
                    Our minds are working 24/7 and are constantly embracing
                    change as it unfolds. You can be sure that when an update in
                    Internet technology is available, we will implement it to
                    your business&apos;s advantage.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="pricing-plan pricing-plan-3">
                  <div class="icon text-center">
                    <Image
                      width={64}
                      height={100}
                      src="/img/ourteam/ab-icon3.png"
                      alt="tred-banch"
                    />
                  </div>
                  <h3 class="text-center">Our Reliability</h3>
                  <p class="text-center">
                    We are staffed with competent professionals who certainly
                    know what they are doing. We know what we should do and are
                    good at what we do. You can rely on our efficiency to
                    translate your business goals into reality.
                  </p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="pricing-plan pricing-plan-4">
                  <div class="icon text-center">
                    <Image
                      width={64}
                      height={100}
                      src="/img/ourteam/ab-icon4.png"
                      alt="tred-banch"
                    />
                  </div>
                  <h3 class="text-center">Our Capability</h3>
                  <p class="text-center">
                    Our bright e-marketing ideas are backed up by advanced
                    technology. We are equipped not just with bright minds but
                    the right tools as well. You can be sure that what we think
                    out is possible with the devices that we have on hand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="plus">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="img-section">
                <Image
                  width={381}
                  height={100}
                  src="/img/ourteam/18+.png"
                  alt="tred-banch"
                />
                <div
                  class="text"
                  style={{ marginLeft: "116px", marginTop: "5px" }}
                >
                  {" "}
                  YEARS OF EXPERIENCE
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <p class="sub-title">
                Logicspice has been a reliable name in anything and everything
                that has something to do with the Mobile apps and Internet
                industry. Firstly, we design compelling websites that each and
                every person in the Internet community would not resist to
                click. We also do mobile apps development (iPhone and Android)
                and web application development based on tried-and-tested
                subsystems that work with any business class and we also have an
                expert team providing bespoke or customized software
                development.
                <br />
                <br />
                Logicspice is based in India and UK, but has since served
                satisfied clients from all over the world with its experienced
                team for iPhone and Android apps development, e-commerce
                solutions, and other highly complex and customized software
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="our-mission">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <ul className="nav nav-tabs abouts-nav-tab">
                <li
                  id="tab1_li"
                  className={`ddlj ${activeTab === "tab1" ? "active" : ""}`}
                  onClick={() => opendiv("tab1")}
                >
                  <a href="javascript:void(0)">Company Overview</a>
                </li>
                <li
                  id="tab2_li"
                  className={`ddlj ${activeTab === "tab2" ? "active" : ""}`}
                  onClick={() => opendiv("tab2")}
                >
                  <a href="javascript:void(0)">Our Business Philosophy</a>
                </li>
              </ul>

              <div className="tab-content">
                <div
                  className={`costomer_tab tab-pane rj ${
                    activeTab === "tab1" ? "active" : ""
                  }`}
                  id="tab1"
                >
                  <p style={{ marginTop: "20px" }}>
                    Logicspice has been making a big difference in software
                    development business since 2006. We do mobile apps
                    development, web application development, hosting, branding,
                    search engine marketing, and a lot more. Our team of
                    professionals is always ready to take on any task that would
                    help boost every kind of business&apos;s stature in the
                    internet savvy digital world.
                  </p>
                  <br />
                  <p>
                    For the past decade, Logicspice has served varied businesses
                    from different fields. Industry wise, most industries we
                    served are dating and social networking, food/restaurant
                    booking, ecommerce, taxi booking, media and entertainment,
                    ticket booking are the major ones. Our e-commerce efforts
                    are flexible and can easily fit into any kind of business
                    model. That&apos;s how we manage to take on every challenge
                    that unfolds. And that&apos;s how we see surviving this
                    highly competitive arena in many years to come.
                  </p>
                  <br />
                  <p>
                    We are always up-to-date on what&apos;s hot and what&apos;s
                    not in computer technology, clearly believing that the
                    progress can make life easier for businesses to achieve
                    their most profitable goal.
                  </p>
                  <br />
                  <p>
                    At Logicspice, we do not know what resting on the laurel is
                    all about. We continue working, striving hard to offer the
                    best there is to our valuable customers. Every task that we
                    are asked to do comes out with Logicspice&apos;s brand of
                    quality that is incomparable along with the client&apos;s
                    seal of approval, which means the world to us.
                  </p>
                </div>
                <div
                  className={`costomer_tab tab-pane rj ${
                    activeTab === "tab2" ? "active" : ""
                  }`}
                  id="tab2"
                >
                  <p style={{ marginTop: "20px" }}>
                    Logicspice&apos;s workstation is always beaming with bright
                    new ideas. We are dedicated to embrace technology as it
                    unfolds. We have set our minds on an innovative mode. Every
                    time change occurs, we make sure that we are in the thick of
                    things. So we can offer the latest in Internet technology to
                    our clients and give them a good vantage point among the
                    rest.
                  </p>
                  <br />
                  <p>
                    Logicspice believes that the web business is a complex
                    world. One needs a well-rounded plan to be able to take
                    advantage of the many benefits on offer. However, once you
                    start finding how to tickle the Internet community, you are
                    well on your way of making your business succeed in whatever
                    e-commerce effort that you may take.
                  </p>
                  <br />
                  <p>
                    That is why Logicspice continue to brew competent e-commerce
                    solutions that tackle each and every aspect of Internet
                    marketing. We never leave out a factor to let no hint of
                    failure creeping in.
                    <br />
                    Also, Logicspice is powered by a reliable team of skilled
                    professionals who understands how fast-paced this particular
                    world is and has the energy to keep up. Our dependability
                    speaks a lot of our competency in making our promises to our
                    clients come alive. We are the most reliable choice in this
                    industry and beyond.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="img2-section">
                <Image
                  width={500}
                  height={100}
                  src="/img/ourteam/our-mission.png"
                  alt="tred-banch"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="our-work"
        className={`ds s-overlay mobile-overlay rocket-parallax s-parallax s-py-60 s-py-md-90 s-py-xl-100 c-gutter-60 text-center text-lg-left`}
        style={{ backgroundPosition: "50% 52px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>

            <div className="col-lg-6" style={{ margin: "50px 0px" }}>
              <ul className="nav nav-tabs abouts-nav-tab">
                <li
                  id="tab3_li"
                  className={`ddlj ${selectedTab === "tab1" ? "active" : ""}`}
                  onClick={() => handleTabClick("tab1")}
                >
                  <a href="javascript:void(0)">Our Work Strategy</a>
                </li>
                <li
                  id="tab4_li"
                  className={`ddlj ${selectedTab === "tab2" ? "active" : ""}`}
                  onClick={() => handleTabClick("tab2")}
                >
                  <a href="javascript:void(0)">Our Approach</a>
                </li>
              </ul>

              <div className="tab-content">
                <div
                  className={`costomer_tab tab-pane rj ${
                    selectedTab === "tab1" ? "active" : ""
                  }`}
                  id="tab1"
                >
                  <p style={{ marginTop: "20px" }}>
                    Logicspice understands the significance of competition in
                    every business venture. That&apos;s mainly because the
                    company is subjected to it itself. The way we deal with
                    competition is translated to how we make our clients win it
                    over the others as well.
                  </p>
                  <br />

                  <p>
                    Logicspice never stops improving. We never stop thinking out
                    fresh new ideas that could get our client&apos;s goal
                    across. We never stop finding an updated technology that
                    could translate a business&apos;s vision into reality. We
                    know that there is so much room for change, especially in
                    this kind of business. And when change unfolds, we make sure
                    that we are right through it.
                  </p>
                  <br />

                  <p>
                    It helps a lot that Logicspice is run by open-minded
                    individuals who are amicable to change. The rate of our
                    performance in delivering the results that our clients
                    wanted and needed has so much to do with our willingness to
                    revolutionize even our own concepts whenever it needs be.
                  </p>
                  <br />

                  <p>
                    Logicspice works closely with its clients. That&apos;s how
                    we know and understand their needs and wants. We have the
                    perfect tools and the most creative team to implement your
                    ideas and even give you a sight of some that have not
                    crossed your mind yet. Simply put, Logicspice has the best
                    solutions to make your business work for you!
                  </p>
                </div>
                <div
                  className={`costomer_tab tab-pane rj ${
                    selectedTab === "tab2" ? "active" : ""
                  }`}
                  id="tab2"
                >
                  <p style={{ marginTop: "20px" }}>
                    Logicspice put the highest value to its clients. That&apos;s
                    why our movement is always geared towards client&apos;s
                    satisfaction. We never rest until we see wide smiles in our
                    client&apos;s face, signaling fulfillment in what we have
                    done to his business.
                  </p>
                  <br />

                  <p>
                    Logicspice takes its cues from the desires and the
                    requirements of a specific client. We&apos;ll know what we
                    should do as soon as we meet you and have a good assessment
                    of what you want to happen in your business.
                  </p>
                  <br />

                  <p>
                    Our brand of service is specifically tailored to the kind of
                    client that we are dealing with each time. So you can be
                    sure that the solutions that we provide fit right into your
                    very requirement.
                  </p>
                  <br />

                  <p>
                    Logicspice is proud to claim high dependability rate. We
                    offer varied services in a courteous and professional
                    manner. We move fast, think forward, and accomplish task the
                    way they should be accomplished. And we put high regard on
                    the amount that you spend for trusting our capabilities.
                  </p>
                  <br />

                  <p>
                    You see, the efficiency of an Internet marketing campaign
                    cannot be measured on the price that you have to pay. We
                    clearly believe that an e-commerce solution does not have to
                    be expensive to be effective. It&apos;s all in the way the
                    project is handled. That&apos;s what we do best!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="testimonial-hire">
        <div class="container">
          <div id="testi-hire" class="owl-carousel hidedot">
            <Slider {...settings}>
              <div>
                <div class="">
                  <div class="media">
                    <div class="media-left">
                      <Image
                        width={100}
                        height={100}
                        class="media-object"
                        src="/img/hiredevelopers/kesepara.jpg"
                        alt="..."
                      />
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading">
                        C2C Ecommerce Website About Fashion
                      </h4>
                      <p>
                        &quot;Exactly the best team available online ! I have
                        been working and communicating with a few companies over
                        the internet and i didn&apos;t see a single better
                        company than logicspice. They are{" "}
                        <a
                          style={{ cursor: "pointer", color: "#31aae1" }}
                          class="show_data"
                        >
                          More...
                        </a>
                        <span class="hidendata" style={{ display: "none" }}>
                          {" "}
                          so skilled and professional. Their knowledge about
                          coding is incredible. And they never say
                          &quot;no&quot; or &quot;we can&apos;t&quot; to any
                          situation. Actually they are the best guys i have ever
                          work with in my life. Their communication, kindness
                          are so high level. Every step of my project, every
                          progress of my project we need maybe 15 to 20 changes.
                          And every time i wrote those needs to them, they did
                          their work at most 1-2 days. Their speed and work
                          quality is amazing ! Final word to those who wants to
                          hire them: don&apos;t think twice ! Literally they are
                          the best team in this website. And also their work
                          progress and milestones are literally clear as they
                          said. I am advising them to all of my friends and i
                          will hire them again for sure !&quot;
                        </span>
                      </p>
                      <div class="author_name">
                        Burak <span>Turkey</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="media">
                  <div class="media-left">
                    <Image
                      width={100}
                      height={100}
                      class="media-object"
                      src="/img/hiredevelopers/dsherevk.jpg"
                      alt="..."
                    />
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">
                      Website + Mobile App (iOs&Android)
                    </h4>
                    <p>
                      &quot;&quot;Manish was very cooperative and professional
                      during the project. The team was great, the project was
                      very complicated and they tried their best to complete it
                      with the best diligence. I{" "}
                      <a
                        style={{ cursor: "pointer", color: "#31aae1" }}
                        class="show_data"
                      >
                        More...
                      </a>
                      <span class="hidendata" style={{ display: "none" }}>
                        {" "}
                        will definitely contact this company in the future for
                        my project updates and would recommend to anyone who is
                        looking for a good quality work.&quot;
                      </span>
                    </p>
                    <div class="author_name">
                      Dmitry <span>Canada</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="media">
                  <div class="media-left">
                    <Image
                      width={100}
                      height={100}
                      class="media-object"
                      src="/img/hiredevelopers/sabdeen.jpg"
                      alt="..."
                    />
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">Build a Website</h4>
                    <p>
                      &quot;Best project management experience/journey I had.
                      Great team spirit, very flexible and understanding while
                      maintaining time and budget target.Top tear professional
                      communication and support.&quot;{" "}
                    </p>
                    <div class="author_name">
                      Sherif A. <span>Dubai</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="media">
                  <div class="media-left">
                    <Image
                      width={100}
                      height={100}
                      class="media-object"
                      src="/img/hiredevelopers/beatbuehlmann.jpg"
                      alt="..."
                    />
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">
                      Financial Web Application For Pensioners
                    </h4>
                    <p>
                      &quot;Excellent work again from logicspice! They
                      definitely put their best effort into the project along
                      with very valuable inputs regarding possible enhancements
                      of the web project. With logicspice{" "}
                      <a
                        style={{ cursor: "pointer", color: "#31aae1" }}
                        class="show_data"
                      >
                        More...
                      </a>
                      <span class="hidendata" style={{ display: "none" }}>
                        {" "}
                        you don&apos;t just hire someone to execute your project
                        specification but much more someone who helps you really
                        make good and sophisticated web project. The
                        communication is greate and feedback time very short. I
                        really can&apos;t find anything to criticise and will
                        definitely rehire soon as I&apos;m very happy with their
                        work. Thanks a lot to Manish and his team!&quot;
                      </span>
                    </p>
                    <div class="author_name">
                      Beat B. <span>Switzerland</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="media">
                  <div class="media-left">
                    <Image
                      width={100}
                      height={100}
                      class="media-object"
                      src="/img/hiredevelopers/tjulia1.jpg"
                      alt="..."
                    />
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">
                      Build a Social Networking Website With Payment System
                    </h4>
                    <p>
                      &quot;I hired this team for a very complex project that
                      involved handling many different types of users, payment
                      options, and social network integration. Extremely timely
                      and professional. Will use again!&quot;{" "}
                    </p>
                    <div class="author_name">
                      Tom J. <span>USA</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="enq-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 text-center">
              <div className="btn btn-primary" onClick={openModal}>
                <a>Enquire Now</a>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="About US"
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
