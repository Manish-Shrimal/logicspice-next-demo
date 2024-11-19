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
      <section class="wop-header pri-header">
        <div class="container-fluid">
          <h1>Privacy Policy</h1>
        </div>
      </section>

      <section class="content_area_resources">
        <div class="container">
          <p
            style={{ marginBottom: "0", lineHeight: "115%", textAlign: "left" }}
          >
            <span style={{ fontSize: "medium" }}>
              <br />
              <big> </big>Your privacy is important to us and we also expect the
              same from you. Logicspice believes in transparency and protect the
              privacy of our client’s as well as the visitors of website.
              <br />
              <br />
              Logicspice would like to make it clear that site provides links of
              other websites are governed by their own Privacy Policies and does
              not take responsibility for the security provided by these sites.
              <br />
              <br />
              &nbsp;
              <br />
              Our privacy policy covers the following topics
              <br />
              &nbsp;&nbsp;&nbsp;{" "}
            </span>
          </p>
          <p>Type of information collected through the website</p>
          <p>Disclosure policySecurity</p>
          <p>How we protect your information?&nbsp; &nbsp;</p>
          <h2>1. Type of information collected through the website</h2>
          <p>
            Users visit logicspice and share their personal information with us
            for inquiry of any service &amp; products which becomes the property
            of logicspice. The type of information we collect through pages
            <br />
            <br />
            Company Name
            <br />
            Contact Person
            <br />
            Address
            <br />
            Email address
            <br />
            Your Requirement
            <br />
            &nbsp;It is not compulsory for visitors to share their information
            until they do not acquire any service.
          </p>
          <h2>2. Disclosure policy</h2>
          <p>
            <br />
            Logicspice will not sell your any personal information. The
            information will only be used for the following purpose.
            <br />
            Data : When you visit our website, we did not collect any personal
            information except to the IP address details using cookies. If you
            are interested in our any services then you asked for some basic
            information.
            <br />
            Email
            <br />
            When we get email from you, we will save the content of email as
            well as email address.
            <br />
            Tracking
            <br />
            Cookies of your web browser help us to track your navigation.
            <br />
            We do not have any access or control over such cookies.
          </p>
          <h2>3. Security</h2>
          <p>
            <br />
            With respect to security, we use industry standard encryption
            technologies, when transferring and receiving data from visitors on
            our website.
          </p>
          <h2>4. How we protect your information?</h2>
          <p>
            We have a strict rules in order to keep your information secure. We
            may ask more identity proof before we process to move further
            through your inquiry. Amendments to these Policies We reserve the
            right to update our privacy policy from time to time. We recommend
            to visit this time time to time. Contact Us If you have more
            questions and doubts regarding our privacy policy, please visit our
            contact page or mail at : info@logicspice.com
          </p>{" "}
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
