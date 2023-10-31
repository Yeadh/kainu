import "../styles/style.css";

import "../styles/globals.css";
import "../styles/globals.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
