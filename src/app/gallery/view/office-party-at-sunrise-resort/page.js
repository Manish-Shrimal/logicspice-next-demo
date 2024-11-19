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
      <Navbar />
      <section class="resources-header" style={{ background: "url(/img/gallery.png)" }}>
        <div class="container">
          <span>
            <span>Office Party - Sunrise Resort</span>
          </span>
        </div>
      </section>

      <section class="breadcrems_header">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Office Party - Sunrise Resort</h1>
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
                    Office Party - Sunrise Resort ( <span>July 22,2017</span> )
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
                        href="/img/sunresort/9774e_Fun-Masti---Events1--Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/9774e_Fun-Masti---Events1--Logicspice.jpg"
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
                        href="/img/sunresort/b655f_Fun---Events1.1---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/b655f_Fun---Events1.1---Logicspice.jpg"
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
                        href="/img/sunresort/2e3ea_Fun---Events1---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/2e3ea_Fun---Events1---Logicspice.jpg"
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
                        href="/img/sunresort/d8410_Fun-Events---Logicspic.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/d8410_Fun-Events---Logicspic.jpg"
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
                        href="/img/sunresort/81da4_Fun-Masti---Events1---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/81da4_Fun-Masti---Events1---Logicspice.jpg"
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
                        href="/img/sunresort/87fc4_Fun---Events-Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/87fc4_Fun---Events-Logicspice.jpg"
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
                        href="/img/sunresort/105be_Fun---Events--Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/105be_Fun---Events--Logicspice.jpg"
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
                        href="/img/sunresort/d6d68_Fun---Events---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/d6d68_Fun---Events---Logicspice.jpg"
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
                        href="/img/sunresort/f0e04_Fun-Events---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/f0e04_Fun-Events---Logicspice.jpg"
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
                        href="/img/sunresort/65edb_Fun-Masti---Events1-Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/65edb_Fun-Masti---Events1-Logicspice.jpg"
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
                        href="/img/sunresort/52156_Fun-Masti--Events1---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/52156_Fun-Masti--Events1---Logicspice.jpg"
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
                        href="/img/sunresort/87c62_Fun---Events0---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/87c62_Fun---Events0---Logicspice.jpg"
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
                        href="/img/sunresort/fbb32_Fun---Events0---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/fbb32_Fun---Events0---Logicspice.jpg"
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
                        href="/img/sunresort/7d0bd_Fun-Event---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/7d0bd_Fun-Event---Logicspice.jpg"
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
                        href="/img/sunresort/451dc_Fun---Event---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/451dc_Fun---Event---Logicspice.jpg"
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
                        href="/img/sunresort/7fcbd_Fun---Event10---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/7fcbd_Fun---Event10---Logicspice.jpg"
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
                        href="/img/sunresort/44111_Fun-Event24---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/44111_Fun-Event24---Logicspice.jpg"
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
                        href="/img/sunresort/9433a_Fun-Event3---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/9433a_Fun-Event3---Logicspice.jpg"
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
                        href="/img/sunresort/064b9_Fun-Event2---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/064b9_Fun-Event2---Logicspice.jpg"
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
                        href="/img/sunresort/e02cb_Fun-Event1---Logicspice.jpg"
                        data-lightbox="images"
                      >
                        <Image
                          width={500}
                          height={100 / (100 / 100)}
                          src="/img/sunresort/e02cb_Fun-Event1---Logicspice.jpg"
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
