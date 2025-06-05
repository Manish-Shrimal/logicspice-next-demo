"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Heart, Star, Award } from "lucide-react";
// import "../index.css"
import Enquirymodal from "../../../Components/Enquirymodal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-dating-primary/5 via-white to-dating-light min-h-[95vh] flex items-center">
      {/* Enhanced background decorative elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('https://images.unsplash.com/photo-1516914589923-f105f1535f88?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-dating-primary/20 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-dating-secondary/20 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-dating-primary/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-dating-secondary/10 rounded-full animate-pulse-soft"></div>

      {/* Floating elements */}
      <div
        className="absolute top-[20%] left-[15%] w-16 h-16 bg-dating-accent/20 rounded-full animate-floating"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-[30%] right-[20%] w-12 h-12 bg-dating-primary/20 rounded-full animate-floating"
        style={{ animationDelay: "2.5s" }}
      ></div>
      <div
        className="absolute top-[60%] left-[10%] w-10 h-10 bg-dating-secondary/20 rounded-full animate-floating"
        style={{ animationDelay: "3.5s" }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-4 py-6 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-dating-primary/10 to-dating-secondary/10 backdrop-blur-sm rounded-full shadow-sm mb-2 transform hover:scale-105 transition-transform">
              <p className="text-sm font-medium flex items-center gap-2 text-dating-primary">
                <Heart className="h-4 w-4 animate-pulse" />
                Premium Dating App Development
              </p>
            </div>
            <h1 className="text-3xl sm:text-6xl lg:text-7xl !font-black tracking-tight leading-tight text-gray-700">
              Start Your{" "}
              <span className="bg-gradient-to-r from-dating-primary via-dating-accent to-dating-secondary bg-clip-text text-transparent animate-pulse-slow">
                Dating Platform
              </span>{" "}
              with All-in-One Dating Software
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Create a modern dating website or app like Tinder or Bumble. Our
              ready-made dating site software is fully customizable, scalable,
              and easy to manage. Start your online dating service today with a
              feature-rich script built to deliver real results.{" "}
            </p>
            <div className="flex flex-row gap-2 sm:flex-wrap sm:gap-4 pt-2  ">
              <Button
                size="lg"
                className="font-medium bg-gradient-to-r from-dating-primary to-dating-secondary hover:opacity-90 text-white rounded-full px-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 transform"
                onClick={openModal}
              >
                Enquire Now
              </Button>
              {
                <Enquirymodal
                  modalStatus={showModal}
                  toggle={openModal}
                  title="Custom Dating App Development"
                />
              }
              <Button
                size="lg"
                variant="outline"
                className="!border-dating-primary text-dating-primary hover:!bg-dating-light rounded-full px-8 shadow-sm hover:shadow-md transition-all hover:scale-105 transform"
              >
                Learn More
              </Button>
            </div>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-8 text-sm text-gray-500 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center gap-2 p-2 rounded-[15px] hover:bg-dating-light/70 transition-all transform hover:scale-105 hover:shadow-md">
                <Heart className="h-4 w-4 text-dating-primary" />
                <span>Reliable & Secure</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-[15px] hover:bg-dating-light/70 transition-all transform hover:scale-105 hover:shadow-md">
                <Award className="h-4 w-4 text-dating-primary" />
                <span>Smartly Designed</span>
              </div>
              <div className="flex items-center gap-2 p-1 rounded-[15px] hover:bg-dating-light/70 transition-all transform hover:scale-105 hover:shadow-md">
                <Star className="h-4 w-4 text-dating-primary" />
                <span>Flexible Options</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-[15px] hover:bg-dating-light/70 transition-all transform hover:scale-105 hover:shadow-md">
                <svg
                  className="h-4 w-4 text-dating-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M12 16v.01M12 8v5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Quick Help</span>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-dating-primary to-dating-secondary rounded-2xl blur-xl opacity-30 animate-pulse-soft"></div>
              <div className="relative bg-white glass-card p-6 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-700">
                <img
                  src="https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Mobile dating app"
                  className="w-72 h-auto rounded-xl shadow-md hover:shadow-xl transition-all"
                />
                <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-dating-primary to-dating-accent text-white rounded-full p-4 shadow-lg animate-bounce-subtle">
                  <Heart className="h-6 w-6" />
                </div>
              </div>
              {/* Enhanced floating elements for visual interest */}
              <div
                className="absolute -top-12 -right-12 w-28 h-28 bg-dating-light rounded-full flex items-center justify-center shadow-lg border-4 border-white animate-floating"
                style={{ animationDelay: "1.5s" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Dating profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-10 -left-16 w-36 h-36 bg-white rounded-xl p-3 shadow-lg transform rotate-12 animate-floating"
                style={{ animationDelay: "2s" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="Dating couple"
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              <div
                className="absolute -top-14 left-10 w-20 h-20 bg-gradient-to-br from-dating-primary/10 to-dating-secondary/10 backdrop-blur-sm p-3 rounded-lg shadow-md transform -rotate-6 flex items-center justify-center animate-floating"
                style={{ animationDelay: "1s" }}
              >
                <Heart className="h-8 w-8 text-dating-primary animate-pulse-slow" />
              </div>
              <div
                className="absolute bottom-1/2 -right-12 w-16 h-16 bg-white rounded-full p-2 shadow-md flex items-center justify-center animate-floating"
                style={{ animationDelay: "3s" }}
              >
                <Star className="h-10 w-10 text-dating-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Added feature tags */}
        <div
          className="mt-16 flex flex-wrap justify-center gap-4 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            "Smart Matching",
            "Premium Quality",
            "Profile Verification",
            "Real-Time Chat",
            "Geo Targeting",
            "Easy to Use",
          ].map((tag, i) => (
            <div
              key={i}
              className="px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-100/50 text-sm text-gray-600 flex items-center gap-2 hover:bg-dating-light hover:text-dating-primary transition-colors duration-300 hover:shadow-md transform hover:scale-105"
            >
              {i % 2 === 0 ? (
                <Heart className="h-3 w-3" />
              ) : (
                <Star className="h-3 w-3" />
              )}
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
