// import React from 'react'

// const Carrentaltab = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Carrentaltab

import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrentaltab = () => {
  const [activeTab, setActiveTab] = useState("tab8");
  const [activeSubTab, setActiveSubTab] = useState("tab6");

  const handleMainTabClick = (tab) => {
    setActiveTab(tab);
    setActiveSubTab("tab6");
  };

  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const handleSubTabClick = (subTab) => {
    setActiveSubTab(subTab);
  };

  return (
    <div className="features-tab">
      <div className="clearfix">
        <ul className="nav nav-tabs" role="tablist">
          <li
            id="tab8_li"
            className={activeTab === "tab8" ? "active ddlj" : "ddlj"}
            onClick={() => handleMainTabClick("tab8")}
          >
            <a href="javascript:void(0)">Customer Mode</a>
          </li>
          <li
            id="tab9_li"
            className={activeTab === "tab9" ? "active ddlj" : "ddlj"}
            onClick={() => handleMainTabClick("tab9")}
          >
            <a href="javascript:void(0)">Rental Owner Mode</a>
          </li>
          <li
            id="tab10_li"
            className={activeTab === "tab10" ? "active ddlj" : "ddlj"}
            onClick={() => handleMainTabClick("tab10")}
          >
            <a href="javascript:void(0)">Admin Mode</a>
          </li>
        </ul>

        <div className="tab-content main-tab-feat">
          <div
            className={`costomer_tab tab-pane rj ${
              activeTab === "tab8" ? "active" : ""
            }`}
            id="tab8"
          >
            <ul className="nav nav-tabs" role="tablist">
              <li
                id="tab6_li"
                className={activeSubTab === "tab6" ? "active ddlj" : "ddlj"}
                onClick={() => handleSubTabClick("tab6")}
              >
                <a href="javascript:void(0)">Features</a>
              </li>
              <li
                id="tab7_li"
                className={activeSubTab === "tab7" ? "active ddlj" : "ddlj"}
                onClick={() => handleSubTabClick("tab7")}
              >
                <a href="javascript:void(0)">Screen Shot</a>
              </li>
            </ul>

            <div className="tab-content">
              <div
                className={`costomer_tab tab-pane rj ${
                  activeSubTab === "tab6" ? "active" : ""
                }`}
                id="tab6"
              >
                <div className="row">
                  <div className="col-sm-3">
                    <FeatureDetail
                      src="/img/customsolutions/social-media-login.png"
                      alt="Social Media Login"
                      title="Social Media Login"
                      description="Customer can sign up/login easily using social media accounts like Facebook and Google."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/modular-home-page.png"
                      alt="Modular Home Page"
                      title="Modular Home Page"
                      description="Homepage would show the popular Rental Cars so that Customer doesn't need to search."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/advanced-search-feature.png"
                      alt="Advanced Search Feature"
                      title="Advanced Search Feature"
                      description="Customer can search for cars to rent using the type and location of car they want."
                    />
                  </div>
                  <div className="col-sm-3">
                    <FeatureDetail
                      src="/img/customsolutions/simple-car-listing.png"
                      alt="Simple Car Listing"
                      title="Simple Car Listing"
                      description="Customer can see the list of cars according to his search and filter them to his needs."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/car-details.png"
                      alt="Car Details"
                      title="Car Details"
                      description="Customer can view the details of the car which would include the price, built, Model, availability etc."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/calendar-feature.png"
                      alt="Calendar Feature"
                      title="Calendar Feature"
                      description="Customer can see the availability of the car on a calendar and book it using the same."
                    />
                  </div>
                  <div className="col-sm-3">
                    <FeatureDetail
                      src="/img/customsolutions/rating-feature.png"
                      alt="Rating Feature"
                      title="Rating Feature"
                      description="Customer can see the rating of different cars given by other customers which helps to choose best."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/book-instantly.png"
                      alt="Book Instantly"
                      title="Book Instantly"
                      description="Customer can book the car instantly if the car is available and get your booking confirmed."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/advanced-booking.png"
                      alt="Advanced Booking"
                      title="Advanced Booking"
                      description="Customer can book the car if it is available by entering the date and time at which they wants to rent."
                    />
                  </div>
                  <div className="col-sm-3">
                    <FeatureDetail
                      src="/img/customsolutions/location-delivery.png"
                      alt="Location Delivery"
                      title="Location Delivery"
                      description="Customer can enter the location from where they want the car to be delivered from where they can rent it."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/secure-payment.png"
                      alt="Secure Payment"
                      title="Secure Payment"
                      description="Customer can pay for the rent of the car by paying safely through an integrated payment gateway."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/Booking-Details.png"
                      alt="Booking Details"
                      title="Booking Details"
                      description="Customers can view their booking history and upcoming booking in different sections."
                    />
                  </div>
                </div>
              </div>
              <div
                className={`costomer_tab tab-pane rj ${
                  activeSubTab === "tab7" ? "active" : ""
                }`}
                id="tab7"
              >
                <div>
                  <Slider {...settings}>
                    <div className="SliderMainBx">
                      <Image
                        width={1500}
                        height={100 / (100 / 100)}
                        src="/img/customsolutions/book-a-car.jpg"
                        alt="book-a-car"
                      />
                    </div>
                    <div className="SliderMainBx">
                      <Image
                        width={1500}
                        height={100 / (100 / 100)}
                        src="/img/customsolutions/booking-confirm.jpg"
                        alt="booking-confirm"
                      />
                    </div>
                    <div className="SliderMainBx">
                      <Image
                        width={1500}
                        height={100 / (100 / 100)}
                        src="/img/customsolutions/car-detail.jpg"
                        alt="car-detail"
                      />
                    </div>
                    <div className="SliderMainBx">
                      <Image
                        width={1500}
                        height={100 / (100 / 100)}
                        src="/img/customsolutions/search-result.jpg"
                        alt="search-result"
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`costomer_tab tab-pane rj ${
              activeTab === "tab9" ? "active" : ""
            }`}
            id="tab9"
          >
            <ul className="nav nav-tabs" role="tablist">
              <li
                id="tab6_li"
                className={activeSubTab === "tab6" ? "active ddlj" : "ddlj"}
                onClick={() => handleSubTabClick("tab6")}
              >
                <a href="javascript:void(0)">Features</a>
              </li>
              <li
                id="tab7_li"
                className={activeSubTab === "tab7" ? "active ddlj" : "ddlj"}
                onClick={() => handleSubTabClick("tab7")}
              >
                <a href="javascript:void(0)">Screen Shot</a>
              </li>
            </ul>

            <div className="tab-content">
              <div
                className={`costomer_tab tab-pane rj ${
                  activeSubTab === "tab6" ? "active" : ""
                }`}
                id="tab6"
              >
                <div className="row">
                  <div className="col-sm-3">
                    <FeatureDetail
                      src="/img/customsolutions/social-media-login.png"
                      alt="Social Media Login"
                      title="Social Media Login"
                      description="Rental Owner can sign up/login easily using social media accounts like Facebook and Google."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/account-verification.png"
                      alt="Account Verification"
                      title="Account Verification"
                      description="All the Rental Owners will have to be verified by the admin before they can login to the websites."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/rental-car-management.png"
                      alt="Rental Car Management"
                      title="Rental Car Management"
                      description="Rental Owners can maintain the list of cars they have uploaded and can add or remove them."
                    />
                  </div>
                  <div className="col-sm-3">
                    <FeatureDetail
                      src="/img/customsolutions/rental-request-management.png"
                      alt="Rental Request Management"
                      title="Rental Request Management"
                      description="Rental Owners can manage the requests received by them on different cars they have added."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/interactive-dashboard.png"
                      alt="Interactive Dashboard"
                      title="Interactive Dashboard"
                      description="Rental Owners will have an interactive dashboard from where they can view their cars and requests."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/dashboard-statistics.png"
                      alt="Dashboard Statistics"
                      title="Dashboard Statistics"
                      description="Rental Owners can see the statistics like no. of cars, no. of requests etc."
                    />
                  </div>
                  <div className="col-sm-3">
                    <FeatureDetail
                      src="/img/customsolutions/notifications-emails.png"
                      alt="Notifications & Emails"
                      title="Notifications & Emails"
                      description="Rental Owners can receive Notifications and emails regarding the requests on the cars."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/manage-availability.png"
                      alt="Rating And Feedback"
                      title="Rating And Feedback"
                      description="Rental Owners can easily manage the availability of the cars that they have posted for rent."
                    />
                    
                  </div>
                  <div className="col-sm-3">
                    <FeatureDetail
                      src="/img/customsolutions/Booking-Details.png"
                      alt="booking details"
                      title="Booking details"
                      description="Rental Owners can view their booking history in one place"
                    />
                    <FeatureDetail
                      src="/img/customsolutions/track-vehicle-location.png"
                      alt="Track Vehicle Location"
                      title="Track Vehicle Location"
                      description="Owner can track their vehicle at real time, past time or present time."
                    />
                    
                  </div>
                </div>
              </div>
              <div
                className={`costomer_tab tab-pane rj ${
                  activeSubTab === "tab7" ? "active" : ""
                }`}
                id="tab7"
              >
                <div>
                  <Slider {...settings}>
                    <div className="SliderMainBx">
                      <Image
                        width={1500}
                        height={100 / (100 / 100)}
                        src="/img/customsolutions/care-request.jpg"
                        alt="book-a-car"
                      />
                    </div>
                    <div className="SliderMainBx">
                      <Image
                        width={1500}
                        height={100 / (100 / 100)}
                        src="/img/customsolutions/track-ehicle-ocation.jpg"
                        alt="booking-confirm"
                      />
                    </div>
                    <div className="SliderMainBx">
                      <Image
                        width={1500}
                        height={100 / (100 / 100)}
                        src="/img/customsolutions/manage-car.jpg"
                        alt="car-detail"
                      />
                    </div>
                    <div className="SliderMainBx">
                      <Image
                        width={1500}
                        height={100 / (100 / 100)}
                        src="/img/customsolutions/manage-locations.jpg"
                        alt="search-result"
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`costomer_tab tab-pane rj ${
              activeTab === "tab10" ? "active" : ""
            }`}
            id="tab10"
          >
            <ul className="nav nav-tabs" role="tablist">
              <li
                id="tab6_li"
                className={activeSubTab === "tab6" ? "active ddlj" : "ddlj"}
                onClick={() => handleSubTabClick("tab6")}
              >
                <a href="javascript:void(0)">Features</a>
              </li>
              <li
                id="tab7_li"
                className={activeSubTab === "tab7" ? "active ddlj" : "ddlj"}
                onClick={() => handleSubTabClick("tab7")}
              >
                <a href="javascript:void(0)">Screen Shot</a>
              </li>
            </ul>

            <div className="tab-content">
              <div
                className={`costomer_tab tab-pane rj ${
                  activeSubTab === "tab6" ? "active" : ""
                }`}
                id="tab6"
              >
                <div className="row">
                  <div className="col-sm-3">
                    <FeatureDetail
                      src="/img/customsolutions/configuration.png"
                      alt="Configuration"
                      title="Configuration"
                      description="Admin can configure the app/website through the configuration section."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/customer-management.png"
                      alt="Customer Management"
                      title="Customer Management"
                      description="Admin can manage the list of customers and add/edit/delete them"
                    />
                   
                  </div>
                  <div className="col-sm-3">
                    <FeatureDetail
                      src="/img/customsolutions/rental-owner-management.png"
                      alt="Rental Owner Management"
                      title="Rental Owner Management"
                      description="Admin can manage the list of rental owners and add/edit/delete them."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/statistics.png"
                      alt="Statistics"
                      title="Statistics"
                      description="Admin can see the statistics on the dashboard which would include the total customers, total rental owners, total booking requests etc"
                    />
                    
                  </div>
                  <div className="col-sm-3">
                    <FeatureDetail
                      src="/img/customsolutions/vehicle-management.png"
                      alt="Vehicle Management"
                      title="Vehicle Management"
                      description="Admin can manage the list of brand and model of cars that a rental owner selects while posting the car."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/transaction-management.png"
                      alt="Transaction Managementt"
                      title="Transaction Management"
                      description="Admin can view the list of transactions that took place over the website/app."
                    />
                    
                  </div>
                  <div className="col-sm-3">
                    <FeatureDetail
                      src="/img/customsolutions/content-management.png"
                      alt="Content Management"
                      title="Content Management"
                      description="Admin can easily manage the static content of the website pages."
                    />
                    <FeatureDetail
                      src="/img/customsolutions/review-management.png"
                      alt="Review Management"
                      title="Review Management"
                      description="Admin can view a list of reviews that were given and delete them if they find it inappropriate."
                    />
                    
                  </div>
                </div>
              </div>
              <div
                className={`costomer_tab tab-pane rj ${
                  activeSubTab === "tab7" ? "active" : ""
                }`}
                id="tab7"
              >
                <div>
                  <Slider {...settings}>
                    <div className="SliderMainBx">
                      <Image
                        width={1500}
                        height={100 / (100 / 100)}
                        src="/img/customsolutions/vehicle-management.jpg"
                        alt="book-a-car"
                      />
                    </div>
                    <div className="SliderMainBx">
                      <Image
                        width={1500}
                        height={100 / (100 / 100)}
                        src="/img/customsolutions/customer-managment.jpg"
                        alt="booking-confirm"
                      />
                    </div>
                    <div className="SliderMainBx">
                      <Image
                        width={1500}
                        height={100 / (100 / 100)}
                        src="/img/customsolutions/rental-owner-management.jpg"
                        alt="car-detail"
                      />
                    </div>
                    <div className="SliderMainBx">
                      <Image
                        width={1500}
                        height={100 / (100 / 100)}
                        src="/img/customsolutions/statistics.jpg"
                        alt="search-result"
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureDetail = ({ src, alt, title, description }) => (
  <div className="details_features_wrp" style={{ marginBottom: "20px" }}>
    <div className="details_features">
      <div className="icon_round">
        <Image width={60} height={100} src={src} alt={alt} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default Carrentaltab;
