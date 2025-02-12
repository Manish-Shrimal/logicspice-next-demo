"use client";
import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import axios from "axios";
import "@/app/(category)/category.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import Swal from "sweetalert2";
import Loader from "@/app/Components/loader";
const Page = ({ params }) => {
  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [recaptcha1, setrecaptcha1] = useState("");
  const [blogData, setBlogData] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 15;
  const [categoryList, setCategoryList] = useState([]);
  const [recentPostsList, setRecentPostsList] = useState([]);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const [subscribeEmail, setSubscribeEmail] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  const handlePageChange = (pageNumber) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  const validateForm = () => {
    let isValid = true;
    const emailInput = document.getElementById("subscribe-email");
    const emailPattern = /\S+@\S+\.\S+/;
    if (!isCaptchaValid) {
      setrecaptcha1("Please check this");
      isValid = false;
    }
    if (!emailPattern.test(emailInput.value)) {
      emailInput.setCustomValidity("Please enter a valid email address.");
      Swal.fire({
        icon: "warning",
        text: "Please enter a valid email address.",
      });
      isValid = false;
    }
    return isValid;
  };

  const handleSubscribe = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://lswebsitedemo.logicspice.com/logicspice/api/blog/subscribe",
          {
            email_address: subscribeEmail,
          }
        );

        // If subscription is successful
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Subscription Successful",
            text: "You have been successfully subscribed.",
          });
        } else {
          // Handle other response statuses if needed
          Swal.fire({
            icon: "error",
            title: "Something went wrong",
            text: "Please try again later.",
          });
        }
        setSubscribeEmail();
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Subscription Failed",
          text: "An error occurred while subscribing. Please try again later.",
        });
      }
    }
  };

  const handleInputChange = (event) => {
    const emailInput = event.target;
    setSubscribeEmail(emailInput.value);
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
    setLoading(true);
    try {
      // const response = await axios.get(`${BaseAPI}/blog/listing`);
      const response = await axios.get(
        "https://lswebsitedemo.logicspice.com/logicspice/api/blog/listing"
      );
      setBlogData(response.data.response.blogData);
      setFilteredBlogs(response.data.response.blogData);
      setCategoryList(response.data.response.categoryList);
      setRecentPostsList(response.data.response.recentBlogs);
      setLoading(false);
      // console.log(response.data.response, "Blog Data");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (blogData && params.slug) {
      if (!searchText) {
        setFilteredBlogs(
          blogData.filter(
            (blog) =>
              blog.category_names &&
              blog.category_names.toLowerCase().replace(/\s+/g, "-").includes(params.slug)
          )
        );
      } else {
        const filtered = blogData.filter((blog) => {
          const searchFields = [
            blog.subject,
            blog.meta_title,
            blog.meta_keyword,
            blog.blog_description,
            blog.tags,
          ];

          return searchFields.some((field) =>
            field ? field.toLowerCase().includes(searchText) : false
          );
        });

        setFilteredBlogs(filtered);
      }
    }
  }, [blogData, params.slug, searchText]);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    const filtered = blogData.filter((blog) => {
      const searchFields = [
        blog.subject,
        blog.meta_title,
        blog.meta_keyword,
        blog.blog_description,
        blog.tags,
      ];

      return searchFields.some((field) =>
        field ? field.toLowerCase().includes(value) : false
      );
    });

    setFilteredBlogs(filtered);
    setCurrentPage(1);
  };

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
            {loading ? (
              <Loader />
            ) : (
              <div className="blog-container">
                {currentBlogs.length > 0 ? (
                  currentBlogs.map((blog, i) => (
                    <div className="blog-box" key={blog.id}>
                      <h1 className="blog-title">
                        <Link
                          href={`/blog/${blog.slug}`}
                          className="light_blue"
                          title={blog.subject}
                        >
                          {blog.subject || "Untitled Blog"}
                        </Link>
                      </h1>
                      <p className="blog-date">
                        {new Date(blog.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "2-digit",
                          year: "numeric",
                        })}{" "}
                        /
                        <span>
                          {blog.category_names &&
                            blog.category_names
                              .split(",")
                              .map((category_names, index) => (
                                <React.Fragment key={index}>
                                  <Link
                                    className="text-[#337ab7]"
                                    href={`/category/${category_names
                                      .trim()
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                  >
                                    {category_names.trim()}
                                  </Link>
                                  {index <
                                    blog.category_names.split(",").length - 1 &&
                                    ", "}
                                </React.Fragment>
                              ))}
                        </span>
                      </p>

                      <span className="blog-link">
                        {blog.tags &&
                          blog.tags.split(",").map((tag, index) => (
                            <Link
                              key={index}
                              href={`/tag/${tag.trim().replace(/\s+/g, "-")}`}
                            >
                              {tag.trim()}
                              {index < blog.tags.split(",").length - 1
                                ? ", "
                                : ""}
                            </Link>
                          ))}
                      </span>

                      {blog.image !== "" ? (
                        <Image
                          width={400}
                          height={100}
                          className="blog-image"
                          src={blog.image}
                          alt="Blog"
                        />
                      ) : (
                        <Image
                          width={400}
                          height={100}
                          className="blog-image"
                          unoptimized={true}
                          src="/img/blog/dummy-blog-post.jpg"
                          alt="Blog"
                        />
                      )}

                      <p className="blog-text">
                        {parse(
                          blog.blog_description.length > 200
                            ? blog.blog_description.slice(0, 200) + "..."
                            : blog.blog_description
                        )}
                      </p>

                      <Link href={`/blog/${blog.slug}`} className="blog-button">
                        READ MORE
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="text-indigo-500 text-xl font-semibold">
                    No Blogs Found...
                  </div>
                )}
                {filteredBlogs.length > 0 && (
                  <div className="pagination-container">
                    <button
                      className="pagination-button"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    <div className="pagination-numbers">
                      {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index}
                          className={`pagination-button ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                    <button
                      className="pagination-button"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            )}

            <div className="category-container">
              <p className="search-title">Search</p>
              <div className="relative">
                <input
                  id="searchtext"
                  className="search-input"
                  type="text"
                  value={searchText}
                  onChange={handleSearchChange}
                  placeholder="Search by title, description or tag"
                />
                <button className="search-icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
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
                  {categoryList.length > 0 &&
                    categoryList.map((category, index) => (
                      <li className="category-list-li" key={category.id}>
                        <i
                          className="fa fa-chevron-right"
                          aria-hidden="true"
                        ></i>{" "}
                        <Link href={`/category/${category.slug}`}>
                          {category.name}
                        </Link>
                      </li>
                    ))}
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
                  {recentPostsList.length > 0 &&
                    recentPostsList.map((recentpost, index) => (
                      <li
                        className="recent-posts-blog-li flex gap-2"
                        key={index}
                      >
                        <i
                          className="fa fa-chevron-right mt-1.5"
                          aria-hidden="true"
                        ></i>{" "}
                        <Link
                          href={`/blog/${recentpost.slug}`}
                          title={recentpost.subject}
                        >
                          {recentpost.subject}
                        </Link>
                      </li>
                    ))}
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
