"use client";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import "../../../elements.css";
import Billing from "@/app/Components/Billing";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import Cookies from "js-cookie";
import { Router } from "next/navigation";
// import "@fortawesome/fontawesome-free/css/all.css";
import "../../../../../../public/css/font-awesome.css"
import Image from "next/image";
import Link from "next/link";
import Contactusmodel from "@/app/Components/Contactusmodel";



const Page = ({ params }) => {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState(null);
  const [android, setAndroid] = useState(585.0);
  const [productPriceTot, setProductPriceTot] = useState(0);
  const [queryParameter, setQueryParameter] = useState(null);
  const [billingInitials, setBillingInitials] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);


  let checkedAndroid = useRef(false);
  let checkedIphone = useRef(false);
  let discountRemoved = useRef(false);

  const [billing, setBilling] = useState(false);

  const slug = params.slug;
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        document.querySelector(".main_cart_loader").style.display = "block";
        const response = await axios.get(BaseAPI + `/buynow/${slug}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setProductDetails(response.data.data);
        setProductPriceTot(response.data.data.currencyDetail.price);
        document.querySelector(".main_cart_loader").style.display = "none";
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const addAdditional = async (event, addPrice) => {
    document.querySelector("#loadercart").style.display = "block";

    const value = event.target.value;
    const id = event.target.id;
    let price = parseInt(document.querySelector("#tot_sec").innerText);
    const currencySym = productDetails.currencyDetail.currency_symbol;
    const currency = productDetails.currencyDetail.name;
    let discount = 0;
    let additionalPriceAndroid = productDetails.currencyDetail.android_app;
    let additionalPriceIphone = productDetails.currencyDetail.ios_app;
    let iphoneBasePrice = productDetails.currencyDetail.ios_app;
    let androidBasePrice = productDetails.currencyDetail.android_app;
    let appTotalPrice = iphoneBasePrice + androidBasePrice;

    let appTotalDiscountedPrice = Math.ceil(
      (appTotalPrice * productDetails.app_combo) / 100
    );
    // total -= Math.ceil(appTotalDiscountedPrice);
    if (!event.target.checked) {
      document.querySelector(`#additional_${value}`).remove();

      // if (
      //   (id === "remember-in-inline-ios" ||
      //     id === "remember-in-inline-android") &&
      //   (document.querySelector("#remember-in-inline-ios").checked ||
      //     document.querySelector("#remember-in-inline-android").checked)
      // ) {
      //   document.querySelector("#additional_discount").remove();
      //   price += 176;
      // }

      // In case android and iphone both are unchecked.
      if (checkedAndroid || checkedIphone) {
        if (!checkedAndroid.current || !checkedIphone.current) {
          console.log(
            price,
            appTotalDiscountedPrice,
            addPrice,
            "price, appTotalDiscountedPrice, addPrice"
          );

          if (document.querySelector("#additional_discount"))
            document.querySelector("#additional_discount").remove();

          if (!discountRemoved.current) {
            price = price + appTotalDiscountedPrice;
          }

          // if (discountRemoved.current) {
          //   document.querySelector("#tot_sec").innerText = price - addPrice;
          //   setProductPriceTot((prev) => prev - parseInt(addPrice));
          // } else {

          //   document.querySelector("#tot_sec").innerText =
          //     price + appTotalDiscountedPrice - addPrice;
          //   setProductPriceTot((prev) => prev - parseInt(addPrice));
          // }

          discountRemoved.current = true;

          // document.querySelector("#tot_sec").innerText =
          //   price + appTotalDiscountedPrice - addPrice;
          // setProductPriceTot((prev) => prev - parseInt(addPrice));
        }
      }

      document.querySelector("#tot_sec").innerText = price - addPrice;
      setProductPriceTot((prev) => prev - parseInt(addPrice));

      // if (checkedAndroid && checkedIphone) {

      //   if (!checkedAndroid.current) {

      //     console.log('is Android false')

      //     if (discountRemoved.current) {
      //       document.querySelector("#tot_sec").innerText = price - addPrice;
      //       setProductPriceTot((prev) => prev - parseInt(addPrice));
      //     } else {
      //       document.querySelector("#tot_sec").innerText =
      //         price + appTotalDiscountedPrice - addPrice;
      //       setProductPriceTot((prev) => prev - parseInt(addPrice));
      //     }

      //     discountRemoved.current = true;
      //   }

      //   if (!checkedIphone.current) {

      //     console.log('is ios false')

      //     // if(document.querySelector("#additional_discount"))
      //     //   document.querySelector("#additional_discount").remove();

      //     if (discountRemoved.current) {
      //       document.querySelector("#tot_sec").innerText = price - addPrice;
      //       setProductPriceTot((prev) => prev - parseInt(addPrice));
      //     } else {
      //       document.querySelector("#tot_sec").innerText =
      //         price + appTotalDiscountedPrice - addPrice;

      //       setProductPriceTot((prev) => prev - parseInt(addPrice));
      //     }
      //     discountRemoved.current = true;
      //   }

      //   if(!discountRemoved.current){
      //     if(document.querySelector("#additional_discount"))
      //       document.querySelector("#additional_discount").remove();
      //   }

      // }
    } else {
      if (checkedAndroid.current && checkedIphone.current) discount = 1;

      const data = {
        type: productDetails.productType,
        addId: value,
        price: price,
        currencySym: currencySym,
        currency: currency,
        discount: discount,
        slug: slug,
      };

      try {
        const response = await axios.post(
          BaseAPI + "/softwares/addAdditional",
          data
        );
        document.querySelector("#offeer_sec").innerHTML += response.data;

        console.log(addPrice);
        console.log(price);

        var total = parseInt(addPrice) + price;

        if (
          (id === "remember-in-inline-ios" ||
            id === "remember-in-inline-android") &&
          checkedIphone.current &&
          checkedAndroid.current
        ) {
          total -= Math.ceil(appTotalDiscountedPrice);
          console.log(appTotalDiscountedPrice, "appTotalDiscountedPrice");
          // total -= 175.5;
        }

        setProductPriceTot((prev) => prev + parseInt(addPrice));
        document.querySelector("#tot_sec").innerText = total.toFixed(2);
      } catch (error) {
        console.error("Error submitting form:", error.message);
      }
    }

    document.querySelector("#loadercart").style.display = "none";
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    // Manually construct the form data
    formData.append("_method", "POST");

    // Assuming you have logic to set these values
    // formData.append("data[Additional][ids][]", "11"); // Example value
    // formData.append("data[Additional][ids][]", ""); // Empty value

    formData.append("data[Product][custom_price]", "");
    formData.append("data[Product][custom_message]", "");
    formData.append("data[Product][submit_con]", "0");
    formData.append("data[Product][product_name]", productDetails.productType);
    formData.append(
      "data[Product][product_price]",
      productDetails.currencyDetail.price
    );
    formData.append("data[Product][product_price_tot]", productPriceTot);
    formData.append("data[Product][custom_price_val]", "0");
    console.log("Form submitted");
    try {
      const response = await axios.post(
        BaseAPI + "/softwares/buynowpost",
        formData
      );

      // setBilling(true);
      setBillingInitials(response.data);
      // if(billingInitials.length > 0){
      //   Cookies.set("billing", JSON.stringify(billingInitials));
      // }
      Cookies.set("addArray", JSON.stringify(response.data.addArray));
      Cookies.set(
        "additionalPoints",
        JSON.stringify(response.data.additionalPoints)
      );
      // Cookies.set("countries", JSON.stringify(response.data.countries));
      Cookies.set(
        "currencyDetail",
        JSON.stringify(response.data.currencyDetail)
      );
      Cookies.set("productType", JSON.stringify(response.data.productType));
      // localStorage.setItem("countries", JSON.stringify(response.data.countries));
      // sessionStorage.setItem("countries", JSON.stringify(response.data.countries));

      // Cookies.set("initials", JSON.stringify(response.data));
      router.push("/billing");
    } catch (err) {
      console.error("Error submitting form:", err.message);
    }
  };

  const applyDiscount = async () => {
    let discountData = {
      coupon_code: couponDiscount.coupon_code,
      payment_gateway: "paypal",
      product_name: billingInitials?.productType,
      // total_amount: totalPrice.current,
      total_amount: totalCost,
      currencySym: billingInitials?.currencyDetail.currency_symbol,
      currency: billingInitials?.currencyDetail.name,
      slug: billingInitials?.currencyDetail.product_name,
    };

    try {
      const response = await axios.post(
        BaseAPI + "/softwares/discount",
        discountData
      );

      console.log(response);

      if (response.data.status == 200) {
        // setFormData((pre) => ({
        //   ...pre,
        //   cost: response.data.data.total_amount,
        //   discount: response.data.data.discount_price,
        //   total_cost: response.data.data.charge_amount,
        // }));

        console.log(response.data.html);
        discountHtml.current = response.data.html;

        if (discountHtml.current !== "") {
          const offerElement = document.querySelector("#ofer_finl"); // Corrected selector
          if (offerElement) {
            offerElement.innerHTML = discountHtml.current;
          } else {
            console.error("Element #ofer_finl not found in the DOM.");
          }
        }

        // $('#ofer_finl').html(response.data.html)
      }

      setMessage(response.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="buy_now_software">
      <section className="breadcrems_header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Software Order</h1>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Buy Now
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <div className="main_cart_loader" id="loadercart">
        <Image width={100} height={100} src="/img/loader_large_blue.gif" alt="" />
      </div>

      {productDetails && (
        <section className="order_summarty">
          <div className="container">
            <div className="order_summarty_inner">
              {!billing && (
                <>
                  <div class="SubscribePlan">
                    <h3>
                      Monthly Subscription plan of{" "}
                      <span>
                        $45/<small>mo</small>
                      </span>
                    </h3>
                    <div class="SubscribeBtn">
                      <form
                        action="https://www.paypal.com/cgi-bin/webscr"
                        method="post"
                        target="_top"
                      >
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input
                          type="hidden"
                          name="hosted_button_id"
                          value="ZWM436F2HGX3C"
                        />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input
                          class="SubscribleBtn"
                          type="submit"
                          src=""
                          border="0"
                          name="submit"
                          title="PayPal - The safer, easier way to pay online!"
                          alt="Subscribe"
                          value="Buy Now"
                        />
                      </form>
                    </div>
                  </div>
                </>
              )}

              <form
                id="offerForm"
                onSubmit={submitForm}
                encType="multipart/form-data"
                method="post"
                acceptCharset="utf-8"
                noValidate
              >
                <div className="order_title">
                  <h4 className="titke">
                    You’ve added {productDetails.productType} Software
                  </h4>
                </div>
                <div className="order_summarty_right">
                  <div className="order_summarty_right_inner">
                    <div className="order_title">Order Summary</div>
                    <div className="order_wrap">
                      <div id="offeer_sec">
                        <div className="order_wrap_row" id="and_sec">
                          <div className="order_wrap_left">
                            <span className="basi_title">
                              {productDetails.productType}
                            </span>
                            <br />
                            (Web Version)
                          </div>
                          <div className="order_wrap_right">
                            {productDetails.currencyDetail.currency_symbol}
                            <span id="and_price">
                              {productDetails.currencyDetail.price}
                            </span>{" "}
                            {productDetails.currencyDetail.name}
                          </div>
                        </div>
                        <div id="custom_sec"></div>
                      </div>
                      <div id="ofer_nw">
                        <div className="order_wrap_row">
                          <div className="order_wrap_left">
                            <span className="basi_title">Total</span>
                          </div>
                          <div className="order_wrap_right">
                            {productDetails.currencyDetail.currency_symbol}
                            <span id="tot_sec">
                              {productDetails.currencyDetail.price}
                            </span>{" "}
                            {productDetails.currencyDetail.name}
                          </div>
                        </div>
                      </div>
                     
                      <div className="off_sect">
                        <span id="show" className="drop drop_left">
                          We Offer Money Back Guarantee{" "}
                          <i className="question_icon"></i>
                          <div className="drop_contanet drop_left_content">
                            <span id="hide"></span>
                            Yes, we provide a 30 days money back guarantee to
                            ensure customer satisfaction with our software. If,
                            for any reason, you decide to stop using the
                            product, you can request a refund. We will reimburse
                            the entire amount, excluding the installation and
                            configuration charges, which are either USD 65 or
                            20% of the application cost, whichever is higher.
                            Please note that the money back guarantee does not
                            apply to customers who have received updates as per
                            their specific requests, taking into account the
                            significant efforts and time invested by the team
                            for their project.
                          </div>
                        </span>
                        <div className="pay_pri_term">
                          For more detail visit following pages
                          <Link
                            href="/privacy-policy"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Privacy Policy
                          </Link>{" "}
                          and
                          <Link
                            href="/terms-of-use"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Terms Of Use
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order_summarty_left">
                  <div className="oder_inner">
                    <div className="order_addonStep">
                      {productDetails.additionalPoints.map((additional) => (
                        <div className="addonStep_row" key={additional.id}>
                          <div className="addonStep_row_inner">
                            <div className="right_input">
                              <div className="form__remember">
                                <input
                                  type="checkbox"
                                  name="data[Additional][ids][]"
                                  id={`remember-in-inline${additional.id}`}
                                  className="in-checkbox"
                                  onClick={(e) =>
                                    addAdditional(e, additional.price)
                                  }
                                  value={additional.id}
                                />
                                <label
                                  htmlFor={`remember-in-inline${additional.id}`}
                                  className="in-label"
                                ></label>
                              </div>
                            </div>
                            <div className="input_des">
                              {additional.name}
                              <span className="row_des">
                                ({additional.subtitle})
                              </span>
                            </div>
                            <div className="input_rate">
                              <span className="rate">
                                {productDetails.currencyDetail.currency_symbol}
                                {additional.price}{" "}
                                {productDetails.currencyDetail.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                      {productDetails.currencyDetail.android_app !== null && (
                        <>
                          <div className="addonStep_row" key="2">
                            <div className="addonStep_row_inner">
                              <div className="right_input">
                                <div className="form__remember">
                                  <input
                                    type="checkbox"
                                    name="data[Additional][ids][]"
                                    id="remember-in-inline-android"
                                    className="in-checkbox"
                                    checked={checkedAndroid.current}
                                    onClick={(e) => {
                                      (checkedAndroid.current =
                                        !checkedAndroid.current),
                                        addAdditional(
                                          e,
                                          productDetails.currencyDetail
                                            .android_app
                                        );
                                    }}
                                    value="android"
                                  />
                                  <label
                                    htmlFor="remember-in-inline-android"
                                    className="in-label"
                                  ></label>
                                </div>
                              </div>
                              <div className="input_des">Android App</div>
                              <div className="input_rate">
                                <span className="rate">
                                  {
                                    productDetails.currencyDetail
                                      .currency_symbol
                                  }
                                  {productDetails.currencyDetail.android_app}{" "}
                                  {productDetails.currencyDetail.name}
                                </span>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {productDetails.currencyDetail.android_app !== null && (
                        <>
                          <div className="addonStep_row" key="2">
                            <div className="addonStep_row_inner">
                              <div className="right_input">
                                <div className="form__remember">
                                  <input
                                    type="checkbox"
                                    name="data[Additional][ids][]"
                                    id="remember-in-inline-ios"
                                    className="in-checkbox"
                                    checked={checkedIphone.current}
                                    onClick={(e) => {
                                      (checkedIphone.current =
                                        !checkedIphone.current),
                                        addAdditional(
                                          e,
                                          productDetails.currencyDetail.ios_app
                                        );
                                    }}
                                    value="iphone"
                                  />
                                  <label
                                    htmlFor="remember-in-inline-ios"
                                    className="in-label"
                                  ></label>
                                </div>
                              </div>
                              <div className="input_des">iPhone App</div>
                              <div className="input_rate">
                                <span className="rate">
                                  {
                                    productDetails.currencyDetail
                                      .currency_symbol
                                  }
                                  {productDetails.currencyDetail.ios_app}{" "}
                                  {productDetails.currencyDetail.name}
                                </span>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="action_btn ">
                    <button
                      type="submit"
                      className="custom_btn btn btn-primary"
                      // onClick={submitForm}
                    >
                    Continue
                    </button>
                  </div>
                </div>

                {/* <div className="order_summarty_right">
                  <div className="order_summarty_right_inner">
                    <div className="order_title">Order Summary</div>
                    <div className="order_wrap">
                      <div id="offeer_sec">
                        <div className="order_wrap_row" id="and_sec">
                          <div className="order_wrap_left">
                            <span className="basi_title">
                              {productDetails.productType}
                            </span>
                            <br />
                            (Web Version)
                          </div>
                          <div className="order_wrap_right">
                            {productDetails.currencyDetail.currency_symbol}
                            <span id="and_price">
                              {productDetails.currencyDetail.price}
                            </span>{" "}
                            {productDetails.currencyDetail.name}
                          </div>
                        </div>
                        <div id="custom_sec"></div>
                      </div>
                      <div id="ofer_nw">
                        <div className="order_wrap_row">
                          <div className="order_wrap_left">
                            <span className="basi_title">Total</span>
                          </div>
                          <div className="order_wrap_right">
                            {productDetails.currencyDetail.currency_symbol}
                            <span id="tot_sec">
                              {productDetails.currencyDetail.price}
                            </span>{" "}
                            {productDetails.currencyDetail.name}
                          </div>
                        </div>
                      </div>
                     
                      <div className="off_sect">
                        <span id="show" className="drop drop_left">
                          We Offer Money Back Guarantee{" "}
                          <i className="question_icon"></i>
                          <div className="drop_contanet drop_left_content">
                            <span id="hide"></span>
                            Yes, we provide a 30 days money back guarantee to
                            ensure customer satisfaction with our software. If,
                            for any reason, you decide to stop using the
                            product, you can request a refund. We will reimburse
                            the entire amount, excluding the installation and
                            configuration charges, which are either USD 65 or
                            20% of the application cost, whichever is higher.
                            Please note that the money back guarantee does not
                            apply to customers who have received updates as per
                            their specific requests, taking into account the
                            significant efforts and time invested by the team
                            for their project.
                          </div>
                        </span>
                        <div className="pay_pri_term">
                          For more detail visit following pages
                          <Link
                            href="/privacy-policy"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Privacy Policy
                          </Link>{" "}
                          and
                          <Link
                            href="/terms-of-use"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Terms Of Use
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </form>
            </div>
          </div>
        </section>
      )}
      </div>
    

<div className="quoue_box_full_sec">
        <div className="whatsapp-call">
          <a
            href="https://api.whatsapp.com/send?phone=+919829559922&amp;text=Hi Logicspice Team, I have a question regarding the solutions you provide. Please Help!"
            target="_blank"
          >
            <Image
              unoptimized={true}
              width={50}
              height={50}
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
