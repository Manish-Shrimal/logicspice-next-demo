"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import "../aos.css";

const AOSInitializer = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return children;
};

export default AOSInitializer;