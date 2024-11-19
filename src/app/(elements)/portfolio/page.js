"use client";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/company/company.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Contactusmodel from "@/app/Components/Contactusmodel";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Adjust this to the number of items you want per page

  const [categoryList, setCategoryList] = useState([]);
  const [technologyList, setTechnologyList] = useState([]);
  const [portfolioData, setPortfolioData] = useState([]);
  const [portfolioImagePath, setPortfolioImagePath] = useState("");
  const [modalOpen, setModalOpen] = useState(false);


  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const [showTab, setShowTab] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(BaseAPI + "/portfolios");
      setPortfolioImagePath(response.data.portfolioImage);
      setCategoryList(response.data.indusno);
      setTechnologyList(response.data.techs);
      setPortfolioData(response.data.portfolio);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleTabShow = (tabName) => {
    setShowTab((prevTab) => (prevTab === tabName ? "" : tabName));
  };

  return (
    <>
    <div className="portifilo">
    <NavBar />
      <section className="breadcrems_header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Portfolio </h1>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="current" title="Portfolio">
                  Portfolio
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="nav-portfolio-top">
        <ul className="nav">
          <li className="drop-down-port">
            <a onClick={() => handleTabShow("technologytab")}>
              Technology <span className="caret"></span>
            </a>
            {showTab === "technologytab" && (
              <div className="subMenus-port dropdown-menu" id="technologytabshow">
                <ul>
                  {technologyList.map((i) => (
                    <li
                      key={i.value}
                      id={`technoli${i.value}`}
                      data-value={i.value}
                    >
                      <a id={`techno${i.value}`} value={i.value}>
                        {i.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li className="drop-down-port">
            <a
              className="dropdown-toggle"
              // href="javascript:void(0);"
              id="categorytab"
              onClick={() => handleTabShow("categorytab")}
            >
              Category <span className="caret"></span>
            </a>
            {showTab === "categorytab" && (
              <div className="subMenus-port dropdown-menu" id="categorytabshow">
                <ul>
                  {categoryList.map((i) => (
                    <li
                      key={i.value}
                      id={`catli${i.value}`}
                      data-value={i.value}
                    >
                      <a id={`cat${i.value}`} value={i.value}>
                        {i.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
        <div className="add_sttc" id="Show_cop">
          <div className="add_sttc" id="show_section"></div>
        </div>
      </section> */}
      <section className="nav-portfolio-top">
        <ul className="nav">
          <li className="drop-down-port">
            <a
              className="dropdown-toggle"
              onClick={() => handleTabShow("technologytab")}
            >
              Technology <span className="caret"></span>
            </a>
            {showTab === "technologytab" && (
              <div
                className="subMenus-port dropdown-menu"
                id="technologytabshow"
              >
                <ul>
                  {technologyList.map((i) => (
                    <li
                      key={i.value}
                      id={`technoli${i.value}`}
                      data-value={i.value}
                    >
                      <a id={`techno${i.value}`} value={i.value}>
                        {i.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li className="drop-down-port">
            <a
              className="dropdown-toggle"
              id="categorytab"
              onClick={() => handleTabShow("categorytab")}
            >
              Category <span className="caret"></span>
            </a>
            {showTab === "categorytab" && (
              <div className="subMenus-port dropdown-menu" id="categorytabshow">
                <ul>
                  {categoryList.map((i) => (
                    <li
                      key={i.value}
                      id={`catli${i.value}`}
                      data-value={i.value}
                    >
                      <a id={`cat${i.value}`} value={i.value}>
                        {i.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
        <div className="add_sttc" id="Show_cop">
          <div className="add_sttc" id="show_section"></div>
        </div>
      </section>

      <section className="sec_dv">
        <h2 className="hr_thy">
          We deliver cost effective and top-notch mobile app &amp; web solutions
          with ontime delivery and support.
        </h2>
      </section>
      <section className="content_area right_part LogicspicePortfolioSection">
        <div className="container">
          <div className="row">
            {portfolioData.map((i) => (
              <div key={i.slug} className="col-md-4 col-sm-6">
                <div className="portfolio_single_item portfolio_cols afclr exponent_two1 exponent_three1">
                  <div className="portfolio_cols_bdd">
                    <div className="portfolio_single_content afclr">
                      <div className="port_base_img">
                        <Link
                          href={portfolioImagePath + i.image}
                          data-lightbox="image-1"
                        >
                          <Image
                          
                            width={500}
                            height={100 / (100 / 100)}
                            src={portfolioImagePath + i.image}
                            alt="Logicspice projects portfolio"
                            className="attachment-thumb-portfolio size-thumb-portfolio wp-post-image"
                          />
                        </Link>{" "}
                      </div>
                      <div className="sml_icons">
                        <ul></ul>
                      </div>
                      <div className="portfolio_cols_hor_spa"></div>
                      <div className="portfolio_cols_hor">
                        <div className="portfolio_cols_hor_tabs">
                          <div className="portfolio_cols_hor_tabs_cell">
                            <div className="port_web_name">
                              <p>{i.title}</p>
                            </div>
                            <div className="more_btn">
                              <Link
                                href={`/case-study/${i.slug}`}
                                target="_blank"
                                className="btn btn-primary"
                              >
                                <span>Case Study</span>
                              </Link>
                            </div>
                            <div className="web_links">
                              <Link href={i.website_link} target="_blank">
                                <i
                                  className="fa fa-link"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                              <Link
                                className="fancybox"
                                href={portfolioImagePath + i.image}
                              >
                                <i
                                  className="fa fa-search"
                                  aria-hidden="true"
                                ></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
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
      </div>
      <Footer />
    </div>
      
    </>
  );
};

export default Page;
