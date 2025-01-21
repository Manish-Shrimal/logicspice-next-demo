"use client";
import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import axios from "axios";
import "@/app/(blog)/blog.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
const Page = () => {
  console.log("Blog-Page");
  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [recaptcha1, setrecaptcha1] = useState("");
  const [blogData, setBlogData] = useState([]);
  const handleSubscribe = (event) => {
    const emailInput = document.getElementById("subscribe-email");

    if (!emailInput.value.trim()) {
      emailInput.setCustomValidity("Please enter a valid email address.");
    } else {
      emailInput.setCustomValidity("");
    }
    if (!isCaptchaValid) {
      setrecaptcha1("Please check this");
      return;
    }
  };

  const handleInputChange = (event) => {
    const emailInput = event.target;

    if (emailInput.value.trim()) {
      emailInput.setCustomValidity("");
    } else {
      emailInput.setCustomValidity("Please enter a valid email address.");
    }
  };

  const onRecaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setIsCaptchaValid(!!value);
    setrecaptcha1("");
  };

  const onRecaptchaExpired = () => {
    console.log("Captcha expired");
    setrecaptcha1("Captcha expired");
    setIsCaptchaValid(false);
  };

  const getData = async () => {
    try {
      // const response = await axios.get(`${BaseAPI}/blog/listing`);
      const response = await axios.get(
        "https://lswebsitedemo.logicspice.com/logicspice/api/blog/listing"
      );
      setBlogData(response.data.response);
      console.log(response.data.response, "Blog Data");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const handleSearchChange = (e) =>{

  }

  return (
    <>
      <Navbar />
      <div>
        <div className="blog-header">
          <div className="container ">
            <div className="banner">
              <h1 className="title_blog">The Logicspice Blog</h1>
              <p className="title_blog_text">
                A Sneak Peek into the Future of Innovation
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="main-blog-container">
            {/* <div className="blog-container">
              {blogData.length > 0 ? (
                blogData.map((blog,i) => (
                <div className="blog-box" key={blog.id}>
                  <h1 className="blog-title">
                    <a
                      href="https://blog.logicspice.com/how-online-booking-software-can-boost-customer-retention"
                      className="light_blue"
                      title="How Online Booking Software Can Boost Customer Retention?"
                    >
                      {blog.meta_title}
                    </a>
                  </h1>
                  <p className="blog-date">
                    Dec 05, 2024 /
                    <a
                      className="text-[#337ab7]"
                      href="https://blog.logicspice.com/category/booking-software"
                    >
                      Booking software
                    </a>
                  </p>
                  <span className="blog-link">
                    <a href="https://blog.logicspice.com/tag/online-booking-software">
                      Online Booking Software,{" "}
                    </a>
                    <a href="https://blog.logicspice.com/tag/online-booking-software-for-small-business">
                      Online Booking Software For Small Business,{" "}
                    </a>
                    <a href="https://blog.logicspice.com/tag/best-online-booking-software">
                      Best Online Booking Software,{" "}
                    </a>
                    <a href="https://blog.logicspice.com/tag/booking-apps">
                      Booking Apps,{" "}
                    </a>
                    <a href="https://blog.logicspice.com/tag/best-appointment-scheduling-app">
                      Best Appointment Scheduling App
                    </a>
                  </span>
                  <img className="blog-image" src="" alt="Blog" />
                  <p className="blog-text">
                    Customer retention doesn’t start when they walk into your
                    store—it starts when they book their first appointment.
                    Here’s why online booking software is the best way to make a
                    lasting
                  </p>
                  <button className="blog-button">READ MORE</button>
                </div>
                ))
              ) : (
                <div>No Blogs Available At The Moment...</div>
              )}
            </div> */}
            <div className="blog-container">
              {blogData.length > 0 ? (
                blogData.map((blog, i) => (
                  <div className="blog-box" key={blog.id}>
                    <h1 className="blog-title">
                      <a
                        href={`/${blog.slug}`}
                        className="light_blue"
                        title={blog.meta_title}
                      >
                        {blog.meta_title || "Untitled Blog"}
                      </a>
                    </h1>
                    <p className="blog-date">
                      {new Date(blog.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}{" "}
                      /
                      <a
                        className="text-[#337ab7]"
                        href={`/category/${blog.category_id}`}
                      >
                        {blog.category_names &&
                          blog.category_names
                            .split(",")
                            .map((category_names, index) => (
                              <a
                                key={index}
                                href={`/${category_names
                                  .trim()
                                  .replace(/\s+/g, "-")}`}
                              >
                                {blog.category_names.trim()}
                                {index <
                                blog.category_names.split(",").length - 1
                                  ? ", "
                                  : ""}
                              </a>
                            ))}
                      </a>
                    </p>

                    <span className="blog-link">
                      {blog.tags &&
                        blog.tags.split(",").map((tag, index) => (
                          <a
                            key={index}
                            href={`/tag/${tag.trim().replace(/\s+/g, "-")}`}
                          >
                            {tag.trim()}
                            {index < blog.tags.split(",").length - 1
                              ? ", "
                              : ""}
                          </a>
                        ))}
                    </span>

                    <img className="blog-image" src={blog.image} alt="Blog" />

                    <p className="blog-text">
                      {blog.blog_description.length > 150
                        ? blog.blog_description.slice(0, 150) + "..."
                        : blog.blog_description}
                    </p>

                    <button className="blog-button">READ MORE</button>
                  </div>
                ))
              ) : (
                <div className="text-indigo-500 text-xl font-semibold">
                  No Blogs Available At The Moment...
                </div>
              )}
            </div>

            <div className="category-container">
              <p className="search-title">Search</p>
              <div className="relative">
                <input
                  id="searchtext"
                  className="search-input"
                  type="text"
                  onChange={handleSearchChange}
                  placeholder="Search by title, description or tag"
                />
                <button className="search-icon">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>

              <div>
                <div className="blog-cost-calculator">
                  <div className="cost-content">
                    {" "}
                    Try this tool for free to calculate the cost of App/Web
                    development live
                  </div>
                  <a
                    className="btn btn-default"
                    href="https://app-cost-calculator.logicspice.com/"
                  >
                    App Cost Calculator
                  </a>
                </div>
              </div>

              <aside className="category-box">
                <h4 className="category-title">Categories</h4>

                <ul className="category-list-ul">
                  <li className="category-list-li">
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                    <a href="https://blog.logicspice.com">All</a>
                  </li>

                  <li className="category-list-li">
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                    <a href="https://blog.logicspice.com/category/android-application">
                      Android Application
                    </a>
                  </li>

                  <li className="category-list-li">
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                    <a href="https://blog.logicspice.com/category/angularjs-development">
                      AngularJS Development
                    </a>
                  </li>

                  <li className="category-list-li">
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                    <a href="https://blog.logicspice.com/category/artificial-intelligence">
                      Artificial intelligence
                    </a>
                  </li>

                  <li className="category-list-li">
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                    <a href="https://blog.logicspice.com/category/best-online-booking-software">
                      Best Online Booking Software
                    </a>
                  </li>
                </ul>
              </aside>

              <div className="subscribe-blog">
                <div className="subscribe-blog-title">
                  Subscribe to Our Blog
                </div>
                <div className="">
                  <input
                    id="subscribe-email"
                    className="subscribe-email"
                    type="email"
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="scale-[0.8] mb-[10px] ml-[-30px]">
                  <ReCAPTCHA
                    key={recaptchaKey}
                    sitekey={recaptchaKey}
                    onChange={onRecaptchaChange}
                    onExpired={onRecaptchaExpired}
                  />
                  {recaptcha1 && (
                    <span className="error-message">{recaptcha1}</span>
                  )}
                </div>
                <div>
                  <button className="btn btn-primary" onClick={handleSubscribe}>
                    SUBSCRIBE
                  </button>
                </div>
              </div>

              <aside className="category-box">
                <h4 className="recent-post-title">Recent Posts</h4>
                <ul className="recent-posts-blog-ul">
                  <li className="recent-posts-blog-li flex gap-2">
                    <i
                      className="fa fa-chevron-right mt-1.5"
                      aria-hidden="true"
                    ></i>{" "}
                    <a
                      href="https://blog.logicspice.com/how-online-booking-software-can-boost-customer-retention"
                      title="How Online Booking Software Can Boost Customer Retention?"
                    >
                      How Online Booking Software Can Boost Customer Retention?
                    </a>
                  </li>

                  <li className="recent-posts-blog-li flex gap-2">
                    <i
                      className="fa fa-chevron-right mt-1.5"
                      aria-hidden="true"
                    ></i>{" "}
                    <a
                      href="https://blog.logicspice.com/the-future-of-blockchain-top-trends-shaping-the-industry-in-2024"
                      title="The Future of Blockchain: Top Trends Shaping the Industry in 2024"
                    >
                      The Future of Blockchain: Top Trends Shaping the Industry
                      in 2024
                    </a>
                  </li>

                  <li className="recent-posts-blog-li flex gap-2">
                    <i
                      className="fa fa-chevron-right mt-1.5"
                      aria-hidden="true"
                    ></i>{" "}
                    <a
                      href="https://blog.logicspice.com/guest-posting-strategies-for-tech-enthusiasts-tips-and-tricks"
                      title="Guest Posting Strategies for Tech Enthusiasts: Tips and Tricks"
                    >
                      Guest Posting Strategies for Tech Enthusiasts: Tips and
                      Tricks
                    </a>
                  </li>

                  <li className="recent-posts-blog-li flex gap-2">
                    <i
                      className="fa fa-chevron-right mt-1.5"
                      aria-hidden="true"
                    ></i>{" "}
                    <a
                      href="https://blog.logicspice.com/the-future-of-php-development-trends-to-watch-in-2024"
                      title="The Future of PHP Development: Trends to Watch in 2024"
                    >
                      The Future of PHP Development: Trends to Watch in 2024
                    </a>
                  </li>

                  <li className="recent-posts-blog-li flex gap-2">
                    <i
                      className="fa fa-chevron-right mt-1.5"
                      aria-hidden="true"
                    ></i>{" "}
                    <a
                      href="https://blog.logicspice.com/the-impact-of-ai-on-mobile-app-development-trends-and-innovations"
                      title="The Impact of AI on Mobile App Development Trends and Innovations"
                    >
                      The Impact of AI on Mobile App Development Trends and
                      Innovations
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
