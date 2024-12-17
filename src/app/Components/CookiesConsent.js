"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CookiesConsent = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Here");
      const cookieAccepted = localStorage.getItem("cookieAccepted");
      if (cookieAccepted !== "yes") {
        console.log("Cookie not accepted");
        setIsActive(true);
        console.log(isActive);
      } else {
        setIsActive(false);
      }
    }
  }, [pathname]); // Re-run this effect whenever the route changes
  
  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "yes");
    setIsActive(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieAccepted", "no");
    setIsActive(false);
  };

  return (
    isActive && (
      <div className="CookiePolicySection cookie-consent-modal active">
        <div className="CookiePolicySectionClose">
          <a href="#" className="closesection" onClick={handleDecline}>
            <img src="/img/cookie-close.png" alt="Close" />
          </a>
        </div>
        <div className="container-home content">
          <div className="CookiePolicyBx ContentTxt">
            <h3>Cookies Policy</h3>
            <p>
              Improve your online experience by utilizing cookies on our
              website. Gain a deeper understanding of our practices regarding
              the use of cookies for enhancing your browsing journey.{" "}
              <a
                href="/cookies-policies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore more details
              </a>{" "}
              about how we leverage cookies to optimize your interaction with
              our website.
            </p>
          </div>
          <div className="CookiePolicyBtnBx btns">
            <button className="btn accept" onClick={handleAccept}>
              Accept Cookies
            </button>
            <button className="btn cancel" onClick={handleDecline}>
              Decline
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookiesConsent;
