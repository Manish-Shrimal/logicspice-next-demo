import { useEffect } from "react";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Custom _app.js is loaded on the client side");
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;



