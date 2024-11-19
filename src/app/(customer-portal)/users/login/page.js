"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "@/app/(customer-portal)/users/login/login.css";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import Swal from "sweetalert2";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Image from "next/image";
import Link from "next/link";





const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };


  const validate = () => {
    const newErrors = { email: "", password: "" };
    let isValid = true;

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     setIsSubmitting(true);
  //     // Call your login API here
  //     console.log("Logging in with:", { email, password });
  //     // Reset the form or handle the response accordingly
  //   }

  //   Swal.fire({
  //     icon: "success",
  //     title: "Successfully Applied",
  //   })
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Perform validation
    if (validate()) {
      // Assume validation passed and set submitting state
      // setIsSubmitting(true);
      
      // Log in credentials (simulating successful login)
      
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "Please check your email and password.",
      });
    } 
  };
  

  return (
    <>
      <Navbar />

      {/* <div class="page_space login_logic">
      
    <div class="wrapper">
        <div class="pop_wraper_inner">
            <div class="pop_container">
                <div class="right_part_fulls">
                    <div class="form_cont_inner">
                        <div class="login_section_full" id="loginf">

                            <h1 class="signn">LOGIN TO LOGICSPICE</h1>
                            <div class="ee" id="errormessage"></div>
                            <div class="ee"></div>
                            <div class="clear"></div>

                            <form action="/users/login" id="userlogin1" method="post" accept-charset="utf-8" novalidate="novalidate"><div style={{display: "none"}}><input type="hidden" name="_method" value="POST"/></div>                            <div class="login_fieldarea">
                                <div class="form-group">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                                        <input name="data[User][email_address]" class="form-control required email" placeholder="Email address" autocomplete="off" type="text" id="UserEmailAddress"/>                                    </div>

                                </div>
                                <div class="form-group">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-key"></i></span>
                                        <input name="data[User][password]" class="form-control required" placeholder="Password" autocomplete="off" type="password" id="UserPassword"/>                                    </div>
                                </div>

                                <div class="form-group">                    
                                    <div class="col_tow_logns remember_secsd">
                                        <input type="hidden" name="data[User][rememberme]" id="remember_sec_" value="0"/><input type="checkbox" name="data[User][rememberme]" value="1" id="remember_sec" class="check_rem"/>                                        <label for="remember_sec"><span><span></span></span>Remember Me</label>
                                    </div>
                                    <div class="col_tow_logns forgot_pass_sec">
                                        <a href="/users/forgotPassword">Forgot your Password?</a>                                    </div>
                                </div>
                                <div class="clear"></div>
                                

                                <div class="form-group login-btn" id="sub_btn_dive">
                                    <input type="submit" name="submit" value="Login" class="btn btn-primary"/>
                                </div>
                                <div class="btn_form_end_row" id="sub_btn_dive_loader" style={{display: "none"}}>
                                    <div class="btm_loader"> <img src="/img/loading.svg" alt=""/> Please wait...</div>
                                </div>
                            </div>
                            </form>                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
     </div> */}
      <div className="page_space login_logic">
        <div className="wrapper">
          <div className="pop_wraper_inner">
            <div className="pop_container">
              <div className="right_part_fulls">
                <div className="form_cont_inner">
                  <div className="login_section_full" id="loginf">
                    <h1 className="signn">LOGIN TO LOGICSPICE</h1>
                    {/* <div className="ee" id="errormessage">
                      {errors.email || errors.password}
                    </div> */}
                    <form
                      onSubmit={handleSubmit}
                      id="userlogin1"
                      method="post"
                      acceptCharset="utf-8"
                      noValidate
                    >
                      <div className="login_fieldarea">
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="fa fa-envelope"></i>
                            </span>
                            <input
                              name="data[User][email_address]"
                              className="form-control required email"
                              placeholder="Email address"
                              autoComplete="off"
                              type="text"
                              id="UserEmailAddress"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          {errors.email && (
                            <div className="error">{errors.email}</div>
                          )}
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="fa fa-key"></i>
                            </span>
                            <input
                              name="data[User][password]"
                              className="form-control required"
                              placeholder="Password"
                              autoComplete="off"
                              type="password"
                              id="UserPassword"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          {errors.password && (
                            <div className="error">{errors.password}</div>
                          )}
                        </div>
                        <div className="form-group">
                          <div className="col_tow_logns remember_secsd">
                            <input
                              type="checkbox"
                              name="data[User][rememberme]"
                              id="remember_sec"
                              className="check_rem"
                            />
                            <label htmlFor="remember_sec" className="rember__me">Remember Me</label>
                          </div>
                          {/* <div className="col_tow_logns forgot_pass_sec">
                            <a href="/users/forgotPassword">
                              Forgot your Password?
                            </a>
                          </div> */}
                        </div>
                        <div className="form-group login-btn" id="sub_btn_dive">
                          <input
                            type="submit"
                            name="submit"
                            value="Login"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                          />
                        </div>
                        {/* {isSubmitting && (
                          <div
                            className="btn_form_end_row"
                            id="sub_btn_dive_loader"
                          >
                            <div className="btm_loader">
                              <img src="/img/loading.svg" alt="" /> Please
                              wait...
                            </div>
                          </div>
                        )} */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
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
