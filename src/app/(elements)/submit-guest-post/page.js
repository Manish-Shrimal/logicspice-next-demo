"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../public/css/font-awesome.css"
import "../elements.css";
import Workingwith from "@/app/Components/Workingwith";
import Reviewmodals from "@/app/Components/Reviewmodals";
import Contactusmodel from "@/app/Components/Contactusmodel";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Swal from "sweetalert2";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  useEffect(() => {
    console.log(formData, "after update");
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "This field is required.";
    if (!formData.email) newErrors.email = "This field is required.";
    if (!formData.contact) newErrors.contact = "This field is required.";
    if (!formData.message) newErrors.message = "This field is required.";
    return newErrors;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const validationErrors = validateForm();
  //   setErrors(validationErrors);

  //   if (Object.keys(validationErrors).length === 0) {
  //     // Handle form submission logic here
  //     try {
  //       const response = await fetch("/api/submit-guest-post", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       });

  //       if (response.ok) {
  //         alert("Form submitted successfully");
  //       } else {
  //         alert("There was an error submitting the form");
  //       }
  //     } catch (error) {
  //       alert("An error occurred");
  //     }
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // setLoader(true);
    try {
      console.log("Form data before submission:", formData);

      // Simulate form submission
      const response = await axios.post(BaseAPI + "/guestPost", formData);
      // Simulate a successful response
      // const responsee = { data: { status: 200, message: "Submitted successfully!" } };

      if (response.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Successfully Applied",
          text: response.data.message,
        });

        // Clear form data after successful submission
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
        });
      }
      
    } catch (error) {
      console.error("Submission error:", error.message);
    }
  };

  return (
    <>
      <NavBar />
      {/* {!isScrolled && <NavBar />} */}
      <section class="guest-post-banner">
        <div class="container">
          <h1>
            Submit <span>Guest Post</span>
          </h1>
          <p>
            To offer your perspectives, would you like to submit a guest post on
            Logicspice.com. We are one of the best guest posting sites open for
            software technology related guest posts. You can write a blog post
            and create a significant difference in the software development
            industry since 2006? If you have a thought, vision, or idea that can
            inspire our readers and has the potential to revolutionize
            industries, feel free to share it with us. Logicspice is the most
            sophisticated guest post platform and we are open for software and
            tech related guest posts. If you want to submit a tech guest post we
            would be very interested in hearing about it.
          </p>
        </div>
      </section>
      <section class="why-guest-post-banner">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="why-guest-post">
                <h2>What We&apos;re Looking for a Guest Post Submission</h2>
                <p>
                  Aiming to find new contributors, Logicspice is looking for new
                  ideas. The following attributes are sought after in a guest
                  author:
                </p>
                <h3>Put your Idea into words</h3>
                <p>
                  The majority of those contributing to Logicspice.com, work in
                  the mobile app or internet sector, just like our readers. For
                  us, our writers must share their knowledge and experience with
                  others. Learn how to turn an idea into something you can share
                  with others by putting it into words.
                </p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="guest-post-form">
                <h3>Don&apos;t Miss This Opportunity</h3>
                {/* <form
      name="contactUs"
      id="contactUs"
      method="POST"
      acceptCharset="utf-8"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <input
          name="name"
          placeholder="Enter Name*"
          size="20"
          className="form-control"
          type="text"
          id="UserName"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <label className="error">{errors.name}</label>}
      </div>

      <div className="form-group">
        <input
          name="email"
          placeholder="Enter Email*"
          size="20"
          className="form-control"
          type="email"
          id="UserEmail"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <label className="error">{errors.email}</label>}
      </div>

      <div className="form-group">
        <input
          name="contact"
          placeholder="Phone Number*"
          size="20"
          className="form-control"
          type="tel"
          id="UserContact"
          value={formData.contact}
          onChange={handleChange}
        />
        {errors.contact && <label className="error">{errors.contact}</label>}
      </div>

      <div className="form-group reg_textare">
        <textarea
          name="message"
          placeholder="Message*"
          className="form-control"
          rows="5"
          cols="50"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <label className="error">{errors.message}</label>}
      </div>

      Uncomment if you're adding reCAPTCHA
      <div className="form-group">
        <div id="recaptcha1" className="g-recaptcha"></div>
      </div>

      <div className="form-group">
        <div className="display_success_message" id="contact_success_message" style={{ display: 'none' }}></div>
        <div className="display_error_message" id="contact_error_message" style={{ display: 'none' }}></div>
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      
    </form> */}

                <form
                  name="contactUs"
                  id="contactUs"
                  method="POST"
                  acceptCharset="utf-8"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group">
                    <input
                      name="name"
                      placeholder="Enter Name*"
                      size="20"
                      className={`form-control ${errors.name ? "error" : ""}`}
                      type="text"
                      id="UserName"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <label className="error">{errors.name}</label>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      name="email"
                      placeholder="Enter Email*"
                      size="20"
                      className={`form-control ${errors.email ? "error" : ""}`}
                      type="email"
                      id="UserEmail"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <label className="error">{errors.email}</label>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      name="contact"
                      placeholder="Phone Number*"
                      size="20"
                      className={`form-control ${
                        errors.contact ? "error" : ""
                      }`}
                      type="tel"
                      id="UserContact"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                    {errors.contact && (
                      <label className="error">{errors.contact}</label>
                    )}
                  </div>

                  <div className="form-group reg_textare">
                    <textarea
                      name="message"
                      placeholder="Message*"
                      className={`form-control ${
                        errors.message ? "error" : ""
                      }`}
                      rows="5"
                      cols="50"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <label className="error">{errors.message}</label>
                    )}
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="why-guest-post-contant">
        <div class="container">
          <h3>Quality Content</h3>
          <p>
            You can Submit Guest Post for Software, Technology, WordPress Niche.
            We accept wordpress guest post submissions on a tech related base.
          </p>
          <p>
            The most important thing for your content to get approved is Quality
            and it should be plagiarism free.
          </p>
          <p>
            Quality material is our principal focus. We&apos;d be delighted if you
            could write an article on a recent software, technology or any tech
            related project, the lessons you&apos;ve learnt, or the things that
            worked and didn&apos;t work for you. An honorarium and full credit will
            be given for your effort.
          </p>
          <h3>Expertise</h3>
          <p>
            Your writing shows that you have authority on the topic matter,
            which is a great accomplishment. Make direct touch with someone who
            has the required degree of competence if you don&apos;t have it. If you
            use someone else&apos;s ideas or information, you must give them full
            credit by citing their sources.
          </p>
          <h3>Solid writing</h3>
          <p>
            Submit tech guest posts with an interesting, well-organized
            technology related point and back it up with facts and anecdotes
            from your own life. It&apos;s refreshing to hear someone with your unique
            perspective on a topic instead of the usual, tired, or generic
            advice.
          </p>
          <h3>An educational Aim</h3>
          <p>
            The Business guest post should provide our readers with information
            and advice that has proved valuable and beneficial. Spammy backlinks
            are not accepted, and we will not permit any blatant forms of
            advertising on our site, which serves as a public promotion
            platform.
          </p>
          <p>
            You can link your company&apos;s website in your author bio. If the links
            are of value to our readers, we will consider including them in the
            post.
          </p>
          <p>
            Prior to contacting us, please read this. Your chances of being
            approved will be considerably boosted.
          </p>
          <h3>Who Can Submit Guest Posts?</h3>
          <p>
            Certainly! If you&apos;re a spammer, you won&apos;t be able to post here. Our
            writers range from seasoned pros to those just getting their feet
            wet in the writing world. We&apos;re a great place for software to submit
            guest posts and technology related guest posts, because we have an
            editorial team checking your work before your content gets live.
          </p>
          <p>
            If you are looking for a best guest posting site? We at
            Logicspice.com are looking for a well-thought-out plan that
            demonstrates technology guest posts which will gather the interest
            of our audience. If you need any help, our Editor Team can assist
            you with writing and revising your article. We would consider it an
            honor if you choose to begin your writing career with us.
          </p>
          <h3>What Kind Of Articles Do We Publish?</h3>
          <p>
            You can Submit Guest Post for Software, Technology, WordPress Niche
          </p>
          <p>
            We publish articles for web and app developers authored by those who
            are also in the business. These are the following:
          </p>
          <ul>
            <li>
              <strong>Tutorials:</strong> Either assisting people in becoming
              proficient with a new piece of technology or guiding them
              step-by-step through the process of constructing a product.
            </li>
            <li>
              <strong>Opinion:</strong> Do you have a strong opinion about our
              industry and the research that backs it up? If so, what is that?
              These are some topics that could be useful for discussion.
            </li>
            <li>
              <strong>Ultimate Guide:</strong> Articles that are longer and
              delve more deeply into a subject. An article that serves as a
              reference and that readers will refer back to on multiple
              occasions.
            </li>
            <li>
              <strong>Case Studies:</strong> What was the most valuable lesson
              that you or your firm took away from a particular project? In
              this, rather than simply telling a compelling story, the emphasis
              should be placed on providing concrete instances that the audience
              can use.
            </li>
          </ul>
          <h3>What Will We Ask Of You?</h3>
          <p>
            When we give the go-ahead for your outline and ask you to produce an
            article, the following is what we require of you:
          </p>
          <ul>
            <li>
              It&apos;s a new piece of work, not anything you&apos;ve already written and
              published elsewhere.
            </li>
            <li>Be open to the editor&apos;s suggestions and work with them.</li>
            <li>
              With your editor, set a delivery date and communicate about the
              deadline.
            </li>
            <li>
              Writing about something you&apos;ve learnt while working on your
              products requires that you comply with our publication guidelines.
            </li>
            <li>If you are uncertain about something, consult your editor.</li>
          </ul>
          <h3>How to Submit Tech Guest Post</h3>
          <p>
            It&apos;s easy to share your thoughts on an article topic using the form
            below. Don&apos;t be vague about what you&apos;re talking about. Let us know
            what makes your article stand out from the others already published
            on this topic. A draught of our editorial guidelines will be
            requested from you if this possibility is followed.
          </p>
          <p>
            Send us your pitch via our contact form with the following
            information:
          </p>
          <ul>
            <li>
              Is there a specific demographic for whom this content is intended
              and a particular level of knowledge and expertise?
            </li>
            <li>
              What is the main takeaway that the intended audience will gain
              from reading this article?
            </li>
            <li>
              What makes you the ideal candidate to pen this piece? Incorporate
              references to other works of literature and information about your
              own experience and knowledge in your writing.
            </li>
            <li>
              Your proposed overview, including the key headings and specifics
              on what will be covered in each section.
            </li>
          </ul>
          <h3>Guidelines to Follow to Submit Tech Guest Post</h3>
          <ul>
            <li>
              Your entries should be well-researched, with examples and
              recommendations to back them up.
            </li>
            <li>
              Posts on your blog should be original and not appear anywhere else
              on the internet.
            </li>
            <li>
              Please cite reputable websites and provide relevant data and
              figures as evidence for your claims.
            </li>
            <li>
              The topic you decide on and the keywords you select should be
              closely related.
            </li>
            <li>Examine the topic matter in considerable detail.</li>
          </ul>
        </div>
      </section>

      <section className="working_with">
        <div className="container">
          <h3
            className="title_heading title_heading_bgg"
            style={{ marginBottom: "30px" }}
          >
            Worked with 1500+ companies worldwide, from startups to enterprises.
          </h3>

          <Workingwith />
        </div>
      </section>

      <div className="clearfix"></div>
      <div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              unoptimized={true}
              width={100}
              height={100}
              src="/img/images/whatsapp.png"
              alt="whatsapp-icon"
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
