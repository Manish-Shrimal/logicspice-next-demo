"use client";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import "@/app/(softwares)/softwares.css";
import Image from "next/image";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Contactusmodel from "@/app/Components/Contactusmodel";
import Enquirymodal from "@/app/Components/Enquirymodal";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
// import "../../../../public/css/font-awesome.min.css";
import "../../../../public/css/font-awesome.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../resposive.css";
import Whylogicspice from "@/app/Components/Whylogicspice";
import Reviewmodals from "@/app/Components/Reviewmodals";
import { Modal, ModalBody } from "react-bootstrap";
import axios from "axios";
import BaseAPI from "@/app/BaseAPI/BaseAPI";
import SoftwareEnquiry from "@/app/Components/SoftwareEnquiry";
import GetDemoEnquiry from "@/app/Components/GetDemoEnquiry";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [jobportal, setJobportal] = useState(false);
  const [buyjobportal, setBuyJobportal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [demoAccessModal, setDemoAccessModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleJobPortalModal = () => setJobportal(!jobportal);
  const toggleBuyJobPortalModal = () => setBuyJobportal(!buyjobportal);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  const openModal = () => {
    // console.log(showModal);

    setShowModal(!showModal);
  };
  const openDemoAccessModal = () => {
    // console.log(showModal);

    setDemoAccessModal(!demoAccessModal);
  };
  const openReviewModel = () => {
    setShowReviewModal(!showReviewModal);
  };

  const [pageData, setPageData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        BaseAPI + "/product/Details/job-board-software"
      );
      // console.log(response.data.data)
      setPageData(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <section class="fd-solution">
        <div class="container">
          <div class="row">
            <div class="col-md-5 hidden-sm hidden-xs">
              <Image
                unoptimized={true}
                width={450}
                height={100 / (100 / 100)}
                src="/img/Onlinefoodorderingsystem/fd-hand.png"
                alt="Online Food Ordering System"
              />
            </div>
            <div class="col-md-7 col-sm-12">
              <h1>Online Food Ordering System Built For Your Restaurant</h1>
              <div class="poweredBy">
                <ul>
                  <li>
                    <span>
                      <Image
                        unoptimized={true}
                        width={30}
                        height={100 / (100 / 100)}
                        src="/img/Onlinefoodorderingsystem/fd-arrow.png"
                        alt="#"
                      />
                    </span>{" "}
                    Your Brand
                  </li>
                  <li>
                    <span>
                      <Image
                        unoptimized={true}
                        width={30}
                        height={100 / (100 / 100)}
                        src="/img/Onlinefoodorderingsystem/fd-arrow.png"
                        alt="#"
                      />
                    </span>{" "}
                    Your Customers
                  </li>
                  <li>
                    <span>
                      <Image
                        unoptimized={true}
                        width={30}
                        height={100 / (100 / 100)}
                        src="/img/Onlinefoodorderingsystem/fd-arrow.png"
                        alt="#"
                      />
                    </span>{" "}
                    Your System
                  </li>
                </ul>
                <p class="free-trial">
                  <a
                    class="btn btn-primary"
                    href="https://old.logicspice.com/pages/contact"
                  >
                    Start 15 Days Free Trial
                  </a>
                </p>
              </div>
              <h2 class="red-strip">
                Highlights of Our Online Food Ordering System
              </h2>
              <ul class="fd-list-top">
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={15}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/right-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  Hassle Free Hosted Solution
                </li>
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={15}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/right-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  No coding required
                </li>
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={15}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/right-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  Affordable &amp; Low Cost
                </li>
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={15}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/right-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  No Commission
                </li>
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={15}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/right-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  Can be integrated with your website
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="red-system-app">
        <div class="container">
          <p>
            This restaurant online ordering system allow your customers to order
            food from website or mobile app. Get rid of the old system and build
            customers online.
          </p>
        </div>
      </section>
      <section class="advance-unique">
        <div class="container">
          <h2>
            Have a look on the advance and unique set of features that are
            powered in our Online Food Ordering System
          </h2>
          <div class="row">
            <div class="col-sm-4">
              <div class="fd-feature">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/Onlinefoodorderingsystem/fds-icon-1.png"
                  alt="#"
                />
                <h3>Favorites Feature</h3>
                <p>
                  Customers can add their favorite food items and orders to a
                  list so that they can repeat order easily.
                </p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="fd-feature">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/Onlinefoodorderingsystem/fds-icon-2.png"
                  alt="#"
                />
                <h3>Order Tracking</h3>
                <p>
                  Customer can track order status which would be updated by
                  restaurants.
                </p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="fd-feature">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/Onlinefoodorderingsystem/fds-icon-3.png"
                  alt="#"
                />
                <h3>Thumbs Up/Thumbs Down Feature</h3>
                <p>
                  Customer can thumbs up if they like the food or thumbs down if
                  they don’t like the food.
                </p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="fd-feature">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/Onlinefoodorderingsystem/fds-icon-4.png"
                  alt="#"
                />
                <h3>Custom Order Status</h3>
                <p>
                  Restaurant owners can add multiple custom order status and
                  update them for customer&apos;s ease.
                </p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="fd-feature">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/Onlinefoodorderingsystem/fds-icon-5.png"
                  alt="#"
                />
                <h3>Review/Rating Feature</h3>
                <p>
                  Customers can rate the restaurant and give them review after
                  food is delivered.
                </p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="fd-feature">
                <Image
                  unoptimized={true}
                  width={100}
                  height={100}
                  src="/img/Onlinefoodorderingsystem/fds-icon-6.png"
                  alt="#"
                />
                <h3>Pick up feature</h3>
                <p>
                  Customer can either pick up food from restaurant or get
                  delivered their food at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="fd-mapps">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <h2>Mobile Apps</h2>
              <p>
                Get android &amp; iPhone mobile app for your restaurant ordering
                system so customers can order food directly from the mobile app.
                Your food ordering app will include your business logo, business
                detail and food menu.{" "}
              </p>
            </div>
            <div class="col-sm-6" align="right">
              <Image
                unoptimized={true}
                width={450}
                height={100 / (100 / 100)}
                src="/img/Onlinefoodorderingsystem/fd-ma-mobile.png"
                alt="Food Ordering System : Mobile app"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="fd-work-task">
        <div class="container">
            <div className="CustomerApp">
            <div class="row">
            <div class="col-sm-6 pull-right" align="right">
              <Image
                unoptimized={true}
                width={300}
                height={100 / (100 / 100)}
                src="/img/Onlinefoodorderingsystem/fd-ordring-app.png"
                alt="Food Ordering System : Customer App"
              />
            </div>
            <div class="col-sm-6 pull-left">
              <h2>Customer App</h2>
              <p>
                Native app which can be download from play store. Let users
                order food from Android or iOS app.
              </p>
              <ul>
                <li>
                  Your app with logo, icon, images and upload them to play store
                </li>
                <li>Simply order and get delivery at home</li>
                <li>
                  Send push notifications to user to keep track of any order
                </li>
                <li>Allow users to login through facebook, google.</li>
                <li>Locate users with geolocation or by address.</li>
                <li>Private label app</li>
              </ul>
            </div>
          </div>
            </div>
          
          <div class="row">
            <div class="col-sm-6">
              <Image
                unoptimized={true}
                width={300}
                height={100 / (100 / 100)}
                src="/img/Onlinefoodorderingsystem/fd-business-app.png"
                alt="Food Ordering System : Restaurant Owner App"
              />
            </div>
            <div class="col-sm-6">
              <h2>Restaurant Owner App</h2>
              <p>
                Business owners will have the native app to accept or reject the
                order. Check delivery route and change the restaurant status.
              </p>
              <ul>
                <li>
                  Orders Management : Accept or reject orders and send
                  confirmation mail.
                </li>
                <li>
                  Push Notifications : Receive push notifications when any order
                  arrives.
                </li>
                <li>
                  Map : View map of the location directly in your mobile app by
                  integrating google map.
                </li>
                <li>
                  Order details : Save all the order details i.e. customer
                  details, contact no. address.
                </li>
              </ul>
            </div>
          </div>
          <div className="CustomerApp">
          <div class="row">
            <div class="col-sm-6 pull-right" align="right">
              <Image
                unoptimized={true}
                width={300}
                height={100 / (100 / 100)}
                src="/img/Onlinefoodorderingsystem/fd-delevary-app.png"
                alt="Food Ordering System Delivery App"
              />
            </div>
            <div class="col-sm-6 pull-left">
              <h2>Delivery App</h2>
              <p>
                Each driver will get native android or iOS app. Assign orders
                directly to them, set estimated time, check fastest route and a
                lot more.{" "}
              </p>
              <ul>
                <li>
                  Manage deliveries : Drivers can manage their more than 1
                  deliveries at one time.
                </li>
                <li>
                  Delivery Routing : Integrated google map for easy access for
                  directions.
                </li>
                <li>
                  Push Notifications : When any delivery get assigned to you.
                </li>
                <li>
                  Delivery status : Update your customers about the delivery
                  status
                </li>
              </ul>
            </div>
          </div>
          </div>
          
          <div class="row">
            <div class="col-sm-6">
              <Image
                unoptimized={true}
                width={300}
                height={100 / (100 / 100)}
                src="/img/Onlinefoodorderingsystem/qwqee.png"
                alt="Food Ordering System : Restaurant Owner App"
              />
            </div>
            <div class="col-sm-6">
              <h2>Kitchen Staff App</h2>
              <p>
                Each kitchen staff get the native ios or android app. Once
                restaurant owner receive the order, they can assign it to the
                kitchen staff which is available in his restaurant to prepare
                the food as per the order.{" "}
              </p>
              <ul>
                <li>
                  Get notified by the restaurant manager, when any order is
                  assigned.
                </li>
                <li>
                  See the customer and order details and then can mark it as
                  &apos;preparing&apos; when they start to prepare it.
                </li>
                <li>
                  Once the food is ready, kitchen staff can mark the order as
                  &apos;ready&apos; and the order would appear with the list of other
                  ready to deliver orders.
                </li>
                <li>
                  As the restaurant owner would assign the prepared order to the
                  delivery person the order would be transferred from the list
                  of prepared orders to the order history.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="fd-website">
        <div class="container">
          <h2>Integrate with Website</h2>
          <p>
            Get your own restaurant ordering system integrated with your website
            and allow customers to order online through this restaurant ordering
            system. 80% of the customers visit website before dining out in the
            restaurant. Convert those visitors into customers. Responsive
            website designed for your customers to order food online. <br /> No
            coding required..!!{" "}
          </p>
          <div class="row">
            <div class="col-sm-6">
              <Image
                unoptimized={true}
                width={750}
                height={100 / (100 / 100)}
                src="/img/Onlinefoodorderingsystem/fd-marketplace.png"
                alt="Food Ordering System Website"
                class="website-img"
              />
            </div>
            <div class="col-sm-6">
              <div class="fd-feat-list" data-aos="fade-left">
                <div class="fd-feat-list-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100 / (100 / 100)}
                    src="/img/Onlinefoodorderingsystem/fdm-icon1.png"
                    alt="#"
                  />
                </div>
                <div class="fd-feat-list-cont">
                  <h3>Sales analytics</h3>
                  <p>Track the daily, weekly or monthly sales.</p>
                </div>
              </div>

              <div class="fd-feat-list" data-aos="fade-left">
                <div class="fd-feat-list-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100 / (100 / 100)}
                    src="/img/Onlinefoodorderingsystem/fdm-icon2.png"
                    alt="#"
                  />
                </div>
                <div class="fd-feat-list-cont">
                  <h3>Customer Insights</h3>
                  <p>Access data for every order you recieve.</p>
                </div>
              </div>

              <div class="fd-feat-list" data-aos="fade-left">
                <div class="fd-feat-list-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100 / (100 / 100)}
                    src="/img/Onlinefoodorderingsystem/fdm-icon3.png"
                    alt="#"
                  />
                </div>
                <div class="fd-feat-list-cont">
                  <h3>Fully Responsive</h3>
                  <p>It will fit on all the screen.</p>
                </div>
              </div>

              <div class="fd-feat-list" data-aos="fade-left">
                <div class="fd-feat-list-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100 / (100 / 100)}
                    src="/img/Onlinefoodorderingsystem/fdm-icon4.png"
                    alt="#"
                  />
                </div>
                <div class="fd-feat-list-cont">
                  <h3>Interactive Design</h3>
                  <p>Clean, Professional and user friendly design.</p>
                </div>
              </div>

              <div class="fd-feat-list" data-aos="fade-left">
                <div class="fd-feat-list-img">
                  <Image
                    unoptimized={true}
                    width={80}
                    height={100 / (100 / 100)}
                    src="/img/Onlinefoodorderingsystem/fdm-icon5.png"
                    alt="#"
                  />
                </div>
                <div class="fd-feat-list-cont">
                  <h3>Easy to use</h3>
                  <p>Hassle free. Find, Select and order.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="fd-dashboard">
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-sm-6"></div>
            <div class="col-md-5 col-sm-6">
              <h2>Dashboard</h2>
              <p>
                We have created the most reliable and simple admin panel in our
                online food ordering system to manage your orders.
              </p>
              <ul>
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={30}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/fd-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  Accept Orders
                </li>
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={30}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/fd-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  Assign to drivers
                </li>
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={30}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/fd-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  Several payment gateways
                </li>
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={30}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/fd-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  Create phone orders
                </li>
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={30}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/fd-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  Notifications alerts
                </li>
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={30}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/fd-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  Check order details
                </li>
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={30}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/fd-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  View All Orders
                </li>
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={30}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/fd-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  Change Order Status
                </li>
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={30}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/fd-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  Route Tracking
                </li>
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={30}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/fd-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  Restaurant Management
                </li>
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={30}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/fd-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  Menu management
                </li>
                <li>
                  <span>
                    <Image
                      unoptimized={true}
                      width={30}
                      height={100 / (100 / 100)}
                      src="/img/Onlinefoodorderingsystem/fd-arrow.png"
                      alt="#"
                    />
                  </span>{" "}
                  Opening/Closing Time Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
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
