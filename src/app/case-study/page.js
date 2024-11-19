"use client";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/company/company.css";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
// import Blogslider from "../../Components/Blogslider";
import Ourclient from "../Components/Ourclient";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import BlogSlider from "@/app/Components/BlogSliderDynamic";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../../public/css/font-awesome.css";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const [pageData, setPageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Adjust this to the number of items you want per page

  let blogImagePath = useRef();
  let caseStudeImagePath = useRef();
  let blogData = useRef();
  let caseStudyData = useRef();

  const getData = async () => {
    try {
      const response = await axios.get(BaseAPI + "/casestudies");
      // console.log(response.data.latestBlog);
      setPageData(response.data);
      blogImagePath.current = response.data.blogImage;
      caseStudeImagePath.current = response.data.caseStudyImage;
      blogData.current = response.data.latestBlog;
      caseStudyData.current = response.data.casestudy;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Calculate the displayed items based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = caseStudyData.current?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(
    (caseStudyData.current?.length || 0) / itemsPerPage
  );

  return (
    <>
      <NavBar />
      <div className="case__study">
      <section class="breadcrems_header_new">
        <div class="container">
          <h1>Case Studies</h1>
          <ol class="breadcrumb casestudiesBreadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <p> / </p> {""}
            </li>
            <li class="current">Case Studies</li>
          </ol>
        </div>
      </section>

      <section class="content_area_resources">
        <div class="container">
          <div class="col-md-12 col-sm-12">
            <div id="content" class="content_left_bar_resources" role="main">
              <div class="m_content" id="listID">
                <form
                  action="/company/case-studies"
                  method="post"
                  id="CasestudyIndexForm"
                  accept-charset="utf-8"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div class="row">
                    {currentItems?.map((item) => (
                      <>
                        <div class="col-xs-12 col-sm-6 col-md-4 case-study-listing">
                          <article
                            id="post-76"
                            class={`blog_row ${item.slug}_header`}
                          >
                            <div class="media">
                              <h4 class="media-heading">
                                <Link
                                  href={`/case-study/${item.slug}`}
                                  class="light_blue"
                                >
                                  {item.title}
                                </Link>
                              </h4>
                              <h3>{item.sub_title}</h3>
                              <div class="media-left">
                                <Image
                                  width={300}
                                  height={100}
                                  src={`${caseStudeImagePath.current}/${item.image}`}
                                  alt="Racing Cartel-logicspice"
                                  //   width="300px"
                                />
                              </div>
                              <div class="media-body">
                                <Link
                                  href={`/case-study/${item.slug}`}
                                  class="blog_read_more"
                                  title="read more"
                                >
                                  View Case Study
                                </Link>
                              </div>
                            </div>
                          </article>
                        </div>
                      </>
                    ))}
                  </div>
                  <div className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`pagination-button ${
                          i + 1 === currentPage ? "active" : ""
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="testimonial-hire">
        <div className="container">
          <div className=" caseStudy_slider">
            <h2 class=" Our_clientstestinomials">OUR CLIENTS</h2>
          </div>
          <div>
            <Ourclient />
          </div>
        </div>
      </section>
      <section className="blog-home blog_innovation" style={{ position: "relative", padding: "0px 0px 50px" }}>
        <div className="container">
          <div className="headings">
            <h2>OUR BLOGS</h2>
            <p>A Sneak Peek into the Future of Innovation</p>
          </div>
          <div>
            <BlogSlider
              blogData={blogData.current}
              blogImagePath={blogImagePath.current}
            />
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
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
              height={50}
              width={50}
            />
          </a>
        </div>
        <div className="quote_pop_plus quote_pop_in" onClick={toggleModal}>
          <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
        </div>
      </div>
      </div>
      

      <Footer />
    </>
  );
};

export default Page;
