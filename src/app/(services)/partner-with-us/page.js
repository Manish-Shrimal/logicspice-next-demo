"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
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
      <NavBar />
      <section className="header-partnership">
        <div className="container">
          <div className="col-sm-12 text-center">
            <h2>Partner With us </h2>
            <p>
              Businesses once grew by one of two ways; grass roots up&sbquo; or
              by acquisition.Today they grow through alliances - all kinds of
              dangerous alliances. Joint ventures and customer partnerings
              which&sbquo; by the way&sbquo; very few people understand.
              &quot;Peter Drukwr&quot;
            </p>
          </div>
        </div>
      </section>
      <section className="partnership-content">
        <div className="container">
          <h1>A global network of mobile & web experts </h1>
          <p>
            Logicspice is a leading mobile & web development company with over
            18+ years experience working with clients globally. We offer
            partnership to small&sbquo; medium and large businesses as well. We
            have completed numerous outsourced projects in mobile apps & web
            development.
          </p>
          <p>
            We have all what you need at single place. Have a look on our{" "}
            <Link href="/portfolio">portfolio</Link> and{" "}
            <Link href="/company/testimonials-and-reviews">
              Cient testimonials
            </Link>
            . Discuss with us what you want. We see the partnership as a long
            term relationship.
          </p>
        </div>
      </section>
      <section className="type-of-partnership">
        <div className="business-partner ">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h2>Business Partner</h2>
                <p>
                  We always ready to work with small&sbquo; medium or large
                  businesses. If you have a great marketing capacity and rich in
                  projects&sbquo; but lack of in-house resource&sbquo;
                  logicspice is the best place to work out with.
                </p>
                <p>
                  {" "}
                  You can completely outsource your project to us. We will work
                  from discussing the client idea till delivering the project.
                  We also offer to meet & discuss with our partner to discuss
                  about the client project.{" "}
                </p>
              </div>
              <div className="col-sm-6 text-center">
                <Image
                  width={500}
                  height={500 / (100 / 100)}
                  src="/img/partnerwithus/Business-Partner.png"
                  alt="Business Partner"
                  data-aos="fade-left"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="reselling-partnership">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <Image
                  width={500}
                  height={500 / (100 / 100)}
                  src="/img/partnerwithus/reseller.jpg"
                  alt="Reselling Partnership"
                  data-aos="fade-right"
                />
              </div>
              <div className="col-sm-6">
                <h2>Reselling Partnership</h2>
                <p>
                  We have numerous softwares and services and if you are
                  interested in selling our softwares and services then you are
                  always welcome.
                </p>
                <p>
                  The sales partner will take part in negotiating a
                  purchase&sbquo; getting the project requirements under your
                  brand name. Contact us to know the detailed information about
                  reselling partnership program.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="business-partner">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h2>Referral Partner</h2>
                <p>
                  Referral partner is functional middleman who brings the buyer
                  and take credit for that. They provide effective leads to
                  logicspice.
                </p>
                <p>
                  {" "}
                  This role is limited to businesses who has enough contacts and
                  opportunity.
                </p>
              </div>
              <div className="col-sm-6 text-center">
                <Image
                  width={500}
                  height={500 / (100 / 100)}
                  src="/img/partnerwithus/referral.png"
                  alt="Referral Partner"
                  data-aos="fade-left"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-partner">
        <div className="container">
          <h3>Why Partner With Us?</h3>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <Image
                width={100}
                height={100}
                src="/img/partnerwithus/icon1.png"
                alt=""
              />
              <h4>Low cost & timely delivery</h4>
            </div>
            <div className="col-md-3 col-sm-6">
              <Image
                width={100}
                height={100}
                src="/img/partnerwithus/icon2.png"
                alt=""
              />
              <h4>Great Technical Support</h4>
            </div>
            <div className="col-md-3 col-sm-6">
              <Image
                width={100}
                height={100}
                src="/img/partnerwithus/icon3.png"
                alt=""
              />
              <h4>Complete transparency in work</h4>
            </div>
            <div className="col-md-3 col-sm-6">
              <Image
                width={100}
                height={100}
                src="/img/partnerwithus/icon4.png"
                alt=""
              />
              <h4>Assurance of confidentiality</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
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
      </section>

      <Footer />
    </>
  );
};

export default Page;
