"use client";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "@/app/(blog)/blog.css";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";

const Page = () => {
  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isCaptchaValid1, setIsCaptchaValid1] = useState(false);
  const [recaptcha1, setrecaptcha1] = useState("");

  const handleSubscribe = (event) => {
    const emailInput = document.getElementById("subscribe-email");
    
    if (!emailInput.value.trim()) {
      emailInput.setCustomValidity("Please enter a valid email address.");
    } else {
      emailInput.setCustomValidity("");
    }
    if (!isCaptchaValid1) {
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

  const onRecaptchaChange1 = (value) => {
    console.log("Captcha1 value:", value);
    setIsCaptchaValid1(!!value);
    setrecaptcha1("");
  };

  const onRecaptchaExpired1 = () => {
    console.log("Captcha1 expired");
    setrecaptcha1("Captcha expired");
    setIsCaptchaValid1(false);
  };

  const onRecaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setIsCaptchaValid(!!value);
    errors.recaptcha = "";
  };

  const onRecaptchaExpired = () => {
    console.log("Captcha expired");
    errors.recaptcha = "Captcha expired";
    setIsCaptchaValid(false);
  };

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    comment: "",
    recaptcha: "",
  });

  const validateField = (field, value) => {
    const newErrors = { ...errors };
    let valid = true;

    if (field === "name") {
      if (!value.trim()) {
        newErrors.name = "Name is required";
        valid = false;
      } else {
        newErrors.name = "";
      }
    }

    if (field === "email") {
      if (!value.trim()) {
        newErrors.email = "Email is required";
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = "Please enter a valid email";
        valid = false;
      } else {
        newErrors.email = "";
      }
    }

    if (field === "comment") {
      if (!value.trim()) {
        newErrors.comment = "Comment is required";
        valid = false;
      } else {
        newErrors.comment = "";
      }
    }

    setErrors(newErrors);
    return valid;
  };

  // Handler for real-time validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateForm = () => {
    let valid = true;
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const comment = document.getElementById("BlogCommentListComment").value;
    const newErrors = { name: "", email: "", comment: "", recaptcha: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!comment.trim()) {
      newErrors.comment = "Comment is required";
      valid = false;
    }
    if (!isCaptchaValid) {
      newErrors.recaptcha = "Please check this";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Post comment logic (you can add the actual comment submission logic here)
      console.log("Comment posted!");
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="container mt-32">
          <div className="main-blog-container">
            <div className="blog-detail-container">
              <div className="blog-detail-box">
                <h1 className="blog-detail-title">
                  How Online Booking Software Can Boost Customer Retention?
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
                <img className="blog-image" src="" alt="Blog" />
                <p className="blog-detail-text">
                  Customer retention doesn’t start when they walk into your
                  store—it starts when they book their first appointment. Here’s
                  why online booking software is the best way to make a lasting
                  impression.
                </p>

                <div className="comments-area">
                  <h2 className="comment-title">0 Comment</h2>

                  <h3 className="comment-reply-title">
                    <span className="comment-reply-title-span">Lea</span>ve a
                    Reply
                  </h3>

                  <p className="comment-notes">
                    <span id="email-notes" style={{ fontSize: "14px" }}>
                      Your email address will not be publish.
                    </span>{" "}
                    <span style={{ fontSize: "15px" }}>
                      Required fields are marked *
                    </span>
                  </p>
                  <div className="flex mb-[10px]">
                    <p className="comment-label">Comment*</p>
                    <textarea
                      className={`comment-text ${
                        errors.comment ? "error" : ""
                      }`}
                      placeholder="Comment"
                      autocomplete="OFF"
                      id="BlogCommentListComment"
                      name="comment"
                      cols="50"
                      rows="10"
                      data-qb-tmp-id="lt-233487"
                      spellcheck="false"
                      data-gramm="false"
                      onChange={handleChange}
                    ></textarea>
                    {/* {errors.comment && (
                      <span className="error-message">{errors.comment}</span>
                    )} */}
                  </div>
                  <div className="flex mb-[10px]">
                    <p className="comment-label">Name*</p>
                    <input
                      className={`comment-input ${errors.name ? "error" : ""}`}
                      placeholder="Name"
                      autocomplete="OFF"
                      name="name"
                      type="text"
                      onChange={handleChange}
                    />
                    {/* {errors.name && (
                      <span className="error-message">{errors.name}</span>
                    )} */}
                  </div>
                  <div className="flex mb-[10px]">
                    <p className="comment-label">Email*</p>
                    <input
                      className={`comment-input ${errors.email ? "error" : ""}`}
                      placeholder="Email"
                      autocomplete="OFF"
                      name="email"
                      type="text"
                      onChange={handleChange}
                    />
                    {/* {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )} */}
                  </div>
                  <div className="flex mb-[10px]">
                    <p className="comment-label">Website</p>
                    <input
                      class="comment-input"
                      placeholder="Website"
                      autocomplete="OFF"
                      name="website"
                      type="text"
                    />
                  </div>
                  <div className="grid">
                    <div className="comment-post">
                      <div className="scale-[0.8] mb-[5px] ml-[-30px]">
                        <ReCAPTCHA
                          key={recaptchaKey}
                          sitekey={recaptchaKey}
                          onChange={onRecaptchaChange}
                          onExpired={onRecaptchaExpired}
                        />
                        {errors.recaptcha && (
                          <span className="error-message">
                            {errors.recaptcha}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="comment-post">
                      <button
                        className="btn btn-primary"
                        onClick={handlePostComment}
                      >
                        POST COMMENT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="category-container">
              <p className="search-title">Search</p>
              <div className="relative">
                <input
                  className="search-input"
                  type="text"
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
                    class="btn btn-default"
                    href="https://app-cost-calculator.logicspice.com/"
                  >
                    App Cost Calculator
                  </a>
                </div>
              </div>

              <aside className="category-box">
                <h4 class="category-title">Categories</h4>

                <ul className="category-list-ul">
                  <li className="category-list-li">
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                    <a href="https://blog.logicspice.com">All</a>
                  </li>

                  <li className="category-list-li">
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                    <a href="https://blog.logicspice.com/category/android-application">
                      Android Application
                    </a>
                  </li>

                  <li className="category-list-li">
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                    <a href="https://blog.logicspice.com/category/angularjs-development">
                      AngularJS Development
                    </a>
                  </li>

                  <li className="category-list-li">
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>{" "}
                    <a href="https://blog.logicspice.com/category/artificial-intelligence">
                      Artificial intelligence
                    </a>
                  </li>

                  <li className="category-list-li">
                    <i class="fa fa-chevron-right" aria-hidden="true"></i>{" "}
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
                    onChange={onRecaptchaChange1}
                    onExpired={onRecaptchaExpired1}
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
                <h4 class="recent-post-title">Recent Posts</h4>
                <ul className="recent-posts-blog-ul">
                  <li className="recent-posts-blog-li flex gap-2">
                    <i
                      class="fa fa-chevron-right mt-1.5"
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
                      class="fa fa-chevron-right mt-1.5"
                      aria-hidden="true"
                    ></i>{" "}
                    <a
                      href="https://blog.logicspice.com/the-future-of-blockchain-top-trends-shaping-the-industry-in-2024"
                      class="light_blue"
                      title="The Future of Blockchain: Top Trends Shaping the Industry in 2024"
                    >
                      The Future of Blockchain: Top Trends Shaping the Industry
                      in 2024
                    </a>
                  </li>

                  <li className="recent-posts-blog-li flex gap-2">
                    <i
                      class="fa fa-chevron-right mt-1.5"
                      aria-hidden="true"
                    ></i>{" "}
                    <a
                      href="https://blog.logicspice.com/guest-posting-strategies-for-tech-enthusiasts-tips-and-tricks"
                      class="light_blue"
                      title="Guest Posting Strategies for Tech Enthusiasts: Tips and Tricks"
                    >
                      Guest Posting Strategies for Tech Enthusiasts: Tips and
                      Tricks
                    </a>
                  </li>

                  <li className="recent-posts-blog-li flex gap-2">
                    <i
                      class="fa fa-chevron-right mt-1.5"
                      aria-hidden="true"
                    ></i>{" "}
                    <a
                      href="https://blog.logicspice.com/the-future-of-php-development-trends-to-watch-in-2024"
                      class="light_blue"
                      title="The Future of PHP Development: Trends to Watch in 2024"
                    >
                      The Future of PHP Development: Trends to Watch in 2024
                    </a>
                  </li>

                  <li className="recent-posts-blog-li flex gap-2">
                    <i
                      class="fa fa-chevron-right mt-1.5"
                      aria-hidden="true"
                    ></i>{" "}
                    <a
                      href="https://blog.logicspice.com/the-impact-of-ai-on-mobile-app-development-trends-and-innovations"
                      class="light_blue"
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
