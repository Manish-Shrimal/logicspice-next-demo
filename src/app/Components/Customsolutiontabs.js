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
          style={{ cursor: "pointer",  }}
        >
          <a style={{display: "flex"}}>
            <Image
              width={100}
              height={100}
              src="/img/customsolutions/idea.png"
              alt="#"
              
            />{" "}
            Idea
          </a>
        </li>
        <li
          role="presentation"
          className={activeTab === "Achievements" ? "active" : ""}
          onClick={() => handleTabClick("Achievements")}
          style={{ cursor: "pointer" }}
        >
          <a style={{display: "flex"}}>
            <span>
              <Image
                width={100}
                height={100}
                src="/img/customsolutions/position.png"
                alt="#"
               
              />
            </span>{" "}
            Concept
          </a>
        </li>
        <li
          role="presentation"
          className={activeTab === "Affiliates" ? "active" : ""}
          onClick={() => handleTabClick("Affiliates")}
          style={{ cursor: "pointer" }}
        >
          <a style={{display: "flex"}}>
            <span>
              <Image
                width={100}
                height={100}
                className="lazy"
                src="/img/customsolutions/implement.png"
                alt="affiliates_icon"
               
              />
            </span>{" "}
            Implement
          </a>
        </li>
        <li
          role="presentation"
          className={activeTab === "Testing" ? "active" : ""}
          onClick={() => handleTabClick("Testing")}
          style={{ cursor: "pointer" }}
        >
          <a style={{display: "flex"}}>
            <span>
              <Image
                width={100}
                height={100}
                className="lazy"
                src="/img/customsolutions/implement.png"
                alt="affiliates_icon"
                
              />
            </span>{" "}
            Testing
          </a>
        </li>
        <li
          role="presentation"
          className={activeTab === "Support" ? "active" : ""}
          onClick={() => handleTabClick("Support")}
          style={{ cursor: "pointer" }}
        >
          <a style={{display: "flex"}}>
            <span>
              <Image
                width={100}
                height={100}
                className="lazy"
                src="/img/customsolutions/implement.png"
                alt="affiliates_icon"
                
              />
            </span>{" "}
            Support
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
          <p>
            App idea starts with you. You came to us with your idea and
            it&apos;s our duty to convert your idea into business. We always
            give value to your idea. Your idea and our suggestion can give a
            birth to excellent solution to development.
          </p>
        </div>
        <div
          role="tabpanel"
          className={`tab-pane ${activeTab === "Achievements" ? "active" : ""}`}
          id="Achievements"
        >
          <p>
            We analyze the market, design UI to deliver the great and effective
            solution for your business. R&D plays an important role when you
            start any business. It&apos;s our duty to stand out from the
            competition.
          </p>
        </div>
        <div
          role="tabpanel"
          className={`tab-pane ${activeTab === "Affiliates" ? "active" : ""}`}
          id="Affiliates"
        >
          <p>
            We implement as per your requirements. We believe in transparency
            and work with your given custom functionality & features. Custom
            solution is especially focused to fulfill your requirement by adding
            required features & functionality.
          </p>
        </div>
        <div
          role="tabpanel"
          className={`tab-pane ${activeTab === "Testing" ? "active" : ""}`}
          id="Affiliates"
        >
          <p>
            We have a team of expert tested who use advanced tool to test your
            app. We assure to come up with proper testing and bug free app. We
            are always available if you find any issue in the custom
            development.
          </p>
        </div>
        <div
          role="tabpanel"
          className={`tab-pane ${activeTab === "Support" ? "active" : ""}`}
          id="Affiliates"
        >
          <p>
            We offer free support for 1 month after delivering a project to the
            client.
          </p>
        </div>
      </div>
    </>
  );
};

export default Certificationtabs;
