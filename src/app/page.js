// "use client";
import Layout from "./layout";
import React, { lazy, Suspense } from "react";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Link from "next/link";
// import "@fortawesome/fontawesome-free/css/all.css";
// import Slidersimple from "./Components/Slidersimple";
import Looksilder from "./Components/Looksilder";
// import Blogslider from "./Components/Blogslider";
// import Workingwith from "./Components/Workingwith";
// import Certificationtabs from "./Components/Certificationtabs";
import Customizeweb from "./Components/Customizeweb";
import Contactusmodel from "@/app/Components/Contactusmodel";
import "./resposive.css";
import Image from "next/image";
import Servercomponents from "./Components/Servercomponents";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS
import GTMComponent from "./Components/GTMComponent";
import Chatbot from "./Components/Chatbot";
import "../../public/css/font-awesome.css";


const ServicesNewSection = lazy(() =>
  import("./Components/ServicesNewSection")
);
const Slidersimple = lazy(() => import("./Components/Slidersimple"),{
  ssr: false,
});

const TakeaLook = lazy(() => import("./Components/home/TakeaLook"), {
  ssr: false,
});

const ClientSide = lazy(() => import("./Components/home/ClientSide"),{
  ssr: false,
});

const CustomizeTop = lazy(() => import("./Components/home/CustomizeTop"),{
  ssr: false,
});

const ClientSay = lazy(() => import("./Components/home/ClientSay"),{
  ssr: false,
});

const IndustriesWeServe = lazy(() =>
  import("./Components/home/IndustriesWeServe"),{
    ssr: false,
  }
);

const ReadymadeSolution = lazy(() =>
  import("./Components/home/ReadymadeSolution"),{
    ssr: false
  }
);

const HireExpert = lazy(() => import("./Components/home/HireExpert"),{
  ssr: false,
});

const Blogslider = lazy(() => import("./Components/Blogslider"),{
  ssr: false,
});
const Certificationtabs = lazy(() => import("./Components/Certificationtabs"), {
  ssr: false,
});
const Workingwith = lazy(() => import("./Components/Workingwith"),{
  ssr: false,
});
// import React, { useState } from "react";

const Page = () => {
  // useEffect(() => {
  //   AOS.init(); // Initialize AOS
  // }, []);s
  return (
    <>
    <Chatbot />
    <GTMComponent />
      <NavBar />
      <div className="home-slider">
        <div className="container">
          <Suspense fallback={<div>Loading Services...</div>}>
            <Slidersimple />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={<div>Loading Services...</div>}>
        <ServicesNewSection />
      </Suspense>

      

      <Suspense fallback={<div>Loading Take a look...</div>}>
        <TakeaLook />
      </Suspense>
      

      {/* ReadyMade Solution Section  */}
      <Suspense fallback={<div>Loading readymade solution...</div>}>
        <ReadymadeSolution />
      </Suspense>
      
      {/* Hire section  */}
      <Suspense fallback={<div>Loading readymade hire expert...</div>}>
        <HireExpert />
      </Suspense>
      
      <section className="blog-home">
        <div className="container">
          <div className="headings">
            <h2>OUR BLOGS</h2>
            <p>A Sneak Peek into the Future of Innovation</p>
          </div>
          <div>
            <Suspense fallback={<div>Loading ...</div>}>
              <Blogslider />
            </Suspense>
          </div>
        </div>
      </section>
      <section className="certificates">
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Certificationtabs />
          </Suspense>
        </div>
      </section>

      {/* client side  */}
      <Suspense fallback={<div>Loading client side...</div>}>
        <ClientSide />
      </Suspense>
      
      <section className="working_with">
        <div className="container">
          <h3
            className="title_heading title_heading_bgg"
            style={{ marginBottom: "30px" }}
          >
            Worked with 1500+ companies worldwide, from startups to enterprises.
          </h3>
          <Suspense fallback={<div>Loading ...</div>}>
            <Workingwith />
          </Suspense>
        </div>
      </section>

      <Suspense fallback={<div>Loading customize top...</div>}>
        <CustomizeTop />
      </Suspense>
      

      <Suspense fallback={<div>Loading Client say...</div>}>
        <ClientSay />
      </Suspense>
     

      {/* Industries  */}
      <Suspense fallback={<div>Loading Industries we serve...</div>}>
        <IndustriesWeServe />
      </Suspense>


      <Footer />
      <Servercomponents />
    </>
  );
};

export default Page;
