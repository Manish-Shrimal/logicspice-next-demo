"use client";
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Heart } from "lucide-react";
import "../index.css";
import Enquirymodal from "../../../Components/Enquirymodal";

const CustomDevelopment = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section
      className="section-padding bg-gradient-to-br from-dating-dark to-dating-dark/90 text-white relative overflow-hidden"
      id="custom-dev"
    >
      {/* Visual elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-dating-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-dating-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-dating-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <span className="inline-block px-3 py-1 bg-white/10 text-dating-light/90 text-sm font-medium rounded-full mb-4">
              CUSTOM DEVELOPMENT
            </span>
            <h2 className="text-3xl lg:text-4xl !font-bold mb-6 text-white">
              Dating Website Software for Modern Matchmaking
            </h2>

            <div className="space-y-6 animate-fade-in">
              <p className="text-dating-light/90 text-lg">
                Are you eager to launch your own online dating software? Whether
                you&apos;re an entrepreneur, a developer, or a startup aiming to
                disrupt the dating industry, our dating software is built to
                give you everything you need, from user-friendly interfaces to
                advanced backend control.
              </p>

              <p className="text-dating-light/90">
                Our software is more than just code — it&apos;s a complete dating
                website software solution that helps you connect people, grow
                communities, and build a reliable revenue stream. Whether you're
                creating a general dating site software or a niche platform,
                Logicspice provides the best foundation to get started.
              </p>
              <p className="text-dating-light/90">
                This software includes the full package: a responsive front-end,
                powerful admin dashboard, secure user management, and real-time
                messaging, everything you need to run a successful online dating
                platform.
              </p>

              <div className="pt-6">
                <Button
                  className="bg-dating-primary hover:bg-dating-primary/90 text-white px-8 py-6 rounded-full shadow-xl hover:shadow-dating-primary/20 hover:shadow-2xl transition-all duration-300"
                  onClick={openModal}
                >
                  Get Custom Solution
                </Button>
                {
                  <Enquirymodal
                    modalStatus={showModal}
                    toggle={openModal}
                    title="Custom Dating App Development"
                  />
                }
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-dating-primary to-dating-secondary rounded-3xl blur-xl opacity-20"></div>
              <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Dating profile 1"
                      className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 h-40 object-cover w-full"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Dating profile 2"
                      className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 h-56 object-cover w-full"
                    />
                  </div>
                  <div className="space-y-4 pt-10">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Dating profile 3"
                      className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 h-56 object-cover w-full"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Dating profile 4"
                      className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 h-40 object-cover w-full"
                    />
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dating-primary text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                  <Heart className="h-8 w-8 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDevelopment;
