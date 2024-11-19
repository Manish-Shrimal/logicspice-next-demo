"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Enquirymodal from "@/app/Components/Enquirymodal";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../resposive.css";
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
      <NavBar />
      <section className="modifications">
        <div className="container">
          <h1>Script Modification</h1>
          <p className="txt-hdng">
            We are ready to do custom modification on all our softwares
          </p>
          <div className="row">
            <div className="col-md-6 text-center">
              <Image
                width={450}
                height={500 / (100 / 100)}
                src="/img/scriptcustomization/imageScriptModifications.png"
                alt="script modification"
              />
            </div>
            <div className="col-md-6">
              <p>
                Our all the scripts are ready to go for custom modification to
                meet your business requirement. We are well aware that every
                business has its own requirement and taste and we can not meet
                all the requirements with single standard software solution.
                This is the reason we offer script modification.{" "}
              </p>

              <p>
                We can use latest approaches in script modification by using
                latest technology and functional accommodations. You can
                customize the script by your own as well; it is totally your
                choice. Our main motive regarding customization is that the
                script matches your specific business need.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="customization">
        <div className="container">
          <h2>How the script customization works?</h2>

          <div className="step-customized">
            <div className="row">
              <div className="col-sm-6">
                <div className="step1">
                  <div className="step-content">
                    <p data-aos="fade-right">
                      Get in touch with us and share your requirement
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6"></div>
              <div className="col-sm-6 col-sm-offset-6">
                <div className="step2">
                  <div className="step-content">
                    <p data-aos="fade-left">
                      We will discuss your project requirements in detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="step1">
                  <div className="step-content">
                    <p data-aos="fade-right">
                      With some token money&sbquo; documentation will be done.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6"></div>
              <div className="col-sm-6 col-sm-offset-6">
                <div className="step2">
                  <div className="step-content">
                    <p data-aos="fade-left">
                      We will share our proposal with you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="step1">
                  <div className="step-content">
                    <p data-aos="fade-right">
                      With your approval on the proposal&sbquo; we will work on
                      coding milestone by milestone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6"></div>

              <div className="col-sm-6 col-sm-offset-6">
                <div className="step2">
                  <div className="step-content">
                    <p data-aos="fade-left">
                      We will ask you to test customized script on our demo
                      server.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="step1">
                  <div className="step-content">
                    <p data-aos="fade-right">
                      We will fix bugs&sbquo; issues if any occurs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6"></div>
              <div className="col-sm-6 col-sm-offset-6">
                <div className="step2">
                  <div className="step-content">
                    <p data-aos="fade-left">
                      Will seek your approval and payment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="step1">
                  <div className="step-content">
                    <p data-aos="fade-right">
                      We will deliver and install the application code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="custo_btn text-center">
            <Link href="/softwares" className="btn btn-primary">
              Ready Made Softwares
            </Link>
          </div>
        </div>
      </section>
      <section className="software_custom">
        <div className="container">
          <h2>Custom Mobile & Web Applications</h2>
          <p>
            If you did not found any suitable ready made solution for your
            business then you can ask us for custom solution. We are expert in
            developing booking solution&sbquo; CRM software&sbquo; rental
            software and many more. Chat with us for more details.
          </p>
          <p>
            Our team of developers&sbquo; designers&sbquo; testers assure to
            deliver high quality product to you. Get in touch with us for best
            solution for your business.
          </p>
          <div className="custo_btn text-center">
            <Link href="/custom-solutions" className="btn btn-primary">
              Custom Solutions
            </Link>
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
