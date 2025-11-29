import IconImage from "@/app/(public)/(additional pages)/about-us/iconImages";
import React from "react";

const Searchcomponent = () => {
  return (
    <div className="animate-strokes  duration-400 transition-all mx-auto w-[268px] h-[46px] flex justify-center items-center rounded-[8px] overflow-hidden  z-20 p-[1px] cursor-pointer relative">
      <style>
        {`
      @keyframes spin-slow {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      .coursesbg {
        background: conic-gradient(from 180deg at 50% 50%, #29AE48 0%, rgba(17, 72, 30, 0) 100%);

      }
      .animate-strokes {
        position: relative;
        background: transparent;
        border-radius: 8px;
        
      }
      .animate-strokes::before {
        content: '';
        position: absolute;
margin-left:-4px;
        padding:1px;
        width:280px; 
        height:280px;
        background: conic-gradient(from 180deg at 50% 50%, #29AE48 0%, rgba(17, 72, 30, 0) 100%);
        animation: spin-slow 16s linear infinite;

      }
    `}
      </style>

      <div className=" relative   w-[268px]">
        <label className="absolute top-2.5 left-4 " htmlFor="headerSearch">
          <IconImage fileName="searchicon.gif" />
        </label>
        <input
          className="bg-[#F3F4F6]  w-full rounded-lg py-2.5 pl-[50px] border-0 outline-0  focus:outline-2 focus:outline-b-0 outline-primary text-[#8A8A8A] placeholder:text-[#8A8A8A]"
          placeholder="কোর্স সার্চ করুন"
          type="text"
          id="headerSearch"
        />
      </div>
    </div>
  );
};

export default Searchcomponent;
