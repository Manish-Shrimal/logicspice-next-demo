"use client";
import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import axios from "axios";
import "@/app/(blog)/blog/(tag)/tag.css";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import Swal from "sweetalert2";
import Loader from "@/app/Components/loader";
const Page = ({ params }) => {
  let currentTime = Date.now();
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
  const [loading, setLoading] = useState(true);
  const [subscribeLoading, setSubscribeLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);
  const [visiblePages, setVisiblePages] = useState([]);

  const handlePageChange = (pageNumber) => {
    // window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const updateVisiblePages = () => {
      const newVisiblePages = [];
      const range = 2;

      newVisiblePages.push(1);

      let start = Math.max(2, currentPage - range);
      let end = Math.min(totalPages - 1, currentPage + range);

      if (start > 2) {
        newVisiblePages.push("...");
      }

      for (let i = start; i <= end; i++) {
        newVisiblePages.push(i);
      }

      if (end < totalPages - 1) {
        newVisiblePages.push("...");
      }

      if (totalPages > 1) {
        newVisiblePages.push(totalPages);
      }

      setVisiblePages(newVisiblePages);
    };

    if (totalPages > 0) {
      updateVisiblePages();
    }
  }, [currentPage, totalPages]);

  const handleEllipsisClick = (index) => {
    const isLeftEllipsis = index === 1;
    const isRightEllipsis = index === visiblePages.length - 2;

    if (isLeftEllipsis) {
      const newPage = Math.max(1, currentPage - 5);
      handlePageChange(newPage);
    } else if (isRightEllipsis) {
      const newPage = Math.min(totalPages, currentPage + 5);
      handlePageChange(newPage);
    }
  };

  const renderPaginationButtons = () => {
    return visiblePages.map((page, index) => {
      if (page === "...") {
        return (
          <button
            key={index}
            className="pagination-button disabled"
            onClick={() => handleEllipsisClick(index)}
          >
            ...
          </button>
        );
      }
      return (
        <button
          key={index}
          className={`pagination-button ${
            currentPage === page ? "active" : ""
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      );
    });
  };
  const validateForm = () => {
    let isValid = true;
    const emailInput = document.getElementById("subscribe-email");
    const emailPattern = /\S+@\S+\.\S+/;
    if (!isCaptchaValid) {
      setrecaptcha1("Please verify recaptcha");
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
      setSubscribeLoading(true);
      try {
        const response = await axios.post(BaseAPI + "/blog/subscribe", {
          email_address: subscribeEmail,
          slug: currentTime,
        });

        // If subscription is successful
        if (response.data.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Subscription Successful",
            text: "You have been successfully subscribed.",
          });
        } else if (response.data.status === 500) {
          Swal.fire({
            icon: "warning",
            // title: "Something went wrong",
            text: response.data.message,
          });
        } else {
          Swal.fire({
            icon: "error",
            // title: "Something went wrong",
            text: response.message,
          });
        }
        setSubscribeEmail("");
        setSubscribeLoading(false);
      } catch (error) {
        console.error(error);
        setSubscribeLoading(false);
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
    // setLoading(true);
    try {
      // const response = await axios.get(`${BaseAPI}/blog/listing`);
      const response = await axios.get(BaseAPI + "/blog/listing");
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
              blog.tags &&
              blog.tags
                .toLowerCase()
                .replace(/\s+/g, "-")
                .includes(params.slug.toLowerCase())
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
                <nav aria-label="breadcrumb" className="w-max mb-3">
                  <ol class="flex flex-wrap items-center rounded-md bg-slate-100 px-4 py-2">
                    <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                      <Link href="/blog">
                        <p className="text-lg font-medium !pb-0 !mb-0">Blog</p>
                      </Link>
                      <span class="pointer-events-none mx-2 text-slate-800">
                        /
                      </span>
                    </li>
                    <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                      <Link href="#">
                        <p className="text-lg font-medium !pb-0 !mb-0">Tag</p>
                      </Link>
                      <span class="pointer-events-none mx-2 text-slate-800">
                        /
                      </span>
                    </li>
                    <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                      <Link href="#">
                        <p className="text-lg font-medium !pb-0 !mb-0">
                          {params.slug
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, (char) => char.toUpperCase())}
                        </p>
                      </Link>
                    </li>
                  </ol>
                </nav>
                {currentBlogs.length > 0 ? (
                  currentBlogs.map((blog, i) => (
                    <div className="blog-box" key={blog.id}>
                      <h3 className="blog-title">
                        <Link
                          href={`/blog/${blog.slug}`}
                          className="light_blue"
                          title={blog.subject}
                        >
                          {blog.subject || "Untitled Blog"}
                        </Link>
                      </h3>
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
                                    href={`/blog/category/${category_names
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
                              href={`/blog/tag/${tag
                                .trim()
                                .replace(/\s+/g, "-")}`}
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
                          width={100}
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
                  <div className="text-purple-700 text-2xl mt-4 w-full text-center font-semibold">
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
                    {/* <div className="pagination-numbers">
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
                    </div> */}
                    <div className="pagination-numbers">
                      {/* {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;

                        // Show first 3 pages, last 3 pages, and current page if necessary
                        if (
                          pageNumber <= 2 ||
                          pageNumber > totalPages - 2 ||
                          (pageNumber >= currentPage - 1 &&
                            pageNumber <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={index}
                              className={`pagination-button ${
                                currentPage === pageNumber ? "active" : ""
                              }`}
                              onClick={() => handlePageChange(pageNumber)}
                            >
                              {pageNumber}
                            </button>
                          );
                        }

                        // Show ellipsis if we're skipping over pages
                        if (
                          (pageNumber === 3 && currentPage >= 3) ||
                          (pageNumber === totalPages - 2 &&
                            currentPage <= totalPages - 2)
                        ) {
                          return (
                            <button
                              key={index}
                              className="pagination-button disabled"
                              disabled
                            >
                              ...
                            </button>
                          );
                        }

                        return null; // Skip rendering for other pages
                      })} */}
                      {renderPaginationButtons()}
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
                {searchText.length === 0 ? (
                  <button className="search-icon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                ) : (
                  <button
                    className="search-icon"
                    onClick={() => {
                      setSearchText("");
                      // setFilteredBlogs(blogData);
                      setCurrentPage(1);
                    }}
                  >
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </button>
                )}
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

                <ul className="category-list-ul !pl-0">
                  {categoryList.length > 0 &&
                    categoryList.map((category, index) => (
                      <li className="category-list-li" key={category.id}>
                        <i
                          className="fa fa-chevron-right"
                          aria-hidden="true"
                        ></i>{" "}
                        <Link href={`/blog/category/${category.slug}`}>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </aside>

              <div className="subscribe-blog">
                {subscribeLoading ? (
                  <div className="py-5">
                    <div className="mt-[-100px]">
                      <Loader />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="subscribe-blog-title">
                      Subscribe to Our Blog
                    </div>
                    <div className="">
                      <input
                        id="subscribe-email"
                        className="subscribe-email"
                        type="email"
                        value={subscribeEmail}
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
                      <button
                        className="btn btn-primary"
                        onClick={handleSubscribe}
                      >
                        SUBSCRIBE
                      </button>
                    </div>
                  </>
                )}
              </div>

              <aside className="category-box">
                <h4 className="recent-post-title">Recent Posts</h4>
                <ul className="recent-posts-blog-ul !pl-0">
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
