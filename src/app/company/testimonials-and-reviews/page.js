"use client";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/company/company.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import parse from "html-react-parser";
import Link from "next/link";
import "../../../../public/css/font-awesome.css";
import Contactusmodel from "@/app/Components/Contactusmodel";

const Page = () => {
  const [pageData, setPageData] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  let imagePath = useRef();

  const [blogData, setBlogData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const getData = async () => {
    try {
      const response = await axios.get(BaseAPI + "/testimonials");
      setPageData(response.data.data);
      setTestimonials(response.data.testimonial);
      setBlogData(response.data.blogs);
      imagePath.current = response.data.imagePath;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavBar />
      <section class="resources-header-riview">
        <div class="container">
          <h1>Testimonials &amp; Reviews</h1>
          <p>
            Our mobile app development solutions are the best of their kind.
          </p>
        </div>
      </section>
      <section class="content_area_resources new-review-content_area_resources">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-sm-8 ">
              {testimonials.map((item) => {
                return (
                  <>
                    <div class="m_content" id="listID">
                      <div class="panel-body">
                        <section class="lstng-section">
                          <b class="ctname">{item.title}</b>
                          {/* <hr class="dotted" /> */}
                          {item.image !== "" && (
                            <Image
                              unoptimized={true}
                              width={1500}
                              height={100 / (100 / 100)}
                              src={imagePath.current + item.image}
                              alt="MyMentions Website"
                            />
                          )}
                          <p style={{ color: "#000" }}></p>
                          <p class="western" lang="en-US" align="justify">
                            <span>
                              {item.description && parse(item.description)}
                            </span>
                          </p>
                          {/* <p class="western" lang="en-US" align="justify" style={{fontSize : "20px"}}>
                            You can also review the case study for the project
                            over here:{" "}
                            <a
                              class="p_excerpt_url"
                              href={`/case-studies/${item.slug}`}
                            >
                              Case Study
                            </a>
                          </p> */}
                        </section>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div class="col-md-3 col-sm-4">
              <div class="sidebar_right new_right_side">
                <div class="client-video">
                  <iframe
                    width="255"
                    height="634"
                    src="https://www.youtube.com/embed/6nVErp2Cl_A?1&loop=1&playlist=6nVErp2Cl_A"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <div className="widget-area">
                <aside id="recent-posts-2" class="widget widget_recent_entries">
                  <h4 class="widget-title">Recent Posts</h4>

                  <ul>
                    {blogData &&
                      blogData.map((i) => {
                        return (
                          <>
                            <li>
                              <Link
                                href={`https://blog.logicspice.com/${i.slug}`}
                              >
                                {i.subject}
                              </Link>
                            </li>

                            <br />
                          </>
                        );
                      })}
                  </ul>
                </aside>
                <div id="blog_search" class="widget widget_recent_entries">
                  <div class="cost_wrap">
                    <div class="blog_cost_calculator">
                      <div class="cost_content">
                        Try this tool for free to calculate the cost of App/Web
                      </div>
                      <div class="cost_btn">
                        <a
                          class="btn btn-primary"
                          href="https://app-cost-calculator.logicspice.com"
                        >
                          App Cost Calculator
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              unoptimized={true}
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

      <Footer />
    </>
  );
};

export default Page;
