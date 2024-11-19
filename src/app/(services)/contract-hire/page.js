"use client";
import React, { useState } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(services)/services.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
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
    // console.log(showModal);

    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <NavBar />
      <div className="contractHire"><section className="laravel-banner ContractHireBanner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="laravel-banner-txt">
                <h1>
                  Contract-to-Hire IT Staffing <br />
                  Services
                </h1>
                <div className="LaravelText">
                  Maximize your hiring flexibility and minimize risks with our
                  contract-to-hire <strong>IT staffing services</strong>,
                  ensuring a perfect match between talent and organizational
                  needs.
                </div>
                <div className="laravel-anquire">
                  <div className="btn btn-primary" onClick={openModal}>
                    <a> Enquire Now</a>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title="Contract-to-Hire IT Staffing"
                      />
                    }
                  </div>

                  <Link
                    href="https://api.whatsapp.com/send?phone=+919829559922&text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
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
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="page_img">
                <Image
                  unoptimized={true}
                  width={300}
                  height={500 / (100 / 100)}
                  src="/img/contracthire/contract-hire-img.png"
                  alt="Codeigniter Development"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ContractDevlopmentsServices ">
        <div className="container">
          <p className="ContractHireSub2">
            Logicspice provides IT professionals on a contractual basis for a
            specific project or a defined period of time to the organizations
            around the globe. This approach allows organizations to tap into
            specialized IT expertise without the need for permanent employment.
          </p>
          <p className="ContractHireSub2">
            We have over 16 years of industry experience in{" "}
            <strong>recruitment services</strong> and have a solid foundation to
            assist organizations in finding the right talent and solutions. Our
            commitment to accelerating the hiring process and connecting with
            the right talent aligns well with the needs of businesses looking to
            efficiently fill their workforce gaps.
          </p>
          <p className="ContractHireSub2">
            The emphasis on flexibility&sbquo; scalability&sbquo; and
            uninterrupted services is crucial in today&apos;s dynamic business
            environment&sbquo; where organizations need to adapt quickly to
            changing demands. By offering comprehensive workforce
            solutions&sbquo; you can cater to a wide range of staffing
            requirements&sbquo; whether they involve short-term projects&sbquo;
            long-term contracts&sbquo; or permanent placements.
          </p>
        </div>
      </section>

      <section className="ContractHireFeaturesSection">
        <div className="container">
          <h2>
            Here are some key features for contract hire for IT professionals
          </h2>
          <div className="laravel_core_features_bx">
            <div className="row">
              <div className="col-sm-6 col-md-4" data-aos="fade-up">
                <div className="ContractFeatureBox">
                  <div className="ContractFeatures_img">
                    <Image
                      unoptimized={true}
                      width={70}
                      height={100}
                      src="/img/contracthire/contract-features-icon1.png"
                      alt="img1"
                    />
                  </div>
                  <div className="ContractFeatures_detail">
                    <h3>Flexibility</h3>
                    <p>
                      We offer flexibility to organizations by bringing in IT
                      professionals as and when needed. This is particularly
                      beneficial for short-term projects&sbquo; seasonal
                      workloads&sbquo; or specialized skill requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4" data-aos="fade-up">
                <div className="ContractFeatureBox">
                  <div className="ContractFeatures_img">
                    <Image
                      unoptimized={true}
                      width={70}
                      height={100}
                      src="/img/contracthire/contract-features-icon2.png"
                      alt="img4"
                    />
                  </div>
                  <div className="ContractFeatures_detail">
                    <h3>Specialized Skills</h3>
                    <p>
                      The employers possess specialized skills and expertise
                      that may be required for specific projects or technology
                      implementations. Organizations can leverage their
                      knowledge and experience without the need for long-term
                      commitments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4" data-aos="fade-up">
                <div className="ContractFeatureBox">
                  <div className="ContractFeatures_img">
                    <Image
                      unoptimized={true}
                      width={70}
                      height={100}
                      src="/img/contracthire/contract-features-icon3.png"
                      alt="img2"
                    />
                  </div>
                  <div className="ContractFeatures_detail">
                    <h3>Cost Control</h3>
                    <p>
                      It is cost-effective compared to hiring full-time
                      employees. We are open to negotiate rates and terms with
                      contractors based on the project requirements&sbquo;
                      reducing costs associated with benefits&sbquo;
                      training&sbquo; and long-term employment commitments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4" data-aos="fade-up">
                <div className="ContractFeatureBox">
                  <div className="ContractFeatures_img">
                    <Image
                      unoptimized={true}
                      width={70}
                      height={100}
                      src="/img/contracthire/contract-features-icon4.png"
                      alt="img5"
                    />
                  </div>
                  <div className="ContractFeatures_detail">
                    <h3>Rapid Staffing</h3>
                    <p>
                      We allow organizations to quickly fill IT positions and
                      initiate projects without going through lengthy
                      recruitment processes. This agility is crucial in
                      time-sensitive situations or when there is a shortage of
                      qualified IT professionals in the job market.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4" data-aos="fade-up">
                <div className="ContractFeatureBox">
                  <div className="ContractFeatures_img">
                    <Image
                      unoptimized={true}
                      width={70}
                      height={100}
                      src="/img/contracthire/contract-features-icon5.png"
                      alt="img3"
                    />
                  </div>
                  <div className="ContractFeatures_detail">
                    <h3>Access to Talent Pool</h3>
                    <p>
                      We open up access to a broader talent pool of IT
                      professionals who prefer or specialize in contract work.
                      This provides organizations with opportunities to bring in
                      top-notch expertise and diverse perspectives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4" data-aos="fade-up">
                <div className="ContractFeatureBox">
                  <div className="ContractFeatures_img">
                    <Image
                      unoptimized={true}
                      width={70}
                      height={100}
                      src="/img/contracthire/contract-features-icon6.png"
                      alt="img6"
                    />
                  </div>
                  <div className="ContractFeatures_detail">
                    <h3>Industry-Specific Knowledge</h3>
                    <p>
                      The involved employees have experience working across
                      different organizations and industries. This exposure
                      brings valuable industry-specific knowledge and best
                      practices to the organization&sbquo; enhancing the quality
                      of IT projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4" data-aos="fade-up">
                <div className="ContractFeatureBox">
                  <div className="ContractFeatures_img">
                    <Image
                      unoptimized={true}
                      width={70}
                      height={100}
                      src="/img/contracthire/contract-features-icon7.png"
                      alt="img6"
                    />
                  </div>
                  <div className="ContractFeatures_detail">
                    <h3>Reduced Employment Risks</h3>
                    <p>
                      As contractors are not permanent employees and we as
                      contract hire handle all the formalities&sbquo;
                      considering these scenarios organizations do not face
                      fewer employment-related risks&sbquo; such as termination
                      costs&sbquo; severance packages&sbquo; or legal
                      implications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ContractSection">
        <div className="container">
          <p>
            We properly manage and integrate the employees into the
            organization&apos;s IT teams to ensure effective collaboration and
            successful project outcomes. Clear project objectives&sbquo;
            communication channels&sbquo; and expectations established to
            maximize the benefits of employee hire arrangements.
          </p>
          <p>
            We offer organizations flexibility&sbquo; access to specialized
            skills&sbquo; and cost control while enabling IT professionals to
            work on diverse projects and maintain a flexible work schedule.
          </p>
          <p>
            Overall&sbquo; our mission to achieve clients business goals through
            workforce solutions while emphasizing integrity and alignment
            showcases our commitment to excellence in recruitment services. By
            delivering efficient and <strong>effective hiring solutions</strong>
            &sbquo; we are helping organizations to meet their talent
            acquisition objectives and drive their success.
          </p>
          <p>
            If your business requires specialized IT expertise&sbquo; don&apos;t
            hesitate to{" "}
            <Link
              href="https://www.approhire.com/request_consultation"
              target="_blank"
            >
              consult with us today
            </Link>{" "}
            for access to a network of skilled professionals ready to support
            your growth.
          </p>

          <div className="main_btn_hire">
            <div className="btn btn-primary" onClick={openModal}>
              <a>Enquire Now</a>
              {
                <Enquirymodal
                  modalStatus={showModal}
                  toggle={openModal}
                  title="Contract-to-Hire IT Staffing"
                />
              }
            </div>
          </div>
        </div>
      </section>

      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team&sbquo; I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              unoptimized={true}
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
      </div></div>
      

      <Footer />
    </>
  );
};

export default Page;
