"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { UserCog, DollarSign, LayoutDashboard, ShieldOff, Users, UserRoundCheck, LogIn, Hand, Settings, MessageSquare, Calendar, Image, Heart, Bell } from "lucide-react";

const AppFeatures = () => {
  const [activeTab, setActiveTab] = useState("features");

  const features = [
    {
      icon: <LogIn className="h-8 w-8 text-dating-primary" />,
      title: "Quick & Easy Sign-Up",
      description: "Users can register using email, phone number, or even social login options like Google and Facebook. This makes it easy to get started in seconds."
    },
    {
      icon: <Settings className="h-8 w-8 text-dating-primary" />,
      title: "Advanced Matchmaking Tools",
      description: "Help users find better matches with smart search filters, such as age, location, interests, preferences, and more. The more relevant the matches, the more users stay engaged."
    },
    {
      icon: <Hand className="h-8 w-8 text-dating-primary" />,
      title: "Swipe & Connect",
      description: "Let users swipe left or right to like or skip profiles — a familiar and addictive interaction loved by modern dating app users."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-dating-primary" />,
      title: "Real-Time Chat & Messaging",
      description: "Users can send instant messages, photos, and emojis in a secure environment. Private conversations drive engagement and keep users coming back."
    },
    {
      icon: <UserCog className="h-8 w-8 text-dating-primary" />,
      title: "Customizable User Profiles",
      description: "Members can upload multiple photos, add bios, list personal details, and express their personality to attract the right matches."
    },
    {
      icon: <ShieldOff className="h-8 w-8 text-dating-primary" />,
      title: "Block & Report System",
      description: "Safety matters. Users can easily block or report suspicious accounts, giving them peace of mind while using the platform."
    }
  ];

  const screenshots = [
    {
      icon: <LayoutDashboard className="h-8 w-8 text-dating-primary" />,
      title: "Easy-to-Use Admin Dashboard",
      description: "Your control center — see everything at a glance: user stats, signups, activity logs, and site health. No tech expertise needed."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-dating-primary" />,
      title: "Revenue Management",
      description: "Earn through paid memberships, featured profiles, credit-based chat boosts, or even advertising placements. You set the pricing model that works for you."
    },
    {
      icon: <UserCog className="h-8 w-8 text-dating-primary" />,
      title: "User Management & Moderation",
      description: "Approve new users, ban fake profiles, and manage reported content efficiently. Protect your community and maintain quality."
    },
    {
      icon: <Heart className="h-8 w-8 text-dating-primary" />,
      title: "Smart Match Settings",
      description: "Take control of how matches are made. You can easily adjust things like location range, interests, and user behavior to create better, more meaningful connections for your users."
    },
    {
      icon: <Image className="h-8 w-8 text-dating-primary" />,
      title: "Detailed Analytics & Reporting",
      description: "Track everything: signups, retention, most active users, income sources, and more."
    },
    {
      icon: <Bell className="h-8 w-8 text-dating-primary" />,
      title: "Push Notifications & Email Campaigns",
      description: "Keep your community engaged with built-in notifications and emails. Send the right message at the right time—be it a match, update, or promotion."
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden" id="features">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-dating-light/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-dating-light/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="bg-dating-light text-dating-primary text-sm font-semibold px-4 py-1.5 rounded-full">FEATURES</span>
          <h2 className="text-4xl text-black !font-bold mt-4 mb-6">
          Key Features
          </h2>
          <p className="text-gray-600">
          Our software comes packed with powerful, intuitive features that help both users enjoy a seamless dating experience and admins manage the platform with ease. Here&apos;s what makes it stand out:
          </p>
        </div>
        
        <Tabs defaultValue="features" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-dating-light/50 p-1 rounded-full">
              <TabsTrigger 
                value="features" 
                onClick={() => setActiveTab("features")}
                className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-dating-primary"
              >
                User Features
              </TabsTrigger>
              <TabsTrigger 
                value="screenshots" 
                onClick={() => setActiveTab("screenshots")}
                className="rounded-full px-6 py-2 data-[state=active]:bg-white data-[state=active]:text-dating-primary"
              >
                Admin Features
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="features" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="overflow-hidden border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8">
                    <div className="mb-6 flex items-center justify-center">
                      <div className="p-4 rounded-full bg-dating-light/50 transform hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl text-black !font-semibold text-center mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="screenshots" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {screenshots.map((item, index) => (
                <Card key={index} className="overflow-hidden border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="p-4 rounded-full bg-dating-light/50 transform hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl text-black !font-semibold text-center mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </CardContent>
              </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AppFeatures;
