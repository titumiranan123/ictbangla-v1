// components/PlayButton.js
import React from "react";

const PlayButton = () => {
  return (
    <div className="relative flex items-center justify-center h-24 w-24">
      {/* Play Icon */}
      <svg
        className="h-12 w-12 text-red-500 fill-current z-10"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 5v14l11-7z" />
      </svg>

      {/* Circular Animation */}
      <div className="absolute inset-0">
        <svg
          className="h-full w-full stroke-current text-green-500 animate-spin-custom"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            fill="none"
            strokeDasharray="250"
            strokeDashoffset="125"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Optional: Static background circle */}
      <div className="absolute inset-0  rounded-full opacity-60"></div>
    </div>
  );
};

export default PlayButton;
