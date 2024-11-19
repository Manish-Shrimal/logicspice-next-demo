"use client";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import "../elements.css";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Image from "next/image";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Swal from "sweetalert2";

const Page = () => {
  const recaptchaKey = "6Lep5B8qAAAAABS1ppbvL1LHjDXYRjPojknlmdzo";

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const resumeFile = useRef(null);

  const [formData, setFormData] = useState({
    post: "",
    first_name: "",
    second_name: "",
    last_name: "",
    dob: "",
    father_name: "",
    mother_name: "",
    father_occupation: "",
    mother_occupation: "",
    category: "",
    gender: "",
    marital_status: "",
    physical_challenged: "",
    current_address: "",
    permanent_address: "",
    email_address: "",
    phone: "",
    matric_course: "",
    matric_college: "",
    matric_university: "",
    matric_year: "",
    matric_percentage: "",
    secondary_course: "",
    secondary_college: "",
    secondary_university: "",
    secondary_year: "",
    secondary_percentage: "",
    graduation_course: "",
    graduation_college: "",
    graduation_university: "",
    graduation_year: "",
    graduation_percentage: "",
    pg_course: "",
    pg_college: "",
    pg_university: "",
    pg_year: "",
    pg_percentage: "",
    other_course: "",
    other_college: "",
    other_university: "",
    other_year: "",
    other_percentage: "",
    work_experience_year: "",
    work_experience_months: "",
    start_date: "",
    end_date: "",
    organization: "",
    designation: "",
    leaving_reason: "",
    start_date1: "",
    end_date1: "",
    organization1: "",
    designation1: "",
    leaving_reason1: "",
    start_date2: "",
    end_date2: "",
    organization2: "",
    designation2: "",
    leaving_reason2: "",
    start_date3: "",
    end_date3: "",
    organization3: "",
    designation3: "",
    leaving_reason3: "",
    current_salary: "",
    expected_salary: "",
    notice_period: "",
    pursuing: "",
    certifications: "",
    career_goals: "",
    place: "",
    resume: null,
    image: null,
  });

  // const [formData, setFormData] = useState({
  //   post: "",
  //   image: null,
  //   firstName: "",
  //   middleName: "",
  //   lastName: "",
  //   dob: "",
  //   fatherName: "",
  //   motherName: "",
  //   fatherOccupation: "",
  //   motherOccupation: "",
  //   category: "",
  //   gender: "",
  //   maritalStatus: "",
  //   physicalChallenged: "",
  //   currentAddress: "",
  //   permanentAddress: "",
  //   emailAddress: "",
  //   Phone: "",
  //   matricCourse: "",
  //   matricCollege: "",
  //   matricUniversity: "",
  //   matricYear: "",
  //   matricPercentage: "",
  //   SecondaryCourse: "",
  //   secondaryCollege: "",
  //   secondaryUniversity: "",
  //   secondaryYear: "",
  //   secondaryPercentage: "",
  //   graduationCourse: "",
  //   graduationCollege: "",
  //   graduationUniversity: "",
  //   graduationYear: "",
  //   graduationPercentage: "",
  //   expYear: "",
  //   expMonth: "",
  //   expectedSalary:"",
  //   place: "",
  //   resume: "",
  // });

  const onRecaptchaChange = (token) => {
    setFormData((prevData) => ({
      ...prevData,
      recaptchaToken: token,
    }));
    if (token) {
      setErrors((prevError) => ({
        ...prevError,
        recaptchaerror: "",
      }));
    }
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));

    // Clear error when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // const handleFileUpload = (event) => {
  //   const uploadedFile = event.target.files[0];
  //   resumeFile.current = uploadedFile;

  //   if (uploadedFile) {
  //     const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;

  //     if (!allowedExtensions.exec(uploadedFile.name)) {
  //       setErrors({
  //         ...errors,
  //         resume: "Invalid file type. Please upload a PDF, DOC, or DOCX file.",
  //       });
  //       return;
  //     }

  //     const maxSize = 5 * 1024 * 1024; // 5MB
  //     if (uploadedFile.size > maxSize) {
  //       setErrors({
  //         ...errors,
  //         resume: "File size exceeds the 5MB limit.",
  //       });
  //       return;
  //     }

  //     // Clear previous errors
  //     setErrors({ ...errors, resume: null });
  //     setFormData({ ...formData, resume: uploadedFile });
  //   }

  // };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    resumeFile.current = uploadedFile;

    if (uploadedFile) {
      const allowedExtensions = /(\.pdf|\.doc|\.docx|\.jpg|\.jpeg|\.png)$/i;

      if (!allowedExtensions.exec(uploadedFile.name)) {
        setErrors({
          ...errors,
          resume:
            "Invalid file type. Please upload a PDF, DOC, DOCX, JPG, or PNG file.",
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

  const handleImageFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    resumeFile.current = uploadedFile;

    if (uploadedFile) {
      const allowedExtensions = /(\.png|\.jpg|\.jpeg)$/i;

      if (!allowedExtensions.exec(uploadedFile.name)) {
        setErrors({
          ...errors,
          image: "Invalid file type. Please upload a PDF, DOC, or DOCX file.",
        });
        return;
      }

      const maxSize = 5 * 1024 * 1024; // 5MB
      if (uploadedFile.size > maxSize) {
        setErrors({
          ...errors,
          image: "File size exceeds the 5MB limit.",
        });
        return;
      }
      // console.log(uploadedFile)

      // Clear previous errors
      setErrors({ ...errors, image: null });
      setFormData({ ...formData, image: uploadedFile });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.post) newErrors.post = "This field is required.";
    if (!formData.first_name) newErrors.firstName = "This field is required.";
    if (!formData.last_name) newErrors.lastName = "This field is required.";
    if (!formData.dob) newErrors.dob = "This field is required.";
    if (!formData.father_name) newErrors.fatherName = "This field is required.";
    if (!formData.mother_name) newErrors.motherName = "This field is required.";
    if (!formData.father_occupation)
      newErrors.fatherOccupation = "This field is required.";
    if (!formData.mother_occupation)
      newErrors.motherOccupation = "This field is required.";
    if (!formData.category) newErrors.category = "This field is required.";
    if (!formData.gender) newErrors.gender = "This field is required.";
    if (!formData.marital_status)
      newErrors.maritalStatus = "This field is required.";
    if (!formData.current_address)
      newErrors.currentAddress = "This field is required.";
    if (!formData.permanent_address)
      newErrors.permanentAddress = "This field is required.";
    if (!formData.email_address)
      newErrors.emailAddress = "This field is required.";
    if (!formData.phone) newErrors.Phone = "This field is required.";
    if (!formData.matric_course)
      newErrors.matricCourse = "This field is required.";
    if (!formData.matric_college)
      newErrors.matricCollege = "This field is required.";
    if (!formData.matric_university)
      newErrors.matricUniversity = "This field is required.";
    if (!formData.matric_year) newErrors.matricYear = "This field is required.";
    if (!formData.matric_percentage)
      newErrors.matricPercentage = "This field is required.";
    if (!formData.secondary_course)
      newErrors.SecondaryCourse = "This field is required.";
    if (!formData.secondary_college)
      newErrors.SecondaryCollege = "This field is required.";
    if (!formData.secondary_university)
      newErrors.SecondaryUniversity = "This field is required.";
    if (!formData.secondary_year)
      newErrors.SecondaryYear = "This field is required.";
    if (!formData.secondary_percentage)
      newErrors.SecondaryPercentage = "This field is required.";
    if (!formData.graduation_course)
      newErrors.graduationCourse = "This field is required.";
    if (!formData.graduation_college)
      newErrors.graduationCollege = "This field is required.";
    if (!formData.graduation_university)
      newErrors.graduationUniversity = "This field is required.";
    if (!formData.graduation_year)
      newErrors.graduationYear = "This field is required.";
    if (!formData.graduation_percentage)
      newErrors.graduationPercentage = "This field is required.";
    if (!formData.work_experience_year)
      newErrors.expYear = "This field is required.";
    if (!formData.work_experience_months)
      newErrors.expMonth = "This field is required.";
    if (!formData.expected_salary)
      newErrors.expectedSalary = "This field is required.";
    if (!formData.place) newErrors.place = "This field is required.";
    if (!formData.resume) newErrors.resume = "This field is required.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    // console.log("hii");
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // console.log(validationErrors)
    // console.log(formData)

    // setLoader(true);
    try {
      // console.log("hi");

      const response = await axios.post(
        BaseAPI + "/applicationform",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.status === 200) {
        router.push("/apply-now");
        // setResultSuccess(true);

        if (response.data.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Successfully Applied",
            text: response.data.message,
          });
        }

        setFormData({
          post: "",
          first_name: "",
          second_name: "",
          last_name: "",
          dob: "",
          father_name: "",
          mother_name: "",
          father_occupation: "",
          mother_occupation: "",
          category: "",
          gender: "",
          marital_status: "",
          physical_challenged: "",
          current_address: "",
          permanent_address: "",
          email_address: "",
          phone: "",
          matric_course: "",
          matric_college: "",
          matric_university: "",
          matric_year: "",
          matric_percentage: "",
          secondary_course: "",
          secondary_college: "",
          secondary_university: "",
          secondary_year: "",
          secondary_percentage: "",
          graduation_course: "",
          graduation_college: "",
          graduation_university: "",
          graduation_year: "",
          graduation_percentage: "",
          pg_course: "",
          pg_college: "",
          pg_university: "",
          pg_year: "",
          pg_percentage: "",
          other_course: "",
          other_college: "",
          other_university: "",
          other_year: "",
          other_percentage: "",
          work_experience_year: "",
          work_experience_months: "",
          start_date: "",
          end_date: "",
          organization: "",
          designation: "",
          leaving_reason: "",
          start_date1: "",
          end_date1: "",
          organization1: "",
          designation1: "",
          leaving_reason1: "",
          start_date2: "",
          end_date2: "",
          organization2: "",
          designation2: "",
          leaving_reason2: "",
          start_date3: "",
          end_date3: "",
          organization3: "",
          designation3: "",
          leaving_reason3: "",
          current_salary: "",
          expected_salary: "",
          notice_period: "",
          pursuing: "",
          certifications: "",
          career_goals: "",
          place: "",
          resume: null,
          image: null,
        });
      }
    } catch (error) {
      console.error("Submission error:", error.message);
    }
  };

  const handleReset = () => {
    setFormData({
      ...formData,
      post: "",
      first_name: "",
      second_name: "",
      last_name: "",
      dob: "",
      father_name: "",
      mother_name: "",
      father_occupation: "",
      mother_occupation: "",
      category: "",
      gender: "",
      marital_status: "",
      physical_challenged: "",
      current_address: "",
      permanent_address: "",
      email_address: "",
      phone: "",
      matric_course: "",
      matric_college: "",
      matric_university: "",
      matric_year: "",
      matric_percentage: "",
      secondary_course: "",
      secondary_college: "",
      secondary_university: "",
      secondary_year: "",
      secondary_percentage: "",
      graduation_course: "",
      graduation_college: "",
      graduation_university: "",
      graduation_year: "",
      graduation_percentage: "",
      pg_course: "",
      pg_college: "",
      pg_university: "",
      pg_year: "",
      pg_percentage: "",
      other_course: "",
      other_college: "",
      other_university: "",
      other_year: "",
      other_percentage: "",
      work_experience_year: "",
      work_experience_months: "",
      start_date: "",
      end_date: "",
      organization: "",
      designation: "",
      leaving_reason: "",
      start_date1: "",
      end_date1: "",
      organization1: "",
      designation1: "",
      leaving_reason1: "",
      start_date2: "",
      end_date2: "",
      organization2: "",
      designation2: "",
      leaving_reason2: "",
      start_date3: "",
      end_date3: "",
      organization3: "",
      designation3: "",
      leaving_reason3: "",
      current_salary: "",
      expected_salary: "",
      notice_period: "",
      pursuing: "",
      certifications: "",
      career_goals: "",
      place: "",
      resume: null,
      image: null,
    });
  };
  return (
    <>
      <Navbar />
      <div className="application-form-section ">
        <div className="container">
          <div className="appliction-form-bxs">
            <form onSubmit={handleSubmit} method="post">
              <div className="appliction-top">
                <h1>INTERVIEW APPLICATION FORM</h1>
                <div className="appliction-top-left">
                  <div className="appliction-post">
                    <label htmlFor="post">Application for the Post of:</label>
                    <div className="application-input">
                      <input
                        name="post"
                        placeholder="Post*"
                        className="form-control required"
                        // className={`form-control ${
                        //   errors.post ? "fieldRequired" : ""
                        // }`}
                        type="text"
                        id="post"
                        value={formData.post}
                        onChange={handleChange}
                      />
                      <label
                        className="error"
                        style={{ display: "inline-block" }}
                      >
                        {errors.post}
                      </label>
                    </div>
                    {/* {errors.post && (
                      <label
                        htmlFor="post"
                        className="error"
                        style={{ display: 'inline-block' }}
                      >
                        {errors.post}
                      </label>
                      
                    )} */}
                  </div>
                </div>
                <div className="appliction-top-right">
                  <div className="upload-photo">
                    {/* <Image
                      width={100}
                      height={100}
                      unoptimized={true}
                      src={
                        formData.resume
                          ? URL.createObjectURL(formData.resume)
                          : "/img/images/author_icon.png"
                      }
                      alt="photo"
                      id="show_image"
                    />
                    <input
                      type="file"
                      name="image"
                      className="form-control"
                      id="add_image"
                      onChange={handleFileUpload}
                    /> */}
                    <Image
                      width={100}
                      height={100}
                      unoptimized={true}
                      src={
                        formData.image
                          ? URL.createObjectURL(formData.image)
                          : "/img/images/author_icon.png"
                      }
                      alt="photo"
                      id="show_image"
                    />

                    <input
                      type="file"
                      name="image"
                      className="form-control"
                      id="add_image"
                      onChange={handleImageFileUpload}
                    />
                  </div>
                </div>
              </div>

              <div className="application-details">
                <h3>PERSONAL DETAILS :</h3>
                <div className="personal-detals">
                  <h5>Full Name in block Letters</h5>
                  <div className="personal-detals-bx">
                    <div className="personal-detals-table">
                      <div className="personal-detals-tr">
                        <div className="personal-detals-th">First Name</div>
                        <div className="personal-detals-th">Middle Name</div>
                        <div className="personal-detals-th">Last Name</div>
                      </div>
                      <div className="personal-detals-tr">
                        <div className="personal-detals-td">
                          <input
                            name="first_name"
                            placeholder="First Name*"
                            className="form-control required"
                            // className={`form-control ${
                            //   errors.firstName ? "fieldRequired" : ""
                            // }`}
                            type="text"
                            id="firstName"
                            value={formData.first_name}
                            onChange={handleChange}
                          />
                          <label
                            className="error"
                            style={{ display: "inline-block" }}
                          >
                            {errors.firstName}
                          </label>
                        </div>
                        {/* <label
                          htmlFor="firstName"
                          className="error"
                          style={{
                            display: formData.firstName ? "none" : "inline-block",
                          }}
                        >
                          This field is required.
                        </label> */}

                        <div className="personal-detals-td">
                          <input
                            name="second_name"
                            placeholder="Middle Name"
                            className="form-control"
                            type="text"
                            id="middleName"
                            value={formData.second_name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="personal-detals-td">
                          <input
                            name="last_name"
                            placeholder="Last Name*"
                            className="form-control required"
                            // className={`form-control ${
                            //   errors.lastName ? "fieldRequired" : ""
                            // }`}
                            type="text"
                            id="lastName"
                            value={formData.last_name}
                            onChange={handleChange}
                          />
                          <label
                            className="error"
                            style={{ display: "inline-block" }}
                          >
                            {errors.lastName}
                          </label>
                          {/* <label
                            htmlFor="lastName"
                            className="error"
                            style={{
                              display: formData.lastName ? "none" : "inline-block",
                            }}
                          >
                            This field is required.
                          </label> */}
                        </div>
                      </div>
                    </div>

                    <div className="personal-detals-bax2">
                      <div className="personal-detals-table">
                        <div className="personal-detals-tr">
                          <div className="personal-detals-th">
                            Date of birth
                          </div>
                          <div className="personal-detals-th">
                            Father&apos;s Name
                          </div>
                          <div className="personal-detals-th">
                            Mother&apos;s Name
                          </div>
                        </div>
                        <div className="personal-detals-tr">
                          <div className="personal-detals-td">
                            {/* <input
                              name="dob"
                              id="dob"
                              placeholder="Date of birth*"
                              className="form-control required"
                              type="date"
                              value={formData.dob}
                              onChange={handleChange}
                            /> */}
                            <input
                              name="dob"
                              id="dob"
                              placeholder="Date of birth*"
                              className="form-control required"
                              // className={`form-control ${
                              //   errors.dob ? "fieldRequired" : ""
                              // }`}
                              type="date"
                              value={formData.dob}
                              max={new Date().toISOString().split("T")[0]} // Set max to today's date
                              onChange={handleChange}
                            />

                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.dob}
                            </label>

                            {/* <label
                              htmlFor="dob"
                              className="error"
                              style={{
                                display: formData.dob ? "none" : "inline-block",
                              }}
                            >
                              This field is required.
                            </label> */}
                          </div>
                          <div className="personal-detals-td">
                            <input
                              name="father_name"
                              placeholder="Father's Name*"
                              className="form-control required"
                              // className={`form-control ${
                              //   errors.fatherName ? "fieldRequired" : ""
                              // }`}
                              type="text"
                              id="fatherName"
                              value={formData.father_name}
                              onChange={handleChange}
                            />
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.fatherName}
                            </label>
                            {/* <label
                              htmlFor="fatherName"
                              className="error"
                              style={{
                                display: formData.fatherName
                                  ? "none"
                                  : "inline-block",
                              }}
                            >
                              This field is required.
                            </label> */}
                          </div>
                          <div className="personal-detals-td">
                            <input
                              name="mother_name"
                              placeholder="Mother's Name*"
                              className="form-control required"
                              // className={`form-control ${
                              //   errors.motherName ? "fieldRequired" : ""
                              // }`}
                              type="text"
                              id="motherName"
                              value={formData.mother_name}
                              onChange={handleChange}
                            />
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.motherName}
                            </label>
                            {/* <label
                              htmlFor="motherName"
                              className="error"
                              style={{
                                display: formData.motherName
                                  ? "none"
                                  : "inline-block",
                              }}
                            >
                              This field is required.
                            </label> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="personal-detals-bax2">
                      <div className="personal-detals-table">
                        <div className="personal-detals-tr">
                          <div className="personal-detals-th">
                            Father&apos;s Occupation
                          </div>
                          <div className="personal-detals-th">
                            Mother&apos;s Occupation
                          </div>
                        </div>
                        <div className="personal-detals-tr">
                          <div className="personal-detals-td">
                            <input
                              name="father_occupation"
                              placeholder="Father's Occupation*"
                              className="form-control required"
                              // className={`form-control ${
                              //   errors.fatherOccupation ? "fieldRequired" : ""
                              // }`}
                              type="text"
                              id="fatherOccupation"
                              value={formData.father_occupation}
                              onChange={handleChange}
                            />
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.fatherOccupation}
                            </label>
                            {/* <label
                              htmlFor="fatherOccupation"
                              className="error"
                              style={{
                                display: formData.fatherOccupation
                                  ? "none"
                                  : "inline-block",
                              }}
                            >
                              This field is required.
                            </label> */}
                          </div>
                          <div className="personal-detals-td">
                            <input
                              name="mother_occupation"
                              placeholder="Mother's Occupation*"
                              className="form-control required"
                              // className={`form-control ${
                              //   errors.motherOccupation ? "fieldRequired" : ""
                              // }`}
                              type="text"
                              id="motherOccupation"
                              value={formData.mother_occupation}
                              onChange={handleChange}
                            />
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.motherOccupation}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="personal-detals-bx2">
                      <div className="personal-detals-table">
                        <div className="personal-detals-tr">
                          <div className="personal-detals-th">
                            Category
                            <br />
                            (Gen/OBC/SC/ST/Other)
                          </div>
                          <div className="personal-detals-th">Gender</div>
                          <div className="personal-detals-th">
                            Marital Status
                          </div>
                          <div className="personal-detals-th">
                            Physically Challenged
                          </div>
                        </div>
                        <div className="personal-detals-tr">
                          <div className="personal-detals-td">
                            <select
                              name="category"
                              // className="form-control form-select required"
                              className={`form-control ${
                                errors.motherOccupation ? "fieldRequired" : ""
                              }`}
                              id="category"
                              value={formData.category}
                              onChange={handleChange}
                            >
                              <option value="">Select Category</option>
                              <option value="General">General</option>
                              <option value="OBC">OBC</option>
                              <option value="SC">SC</option>
                              <option value="ST">ST</option>
                              <option value="Other">Other</option>
                            </select>
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.category}
                            </label>
                            {/* <label
                              htmlFor="category"
                              className="error"
                              style={{
                                display: formData.category
                                  ? "none"
                                  : "inline-block",
                              }}
                            >
                              This field is required.
                            </label> */}
                          </div>
                          <div className="personal-detals-td">
                            <select
                              name="gender"
                              className="form-control form-select required"
                              id="gender"
                              value={formData.gender}
                              onChange={handleChange}
                            >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.gender}
                            </label>
                            {/* <label
                              htmlFor="gender"
                              className="error"
                              style={{
                                display: formData.gender
                                  ? "none"
                                  : "inline-block",
                              }}
                            >
                              This field is required.
                            </label> */}
                          </div>
                          <div className="personal-detals-td">
                            <select
                              name="marital_status"
                              className="form-control form-select required"
                              id="maritalStatus"
                              value={formData.marital_status}
                              onChange={handleChange}
                            >
                              <option value="">Select Marital Status</option>
                              <option value="Married">Married</option>
                              <option value="Single">Single</option>
                              <option value="Divorced">Divorced</option>
                            </select>
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.maritalStatus}
                            </label>
                            {/* <label
                              htmlFor="maritalStatus"
                              className="error"
                              style={{
                                display: formData.maritalStatus
                                  ? "none"
                                  : "inline-block",
                              }}
                            >
                              This field is required.
                            </label> */}
                          </div>
                          <div className="personal-detals-td">
                            <select
                              name="physical_challenged"
                              className="form-control form-select"
                              id="physicalChallenged"
                              value={formData.physical_challenged}
                              onChange={handleChange}
                            >
                              <option value="">
                                Select Physically Challenged
                              </option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="personal-detals-bax3">
                      <h5>Address for correspondence(in block letters):</h5>
                      <div class="personal-detals-table">
                        <div class="personal-detals-tr">
                          <div class="personal-detals-th">Current Address:</div>
                          <div class="personal-detals-th">
                            Permanent Address:
                          </div>
                          <div class="personal-detals-th">Email:</div>
                          <div class="personal-detals-th">Phone No.:</div>
                        </div>
                        <div class="personal-detals-tr">
                          <div class="personal-detals-td">
                            <textarea
                              name="current_address"
                              placeholder="current Address*"
                              className="form-control required"
                              type="text"
                              id="currentAddress"
                              value={formData.current_address}
                              onChange={handleChange}
                            ></textarea>
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.currentAddress}
                            </label>
                          </div>
                          <div class="personal-detals-td">
                            <textarea
                              name="permanent_address"
                              placeholder="Permanent Address"
                              className="form-control required"
                              type="text"
                              id="permanentAddress"
                              value={formData.permanent_address}
                              onChange={handleChange}
                            ></textarea>
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.permanentAddress}
                            </label>
                          </div>
                          <div class="personal-detals-td">
                            <input
                              name="email_address"
                              placeholder="Email Address"
                              className="form-control required"
                              type="text"
                              id="emailAddress"
                              value={formData.email_address}
                              onChange={handleChange}
                            />
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.emailAddress}
                            </label>
                          </div>
                          <div class="personal-detals-td">
                            <input
                              name="phone"
                              placeholder="Phone Number"
                              className="form-control required"
                              type="text"
                              id="Phone"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.Phone}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="application-details">
                    <h3>ACADEMIC DETAILS :</h3>
                    <div class="personal-detals">
                      <div class="personal-detals-bx accdemic-detals-bx">
                        <div class="personal-detals-table">
                          <div class="personal-detals-tr">
                            <div class="personal-detals-th">Qualification</div>
                            <div class="personal-detals-th">
                              Course/Subjects
                            </div>
                            <div class="personal-detals-th">
                              School/College &amp; City
                            </div>
                            <div class="personal-detals-th">
                              University/Board
                            </div>
                            <div class="personal-detals-th">
                              Year of passing
                            </div>
                            <div class="personal-detals-th">
                              Percentage of Marks
                            </div>
                          </div>
                          <div class="personal-detals-tr">
                            <div class="personal-detals-td">
                              Matriculation
                              <br />
                              (10th std.)
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="matric_course"
                                className="form-control  required"
                                id="gender"
                                placeholder="Course/Subjects*"
                                value={formData.matric_course}
                                onChange={handleChange}
                              />
                              <label
                                className="error"
                                style={{ display: "inline-block" }}
                              >
                                {errors.matricCourse}
                              </label>
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="matric_college"
                                className="form-control  required"
                                placeholder="School/College &amp; City*"
                                id="gender"
                                value={formData.matric_college}
                                onChange={handleChange}
                              />
                              <label
                                className="error"
                                style={{ display: "inline-block" }}
                              >
                                {errors.matricCollege}
                              </label>
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="matric_university"
                                className="form-control required"
                                placeholder="University*"
                                id="gender"
                                value={formData.matric_university}
                                onChange={handleChange}
                              />
                              <label
                                className="error"
                                style={{ display: "inline-block" }}
                              >
                                {errors.matricUniversity}
                              </label>
                            </div>
                            <div class="personal-detals-td">
                              <div class="input select">
                                <select
                                  name="matric_year"
                                  placeholder="Year of passing"
                                  className="form-control form-select required"
                                  id="matricYear"
                                  value={formData.matric_year}
                                  onChange={handleChange}
                                >
                                  <option value="">Year of passing*</option>
                                  <option value="0">1961</option>
                                  <option value="1">1962</option>
                                  <option value="2">1963</option>
                                  <option value="3">1964</option>
                                  <option value="4">1965</option>
                                  <option value="5">1966</option>
                                  <option value="6">1967</option>
                                  <option value="7">1968</option>
                                  <option value="8">1969</option>
                                  <option value="9">1970</option>
                                  <option value="10">1971</option>
                                  <option value="11">1972</option>
                                  <option value="12">1973</option>
                                  <option value="13">1974</option>
                                  <option value="14">1975</option>
                                  <option value="15">1976</option>
                                  <option value="16">1977</option>
                                  <option value="17">1978</option>
                                  <option value="18">1979</option>
                                  <option value="19">1980</option>
                                  <option value="20">1981</option>
                                  <option value="21">1982</option>
                                  <option value="22">1983</option>
                                  <option value="23">1984</option>
                                  <option value="24">1985</option>
                                  <option value="25">1986</option>
                                  <option value="26">1987</option>
                                  <option value="27">1988</option>
                                  <option value="28">1989</option>
                                  <option value="29">1990</option>
                                  <option value="30">1991</option>
                                  <option value="31">1992</option>
                                  <option value="32">1993</option>
                                  <option value="33">1994</option>
                                  <option value="34">1995</option>
                                  <option value="35">1996</option>
                                  <option value="36">1997</option>
                                  <option value="37">1998</option>
                                  <option value="38">1999</option>
                                  <option value="39">2000</option>
                                  <option value="40">2001</option>
                                  <option value="41">2002</option>
                                  <option value="42">2003</option>
                                  <option value="43">2004</option>
                                  <option value="44">2005</option>
                                  <option value="45">2006</option>
                                  <option value="46">2007</option>
                                  <option value="47">2008</option>
                                  <option value="48">2009</option>
                                  <option value="49">2010</option>
                                  <option value="50">2011</option>
                                  <option value="51">2012</option>
                                  <option value="52">2013</option>
                                  <option value="53">2014</option>
                                  <option value="54">2015</option>
                                  <option value="55">2016</option>
                                  <option value="56">2017</option>
                                  <option value="57">2018</option>
                                  <option value="58">2019</option>
                                  <option value="59">2020</option>
                                  <option value="60">2021</option>
                                  <option value="61">2022</option>
                                  <option value="62">2023</option>
                                  <option value="63">2024</option>
                                  <option value="64">2025</option>
                                  <option value="65">2026</option>
                                  <option value="66">2027</option>
                                </select>
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.matricYear}
                                </label>
                              </div>
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="matric_percentage"
                                className="form-control  required"
                                placeholder="Percentage*"
                                id="gender"
                                value={formData.matric_percentage}
                                onChange={handleChange}
                              />
                              <label
                                className="error"
                                style={{ display: "inline-block" }}
                              >
                                {errors.matricPercentage}
                              </label>
                            </div>
                          </div>
                          <div class="personal-detals-tr">
                            <div class="personal-detals-td">
                              Higher Secondary
                              <br />
                              (+2)
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="secondary_course"
                                placeholder="Course/Subjects*"
                                className="form-control  required"
                                id="gender"
                                value={formData.secondary_course}
                                onChange={handleChange}
                              />
                              <label
                                className="error"
                                style={{ display: "inline-block" }}
                              >
                                {errors.SecondaryCourse}
                              </label>
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="secondary_college"
                                placeholder="School/College &amp; City*"
                                className="form-control  required"
                                id="gender"
                                value={formData.secondary_college}
                                onChange={handleChange}
                              />
                              <label
                                className="error"
                                style={{ display: "inline-block" }}
                              >
                                {errors.SecondaryCollege}
                              </label>
                            </div>
                            <div class="personal-detals-td">
                              <input
                                // name="data[Application][secondary_university]"
                                // placeholder="University*"
                                // class="form-control required"
                                // type="text"
                                // id="ApplicationSecondaryUniversity"
                                name="secondary_university"
                                placeholder="University*"
                                className="form-control  required"
                                id="gender"
                                value={formData.secondary_university}
                                onChange={handleChange}
                              />
                              <label
                                className="error"
                                style={{ display: "inline-block" }}
                              >
                                {errors.SecondaryUniversity}
                              </label>
                            </div>
                            <div class="personal-detals-td">
                              <div class="input select">
                                <select
                                  name="secondary_year"
                                  placeholder="Year of passing*"
                                  className="form-control  required"
                                  id="gender"
                                  value={formData.secondary_year}
                                  onChange={handleChange}
                                >
                                  <option value="">Year of passing*</option>
                                  <option value="0">1961</option>
                                  <option value="1">1962</option>
                                  <option value="2">1963</option>
                                  <option value="3">1964</option>
                                  <option value="4">1965</option>
                                  <option value="5">1966</option>
                                  <option value="6">1967</option>
                                  <option value="7">1968</option>
                                  <option value="8">1969</option>
                                  <option value="9">1970</option>
                                  <option value="10">1971</option>
                                  <option value="11">1972</option>
                                  <option value="12">1973</option>
                                  <option value="13">1974</option>
                                  <option value="14">1975</option>
                                  <option value="15">1976</option>
                                  <option value="16">1977</option>
                                  <option value="17">1978</option>
                                  <option value="18">1979</option>
                                  <option value="19">1980</option>
                                  <option value="20">1981</option>
                                  <option value="21">1982</option>
                                  <option value="22">1983</option>
                                  <option value="23">1984</option>
                                  <option value="24">1985</option>
                                  <option value="25">1986</option>
                                  <option value="26">1987</option>
                                  <option value="27">1988</option>
                                  <option value="28">1989</option>
                                  <option value="29">1990</option>
                                  <option value="30">1991</option>
                                  <option value="31">1992</option>
                                  <option value="32">1993</option>
                                  <option value="33">1994</option>
                                  <option value="34">1995</option>
                                  <option value="35">1996</option>
                                  <option value="36">1997</option>
                                  <option value="37">1998</option>
                                  <option value="38">1999</option>
                                  <option value="39">2000</option>
                                  <option value="40">2001</option>
                                  <option value="41">2002</option>
                                  <option value="42">2003</option>
                                  <option value="43">2004</option>
                                  <option value="44">2005</option>
                                  <option value="45">2006</option>
                                  <option value="46">2007</option>
                                  <option value="47">2008</option>
                                  <option value="48">2009</option>
                                  <option value="49">2010</option>
                                  <option value="50">2011</option>
                                  <option value="51">2012</option>
                                  <option value="52">2013</option>
                                  <option value="53">2014</option>
                                  <option value="54">2015</option>
                                  <option value="55">2016</option>
                                  <option value="56">2017</option>
                                  <option value="57">2018</option>
                                  <option value="58">2019</option>
                                  <option value="59">2020</option>
                                  <option value="60">2021</option>
                                  <option value="61">2022</option>
                                  <option value="62">2023</option>
                                  <option value="63">2024</option>
                                  <option value="64">2025</option>
                                  <option value="65">2026</option>
                                  <option value="66">2027</option>
                                </select>
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.SecondaryYear}
                                </label>
                              </div>{" "}
                            </div>
                            <div class="personal-detals-td">
                              <input
                                // name="data[Application][secondary_percentage]"
                                // placeholder="Percentage*"
                                // max="100"
                                // class="form-control required positiveNumber"
                                // type="text"
                                // id="ApplicationSecondaryPercentage"
                                name="secondary_percentage"
                                placeholder="Percentage*"
                                className="form-control  required"
                                id="gender"
                                value={formData.secondary_percentage}
                                onChange={handleChange}
                              />
                              <label
                                className="error"
                                style={{ display: "inline-block" }}
                              >
                                {errors.SecondaryPercentage}
                              </label>
                            </div>
                          </div>
                          <div class="personal-detals-tr">
                            <div class="personal-detals-td">
                              Graduation
                              <br />
                              (with stream)
                            </div>
                            <div class="personal-detals-td">
                              <input
                                // name="data[Application][graduation_course]"
                                // placeholder="Course/Subjects*"
                                // class="form-control required"
                                // type="text"
                                // id="ApplicationGraduationCourse"
                                name="graduation_course"
                                placeholder="Course/Subjects*"
                                className="form-control  required"
                                id="gender"
                                value={formData.graduation_course}
                                onChange={handleChange}
                              />
                              <label
                                className="error"
                                style={{ display: "inline-block" }}
                              >
                                {errors.graduationCourse}
                              </label>
                            </div>
                            <div class="personal-detals-td">
                              <input
                                // name="data[Application][graduation_college]"
                                // placeholder="School/College &amp; City*"
                                // class="form-control required"
                                // type="text"
                                // id="ApplicationGraduationCollege"
                                name="graduation_college"
                                placeholder="School/College &amp; City*"
                                className="form-control  required"
                                id="gender"
                                value={formData.graduation_college}
                                onChange={handleChange}
                              />
                              <label
                                className="error"
                                style={{ display: "inline-block" }}
                              >
                                {errors.graduationCollege}
                              </label>
                            </div>
                            <div class="personal-detals-td">
                              <input
                                // name="data[Application][graduation_university]"
                                // placeholder="University*"
                                // class="form-control required"
                                // type="text"
                                // id="ApplicationGraduationUniversity"
                                name="graduation_university"
                                placeholder="University*"
                                className="form-control  required"
                                id="gender"
                                value={formData.graduation_university}
                                onChange={handleChange}
                              />
                              <label
                                className="error"
                                style={{ display: "inline-block" }}
                              >
                                {errors.graduationUniversity}
                              </label>
                            </div>
                            <div class="personal-detals-td">
                              <div class="input select">
                                <select
                                  // name="data[Application][graduation_year]"
                                  // class="form-control required"
                                  // id="ApplicationGraduationYear"
                                  name="graduation_year"
                                  placeholder="University*"
                                  className="form-control form-select  required"
                                  id="gender"
                                  value={formData.graduation_year}
                                  onChange={handleChange}
                                >
                                  <option value="">Year of passing*</option>
                                  <option value="0">1961</option>
                                  <option value="1">1962</option>
                                  <option value="2">1963</option>
                                  <option value="3">1964</option>
                                  <option value="4">1965</option>
                                  <option value="5">1966</option>
                                  <option value="6">1967</option>
                                  <option value="7">1968</option>
                                  <option value="8">1969</option>
                                  <option value="9">1970</option>
                                  <option value="10">1971</option>
                                  <option value="11">1972</option>
                                  <option value="12">1973</option>
                                  <option value="13">1974</option>
                                  <option value="14">1975</option>
                                  <option value="15">1976</option>
                                  <option value="16">1977</option>
                                  <option value="17">1978</option>
                                  <option value="18">1979</option>
                                  <option value="19">1980</option>
                                  <option value="20">1981</option>
                                  <option value="21">1982</option>
                                  <option value="22">1983</option>
                                  <option value="23">1984</option>
                                  <option value="24">1985</option>
                                  <option value="25">1986</option>
                                  <option value="26">1987</option>
                                  <option value="27">1988</option>
                                  <option value="28">1989</option>
                                  <option value="29">1990</option>
                                  <option value="30">1991</option>
                                  <option value="31">1992</option>
                                  <option value="32">1993</option>
                                  <option value="33">1994</option>
                                  <option value="34">1995</option>
                                  <option value="35">1996</option>
                                  <option value="36">1997</option>
                                  <option value="37">1998</option>
                                  <option value="38">1999</option>
                                  <option value="39">2000</option>
                                  <option value="40">2001</option>
                                  <option value="41">2002</option>
                                  <option value="42">2003</option>
                                  <option value="43">2004</option>
                                  <option value="44">2005</option>
                                  <option value="45">2006</option>
                                  <option value="46">2007</option>
                                  <option value="47">2008</option>
                                  <option value="48">2009</option>
                                  <option value="49">2010</option>
                                  <option value="50">2011</option>
                                  <option value="51">2012</option>
                                  <option value="52">2013</option>
                                  <option value="53">2014</option>
                                  <option value="54">2015</option>
                                  <option value="55">2016</option>
                                  <option value="56">2017</option>
                                  <option value="57">2018</option>
                                  <option value="58">2019</option>
                                  <option value="59">2020</option>
                                  <option value="60">2021</option>
                                  <option value="61">2022</option>
                                  <option value="62">2023</option>
                                  <option value="63">2024</option>
                                  <option value="64">2025</option>
                                  <option value="65">2026</option>
                                  <option value="66">2027</option>
                                </select>
                                <label
                                  className="error"
                                  style={{ display: "inline-block" }}
                                >
                                  {errors.graduationYear}
                                </label>
                              </div>{" "}
                            </div>
                            <div class="personal-detals-td">
                              <input
                                // name="data[Application][graduation_percentage]"
                                // placeholder="Percentage*"
                                // max="100"
                                // class="form-control required positiveNumber"
                                // type="text"
                                // id="ApplicationGraduationPercentage"
                                name="graduation_percentage"
                                placeholder="Percentage*"
                                className="form-control  required"
                                id="gender"
                                value={formData.graduation_percentage}
                                onChange={handleChange}
                              />
                              <label
                                className="error"
                                style={{ display: "inline-block" }}
                              >
                                {errors.graduationPercentage}
                              </label>
                            </div>
                          </div>
                          <div class="personal-detals-tr">
                            <div class="personal-detals-td">
                              PG
                              <br />
                              (with stream)
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="pg_course"
                                placeholder="Course/Subjects"
                                class="form-control "
                                type="text"
                                id="ApplicationPgCourse"
                                value={formData.pg_course}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="pg_college"
                                placeholder="School/College &amp; City"
                                class="form-control "
                                type="text"
                                id="ApplicationPgCollege"
                                value={formData.pg_college}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="pg_university"
                                placeholder="University"
                                class="form-control "
                                type="text"
                                id="ApplicationPgUniversity"
                                value={formData.pg_university}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <div class="input select">
                                <select
                                  name="pg_year"
                                  class="form-control"
                                  id="ApplicationPgYear"
                                  value={formData.pg_year}
                                  onChange={handleChange}
                                >
                                  <option value="">Year of passing</option>
                                  <option value="0">1961</option>
                                  <option value="1">1962</option>
                                  <option value="2">1963</option>
                                  <option value="3">1964</option>
                                  <option value="4">1965</option>
                                  <option value="5">1966</option>
                                  <option value="6">1967</option>
                                  <option value="7">1968</option>
                                  <option value="8">1969</option>
                                  <option value="9">1970</option>
                                  <option value="10">1971</option>
                                  <option value="11">1972</option>
                                  <option value="12">1973</option>
                                  <option value="13">1974</option>
                                  <option value="14">1975</option>
                                  <option value="15">1976</option>
                                  <option value="16">1977</option>
                                  <option value="17">1978</option>
                                  <option value="18">1979</option>
                                  <option value="19">1980</option>
                                  <option value="20">1981</option>
                                  <option value="21">1982</option>
                                  <option value="22">1983</option>
                                  <option value="23">1984</option>
                                  <option value="24">1985</option>
                                  <option value="25">1986</option>
                                  <option value="26">1987</option>
                                  <option value="27">1988</option>
                                  <option value="28">1989</option>
                                  <option value="29">1990</option>
                                  <option value="30">1991</option>
                                  <option value="31">1992</option>
                                  <option value="32">1993</option>
                                  <option value="33">1994</option>
                                  <option value="34">1995</option>
                                  <option value="35">1996</option>
                                  <option value="36">1997</option>
                                  <option value="37">1998</option>
                                  <option value="38">1999</option>
                                  <option value="39">2000</option>
                                  <option value="40">2001</option>
                                  <option value="41">2002</option>
                                  <option value="42">2003</option>
                                  <option value="43">2004</option>
                                  <option value="44">2005</option>
                                  <option value="45">2006</option>
                                  <option value="46">2007</option>
                                  <option value="47">2008</option>
                                  <option value="48">2009</option>
                                  <option value="49">2010</option>
                                  <option value="50">2011</option>
                                  <option value="51">2012</option>
                                  <option value="52">2013</option>
                                  <option value="53">2014</option>
                                  <option value="54">2015</option>
                                  <option value="55">2016</option>
                                  <option value="56">2017</option>
                                  <option value="57">2018</option>
                                  <option value="58">2019</option>
                                  <option value="59">2020</option>
                                  <option value="60">2021</option>
                                  <option value="61">2022</option>
                                  <option value="62">2023</option>
                                  <option value="63">2024</option>
                                  <option value="64">2025</option>
                                  <option value="65">2026</option>
                                  <option value="66">2027</option>
                                </select>
                              </div>{" "}
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="pg_percentage"
                                placeholder="Percentage"
                                max="100"
                                class="form-control positiveNumber"
                                type="text"
                                id="ApplicationPgPercentage"
                                value={formData.pg_percentage}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div class="personal-detals-tr">
                            <div class="personal-detals-td">
                              Other
                              <br />
                              (Qualification)
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="other_course"
                                placeholder="Course/Subjects"
                                class="form-control "
                                type="text"
                                id="ApplicationOtherCourse"
                                value={formData.other_course}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="other_college"
                                placeholder="School/College &amp; City"
                                class="form-control "
                                type="text"
                                id="ApplicationOtherCollege"
                                value={formData.other_college}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="other_university"
                                placeholder="University"
                                class="form-control "
                                type="text"
                                id="ApplicationOtherUniversity"
                                value={formData.other_university}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <div class="input select">
                                <select
                                  name="other_year"
                                  class="form-control"
                                  id="ApplicationOtherYear"
                                  value={formData.other_year}
                                  onChange={handleChange}
                                >
                                  <option value="">Year of passing</option>
                                  <option value="0">1961</option>
                                  <option value="1">1962</option>
                                  <option value="2">1963</option>
                                  <option value="3">1964</option>
                                  <option value="4">1965</option>
                                  <option value="5">1966</option>
                                  <option value="6">1967</option>
                                  <option value="7">1968</option>
                                  <option value="8">1969</option>
                                  <option value="9">1970</option>
                                  <option value="10">1971</option>
                                  <option value="11">1972</option>
                                  <option value="12">1973</option>
                                  <option value="13">1974</option>
                                  <option value="14">1975</option>
                                  <option value="15">1976</option>
                                  <option value="16">1977</option>
                                  <option value="17">1978</option>
                                  <option value="18">1979</option>
                                  <option value="19">1980</option>
                                  <option value="20">1981</option>
                                  <option value="21">1982</option>
                                  <option value="22">1983</option>
                                  <option value="23">1984</option>
                                  <option value="24">1985</option>
                                  <option value="25">1986</option>
                                  <option value="26">1987</option>
                                  <option value="27">1988</option>
                                  <option value="28">1989</option>
                                  <option value="29">1990</option>
                                  <option value="30">1991</option>
                                  <option value="31">1992</option>
                                  <option value="32">1993</option>
                                  <option value="33">1994</option>
                                  <option value="34">1995</option>
                                  <option value="35">1996</option>
                                  <option value="36">1997</option>
                                  <option value="37">1998</option>
                                  <option value="38">1999</option>
                                  <option value="39">2000</option>
                                  <option value="40">2001</option>
                                  <option value="41">2002</option>
                                  <option value="42">2003</option>
                                  <option value="43">2004</option>
                                  <option value="44">2005</option>
                                  <option value="45">2006</option>
                                  <option value="46">2007</option>
                                  <option value="47">2008</option>
                                  <option value="48">2009</option>
                                  <option value="49">2010</option>
                                  <option value="50">2011</option>
                                  <option value="51">2012</option>
                                  <option value="52">2013</option>
                                  <option value="53">2014</option>
                                  <option value="54">2015</option>
                                  <option value="55">2016</option>
                                  <option value="56">2017</option>
                                  <option value="57">2018</option>
                                  <option value="58">2019</option>
                                  <option value="59">2020</option>
                                  <option value="60">2021</option>
                                  <option value="61">2022</option>
                                  <option value="62">2023</option>
                                  <option value="63">2024</option>
                                  <option value="64">2025</option>
                                  <option value="65">2026</option>
                                  <option value="66">2027</option>
                                </select>
                              </div>{" "}
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="other_percentage"
                                placeholder="Percentage"
                                max="100"
                                class="form-control positiveNumber"
                                type="text"
                                id="ApplicationOtherPercentage"
                                value={formData.other_percentage}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="application-details">
                    <h3>WORK EXPERIENCE :</h3>
                    <h6>Total Work Experience:</h6>
                    <div class="experience-post">
                      <label>Years:</label>
                      <div class="application-input">
                        <div class="input select">
                          <select
                            // name="data[Application][work_experience_year]"
                            // id="exp_year"
                            // class="form-control required"
                            // onchange="if (!window.__cfRLUnblockHandlers) return false; getYear(this.value)"
                            name="work_experience_year"
                            className="form-control required"
                            type="text"
                            id="expYear"
                            value={formData.work_experience_year}
                            onChange={handleChange}
                          >
                            <option value="">Year*</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                            <option value="32">32</option>
                            <option value="33">33</option>
                            <option value="34">34</option>
                            <option value="35">35</option>
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                            <option value="45">45</option>
                            <option value="46">46</option>
                            <option value="47">47</option>
                            <option value="48">48</option>
                            <option value="49">49</option>
                            <option value="50">50</option>
                          </select>
                          <label
                            className="error"
                            style={{ display: "inline-block" }}
                          >
                            {errors.expYear}
                          </label>
                        </div>{" "}
                      </div>
                    </div>
                    <div class="experience-post">
                      <label>Months:</label>
                      <div class="application-input">
                        <div class="input select">
                          <select
                            // name="data[Application][work_experience_months]"
                            // id="exp_month"
                            // class="form-control required"
                            // onchange="if (!window.__cfRLUnblockHandlers) return false; getMonth(this.value)"
                            name="work_experience_months"
                            className="form-control required"
                            type="text"
                            id="expMonth"
                            value={formData.work_experience_months}
                            onChange={handleChange}
                          >
                            <option value="">Months*</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                          </select>
                          <label
                            className="error"
                            style={{ display: "inline-block" }}
                          >
                            {errors.expMonth}
                          </label>
                        </div>{" "}
                      </div>
                    </div>

                    <div class="personal-detals">
                      <div class="personal-detals-bx accdemic-detals-bx">
                        <div class="personal-detals-table">
                          <div class="personal-detals-tr">
                            <div class="personal-detals-th">Date From</div>
                            <div class="personal-detals-th">Date To</div>
                            <div class="personal-detals-th">
                              Name of Organization
                            </div>
                            <div class="personal-detals-th">Designation</div>
                            <div class="personal-detals-th">
                              Reason of Leaving
                            </div>
                          </div>
                          <div class="personal-detals-tr">
                            <div class="personal-detals-td">
                              <input
                                name="start_date"
                                id="start_date"
                                placeholder="Start Date"
                                class="form-control hasDatepicker"
                                type="date"
                                max={new Date().toISOString().split("T")[0]} // Set max to today's date
                                value={formData.start_date}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="end_date"
                                id="end_date"
                                placeholder="End Date"
                                class="form-control hasDatepicker"
                                type="date"
                                max={new Date().toISOString().split("T")[0]} // Set max to today's date
                                value={formData.end_date}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="organization"
                                placeholder="Name of Organization"
                                class="form-control"
                                type="text"
                                id="ApplicationOrganization"
                                value={formData.organization}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="designation"
                                placeholder="Designation"
                                class="form-control"
                                type="text"
                                id="ApplicationDesignation"
                                value={formData.designation}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="leaving_reason"
                                placeholder="Reason of Leaving"
                                class="form-control"
                                type="text"
                                id="ApplicationLeavingReason"
                                value={formData.leaving_reason}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div class="personal-detals-tr">
                            <div class="personal-detals-td">
                              <input
                                name="start_date1"
                                id="start_date1"
                                placeholder="Start Date"
                                class="form-control hasDatepicker"
                                type="date"
                                max={new Date().toISOString().split("T")[0]} // Set max to today's date
                                value={formData.start_date1}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="end_date1"
                                id="end_date1"
                                placeholder="End Date"
                                class="form-control hasDatepicker"
                                type="date"
                                max={new Date().toISOString().split("T")[0]} // Set max to today's date
                                value={formData.end_date1}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="organization1"
                                placeholder="Name of Organization"
                                class="form-control"
                                type="text"
                                id="ApplicationOrganization1"
                                value={formData.organization1}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="designation1"
                                placeholder="Designation"
                                class="form-control"
                                type="text"
                                id="ApplicationDesignation1"
                                value={formData.designation1}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="leaving_reason1"
                                placeholder="Reason of Leaving"
                                class="form-control"
                                type="text"
                                id="ApplicationLeavingReason1"
                                value={formData.leaving_reason1}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div class="personal-detals-tr">
                            <div class="personal-detals-td">
                              <input
                                name="start_date2"
                                id="start_date2"
                                placeholder="Start Date"
                                class="form-control hasDatepicker"
                                type="date"
                                max={new Date().toISOString().split("T")[0]} // Set max to today's date
                                value={formData.start_date2}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="end_date2"
                                id="end_date2"
                                placeholder="End Date"
                                class="form-control hasDatepicker"
                                type="date"
                                max={new Date().toISOString().split("T")[0]} // Set max to today's date
                                value={formData.organization2}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="organization2"
                                placeholder="Name of Organization"
                                class="form-control"
                                type="text"
                                id="ApplicationOrganization2"
                                value={formData.organization2}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="designation2"
                                placeholder="Designation"
                                class="form-control"
                                type="text"
                                id="ApplicationDesignation2"
                                value={formData.designation2}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="leaving_reason2"
                                placeholder="Reason of Leaving"
                                class="form-control"
                                type="text"
                                id="ApplicationLeavingReason2"
                                value={formData.leaving_reason2}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div class="personal-detals-tr">
                            <div class="personal-detals-td">
                              <input
                                name="start_date3"
                                id="start_date3"
                                placeholder="Start Date"
                                class="form-control hasDatepicker"
                                type="date"
                                max={new Date().toISOString().split("T")[0]} // Set max to today's date
                                value={formData.start_date3}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="end_date3"
                                id="end_date3"
                                placeholder="End Date"
                                class="form-control hasDatepicker"
                                type="date"
                                max={new Date().toISOString().split("T")[0]} // Set max to today's date
                                value={formData.end_date3}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="organization3"
                                placeholder="Name of Organization"
                                class="form-control"
                                type="text"
                                id="ApplicationOrganization3"
                                value={formData.organization3}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="designation3"
                                placeholder="Designation"
                                class="form-control"
                                type="text"
                                id="ApplicationDesignation3"
                                value={formData.designation3}
                                onChange={handleChange}
                              />
                            </div>
                            <div class="personal-detals-td">
                              <input
                                name="leaving_reason3"
                                placeholder="Reason of Leaving"
                                class="form-control"
                                type="text"
                                id="ApplicationLeavingReason3"
                                value={formData.leaving_reason3}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="currwnt-bx">
                      <label>Current/Last Salary:</label>
                      <div class="current-input">
                        <input
                          name="current_salary"
                          placeholder="Current Salary"
                          class="form-control number"
                          min="0"
                          type="text"
                          id="ApplicationCurrentSalary"
                          value={formData.current_salary}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="currwnt-bx">
                      <label>Expected Salary:</label>
                      <div class="current-input">
                        <input
                          // name="data[Application][expected_salary]"
                          // placeholder="Expected Salary"
                          // class="form-control required number"
                          // min="1"
                          // type="text"
                          // id="ApplicationExpectedSalary"
                          name="expected_salary"
                          placeholder="Expected Salary"
                          className="form-control  required"
                          id="gender"
                          value={formData.expected_salary}
                          onChange={handleChange}
                        />
                        <label
                          className="error"
                          style={{ display: "inline-block" }}
                        >
                          {errors.expectedSalary}
                        </label>
                      </div>
                    </div>
                    <div class="currwnt-bx">
                      <label>
                        Time required for joining, if selected(Notice Period):
                      </label>
                      <div class="current-input">
                        <input
                          name="notice_period"
                          class="form-control"
                          type="text"
                          id="ApplicationNoticePeriod"
                          value={formData.notice_period}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div class="currwnt-bx">
                      <label>
                        Are you pursuing any course or planning to pursue in
                        future? If yes then when?:{" "}
                      </label>
                      <div class="current-input">
                        <div class="current-input">
                          <textarea
                            name="pursuing"
                            class="form-control"
                            id="ApplicationPursuing"
                            value={formData.pursuing}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="currwnt-bx">
                      <label>Certifications (if any): </label>
                      <div class="current-input">
                        <div class="current-input">
                          <textarea
                            name="certifications"
                            class="form-control"
                            id="ApplicationCertifications"
                            value={formData.certifications}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="currwnt-bx">
                      <label>Career Goals: </label>
                      <div class="current-input">
                        <div class="current-input">
                          <textarea
                            name="career_goals"
                            class="form-control"
                            id="ApplicationCareerGoals"
                            value={formData.career_goals}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div class="places-bx">
                      <div class="places-bx-left">
                        <div class="currwnt-bx">
                          <label>Place:</label>
                          <div class="current-input">
                            <input
                              // name="data[Application][place]"
                              // placeholder="Place"
                              // class="form-control required"
                              // type="text"
                              // id="ApplicationPlace"
                              name="place"
                              placeholder="Place"
                              className="form-control  required"
                              id="place"
                              value={formData.place}
                              onChange={handleChange}
                            />
                            <label
                              className="error"
                              style={{ display: "inline-block" }}
                            >
                              {errors.place}
                            </label>
                          </div>
                        </div>
                        {/* <div class="currwnt-bx">
                            <label>Date:</label>
                            <div class="current-input">
                              {new Date().toLocaleDateString()}
                            </div>
                          </div> */}
                        <div class="current-bx">
                          <label>Date:</label>
                          <div class="current-input">
                            {new Date().toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "2-digit",
                            })}
                          </div>
                        </div>
                      </div>

                      <div class="places-bx-right">
                        <span id="show_sign"></span>
                        <div class="sign_dv">
                          <p>Upload Resume</p>
                          <input
                            // type="file"
                            // name="data[Application][resume]"
                            // class="form-control required"
                            // id="add_resume"
                            name="resume"
                            type="file"
                            className="form-control  required"
                            id="resume"
                            onChange={handleFileUpload}
                          />
                          <label
                            className="error"
                            style={{ display: "inline-block" }}
                          >
                            {errors.resume}
                          </label>
                        </div>
                        {/* <div class="currwnt-bx">
                            <div id="recaptcha1" style="transform: scale(0.75); transform-origin: left top;"><div style="width: 304px; height: 78px;"><div><iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-3mo9j5xxutq" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6Leg3gITAAAAAPzWHZ1PgnMhko9tHq8yWvH2q2S7&amp;co=aHR0cHM6Ly93d3cubG9naWNzcGljZS5jb206NDQz&amp;hl=en&amp;v=WV-mUKO4xoWKy9M4ZzRyNrP_&amp;theme=light&amp;size=normal&amp;cb=nttq9a3kshdx"></iframe></div><textarea id="g-recaptcha-response-1" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
                        </div> */}
                        <div className="form-group-google">
                          <ReCAPTCHA
                            key={recaptchaKey}
                            sitekey={recaptchaKey}
                            onChange={onRecaptchaChange}
                          />
                          <div className="gcpc FormError" id="captcha_msg">
                            {errors.reacptchaerror}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="appli-btn">
                      <input
                        title="Submit"
                        class="btn btn-primary"
                        size="30"
                        label=""
                        type="submit"
                        value="Submit"
                      />
                      {/* <button
                          title="Submit"
                          class="btn btn-primary"
                          size="30"
                          value="Submit"
                          onClick={handleReset}
                        /> */}

                      <a href="javascript:void();" class="btn btn-default">
                        Reset
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

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
