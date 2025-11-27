/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React from "react";

const WhichYoulearn = ({ tools }: { tools: any }) => {
  return (
    <div className="max-w-[360px] w-full  bg-[#F3F4F6] rounded-[16px] text-white flex flex-col justify-center p-6 mt-4">
      <h2 className="text-[18px] text-primary font-[700]">
        যে সকল সফ্টোয়ার শিখবেন
      </h2>
      {tools.map((tl: any, idx: number) => (
        <div
          key={idx}
          className="border rounded-lg mt-2 border-primary px-2 py-1 flex justify-start items-center gap-3 w-[238px] h-[40px] "
        >
          <Image
            src={`${tl.icon}`}
            alt={`${tl.titl}`}
            width={24}
            height={24}
            className="w-[24px] h-[24px]"
          />
          <h3 className="text-textPrimary text-[16px] font-[600] ">
            {tl?.titl}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default WhichYoulearn;
