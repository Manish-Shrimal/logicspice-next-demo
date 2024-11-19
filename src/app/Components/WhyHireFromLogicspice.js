"use client";
import React, { useState } from "react";

import "@/app/(hire-developers)/hire-developer.css";
import "../../app/globals.css";
import Image from "next/image";
import Certificationtabs from "./Certificationtabs";
import WorkedWith from "./WorkedWith";
import Testimonials from "./Testimonials";
import Contactusmodel from "@/app/Components/Contactusmodel";

const WhyHireFromLogicspice = ({ testimonialData }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const workedWithData = [
    {
      id: 1,
      image: "/img/home/look/iwork-logo.webp",
      link: "https://iworks.sn/",
    },
    {
      id: 2,
      image: "/img/home/look/logo-job-at-home.webp",
      link: "https://jobathome.fr/",
    },
    {
      id: 3,
      image: "/img/home/look/logo-we-do.webp",
      link: "https://www.wedoitcheaper.com/",
    },
    {
      id: 4,
      image: "/img/home/look/logo-gb-lancers.webp",
      link: "https://www.gblancers.com/",
    },
    {
      id: 5,
      image: "/img/home/look/yp-logo.webp",
      link: "https://www.yourpension.ch/",
    },
    {
      id: 6,
      image: "https://www.logicspice.com/img/images/client/client-icon4.webp",
      link: "http://www.cisco.com/",
    },
    {
      id: 7,
      image: "https://www.logicspice.com/img/images/client/client-icon5.webp",
      link: "https://www.att.com/",
    },
    {
      id: 8,
      image: "https://www.logicspice.com/img/images/client/client-icon10.webp",
      link: "https://www.onebed.com.au/",
    },
    {
      id: 9,
      image: "https://www.logicspice.com/img/images/client/client-icon13.jpg",
      link: "http://www.sattvicsagesolutions.com/",
    },
    {
      id: 10,
      image:
        "https://www.logicspice.com/img/images/client/RealtorReferredLogo.png",
      link: "https://realtorreferred.com/",
    },
    {
      id: 11,
      image: "https://www.logicspice.com/img/images/solarlink/solarlink.png",
      link: "https://solar-link.org/",
    },
    {
      id: 12,
      image: "https://www.logicspice.com/img/images/look/nedarom-logo.png",
      link: "http://www.nedarom.com/",
    },
  ];
  return (
    <>
      <div>
        <section className="developer_mid">
          <div className="container">
            <h3 className="title_heading">
              Why hire from{" "}
              <Image
                width={272}
                height={100}
                alt="Logicspice Mobile and Web development company"
                src="/img/hiredevelopers/logo.png"
              />
            </h3>
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <div className="developer_mid_block_inner" data-aos="fade-up">
                  <div className="box_icon_top">
                    <Image
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
                <div className="developer_mid_block_inner" data-aos="fade-up">
                  <div className="box_icon_top">
                    <Image
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
                <div className="developer_mid_block_inner" data-aos="fade-up">
                  <div className="box_icon_top">
                    <Image
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
                <div className="developer_mid_block_inner" data-aos="fade-up">
                  <div className="box_icon_top">
                    <Image
                      width={70}
                      height={100}
                      alt="Monitor team's performance"
                      src="/img/hiredevelopers/monitor_icon.png"
                    />
                  </div>
                  <div className="developer_box_content">
                    Monitor team&apos;s performance on regular basis
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="developer_mid_block_inner" data-aos="fade-up">
                  <div className="box_icon_top">
                    <Image
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
                <div className="developer_mid_block_inner" data-aos="fade-up">
                  <div className="box_icon_top">
                    <Image
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
                <div className="developer_mid_block_inner" data-aos="fade-up">
                  <div className="box_icon_top">
                    <Image
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
                <div className="developer_mid_block_inner" data-aos="fade-up">
                  <div className="box_icon_top">
                    <Image
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
                <div className="developer_mid_block_inner" data-aos="fade-up">
                  <div className="box_icon_top">
                    <Image
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
                <div className="developer_mid_block_inner" data-aos="fade-up">
                  <div className="box_icon_top">
                    <Image
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
                <div className="developer_mid_block_inner" data-aos="fade-up">
                  <div className="box_icon_top">
                    <Image
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
                <div className="developer_mid_block_inner" data-aos="fade-up">
                  <div className="box_icon_top">
                    <Image
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
                <div className="developer_mid_block_inner" data-aos="fade-up">
                  <div className="box_icon_top">
                    <Image
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
                <div className="developer_mid_block_inner" data-aos="fade-up">
                  <div className="box_icon_top">
                    <Image
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
                <div className="developer_mid_block_inner" data-aos="fade-up">
                  <div className="box_icon_top">
                    <Image
                      width={64}
                      height={100}
                      alt="moneyback gurantee - Logicspice"
                      src="/img/hiredevelopers/technologies-back.png"
                    />
                  </div>
                  <div className="developer_box_content">
                    Works on latest technologies
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="developer_mid_block_inner" data-aos="fade-up">
                  <div className="box_icon_top">
                    <Image
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

        <section className="requirement_section requirement_section-new">
          <div className="container">
            <div className="requir_title requir_title-new">
              Let&apos;s have a quick call to better understand about your idea
              of drupal application.
            </div>
            <div className="eve-txt">
              (Even if you have very short term requirement.)
            </div>
            <div className="requirment_btn">
              {/* <a
                id="inquirenow"
                data-toggle="modal"
                data-target="#contactFix"
                onClick={() => openmodelcontactus()}
                className="btn btn-primary"
              >
                CONTACT NOW
              </a> */}

              <a className="btn btn-primary" onClick={toggleModal}>
                CONTACT NOW
                <div>
                  <Contactusmodel
                    modalStatus={modalOpen}
                    toggle={toggleModal}
                    title="contact us"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="testimonial-hire HireDevelopersTestimonial">
          <div className="container">
            <Testimonials testimonialData={testimonialData} />
          </div>
        </section>

        <section className="certificates certificationawardsecin sfd">
          <div className="container">
            <Certificationtabs />
          </div>
        </section>
        <section className="working_with HireDevelopersWorking">
          <div className="container">
            <h3 className="title_heading title_heading_bgg">
              Worked with 1500+ companies worldwide, from startups to
              enterprises.
            </h3>

            <WorkedWith workedWithData={workedWithData} />
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyHireFromLogicspice;






