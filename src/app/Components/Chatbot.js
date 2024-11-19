//This works fine

// "use client"
// import { useEffect } from 'react';
// import Script from 'next/script';

// export default function Chatbot() {
// useEffect(() => {
//     var Tawk_API = Tawk_API || {},
//       Tawk_LoadStart = new Date();
//     (function () {
//       var s1 = document.createElement("script"),
//         s0 = document.getElementsByTagName("script")[0];
//       s1.async = true;
//       s1.src = "https://embed.tawk.to/66ed1e29e5982d6c7bb15ccc/1i873rkmf";
//       s1.charset = "UTF-8";
//       s1.setAttribute("crossorigin", "*");
//       s0.parentNode.insertBefore(s1, s0);
//     })();
//   }, []); // Empty dependency array to run once on mount

//   return (
//     <>
      
      
//     </>
//   );
// }


"use client"
import { useEffect } from 'react';

export default function Chatbot() {
  useEffect(() => {
    // Function to load Tawk chat script after full page load
    const loadChatScript = () => {
      var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();
      (function () {
        var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = "https://embed.tawk.to/66ed1e29e5982d6c7bb15ccc/1i873rkmf";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode.insertBefore(s1, s0);
      })();
    };

    // Add load event listener to trigger after full page load
    window.addEventListener('load', loadChatScript);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('load', loadChatScript);
  }, []);

  return null; // No direct render output needed for the chat script
}
