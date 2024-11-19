"use client";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import "@/app/company/company.css";
import BlogSlider from "@/app/Components/BlogSliderDynamic";
import "../../../../public/css/font-awesome.css";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import parse from "html-react-parser";
import Ourclient from "@/app/Components/Ourclient";
import Blogslider from "@/app/Components/Blogslider";
import BlogSliderDynamic from "@/app/Components/BlogSliderDynamic";
import Enquirymodal from "@/app/Components/Enquirymodal";
import HTMLReactParser from "html-react-parser";
// import "../../../responsive.css";
import "@/app/resposive.css";

const Page = ({ params }) => {
  const [pageData, setPageData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [caseStudyList, setCaseStudyList] = useState([]);
  const [showAllCaseStudies, setShowAllCaseStudies] = useState(false);

  let caseStudyImagePath = useRef();
  let blogImagePath = useRef();

  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);

  const slug = params.slug;

  const openModal = () => {
    setShowModal(!showModal);
  };

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(BaseAPI + `/case-studies/${slug}`);
      setPageData(response.data.allblogs);
      // console.log(response.data.allblogs);
      setBlogData(response.data.latestBlog);
      caseStudyImagePath.current = response.data.caseStudyImage;
      blogImagePath.current = response.data.blogImage;
      setCaseStudyList(response.data.caseStudiesList);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleCaseStudies = () => {
    setShowAllCaseStudies(!showAllCaseStudies);
  };

  return (
    <>
      <NavBar />
      <div className="case__study">
      {loading ? (
        <div className="loaderScreen"></div>
      ) : (
        <>
          <section className={`casestudies_header ${pageData.slug}_header`}>
            <div className="container">
              <div className="casestudies_sec">
                <div className="breadcrumb-casestudies">
                  <h1>Case Study for {pageData.title}</h1>

                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/case-study">Case Studies</Link>
                    </li>
                    <li className="breadcrumb-item active">{pageData.title}</li>
                  </ol>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="blog_detail_bgs_img">
                      <Image
                        unoptimized={false}
                        src={caseStudyImagePath.current + pageData.image}
                        alt={pageData.title}
                        width={2000}
                        height={500 / (100 / 100)}

                        // className="attachment-full size-full wp-post-image"
                      />{" "}
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-5">
                    <div className="case-studies-pagedtl">
                      <p>
                        {pageData.short_description &&
                          // && typeof pageData.shortDescription === "string"
                          HTMLReactParser(pageData.short_description)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content_area_resources content_area_casestudies">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-sm-8">
                  <div
                    id="content"
                    className="content_left_bar content_left_bar_sont new_left"
                    role="main"
                  >
                    <div className="default-post-content">
                      <article id="post-3325" className="blog_row_new">
                        <div className="blog_row_detail">
                          <div className="blog_detail_sectc_bl caseStr">
                            <p>
                              {pageData.description &&
                                typeof pageData.description === "string" &&
                                parse(pageData.description)}
                            </p>
                          </div>
                        </div>
                        <footer className="entry-meta"></footer>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="sidebar_right new_right_side">
                    <div className="casestudies-right">
                      <h3>More Case Studies</h3>
                      <ul
                        className={
                          showAllCaseStudies ? "expanded" : "collapsed"
                        }
                      >
                        {caseStudyList &&
                          (showAllCaseStudies
                            ? caseStudyList
                            : caseStudyList.slice(0, 8)
                          ).map((item, index) => {
                            return (
                              <li key={index}>
                                <Link href={`/case-study/${item.slug}`}>
                                  <strong>{item.title} </strong>
                                </Link>
                              </li>
                            );
                          })}
                      </ul>
                      <div className="view-btns">
                        <button
                          id="toggle"
                          className="read-less"
                          onClick={toggleCaseStudies}
                        >
                          <i
                            className={`fa fa-angles-${
                              showAllCaseStudies ? "up" : "down"
                            }`}
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 
            
              

              <Ourclient />
            
          </section> */}
            </div>
          </section>
          <section class="testimonial-hire">
            <div className="container">
              <div className="caseStudy_slider">
                <h2 class="Our_clientstestinomials">OUR CLIENTS</h2>
              </div>
              <Ourclient />
            </div>
          </section>
          <section className="blog-home blog_innovation" style={{ position: "relative" }}>
            <div className="container">
              <div className="headings">
                <h2>OUR BLOGS</h2>
                <p>A Sneak Peek into the Future of Innovation</p>
              </div>
              <div>
                <BlogSliderDynamic
                  blogData={blogData}
                  blogImagePath={blogImagePath.current}
                />
              </div>
            </div>
          </section>
          <section className="enq-section">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 text-center">
                  <div className="btn btn-primary" onClick={openModal}>
                    <button>Enquire Now</button>
                    {
                      <Enquirymodal
                        modalStatus={showModal}
                        toggle={openModal}
                        title={caseStudyList.title}
                      />
                    }
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
      </div>
      
    </>
  );
};

export default Page;
