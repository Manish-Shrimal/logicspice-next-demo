"use client";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import Link from "next/link";
// import "../resources.css";
import "@/app/resources/resources.css";
import Image from "next/image";
import React, { useState } from "react";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import Contactusmodel from "@/app/Components/Contactusmodel";

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
      <section class="wop-header term-header">
        <div class="container-fluid">
          <h1>Terms Of Use</h1>
        </div>
      </section>
      <section class="content_area_resources">
        <div class="container">
          <h2>
            <span style={{ fontSize: "large" }}>
              <strong>
                General Terms &amp; Conditions : Client Liabilities
              </strong>
            </span>
            <span style={{ fontSize: "medium" }}>
              <br />
            </span>
          </h2>
          <ul>
            <li>
              <span style={{ fontSize: "medium" }}>
                All the information such as text &amp; media is the
                responsibility of the client provided to the logicspice.
              </span>
            </li>
            <li>
              <span style={{ fontSize: "medium" }}>
                It is client duty to take the complete backup of their site
                before they are handling to us. We are not responsible for any
                kind of loss under any circumstances.
              </span>
            </li>
            <li>
              <span style={{ fontSize: "medium" }}>
                Logicspice tries it best to deliver within the estimated time it
                may need to be extended in case of any emergency, dependencies,
                3rd party support, communication delays and like.
              </span>
            </li>
            <li>
              <span style={{ fontSize: "medium" }}>
                Logicspice provides the opportunity to client to review the
                appearance at every step. After it gets approved, we move to the
                next step.
              </span>
            </li>
            <li>
              <span style={{ fontSize: "medium" }}>
                Logicspice is not responsible for any alterations caused by the
                Client or a third party once website/app is developed. Such
                alterations include, but are not limited to additions,
                modifications or deletions.
              </span>
            </li>
          </ul>
          <h2>
            <span style={{ fontSize: "medium" }}>
              {" "}
              <br />
              <span style={{ fontSize: "large" }}>
                {" "}
                <strong> Support</strong>
              </span>
              <br />
            </span>
          </h2>
          <ul>
            <li>
              <span style={{ fontSize: "medium" }}>
                &nbsp;&nbsp;&nbsp; After the site/app gets launched, we offer
                free support for the first month. After one month completion, we
                charge according to the client&apos;s requirement.
              </span>
            </li>
            <li>
              <span style={{ fontSize: "medium" }}>
                &nbsp;&nbsp;&nbsp; No guarantee provided by logicspice for the
                accuracy &amp; performance of 3rd party service.
              </span>
            </li>
            <li>
              <span style={{ fontSize: "medium" }}>
                &nbsp;&nbsp;&nbsp; Any 3rd party inclusion of product &amp;
                service is sole responsibility of client or logicspice on the
                behalf of the client.
              </span>
            </li>
          </ul>
          <h2>
            <span style={{ fontSize: "medium" }}>
              {" "}
              <br />
              <br />
              <span style={{ fontSize: "large" }}>
                {" "}
                <strong> Project Enhancement</strong>
              </span>
              <br />
            </span>
          </h2>
          <ul>
            <li>
              <span style={{ fontSize: "medium" }}>
                Any additional features in website/app will be charge
                differently. The fee is not included in the project fee.
              </span>
            </li>
            <li>
              <span style={{ fontSize: "medium" }}>
                We try our best to cover the most changes in your budget but
                some changes are termed as enhancement that will be charged
                individually. We will communicate with your before working on
                them.
              </span>
            </li>
          </ul>
          <h2>
            <span style={{ fontSize: "medium" }}>
              {" "}
              <br />
              <span style={{ fontSize: "large" }}>
                {" "}
                <strong>Approval &amp; Delivery</strong>
              </span>
              <br />
            </span>
          </h2>
          <ul>
            <li>
              <span style={{ fontSize: "medium" }}>
                The project includes no. of steps. At each step, the project is
                being reviewed by client and after client get satisfied and
                release payment for the next milestone, we move to next step.
              </span>
            </li>
            <li>
              <span style={{ fontSize: "medium" }}>
                On completion of service, after the client approval, the website
                will be uploaded on the server. It may get delayed if payment
                were not made on time.
              </span>
            </li>
            <li>
              <span style={{ fontSize: "medium" }}>
                Logicspice holds the right to use the completed
                work/product/website as a reference to others clients.
              </span>
            </li>
          </ul>
          <h2>
            <span style={{ fontSize: "medium" }}>
              {" "}
              <br />
              <span sstyle={{ fontSize: "large" }}>
                {" "}
                <strong>Timescale</strong>
              </span>
              <br />
            </span>
          </h2>
          <ul>
            <li>
              <span style={{ fontSize: "medium" }}>
                Logicspice comes up with aim to complete the work on the given
                time. The time scale is decided with the mutual consent of
                client and logicspice.
              </span>
            </li>
            <li>
              <span style={{ fontSize: "medium" }}>
                We may need an extra time due to some circumstances.
              </span>
            </li>
          </ul>
          <p>
            <span style={{ fontSize: "medium" }}>
              {" "}
              <br />
            </span>
          </p>
          <h2>
            <span style={{ fontSize: "large" }}>
              Money Back Guarantee On Products
            </span>
          </h2>
          <p>
            <br />
            <span style={{ fontSize: "medium" }}>
              <span style={{ fontSize: "medium" }}>
                We offer 30 days money back guarantee to ensure customer
                satisfaction of our products. If for any reason, you wish to
                discontinue using the product, you can ask us for refund. We
                will refund your total money except the installation and
                configuration charges, which is USD 65 or 20% of application
                cost, whichever is greater. Any cost of customization will not
                be refunded.
                <br />
                <br />
              </span>
              <span style={{ fontSize: "medium" }}>
                The installation of our product will be absolutely free of cost
                for one time only.{" "}
              </span>{" "}
              <br />
              <br />
              Note : We don&apos;t offer money back guarantee on our any custom
              products or service. <br />
            </span>
          </p>
          <p>&nbsp;</p>{" "}
        </div>
      </section>
      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <Link
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              unoptimized={true}
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
