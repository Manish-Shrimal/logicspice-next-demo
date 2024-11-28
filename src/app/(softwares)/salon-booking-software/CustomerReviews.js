import Image from "next/image";
import React, { useState } from "react";
import Reviewmodals from "@/app/Components/Reviewmodals";

const CustomerReviews = () => {
    const [showReviewModal, setShowReviewModal] = useState(false);

    const openReviewModel = () => {
        setShowReviewModal(!showReviewModal);
      };
  return (
    <section className="ecommerce_review_section" id="reviews">
      <div className="ecommerce_review__img">
        <Image
          unoptimized={true}
          width={400}
          height={100}
          src="/img/jobboard/ecommerce-review-img.png"
          alt="eCommerce Ultimate Package"
          className=""
        />
      </div>
      <div className="container">
        <h2>Customer Reviews</h2>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="ecommerce--review">
              <div className="customers_review_sec_row">
                <div className="customer_review_stext">
                  &quot;This hair salon booking software has completely changed
                  how we manage our appointments. Clients find it so easy to
                  book online. It&apos;s been a huge help for our salon!&quot;
                </div>
                <div className="who_ratset">
                  <span
                    className="star_review_main"
                    style={{ paddingRight: "10px", color: "gold;" }}
                  >
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </span>
                  Sarah J., Salon Owner, USA
                  <span>
                    <Image
                      unoptimized={true}
                      width={100}
                      height={100}
                      src="/img/jobboard/usa_flag_img.png"
                      alt="mobile app development in USA"
                      style={{ width: "20px", marginLeft: "3px;" }}
                    />
                  </span>
                </div>
              </div>
              <div className="customers_review_sec_row">
                <div className="customer_review_stext" id="fiveer-clone">
                  &quot;We&apos;re so happy we switched to this software.
                  Clients can book their own appointments whenever they want,
                  which frees up our time to focus on them when theyre here.
                  It&apos;s made such a difference for us.&quot;
                </div>

                <div className="who_ratset">
                  <span
                    className="star_review_main"
                    style={{ paddingRight: "10px", color: "gold;" }}
                  >
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </span>
                  <span id="client-name">
                    Donald M., Beauty Salon Owner, UK
                  </span>{" "}
                  <span>
                    <Image
                      unoptimized={true}
                      width={100}
                      height={100}
                      src="/img/jobboard/uk_flag_img.png"
                      alt="mobile app development in USA"
                      style={{ width: "20px", marginLeft: "3px;" }}
                    />
                  </span>
                </div>
              </div>

              <div className="customers_review_sec_row">
                <div className="customer_review_stext" id="fiveer-clone">
                  &quot;Adding this booking software was the best decision for
                  our spa. Clients love the convenience, and we can focus more
                  on their experience instead of dealing with scheduling.
                  It&apos;s been amazing.&quot;
                </div>

                <div className="who_ratset">
                  <span
                    className="star_review_main"
                    style={{ paddingRight: "10px", color: "gold;" }}
                  >
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </span>
                  <span id="client-name">James P., Spa Owner, New Zealand</span>{" "}
                  <span>
                    <Image
                      unoptimized={true}
                      width={100}
                      height={100}
                      src="/img/jobboard/newzealand_flag.jpg"
                      alt="mobile app development in USA"
                      style={{ width: "20px", marginLeft: "3px;" }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="ecommerce--review--point ">
              <div className="outof_rating">
                <div className="review_rating_fjs">
                  <div className="star_num">
                    5 <i className="fa fa-star"></i>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-danger progress-bar-striped"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <div className="people_star_num">206</div>
                </div>

                <div className="review_rating_fjs">
                  <div className="star_num">
                    4 <i className="fa fa-star"></i>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-danger progress-bar-striped"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                  <div className="people_star_num">13</div>
                </div>

                <div className="review_rating_fjs">
                  <div className="star_num">
                    0 <i className="fa fa-star"></i>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-danger progress-bar-striped"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                  <div className="people_star_num">0</div>
                </div>

                <div className="review_rating_fjs">
                  <div className="star_num">
                    2 <i className="fa fa-star"></i>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-danger progress-bar-striped"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                  <div className="people_star_num">0</div>
                </div>

                <div className="review_rating_fjs">
                  <div className="star_num">
                    1 <i className="fa fa-star"></i>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-danger progress-bar-striped"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                  <div className="people_star_num">0</div>
                </div>
              </div>
              <div className="ecommerce--review--btn ">
                <a className="btn btn-primary" onClick={openReviewModel}>
                  Rate and Review product
                </a>

                <Reviewmodals
                  modalStatus={showReviewModal}
                  toggle={openReviewModel}
                  title="Salon Booking Software"
                />
              </div>
              <div className="main-rait">
                <span>
                  <i className="fa fa-star"></i> <span>4.7 out of 5 stars</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
