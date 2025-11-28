"use client";
import React from "react";

const Askingtab = ({
  isActive,
  setActive,
}: {
  isActive: boolean;
  setActive: (p: boolean) => void;
}) => {
  return (
    <div className="max-w-[425px] mx-auto">
      {/* Buttons */}
      <div className="flex justify-between items-center px-10 mb-2">
        <button
          className={`transition-all duration-300 ${
            isActive
              ? "text-green-600 font-semibold"
              : "text-gray-500 font-semibold"
          }`}
          onClick={() => setActive(true)}
        >
          সচরাচর জিজ্ঞাসা
        </button>
        <button
          className={`transition-all duration-300 ${
            isActive
              ? "text-green-600 font-semibold"
              : "text-gray-500 font-semibold"
          }`}
          onClick={() => setActive(false)}
        >
          পেমেন্ট জিজ্ঞাসা
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-green-600 rounded-full transition-all duration-500 ease-in-out ${
            isActive ? "w-1/2" : "w-full translate-x-1/2"
          }`}
          style={{
            width: "50%",
            transform: isActive ? "translateX(0%)" : "translateX(100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Askingtab;
