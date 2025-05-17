"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import "../index.css";
import Enquirymodal from "../../../Components/Enquirymodal";
import Contactusmodel from "../../../Components/Contactusmodel";

const FAQ = () => {
  const faqs = [
    {
      question: "Can I customize the dating software to match my brand?",
      answer:
        "Yes! You get full access to the source code, so you can tweak the design, add features, or adjust the user flow to suit your business model. Whether it&apos;s changing how profiles look or adding custom filters, you&apos;re in full control.",
    },
    {
      question: "Will the dating platform work on mobile devices?",
      answer:
        "Definitely. Our dating app script is fully responsive and designed to work seamlessly on smartphones, tablets, and desktops. We also offer dedicated Android and iOS mobile apps for a more native experience.",
    },
    {
      question: "What features are essential for a successful dating software?",
      answer:
        "A successful online dating service software​ needs key features like user profiles, smart matching, real-time messaging, and location-based search. Safety tools like report/block options are essential. Push notifications keep users engaged, while premium add-ons like video calls and profile boosts help with monetization. These features keep users safe and make the experience fun and interactive.",
    },
    {
      question: "Do I need technical skills to run the dating software?",
      answer:
        "You don&apos;t. Our dating app script is user-friendly and easy to use, so you don&t need any coding skills to manage it. The admin panel is simple and user-friendly, and our team is here to help with setup, walkthroughs, and ongoing support.",
    },
    {
      question: "What kind of maintenance does a dating app need after launch?",
      answer:
        "Dating apps need regular care to run smoothly. This includes fixing bugs, updating features, keeping the app secure, and making sure it works well on all devices. We offer ongoing support and maintenance plans that cover everything from server monitoring to data backups and performance tuning.",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <section
      className="section-padding bg-gradient-to-br from-dating-light/70 to-white relative overflow-hidden"
      id="faq"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dating-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-dating-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="bg-dating-primary/10 text-dating-primary text-sm font-semibold px-4 py-1.5 rounded-full">
            FAQ
          </span>
          <h2 className="text-4xl text-black !font-bold mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about our dating app development
            services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-md border-none border-gray-100 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-black px-6 py-4 hover:no-underline hover:bg-dating-light/30 rounded-t-xl text-left font-semibold group">
                  <span className="group-hover:text-dating-primary transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-dating-primary/20 to-dating-secondary/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center max-w-3xl mx-auto">
            <h3 className="text-2xl text-black !font-bold mb-4">
              Ready to Launch Your Own Dating Platform?
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              With our powerful, easy-to-use dating site software, you&apos;re
              just a few steps away from starting your own online dating
              business. Request a free demo and see why entrepreneurs and
              developers choose Logicspice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-dating-primary hover:bg-dating-primary/90 text-white px-8 rounded-full"
                onClick={openModal}
              >
                Enquire now
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
                className="!border-dating-primary text-dating-primary hover:bg-dating-light rounded-full px-8"
                onClick={toggleModal}
              >
                Talk to an Expert
              </Button>
              <Contactusmodel modalStatus={modalOpen} toggle={toggleModal} />
            </div>
            <div className="mt-8 flex justify-center gap-8">
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-dating-primary">300+</p>
                <p className="text-sm text-gray-500">Projects Completed</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-dating-primary">98%</p>
                <p className="text-sm text-gray-500">Client Satisfaction</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-dating-primary">24/7</p>
                <p className="text-sm text-gray-500">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
