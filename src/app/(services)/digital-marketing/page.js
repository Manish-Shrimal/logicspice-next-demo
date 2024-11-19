"use client";
import React, { useState } from "react";
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
const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    // console.log(showModal);

    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <NavBar />
      <div className="digitalMarketing">
        <section className="topsection d-framework d-framework1 none_space">
          <div className="page_img">
            <Image unoptimized={true}
              width={1500}
              height={500 / (100 / 100)}
              src="/img/digitalmarketing/digital-marketing.jpg"
              alt="web design service"
            />
          </div>

          <div className="container">
            <p>
              Digital marketing is the need of the hour and with increasing
              access to digital mediums&sbquo; it is imperative for the brands
              to market themselves on these digital platforms. It can help you
              create a niche on the world of web and {""}
              <Link
                href="/mobile-app-development"
                target="_blank"
                className="WebsiteTxtLink"
              >
                Mobile App
              </Link>{" "}
              {""}
              with innovative and tech savvy approach.
            </p>

            <p>
              There are varied varieties of Digital marketing services from
              search engine optimization to social media marketing and Google
              adwords. It is imperative for any brand to make sure that you are
              choosing the right partners and right set of strategies to take
              your company to the next.
            </p>
          </div>
        </section>

        <section className="d-marketing-services">
          <div className="container">
            <h2>Digital Marketing Services</h2>
            <div className="dms-ims">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="ims-img">
                    <Image unoptimized={true}
                      width={650}
                      height={500 / (100 / 100)}
                      src="/img/digitalmarketing/ims1.png"
                      alt="Internet Marketing Solutions"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="ims-content">
                    <h3>
                      <span>1</span>{" "}
                      <strong>Internet Marketing Solutions</strong>
                    </h3>
                    <p>
                      The internet marketing program is highly focused and helps
                      you to maximize the lead conversion.
                    </p>

                    <ul>
                      <li>
                        Data analysis and filtration to obtain qualified leads.
                      </li>
                      <li>E- Commerce tracking to generate more data.</li>
                      <li>
                        Studying the pattern of the market and raiding similar
                        companies for generation of qualified audience.
                      </li>
                      <li>
                        Regular and timely follow up of the qualified leads.
                      </li>
                      <li>
                        Optimization analysis of conversion on regular
                        intervals.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="dms-ims DMSRight">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 pull-right">
                  <div className="ims-img">
                    <Image unoptimized={true}
                      width={650}
                      height={500 / (100 / 100)}
                      src="/img/digitalmarketing/ims2.png"
                      alt="Social Media Management"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 pull-left">
                  <div className="ims-content">
                    <h3>
                      <span>2</span> <strong>Social Media Management</strong>
                    </h3>
                    <p>
                      With increasing prevalence of social media&sbquo; this is
                      another important aspect to promote your business in the
                      best manner.
                    </p>

                    <ul>
                      <li>Using different pages to promote your products.</li>
                      <li>
                        Promoting your brand in various groups and making people
                        take a note of you.
                      </li>
                      <li>
                        Use of animated images and GIF&apos;s that are quite in
                        trend these days.
                      </li>
                      <li>Usage of keywords in posts and comments.</li>
                      <li>Boost your page and get more likes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="dms-ims">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="ims-img">
                    <Image unoptimized={true}
                      width={650}
                      height={500 / (100 / 100)}
                      src="/img/digitalmarketing/ims3.png"
                      alt="Brand Development"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="ims-content">
                    <h3>
                      <span>3</span> <strong>Brand Development</strong>
                    </h3>
                    <p>
                      This is probably the most important thing for any company
                      to create a reputation on various platforms. Brand
                      development performs this job for you with absolute
                      perfection by making use of the Google and Facebook Ads
                      that can help create a reputation of your brand in a short
                      span of time.
                    </p>

                    <ul>
                      <li>
                        Google and Facebook ads from certified developers that
                        can easily catch the attention of the audience
                      </li>
                      <li>
                        Creating audience based on the target audience to have
                        best results
                      </li>
                      <li>
                        Budget based adwords so that you do not invest so much
                        money on one campaign only
                      </li>
                      <li>Enhanced Feedback services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="dms-ims DMSRight">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 pull-right">
                  <div className="ims-img">
                    <Image unoptimized={true}
                      width={650}
                      height={500 / (100 / 100)}
                      src="/img/digitalmarketing/ims4.png"
                      alt="Search Engine Optimization"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 pull-left">
                  <div className="ims-content">
                    <h3>
                      <span>4</span> <strong>Search Engine Optimization</strong>
                    </h3>
                    <p>
                      Search engine optimization is the base and heart of any
                      digital marketing campaign. It helps you to make an impact
                      on the audience by helping you amongst the first few
                      search options.{" "}
                    </p>

                    <ul>
                      <li>
                        Organic techniques for rank improvement and
                        optimization.{" "}
                      </li>
                      <li>
                        Transparent techniques to avoid spamming that can get
                        your website banned.{" "}
                      </li>
                      <li>Back linking on the high PR websites.</li>
                      <li>Making the website SEO friendly.</li>
                      <li>
                        SEO friendly URL to enable easy crawling through the
                        website.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
                      title="Digital marketing"
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
        </section>

        <section className="quoue_box_full_sec">
          <div className="whatsapp-call">
            <a
              href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
              target="_blank"
            >
              <Image unoptimized={true}
                width={50}
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
      </div>

      <Footer />
    </>
  );
};

export default Page;
