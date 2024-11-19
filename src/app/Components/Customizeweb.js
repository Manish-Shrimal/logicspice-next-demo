"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Customizeweb = () => {
  const [loadImage, setLoadImage] = useState(true);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <Tabs className="">
      <TabList>
        <Tab>
          <span>About Us</span>
        </Tab>
        <Tab>
          <span>Our Process</span>
        </Tab>
        <Tab>
          <span>Testimonials</span>
        </Tab>
        <Tab>
          <span>Why Logicspice</span>
        </Tab>
      </TabList>

      <TabPanel>
        <div className="tab-cw-content">
          <div className="row">
            <div className="col-sm-6">
              <h3>Providing a feasible and cost effective solution</h3>
              <p>
                At Logicspice, we believe in providing a feasible and cost
                effective solution to match with a fast pace world. We do web
                development and
                <a
                  className="inline-link"
                  href="/mobile-app-development"
                >
                  {" "}
                  mobile app development{" "}
                </a>
                (iPhone and Android) based on tried-and-tested subsystems. In
                addition to our expertise in mobile and web development, we
                stand as a leading Laravel development company. Our dedicated
                <a
                  className="inline-link"
                  href="/laravel-development"
                >
                  {" "}
                  Laravel app development services{" "}
                </a>
                offer cutting-edge solutions to enhance your web applications.
                Our expertise extends to crafting hybrid mobile app development
                & custom web app development services that elevate user
                experiences, ensuring robust and scalable solutions that meet
                the demands of the modern digital landscape.
              </p>
              <p>
                Logicspice has been in the business for over 18 years. To know
                more about us: who we are, what we do, how we work, our
                corporate culture and values.
              </p>
              <a href="/company/about-us" className="btn btn-primary tab-btn">
                Read More
              </a>
            </div>
            <div className="col-sm-6">
              <div className="dev-custom">
                {loadImage && (
                  <Image
                    width={500}
                    height={100}
                    src="/img/home/customdev/dev-custom.png"
                    alt="about"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="tabs_content_sec_content full_bx_shet">
          <div className="process_sect">
            <div className="process_border"></div>
            <ul>
              <li>
                <div className="icon_process">
                  {loadImage && (
                    <Image
                      width={70}
                      height={100}
                      src="/img/choose-plan-icon.png"
                      alt="choose Plan"
                    />
                  )}
                </div>
                <div className="titiie">
                  CHOOSE <b>Plan</b>
                </div>
                <div className="value_process">
                  <p>
                    To do great things it requires great plans and our team
                    plans in a way that complies your priorities along with your
                    desired requirements.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon_process">
                  {loadImage && (
                    <Image
                      width={70}
                      height={100}
                      src="/img/select-design-icon.png"
                      alt="SELECT DESIGN"
                    />
                  )}
                </div>
                <div className="titiie">
                  SELECT <b>DESIGN</b>
                </div>
                <div className="value_process">
                  <p>
                    To capture attraction of your customers our team throws in
                    all the efforts to give you an elegant design that your
                    customers will fall in love with.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon_process">
                  {loadImage && (
                    <Image
                      width={70}
                      height={100}
                      src="/img/choose-develop-icon.png"
                      alt="choose DEVELOP"
                    />
                  )}
                </div>
                <div className="titiie">
                  CHOOSE <b>DEVELOP</b>
                </div>
                <div className="value_process">
                  <p>
                    Our team develops what is required not what is compensable
                    and that makes our services efficient enough to achieve your
                    business goals.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon_process">
                  {loadImage && (
                    <Image
                      width={70}
                      height={100}
                      src="/img/choose-launch-icon.png"
                      alt="choose LAUNCH"
                    />
                  )}
                </div>
                <div className="titiie">
                  CHOOSE <b>LAUNCH</b>
                </div>
                <div className="value_process">
                  <p>
                    A proper plan to launch is the key and our team consider all
                    the factors and testing before the launch of product to make
                    a solid impact on the audience.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon_process">
                  {loadImage && (
                    <Image
                      width={70}
                      height={100}
                      src="/img/customer-support-img.png"
                      alt="Support"
                    />
                  )}
                </div>
                <div className="titiie">
                  24*7 <b>Support</b>
                </div>
                <div className="value_process">
                  <p>
                    Our experienced & proactive technical team is always there
                    to provide support & maintenance services with practical
                    approach.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </TabPanel>

      <TabPanel>
        <div className="testinomials_review">
        <Slider {...settings}>
          <div>
            <ul>
              <li>
                <div className="testimonial_row_inner">
                  <div className="testimonial_row_cover home_testi">
                    <div className="cilent_img">
                      {loadImage && (
                        <Image
                          width={400}
                          height={100}
                          src="/img/home/customdev/kesepara.jpg"
                          alt="Client"
                        />
                      )}
                    </div>
                    <div className="testimonial_sectks_cont">
                      <span className="titleoftestimthis">
                        C2C Ecommerce Website About Fashion
                      </span>
                      <p>
                        &quot;Exactly the best team available online ! I have
                        been working and communicating with a few companies over
                        the internet and i didn&apos;t see a single better
                        <a className="second_show new_csx_shw"></a>
                        <span className="hidendata">
                          company than logicspice. They are so skilled and
                          professional. Their knowledge about coding is
                          incredible. And they never say &quot;no&quot; or
                          &quot;we can&apos;t&quot; to any situation. Actually
                          they are the best guys i have ever work with in my
                          life. Their communication, kindness are so high level.
                          Every step of my project, every progress of my project
                          we need maybe 15 to 20 changes. And every time i wrote
                          those needs to them, they did their work at most 1-2
                          days. Their speed and work quality is amazing ! Final
                          word to those who wants to hire them: don&apos;t think
                          twice ! Literally they are the best team in this
                          website. And also their work progress and milestones
                          are literally clear as they said. I am advising them
                          to all of my friends and i will hire them again for
                          sure !&quot;
                        </span>
                      </p>
                      <span className="author_name">
                        <span></span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <div className="testimonial_row_inner">
                  <div className="testimonial_row_cover home_testi">
                    <div className="cilent_img">
                      {loadImage && (
                        <Image
                          width={400}
                          height={100}
                          src="/img/home/customdev/dsherevk.jpg"
                          alt="Client"
                        />
                      )}
                    </div>
                    <div className="testimonial_sectks_cont">
                      <span className="titleoftestimthis">
                        Website + Mobile App (iOs&Android)
                      </span>
                      <p>
                        &quot;Manish was very cooperative and professional
                        during the project. The team was great, the project was
                        very complicated and they tried
                        {/* <a
                          style={{ cursor: "pointer", color: "#fff" }}
                          className="second_show"
                        >
                          [...]
                        </a> */}
                        <span className="hidendata" >
                          their best to complete it with the best diligence. I
                          will definitely contact this company in the future for
                          my project updates and would recommend to anyone who
                          is looking for a good quality work.&quot;
                        </span>
                      </p>
                      <span className="author_name">
                        <span></span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <div className="testimonial_row_inner">
                  <div className="testimonial_row_cover home_testi">
                    <div className="cilent_img">
                      {loadImage && (
                        <Image
                          width={400}
                          height={100}
                          src="/img/home/customdev/sabdeen.jpg"
                          alt="Client"
                        />
                      )}
                    </div>
                    <div className="testimonial_sectks_cont">
                      <span className="titleoftestimthis">Build a Website</span>
                      <p>
                        &quot;Best project management experience/journey I had.
                        Great team spirit, very flexible and understanding while
                        maintaining time
                        {/* <a
                          style={{ cursor: "pointer", color: "#fff" }}
                          className="second_show"
                        >
                          [...]
                        </a> */}
                        <span className="hidendata" >
                          and budget target.Top tear professional communication
                          and support.&quot;
                        </span>
                      </p>
                      <span className="author_name">
                        <span></span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <div className="testimonial_row_inner">
                  <div className="testimonial_row_cover home_testi">
                    <div className="cilent_img">
                      {loadImage && (
                        <Image
                          width={400}
                          height={100}
                          src="/img/home/customdev/beatbuehlmann.jpg"
                          alt="Client"
                        />
                      )}
                    </div>
                    <div className="testimonial_sectks_cont">
                      <span className="titleoftestimthis">
                        Financial Web Application For Pensioners
                      </span>
                      <p>
                        &quot;Excellent work again from logicspice! They
                        definitely put their best effort into the project along
                        with very valuable inputs regarding possible
                        {/* <a
                          style={{ cursor: "pointer", color: "#fff" }}
                          className="second_show"
                        >
                          [...]
                        </a> */}
                        <span className="hidendata" >
                          enhancements of the web project. With logicspice you
                          don&apos;t just hire someone to execute your project
                          specification but much more someone who helps you
                          really make good and sophisticated web project. The
                          communication is greate and feedback time very short.
                          I really can&apos;t find anything to criticise and
                          will definitely rehire soon as I&apos;m very happy
                          with their work. Thanks a lot to Manish and his
                          team!&quot;
                        </span>
                      </p>
                      <span className="author_name">
                        <span></span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Slider>
        </div>
       
      </TabPanel>

      <TabPanel>
        <div className="why-choose-us">
          <div className="row">
            <div className="col-md-6">
              <div className="media">
                <div className="media-left">
                  <span>
                    {loadImage && (
                      <Image
                        width={40}
                        height={100}
                        className="media-object"
                        src="/img/images/house_icon.png"
                        alt="..."
                      />
                    )}
                  </span>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">
                    Fast, easy, and <b>affordable</b>
                  </h4>
                  <p>
                    For the first, Logicspice is capable to deliver you the
                    astounding and professionally developed web designs and
                    development services. Our consultants and IT professional
                    are the best in the industry, and are fully proficient with
                    all of the latest IT technologies, techniques and
                    developments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="media">
                <div className="media-left">
                  <span>
                    {loadImage && (
                      <Image
                        width={40}
                        height={100}
                        className="media-object"
                        src="/img/images/lappy_icon.png"
                        alt="..."
                      />
                    )}
                  </span>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">
                    We CARE About <b>Your Business</b>
                  </h4>
                  <p>
                    At Logicspice, Our experts work quickly to help you and
                    tries to complete the given task in given time. At our
                    creative and digital workshop we implement the optimal
                    approach with latest technolgy and plateform in an nominal
                    range.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="media">
                <div className="media-left">
                  <span>
                    {loadImage && (
                      <Image
                        width={40}
                        height={100}
                        className="media-object"
                        src="/img/images/clip_board.png"
                        alt="..."
                      />
                    )}
                  </span>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">
                    <b>15+ Years of Experience</b> In This Field
                  </h4>
                  <p>
                    We are working in this industry for more than a decade now
                    and we are molding up to be the best service provider
                    online. We work towards the ultimate goal of each and every
                    business, making them a name to incorporate in todays
                    competitive world.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="media">
                <div className="media-left">
                  <span>
                    {loadImage && (
                      <Image
                        width={40}
                        height={100}
                        className="media-object"
                        src="/img/images/mind.png"
                        alt="..."
                      />
                    )}
                  </span>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">
                    Our <b>Approach</b>
                  </h4>
                  <p>
                    Our IT Professionals at Logicspice sincerely cares about
                    every clients need and these values make us different from
                    others. We Provide all web development and mobile
                    application development services without sacrificing
                    quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default Customizeweb;
