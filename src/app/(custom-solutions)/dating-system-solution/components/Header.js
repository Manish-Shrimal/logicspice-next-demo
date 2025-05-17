"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Search, Menu, X, Heart } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md' : 'bg-transparent border-transparent'}`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className={`h-6 w-6 ${scrolled ? 'text-dating-primary' : 'text-dating-primary'}`} />
          <span className={`text-2xl font-bold ${scrolled ? 'text-dating-primary' : 'text-dating-primary'}`}>Dating</span>
          <span className={`text-2xl font-bold ${scrolled ? 'text-dating-secondary' : 'text-dating-secondary'}`}>Solution</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-dating-primary transition-colors relative group">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dating-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#benefits" className="text-sm font-medium hover:text-dating-primary transition-colors relative group">
            Benefits
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dating-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#custom-dev" className="text-sm font-medium hover:text-dating-primary transition-colors relative group">
            Custom Development
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dating-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#support" className="text-sm font-medium hover:text-dating-primary transition-colors relative group">
            Support
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dating-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-dating-primary transition-colors relative group">
            FAQ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dating-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="bg-gradient-to-r from-dating-primary to-dating-secondary text-white hover:opacity-90 rounded-full hidden md:flex shadow-md hover:shadow-lg transition-all">
            Contact Us
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu with enhanced animation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-6 animate-slide-up shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a href="#features" onClick={toggleMenu} className="text-sm font-medium hover:text-dating-primary transition-colors py-2 border-b border-gray-100 flex items-center justify-between">
              Features
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-dating-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#benefits" onClick={toggleMenu} className="text-sm font-medium hover:text-dating-primary transition-colors py-2 border-b border-gray-100 flex items-center justify-between">
              Benefits
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-dating-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#custom-dev" onClick={toggleMenu} className="text-sm font-medium hover:text-dating-primary transition-colors py-2 border-b border-gray-100 flex items-center justify-between">
              Custom Development
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-dating-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#support" onClick={toggleMenu} className="text-sm font-medium hover:text-dating-primary transition-colors py-2 border-b border-gray-100 flex items-center justify-between">
              Support
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-dating-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#faq" onClick={toggleMenu} className="text-sm font-medium hover:text-dating-primary transition-colors py-2 border-b border-gray-100 flex items-center justify-between">
              FAQ
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-dating-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            <Button className="bg-gradient-to-r from-dating-primary to-dating-secondary text-white hover:opacity-90 mt-4 w-full rounded-full shadow-md">
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
