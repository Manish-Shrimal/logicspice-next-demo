import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReadymadeSolution = () => {
  return (
    <>
      <div className="container">
        <p style={{ marginBottom: "15px" }}>
          At Logicspice, we are always growing to meet the evolving needs of
          businesses. Our newest services include
          <Link href="/blockchain-development"> Blockchain Development services </Link>
           for secure and transparent operations, Generative AI to drive
          creativity and boost efficiency, and Video Creation for high-quality,
          impactful brand videos.
        </p>
        <p>
          We have also developed ready-to-use software solutions for healthcare
          providers, such as Doctor Appointment Booking Software; Salon Booking
          Software for beauty and wellness businesses, Group Chat Apps for
          Internal Communication, Live Chat Software, and flexible booking for a
          whole profundity of service industries, making it easy for people to
          book appointments in order to enrich customer interactions.
        </p>
      </div>

      <section className="readymateSolution">
        <div className="container">
          <div className="headings">
            <h2>READYMADE SOFTWARE SOLUTIONS</h2>
            <p>
              Our readily available solutions for various types of industries
            </p>
          </div>
          <div className="readymateSolution">
            <div className="row">
              <div className="col-md-3 col-sm-3">
                <Link
                  href="/fiverr-clone"
                  className="ready-product aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/gigger-product-img.webp"
                    alt="gigger"
                  />{" "}
                  <div className="abs-product">
                    <h3>Fiverr Clone</h3>
                    <p>White label fiverr clone php script</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">569 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-3">
                <Link
                  href="/job-board-software"
                  className="ready-product aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/jobboard-product-img.webp"
                    alt="Job-board"
                  />{" "}
                  <div className="abs-product">
                    <h3>Job Board Software</h3>
                    <p>White Label Job Board Script</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">219 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-3">
                <Link
                  href="/salon-booking-software"
                  className="ready-product"
                  data-aos="fade-up"
                >
                  <Image
                    unoptimized={true}
                    width={100}
                    height={100}
                    className=""
                    src="/img/doctorappointment/salon-booking-icon.png"
                    alt="Salon Booking Software"
                  />
                  <div className="abs-product">
                    <h3>Salon Booking Software</h3>
                    <p>Simplify appointment management for salons and spas.</p>
                    {/* <p>
                      Our Salon Booking Software helps salons and spas manage
                      appointments with ease, and creating a smooth booking
                      experience for clients.
                    </p> */}
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">210 REVIEWS</div>
                    <ul className="make-style">
                      {/* <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li> */}
                      <li>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          className=""
                          src="/img/softwares/web_new.png"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-sm-3">
                <Link
                  href="/freelancer-clone"
                  className="ready-product aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/freelancer-product-img.webp"
                    alt="freelancerclone"
                  />{" "}
                  <div className="abs-product">
                    <h3>Freelancer Clone</h3>
                    <p>Freelance Marketplace</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">128 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>
              {/* <div className="col-md-3 col-sm-3">
                <Link
                  href="/whatsapp-clone"
                  className="ready-product aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/whatsapp-product-img.webp"
                    alt="whatsApp-clone"
                  />{" "}
                  <div className="abs-product">
                    <h3>Whatsapp Clone</h3>
                    <p>Instant messaging app</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">24 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div> */}
              <div className="col-md-3 col-sm-3">
                <Link
                  href="/doctor-appointment-scheduling-software"
                  className="ready-product"
                  data-aos="fade-up"
                >
                  <Image
                    unoptimized={true}
                    width={100}
                    height={100}
                    className=""
                    src="/img/doctorappointment/doctor-appointment-icon.png"
                    alt="Doctor Appointment Scheduling Software"
                  />
                  <div className="abs-product">
                    <h3>Doctor Appointment Scheduling Software</h3>
                    <p>
                      Easily manage patient appointments with flexible
                      scheduling.
                    </p>

                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">355 REVIEWS</div>
                    <ul className="make-style">
                      {/* <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li> */}
                      <li>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          className=""
                          src="/img/softwares/web_new.png"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-sm-3">
                <Link
                  href="/logistic-marketplace-software"
                  className="ready-product aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/logisticr-product-img.webp"
                    alt="logistic-marketplace"
                  />{" "}
                  <div className="abs-product">
                    <h3>Logicstic Marketplace Software</h3>
                    <p>Uship clone script</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">173 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>
              {/* <div className="col-md-3 col-sm-3">
                <Link
                  href="/food-ordering-script"
                  className="ready-product aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/foododer-product-img.webp"
                    alt="food-ordering"
                  />{" "}
                  <div className="abs-product">
                    <h3>Food Ordering Script</h3>
                    <p>Foodpanda Clone, Swiggy Clone</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">32 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div> */}
              <div className="col-md-3 col-sm-3">
                <Link
                  href="/hrms-software"
                  className="ready-product"
                  data-aos="fade-up"
                >
                  <Image
                    unoptimized={true}
                    width={100}
                    height={100}
                    className=""
                    src="/img/hrms/human-resource-icon.png"
                    alt="Human Resource Management Software"
                  />
                  <div className="abs-product">
                    <h3>Human Resource Management Software</h3>
                    <p>All-in-one solution for HR and payroll management.</p>
                    {/* <p>
                              HR Management Software makes handling employee
                              data and HR tasks simple and efficient, helping
                              businesses save time and stay organized.
                            </p> */}
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">310 REVIEWS</div>
                    <ul className="make-style">
                      {/* <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/android-new.png"
                                  alt="android"
                                />
                              </li>
                              <li>
                                <Image
                                  unoptimized={true}
                                  width={100}
                                  height={100}
                                  className=""
                                  src="/img/softwares/apple.png"
                                  alt="apple"
                                />
                              </li> */}
                      <li>
                        <Image
                          unoptimized={true}
                          width={100}
                          height={100}
                          className=""
                          src="/img/softwares/web_new.png"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>
              <div className="col-md-3 col-sm-3">
                <Link
                  href="/appointment-scheduling-software"
                  className="ready-product aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/appointment-product-img.webp"
                    alt="appointment-scheduling"
                  />{" "}
                  <div className="abs-product">
                    <h3>Appointment Scheduling </h3>
                    <p>Appointment Booking Script</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">28 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-3">
                <Link
                  href="/crowdfunding-script"
                  className="ready-product aos-init"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/crowdfunding-product-img.webp"
                    alt="Crowdfunding Script"
                  />{" "}
                  <div className="abs-product">
                    <h3>Crowdfunding Script</h3>
                    <p>Fundraising Software like GoFundMe &amp; Kickstarter</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">47 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-3">
                <Link
                  href="/equipment-rental-software"
                  className="ready-product aos-init"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/equipment-product-img.webp"
                    alt="Equipment Rental Script"
                  />{" "}
                  <div className="abs-product">
                    <h3>Equipment Rental Software</h3>
                    <p>
                      Advanced equipment rental software for renting equipment
                      tools.
                    </p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">38 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-3">
                <Link
                  href="/groupon-clone"
                  className="ready-product aos-init"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/groupon-product-img.webp"
                    alt="Groupon Clone Script"
                  />{" "}
                  <div className="abs-product">
                    <h3>Groupon Clone Script</h3>
                    <p>Similar to Daily Deal Software &amp; Coupon Script</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">12 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/android-new.webp"
                          alt="android"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/apple.webp"
                          alt="apple"
                        />
                      </li>
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-3">
                <Link
                  href="/recruitment-management-software"
                  className="ready-product aos-init"
                  data-aos="fade-up"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/img/images/recruitment-product-img.webp"
                    alt="Recruitment management software"
                  />{" "}
                  <div className="abs-product">
                    <h3>Recruitment management Software</h3>
                    <p>Readymade applicant tracking system</p>
                    <div className="product-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="product-review">44 REVIEWS</div>
                    <ul className="make-style">
                      <li>
                        <Image
                          width={100}
                          height={100}
                          src="/img/images/web_new.webp"
                          alt="web"
                        />
                      </li>
                    </ul>
                  </div>
                </Link>
              </div>

              <div className="product-view">
                <Link href="/softwares" className="btn btn-primary">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadymadeSolution;
