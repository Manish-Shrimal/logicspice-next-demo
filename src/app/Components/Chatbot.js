// This works fine

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









// "use client";
// import { useEffect } from 'react';

// export default function Chatbot() {
//   useEffect(() => {
//     const onWindowLoad = () => {
//       var Tawk_API = Tawk_API || {};
//       var Tawk_LoadStart = new Date();
//       (function () {
//         const s1 = document.createElement("script");
//         s1.async = true;
//         s1.src = "https://embed.tawk.to/66ed1e29e5982d6c7bb15ccc/1i873rkmf";
//         s1.charset = "UTF-8";
//         s1.setAttribute("crossorigin", "*");
//         const s0 = document.getElementsByTagName("script")[0];
//         s0.parentNode.insertBefore(s1, s0);
//       })();
//     };

//     if (document.readyState === "complete") {
//       onWindowLoad();
//     } else {
//       window.addEventListener("load", onWindowLoad);
//     }

//     return () => {
//       window.removeEventListener("load", onWindowLoad);
//     };
//   }, []);

//   return null;
// }







// old

// "use client";
// import { useEffect, useState } from "react";

// export default function Chatbot() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const loadTawk = () => {
//       if (isLoaded) return; // Prevent multiple executions
//       setIsLoaded(true);

//       const script = document.createElement("script");
//       script.async = true;
//       script.src = "https://embed.tawk.to/66ed1e29e5982d6c7bb15ccc/1i873rkmf";
//       script.charset = "UTF-8";
//       script.setAttribute("crossorigin", "*");
//       document.body.appendChild(script);

//       window.removeEventListener("scroll", loadTawk);
//       window.removeEventListener("click", loadTawk);
//     };

//     // Load Tawk.to only when user scrolls or clicks
//     window.addEventListener("scroll", loadTawk);
//     window.addEventListener("click", loadTawk);

//     return () => {
//       window.removeEventListener("scroll", loadTawk);
//       window.removeEventListener("click", loadTawk);
//     };
//   }, [isLoaded]);

//   return null;
// }

"use client";

import { useEffect } from "react";

const ChatIframe = () => {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === "chatsize") {
        const iframe = document.getElementById("myIframe");
        if (iframe) {
          iframe.style.height = event.data.iframeHeight + 10 + "px";
          iframe.style.width = event.data.iframeWidth + 10 + "px";
        }
      }
    };

    window.addEventListener("message", handleMessage);

    const chatIframe = document.createElement("iframe");
    chatIframe.id = "myIframe";
    chatIframe.style.position = "fixed";
    chatIframe.style.width = "550px";
    chatIframe.style.height = "550px";
    chatIframe.style.zIndex = "1000";
    chatIframe.style.border = "none";
    chatIframe.style.bottom = "0";
    chatIframe.style.right = "0";
    chatIframe.src =
      "https://approchat.com/chat/d144c4e4-c1f4-4465-84af-510a062320a9/?referrer_url=" +
      encodeURIComponent(window.location.href);

    document.body.appendChild(chatIframe);

    return () => {
      window.removeEventListener("message", handleMessage);
      const iframe = document.getElementById("myIframe");
      if (iframe) document.body.removeChild(iframe);
    };
  }, []);

  return null; // No visible component, just the iframe injection
};

export default ChatIframe;
