"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/company/company.css";
import Image from "next/image";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"

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
      <section class="resources-header FreelancerCompanyBanners">
        <div class="container">
          <span>Top Freelancer Company</span>
        </div>
      </section>
      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Top Freelancer Company</h1>
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
                  Top Freelancer Company
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="content_area_resources">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-sm-8">
              <div class="content_left_bar_resources">
                <article class="hentry">
                  <div>
                    <div>
                      <h2>
                        Your Search end Here for Finding the Best Freelancer for
                        Your Company
                      </h2>
                      <p>
                        In order to make a particular task cost effective and in
                        a timely manner, many organizations are now looking
                        forward to hire freelancers. But, most of the companies
                        find it difficult to find the right freelancer to cater
                        to their requirements in an effective manner. So, in
                        order to get a competent freelancer for your company,
                        one should consider the following factors.
                      </p>
                      <h3>1) Make Your Team Attractive To Freelancers</h3>
                      <p>
                        It is not always required that you pick your freelancer
                        to complete the tasks. You can do it alternatively by
                        making your organization a top pick for the freelancers
                        to work for. Create a competent portfolio that can
                        impact on the performance of a freelancer. After
                        completion of your project, always tend to provide a
                        testimonial to the freelancer which will help them in
                        improving their overall score in the community. When a
                        freelancer looks for a testimonial, it delivers quality
                        results so that one gets right recommendation. In this
                        way, freelancer tend to associate with the organization
                        again in the future
                      </p>
                      <h3>2) Use Reliable Platforms For Hiring Freelancers</h3>
                      <p>
                        Never rely on unauthorized and recommended platforms.
                        You may get a freelancer from many platforms but, there
                        are many platforms they offer freelancers. The new
                        platforms may not deliver any sort of assurance or
                        reliability of the freelancers. They even fail to
                        provide proper skill set and past work experience of the
                        freelancers. Always tend to hire a freelancer from a
                        platform that adopt a wide range of skill test and
                        freelancer reviews.
                      </p>
                      <h3>3) Shortlist Based On Bid And Profiles</h3>
                      <p>
                        Depending on the type of expertise required, analyze the
                        profiles of the bidders significantly. For a single
                        project, you may get hundreds of bids and accepting the
                        cheapest bid for the project may not be the wise
                        decision. Though budget is an important aspect to get
                        the job done but, compromising on the quality front will
                        not be beneficial for the company. Shortlist the bids
                        that fall in your specified budget and then analyze the
                        profiles of the bidders. Check their past experience and
                        communicate to understand their skill set in a better
                        manner. See the ratings of the freelancers from their
                        clients and then assess by either giving a test job or
                        by interviewing.
                      </p>
                      <h3>4) Clear Your Expectations Before Hiring</h3>
                      <p>
                        There are multiple cases where an employer expects
                        something else and the employee delivers something else.
                        The same can happen with a freelancer. While hiring a
                        freelancer for startup business, draft a proper
                        consultancy agreement that regulates the relationship
                        between the company and the freelancer. Also, document
                        the tasks to be completed by the freelancer in a
                        particular time frame and take consent of both the
                        parties. In this way, executing operations with
                        freelancer becomes easy and hassle free. Also, define
                        the IP rights and the deliverables of the freelancer so
                        that after completing the task, such issues don&apos;t arise.
                      </p>
                      <p>
                        So, in order to hire a competent freelancer you can
                        always refer LogicSpice. The proficient team of
                        <a target="_blank">LogicSpice</a>
                        not only list a number of freelancers for different
                        tasks but, it also make a proper listing according to
                        skillset of a freelancer to give you what you desire.
                        Whether you need a freelancer for your company or a
                        small task, LogicSpice list all range of freelancers on
                        the portal to give you best over the rest.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div class="sidebar_right">
                <div class="client-video">
                  <iframe
                    width="255"
                    height="435"
                    src="https://www.youtube.com/embed/6nVErp2Cl_A?autoplay=1&amp;loop=1&amp;playlist=6nVErp2Cl_A"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                  ></iframe>
                </div>
                <aside id="text-3" class="widget widget_text">
                  <h4 class="widget-title">Like us on Facebook</h4>
                  <div
                    class="fb-page fb_iframe_widget"
                    data-href="https://www.facebook.com/LogicSpice.company"
                    data-tabs="timeline"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                    fb-xfbml-state="rendered"
                    fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=1945351702357034&amp;container_width=243&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FLogicSpice.company&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline"
                  >
                    <span
                      style={{
                        verticalAlign: "bottom",
                        width: "243px",
                        height: "500px",
                      }}
                    >
                      <iframe
                        name="f140c73270ce5ca"
                        allowtransparency="true"
                        allowfullscreen="true"
                        scrolling="no"
                        title="fb:page Facebook Social Plugin"
                        style={{
                          border: "medium none",
                          visibility: "visible",
                          width: "243px",
                          height: "500px",
                        }}
                        src="https://www.facebook.com/v2.6/plugins/page.php?adapt_container_width=true&amp;app_id=1945351702357034&amp;channel=http%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FXBwzv5Yrm_1.js%3Fversion%3D42%23cb%3Df215369a84a8838%26domain%3Dlogicspice.com%26origin%3Dhttps://www.logicspice.com%252Ff400207f85196e%26relation%3Dparent.parent&amp;container_width=243&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FLogicSpice.company&amp;locale=en_GB&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline"
                        class=""
                        width="1000px"
                        height="1000px"
                        frameborder="0"
                      ></iframe>
                    </span>
                  </div>
                  <div id="fb-root" class="fb_reset fb_reset">
                    <div
                      style={{
                        position: "absolute",
                        top: "-10000px",
                        height: "0px",
                        width: "0px",
                      }}
                    >
                      <div>
                        <iframe
                          name="fb_xdm_frame_http"
                          allowtransparency="true"
                          allowfullscreen="true"
                          scrolling="no"
                          id="fb_xdm_frame_http"
                          aria-hidden="true"
                          title="Facebook Cross Domain Communication Frame"
                          tabindex="-1"
                          style={{ border: "medium none" }}
                          src="https://staticxx.facebook.com/connect/xd_arbiter/r/XBwzv5Yrm_1.js?version=42#channel=f400207f85196e&amp;origin=https://www.logicspice.com"
                          frameborder="0"
                        ></iframe>
                        <iframe
                          name="fb_xdm_frame_https"
                          allowtransparency="true"
                          allowfullscreen="true"
                          scrolling="no"
                          id="fb_xdm_frame_https"
                          aria-hidden="true"
                          title="Facebook Cross Domain Communication Frame"
                          tabindex="-1"
                          style={{ border: "medium none" }}
                          src="https://staticxx.facebook.com/connect/xd_arbiter/r/XBwzv5Yrm_1.js?version=42#channel=f400207f85196e&amp;origin=http://www.logicspice.com"
                          frameborder="0"
                        ></iframe>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "-10000px",
                        height: "0px",
                        width: "0px",
                      }}
                    >
                      <div></div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "-10000px",
                        height: "0px",
                        width: "0px",
                      }}
                    >
                      <div></div>
                    </div>
                  </div>
                </aside>
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
