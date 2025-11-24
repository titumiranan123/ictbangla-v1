"use client";
import React, { useState } from "react";

const Askingtab = () => {
  const [tab, setActive] = useState("live_class");

  return (
    <div className="max-w-[425px] mx-auto">
      {/* Buttons */}
      <div className="flex justify-between items-center px-10 mb-2">
        <button
          className={`transition-all duration-300 ${
            tab === "live_class"
              ? "text-green-600 font-semibold"
              : "text-gray-500 font-semibold"
          }`}
          onClick={() => setActive("live_class")}
        >
          সচরাচর জিজ্ঞাসা
        </button>
        <button
          className={`transition-all duration-300 ${
            tab === "recorded_class"
              ? "text-green-600 font-semibold"
              : "text-gray-500 font-semibold"
          }`}
          onClick={() => setActive("recorded_class")}
        >
          পেমেন্ট জিজ্ঞাসা
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-green-600 rounded-full transition-all duration-500 ease-in-out ${
            tab === "live_class" ? "w-1/2" : "w-full translate-x-1/2"
          }`}
          style={{
            width: "50%",
            transform:
              tab === "live_class" ? "translateX(0%)" : "translateX(50%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Askingtab;
