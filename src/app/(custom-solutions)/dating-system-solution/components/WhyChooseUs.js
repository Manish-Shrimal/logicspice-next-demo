"use client";
import React from "react";
import { Clock, MessageSquare, DollarSign, Share2, LayoutDashboard, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import "../index.css";
const WhyChooseUs = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-dating-primary" />,
      title: "Fast Setup, Faster Results",
      description:
        "Launch your dating platform in days, not months, with quick deployment, step-by-step docs, and optional installation support.",
    },
    {
      icon: <LayoutDashboard className="h-8 w-8 text-dating-primary" />,
      title: "Modern & Intuitive UI/UX",
      description:
        "Every screen is designed for user behavior—clean layouts, fast loads, and smooth journeys boost engagement and conversions, even without design expertise.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-dating-primary" />,
      title: "Affordable, Flexible Pricing ",
      description:
        "Choose what suits you best—one-time payment for a complete solution or flexible monthly plans, with no hidden fees and optional add-ons available.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-dating-primary" />,
      title: "Ideal for All Dating Models",
      description:
        "From dating websites to matchmaking apps and niche relationship platforms, our software supports a wide range of business models.",
    },
  ];

  return (
    <section
      className="section-padding bg-gradient-to-br from-white via-dating-light to-white relative overflow-hidden"
      id="why-choose"
    >
      {/* Enhanced background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxwYXRoIGQ9Ik0zMCA1QzQ2LjU2OSA1IDYwIDE4LjQzMSA2MCAzNVM0Ni41NjkgNjUgMzAgNjVDMTMuNDMxIDY1IDAgNTEuNTY5IDAgMzVDMCAxOC40MzEgMTMuNDMxIDUgMzAgNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmRiY2I0IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+Cjwvc3ZnPg==')] bg-repeat opacity-10"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-dating-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-dating-secondary/10 rounded-full blur-[100px]"></div>
      <div className="absolute top-40 left-1/4 w-20 h-20 bg-dating-primary/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-40 right-1/4 w-16 h-16 bg-dating-secondary/10 rounded-full animate-pulse-soft"></div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-12 h-12 bg-dating-accent/10 rounded-full animate-floating"></div>
      <div
        className="absolute bottom-1/4 right-10 w-10 h-10 bg-dating-primary/10 rounded-full animate-floating"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-dating-primary/5 to-dating-secondary/5 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <span className="bg-gradient-to-r from-dating-primary/20 to-dating-secondary/20 text-dating-primary text-sm font-semibold px-4 py-2 rounded-full inline-block mb-2">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl !font-extrabold mt-4 mb-6 bg-gradient-to-r from-dating-primary to-dating-secondary bg-clip-text text-transparent">
            Why Choose Our Dating Software?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We have built this dating software to help you launch quickly, run
            smoothly, and attract real users. Whether you are starting fresh or
            expanding your platform, our solution is made to be simple,
            reliable, and easy to grow with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-[10px] !border-none shadow-lg hover:!shadow-2xl !transition-all !duration-500 card-hover bg-white/80 !backdrop-blur-sm group hover:scale-105"
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-dating-light to-white group-hover:bg-gradient-to-r group-hover:from-dating-primary/20 group-hover:to-dating-secondary/20 transition-colors duration-500">
                  <div className="group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-dating-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced featured image */}
        <div className="mt-20 flex justify-center">
          <div className="relative w-full max-w-7xl">
            <div className="absolute -inset-8 bg-gradient-to-r from-dating-primary/20 to-dating-secondary/20 rounded-3xl blur-xl animate-pulse-slow"></div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl grid md:grid-cols-2 gap-8 items-center relative z-10 hover:shadow-2xl transition-all duration-500">
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <h3 className="text-2xl md:text-3xl !font-bold mb-4 bg-gradient-to-r from-dating-primary to-dating-secondary bg-clip-text text-transparent">
                  Real Success Stories Start with Our Dating Software
                </h3>
                <p className="text-gray-500 mb-6">
                  From niche communities to large-scale platforms, our dating
                  software has powered the growth of successful businesses
                  around the globe. With ready-to-launch solutions and
                  customizable features, we are helping founders turn bold ideas
                  into thriving dating platforms.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex -space-x-2 overflow-hidden">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full ring-2 ring-white flex items-center justify-center bg-gradient-to-br from-dating-primary/20 to-dating-secondary/20 transition-transform duration-300 hover:scale-110 hover:z-10"
                      >
                        <span className="text-dating-primary font-bold">
                          C{i}
                        </span>
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full ring-2 ring-white flex items-center justify-center bg-gradient-to-r from-dating-primary to-dating-secondary text-white font-bold transition-transform duration-300 hover:scale-110 hover:z-10">
                      +6
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Community-Based Dating Apps",
                    "Niche Matchmaking Platforms",
                    "Global Social Networking Startups",
                    "Mobile-First Dating Solutions",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm !font-medium bg-dating-light text-dating-primary hover:bg-dating-primary/10 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="relative rounded-xl overflow-hidden shadow-lg group animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Dating app development team"
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
                  }}
                />
                <div className="!absolute !inset-0 !bg-gradient-to-t from-dating-primary/80 to-transparent !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-500 !flex !items-end !justify-center p-6">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-bold text-lg">Our Expert Team</p>
                    <p className="text-sm">
                      Building the future of digital connections
                    </p>
                  </div>
                </div>
                <div className="!absolute !top-4 !right-4 !bg-gradient-to-r from-dating-primary to-dating-accent text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold shadow-lg !animate-pulse-slow !transform hover:!rotate-12 !transition-transform !duration-300">
                  5★
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
