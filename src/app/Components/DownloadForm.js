"use client";
import React, { useState, useEffect, useRef } from "react";
// import { MDBModal } from 'mdb-react-ui-kit';
import { Modal, Button } from "react-bootstrap";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import BaseAPI from "../BaseAPI/BaseAPI";

const Contactusmodel = ({ modalStatus, toggle, title }) => {
  const recaptchaRef = useRef(null);
  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";
  const [popupScReview, setPopupScReview] = useState(modalStatus);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    // message: "",
    product_name: "",
  });
  const [resultSuccess, setResultSuccess] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    // message: "",
    recaptcha: "",
  });
  const [loader, setLoader] = useState(false);
  const [html, setHtml] = useState("");
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  useEffect(() => {
    setPopupScReview(modalStatus);
  }, [modalStatus]);

  useEffect(() => {
    // Fetch the current URL and update the formData
    const currentUrl = window.location.href;
    // Extract the last part of the path
    const pathSegments = currentUrl.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];

    setFormData((prevData) => ({
      ...prevData,
      product_name: lastSegment,
    }));
  }, []);

  const handleChange = (e) => {
    const { id, name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle form submission
    let newErrors = {};

    if (!isRecaptchaVerified) {
      newErrors.recaptcha = "Please verify that you are not a robot";
    }

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    if (formData.email === "") {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // if (formData.message === "") {
    //   newErrors.message = "Please enter your message";
    // }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(BaseAPI + "/pages/review", formData);

      if (response.data.status === 200) {
        setHtml(response.data.message);
        setFormData({
          name: "",
          email: "",
          phone_no: "",
          message: "",
        });

        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        setResultSuccess(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const onRecaptchaChange = (token) => {
    if (token) {
      setIsRecaptchaVerified(true);
      setErrors((prevError) => ({
        ...prevError,
        recaptcha: "",
      }));
    }
  };

  const close = () => {
    setPopupScReview(false);
    toggle();
    setResultSuccess(false);
  };

  const downloadform = async (sdec) => {
    setLoader(true);

    if (sdec === "sentip") {
      try {
        const res = await axios.post("/api/home/savedata");

        if (res.data === 1) {
          downloadfile();
        }
      } catch (error) {
        console.error("Error submitting form:", error.message);
      } finally {
        setLoader(false);
      }
    }
  };

  const download = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        BaseAPI + "/home/downloadform",
        formData,
        { responseType: "blob" } // Important for downloading files
      );

      // Create a blob from the response data
      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });

      // Create a link element and trigger a click to download the file
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "form.zip"; // Set the desired file name
      link.click();

      // Release the object URL to free up resources
      window.URL.revokeObjectURL(link.href);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div style={{ display: modalStatus ? "block" : "none" }}>
      <div>
        <Modal
          id="popup_sc_review"
          tabIndex="-1"
          labelledby="exampleModalLabel"
          show={popupScReview}
          //   className="contact-modal"
        >
          <div className="review_model">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Share your information
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={close}
                ></button>
              </div>

              <form onSubmit={handleSubmit} id="reviewForm">
                <div className="modal-body">
                  {!resultSuccess ? (
                    <>
                      <div className="mb-3">
                        <div className="input-group">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            <i className="fa fa-user"></i>
                          </span>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`form-control ${
                              errors.name ? "fieldRequired" : ""
                            }`}
                            placeholder="Your Name *"
                            aria-describedby="inputGroupPrepend"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="input-group">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            <i className="fa fa-envelope"></i>
                          </span>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-control ${
                              errors.email ? "fieldRequired" : ""
                            }`}
                            placeholder="Your Email *"
                            aria-describedby="inputGroupPrepend"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="input-group">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            <i className="fa fa-phone"></i>
                          </span>
                          <input
                            type="text"
                            name="phone_no"
                            id="phone_no"
                            value={formData.phone_no}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Your Mobile Number"
                            aria-describedby="inputGroupPrepend"
                          />
                        </div>
                      </div>

                      <div className=" mb-3">
                        <ReCAPTCHA
                          key={recaptchaKey}
                          sitekey={recaptchaKey}
                          onChange={onRecaptchaChange}
                        />
                        <div className="gcpc FormError" id="captcha_msg">
                          {errors.recaptcha}
                        </div>
                      </div>

                      {loader && (
                        <div className="popup_loader">
                          <Image
                            width={100}
                            height={100}
                            src="/img/loading-old.gif"
                            alt="Loading..."
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center">
                      <span className="thank_ss">{html}</span>
                      <p className="hh_cls">
                        Your review is under moderation. We will update you
                        soon.
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary"
                        aria-label="Close"
                        onClick={close}
                      >
                        OK
                      </button>
                    </div>
                  )}
                </div>
                <hr />
                {!resultSuccess && (
                  <div className="modal-footer">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="hidden"
                          name="product_name"
                          value={formData.product_name}
                        />
                        <button type="submit" className="btn btn-primary">
                          Submit & Download Now
                        </button>
                      </div>
                      <div className="col-md-6">
                        <div class="form_contactinput_row">
                          <a href="" onClick={download}>
                            No Thank You Direct Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Contactusmodel;
