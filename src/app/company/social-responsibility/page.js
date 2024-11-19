"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/company/company.css";
import Image from "next/image";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../../../public/css/font-awesome.css";
import Link from "next/link";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
      <section class="resources-header SocialResponsibilityBanners">
        <div class="container">
          <span>Social Responsibility</span>
        </div>
      </section>
      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Social Responsibility</h1>
            </div>
            <div class="col-md-6">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a>Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a>Company</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Social Responsibility
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="content_area_resources">
        <div class="container">
          <div class="content_left_bar_full">
            <h2 class="title_subs">
              <span>How Logicspice is connected socially</span>
            </h2>
            <p>
              Social responsibility is an obligation, each individual needs to
              adhere in order to keep up a harmony between the economy and the
              ECO systems.
            </p>
            <p>
              LogicSpice is is providing expert software development services
              for web and mobile app development including Android and iPhone
              app development and complex web application programming.
              Logicspice is having very experienced and efficient team which
              provide robust, easy to use, efficient application for day to day
              business operations. This company was founded in 2006 and is
              located in Jaipur, India.
            </p>
          </div>

          <div class="clearfix"></div>

          <div class="row">
            <div class="col-sm-6">
              <h3 class="title_subs">
                <span>Sustainability</span>
              </h3>
              <div class="stat_data_tex">
                <Image
                  width={650}
                  height={500 / (100 / 100)}
                  alt="connected socially - Logicspice"
                  src="/img/ourteam/soc_9.png"
                />
                <div class="stat_data_tex_hos">
                  <div class="stat_data_tex_hos_text">
                    At Logicspice, we are dedicated to making positive influence
                    in our communities and on the environment. We are
                    continuously working to find out the better ways to lessen
                    any negative environmental impact while profiting the
                    communities we live and work in.
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <h3 class="title_subs">
                <span>Responsibility</span>
              </h3>
              <div class="stat_data_tex">
                <Image
                  width={650}
                  height={500 / (100 / 100)}
                  alt="social Responsibility - Logicspice"
                  src="/img/ourteam/soc_10.png"
                />
                <div class="stat_data_tex_hos">
                  <div class="stat_data_tex_hos_text">
                    We always endeavor to be a responsible organization and
                    tries to put a positive impact on our environment and our
                    community by taking eco friendly steps. We always be ethical
                    in our business approach and dealings.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="clearfix"></div>

          <div class="content_left_bar_full">
            <h4 class="title_subs">
              <span>Our Events</span>
            </h4>
            <p>
              Join us at a social event of Logicspice to save our environment
              and try to make this world an eco friendly. Get inspired, kick
              around some ideas, or just have some fun. We&apos;d love to connect
              with you and to serve our community together.
            </p>
          </div>

          <div class="clearfix"></div>

          <div class="row">
            <div class="col-md-4">
              <div class="go-green-logic">
                <p>
                  <span class="pro_bold">Go Green ideas:</span>
                  Go green ideas are good for the Business and good for the
                  environment. It doesn&apos;t mean to spend a lots of money, In Fact
                  using effective go green ideas can actually save the money.
                  Logicspice periodically conduct the social activities to alert
                  the society and the employees about social responsibility
                  towards our culture and our nation.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="go-green-logic">
                <p>
                  <span class="pro_bold">
                    Building a Positive Workplace Environment:
                  </span>
                  One of the greatest benefits of promoting social
                  responsibility in the workplace is the positive environment
                  you build for your employees. When employees and management
                  feels that they are working for a company that has a true
                  conscience then they will likely be more enthusiastic and
                  engaged in the company&apos;s social activities.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="go-green-logic">
                <p>
                  <span class="pro_bold">Blood Donation Camp:</span>
                  Blood donation is one of the most noble work and significant
                  contribution to the society and a great help to the community.
                  Logicspice always look forward to organize the blood camps to
                  motivate it&apos;s team and to aware about social responsibility
                  towards the society and humanity.
                </p>
              </div>
            </div>
          </div>

          <div class="clearfix"></div>
        </div>
      </section>

      <section class="content_area_resources">
        <div class="container">
          <div class="content_left_bar_full">
            <div class="clear"></div>
            <div class="office_event_img_social">
              <div class="row_of_event">
                <div
                  data-effect="slide-left"
                  class="office_event_img_cols ofimg_sm effect-slide-left in"
                  style={{ transition: "all 0.7s ease-in-out 0s" }}
                >
                  <Image
                    width={650}
                    height={500 / (100 / 100)}
                    alt="social Events - Logicspice"
                    src="/img/ourteam/soc_1.png"
                  />
                </div>
                <div
                  data-effect="slide-right"
                  class="office_event_img_cols ofimg_bg effect-slide-right in"
                  style={{ transition: "all 0.7s ease-in-out 0s" }}
                >
                  <Image
                    width={650}
                    height={500 / (100 / 100)}
                    alt="social Responsibility - Logicspice"
                    src="/img/ourteam/soc_2.png"
                  />
                </div>
                <div
                  data-effect="slide-left"
                  class="office_event_img_cols ofimg_sm effect-slide-left in"
                  style={{ transition: "all 0.7s ease-in-out 0s" }}
                >
                  <Image
                    width={650}
                    height={500 / (100 / 100)}
                    alt="social Responsibility - Logicspice"
                    src="/img/ourteam/soc_3.png"
                  />
                </div>
                <div
                  data-effect="slide-right"
                  class="office_event_img_cols ofimg_bg effect-slide-right in"
                  style={{ transition: "all 0.7s ease-in-out 0s" }}
                >
                  <Image
                    width={650}
                    height={500 / (100 / 100)}
                    alt="connected socially - Logicspice"
                    src="/img/ourteam/soc_4.png"
                  />
                </div>
                <div
                  data-effect="slide-left"
                  class="office_event_img_cols ofimg_bg effect-slide-left in"
                  style={{ transition: "all 0.7s ease-in-out 0s" }}
                >
                  <Image
                    width={650}
                    height={500 / (100 / 100)}
                    alt="environmental Responsibility - logicspice"
                    src="/img/ourteam/soc_5.png"
                  />
                </div>
                <div
                  data-effect="slide-right"
                  class="office_event_img_cols ofimg_sm effect-slide-right in"
                  style={{ transition: "all 0.7s ease-in-out 0s" }}
                >
                  <Image
                    width={650}
                    height={500 / (100 / 100)}
                    alt="environmental events - logicspice"
                    src="/img/ourteam/soc_6.png"
                  />
                </div>
                <div
                  data-effect="slide-left"
                  class="office_event_img_cols ofimg_bg effect-slide-left in"
                  style={{ transition: "all 0.7s ease-in-out 0s" }}
                >
                  <Image
                    width={650}
                    height={500 / (100 / 100)}
                    alt="environmental Responsibility - logicspice"
                    src="/img/ourteam/soc_7.png"
                  />
                </div>
                <div
                  data-effect="slide-right"
                  class="office_event_img_cols ofimg_sm effect-slide-right in"
                  style={{ transition: "all 0.7s ease-in-out 0s" }}
                >
                  <Image
                    width={650}
                    height={500 / (100 / 100)}
                    alt="environmental events - logicspice"
                    src="/img/ourteam/soc_8.png"
                  />
                </div>
              </div>
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
