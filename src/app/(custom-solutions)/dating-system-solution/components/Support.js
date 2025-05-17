"use client";
import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Heart, Star, Award, Users } from "lucide-react";
import "../index.css"

const Support = () => {
  const supportItems = [
    {
      icon: <Award className="h-10 w-10 text-dating-primary" />,
      title: "Setup Assistance",
      description: "We help you get your dating platform up and running—no technical skills needed."
    },
    {
      icon: <svg className="h-10 w-10 text-dating-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>,
      title: "Security & Privacy",
      description: "Built-in data protection and compliance features to keep your users safe and your platform trustworthy."
    },
    {
      icon: <svg className="h-10 w-10 text-dating-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,
      title: "Admin Insights",
      description: "Get access to a powerful admin dashboard with user activity, engagement metrics, and platform performance tracking."
    },
    {
      icon: <svg className="h-10 w-10 text-dating-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,
      title: "Ongoing Updates",
      description: "We roll out regular updates to improve features, fix bugs, and keep your software aligned with market trends."
    },
    {
      icon: <Star className="h-10 w-10 text-dating-primary" />,
      title: "Multi-Platform Compatibility",
      description: "Your dating site software or app works seamlessly across mobile and web, reaching users wherever they are."
    },
    {
      icon: <Users className="h-10 w-10 text-dating-primary" />,
      title: "Technical Support",
      description: "Have questions or issues? Our responsive support team is here to assist you whenever needed."
    },
    {
      icon: <svg className="h-10 w-10 text-dating-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>,
      title: "SEO & ASO Support",
      description: "We help with SEO, ASO, and performance improvements to boost visibility and attract more users."
    }
    // {
    //   icon: <svg className="h-10 w-10 text-dating-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    //   </svg>,
    //   title: "SEO & ASO Support",
    //   description: "Optimization for app stores and search engines to maximize visibility and downloads."
    // }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-dating-primary/5 via-white to-white relative overflow-hidden" id="support">
      {/* Enhanced Background decorative patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIiBmaWxsPSIjZmRiY2I0IiBvcGFjaXR5PSIwLjQiLz4KPC9zdmc+')] opacity-30"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-dating-primary/5 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-40 w-32 h-32 bg-dating-secondary/5 rounded-full animate-pulse-soft"></div>
      
      {/* Floating elements */}
      <div className="absolute top-[30%] left-[5%] w-16 h-16 bg-dating-accent/10 rounded-full animate-floating" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-[20%] right-[8%] w-12 h-12 bg-dating-primary/10 rounded-full animate-floating" style={{ animationDelay: "3s" }}></div>
      <div className="absolute top-[70%] left-[15%] w-20 h-20 bg-dating-secondary/10 rounded-full animate-floating" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <span className="bg-gradient-to-r from-dating-primary/20 to-dating-secondary/20 text-dating-primary text-sm font-semibold px-4 py-2 rounded-full inline-block mb-2 transform hover:scale-105 transition-transform duration-300">SUPPORT</span>
          <h2 className="text-4xl md:text-5xl !font-bold mt-4 mb-6 bg-gradient-to-r from-dating-primary to-dating-secondary bg-clip-text text-transparent">
          What Kind of Support Comes With Our Dating Software?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          We are not just providing software—we&apos;re your technology partner. From setup to scaling, our team ensures your dating platform stays updated, secure, and ready to grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportItems.map((item, index) => (
            <Card key={index} className="overflow-hidden !border-none glass-card bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-gradient-to-br from-dating-primary/10 to-dating-secondary/10 mb-6 group-hover:bg-gradient-to-r group-hover:from-dating-primary/20 group-hover:to-dating-secondary/20 transition-all duration-500">
                  <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl text-black !font-semibold mb-3 group-hover:text-dating-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
          <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in glass-card transform hover:scale-[1.01] transition-transform duration-500" style={{ animationDelay: "0.3s" }}>
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl !font-bold mb-4 bg-gradient-to-r from-dating-primary to-dating-secondary bg-clip-text text-transparent">We&apos;re With You Every Step of the Way</h3>
                <p className="text-gray-600 mb-6">
                Our dedicated support team ensures your dating software runs smoothly—day in, day out. Whether it&apos;s a technical glitch, a feature request, or just a quick question, we&apos;re here to help your platform grow and stay strong.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-dating-primary/5 to-dating-secondary/5 rounded-lg hover:from-dating-primary/10 hover:to-dating-secondary/10 transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dating-primary/20 to-dating-secondary/20 flex items-center justify-center text-dating-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="!font-medium">Phone Support
                      </div>
                      <div className="text-sm text-gray-500">Get prompt assistance for urgent issues—available when you need it.</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-dating-primary/5 to-dating-secondary/5 rounded-lg hover:from-dating-primary/10 hover:to-dating-secondary/10 transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dating-primary/20 to-dating-secondary/20 flex items-center justify-center text-dating-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <div className="!font-medium">Email Support</div>
                      <div className="text-sm text-gray-500">Reach out anytime and get a helpful response within 24 hours.</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-dating-primary/5 to-dating-secondary/5 rounded-lg hover:from-dating-primary/10 hover:to-dating-secondary/10 transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dating-primary/20 to-dating-secondary/20 flex items-center justify-center text-dating-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="!font-medium">Live Chat Assistance</div>
                      <div className="text-sm text-gray-500">Quick answers during business hours to keep things moving.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 md:h-auto group">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Support team" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dating-primary/90 to-transparent flex items-end p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full text-white border border-white/20 hover:bg-white/20 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-lg font-bold">Our promise to you</p>
                    <p className="text-sm mt-2">We&apos;re not just a vendor, we&apos;re your partner in success. Your dating platform will receive the attention and care it deserves.</p>
                    <div className="mt-4 flex gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm">
                        <Heart className="h-3 w-3 mr-1" /> 99% Uptime
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm">
                        <Star className="h-3 w-3 mr-1" /> 5-Star Service
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
