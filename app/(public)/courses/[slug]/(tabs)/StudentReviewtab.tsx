"use client";
import React, { useState } from "react";

const StudentReviewTab = () => {
  const [tab, setActive] = useState("text");

  return (
    <div>
      <div className="max-w-[825px] mx-auto">
        {/* Buttons */}
        <div className="flex justify-between gap-10 items-center w-full px-10 mb-2">
          <button
            className={`transition-all cursor-pointer duration-300 text-[16px] md:text-[18px] ${
              tab === "text"
                ? "text-green-600 font-semibold"
                : "text-gray-500 font-semibold"
            }`}
            onClick={() => setActive("text")}
          >
            শিক্ষার্থীদের মতামত
          </button>
          <button
            className={`transition-all duration-300 cursor-pointer md:text-[18px] ${
              tab === "video"
                ? "text-green-600 font-semibold"
                : "text-gray-500 font-semibold"
            }`}
            onClick={() => setActive("video")}
          >
            সাফল্যের ভিডিও
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden ">
          <div
            className={`h-full bg-green-600 rounded-full transition-all duration-500 ease-in-out ${
              tab === "text" ? "w-1/2" : "w-full translate-x-1/2"
            }`}
            style={{
              width: "50%",
              transform: tab === "text" ? "translateX(0%)" : "translateX(50%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StudentReviewTab;
