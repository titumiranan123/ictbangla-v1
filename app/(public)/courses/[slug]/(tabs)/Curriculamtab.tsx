"use client";
import React, { useState } from "react";

const Curriculamtab = () => {
  const [tab, setActive] = useState("live_class");

  return (
    <div>
      <div className="max-w-[325px] mx-auto">
        {/* Buttons */}
        <div className="flex justify-between items-center px-10 mb-2">
          <button
            className={`transition-all duration-300 text-[16px] md:text-[18px] ${
              tab === "live_class"
                ? "text-green-600 font-semibold"
                : "text-gray-500 font-semibold"
            }`}
            onClick={() => setActive("live_class")}
          >
            লাইভ ক্লাস
          </button>
          <button
            className={`transition-all duration-300 md:text-[18px] ${
              tab === "recorded_class"
                ? "text-green-600 font-semibold"
                : "text-gray-500 font-semibold"
            }`}
            onClick={() => setActive("recorded_class")}
          >
            রেকর্ডেড ক্লাস
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
                tab === "live_class" ? "translateX(0%)" : "translateX(42%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Curriculamtab;
