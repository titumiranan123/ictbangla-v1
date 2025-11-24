import React from "react";
import { FaArrowDown } from "react-icons/fa";

const RadioWaves = () => {
  return (
    <div className=" flex items-center justify-center  ">
      {/* Static Circle */}
      <div className="w-16 h-16  relative  rounded-full z-10 flex justify-center items-center" />
      <div className="relative h-20 w-full">
        <a style={{zIndex:999999}} href="#target" className="cursor-pointer absolute top-1/2 left-[0%] transform -translate-x-1/2 -translate-y-1/2">
          <FaArrowDown className="text-[#28AD48] text-2xl" />
        </a>
      </div>
      {/* Animated Wave Rings */}

      <div className="wave-ring w-16 h-16" />
      <div className="wave-ring w-16 h-16" />
      <div className="wave-ring w-16 h-16" />
      <div className="wave-ring w-16 h-16" />
      <div className="wave-ring w-16 h-16" />
    </div>
  );
};

export default RadioWaves;
