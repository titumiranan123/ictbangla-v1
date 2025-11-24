// ScrollProgress.tsx
"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / windowHeight) * 100;
      setShowButton(window.scrollY > 100);
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (scrollPercent / 100) * circumference;

  return showButton ? (
    <div className="fixed bottom-3 left-6 z-50">
      <svg
        className="lg:w-14 lg:h-14 w-10 h-10 cursor-pointer rotate-[-90deg]"
        viewBox="0 0 60 60"
        onClick={scrollToTop}
      >
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#22C55E"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fa472f" />
            <stop offset="100%" stopColor="#fa472f" />
          </linearGradient>
        </defs>
        <foreignObject x="20" y="20" width="20" height="20">
          <div className="flex justify-center items-center h-full w-full">
            <FaArrowUp className="text-red-500 rotate-[90deg]" />
          </div>
        </foreignObject>
      </svg>
    </div>
  ) : null;
};

export default ScrollProgress;
