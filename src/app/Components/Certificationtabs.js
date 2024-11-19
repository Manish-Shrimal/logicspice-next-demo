"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";

const Certificationtabs = () => {
  const [activeTab, setActiveTab] = useState("Certifications");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <ul className="nav nav-tabs" role="tablist">
        <li
          role="presentation"
          className={activeTab === "Certifications" ? "active" : ""}
          onClick={() => handleTabClick("Certifications")}
          style={{ cursor: "pointer" }}
        >
          <a aria-controls="home" role="tab" data-toggle="tab" aria-hidden="true">
        
            <span className="cer-icon">
              <Image
                width={25}
                height={100}
                className="lazy"
                src="/img/home/certificates/certification_icon.webp"
                alt="certification_icon"
              />
            </span>{" "}
            Certifications
          </a>
        </li>
        <li
          role="presentation"
          className={activeTab === "Achievements" ? "active" : ""}
          onClick={() => handleTabClick("Achievements")}
          style={{ cursor: "pointer" }}
        >
          <a aria-controls="profile" role="tab" data-toggle="tab" aria-hidden="true">
            <span className="cer-icon">
              <Image
                width={25}
                height={100}
                className="lazy"
                src="/img/home/certificates/achivements_icon.webp"
                alt="achivements_icon"
              />
            </span>{" "}
            Achievements
          </a>
        </li>
        <li
          role="presentation"
          className={activeTab === "Affiliates" ? "active" : ""}
          onClick={() => handleTabClick("Affiliates")}
          style={{ cursor: "pointer" }}
        >
          <a aria-controls="messages" role="tab" data-toggle="tab" aria-hidden="true">
            <span className="cer-icon">
              <Image
                width={25}
                height={100}
                className="lazy"
                src="/img/home/certificates/affiliates_icon.webp"
                alt="affiliates_icon"
              />
            </span>{" "}
            Affiliates
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div
          role="tabpanel"
          className={`tab-pane ${
            activeTab === "Certifications" ? "active" : ""
          }`}
          id="Certifications"
        >
          {/* <ul>
            <li>
              <Image
                width={70}
                height={100 / (100 /100)}
                className="lazy"
                src="/img/home/certificates/iso_logo.webp"
                alt="iOS app development"
              />
            </li>
            <li>
              <Image
                width={230}
                height={100 / (100 / 100)}
                className="lazy"
                src="/img/home/certificates/freelancertopten.webp"
                alt="freelancer web and app development"
              />
            </li>
            <li>
              <Image
                width={200}
                height={100 / (100 / 100)}
                className="lazy"
                src="/img/home/certificates/nasscom.webp"
                alt="web and app development certification"
              />
            </li>
            <li>
              <Image
                width={240}
                height={100 / (100 / 100)}
                className="lazy"
                src="/img/home/certificates/applancer.webp"
                alt="applancer certification"
              />
            </li>
            <li>
              <Image
                width={100}
                height={100 / (100 / 100)}
                className="lazy"
                src="/img/home/certificates/goodFirms.webp"
                alt="Good Firms certification"
              />
            </li>
            <br />
            <li>
              <Image
                width={210}
                height={100 / (100 / 100)}
                className="lazy"
                src="/img/home/certificates/extract.webp"
                alt="Extract certification"
              />
            </li>
            <li>
              <Image
                width={70}
                height={100 / (100 / 100)}
                className="lazy"
                src="/img/home/certificates/appfutura.webp"
                alt="appfutura certification"
              />
            </li>
            <li>
              <Image
                width={60}
                height={100 / (100 / 100)}
                className="lazy"
                src="/img/home/certificates/TAC-iphone.webp"
                alt="topappcreators certification - logicspice"
              />
            </li>
          </ul> */}
          <ul>
  <li>
    <Image
      width={70}
      height={100 / (100 / 100)}
      className="lazy"
      src="/img/home/certificates/iso_logo.webp"
      alt="iOS app development"
    />
  </li>
  <li>
    <Image
      width={230}
      height={100 / (100 / 100)}
      className="lazy"
      src="/img/home/certificates/freelancertopten.webp"
      alt="freelancer web and app development"
    />
  </li>
  <li>
    <Image
      width={200}
      height={100 / (100 / 100)}
      className="lazy"
      src="/img/home/certificates/nasscom.webp"
      alt="web and app development certification"
    />
  </li>
  <li>
    <Image
      width={240}
      height={100 / (100 / 100)}
      className="lazy"
      src="/img/home/certificates/applancer.webp"
      alt="applancer certification"
    />
  </li>
  <li>
    <Image
      width={100}
      height={100 / (100 / 100)}
      className="lazy"
      src="/img/home/certificates/goodFirms.webp"
      alt="Good Firms certification"
    />
  </li>
  <li>
    <Image
      width={210}
      height={100 / (100 / 100)}
      className="lazy"
      src="/img/home/certificates/extract.webp"
      alt="Extract certification"
    />
  </li>
  <li>
    <Image
      width={70}
      height={100 / (100 / 100)}
      className="lazy"
      src="/img/home/certificates/appfutura.webp"
      alt="appfutura certification"
    />
  </li>
  <li>
    <Image
      width={60}
      height={100 / (100 / 100)}
      className="lazy"
      src="/img/home/certificates/TAC-iphone.webp"
      alt="topappcreators certification - logicspice"
    />
  </li>
</ul>

        </div>
        <div
          role="tabpanel"
          className={`tab-pane ${activeTab === "Achievements" ? "active" : ""}`}
          id="Achievements"
        >
          <ul>
            <li>
              <Image
                width={100}
                height={100 / (100 / 100)}
                className="lazy"
                src="/img/home/certificates/winner.webp"
                alt="web and app development"
              />
            </li>
            <li>
              <Image
                width={155}
                height={100 / (100 / 100)}
                className="lazy"
                src="/img/home/certificates/bestwebdesign.webp"
                alt="web and app development"
              />
            </li>
            <li>
              <Image
                width={75}
                height={100 / (100 / 100)}
                className="lazy"
                src="/img/home/certificates/clutch_logo.webp"
                alt="website and app development company profile - clutch"
              />
            </li>
            <li>
              <Image
                width={190}
                height={100 / (100 / 100)}
                className="lazy"
                src="/img/home/certificates/siliconindia.webp"
                alt="logicspice profile siliconindia"
              />
            </li>
          </ul>
        </div>
        <div
          role="tabpanel"
          className={`tab-pane ${activeTab === "Affiliates" ? "active" : ""}`}
          id="Affiliates"
        >
          <ul>
            <li>
              <Image
                width={190}
                height={100 / (100 / 100)}
                className="lazy"
                src="/img/home/certificates/iwdro_logo.webp"
                alt="website and app development"
              />
            </li>
            <li>
              <Image
                width={80}
                height={100 / (100 / 100)}
                className="lazy"
                src="/img/home/certificates/yellow-pages-logi.webp"
                alt="web and app development"
              />
            </li>
            <li>
              <Image
                width={190}
                height={100 / (100 / 100)}
                className="lazy"
                src="/img/home/certificates/microsoftachivement.webp"
                alt="web and app development"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Certificationtabs;
