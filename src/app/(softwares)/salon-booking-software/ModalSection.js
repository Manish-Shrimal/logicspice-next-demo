import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Modal, ModalBody } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ModalSection = () => {
  const [jobportal, setJobportal] = useState(false);
  const [buyjobportal, setBuyJobportal] = useState(false);

  const toggleJobPortalModal = () => setJobportal(!jobportal);
  const toggleBuyJobPortalModal = () => setBuyJobportal(!buyjobportal);
  var companies = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <Modal
        show={jobportal}
        onHide={toggleJobPortalModal}
        id="jobportal"
        className="modal-service"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Image
            unoptimized={true}
            width={900}
            height={100}
            src="/img/jobboard/Job_board_for_page.jpg"
            alt="icon"
            title=""
            className="img-fluid"
          />
        </Modal.Body>
      </Modal>

      <Modal
        show={buyjobportal}
        onHide={toggleBuyJobPortalModal}
        id="buyjobportal"
        className="modal-service"
      >
        <Modal.Header
          className="modal-dialog-service"
          closeButton="close"
        ></Modal.Header>
        <Modal.Body>
          <div id="jobboardclients" closeButton>
            <Slider {...companies}>
              <div className="SliderMainBx">
                <div className="site-titles">
                  <Link
                    href="https://sellfomote.ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sellfomote.ch
                  </Link>
                </div>
                <Link
                  href="https://sellfomote.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    unoptimized={true}
                    width={900}
                    height={100}
                    src="/img/jobboard/sellfomote.webp"
                    alt="icon"
                    title=""
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="SliderMainBx">
                <div className="site-titles">
                  <Link
                    href="https://www.ejtecs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ejtecs.com
                  </Link>
                </div>
                <Link
                  href="https://www.ejtecs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    unoptimized={true}
                    width={900}
                    height={100}
                    src="/img/jobboard/ejtecs.webp"
                    alt="icon"
                    title=""
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="SliderMainBx">
                <div className="site-titles">
                  <Link
                    href="https://jobs.restrowizard.com.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    jobs.restrowizard.com.co
                  </Link>
                </div>
                <Link
                  href="https://jobs.restrowizard.com.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    unoptimized={true}
                    width={900}
                    height={100}
                    src="/img/jobboard/restrowizard.webp"
                    alt="icon"
                    title=""
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="SliderMainBx">
                <div className="site-titles">
                  <Link
                    href="https://www.healthandsocialcarejobs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    healthandsocialcarejobs.com
                  </Link>
                </div>
                <Link
                  href="https://www.healthandsocialcarejobs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    unoptimized={true}
                    width={900}
                    height={100}
                    src="/img/jobboard/healthandsocialcarejobs.webp"
                    alt="icon"
                    title=""
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="SliderMainBx">
                <div className="site-titles">
                  <Link
                    href="https://www.joblisto.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    joblisto.com
                  </Link>
                </div>
                <Link
                  href="https://www.joblisto.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    unoptimized={true}
                    width={900}
                    height={100}
                    src="/img/jobboard/joblisto.webp"
                    alt="icon"
                    title=""
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="SliderMainBx">
                <div className="site-titles">
                  <Link
                    href="https://www.booyajobs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    booyajobs.com
                  </Link>
                </div>
                <Link
                  href="https://www.booyajobs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    unoptimized={true}
                    width={900}
                    height={100}
                    src="/img/jobboard/booyajobs.webp"
                    alt="icon"
                    title=""
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="SliderMainBx">
                <div className="site-titles">
                  <Link
                    href="https://www.jobseakers.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    jobseakers.com.au
                  </Link>
                </div>
                <Link
                  href="https://www.jobseakers.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    unoptimized={true}
                    width={900}
                    height={100}
                    src="/img/jobboard/jobseakers.webp"
                    alt="icon"
                    title=""
                    className="img-fluid"
                  />
                </Link>
              </div>
            </Slider>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalSection;
