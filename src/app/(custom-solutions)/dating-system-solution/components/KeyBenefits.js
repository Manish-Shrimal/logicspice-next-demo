"use client";
import React from "react";
import { UserPlus, Lock, Filter, MessageCircle, MessageSquare, Users, Heart, Star } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import "../index.css"

const KeyBenefits = () => {
  const benefits = [
    {
      icon: <UserPlus className="h-10 w-10 text-dating-primary" />,
      title: "Unlock Premium Access",
      description: "Users can subscribe to exclusive features like read receipts, profile boosts, and advanced filters."
    },
    {
      icon: <Lock className="h-10 w-10 text-dating-primary" />,
      title: "Privacy Made Simple",
      description: "Built-in privacy controls let users decide who can view their profile, photos, and contact them."
    },
    {
      icon: <Filter className="h-10 w-10 text-dating-primary" />,
      title: "Smart Matching Filters",
      description: "Connect users based on interests, lifestyle, and behavior using intelligent matching algorithms."
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-dating-primary" />,
      title: "Complete Profiles, Better Matches",
      description: "Encourage users to build authentic profiles with interests, preferences, and lifestyle tags."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-dating-primary" />,
      title: "Real-Time Chat",
      description: "Instant messaging with typing indicators, read status, and optional audio messages."
    },
    {
      icon: <Users className="h-10 w-10 text-dating-primary" />,
      title: "Video Profiles",
      description: "Allow users to upload short intro videos to add a personal touch and increase trust."
    },
    {
      icon: <Users className="h-10 w-10 text-dating-primary" />,
      title: "Location-Based Matching",
      description: "Enable geo-targeted suggestions so users can meet people nearby or within selected areas."
    },
    {
      icon: <Users className="h-10 w-10 text-dating-primary" />,
      title: "Smart Notifications",
      description: "Keep users engaged with personalized alerts about matches, likes, messages, and more."
    },
    {
      icon: <Users className="h-10 w-10 text-dating-primary" />,
      title: "Analytics Dashboard",
      description: "Get insights into user behavior, match rates, and app performance to make informed updates."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-dating-light via-white to-dating-light/30 relative overflow-hidden" id="benefits">
      {/* Enhanced Background decorative patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMCAwTDYwIDYwWk02MCAwTDAgNjBaIiBzdHJva2U9IiNmZGJjYjQiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPg==')] opacity-5"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-dating-primary/5 rounded-full animate-pulse-soft"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-dating-secondary/5 rounded-full animate-pulse-slow"></div>
      
      {/* Floating elements */}
      <div className="absolute top-[20%] right-[20%] w-16 h-16 bg-dating-accent/10 rounded-full animate-floating" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute bottom-[30%] left-[10%] w-12 h-12 bg-dating-primary/10 rounded-full animate-floating" style={{ animationDelay: "3s" }}></div>
      <div className="absolute top-[50%] right-[5%] w-24 h-24 bg-dating-secondary/10 rounded-full animate-floating" style={{ animationDelay: "2s" }}></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
          <span className="bg-gradient-to-r from-dating-primary/20 to-dating-secondary/20 text-dating-primary text-sm font-semibold px-4 py-2 rounded-full inline-block mb-2 transform hover:scale-105 transition-transform">KEY BENEFITS</span>
          <h2 className="text-4xl md:text-5xl !font-bold mt-4 mb-6 pb-1 bg-gradient-to-r from-dating-primary to-dating-secondary bg-clip-text text-transparent">
          Key Benefits That Make Your Dating App Stand Out
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
          We equip your dating platform with powerful features designed to drive user engagement, trust, and long-term success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="overflow-hidden !border-none shadow-md group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm animate-slide-up glass-card" style={{ animationDelay: `${index * 0.05}s` }}>
              <CardContent className="p-6 flex gap-4">
                <div className="shrink-0 p-3 bg-gradient-to-br from-dating-primary/10 to-dating-secondary/10 rounded-lg h-fit group-hover:from-dating-primary/30 group-hover:to-dating-secondary/30 transition-all duration-500">
                  <div className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl text-black !font-semibold mb-2 group-hover:text-dating-primary transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center">
          <div className="relative max-w-5xl w-full animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-dating-primary/20 to-dating-secondary/20 rounded-3xl blur-xl animate-pulse-slow"></div>
            <div className="bg-white glass-card p-8 rounded-2xl shadow-xl relative z-10 grid md:grid-cols-2 gap-8 items-center transform hover:scale-[1.01] transition-all duration-500">
              <div>
                <h3 className="text-2xl md:text-3xl !font-bold mb-4 bg-gradient-to-r from-dating-primary to-dating-secondary bg-clip-text text-transparent">Smarter Matches. Better Connections.</h3>
                <p className="text-gray-600 mb-6">
                Our dating software is built to help your users find meaningful connections. With intelligent algorithms and customizable matching logic, your platform can deliver highly compatible suggestions based on user preferences, interests, and behavior.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 p-2 hover:bg-dating-light/70 rounded-lg transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-dating-primary/20 to-dating-secondary/20 flex items-center justify-center transform hover:scale-110 transition-transform">
                      <Heart className="w-4 h-4 text-dating-primary" />
                    </div>
                    <span className="text-gray-700">AI-driven match recommendations</span>
                  </li>
                  <li className="flex items-center gap-3 p-2 hover:bg-dating-light/70 rounded-lg transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-dating-primary/20 to-dating-secondary/20 flex items-center justify-center transform hover:scale-110 transition-transform">
                      <Star className="w-4 h-4 text-dating-primary" />
                    </div>
                    <span className="text-gray-700">Personality quiz integration</span>
                  </li>
                  <li className="flex items-center gap-3 p-2 hover:bg-dating-light/70 rounded-lg transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-dating-primary/20 to-dating-secondary/20 flex items-center justify-center transform hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 text-dating-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Location-based matching system</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl group">
                <img 
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Woman using dating app" 
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dating-primary/90 to-transparent/5 flex items-end p-8">
                  <div className="text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full border-2 border-white p-0.5 animate-pulse-slow">
                        <img 
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                          alt="Profile" 
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-lg font-medium">Alexandra</div>
                        <div className="text-sm text-white/80">28, San Francisco</div>
                      </div>
                      <div className="ml-auto">
                        <Heart className="h-6 w-6 text-white fill-white animate-pulse" />
                      </div>
                    </div>
                    <div className="flex space-x-2 flex-wrap gap-2">
                      <span className="bg-white/20 backdrop-blur-sm text-sm px-3 py-1 rounded-full hover:bg-white/30 transition-colors cursor-pointer transform hover:scale-105">Travel</span>
                      <span className="bg-white/20 backdrop-blur-sm text-sm px-3 py-1 rounded-full hover:bg-white/30 transition-colors cursor-pointer transform hover:scale-105">Photography</span>
                      <span className="bg-white/20 backdrop-blur-sm text-sm px-3 py-1 rounded-full hover:bg-white/30 transition-colors cursor-pointer transform hover:scale-105">Foodie</span>
                    </div>
                    <div className="flex justify-between items-center mt-4 !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-300">
                      <button className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm hover:bg-white/30 transition-colors flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Message
                      </button>
                      <button className="px-4 py-1.5 bg-gradient-to-r from-dating-primary to-dating-secondary rounded-full text-sm hover:opacity-90 transition-opacity">View Profile</button>
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

export default KeyBenefits;
