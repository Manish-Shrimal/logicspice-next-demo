"use client";
import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "@/app/(blog)/blog.css";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import axios from "axios";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import Swal from "sweetalert2";
import Loader from "@/app/Components/loader";

const Page = ({ params }) => {
  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isCaptchaValid1, setIsCaptchaValid1] = useState(false);
  const [recaptcha1, setrecaptcha1] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subscribeLoading, setSubscribeLoading] = useState(false);
  const [commentLoading, setCommentLoading] = useState(false);
  const [blogData, setBlogData] = useState({
    subject: "",
    meta_description: "",
    category_id: "",
    meta_title: "",
    meta_keyword: "",
    tags: "",
    blog_description: "",
    image: "",
    slug: "",
    created_at: "",
    tags: "",
  });
  const blogsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [paginatedBlogs, setPaginatedBlogs] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [recentPostsList, setRecentPostsList] = useState([]);
  const [subscribeEmail, setSubscribeEmail] = useState();

  const [commentData, setCommentData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
    slug: params.slug,
  });
  const [totalComments, setTotalComments] = useState();
  const [totalCommentsData, setTotalCommentsData] = useState([]);
  useEffect(() => {
    if (Array.isArray(searchResults)) {
      const startIndex = (currentPage - 1) * blogsPerPage;
      const endIndex = startIndex + blogsPerPage;
      const currentBlogs = searchResults.slice(startIndex, endIndex);

      setPaginatedBlogs(currentBlogs);
      setTotalPages(Math.ceil(searchResults.length / blogsPerPage));
    }
  }, [searchResults, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0); // Optional, to scroll to top on page change
    }
  };
  console.log(params.slug, "From blog description page");
  const validateSubscribeForm = () => {
    let isValid = true;
    const emailInput = document.getElementById("subscribe-email");
    const emailPattern = /\S+@\S+\.\S+/;
    if (!isCaptchaValid1) {
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
    if (validateSubscribeForm()) {
      setSubscribeLoading(true);
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
    setCommentData((prevCommentData) => ({
      ...prevCommentData,
      [name]: value, // Dynamically update the field based on `name` attribute
    }));
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
    console.log(isCaptchaValid);

    if (!isCaptchaValid) {
      newErrors.recaptcha = "Please verify recaptcha";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handlePostComment = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setCommentLoading(true);
      try {
        const response = await axios.post(
          `https://lswebsitedemo.logicspice.com/logicspice/api/${params.slug}/comments`,
          commentData
        );
        Swal.fire({
          icon: "success",
          title: "Comment posted Successful",
          text: "You have successfully posted comment.",
        });
        setCommentData({
          comment: "",
          name: "",
          email: "",
          website: "",
        });
        getCommentData();
        setCommentLoading(false);
      } catch (error) {
        console.error(error);
        setCommentLoading(false);
      }
    }
  };

  const getData = async () => {
    try {
      // const response = await axios.get(`${BaseAPI}/blog/listing`);
      const response = await axios.get(
        ` https://lswebsitedemo.logicspice.com/logicspice/api/blog/detail/${params.slug}`
      );
      setBlogData(response.data.response.blogData);
      setCategoryList(response.data.response.categoryList);
      setRecentPostsList(response.data.response.recentBlogs);
      console.log(response.data.response, "Blog Description");
    } catch (error) {
      console.error(error);
    }
  };
  const getCommentData = async () => {
    try {
      const response = await axios.get(
        `https://lswebsitedemo.logicspice.com/logicspice/api/${params.slug}/comments`
      );
      console.log(response.data.comments);
      setTotalComments(response.data.total_comments);
      setTotalCommentsData(response.data.comments);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
    getCommentData();
  }, []);

  const handleSearch = async (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);

    setSearchResults([]);
    if (keyword == "" || keyword === null || !keyword) {
      setSearchKeyword();
      setPaginatedBlogs([]);
      setTotalPages(0);
      setCurrentPage(1);
      console.log(searchResults.length, "comment");
    }
    if (keyword.length > 2) {
      setLoading(true);

      try {
        const response = await axios.get(
          `https://lswebsitedemo.logicspice.com/logicspice/api/blog/${keyword}/search`,
          { params: { keyword: keyword } }
        );
        setSearchResults(response.data.data);
        setCurrentPage(1);
        // console.log(response.data.response);
      } catch (error) {
        console.error("Network error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="container mt-32">
          <div className="main-blog-container">
            <>
              {searchResults.length > 0 ? (
                <div className="blog-container">
                  <nav aria-label="breadcrumb" className="w-max mb-3">
                    <ol class="flex flex-wrap items-center rounded-md bg-slate-100 px-4 py-2">
                      <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                        <Link href="/blog">
                          <p className="text-lg font-medium">Blog</p>
                        </Link>
                        <span class="pointer-events-none mx-2 text-slate-800">
                          /
                        </span>
                        <Link href="#">
                          <p className="text-lg font-medium">
                            {blogData.subject}
                          </p>
                        </Link>
                      </li>
                    </ol>
                  </nav>
                  {paginatedBlogs.map((blog, i) => (
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
                          width={100}
                          height={100}
                          className="blog-image"
                          unoptimized={true}
                          // src="/img/blog/dummy-blog-post.jpg"
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
                  ))}

                  <div className="pagination-container">
                    <button
                      className="pagination-button"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    
                    <div className="pagination-numbers">
                      {[...Array(totalPages)].map((_, index) => {
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
                      })}
                    </div>
                    <button
                      className="pagination-button"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                </div>
              ) : (
                <div className="blog-container">
                  <nav aria-label="breadcrumb" className="w-max mb-3">
                    <ol class="flex flex-wrap items-center rounded-md bg-slate-100 px-4 py-2">
                      <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                        <Link href="/blog">
                          <p className="text-lg font-medium">Blog</p>
                        </Link>
                        <span class="pointer-events-none mx-2 text-slate-800">
                          /
                        </span>
                        
                      </li>
                      <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
                      <Link href="#">
                          <p className="text-lg font-medium">
                            {blogData.subject}
                          </p>
                        </Link>
                      </li>
                    </ol>
                  </nav>
                  {blogData.slug !== "" ? (
                    <div className="blog--box">
                      <h1 className="blog-detail-title">{blogData.subject}</h1>
                      <p className="blog-date">
                        {new Date(blogData.created_at).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                          }
                        )}{" "}
                        /
                        <span>
                          {blogData.category_id &&
                            blogData.category_id
                              .split(",")
                              .map((category_id, index) => (
                                <React.Fragment key={index}>
                                  <Link
                                    className="text-[#337ab7]"
                                    href={`/category/${category_id
                                      .trim()
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                  >
                                    {category_id.trim()}
                                  </Link>
                                  {index <
                                    blogData.category_id.split(",").length -
                                      1 && ", "}
                                </React.Fragment>
                              ))}
                        </span>
                      </p>

                      <Image
                        height={100}
                        width={400}
                        className="blog-image"
                        src={blogData.image}
                        alt="Blog"
                      />
                      <p className="blog-detail-text">
                        {parse(blogData.blog_description)}
                      </p>

                      <div className="flex flex-col gap-2 mb-4">
                        <p className="blog-tags flex gap-1 items-center">
                          <i class="fa fa-tag" aria-hidden="true"></i>Tags
                        </p>
                        <div className="flex flex-wrap gap-y-1 gap-x-2">
                          {blogData.tags &&
                            blogData.tags.split(",").map((tag, index) => (
                              <Link
                                key={index}
                                className="blog-tag"
                                href={`/tag/${tag.trim().replace(/\s+/g, "-")}`}
                              >
                                {tag.trim()}
                                {index < blogData.tags.split(",").length - 1
                                  ? ", "
                                  : ""}
                              </Link>
                            ))}
                        </div>
                      </div>

                      <div className="comments-area">
                        <h2 className="comment-title">
                          {totalComments}{" "}
                          {totalComments > 1 ? "Comments" : "Comment"}
                        </h2>
                        <div className="grid grid-cols-1 xl:grid-cols-2 w-full max-h-[200px] xl:max-h-[350px] gap-1.5 overflow-y-auto my-3">
                          {totalCommentsData.length > 0 &&
                            totalCommentsData.map((comments, index) => {
                              return (
                                <div
                                  className="flex flex-col items-start justify-start px-3 py-2.5 bg-gray-200 rounded-lg"
                                  key={comments.id}
                                >
                                  <div className="flex items-center justify-between w-full mb-1.5">
                                    <p className="text-black font-bold">
                                      {comments.name}
                                    </p>
                                    <p className="text-gray-600 font-semibold text-sm">
                                      {new Date(
                                        comments.created_at
                                      ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                      })}
                                    </p>
                                  </div>
                                  <p className="text-black break-all">
                                    {comments.comment}
                                  </p>
                                </div>
                              );
                            })}
                        </div>

                        <h3 className="comment-reply-title">
                          <span className="comment-reply-title-span">Lea</span>
                          ve a Reply
                        </h3>
                        {commentLoading ? (
                          <div className="py-16">
                            <div className="mt-[-100px]">
                              <Loader />
                            </div>
                          </div>
                        ) : (
                          <>
                            <p className="comment-notes">
                              <span
                                id="email-notes"
                                style={{ fontSize: "14px" }}
                              >
                                Your email address will not be published.
                              </span>{" "}
                              <span style={{ fontSize: "15px" }}>
                                Required fields are marked *
                              </span>
                            </p>
                            <div className="flex mb-[10px]">
                              <p className="comment-label">
                                Comment <span className="text-red-500">*</span>
                              </p>
                              <textarea
                                className={`comment-text ${
                                  errors.comment ? "error" : ""
                                }`}
                                placeholder="Comment"
                                autoComplete="OFF"
                                id="BlogCommentListComment"
                                name="comment"
                                cols="50"
                                rows="10"
                                data-qb-tmp-id="lt-233487"
                                spellCheck="false"
                                data-gramm="false"
                                value={commentData.comment}
                                onChange={handleChange}
                              ></textarea>
                              {/* {errors.comment && (
                      <span className="error-message">{errors.comment}</span>
                    )} */}
                            </div>
                            <div className="flex mb-[10px]">
                              <p className="comment-label">
                                Name <span className="text-red-500">*</span>
                              </p>
                              <input
                                className={`comment-input ${
                                  errors.name ? "error" : ""
                                }`}
                                placeholder="Name"
                                autocomplete="OFF"
                                name="name"
                                type="text"
                                value={commentData.name}
                                onChange={handleChange}
                              />
                              {/* {errors.name && (
                      <span className="error-message">{errors.name}</span>
                    )} */}
                            </div>
                            <div className="flex mb-[10px]">
                              <p className="comment-label">
                                Email <span className="text-red-500">*</span>
                              </p>
                              <input
                                className={`comment-input ${
                                  errors.email ? "error" : ""
                                }`}
                                placeholder="Email"
                                autocomplete="OFF"
                                name="email"
                                type="text"
                                value={commentData.email}
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
                                value={commentData.website}
                                onChange={handleChange}
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
                          </>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Loader />
                  )}
                </div>
              )}
            </>
            <div className="category-container">
              <p className="search-title">Search</p>
              <div className="relative">
                <input
                  className="search-input"
                  type="text"
                  value={searchKeyword}
                  onChange={handleSearch}
                  placeholder="Search by title, description or tag"
                />
                {!searchKeyword ? (
                  <button className="search-icon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                ) : (
                  <button
                    className="search-icon"
                    onClick={() => {
                      setSearchKeyword("");
                      setSearchResults([]);
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
                    class="btn btn-default"
                    href="https://app-cost-calculator.logicspice.com/"
                  >
                    App Cost Calculator
                  </a>
                </div>
              </div>

              <aside className="category-box">
                <h4 class="category-title">Categories</h4>

                <ul className="category-list-ul !pl-0">
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
                        onChange={onRecaptchaChange1}
                        onExpired={onRecaptchaExpired1}
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
                <h4 class="recent-post-title">Recent Posts</h4>
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
