"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import Link from "next/link";
import Image from "next/image";
import "./gallery.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../../public/css/font-awesome.css";
const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };

  const openModal = () => {
    setShowModal(!showModal);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <Navbar />
      <section
        class="resources-header"
        style={{ background: "url(/img/gallery.png)" }}
      >
        <div class="container">
          <span>
            <span>Our Gallery</span>
          </span>
        </div>
      </section>

      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6 ">
              <h1>Gallery</h1>
            </div>
            <div class="col-md-6">
              <ol class="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li> {""}
               
                <li class="current">Gallery</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section
        id="content"
        class="content_area content_area_gallery"
        role="main"
      >
        <div class="container">
          <div class="gallery-columns-4 afclr event_gallery_colss">
            <div class="row_of_portdolio">
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/25efc_trip_photo.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/office-trip">
                                Office Trip
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>November 23,2019</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/4b7d5_appu_ghar_2018img.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/office-party-appu-ghar">
                                Office Party - Appu Ghar
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>August 04,2018</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/b3d74_Social-Plantation.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/plantation">
                                Plantation 2017
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>September 02,2017</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/6d971_IMG_2425.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/office-party-at-sunrise-resort">
                                Office Party - Sunrise Resort
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>July 22,2017</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/44f01_IMG_20161231_145408.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/new-year-celebration-2017">
                                New Year Celebration 2017
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>December 31,2016</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/6876f_DSC02604.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/plantation-2016">
                                Plantation 2016
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>July 16,2016</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/DSC02129.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/new-year-celebration">
                                New Year Celebration
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>December 31,2015</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/DSC02060.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/diwali-celebration-2015-2">
                                Diwali celebration 2015
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>November 09,2015</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/DSC00951.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/golden-days-resort-2">
                                Golden Days Resort
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>July 25,2015</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/photo-4.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/diwali-celebration-2">
                                Diwali Celebration
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>October 21,2014</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/AmberVatika20140822-038.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/amber-vatika-trip">
                                Amber Vatika Trip
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>August 12,2014</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/Chokhi-Dhani-01.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/chokhi-dhani-tour">
                                Chokhi Dhani Tour
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>March 12,2013</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/New-Year-09.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/samod-palace">
                                Samod Palace
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>January 01,2013</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/DSC07399.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/group-competition">
                                Group Competition
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>August 10,2012</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/amber-Vatika-office-014.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/amber-vatika">
                                Amber Vatika
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>May 05,2012</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/080.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/sunrise-tour">
                                Sunrise Tour
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>July 11,2010</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/DSC00132.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/outdoor-activities">
                                Outdoor Activities
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>April 18,2009</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <div class="portfolio_cols">
                    <div class="portfolio_cols_bdd">
                      <div class="port_base_img">
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/DSC02674.jpg"
                          alt=""
                        />
                      </div>

                      <div class="portfolio_cols_hor_spa"></div>
                      <div class="portfolio_cols_hor">
                        <div class="portfolio_cols_hor_tabs">
                          <div class="portfolio_cols_hor_tabs_cell">
                            <div class="port_web_name">
                              <Link href="/gallery/view/chowki-dhani">
                                Chowki Dhani
                              </Link>
                            </div>
                            <div class="gall_title">
                              <div class="date_gllery">
                                ( <span>July 08,2008</span> )
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="topn">
                  <div
                    class="topn_right"
                    id="pagingLinks"
                    style={{ textAlign: "right" }}
                  >
                    <div class="countrdm">
                      No. of Records <span class="badge-gray">1</span> -
                      <span class="badge-gray">18</span> of
                      <span class="badge-gray">18</span>
                    </div>
                    <span class="custom_link pagination">
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="navigation"></div>
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
      <Footer />
    </>
  );
};

export default Page;
