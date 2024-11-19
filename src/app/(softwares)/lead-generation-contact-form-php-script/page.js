"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalFooter,
} from "mdb-react-ui-kit";

import Reviewmodals from "@/app/Components/Reviewmodals";
import Contactusmodel from "@/app/Components/Contactusmodel";
import DownloadForm from "@/app/Components/DownloadForm";
import EnquiryModal from "@/app/Components/Enquirymodal";
import "../../../../public/css/font-awesome.css";


const Page = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const openDownloadModel = () => {
    setShowDownloadModal(!showDownloadModal);
  };
  const [textColor, setTextColor] = useState("#222222");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [formTitleBgColor, setFormTitleBgColor] = useState("#dedede");
  const [buttonColor, setButtonColor] = useState("#074376");
  const [modalOpen, setModalOpen] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedField, setSelectedField] = useState("");
  const [choices, setChoices] = useState([""]);
  const [formDescription, setFormDescription] = useState("");
  const [formTitle, setFormTitle] = useState("Untitled Form"); // Initial value

  const handleInputChange = (e) => {
    setFormDescription(e.target.value);
    setFormTitle(e.target.value);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };
  const openModal = () => {
    setShowModal(!showModal);
  };
  const submitView = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  const loadTextBox = () => {
    setSelectedField("SingleLineText");
  };

  const loadTextAreaBox = () => {
    setSelectedField("ParagraphText");
  };
  const loadDropdown = () => {
    setSelectedField("Dropdown");
  };
  const loadCheckBox = () => {
    setSelectedField("Checkbox");
  };
  const loadRadioBtn = () => {
    setSelectedField("MultipleDropdown");
  };
  const loadfilebox = () => {
    setSelectedField("File");
  };
  const setFrom = () => {
    setSelectedField("FormSetting");
  };
  const setEmail = () => {
    setSelectedField("Email");
  };
  const addnewchoice = () => {
    setChoices([...choices, ""]);
  };
  const FullName = () => {
    setSelectedField("FullName");
  };

  const removeChoice = (index) => {
    setChoices(choices.filter((_, i) => i !== index));
    // setChoices("false");
  };
  const emailAddress = () => {
    setSelectedField("EmailAddress");
  };
  const contact = () => {
    setSelectedField("Contact");
  };
  const comment = () => {
    setSelectedField("Comment");
  };

  // const handleInputChange = (event) => {
  //   setChoices(event.target.value); // Update state with the current input value
  // };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        // Adjust this value based on when you want the navbar to appear
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
    // Change the background color when expanded
    "&.Mui-expanded": {
      backgroundColor: "#dbdbdb", // You can adjust this color
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/66ed1e29e5982d6c7bb15ccc/1i873rkmf";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []); // Empty dependency array to run once on mount
  return (
    <>
      {/* <NavBar  /> */}
      {!isScrolled && <NavBar />}
      <section className="product_top_sectins">
        <Image
          unoptimized={true}
          width={100}
          height={100}
          src="/img/leadgeneration/bg.png"
          alt="product-bg"
          className="bg_images"
        />
        <div className="container">
          <h1>LS Lead Generation Form</h1>
          <h2>Contact Form PHP Script</h2>

          <div className="both-left-p-sec">
            <h3>
              Attach contact form to your website to get connect with your users
              and collect their information.
            </h3>
            <div className="left-p-sec">
              <ul>
                <li>
                  Cross Domain Compatible : The form can be easily integrated
                  with any third party site without any hassle.
                </li>
                <li>
                  No installation required. Add the HTMl/Javascript code
                  directly to the site or page where form is required.
                </li>
                <li>
                  Captcha validation included in contact form to make this form
                  more secure and advance.
                </li>
              </ul>
            </div>
            <div className="left-p-sec">
              <ul>
                <li>
                  Get the email with all the details when any user submit the
                  form and respond to their query quickly.
                </li>
                <li>
                  Form is compatible with any custom framework includes
                  wordpress, joomla, cakephp, laravel.
                </li>
                <li>
                  Form width is extended dynamically to the full width. It can
                  be customized as per your requirement.
                </li>
              </ul>
            </div>
          </div>
          <div className="right-p-sec">
            <h4>Free</h4>
            <div className="line-border">
              <Image
                unoptimized={true}
                width={100}
                height={100}
                src="/img/jobboard/stars.png"
                alt="stars"
                className=""
              />
              <p>42 Reviews</p>
            </div>
            <Link className="btn btn-primary" href="#formbuilder">
              DOWNLOAD
            </Link>
          </div>
        </div>
      </section>
      <section className="product_page_header_in">
        <div className="container">
          <div className="whateissuprt">
            <div className="headhs">
              <strong>Lead Generation Form Builder</strong>
            </div>
            <p>
              This is an excellent way to customize your contact form with
              custom form fields like text fields, multiple choice check boxes,
              radio buttons, file attachment control, drop-down lists, and
              paragraph text controls on your form. You can generate the custom
              PHP form with dynamic fields for <strong>Lead Generation</strong>{" "}
              with our free contact form builder over an online platform. You
              can select the kind of validation you needed over the form fields
              so that it validates the data input by the user. You can also put
              the placeholder text over the form fields if you want to give
              extra guidance to the user. Once you customized your
              email/contact/lead generator form format, download it. It&apos;s
              easy and ready to install the contact forms PHP script for your
              website/webpage online.
            </p>

            <p>
              You can also put your own form title and description for the php
              contact form and can select the desired background color of the
              form and can change the placement of the form objects with a
              simple drag-and-drop control facility. You can choose the email ID
              you want to configure for your form to send email. You can change
              the label of each form field to make it easy to understand for the
              user.
            </p>

            <p>
              You can use this <strong>custom PHP form builder</strong> to
              generate the form for the purpose of creating a contact form,
              order inquiry form, or creating a form to collect different
              choices and preferences from your customers, maybe through your
              order form or over so many other places where you want to take
              input from your website visitors. You can use it online wherever
              you require a good customized contact form, which is ready-made
              and super easy to install.
            </p>

            <p>
              This <strong>contact form PHP script</strong> is an excellent way
              of bringing in new customers online. This PHP form captures your
              website leads/inquiries with a simple contact/inquiry/lead form.
              It could help you in a big way to generate leads through your
              website. Lead generation can be significantly improved through
              having a professionally scripted form structure, which is easy to
              use and has a decent look and format. The flexibility in
              customizing this form allows you to conduct free-flowing
              communication and to develop a relationship with the
              prospect/visitor of your website or web form. We have used a
              captcha in the form for security purposes.
            </p>
          </div>

          <div className="clear"></div>
        </div>

        <div className="LeadFormSectionMain">
          <div className="vfbg" id="formbuilder">
            <div className="container">
              <div className="acc_pro_right">
                <div className="acc_profd">
                  <div className="mars">
                    <div className="ld_main_m">
                      <div className="mainhead">
                        <span>Lead Generation Form Builder</span>
                      </div>
                      <div className="ld_main">
                        <div className="ld_main_l">
                          <div className="ld_h">Select Your Form Fields</div>
                          <div className="ld_flist">
                            <ul>
                              <li
                                onClick={loadTextBox}
                                className="lfsl"
                                id="slt"
                              >
                                Single Line Text
                              </li>
                              <li
                                onClick={loadTextAreaBox}
                                className="lfsl"
                                id="pt"
                              >
                                Paragraph Text
                              </li>
                              <li
                                onClick={loadCheckBox}
                                className="lfsl"
                                id="cb"
                              >
                                Checkboxes
                              </li>
                              <li
                                onClick={loadRadioBtn}
                                className="lfsl"
                                id="mc"
                              >
                                Multiple Choice
                              </li>
                              <li
                                onClick={loadDropdown}
                                className="lfsl"
                                id="dd"
                              >
                                Dropdown
                              </li>
                              <li
                                onClick={loadfilebox}
                                className="lfsl"
                                id="filebox"
                              >
                                File Upload
                              </li>
                              <li onClick={setFrom} className="lfsl" id="fs">
                                Form Settings
                              </li>
                            </ul>
                          </div>
                          <div className="showaddform" id="showformdields">
                            {selectedField === "SingleLineText" && (
                              <div>
                                <div class="add_field">
                                  <div class="af_r">
                                    <div class="af_la">Field Label</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="textname"
                                        id="textbox"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Validation</div>
                                    <div class="af_ra">
                                      <div class="lf_va">
                                        <input
                                          type="checkbox"
                                          name="validation[]"
                                          value="required"
                                          id="textrequired"
                                        />{" "}
                                        <span>Required</span>
                                      </div>
                                      <div class="lf_va">
                                        <input
                                          type="checkbox"
                                          name="validation[]"
                                          value="email"
                                          id="textemail"
                                          onclick="textemail()"
                                        />{" "}
                                        <span>Email</span>
                                      </div>
                                      <div class="lf_va">
                                        <input
                                          type="checkbox"
                                          name="validation[]"
                                          value="number"
                                          id="textnumber"
                                          onclick="textnumber()"
                                        />{" "}
                                        <span>Number</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Range</div>
                                    <div class="af_ra">
                                      <div class="lf_va_rng">
                                        <input
                                          type="text"
                                          name="minlength"
                                          value="0"
                                          id="minlength"
                                        />{" "}
                                        <span>Minimum Character</span>
                                      </div>
                                      <div class="lf_va_rng">
                                        <input
                                          type="text"
                                          name="maxlength"
                                          value=""
                                          id="maxlength"
                                        />{" "}
                                        <span>Maximum Character</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Placeholder</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="placeholder"
                                        id="placeholder"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">&nbsp;</div>
                                    <div class="af_ra">
                                      <input
                                        type="button"
                                        value="Add to Form"
                                        onclick="addTextBox(0);"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {selectedField === "ParagraphText" && (
                              <div>
                                <div class="add_field">
                                  <div class="af_r">
                                    <div class="af_la">Field Label</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="textname"
                                        id="textbox"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Validation</div>
                                    <div class="af_ra">
                                      <div class="lf_va">
                                        <input
                                          type="checkbox"
                                          name="validation[]"
                                          value="required"
                                          id="textrequired"
                                        />{" "}
                                        <span>Required</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Range</div>
                                    <div class="af_ra">
                                      <div class="lf_va_rng">
                                        <input
                                          type="text"
                                          name="minlength"
                                          value="0"
                                          id="minlength"
                                        />{" "}
                                        <span>Minimum Character</span>
                                      </div>
                                      <div class="lf_va_rng">
                                        <input
                                          type="text"
                                          name="maxlength"
                                          value=""
                                          id="maxlength"
                                        />{" "}
                                        <span>Maximum Character</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Placeholder</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="placeholder"
                                        id="placeholder"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">&nbsp;</div>
                                    <div class="af_ra">
                                      <input
                                        type="button"
                                        value="Add to Form"
                                        onclick="addTextBox(0);"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {selectedField === "Checkbox" && (
                              <div>
                                <div class="add_field">
                                  <div class="af_r">
                                    <div class="af_la">Field Label</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="textname"
                                        id="textbox"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Choices</div>

                                    <div class="af_ra" id="addChoices">
                                      {choices.map((choice, index) => (
                                        <div key={index} class="lf_va chbb">
                                          <input
                                            type="checkbox"
                                            name="choices[]"
                                            class="ckbox"
                                            disabled
                                          />{" "}
                                          <span class="ckbox_ch">
                                            <input
                                              type="text"
                                              name="textname"
                                              value="Define Choice"
                                              class="cboption"
                                            />
                                          </span>
                                          <span class="ckbox_ch">
                                            <button
                                              class="add-choice"
                                              onClick={addnewchoice}
                                            >
                                              +
                                            </button>
                                          </span>
                                          {index > 0 && (
                                            <span className="ckbox_ch">
                                              <button
                                                class="remove-choice"
                                                onClick={() =>
                                                  removeChoice(index)
                                                }
                                              >
                                                -
                                              </button>
                                            </span>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">&nbsp;</div>
                                    <div class="af_ra">
                                      <input
                                        type="button"
                                        value="Add to Form"
                                        onclick="addTextBox(0);"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {selectedField === "MultipleDropdown" && (
                              <div>
                                <div class="add_field">
                                  <div class="af_r">
                                    <div class="af_la">Field Label</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="textname"
                                        id="textbox"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Choices</div>
                                    <div class="af_ra" id="addChoices">
                                      <div class="lf_va chbb">
                                        <input
                                          type="radio"
                                          name="choices[]"
                                          class="ckbox"
                                          disabled
                                        />{" "}
                                        <span class="ckbox_ch">
                                          <input
                                            type="text"
                                            name=""
                                            value=""
                                            id=""
                                            class="cboption"
                                          />
                                        </span>
                                        <span class="ckbox_ch">
                                          <button
                                            class="add-choice"
                                            onClick={addnewchoice}
                                          >
                                            +
                                          </button>
                                        </span>
                                        {/* {index > 0 && (
                                            <span className="ckbox_ch">
                                              <button
                                                class="remove-choice"
                                                onClick={() =>
                                                  removeChoice(index)
                                                }
                                              >
                                                -
                                              </button>
                                            </span>
                                          )} */}
                                      </div>
                                      {choices.map((choice, index) => (
                                        <div key={index} class="lf_va chbb">
                                          <input
                                            type="radio"
                                            name="choices"
                                            class="ckbox"
                                            disabled
                                          />{" "}
                                          <span class="ckbox_ch">
                                            <input
                                              type="text"
                                              name=""
                                              value=""
                                              class="cboption"
                                            />
                                          </span>
                                          <span class="ckbox_ch">
                                            <button
                                              class="add-choice"
                                              onClick={addnewchoice}
                                            >
                                              +
                                            </button>
                                          </span>
                                          {index > 0 && (
                                            <span className="ckbox_ch">
                                              <button
                                                class="remove-choice"
                                                onClick={() =>
                                                  removeChoice(index)
                                                }
                                              >
                                                -
                                              </button>
                                            </span>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">&nbsp;</div>
                                    <div class="af_ra">
                                      <input
                                        type="button"
                                        value="Add to Form"
                                        onclick="addTextBox(0);"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {selectedField === "Dropdown" && (
                              <div>
                                <div class="add_field">
                                  <div class="af_r">
                                    <div class="af_la">Field Label</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="textname"
                                        id="textbox"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Options</div>
                                    <div class="af_ra" id="addChoices">
                                      <div class="lf_va chbb">
                                        <span class="ckbox_ch">
                                          <input
                                            type="text"
                                            name=""
                                            value=""
                                            id=""
                                            placeholder="options"
                                            class="cboption"
                                            // onChange={handleInputChange}
                                          />
                                        </span>
                                        <span class="ckbox_ch">
                                          <button
                                            class="add-choice"
                                            onClick={addnewchoice}
                                          >
                                            +
                                          </button>
                                        </span>
                                      </div>
                                      {choices.map((choices, index) => (
                                        <div key={index} class="lf_va chbb">
                                          <span class="ckbox_ch">
                                            <input
                                              type="text"
                                              name=""
                                              value=""
                                              class="cboption"
                                              placeholder="options"
                                            />
                                          </span>
                                          <span class="ckbox_ch">
                                            <button
                                              class="add-choice"
                                              onClick={addnewchoice}
                                            >
                                              +
                                            </button>
                                          </span>
                                          {index > 0 && (
                                            <span className="ckbox_ch">
                                              <button
                                                class="remove-choice"
                                                onClick={() =>
                                                  removeChoice(index)
                                                }
                                              >
                                                -
                                              </button>
                                            </span>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Validation</div>
                                    <div class="af_ra">
                                      <div class="lf_va">
                                        <input
                                          type="checkbox"
                                          name="validation[]"
                                          value="required"
                                          id="textrequired"
                                        />{" "}
                                        <span>Required</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">&nbsp;</div>
                                    <div class="af_ra">
                                      <input
                                        type="button"
                                        value="Add to Form"
                                        onclick="addTextBox(0);"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {selectedField === "File" && (
                              <div>
                                <div class="add_field">
                                  <div class="af_r">
                                    <div class="af_la">Field Label</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="textname"
                                        id="textbox"
                                      />
                                    </div>
                                  </div>

                                  <div class="af_r">
                                    <div class="af_la">Validation</div>
                                    <div class="af_ra">
                                      <div class="lf_va">
                                        <input
                                          type="checkbox"
                                          name="validation[]"
                                          value="required"
                                          id="textrequired"
                                        />{" "}
                                        <span>Required</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">&nbsp;</div>
                                    <div class="af_ra">
                                      <input
                                        type="button"
                                        value="Add to Form"
                                        onclick="addTextBox(0);"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {selectedField === "FormSetting" && (
                              <div>
                                <div class="add_field">
                                  <div class="af_r">
                                    <div class="af_la">Form Name</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="formtitle"
                                        id="formtitle"
                                        value={formTitle} // Controlled value
                                        onChange={handleInputChange} // Handle input change
                                        maxLength="50"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Description</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="formdescription"
                                        id="formdescription"
                                        value={formDescription} // Controlled input
                                        onChange={handleInputChange} // Update state on change
                                        placeholder="This is my Form, Please Fill"
                                        maxLength="100"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Text Color</div>
                                    <div class="af_ra">
                                      <input
                                        type="color"
                                        name="formtextcolor"
                                        id="formtextcolor"
                                        value={textColor}
                                        onChange={(e) =>
                                          setTextColor(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Background Color</div>
                                    <div class="af_ra">
                                      <input
                                        type="color"
                                        name="formbgcolor"
                                        id="formbgcolor"
                                        value={bgColor}
                                        onChange={(e) =>
                                          setBgColor(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">
                                      Form Title Background
                                    </div>
                                    <div class="af_ra">
                                      <input
                                        type="color"
                                        name="formgbtitlecolor"
                                        id="formbgtitlecolor"
                                        value={formTitleBgColor}
                                        onChange={(e) =>
                                          setFormTitleBgColor(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Button Color</div>
                                    <div class="af_ra">
                                      <input
                                        type="color"
                                        name="formbtncolor"
                                        id="formbtncolor"
                                        value={buttonColor}
                                        onChange={(e) =>
                                          setButtonColor(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>

                                  <div class="af_r">
                                    <div class="af_la">&nbsp;</div>
                                    <div class="af_ra">
                                      <input
                                        type="button"
                                        value="Update Form Title"
                                        onclick="updateFromTitle();"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {selectedField === "Email" && (
                              <div>
                                <div class="add_field">
                                  <div class="af_r">
                                    <div class="af_la">
                                      Receiver Email Address
                                    </div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="formtitle"
                                        id="formtitleemail"
                                        value="youremail@gmail.com"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">&nbsp;</div>
                                    <div class="af_ra">
                                      <input
                                        type="button"
                                        value="Update Email"
                                        onclick="updateEmailField();"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {selectedField === "FullName" && (
                              <div>
                                <div class="add_field">
                                  <div class="af_r">
                                    <div class="af_la">Field Label</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="textname"
                                        id="textbox"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Validation</div>
                                    <div class="af_ra">
                                      <div class="lf_va">
                                        <input
                                          type="checkbox"
                                          name="validation[]"
                                          value="required"
                                          id="textrequired"
                                        />{" "}
                                        <span>Required</span>
                                      </div>
                                      <div class="lf_va">
                                        <input
                                          type="checkbox"
                                          name="validation[]"
                                          value="email"
                                          id="textemail"
                                          onclick="textemail()"
                                        />{" "}
                                        <span>Email</span>
                                      </div>
                                      <div class="lf_va">
                                        <input
                                          type="checkbox"
                                          name="validation[]"
                                          value="number"
                                          id="textnumber"
                                          onclick="textnumber()"
                                        />{" "}
                                        <span>Number</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Range</div>
                                    <div class="af_ra">
                                      <div class="lf_va_rng">
                                        <input
                                          type="text"
                                          name="minlength"
                                          value="0"
                                          id="minlength"
                                        />{" "}
                                        <span>Minimum Character</span>
                                      </div>
                                      <div class="lf_va_rng">
                                        <input
                                          type="text"
                                          name="maxlength"
                                          value=""
                                          id="maxlength"
                                        />{" "}
                                        <span>Maximum Character</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Placeholder</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="placeholder"
                                        id="placeholder"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">&nbsp;</div>
                                    <div class="af_ra">
                                      <input
                                        type="button"
                                        value="Add to Form"
                                        onclick="addTextBox(0);"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {selectedField === "EmailAddress" && (
                              <div>
                                <div class="add_field">
                                  <div class="af_r">
                                    <div class="af_la">Field Label</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="textname"
                                        id="textbox"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Validation</div>
                                    <div class="af_ra">
                                      <div class="lf_va">
                                        <input
                                          type="checkbox"
                                          name="validation[]"
                                          value="required"
                                          id="textrequired"
                                        />{" "}
                                        <span>Required</span>
                                      </div>
                                      <div class="lf_va">
                                        <input
                                          type="checkbox"
                                          name="validation[]"
                                          value="email"
                                          id="textemail"
                                          onclick="textemail()"
                                        />{" "}
                                        <span>Email</span>
                                      </div>
                                      <div class="lf_va">
                                        <input
                                          type="checkbox"
                                          name="validation[]"
                                          value="number"
                                          id="textnumber"
                                          onclick="textnumber()"
                                        />{" "}
                                        <span>Number</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Range</div>
                                    <div class="af_ra">
                                      <div class="lf_va_rng">
                                        <input
                                          type="text"
                                          name="minlength"
                                          value="0"
                                          id="minlength"
                                        />{" "}
                                        <span>Minimum Character</span>
                                      </div>
                                      <div class="lf_va_rng">
                                        <input
                                          type="text"
                                          name="maxlength"
                                          value=""
                                          id="maxlength"
                                        />{" "}
                                        <span>Maximum Character</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Placeholder</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="placeholder"
                                        id="placeholder"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">&nbsp;</div>
                                    <div class="af_ra">
                                      <input
                                        type="button"
                                        value="Add to Form"
                                        onclick="addTextBox(0);"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {selectedField === "Contact" && (
                              <div>
                                <div class="add_field">
                                  <div class="af_r">
                                    <div class="af_la">Field Label</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="textname"
                                        id="textbox"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Validation</div>
                                    <div class="af_ra">
                                      <div class="lf_va">
                                        <input
                                          type="checkbox"
                                          name="validation[]"
                                          value="required"
                                          id="textrequired"
                                        />{" "}
                                        <span>Required</span>
                                      </div>
                                      <div class="lf_va">
                                        <input
                                          type="checkbox"
                                          name="validation[]"
                                          value="email"
                                          id="textemail"
                                          onclick="textemail()"
                                        />{" "}
                                        <span>Email</span>
                                      </div>
                                      <div class="lf_va">
                                        <input
                                          type="checkbox"
                                          name="validation[]"
                                          value="number"
                                          id="textnumber"
                                          onclick="textnumber()"
                                        />{" "}
                                        <span>Number</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Range</div>
                                    <div class="af_ra">
                                      <div class="lf_va_rng">
                                        <input
                                          type="text"
                                          name="minlength"
                                          value="0"
                                          id="minlength"
                                        />{" "}
                                        <span>Minimum Character</span>
                                      </div>
                                      <div class="lf_va_rng">
                                        <input
                                          type="text"
                                          name="maxlength"
                                          value=""
                                          id="maxlength"
                                        />{" "}
                                        <span>Maximum Character</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Placeholder</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="placeholder"
                                        id="placeholder"
                                        placeholder="Your Mobile Number"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">&nbsp;</div>
                                    <div class="af_ra">
                                      <input
                                        type="button"
                                        value="Add to Form"
                                        onclick="addTextBox(0);"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {selectedField === "Comment" && (
                              <div>
                                <div class="add_field">
                                  <div class="af_r">
                                    <div class="af_la">Field Label</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="textname"
                                        id="textbox"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Validation</div>
                                    <div class="af_ra">
                                      <div class="lf_va">
                                        <input
                                          type="checkbox"
                                          name="validation[]"
                                          value="required"
                                          id="textrequired"
                                        />{" "}
                                        <span>Required</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Range</div>
                                    <div class="af_ra">
                                      <div class="lf_va_rng">
                                        <input
                                          type="text"
                                          name="minlength"
                                          value="0"
                                          id="minlength"
                                        />{" "}
                                        <span>Minimum Character</span>
                                      </div>
                                      <div class="lf_va_rng">
                                        <input
                                          type="text"
                                          name="maxlength"
                                          value=""
                                          id="maxlength"
                                        />{" "}
                                        <span>Maximum Character</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">Placeholder</div>
                                    <div class="af_ra">
                                      <input
                                        type="text"
                                        name="placeholder"
                                        id="placeholder"
                                        placeholder="Comment"
                                      />
                                    </div>
                                  </div>
                                  <div class="af_r">
                                    <div class="af_la">&nbsp;</div>
                                    <div class="af_ra">
                                      <input
                                        type="button"
                                        value="Add to Form"
                                        onclick="addTextBox(0);"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="ld_main_r">
                          <form
                            onSubmit={submitView}
                            id="viewform"
                            method="post"
                            acceptCharset="utf-8"
                            target="_blank"
                          >
                            <div
                              className="lfha"
                              id="frmId"
                              onclick="setFrom(25)"
                            >
                              <div className="formtitel" id="cfromttitle">
                                Untitled Form
                              </div>
                              <div
                                className="formtitel_de"
                                id="cfromdescription"
                              >
                                This is my form, please fill it.
                              </div>
                              <div
                                className="formtitel_de displayne"
                                id="cformtextcolor"
                              ></div>
                              <div
                                className="formtitel_de displayne"
                                id="cformbgcolor"
                              >
                                ffffff
                              </div>
                              <div
                                className="formtitel_de displayne"
                                id="cformbtncolor"
                              >
                                074376
                              </div>
                              <div
                                className="formtitel_de displayne"
                                id="cformbgtitlecolor"
                              >
                                dedede
                              </div>
                              <input
                                id="fordataid"
                                name="jsondata[]"
                                value='{"type":"form","forhead":"Untitled Form","formdescription":"This is my form, please fill it."}'
                                type="hidden"
                              />{" "}
                            </div>
                            <div
                              className="lfha setemail "
                              id="frmIdEmail"
                              onClick={setEmail}
                            >
                              <div className="setemail" id="cfromttitle">
                                Email Address where you want to receive form
                                data after submission{" "}
                                {/* <div className="af_ra ssemail">
                                  <input
                                    name="setemail"
                                    id="setemail"
                                    className=" required"
                                    minlength="0"
                                    maxlength=""
                                    placeholder=""
                                    type="text"
                                    value="youremail@gmail.com"
                                  />
                                </div> */}
                                <div class="af_ra ssemail">
                                  <input
                                    name="setemail"
                                    id="setemail"
                                    class=" required"
                                    minlength="0"
                                    maxlength=""
                                    placeholder=""
                                    type="text"
                                    value="youremail@gmail.com"
                                  />
                                </div>
                              </div>
                              {/* <input
                                id="fordataidemail"
                                name="jsondata[]"
                                value='{"type":"setemail","email":"youremail@gmail.com"}'
                                type="hidden"
                              />{" "} */}
                            </div>
                            <div className="ld_SS" id="show_from">
                              <div
                                className="af_r_new"
                                id="addfull_name2"
                                // onclick="editText('full_name2')"
                                onClick={FullName}
                              >
                                <div className="af_la">
                                  Full Name <span className="reqstar">*</span>
                                </div>
                                <div className="af_ra">
                                  <input
                                    name="full_name"
                                    id="full_name2"
                                    className=" required"
                                    minlength="0"
                                    maxlength=""
                                    placeholder="Your name"
                                    type="text"
                                  />
                                </div>
                                <div className="afh">
                                  <input
                                    name="jsondata[]"
                                    id="jsonfull_name2"
                                    value='{"type":"text","lable_name":"Full Name","lable_required":"*","field_name":"full_name","field_id":"full_name2","validation":" required","minimum":"0","maximum":"","placeholder":"Your name"}'
                                    type="hidden"
                                  />
                                </div>
                              </div>
                              <div
                                className="af_r_new"
                                id="addemail_address3"
                                // onclick="editText('email_address3')"
                                onClick={emailAddress}
                              >
                                <div className="af_la">
                                  Email Address{" "}
                                  <span className="reqstar">*</span>
                                </div>
                                <div className="af_ra">
                                  <input
                                    name="email_address"
                                    id="email_address3"
                                    className=" required email"
                                    minlength="0"
                                    maxlength=""
                                    placeholder="Your email address"
                                    type="text"
                                  />
                                </div>
                                <div className="afh">
                                  <input
                                    name="jsondata[]"
                                    id="jsonemail_address3"
                                    value='{"type":"text","lable_name":"Email Address","lable_required":"*","field_name":"email_address","field_id":"email_address3","validation":" required email","minimum":"0","maximum":"","placeholder":"Your email address"}'
                                    type="hidden"
                                  />
                                </div>
                              </div>
                              <div
                                className="af_r_new"
                                id="addcontact_number4"
                                // onclick="editText('contact_number4')"
                                onClick={contact}
                              >
                                <div className="af_la">
                                  Contact Number{" "}
                                  <span className="reqstar">*</span>
                                </div>
                                <div className="af_ra">
                                  <input
                                    name="contact_number"
                                    id="contact_number4"
                                    className=" required number"
                                    minlength="0"
                                    maxlength="12"
                                    placeholder="Your mobile number"
                                    type="text"
                                  />
                                </div>
                                <div className="afh">
                                  <input
                                    name="jsondata[]"
                                    id="jsoncontact_number4"
                                    value='{"type":"text","lable_name":"Contact Number","lable_required":"*","field_name":"contact_number","field_id":"contact_number4","validation":" required number","minimum":"0","maximum":"12","placeholder":"Your mobile number"}'
                                    type="hidden"
                                  />
                                </div>
                              </div>
                              <div
                                className="af_r_new"
                                id="addcomment5"
                                // onclick="editTextArea('comment5')"
                                onClick={comment}
                              >
                                <div className="af_la">
                                  Comment <span className="reqstar">*</span>
                                </div>
                                <div className="af_ra">
                                  <textarea
                                    className="textareaname"
                                    name="comment"
                                    id="comment5"
                                    minlength="0"
                                    maxlength="500"
                                    placeholder="Enter your comment"
                                  ></textarea>
                                </div>
                                <div className="afh">
                                  <input
                                    name="jsondata[]"
                                    id="jsoncomment5"
                                    value='{"type":"textarea","lable_name":"Comment","lable_required":"*","field_name":"comment","field_id":"comment5","validation":" required","minimum":"0","maximum":"500","placeholder":"Enter your comment"}'
                                    type="hidden"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                          <div
                            className="lfsavebtn"
                            id="lfsavebtn"
                            style={{ display: "block" }}
                          >
                            <input
                              type="submit"
                              value="Preview Form"
                              id=""
                              className="viewsaveform"
                            />
                            <input
                              type="button"
                              onClick={openDownloadModel}
                              className="saveform"
                              id=""
                              value="Download Form"
                            />
                            <DownloadForm
                              modalStatus={showDownloadModal}
                              toggle={openDownloadModel}
                              title="Job Board Software"
                            />
                          </div>
                        </div>
                        <input
                          type="hidden"
                          value="1"
                          id="fcount"
                          name="fcount"
                        />
                      </div>
                    </div>
                    <div className="note">
                      Note: To change form title and receiver email, you need to
                      click over the field in right section and update according
                      to your requirement.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <MDBModal
            id="downloadmodel"
            tabindex="-1"
            labelledby="exampleModalLabel"
            v-model="downloadmodel"
          >
            <MDBModalHeader>
              <MDBModalTitle id="exampleModalLabel">
                Share your information
              </MDBModalTitle>
            </MDBModalHeader>

            <form onSubmit={submitView} id="reviewForm">
              <MDBModalBody>
                <div className="modal-body">
                  <div style={{ display: "none" }}>
                    <input type="hidden" name="_wpcf7" value="4265" />
                    <input type="hidden" name="_wpcf7_version" value="4.3.1" />
                    <input type="hidden" name="_wpcf7_locale" value="en_US" />
                    <input
                      type="hidden"
                      name="_wpcf7_unit_tag"
                      value="wpcf7-f4265-o1"
                    />
                    <input type="hidden" name="_wpnonce" value="356e2903be" />
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-text" id="inputGroupPrepend">
                        <i className="fa fa-user"></i>
                      </span>
                      <input
                        type="text"
                        v-model="formData['your-name']"
                        className="form-control"
                        placeholder="Name*"
                        id="UserName"
                        aria-describedby="inputGroupPrepend"
                      />
                    </div>
                    <div className="FormError">{/* {{ usarnameerror }} */}</div>
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-text" id="inputGroupPrepend">
                        <i className="fa fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        v-model="formData['your-email']"
                        className="form-control"
                        placeholder="Email*"
                        id="UserEmail"
                        aria-describedby="inputGroupPrepend"
                      />
                    </div>
                    <div className="FormError">{/* {{ emailerror }} */}</div>
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-text" id="inputGroupPrepend">
                        <i className="fa fa-phone"></i>
                      </span>
                      <input
                        type="text"
                        v-model="formData['your-phone']"
                        className="form-control"
                        placeholder="Phone*"
                        id="UserPhone"
                        aria-describedby="inputGroupPrepend"
                      />
                    </div>
                    <div className="FormError">{/* {{ phoneerror }} */}</div>
                  </div>

                  <div className="form-group">
                    <div className="form-group-google">
                      <div
                        id="recaptchaC"
                        style={{
                          transform: "scale(0.75)",
                          transformOrigin: "left top",
                        }}
                      ></div>
                      <div className="gcpc" id="captcha_msg">
                        {/* {{ reacptchaerror }} */}
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div
                      className="display_success_message"
                      id="review_success_message"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="display_error_message"
                      id="review_error_message"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                </div>
              </MDBModalBody>

              <MDBModalFooter>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form_contactinput_row">
                      <input
                        type="submit"
                        value="Submit &amp; Download Now"
                        className="btn btn-primary wpcf7-submit"
                      />
                    </div>
                    <div v-if="loader" id="loadloader">
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        src="/img/loading-old.gif"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <div className="form_contactinput_row">
                      <Link
                        href="javascript:void(0)"
                        onClick={() => downloadform("sentip")}
                      >
                        No Thank You Direct Download
                      </Link>
                    </div>
                  </div>
                </div>
              </MDBModalFooter>
            </form>
          </MDBModal>
        </div>
      </section>
      <section className="gettoknow_sectins">
        <div className="gettoknow_sectins_in">
          <div className="container">
            <div className="titlesettop">
              Have a look on the advance and flexible set of features in our{" "}
              <span>Lead Generation Form Creator</span>
            </div>
            <div className="clear"></div>

            <div className="row">
              <div className="col-md-4">
                <div className="media">
                  <div className="media-left">
                    <Link href="#">
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        className="media-object"
                        src="/img/leadgeneration/customizable.png"
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">
                      Customise your Form title, background color and fields
                    </h4>
                    <p>
                      User can easily customize the form title, color and fields
                      to mathc your company&apos;s brand.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="media">
                  <div className="media-left">
                    <Link href="#">
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        className="media-object"
                        src="/img/leadgeneration/drag.png"
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">
                      Drag and drop field placements
                    </h4>
                    <p>
                      Place your text field wherever you want top, bottom or
                      appropriate place.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="media">
                  <div className="media-left">
                    <Link href="#">
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        className="media-object"
                        src="/img/leadgeneration/put-in-box.png"
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">
                      Put Label, validation and placeholder text for the fields
                    </h4>
                    <p>
                      Themes with ‘fit-all-screen’ compatibility allow user to
                      access from mobile as well as tablet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="media">
                  <div className="media-left">
                    <Link href="#">
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        className="media-object"
                        src="/img/leadgeneration/email.png"
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">
                      Email ID to send form values
                    </h4>
                    <p>
                      Update the email id and send the query at your business
                      email.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="media">
                  <div className="media-left">
                    <Link href="#">
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        className="media-object"
                        src="/img/leadgeneration/preview.png"
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">Preview the Form</h4>
                    <p>
                      Preview your customized form and cross check all the
                      values.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="media">
                  <div className="media-left">
                    <Link href="#">
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        className="media-object"
                        src="/img/leadgeneration/download-archive-tray.png"
                        alt="..."
                      />
                    </Link>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">
                      Download your easy to install form script
                    </h4>
                    <p>
                      Download the lead form and embedded in your website
                      easily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product_middle_menu_box">
        {isScrolled && (
          <section className="product_middle_menu top-fixed">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-default">
                <div className="container-fluid">
                  {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                  <div className="navbar-header">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  </div>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto">
                      <li>
                        <Link href="#features">Features</Link>
                      </li>
                      <li>
                        <Link href="#technologies">Technologies</Link>
                      </li>
                      <li>
                        <Link href="#support">Support</Link>
                      </li>
                      <li>
                        <Link href="#reviews">Reviews</Link>
                      </li>
                    </ul>
                    <ul className="navbar-nav ms-auto navbar-right">
                      <li>
                        <Link
                          className="page-scroll btn btn-default"
                          href="javascript:void(0);"
                          id="buy_now_1"
                          onClick={openModal}
                        >
                          <span>
                            <Image
                              unoptimized={true}
                              width={30}
                              height={100}
                              src="/img/leadgeneration/enquiry_btn_bg.png"
                              alt="enquiry"
                            />
                          </span>{" "}
                          Enquire Now
                          {
                            // <SoftwareEnquiry
                            //   modalStatus={showModal}
                            //   toggle={openModal}
                            //   title="Lead Generation Contact Form PHP Script"
                            // />
                            <EnquiryModal
                            modalStatus={showModal}
                            toggle={openModal}
                            title="Contact form php Script"
                          />
                          }
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </section>
        )}

        <section className="Frequently_Asked_Questions" id="features">
          <div className="container">
            <h3>
              Contact form php <span>Script</span>
            </h3>
            <p>
              Logicspice <strong>lead generation form builder</strong> can be
              embedded easily onto your website which is fully customizable to
              match your company’s brand. Customize it in your own way and
              Download the free lead generation PHP form script.{" "}
            </p>
            <p>
              Custom contact forms are essentially a handshake between you and
              your business prospects. The forms are essential for initiating
              the engagement between a business and customer. Customize your
              form to automatically send email notifications after a lead
              submits the form.{" "}
            </p>
            <p>
              This is very simple but powerful contact form generator. Forms are
              fully compatible with WordPress, Drupal, Joomla, or any other web
              site where you have option to add HTML code.{" "}
            </p>
            <p>
              These lead management <strong>PHP script</strong> also includes a
              captcha so, that users can be differentiated from bots. Captcha is
              an important tool that prevents fake lead generation from
              automated computers. Whenever a user would fill a form, he has to
              input the answer to the mathematical question asked in the
              captcha. If you don’t use a captcha in a lead generation, it could
              result in degradation of the quality of leads generated so, keep
              the security measures in mind it is necessary to have captcha in
              forms.
            </p>
          </div>
        </section>
        <section className="used_technology_section" id="technologies">
          <div className="container">
            <h4 className="title_main">
              <span>Used Technologies</span> and Server Requirements
            </h4>
            <div className="used_technology_section_dataa">
              <ul>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      width={45}
                      height={100}
                      src="/img/jobboard/bootstrap.png"
                      alt="manager_icn"
                    />
                  </div>
                  <div className="icntechimg_nm">Bootstrap</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      width={45}
                      height={100}
                      src="/img/jobboard/css.png"
                      alt="manager_icn"
                    />
                  </div>
                  <div className="icntechimg_nm">CSS3</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      width={45}
                      height={100}
                      src="/img/jobboard/html-5.png"
                      alt="manager_icn"
                    />
                  </div>
                  <div className="icntechimg_nm">HTML5</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      width={45}
                      height={100}
                      src="/img/jobboard/tech_php_icon.png"
                      alt="manager_icn"
                    />
                  </div>
                  <div className="icntechimg_nm">PHP</div>
                </li>
                <li data-aos="fade-up">
                  <div className="icntechimg">
                    <Image
                      unoptimized={true}
                      width={45}
                      height={100}
                      src="/img/jobboard/javascript.png"
                      alt="manager_icn"
                    />
                  </div>
                  <div className="icntechimg_nm">Javascript</div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section className="whatsupport_section" id="support">
        <div className="container">
          <h4 className="title_main">
            What <span>support</span> you will get?
          </h4>
          <div className="supportsetting">
            <ul>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    width={50}
                    height={100}
                    src="/img/jobboard/free_remove_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Free Brand Removal</div>
              </li>
              <li data-aos="fade">
                <div className="supportsetting_icn">
                  <Image
                    unoptimized={true}
                    width={50}
                    height={100}
                    src="/img/jobboard/access_secure_code_icon.png"
                    alt="manager_icn"
                  />
                </div>
                <div className="supportsettingtext">Access to Source code</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="su_rev_section" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className="title_main">Customer Reviews </h4>
              <div className="row">
                <div className="col-md-5">
                  <div className="outof_rating">
                    <div className="main-rait">
                      <span>
                        <i className="fa fa-star"></i>{" "}
                        <span>4.7 out of 5 stars</span>
                      </span>
                    </div>
                    <div className="review_rating_fjs">
                      <div className="star_num">
                        5 <i className="fa fa-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">20</div>
                    </div>

                    <div className="review_rating_fjs">
                      <div className="star_num">
                        4 <i className="fa fa-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">22</div>
                    </div>
                    <div className="review_rating_fjs">
                      <div className="star_num">
                        3 <i className="fa fa-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">0</div>
                    </div>

                    <div className="review_rating_fjs">
                      <div className="star_num">
                        2 <i className="fa fa-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">0</div>
                    </div>

                    <div className="review_rating_fjs">
                      <div className="star_num">
                        1 <i className="fa fa-star"></i>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-danger progress-bar-striped"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                      <div className="people_star_num">0</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <a className="btn btn-primary" onClick={openReviewModel}>
                    Rate and Review product
                  </a>

                  <Reviewmodals
                    modalStatus={showReviewModal}
                    toggle={openReviewModel}
                    title="Lead Generation Form Script"
                  />
                </div>
                <div className="col-md-12">
                  <div className="reviews_down_pro">
                    <div className="customers_review_sec_row_ra">
                      <div className="starget">
                        5 <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <span>Build an Online Store</span>
                    </div>
                    <div className="who_ratset">Oapriliao</div>
                    <div className="customer_review_stext">
                      Professional, Always put in extra effort, Good Knowledge.
                      One of the best Developer. Will continue to work with them
                      with upcoming project.
                    </div>
                  </div>
                  <div className="reviews_down_pro">
                    <div className="customers_review_sec_row_ra">
                      <div className="starget">
                        5 <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <span>
                        website interface design and back-end business
                        implementation using php
                      </span>
                    </div>
                    <div className="who_ratset">Emsall</div>
                    <div className="customer_review_stext">
                      The word &quot;perfect&quot; is not enough to describe the
                      capability of Logicspice. They are just wonderful and
                      willing to extend the effort until the customer satisfied,
                      definitely will re-hire them
                    </div>
                  </div>
                  <div className="reviews_down_pro">
                    <div className="customers_review_sec_row_ra">
                      <div className="starget">
                        5 <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <span>Online Box Office</span>
                    </div>
                    <div className="who_ratset">Konataalleyne</div>
                    <div className="customer_review_stext">
                      Excellent work. Would definitely use them again. Fast and
                      effective work.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 Quick_FAQ">
              <h4 className="title_main">FAQ&apos;s</h4>
              <div className="MainFaqBx">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography>
                      Are your given source code modifiable?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, our given scripts are flexible. Clients can customize
                      according to their requirement.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <Typography>How can I get my form delivered?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      You can simply download it once you complete adding the
                      fields and text in the form.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                  >
                    <Typography>
                      Which technology will the generated forms support?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>HTML, JavaScript, Bootstrap, PHP</Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                  >
                    <Typography>
                      Can I use your script without any programming skills?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      You need to have basic knowledge of HTML and JavaScript to
                      integrate the form into your website.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    aria-controls="panel5d-content"
                    id="panel5d-header"
                  >
                    <Typography>
                      How many forms can I generate at a time?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      We provide unlimited downloads. You can download any
                      number of forms.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <AccordionSummary
                    aria-controls="panel6d-content"
                    id="panel6d-header"
                  >
                    <Typography>
                      Can I change the fields label according to my requirement
                      in the form?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Yes, we provide you the option to create fields and rename
                      the labels as per your requirement.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                >
                  <AccordionSummary
                    aria-controls="panel7d-content"
                    id="panel7d-header"
                  >
                    <Typography>
                      Is it free to download these customized lead generation
                      forms?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>Yes, it&apos;s totally free.</Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
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
