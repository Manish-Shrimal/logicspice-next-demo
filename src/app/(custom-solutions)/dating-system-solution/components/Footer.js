"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dating-dark text-gray-300">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-dating-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-dating-primary transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-dating-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-dating-primary transition-colors">News</a></li>
              <li><a href="#" className="hover:text-dating-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-dating-primary transition-colors">Dating App Development</a></li>
              <li><a href="#" className="hover:text-dating-primary transition-colors">Matchmaking Solutions</a></li>
              <li><a href="#" className="hover:text-dating-primary transition-colors">Dating Website Design</a></li>
              <li><a href="#" className="hover:text-dating-primary transition-colors">AI-Powered Matching</a></li>
              <li><a href="#" className="hover:text-dating-primary transition-colors">Custom Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services & Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-dating-primary transition-colors">Maintenance</a></li>
              <li><a href="#" className="hover:text-dating-primary transition-colors">API Integration</a></li>
              <li><a href="#" className="hover:text-dating-primary transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-dating-primary transition-colors">Training</a></li>
              <li><a href="#" className="hover:text-dating-primary transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-dating-primary mt-0.5" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-dating-primary mt-0.5" />
                <span>info@datingsolution.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-dating-primary mt-0.5" />
                <span>123 Dating Street, App City, Digital Country</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-white text-sm font-medium mb-3">Follow us</h4>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="bg-gray-800 hover:bg-dating-primary p-2 rounded-full transition-colors"
                    aria-label={social}
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {new Date().getFullYear()} Dating Solution. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-dating-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-dating-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm hover:text-dating-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
