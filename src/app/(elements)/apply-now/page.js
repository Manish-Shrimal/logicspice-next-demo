

"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import "../elements.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Image from "next/image";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import axios from "axios";
import Swal from "sweetalert2";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const resumeFile = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    city_state: "",
    apply_for: "",
    resume: "",
    current_ctc: "",
    expected_ctc: "",
    notice_days: "",
  });

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" }); // Clear errors when user starts typing
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    resumeFile.current = uploadedFile;

    if (uploadedFile) {
      const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;

      if (!allowedExtensions.exec(uploadedFile.name)) {
        setErrors({
          ...errors,
          resume: "Invalid file type. Please upload a PDF, DOC, or DOCX file.",
        });
        return;
      }

      const maxSize = 5 * 1024 * 1024; // 5MB
      if (uploadedFile.size > maxSize) {
        setErrors({
          ...errors,
          resume: "File size exceeds the 5MB limit.",
        });
        return;
      }

      // Clear previous errors
      setErrors({ ...errors, resume: null });
      setFormData({ ...formData, resume: uploadedFile });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // Basic validation
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.contact) newErrors.contact = "Contact Number is required";
    if (!formData.city_state)
      newErrors.city_state = "City and State are required";
    if (!formData.current_ctc)
      newErrors.current_ctc = "Current CTC is required";
    if (!formData.expected_ctc)
      newErrors.expected_ctc = "Expected CTC is required";
    if (!formData.notice_days)
      newErrors.notice_days = "Notice Days are required";
    if (!formData.apply_for) newErrors.apply_for = "Job title is required";
    if (!resumeFile.current) newErrors.resume = "Resume is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("contact", formData.contact);
      data.append("city_state", formData.city_state);
      data.append("apply_for", formData.apply_for);
      data.append("current_ctc", formData.current_ctc);
      data.append("expected_ctc", formData.expected_ctc);
      data.append("notice_days", formData.notice_days);
      data.append("resume", resumeFile.current);

      const response = await axios.post(BaseAPI + "/applynow", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Successfully Applied",
          text: response.data.message,
        });
      }

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <section
        className="resources-header"
        style={{
          background: "url(/img/ourteam/we_are_hiring.png)",
        }}
      >
        <div className="container">
          <span>We Are Hiring - Apply Now</span>
        </div>
      </section>
      <section className="breadcrems_header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>We Are Hiring</h1>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>We Are Hiring</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content_area SubmitResume">
        <div className="container">
          <h3>
            Submit Your Resume{" "}
            <Link href="/careers" className="curr_btn" size="30" label="">
              (See our current openings)
            </Link>
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group row">
              <div className="col-md-6">
                <input
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className={`required form-control ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  type="text"
                  id="AppliedjobName"
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="col-md-6">
                <input
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className={`required form-control email ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  type="email"
                  id="AppliedjobEmail"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <input
                  name="contact"
                  placeholder="Contact Number*"
                  value={formData.contact}
                  onChange={handleChange}
                  className={`required form-control ${
                    errors.contact ? "is-invalid" : ""
                  }`}
                  type="text"
                  id="AppliedjobContact"
                />
                {errors.contact && (
                  <div className="invalid-feedback">{errors.contact}</div>
                )}
              </div>
              <div className="col-md-6">
                <input
                  name="city_state"
                  placeholder="Current city &amp; state*"
                  value={formData.city_state}
                  onChange={handleChange}
                  className={`required form-control ${
                    errors.city_state ? "is-invalid" : ""
                  }`}
                  type="text"
                  id="AppliedjobCityState"
                />
                {errors.city_state && (
                  <div className="invalid-feedback">{errors.city_state}</div>
                )}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <input
                  name="current_ctc"
                  placeholder="Current CTC(LPA)*"
                  value={formData.current_ctc}
                  onChange={handleChange}
                  className={`required form-control ${
                    errors.current_ctc ? "is-invalid" : ""
                  }`}
                  type="text"
                  id="AppliedjobCurrenctCtc"
                />
                {errors.current_ctc && (
                  <div className="invalid-feedback">{errors.current_ctc}</div>
                )}
              </div>
              <div className="col-md-6">
                <input
                  name="expected_ctc"
                  placeholder="Expected CTC(LPA)*"
                  value={formData.expected_ctc}
                  onChange={handleChange}
                  className={`required form-control ${
                    errors.expected_ctc ? "is-invalid" : ""
                  }`}
                  type="text"
                  id="AppliedjobExpectedCtc"
                />
                {errors.expected_ctc && (
                  <div className="invalid-feedback">{errors.expected_ctc}</div>
                )}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <input
                  name="notice_days"
                  placeholder="Notice Days*"
                  value={formData.notice_days}
                  onChange={handleChange}
                  className={`required form-control ${
                    errors.notice_days ? "is-invalid" : ""
                  }`}
                  type="text"
                  id="AppliedjobNoticeDays"
                />
                {errors.notice_days && (
                  <div className="invalid-feedback">{errors.notice_days}</div>
                )}
              </div>
              <div className="col-md-6">
                <input
                  name="apply_for"
                  placeholder="Apply For*"
                  value={formData.apply_for}
                  onChange={handleChange}
                  className={`required form-control ${
                    errors.apply_for ? "is-invalid" : ""
                  }`}
                  type="text"
                  id="AppliedjobApplyFor"
                />
                {errors.apply_for && (
                  <div className="invalid-feedback">{errors.apply_for}</div>
                )}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label htmlFor="AppliedjobResume">Upload Resume*</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileUpload}
                  className={`required ${errors.resume ? "is-invalid" : ""}`}
                  id="AppliedjobResume"
                />
                {errors.resume && (
                  <div className="invalid-feedback">{errors.resume}</div>
                )}
                <div className="help_text">
                  Supported File Types: doc, docx, pdf (Max. 2MB).
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <input
                  title="Submit"
                  className="btn btn-primary"
                  size="30"
                  label=""
                  type="submit"
                  value="Send"
                />
              </div>
            </div>
          </form>
        </div>
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
