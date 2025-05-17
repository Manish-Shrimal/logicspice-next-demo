
import React from "react";
// import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import CustomDevelopment from "../components/CustomDevelopment";
import KeyBenefits from "../components/KeyBenefits";
import AppFeatures from "../components/AppFeatures";
import CustomSystem from "../components/CustomSystem";
import Support from "../components/Support";
import FAQ from "../components/Faq";
// import Footer from "../components/Footer";
import Footer from "../../../Components/Footer";
import Navbar from "../../../Components/Navbar";
// import "../index.css"

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col pt-[50px]">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <CustomDevelopment />
      <KeyBenefits />
      <AppFeatures />
      <CustomSystem />
      <Support />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
