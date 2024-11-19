"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "../elements.css";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Contactusmodel from "@/app/Components/Contactusmodel";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
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
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Navbar />
      <section
        className="resources-header CareerBanners"
        // style={{
        //   background:
        //     "url(/img/images/33537_carrers.png)",
        // }}
      >
        <div className="container">
          <span>Career At Logicspice</span>
        </div>
      </section>
      <section className="breadcrems_header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Career</h1>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Career
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content_area_resources">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-8">
              <div className="content_left_bar_resources">
                {/* <!--Because the_content() works only inside a WP Loop --> */}
                <div className="entry-content-page">
                  <h2>Career At Logicspice</h2>
                  <p>
                    LogicSpice provides a platform to show the skills of the
                    most creative, forward-thinking people of the IT field. We
                    are looking for highly-skilled &amp; talented candidates to
                    join our team. We believe in constant growth of individuals
                    complimented by the collective skills of the company as a
                    whole. We have developed a working environment that fosters
                    innovation, creativity and a hunger for constant upgradation
                    of ones skill sets, along with a healthy dose of fun.
                    <br />
                    We encourage our dedicated employees to achieve their
                    personal career goals. The different points of view they
                    bring, leads to superior business solutions for our clients.
                    We proactively capitalize on business and technology
                    opportunities that enable higher levels of performance.
                  </p>
                  <p>
                    We believe anyone who is part of our team is an asset.
                    Employees like working here because of the great teamwork
                    and the chance to solve challenging problems. We take both
                    your professional and personal development seriously,
                    supporting you in carving out your own individual career
                    path. We are keen in finding newer and bigger opportunities
                    and Projects for our Team along with numerous and
                    comprehensive tools in place to help them.
                  </p>
                  <p>
                    Your goals would be aligned with our overall business goals
                    and values. These goals will guide you through each year and
                    will be documented with your manager who will evaluate and
                    rate your overall performance. This is a key factor in
                    determining any performance bonus and future career
                    opportunities to the employees based on their contribution
                    to the company. We always offered challenging career
                    opportunity to all who wants to work with us.
                  </p>
                  <p>
                    LogicSpice has a unique corporate culture that fosters
                    growth of its people &amp; actively support diversity in the
                    workplace. We are committed to ensure that everyone, our
                    clients, our staff, are valued &amp; treated with respect.
                    We have kept the environment at Office with utmost
                    professionalism and with positive feelings.
                  </p>
                  <p>
                    Logic Spice is a dynamic IT organization, requiring people
                    who have a long-term view of the future. We operate in an
                    environment where every employee is stimulated to perform at
                    their best.
                  </p>
                  <p>
                    Work-life balance, non-working weekends, no stretched
                    working hours and an friendly work environment are few of
                    the many perks of working with us. We offer competitive
                    salaries, excellent benefits and inspired thinking.
                    <br />
                    We look forward to welcome you to our family!
                  </p>
                  <p>
                    Professional training is the key to acquiring the skills and
                    knowledge necessary for effective problem-solving in your
                    chosen field. Explore the{" "}
                    <Link href="http://plp.logicspice.com" target="_blank">
                      Placement Launch Pad
                    </Link>{" "}
                    for Training and Placements.
                  </p>
                  <h3>Current Opening</h3>
                  <p>
                    <strong>
                      Team Lead- Business Development / iPhone &amp; Android /
                      PHP
                    </strong>
                  </p>
                  <ul className="webvevtwo">
                    <li>
                      Identifying tasks and priorities with business and task
                      allocation
                    </li>
                    <li>
                      Establishing ways for team members to complete their
                      tasks.
                    </li>
                    <li>Defining milestones for a new project.</li>
                    <li>
                      Assigning targets to team, and ensuring that the targets
                      are met.
                    </li>
                    <li>
                      Direct and manage project development from beginning to
                      end.
                    </li>
                    <li>
                      Coach, mentor, motivate and supervise project team
                      members, and influence them to take positive action and
                      accountability for their assigned work.
                    </li>
                    <li>
                      Suggest new things &amp; methods of work to the team as
                      &amp; when required.
                    </li>
                    <li>
                      Prepare any risk mitigation plans in case there are any
                      delays are foreseen.
                    </li>
                    <li>
                      Check the status of assigned task daily and resolve issues
                      faced by the team members.
                    </li>
                    <li>
                      Communicating and delivering the project to the clients.
                    </li>
                    <li>Stay current of industry trends and new technology.</li>
                    <li>
                      Introduce new ideas and creative approaches to the team,
                      and explore those technologies that would benefit our
                      business.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Senior Business Analyst</strong>
                  </p>
                  <ul className="webvevtwo">
                    <li>Gathering Business requirements for the Project.</li>
                    <li>
                      Generating Leads from Social media, Bidding Portals &amp;
                      websites.
                    </li>
                    <li>
                      Collecting and analyzing the business requirement and
                      delivers the same to concern department.
                    </li>
                    <li>
                      Creating wireframes from Mobile and Web App through mock
                      up software.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Senior PHP Programmer</strong>
                  </p>
                  <ul className="webvevtwo">
                    <li>
                      Identifying tasks and priorities with business and
                      allocating for the developers.
                    </li>
                    <li>
                      Good experience and latest technology update with
                      frameworks-Core, WordPress, Cake php, Laravel,
                      Codeigniter, Magento
                    </li>
                    <li>
                      Managing the design, code, test, deployment and support of
                      applications, establishing ways for team members to
                      complete their tasks.
                    </li>
                    <li>
                      Responsible for identifying project risks &amp; defining
                      milestones for a new project.
                    </li>
                    <li>
                      Modifying and troubleshooting applications and programs
                      during the development phase.
                    </li>
                    <li>Well versed with all PHP frameworks.</li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Senior Testing Engineer (Quality Analyst)</strong>
                  </p>
                  <ul className="webvevtwo">
                    <li>
                      Present the timely status to the stakeholders and
                      management and instill confidence about the work being
                      done.
                    </li>
                    <li>
                      Prepare any risk mitigation plans in case there are any
                      delays are foreseen.
                    </li>
                    <li>
                      Understand the testing effort by analyzing the
                      requirements of project.
                    </li>
                    <li>
                      Develop the test plan for the tasks, dependencies and
                      participants required to mitigate the risks to system
                      quality and obtain stakeholder support for this plan.
                    </li>
                    <li>
                      Assign task to all Testing Team members and ensure that
                      all of them have sufficient work in the project.
                    </li>
                    <li>
                      Check the status of assigned task daily and resolve issues
                      faced by the team members
                    </li>
                    <li>
                      Communicating and delivering the project to the clients.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    <strong>
                      Senior Web Designer / HTML Designer / Graphic Designer
                    </strong>
                  </p>
                  <ul className="webvevtwo">
                    <li>
                      Experience in Photoshop, HTML, XHTML , CSS, HTML5/CSS3,
                      JQuery, AJAX, Responsive, Bootstrap
                    </li>
                    <li>
                      DIV Structure &amp; Responsive layouts knowledge is MUST
                    </li>
                    <li>
                      Good command over Adobe Photoshop, (Cascading Style
                      Sheet), HTML-Xhtml (DIV based Layouts), JavaScript, Adobe
                      Illustrator.
                    </li>
                    <li>
                      Knowledge of designing Mobile and Tablet applications
                    </li>
                    <li>Knowledge of working on&nbsp;graphic&nbsp;projects</li>
                    <li>
                      Experience in Logo, Brochure, Corporate Id, Print media
                      etc
                    </li>
                    <li>
                      Design and website banners, posters, leaflets, web mailers
                      and advertisements etc.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Senior Android App Developer</strong>
                  </p>
                  <ul className="webvevtwo">
                    <li>
                      Design and develop mobile applications, identifying and
                      institutionalizing suitable mobile technologies to meet
                      project/organization current and future goals.
                    </li>
                    <li>
                      Build the next generation of&nbsp;Android&nbsp;Apps for
                      Sales Enablement targeted at Marketing and Sales people.
                    </li>
                    <li>Conceptualize and design Mobile applications</li>
                    <li>
                      Testing the application on the&nbsp;Android&nbsp;Simulator
                      and on the actual&nbsp;Android&nbsp;Phone
                      and&nbsp;Android&nbsp;Tablets.
                    </li>
                    <li>Upload the application to the Google Play.</li>
                    <li>
                      Troubleshoot and debug software to determine causes of
                      errors and deciding what to do about them.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Senior iPhone App Developer</strong>
                  </p>
                  <ul className="webvevtwo">
                    <li>
                      Good experience and latest technology update with
                      Objective-C, Swift, Cocoa touch and iOS application
                      development.
                    </li>
                    <li>
                      Good understanding of autolayout, Object oriented
                      programming &amp; design patterns, JSON and XML parsing.
                    </li>
                    <li>
                      Knowledge of core data, SQLite and APNS notifications.
                    </li>
                    <li>
                      Able to deliver across the entire app life cycle -concept,
                      design, build, deploy, test, release to appstore &amp;
                      support.
                    </li>
                    <li>Worked on both&nbsp;iPhone, iPad application.</li>
                    <li>
                      Knowledge of using Facebook, twitter, Google Map APIs,
                      Apple Map
                    </li>
                    <li>
                      Collaborate with other departments (such as graphic
                      design, QA) to ensure timeliness and quality.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Senior Hybrid Application Developer</strong>
                  </p>
                  <ul className="webvevtwo">
                    <li>
                      Experience in design &amp; development of Cross platform
                      hybrid mobile application including iOS, Android and
                      windows mobile.
                    </li>
                    <li>
                      Proficient working experience on Ionic, PhoneGap and
                      cordova framework
                    </li>
                    <li>
                      Having good knowledge and hands on deployment for Android
                      &amp; IOS hybrid apps.
                    </li>
                    <li>
                      Experience with XCODE or SWIFT for native application
                      development
                    </li>
                    <li>Experience on Web Services</li>
                    <li>
                      Experience of validating mobile apps for hosting on iTune
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    <strong>IT Internship</strong>
                  </p>
                  <p>
                    Join our IT team and gain work experience in the field you
                    like. We provide internship in the following area,
                  </p>
                  <ul className="webvevtwo">
                    <li>Android &amp; iPhone development</li>
                    <li>Web Development</li>
                    <li>
                      <div
                        className="kno-ecr-pt kno-fb-ctx MWz3cf"
                        data-local-attribute="d3bn"
                        data-ved="0ahUKEwjf0PHL8azbAhXGqY8KHTHrAXoQ3B0IgAYoATBy"
                      >
                        <span data-original-name="Business analysis">
                          Business Analysis
                        </span>
                      </div>
                    </li>
                    <li>SEO</li>
                    <li>
                      Testing and Quality{" "}
                      <span data-original-name="Business analysis">
                        Analysis
                      </span>
                    </li>
                  </ul>
                  <h3>WHY LOGICSPICE?</h3>
                  <ul className="webvevtwo">
                    <li>
                      It is one of the fastest growing web &amp; mobile app
                      Development Company in the world.
                    </li>
                    <li>
                      It&apos;s a company where team members work on latest
                      technologies and on challenging projects
                    </li>
                    <li>
                      Excellent career opportunities for the right people.
                    </li>
                    <li>Where Sky is the Limit</li>
                    <li>Exciting work environment</li>
                  </ul>
                  <p>
                    <strong>HR Email:</strong> hr@logicspice.com
                  </p>
                  <p className="CareersBtn">
                    <Link href="/apply-now" className="btn btn-primary">
                      Submit Your Resume
                    </Link>
                    <Link
                      href="/applicationform"
                      className="btn btn-primary vieus oid"
                    >
                      Interview Application Form
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-3 col-sm-4">
              <div className="sidebar_right">
                <div id="tertiary" className="sidebar-container" role="complementary">
		<div className="sidebar-inner">
			<div className="widget-area">
			<aside id="text-3" className="widget widget_text">
                                    <h3 className="widget-title">Like us on Facebook</h3>
                        <div className="fb-page fb_iframe_widget" data-href="https://www.facebook.com/LogicSpice.company" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=1945351702357034&amp;container_width=243&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FLogicSpice.company&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline"><span style="vertical-align: bottom; width: 243px; height: 500px;"><iframe name="f140c73270ce5ca" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:page Facebook Social Plugin" style="border: medium none; visibility: visible; width: 243px; height: 500px;" src="https://www.facebook.com/v2.6/plugins/page.php?adapt_container_width=true&amp;app_id=1945351702357034&amp;channel=http%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FXBwzv5Yrm_1.js%3Fversion%3D42%23cb%3Df215369a84a8838%26domain%3D192.168.0.251%26origin%3Dhttp%253A%252F%252F192.168.0.251%252Ff400207f85196e%26relation%3Dparent.parent&amp;container_width=243&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FLogicSpice.company&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline" className="" width="1000px" height="1000px" frameborder="0"></iframe></span></div>
                        <div id="fb-root" className=" fb_reset"><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div><iframe name="fb_xdm_frame_http" allowtransparency="true" allowfullscreen="true" scrolling="no" id="fb_xdm_frame_http" aria-hidden="true" title="Facebook Cross Domain Communication Frame" tabindex="-1" style="border: medium none;" src="http://staticxx.facebook.com/connect/xd_arbiter/r/XBwzv5Yrm_1.js?version=42#channel=f400207f85196e&amp;origin=http%3A%2F%2F192.168.0.251" frameborder="0"></iframe><iframe name="fb_xdm_frame_https" allowtransparency="true" allowfullscreen="true" scrolling="no" id="fb_xdm_frame_https" aria-hidden="true" title="Facebook Cross Domain Communication Frame" tabindex="-1" style="border: medium none;" src="https://staticxx.facebook.com/connect/xd_arbiter/r/XBwzv5Yrm_1.js?version=42#channel=f400207f85196e&amp;origin=http%3A%2F%2F192.168.0.251" frameborder="0"></iframe></div></div><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div></div></div></div>
                        <script>(function(d, s, id) {
                          var js, fjs = d.getElementsByTagName(s)[0];
                          if (d.getElementById(id)) return;
                          js = d.createElement(s); js.id = id;
                          js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&amp;version=v2.6&amp;appId=1945351702357034";
                          fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk'));</script>
                        </aside>	
			</div>
		</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="events">
        <div className="container">
          <ul id="event-home" className="owl-carousel GlobalpagesSlider slide">
            <Slider {...settings}>
              <div>
                <li>
                  <div className="event_gallery_colsshom_col_box_in">
                    <div className="img-event">
                      <Image
                        width={350}
                        height={100 / (100 / 100)}
                        src="/img/ourteam/trip_photo.jpg"
                        alt="Office Trip 2019"
                        className="lazy"
                      />
                    </div>
                    <div className="even_img_name">Office Trip</div>
                    <div className="even_img_date">November 23, 2019</div>
                  </div>
                  <div className="event_gallery_colsshom_col_box_in_shadow"></div>
                </li>
              </div>
              <div>
                <li>
                  <div className="event_gallery_colsshom_col_box_in">
                    <div className="img-event">
                      <Image
                        width={350}
                        height={100 / (100 / 100)}
                        src="/img/ourteam/sunrise2019.jpg"
                        alt="Sunrise_Resort_2019img"
                        className="lazy"
                      />
                    </div>
                    <div className="even_img_name">Sunrise Resort</div>
                    <div className="even_img_date">July 27, 2019</div>
                  </div>
                  <div className="event_gallery_colsshom_col_box_in_shadow"></div>
                </li>
              </div>
              <div>
                <li>
                  <div className="event_gallery_colsshom_col_box_in">
                    <div className="img-event">
                      <Image
                        width={350}
                        height={100 / (100 / 100)}
                        src="/img/ourteam/appu_ghar_2018img.jpg"
                        alt="appu_ghar_2018img"
                        className="lazy"
                      />
                    </div>
                    <div className="even_img_name">Appu Ghar</div>
                    <div className="even_img_date">August 04, 2018</div>
                  </div>
                  <div className="event_gallery_colsshom_col_box_in_shadow"></div>
                </li>
              </div>
              <div>
                <li>
                  <div className="event_gallery_colsshom_col_box_in">
                    <div className="img-event">
                      <Image
                        width={350}
                        height={100 / (100 / 100)}
                        src="/img/ourteam/plantation_2016img.png"
                        alt="plantation_2016img"
                        className="lazy"
                      />
                    </div>
                    <div className="even_img_name">Plantation</div>
                    <div className="even_img_date">July 16, 2016</div>
                  </div>
                  <div className="event_gallery_colsshom_col_box_in_shadow"></div>
                </li>
              </div>
              <div>
                <li>
                  <div className="event_gallery_colsshom_col_box_in">
                    <div className="img-event">
                      <Image
                        width={350}
                        height={100 / (100 / 100)}
                        src="/img/ourteam/newyear_2017img.png"
                        alt="newyear_2017img"
                        className="lazy"
                      />
                    </div>
                    <div className="even_img_name">New Year Celebration</div>
                    <div className="even_img_date">December 31, 2016</div>
                  </div>
                  <div className="event_gallery_colsshom_col_box_in_shadow"></div>
                </li>
              </div>
              <div>
                <li>
                  <div className="event_gallery_colsshom_col_box_in">
                    <div className="img-event">
                      <Image
                       width={350}
                       height={100 / (100 / 100)}
                        src="/img/ourteam/diwali_2016_img.png"
                        alt="diwali_2016_img"
                        className="lazy"
                      />
                    </div>
                    <div className="even_img_name">Diwali Celebration</div>
                    <div className="even_img_date">October 10, 2016</div>
                  </div>
                  <div className="event_gallery_colsshom_col_box_in_shadow"></div>
                </li>
              </div>
            </Slider>
          </ul>
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
