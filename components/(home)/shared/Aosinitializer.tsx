"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Aosinitializer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Smooth animation timing
      easing: "ease-in-out", // Makes the animation smoother
      once: true,
      offset: 20,
    });
  }, []);
  return null;
};

export default Aosinitializer;
