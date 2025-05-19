"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Heart, Lock, Image, MessageSquare } from "lucide-react";

const CustomSystem = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-dating-light/70 to-white relative overflow-hidden" id="system">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dating-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-dating-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-64 h-64 bg-dating-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="bg-dating-primary/10 text-dating-primary text-sm font-semibold px-4 py-1.5 rounded-full">CLIENT TESTIMONIALS</span>
          <h2 className="text-4xl text-black !font-bold mt-4 mb-6">
          What Our Clients Say About Their Experience
          </h2>
          <p className="text-gray-600">
          Our dating software is known for its flexibility, performance, and user-friendly design—helping clients stand out in a competitive market.
          </p>
        </div>
        
        <Tabs defaultValue="intro" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8 overflow-x-auto scrollbar-none">
            <TabsList className="bg-white/80 shadow-md rounded-full p-1.5">
              <TabsTrigger value="intro" className="rounded-full data-[state=active]:bg-dating-primary data-[state=active]:text-white px-6">1</TabsTrigger>
              <TabsTrigger value="validation" className="rounded-full data-[state=active]:bg-dating-primary data-[state=active]:text-white px-6">2</TabsTrigger>
              <TabsTrigger value="features" className="rounded-full data-[state=active]:bg-dating-primary data-[state=active]:text-white px-6">3</TabsTrigger>
              <TabsTrigger value="design" className="rounded-full data-[state=active]:bg-dating-primary data-[state=active]:text-white px-6">4</TabsTrigger>
              {/* <TabsTrigger value="support" className="rounded-full data-[state=active]:bg-dating-primary data-[state=active]:text-white px-6">5</TabsTrigger> */}
            </TabsList>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <TabsContent value="intro" className="animate-fade-in m-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-dating-primary/10">
                    <Heart className="h-6 w-6 text-dating-primary" />
                  </div>
                  {/* <h3 className="text-2xl text-black !font-semibold mb-4">What is a Dating System?</h3> */}
                  <p className="text-gray-600 mb-4">
                  Launching my dating app with this software was way easier than I expected. The setup was smooth, and I could customize everything to match my brand. Their support team has been awesome the whole time! 
                  </p>
                  {/* <p className="text-gray-600">
                    Our custom dating system development solution offers end-to-end services from conceptualization to deployment and ongoing support, ensuring your platform stands out in the competitive dating market.
                  </p> */}
                </div>
                <div className="relative h-80 md:h-80">
                  <img 
                    src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Dating system concept" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dating-primary/60 to-transparent md:from-transparent md:to-dating-primary/60 flex items-center md:justify-end p-8">
                    <div className="max-w-xs text-white md:text-right">
                      <div className="text-2xl text-white !font-bold mb-2">James K., Startup Founder (USA)</div>
                      {/* <div className="text-sm">Powerful algorithms to help users find their perfect match</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="validation" className="animate-fade-in m-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-dating-primary/10">
                    <Lock className="h-6 w-6 text-dating-primary" />
                  </div>
                  {/* <h3 className="text-2xl text-black !font-semibold mb-4">User Validation & Safety</h3> */}
                  <p className="text-gray-600 mb-4">
                  What I love most is how easy and user-friendly the platform is. I don&apos;t come from a tech background, but I was able to run everything on my own thanks to the simple admin panel. Highly recommend it for first-time founders!
                  </p>
                  {/* <p className="text-gray-600">
                    Our safety features include privacy controls, blocking capabilities, and reporting systems that help maintain platform integrity and user trust.
                  </p> */}
                </div>
                <div className="relative h-80 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="User validation process" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dating-primary/60 to-transparent md:from-transparent md:to-dating-primary/60 flex items-center md:justify-end p-8">
                    <div className="max-w-xs text-white md:text-right">
                      <div className="text-2xl text-black !font-bold mb-2">Amilyn S., Dating App Owner (UK)</div>
                      {/* <div className="text-sm">Advanced verification and protection systems for all users</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="animate-fade-in m-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-dating-primary/10">
                    <Heart className="h-6 w-6 text-dating-primary" />
                  </div>
                  {/* <h3 className="text-2xl text-black !font-semibold mb-4">Core Features</h3> */}
                  {/* <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-dating-primary/10 flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-dating-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Advanced matching algorithms based on user preferences and behavior</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-dating-primary/10 flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-dating-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Real-time messaging with rich media support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-dating-primary/10 flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-dating-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Geolocation-based matching for local connections</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-dating-primary/10 flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-dating-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>In-app video calling for virtual dates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-dating-primary/10 flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-dating-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Premium subscription models with tiered features</span>
                    </li>
                  </ul> */}
                  <p className="text-gray-600 mb-4">
                  We tried a few other options before this, and nothing matched the features and flexibility here. The ability to scale and add premium features really helped us grow fast.
                  </p>
                </div>
                <div className="relative h-80 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Dating app features" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dating-primary/60 to-transparent md:from-transparent md:to-dating-primary/60 flex items-center md:justify-end p-8">
                    <div className="max-w-xs text-white md:text-right">
                      <div className="text-2xl font-bold mb-2">Daniel R., App Developer (Canada)</div>
                      {/* <div className="text-sm">Comprehensive toolkit for modern dating experiences</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="design" className="animate-fade-in m-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-dating-primary/10">
                    <Image className="h-6 w-6 text-dating-primary" />
                  </div>
                  {/* <h3 className="text-2xl text-black !font-semibold mb-4">UI/UX Design</h3> */}
                  <p className="text-gray-600 mb-4">
                  The design is clean, the performance is solid, and the user feedback we&apos;ve gotten has been overwhelmingly positive. It’s a great foundation for anyone looking to launch a dating platform quickly.
                  </p>
                  {/* <p className="text-gray-600">
                    We employ modern design principles, smooth animations, and responsive layouts to ensure your dating platform looks and feels premium across all devices.
                  </p> */}
                </div>
                <div className="relative h-80 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="UI/UX design process" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dating-primary/60 to-transparent md:from-transparent md:to-dating-primary/60 flex items-center md:justify-end p-8">
                    <div className="max-w-xs text-white md:text-right">
                      <div className="text-2xl font-bold mb-2">Priya M., Product Manager (India)</div>
                      {/* <div className="text-sm">Intuitive interfaces crafted for optimal user experience</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* <TabsContent value="support" className="animate-fade-in m-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-dating-primary/10">
                    <MessageSquare className="h-6 w-6 text-dating-primary" />
                  </div>
                  <h3 className="text-2xl text-black !font-semibold mb-4">Ongoing Support</h3>
                  <p className="text-gray-600 mb-4">
                    Our relationship doesn't end at deployment. We offer comprehensive support packages including:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-dating-primary/10 flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-dating-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>24/7 technical support for critical issues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-dating-primary/10 flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-dating-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Regular maintenance and updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-dating-primary/10 flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-dating-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Performance optimization</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-80 md:h-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Customer support team" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dating-primary/60 to-transparent md:from-transparent md:to-dating-primary/60 flex items-center md:justify-end p-8">
                    <div className="max-w-xs text-white md:text-right">
                      <div className="text-2xl font-bold mb-2">Always Here</div>
                      <div className="text-sm">Dedicated support team available when you need them</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent> */}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default CustomSystem;
