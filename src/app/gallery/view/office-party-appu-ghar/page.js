"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import Link from "next/link";
import Image from "next/image";
import "../../gallery.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "../../../../../public/css/font-awesome.css";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      {" "}
      <Navbar />
      <section class="resources-header" style={{ background: "url(/img/gallery.png)" }}>
        <div class="container">
          <span>
            <span>Office Party - Appu Ghar</span>
          </span>
        </div>
      </section>
      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Office Party - Appu Ghar</h1>
            </div>
            <div class="col-md-6">
              <ol class="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
               
                <li>
                  {" "}
                  <Link href="/gallery">Gallery</Link>
                </li>
                
                <li class="current">
                  <span id="title_here">
                    Office Party - Appu Ghar ( <span>August 04,2018</span> )
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="content_area content_area_gallery">
        <div class="container">
          <div id="content" class="site-content afclr" role="main">
            <div
              id="gallery-1"
              class="gallery galleryid-2301 gallery-columns-5 gallery-size-thumbnail"
            >
              <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/Gallery/0c5c5_appu_ghar_trip.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/0c5c5_appu_ghar_trip.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/Gallery/7499c_2018-08.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/7499c_2018-08.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/Gallery/277cc_DSC04109.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/277cc_DSC04109.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/Gallery/f9468_DSC04017.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/f9468_DSC04017.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/Gallery/85d44_DSC04005.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/85d44_DSC04005.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/Gallery/d4d92_DSC04030.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/d4d92_DSC04030.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/Gallery/8a187_DSC04036.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/8a187_DSC04036.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/Gallery/97bcb_IMG_3893.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/97bcb_IMG_3893.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/Gallery/105cd_IMG_3921.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/105cd_IMG_3921.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/Gallery/04f9e_IMG_3795.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/04f9e_IMG_3795.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-12">
                  <figure class="gallery-item">
                    <div class="gallery-icon landscape">
                      <Link
                        href="/img/Gallery/9e85d_IMG_3760.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/Gallery/9e85d_IMG_3760.jpg"
                          alt="Logicspice functions &amp; events"
                          class="attachment-thumbnail size-thumbnail"
                        />
                      </Link>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div class="navigation"></div>
        </div>
        {/* </div> */}
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
